__d("WAWebPrimaryFeatures", [
    "WALogger",
    "WAWebBackendApi",
    "WAWebBackendEventBusWorkerCompatible",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsKeys",
    "WAWebWorkerSafeBackendApi",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "gkx",
    "snakeCase"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d = null;
    function m(t) {
        if (d == null) {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "primaryFeatureEnabled: features not initialized"
            ])));
            return false;
        }
        return d.has(t);
    }
    function p(e) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(o("WAWebUserPrefsKeys").KEYS.PRIMARY_FEATURES, e);
            const t = d;
            const n = new Set(h(e));
            d = n;
            o("WAWebBackendApi").frontendFireAndForget("setPrimaryFeatures", {
                primaryFeatures: Array.from(d)
            });
            try {
                o("WAWebBackendEventBusWorkerCompatible").getBackendEventBus().triggerPrimaryFeaturesSynced(f(t, n));
            } catch (error) {
                o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[primary features] primary_features_synced listener failed"
                ]))).catching(r("getErrorSafe")(error)).sendLogs("primary-features-synced-listener-failed");
            }
            const a = t?.has("favorite_sticker") === true;
            const i = n.has("favorite_sticker");
            if (!a && i) {
                o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[primary features] favorite_sticker enabled, check orphans"
                ])));
                yield o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive("checkOrphanFavoriteStickers");
            }
        });
        return _.apply(this, arguments);
    }
    function f(e, t) {
        const n = e ?? new Set;
        const r = new Set;
        for (const o of t){
            if (!n.has(o)) {
                r.add(o);
            }
        }
        for (const a of n){
            if (!t.has(a)) {
                r.add(a);
            }
        }
        return r;
    }
    function g() {
        let primaryFeatures = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(o("WAWebUserPrefsKeys").KEYS.PRIMARY_FEATURES) ?? [];
        primaryFeatures = h(primaryFeatures);
        d = new Set(primaryFeatures);
        o("WAWebBackendApi").frontendFireAndForget("setPrimaryFeatures", {
            primaryFeatures
        });
        o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
            "primary features loaded"
        ])));
    }
    function h(e) {
        let a = e;
        if (r("gkx")("26258")) {
            return a;
        }
        const i = new URLSearchParams(window.location.search ?? "");
        const l = (i.get("primary_features_enabled") ?? "").split(",").map((e)=>r("snakeCase")(e));
        a = Array.from(new Set([].concat(a, l)));
        const s = new Set((i.get("primary_features_disabled") ?? "").split(",").map((e)=>r("snakeCase")(e)));
        a = a.filter((e)=>!s.has(e));
        return a;
    }
    l.primaryFeatureEnabled = m;
    l.setPrimaryFeatures = p;
    l.loadPrimaryFeatures = g;
}, 98);