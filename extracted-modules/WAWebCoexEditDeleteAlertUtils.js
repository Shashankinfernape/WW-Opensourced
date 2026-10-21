__d("WAWebCoexEditDeleteAlertUtils", [
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsMultiDevice",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = "WACoexEditAlertShownBusiness";
    const s = "WACoexDeleteAlertShownBusiness";
    const u = "WACoexEditAlertShownThreads";
    const c = "WACoexDeleteAlertShownThreads";
    function d() {
        return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(e) === true;
    }
    function m() {
        return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(s) === true;
    }
    function p() {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(e, true);
        });
        return _.apply(this, arguments);
    }
    function f() {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(s, true);
        });
        return g.apply(this, arguments);
    }
    function h(e) {
        const t = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(u) || [];
        return t.includes(e);
    }
    function y(e) {
        const t = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(c) || [];
        return t.includes(e);
    }
    function C(e) {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(u) || [];
            if (!t.includes(e)) {
                yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(u, [].concat(t, [
                    e
                ]));
            }
        });
        return b.apply(this, arguments);
    }
    function v(e) {
        return S.apply(this, arguments);
    }
    function S() {
        S = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(c) || [];
            if (!t.includes(e)) {
                yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(c, [].concat(t, [
                    e
                ]));
            }
        });
        return S.apply(this, arguments);
    }
    function R(e, t = false) {
        const n = o("WAWebUserPrefsMultiDevice").getIsHostedMeAccountFromLocalStorage();
        if (n) {
            return !d();
        }
        if (t) {
            return !h(e);
        }
        return false;
    }
    function L(e, t = false) {
        const n = o("WAWebUserPrefsMultiDevice").getIsHostedMeAccountFromLocalStorage();
        if (n) {
            return !m();
        }
        if (t) {
            return !y(e);
        }
        return false;
    }
    function E(e) {
        return k.apply(this, arguments);
    }
    function k() {
        k = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = o("WAWebUserPrefsMultiDevice").getIsHostedMeAccountFromLocalStorage();
            if (t) {
                yield p();
            } else {
                yield C(e);
            }
        });
        return k.apply(this, arguments);
    }
    function I(e) {
        return T.apply(this, arguments);
    }
    function T() {
        T = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = o("WAWebUserPrefsMultiDevice").getIsHostedMeAccountFromLocalStorage();
            if (t) {
                yield f();
            } else {
                yield v(e);
            }
        });
        return T.apply(this, arguments);
    }
    l.shouldShowCoexEditAlert = R;
    l.shouldShowCoexDeleteAlert = L;
    l.markCoexEditAlertShown = E;
    l.markCoexDeleteAlertShown = I;
}, 98);