__d("WAWebBizDeleteProductFromCartAction", [
    "WAWebBizCartBridge",
    "WAWebCartCollection",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = o("WAWebCartCollection").CartCollection.findCart(e);
            const n_cartItemCollection = n.cartItemCollection;
            n_cartItemCollection.remove(t);
            n.trigger("change:cartItemCollection");
            yield o("WAWebBizCartBridge").updateCart(n);
        });
        return s.apply(this, arguments);
    }
    l.default = e;
}, 98);