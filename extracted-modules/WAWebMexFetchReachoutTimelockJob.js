__d("WAWebMexFetchReachoutTimelockJob", [
    "WALogger",
    "WAWebBackendErrors",
    "WAWebMexClient",
    "WAWebMexFetchReachoutTimelockJobQuery.graphql",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = e !== void 0 ? e : e = n("WAWebMexFetchReachoutTimelockJobQuery.graphql");
    function c() {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = {};
            const t = yield o("WAWebMexClient").fetchQuery(u, e);
            if (t?.xwa2_fetch_account_reachout_timelock == null) {
                throw new (o("WAWebBackendErrors")).ServerStatusCodeError(500, "Mex unexpected null response for fetching reachout timelock");
            }
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "[MEX][WA-ICE][RET] fetched reachout timelock"
            ]))).tags("GQL", "MEX", "wa-ice", "RET");
            const n = t?.xwa2_fetch_account_reachout_timelock;
            const { enforcement_type: r, is_active: a, time_enforcement_ends: i } = n;
            return {
                is_active: a,
                time_enforcement_ends: i,
                enforcement_type: r
            };
        });
        return d.apply(this, arguments);
    }
    l.mexFetchReachoutTimelock = c;
}, 98);