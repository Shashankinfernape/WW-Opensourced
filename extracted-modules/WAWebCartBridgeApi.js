__d("WAWebCartBridgeApi", [
    "WAWebApiHydrateWidsUtil",
    "WAWebCartCollection",
    "WAWebSchemaCart"
], function(t, n, r, o, a, i, l) {
    const e = {
        restoreCarts: function() {
            return o("WAWebSchemaCart").getCartTable().all().then((e)=>{
                o("WAWebCartCollection").CartCollection.initializeFromCache(o("WAWebApiHydrateWidsUtil").hydrateWids(e));
            });
        }
    };
    l.CartBridgeApi = e;
}, 98);