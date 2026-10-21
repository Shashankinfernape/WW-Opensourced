__d("FalcoUtils", [
    "AnalyticsCoreData",
    "ODS",
    "PersistedQueue",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = "ods_web_batch";
    const c = p(33);
    function onLoad(e) {
        e.tags = _(e.tags ?? [
            0,
            0
        ], c);
        return e;
    }
    function m(e) {
        if (e) {
            const { appScopedIdentity, fbIdentity } = e;
            let r = "";
            if (fbIdentity) {
                const { accountId, actorId } = fbIdentity;
                r = `${accountId}^#${actorId}^#`;
            } else {
                if (appScopedIdentity !== undefined) {
                    r = `^#^#${appScopedIdentity}`;
                }
            }
            return `${r}^#${e.claims.join("^#")}`;
        }
        return "";
    }
    function p(e) {
        if (e > 30) {
            return [
                0,
                1 << e - 30
            ];
        }
        return [
            1 << e,
            0
        ];
    }
    function _(e, t) {
        return [
            e[0] | t[0],
            e[1] | t[1]
        ];
    }
    function f(t, n, a) {
        if (t !== u) {
            (s || (s = o("ODS"))).bumpEntityKey(7173, `entities.ff_js_web.${t}.${(e || (e = r("AnalyticsCoreData"))).app_id}.${((e || (e = r("AnalyticsCoreData"))).app_version ?? "0").split(".")[0]}.${e.push_phase}`, n, a);
        }
    }
    function g(e, t, n) {
        const a = r("PersistedQueue").getSuffixesForKey(e) ?? [];
        a.push(t);
        for (const queueNameSuffix of a){
            const l = `${e}^\$${queueNameSuffix}`;
            if (!n.has(l)) {
                const s = r("PersistedQueue").create(e, {
                    onLoad,
                    queueNameSuffix
                });
                n.set(l, s);
            }
        }
        return r("nullthrows")(n.get(`${e}^\$${t}`));
    }
    l.identityToString = m;
    l.getTaggedBitmap = p;
    l.xorBitmap = _;
    l.bumpODSMetrics = f;
    l.createQueue = g;
}, 98);