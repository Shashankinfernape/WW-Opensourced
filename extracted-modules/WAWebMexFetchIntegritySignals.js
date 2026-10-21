__d("WAWebMexFetchIntegritySignals", [
    "WALogger",
    "WAWebMexClient",
    "WAWebMexFetchIntegritySignalsQuery.graphql",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    const m = e !== void 0 ? e : e = n("WAWebMexFetchIntegritySignalsQuery.graphql");
    function p(e) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            try {
                const i = yield o("WAWebMexClient").fetchQuery(m, {
                    input: {
                        query_input: [
                            {
                                jid: e.toJid(),
                                integrity_signals: {
                                    use_case: "CHAT_FMX"
                                }
                            }
                        ],
                        telemetry: {
                            context: "INTERACTIVE"
                        }
                    }
                });
                const l = i.xwa2_fetch_wa_users?.[0];
                if (l == null) {
                    o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[FMX][integrity-signals] empty response for ",
                        ""
                    ])), e.toLogString());
                    return null;
                }
                const p = l.integrity_signals_info;
                if (p == null) {
                    o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[FMX][integrity-signals] no integrity signals for ",
                        ""
                    ])), e.toLogString());
                    return null;
                }
                const _ = p.is_new_account ?? null;
                const f = p.is_suspicious_start_chat ?? null;
                o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[FMX][integrity-signals] ",
                    " new=",
                    " sus=",
                    ""
                ])), e.toLogString(), String(_), String(f));
                return {
                    isNewAccount: _,
                    isSuspicious: f
                };
            } catch (t) {
                o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[FMX][integrity-signals] MEX error for ",
                    ""
                ])), e.toLogString()).catching(r("getErrorSafe")(t)).sendLogs("fmx-integrity-signals-mex-error");
                return null;
            }
        });
        return _.apply(this, arguments);
    }
    l.fetchIntegritySignals = p;
}, 98);