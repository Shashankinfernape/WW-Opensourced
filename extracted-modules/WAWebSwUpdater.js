__d("WAWebSwUpdater", [
    "Promise",
    "WALogger",
    "WAWebBuildConstants",
    "WAWebUpdaterDownloadStateType",
    "WAWebUpdaterVersion"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    function p() {
        o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "[sw] update starts. Current app version: ",
            ""
        ])), String(new (o("WAWebUpdaterVersion")).Version(o("WAWebBuildConstants").VERSION_BASE)));
        const navigator_serviceWorker = navigator.serviceWorker;
        if (navigator_serviceWorker) {
            return navigator_serviceWorker.ready.then((e)=>new (m || (m = n("Promise")))(function(n) {
                    function a(e) {
                        l();
                        o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                            "Unable to update service worker to version. Error: ",
                            ""
                        ])), String(e)).sendLogs(`[sw] sw-update-failed: ${String(e)}`, {
                            sampling: 0.1
                        });
                    }
                    function i() {
                        o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                            "[sw] updated"
                        ])));
                        l();
                        n(o("WAWebUpdaterDownloadStateType").DownloadState.UPDATE_DOWNLOADED);
                    }
                    function l() {
                        navigator_serviceWorker.removeEventListener("error", a);
                        navigator_serviceWorker.removeEventListener("controllerchange", i);
                    }
                    navigator_serviceWorker.addEventListener("error", a);
                    navigator_serviceWorker.addEventListener("controllerchange", i);
                    if (e.active?.scriptURL?.includes("serviceworker.js")) {
                        e.unregister();
                    } else {
                        e.update().then(()=>{
                            if (!e.installing) {
                                o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                                    "[sw] update is not available"
                                ])));
                                n(o("WAWebUpdaterDownloadStateType").DownloadState.UPDATE_NOT_AVAILABLE);
                            }
                        }).catch((e)=>{
                            a(e);
                            n(o("WAWebUpdaterDownloadStateType").DownloadState.ERROR);
                        });
                    }
                })).catch((e)=>{
                o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "Unable to update serviceworker, error: ",
                    ""
                ])), e).sendLogs("sw-update-failed");
                return o("WAWebUpdaterDownloadStateType").DownloadState.ERROR;
            });
        }
        return (m || (m = n("Promise"))).resolve(o("WAWebUpdaterDownloadStateType").DownloadState.ERROR);
    }
    l.updateSw = p;
}, 98);