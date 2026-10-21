__d("FalcoLoggerTransports", [
    "AnalyticsCoreData",
    "Banzai",
    "ExecutionEnvironment",
    "FalcoUtils",
    "ODS",
    "PersistedQueue",
    "Queue",
    "RequestStreamCommonRequestStreamCommonTypes",
    "WebSession",
    "performanceAbsoluteNow",
    "promiseDone",
    "requireDeferredForDisplay",
    "uuidv4"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let d;
    let m;
    let p;
    let _;
    const f = r("requireDeferredForDisplay")("TransportSelectingClientSingletonConditional").__setRef("FalcoLoggerTransports");
    const g = 5 * 1024;
    const h = (m || (m = r("AnalyticsCoreData"))).max_delay_br_queue ?? 60 * 1000;
    const y = (m || (m = r("AnalyticsCoreData"))).max_delay_br_queue_immediate ?? 1000;
    const C = (m || (m = r("AnalyticsCoreData"))).max_delay_br_init_not_complete ?? 1000;
    const b = (_ || (_ = r("ExecutionEnvironment"))).canUseDOM && ((m || (m = r("AnalyticsCoreData"))).defer_size_flush_until_br_init ?? false);
    const v = "falco:";
    const S = new (r("Queue"));
    const R = 5000;
    const L = 60000;
    const falco_js_connection_id = r("uuidv4")();
    const k = "ods_web_batch";
    const I = new Map;
    const T = new Set;
    const D = o("FalcoUtils").getTaggedBitmap(38);
    let x = [];
    let $ = 0;
    let P;
    let N = false;
    let M = false;
    let w = false;
    let A = true;
    let F = false;
    let O = false;
    let B = false;
    let W;
    let q = 0;
    let U = Date.now() - L;
    let V = 1;
    let H = C > h ? C : h;
    let G = C;
    ye();
    for (const z of (m || (m = r("AnalyticsCoreData"))).stateful_events_list_for_br ?? []){
        T.add(z);
    }
    function K() {
        return (m || (m = r("AnalyticsCoreData"))).enable_bladerunner && !(_ || (_ = r("ExecutionEnvironment"))).isInWorker && (_ || (_ = r("ExecutionEnvironment"))).canUseDOM;
    }
    function Q() {
        return b && !B;
    }
    function X() {
        clearTimeout(W);
        W = undefined;
    }
    function Y() {
        S.start(function(e) {
            return e(me);
        });
    }
    function J() {
        W = undefined;
        if (!(O || B)) {
            B = true;
            o("FalcoUtils").bumpODSMetrics("", "streaming.non_critical_failure.init_timeout", 1);
            Y();
        }
    }
    function Z() {
        if ((_ || (_ = r("ExecutionEnvironment"))).canUseDOM && b) {
            clearTimeout(W);
            W = setTimeout(J, C);
        }
    }
    function ee() {
        X();
        B = true;
        Y();
    }
    function te(e, t) {
        if (!e.identity) {
            if (t) {
                e.identity = t;
            } else {
                e.identity = (m || (m = r("AnalyticsCoreData"))).identity;
            }
        }
    }
    function ne(e, t) {
        o("FalcoUtils").bumpODSMetrics(t.item.name, "event.info.streaming.batched", 1);
        const length = t.item.extra.length;
        if ($ + length > g) {
            clearTimeout(P);
            re();
        }
        x.push([
            e,
            t
        ]);
        $ += length;
    }
    function re() {
        P = undefined;
        N = false;
        const e = x;
        ce("event.info.streaming.batch_processing", e.map((e)=>e[1].item));
        if (!O && !Q()) {
            oe(e, "event.non_critical_failure.streaming_init_not_complete");
        } else {
            const t = !O;
            if (t) {
                ce("event.info.streaming.queued_until_init_complete", e.map((e)=>e[1].item));
            }
            S.enqueue(function(n) {
                if (t && n === me) {
                    oe(e, "event.non_critical_failure.streaming_init_failed");
                    return;
                }
                n.log(e.map((e)=>e[1].item), function(t) {
                    if (!t) {
                        oe(e, "event.info.banzai_fallback");
                        return;
                    }
                    ae(e, t, "event.info.streaming.enqueued");
                });
            });
        }
        x = [];
        $ = 0;
    }
    function oe(e, t) {
        const n = ()=>{
            let e;
            const n = a[0];
            const i = a[1];
            const i_item = i.item;
            o("FalcoUtils").bumpODSMetrics(i_item.name, t, 1);
            if (!i_item.identity) {
                i_item.identity = (m || (m = r("AnalyticsCoreData"))).identity;
            }
            if ((e = i_item.logCritical) != null && e) {
                me.logCritical([
                    i_item
                ], function(e) {
                    return n.markItem(i, e);
                });
            } else {
                let s;
                if ((s = i_item.logImmediate) != null && s) {
                    me.logImmediately([
                        i_item
                    ], function(e) {
                        return n.markItem(i, e);
                    });
                } else {
                    me.log([
                        i_item
                    ], function(e) {
                        return n.markItem(i, e);
                    });
                }
            }
        };
        for (var a of e){
            n();
        }
    }
    function ae(e, t, n) {
        for (const [a, i] of e){
            o("FalcoUtils").bumpODSMetrics(i.item.name, n, 1);
            a.markItem(i, t);
        }
    }
    function ie(e) {
        return {
            events: e.map((e)=>({
                    name: e.name,
                    extra: e.extra,
                    rate: e.policy.r,
                    time: e.time / 1000,
                    tag: 0,
                    tags: e.tags,
                    shouldAddState: e.shouldAddState,
                    identity: se(e.identity),
                    expTags: e.exptTags,
                    sessionID: e.sessionId,
                    deviceID: e.deviceId
                }))
        };
    }
    function le(e) {
        const i = {
            deviceId: (m || (m = r("AnalyticsCoreData"))).device_id,
            familyDeviceId: null,
            osBuildNumber: null,
            sessionId: e,
            appId: m.app_id,
            appVersion: (m || (m = r("AnalyticsCoreData"))).app_version ?? null,
            bundleId: null,
            consentState: (m || (m = r("AnalyticsCoreData"))).consent_state ?? null,
            identity: null,
            pushPhase: m.push_phase
        };
        if (((m || (m = r("AnalyticsCoreData"))).stateful_events_list_for_br?.length ?? 0) > 0) {
            i.ambientState = (m || (m = r("AnalyticsCoreData"))).state_for_br;
        }
        i.identity = se(m.identity);
        return Object.freeze(i);
    }
    function se(identity) {
        const n = identity?.claims ?? [];
        const r = identity?.appScopedIdentity;
        if (r !== undefined) {
            return {
                appScopedIdentity: {
                    uid: r,
                    identifier: r,
                    claims: n
                }
            };
        }
        const o = identity?.fbIdentity;
        if (o !== undefined) {
            return {
                facebookIdentity: {
                    actorId: o.actorId,
                    accountId: o.accountId,
                    claims: n
                }
            };
        }
        return null;
    }
    function ue(e, t) {
        for (const n of e){
            const s = {
                e: n.extra,
                r: n.policy.r,
                d: n.deviceId ?? (m || (m = r("AnalyticsCoreData"))).device_id,
                s: n.sessionId ?? o("WebSession").getId(),
                t: n.time,
                a: n.appVersion
            };
            if (n.privacyContext) {
                s.p = n.privacyContext;
            }
            if (n.tags != null) {
                s.b = n.tags;
            }
            const u = n.identity;
            if (u) {
                s.id = u;
            }
            const c = (m || (m = r("AnalyticsCoreData"))).consent_state;
            if (c != null) {
                s.cs = c;
            }
            r("Banzai").post(v + n.name, s, t);
        }
        ce("event.uploaded", e);
    }
    function ce(e, t) {
        for (const n of t){
            if (n.name !== k) {
                o("FalcoUtils").bumpODSMetrics(n.name, e, 1);
            }
        }
    }
    function de(e, t) {
        const n = `falco.fabric.www.${(m || (m = r("AnalyticsCoreData"))).push_phase}`;
        (d || (d = o("ODS"))).bumpEntityKey(1344, n, e, t);
    }
    var me = {
        log: function(t, n) {
            ce("event.info.banzai.log.upload_processing", t);
            ue(t, r("Banzai").BASIC);
            n(true);
        },
        logImmediately: function(t, n) {
            ce("event.info.banzai.log_immediately.upload_processing", t);
            ue(t, r("Banzai").VITAL);
            n(true);
        },
        logCritical: function(t, n) {
            ce("event.info.banzai.log_critical.upload_processing", t);
            ue(t, {
                signal: true,
                retry: true
            });
            n(true);
        }
    };
    function pe(e) {
        ye();
        const t = _e(e, "banzai_data_loss", "log");
        const n = _e(e, "banzai_data_loss", "logImmediately");
        const o = _e(e, "banzai_data_loss", "logCritical");
        const a = _e(e, "bladerunner_data_loss", "");
        const i = _e(e, "bladerunner_data_loss", "logCritical");
        de(`js.br_data_loss.posted.${e}`, 1);
        if (O && A) {
            try {
                S.enqueue(function(t) {
                    return t.log([
                        a
                    ], function(t) {
                        if (!t) {
                            de(`js.br.transport_failure.${e}`, 1);
                            me.logCritical([
                                i
                            ], function(t) {
                                de(`js.br.failure_fallback_success_callback.${e}`, 1);
                            });
                            return;
                        }
                        de(`js.br.success_callback.${e}`, 1);
                    });
                });
            } catch (t) {
                de(`js.br.error_enqueueing.${e}`, 1);
                me.logCritical([
                    i
                ], function(t) {
                    de(`js.br.enqueuing_fallback_success_callback.${e}`, 1);
                });
            }
        } else {
            if (!A) {
                de(`js.br.failed.${e}`, 1);
            }
            if (!O) {
                de(`js.br.init_not_complete.${e}`, 1);
            }
            me.logCritical([
                i
            ], function(t) {
                de(`js.br.init_fallback_success_callback.${e}`, 1);
            });
        }
        ue([
            t
        ], r("Banzai").BASIC);
        ue([
            n
        ], r("Banzai").VITAL);
        ue([
            o
        ], {
            signal: true,
            retry: true
        });
    }
    function _e(event_index, name, logging_mode) {
        return {
            name,
            time: (p || (p = r("performanceAbsoluteNow")))(),
            policy: {
                r: 1
            },
            extra: JSON.stringify({
                event_index,
                falco_js_connection_id,
                logging_mode,
                logging_flow_flag: "original_flow"
            }),
            appVersion: (m || (m = r("AnalyticsCoreData"))).app_version
        };
    }
    function fe() {
        if (U + R < Date.now()) {
            pe(V);
            U = Date.now();
            V++;
        }
    }
    function ge() {
        window.setTimeout(function() {
            fe();
            if (V <= 40) {
                ge();
            }
        }, L);
    }
    function he(e) {
        S.start(function(t) {
            var n = {
                log: function(n, o) {
                    ce("event.info.streaming.queue_processing", n);
                    const t = JSON.stringify(ie(n));
                    if (e) {
                        if ((m || (m = r("AnalyticsCoreData"))).enable_ack) {
                            r("promiseDone")(e.amendWithAck(t), function(e) {
                                if (e) {
                                    ce("event.streamed.with_ack", n);
                                    ce("event.uploaded", n);
                                } else {
                                    ce("event.non_critical_failure.streaming.ack_failed", n);
                                }
                                o(e);
                            }, function() {
                                ce("event.non_critical_failure.streaming.ack_rejected", n);
                                o(false);
                            });
                        } else {
                            e.amendWithoutAck(t);
                            ce("event.streamed.without_ack", n);
                            ce("event.uploaded", n);
                        }
                    } else {
                        ce("event.non_critical_error.streaming.stream_not_available", n);
                        o(false);
                    }
                },
                logImmediately: function(t, r) {
                    n.log(t, r);
                },
                logCritical: function(t, r) {
                    n.log(t, r);
                }
            };
            t(n);
        });
    }
    function ye() {
        if (!M) {
            O = false;
            if (K()) {
                f.onReady(function(e) {
                    if (!e) {
                        A = false;
                        F = true;
                        ee();
                        return;
                    }
                    const t = e;
                    let n;
                    let a = false;
                    let i = false;
                    const l = q;
                    const s = ()=>{
                        if (!(!a || !i || O || l !== q)) {
                            X();
                            o("FalcoUtils").bumpODSMetrics("", "streaming.info.init_accepted", 1);
                            he(n);
                            O = true;
                            B = false;
                            H = h;
                            G = y;
                        }
                    };
                    const u = {
                        onTermination: function(t) {
                            if (t.message === "Stream closed") {
                                X();
                                S.stop(true);
                                O = false;
                                M = false;
                            } else {
                                o("FalcoUtils").bumpODSMetrics("", "streaming.non_critical_failure.rejected", 1);
                                A = false;
                                ee();
                            }
                        },
                        onFlowStatus: function(t) {
                            if (b && (t === o("RequestStreamCommonRequestStreamCommonTypes").FlowStatus.Accepted || t === o("RequestStreamCommonRequestStreamCommonTypes").FlowStatus.Started)) {
                                i = true;
                                s();
                            }
                        }
                    };
                    r("promiseDone")(t.requestStream({
                        method: "Falco"
                    }, JSON.stringify(le(o("WebSession").getId())), u, {
                        requestId: ""
                    }).then((e)=>{
                        n = e;
                        if (b) {
                            a = true;
                            s();
                            return;
                        }
                        X();
                        he(n);
                        O = true;
                        B = false;
                        H = h;
                        G = y;
                    }).catch((e)=>{
                        o("FalcoUtils").bumpODSMetrics("", "streaming.non_critical_failure.failed", 1);
                        S.stop(true);
                        M = false;
                        A = false;
                        ee();
                    }));
                });
                M = true;
                q++;
                Z();
            }
        }
    }
    function Ce(e) {
        let t;
        const e_name = e.name;
        if (!K() || !A) {
            return false;
        }
        if (T.has(e_name) || e.policy.s !== 1 && (t = (m || (m = r("AnalyticsCoreData"))).br_stateful_migration_on) != null && t) {
            e.shouldAddState = true;
            e.tags = o("FalcoUtils").xorBitmap(e.tags ?? [
                0,
                0
            ], D);
            return true;
        }
        if (e.policy.s === 1) {
            e.tags = o("FalcoUtils").xorBitmap(e.tags ?? [
                0,
                0
            ], D);
            return true;
        }
        return false;
    }
    function be(e) {
        if (e === "") {
            return null;
        }
        if (I.has(e)) {
            return I.get(e);
        }
        let t = {
            claims: []
        };
        const n = e.split("^#");
        if (n.length >= 4) {
            const accountId = n[0];
            const actorId = n[1];
            const appScopedIdentity = n[2];
            const i = babelHelpers.arrayLikeToArray(n).slice(3);
            if (appScopedIdentity !== "") {
                t = {
                    appScopedIdentity,
                    claims: i
                };
            } else if (accountId !== "") {
                t = {
                    fbIdentity: {
                        accountId,
                        actorId
                    },
                    claims: i
                };
            }
            I.set(e, t);
        }
        return t;
    }
    function ve() {
        if (w) {
            return;
        }
        w = true;
        r("PersistedQueue").setHandler("falco_queue_log", function(t) {
            let n;
            const a = t.getQueueNameSuffix();
            const i = be(a);
            while(n = t.dequeueItem()){
                ((n)=>{
                    if (Ce(n.item)) {
                        o("FalcoUtils").bumpODSMetrics(n.item.name, "event.info.upload_method.streaming.log", 1);
                        ye();
                        if (P == null) {
                            P = setTimeout(re, H);
                        }
                        if (i && !e(a)) {
                            n.item.identity = i;
                        }
                        ne(t, n);
                    } else {
                        if (i) {
                            n.item.identity = i;
                        } else {
                            n.item.identity = (m || (m = r("AnalyticsCoreData"))).identity;
                        }
                        me.log([
                            n.item
                        ], function(e) {
                            return t.markItem(n, e);
                        });
                    }
                })(n);
            }
        });
        r("PersistedQueue").setHandler("falco_queue_immediately", function(t) {
            let n;
            const a = t.getQueueNameSuffix();
            const i = be(a);
            while(n = t.dequeueItem()){
                ((n)=>{
                    if (Ce(n.item)) {
                        o("FalcoUtils").bumpODSMetrics(n.item.name, "event.info.upload_method.streaming.log_immediately", 1);
                        ye();
                        if (P == null || !N) {
                            clearTimeout(P);
                            P = setTimeout(re, G);
                            N = true;
                        }
                        n.item.logImmediate = true;
                        if (i && !e(a)) {
                            n.item.identity = i;
                        }
                        ne(t, n);
                        if (!r("PersistedQueue").isPersistenceAllowed()) {
                            o("FalcoUtils").bumpODSMetrics(n.item.name, "event.info.streaming_no_persistence.log_immediately", 1);
                            re();
                        }
                    } else {
                        o("FalcoUtils").bumpODSMetrics(n.item.name, "event.info.upload_method.banzai.log_immediately", 1);
                        if (i) {
                            n.item.identity = i;
                        } else {
                            n.item.identity = (m || (m = r("AnalyticsCoreData"))).identity;
                        }
                        me.logImmediately([
                            n.item
                        ], function(e) {
                            return t.markItem(n, e);
                        });
                    }
                })(n);
            }
        });
        r("PersistedQueue").setHandler("falco_queue_critical", function(t) {
            let n;
            const a = t.getQueueNameSuffix();
            const i = be(a);
            while(n = t.dequeueItem()){
                ((n)=>{
                    const n_item = n.item;
                    if (Ce(n_item)) {
                        o("FalcoUtils").bumpODSMetrics(n.item.name, "event.info.upload_method.streaming.log_critical", 1);
                        ye();
                        n_item.logCritical = true;
                        if (i && !e(a)) {
                            n_item.identity = i;
                        }
                        if (!O && !Q()) {
                            te(n_item, i);
                            oe([
                                [
                                    t,
                                    n
                                ]
                            ], "event.non_critical_failure.streaming_init_not_complete.log_critical");
                        } else {
                            const s = !O;
                            if (s) {
                                o("FalcoUtils").bumpODSMetrics(n_item.name, "event.info.streaming.queued_until_init_complete.log_critical", 1);
                            }
                            S.enqueue(function(e) {
                                if (s && e === me) {
                                    te(n_item, i);
                                    oe([
                                        [
                                            t,
                                            n
                                        ]
                                    ], "event.non_critical_failure.streaming_init_failed.log_critical");
                                    return;
                                }
                                e.logCritical([
                                    n_item
                                ], function(e) {
                                    if (!e) {
                                        te(n_item, i);
                                        oe([
                                            [
                                                t,
                                                n
                                            ]
                                        ], "event.info.banzai_fallback.log_critical");
                                        return;
                                    }
                                    ae([
                                        [
                                            t,
                                            n
                                        ]
                                    ], e, "event.uploaded");
                                });
                            });
                        }
                    } else {
                        if (i) {
                            n_item.identity = i;
                        } else {
                            n_item.identity = (m || (m = r("AnalyticsCoreData"))).identity;
                        }
                        o("FalcoUtils").bumpODSMetrics(n.item.name, "event.info.upload_method.banzai.log_critical", 1);
                        me.logCritical([
                            n_item
                        ], function(e) {
                            return t.markItem(n, e);
                        });
                    }
                })(n);
            }
        });
        if ((m || (m = r("AnalyticsCoreData"))).enable_dataloss_timer) {
            ye();
            fe();
            ge();
        }
        function e(e) {
            try {
                const t = o("FalcoUtils").identityToString((m || (m = r("AnalyticsCoreData"))).identity);
                return e === t;
            } catch (e) {
                (d || (d = o("ODS"))).bumpEntityKey(1344, "js.br.identity.check", "exception.when.comparing.with.current.user.identity", 1);
                return true;
            }
        }
    }
    l.attach = ve;
}, 98);