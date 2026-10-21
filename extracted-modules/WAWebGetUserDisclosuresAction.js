__d("WAWebGetUserDisclosuresAction", [
    "WATimeUtils",
    "WAWebGetUserDisclosuresJob",
    "WAWebTosJob",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    const e = 5;
    function s() {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const t = yield o("WAWebGetUserDisclosuresJob").getAllUserDisclosures();
            const notice = t.map((t)=>({
                    id: t.id.toString(),
                    state: t.stage === e,
                    timestamp: o("WATimeUtils").castToUnixTime(t.t)
                }));
            return {
                refresh: o("WAWebTosJob").DEFAULT_TOS_REFRESH_INTERVAL,
                notice
            };
        });
        return u.apply(this, arguments);
    }
    l.getUserDisclosuresAction = s;
}, 98);