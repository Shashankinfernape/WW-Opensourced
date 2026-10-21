__d("WAWebAttachMenuStrings", [
    "fbt",
    "WAWebOrderGatingUtils"
], function(t, n, r, o, a, i, l, s) {
    function e() {
        return s._("Catalogue");
    }
    function u() {
        return s._("Document");
    }
    function c() {
        if (o("WAWebOrderGatingUtils").isOrderContentOptimizationEnabled()) {
            return s._("Charge");
        }
        return s._("Order");
    }
    l.CatalogText = e;
    l.DocumentText = u;
    l.OrderText = c;
}, 226);