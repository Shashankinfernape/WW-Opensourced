__d("WAWebUnjoinedSubgroupMetadataGetters", [
    "fbt",
    "WAWebGetters",
    "WAWebGettersCaches",
    "WAWebGroupType"
], function(t, n, r, o, a, i, l, s) {
    const e = o("WAWebGetters").createGetterFactories({
        createCache: o("WAWebGettersCaches").createUnjoinedSubgroupMetadataCache
    });
    const { clearCacheFor, computed, field } = e;
    const m = clearCacheFor;
    const p = field("defaultSubgroup");
    const _ = field("generalSubgroup");
    const f = field("desc");
    const g = field("subject");
    const h = computed(function([t, n]) {
        if (t === true) {
            return o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP;
        }
        if (n === true) {
            return o("WAWebGroupType").GroupType.LINKED_GENERAL_GROUP;
        }
        return o("WAWebGroupType").GroupType.LINKED_SUBGROUP;
    }, [
        p,
        _
    ]);
    const y = computed(function([t, n]) {
        if (n === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP && (t == null || t === "")) {
            return s._("Get the latest announcements from the admins of this community.").toString();
        }
        return t;
    }, [
        f,
        h
    ]);
    l.clearUnjoinedSubgroupMetadataGetterCacheFor = m;
    l.getSubject = g;
    l.getGroupType = h;
    l.getDisplayedDesc = y;
}, 226);