__d("WAWebMexUsync", [
    "WAWebBackendErrors",
    "WAWebMexClient",
    "WAWebMexUsyncQuery.graphql",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e !== void 0 ? e : e = n("WAWebMexUsyncQuery.graphql");
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            try {
                const t = e.users.filter(({ jid: t })=>o("WAWebWidFactory").createWid(t).isEligibleForUSync());
                if (t.length) {
                    const n = yield o("WAWebMexClient").fetchQuery(s, {
                        input: {
                            query_input: t,
                            telemetry: e.telemetry
                        },
                        include_username: e.fetch.username === true,
                        include_about_status: e.fetch.about_status === true,
                        include_country_code: e.fetch.country_code === true,
                        include_orgs: e.fetch.orgs === true
                    });
                    if (n.xwa2_fetch_wa_users != null) {
                        return {
                            response: n.xwa2_fetch_wa_users,
                            error: null
                        };
                    }
                }
                return {
                    response: null,
                    error: d({
                        backoffMs: null,
                        code: 500,
                        retryable: true,
                        text: "xwa2_fetch_wa_users null"
                    })
                };
            } catch (e) {
                if (e instanceof o("WAWebBackendErrors").ServerStatusCodeError) {
                    const r = e instanceof o("WAWebBackendErrors").MexServerStatusCodeError ? {
                        backoffMs: e.backoffMs,
                        retryable: e.retryable !== false
                    } : {
                        backoffMs: null,
                        retryable: true
                    };
                    return {
                        response: null,
                        error: d({
                            backoffMs: r.backoffMs,
                            code: e.statusCode,
                            retryable: r.retryable,
                            text: e.message
                        })
                    };
                }
                throw e;
            }
        });
        return c.apply(this, arguments);
    }
    function d({ backoffMs: t, code: n, retryable: r, text: o }) {
        return {
            backoffMs: t,
            code: n,
            retryable: r,
            text: o
        };
    }
    l.mexUsyncQuery = u;
}, 98);