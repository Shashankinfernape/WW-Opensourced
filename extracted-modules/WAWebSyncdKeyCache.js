__d("WAWebSyncdKeyCache", [
    "WABase64",
    "WAWebGetSyncKey",
    "WAWebSyncdKeyTypes",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e = new Map;
    function s(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const r = o("WABase64").encodeB64(o("WAWebSyncdKeyTypes").fromSyncKeyId(t));
            let a = e.get(r);
            if (a) {
                return a.keyData;
            }
            a = yield o("WAWebGetSyncKey").getSyncKeyInTransaction_DO_NOT_USE(t);
            if (a) {
                e.set(r, a);
            }
            return a?.keyData;
        });
        return u.apply(this, arguments);
    }
    function c() {
        e = new Map;
    }
    l.getKeyData = s;
    l.clearSyncKeysCache = c;
}, 98);