package filehosting

import (
	"os"
	"log"
	"github.com/valyala/fasthttp"
	"strings"
	"io/ioutil"
	"encoding/json"
	"github.com/qiangxue/fasthttp-routing"
	"strconv"
	"hash/fnv"
)

var (
	webContentPath = ""
	allowedTypes = []string{"css", "js", "png", "jpg", "svg", "jpeg", "ico"}

	eTags = map[string]uint32{}
	cacheAge = "1"
)


func GetFileHostingHandler(contentPath string) func(ctx *fasthttp.RequestCtx) {
	webContentPath   = contentPath + "/"

	route := routing.New()
	route.Get("/*", func(c *routing.Context) error {
		if c.Request.Header.Peek("If-None-Match") != nil {
			return CacheRevalidationControl(c)
		} else {
			return DefaultHandler(c)
		}
	})
	route.NotFound(DefaultHandler)
	//route.Get("/proxy", ProxyHandler)

	//InitManifest()

	InitETags()

	return route.HandleRequest
}


func DefaultHandler(c *routing.Context) error {
	url := c.URI().String()
	//log.Println(url)

	if strings.Contains(url, "://") && strings.Contains(url, "/") {
		url = string([]byte(url)[strings.Index(url, "://") + len("://") + 1:])
		url = string([]byte(url)[strings.Index(url, "/") + len("/"):])
		path := ""
		isAllowed := false

		if url == "" || !strings.Contains(url, ".") {
			c.Response.Header.Add("Cache-Control", "public, max-age=" + cacheAge + " must-revalidate")
			c.Response.Header.Add("ETag", "\"" +  strconv.FormatUint(uint64(eTags[webContentPath + "index.html"]), 10) + "\"")
			c.SendFile(webContentPath + "index.html")
			return nil
		}

		for _, val := range allowedTypes {
			if strings.Contains(url, "." + val) {
				isAllowed = true
				break
			}
		}

		if isAllowed {
			path = webContentPath + url
			log.Println(path)

			if _, err := os.Stat(path); os.IsNotExist(err) {
				c.NotFound()
				return nil
			} else {
				c.SendFile(path)
				if !strings.Contains(url, ".svg") {
					//c.Response.Header.Add("Cache-Control", "no-cache, no-store, must-revalidate")
					c.Response.Header.Add("Cache-Control", "public, max-age=" + cacheAge +" must-revalidate")
				} else {
					c.Response.Header.Add("Cache-Control", "public, max-age=31536000")
				}
				c.Response.Header.Add("ETag", "\"" +  strconv.FormatUint(uint64(eTags[path]), 10) + "\"")

				return nil
			}

		} else {
			c.NotFound()
			return nil
		}

	} else {
		c.NotFound()
		return nil
	}
}


func CacheRevalidationControl(c *routing.Context) error {
	header := string(c.Request.Header.Peek("If-None-Match"))
	header = strings.Replace(header, "\"", "", -1)

	hash, err := strconv.ParseUint(header, 10, 32)
	if err != nil {
		return err
	}

	url := c.URI().String()
	if strings.Contains(url, "://") && strings.Contains(url, "/") {
		url = string([]byte(url)[strings.Index(url, "://") + len("://") + 1:])
		url = string([]byte(url)[strings.Index(url, "/") + len("/"):])
		path := ""

		if url == "" || !strings.Contains(url, ".") {
			path = webContentPath + "index.html"

			if eTags[path] != uint32(hash) {
				c.SendFile(path)
			} else {
				c.SetStatusCode(fasthttp.StatusNotModified)
			}

			return nil
		}

		path = webContentPath + url
		if _, err := os.Stat(path); os.IsNotExist(err) {
			c.NotFound()
			return nil
		} else {
			c.SendFile(path)
			if eTags[path] != uint32(hash) {
				c.SendFile(path)
			} else {
				c.SetStatusCode(fasthttp.StatusNotModified)
			}
			return nil
		}

	} else {
		c.NotFound()
		return nil
	}

	return nil
}
 

func InitETags() {
	var handlerDir func(dirPath string)
	handlerDir = func(dirPath string) {
		files, err := ioutil.ReadDir(dirPath)
		if err != nil {
			log.Println(err)
			return
		}

		for _, file := range files {

			if file.IsDir() {
				handlerDir(dirPath + file.Name() + "/")
			} else if !strings.Contains(file.Name(), "fasthttp.gz") {
				name := dirPath + file.Name()

				data, err := ioutil.ReadFile(name)
				if err != nil {
					log.Println("while reading file", name, "occured error:", err)
					break
				}

				h := fnv.New32a()
				h.Write(data)

				eTags[name] = h.Sum32()
			}
		}
	}

	handlerDir(webContentPath)
}


func InitManifest() {
	log.Println(webContentPath + "manifest.json")

	if _, err := os.Stat(webContentPath + "manifest.json"); !os.IsNotExist(err) {
		log.Println("manifest found")

		rawData, err := ioutil.ReadFile(webContentPath + "manifest.json")
		if err != nil {
			log.Println(err)
			return
		}

		var parsedData map[string]interface{}
		err = json.Unmarshal(rawData, &parsedData)
		if err != nil {
			log.Println(err)
			return
		}

		resources := make([]string, 0)

		var handlerDir func(dirPath string)
		handlerDir = func(dirPath string) {
			files, err := ioutil.ReadDir(dirPath)
			if err != nil {
				log.Println(err)
				return
			}

			for _, file := range files {

				if file.IsDir() {
					handlerDir(dirPath + file.Name() + "/")
				} else if file.Name() != "manifest.json" && file.Name() != "serviceWorker.js" &&
					!strings.Contains(file.Name(), "fasthttp.gz") {

					var name string

					if file.Name() == "index.html" {
						name = "/"
					} else {
						name = dirPath + file.Name()
						name = strings.Replace(name, webContentPath, "/", 1)
					}

					resources = append(resources, name)
				}
			}
		}

		handlerDir(webContentPath)
		parsedData["resources"] = resources
		//parsedData["trustedExternalResources"] = trustedExternalResources

		rawData, err = json.Marshal(parsedData)
		if err != nil {
			log.Println(err)
			return
		}

		err = ioutil.WriteFile(webContentPath + "manifest.json", rawData, 0644)
		if err != nil {
			log.Println(err)
			return
		}

		log.Println("end")
	} else {
		log.Println("manifest not found")
	}
}