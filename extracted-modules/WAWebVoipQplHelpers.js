__d("WAWebVoipQplHelpers", [
    "$InternalEnum",
    "WAWebBrowserApi",
    "WAWebPageVisibilityRecency",
    "WAWebQplFlow",
    "qpl"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = (s = r("qpl"))._(891422152, "3402");
    const c = (e = n("$InternalEnum"))({
        WAIT_OFFLINE_DELIVER_START: "wait_offline_deliver_start",
        WAIT_OFFLINE_DELIVER_END: "wait_offline_deliver_end",
        WASM_LOAD_START: "wasm_load_start",
        WASM_LOAD_END: "wasm_load_end",
        WASM_FETCH_START: "wasm_fetch_start",
        WASM_FETCH_END: "wasm_fetch_end",
        THREAD_POOL_SETUP_START: "thread_pool_setup_start",
        THREAD_POOL_SETUP_END: "thread_pool_setup_end",
        WORKER_POOL_ALLOC_START: "worker_pool_alloc_start",
        WORKER_POOL_ALLOC_END: "worker_pool_alloc_end",
        WORKER_CREATE_START: "worker_create_start",
        WORKER_CREATE_END: "worker_create_end",
        RPC_SETUP_START: "rpc_setup_start",
        FIRST_PTHREAD_LOADED: "first_pthread_loaded",
        RPC_SETUP_END: "rpc_setup_end",
        WEBCODECS_PROBE_START: "webcodecs_probe_start",
        WEBCODECS_PROBE_END: "webcodecs_probe_end",
        VOIP_STACK_INIT_START: "voip_stack_init_start",
        VOIP_STACK_INIT_END: "voip_stack_init_end"
    });
    const d = new WeakMap;
    let m = null;
    let p = null;
    let _ = null;
    let f = null;
    let g = null;
    let h = null;
    function y(e) {
        const t = o("WAWebQplFlow").startQplFlow(u, {
            timeoutInMs: 120000,
            annotations: e
        });
        m = t;
        p = null;
        if (f != null) {
            t.addAnnotations({
                int: {
                    pthread_hardening_level: f
                }
            });
        }
        if (_ != null) {
            t.addAnnotations({
                int: {
                    wasm_idle_warm_state_code: F(_)
                }
            });
        }
        if (g != null) {
            t.addAnnotations(N(g));
        }
        if (h != null) {
            t.addAnnotations(h);
        }
        const window_performance = window.performance;
        if (window_performance != null) {
            t.addAnnotations({
                int: {
                    session_age_ms: Math.round(window_performance.now())
                }
            });
        }
        return t;
    }
    function C({ bootDecision, isRetry }) {
        m?.addAnnotations({
            bool: {
                init_focused: document.hasFocus(),
                init_visible: !document.hidden,
                is_retry: isRetry
            },
            int: {
                boot_decision_code: b(bootDecision),
                cpu_cores: o("WAWebBrowserApi").getNumCpu(),
                device_memory_mb: o("WAWebBrowserApi").getMemClass()
            },
            string: {
                boot_decision: bootDecision ?? "unknown"
            }
        });
    }
    function b(bootDecision) {
        if (bootDecision === "eager") {
            return 1;
        }
        if (bootDecision === "deferred") {
            return 2;
        }
        if (bootDecision === "skip") {
            return 3;
        }
        if (bootDecision == null) {
            return 0;
        }
        return (()=>{
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${bootDecision}`);
        })();
    }
    function v(e) {
        const t = m;
        if (t != null) {
            p = e.atMs;
            const n = self.performance.now();
            t.addAnnotations({
                int: {
                    trigger_hidden_for_ms: Math.round(e.hiddenForMs),
                    trigger_ms_since_visible: Math.round(e.msSinceVisible),
                    trigger_to_init_ms: Math.round(n - e.atMs),
                    trigger_visibility_code: L(e.visibility)
                }
            });
            const r = d.get(e);
            if (r != null) {
                t.addAnnotations({
                    int: {
                        early_start_ms: Math.round(n - r)
                    }
                });
            }
        }
    }
    function S(e) {
        d.set(e, self.performance.now());
    }
    function R() {
        return p;
    }
    function L(visibility) {
        switch(visibility){
            case "hidden":
                return 1;
            case "visible_unfocused":
                return 2;
            case "visible_focused":
                return 3;
            default:
                return (()=>{
                    throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${visibility}`);
                })();
        }
    }
    function E({ endedHidden, startedHidden, waitMs }) {
        m?.addAnnotations({
            bool: {
                retry_idle_wait_ended_hidden: endedHidden,
                retry_idle_wait_started_hidden: startedHidden
            },
            int: {
                retry_idle_wait_ms: waitMs
            }
        });
    }
    function k(e, t) {
        m?.addPoint(e, t);
    }
    function I(e) {
        const t = m;
        return function() {
            if (t != null && t === m) {
                t.addPoint(e);
            }
        };
    }
    function T(using_dedicated_worker) {
        m?.addAnnotations({
            bool: {
                using_dedicated_worker
            }
        });
    }
    function D(pre_init_worker_bootstrap) {
        m?.addAnnotations({
            bool: {
                pre_init_worker_bootstrap
            }
        });
    }
    function x(pthread_pool_size, is_dynamic_pool, is_webkit) {
        m?.addAnnotations({
            int: {
                pthread_pool_size
            },
            bool: {
                is_webkit,
                is_dynamic_pool
            }
        });
    }
    function $(e) {
        f = e;
        m?.addAnnotations({
            int: {
                pthread_hardening_level: e
            }
        });
    }
    function P(e) {
        g = e;
        m?.addAnnotations(N(e));
    }
    function N(e) {
        return {
            bool: {
                content_addressed_wasm: e.isContentAddressed,
                is_webkit: e.isWebKit,
                pin_worker_glue: e.pinWorkerGlue
            }
        };
    }
    function M(e) {
        m?.addAnnotations({
            int: {
                wasm_prefetch_state_code: w(e)
            }
        });
    }
    function w(e) {
        switch(e){
            case "unknown":
                return 0;
            case "none":
                return 1;
            case "complete_before_trigger":
                return 2;
            case "in_flight_at_trigger":
                return 3;
            case "started_after_trigger":
                return 4;
            default:
                return (()=>{
                    throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
                })();
        }
    }
    function A(e) {
        _ = e;
    }
    function F(e) {
        switch(e){
            case "scheduled":
                return 1;
            case "skipped":
                return 2;
            case "fetching":
                return 3;
            case "complete":
                return 4;
            case "failed":
                return 5;
            default:
                return (()=>{
                    throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
                })();
        }
    }
    function O(e) {
        const n = {
            int: {
                worker_glue_pinned_import_failed: e.pinnedImportFailed,
                worker_glue_pinned_import_loaded: e.pinnedImportLoaded,
                worker_glue_pinned_import_loaded_max_ms: e.pinnedImportLoadedMaxMs,
                worker_glue_pinned_import_started: e.pinnedImportStarted,
                worker_glue_skewed_workers: e.skewedWorkers
            }
        };
        h = n;
        m?.addAnnotations(n);
    }
    function B(e) {
        q();
        m?.endSuccess(e);
        m = null;
        p = null;
    }
    function W(e, t) {
        q();
        m?.endFail(e, t);
        m = null;
        p = null;
    }
    function q() {
        try {
            m?.addAnnotations({
                int: {
                    init_end_visibility_code: L(o("WAWebPageVisibilityRecency").snapshotPageVisibility().visibility)
                }
            });
        } catch (e) {}
    }
    const U = s._(891426543, "3400");
    const V = 120000;
    const H = e({
        CALL_ENDING_HANDLER_START: "call_ending_handler_start",
        CALL_ENDING_HANDLER_END: "call_ending_handler_end",
        CLEANUP_START: "cleanup_start",
        CLEANUP_END: "cleanup_end"
    });
    let G = null;
    function z() {
        G = o("WAWebQplFlow").startQplFlow(U, {
            timeoutInMs: V
        });
    }
    function j(e) {
        G?.addPoint(e);
    }
    function K() {
        G?.endSuccess();
        G = null;
    }
    const Q = s._(891426840, "3404");
    const X = 14400 * 1000;
    const Y = e({
        PIP_OPENED: "pip_opened",
        POPOUT_OPENED: "popout_opened"
    });
    let J = null;
    function Z(e) {
        J = o("WAWebQplFlow").startQplFlow(Q, {
            timeoutInMs: X,
            annotations: e
        });
    }
    function ee(e) {
        J?.addPoint(e);
    }
    function te() {
        J?.endSuccess();
        J = null;
    }
    const ne = s._(891424539, "3405");
    const re = 120000;
    const oe = e({
        POOL_GROWTH_START: "pool_growth_start",
        POOL_GROWTH_END: "pool_growth_end",
        EMERGENCY_ALLOC: "emergency_alloc",
        POOL_SHRINK: "pool_shrink"
    });
    function ae(e) {
        return o("WAWebQplFlow").startQplFlow(ne, {
            timeoutInMs: re,
            annotations: e
        });
    }
    function ie(e, t) {
        e.addPoint(t);
    }
    function le(e) {
        e.endSuccess();
    }
    function se(e, t) {
        e.endFail(t);
    }
    l.VoipInitQplPoint = c;
    l.startVoipInitQpl = y;
    l.voipInitQplAnnotateStart = C;
    l.voipInitQplAnnotateTrigger = v;
    l.voipInitQplRecordEarlyStart = S;
    l.getVoipInitQplTriggeredAtMs = R;
    l.voipInitQplAnnotateRetryIdleWait = E;
    l.voipInitQplAddPoint = k;
    l.bindVoipInitQplPointToActiveFlow = I;
    l.voipInitQplAnnotateExecutionMode = T;
    l.voipInitQplAnnotateWorkerBootstrapMode = D;
    l.voipInitQplAnnotateThreadPool = x;
    l.voipInitQplAnnotatePthreadHardening = $;
    l.voipInitQplAnnotateWasmLoad = P;
    l.voipInitQplAnnotateWasmPrefetch = M;
    l.voipInitQplRecordWasmIdleWarmState = A;
    l.voipInitQplAnnotateWorkerGlueSkew = O;
    l.endVoipInitQplSuccess = B;
    l.endVoipInitQplFail = W;
    l.VoipEndCallQplPoint = H;
    l.startVoipEndCallQpl = z;
    l.voipEndCallQplAddPoint = j;
    l.endVoipEndCallQplSuccess = K;
    l.VoipUiLifecycleQplPoint = Y;
    l.startVoipUiLifecycleQpl = Z;
    l.voipUiLifecycleQplAddPoint = ee;
    l.endVoipUiLifecycleQplSuccess = te;
    l.VoipWorkerSetupQplPoint = oe;
    l.startVoipWorkerSetupQpl = ae;
    l.voipWorkerSetupQplAddPoint = ie;
    l.endVoipWorkerSetupQplSuccess = le;
    l.endVoipWorkerSetupQplFail = se;
}, 98);