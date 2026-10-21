__d("WAWebVoipHandleNativeCallEvent", [
    "Promise",
    "WALogger",
    "WAWebABProps",
    "WAWebBackendApi",
    "WAWebCallRandomIdStore",
    "WAWebCallUserJourneyGating",
    "WAWebCallUserJourneyLogger",
    "WAWebCoreActionsODS",
    "WAWebVoipAppInBgWhenCallStartsStore",
    "WAWebVoipAudioCaptureBase",
    "WAWebVoipBatteryDiagnostics",
    "WAWebVoipBrowserMetrics",
    "WAWebVoipCallEnterPipModeCountStore",
    "WAWebVoipCallStateUtils",
    "WAWebVoipCalleeOfferToRingStore",
    "WAWebVoipCameraFingerprintLogging",
    "WAWebVoipContactUtils",
    "WAWebVoipCrashRecovery",
    "WAWebVoipDtlsCertCallRegistration",
    "WAWebVoipErrorLogUpload",
    "WAWebVoipFocusTracker",
    "WAWebVoipGatingUtils",
    "WAWebVoipHandleLidCallerDisplayInfo",
    "WAWebVoipHandleNativeCallEventCallLinkHandlers",
    "WAWebVoipHandleNativeCallEventCallLogHandlers",
    "WAWebVoipHandleNativeCallEventFieldstatsHandlers",
    "WAWebVoipHandleNativeCallEventMediaHandlers",
    "WAWebVoipHardwareInfo",
    "WAWebVoipIncomingCallUiActionStore",
    "WAWebVoipInitEventEmitter",
    "WAWebVoipLocalCallStateStore",
    "WAWebVoipP2PConnectionManager",
    "WAWebVoipPersistentFS",
    "WAWebVoipQplHelpers",
    "WAWebVoipSctpConnectionManager",
    "WAWebVoipSctpIceTcpFallback",
    "WAWebVoipSignalingEnums",
    "WAWebVoipStackInterface",
    "WAWebVoipThreadPoolManagerRegistry",
    "WAWebVoipTransportFallbackTracker",
    "WAWebVoipVideoCameraCapture",
    "WAWebVoipVideoCaptureAndRendering",
    "WAWebVoipWaCallEnums",
    "WAWebVoipWasmHeapMonitor",
    "WAWebVoipWebTransportCallSummary",
    "WAWebVoipWebTransportConnectionManager",
    "WAWebVoipWindowMetrics",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "nullthrows"
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
    let B;
    let W;
    let q;
    let U;
    let V;
    let H;
    let G;
    let z;
    const connectionLimit = 1;
    function K(callState) {
        if (callState === o("WAWebVoipWaCallEnums").CallState.None) {
            return "None";
        }
        if (callState === o("WAWebVoipWaCallEnums").CallState.Calling) {
            return "Calling";
        }
        if (callState === o("WAWebVoipWaCallEnums").CallState.PreacceptReceived) {
            return "PreacceptReceived";
        }
        if (callState === o("WAWebVoipWaCallEnums").CallState.ReceivedCall) {
            return "ReceivedCall";
        }
        if (callState === o("WAWebVoipWaCallEnums").CallState.AcceptSent) {
            return "AcceptSent";
        }
        if (callState === o("WAWebVoipWaCallEnums").CallState.AcceptReceived) {
            return "AcceptReceived";
        }
        if (callState === o("WAWebVoipWaCallEnums").CallState.CallActive) {
            return "CallActive";
        }
        if (callState === o("WAWebVoipWaCallEnums").CallState.CallActiveElseWhere) {
            return "CallActiveElseWhere";
        }
        if (callState === o("WAWebVoipWaCallEnums").CallState.ReceivedCallWithoutOffer) {
            return "ReceivedCallWithoutOffer";
        }
        if (callState === o("WAWebVoipWaCallEnums").CallState.Rejoining) {
            return "Rejoining";
        }
        if (callState === o("WAWebVoipWaCallEnums").CallState.Link) {
            return "Link";
        }
        if (callState === o("WAWebVoipWaCallEnums").CallState.ConnectedLonely) {
            return "ConnectedLonely";
        }
        if (callState === o("WAWebVoipWaCallEnums").CallState.PreCalling) {
            return "PreCalling";
        }
        if (callState === o("WAWebVoipWaCallEnums").CallState.CallStateEnding) {
            return "CallStateEnding";
        }
        if (callState === o("WAWebVoipWaCallEnums").CallState.CallBCallStarting) {
            return "CallBCallStarting";
        }
        return (()=>{
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${callState}`);
        })();
    }
    let Q = null;
    let X = null;
    function Y() {
        return {
            initStarted: false,
            callIsActive: false,
            relayListReceived: false,
            cachedRelayListData: null
        };
    }
    let J = Y();
    const Z = 90;
    let ee = null;
    let te = null;
    const ne = 60;
    let re = null;
    let oe = null;
    function ae() {
        X = null;
        o("WAWebVoipWasmHeapMonitor").stopWasmHeapMonitor();
    }
    function ie(callState, n) {
        if (callState === o("WAWebVoipWaCallEnums").CallState.None || callState === o("WAWebVoipWaCallEnums").CallState.CallActiveElseWhere) {
            ae();
            return;
        }
        if (!(X != null || callState === o("WAWebVoipWaCallEnums").CallState.CallStateEnding)) {
            const a = n.callId;
            X = a;
            o("WAWebBackendApi").frontendSendAndReceive("initializeVoipWasm").then((e)=>{
                if (X === a) {
                    o("WAWebVoipWasmHeapMonitor").startWasmHeapMonitor(e);
                }
            }).catch((t)=>{
                if (X === a) {
                    X = null;
                }
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [WasmHeap] failed to start monitor"
                ]))).catching(r("getErrorSafe")(t));
            });
        }
    }
    function le() {
        if (ee != null) {
            window.clearTimeout(ee);
            ee = null;
            te = null;
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "voip: caller timeout cleared"
            ])));
        }
    }
    function se(e, t, n) {
        return ue.apply(this, arguments);
    }
    function ue() {
        ue = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, a) {
            if (e.type === "web") {
                const i = o("WAWebVoipCallStateUtils").isCallTerminal(t) || o("WAWebVoipCallStateUtils").isCallActive(t);
                if (i) {
                    le();
                    return;
                }
                const l = o("WAWebVoipCallStateUtils").isCallOutgoing(t);
                const s = a.isCaller === true;
                const u = a.isGroupCall === true;
                if (l && s && !u) {
                    if (ee != null) {
                        return;
                    }
                    const c = a.callId;
                    if (c == null) {
                        o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: caller timeout not set, callId is null"
                        ])));
                        return;
                    }
                    te = c;
                    let d = Z;
                    try {
                        const m = yield e.getVoipParam("options.caller_timeout");
                        if (m != null && m !== "") {
                            const p = parseInt(m, 10);
                            if (!isNaN(p) && p > 0) {
                                d = p;
                            }
                        }
                    } catch (error) {
                        o("WALogger").LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: failed to get caller timeout param, using default: ",
                            ""
                        ])), error);
                    }
                    if (te !== c) {
                        o("WALogger").LOG(C || (C = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: caller timeout skipped, state changed"
                        ])));
                        return;
                    }
                    o("WALogger").LOG(b || (b = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: setting caller timeout for outgoing call: ",
                        "s"
                    ])), d);
                    ee = window.setTimeout(function() {
                        if (te !== c) {
                            o("WALogger").LOG(v || (v = babelHelpers.taggedTemplateLiteralLoose([
                                "voip: caller timeout fired but call ID changed, ignoring"
                            ])));
                            return;
                        }
                        o("WALogger").LOG(S || (S = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: caller timeout fired, ending call"
                        ])));
                        ee = null;
                        te = null;
                        (z || (z = n("Promise"))).resolve(e.endCall(o("WAWebVoipSignalingEnums").EndCallReason.Timeout, true)).catch((e)=>{
                            o("WALogger").ERROR(R || (R = babelHelpers.taggedTemplateLiteralLoose([
                                "voip: failed to end call on caller timeout"
                            ]))).catching(r("getErrorSafe")(e));
                        });
                    }, d * 1000);
                }
            }
        });
        return ue.apply(this, arguments);
    }
    function ce() {
        if (re != null) {
            window.clearTimeout(re);
            re = null;
            oe = null;
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "voip: callee ringing timeout cleared"
            ])));
        }
    }
    function de({ callInfo, callState, voipStackInterface }) {
        if (voipStackInterface.type === "web") {
            const l = o("WAWebVoipCallStateUtils").isCallTerminal(callState) || o("WAWebVoipCallStateUtils").isCallActive(callState) || o("WAWebVoipCallStateUtils").isCallConnecting(callState);
            if (l) {
                ce();
                return;
            }
            if (callState === o("WAWebVoipWaCallEnums").CallState.ReceivedCall && callInfo.isCaller !== true) {
                if (re != null) {
                    return;
                }
                const s = callInfo.callId;
                if (s == null) {
                    o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: callee ringing timeout not set, callId is null"
                    ])));
                    return;
                }
                oe = s;
                const u = ne;
                o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: callee ringing timeout set: ",
                    " (",
                    "s)"
                ])), s, u);
                re = window.setTimeout(function() {
                    if (oe !== s) {
                        o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: callee ringing timeout fired, callId changed"
                        ])));
                        return;
                    }
                    o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: callee ringing timeout fired: ",
                        ""
                    ])), s);
                    re = null;
                    oe = null;
                    (z || (z = n("Promise"))).resolve(voipStackInterface.endCall(o("WAWebVoipSignalingEnums").EndCallReason.Timeout, true)).catch((e)=>{
                        o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: failed to end call on callee ringing timeout"
                        ]))).catching(r("getErrorSafe")(e));
                    });
                    o("WAWebBackendApi").frontendFireAndForget("setCallState", {
                        callState: o("WAWebVoipWaCallEnums").CallState.None,
                        callInfo
                    });
                }, u * 1000);
            }
        }
    }
    function me(e, t) {
        return pe.apply(this, arguments);
    }
    function pe() {
        pe = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            yield e === o("WAWebVoipWaCallEnums").CallEvent.CallStateChanged ? Se(t) : e === o("WAWebVoipWaCallEnums").CallEvent.SyncDevices ? o("WAWebVoipHandleNativeCallEventCallLogHandlers").handleSyncDevices(t) : e === o("WAWebVoipWaCallEnums").CallEvent.CallEnding ? o("WAWebVoipHandleNativeCallEventCallLogHandlers").handleCallEnding(t) : e === o("WAWebVoipWaCallEnums").CallEvent.RejectedDecryptionFailure ? o("WAWebVoipHandleNativeCallEventCallLogHandlers").handleRejectedDecryptionFailure(t) : e === o("WAWebVoipWaCallEnums").CallEvent.UpdateJoinableCallLog ? o("WAWebVoipHandleNativeCallEventCallLogHandlers").handleUpdateJoinableCallLog(t) : e === o("WAWebVoipWaCallEnums").CallEvent.CallMissed ? o("WAWebVoipHandleNativeCallEventCallLogHandlers").handleCallMissed(t) : e === o("WAWebVoipWaCallEnums").CallEvent.Update1to1CallLog ? o("WAWebVoipHandleNativeCallEventCallLogHandlers").handleUpdate1to1CallLog(t) : e === o("WAWebVoipWaCallEnums").CallEvent.RelayListUpdate ? Te(t) : e === o("WAWebVoipWaCallEnums").CallEvent.FieldstatsReady ? o("WAWebVoipHandleNativeCallEventFieldstatsHandlers").handleFieldstatsReady(t) : e === o("WAWebVoipWaCallEnums").CallEvent.GroupInfoChanged || e === o("WAWebVoipWaCallEnums").CallEvent.GroupParticipantLeft ? o("WAWebVoipHandleNativeCallEventCallLinkHandlers").handleGroupInfoChanged(t) : e === o("WAWebVoipWaCallEnums").CallEvent.SelfVideoStateChanged || e === o("WAWebVoipWaCallEnums").CallEvent.PeerVideoStateChanged || e === o("WAWebVoipWaCallEnums").CallEvent.VideoStateChanged ? o("WAWebVoipHandleNativeCallEventMediaHandlers").handleVideoStateChanged(t) : e === o("WAWebVoipWaCallEnums").CallEvent.PeerVideoPermissionChanged ? o("WAWebVoipHandleNativeCallEventMediaHandlers").handlePeerVideoPermissionChanged(t) : e === o("WAWebVoipWaCallEnums").CallEvent.CallRejectReceived ? o("WAWebVoipHandleNativeCallEventCallLinkHandlers").handleCallRejectReceived(t) : e === o("WAWebVoipWaCallEnums").CallEvent.CallFatal ? o("WAWebVoipHandleNativeCallEventCallLinkHandlers").handleCallFatal(t) : e === o("WAWebVoipWaCallEnums").CallEvent.RTCPByeReceived ? o("WAWebVoipHandleNativeCallEventCallLinkHandlers").handleRTCPByeReceived(t) : e === o("WAWebVoipWaCallEnums").CallEvent.RelayBindsFailed ? o("WAWebVoipHandleNativeCallEventCallLinkHandlers").handleRelayBindsFailed(t) : e === o("WAWebVoipWaCallEnums").CallEvent.MuteStateChanged ? o("WAWebVoipHandleNativeCallEventMediaHandlers").handleMuteStateChanged() : e === o("WAWebVoipWaCallEnums").CallEvent.ReactionStateChanged ? o("WAWebVoipHandleNativeCallEventMediaHandlers").handleReactionStateChanged(t) : e === o("WAWebVoipWaCallEnums").CallEvent.RaiseHandStateChanged ? o("WAWebVoipHandleNativeCallEventMediaHandlers").handleRaiseHandStateChanged(t) : e === o("WAWebVoipWaCallEnums").CallEvent.SpeakerStatusChanged ? o("WAWebVoipHandleNativeCallEventMediaHandlers").handleSpeakerStatusChanged(t) : e === o("WAWebVoipWaCallEnums").CallEvent.AudioDriverRestart ? o("WAWebVoipHandleNativeCallEventMediaHandlers").handleAudioDriverRestart(t) : e === o("WAWebVoipWaCallEnums").CallEvent.ScreenShare ? o("WAWebVoipHandleNativeCallEventMediaHandlers").handleScreenShareStateChanged(t) : e === o("WAWebVoipWaCallEnums").CallEvent.SelfCameraAutoOff ? o("WAWebVoipHandleNativeCallEventMediaHandlers").handleSelfCameraAutoOff(t) : e === o("WAWebVoipWaCallEnums").CallEvent.RxTrafficStopped ? o("WAWebVoipErrorLogUpload").recordCallReconnectingStateForLogs() : e === o("WAWebVoipWaCallEnums").CallEvent.RxTrafficStateForPeerChanged ? o("WAWebVoipHandleNativeCallEventCallLinkHandlers").handleRxTrafficStateForPeerChanged(t) : e === o("WAWebVoipWaCallEnums").CallEvent.NetHealthStatusChangedV2 ? o("WAWebVoipHandleNativeCallEventCallLinkHandlers").handleNetHealthStatusChanged(t) : e === o("WAWebVoipWaCallEnums").CallEvent.CallLinkStateChanged ? o("WAWebVoipHandleNativeCallEventCallLinkHandlers").handleCallLinkStateChanged(t) : e === o("WAWebVoipWaCallEnums").CallEvent.CallOfferNacked ? o("WAWebVoipHandleNativeCallEventCallLinkHandlers").handleCallOfferNacked(t) : e === o("WAWebVoipWaCallEnums").CallEvent.LinkQueryNacked || e === o("WAWebVoipWaCallEnums").CallEvent.LinkJoinNacked ? o("WAWebVoipHandleNativeCallEventCallLinkHandlers").handleCallLinkNacked(t) : e === o("WAWebVoipWaCallEnums").CallEvent.LobbyNacked ? o("WAWebVoipHandleNativeCallEventCallLinkHandlers").handleLobbyNacked() : e === o("WAWebVoipWaCallEnums").CallEvent.LobbyTimeout ? o("WAWebVoipHandleNativeCallEventCallLinkHandlers").handleLobbyTimeout() : e === o("WAWebVoipWaCallEnums").CallEvent.MuteRequestFailed ? o("WAWebVoipHandleNativeCallEventCallLogHandlers").handleMuteRequestFailed() : e === o("WAWebVoipWaCallEnums").CallEvent.MutedByOthers ? o("WAWebVoipHandleNativeCallEventCallLogHandlers").handleMutedByOthers(t) : e === o("WAWebVoipWaCallEnums").CallEvent.WaitingRoomDenied ? void o("WAWebVoipHandleNativeCallEventCallLinkHandlers").handleWaitingRoomDenied() : e === o("WAWebVoipWaCallEnums").CallEvent.WaitingRoomStateChanged ? void o("WAWebVoipHandleNativeCallEventCallLinkHandlers").handleWaitingRoomStateChanged() : e === o("WAWebVoipWaCallEnums").CallEvent.CallGridRankingChanged ? o("WAWebVoipHandleNativeCallEventCallLinkHandlers").handleCallGridRankingChanged() : e === o("WAWebVoipWaCallEnums").CallEvent.UpdateVoipSettings ? o("WAWebVoipHandleNativeCallEventMediaHandlers").handleUpdateVoipSettings() : e === o("WAWebVoipWaCallEnums").CallEvent.UserRemoved ? o("WAWebVoipHandleNativeCallEventCallLinkHandlers").handleUserRemoved(t) : e === o("WAWebVoipWaCallEnums").CallEvent.CallAutoConnect || e === o("WAWebVoipWaCallEnums").CallEvent.BotReconfigureSuccess || e === o("WAWebVoipWaCallEnums").CallEvent.AudioDeviceReady || e === o("WAWebVoipWaCallEnums").CallEvent.BotEarlyConnect || e === o("WAWebVoipWaCallEnums").CallEvent.MicrophoneDeviceReady || e === o("WAWebVoipWaCallEnums").CallEvent.SpeakerDeviceReady || e === o("WAWebVoipWaCallEnums").CallEvent.WearableAttributionStateChanged || e === o("WAWebVoipWaCallEnums").CallEvent.RxTranscriptMsg || e === o("WAWebVoipWaCallEnums").CallEvent.RemoveFailed || e === o("WAWebVoipWaCallEnums").CallEvent.E2EEStatusChanged || e === o("WAWebVoipWaCallEnums").CallEvent.WaitingRoomToggleAcked || e === o("WAWebVoipWaCallEnums").CallEvent.WaitingRoomAdmitAcked || e === o("WAWebVoipWaCallEnums").CallEvent.WaitingRoomDenyAcked || e === o("WAWebVoipWaCallEnums").CallEvent.LinkQueryAcked ? o("WAWebVoipHandleNativeCallEventCallLogHandlers").handleNoOpEvent(e) : e === o("WAWebVoipWaCallEnums").CallEvent.EncodeTargetFpsChanged ? o("WAWebVoipHandleNativeCallEventMediaHandlers").handleEncodeTargetFpsChanged(t) : e === o("WAWebVoipWaCallEnums").CallEvent.EncodeParamsChanged ? o("WAWebVoipHandleNativeCallEventMediaHandlers").handleEncodeParamsChanged(t) : e === o("WAWebVoipWaCallEnums").CallEvent.P2PTransportUpdate ? o("WAWebVoipHandleNativeCallEventCallLinkHandlers").handleP2PTransportUpdate(t) : e === o("WAWebVoipWaCallEnums").CallEvent.HandleGroupCallReminder ? o("WAWebVoipHandleNativeCallEventCallLinkHandlers").handleGroupCallReminder(t) : e === o("WAWebVoipWaCallEnums").CallEvent.LidCallerDisplayInfo ? _e(t) : e === o("WAWebVoipWaCallEnums").CallEvent.VoiceChatWaveReceived ? ge(t) : e === o("WAWebVoipWaCallEnums").CallEvent.SwitchEntryPointChanged ? ye(t) : null;
        });
        return pe.apply(this, arguments);
    }
    function _e(e) {
        return fe.apply(this, arguments);
    }
    function fe() {
        fe = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            o("WALogger").LOG(L || (L = babelHelpers.taggedTemplateLiteralLoose([
                "voip: LidCallerDisplayInfo"
            ])));
            yield o("WAWebVoipHandleLidCallerDisplayInfo").handleWAWebVoipLidCallerDisplayInfoJson(e).catch((e)=>{
                o("WALogger").WARN(E || (E = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [LidCallerDisplayInfo] unhandled error"
                ]))).catching(r("getErrorSafe")(e)).sendLogs("voip-lid-caller-display-info-failed");
            });
        });
        return fe.apply(this, arguments);
    }
    function ge(e) {
        return he.apply(this, arguments);
    }
    function he() {
        he = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (o("WAWebABProps").getABPropConfigValue("group_calling_wave_receiving_enabled")) {
                const t = r("nullthrows")((yield o("WAWebVoipStackInterface").getVoipStackInterface()));
                if (t.type === "web") {
                    const n = t.parsers.parseVoiceChatWaveReceivedData(e);
                    if (n.silenceReason === "wave") {
                        const { callId, groupJid, senderWid } = n;
                        if (senderWid == null) {
                            o("WALogger").WARN(k || (k = babelHelpers.taggedTemplateLiteralLoose([
                                "voip: [wave] no sender jid; skip notif"
                            ]))).sendLogs("voip-wave-no-sender");
                            return;
                        }
                        o("WAWebBackendApi").frontendFireAndForget("showVoiceChatWaveNotification", {
                            senderWid,
                            groupJid,
                            callId
                        });
                    }
                }
            }
        });
        return he.apply(this, arguments);
    }
    function ye(e) {
        return Ce.apply(this, arguments);
    }
    function Ce() {
        Ce = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = r("nullthrows")((yield o("WAWebVoipStackInterface").getVoipStackInterface()));
            let entryPointData;
            try {
                entryPointData = t.parsers.parseSwitchEntryPointChangedData(e);
            } catch (error) {
                o("WALogger").ERROR(I || (I = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: SwitchEntryPointChanged: dropping unparseable event"
                ]))).catching(r("getErrorSafe")(error)).sendLogs("voip-switch-entry-point-parse-failed");
                return;
            }
            o("WALogger").LOG(T || (T = babelHelpers.taggedTemplateLiteralLoose([
                "voip: SwitchEntryPointChanged rootCallId=",
                " enabled=",
                ""
            ])), entryPointData.rootCallId, String(entryPointData.enabled));
            o("WAWebBackendApi").frontendFireAndForget("handleSwitchEntryPointChanged", {
                entryPointData
            });
        });
        return Ce.apply(this, arguments);
    }
    let be = null;
    function ve(e) {
        if (!(e == null || e === "" || e === be || !o("WAWebCallUserJourneyGating").isCallUserJourneyLoggingEnabled())) {
            const n = o("WAWebCallRandomIdStore").getCurrentCallRandomId() ?? o("WAWebCallRandomIdStore").getOrCreateCallRandomId(e);
            if (n != null) {
                o("WAWebCallRandomIdStore").setCurrentCallRandomId(n);
                be = e;
                o("WAWebCallUserJourneyLogger").CallUserJourneyLogger.startCall(n);
            }
        }
    }
    function Se(e) {
        return Re.apply(this, arguments);
    }
    function Re() {
        Re = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const voipStackInterface = r("nullthrows")(o("WAWebVoipStackInterface").getCachedVoipStackInterface() ?? (yield o("WAWebVoipStackInterface").getVoipStackInterface()));
            const i = voipStackInterface.parsers.parseCallStateChangedData(e);
            const callState = i.CallState ?? o("WAWebVoipWaCallEnums").CallState.None;
            const i_call_info = i.call_info;
            const u = o("WAWebVoipLocalCallStateStore").getLocalCallState();
            o("WAWebVoipLocalCallStateStore").setLocalCallState(callState);
            const c = o("WAWebVoipCallStateUtils").isCallTerminal(u) && !o("WAWebVoipCallStateUtils").isCallTerminal(callState);
            if (c) {
                o("WAWebVoipCameraFingerprintLogging").resetCameraFingerprintLogging();
                o("WAWebVoipHardwareInfo").ensureHardwareInfoDetected();
                o("WAWebVoipErrorLogUpload").resetReconnectingStateForNewCall();
                o("WAWebVoipTransportFallbackTracker").resetFallbackTracker();
                o("WAWebVoipSctpConnectionManager").resetSctpFallbackFamilyOutcome();
                o("WAWebVoipWebTransportConnectionManager").resetFallbackStateForNewCall();
                o("WAWebCallRandomIdStore").clearCurrentCallRandomId();
                o("WAWebVoipIncomingCallUiActionStore").resetIncomingCallUiAction();
                o("WAWebVoipAppInBgWhenCallStartsStore").resetAppInBgWhenCallStarts();
                o("WAWebVoipCallEnterPipModeCountStore").resetCallEnterPipModeCount();
            }
            o("WAWebVoipAppInBgWhenCallStartsStore").maybeRecordAppInBgWhenCallStarts(u, callState);
            if (o("WAWebVoipCallStateUtils").isCallTerminal(callState)) {
                be = null;
                Le();
            } else {
                ve(typeof i_call_info.callId === "string" ? i_call_info.callId : null);
            }
            if (!o("WAWebVoipCallStateUtils").isCallTerminal(u) && o("WAWebVoipCallStateUtils").isCallTerminal(callState)) {
                o("WAWebVoipTransportFallbackTracker").finalizeFallbackOutcome();
                o("WAWebVoipSctpConnectionManager").reportSctpFallbackFamilyOutcome();
                o("WAWebVoipSctpConnectionManager").resetWebTransportSctpWarmStandbyAtCallBoundary();
                o("WAWebCallUserJourneyLogger").CallUserJourneyLogger.clearCall();
            }
            if (u === o("WAWebVoipWaCallEnums").CallState.CallActive && callState === o("WAWebVoipWaCallEnums").CallState.ConnectedLonely) {
                o("WAWebVoipWebTransportConnectionManager").closeAllConnections(false);
                o("WAWebVoipSctpConnectionManager").closeAllRelayConnections();
            }
            o("WAWebCallUserJourneyLogger").CallUserJourneyLogger.setCallConnected(o("WAWebVoipCallStateUtils").isCallConnected(callState));
            o("WAWebCallUserJourneyLogger").CallUserJourneyLogger.setGroupCall(i_call_info.isGroupCall === true);
            o("WAWebCallUserJourneyLogger").CallUserJourneyLogger.setVideoCall(i_call_info.videoEnabled === true);
            o("WAWebCallUserJourneyLogger").CallUserJourneyLogger.setConnectedParticipants(Ee(i_call_info));
            if (!o("WAWebVoipCallStateUtils").isCallTerminal(callState)) {
                o("WAWebVoipDtlsCertCallRegistration").syncDtlsCertCall(i_call_info.callId);
                o("WAWebVoipCalleeOfferToRingStore").dropCalleeOfferToRingOfOtherCall(i_call_info.callId);
            }
            const d = o("WAWebVoipGatingUtils").isWebTransportEnabled();
            o("WAWebVoipGatingUtils").markCurrentCallAsGroup(i_call_info.isGroupCall === true);
            const m = i_call_info.isGroupCall === true && d && !o("WAWebVoipGatingUtils").isWebTransportEnabled();
            Ie(c, u, typeof i_call_info.callId === "string" ? i_call_info.callId : null);
            o("WAWebVoipWebTransportCallSummary").recordWtCallState(callState);
            ke(c);
            if (callState === o("WAWebVoipWaCallEnums").CallState.AcceptSent || callState === o("WAWebVoipWaCallEnums").CallState.AcceptReceived) {
                o("WAWebVoipSctpIceTcpFallback").noteIceTcpFallbackCallAccepted();
                if (o("WAWebVoipGatingUtils").isWebTransportEnabled()) {
                    o("WAWebVoipWebTransportConnectionManager").handleCallAccepted();
                }
            }
            if (m) {
                o("WALogger").LOG(D || (D = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [gating] group call detected, moving relay traffic to SCTP"
                ])));
                o("WAWebVoipWebTransportCallSummary").recordWtCallEligibility(o("WAWebVoipGatingUtils").isWebTransportConfigured(), false);
                if (!c) {
                    o("WAWebVoipWebTransportCallSummary").recordWtFallbackTriggered(callState, o("WAWebVoipWebTransportCallSummary").WtFallbackReason.GroupCallDisabled);
                    o("WAWebVoipTransportFallbackTracker").markFallbackTriggered();
                }
                o("WAWebVoipWebTransportConnectionManager").closeAllConnections(false);
                const p = J.cachedRelayListData;
                if (p != null) {
                    o("WAWebVoipTransportFallbackTracker").markFallbackSctpStarted();
                    o("WAWebVoipSctpConnectionManager").cleanupWebTransportSctpWarmStandby();
                    o("WAWebVoipSctpConnectionManager").handleRelayListUpdate(p).catch((e)=>{
                        o("WALogger").ERROR(x || (x = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [gating] SCTP relay list replay failed"
                        ]))).catching(r("getErrorSafe")(e));
                    });
                }
            }
            se(voipStackInterface, callState, i_call_info).catch((e)=>{
                o("WALogger").ERROR($ || ($ = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: handleCallerTimeout failed"
                ]))).catching(r("getErrorSafe")(e));
            });
            de({
                callInfo: i_call_info,
                callState,
                voipStackInterface
            });
            const _ = o("WAWebVoipThreadPoolManagerRegistry").getVoipThreadPoolManager();
            _?.onCallStateChanged(callState);
            if (voipStackInterface.type === "web") {
                ie(callState, i_call_info);
            }
            if (!o("WAWebVoipCallStateUtils").isCallTerminal(callState)) {
                o("WAWebBackendApi").frontendFireAndForget("startAnrTracking", {});
                o("WAWebBackendApi").frontendFireAndForget("startActivityTracking", {});
                o("WAWebBackendApi").frontendFireAndForget("startUiActivityTracking", {});
            }
            const stateName = K(callState);
            o("WAWebBackendApi").frontendFireAndForget("trackVoipCallStateChange", {
                stateName
            });
            o("WAWebBackendApi").frontendFireAndForget("setCallState", {
                callState,
                callInfo: i.call_info
            });
            if (callState === o("WAWebVoipWaCallEnums").CallState.CallActive) {
                o("WAWebVoipCameraFingerprintLogging").maybeLogCameraFingerprint(i_call_info.videoEnabled === true, voipStackInterface.type === "web");
                try {
                    const g = i.call_info.callId;
                    Q = g;
                    const h = o("WAWebABProps").getABPropConfigValue("web_voip_dynamic_thread_preallocate_count");
                    const y = o("WAWebVoipGatingUtils").isWebKitBrowser();
                    const C = h > 0 && !y ? h : `disabled(webkit=${String(y)}, count=${h})`;
                    const b = o("WAWebABProps").getABPropConfigValue("enable_web_voip_proxy_and_sctp_workers");
                    const v = true;
                    const S = o("WAWebABProps").getABPropConfigValue("web_calling_perf_optimizations_bitmask");
                    const R = o("WAWebABProps").getABPropConfigValue("web_voip_audio_capture_impl");
                    const L = o("WAWebABProps").getABPropConfigValue("web_voip_audio_playback_impl");
                    o("WALogger").LOG(P || (P = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [CallActive] proxySctp=",
                        " avSync=",
                        " dynFps=",
                        " perfBits=",
                        ""
                    ])), b, true, v, S);
                    o("WALogger").LOG(N || (N = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [CallActive] abprops audioCap=",
                        " audioPlay=",
                        " dynPool=",
                        ""
                    ])), R, L, C);
                    o("WAWebVoipCrashRecovery").markCallActive(g);
                    o("WAWebVoipCrashRecovery").registerGracefulExitHandler(g);
                    o("WAWebVoipFocusTracker").startVoipFocusTracking();
                    o("WAWebBackendApi").frontendFireAndForget("reloadVideoEnhancement", {});
                    if (voipStackInterface.type === "web") {
                        o("WAWebBackendApi").frontendSendAndReceive("initializeVoipWasm").then((e)=>{
                            if (Q === g) {
                                o("WAWebVoipPersistentFS").startPeriodicVoipSync(e);
                            }
                        }).catch((e)=>{
                            o("WALogger").ERROR(M || (M = babelHelpers.taggedTemplateLiteralLoose([
                                "voip: [IDBFS] Failed to start periodic sync"
                            ]))).catching(r("getErrorSafe")(e));
                        });
                    }
                    o("WAWebVoipBrowserMetrics").startBrowserMetrics();
                    o("WAWebVoipWindowMetrics").startWindowMetrics();
                    o("WAWebVoipBatteryDiagnostics").startBatteryDiagnostics();
                    J.callIsActive = true;
                    const E = i_call_info.linkToken != null && i_call_info.linkToken !== "";
                    if (E && i_call_info.videoEnabled && voipStackInterface.type === "web") {
                        voipStackInterface.broadcastVideoState().catch((e)=>{
                            o("WALogger").WARN(w || (w = babelHelpers.taggedTemplateLiteralLoose([
                                "voip: [CallActive] broadcastVideoState for call link failed"
                            ]))).catching(r("getErrorSafe")(e));
                        });
                    }
                    $e().catch((e)=>{
                        const t = r("getErrorSafe")(e);
                        o("WALogger").WARN(A || (A = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: initP2PConnectionIfEnabled failed: ",
                            ""
                        ])), t.message).catching(t);
                    });
                } catch (error) {
                    o("WALogger").WARN(F || (F = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [CallActive] backend setup failed"
                    ]))).catching(r("getErrorSafe")(error));
                }
            }
            const k = o("WAWebVoipCallStateUtils").isCallTerminal(callState);
            if (k && i.call_info.callDuration === 0) {
                o("WAWebVoipHandleNativeCallEventFieldstatsHandlers").requestStoredFieldstatsSend();
            }
            if (callState === o("WAWebVoipWaCallEnums").CallState.CallStateEnding) {
                o("WAWebVoipErrorLogUpload").captureWamCallResult(e);
                o("WAWebVoipP2PConnectionManager").cleanupP2PConnection();
                J.callIsActive = false;
                o("WAWebVoipSctpIceTcpFallback").resetIceTcpFallback();
            }
            if (callState === o("WAWebVoipWaCallEnums").CallState.None) {
                o("WAWebVoipQplHelpers").voipEndCallQplAddPoint(o("WAWebVoipQplHelpers").VoipEndCallQplPoint.CLEANUP_START);
                o("WAWebVoipErrorLogUpload").captureWamCallResult(e);
                const I = Q ?? "unknown";
                Q = null;
                o("WAWebVoipFocusTracker").stopVoipFocusTracking();
                o("WAWebVoipCrashRecovery").clearExitMarkers(I);
                o("WAWebVoipCrashRecovery").unregisterGracefulExitHandler();
                o("WAWebVoipPersistentFS").stopPeriodicVoipSync();
                o("WAWebVoipBrowserMetrics").stopBrowserMetrics();
                o("WAWebVoipWindowMetrics").stopWindowMetrics();
                o("WAWebVoipWebTransportConnectionManager").prepareForEndCall();
                o("WAWebVoipWebTransportConnectionManager").closeAllConnections();
                o("WAWebVoipDtlsCertCallRegistration").endDtlsCertCallForRegisteredCall();
                o("WAWebVoipSctpConnectionManager").cleanupAllConnections();
                o("WAWebVoipGatingUtils").markCurrentCallAsFna(false);
                o("WAWebVoipP2PConnectionManager").cleanupP2PConnection();
                J = Y();
                o("WAWebBackendApi").frontendFireAndForget("cleanupPrewarmedCamera", {});
                o("WAWebBackendApi").frontendFireAndForget("disableAVSync", {});
                o("WAWebBackendApi").frontendFireAndForget("resetVideoEnhancementState", {});
                o("WAWebVoipVideoCameraCapture").WAWebVoipVideoCameraCapture.recordCallEnd();
                o("WAWebVoipVideoCameraCapture").WAWebVoipVideoCameraCapture.scheduleCallEndCameraRelease();
                o("WAWebVoipAudioCaptureBase").scheduleCallEndMicRelease();
                o("WAWebVoipVideoCaptureAndRendering").releaseDesktopStreamJS();
                if (voipStackInterface.type === "web") {
                    o("WAWebVoipHandleNativeCallEventFieldstatsHandlers").syncVoipPersistentFSWithIdleCallback();
                }
                o("WAWebVoipHandleNativeCallEventMediaHandlers").resetWebCodecsEncoderState();
                o("WAWebVoipHandleNativeCallEventCallLinkHandlers").resetCallLinkHandlerState();
                o("WAWebVoipErrorLogUpload").maybeUploadReconnectingLogs();
                o("WAWebVoipErrorLogUpload").maybeUploadErrorLogs();
                o("WAWebVoipQplHelpers").voipEndCallQplAddPoint(o("WAWebVoipQplHelpers").VoipEndCallQplPoint.CLEANUP_END);
                o("WAWebVoipQplHelpers").endVoipEndCallQplSuccess();
            }
        });
        return Re.apply(this, arguments);
    }
    function Le() {
        o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.clearVoipStackUnresponsive();
    }
    function Ee({ participants }) {
        if (participants == null) {
            return null;
        }
        return participants.filter((e)=>e.state === o("WAWebVoipWaCallEnums").CallParticipantState.Connected).length;
    }
    function ke(e) {
        if (e) {
            o("WAWebVoipWebTransportConnectionManager").resolvePendingFastSetupForNewCall(o("WAWebVoipGatingUtils").isWebTransportEnabled());
        }
    }
    function Ie(e, t, n) {
        if (e) {
            o("WAWebVoipWebTransportCallSummary").resetWtCurrentCallActivity(n, t === o("WAWebVoipWaCallEnums").CallState.None);
            o("WAWebVoipWebTransportCallSummary").recordWtCallEligibility(o("WAWebVoipGatingUtils").isWebTransportConfigured(), o("WAWebVoipGatingUtils").isWebTransportEnabled());
            return;
        }
        if (n != null) {
            o("WAWebVoipWebTransportCallSummary").updateWtCurrentCallId(n);
        }
    }
    function Te(e) {
        return De.apply(this, arguments);
    }
    function De() {
        De = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const n = r("nullthrows")(o("WAWebVoipStackInterface").getCachedVoipStackInterface() ?? (yield o("WAWebVoipStackInterface").getVoipStackInterface()));
            const a = n.parsers.parseRelayListUpdateData(e);
            const i = a.relays.some((e)=>e.addresses.some((e)=>e.port === 3478 || e.port_v6 === 3478));
            if (i) {
                o("WAWebCoreActionsODS").logCallRelayPort3478();
            }
            if (o("WAWebVoipGatingUtils").isWebTransportEnabled()) {
                o("WAWebVoipWebTransportConnectionManager").handleRelayListUpdate(a);
                if (o("WAWebVoipGatingUtils").isWebTransportEnabled() && o("WAWebVoipGatingUtils").isWebTransportFastSetupEnabled()) {
                    o("WAWebVoipSctpConnectionManager").handleRelayListUpdate(a, {
                        connectionLimit,
                        webTransportWarmStandby: true
                    }).catch((e)=>{
                        o("WALogger").ERROR(O || (O = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [WebTransport] SCTP warm standby setup failed"
                        ]))).catching(r("getErrorSafe")(e));
                    });
                }
            } else {
                o("WAWebVoipTransportFallbackTracker").markFallbackSctpStarted();
                yield o("WAWebVoipSctpConnectionManager").handleRelayListUpdate(a);
            }
            J.cachedRelayListData = a;
            J.relayListReceived = true;
            $e().catch((e)=>{
                const t = r("getErrorSafe")(e);
                o("WALogger").WARN(B || (B = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: initP2PConnectionIfEnabled failed: ",
                    ""
                ])), t.message).catching(t);
            });
        });
        return De.apply(this, arguments);
    }
    function xe() {
        if (J.initStarted) {
            o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                "voip: peer ICE restart detected, rebuilding P2P connection"
            ])));
            o("WAWebVoipP2PConnectionManager").cleanupP2PConnection();
            J.initStarted = false;
            $e().catch((e)=>{
                const t = r("getErrorSafe")(e);
                o("WALogger").WARN(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: P2P re-init after peer ICE restart failed: ",
                    ""
                ])), t.message).catching(t);
            });
        }
    }
    function $e() {
        return Pe.apply(this, arguments);
    }
    function Pe() {
        Pe = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (!(J.initStarted || !J.callIsActive || !J.relayListReceived)) {
                J.initStarted = true;
                try {
                    yield Ne();
                } catch (error) {
                    J.initStarted = false;
                    throw error;
                }
            }
        });
        return Pe.apply(this, arguments);
    }
    function Ne() {
        return Me.apply(this, arguments);
    }
    function Me() {
        Me = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = r("nullthrows")((yield o("WAWebVoipStackInterface").getVoipStackInterface()));
            if (e.type === "web") {
                o("WAWebBackendApi").frontendFireAndForget("trackVoipActivity", {
                    activity: "get_call_info",
                    details: "p2p_init"
                });
                const t = yield e.getCallInfo();
                if (t === "") {
                    o("WALogger").LOG(W || (W = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: initP2PConnectionIfEnabled: Failed to get call info"
                    ])));
                    J.initStarted = false;
                    return;
                }
                const n = e.parsers.parseCallInfo(t);
                if (n.isGroupCall) {
                    J.initStarted = false;
                    return;
                }
                const { callId, isCaller } = n;
                yield o("WAWebVoipP2PConnectionManager").refreshP2PEnablement(callId);
                if (!o("WAWebVoipP2PConnectionManager").isP2PEnabled()) {
                    o("WALogger").LOG(q || (q = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: initP2PConnectionIfEnabled: P2P disabled for callId=",
                        ""
                    ])), callId);
                    return;
                }
                const l = n.participants.find((e)=>e.isSelf !== true);
                const s = l?.devicePlatform === o("WAWebVoipWaCallEnums").ClientPlatform.Web;
                if (!isCaller && n.peerJid != null && (yield o("WAWebVoipContactUtils").isCallerNotContact(n.peerJid))) {
                    o("WALogger").LOG(U || (U = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: initP2PConnectionIfEnabled: non-contact, P2P gated ",
                        ""
                    ])), callId);
                    return;
                }
                if (!J.callIsActive) {
                    J.initStarted = false;
                    return;
                }
                o("WALogger").LOG(V || (V = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: initP2PConnectionIfEnabled: callId=",
                    ", isCaller=",
                    ", isPeerWebBrowser=",
                    ""
                ])), callId, String(isCaller), String(s));
                const u = function(n, i, l, s, u) {
                    e.sendWebP2PTransport(callId, n, i, l, s, u).catch((e)=>{
                        o("WALogger").ERROR(H || (H = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: sendWebP2PTransport failed"
                        ]))).catching(r("getErrorSafe")(e));
                    });
                };
                const c = 10;
                const d = new Set;
                if (J.cachedRelayListData == null) {
                    o("WALogger").ERROR(G || (G = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: initP2PConnectionIfEnabled: cachedRelayListData null"
                    ])));
                    return;
                }
                const m = J.cachedRelayListData;
                for (const p of m.relays){
                    if (d.size >= c) {
                        break;
                    }
                    for (const _ of p.addresses){
                        if (d.size >= c) {
                            break;
                        }
                        if (_.ipv4 != null && _.port != null) {
                            d.add(`stun:${_.ipv4}:${_.port}`);
                        }
                        if (d.size < c && _.ipv6 != null && _.port_v6 != null) {
                            d.add(`stun:[${_.ipv6}]:${_.port_v6}`);
                        }
                    }
                }
                const f = Array.from(d, function(urls) {
                    return {
                        urls
                    };
                });
                o("WAWebVoipP2PConnectionManager").registerOnPeerIceRestart(xe);
                yield o("WAWebVoipP2PConnectionManager").initP2PConnection(isCaller, s, f, u);
            }
        });
        return Me.apply(this, arguments);
    }
    l.requestStoredFieldstatsSend = o("WAWebVoipHandleNativeCallEventFieldstatsHandlers").requestStoredFieldstatsSend;
    l.sendStoredFieldstats = o("WAWebVoipHandleNativeCallEventFieldstatsHandlers").sendStoredFieldstats;
    l.handleWAWebVoipNativeCallEvent = me;
}, 98);