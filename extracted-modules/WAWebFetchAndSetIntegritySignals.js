__d("WAWebFetchAndSetIntegritySignals", [
    "Promise",
    "WACustomError",
    "WALogger",
    "WAPromiseTimeout",
    "WAWebBackendApi",
    "WAWebDBUpdateChatTable",
    "WAWebMexFetchIntegritySignals",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "isEmptyObject"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    const _ = 600;
    function f(t) {
        try {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[FMX] firing integrity signals MEX call for ",
                ""
            ])), t.toLogString());
            return o("WAPromiseTimeout").promiseTimeout(o("WAWebMexFetchIntegritySignals").fetchIntegritySignals(o("WAWebWidFactory").asUserWidOrThrow(t)), _).then((()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                    if (e != null) {
                        const { isNewAccount: n, isSuspicious: a } = e;
                        o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                            "[FMX] integrity signals for ",
                            ": isNewAccount=",
                            ", isSuspicious=",
                            ""
                        ])), t.toLogString(), String(n), String(a));
                        const i = {};
                        const l = {};
                        if (n != null) {
                            i.isSenderNewAccount = n;
                            l.isSenderNewAccount = n;
                        }
                        if (a != null) {
                            i.isSenderSuspicious = a;
                            l.isSenderSuspicious = a;
                        }
                        if (!r("isEmptyObject")(i)) {
                            yield o("WAWebBackendApi").frontendSendAndReceive("chatCollectionUpdate", {
                                updates: [
                                    babelHelpers.extends({
                                        id: t
                                    }, i)
                                ]
                            });
                            o("WAWebDBUpdateChatTable").updateChatTable(t, l);
                        }
                    }
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })(), (e)=>{
                if (e instanceof o("WACustomError").TimeoutError) {
                    o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[FMX] integrity signals MEX call timed out for ",
                        ""
                    ])), t.toLogString()).sendLogs("fmx-integrity-signals-mex-timeout");
                } else {
                    o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[FMX] integrity signals fetch failed for ",
                        ""
                    ])), t.toLogString()).catching(r("getErrorSafe")(e)).sendLogs("fmx-integrity-signals-failed");
                }
            }).catch((e)=>{
                o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[FMX] unexpected error in integrity signals handler for ",
                    ""
                ])), t.toLogString()).catching(r("getErrorSafe")(e)).sendLogs("fmx-integrity-signals-handler-failed");
            });
        } catch (e) {
            o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                "[FMX] failed to initiate integrity signals fetch for ",
                ""
            ])), t.toLogString()).catching(r("getErrorSafe")(e)).sendLogs("fmx-integrity-signals-init-failed");
            return (p || (p = n("Promise"))).resolve();
        }
    }
    l.fetchAndSetIntegritySignals = f;
}, 98);