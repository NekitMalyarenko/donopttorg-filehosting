package donopttorg_filehosting

import (
	"os"
	"log"
	"github.com/valyala/fasthttp"
	"strings"
)

var (
	webContentPath = ""
	allowedTypes = []string{"css", "js", "png", "jpg", "svg", "jpeg"}
)


func GetFileHostingHandler(contentPath string) func(ctx *fasthttp.RequestCtx) {
	webContentPath = contentPath + "/"
	return Handler
}


func Handler(ctx *fasthttp.RequestCtx) {
	url := ctx.URI().String()
	log.Println(url)

	if strings.Contains(url, "://") && strings.Contains(url, "/") {
		url = string([]byte(url)[strings.Index(url, "://") + len("://") + 1:])
		url = string([]byte(url)[strings.Index(url, "/") + len("/"):])
		path := ""
		isAllowed := false

		if url == "" || !strings.Contains(url, ".") {
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