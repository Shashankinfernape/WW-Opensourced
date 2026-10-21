__d("WAWebProductCatalogContext", [
    "WAWebProductCatalogSession",
    "WAWebWamEnumBizPlatform"
], function(t, n, r, o, a, i, l) {
    function e(e = new (o("WAWebProductCatalogSession")).ProductCatalogSession, bizPlatform = o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.UNKNOWN, entryPoint) {
        return {
            type: "product_catalog",
            session: e,
            entryPoint,
            bizPlatform
        };
    }
    function s() {
        return e(new (o("WAWebProductCatalogSession")).ProductCatalogSession(true));
    }
    function u(e) {
        return c(e).session.toString();
    }
    function c(e) {
        if (e.type === "product_catalog") {
            return e;
        }
        return s();
    }
    function d(e) {
        return {
            catalogSessionId: e.session.toString(),
            bizPlatform: e.bizPlatform,
            catalogEntryPoint: e.entryPoint
        };
    }
    l.buildProductCatalogContext = e;
    l.getProductCatalogSessionId = u;
    l.getProductCatalogContext = c;
    l.toDataForCatalogViewEvents = d;
}, 98);