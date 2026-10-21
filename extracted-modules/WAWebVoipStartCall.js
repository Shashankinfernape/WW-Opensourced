__d("WAWebVoipStartCall", [
    "fbt",
    "JSResourceForInteraction",
    "Promise",
    "WAComms",
    "WALogger",
    "WAPromiseRaceAbort",
    "WAWebAdvSyncDeviceListApi",
    "WAWebBuildConstants",
    "WAWebCallCollection",
    "WAWebContactCollection",
    "WAWebCoreActionsODS",
    "WAWebEnsureVoipInited",
    "WAWebEnvironment",
    "WAWebFbtIntlList",
    "WAWebFindChatAction",
    "WAWebFrontendContactGetters",
    "WAWebLidMigrationUtils",
    "WAWebNoop",
    "WAWebNotificationIconUtils",
    "WAWebOpenCoexCallingFirstTimeModalUtils",
    "WAWebPageVisibilityRecency",
    "WAWebPipController",
    "WAWebSendMsgDatabaseJob",
    "WAWebSendTcTokenChatAction",
    "WAWebShouldShowCallButtons",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUserPrefsMeUser",
    "WAWebUsernameTypes",
    "WAWebVoipActionWriteCallLogEventUpdateJoinable",
    "WAWebVoipActivityTracker",
    "WAWebVoipBootInitDecision",
    "WAWebVoipCallAudioUnlock",
    "WAWebVoipCallBlockedModals",
    "WAWebVoipCallFromUiStore",
    "WAWebVoipCallIdProvider",
    "WAWebVoipCancelOutgoingCall",
    "WAWebVoipDeferredBootLogging",
    "WAWebVoipGatingUtils",
    "WAWebVoipInitEventEmitter",
    "WAWebVoipOngoingCallCollection",
    "WAWebVoipOngoingCallJoinDevices",
    "WAWebVoipOutgoingCallConsent",
    "WAWebVoipOutgoingCallPreSetup",
    "WAWebVoipOutgoingCallQpl",
    "WAWebVoipOutgoingSetupLatencyMode",
    "WAWebVoipOutgoingSetupLatencyStore",
    "WAWebVoipPeerTcToken",
    "WAWebVoipStackInterface",
    "WAWebVoipStartCallPermissions",
    "WAWebVoipUiLoadable",
    "WAWebVoipUiVideoCallLoadable",
    "WAWebVoipUiVideoGroupCallLoadable",
    "WAWebWamEnumLobbyEntryPointType",
    "WAWebWindowsHybridBridgeInitiator",
    "asyncToGeneratorRuntime",
    "cr:17219",
    "getErrorSafe",
    "nullthrows",
    "react"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
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
    let B;
    let W;
    let q;
    let U;
    let V;
    let H;
    let G;
    let z;
    let j;
    let K;
    let Q;
    let X;
    let Y;
    let J;
    let Z;
    let ee;
    let te;
    let ne;
    let re;
    const oe = re || (re = o("react"));
    const ae = "#aa6627";
    const ie = 30000;
    const le = 60000;
    const se = n("cr:17219") ?? {};
    const se_getWindowsBridge = se.getWindowsBridge;
    const ce = 5;
    function de(e, t) {
        if (e != null && t != null) {
            return t - e;
        }
        return null;
    }
    function me(e, { coexModalMs, devicePermissionsMs, intentTs, successTs }) {
        if (!(intentTs == null || successTs == null)) {
            const l = successTs - intentTs - (devicePermissionsMs ?? 0) - (coexModalMs ?? 0);
            if (!(l < 0)) {
                o("WAWebVoipOutgoingSetupLatencyStore").setOutgoingCallSetupActiveMs(Math.round(l), e);
            }
        }
    }
    function pe(requireBundle, t) {
        return requireBundle().then(()=>{}, (e)=>{
            o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "voip: bundle preload failed"
            ]))).catching(r("getErrorSafe")(e)).sendLogs(t);
        });
    }
    function _e() {
        return pe(o("WAWebVoipUiVideoGroupCallLoadable").requireBundle, "voip-preload-group-call-bundle");
    }
    function fe(e) {
        if (!r("WAWebEnvironment").isWindows) {
            r("WAWebCallCollection").setPendingOutgoingCall({
                abortController: e.abortController,
                isGroup: e.isGroup,
                isJoin: e.isJoin,
                isVideo: e.isVideo
            });
            r("WAWebPipController").openVoipUiPiPForOutgoing();
        }
    }
    function ge(e) {
        return he.apply(this, arguments);
    }
    function he() {
        he = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = ye(e);
            if (t.status === "started") {
                return t.readiness;
            }
            return t;
        });
        return he.apply(this, arguments);
    }
    function ye(e) {
        if (r("WAWebCallCollection").pendingOutgoingCall != null) {
            o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "voip: outgoing call already pending; ignoring duplicate start"
            ]))).color(ae);
            return {
                notReady: {
                    reason: "duplicate_start"
                },
                status: "not_ready"
            };
        }
        if (!e.isJoin) {
            o("WAWebVoipCallAudioUnlock").releaseCallAudioUnlock();
        }
        const t = new AbortController;
        fe({
            abortController: t,
            isGroup: e.isGroup,
            isJoin: e.isJoin,
            isVideo: e.isVideo
        });
        return {
            abortController: t,
            readiness: Ce(t),
            status: "started"
        };
    }
    function Ce(e) {
        return be.apply(this, arguments);
    }
    function be() {
        be = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = o("WAWebEnsureVoipInited").ensureVoipInitialized("call", e.signal);
            t.catch(r("WAWebNoop"));
            try {
                yield r("WAPromiseRaceAbort")(t, e.signal);
            } catch (error) {
                if (e.signal.aborted) {
                    o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: outgoing call cancelled while waiting for VoIP init"
                    ]))).color(ae);
                    return {
                        notReady: {
                            reason: "user_cancelled"
                        },
                        status: "not_ready"
                    };
                }
                o("WAWebVoipCancelOutgoingCall").cancelPendingOutgoingCall();
                if (error instanceof o("WAWebEnsureVoipInited").VoipInitUnavailableError) {
                    o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: outgoing call stopped because VoIP init requires reload"
                    ]))).color(ae);
                    return {
                        notReady: {
                            reason: "reload_required",
                            reloadReason: error.reason
                        },
                        status: "not_ready"
                    };
                }
                const n = r("getErrorSafe")(error);
                o("WALogger").ERROR(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: outgoing call: VoIP init failed, aborting"
                ]))).catching(n).sendLogs("voip-outgoing-ensure-init-failed");
                o("WAWebVoipCallBlockedModals").showCouldNotPlaceCallModal();
                return {
                    notReady: {
                        initErrorName: n.name,
                        reason: "init_failed"
                    },
                    status: "not_ready"
                };
            }
            if (o("WAWebVoipGatingUtils").isWebCallingUiEnabled()) {
                r("JSResourceForInteraction")("WAWebVoipSctpPrewarm").__setRef("WAWebVoipStartCall").load().then((e)=>{
                    e();
                }, (e)=>{
                    o("WALogger").WARN(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: outgoing-intent SCTP prewarm module failed to load"
                    ]))).catching(r("getErrorSafe")(e));
                });
            }
            return {
                abortController: e,
                status: "ready"
            };
        });
        return be.apply(this, arguments);
    }
    function ve(e, t, n, r, o, a) {
        return Se.apply(this, arguments);
    }
    function Se() {
        Se = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, is_video, n = 0, r = 0, a = null, i) {
            if (!(yield o("WAWebVoipOutgoingCallConsent").hasOutgoingCallConsent(i.entryTrust, e, is_video))) {
                o("WAWebVoipCallIdProvider").resetPendingCallId();
                return false;
            }
            const visibility_state_at_start = globalThis.document?.visibilityState ?? "unknown";
            const c = o("WAWebVoipOutgoingCallQpl").startVoipOutgoingCallQpl({
                bool: {
                    boot_deferred: o("WAWebVoipBootInitDecision").isDeferredVoipBootInitEnabled(),
                    is_video,
                    is_hidden_at_start: visibility_state_at_start !== "visible",
                    socket_connected_at_start: o("WAComms").isSocketConnected(),
                    voip_init_in_flight_at_start: o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.getIsVoipInitAttemptInFlight(),
                    voip_inited_at_start: o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.getIsVoipInited(),
                    was_hidden_within_30s: o("WAWebPageVisibilityRecency").wasDocumentHiddenWithinMs(ie)
                },
                int: {
                    call_from_ui: n ?? 0,
                    ms_since_visibility_visible: Math.round(o("WAWebPageVisibilityRecency").getMsSinceDocumentVisible()),
                    last_hidden_duration_ms: Math.round(o("WAWebPageVisibilityRecency").getLastHiddenDurationMs()),
                    ms_since_last_socket_rx: Math.round(o("WAComms").getMsSinceLastInboundRx())
                },
                string: {
                    visibility_state_at_start
                }
            });
            try {
                const d = yield Le(c, e, is_video, n, r, a);
                return d;
            } catch (error) {
                if (c.isActive()) {
                    o("WAWebVoipOutgoingCallQpl").endVoipOutgoingCallQplFail(c, "unexpected_error");
                }
                throw error;
            }
        });
        return Se.apply(this, arguments);
    }
    function Re(e) {
        if (o("WAWebVoipOutgoingSetupLatencyMode").isSocketHealthCheckEnabled()) {
            o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(e, o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint.SOCKET_HEALTH_CHECK_START);
            let socket_reconnect_triggered = false;
            if (!o("WAComms").isSocketConnected() || o("WAComms").getMsSinceLastInboundRx() > le) {
                o("WAComms").forceAbortSocketConnection();
                o("WAComms").forceResetSocketLoop();
                socket_reconnect_triggered = true;
            }
            o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddAnnotations(e, {
                bool: {
                    socket_reconnect_triggered
                }
            });
            o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(e, o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint.SOCKET_HEALTH_CHECK_END);
        }
    }
    function Le(e, t, n, r, o, a) {
        return Ee.apply(this, arguments);
    }
    function Ee() {
        Ee = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, a, i, l, s) {
            const intentTs = o("WAWebVoipOutgoingCallPreSetup").nowMs();
            const c = s ?? o("WAWebVoipCallIdProvider").consumeOrGenerateCallId();
            o("WAWebVoipCallIdProvider").resetPendingCallId();
            o("WAWebVoipCallFromUiStore").setCallFromUi(i);
            if (yield o("WAWebVoipCallBlockedModals").showCallBlockedModalIfNeeded()) {
                o("WAWebVoipOutgoingCallQpl").endVoipOutgoingCallQplCancel(e, "call_blocked");
                return false;
            }
            o("WAWebVoipActivityTracker").startActivityTracking();
            o("WAWebVoipActivityTracker").startUiActivityTracking();
            o("WAWebVoipStartCallPermissions").preloadStartCallPermissionDialog();
            o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(e, o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint.VOIP_READY_START);
            const d = yield ke(e, t, a);
            if (d == null) {
                return false;
            }
            const { devicePermissionsMs, peerPnWid, peerWid, permission, signal } = d;
            const h = o("WAWebVoipOutgoingCallPreSetup").nowMs();
            o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(e, o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint.COEX_FIRST_TIME_MODAL_START);
            const y = yield o("WAWebOpenCoexCallingFirstTimeModalUtils").maybeShowCoexCallingSMBFirstTimeModal();
            const R = yield o("WAWebOpenCoexCallingFirstTimeModalUtils").maybeShowCoexCallingConsumerFirstTimeModal(t);
            if (y || R) {
                o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddAnnotations(e, {
                    bool: {
                        coex_first_time_modal_shown: true
                    }
                });
            }
            o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(e, o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint.COEX_FIRST_TIME_MODAL_END);
            const coexModalMs = de(h, o("WAWebVoipOutgoingCallPreSetup").nowMs());
            o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(e, o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint.SETUP_START);
            o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(e, o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint.SETUP_STACK_INTERFACE_START);
            o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(e, o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint.SETUP_FANOUT_LIST_START);
            o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(e, o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint.SETUP_GET_TC_TOKEN_START);
            o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(e, o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint.SETUP_SEND_TC_TOKEN_START);
            o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(e, o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint.SETUP_UI_BUNDLE_PRELOAD_START);
            if (a) {
                o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(e, o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint.SETUP_VIDEO_BUNDLE_PRELOAD_START);
            }
            const E = (ne || (ne = n("Promise"))).all([
                o("WAWebVoipStackInterface").getVoipStackInterface().then((t)=>{
                    o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(e, o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint.SETUP_STACK_INTERFACE_END);
                    return t;
                }),
                o("WAWebSendMsgDatabaseJob").getFanOutListJob([
                    peerWid
                ]).then((t)=>{
                    o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(e, o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint.SETUP_FANOUT_LIST_END);
                    return t;
                }),
                o("WAWebVoipPeerTcToken").fetchPeerTcToken(t).then((t)=>{
                    o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(e, o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint.SETUP_GET_TC_TOKEN_END);
                    return t;
                }),
                o("WAWebSendTcTokenChatAction").sendTcToken(peerWid).then((t)=>{
                    o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(e, o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint.SETUP_SEND_TC_TOKEN_END);
                    return t;
                }),
                pe(o("WAWebVoipUiLoadable").requireBundle, "voip-start-call-preload-ui").then((t)=>{
                    o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(e, o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint.SETUP_UI_BUNDLE_PRELOAD_END);
                    return t;
                }),
                a ? pe(o("WAWebVoipUiVideoCallLoadable").requireBundle, "voip-start-call-preload-video").then((t)=>{
                    o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(e, o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint.SETUP_VIDEO_BUNDLE_PRELOAD_END);
                    return t;
                }) : undefined
            ]);
            E.catch(r("WAWebNoop"));
            try {
                const k = yield r("WAPromiseRaceAbort")(E, signal);
                const I = k[0];
                const T = k[1];
                const D = k[2];
                o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(e, o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint.SETUP_END);
                if (I == null) {
                    o("WALogger").ERROR(C || (C = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: startWAWebVoipCall: voipStackInterface is null"
                    ]))).sendLogs("voip: startWAWebVoipCall: voipStackInterface is null");
                    o("WAWebVoipOutgoingCallQpl").endVoipOutgoingCallQplFail(e, "voip_stack_interface_null");
                    o("WAWebVoipCancelOutgoingCall").cancelPendingOutgoingCall();
                    return false;
                }
                const x = et(T, "callStart");
                o("WALogger").LOG(b || (b = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: startWAWebVoipCall: Placing LID call"
                ]))).color(ae);
                if (o("WAWebVoipGatingUtils").isWinHybridPlusEnabled()) {
                    o("WALogger").LOG(v || (v = babelHelpers.taggedTemplateLiteralLoose([
                        'voip: [HYBRID+] placing 1:1 call via "',
                        '" stack (expect "web" = WASM)'
                    ])), I?.type ?? "null");
                }
                o("WAWebVoipActivityTracker").trackActivity(a ? o("WAWebVoipActivityTracker").VoipActivity.START_OUTGOING_VIDEO_CALL : o("WAWebVoipActivityTracker").VoipActivity.START_OUTGOING_AUDIO_CALL);
                o("WAWebVoipActivityTracker").trackUiActivity(o("WAWebVoipActivityTracker").VoipUiActivity.USER_INITIATE_OUTGOING_CALL);
                o("WAWebCoreActionsODS").logCallAttempt();
                if (a) {
                    o("WAWebCoreActionsODS").logCallOutgoingVideo();
                } else {
                    o("WAWebCoreActionsODS").logCallOutgoingAudio();
                }
                o("WAWebVoipStartCallPermissions").markCallStart(c, permission);
                o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(e, o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint.START_CALL_START);
                yield I.startCall(peerWid, x, c, a, (peerPnWid ?? peerWid).toString({
                    legacy: true
                }), false, D, i, l, null);
                o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(e, o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint.START_CALL_END);
                me(c, {
                    coexModalMs,
                    devicePermissionsMs,
                    intentTs,
                    successTs: o("WAWebVoipOutgoingCallPreSetup").nowMs()
                });
                o("WAWebVoipOutgoingCallQpl").endVoipOutgoingCallQplSuccess(e);
            } catch (error) {
                if (signal.aborted) {
                    o("WALogger").LOG(S || (S = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: startWAWebVoipCall: cancelled before signaling"
                    ]))).color(ae);
                    o("WAWebVoipOutgoingCallQpl").endVoipOutgoingCallQplCancel(e, "aborted_before_signaling");
                    return false;
                }
                o("WAWebVoipOutgoingCallQpl").endVoipOutgoingCallQplFail(e, "setup_or_signaling_error");
                o("WAWebVoipCancelOutgoingCall").cancelPendingOutgoingCall();
                throw error;
            }
            yield Je(a);
            return true;
        });
        return Ee.apply(this, arguments);
    }
    function ke(e, t, n) {
        return Ie.apply(this, arguments);
    }
    function Ie() {
        Ie = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            const r = ye({
                isGroup: false,
                isJoin: false,
                isVideo: n
            });
            if (r.status === "not_ready") {
                o("WAWebVoipOutgoingCallQpl").endVoipOutgoingCallQplNotReady(e, r.notReady);
                return null;
            }
            const { abortController, readiness } = r;
            const abortController_signal = abortController.signal;
            const preSetup = Te() ? De(e, t, n, abortController_signal) : null;
            try {
                const u = yield preSetup == null ? xe(e, readiness) : Pe(e, t, {
                    abortController,
                    preSetup,
                    readiness
                });
                if (!u) {
                    return null;
                }
                o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(e, o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint.VOIP_READY_END);
                const voipReadyTs = o("WAWebVoipOutgoingCallPreSetup").nowMs();
                Re(e);
                if (preSetup != null) {
                    return we(e, t, (yield preSetup), {
                        signal: abortController_signal,
                        voipReadyTs
                    });
                }
                const d = yield o("WAWebVoipOutgoingCallPreSetup").runOutgoingCallPreSetup(e, t, n, abortController_signal);
                return o("WAWebVoipOutgoingCallPreSetup").finishOutgoingCallPreSetup(e, t, d, {
                    signal: abortController_signal,
                    voipReadyTs
                });
            } catch (error) {
                if (preSetup != null) {
                    Ae(e, abortController);
                }
                throw error;
            }
        });
        return Ie.apply(this, arguments);
    }
    function Te() {
        return !o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.getIsVoipInited() && o("WAWebVoipBootInitDecision").isDeferredVoipBootEarlyModulePrefetchEnabled();
    }
    function De(e, t, n, abortController_signal) {
        o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddAnnotations(e, {
            bool: {
                pre_setup_overlapped_voip_init: true
            }
        });
        o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(function() {
            o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [deferred-boot] intent pre_setup_during_init"
            ])));
        });
        const i = o("WAWebVoipOutgoingCallPreSetup").runOutgoingCallPreSetup(e, t, n, abortController_signal);
        i.catch(r("WAWebNoop"));
        return i;
    }
    function xe(e, t) {
        return $e.apply(this, arguments);
    }
    function $e() {
        $e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = yield t;
            if (n.status === "not_ready") {
                o("WAWebVoipOutgoingCallQpl").endVoipOutgoingCallQplNotReady(e, n.notReady);
                return false;
            }
            return true;
        });
        return $e.apply(this, arguments);
    }
    function Pe(e, t, n) {
        return Ne.apply(this, arguments);
    }
    function Ne() {
        Ne = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, { abortController, preSetup, readiness }) {
            const abortController_signal = abortController.signal;
            const u = yield (ne || (ne = n("Promise"))).race([
                readiness,
                Me(preSetup, abortController_signal)
            ]);
            e: {
                const c = u;
                if ((typeof c === "object" && c !== null || typeof c === "function") && c.status === "ready") {
                    return true;
                }
                if ((typeof c === "object" && c !== null || typeof c === "function") && c.status === "not_ready" && "notReady" in c) {
                    const d = c.notReady;
                    o("WAWebVoipOutgoingCallQpl").endVoipOutgoingCallQplNotReady(e, d);
                    break e;
                }
                if ((typeof c === "object" && c !== null || typeof c === "function") && c.status === "stopped" && "stop" in c) {
                    const m = c.stop;
                    o("WAWebVoipOutgoingCallPreSetup").stopOutgoingCallBeforeSetup(e, t, m, abortController_signal);
                    break e;
                }
                throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${c}`);
            }
            abortController.abort();
            return false;
        });
        return Ne.apply(this, arguments);
    }
    function Me(preSetup, abortController_signal) {
        return preSetup.then((e)=>{
            if (e.status === "stopped" && !abortController_signal.aborted) {
                return e;
            }
            return new (ne || (ne = n("Promise")))(r("WAWebNoop"));
        }, (e)=>{
            if (abortController_signal.aborted) {
                return new (ne || (ne = n("Promise")))(r("WAWebNoop"));
            }
            throw e;
        });
    }
    function we(e, t, n, r) {
        if (n.status === "stopped" && r.signal.aborted) {
            o("WAWebVoipOutgoingCallQpl").endVoipOutgoingCallQplCancel(e, "aborted_before_signaling");
            return null;
        }
        return o("WAWebVoipOutgoingCallPreSetup").finishOutgoingCallPreSetup(e, t, n, r);
    }
    function Ae(e, abortController) {
        if (abortController.signal.aborted) {
            o("WAWebVoipOutgoingCallQpl").endVoipOutgoingCallQplCancel(e, "aborted_before_signaling");
            return;
        }
        o("WAWebVoipOutgoingCallQpl").endVoipOutgoingCallQplFail(e, "pre_setup_error");
        if (r("WAWebCallCollection").pendingOutgoingCall?.abortController === abortController) {
            o("WAWebVoipCancelOutgoingCall").cancelPendingOutgoingCall();
        }
        abortController.abort();
    }
    function Fe(e, t, n, r, o, a) {
        return Oe.apply(this, arguments);
    }
    function Oe() {
        Oe = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, a, i, l = 0, s = 0) {
            o("WALogger").LOG(R || (R = babelHelpers.taggedTemplateLiteralLoose([
                "voip: startWAWebVoipCall: Placing Group call"
            ]))).color(ae);
            const u = o("WAWebVoipCallIdProvider").consumeOrGenerateCallId();
            o("WAWebVoipCallFromUiStore").setCallFromUi(l);
            o("WAWebVoipActivityTracker").startActivityTracking();
            o("WAWebVoipActivityTracker").startUiActivityTracking();
            o("WAWebVoipActivityTracker").trackActivity(t ? o("WAWebVoipActivityTracker").VoipActivity.START_OUTGOING_VIDEO_GROUP_CALL : o("WAWebVoipActivityTracker").VoipActivity.START_OUTGOING_AUDIO_GROUP_CALL);
            o("WAWebVoipActivityTracker").trackUiActivity(o("WAWebVoipActivityTracker").VoipUiActivity.USER_INITIATE_OUTGOING_CALL);
            o("WAWebVoipStartCallPermissions").preloadStartCallPermissionDialog();
            const c = yield ge({
                isGroup: true,
                isJoin: false,
                isVideo: t
            });
            if (c.status !== "not_ready") {
                const d = c.abortController.signal;
                const m = yield o("WAWebVoipStartCallPermissions").checkStartCallPermissions(t, d);
                if (m == null) {
                    if (d.aborted) {
                        return;
                    }
                    o("WAWebVoipCancelOutgoingCall").cancelPendingOutgoingCall();
                    return;
                }
                const p = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow();
                const _ = p ? o("WAWebContactCollection").ContactCollection.get(p) : null;
                const f = _ ? o("WAWebFrontendContactGetters").getUsername(_) : null;
                const g = (ne || (ne = n("Promise"))).all([
                    o("WAWebVoipStackInterface").getVoipStackInterface(),
                    tt(e),
                    pe(o("WAWebVoipUiLoadable").requireBundle, "voip-start-group-call-preload-ui"),
                    t ? pe(o("WAWebVoipUiVideoCallLoadable").requireBundle, "voip-start-group-call-preload-video") : undefined,
                    t ? pe(o("WAWebVoipUiVideoGroupCallLoadable").requireBundle, "voip-start-group-call-preload-video-group") : undefined
                ]);
                g.catch(r("WAWebNoop"));
                try {
                    const y = yield r("WAPromiseRaceAbort")(g, d);
                    const C = y[0];
                    const b = y[1];
                    const { gcDeviceJidsCsv, gcUserJids, gcUserPnJids } = b;
                    yield (ne || (ne = n("Promise"))).all(gcUserJids.map((e)=>o("WAWebSendTcTokenChatAction").sendTcToken(e)));
                    const T = i?.toString({
                        legacy: true
                    }) ?? "";
                    o("WALogger").LOG(L || (L = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: startWAWebVoipGroupCall: gid=",
                        " users=",
                        " name=",
                        ""
                    ])), T, gcUserJids, a).color(ae);
                    const D = i ? yield o("WAWebNotificationIconUtils").getNotificationIconByWid(i, new AbortController().signal, o("WAWebNotificationIconUtils").USER_DEFAULT_ICON) : o("WAWebNotificationIconUtils").USER_DEFAULT_ICON;
                    if (d.aborted) {
                        o("WALogger").LOG(E || (E = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: startWAWebVoipGroupCall: cancelled before signaling"
                        ]))).color(ae);
                        return;
                    }
                    o("WAWebCoreActionsODS").logCallAttempt();
                    if (t) {
                        o("WAWebCoreActionsODS").logCallOutgoingGroupVideo();
                    } else {
                        o("WAWebCoreActionsODS").logCallOutgoingGroupAudio();
                    }
                    o("WAWebVoipStartCallPermissions").markCallStart(u, m);
                    yield C?.startGroupCall(gcUserPnJids.map((e)=>e?.toString({
                            legacy: true
                        }) ?? ""), gcUserJids.map((e)=>e.toString({
                            legacy: true
                        })), gcDeviceJidsCsv, u, t, T, false, "", a, D, l, s, o("WAWebUsernameTypes").serializeMaybeUsername(f));
                } catch (error) {
                    if (d.aborted) {
                        o("WALogger").LOG(k || (k = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: startWAWebVoipGroupCall: cancelled before signaling"
                        ]))).color(ae);
                        return;
                    }
                    o("WAWebVoipCancelOutgoingCall").cancelPendingOutgoingCall();
                    throw error;
                }
                yield Je(t);
            }
        });
        return Oe.apply(this, arguments);
    }
    function Be(e, t, n, r) {
        return We.apply(this, arguments);
    }
    function We() {
        We = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n = 0, r = 0) {
            if (yield o("WAWebVoipCallBlockedModals").showCallBlockedModalIfNeeded()) {
                o("WAWebVoipCallIdProvider").resetPendingCallId();
                return;
            }
            const l = Ge((e.groupMetadata?.participants.toArray() ?? []).map((e)=>e.id), "startWAWebVoipGroupCallFromChat");
            if (l == null) {
                o("WAWebVoipCallIdProvider").resetPendingCallId();
                return;
            }
            yield Fe(l, t, e.name || e.formattedTitle, e.id, n, r);
        });
        return We.apply(this, arguments);
    }
    function qe(e, t, n, r, o) {
        return Ue.apply(this, arguments);
    }
    function Ue() {
        Ue = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n = 0, a = 0, i) {
            if (yield o("WAWebVoipCallBlockedModals").showCallBlockedModalIfNeeded()) {
                o("WAWebVoipCallIdProvider").resetPendingCallId();
                return;
            }
            const l = e.filter((e)=>!o("WAWebUserPrefsMeUser").isMeAccount(e.id));
            if (l.length === 0) {
                o("WAWebVoipCallIdProvider").resetPendingCallId();
                return;
            }
            if (l.length === 1) {
                yield ve(l[0].id, t, n, a, null, i);
                return;
            }
            const s = r("WAWebFbtIntlList")(l.map((e)=>o("WAWebFrontendContactGetters").getFormattedShortName(e)), r("WAWebFbtIntlList").CONJUNCTIONS.NONE, r("WAWebFbtIntlList").DELIMITERS.COMMA);
            yield Fe(l.map((e)=>e.id), t, s.toString(), undefined, n, a);
        });
        return Ue.apply(this, arguments);
    }
    function Ve(e, t, n, r, o) {
        return He.apply(this, arguments);
    }
    function He() {
        He = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n = 0, r = 0, a) {
            if (yield o("WAWebVoipCallBlockedModals").showCallBlockedModalIfNeeded()) {
                o("WAWebVoipCallIdProvider").resetPendingCallId();
                return;
            }
            if (e.length === 0) {
                o("WAWebVoipCallIdProvider").resetPendingCallId();
                return;
            }
            const i = Ge(e, "startWAWebVoipGroupCallFromWids");
            if (i == null) {
                o("WAWebVoipCallIdProvider").resetPendingCallId();
                return;
            }
            if (i.length === 1) {
                yield ve(i[0], t, n, r, null, a);
                return;
            }
            yield Fe(i, t, "", undefined, n, r);
        });
        return He.apply(this, arguments);
    }
    function Ge(e, t) {
        const n = e.filter((e)=>o("WAWebShouldShowCallButtons").canBeCallParticipant(e));
        if (n.length < e.length) {
            o("WALogger").WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                "voip: ",
                ": dropped ",
                " non-callable participant(s) of ",
                ""
            ])), t, e.length - n.length, e.length).sendLogs("voip-group-call-dropped-non-callable");
        }
        const r = n.filter((e)=>!o("WAWebUserPrefsMeUser").isMeAccount(e));
        if (r.length === 0) {
            o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                "voip: ",
                ": nothing callable in a list of ",
                ""
            ])), t, e.length).sendLogs("voip-group-call-no-callable-participants");
            o("WAWebToastManager").ToastManager.open(oe.jsx(o("WAWebToast.react").Toast, {
                msg: s._("Couldn't start call. Select someone else to call.")
            }));
            return null;
        }
        return r;
    }
    function ze(e, t) {
        return je.apply(this, arguments);
    }
    function je() {
        je = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, lobbyEntryPoint = o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE.SECOND_NOTIFICATION) {
            o("WALogger").LOG(I || (I = babelHelpers.taggedTemplateLiteralLoose([
                "voip: joinOngoingCallByCallId: callId=",
                ", lobbyEntryPoint=",
                ""
            ])), e, lobbyEntryPoint).color(ae);
            o("WAWebVoipActivityTracker").startActivityTracking();
            o("WAWebVoipActivityTracker").startUiActivityTracking();
            o("WAWebVoipActivityTracker").trackUiActivity(o("WAWebVoipActivityTracker").VoipUiActivity.USER_JOIN_ONGOING_CALL);
            const r = o("WAWebVoipOngoingCallCollection").WAWebVoipOngoingCallCollection.getByCallId(e);
            if (r == null) {
                o("WALogger").LOG(T || (T = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: joinOngoingCallByCallId: no call for ",
                    ""
                ])), e).color(ae);
                o("WAWebToastManager").ToastManager.open(oe.jsx(o("WAWebToast.react").Toast, {
                    msg: s._("Call not found.")
                }));
                o("WAWebVoipActivityTracker").clearAllActivityTracking();
                return;
            }
            const a = r.to;
            if (a == null) {
                o("WALogger").LOG(D || (D = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: joinOngoingCallByCallId: No chat found for call ID ",
                    ""
                ])), e).color(ae);
                o("WAWebToastManager").ToastManager.open(oe.jsx(o("WAWebToast.react").Toast, {
                    msg: s._("Could not join call.")
                }));
                o("WAWebVoipActivityTracker").clearAllActivityTracking();
                return;
            }
            const i = yield o("WAWebFindChatAction").findOrCreateLatestChat(a, "voipNotification");
            const i_chat = i.chat;
            const u = r.isVideoCall ?? false;
            yield Ke({
                callId: e,
                chat: i_chat,
                isDeviceSwitch: true,
                isVideo: u,
                lobbyEntryPoint
            });
        });
        return je.apply(this, arguments);
    }
    function Ke(e) {
        return Qe.apply(this, arguments);
    }
    function Qe() {
        Qe = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ callId, chat, isDeviceSwitch = false, isVideo, joinAndAccept = false, lobbyEntryPoint = 0 }) {
            o("WAWebVoipCallAudioUnlock").prepareCallAudioElement();
            if (!(yield Xe())) {
                o("WAWebVoipActivityTracker").startActivityTracking();
                o("WAWebVoipActivityTracker").startUiActivityTracking();
                const f = yield o("WAWebVoipOngoingCallJoinDevices").checkOngoingCallJoinDevices(callId, isVideo, joinAndAccept);
                if (f == null) {
                    o("WAWebVoipActivityTracker").clearAllActivityTracking();
                    return;
                }
                if (r("WAWebEnvironment").isWindows && !o("WAWebVoipGatingUtils").isWinHybridPlusEnabled()) {
                    let g;
                    const h = se_getWindowsBridge == null || (g = se_getWindowsBridge(r("WAWebWindowsHybridBridgeInitiator").WAWebVoipStartCall)) == null ? undefined : g.voip;
                    if (h == null) {
                        o("WALogger").LOG(x || (x = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: joinOngoingWAWebVoipGroupCallPN: VoIP bridge is null"
                        ]))).color(ae);
                        o("WAWebVoipActivityTracker").clearAllActivityTracking();
                        return;
                    }
                    if (!("joinOngoingCall" in h) || o("WAWebBuildConstants").WINDOWS_BUILD != null && o("WAWebBuildConstants").WINDOWS_BUILD.startsWith("2511") || o("WAWebBuildConstants").WINDOWS_BUILD != null && o("WAWebBuildConstants").WINDOWS_BUILD.startsWith("2514") || o("WAWebBuildConstants").WINDOWS_BUILD != null && o("WAWebBuildConstants").WINDOWS_BUILD.startsWith("2515") || o("WAWebBuildConstants").WINDOWS_BUILD != null && o("WAWebBuildConstants").WINDOWS_BUILD.startsWith("2516") || o("WAWebBuildConstants").WINDOWS_BUILD != null && o("WAWebBuildConstants").WINDOWS_BUILD.startsWith("2557") || o("WAWebBuildConstants").WINDOWS_BUILD != null && o("WAWebBuildConstants").WINDOWS_BUILD.startsWith("2558") || o("WAWebBuildConstants").WINDOWS_BUILD != null && o("WAWebBuildConstants").WINDOWS_BUILD.startsWith("2559")) {
                        o("WALogger").LOG($ || ($ = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: joinOngoingWAWebVoipGroupCallPN: unsupported"
                        ]))).color(ae);
                        o("WAWebVoipActivityTracker").clearAllActivityTracking();
                        return;
                    }
                }
                const y = o("WAWebVoipOngoingCallCollection").WAWebVoipOngoingCallCollection.getByCallId(callId);
                if (y == null) {
                    o("WALogger").LOG(P || (P = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: joinOngoingWAWebVoipGroupCallPN: no call ",
                        ""
                    ])), callId).color(ae);
                    o("WAWebVoipActivityTracker").clearAllActivityTracking();
                    return;
                } else if (y.callCreator == null) {
                    o("WALogger").LOG(N || (N = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: joinOngoingWAWebVoipGroupCallPN: no creator ",
                        ""
                    ])), callId).color(ae);
                    yield o("WAWebVoipActionWriteCallLogEventUpdateJoinable").cleanupJoinableCallLog(callId);
                    o("WAWebToastManager").ToastManager.open(oe.jsx(o("WAWebToast.react").Toast, {
                        msg: s._("Could not join call.")
                    }));
                    o("WAWebVoipActivityTracker").clearAllActivityTracking();
                    return;
                }
                o("WALogger").LOG(M || (M = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: joinOngoingWAWebVoipGroupCallPN: joining"
                ]))).color(ae);
                o("WAWebVoipActivityTracker").trackUiActivity(o("WAWebVoipActivityTracker").VoipUiActivity.USER_JOIN_ONGOING_CALL);
                const C = y.callParticipants ?? [];
                const b = C.map((e)=>{
                    const t = o("WAWebLidMigrationUtils").toPn(e.participant);
                    if (t == null) {
                        o("WALogger").ERROR(w || (w = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: joinOngoingWAWebVoipGroupCallPN: participant dropped - toPn() returned null"
                        ]))).sendLogs("voip: StartPNCall: group join participant toPn failed");
                    }
                    return t;
                }).filter((e)=>e != null && !o("WAWebUserPrefsMeUser").isMeAccount(e));
                const v = yield ge({
                    isGroup: true,
                    isJoin: true,
                    isVideo
                });
                if (v.status !== "not_ready") {
                    const S = v.abortController.signal;
                    const R = (ne || (ne = n("Promise"))).all([
                        o("WAWebVoipStackInterface").getVoipStackInterface(),
                        tt(b, true),
                        pe(o("WAWebVoipUiLoadable").requireBundle, "voip-join-group-call-preload-ui"),
                        isVideo ? pe(o("WAWebVoipUiVideoCallLoadable").requireBundle, "voip-join-group-call-preload-video") : undefined,
                        isVideo ? pe(o("WAWebVoipUiVideoGroupCallLoadable").requireBundle, "voip-join-group-call-preload-video-group") : undefined
                    ]);
                    R.catch(r("WAWebNoop"));
                    try {
                        const E = yield r("WAPromiseRaceAbort")(R, S);
                        const k = E[0];
                        const I = E[1];
                        const { gcDeviceJidsCsv, gcUserJids, gcUserPnJids } = I;
                        yield (ne || (ne = n("Promise"))).all(gcUserJids.map((e)=>o("WAWebSendTcTokenChatAction").sendTcToken(e)));
                        const W = chat.id.isGroup() ? chat.id.toString({
                            legacy: true
                        }) : "";
                        o("WALogger").LOG(A || (A = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: startWAWebVoipGroupCallPN: groupJid: ",
                            ""
                        ])), W).color(ae);
                        if (S.aborted) {
                            o("WALogger").LOG(F || (F = babelHelpers.taggedTemplateLiteralLoose([
                                "voip: joinOngoingWAWebVoipGroupCallPN: cancelled before signaling"
                            ]))).color(ae);
                            return;
                        }
                        o("WAWebCoreActionsODS").logCallGroupJoin();
                        yield k?.joinOngoingCall(callId, r("nullthrows")(y.callCreator).toString({
                            legacy: true,
                            formatIncludeDevice: true
                        }), "", gcUserPnJids.map((e)=>e?.toString({
                                legacy: true
                            }) ?? ""), gcUserJids.map((e)=>e.toString({
                                legacy: true
                            })), gcDeviceJidsCsv, isVideo, W, 0, true, y.callLinkToken ?? "", false, "", joinAndAccept, chat.name || chat.formattedTitle, lobbyEntryPoint, isDeviceSwitch);
                    } catch (error) {
                        if (S.aborted) {
                            o("WALogger").LOG(O || (O = babelHelpers.taggedTemplateLiteralLoose([
                                "voip: joinOngoingWAWebVoipGroupCallPN: cancelled before signaling"
                            ]))).color(ae);
                            return;
                        }
                        o("WAWebVoipCancelOutgoingCall").cancelPendingOutgoingCall();
                        throw error;
                    }
                    f.afterJoin();
                }
            }
        });
        return Qe.apply(this, arguments);
    }
    function Xe() {
        return Ye.apply(this, arguments);
    }
    function Ye() {
        Ye = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (yield o("WAWebVoipCallBlockedModals").showCallBlockedModalIfNeeded()) {
                return true;
            }
            if (r("WAWebCallCollection").pendingOutgoingCall == null) {
                return false;
            }
            o("WALogger").LOG(B || (B = babelHelpers.taggedTemplateLiteralLoose([
                "voip: joinOngoingWAWebVoipGroupCallPN: a call is being placed, ignoring the join"
            ]))).color(ae);
            return true;
        });
        return Ye.apply(this, arguments);
    }
    function Je(e) {
        return Ze.apply(this, arguments);
    }
    function Ze() {
        Ze = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            try {
                if ("permissions" in navigator) {
                    if (e) {
                        const t = yield navigator.permissions.query({
                            name: "camera"
                        });
                        const n = t.state === "granted";
                        if (!n) {
                            o("WALogger").LOG(W || (W = babelHelpers.taggedTemplateLiteralLoose([
                                "voip: JS doesn't have camera permissions for a video call"
                            ])));
                        }
                    }
                    const r = yield navigator.permissions.query({
                        name: "microphone"
                    });
                    const a = r.state === "granted";
                    if (!a) {
                        o("WALogger").LOG(q || (q = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: JS doesn't have microphone permissions for a call"
                        ])));
                    }
                }
            } catch (error) {
                o("WALogger").LOG(U || (U = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: failed to check device permissions: ",
                    ""
                ])), error);
            }
        });
        return Ze.apply(this, arguments);
    }
    function et(e, t) {
        if (e.length > ce) {
            o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                "voip:",
                ": too many devices, removing companions"
            ])), t);
            return e.filter((e)=>!e.isCompanion()).map((e)=>e.toString({
                    legacy: true,
                    formatIncludeDevice: true
                }));
        }
        return e.map((e)=>e.toString({
                legacy: true,
                formatIncludeDevice: true
            }));
    }
    function tt(e, t) {
        return nt.apply(this, arguments);
    }
    function nt() {
        nt = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t = false) {
            const r = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow();
            let a = e.map((e)=>o("WAWebLidMigrationUtils").toLid(e));
            const i = e.filter((e, t)=>a[t] == null);
            if (i.length > 0) {
                o("WALogger").LOG(V || (V = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: getVoipParticipantJids: ",
                    " participants unresolved, attempting usync"
                ])), i.length).color(ae);
                yield (ne || (ne = n("Promise"))).all(i.map((e)=>o("WAWebAdvSyncDeviceListApi").syncDeviceList({
                        wids: [
                            e
                        ],
                        context: "voip",
                        phash: null
                    })));
                a = e.map((e)=>o("WAWebLidMigrationUtils").toLid(e));
                const l = e.filter((e, t)=>a[t] == null);
                if (l.length > 0) {
                    o("WALogger").ERROR(H || (H = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: getVoipParticipantJids: ",
                        " participants still unresolved after usync, stripping"
                    ])), l.length).sendLogs("voip: getVoipParticipantJids: participants stripped after usync");
                } else {
                    o("WALogger").LOG(G || (G = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: getVoipParticipantJids: usync resolved all participants successfully"
                    ]))).color(ae);
                }
            }
            const gcUserJids = [].concat(t ? [
                r
            ] : [], a.filter((e)=>e != null && !o("WAWebUserPrefsMeUser").isMeAccount(e)));
            const gcUserPnJids = gcUserJids.map((e)=>o("WAWebLidMigrationUtils").toPn(e));
            yield (ne || (ne = n("Promise"))).all(gcUserJids.map((e)=>o("WAWebAdvSyncDeviceListApi").syncDeviceList({
                    wids: [
                        e
                    ],
                    context: "voip",
                    phash: null
                })));
            const c = yield ne.all(gcUserJids.map((e)=>o("WAWebSendMsgDatabaseJob").getFanOutListJob([
                    e
                ])));
            const gcDeviceJidsCsv = c.map((e)=>{
                const t = et(e, "callStart");
                const n = t.join(",");
                return n;
            });
            return {
                gcUserJids,
                gcUserPnJids,
                gcDeviceJidsCsv
            };
        });
        return nt.apply(this, arguments);
    }
    function rt(e) {
        return ot.apply(this, arguments);
    }
    function ot() {
        ot = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (!(yield o("WAWebVoipCallBlockedModals").showCallBlockedModalIfNeeded())) {
                o("WALogger").LOG(z || (z = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: inviteToCall called for chat: ",
                    ""
                ])), e.toString());
                try {
                    const a = yield lt(e);
                    if (a == null) {
                        o("WALogger").ERROR(j || (j = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: inviteToCall: LID resolution failed for participant, aborting invite"
                        ]))).sendLogs("voip: inviteToCall: LID expected but missing");
                        return;
                    }
                    const i = a.lidJid;
                    let l = a.pnJid;
                    const s = o("WAWebLidMigrationUtils").toLid(e) ?? e;
                    const u = yield (ne || (ne = n("Promise"))).all([
                        o("WAWebVoipStackInterface").getVoipStackInterface(),
                        o("WAWebAdvSyncDeviceListApi").syncDeviceList({
                            wids: [
                                s
                            ],
                            context: "voip",
                            phash: null
                        }),
                        pe(o("WAWebVoipUiLoadable").requireBundle, "voip-invite-to-call-preload-ui"),
                        pe(o("WAWebVoipUiVideoGroupCallLoadable").requireBundle, "voip-invite-to-call-preload-video-group")
                    ]);
                    const c = u[0];
                    if (!l) {
                        l = o("WAWebLidMigrationUtils").toPn(e)?.toString() ?? "";
                    }
                    const p = yield o("WAWebSendMsgDatabaseJob").getFanOutListJob([
                        s
                    ]);
                    const _ = et(p, "inviteToCall");
                    yield c?.inviteToCall(l, i, _);
                    o("WALogger").LOG(K || (K = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: inviteToCall completed successfully for ",
                        ""
                    ])), e.toString());
                } catch (error) {
                    o("WALogger").ERROR(Q || (Q = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: inviteToCall failed for ",
                        ""
                    ])), e.toString()).catching(r("getErrorSafe")(error));
                    throw error;
                }
            }
        });
        return ot.apply(this, arguments);
    }
    function at(e) {
        return it.apply(this, arguments);
    }
    function it() {
        it = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            o("WALogger").LOG(X || (X = babelHelpers.taggedTemplateLiteralLoose([
                "voip: waveAtParticipant called for chat: ",
                ""
            ])), e.toString());
            try {
                const a = yield lt(e);
                if (a == null) {
                    o("WALogger").ERROR(Y || (Y = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: waveAtParticipant: LID resolution failed for participant, aborting wave"
                    ]))).sendLogs("voip: waveAtParticipant: LID expected but missing");
                    return false;
                }
                const i = a.lidJid;
                let l = a.pnJid;
                const s = o("WAWebLidMigrationUtils").toLid(e) ?? e;
                const u = yield (ne || (ne = n("Promise"))).all([
                    o("WAWebVoipStackInterface").getVoipStackInterface(),
                    o("WAWebAdvSyncDeviceListApi").syncDeviceList({
                        wids: [
                            s
                        ],
                        context: "voip",
                        phash: null
                    })
                ]);
                const c = u[0];
                if (c == null) {
                    o("WALogger").ERROR(J || (J = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: waveAtParticipant: voipStackInterface is null, aborting wave"
                    ]))).sendLogs("voip: waveAtParticipant: voipStackInterface is null");
                    return false;
                }
                if (!l) {
                    l = o("WAWebLidMigrationUtils").toPn(e)?.toString() ?? "";
                }
                const p = yield o("WAWebSendMsgDatabaseJob").getFanOutListJob([
                    s
                ]);
                const _ = et(p, "waveAtParticipant");
                if (_.length === 0) {
                    o("WALogger").ERROR(Z || (Z = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: waveAtParticipant: no devices resolved for participant, aborting wave"
                    ]))).sendLogs("voip: waveAtParticipant: empty device list");
                    return false;
                }
                yield c.sendWave(l, i, _);
                o("WALogger").LOG(ee || (ee = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: waveAtParticipant completed successfully for ",
                    ""
                ])), e.toString());
                return true;
            } catch (error) {
                o("WALogger").ERROR(te || (te = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: waveAtParticipant failed for ",
                    ""
                ])), e.toString()).catching(r("getErrorSafe")(error));
                throw error;
            }
        });
        return it.apply(this, arguments);
    }
    function lt(e) {
        return st.apply(this, arguments);
    }
    function st() {
        st = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = e.toString();
            let pnJid = "";
            let lidJid = "";
            if (e.isLid()) {
                lidJid = o("WAWebLidMigrationUtils").toLid(e)?.toString() ?? t;
                pnJid = o("WAWebLidMigrationUtils").toPn(e)?.toString() ?? "";
            } else {
                pnJid = o("WAWebLidMigrationUtils").toPn(e)?.toString() ?? t;
                lidJid = o("WAWebLidMigrationUtils").toLid(e)?.toString() ?? "";
                if (!lidJid) {
                    yield o("WAWebAdvSyncDeviceListApi").syncDeviceList({
                        wids: [
                            e
                        ],
                        context: "voip",
                        phash: null
                    });
                    lidJid = o("WAWebLidMigrationUtils").toLid(e)?.toString() ?? "";
                }
            }
            if (lidJid) {
                return {
                    lidJid,
                    pnJid
                };
            }
            return null;
        });
        return st.apply(this, arguments);
    }
    l.preloadGroupCallBundle = _e;
    l.startWAWebVoipCall = ve;
    l.startWAWebVoipGroupCallFromChat = Be;
    l.startWAWebVoipGroupCallFromContacts = qe;
    l.startWAWebVoipGroupCallFromWids = Ve;
    l.joinOngoingCallByCallId = ze;
    l.joinOngoingWAWebVoipGroupCallPN = Ke;
    l.inviteToCall = rt;
    l.waveAtParticipant = at;
}, 226);