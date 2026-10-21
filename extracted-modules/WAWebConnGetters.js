__d("WAWebConnGetters", [
    "WAWebGetters",
    "WAWebGettersCaches",
    "WAWebMobilePlatforms"
], function(t, n, r, o, a, i, l) {
    const e = o("WAWebGetters").createGetterFactories({
        createCache: o("WAWebGettersCaches").createConnCache
    });
    const { clearCacheFor: s, computed: u, field: c } = e;
    const d = s;
    const m = c("platform");
    const p = c("pushname");
    const _ = u(function([t]) {
        return t === o("WAWebMobilePlatforms").PLATFORMS.SMBA || t === o("WAWebMobilePlatforms").PLATFORMS.SMBI;
    }, [
        m
    ]);
    l.clearConnGetterCacheFor = d;
    l.getPushname = p;
    l.getIsSMB = _;
}, 98);