__d("WAWebGroupMetadataGetters", [
    "WAWebGetters",
    "WAWebGettersCaches",
    "WAWebGroupType"
], function(t, n, r, o, a, i, l) {
    const e = o("WAWebGetters").createGetterFactories({
        createCache: o("WAWebGettersCaches").createGroupMetadataCache
    });
    const { clearCacheFor, computed, field, unsafeIdentityGetter } = e;
    const m = clearCacheFor;
    const p = unsafeIdentityGetter;
    const _ = field("subject");
    const f = field("ephemeralDuration");
    const g = computed(function([t]) {
        return t === "";
    }, [
        _
    ]);
    const h = field("parentGroup");
    const y = field("isParentGroup");
    const C = field("defaultSubgroup");
    const b = field("generalSubgroup");
    const v = computed(function([t, n, r, a]) {
        if (r === true) {
            return o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP;
        }
        if (a === true) {
            return o("WAWebGroupType").GroupType.LINKED_GENERAL_GROUP;
        }
        if (t != null) {
            return o("WAWebGroupType").GroupType.LINKED_SUBGROUP;
        }
        if (n === true) {
            return o("WAWebGroupType").GroupType.COMMUNITY;
        }
        return o("WAWebGroupType").GroupType.DEFAULT;
    }, [
        h,
        y,
        C,
        b
    ]);
    const S = computed(function([t]) {
        return t === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP;
    }, [
        v
    ]);
    l.clearGroupMetadataGetterCacheFor = m;
    l.getGroupMetadataUnsafe = p;
    l.getSubject = _;
    l.getEphemeralDuration = f;
    l.getIsUnnamed = g;
    l.getGroupType = v;
    l.getIsCag = S;
}, 98);