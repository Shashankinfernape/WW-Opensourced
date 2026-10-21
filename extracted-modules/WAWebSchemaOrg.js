__d("WAWebSchemaOrg", [
    "$InternalEnum",
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder"
], function(t, n, r, o, a, i, l) {
    const e = n("$InternalEnum")({
        Creator: "CREATOR",
        Admin: "ADMIN",
        Member: "MEMBER"
    });
    function s() {
        const e = o("WAWebModelStorageUtils").getStorage();
        const t = o("WAWebStorageMutationBuilder").columnBuilder(e.config);
        const { addColumn: n, addUserDefinedPrimaryKey: r } = t;
        e.add("org").version(o("WAWebModelStorageVersions").orgCreateTable(), [
            r("orgId"),
            n("name"),
            n("description"),
            n("isMemberDirectoryEnabled"),
            n("memberCount"),
            n("memberTagOptions"),
            n("iconHandle"),
            n("iconThumbUrl"),
            n("iconFullUrl"),
            n("viewerRole"),
            n("managedGroups"),
            n("managedChannels"),
            n("directoryIsComplete"),
            n("orgUpdatedTsUsec"),
            n("memberUpdatedTsUsec"),
            n("memberListTsUsec")
        ]).view(function(e) {
            return e;
        });
    }
    function u() {
        return o("WAWebModelStorageUtils").getStorage().table("org");
    }
    l.OrgMemberRole = e;
    l.addTable = s;
    l.getOrgTable = u;
}, 98);