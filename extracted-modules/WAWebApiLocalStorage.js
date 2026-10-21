__d("WAWebApiLocalStorage", [
    "WAWebSchemaLocalStorage",
    "WAWebWorkerStorageUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return o("WAWebSchemaLocalStorage").getTable().get(e).then((e)=>e?.value);
    }
    function s(e, t = []) {
        const r = d(e);
        return o("WAWebWorkerStorageUtils").getStorage().lock([
            "local_storage"
        ], (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*([n]) {
                const o = [];
                const a = yield n.bulkGet(t);
                for (const i of a){
                    if (i != null) {
                        o.push(i);
                    }
                }
                yield n.clear();
                yield n.bulkCreateOrReplace([].concat(o, r));
            });
            return function(t) {
                return e.apply(this, arguments);
            };
        })());
    }
    function u(e, t) {
        const r = d(e);
        return o("WAWebWorkerStorageUtils").getStorage().lock([
            "local_storage"
        ], (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*([n]) {
                yield n.bulkRemove(t);
                yield n.bulkCreateOrReplace(r);
            });
            return function(t) {
                return e.apply(this, arguments);
            };
        })());
    }
    function c() {
        return o("WAWebSchemaLocalStorage").getTable().clear();
    }
    function d(e) {
        return e.map((e)=>({
                key: e.key,
                value: e.value
            }));
    }
    l.getLocalStorageValue = e;
    l.updateLocalStorage = s;
    l.applyLocalStorageChanges = u;
    l.clearLocalStorage = c;
}, 98);