__d("QuickPerformanceLogger", [
    "Arbiter",
    "Env",
    "FBLogger",
    "ODS",
    "PerfFalcoEvent",
    "PerfXSharedFields",
    "Promise",
    "QPLCore",
    "QPLEvent",
    "QPLInspector",
    "Run",
    "WebStorage",
    "clearTimeout",
    "cr:12180",
    "cr:1984081",
    "cr:686",
    "getErrorSafe",
    "gkx",
    "guid",
    "justknobx",
    "performanceAbsoluteNow",
    "performanceNavigationStart",
    "performanceNow",
    "setTimeout"
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
    const f = typeof window !== "undefined" ? window : self;
    function onError(t, n) {
        r("FBLogger")("qpl").catching(r("getErrorSafe")(n)).MUSTFIX(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "QPL error in ",
            ""
        ])), t);
    }
    function h(e) {
        const t = r("PerfXSharedFields").getCommonData();
        const n = {
            memory_stats: {
                total_mem: t.ram_gb != null ? t.ram_gb * 1073741824 : null
            },
            network_stats: {
                downlink_megabits: t.downlink_megabits,
                network_subtype: t.effective_connection_type,
                rtt_ms: t.rtt_ms
            },
            sitedata_info: {
                client_push_phase: t.client_push_phase,
                client_revision: t.client_revision,
                server_revision: t.server_revision
            },
            locale_info: {
                locale: t.locale,
                isRTL: t.isRTL
            }
        };
        if (r("gkx")("20836")) {
            n.workplace_info = {
                is_gemini: r("gkx")("21050")
            };
        }
        if (r("gkx")("21051") && typeof f.__sapienzMetadataCallback__ === "function") {
            const o = f.__sapienzMetadataCallback__();
            n.sapienz = {
                request_id: String(o.requestId),
                config_name: String(o.configName)
            };
        }
        return babelHelpers.extends({}, e, {
            metadata: babelHelpers.extends({}, e.metadata, n)
        });
    }
    function y(e, r_1, m_1) {
        return {
            i: e,
            m: m_1,
            r: r_1
        };
    }
    function sendEvent(e, t) {
        return new (_ || (_ = n("Promise")))(function() {
            const o = t || e;
            if (typeof f.__je2e_recordQPLMarker === "function") {
                f.__je2e_recordQPLMarker(o);
            }
            if ((p || (p = r("Env"))).enable_qplinspector === true) {
                r("QPLInspector").appendLog(o);
            }
            if (r("gkx")("21053") || r("gkx")("20935") || r("gkx")("5679")) {
                r("PerfFalcoEvent").logImmediately(function() {
                    return o;
                });
            } else if (r("gkx")("2160") || r("gkx")("21055") || r("gkx")("9550")) {
                r("PerfFalcoEvent").logCritical(function() {
                    return o;
                });
            } else if (o.annotations?.join_id != null && r("justknobx")._("3011")) {
                r("PerfFalcoEvent").logImmediately(function() {
                    return o;
                });
            } else {
                r("PerfFalcoEvent").log(function() {
                    return o;
                });
            }
        });
    }
    function e2eTracingIDGenerator(e) {
        const t = (s || (s = o("QPLEvent"))).getMarkerId(e);
        const n = `${t}_${r("guid")()}`;
        (m || (m = o("ODS"))).bumpEntityKey(2401, "obc.www.all", `qpl.e2e_tracing_id_generated.${t}`);
        return n;
    }
    function decorateEventBeforeUpload(e) {
        const t = babelHelpers.extends({}, e, {
            config_type: r("gkx")("21056") ? "alpha_beta" : "prod"
        });
        return h(t);
    }
    function unsampleAllEvents() {
        return (p || (p = r("Env"))).enable_qplinspector === true || typeof f.__je2e_recordQPLMarker === "function" || r("gkx")("21057");
    }
    function onDebuggingIdEnded() {
        r("Arbiter").inform("qpl_debugger_finished");
    }
    const moduleLoadTimestamp = (u || (u = r("performanceAbsoluteNow")))();
    if (typeof f.__je2e_felabsTracePlugin_setQplInit === "function") {
        f.__je2e_felabsTracePlugin_setQplInit((c || (c = r("performanceNow")))());
    }
    const logger = {
        debug: function(t, n, r) {},
        warn: function(t) {
            r("FBLogger")("qpl").blameToPreviousDirectory().warn(t);
        }
    };
    const k = "qpl";
    const I = ((e)=>{
        function t() {
            let t;
            t = e.call(this, {
                decorateEventBeforeUpload,
                unsampleAllEvents,
                onDebuggingIdEnded,
                monotonicNowMs: u || (u = r("performanceAbsoluteNow")),
                unixNowMs: u || (u = r("performanceAbsoluteNow")),
                moduleLoadTimestamp,
                logger,
                sendEvent,
                e2eTracingIDGenerator,
                runtimeAbstractionLayer: {
                    setTimeout: r("setTimeout"),
                    clearTimeout: r("clearTimeout")
                },
                debugLoggingEnabled: (p || (p = r("Env"))).qpl_debug_logging,
                onError
            }) || this;
            const n = r("gkx")("21055") ? r("gkx")("21058") ? (e)=>o("Run").onBeforeUnload(e, false) : o("Run").onBeforeUnload : o("Run").onUnload;
            n(function() {
                t.$QuickPerformanceLogger$p_1();
                t.$QuickPerformanceLogger$p_2(706, {
                    respectUnloadPolicy: true,
                    timestamp: t.currentTimestamp()
                });
            });
            t.$QuickPerformanceLogger$p_3();
            t.initQplFlipperPlugin();
            t.initQplSapienzPlugin();
            t.initQplUserTimingPlugin();
            return t;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.$QuickPerformanceLogger$p_3 = function() {
            const e = this;
            const t = (d || (d = r("WebStorage"))).getSessionStorageForRead();
            if (!t) {
                this.$QuickPerformanceLogger$p_4("#loadSavedState", "sessionStorage is not available");
                return;
            }
            const n = t.getItem(k);
            if (n != null) {
                t.removeItem(k);
                const o = JSON.parse(n);
                if (o == null) {
                    this.$QuickPerformanceLogger$p_4("#loadSavedState", "Saved state failed to deserialize");
                    return;
                }
                if (o.markers == null || o.markers.length === 0) {
                    this.$QuickPerformanceLogger$p_4("#loadSavedState", "No saved markers found");
                    return;
                }
                o.markers.forEach(([n, r, o])=>{
                    e.addMarker(n, r, o);
                    e.$QuickPerformanceLogger$p_4("#loadSavedState", `Marker ${n} (instanceKey: ${r}) resumed`);
                });
            }
        };
        t_prototype.$QuickPerformanceLogger$p_1 = function() {
            const e = this;
            const markers = [];
            this.activeMarkers.forEach((e, n)=>{
                e.forEach((e, r)=>{
                    if (e.resumeAfterNavigation === true) {
                        delete e.resumeAfterNavigation;
                        markers.push([
                            n,
                            r,
                            e
                        ]);
                    }
                });
            });
            if (markers.length > 0) {
                const n = {
                    markers
                };
                const o = (d || (d = r("WebStorage"))).getSessionStorage();
                const a = d.setItemGuarded(o, k, JSON.stringify(n));
                if (a) {
                    markers.forEach(([n, r, o])=>{
                        const a = y(n, o.sampleRate, o.samplingMethod);
                        e.markerEnd(a, 96, r);
                    });
                    this.$QuickPerformanceLogger$p_4("#storeSavedState", `Failed to store saved state: ${a.message}`);
                    r("FBLogger")("qpl").catching(a).warn(`Failed to store QPL state: ${JSON.stringify(n, null, 2)}`);
                }
                markers.forEach(([n, r])=>{
                    e.deleteMarker(n, r);
                });
            }
        };
        t_prototype.markerStoreBeforeNavigation = function(t, { instanceKey = 0 } = {}) {
            const i = (s || (s = o("QPLEvent"))).getMarkerId(t);
            const l = this.getMarker(t, instanceKey);
            if (!l) {
                this.$QuickPerformanceLogger$p_4("markerStoreBeforeNavigation", `Failed to set marker to store on page unload. Could not find marker ${i}, instancekey=${instanceKey}`);
                return;
            }
            l.resumeAfterNavigation = true;
            this.$QuickPerformanceLogger$p_4("markerStoreBeforeNavigation", `Set marker ${i} to store on page unload, instancekey=${instanceKey}`);
        };
        t_prototype.markerStartFromNavStart = function(t, n = 0, { cancelExisting = false, cancelOnUnload = false, trackedForLoss = false, type = 1, qplInternalDoNotUseConvertToTimeOnServer, onMarkerTimeout__DoNotUse, timeoutMS = null, crashResilient = false } = {}) {
            const C = r("performanceNavigationStart")();
            const b = typeof qplInternalDoNotUseConvertToTimeOnServer === "function" ? qplInternalDoNotUseConvertToTimeOnServer(C) : undefined;
            this.markerStart(t, n, C, {
                cancelExisting,
                cancelOnUnload,
                trackedForLoss,
                type,
                qplInternalDoNotUseAbsoluteTimeOrigin: b,
                onMarkerTimeout__DoNotUse,
                timeoutMS,
                crashResilient
            });
            if (r("performanceNavigationStart").isPolyfilled === true) {
                const v = this.getMarker(t, n);
                if (v) {
                    v.timestampIsApproximate = true;
                }
            }
        };
        t_prototype.markerStartForJoinFromNavStart = function(t, n, { instanceKey = 0, cancelExisting = false, cancelOnUnload = false, trackedForLoss = false, type = 1, qplInternalDoNotUseConvertToTimeOnServer, absoluteTimeOriginMs, sourceIsPrimary = false, closeSession, unreliableSourceClockProcessId, onMarkerTimeout__DoNotUse, timeoutMS, crashResilient = false } = {}) {
            const monotonicTimestamp = r("performanceNavigationStart")();
            const k = typeof qplInternalDoNotUseConvertToTimeOnServer === "function" ? qplInternalDoNotUseConvertToTimeOnServer(monotonicTimestamp) : undefined;
            this.markerStartForJoin(t, n, {
                instanceKey,
                cancelExisting,
                cancelOnUnload,
                trackedForLoss,
                type,
                qplInternalDoNotUseAbsoluteTimeOrigin: k,
                monotonicTimestamp,
                absoluteTimeOriginMs,
                sourceIsPrimary,
                closeSession,
                unreliableSourceClockProcessId,
                timeoutMS,
                onMarkerTimeout__DoNotUse,
                crashResilient
            });
            if (r("performanceNavigationStart").isPolyfilled === true) {
                const I = this.getMarker(t, instanceKey);
                if (I) {
                    I.timestampIsApproximate = true;
                }
            }
        };
        t_prototype.$QuickPerformanceLogger$p_2 = function(t, n) {
            const e = this;
            const r = n === undefined ? {} : n;
            const { respectUnloadPolicy, timestamp } = r;
            this.activeMarkers.forEach((n, r)=>{
                n.forEach((n, i)=>{
                    if (respectUnloadPolicy !== true || n.cancelOnUnload === true) {
                        const l = y(r, n.sampleRate, n.samplingMethod);
                        e.markerEnd(l, t, i, timestamp);
                    }
                });
            });
        };
        t_prototype.$QuickPerformanceLogger$p_4 = function(t, n, r) {
            logger.debug(t, n, r);
        };
        t_prototype.initQplFlipperPlugin = function() {
            if (n("cr:686") != null) {
                this.addListener(n("cr:686").qplFlipperPlugin.listener());
            }
        };
        t_prototype.initQplSapienzPlugin = function() {
            if (n("cr:1984081") != null) {
                this.addListener(n("cr:1984081").getQplSapienzListener());
            }
        };
        t_prototype.initQplUserTimingPlugin = function() {
            if (n("cr:12180") != null) {
                this.addListener(n("cr:12180").getQplUserTimingListener());
            }
        };
        return t;
    })(r("QPLCore"));
    const T = new I;
    l.default = T;
}, 98);