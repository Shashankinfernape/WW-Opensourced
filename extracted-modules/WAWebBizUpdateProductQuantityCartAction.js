__d("WAWebBizUpdateProductQuantityCartAction", [
    "WAWebBizCartBridge",
    "WAWebCartCollection",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = e.catalogWid.toString();
            const r = o("WAWebCartCollection").CartCollection.findCart(n);
            const a = r.cartItemCollection.get(e.id);
            a?.set("quantity", t);
            r.trigger("change:cartItemCollection");
            yield o("WAWebBizCartBridge").updateCart(r);
        });
        return s.apply(this, arguments);
    }
    l.default = e;
}, 98);