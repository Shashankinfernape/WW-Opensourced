__d("WAWebVoipCrashRecovery", [
    "WALogger",
    "WAWebABProps",
    "WAWebBackendApi",
    "WAWebBrowserApi",
    "WAWebCallRandomIdStore",
    "WAWebCallUserJourneyGating",
    "WAWebCallWamEvent",
    "WAWebCoreActionsODS",
    "WAWebLocalStorage",
    "WAWebVoipBatteryDiagnostics",
    "WAWebVoipBrowserMetrics",
    "WAWebVoipCallRatingStore",
    "WAWebVoipDeviceClassUtils",
    "WAWebVoipGatingUtils",
    "WAWebVoipJsonParsersWeb",
    "WAWebVoipPersistentFS",
    "WAWebWamEnumAppExitReason",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    "use strict";
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
    let S;
    let R;
    let L;
    let E;
    let k;
    let I;
    const T = "wa_voip_call_state";
    const D = "wa_voip_web_transport_used";
    const x = "wa_voip_call_random_id";
    const $ = "wa_voip_call_id";
    const P = "active";
    const N = "closing";
    const M = {
        callId: null,
        callRandomId: null,
        callState: null,
        webTransportUsed: null
    };
    const w = 0;
    let A = false;
    let F = null;
    let O = null;
    function B() {
        return o("WAWebABProps").getABPropConfigValue("app_exit_reason_version") > 0;
    }
    function W({ callState }) {
        if (callState === N) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[voip:recovery] exit=USER_REQUESTED (tab close)"
            ])));
            return o("WAWebWamEnumAppExitReason").APP_EXIT_REASON.USER_REQUESTED;
        }
        if (callState === P) {
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "[voip:recovery] exit=CRASH (no beforeunload)"
            ])));
            return o("WAWebWamEnumAppExitReason").APP_EXIT_REASON.CRASH;
        }
        return o("WAWebWamEnumAppExitReason").APP_EXIT_REASON.UNKNOWN;
    }
    function q() {
        if (r("WAWebLocalStorage") == null) {
            return M;
        }
        try {
            let e;
            return {
                callId: (e = r("WAWebLocalStorage")).getItem($),
                callRandomId: e.getItem(x),
                callState: e.getItem(T),
                webTransportUsed: e.getItem(D)
            };
        } catch (e) {
            return M;
        }
    }
    function U(e) {
        if (r("WAWebLocalStorage") != null) {
            try {
                const t = q();
                if (t.callId !== e.callId || t.callRandomId !== e.callRandomId || t.callState !== e.callState || t.webTransportUsed !== e.webTransportUsed) {
                    o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[voip:recovery] markers changed since recovery started, keep"
                    ])));
                    return;
                }
                r("WAWebLocalStorage").removeItem(T);
                r("WAWebLocalStorage").removeItem(D);
                r("WAWebLocalStorage").removeItem(x);
                r("WAWebLocalStorage").removeItem($);
            } catch (e) {}
        }
    }
    function V(e, t, n) {
        e.appExitReason = t;
        const r = o("WAWebBrowserApi").getNumCpu();
        const a = o("WAWebBrowserApi").getMemClass();
        if (r != null) {
            e.numCpuCores = r;
        }
        if (a != null) {
            e.totalMemoryGb = Math.round(a / 1000);
        }
        const i = a != null ? Math.round(a / 1000) : null;
        const l = o("WAWebVoipDeviceClassUtils").computeDeviceClass(r, i);
        if (l != null) {
            e.deviceClass = l;
        }
        const s = o("WAWebVoipBrowserMetrics").getBrowserMetricsCapabilities();
        e.browserCpuPressureSupported = s.browserCpuPressureSupported;
        e.browserMemorySupported = s.browserMemorySupported;
        const u = o("WAWebVoipBatteryDiagnostics").getBatteryDiagnosticsCapabilities();
        e.browserBatterySupported = u.browserBatterySupported;
        e.webTransportUsed = n.webTransportUsed === "1";
    }
    function H(e, { callRandomId }) {
        if (callRandomId != null) {
            e.callRandomId = callRandomId;
        }
        if (o("WAWebCallUserJourneyGating").isCallUserJourneyLoggingEnabled()) {
            delete e.micPermission;
            delete e.cameraPermission;
        }
    }
    function G(e, t) {
        return z.apply(this, arguments);
    }
    function z() {
        z = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            try {
                e.cleanupUnfinishedCallStats();
                yield o("WAWebVoipPersistentFS").syncPersistentFS(e);
                U(t);
                o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip:recovery] cleaned up fieldstats"
                ])));
            } catch (error) {
                o("WAWebCoreActionsODS").logCallFieldstatsRecoveryCleanupFailed();
                o("WALogger").ERROR(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip:recovery] fieldstats cleanup failed"
                ]))).catching(r("getErrorSafe")(error)).sendLogs("voip-fieldstats-recovery-cleanup-failed", {
                    employeeSampling: 1,
                    sampling: 0.01,
                    sendLogsType: o("WALogger").SendLogsType.INVESTIGATION
                });
            }
        });
        return z.apply(this, arguments);
    }
    function j(e) {
        const t = babelHelpers.extends({}, r("WAWebVoipJsonParsersWeb").parseFieldstatsData(e).stats);
        if (t.callTermReason === w) {
            delete t.callTermReason;
        }
        delete t.callResult;
        return t;
    }
    function K(e, t, n) {
        const r = j(e);
        V(r, t, n);
        H(r, n);
        return new (o("WAWebCallWamEvent")).CallWamEvent(r);
    }
    function Q(e, t) {
        return X.apply(this, arguments);
    }
    function X() {
        X = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (A) {
                o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip:recovery] already attempted, skip"
                ])));
                return;
            }
            A = true;
            let n = false;
            try {
                const a = o("WAWebVoipPersistentFS").getVoipPersistentDirectoryPath();
                if (a === "") {
                    o("WALogger").WARN(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                        "[voip:recovery] no cache dir, skip"
                    ])));
                    return;
                }
                yield o("WAWebVoipPersistentFS").initPersistentFS(e);
                const i = e.getUnfinishedCallFieldstats(a);
                if (i == null || i.length === 0) {
                    o("WALogger").LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                        "[voip:recovery] no unfinished fieldstats"
                    ])));
                    return;
                }
                o("WALogger").LOG(C || (C = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip:recovery] found fieldstats len=",
                    ""
                ])), i.length);
                n = true;
                o("WAWebCoreActionsODS").logCallErrorTerminal();
                o("WAWebCoreActionsODS").logCallFieldstatsRecoveryFound();
                if (o("WAWebVoipCallRatingStore").werePersistedFieldstatsHandedOff(i)) {
                    o("WAWebCoreActionsODS").logCallFieldstatsRecoveryDuplicateSuppressed();
                    o("WALogger").LOG(b || (b = babelHelpers.taggedTemplateLiteralLoose([
                        "[voip:recovery] skipping fieldstats already handed to WAM"
                    ])));
                    yield G(e, t);
                    return;
                }
                const l = W(t);
                let s;
                try {
                    s = K(i, l, t);
                } catch (error) {
                    o("WAWebCoreActionsODS").logCallFieldstatsRecoveryParseFailed();
                    o("WALogger").ERROR(v || (v = babelHelpers.taggedTemplateLiteralLoose([
                        "[voip:recovery] invalid persisted fieldstats"
                    ]))).catching(r("getErrorSafe")(error)).sendLogs("voip-fieldstats-recovery-parse-failed", {
                        employeeSampling: 1,
                        sampling: 0.01,
                        sendLogsType: o("WALogger").SendLogsType.INVESTIGATION
                    });
                    yield G(e, t);
                    return;
                }
                if (l === o("WAWebWamEnumAppExitReason").APP_EXIT_REASON.CRASH) {
                    o("WAWebCoreActionsODS").logCallWasmCrash();
                }
                yield s.commitAndWaitForFlush();
                o("WAWebVoipCallRatingStore").markPersistedFieldstatsHandedOff(i);
                o("WALogger").LOG(S || (S = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip:recovery] uploaded fieldstats exit=",
                    ""
                ])), l);
                o("WAWebCoreActionsODS").logCallFieldstatsRecoveryCompleted();
                yield G(e, t);
            } catch (error) {
                A = false;
                if (n) {
                    o("WAWebCoreActionsODS").logCallFieldstatsRecoveryFailed();
                    o("WALogger").ERROR(R || (R = babelHelpers.taggedTemplateLiteralLoose([
                        "[voip:recovery] fieldstats recovery failed"
                    ]))).catching(r("getErrorSafe")(error)).sendLogs("voip-fieldstats-recovery-failed", {
                        employeeSampling: 1,
                        sampling: 0.01,
                        sendLogsType: o("WALogger").SendLogsType.INVESTIGATION
                    });
                } else {
                    o("WAWebCoreActionsODS").logCallFieldstatsRecoveryInitFailed();
                    o("WALogger").ERROR(L || (L = babelHelpers.taggedTemplateLiteralLoose([
                        "[voip:recovery] fieldstats discovery failed"
                    ]))).catching(r("getErrorSafe")(error)).sendLogs("voip-fieldstats-recovery-init-failed", {
                        employeeSampling: 1,
                        sampling: 0.01,
                        sendLogsType: o("WALogger").SendLogsType.INVESTIGATION
                    });
                }
            }
        });
        return X.apply(this, arguments);
    }
    function Y() {
        return J.apply(this, arguments);
    }
    function J() {
        J = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (!B()) {
                o("WALogger").LOG(E || (E = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip:recovery] exit reason feature disabled, skip"
                ])));
                return;
            }
            if (O == null) {
                O = q();
            }
            const e = O;
            try {
                o("WALogger").LOG(k || (k = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip:recovery] init fieldstats recovery"
                ])));
                const t = yield o("WAWebBackendApi").frontendSendAndReceive("initializeVoipWasm");
                yield Q(t, e);
            } catch (error) {
                o("WALogger").ERROR(I || (I = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip:recovery] init failed"
                ]))).catching(r("getErrorSafe")(error));
            }
        });
        return J.apply(this, arguments);
    }
    function Z(e) {
        if (r("WAWebLocalStorage") != null) {
            try {
                r("WAWebLocalStorage").setItem($, e);
                r("WAWebLocalStorage").setItem(T, P);
                r("WAWebLocalStorage").setItem(D, o("WAWebVoipGatingUtils").isWebTransportEnabled() ? "1" : "0");
                const t = o("WAWebCallRandomIdStore").getCurrentCallRandomId();
                if (t != null) {
                    r("WAWebLocalStorage").setItem(x, t);
                } else {
                    r("WAWebLocalStorage").removeItem(x);
                }
                o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip:recovery] call active: ",
                    ""
                ])), e);
            } catch (e) {}
        }
    }
    function ee(e) {
        if (r("WAWebLocalStorage") != null) {
            try {
                const t = r("WAWebLocalStorage").getItem(T);
                if (t === P) {
                    r("WAWebLocalStorage").setItem(T, N);
                    o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "[voip:recovery] graceful exit marked: ",
                        ""
                    ])), e);
                }
            } catch (e) {}
        }
    }
    function te(e) {
        if (r("WAWebLocalStorage") != null) {
            try {
                const t = r("WAWebLocalStorage").getItem(T);
                if (t === N) {
                    r("WAWebLocalStorage").setItem(T, P);
                    o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                        "[voip:recovery] graceful exit cancelled: ",
                        ""
                    ])), e);
                }
            } catch (e) {}
        }
    }
    function ne(e) {
        if (r("WAWebLocalStorage") != null) {
            try {
                r("WAWebLocalStorage").removeItem(T);
                r("WAWebLocalStorage").removeItem(D);
                r("WAWebLocalStorage").removeItem($);
                o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip:recovery] state cleared (call end): ",
                    ""
                ])), e);
            } catch (e) {}
        }
    }
    function re(e) {
        if (!(r("WAWebLocalStorage") == null || e == null)) {
            try {
                if (r("WAWebLocalStorage").getItem(x) === e) {
                    r("WAWebLocalStorage").removeItem(x);
                }
            } catch (e) {}
        }
    }
    function oe(e) {
        ae();
        if (typeof window !== "undefined") {
            let t = null;
            const n = ()=>{
                if (t != null) {
                    window.clearTimeout(t);
                    t = null;
                }
            };
            const r = function() {
                ee(e);
                n();
                t = window.setTimeout(function() {
                    t = null;
                    te(e);
                }, 0);
            };
            const o = function() {
                n();
                ee(e);
            };
            window.addEventListener("beforeunload", r);
            window.addEventListener("pagehide", o);
            F = function() {
                n();
                window.removeEventListener("beforeunload", r);
                window.removeEventListener("pagehide", o);
            };
        }
    }
    function ae() {
        if (F != null) {
            F();
            F = null;
        }
    }
    l.initCrashRecovery = Y;
    l.markCallActive = Z;
    l.clearExitMarkers = ne;
    l.clearCallRandomIdMarker = re;
    l.registerGracefulExitHandler = oe;
    l.unregisterGracefulExitHandler = ae;
}, 98);