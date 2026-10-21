__d("WAWebFrontendNewsletterMetadataGetters", [
    "WAWebGetters",
    "WAWebGettersCaches",
    "WAWebL10NAccentFold",
    "WAWebNewsletterMetadataGetters"
], function(t, n, r, o, a, i, l) {
    const e = o("WAWebGetters").createGetterFactories({
        root: o("WAWebNewsletterMetadataGetters").getNewsletterMetadataUnsafe,
        createCache: o("WAWebGettersCaches").createFrontendNewsletterMetadataCache
    });
    const { clearCacheFor, computed, field } = e;
    const d = clearCacheFor;
    const m = field("adminInsights");
    const p = field("recentlyFollowedFrom");
    const _ = field("similarNewsletters");
    const f = computed(function([t]) {
        if (t === "") {
            return "";
        }
        return o("WAWebL10NAccentFold").accentFold(t);
    }, [
        o("WAWebNewsletterMetadataGetters").getName
    ]);
    l.clearFrontendNewsletterMetadataGetterCacheFor = d;
    l.getAdminInsights = m;
    l.getRecentlyFollowedFrom = p;
    l.getSimilarNewsletters = _;
    l.getSearchName = f;
}, 98);