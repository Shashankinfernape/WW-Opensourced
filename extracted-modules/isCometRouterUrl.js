__d("isCometRouterUrl", [
    "ConstUriUtils",
    "Env",
    "isFacebookURI",
    "isLinkshimURI",
    "justknobx",
    "memoizeStringOnly",
    "uriIsRelativePath"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = (t)=>t === "/l.php" || t.startsWith("/si/ajax/l/") || t.startsWith("/l/") || t.startsWith("l/");
    const u = (t)=>{
        const e = t.getDomain();
        if (e == null) {
            return false;
        }
        return r("isFacebookURI")(t) && e.startsWith("www");
    };
    const c = /^(\/\w)/;
    const d = r("memoizeStringOnly")(function(t) {
        if (t == null || t.startsWith("#") || !o("ConstUriUtils").isValidUri(t)) {
            return false;
        }
        const n = o("ConstUriUtils").getUri(t);
        if (n == null) {
            return false;
        }
        if (!s(n.getPath()) && c.test(t)) {
            return true;
        }
        if (r("isLinkshimURI")(n)) {
            return false;
        }
        if (r("justknobx")._("1417") && r("uriIsRelativePath")(n)) {
            return true;
        }
        const a = o("ConstUriUtils").getUri(window.location.href);
        const i = a ? n.isSameOrigin(a) || r("uriIsRelativePath")(n) : false;
        const l = (!!(e || (e = r("Env"))).isStoryGallery || !!(e || (e = r("Env"))).isAdsPreviewTool) && u(n);
        return i || l;
    });
    l.default = d;
}, 98);