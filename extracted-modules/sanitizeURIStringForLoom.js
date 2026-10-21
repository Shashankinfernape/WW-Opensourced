__d("sanitizeURIStringForLoom", [
    "WebLoomStaticResourceFileTypes"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = new Map;
    let s = 0;
    const u = /(\d{4,})/gm;
    const c = /([a-f0-9]{8,})/gm;
    function d(e) {
        const t = e.replace(u, "{N}");
        return t.replace(c, "{N}");
    }
    function m(e) {
        const t = e.getPath();
        const n = t.lastIndexOf(".");
        if (n === -1) {
            return "";
        }
        return t.substring(n + 1);
    }
    function p() {
        return s++;
    }
    function _(e) {
        if (e.getProtocol() !== "http" && e.getProtocol() !== "https") {
            return false;
        }
        const t = Number(e.getPort());
        if (t && t !== 80 && t !== 443) {
            return false;
        }
        return !!e.isSubdomainOfDomain("fbcdn.net");
    }
    function f(e, t) {
        const n = new t.URI(e);
        const r = m(n);
        n.setQueryString("");
        n.setFragment("");
        if (r === "" || r === "php" || r === "ico") {
            const a = d(n.getPath());
            if (a !== n.getPath()) {
                n.setPath(`${a}/sanitized-${p()}`);
            }
        } else {
            if (!o("WebLoomStaticResourceFileTypes").isStaticResourceFileType(r)) {
                n.setPath(`/sanitized${_(n) ? "-cdn" : ""}-${p()}.${r}`);
            }
        }
        return n.toString();
    }
    function g(t, n) {
        if (n.isBrowser("IE")) {
            return "";
        }
        if (!e.has(t)) {
            e.set(t, f(t, n));
        }
        return e.get(t) || "";
    }
    l.default = g;
}, 98);