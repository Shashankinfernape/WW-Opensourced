__d("useWAWebCatalogRecovery", [
    "WAWebCatalogCollection",
    "WAWebUserPrefsMeUser",
    "react",
    "react-compiler-runtime",
    "useWAWebListener"
], function(t, n, r, o, a, i, l) {
    let e;
    const useState = (e || (e = o("react"))).useState;
    function u() {
        const e = o("react-compiler-runtime").c(2);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = o("WAWebCatalogCollection").CatalogCollection.hasSelfCatalogErrorEmailMask() && o("WAWebCatalogCollection").CatalogCollection.shouldUseCatalogErrorEmailMask(o("WAWebUserPrefsMeUser").getMeUserOrThrow());
            e[0] = t;
        } else {
            t = e[0];
        }
        const n = useState(t);
        const r = n[0];
        const a = n[1];
        let i;
        if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
            i = function() {
                a(o("WAWebCatalogCollection").CatalogCollection.hasSelfCatalogErrorEmailMask());
            };
            e[1] = i;
        } else {
            i = e[1];
        }
        o("useWAWebListener").useListener(o("WAWebCatalogCollection").CatalogCollection, "change:selfCatalogErrorEmailMask", i);
        return r;
    }
    l.useCatalogRecovery = u;
}, 98);