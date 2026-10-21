__d("WAWebBlocklistBridgeApi", [
    "WAWebApiHydrateWidsUtil",
    "WAWebBlocklistCollection",
    "WAWebSchemaBlocklist",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    const e = {
        replaceBlocklist: function({ wids }) {
            o("WAWebBlocklistCollection").BlocklistCollection.replaceAllWith(wids);
        },
        restoreBlocklist: (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const e = yield o("WAWebSchemaBlocklist").getBlocklistTable().all();
                o("WAWebBlocklistCollection").BlocklistCollection.replaceAllWith([]);
                o("WAWebBlocklistCollection").BlocklistCollection.initializeFromCache(o("WAWebApiHydrateWidsUtil").hydrateWids(e));
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })()
    };
    l.BlocklistBridgeApi = e;
}, 98);