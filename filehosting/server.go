package filehosting

import (
	"os"
	"log"
	"github.com/valyala/fasthttp"
	"strings"
	"io/ioutil"
	"encoding/json"
	"github.com/qiangxue/fasthttp-routing"
	"net/http"
	"bytes"
	"strconv"
)

var (
	webContentPath = ""
	allowedTypes = []string{"css", "js", "png", "jpg", "svg", "jpeg", "ico"}

	proxyContentPath = ""
	proxyData = map[string]string{}
	trustedExternalResources = []string{"https://donopttorg-api.herokuapp.com", "https://fonts.googleapis.com", "https://kit.fontawesome.com"}
)


func GetFileHostingHandler(contentPath string) func(ctx *fasthttp.RequestCtx) {
	webContentPath   = contentPath + "/"
	proxyContentPath = contentPath + "/proxyContent/"

	os.Mkdir(proxyContentPath, os.ModePerm)

	route := routing.New()
	route.NotFound(DefaultHandler)
	route.Get("/proxy", ProxyHandler)

	InitManifest()

	return route.HandleRequest
}


func ProxyHandler(c *routing.Context) error {
	if c.Request.URI().QueryArgs().Peek("url") == nil || len(c.Request.URI().QueryArgs().Peek("url")) == 0 {
		c.Error("url is empty", http.StatusBadRequest)
		return nil
	}

	url := string(c.Request.URI().QueryArgs().Peek("url"))

	for k, v := range proxyData {
		if k == url {
			c.SendFile(v)
			c.Response.Header.Add("Cache-Control", "no-cache, no-store, must-revalidate")
			return nil
		}
	}

	fileName := proxyContentPath + strconv.Itoa(len(proxyData)) + ".txt"

	req, err := http.NewRequest("GET", url, bytes.NewBuffer([]byte{}))
	if err != nil {
		log.Println(err)
		c.Error("can't load resource", http.StatusInternalServerError)
		return nil
	}

	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		log.Println(err)
		c.Error("can't load resource", http.StatusInternalServerError)
		return nil
	}
	defer resp.Body.Close()

	body, _ := ioutil.ReadAll(resp.Body)

	file, err := os.Create(fileName)
	if err != nil {
		log.Println(err)
		c.Error("can't load resource", http.StatusInternalServerError)
		return nil
	}
	file.Close()

	err = ioutil.WriteFile(fileName, body, 0644)
	if err != nil {
		log.Println(err)
		c.Error("can't load resource", http.StatusInternalServerError)
		return nil
	}

	proxyData[url] = fileName

	c.Write(body)
	c.Response.Header.Add("Cache-Control", "no-cache, no-store, must-revalidate")
	return nil
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
					c.Response.Header.Add("Cache-Control", "no-cache, no-store, must-revalidate")
				}

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