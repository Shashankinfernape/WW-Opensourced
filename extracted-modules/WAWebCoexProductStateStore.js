__d("WAWebCoexProductStateStore", [
    "WALogger",
    "WAWebCoexCanonicalMembership",
    "WAWebEventEmitter",
    "WAWebUserPrefsIndexedDBStorage",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = "WACoexProductState";
    const u = 1;
    const c = new (r("WAWebEventEmitter"));
    function d() {
        const e = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(s);
        if (e == null || typeof e !== "object") {
            return null;
        }
        const { fetchedAtMs, surfaces, version } = e;
        if (version !== u || typeof fetchedAtMs !== "number" || !Array.isArray(surfaces)) {
            return null;
        }
        const surfaces_1 = [];
        const i = (t)=>{
            const e = o("WAWebCoexCanonicalMembership").COEX_PRODUCT_SURFACES.find((e)=>e === t);
            if (e == null) {
                return {
                    v: null
                };
            }
            surfaces_1.push(e);
        };
        let l;
        for (const c of surfaces){
            l = i(c);
            if (l) {
                return l.v;
            }
        }
        return {
            surfaces: surfaces_1,
            fetchedAtMs
        };
    }
    function m(e) {
        const t = d();
        o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(s, {
            version: u,
            surfaces: [].concat(e.surfaces),
            fetchedAtMs: e.fetchedAtMs
        }).catch(h);
        if (t == null || !g(t, e)) {
            c.trigger("change", e);
        }
    }
    function p() {
        const e = d() != null;
        o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.remove(s).catch(h);
        if (e) {
            c.trigger("change", null);
        }
    }
    function _(e) {
        c.on("change", e);
    }
    function f(e) {
        c.off("change", e);
    }
    function g(e, t) {
        const n = new Set(t.surfaces);
        return new Set(e.surfaces).size === n.size && e.surfaces.every((e)=>n.has(e));
    }
    function h(t) {
        o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "coexProductStateStore: write failed"
        ]))).catching(r("getErrorSafe")(t)).sendLogs("coex-product-state-write-failed");
    }
    l.getCoexProductState = d;
    l.saveCoexProductState = m;
    l.clearCoexProductState = p;
    l.subscribeToCoexProductStateChanges = _;
    l.unsubscribeFromCoexProductStateChanges = f;
}, 98);