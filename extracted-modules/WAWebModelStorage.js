__d("WAWebModelStorage", [
    "WAWebABPropsCache",
    "WAWebBackendWorkerClient",
    "WAWebModelStorageInitialize",
    "WAWebStorageInitializeHooks",
    "WAWebUserPrefsIndexedDBStorage",
    "asyncToGeneratorRuntime",
    "once"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            yield o("WAWebModelStorageInitialize").initializeWithoutGKs(e);
            yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.init();
            d();
            u();
        });
        return s.apply(this, arguments);
    }
    var u = r("once")(function() {
        o("WAWebABPropsCache").waitForABPropConfigsReady().then(()=>{
            o("WAWebStorageInitializeHooks").initializeHooks();
        });
    });
    let c = false;
    function d() {
        if (c !== true) {
            c = true;
            o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.setSyncCallback(function(e) {
                switch(e.action){
                    case "set":
                        o("WAWebBackendWorkerClient").getBackendWorkerBridge().then((t)=>t.fireAndForget("userPrefs", "syncSet", {
                                key: e.key,
                                value: e.value
                            }));
                        break;
                    case "remove":
                        o("WAWebBackendWorkerClient").getBackendWorkerBridge().then((t)=>t.fireAndForget("userPrefs", "syncRemove", {
                                key: e.key
                            }));
                        break;
                    case "clear":
                        o("WAWebBackendWorkerClient").getBackendWorkerBridge().then((e)=>e.fireAndForget("userPrefs", "syncClear"));
                        break;
                    case "bulkSet":
                        o("WAWebBackendWorkerClient").getBackendWorkerBridge().then((t)=>t.fireAndForget("userPrefs", "syncBulkSet", {
                                entries: e.entries
                            }));
                        break;
                }
            });
        }
    }
    Object.keys(o("WAWebModelStorageInitialize")).forEach((e)=>{
        if (!(e === "default" || e === "__esModule")) {
            l[e] = o("WAWebModelStorageInitialize")[e];
        }
    });
    l.initialize = e;
}, 98);