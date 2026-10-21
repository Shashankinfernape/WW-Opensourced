__d("WAWebWasaUserPrefs", [
    "WAWebUserPrefsIndexedDBStorage",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    const e = "WAWasaActiveTargetIds";
    function s(t) {
        const r = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(e)?.[t];
        if (typeof r === "string") {
            return r;
        }
        return null;
    }
    function u(e, t) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
            const a = babelHelpers.extends({}, o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(e) ?? {});
            a[t] = n;
            yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(e, a);
        });
        return c.apply(this, arguments);
    }
    function d(e) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const n = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(e);
            if (!(n == null || n[t] == null)) {
                const r = babelHelpers.extends({}, n);
                delete r[t];
                yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(e, r);
            }
        });
        return m.apply(this, arguments);
    }
    l.getWasaActiveTargetId = s;
    l.setWasaActiveTargetId = u;
    l.clearWasaActiveTargetId = d;
}, 98);