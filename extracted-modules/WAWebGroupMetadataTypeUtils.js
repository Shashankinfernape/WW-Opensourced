__d("WAWebGroupMetadataTypeUtils", [
    "WAWebGroupMetadataGetters",
    "WAWebUnjoinedSubgroupMetadataGetters",
    "WAWebUnjoinedSubgroupMetadataModel"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        if (e != null) {
            return o("WAWebGroupMetadataGetters").getGroupType(e);
        }
    }
    function s(e) {
        if (e instanceof r("WAWebUnjoinedSubgroupMetadataModel")) {
            return o("WAWebUnjoinedSubgroupMetadataGetters").getGroupType(e);
        }
        return o("WAWebGroupMetadataGetters").getGroupType(e);
    }
    l.getMaybeGroupType = e;
    l.getGroupTypeForMetadata = s;
}, 98);