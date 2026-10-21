__d("WAWebSchemaSyncActions", [
    "WALogger",
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder",
    "WAWebSyncdCollectionHandlerTypesConverter",
    "WAWebSyncdKeyTypes",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    function s({ action: n, actionState: a, binarySyncAction: i, collection: l, index: s, indexMac: u, keyId: c, modelId: d, modelType: m, timestamp: p, valueMac: _, version: f, binarySyncData: g }) {
        if (g == null) {
            if (i == null) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[syncd] binarySyncAction null when binarySyncData null"
                ]))).tags("syncd").sendLogs("syncd: syncd binarySyncAction should not be null when binarySyncData is null");
                throw r("err")("syncd: binarySyncAction should not be null when binarySyncData is null");
            }
            g = o("WAWebSyncdCollectionHandlerTypesConverter").syncActionToSyncData(i);
        }
        return {
            index: s,
            binarySyncData: g,
            actionState: a,
            version: f,
            keyId: c,
            modelId: d,
            modelType: m,
            indexMac: u,
            valueMac: _,
            collection: l,
            timestamp: p,
            action: n
        };
    }
    function u(e) {
        const t = e.keyId;
        return babelHelpers.extends({}, e, {
            keyId: o("WAWebSyncdKeyTypes").toSyncKeyId(t)
        });
    }
    function c(e) {
        const t = babelHelpers.extends({}, e);
        if (t.keyId != null) {
            t.keyId = o("WAWebSyncdKeyTypes").fromSyncKeyId(t.keyId);
        }
        return t;
    }
    function d() {
        const e = o("WAWebModelStorageUtils").getStorage();
        const t = o("WAWebStorageMutationBuilder").columnBuilder(e.config);
        const { addColumn: n, addCompositeIndex: r, addIndex: a, addUserDefinedPrimaryKey: i } = t;
        e.add("sync-actions").version(o("WAWebModelStorageVersions").syncActionsCreateTable(), [
            i("index"),
            n("keyId"),
            n("version"),
            n("actionState"),
            a("actionState"),
            n("modelId"),
            n("modelType"),
            r([
                "modelId",
                "modelType",
                "actionState"
            ]),
            n("valueMac"),
            n("indexMac"),
            a("indexMac"),
            n("collection"),
            a("collection"),
            n("timestamp"),
            n("action"),
            a("action"),
            n("binarySyncAction"),
            n("binarySyncData")
        ]).view(s);
    }
    function m() {
        return o("WAWebModelStorageUtils").getStorage().table("sync-actions");
    }
    l.convertToSyncActionFromRow = u;
    l.convertFromSyncActionToRow = c;
    l.addTable = d;
    l.getSyncActionsTable = m;
}, 98);