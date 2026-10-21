__d("WAWebStreamGetters", [
    "WALogger",
    "WAWebGetters",
    "WAWebGettersCaches",
    "WAWebStreamTypes"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = o("WAWebGetters").createGetterFactories({
        createCache: o("WAWebGettersCaches").createStreamCache
    });
    const { clearCacheFor: u, computed: c, field: d } = s;
    const m = u;
    const p = d("info");
    const _ = d("obscurity");
    const f = d("hasSynced");
    const g = d("isHardRefresh");
    const h = d("needsUpdate");
    const y = c(function([n, r, a]) {
        switch(r){
            case o("WAWebStreamTypes").Obscurity.SHOW:
                return n;
            case o("WAWebStreamTypes").Obscurity.HIDE:
                if (a === true) {
                    return o("WAWebStreamTypes").StreamInfo.NORMAL;
                }
                return o("WAWebStreamTypes").StreamInfo.CONNECTING;
            case o("WAWebStreamTypes").Obscurity.OBSCURE:
                switch(n){
                    case o("WAWebStreamTypes").StreamInfo.OPENING:
                    case o("WAWebStreamTypes").StreamInfo.PAIRING:
                    case o("WAWebStreamTypes").StreamInfo.SYNCING:
                    case o("WAWebStreamTypes").StreamInfo.RESUMING:
                        return o("WAWebStreamTypes").StreamInfo.CONNECTING;
                    default:
                        return n;
                }
        }
        o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "Stream:unknown obscure level:"
        ])));
        return n;
    }, [
        p,
        _,
        f
    ]);
    l.clearStreamGetterCacheFor = m;
    l.getIsHardRefresh = g;
    l.getNeedsUpdate = h;
    l.getDisplayInfo = y;
}, 98);