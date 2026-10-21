__d("WAWebInAppSignupInfoStore", [
    "JSResourceForInteraction",
    "Promise",
    "WALogger",
    "WAPromiseDelays",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebBoolFunc",
    "WAWebInAppSignupInfoCache",
    "WAWebModelStorageUtils",
    "WAWebSchemaInAppSignupInfo",
    "asyncToGeneratorRuntime",
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
    const f = "in-app-signup-info";
    let g = null;
    const h = new Map;
    const y = new Map;
    let C = 0;
    function b() {
        if (o("WAWebSchemaInAppSignupInfo").canUseInAppSignupInfoTable()) {
            if (g == null) {
                g = o("WAWebSchemaInAppSignupInfo").getInAppSignupInfoTable().all().then((e)=>{
                    o("WAWebInAppSignupInfoCache").primeInAppSignupInfoCache(e);
                    if (e.some((e)=>e.pendingConfirmationSignupId != null)) {
                        P("deferExpiredPendingConfirmations");
                    }
                }).catch((t)=>{
                    g = null;
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[ias-store] hydrate failed"
                    ]))).catching(r("getErrorSafe")(t)).sendLogs("ias-store-hydrate-failed");
                });
            }
            return g;
        }
        return (_ || (_ = n("Promise"))).resolve();
    }
    function v() {
        g = null;
        h.clear();
        y.clear();
        C++;
        o("WAWebInAppSignupInfoCache").clearInAppSignupInfoCache();
    }
    function S(e, t) {
        return R.apply(this, arguments);
    }
    function R() {
        R = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            try {
                if (!o("WAWebABProps").getABPropConfigValue("inapp_signup_m1_logging_enabled") || !o("WAWebSchemaInAppSignupInfo").canUseInAppSignupInfoTable()) {
                    return "unavailable";
                }
                yield b();
                const n = o("WAWebSchemaInAppSignupInfo").getInAppSignupInfoTable();
                yield n.createOrMerge(e, babelHelpers.extends({}, t, {
                    id: e
                }));
                o("WAWebInAppSignupInfoCache").setInAppSignupInfo(o("WAWebInAppSignupInfoCache").buildMergedInAppSignupInfoRow(e, t));
                return "written";
            } catch (e) {
                o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[ias-store] write failed"
                ]))).catching(r("getErrorSafe")(e)).sendLogs("ias-store-write-failed");
                return "write_failed";
            }
        });
        return R.apply(this, arguments);
    }
    function L(e, t) {
        return E.apply(this, arguments);
    }
    function E() {
        E = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (o("WAWebABProps").getABPropConfigValue("inapp_signup_m1_logging_enabled")) {
                yield b();
                const r = o("WAWebInAppSignupInfoCache").getInAppSignupInfo(e);
                if (r?.iasOptinDs == null) {
                    yield S(e, {
                        isIasSubscriber: true,
                        iasOptinDs: G(),
                        iasEntryPoint: r?.iasEntryPoint ?? t
                    });
                }
            }
        });
        return E.apply(this, arguments);
    }
    function k(e, t) {
        return I.apply(this, arguments);
    }
    function I() {
        I = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (o("WAWebABProps").getABPropConfigValue("inapp_signup_m1_logging_enabled")) {
                yield b();
                if (o("WAWebInAppSignupInfoCache").getInAppSignupInfo(e)?.iasOptinDs == null) {
                    yield S(e, {
                        iasEntryPoint: t
                    });
                }
            }
        });
        return I.apply(this, arguments);
    }
    const T = 60000;
    const D = 2000;
    function x(e, t) {
        return $.apply(this, arguments);
    }
    function $() {
        $ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = o("WATimeUtils").unixTimeMs();
            const r = n + T;
            const a = yield S(e, {
                pendingConfirmationSignupId: t,
                pendingConfirmationDeadlineMs: r
            });
            if (a !== "written") {
                return a;
            }
            O(t, r, n);
            return "written";
        });
        return $.apply(this, arguments);
    }
    function P(e) {
        if (o("WAWebABProps").getABPropConfigValue("inapp_signup_m1_logging_enabled")) {
            const t = C;
            try {
                r("JSResourceForInteraction")("WAWebPendingConfirmationSweep").__setRef("WAWebInAppSignupInfoStore").load().then((n)=>{
                    if (t === C) {
                        return n[e]();
                    }
                }).catch((t)=>o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[signup:confirmation] ",
                        " failed"
                    ])), e).catching(r("getErrorSafe")(t)).sendLogs("signup-pending-confirmation-sweep-failed"));
            } catch (t) {
                o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[signup:confirmation] ",
                    " failed to start"
                ])), e).catching(r("getErrorSafe")(t)).sendLogs("signup-pending-confirmation-sweep-failed");
            }
        }
    }
    function N(e, t) {
        return M.apply(this, arguments);
    }
    function M() {
        M = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            try {
                if (!o("WAWebABProps").getABPropConfigValue("inapp_signup_m1_logging_enabled") || !o("WAWebSchemaInAppSignupInfo").canUseInAppSignupInfoTable()) {
                    return "unavailable";
                }
                yield b();
                const i = o("WATimeUtils").unixTimeMs();
                const l = i + t;
                const s = yield o("WAWebModelStorageUtils").getStorage().lock([
                    f
                ], (()=>{
                    const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*([r]) {
                        const o = yield r.all();
                        const a = o.find((t)=>t.pendingConfirmationSignupId === e && t.pendingConfirmationDeadlineMs != null);
                        if (a == null) {
                            return null;
                        }
                        const i = (a.pendingConfirmationDeadlineMs ?? 0) < l;
                        if (i) {
                            yield r.createOrMerge(a.id, {
                                id: a.id,
                                pendingConfirmationDeadlineMs: l
                            });
                        }
                        return {
                            existing: a,
                            wrote: i
                        };
                    });
                    return function(e) {
                        return t.apply(this, arguments);
                    };
                })());
                if (s == null) {
                    return "not_found";
                }
                const u = Math.max(s.existing.pendingConfirmationDeadlineMs ?? 0, l);
                o("WAWebInAppSignupInfoCache").setInAppSignupInfo(o("WAWebInAppSignupInfoCache").buildMergedInAppSignupInfoRow(s.existing.id, {
                    pendingConfirmationDeadlineMs: u
                }));
                O(e, u, i);
                if (s.wrote) {
                    return "written";
                }
                return "unchanged";
            } catch (e) {
                o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[ias-store] restart failed"
                ]))).catching(r("getErrorSafe")(e)).sendLogs("ias-store-restart-failed");
                return "write_failed";
            }
        });
        return M.apply(this, arguments);
    }
    const w = 3;
    const A = 60000;
    function F(e) {
        const n = y.get(e) ?? 0;
        if (!(n >= w)) {
            const r = o("WATimeUtils").unixTimeMs();
            const a = O(e, r + A, r);
            if (a) {
                y.set(e, n + 1);
            }
        }
    }
    function O(e, t, n) {
        const a = h.get(e);
        if (a != null && a >= t) {
            return false;
        }
        h.set(e, t);
        const i = C;
        o("WAPromiseDelays").delayMs(t - n + D).then(()=>{
            if (i === C) {
                if (h.get(e) === t) {
                    h.delete(e);
                }
                P("sweepExpiredPendingConfirmations");
            }
        }).catch((t)=>o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "[signup:confirmation] sweep timer failed signupId=",
                ""
            ])), e).catching(r("getErrorSafe")(t)).sendLogs("signup-pending-confirmation-sweep-failed"));
        return true;
    }
    function B(e) {
        return W.apply(this, arguments);
    }
    function W() {
        W = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            return V(e, o("WAWebBoolFunc").returnTrue);
        });
        return W.apply(this, arguments);
    }
    function q(e, t) {
        return U.apply(this, arguments);
    }
    function U() {
        U = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            return V(e, function(e) {
                return e.pendingConfirmationDeadlineMs != null && e.pendingConfirmationDeadlineMs <= t;
            });
        });
        return U.apply(this, arguments);
    }
    function V(e, t) {
        return H.apply(this, arguments);
    }
    function H() {
        H = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            try {
                if (!o("WAWebABProps").getABPropConfigValue("inapp_signup_m1_logging_enabled") || !o("WAWebSchemaInAppSignupInfo").canUseInAppSignupInfoTable()) {
                    return "unavailable";
                }
                yield b();
                const a = yield o("WAWebModelStorageUtils").getStorage().lock([
                    f
                ], (()=>{
                    const r = n("asyncToGeneratorRuntime").asyncToGenerator(function*([r]) {
                        const o = yield r.all();
                        const a = o.find((t)=>t.pendingConfirmationSignupId === e);
                        if (a == null) {
                            return {
                                row: null,
                                cleared: false
                            };
                        }
                        if (t(a)) {
                            yield r.createOrMerge(a.id, {
                                id: a.id,
                                pendingConfirmationSignupId: void 0,
                                pendingConfirmationDeadlineMs: void 0
                            });
                            return {
                                row: a,
                                cleared: true
                            };
                        }
                        return {
                            row: a,
                            cleared: false
                        };
                    });
                    return function(e) {
                        return r.apply(this, arguments);
                    };
                })());
                if (a.row == null) {
                    y.delete(e);
                    return "not_found";
                }
                if (!a.cleared) {
                    const i = a.row.pendingConfirmationDeadlineMs;
                    if (i != null) {
                        O(e, i, o("WATimeUtils").unixTimeMs());
                    }
                    return "not_expired";
                }
                const l = a.row;
                o("WAWebInAppSignupInfoCache").setInAppSignupInfo(babelHelpers.extends({}, o("WAWebInAppSignupInfoCache").buildMergedInAppSignupInfoRow(l.id, l), {
                    pendingConfirmationSignupId: void 0,
                    pendingConfirmationDeadlineMs: void 0
                }));
                y.delete(e);
                return "cleared";
            } catch (e) {
                o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[ias-store] stop failed"
                ]))).catching(r("getErrorSafe")(e)).sendLogs("ias-store-stop-failed");
                return "write_failed";
            }
        });
        return H.apply(this, arguments);
    }
    function G() {
        return new Intl.DateTimeFormat("en-CA", {
            timeZone: "America/Los_Angeles",
            year: "numeric",
            month: "2-digit",
            day: "2-digit"
        }).format(o("WATimeUtils").unixTimeMs()).replace(/-/g, "/");
    }
    l.ensureInAppSignupInfoHydrated = b;
    l.clearInAppSignupInfo = v;
    l.saveOptinDate = L;
    l.saveEntryPoint = k;
    l.startPendingConfirmationTimer = x;
    l.restartPendingConfirmationTimer = N;
    l.schedulePendingConfirmationRetry = F;
    l.schedulePendingConfirmationSweep = O;
    l.stopPendingConfirmationTimer = B;
    l.stopExpiredPendingConfirmationTimer = q;
}, 98);