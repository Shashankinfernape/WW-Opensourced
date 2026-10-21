__d("WAWebCartGetters", [
    "WAWebGetters",
    "WAWebGettersCaches"
], function(t, n, r, o, a, i, l) {
    const e = o("WAWebGetters").createGetterFactories({
        createCache: o("WAWebGettersCaches").createCartCache
    });
    const e_field = e.field;
    const u = e_field("itemCount");
    l.getCartItemCount = u;
}, 98);