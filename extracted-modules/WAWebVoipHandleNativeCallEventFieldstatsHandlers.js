__d("WAWebVoipHandleNativeCallEventFieldstatsHandlers", [
    "Promise",
    "WALogger",
    "WAPromiseDelays",
    "WAWebBackendApi",
    "WAWebBrowserApi",
    "WAWebCallRandomIdStore",
    "WAWebCallUserJourneyGating",
    "WAWebCallWamEvent",
    "WAWebCoreActionsODS",
    "WAWebJoinableCallWamEvent",
    "WAWebPonyfillsIdleCallback",
    "WAWebReleaseToEventLoop",
    "WAWebVoipAppInBgWhenCallStartsStore",
    "WAWebVoipBatteryDiagnostics",
    "WAWebVoipBrowserMetrics",
    "WAWebVoipCallEnterPipModeCountStore",
    "WAWebVoipCallFromUiStore",
    "WAWebVoipCallRatingStore",
    "WAWebVoipCalleeOfferToRingStore",
    "WAWebVoipCrashRecovery",
    "WAWebVoipDeviceClassUtils",
    "WAWebVoipErrorLogUpload",
    "WAWebVoipFocusTracker",
    "WAWebVoipGatingUtils",
    "WAWebVoipHardwareInfo",
    "WAWebVoipIncomingCallUiActionStore",
    "WAWebVoipIncomingOfferReceivedWallClockStore",
    "WAWebVoipJsonParserPayloads",
    "WAWebVoipLabMetricsFile",
    "WAWebVoipLobbyEntryPointStore",
    "WAWebVoipPersistentFS",
    "WAWebVoipStackInterface",
    "WAWebVoipVideoEncoderType",
    "WAWebVoipWebTransportCallSummary",
    "WAWebVoipWindowMetrics",
    "WAWebWamEnumCallSide",
    "WAWebWamEnumFieldStatsRowType",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "isEmptyObject"
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
    let T;
    let D;
    let x;
    let $;
    let P;
    let N;
    let M;
    let w;
    let A;
    let F;
    let O;
    const B = 0;
    const W = 6;
    const q = 10;
    const U = 15;
    const V = 17;
    const H = 30000;
    const G = 15000;
    const z = 2000;
    const j = 2000;
    function K() {
        if (o("WAWebVoipGatingUtils").isGuestViewer()) {
            return G;
        }
        return H;
    }
    const Q = new WeakSet;
    const X = new WeakMap;
    const Y = new WeakMap;
    let J = null;
    let Z = null;
    function ee(e, t) {
        return te.apply(this, arguments);
    }
    function te() {
        te = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = o("WAWebBrowserApi").getNumCpu();
            const r = o("WAWebBrowserApi").getMemClass();
            const a = r != null ? Math.round(r / 1000) : null;
            const i = o("WAWebVoipDeviceClassUtils").computeDeviceClass(n, a);
            let l = babelHelpers.extends({}, e);
            if (n != null) {
                l.numCpuCores = n;
            }
            if (a != null) {
                l.totalMemoryGb = a;
            }
            if (i != null) {
                l.deviceClass = i;
            }
            l = ne(l);
            l = re(l, t);
            const s = o("WAWebVoipFocusTracker").snapshotFocusStats();
            if (s != null) {
                l = babelHelpers.extends({}, l, s);
            }
            const u = o("WAWebVoipBrowserMetrics").snapshotBrowserMetrics();
            if (u != null) {
                l = babelHelpers.extends({}, l, u);
            }
            const c = o("WAWebVoipWindowMetrics").snapshotWindowMetrics();
            if (c != null) {
                l = babelHelpers.extends({}, l, c);
            }
            const d = o("WAWebVoipBatteryDiagnostics").snapshotBatteryDiagnostics();
            if (d != null) {
                l = babelHelpers.extends({}, l, d);
            }
            oe();
            const m = yield o("WAWebBackendApi").frontendSendAndReceive("consumeAudioPlaybackMetrics");
            if (m != null) {
                l = babelHelpers.extends({}, l, m);
            }
            const p = yield o("WAWebBackendApi").frontendSendAndReceive("consumeAudioCaptureMetrics");
            if (p != null) {
                l = babelHelpers.extends({}, l, p);
            }
            return l;
        });
        return te.apply(this, arguments);
    }
    function ne(e) {
        const t = o("WAWebVoipHardwareInfo").getCachedHardwareInfo();
        const n = babelHelpers.extends({}, e);
        if (t.cpuArch != null) {
            n.cpuArch = t.cpuArch;
        }
        if (t.gpuName != null) {
            n.gpuName = t.gpuName;
        }
        if (t.gpuVendor != null) {
            n.gpuVendor = t.gpuVendor;
        }
        if (t.gpuCount != null) {
            n.gpuCount = t.gpuCount;
        }
        return n;
    }
    function re(e, t) {
        if (t == null) {
            return babelHelpers.extends({}, e);
        }
        let n = babelHelpers.extends({}, e, {
            webTransportUsed: t.relayTrafficSent,
            webTransportConnectAttempted: t.connectAttempted,
            webTransportConnectOpened: t.connectOpened,
            webTransportRelayTrafficSent: t.relayTrafficSent,
            webTransportFallbackTriggered: t.fallbackTriggered,
            webTransportFallbackPhase: t.fallbackPhase,
            webTransportFallbackReason: t.fallbackReason,
            webTransportFallbackSinceCallStartMs: t.fallbackSinceCallStartMs,
            webTransportFallbackSinceAcceptMs: t.fallbackSinceAcceptMs,
            webTransportFallbackSctpStartMs: t.fallbackSctpStartMs,
            webTransportFallbackSctpConnectedMs: t.fallbackSctpConnectedMs,
            webTransportFallbackToFirstActiveMs: t.fallbackToFirstActiveMs
        });
        if (t.configEnabled != null) {
            n = babelHelpers.extends({}, n, {
                webTransportConfigEnabled: t.configEnabled
            });
        }
        if (t.runtimeEligible != null) {
            n = babelHelpers.extends({}, n, {
                webTransportRuntimeEligible: t.runtimeEligible
            });
        }
        return n;
    }
    function oe() {
        o("WAWebVoipFocusTracker").resetFocusStats();
        o("WAWebVoipBrowserMetrics").resetBrowserMetrics();
        o("WAWebVoipWindowMetrics").resetWindowMetrics();
        o("WAWebVoipBatteryDiagnostics").resetBatteryDiagnostics();
    }
    function ae(jsonDataStr) {
        try {
            const t = JSON.parse(jsonDataStr);
            return t.is_last_field_stats_report === true;
        } catch (e) {
            return false;
        }
    }
    function ie(e) {
        return le.apply(this, arguments);
    }
    function le() {
        le = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = ye(e);
            delete e.micPermission;
            delete e.cameraPermission;
            const r = yield (O || (O = n("Promise"))).all([
                se(o("WAWebBackendApi").frontendSendAndReceive("getVoipMicPermissionGranted"), "mic_permission"),
                t ? se(o("WAWebBackendApi").frontendSendAndReceive("getVoipCameraPermissionGranted"), "camera_permission") : (O || (O = n("Promise"))).resolve(null)
            ]);
            const a = r[0];
            const i = r[1];
            if (a != null) {
                e.micPermission = a;
                o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [Fieldstats] mic_permission=",
                    ""
                ])), String(a));
            }
            if (i != null) {
                e.cameraPermission = i;
                o("WALogger").LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [Fieldstats] camera_permission=",
                    ""
                ])), String(i));
            }
        });
        return le.apply(this, arguments);
    }
    function se(t, n) {
        return o("WAPromiseDelays").withTimeout(t.then((e)=>e, (t)=>{
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [Fieldstats] ",
                " lookup failed"
            ])), n).catching(r("getErrorSafe")(t));
            return null;
        }), z, function() {
            o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [Fieldstats] ",
                " lookup timed out"
            ])), n);
            return null;
        });
    }
    function ue(e) {
        return ce.apply(this, arguments);
    }
    function ce() {
        ce = n("asyncToGeneratorRuntime").asyncToGenerator(function*(jsonDataStr) {
            const n = o("WAWebVoipWebTransportCallSummary").getWtCurrentCallTelemetry();
            const r = o("WAWebVoipCallRatingStore").setPendingFieldstatsJsonStr({
                calleeOfferToRingT: o("WAWebVoipCalleeOfferToRingStore").getCalleeOfferToRingT(),
                callEnterPipModeCount: fe(),
                callFromUi: o("WAWebVoipCallFromUiStore").getCallFromUi(),
                callRandomId: o("WAWebCallRandomIdStore").getCurrentCallRandomId(),
                incomingCallUiAction: o("WAWebVoipIncomingCallUiActionStore").getIncomingCallUiAction(),
                isAppInBgWhenCallStarts: o("WAWebVoipAppInBgWhenCallStartsStore").getAppInBgWhenCallStarts(),
                jsonDataStr,
                lobbyEntryPoint: o("WAWebVoipLobbyEntryPointStore").getCurrentLobbyEntryPoint()
            });
            Z = r;
            if (n != null) {
                X.set(r, n);
            }
            xe(r);
            const a = ae(jsonDataStr);
            if (a) {
                Ie(r);
            }
            const i = yield o("WAWebVoipStackInterface").getVoipStackInterface();
            if (i == null || i.type !== "web") {
                o("WALogger").WARN(C || (C = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [Fieldstats] stack unavailable, dropping"
                ])));
                return;
            }
            const l = i.parsers.parseFieldstatsData(jsonDataStr);
            const groupCallSegmentIdx = l.stats.groupCallSegmentIdx;
            const fieldStatsRowType = l.stats.fieldStatsRowType;
            const l_isLastFieldStatsReport = l.isLastFieldStatsReport;
            ge(l.eventType, fieldStatsRowType);
            if (l_isLastFieldStatsReport) {
                o("WAWebVoipLobbyEntryPointStore").resetLobbyEntryPoint();
                o("WAWebVoipIncomingCallUiActionStore").resetIncomingCallUiAction();
                o("WAWebVoipCallFromUiStore").resetCallFromUi();
                o("WAWebVoipAppInBgWhenCallStartsStore").resetAppInBgWhenCallStarts();
                o("WAWebVoipCallEnterPipModeCountStore").resetCallEnterPipModeCount();
                o("WAWebVoipCalleeOfferToRingStore").resetCalleeOfferToRing();
                o("WAWebCoreActionsODS").logCallFieldstatsFinalReceived();
                if (!a) {
                    Ie(r);
                }
                if (l.eventType === o("WAWebVoipJsonParserPayloads").FieldstatsPayloadType.Call) {
                    be(l.stats);
                    Se(l.stats);
                }
                if (Z === r) {
                    yield Me(r);
                    if (l.eventType === o("WAWebVoipJsonParserPayloads").FieldstatsPayloadType.Call) {
                        yield Fe(r);
                    }
                }
                o("WALogger").LOG(b || (b = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [Fieldstats] last segment stored for rating"
                ])));
                return;
            }
            if (a) {
                De(r);
            }
            yield o("WAWebReleaseToEventLoop").releaseToEventLoop();
            const d = Ce(fieldStatsRowType) ? yield ee(l.stats, X.get(r) ?? null) : babelHelpers.extends({}, l.stats);
            if (l.eventType === o("WAWebVoipJsonParserPayloads").FieldstatsPayloadType.Call && d.callTermReason === B) {
                delete d.callTermReason;
            }
            const r_lobbyEntryPoint = r.lobbyEntryPoint;
            if (r_lobbyEntryPoint != null) {
                d.lobbyEntryPoint = r_lobbyEntryPoint;
            }
            if (o("WAWebCallUserJourneyGating").isCallUserJourneyLoggingEnabled()) {
                const p = r.callRandomId;
                if (p != null) {
                    d.callRandomId = p;
                }
            }
            if (l.eventType === o("WAWebVoipJsonParserPayloads").FieldstatsPayloadType.Call) {
                if (o("WAWebCallUserJourneyGating").isCallUserJourneyLoggingEnabled()) {
                    delete d.micPermission;
                    delete d.cameraPermission;
                }
                de(d, r.callFromUi);
                me(d, r.isAppInBgWhenCallStarts);
                he(d, r.callEnterPipModeCount);
                const _ = yield o("WAWebBackendApi").frontendSendAndReceive("getUnifiedSessionId");
                if (_ != null) {
                    d.unifiedSessionId = _;
                }
            }
            const f = l.eventType === o("WAWebVoipJsonParserPayloads").FieldstatsPayloadType.Call ? new (o("WAWebCallWamEvent")).CallWamEvent(d) : Re(d);
            f.commit();
        });
        return ce.apply(this, arguments);
    }
    function de(e, callFromUi) {
        if (callFromUi != null && e.callSide === o("WAWebWamEnumCallSide").CALL_SIDE.CALLER && o("WAWebCallUserJourneyGating").isCallUserJourneyLoggingEnabled()) {
            e.callFromUi = callFromUi;
        }
    }
    function me(e, isAppInBgWhenCallStarts) {
        if (isAppInBgWhenCallStarts != null && Ce(e.fieldStatsRowType) && o("WAWebCallUserJourneyGating").isCallUserJourneyLoggingEnabled()) {
            e.isAppInBgWhenCallStarts = isAppInBgWhenCallStarts;
        }
    }
    function pe(e, calleeOfferToRingT) {
        if (calleeOfferToRingT != null && e.callSide === o("WAWebWamEnumCallSide").CALL_SIDE.CALLEE && o("WAWebCallUserJourneyGating").isCallUserJourneyLoggingEnabled()) {
            e.calleeOfferToRingT = calleeOfferToRingT;
        }
    }
    function _e(e, t) {
        if (t != null && e.callSide === o("WAWebWamEnumCallSide").CALL_SIDE.CALLEE) {
            e.voipWindowIncomingOfferToLayoutTime = t;
        }
    }
    function fe() {
        if (o("WAWebVoipGatingUtils").isDocPipEnabled()) {
            return o("WAWebVoipCallEnterPipModeCountStore").getCallEnterPipModeCount();
        }
        return null;
    }
    function ge(eventType, fieldStatsRowType) {
        if (eventType === o("WAWebVoipJsonParserPayloads").FieldstatsPayloadType.Call && fieldStatsRowType === o("WAWebWamEnumFieldStatsRowType").FIELD_STATS_ROW_TYPE.SELF) {
            o("WAWebVoipCallEnterPipModeCountStore").resetCallEnterPipModeCount();
        }
    }
    function he(e, callEnterPipModeCount) {
        if (callEnterPipModeCount != null && Ce(e.fieldStatsRowType) && o("WAWebCallUserJourneyGating").isCallUserJourneyLoggingEnabled()) {
            e.callEnterPipModeCount = callEnterPipModeCount;
        }
    }
    function ye(e) {
        return e.videoEnabled === true || e.videoEnabledAtCallStart === true;
    }
    function Ce(fieldStatsRowType) {
        return fieldStatsRowType === o("WAWebWamEnumFieldStatsRowType").FIELD_STATS_ROW_TYPE.SELF || fieldStatsRowType === o("WAWebWamEnumFieldStatsRowType").FIELD_STATS_ROW_TYPE.BOTH;
    }
    function be(stats) {
        const { callEndReconnecting, callResult, groupCallIsLastSegment, maxConnectedParticipants } = stats;
        if (!(typeof callEndReconnecting !== "boolean" || typeof callResult !== "number" || typeof groupCallIsLastSegment !== "boolean" || typeof maxConnectedParticipants !== "number")) {
            const { callId, callT, groupCallSegmentIdx, groupCallTotalCallTSinceCallStart } = stats;
            o("WAWebVoipErrorLogUpload").maybeUploadGroupCallCerLogs({
                callEndReconnecting,
                callId: typeof callId === "string" ? callId : null,
                callResult,
                callT: typeof callT === "number" ? callT : null,
                groupCallIsLastSegment,
                groupCallSegmentIdx: typeof groupCallSegmentIdx === "number" ? groupCallSegmentIdx : null,
                groupCallTotalCallTSinceCallStart: typeof groupCallTotalCallTSinceCallStart === "number" ? groupCallTotalCallTSinceCallStart : null,
                maxConnectedParticipants
            });
        }
    }
    function ve(callResult, callSetupErrorType) {
        if (callResult === q) {
            return "anc";
        }
        if (callResult === W && (callSetupErrorType === U || callSetupErrorType === V)) {
            return "relay_bind";
        }
        return null;
    }
    function Se(stats) {
        const t = typeof stats.callId === "string" ? stats.callId : null;
        const n = o("WAWebVoipWebTransportCallSummary").getWtCallSummaryForCall(t);
        if (n != null) {
            const { callResult, callSetupErrorType, maxConnectedParticipants } = stats;
            if (!(stats.groupCallIsLastSegment !== true || typeof callResult !== "number" || typeof maxConnectedParticipants !== "number")) {
                const l = ve(callResult, callSetupErrorType);
                if (l != null) {
                    o("WAWebCoreActionsODS").logCallWebtransportGroupCallAnc();
                    o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [WtGroupCallAnc] kind=",
                        " callId=",
                        " callResult=",
                        " callSetupErrorType=",
                        " maxConnectedParticipants=",
                        " numRelayAttempts=",
                        " numOpened=",
                        " attempts=",
                        ""
                    ])), l, String(t), callResult, String(callSetupErrorType ?? "n/a"), maxConnectedParticipants, n.numRelayAttempts, n.numOpened, JSON.stringify(n.attempts)).sendLogs("webtransport-group-call-anc");
                }
            }
        }
    }
    function Re(e) {
        const t = new (o("WAWebJoinableCallWamEvent")).JoinableCallWamEvent;
        t.set(o("WAWebVoipGatingUtils").isGuestViewer() ? babelHelpers.extends({}, e, {
            isGuestParticipant: true
        }) : e);
        return t;
    }
    function Le(e) {
        const t = o("WAWebVoipCallRatingStore").getPendingFieldstats();
        if (t == null) {
            o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "voip: No pending fieldstats to send"
            ])));
            return (O || (O = n("Promise"))).resolve();
        }
        return Ee(t, e);
    }
    function Ee(e, t) {
        const n = Y.get(e);
        if (n != null) {
            return n;
        }
        const r = We(e, t);
        Y.set(e, r);
        r.then(()=>{
            if (Y.get(e) === r) {
                Y.delete(e);
            }
        }, ()=>{
            if (Y.get(e) === r) {
                Y.delete(e);
            }
        });
        return r;
    }
    function ke(e) {
        Le(e).catch((e)=>{
            o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [Fieldstats] send request failed"
            ]))).catching(r("getErrorSafe")(e));
        });
    }
    function Ie(fieldstats) {
        if (!Q.has(fieldstats)) {
            if (J != null) {
                window.clearTimeout(J.timeoutId);
            }
            const timeoutId = window.setTimeout(function() {
                if (J?.fieldstats === fieldstats) {
                    J = null;
                    const n = Y.get(fieldstats);
                    if (n != null) {
                        n.catch(()=>{
                            Te(fieldstats);
                        });
                        return;
                    }
                    o("WAWebCoreActionsODS").logCallFieldstatsWatchdogSend();
                    Ee(fieldstats).catch((t)=>{
                        o("WALogger").WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [Fieldstats] watchdog send failed"
                        ]))).catching(r("getErrorSafe")(t));
                        Te(fieldstats);
                    });
                }
            }, K());
            J = {
                fieldstats,
                timeoutId
            };
        }
    }
    function Te(e) {
        if (!Q.has(e) && o("WAWebVoipCallRatingStore").getPendingFieldstats() === e) {
            Ie(e);
        }
    }
    function De(e) {
        const t = J;
        if (t != null && t.fieldstats === e) {
            window.clearTimeout(t.timeoutId);
            J = null;
        }
    }
    function xe(e) {
        const t = J;
        if (t != null && t.fieldstats !== e) {
            window.clearTimeout(t.timeoutId);
            J = null;
        }
    }
    const $e = new WeakMap;
    const Pe = new WeakMap;
    const Ne = new WeakMap;
    function Me(e) {
        const t = Pe.get(e);
        if (t != null) {
            return t;
        }
        const n = we(e);
        Pe.set(e, n);
        const r = function() {
            if (Pe.get(e) === n) {
                Pe.delete(e);
            }
        };
        n.then(r, r);
        return n;
    }
    function we(e) {
        return Ae.apply(this, arguments);
    }
    function Ae() {
        Ae = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            let t = $e.get(e);
            if (t == null) {
                const r = {};
                $e.set(e, r);
                t = r;
            }
            const a = t;
            yield (O || (O = n("Promise"))).all([
                a.avSyncMetrics === undefined ? Be(o("WAWebBackendApi").frontendSendAndReceive("consumeAVSyncMetrics"), "consumeAVSyncMetrics").then((e)=>{
                    if (e !== undefined) {
                        a.avSyncMetrics = e;
                    }
                }) : null,
                a.webCodecsFatalErrors === undefined ? Be(o("WAWebBackendApi").frontendSendAndReceive("consumeWebCodecsFatalErrorCount"), "consumeWebCodecsFatalErrorCount").then((e)=>{
                    if (e !== undefined) {
                        a.webCodecsFatalErrors = e;
                    }
                }) : null,
                a.decodeOrderMetrics === undefined ? Be(o("WAWebBackendApi").frontendSendAndReceive("consumeWebCodecsDecodeOrderMetrics"), "consumeWebCodecsDecodeOrderMetrics").then((e)=>{
                    if (e !== undefined) {
                        a.decodeOrderMetrics = e;
                    }
                }) : null
            ]);
            return a;
        });
        return Ae.apply(this, arguments);
    }
    function Fe(e) {
        return Oe.apply(this, arguments);
    }
    function Oe() {
        Oe = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (!Ne.has(e)) {
                const t = o("WAWebVoipIncomingOfferReceivedWallClockStore").consumeIncomingOfferReceivedWallMs();
                const n = yield Be(o("WAWebBackendApi").frontendSendAndReceive("consumeIncomingCallWindowShownMs"), "consumeIncomingCallWindowShownMs");
                const r = t != null && n != null && n > t ? Math.round(n - t) : null;
                Ne.set(e, r);
            }
        });
        return Oe.apply(this, arguments);
    }
    function Be(e, t) {
        return o("WAPromiseDelays").withTimeout(e.then((e)=>e ?? null, (e)=>{
            o("WALogger").WARN(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [Fieldstats] ",
                " failed, omitting its fields"
            ])), t).catching(r("getErrorSafe")(e));
        }), j, function() {
            o("WALogger").WARN(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [Fieldstats] ",
                " timed out, omitting its fields"
            ])), t);
            return null;
        });
    }
    function We(e, t) {
        return qe.apply(this, arguments);
    }
    function qe() {
        qe = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, userRating) {
            const e_jsonDataStr = e.jsonDataStr;
            o("WALogger").LOG(v || (v = babelHelpers.taggedTemplateLiteralLoose([
                "voip: Sending stored fieldstats with rating: ",
                ""
            ])), userRating ?? "none");
            try {
                const i = yield o("WAWebVoipStackInterface").getVoipStackInterface();
                if (i == null || i.type !== "web") {
                    o("WALogger").WARN(S || (S = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [Fieldstats] web stack unavailable, skipping pending fieldstats"
                    ])));
                    Te(e);
                    return;
                }
                const l = i.parsers.parseFieldstatsData(e_jsonDataStr);
                const s = babelHelpers.extends({}, l.stats);
                if (userRating != null && l.eventType === o("WAWebVoipJsonParserPayloads").FieldstatsPayloadType.Call) {
                    const u = s.call_ended_stats;
                    if (u != null && typeof u === "object") {
                        s.call_ended_stats = babelHelpers.extends({}, u, {
                            userRating
                        });
                    } else {
                        s.userRating = userRating;
                    }
                }
                let c = yield ee(s, X.get(e) ?? null);
                const d = o("WAWebVoipBatteryDiagnostics").getBatteryLevelAtCallStart();
                if (d != null) {
                    const m = c.browserBatteryLevelEndPct;
                    c.callStartBatteryPct = d;
                    c.callEndBatteryPct = m;
                    if (typeof m === "number") {
                        c.callBatteryChangePct = m - d;
                    }
                }
                o("WAWebVoipFocusTracker").stopVoipFocusTracking();
                yield o("WAWebVoipBrowserMetrics").stopBrowserMetrics();
                o("WAWebVoipWindowMetrics").stopWindowMetrics();
                yield o("WAWebVoipBatteryDiagnostics").stopBatteryDiagnostics();
                const p = l.eventType === o("WAWebVoipJsonParserPayloads").FieldstatsPayloadType.Call;
                const _ = p ? yield Me(e) : {};
                const { avSyncMetrics, decodeOrderMetrics, webCodecsFatalErrors } = _;
                if (avSyncMetrics != null) {
                    c = babelHelpers.extends({}, c, avSyncMetrics);
                }
                if (webCodecsFatalErrors != null) {
                    c.videoWebcodecsDecFatalErrorNum = webCodecsFatalErrors;
                }
                o("WALogger").LOG(R || (R = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [WebCodecs] video_webcodecs_dec_fatal_error_num=",
                    ""
                ])), webCodecsFatalErrors ?? 0);
                if (p && decodeOrderMetrics != null) {
                    c = babelHelpers.extends({}, c, decodeOrderMetrics);
                    o("WALogger").LOG(L || (L = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [WebCodecs] decode_order mode=",
                        " out_of_order_frames=",
                        " ref_chain_breaks=",
                        " ref_chain_broken_t=",
                        "ms render_freezes=",
                        " render_freeze_t=",
                        "ms av_sync_reorders=",
                        ""
                    ])), decodeOrderMetrics.webVideoDecOrderingMode, decodeOrderMetrics.webVideoDecOutOfOrderFrames, decodeOrderMetrics.webVideoDecRefChainBreakCount, decodeOrderMetrics.webVideoDecRefChainBrokenT, decodeOrderMetrics.webVideoRenderNumFreezes, decodeOrderMetrics.webVideoRenderFreezeT, avSyncMetrics?.webAvSyncReorderCount ?? "n/a");
                }
                const C = yield i.consumeVideoCaptureFps();
                if (C != null) {
                    c = babelHelpers.extends({}, c, C);
                    o("WALogger").LOG(E || (E = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [VideoCapture] video_capture_avg_fps=",
                        ""
                    ])), C.videoCaptureAvgFps);
                }
                const b = o("WAWebVoipVideoEncoderType").getActiveVideoEncoderType();
                if (b != null) {
                    c.webVideoEncoderType = b;
                    o("WALogger").LOG(k || (k = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [VideoEncoder] web_video_encoder_type=",
                        ""
                    ])), b);
                }
                const A = typeof c.callId === "string" ? c.callId : null;
                const F = e.lobbyEntryPoint;
                if (F != null) {
                    c.lobbyEntryPoint = F;
                    o("WALogger").LOG(I || (I = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [Fieldstats] lobby_entry_point=",
                        ""
                    ])), F);
                }
                if (o("WAWebCallUserJourneyGating").isCallUserJourneyLoggingEnabled()) {
                    const O = e.callRandomId;
                    if (O != null) {
                        c.callRandomId = O;
                    }
                }
                if (l.eventType === o("WAWebVoipJsonParserPayloads").FieldstatsPayloadType.Call) {
                    const B = yield o("WAWebBackendApi").frontendSendAndReceive("getUnifiedSessionId");
                    if (B != null) {
                        c.unifiedSessionId = B;
                    }
                    const W = e.incomingCallUiAction;
                    if (W != null && o("WAWebCallUserJourneyGating").isCallUserJourneyLoggingEnabled()) {
                        c.incomingCallUiAction = W;
                        o("WALogger").LOG(T || (T = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [Fieldstats] incoming_call_ui_action=",
                            ""
                        ])), W);
                    }
                    de(c, e.callFromUi);
                    me(c, e.isAppInBgWhenCallStarts);
                    he(c, e.callEnterPipModeCount);
                    pe(c, e.calleeOfferToRingT);
                    if (o("WAWebCallUserJourneyGating").isCallUserJourneyLoggingEnabled()) {
                        yield ie(c);
                    }
                    const q = yield o("WAWebBackendApi").frontendSendAndReceive("consumeOutgoingCallSetupActiveMs", {
                        callId: A
                    });
                    if (q != null) {
                        c.outgoingCallSetupActiveMs = q;
                        o("WALogger").LOG(D || (D = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [Fieldstats] outgoing_call_setup_active_ms=",
                            ""
                        ])), q);
                    }
                    _e(c, Ne.get(e));
                }
                const U = yield o("WAWebBackendApi").frontendSendAndReceive("consumeAnrCount");
                o("WALogger").LOG(x || (x = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: ANR count for this call: ",
                    ""
                ])), U ?? 0);
                let V = null;
                let H = null;
                let G = null;
                let z = null;
                let j = null;
                if (U != null && U > 0) {
                    const K = yield o("WAWebBackendApi").frontendSendAndReceive("consumeActivityData");
                    if (K != null) {
                        V = K.lastVoipActivity;
                        H = K.lastVoipActivityTimestampSec;
                        G = K.timeFirstAnrSinceCallStartSec;
                        o("WALogger").LOG($ || ($ = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: ANR data act=",
                            " actT=",
                            "s firstAnrT=",
                            "s"
                        ])), V ?? "none", H ?? "none", G ?? "none");
                    }
                    const Y = yield o("WAWebBackendApi").frontendSendAndReceive("consumeUiActivityData");
                    if (Y != null) {
                        z = Y.lastVoipUiActivity;
                        j = Y.lastVoipUiActivityTimestampSec;
                        o("WALogger").LOG(P || (P = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: ANR uiAct=",
                            " uiActT=",
                            "s"
                        ])), z ?? "none", j ?? "none");
                    }
                } else {
                    o("WAWebBackendApi").frontendFireAndForget("clearAllActivityTracking", {});
                }
                const J = {};
                if (U != null) {
                    J.numAnrs = U;
                }
                if (V != null) {
                    J.lastVoipActivity = V;
                }
                if (H != null) {
                    J.lastVoipActivityTimestampSec = H;
                }
                if (G != null) {
                    J.timeFirstAnrSinceCallStartSec = G;
                }
                if (z != null) {
                    J.lastVoipUiActivity = z;
                }
                if (j != null) {
                    J.lastVoipUiActivityTimestampSec = j;
                }
                let Z;
                if (l.eventType === o("WAWebVoipJsonParserPayloads").FieldstatsPayloadType.Call) {
                    const te = new (o("WAWebCallWamEvent")).CallWamEvent(c);
                    if (!r("isEmptyObject")(J)) {
                        te.set(J);
                        o("WALogger").LOG(N || (N = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: ANR fields set n=",
                            " act=",
                            " actT=",
                            "s firstT=",
                            " uiAct=",
                            " uiActT=",
                            "s"
                        ])), U ?? "null", V ?? "null", H ?? "null", G ?? "null", z ?? "null", j ?? "null");
                    }
                    Z = te;
                } else {
                    Z = Re(c);
                }
                yield Z.commitAndWaitForFlush(l.uploadInRealtime);
                const ne = p ? babelHelpers.extends({}, c, J) : babelHelpers.extends({}, c);
                if (userRating != null && p) {
                    ne.userRating = userRating;
                }
                yield o("WAWebVoipLabMetricsFile").patchLabMetricsSelfRow(ne);
                o("WAWebVoipCallRatingStore").markPersistedFieldstatsHandedOff(e_jsonDataStr);
                o("WAWebVoipCrashRecovery").clearCallRandomIdMarker(e.callRandomId);
                Q.add(e);
                De(e);
                o("WAWebVoipCallRatingStore").clearPendingFieldstats(e);
                o("WAWebCoreActionsODS").logCallFieldstatsHandoffCompleted();
                o("WALogger").LOG(M || (M = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: Fieldstats sent successfully with user rating: ",
                    ""
                ])), userRating ?? "none");
                yield Ue();
            } catch (error) {
                o("WAWebCoreActionsODS").logCallFieldstatsHandoffFailed();
                o("WALogger").ERROR(w || (w = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [Fieldstats] terminal WAM handoff failed"
                ]))).catching(r("getErrorSafe")(error)).sendLogs("voip-fieldstats-wam-handoff-failed", {
                    employeeSampling: 1,
                    sampling: 0.01,
                    sendLogsType: o("WALogger").SendLogsType.INVESTIGATION
                });
                throw error;
            }
        });
        return qe.apply(this, arguments);
    }
    function Ue() {
        return Ve.apply(this, arguments);
    }
    function Ve() {
        Ve = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            try {
                const e = yield o("WAWebBackendApi").frontendSendAndReceive("initializeVoipWasm");
                e.cleanupUnfinishedCallStats();
                yield o("WAWebVoipPersistentFS").syncPersistentFS(e);
                o("WALogger").LOG(A || (A = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [Fieldstats] cleaned up persisted fieldstats after WAM handoff"
                ])));
            } catch (error) {
                o("WAWebCoreActionsODS").logCallFieldstatsPersistenceCleanupFailed();
                o("WALogger").ERROR(F || (F = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [Fieldstats] failed to clean up persisted fieldstats after WAM handoff"
                ]))).catching(r("getErrorSafe")(error)).sendLogs("voip-fieldstats-persistence-cleanup-failed", {
                    employeeSampling: 1,
                    sampling: 0.01,
                    sendLogsType: o("WALogger").SendLogsType.INVESTIGATION
                });
            }
        });
        return Ve.apply(this, arguments);
    }
    function He() {
        o("WAWebPonyfillsIdleCallback").requestIdleCallback(function() {
            const e = Date.now();
            o("WAWebBackendApi").frontendSendAndReceive("initializeVoipWasm").then((e)=>o("WAWebVoipPersistentFS").syncPersistentFS(e)).then(()=>{
                const t = Date.now() - e;
                o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [IDBFS] Successfully synced filesystem in ",
                    "ms"
                ])), t);
            }).catch((e)=>{
                o("WALogger").ERROR(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [IDBFS] Failed to sync filesystem"
                ]))).catching(r("getErrorSafe")(e));
            });
        });
    }
    l.MEDIA_PERMISSION_LOOKUP_TIMEOUT_MS = z;
    l.FRONTEND_VIDEO_SNAPSHOT_TIMEOUT_MS = j;
    l.handleFieldstatsReady = ue;
    l.sendStoredFieldstats = Le;
    l.requestStoredFieldstatsSend = ke;
    l.syncVoipPersistentFSWithIdleCallback = He;
}, 98);