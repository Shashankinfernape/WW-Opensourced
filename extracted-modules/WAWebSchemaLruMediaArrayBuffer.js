__d("WAWebSchemaLruMediaArrayBuffer", [
    "WAWebLruMediaStorageUtils",
    "WAWebStorageMutationBuilder"
], function(t, n, r, o, a, i, l) {
    const e = "id";
    const s = "data";
    const u = "lru-media-array-buffer";
    const c = o("WAWebStorageMutationBuilder").columnBuilder();
    const { addColumn, addUserDefinedPrimaryKey } = c;
    o("WAWebLruMediaStorageUtils").getStorage().add(u).version(o("WAWebLruMediaStorageUtils").getStorage().versions.version(0), [
        addUserDefinedPrimaryKey(e),
        addColumn(s)
    ]).view(function(t) {
        const n = {
            id: t[e],
            data: t[s]
        };
        return n;
    });
    const p = o("WAWebLruMediaStorageUtils").getStorage().table(u);
    l.IdbArrayBufferTable = p;
}, 98);