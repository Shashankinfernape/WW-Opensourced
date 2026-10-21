__d("WAWebVoipWebLoadable", [
    "JSResourceForInteraction",
    "Promise",
    "WACustomError",
    "WALogger",
    "WAPromiseTimeout",
    "WAWebABProps",
    "WAWebAppTracker",
    "WAWebBoolFunc",
    "WAWebCoreActionsODS",
    "WAWebEventsWaitForOfflineDeliveryEnd",
    "WAWebLazyLoadedRetriable",
    "WAWebNoop",
    "WAWebReleaseToEventLoop",
    "WAWebVoipBootInitDecision",
    "WAWebVoipGatingUtils",
    "WAWebVoipInitReloadRecovery",
    "WAWebVoipPthreadGlueFailureTracker",
    "WAWebVoipPthreadHardening",
    "WAWebVoipQplHelpers",
    "WAWebVoipThreadPoolManager",
    "WAWebVoipThreadPoolManagerRegistry",
    "WAWebVoipWasmArtifactGating",
    "WAWebVoipWasmArtifactSkewErrors",
    "WAWebVoipWasmHeapMonitor",
    "WAWebVoipWasmResourceTiming",
    "WAWebVoipWebTransportPthreadPrewarm",
    "WAWebVoipWebWasmVariantLoader",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    const initialPthreadPoolSize = 0;
    const f = 20;
    const g = 5000;
    let h = null;
    let y = false;
    let C = null;
    let b = false;
    let v = false;
    let S = null;
    function R() {
        const e = C;
        if (e != null) {
            return e;
        }
        const t = o("WAWebVoipWasmArtifactGating").selectVoipWasmArtifacts();
        C = t;
        t.then((e)=>{
            b = e.useContentAddressedWasm;
        }, ()=>{
            b = false;
        });
        return t;
    }
    function L() {
        return E.apply(this, arguments);
    }
    function E() {
        E = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = yield R();
            return e.useContentAddressedWasm;
        });
        return E.apply(this, arguments);
    }
    function k(t) {
        if (!t.pinWorkerGlue || !o("WAWebVoipPthreadGlueFailureTracker").isPinnedWorkerGlueUnpinnedForPage()) {
            return t;
        }
        if (!v) {
            v = true;
            o("WAWebCoreActionsODS").logCallVoipInitWasmArtifactWorkerGlueUnpinnedFallback();
        }
        o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "voip: pinned worker glue unavailable; retrying with the unpinned worker bundle"
        ])));
        return babelHelpers.extends({}, t, {
            pinWorkerGlue: false
        });
    }
    function I() {
        return T.apply(this, arguments);
    }
    function T() {
        T = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = yield L();
            if (e) {
                yield r("JSResourceForInteraction")("WAWebVoipWebWasmLoader_ContentAddressed_internal").__setRef("WAWebVoipWebLoadable").load();
                return;
            }
            yield r("JSResourceForInteraction")("WAWebVoipWebWasmLoader").__setRef("WAWebVoipWebLoadable").load();
        });
        return T.apply(this, arguments);
    }
    function isTerminalError(e) {
        const t = `${e.name}: ${e.message}`;
        if (t.includes(o("WAWebVoipWasmArtifactSkewErrors").WORKER_GLUE_BUILD_MISMATCH_TOKEN)) {
            return true;
        }
        if (b) {
            return t.toLowerCase().includes("unknown file path");
        }
        return false;
    }
    function x(e) {
        return `${e.name}: ${e.message}`.includes(o("WAWebVoipWasmArtifactSkewErrors").PINNED_WORKER_GLUE_LOAD_FAILED_TOKEN);
    }
    function $(e) {
        if (y || navigator.onLine === false) {
            return true;
        }
        const t = `${e.name}: ${e.message}`.toLowerCase();
        return t.includes("bootload") || t.includes("failed to load") || t.includes("failed to fetch") || t.includes("networkerror") || t.includes("load timeout") || t.includes("loadable:voipwebwasmloader");
    }
    const P = r("WAWebLazyLoadedRetriable")(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
        o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
            "voip: Loading VoIP WASM with AB prop-based variant selection"
        ])));
        const e = yield R();
        return O(k(e));
    }), "voipWebWasmLoader", {
        isTerminalError,
        onAttemptFailure: function(t, n) {
            if (navigator.onLine === false) {
                y = true;
            }
            if (x(t)) {
                o("WAWebCoreActionsODS").logCallVoipInitWasmArtifactWorkerGluePinnedLoadFailed();
                o("WAWebVoipPthreadGlueFailureTracker").markPinnedWorkerGlueUnpinnedForPage();
            }
        },
        onFinalFailure: function(t, n) {
            const e = $(t);
            const r = isTerminalError(t);
            y = false;
            C = null;
            b = false;
            S = null;
            if (r) {
                o("WAWebVoipInitReloadRecovery").markVoipWasmArtifactUnavailable();
            }
            if (e) {
                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: WASM module download abandoned after ",
                    " attempts (network/load failure): ",
                    ""
                ])), n, t.message);
                return;
            }
            o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "voip: WASM module failed to load after ",
                " attempts"
            ])), n).catching(t).sendLogs("voip-wasm-load-exhausted");
        }
    });
    function N(targetPoolSize, isWebKit) {
        if (isWebKit) {
            return {
                initialPthreadPoolSize: f,
                targetPoolSize: f,
                isDynamicPoolEnabled: false
            };
        }
        if (typeof targetPoolSize === "number" && targetPoolSize > 0) {
            return {
                initialPthreadPoolSize,
                targetPoolSize,
                isDynamicPoolEnabled: true
            };
        }
        return {
            initialPthreadPoolSize: f,
            targetPoolSize: f,
            isDynamicPoolEnabled: false
        };
    }
    function M() {
        return w.apply(this, arguments);
    }
    function w() {
        w = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            let e;
            (e = o("WAWebVoipQplHelpers")).voipInitQplAddPoint(e.VoipInitQplPoint.WAIT_OFFLINE_DELIVER_START);
            const t = {
                callWaited: false,
                isRunning: true
            };
            let offline_delivery_wait_timed_out = false;
            let offline_delivery_wait_skipped_for_call = false;
            try {
                offline_delivery_wait_skipped_for_call = yield o("WAPromiseTimeout").promiseTimeout((p || (p = n("Promise"))).race([
                    o("WAWebEventsWaitForOfflineDeliveryEnd").waitForOfflineDeliveryEnd({
                        ignoreInit: true
                    }).then(o("WAWebBoolFunc").returnFalse),
                    A(t).then(o("WAWebBoolFunc").returnTrue)
                ]), g);
            } catch (error) {
                offline_delivery_wait_timed_out = error instanceof o("WACustomError").TimeoutError;
            }
            t.isRunning = false;
            o("WAWebVoipQplHelpers").voipInitQplAddPoint(o("WAWebVoipQplHelpers").VoipInitQplPoint.WAIT_OFFLINE_DELIVER_END, {
                bool: {
                    offline_delivery_wait_call_waited: t.callWaited,
                    offline_delivery_wait_skipped_for_call,
                    offline_delivery_wait_timed_out
                }
            });
        });
        return w.apply(this, arguments);
    }
    function A(e) {
        return F.apply(this, arguments);
    }
    function F() {
        F = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (o("WAWebEventsWaitForOfflineDeliveryEnd").isOfflineDeliveryEnd()) {
                return new (p || (p = n("Promise")))(r("WAWebNoop"));
            }
            yield o("WAWebVoipInitReloadRecovery").whenCallWaitsOnVoipInit();
            if (!e.isRunning || o("WAWebEventsWaitForOfflineDeliveryEnd").isOfflineDeliveryEnd()) {
                return new (p || (p = n("Promise")))(r("WAWebNoop"));
            }
            e.callWaited = true;
            if (!o("WAWebVoipBootInitDecision").isDeferredVoipBootInitEnabled() || o("WAWebABProps").getABPropConfigValue("web_voip_skip_offline_wait_on_call_intent") !== true) {
                return new (p || (p = n("Promise")))(r("WAWebNoop"));
            }
        });
        return F.apply(this, arguments);
    }
    function O(e) {
        return B.apply(this, arguments);
    }
    function B() {
        B = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = o("WAWebVoipPthreadHardening").latchVoipPthreadHardeningLevel(function() {
                return o("WAWebABProps").getABPropConfigValue("web_voip_pthread_hardening_level");
            });
            o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                "voip: pthread hardening level ",
                ""
            ])), t);
            o("WAWebVoipQplHelpers").voipInitQplAnnotatePthreadHardening(t);
            if (!o("WAWebVoipGatingUtils").isGuestViewer()) {
                yield M();
            }
            o("WAWebVoipQplHelpers").voipInitQplAddPoint(o("WAWebVoipQplHelpers").VoipInitQplPoint.WASM_LOAD_START, {
                bool: {
                    wasm_load_focused: document.hasFocus(),
                    wasm_load_visible: !document.hidden
                }
            });
            o("WAWebAppTracker").AppTracker.start(o("WAWebAppTracker").AppTrackerType.VoipWasmLoad);
            try {
                const isWebKit = o("WAWebVoipGatingUtils").isWebKitBrowser();
                o("WAWebVoipQplHelpers").voipInitQplAnnotateWasmLoad({
                    isContentAddressed: e.useContentAddressedWasm,
                    isWebKit,
                    pinWorkerGlue: e.pinWorkerGlue
                });
                const a = self.performance.now();
                const i = U(a);
                const l = W(e, isWebKit);
                const s = yield o("WAWebVoipInitReloadRecovery").observeVoipWasmLoaderPromise(o("WAWebVoipWebWasmVariantLoader").loadVoipWasmVariant(e.useContentAddressedWasm, e.pinWorkerGlue), l);
                o("WAWebVoipQplHelpers").voipInitQplAddPoint(o("WAWebVoipQplHelpers").VoipInitQplPoint.WASM_LOAD_END, o("WAWebVoipWasmResourceTiming").getVoipWasmDownloadAnnotations(a));
                V(i);
                o("WAWebVoipWasmHeapMonitor").logWasmHeapSnapshot(s, "wasm_load");
                o("WAWebVoipPthreadGlueFailureTracker").attachPthreadGlueFailureModule(s);
                yield o("WAWebReleaseToEventLoop").releaseToEventLoop();
                const u = o("WAWebABProps").getABPropConfigValue("web_voip_dynamic_thread_preallocate_count");
                const c = N(u, isWebKit);
                const { initialPthreadPoolSize, isDynamicPoolEnabled, targetPoolSize } = c;
                if (isWebKit && typeof u === "number" && u > 0) {
                    o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: ThreadPoolManager: dynamic pool disabled (WebKit TLS)"
                    ])));
                }
                o("WAWebVoipQplHelpers").voipInitQplAddPoint(o("WAWebVoipQplHelpers").VoipInitQplPoint.THREAD_POOL_SETUP_START);
                o("WAWebAppTracker").AppTracker.mark(o("WAWebAppTracker").AppTrackerType.VoipThreadPoolSetup);
                const g = new (r("WAWebVoipThreadPoolManager"))(s, isDynamicPoolEnabled, targetPoolSize);
                g.init();
                h = g;
                o("WAWebVoipThreadPoolManagerRegistry").setVoipThreadPoolManager(g);
                o("WAWebVoipQplHelpers").voipInitQplAddPoint(o("WAWebVoipQplHelpers").VoipInitQplPoint.THREAD_POOL_SETUP_END);
                o("WAWebVoipWasmHeapMonitor").logWasmHeapSnapshot(s, "thread_pool_setup");
                o("WAWebVoipQplHelpers").voipInitQplAnnotateThreadPool(initialPthreadPoolSize, isDynamicPoolEnabled, isWebKit);
                o("WAWebVoipWebTransportPthreadPrewarm").scheduleWebTransportPthreadPrewarm();
                r("JSResourceForInteraction")("WAWebVoipSctpPrewarm").__setRef("WAWebVoipWebLoadable").preload();
                return s;
            } finally{
                o("WAWebAppTracker").AppTracker.stop(o("WAWebAppTracker").AppTrackerType.VoipWasmLoad);
            }
        });
        return B.apply(this, arguments);
    }
    function W(e, isWebKit) {
        const n = self.performance.now();
        const document_visibilityState = document.visibilityState;
        return function() {
            return {
                isContentAddressed: e.useContentAddressedWasm,
                isLoaderModuleLoaded: q(e.useContentAddressedWasm),
                isPinnedGlueUnpinned: o("WAWebVoipPthreadGlueFailureTracker").isPinnedWorkerGlueUnpinnedForPage(),
                isWebKit,
                pinWorkerGlue: e.pinWorkerGlue,
                startVisibility: document_visibilityState,
                wasmFetchState: o("WAWebVoipWasmResourceTiming").getVoipWasmFetchState(n)
            };
        };
    }
    function q(useContentAddressedWasm) {
        if (useContentAddressedWasm) {
            return r("JSResourceForInteraction")("WAWebVoipWebWasmLoader_ContentAddressed_internal").__setRef("WAWebVoipWebLoadable").getModuleIfRequired() != null;
        }
        return r("JSResourceForInteraction")("WAWebVoipWebWasmLoader").__setRef("WAWebVoipWebLoadable").getModuleIfRequired() != null;
    }
    function U(e) {
        const t = S ?? e;
        S = t;
        return t;
    }
    function V(e) {
        const t = o("WAWebVoipQplHelpers").getVoipInitQplTriggeredAtMs();
        if (t != null) {
            o("WAWebVoipQplHelpers").voipInitQplAnnotateWasmPrefetch(o("WAWebVoipWasmResourceTiming").getVoipWasmPrefetchState(e, t));
        }
    }
    function H() {
        return h;
    }
    l.prefetchVoipWasmLoaderModule = I;
    l.requireVoip = P;
    l.getVoipThreadPoolManager = H;
}, 98);