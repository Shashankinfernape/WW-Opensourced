__d("WAWebAccountLinkingScheduledJobs", [
    "WALogger",
    "WAWebAccountLinkingAPI",
    "WAWebAccountLinkingDBOperationsAPI",
    "WAWebGraphQLServerError",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = o("WAWebAccountLinkingDBOperationsAPI").getAccountLinkingDBOps("account_linking");
    function c() {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const t = yield u.getPingExpirationTime();
            const n = Date.now() / 1000;
            if (n > t) {
                try {
                    yield o("WAWebAccountLinkingAPI").ping();
                } catch (t) {
                    const r = t instanceof o("WAWebGraphQLServerError").GraphQLServerError ? o("WAWebGraphQLServerError").formatGraphQLServerError(t) : t;
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[WAFFLE] ping failed: ",
                        ""
                    ])), r).tags("waffle", "account-linking", "ping").sendLogs("waffle-ping-failed", {
                        sampling: 0.01
                    });
                    return;
                }
                try {
                    yield o("WAWebAccountLinkingAPI").fetchServiceData();
                } catch (e) {
                    const a = e instanceof o("WAWebGraphQLServerError").GraphQLServerError ? o("WAWebGraphQLServerError").formatGraphQLServerError(e) : e;
                    o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[WAFFLE] fetchServiceData failed: ",
                        ""
                    ])), a).tags("waffle", "account-linking", "fetch-service-data").sendLogs("waffle-fetch-service-data-failed", {
                        sampling: 0.01
                    });
                }
            }
        });
        return d.apply(this, arguments);
    }
    l.scheduledWaffleJobs = c;
}, 98);