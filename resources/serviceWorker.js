const prefix = "[Service Worker]";

self.addEventListener('install', () => {
    log("Install");
});


self.addEventListener('fetch', (event) => {
    log(`fetch ${event.request}`);
    return fetch(event.request);
});


self.addEventListener('message', (event) => {
    switch (event.type) {

        case "cacheCheck":

            if (event.payload.localStorage) {
                fetch("/manifest.json").then((response) => {
                    let json = response.json();
                    log(`manifest : ${json}`);

                    if (json.type === "beta"){
                        return;
                    }

                    if (event.payload.localStorage.getItem("manifest") && event.payload.localStorage.getItem("manifest") !== "") {
                        let prevManifest = JSON.parse(event.payload.localStorage.getItem("manifest"));
                        log(`prevManifest : ${prevManifest}`);

                        if ((prevManifest.type === "beta" && json.type !== "beta") || (json.version >  prevManifest.version)) {
                            event.payload.localStorage.setItem("manifest", JSON.stringify(json));


                        }
                    } else {
                        event.payload.localStorage.setItem("manifest", JSON.stringify(json))
                    }

                });
            }
            break
    }
});


function log(text) {
    console.log(`${prefix}: ${text}`)
}