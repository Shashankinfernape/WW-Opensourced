__d("WAWebStorageMutationUtils", [
    "invariant",
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
    "WAWebStorageUserDefinedPrimaryKey"
], function(t, n, r, o, a, i, l, s) {
    const e = [
        r("WAWebStorageRemoveCompositeIndex"),
        r("WAWebStorageRemoveArrayIndex"),
        r("WAWebStorageRemoveUniqueIndex"),
        r("WAWebStorageRemoveIndex"),
        r("WAWebStorageRemoveColumn"),
        r("WAWebStorageAutoIncrementingPrimaryKey"),
        r("WAWebStorageUserDefinedPrimaryKey"),
        r("WAWebStorageCompositePrimaryKey"),
        r("WAWebStorageAddColumn"),
        r("WAWebStorageAddIndex"),
        r("WAWebStorageAddArrayIndex"),
        r("WAWebStorageAddCompositeIndex"),
        r("WAWebStorageAddUniqueIndex"),
        r("WAWebStorageAddEncryptedColumn")
    ];
    function u(e) {
        return e.toSorted(c);
    }
    function c(t, n) {
        const r = e.indexOf(t.constructor);
        const o = e.indexOf(n.constructor);
        if (r === -1) {
            s(0, 75730, t.constructor.name);
        }
        if (o === -1) {
            s(0, 75730, n.constructor.name);
        }
        return r - o;
    }
    l.sortMutations = u;
}, 98);