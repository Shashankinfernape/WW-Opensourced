__d("WAWebOrgGetters", [
    "WAWebGetters",
    "WAWebGettersCaches"
], function(t, n, r, o, a, i, l) {
    const e = o("WAWebGetters").createGetterFactories({
        createCache: o("WAWebGettersCaches").createOrgCache
    });
    const { clearCacheFor: s, field: u } = e;
    const c = s;
    const d = u("name");
    const m = u("iconThumbUrl");
    const p = u("memberCount");
    const _ = u("memberTagOptions");
    l.clearOrgGetterCacheFor = c;
    l.getOrgName = d;
    l.getOrgIconThumbUrl = m;
    l.getOrgMemberCount = p;
    l.getOrgMemberTagOptions = _;
}, 98);