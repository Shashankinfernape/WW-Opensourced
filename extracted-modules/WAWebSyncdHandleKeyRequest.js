__d("WAWebSyncdHandleKeyRequest", [
    "Promise",
    "WAWebGetSyncKey",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    function s(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const keys = [];
            const orphanKeys = [];
            yield (e || (e = n("Promise"))).all(t.map((()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                    const t = yield o("WAWebGetSyncKey").getSyncKeyInTransaction_DO_NOT_USE(e);
                    if (t) {
                        keys.push(t);
                    } else {
                        orphanKeys.push(e);
                    }
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })()));
            return {
                keys,
                orphanKeys
            };
        });
        return u.apply(this, arguments);
    }
    l.getKeysForKeyRequest = s;
}, 98);