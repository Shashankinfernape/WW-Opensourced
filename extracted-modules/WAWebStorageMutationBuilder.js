__d("WAWebStorageMutationBuilder", [
    "WAWebStorageAddArrayIndex",
    "WAWebStorageAddColumn",
    "WAWebStorageAddCompositeIndex",
    "WAWebStorageAddEncryptedColumn",
    "WAWebStorageAddIndex",
    "WAWebStorageAddUniqueIndex",
    "WAWebStorageAutoIncrementingPrimaryKey",
    "WAWebStorageCompositePrimaryKey",
    "WAWebStorageRemoveArrayIndex",
    "WAWebStorageRemoveColumn",
    "WAWebStorageRemoveCompositeIndex",
    "WAWebStorageRemoveIndex",
    "WAWebStorageRemoveUniqueIndex",
    "WAWebStorageUserDefinedPrimaryKey",
    "err"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = {};
        return function(n) {
            if (t[n]) {
                return t[n];
            }
            const r = e(n);
            t[n] = r;
            return r;
        };
    }
    const s = e(u);
    function u(e) {
        for(var t = e, n = []; t > 0;){
            t--;
            const r = t % 26;
            n.push(String.fromCharCode(97 + r));
            t = Math.floor(t / 26);
        }
        n.reverse();
        return n.join("");
    }
    function c(e, t) {
        const n = {
            intentionallyUsePrivateConstructor: true
        };
        if (e?.packColumns && t == null) {
            throw r("err")("[storage-config-error] packing columns enabled, but packing data does not exist");
        }
        const o = e != null && e.packColumns && t ? t : {};
        const a = function(t) {
            if (o[t] != null) {
                return s(o[t]);
            }
            return t;
        };
        const i = function(t) {
            return new (r("WAWebStorageAddColumn"))(t, a(t), n);
        };
        const l = function(t, o) {
            return new (r("WAWebStorageAddEncryptedColumn"))({
                dataType: o,
                name: t,
                opts: n,
                packedName: a(t)
            });
        };
        const u = function(t) {
            return new (r("WAWebStorageUserDefinedPrimaryKey"))({
                name: t,
                packedName: a(t)
            }, n);
        };
        const c = function(t) {
            return new (r("WAWebStorageAutoIncrementingPrimaryKey"))({
                name: t,
                packedName: a(t)
            }, n);
        };
        const d = function(t) {
            return new (r("WAWebStorageCompositePrimaryKey"))(t.map((e)=>({
                    name: e,
                    packedName: a(e)
                })), n);
        };
        const m = function(t) {
            const e = t.split(".")[0];
            return new (r("WAWebStorageAddIndex"))(a(e), n);
        };
        const p = function(t) {
            return new (r("WAWebStorageAddArrayIndex"))(a(t), n);
        };
        const _ = function(t) {
            return new (r("WAWebStorageAddCompositeIndex"))(t.map((e)=>a(e)), n);
        };
        const f = function(t) {
            return new (r("WAWebStorageAddUniqueIndex"))(a(t), n);
        };
        const g = function(t) {
            return new (r("WAWebStorageRemoveColumn"))(t, n);
        };
        const h = function(t) {
            return new (r("WAWebStorageRemoveIndex"))(a(t), n);
        };
        const y = function(t) {
            return new (r("WAWebStorageRemoveUniqueIndex"))(a(t), n);
        };
        const C = function(t) {
            return new (r("WAWebStorageRemoveArrayIndex"))(a(t), n);
        };
        const b = function(t) {
            return new (r("WAWebStorageRemoveCompositeIndex"))(t.map((e)=>a(e)), n);
        };
        return {
            addColumn: i,
            addEncryptedColumn: l,
            addUserDefinedPrimaryKey: u,
            addAutoIncrementingPrimaryKey: c,
            addCompositePrimaryKey: d,
            addIndex: m,
            addArrayIndex: p,
            addCompositeIndex: _,
            addUniqueIndex: f,
            removeColumn: g,
            removeIndex: h,
            removeUniqueIndex: y,
            removeArrayIndex: C,
            removeCompositeIndex: b
        };
    }
    l.memoize = e;
    l.columnBuilder = c;
}, 98);