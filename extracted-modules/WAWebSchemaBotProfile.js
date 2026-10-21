__d("WAWebSchemaBotProfile", [
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder"
], function(t, n, r, o, a, i, l) {
    function e() {
        const e = o("WAWebModelStorageUtils").getStorage();
        const t = o("WAWebStorageMutationBuilder").columnBuilder(e.config);
        const { addColumn: n, addUserDefinedPrimaryKey: r } = t;
        e.add("bot-profile").version(o("WAWebModelStorageVersions").botProfileCreateTable(), [
            r("id"),
            n("name"),
            n("attrs"),
            n("description"),
            n("category"),
            n("isDefault"),
            n("prompts"),
            n("personaId"),
            n("commands"),
            n("commandsDescription"),
            n("isMetaCreated"),
            n("creatorName"),
            n("creatorProfileUrl"),
            n("lastUpdateTs"),
            n("posingAsProfessional"),
            n("product"),
            n("isDeprecated"),
            n("creatorLid"),
            n("hcaEntrypointId"),
            n("groupTosRequirements"),
            n("isDeleted"),
            n("fetchPauseUntilMs"),
            n("lastFetchedTimeMs")
        ]).view(function(e) {
            return e;
        });
    }
    function s() {
        return o("WAWebModelStorageUtils").getStorage().table("bot-profile");
    }
    l.addTable = e;
    l.getBotProfileTable = s;
}, 98);