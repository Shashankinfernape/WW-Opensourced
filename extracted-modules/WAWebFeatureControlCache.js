__d("WAWebFeatureControlCache", [
    "WATimeUtils",
    "WAWebUserPrefsIndexedDBStorage",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = "WAAuthorizedAgentFeatureControlPolicy";
    function s() {
        return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(e);
    }
    function u() {
        return s()?.policy;
    }
    function c() {
        return s()?.lastFetchedAt;
    }
    function d() {
        return s()?.isUserAA === true;
    }
    function m(e) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(policy) {
            const n = {
                policy,
                lastFetchedAt: o("WATimeUtils").unixTimeMs(),
                isUserAA: true
            };
            yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(e, n);
        });
        return p.apply(this, arguments);
    }
    function _() {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const r = s();
            if (r?.isUserAA !== true) {
                const a = {
                    policy: r?.policy ?? null,
                    lastFetchedAt: r?.lastFetchedAt ?? null,
                    isUserAA: true
                };
                yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(e, a);
            }
        });
        return f.apply(this, arguments);
    }
    function g() {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.remove(e);
        });
        return h.apply(this, arguments);
    }
    l.getPolicy = u;
    l.getPolicyLastFetchedAt = c;
    l.getUserIsAA = d;
    l.setPolicy = m;
    l.markUserAsAA = _;
    l.clearPolicy = g;
}, 98);