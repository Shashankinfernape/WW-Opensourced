__d("WAWebOrgContactGetters", [
    "WAWebGetters",
    "WAWebGettersCaches"
], function(t, n, r, o, a, i, l) {
    const e = o("WAWebGetters").createGetterFactories({
        createCache: o("WAWebGettersCaches").createOrgContactCache
    });
    const { clearCacheFor: s, field: u } = e;
    const c = s;
    const d = u("memberName");
    const m = u("username");
    const p = u("primaryOrgId");
    const _ = u("primaryOrgMemberTag");
    l.clearOrgContactGetterCacheFor = c;
    l.getOrgContactMemberName = d;
    l.getOrgContactUsername = m;
    l.getOrgContactPrimaryOrgId = p;
    l.getOrgContactPrimaryOrgMemberTag = _;
}, 98);