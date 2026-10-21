__d("WAWebVoipInitReloadRecovery", [
    "Promise",
    "WALogger",
    "WAResolvable",
    "WAWebCoreActionsODS",
    "WAWebNoop",
    "WAWebVoipCallBlockedModals",
    "WAWebVoipInitEventEmitter",
    "WAWebVoipPthreadHardening",
    "WAWebVoipQplHelpers",
    "justknobx"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    let d;
    const m = 30000;
    const p = 90000;
    const _ = 60000;
    const f = 1000;
    class g {
        constructor(e){
            this.$1 = null;
            this.$2 = e;
            this.$3 = false;
            this.$4 = false;
            this.$5 = 0;
            this.$6 = 0;
            this.$7 = new Map;
            this.$8 = null;
            this.$9 = new Map;
        }
        $10() {
            if (this.$8 != null) {
                this.$2.cancelTimeout(this.$8);
                this.$8 = null;
            }
        }
        $11(t) {
            const e = Array.from(this.$9.values());
            this.$9.clear();
            for (const n of e){
                n.completion.resolve(t);
            }
        }
        $12(t = function() {
            return true;
        }) {
            let e = null;
            for (const n of this.$9.values()){
                if (t(n) && (e == null || n.deadlineMs < e.deadlineMs)) {
                    e = n;
                }
            }
            return e;
        }
        $13(t) {
            const n = this.$2.getNowMs();
            const value = this.$7.values().next().value;
            return {
                details: T(value),
                loadAgeMs: value == null ? 0 : n - value.startedAtMs,
                loadIndex: value?.index ?? 0,
                pendingLoads: this.$7.size,
                ringableCalls: Array.from(this.$9.values()).filter(({ canRing })=>canRing).length,
                source: t.source,
                urgencyAgeMs: n - t.startedAtMs,
                waitingCalls: this.$9.size
            };
        }
        $14(t) {
            const n = this.$2.getNowMs();
            return {
                source: t.source,
                urgencyAgeMs: n - t.startedAtMs,
                waitingCalls: this.$9.size,
                webStackAgeMs: n - (this.$2.getWebStackCreatedAtMs() ?? n)
            };
        }
        $15(t) {
            if (!this.$4) {
                e: {
                    if (t.rule === "wasm") {
                        const e = this.$13(t.urgency);
                        this.$16();
                        this.$2.onUnavailable(e);
                        break e;
                    }
                    if (t.rule === "pre_wasm") {
                        const n = this.$14(t.urgency);
                        this.$16();
                        this.$2.onPreWasmUnavailable(n);
                        break e;
                    }
                    throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${t.rule}`);
                }
            }
        }
        $16() {
            this.$4 = true;
            this.$10();
            this.$7.clear();
            this.$11("unavailable");
        }
        $17(t) {
            if (this.$2.getIsVoipInited() || !this.$2.getIsOnline()) {
                return false;
            }
            if (t.rule === "wasm") {
                return !this.$2.getDidVoipInitError() || this.$2.getIsVoipInitAttemptInFlight() && !this.$2.isExtendedStuckLatchDisabled();
            }
            if (t.rule === "pre_wasm") {
                return this.$2.getIsPrewarmVoipInitAttemptInFlight();
            }
            return (()=>{
                throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${t.rule}`);
            })();
        }
        $18() {
            if (this.$7.size > 0) {
                return this.$19();
            }
            return this.$20();
        }
        $19() {
            const e = this.$12();
            if (e == null) {
                return null;
            }
            const value = this.$7.values().next().value;
            return {
                deadlineMs: value == null ? e.deadlineMs : Math.max(e.deadlineMs, value.startedAtMs + p),
                rule: "wasm",
                urgency: e
            };
        }
        $20() {
            if (this.$2.isExtendedStuckLatchDisabled()) {
                return null;
            }
            const e = this.$6 === 0 ? this.$2.getWebStackCreatedAtMs() : null;
            if (e == null) {
                return null;
            }
            const t = this.$12(function({ canRing, startedAfterWebStack }) {
                return canRing && startedAfterWebStack;
            });
            if (t == null) {
                return null;
            }
            return {
                deadlineMs: Math.max(t.deadlineMs, e + _),
                rule: "pre_wasm",
                urgency: t
            };
        }
        $21() {
            this.$8 = null;
            const e = this.$18();
            if (e != null) {
                if (e.deadlineMs > this.$2.getNowMs()) {
                    this.$22();
                    return;
                }
                if (this.$17(e)) {
                    this.$15(e);
                    return;
                }
                this.$22(f);
            }
        }
        $22(t = 0) {
            const e = this;
            this.$10();
            if (!this.$4) {
                const n = this.$18();
                if (n != null) {
                    this.$8 = this.$2.scheduleTimeout(function() {
                        return e.$21();
                    }, Math.max(t, n.deadlineMs - this.$2.getNowMs()));
                }
            }
        }
        $23(t, r, canRing) {
            if (this.$4) {
                this.$2.showUnavailableModal();
                return (d || (d = n("Promise"))).resolve(this.$3 ? "artifact_unavailable" : "unavailable");
            }
            const e = this.$9.get(t);
            if (e != null) {
                return e.completion.promise;
            }
            const completion = new (o("WAResolvable")).Resolvable;
            const startedAtMs = this.$2.getNowMs();
            this.$9.set(t, {
                canRing,
                completion,
                deadlineMs: startedAtMs + m,
                source: r,
                startedAfterWebStack: this.$2.getWebStackCreatedAtMs() != null,
                startedAtMs
            });
            if (canRing) {
                this.$1?.resolve();
                this.$1 = null;
            }
            this.$22();
            return completion.promise;
        }
        $24(t) {
            const e = this.$9.get(t);
            if (e != null) {
                this.$9.delete(t);
                e.completion.resolve("cancelled");
                this.$22();
            }
        }
        observeWasmLoaderPromise(t, describe) {
            const e = this;
            if (this.$4) {
                return t;
            }
            if (!this.$7.has(t)) {
                this.$7.set(t, {
                    describe,
                    index: ++this.$6,
                    startedAtMs: this.$2.getNowMs()
                });
                const r = function() {
                    e.$7.delete(t);
                    e.$22();
                };
                t.then(r, r);
            }
            this.$22();
            return t;
        }
        beginOutgoing(t) {
            const e = this;
            if (t?.aborted === true) {
                return {
                    finish: r("WAWebNoop"),
                    result: (d || (d = n("Promise"))).resolve("cancelled")
                };
            }
            const o = `outgoing:${++this.$5}`;
            let a = false;
            const finish = function() {
                if (!a) {
                    a = true;
                    if (t != null) {
                        t.removeEventListener("abort", finish);
                    }
                    e.$24(o);
                }
            };
            const l = this.$23(o, "outgoing", true);
            t?.addEventListener("abort", finish, {
                once: true
            });
            return {
                finish,
                result: l
            };
        }
        finishIncoming(t) {
            this.$24(`incoming:${t}`);
        }
        handleVoipInitSuccess() {
            if (this.$3) {
                this.$3 = false;
                this.$4 = false;
            } else if (this.$4) {
                return;
            }
            this.$10();
            this.$7.clear();
            this.$11("cancelled");
        }
        isUnavailable() {
            return this.$4;
        }
        markArtifactUnavailable() {
            if (!this.$4) {
                this.$3 = true;
                this.$4 = true;
                this.$10();
                this.$7.clear();
                const e = this.$12();
                this.$11("artifact_unavailable");
                this.$2.onArtifactUnavailable(e?.source);
            }
        }
        markChunkUnavailable() {
            if (!this.$4) {
                const e = this.$12(function({ canRing }) {
                    return canRing;
                });
                this.$16();
                this.$2.onChunkUnavailable(e?.source);
            }
        }
        startIncoming(t, n) {
            return this.$23(`incoming:${t}`, "incoming", n);
        }
        whenCallWaits() {
            let e;
            for (const t of this.$9.values()){
                if (t.canRing) {
                    return (d || (d = n("Promise"))).resolve();
                }
            }
            if ((e = this.$1) == null) {
                this.$1 = new (o("WAResolvable")).Resolvable;
            }
            return this.$1.promise;
        }
    }
    function h(e) {
        return new g(e);
    }
    const y = h({
        cancelTimeout: function(t) {
            return self.clearTimeout(t);
        },
        getDidVoipInitError: function() {
            return o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.getDidVoipInitError();
        },
        getIsOnline: function() {
            return navigator.onLine;
        },
        getIsPrewarmVoipInitAttemptInFlight: function() {
            return o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.getIsPrewarmVoipInitAttemptInFlight();
        },
        getIsVoipInitAttemptInFlight: function() {
            return o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.getIsVoipInitAttemptInFlight();
        },
        getIsVoipInited: function() {
            return o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.getIsVoipInited();
        },
        getNowMs: function() {
            return Date.now();
        },
        getWebStackCreatedAtMs: function() {
            return o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.getVoipWebStackCreatedAtMs();
        },
        isExtendedStuckLatchDisabled: function() {
            return r("justknobx")._("2449");
        },
        onArtifactUnavailable: function(n) {
            o("WAWebVoipQplHelpers").endVoipInitQplFail("wasm_artifact_terminal", {
                string: {
                    waiting_call_source: n ?? "none"
                }
            });
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: WASM artifact unresolvable on this page; user reload required source=",
                ""
            ])), n ?? "prewarm").sendLogs("voip-wasm-artifact-unavailable", {
                sendLogsType: o("WALogger").SendLogsType.INVESTIGATION
            });
            if (n != null) {
                o("WAWebVoipCallBlockedModals").showVoipInitUnavailableModal();
            }
        },
        onChunkUnavailable: function(t) {
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "voip: VoIP chunk failed to load; user reload required source=",
                ""
            ])), t ?? "none");
            if (t != null) {
                o("WAWebVoipCallBlockedModals").showVoipInitUnavailableModal();
            }
        },
        onPreWasmUnavailable: function(t) {
            o("WAWebCoreActionsODS").logCallVoipInitPreWasmReloadRequired();
            const e = x(t);
            const { annotations, fields } = e;
            o("WAWebVoipQplHelpers").endVoipInitQplFail("pre_wasm_load_timeout_user_reload_required", annotations);
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "voip: VoIP init stuck before the WASM load; user reload required source=",
                "",
                ""
            ])), t.source, fields).sendLogs("voip-init-stuck-pre-wasm-reload-required", {
                sendLogsType: o("WALogger").SendLogsType.INVESTIGATION
            });
            o("WAWebVoipCallBlockedModals").showVoipInitUnavailableModal();
        },
        onUnavailable: function(t) {
            const e = D(t);
            const { annotations, fields } = e;
            o("WAWebVoipQplHelpers").endVoipInitQplFail("wasm_load_timeout_user_reload_required", annotations);
            o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "voip: WASM init stuck; user reload required source=",
                "",
                ""
            ])), t.source, fields).sendLogs("voip-init-stuck-reload-required", {
                sendLogsType: o("WALogger").SendLogsType.INVESTIGATION
            });
            o("WAWebVoipCallBlockedModals").showVoipInitUnavailableModal();
        },
        scheduleTimeout: function(t, n) {
            return self.setTimeout(t, n);
        },
        showUnavailableModal: o("WAWebVoipCallBlockedModals").showVoipInitUnavailableModal
    });
    let C = false;
    function b() {
        if (!C) {
            C = true;
            o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.on("voipInitSuccess", function() {
                return y.handleVoipInitSuccess();
            });
        }
    }
    function v() {
        b();
        y.markArtifactUnavailable();
    }
    function S() {
        y.markChunkUnavailable();
    }
    function R(e, t) {
        b();
        return y.observeWasmLoaderPromise(e, t);
    }
    function L(e) {
        b();
        return y.beginOutgoing(e);
    }
    function E(e, t) {
        b();
        return y.startIncoming(e, t);
    }
    function k(e) {
        y.finishIncoming(e);
    }
    function I() {
        return y.whenCallWaits();
    }
    function T(e) {
        try {
            return (e == null || e.describe == null ? undefined : e.describe()) ?? null;
        } catch (e) {
            return null;
        }
    }
    function D(e) {
        try {
            const t = document.visibilityState;
            return {
                annotations: N(e, t),
                fields: ` ${$(e, t)}`
            };
        } catch (t) {
            return {
                annotations: {
                    string: {
                        waiting_call_source: e.source
                    }
                },
                fields: ""
            };
        }
    }
    function x(e) {
        try {
            const page_visibility = document.visibilityState;
            return {
                annotations: {
                    int: {
                        urgency_age_ms: e.urgencyAgeMs,
                        waiting_calls: e.waitingCalls,
                        web_stack_age_ms: e.webStackAgeMs
                    },
                    string: {
                        page_visibility,
                        waiting_call_source: e.source
                    }
                },
                fields: ` wait_ms=${e.urgencyAgeMs} stack_ms=${e.webStackAgeMs} calls=${e.waitingCalls} vis=${page_visibility} age_s=${Math.round(self.performance.now() / 1000)}`
            };
        } catch (t) {
            return {
                annotations: {
                    string: {
                        waiting_call_source: e.source
                    }
                },
                fields: ""
            };
        }
    }
    function $(e, t) {
        const e_details = e.details;
        const r = [
            `level=${o("WAWebVoipPthreadHardening").getVoipPthreadHardeningLevel()}`
        ];
        if (e_details != null) {
            r.push(`pin=${P(e_details.pinWorkerGlue)}`, `unpinned=${P(e_details.isPinnedGlueUnpinned)}`, `loader=${P(e_details.isLoaderModuleLoaded)}`, `wasm=${e_details.wasmFetchState}`);
        }
        r.push(`wait_ms=${e.urgencyAgeMs}`, `load_ms=${e.loadAgeMs}`, `load_idx=${e.loadIndex}`, `loads=${e.pendingLoads}`, `calls=${e.waitingCalls}`, `ring=${e.ringableCalls}`, `vis=${t}`);
        if (e_details != null) {
            r.push(`vis_start=${e_details.startVisibility}`, `ca=${P(e_details.isContentAddressed)}`, `webkit=${P(e_details.isWebKit)}`);
        }
        r.push(`age_s=${Math.round(self.performance.now() / 1000)}`);
        return r.join(" ");
    }
    function P(e) {
        if (e) {
            return "1";
        }
        return "0";
    }
    function N(e, page_visibility) {
        const e_details = e.details;
        return {
            bool: e_details == null ? null : {
                loader_module_loaded: e_details.isLoaderModuleLoaded,
                pinned_glue_unpinned: e_details.isPinnedGlueUnpinned
            },
            int: {
                pending_wasm_loads: e.pendingLoads,
                ringable_waiting_calls: e.ringableCalls,
                urgency_age_ms: e.urgencyAgeMs,
                waiting_calls: e.waitingCalls,
                wasm_load_age_ms: e.loadAgeMs,
                wasm_load_index: e.loadIndex
            },
            string: {
                load_start_visibility: e_details?.startVisibility,
                page_visibility,
                waiting_call_source: e.source,
                wasm_fetch_state: e_details?.wasmFetchState
            }
        };
    }
    l.createVoipInitReloadRecovery = h;
    l.markVoipWasmArtifactUnavailable = v;
    l.markVoipChunkUnavailable = S;
    l.observeVoipWasmLoaderPromise = R;
    l.beginOutgoingVoipInitReloadRecovery = L;
    l.startIncomingVoipInitReloadRecovery = E;
    l.finishIncomingVoipInitReloadRecovery = k;
    l.whenCallWaitsOnVoipInit = I;
}, 98);