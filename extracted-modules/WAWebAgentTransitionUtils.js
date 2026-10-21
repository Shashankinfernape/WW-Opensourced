__d("WAWebAgentTransitionUtils", [
    "WAWebUserPrefsIndexedDBStorage",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = "WAMeSmbOffboardingState";
    const s = "WAMeSmbParentCompanyName";
    function u() {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(e, true);
        });
        return c.apply(this, arguments);
    }
    function d() {
        return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(e) === true;
    }
    function m() {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.remove(e);
            yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.remove(s);
        });
        return p.apply(this, arguments);
    }
    function _(e) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(s, e);
        });
        return f.apply(this, arguments);
    }
    function g() {
        return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(s) ?? "";
    }
    l.storeMeSmbOffboardingState = u;
    l.getMeSmbOffboardingState = d;
    l.clearMeSmbOffboardingState = m;
    l.storeMeSmbParentCompanyName = _;
    l.getMeSmbParentCompanyName = g;
}, 98);