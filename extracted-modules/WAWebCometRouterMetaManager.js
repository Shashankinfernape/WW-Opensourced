__d("WAWebCometRouterMetaManager", [
    "WAWebPwaDocumentMetadataUtils"
], function(t, n, r, o, a, i, l) {
    let e = "";
    let s = null;
    function u() {
        const t = s != null ? ` – ${s}` : "";
        o("WAWebPwaDocumentMetadataUtils").setDocumentTitle(`${e}${t}`);
    }
    function c(t) {
        e = t;
        u();
    }
    function d(e) {
        if (s !== e) {
            s = e;
            u();
        }
    }
    l.updateUnreadTitle = c;
    l.updateRouteTitle = d;
}, 98);