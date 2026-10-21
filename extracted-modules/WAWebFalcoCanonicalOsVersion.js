__d("WAWebFalcoCanonicalOsVersion", [
    "WAWebBrowserApi",
    "WAWebBrowserInfo",
    "WAWebEnvironment"
], function(t, n, r, o, a, i, l) {
    function e() {
        let e;
        const t = r("WAWebBrowserInfo")().version || null;
        if (r("WAWebEnvironment").isWindows && (e = o("WAWebBrowserApi").getOsVersionOverride()) != null) {
            return e;
        }
        return t;
    }
    l.default = e;
}, 98);