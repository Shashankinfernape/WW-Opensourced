__d("WAWebGetReachoutTimelockJob", [
    "WAJobOrchestratorTypes",
    "WALogger",
    "WAWebMexFetchReachoutTimelockJob",
    "WAWebMexReachoutTimelockNotificationHandler",
    "WAWebOrchestratorNonPersistedJob",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    function s() {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = yield c();
            if (e != null) {
                const { enforcement_type: t, is_active: n, time_enforcement_ends: r } = e;
                yield o("WAWebMexReachoutTimelockNotificationHandler").handleReachoutTimelockUpdate(n, t, r);
            }
        });
        return u.apply(this, arguments);
    }
    function c() {
        return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("getReachoutTimelock", n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            try {
                const t = yield o("WAWebMexFetchReachoutTimelockJob").mexFetchReachoutTimelock();
                return t;
            } catch (t) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[MEX][WA-ICE][RET] GET Reachout Timelock job error"
                ]))).tags("GQL", "MEX", "wa-ice", "RET");
                throw t;
            }
        }), {
            priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION
        }).waitUntilCompleted();
    }
    l.fetchReachoutTimelock = s;
}, 98);