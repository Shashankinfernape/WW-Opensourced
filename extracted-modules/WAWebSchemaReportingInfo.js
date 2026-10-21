__d("WAWebSchemaReportingInfo", [
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder",
    "WAWebStorageSchema"
], function(t, n, r, o, a, i, l) {
    function e() {
        const e = o("WAWebModelStorageUtils").getStorage();
        const t = o("WAWebStorageMutationBuilder").columnBuilder(e.config);
        const { addAutoIncrementingPrimaryKey: n, addColumn: r, addCompositeIndex: a, addEncryptedColumn: i, addIndex: l } = t;
        e.add("reporting-info").version(o("WAWebModelStorageVersions").reportingInfoTable(), [
            n("id"),
            r("msgKey"),
            r("stanzaId"),
            r("reportingTag"),
            r("reportingToken"),
            i("reportingTokenContentOpaqueData", o("WAWebStorageSchema").EncryptedValueType.ARRAY_BUFFER),
            r("version"),
            r("msgTs"),
            r("receivedTs"),
            r("reportingTokenKey"),
            r("reportingTagParticipant"),
            a([
                "msgKey",
                "msgTs"
            ]),
            l("receivedTs")
        ]).view(function(e) {
            return e;
        });
    }
    function s() {
        return o("WAWebModelStorageUtils").getStorage().table("reporting-info");
    }
    l.addTable = e;
    l.getReportingInfoTable = s;
}, 98);