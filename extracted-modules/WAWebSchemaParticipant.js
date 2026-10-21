__d("WAWebSchemaParticipant", [
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder"
], function(t, n, r, o, a, i, l) {
    function e() {
        const e = o("WAWebModelStorageUtils").getStorage();
        const t = o("WAWebStorageMutationBuilder").columnBuilder(e.config);
        const { addArrayIndex: n, addColumn: r, addUserDefinedPrimaryKey: a } = t;
        e.add("participant").version(o("WAWebModelStorageVersions").participantCreateTable(), [
            a("groupId"),
            r("senderKey"),
            r("participants"),
            r("pastParticipants"),
            r("admins"),
            r("rotateKey"),
            r("version"),
            n("participants"),
            r("deviceSyncComplete"),
            r("staleType"),
            r("superAdmins")
        ]).view(function(e) {
            if (e.participants != null && e.admins != null) {
                return e;
            }
            return babelHelpers.extends({}, e, {
                participants: e.participants ?? [],
                admins: e.admins ?? []
            });
        });
    }
    function s() {
        return o("WAWebModelStorageUtils").getStorage().table("participant");
    }
    l.addTable = e;
    l.getParticipantTable = s;
}, 98);