package donopttorg_filehosting

import (
	"os"
	"log"
	"github.com/valyala/fasthttp"
	"strings"
)

const (
	defaultPort    = "8080"
	webContentPath = "resources/"
)

var (
	allowedTypes = []string{"css", "js", "png", "jpg", "svg", "jpeg"}
)


func Start() {
	fasthttp.ListenAndServe(GetPort(), Handler)
}


func Handler(ctx *fasthttp.RequestCtx) {
	url := ctx.URI().String()
	log.Println(url)

	if strings.Contains(url, "://") && strings.Contains(url, "/") {
		url = string([]byte(url)[strings.Index(url, "://") + len("://") + 1:])
		url = string([]byte(url)[strings.Index(url, "/") + len("/"):])
		path := ""
		isAllowed := false

		if url == "" {
			ctx.SendFile(webContentPath + "index.html")
			return
		}

		for _, val := range allowedTypes {
			if strings.Contains(url, "." + val) {
				isAllowed = true
				break
			}
		}

		if isAllowed {
			path = webContentPath + url

			if _, err := os.Stat(path); os.IsNotExist(err) {
				ctx.NotFound()
			} else {
				ctx.SendFile(path)
				ctx.Response.Header.Add("Cache-Control", "no-cache, no-store, must-revalidate")
			}

		} else {
			ctx.NotFound()
		}

	} else {
		ctx.NotFound()
	}
}


func GetPort() string {
	port := os.Getenv("PORT")
	if port == "" {
		port = defaultPort
	}

	return ":" + port
}