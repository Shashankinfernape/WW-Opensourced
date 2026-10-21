__d("WAWebWamResourceLoadReporter", [
    "WALogger",
    "WAWebWebcResourceLoadWamEvent"
], function(t, n, r, o, a, i, l) {
    let e;
    function s() {
        const n = window.performance?.timing;
        if (!(n && window.performance.getEntriesByType)) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "logResourceLoads: browser metrics unavailable"
            ])));
            return;
        }
        const webcResourceCached = window.performance.timing.fetchStart === window.performance.timing.domainLookupEnd;
        const a = window.performance.getEntriesByType("resource");
        const i = document.createElement("a");
        a.forEach((e)=>{
            if (e.initiatorType !== "xmlhttprequest") {
                i.href = e.name;
                new (o("WAWebWebcResourceLoadWamEvent")).WebcResourceLoadWamEvent({
                    webcResourceName: i.pathname + i.search + i.hash,
                    webcResourceDuration: Math.round(e.duration),
                    webcResourceCached
                }).commit();
            }
        });
    }
    l.default = s;
}, 98);