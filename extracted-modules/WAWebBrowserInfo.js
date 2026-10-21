__d("WAWebBrowserInfo", [
    "WAWebUA"
], function(t, n, r, o, a, i, l) {
    function e() {
        const e = s();
        return {
            os: e.os.name,
            version: e.os.version,
            name: e.browser.name,
            ua: `${e.browser.name} ${e.browser.version}`
        };
    }
    function s() {
        const e = o("WAWebUA").UA.parser.getResult();
        if (e != null && e.browser.name === "Chrome") {
            const n = self.navigator;
            const r = n?.userAgentData?.brands;
            if (r != null) {
                const a = r.some((e)=>e.brand === "Microsoft Edge");
                if (a) {
                    e.browser.name = "Edge";
                }
            }
        }
        return e;
    }
    l.default = e;
}, 98);