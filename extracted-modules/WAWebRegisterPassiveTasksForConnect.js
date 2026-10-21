__d("WAWebRegisterPassiveTasksForConnect", [
    "Promise",
    "WAAbortError",
    "WACustomError",
    "WALogger",
    "WAPromiseLoop",
    "WAPromiseTimeout",
    "WAWebClearDanglingReceipts",
    "WAWebGetMessageCache",
    "WAWebOffdStorageUtils",
    "WAWebOnlineDanglingReceipts",
    "WAWebPageLoadLogging",
    "WAWebPassiveModeManager",
    "WAWebSchemaDanglingReceipt",
    "asyncToGeneratorRuntime",
    "cr:10195",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    let f;
    let g;
    let h;
    let y;
    let C;
    let b;
    let v;
    const S = 4;
    const R = 60 * 1000;
    const L = {
        registerPassiveTasksForConnect: E,
        shouldConnectAsPassiveMode: function() {
            return (v || (v = n("Promise"))).resolve(o("WAWebPassiveModeManager").PassiveTaskManager.shouldConnectAsPassiveMode());
        }
    };
    function E() {
        return k.apply(this, arguments);
    }
    function k() {
        k = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (o("WAWebOnlineDanglingReceipts").hasOnlineDanglingReceipts()) {
                o("WAWebPassiveModeManager").PassiveTaskManager.registerPassiveTask("SendOnlineDanglingReceipts", n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    try {
                        o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "[passive] start sending online dangling receipts"
                        ])));
                        yield o("WAWebOnlineDanglingReceipts").sendAndClearOnlineDanglingReceipts();
                        o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                            "[passive] sending online dangling receipts complete"
                        ])));
                    } catch (e) {
                        o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                            "error while sending online dangling receipts, ",
                            ""
                        ])), e).verbose().sendLogs("send-online-dangling-receipts-failed");
                    }
                }));
            }
            const t = o("WAWebOffdStorageUtils").isStorageCreated();
            o("WAWebPageLoadLogging").addPageLoadQplAnnotationNow({
                passive_offd_ready: t
            });
            if (!t) {
                o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[passive] offd storage not available, skipping passive tasks"
                ]))).sendLogs("passive-offd-storage-unavailable");
                return;
            }
            const a = yield o("WAWebSchemaDanglingReceipt").getTable().all();
            const i = a.length > 0;
            const l = (yield o("WAWebGetMessageCache").getMessageCache().size()) > 0 || (yield o("WAWebGetMessageCache").getMessageCache().checkpointQueueSize()) > 0;
            if (i || l) {
                o("WAWebPassiveModeManager").PassiveTaskManager.registerPassiveTask("SendDanglingReceipts", (()=>{
                    const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                        if (i) {
                            try {
                                o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                                    "[passive] sending dangling receipts"
                                ])));
                                yield o("WAWebClearDanglingReceipts").sendAndClearDanglingReceipts(a, e);
                                o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                                    "[passive] sending dangling receipts: done"
                                ])));
                            } catch (e) {
                                if (r("getErrorSafe")(e).name === o("WAAbortError").ABORT_ERROR) {
                                    throw e;
                                }
                                o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                                    "[passive] sending dangling receipts failed: ",
                                    ""
                                ])), e).verbose().sendLogs("send-and-clear-dangling-receipts-failed");
                            }
                        }
                        if (l) {
                            yield T();
                        }
                    });
                    return function(t) {
                        return e.apply(this, arguments);
                    };
                })());
            }
        });
        return k.apply(this, arguments);
    }
    var I = null;
    function T() {
        return D.apply(this, arguments);
    }
    function D() {
        D = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (I) {
                o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[passive] flush message cache: skip"
                ])));
                return I;
            }
            try {
                o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                    "[passive] flush message cache"
                ])));
                const e = o("WAPromiseLoop").promiseLoop((()=>{
                    const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
                        o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                            "[passive] flush msg cache: sz=",
                            " qsz=",
                            " gen=",
                            ""
                        ])), (yield o("WAWebGetMessageCache").getMessageCache().size()), (yield o("WAWebGetMessageCache").getMessageCache().checkpointQueueSize()), n);
                        if ((yield o("WAWebGetMessageCache").getMessageCache().size()) > 0) {
                            o("WAWebGetMessageCache").getMessageCache().createSnapshot();
                        }
                        yield o("WAWebGetMessageCache").getMessageCache().checkpointQueueWait();
                        if ((yield o("WAWebGetMessageCache").getMessageCache().size()) === 0 && (yield o("WAWebGetMessageCache").getMessageCache().checkpointQueueSize()) === 0) {
                            e();
                        } else if (n + 1 >= S) {
                            o("WALogger").WARN(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                                "[passive] flush message cache: stop after ",
                                " attempts"
                            ])), S);
                            e();
                        }
                    });
                    return function(t, n, r) {
                        return e.apply(this, arguments);
                    };
                })());
                I = o("WAPromiseTimeout").promiseTimeout(e, R);
                yield I;
                o("WALogger").LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                    "[passive] flush message cache: done"
                ])));
            } catch (e) {
                if (e instanceof o("WACustomError").TimeoutError) {
                    o("WALogger").ERROR(C || (C = babelHelpers.taggedTemplateLiteralLoose([
                        "[passive] flush message cache: timeout"
                    ]))).sendLogs("passive-flush-message-cache-timeout", {
                        sampling: 0.01
                    });
                } else {
                    o("WALogger").ERROR(b || (b = babelHelpers.taggedTemplateLiteralLoose([
                        "[passive] flush message cache failed: ",
                        ""
                    ])), e).verbose().sendLogs("passive-flush-message-cache-failed", {
                        sampling: 0.01
                    });
                }
            } finally{
                I = null;
            }
        });
        return D.apply(this, arguments);
    }
    l.registerPassiveTasksForConnectMainThread = L;
}, 98);