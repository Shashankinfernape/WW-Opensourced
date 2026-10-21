__d("WAWebCrosspostingSchema", [
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder"
], function(t, n, r, o, a, i, l) {
    function e() {
        const e = o("WAWebModelStorageUtils").getStorage();
        const t = o("WAWebStorageMutationBuilder").columnBuilder(e.config);
        const { addColumn: n, addCompositePrimaryKey: r, addIndex: a } = t;
        e.add("status-crossposting").version(o("WAWebModelStorageVersions").statusCrosspostingCreateTable(), [
            r([
                "statusMessageId",
                "crosspostingDestination"
            ]),
            n("crosspostingSessionId"),
            n("crosspostingStatusUniqueId"),
            n("mediaFilePath"),
            n("directUrlPath"),
            n("crosspostingState"),
            a("crosspostingSessionId")
        ]).view(function(e) {
            return e;
        });
    }
    function s() {
        return o("WAWebModelStorageUtils").getStorage().table("status-crossposting");
    }
    l.addTable = e;
    l.getTable = s;
}, 98);