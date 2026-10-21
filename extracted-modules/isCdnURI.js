__d("isCdnURI", [], function(t, n, r, o, a, i) {
    "use strict";
    function e(e) {
        if (e.getProtocol() !== "http" && e.getProtocol() !== "https") {
            return false;
        }
        const t = Number(e.getPort());
        if (t && t !== 80 && t !== 443) {
            return false;
        }
        return e.isSubdomainOfDomain("fbcdn.net");
    }
    i.default = e;
}, 66);