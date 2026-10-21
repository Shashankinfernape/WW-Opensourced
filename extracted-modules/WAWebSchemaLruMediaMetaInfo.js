__d("WAWebSchemaLruMediaMetaInfo", [
    "WAWebLruMediaStorageUtils",
    "WAWebStorageMutationBuilder"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = "id";
    const u = "timestamp";
    const c = "size";
    const d = "lru-media-meta-info";
    const m = o("WAWebStorageMutationBuilder").columnBuilder();
    const { addColumn, addIndex, addUserDefinedPrimaryKey } = m;
    (e = o("WAWebLruMediaStorageUtils")).getStorage().add(d).version(e.getStorage().versions.version(1), [
        addUserDefinedPrimaryKey(s),
        addColumn(u),
        addIndex(u)
    ]).version(e.getStorage().versions.version(2), [
        addColumn(c)
    ]).view(function(e) {
        const t = {
            id: e.id,
            timestamp: e.timestamp,
            size: e.size || 0
        };
        return t;
    });
    const g = e.getStorage().table(d);
    l.metaInfoPrimaryIndex = s;
    l.metaInfoDateIndex = u;
    l.metaInfoSizeIndex = c;
    l.IdbMetaInfoTable = g;
}, 98);