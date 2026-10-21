__d("WAWebProductCatalogGetLatestProduct", [
    "WAWebCatalogCollection",
    "WAWebWidFactory"
], function(t, n, r, o, a, i, l) {
    function e({ businessOwnerJid, msgT, productId }) {
        const a = o("WAWebWidFactory").createWid(businessOwnerJid);
        if (a) {
            const i = o("WAWebCatalogCollection").CatalogCollection.get(a);
            if (i) {
                const l = i.productCollection.get(productId);
                const s = i.msgProductCollection.get(productId);
                if (s && l) {
                    const u = msgT ?? s.t;
                    if (l.t >= u) {
                        i.msgProductCollection.remove(s);
                        return l;
                    }
                    return s;
                }
                return l || s;
            }
        }
    }
    l.default = e;
}, 98);