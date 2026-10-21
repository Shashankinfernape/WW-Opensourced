__d("WebLoomCore", [
    "FBLogger",
    "InteractionTracingLoomProvider",
    "Promise",
    "QPLEvent",
    "QPLLoomProvider",
    "ResourceTimingLoomProvider",
    "VisualCompletionLoomProvider",
    "WebLoomEventBuffer",
    "WebLoomSampling",
    "WebLoomSerializer",
    "addAnnotations",
    "asyncToGeneratorRuntime",
    "fb-error",
    "mapObject",
    "one-trace",
    "performanceNow",
    "uuidv4"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    const d = new Set([
        "InteractionTracing"
    ]);
    const m = (()=>{
        function t(e, t) {
            const i = this;
            this.$1 = e;
            this.$2 = t;
            this.$7 = [
                r("InteractionTracingLoomProvider"),
                r("VisualCompletionLoomProvider"),
                r("ResourceTimingLoomProvider"),
                r("QPLLoomProvider")
            ];
            this.$5 = new Set(this.$7.map((e)=>e.loomProviderId));
            this.$6 = new Set(this.$7.map((e)=>e.loomProviderId));
            this.$3 = new Map;
            this.$4 = new Map;
            this.$8 = o("WebLoomSerializer").isSupported();
            this.$9 = false;
            this.$10 = e.debugLogToConsole ?? false;
            this.$16 = e.stuckTraceTimeoutMs ?? 0;
            this.$11 = 1;
            this.$12 = new Map;
            this.$13 = r("uuidv4")();
            this.$14 = 1;
            this.addStatusListener(function(e, t) {
                if (i.$10) {
                    i.$17("[Web Loom] trace", t, {
                        interactionId: e.triggerId,
                        traceReferenceId: i.$18(e),
                        qplMarkerId: e.triggerInfo.qpl_marker_id,
                        tracePolicy: e.triggerInfo.trace_policy
                    });
                }
            });
        }
        const t_prototype = t.prototype;
        t_prototype.setDebugLogToConsole = function(t) {
            this.$10 = t;
        };
        t_prototype.getNextSequenceNumber = function() {
            const $14 = this.$14;
            this.$14++;
            return $14;
        };
        t_prototype.getSessionId = function() {
            return this.$13;
        };
        t_prototype.getActiveTraces = function() {
            return this.$3;
        };
        t_prototype.addProvider = function(t, n = true) {
            if (!this.$6.has(t.loomProviderId)) {
                this.$7.push(t);
                this.$6.add(t.loomProviderId);
            }
            if (n && !this.$5.has(t.loomProviderId)) {
                this.$5.add(t.loomProviderId);
            }
        };
        t_prototype.addStatusListener = function(t) {
            const e = this;
            const n = this.$11++;
            this.$12.set(n, t);
            return {
                dispose: function() {
                    e.$12.delete(n);
                }
            };
        };
        t_prototype.maybeStartTraceForInteraction = function(t, interaction_class, r, a, i) {
            const e = (c || (c = o("QPLEvent"))).getMarkerId(r);
            const l = o("WebLoomSampling").getSampleRate(this.$1, "INTERACTION", e, a);
            const passedSamplingCheck = this.$2.Random.coinflip(l);
            if (this.$10) {
                this.$17("[Web Loom] maybeStartTraceForInteraction", {
                    interactionId: t,
                    markerId: e,
                    tracePolicy: a,
                    sampleRate: l,
                    passedSamplingCheck
                });
            }
            if (!passedSamplingCheck) {
                return null;
            }
            const u = i + this.$1.appStart;
            const m = {
                interaction_class,
                interaction_id: t,
                qpl_marker_id: `${e}`,
                sample_rate: l,
                trace_policy: a,
                type: "INTERACTION"
            };
            return this.startTrace(t, m, u, this.$1.useLiteTracing ? d : undefined);
        };
        t_prototype.startTraceManually = function(interaction_id, n, r, a, i, l) {
            const e = (c || (c = o("QPLEvent"))).getMarkerId(n);
            const s = r + this.$1.appStart;
            const u = {
                interaction_id,
                qpl_marker_id: `${e}`,
                sample_rate: a,
                type: "INTERACTION"
            };
            if (l != null) {
                u.interaction_class = l;
            }
            if (i != null) {
                u.trace_policy = i;
            }
            return this.startTrace(interaction_id, u, s, this.$1.useLiteTracing ? d : undefined);
        };
        t_prototype.endTraceForInteraction = function(t, n, o) {
            const t_traceId = t.traceId;
            const l = babelHelpers.extends({}, null);
            for(const c in t.annotations){
                for(const d in t.annotations[c]){
                    l[d] = t.annotations[c][d];
                }
            }
            l.qpl_action = n;
            const m = (s || (s = r("mapObject")))(t.tagSet, function(e) {
                return Array.from(e);
            });
            const t_completed = t.completed;
            const _ = t.markerPoints.visuallyComplete?.timestamp;
            const f = t.markerPoints.logVC?.timestamp;
            const g = Math.max(t_completed ?? 0, _ ?? 0, f ?? 0, o ?? 0);
            const h = g > 0 ? g : (u || (u = r("performanceNow")))();
            const y = h + this.$1.appStart;
            return this.endTrace(t_traceId, y, l, m);
        };
        t_prototype.startTrace = function(triggerId, triggerInfo, a, i = this.$5, l = {}) {
            const e = this;
            if (!this.$8) {
                return null;
            }
            if (this.$3.has(triggerId)) {
                r("FBLogger")("web_loom").mustfix("Already running trace for triggerId: %s", triggerId);
                return null;
            }
            const sequenceNumber = this.$14++;
            const traceContext = {
                buffer: new (o("WebLoomEventBuffer")).WebLoomEventBuffer,
                triggerId,
                triggerInfo,
                startTime: a,
                sequenceNumber
            };
            const loomProviders = new Set;
            const providerInstances = [];
            this.$7.forEach((t)=>{
                if (i.has(t.loomProviderId) && t.isSupported()) {
                    providerInstances.push(t.getInstance(traceContext, e.$2, e.$1));
                    loomProviders.add(t.loomProviderId);
                }
            });
            const status = "STARTED";
            this.$3.set(triggerId, {
                traceContext,
                providerInstances,
                loomProviders,
                secondaryOneTraceLinkage: l.secondaryOneTraceLinkage ?? false,
                status,
                startURI: window.location.href
            });
            this.$12.forEach((e)=>e(traceContext, status));
            const traceReferenceId = this.$18(traceContext);
            this.$19();
            return {
                traceReferenceId,
                loomProviders
            };
        };
        t_prototype.$19 = function() {
            const e = this;
            if (!(!r("one-trace") || this.$15 != null || this.$3.size === 0)) {
                this.$15 = r("one-trace").subscribe("trace-start", function(t) {
                    if (!(t.traceType !== "LONGTASK" && t.traceType !== "INP")) {
                        const n = Array.from(e.$3.values());
                        let o = n[n.length - 1];
                        for (const a of n){
                            if (!a.secondaryOneTraceLinkage) {
                                o = a;
                            }
                        }
                        if (o != null) {
                            r("addAnnotations")(t.annotations, {
                                string: {
                                    loomRefId: e.$18(o.traceContext)
                                },
                                string_array: {
                                    loomProviders: Array.from(o.loomProviders),
                                    loomRefIds: n.map((t)=>e.$18(t.traceContext))
                                }
                            });
                        }
                    }
                });
            }
        };
        t_prototype.$18 = function(t) {
            return `${this.$13}_${t.sequenceNumber}`;
        };
        t_prototype.endTrace = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, a, trigger_metadata, trigger_metadata_sets) {
                const s = this.$3.get(t);
                if (!s) {
                    r("FBLogger")("web_loom").mustfix("No trace running for triggerId: %s", t);
                    return false;
                }
                const sequenceNumber = s.traceContext.sequenceNumber;
                this.$3.delete(t);
                if (this.$3.size === 0 && this.$15) {
                    this.$15();
                    this.$15 = null;
                }
                this.$4.set(sequenceNumber, s);
                this.$20(s, "END_PENDING");
                const c = [];
                s.providerInstances.forEach((e)=>{
                    const t = e.loomTraceWillEnd();
                    if (t) {
                        c.push(t);
                    }
                });
                const href = window.location.href;
                try {
                    yield (e || (e = n("Promise"))).all(c);
                    const m = this.$1.perfXData;
                    const trigger_info = s.traceContext.triggerInfo;
                    const _ = {
                        app_id: this.$1.appId,
                        start_time_us: Math.round(s.traceContext.startTime * 1000),
                        end_time_us: Math.round(a * 1000),
                        trigger_id: s.traceContext.triggerId,
                        trigger_info,
                        trigger_metadata,
                        trigger_metadata_sets,
                        client_push_phase: m.client_push_phase,
                        device_num_cores: m.num_cores != null ? Math.floor(m.num_cores) : null,
                        device_ram_bytes: m.ram_gb != null ? m.ram_gb * 1073741824 : null,
                        is_rtl: m.isRTL,
                        locale: m.locale,
                        network_effective_connection_type: m.effective_connection_type,
                        network_downlink_bps: m.downlink_megabits != null && m.downlink_megabits * 1000000 < 100000000000000000000 ? m.downlink_megabits * 1000000 : null,
                        network_rtt_ms: m.rtt_ms,
                        client_rev: this.$1.clientRev,
                        server_rev: this.$1.serverRev,
                        spin_mode: this.$1.spinMode,
                        start_uri: s.startURI,
                        end_uri: href
                    };
                    const f = o("WebLoomSerializer").serialize(this.$2, _, s.traceContext.buffer, s.traceContext.jsSelfProfilerData);
                    s.traceContext.jsSelfProfilerData = null;
                    if (f != null) {
                        const g = {
                            trace: f,
                            session_id: this.$13,
                            sequence_number: s.traceContext.sequenceNumber,
                            qpl_marker_id: trigger_info.qpl_marker_id,
                            trace_policy: trigger_info.trace_policy,
                            sample_rate: trigger_info.sample_rate
                        };
                        this.$2.Transport.post(g, {
                            onComplete: this.$16 > 0 ? this.$21(sequenceNumber) : this.$22(sequenceNumber, s),
                            isHighPri: this.$9
                        });
                        this.$20(s, "UPLOAD_PENDING");
                    } else {
                        this.$20(s, "COMPLETE");
                        this.$4.delete(sequenceNumber);
                        r("fb-error").FBLogger("webloom").warn("[Loom Trace]Failed to serialize trace, trace will be dropped. QPL marker id: %s", trigger_info.qpl_marker_id);
                    }
                } catch (e) {
                    this.$20(s, "ERROR");
                    this.$4.delete(sequenceNumber);
                }
                return true;
            });
            function a(e, n, r, o) {
                return t.apply(this, arguments);
            }
            return a;
        })();
        t_prototype.flush = function(t) {
            const e = this;
            const n = new Set;
            const r = new Set;
            this.$4.forEach((e)=>{
                if (e.status === "END_PENDING") {
                    n.add(e.traceContext.sequenceNumber);
                } else if (e.status === "UPLOAD_PENDING") {
                    r.add(e.traceContext.sequenceNumber);
                }
            });
            if (n.size > 0) var o = this.addStatusListener(function(r) {
                n.delete(r.sequenceNumber);
                if (n.size === 0) {
                    e.$2.Transport.flush(t, t);
                    o.dispose();
                }
            });
            else {
                if (r.size > 0) {
                    this.$2.Transport.flush(t, t);
                } else if (t) {
                    t();
                }
            }
        };
        t_prototype.setIsDevToolsConnected = function(t) {
            this.$9 = t;
        };
        t_prototype.setStuckTraceTimeoutMs = function(t) {
            this.$16 = t;
        };
        t_prototype.$21 = function(t) {
            const e = this;
            const n = setTimeout(()=>{
                const n = e.$4.get(t);
                if (n != null) {
                    e.$20(n, "ERROR");
                    e.$4.delete(t);
                }
            }, this.$16);
            return function() {
                clearTimeout(n);
                const r = e.$4.get(t);
                if (r != null) {
                    e.$20(r, "COMPLETE");
                    e.$4.delete(t);
                }
            };
        };
        t_prototype.$22 = function(t, n) {
            const e = this;
            return function() {
                if (e.$4.has(t)) {
                    e.$20(n, "COMPLETE");
                    e.$4.delete(t);
                }
            };
        };
        t_prototype.$20 = function(t, n) {
            t.status = n;
            this.$12.forEach((e)=>e(t.traceContext, t.status));
        };
        t_prototype.$17 = function() {
            const e = typeof console !== "undefined" ? console : null;
            if (e) {
                e.log(...arguments);
            }
        };
        return t;
    })();
    l.default = m;
}, 98);