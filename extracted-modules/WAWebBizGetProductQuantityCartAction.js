__d("WAWebBizGetProductQuantityCartAction", [
    "WAWebCartCollection"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        const r = t.toString();
        const a = o("WAWebCartCollection").CartCollection.findCart(r);
        const i = a.cartItemCollection.get(e);
        return i?.quantity ?? 0;
    }
    l.default = e;
}, 98);