__d("WAWebSchemaAbPropEventSamplingConfig", [
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder"
], function(t, n, r, o, a, i, l) {
    function e() {
        const e = o("WAWebModelStorageUtils").getStorage();
        const t = o("WAWebStorageMutationBuilder").columnBuilder(e.config);
        const { addColumn: n, addUserDefinedPrimaryKey: r } = t;
        e.add("abprop-event-sampling-configs").version(o("WAWebModelStorageVersions").abpropEventSamplingConfigCreateTable(), [
            r("eventCode"),
            n("samplingWeight")
        ]).view(function(e) {
            return e;
        });
    }
    function s() {
        return o("WAWebModelStorageUtils").getStorage().table("abprop-event-sampling-configs");
    }
    l.addTable = e;
    l.getAbpropEventSamplingConfigsTable = s;
}, 98);