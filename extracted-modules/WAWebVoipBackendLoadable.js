__d("WAWebVoipBackendLoadable", [
    "JSResourceForInteraction",
    "Promise",
    "WACustomError",
    "WALogger",
    "WAPromiseTimeout",
    "WAWebABProps",
    "WAWebCoreActionsODS",
    "WAWebPageVisibilityRecency",
    "WAWebVoipBootInitDecision",
    "WAWebVoipChunkLoadFailFast",
    "WAWebVoipDeferredBootLogging",
    "WAWebVoipGatingUtils",
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
    let f;
    let g;
    const h = 5000;
    const y = new Set;
    const C = (()=>{
        const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = yield (g || (g = n("Promise"))).all([
                E().load(),
                k().load()
            ]);
            const t = e[0];
            const r = e[1];
            return {
                WAWebVoipInit: t,
                WAWebHandleVoipCallOffer: r
            };
        });
        return function() {
            return e.apply(this, arguments);
        };
    })();
    function b() {
        if (I()) {
            return v();
        }
        return C();
    }
    function v() {
        return o("WAWebVoipChunkLoadFailFast").failFastOnVoipChunkLoadError(C(), [
            E().getModuleId(),
            k().getModuleId()
        ]);
    }
    function S() {
        try {
            if (!o("WAWebVoipGatingUtils").isVoipDownloadEnabled() || o("WAWebVoipBootInitDecision").isDeferredVoipBootInitEnabled()) {
                return null;
            }
        } catch (t) {
            o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(function() {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [deferred-boot] boot backend prefetch gate failed"
                ]))).catching(r("getErrorSafe")(t));
            });
        }
        return C();
    }
    function R(e) {
        o("WAWebPageVisibilityRecency").startPageVisibilityRecencyTracking();
        let t;
        try {
            if (!o("WAWebVoipGatingUtils").isVoipDownloadEnabled()) {
                o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(function() {
                    o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [deferred-boot] boot_gate source=",
                        " decision=skip reason=download_disabled"
                    ])), e);
                });
                return (g || (g = n("Promise"))).resolve();
            }
            t = o("WAWebVoipBootInitDecision").isDeferredVoipBootInitEnabled();
        } catch (t) {
            x(t, "gate", e);
            return D(e, true);
        }
        o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(function() {
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [deferred-boot] boot_gate source=",
                " decision=",
                ""
            ])), e, t ? "deferred" : "eager");
        });
        if (t) {
            $(e);
            M(e);
            return (g || (g = n("Promise"))).resolve();
        }
        return D(e);
    }
    function L() {
        y.clear();
    }
    function E() {
        return r("JSResourceForInteraction")("WAWebVoipInit").__setRef("WAWebVoipBackendLoadable");
    }
    function k() {
        return r("JSResourceForInteraction")("WAWebHandleVoipCallOffer").__setRef("WAWebVoipBackendLoadable");
    }
    function I() {
        try {
            return o("WAWebVoipBootInitDecision").isDeferredVoipBootEarlyModulePrefetchEnabled();
        } catch (e) {
            o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(function() {
                o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [deferred-boot] chunk_fail_fast gate_failed"
                ]))).catching(r("getErrorSafe")(e));
            });
            return false;
        }
    }
    function T(e) {
        try {
            return !o("WAWebVoipGatingUtils").isVoipDownloadEnabled();
        } catch (t) {
            x(t, "gate", e);
            return false;
        }
    }
    function D(e, t = false) {
        return C().then(({ WAWebVoipInit: r })=>{
            if (!(t && T(e))) {
                return r.initWAWebVoip();
            }
        });
    }
    function x(e, t, n) {
        o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(function() {
            o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [deferred-boot] failed stage=",
                " source=",
                ""
            ])), t, n).catching(r("getErrorSafe")(e)).sendLogs("voip-deferred-boot-failed");
        });
    }
    function $(e) {
        let t = false;
        (g || (g = n("Promise"))).resolve().then(()=>{
            const n = r("JSResourceForInteraction")("WAWebVoipBootInitScheduler").__setRef("WAWebVoipBackendLoadable").load();
            return o("WAPromiseTimeout").promiseTimeout(n, h).catch((r)=>{
                if (!(r instanceof o("WACustomError").TimeoutError) || !P()) {
                    throw r;
                }
                t = true;
                o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(function() {
                    N("wait");
                    o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [deferred-boot] schedule_wait source=",
                        " reason=scheduler_load_timeout"
                    ])), e);
                });
                return n;
            });
        }).then(({ scheduleDeferredVoipBootInit: t })=>{
            t(true);
        }).catch((n)=>{
            if (t) {
                x(n, "scheduler_after_wait", e);
                return;
            }
            if (n instanceof o("WACustomError").TimeoutError) {
                o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(function() {
                    N("fail_open");
                    o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [deferred-boot] schedule_fail_open source=",
                        " reason=scheduler_load_timeout"
                    ])), e);
                });
            } else {
                x(n, "scheduler", e);
            }
            if (!T(e)) {
                D(e, true).catch((t)=>{
                    x(t, "fallback", e);
                });
            }
        });
    }
    function P() {
        return o("WAWebABProps").getABPropConfigValue("web_voip_deferred_boot_init_max_delay_ms") <= 0;
    }
    function N(e) {
        if (!y.has(e)) {
            y.add(e);
            o("WAWebCoreActionsODS").logCallVoipBootGateSchedulerLoadTimeout(e);
        }
    }
    function M(e) {
        let t;
        try {
            t = o("WAWebVoipBootInitDecision").isDeferredVoipBootEarlyModulePrefetchEnabled();
        } catch (t) {
            o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(function() {
                o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [deferred-boot] wasm_idle_warm gate_failed source=",
                    ""
                ])), e).catching(r("getErrorSafe")(t)).tags("non-sad").sendLogs("voip-deferred-boot-wasm-idle-warm-gate-failed");
            });
            return;
        }
        if (t) {
            (g || (g = n("Promise"))).resolve().then(()=>r("JSResourceForInteraction")("WAWebVoipWasmIdleWarm").__setRef("WAWebVoipBackendLoadable").load()).then(({ scheduleVoipWasmIdleWarm: n })=>n(e)).catch((t)=>{
                o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(function() {
                    o("WALogger").WARN(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [deferred-boot] wasm_idle_warm trigger_failed source=",
                        ""
                    ])), e).catching(r("getErrorSafe")(t));
                });
            });
        }
    }
    l.requireVoipJsBackend = C;
    l.requireVoipJsBackendForCall = b;
    l.requireVoipJsBackendFailFast = v;
    l.prefetchVoipJsBackendAtBoot = S;
    l.initializeVoipFromBootGate = R;
    l.resetVoipBackendLoadableForTesting = L;
}, 98);