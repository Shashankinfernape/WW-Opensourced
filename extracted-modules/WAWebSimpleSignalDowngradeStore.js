__d("WAWebSimpleSignalDowngradeStore", [
    "WALogger",
    "WAWebUserPrefsIndexedDBStorage"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = "WACoexSimpleSignalDowngradedUsers";
    let u = null;
    function c() {
        if (u != null) {
            return u;
        }
        const e = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(s);
        u = new Set(Array.isArray(e) ? e : []);
        return u;
    }
    function d(e) {
        return c().has(e.user);
    }
    function m(t) {
        const n = c();
        if (!n.has(t.user)) {
            n.add(t.user);
            o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(s, Array.from(n)).catch((n)=>{
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "SimpleSignalDowngradeStore: persist failed for ",
                    ": ",
                    ""
                ])), t.user, String(n));
            });
        }
    }
    l.isCoexUserDowngradedFromSimpleSignal = d;
    l.markCoexUserDowngradedFromSimpleSignal = m;
}, 98);