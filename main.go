package main

import (
	"log"
	"github.com/valyala/fasthttp"
	"os"
	"github.com/NekitMalyarenko/donopttorg-filehosting/filehosting"
	"io/ioutil"
	"encoding/json"
)

const (
	envConfigFile = "env.json"
	webContent    = "resources"
)

func main() {
	setSystemEnv()
	handler := filehosting.GetFileHostingHandler(webContent)
	log.Println(fasthttp.ListenAndServe(getPort(os.Getenv("fileHostingPort")), handler))
}


func setSystemEnv() {
	if _, err := os.Stat(envConfigFile); !os.IsNotExist(err) {
		file, _  := os.Open(envConfigFile)
		raw, err := ioutil.ReadAll(file)
		if err != nil {
			log.Fatal(err)
		}

		data := map[string]string{}
		err = json.Unmarshal(raw, &data)
		if err != nil {
			log.Fatal(err)
		}

		for k, v := range data {
			os.Setenv(k, v)
		}
	}
}

func getPort(defaultPort string) string {
	if os.Getenv("PORT") == "" {
		return defaultPort
	} else {
		return ":" + os.Getenv("PORT")
	}
}