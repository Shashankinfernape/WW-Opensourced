__d("WAWebCoexCallingFirstTimeAlertUtils", [
    "WAWebABProps",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsMultiDevice",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = "WACoexSMBCallingFirstTimeAlertShown";
    const s = "WACoexCallingFirstTimeAlertShownThreads";
    function u() {
        return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(e) === true;
    }
    function c() {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(e, true);
        });
        return d.apply(this, arguments);
    }
    function m() {
        const e = o("WAWebABProps").getABPropConfigValue("coex_calling_enabled");
        if (!e) {
            return false;
        }
        const t = o("WAWebUserPrefsMultiDevice").getIsHostedMeAccountFromLocalStorage();
        if (t) {
            return !u();
        }
        return false;
    }
    function p(e) {
        const n = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(s) ?? [];
        return n.includes(e);
    }
    function _(e) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const n = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(s) ?? [];
            if (!n.includes(e)) {
                yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(s, [].concat(n, [
                    e
                ]));
            }
        });
        return f.apply(this, arguments);
    }
    function g(e, t) {
        const n = o("WAWebABProps").getABPropConfigValue("coex_calling_enabled");
        if (!n || !t) {
            return false;
        }
        return !p(e);
    }
    l.markCoexCallingSMBFirstTimeAlertShown = c;
    l.shouldShowCoexCallingSMBFirstTimeAlert = m;
    l.markCoexCallingConsumerFirstTimeAlertShownForThread = _;
    l.shouldShowCoexCallingConsumerFirstTimeAlert = g;
}, 98);