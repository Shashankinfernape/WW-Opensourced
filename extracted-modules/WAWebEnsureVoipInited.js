__d("WAWebEnsureVoipInited", [
    "Promise",
    "WALogger",
    "WAWebCoreActionsODS",
    "WAWebPageVisibilityRecency",
    "WAWebVoipBackendLoadable",
    "WAWebVoipCallBlockedModals",
    "WAWebVoipChunkLoadFailFast",
    "WAWebVoipColdPathEarlyStart",
    "WAWebVoipDeferredBootLogging",
    "WAWebVoipInitEventEmitter",
    "WAWebVoipInitReloadRecovery",
    "asyncToGeneratorRuntime",
    "err"
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
    const f = ((e)=>{
        function t(t) {
            let n;
            n = e.call(this, "VoIP initialization requires a page reload") || this;
            n.name = "VoipInitUnavailableError";
            n.reason = t;
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(babelHelpers.wrapNativeSuper(Error));
    function g(e) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const n = o("WAWebPageVisibilityRecency").snapshotPageVisibility();
            if (t === "call") {
                o("WAWebVoipColdPathEarlyStart").startVoipColdPathEarly("call", n);
            }
            o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(function() {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [deferred-boot] intent init_start trigger=",
                    ""
                ])), t);
            });
            const a = yield o("WAWebVoipBackendLoadable").requireVoipJsBackendForCall();
            const a_WAWebVoipInit = a.WAWebVoipInit;
            o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(function() {
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [deferred-boot] intent backend_ready trigger=",
                    ""
                ])), t);
            });
            yield a_WAWebVoipInit.initWAWebVoip(t, undefined, undefined, Math.round(self.performance.now() - n.atMs), n);
            if (o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.getIsVoipInited()) {
                return false;
            }
            let l = false;
            if (o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.getDidVoipInitError()) {
                l = true;
                o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(function() {
                    o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [deferred-boot] intent retry_requested trigger=",
                        ""
                    ])), t);
                });
                yield a_WAWebVoipInit.retryWAWebVoipInitAfterFailure();
            }
            if (!o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.getIsVoipInited()) {
                throw r("err")("VoIP initialization did not complete");
            }
            return l;
        });
        return h.apply(this, arguments);
    }
    function y(e, t) {
        return C.apply(this, arguments);
    }
    function C() {
        C = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = ((e)=>{
                if (e === "cancelled") {
                    return null;
                }
                if (e === "artifact_unavailable") {
                    return "artifact_unavailable";
                }
                if (e === "unavailable") {
                    return "stuck";
                }
                throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
            })((yield e));
            if (n != null) {
                throw new f(n);
            }
            return yield t;
        });
        return C.apply(this, arguments);
    }
    function b(e, t) {
        return v.apply(this, arguments);
    }
    function v() {
        v = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e = "call", t) {
            if (o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.getIsVoipStackUnresponsive()) {
                o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(function() {
                    o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [deferred-boot] intent blocked trigger=",
                        " reason=stack_unresponsive"
                    ])), e);
                });
                o("WAWebCoreActionsODS").logCallInitBlockedStackUnresponsive();
                o("WAWebVoipCallBlockedModals").showVoipInitUnavailableModal();
                throw new f("stack_unresponsive");
            }
            if (o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.getIsVoipInited()) {
                o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(function() {
                    o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [deferred-boot] intent init_skip trigger=",
                        " reason=already_inited"
                    ])), e);
                });
                return;
            }
            const r = e === "call" ? o("WAWebVoipInitReloadRecovery").beginOutgoingVoipInitReloadRecovery(t) : null;
            try {
                const a = g(e);
                const i = r == null ? yield a : yield (_ || (_ = n("Promise"))).race([
                    a,
                    y(r.result, a)
                ]);
                o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(function() {
                    o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [deferred-boot] intent init_ready trigger=",
                        " retry_requested=",
                        ""
                    ])), e, i);
                });
            } catch (error) {
                const l = S(error);
                const s = l instanceof f ? "reload_required" : "failed";
                o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(function() {
                    o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [deferred-boot] intent init_failed trigger=",
                        " outcome=",
                        ""
                    ])), e, s);
                });
                throw l;
            } finally{
                r?.finish();
            }
        });
        return v.apply(this, arguments);
    }
    function S(error) {
        if (error instanceof o("WAWebVoipChunkLoadFailFast").VoipChunkLoadError) {
            o("WAWebVoipInitReloadRecovery").markVoipChunkUnavailable();
            return new f("chunk_load_failed");
        }
        return error;
    }
    l.VoipInitUnavailableError = f;
    l.ensureVoipInitialized = b;
}, 98);