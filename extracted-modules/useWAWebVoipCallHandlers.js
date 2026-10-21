__d("useWAWebVoipCallHandlers", [
    "Promise",
    "WALogger",
    "WAWebABProps",
    "WAWebAvUpgradeBannerState",
    "WAWebCallCollection",
    "WAWebCallRingtone",
    "WAWebCallUserJourneyInCallAction",
    "WAWebCallUserJourneyLogger",
    "WAWebCoreActionsODS",
    "WAWebGuidePopup.react",
    "WAWebModalManager",
    "WAWebNoop",
    "WAWebNotificationsCallNotification",
    "WAWebPipController",
    "WAWebReleaseToEventLoop",
    "WAWebUserPrefsMeUser",
    "WAWebVoipAcquireMediaStream",
    "WAWebVoipActivityTracker",
    "WAWebVoipAigcGating",
    "WAWebVoipBlockedCameraDialog",
    "WAWebVoipBlockedMicrophoneDialog",
    "WAWebVoipBlockedMicrophoneJoinState",
    "WAWebVoipCallAudioUnlock",
    "WAWebVoipCallStateUtils",
    "WAWebVoipCameraPermissionDeniedGuide.react",
    "WAWebVoipEventConstants",
    "WAWebVoipIncomingCallUiActionStore",
    "WAWebVoipJoinDeviceRecovery",
    "WAWebVoipJoinWithoutCamera",
    "WAWebVoipLocalVideoPolicy",
    "WAWebVoipMicrophonePermissionDeniedGuide.react",
    "WAWebVoipMicrophoneToggleRequest",
    "WAWebVoipPopoutWindowState",
    "WAWebVoipRecoverMicrophone",
    "WAWebVoipRecoveryJoinLog",
    "WAWebVoipSignalingEnums",
    "WAWebVoipStackInterface",
    "WAWebVoipUiManager",
    "WAWebVoipUiPopoutWindowPortalContainer.react",
    "WAWebVoipUiVideoCallLoadable",
    "WAWebVoipUiVideoGroupCallLoadable",
    "WAWebVoipVideoStateUtils",
    "WAWebVoipWaCallEnums",
    "WAWebWamEnumIncomingCallUiActionType",
    "WAWebWamEnumLobbyEntryPointType",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
    "nullthrows",
    "react",
    "useWAWebVoipModalManager"
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
    const I = k || (k = o("react"));
    const T = k;
    const { useCallback, useRef, useState } = T;
    const P = 670007;
    const N = 670020;
    const M = 60000;
    function w(e, t, n, r, o) {
        return A.apply(this, arguments);
    }
    function A() {
        A = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n, a, i) {
            if (!a()) {
                return false;
            }
            const l = r("nullthrows")((yield o("WAWebVoipStackInterface").getVoipStackInterface()));
            if (!a()) {
                return false;
            }
            if (l.type === "web") {
                if (i && (yield B(l.setCallMute), !a())) {
                    return false;
                }
                yield l.acceptCall(e, t, n);
                return true;
            }
            throw r("err")(`voip: UI: accept click: Unexpected voip stack type: ${l.type}`);
        });
        return A.apply(this, arguments);
    }
    function F({ isDocPip, isRecoveryCurrent, isUnmuting, popoutWindowEl }) {
        if (isUnmuting && isRecoveryCurrent()) {
            return o("WAWebVoipRecoverMicrophone").startMicrophoneRequestInGesture(isDocPip ? null : popoutWindowEl);
        }
        return null;
    }
    function O(e) {
        if (e === o("WAWebWamEnumIncomingCallUiActionType").INCOMING_CALL_UI_ACTION_TYPE.INCOMING_CALL_NOTIFICATION_ANSWER) {
            return o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE.NOTIFICATION_BUTTON;
        }
        return null;
    }
    function B(e) {
        return W.apply(this, arguments);
    }
    function W() {
        W = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield e(true);
            if (t !== 0) {
                o("WALogger").WARN(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: UI: muting before accepting without a microphone failed with status: ",
                    ""
                ])), t);
            }
        });
        return W.apply(this, arguments);
    }
    function q(e) {
        return o("WAWebVoipCallStateUtils").isCallIncoming(e) || e === o("WAWebVoipWaCallEnums").CallState.Rejoining;
    }
    function U(e) {
        return V.apply(this, arguments);
    }
    function V() {
        V = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (!e()) {
                return false;
            }
            const t = r("nullthrows")((yield o("WAWebVoipStackInterface").getVoipStackInterface()));
            if (!e()) {
                return false;
            }
            if (t.type === "web") {
                yield t.rejectCall();
                return true;
            }
            throw r("err")(`voip: UI: reject click: Unexpected voip stack type: ${t.type}`);
        });
        return V.apply(this, arguments);
    }
    function H(e, t) {
        return G.apply(this, arguments);
    }
    function G() {
        G = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = yield z(e, t);
            if (!n.canAcceptCall || t == null || e.microphone || !o("WAWebVoipBlockedMicrophoneJoinState").isMutedForBlockedMicrophone(t.id)) {
                return n;
            }
            const r = yield o("WAWebVoipJoinDeviceRecovery").getAllowedWhileRingingRecorder(t);
            if (r == null) {
                return n;
            }
            return babelHelpers.extends({}, n, {
                afterAccept: function() {
                    n.afterAccept();
                    r();
                }
            });
        });
        return G.apply(this, arguments);
    }
    function z(e, t) {
        return j.apply(this, arguments);
    }
    function j() {
        j = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const r = yield o("WAWebVoipJoinDeviceRecovery").getDeviceRecoveryJoin(e, t);
            const { join, offersPermissionButton } = r;
            if (join != null) {
                if (!join.acceptMuted) {
                    o("WAWebVoipCallAudioUnlock").releaseCallAudioUnlock();
                }
                return babelHelpers.extends({}, join, {
                    canAcceptCall: true
                });
            }
            let l = null;
            const s = K(t);
            const u = yield Q(e, t, (()=>{
                const r = n("asyncToGeneratorRuntime").asyncToGenerator(function*(n) {
                    const r = n === "unavailable";
                    l = o("WAWebVoipJoinDeviceRecovery").getRefusedPromptJoin(e, t, r, offersPermissionButton);
                    const a = yield l;
                    return r || a == null || a.waitsForGuideClick;
                });
                return function(e) {
                    return r.apply(this, arguments);
                };
            })(), s.confirm);
            if (u.canAcceptCall) {
                o("WAWebVoipCallAudioUnlock").releaseCallAudioUnlock();
                return u;
            }
            const c = yield l;
            if (c == null || c.waitsForGuideClick && !(yield s.wait())) {
                o("WAWebVoipCallAudioUnlock").releaseCallAudioUnlock();
                return u;
            }
            return {
                acceptMuted: c.acceptMuted,
                acceptWithoutCamera: c.acceptWithoutCamera,
                afterAccept: c.afterAccept,
                canAcceptCall: true
            };
        });
        return j.apply(this, arguments);
    }
    function K(t) {
        let a = null;
        const i = o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallCollectionEvents.ACTIVE_CALL);
        return {
            confirm: function() {
                const e = a;
                if (e != null) {
                    e(true, "confirmed");
                    o("WAWebVoipCallAudioUnlock").startCallAudioInClick();
                }
            },
            wait: function() {
                return new (E || (E = n("Promise")))(function(n) {
                    const l = function() {
                        return a?.(false, "closed");
                    };
                    const s = function() {
                        if (r("WAWebCallCollection").activeCall !== t) {
                            if (a != null) {
                                a(false, "the call moved on");
                            }
                        }
                    };
                    const u = self.setTimeout(function() {
                        return a?.(false, "not answered in time");
                    }, M);
                    o("WAWebModalManager").ModalManager.on("open_modal", l);
                    o("WAWebModalManager").ModalManager.on("close_modal", l);
                    r("WAWebCallCollection").on(i, s);
                    a = function(c, d) {
                        a = null;
                        self.clearTimeout(u);
                        o("WAWebModalManager").ModalManager.off("open_modal", l);
                        o("WAWebModalManager").ModalManager.off("close_modal", l);
                        r("WAWebCallCollection").off(i, s);
                        o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: UI: guide for joining without a microphone ",
                            ""
                        ])), d);
                        n(c);
                    };
                });
            }
        };
    }
    function Q(e, t, n, r) {
        return X.apply(this, arguments);
    }
    function X() {
        X = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, shouldOpenFailureGuide, onFailureGuideConfirm) {
            const i = {
                onFailureGuideConfirm,
                shouldOpenFailureGuide
            };
            if (!e.camera) {
                return {
                    acceptMuted: false,
                    acceptWithoutCamera: false,
                    afterAccept: r("WAWebNoop"),
                    canAcceptCall: yield o("WAWebVoipAcquireMediaStream").checkVoipDevicePermissions(false, t, undefined, i)
                };
            }
            const l = yield o("WAWebVoipAcquireMediaStream").queryPermissionStatus(true);
            const l_cameraPermission = l.cameraPermission;
            if (l_cameraPermission === "denied") {
                o("WALogger").LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: UI: camera permission denied, accepting video call audio-only"
                ])));
                return {
                    acceptMuted: false,
                    acceptWithoutCamera: true,
                    afterAccept: r("WAWebNoop"),
                    canAcceptCall: yield o("WAWebVoipAcquireMediaStream").checkVoipDevicePermissions(false, t, undefined, i)
                };
            }
            return {
                acceptMuted: false,
                acceptWithoutCamera: false,
                afterAccept: r("WAWebNoop"),
                canAcceptCall: yield o("WAWebVoipAcquireMediaStream").checkVoipDevicePermissions(true, t, undefined, i)
            };
        });
        return X.apply(this, arguments);
    }
    function Y(e) {
        return J.apply(this, arguments);
    }
    function J() {
        J = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ canOfferDialog, closeModal, isDocPip, logContext, openModal, popoutWindowEl, turnCameraOn }) {
            const c = o("WAWebABProps").getABPropConfigValue("enable_web_voip_virtual_video_capture_driver") === true;
            if (c) {
                return false;
            }
            const d = yield o("WAWebVoipAcquireMediaStream").queryPermissionStatus(true);
            const d_cameraPermission = d.cameraPermission;
            if (d_cameraPermission === "denied") {
                o("WALogger").LOG(C || (C = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [",
                    "] Camera permission denied, asking for it"
                ])), logContext);
                const showGuide = function() {
                    const Component = r("WAWebVoipCameraPermissionDeniedGuide.react");
                    return openModal(<Component onConfirm={closeModal}/>);
                };
                if (canOfferDialog) {
                    o("WAWebVoipBlockedCameraDialog").showBlockedCameraDialog({
                        closeModal,
                        openModal
                    }, {
                        isDocPip,
                        showGuide,
                        turnCameraOn
                    });
                } else {
                    showGuide();
                }
                return true;
            }
            if (d_cameraPermission === "prompt" && isDocPip) {
                o("WAWebVoipPopoutWindowState").focusMainWindowForMediaPrompt(popoutWindowEl, logContext, "camera");
            }
            return false;
        });
        return J.apply(this, arguments);
    }
    function useZ({ currentBannerJid, isDocPip, isMuted, isVideoCall, isVideoMuted, popoutWindowEl }) {
        const y = r("useWAWebVoipModalManager")();
        const { closeModal, openModal } = y;
        const vRef = useRef(false);
        const S = useState(false);
        const isAccepting = S[0];
        const L = S[1];
        const handleBannerAccept = useCallback(function() {
            if (currentBannerJid != null) {
                const e = currentBannerJid;
                n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    const t = r("nullthrows")((yield o("WAWebVoipStackInterface").getVoipStackInterface()));
                    if (t.type === "web") {
                        const n = yield t.acceptPeerVideo({
                            jid: e.toString()
                        });
                        if (n === 0) {
                            r("WAWebAvUpgradeBannerState").removeBannerForJid(e);
                        } else {
                            o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                                "voip: UI: acceptPeerVideo failed with status: ",
                                ""
                            ])), n);
                        }
                    } else {
                        throw r("err")(`voip: UI: acceptPeerVideo not available for ${t.type}`);
                    }
                })();
            }
        }, [
            currentBannerJid
        ]);
        const handleBannerIgnore = useCallback(function() {
            if (currentBannerJid != null) {
                r("WAWebAvUpgradeBannerState").removeBannerForJid(currentBannerJid);
            }
        }, [
            currentBannerJid
        ]);
        const handleClickAccept = useCallback((()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                if (!vRef.current) {
                    vRef.current = true;
                    L(true);
                    try {
                        o("WAWebVoipActivityTracker").trackUiActivity(o("WAWebVoipActivityTracker").VoipUiActivity.CONTROL_PANEL_ACCEPT_CALL_CLICK);
                        const t = r("WAWebCallCollection").activeCall;
                        if (t != null && o("WAWebVoipAigcGating").showAigcUnsupportedDialogIfNeeded(t.isBotGroupCall, t.isVideo)) {
                            vRef.current = false;
                            return;
                        }
                        o("WAWebCallRingtone").stopCallRingtone();
                        const a = q(t?.getState()) ? e : null;
                        if (!isMuted && o("WAWebABProps").getABPropConfigValue("enable_web_voip_eager_mic_acquire") === true) {
                            o("WAWebVoipAcquireMediaStream").earlyAcquireMic();
                        }
                        o("WAWebVoipCallAudioUnlock").prepareCallAudioElement();
                        const s = yield H({
                            camera: isVideoCall && !isVideoMuted,
                            microphone: !isMuted
                        }, t);
                        const { acceptMuted, acceptWithoutCamera, afterAccept, canAcceptCall } = s;
                        if (!canAcceptCall) {
                            o("WAWebVoipAcquireMediaStream").cleanupEarlyAcquiredMic();
                            const y = yield U(function() {
                                return r("WAWebCallCollection").activeCall === t;
                            });
                            if (!y) {
                                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                                    "voip: UI: active call changed during the media permission check, skipping stale reject"
                                ])));
                                vRef.current = false;
                                return;
                            }
                            o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                                "voip: UI: media permissions not acquired, rejected call instead of accepting"
                            ])));
                            vRef.current = false;
                            return;
                        }
                        if (isVideoCall) {
                            const C = t?.groupJid != null;
                            const b = C ? [
                                o("WAWebVoipUiVideoGroupCallLoadable").requireBundle(),
                                o("WAWebVoipUiVideoCallLoadable").requireBundle()
                            ] : [
                                o("WAWebVoipUiVideoCallLoadable").requireBundle()
                            ];
                            try {
                                yield (E || (E = n("Promise"))).all(b);
                            } catch (error) {
                                o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                                    "voip: UI: video UI bundle preload before acceptCall failed, proceeding anyway"
                                ]))).catching(r("getErrorSafe")(error)).sendLogs("voip-accept-bundle-preload-fail");
                            }
                        }
                        const S = yield w(!isMuted, !isVideoMuted && !acceptWithoutCamera, O(a), function() {
                            return r("WAWebCallCollection").activeCall === t;
                        }, acceptMuted);
                        if (!S) {
                            o("WAWebVoipAcquireMediaStream").cleanupEarlyAcquiredMic();
                            vRef.current = false;
                            o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                                "voip: UI: active call changed before acceptCall, skipping stale accept"
                            ])));
                            return;
                        }
                        afterAccept();
                        o("WAWebCoreActionsODS").logCallIncomingAccept();
                        if (a != null) {
                            o("WAWebVoipIncomingCallUiActionStore").setIncomingCallUiAction(a);
                        }
                        if (isVideoCall && o("WAWebABProps").getABPropConfigValue("web_calling_auto_popout_video") && !o("WAWebVoipUiPopoutWindowPortalContainer.react").getIsCallActiveInPopoutWindow()) {
                            o("WAWebReleaseToEventLoop").releaseToEventLoop().then(()=>{
                                o("WAWebVoipUiManager").openVoipUiPopoutWindow();
                            });
                        }
                    } catch (error) {
                        o("WAWebVoipAcquireMediaStream").cleanupEarlyAcquiredMic();
                        vRef.current = false;
                        throw error;
                    } finally{
                        L(false);
                    }
                }
            });
            return function(t) {
                return e.apply(this, arguments);
            };
        })(), [
            isMuted,
            isVideoCall,
            isVideoMuted
        ]);
        const handleClickReject = useCallback((()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                if (!vRef.current) {
                    vRef.current = true;
                    let t = false;
                    try {
                        o("WAWebVoipActivityTracker").trackUiActivity(o("WAWebVoipActivityTracker").VoipUiActivity.CONTROL_PANEL_REJECT_CALL_CLICK);
                        const n = r("WAWebCallCollection").activeCall;
                        if (n != null) {
                            n.userEndedCall = true;
                        }
                        const a = q(n?.getState()) ? e : null;
                        if (a != null) {
                            o("WAWebVoipIncomingCallUiActionStore").setIncomingCallUiAction(a);
                            t = true;
                        }
                        const i = yield U(function() {
                            return r("WAWebCallCollection").activeCall === n;
                        });
                        if (!i) {
                            if (t) {
                                o("WAWebVoipIncomingCallUiActionStore").resetIncomingCallUiAction();
                            }
                            if (r("WAWebCallCollection").activeCall == null) {
                                r("WAWebPipController").closePiP();
                            }
                            o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                                "voip: UI: active call changed while loading the stack, skipping stale reject"
                            ])));
                            vRef.current = false;
                            return;
                        }
                        o("WAWebCoreActionsODS").logCallIncomingDecline();
                        r("WAWebPipController").closePiP();
                    } catch (error) {
                        if (t) {
                            o("WAWebVoipIncomingCallUiActionStore").resetIncomingCallUiAction();
                        }
                        vRef.current = false;
                        throw error;
                    }
                }
            });
            return function(t) {
                return e.apply(this, arguments);
            };
        })(), []);
        const handleClickDismiss = useCallback(function() {
            if (!vRef.current) {
                vRef.current = true;
                o("WAWebVoipActivityTracker").trackUiActivity(o("WAWebVoipActivityTracker").VoipUiActivity.CONTROL_PANEL_DISMISS_CALL_CLICK);
                if (o("WAWebVoipUiManager").markIncomingMiniPlayerDismissed()) {
                    o("WAWebCoreActionsODS").logCallIncomingDismiss();
                }
                const t = r("WAWebCallCollection").activeCall?.peerJid;
                if (t != null) {
                    o("WAWebNotificationsCallNotification").silenceCallNotification(t);
                } else {
                    o("WAWebCallRingtone").stopCallRingtone();
                }
                o("WAWebVoipUiManager").stopIncomingCallTitleFlash();
                r("WAWebPipController").closePiP();
            }
        }, []);
        const handleClickEnd = useCallback((()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e = o("WAWebVoipSignalingEnums").EndCallReason.Self) {
                if (e === o("WAWebVoipSignalingEnums").EndCallReason.Self) {
                    o("WAWebCallUserJourneyInCallAction").logInCallAction(o("WAWebCallUserJourneyLogger").PARITY_CALL_ACTION_TYPE.END_CALL);
                }
                o("WAWebVoipActivityTracker").trackUiActivity(o("WAWebVoipActivityTracker").VoipUiActivity.CONTROL_PANEL_END_CALL_CLICK);
                const activeCall = r("WAWebCallCollection").activeCall;
                if (activeCall != null) {
                    activeCall.userEndedCall = true;
                }
                o("WAWebVoipRecoveryJoinLog").logEndAfterRecoveryJoin(activeCall, e);
                const n = r("nullthrows")((yield o("WAWebVoipStackInterface").getVoipStackInterface()));
                if (n.type === "web") {
                    yield n.endCall(e, true);
                } else {
                    throw r("err")(`voip: UI: end click: Unexpected voip stack type: ${n.type}`);
                }
            });
            return function(t) {
                return e.apply(this, arguments);
            };
        })(), []);
        const handleMuteToggle = useCallback((()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const activeCall = r("WAWebCallCollection").activeCall;
                const n = !isMuted;
                const l = !n;
                o("WAWebVoipActivityTracker").trackUiActivity(n ? o("WAWebVoipActivityTracker").VoipUiActivity.USER_MUTE_MIC : o("WAWebVoipActivityTracker").VoipUiActivity.USER_UNMUTE_MIC);
                const s = o("WAWebVoipMicrophoneToggleRequest").beginMicrophoneToggleRequest({
                    isOwnerCurrent: function() {
                        return r("WAWebCallCollection").activeCall === activeCall;
                    },
                    isUnmuting: l
                });
                if (s != null) {
                    const isToggleCurrent = s.isCurrent;
                    const c = function() {
                        return isToggleCurrent() && activeCall != null && o("WAWebVoipCallStateUtils").isCallConnected(activeCall.getState());
                    };
                    let microphoneRequest = null;
                    try {
                        microphoneRequest = F({
                            isDocPip,
                            isRecoveryCurrent: c,
                            isUnmuting: l,
                            popoutWindowEl
                        });
                        if (e === "in_call") {
                            o("WAWebCallUserJourneyInCallAction").logInCallAction(n ? o("WAWebCallUserJourneyLogger").PARITY_CALL_ACTION_TYPE.TAP_MUTE : o("WAWebCallUserJourneyLogger").PARITY_CALL_ACTION_TYPE.TAP_UNMUTE);
                        }
                        const m = yield ne({
                            isDocPip,
                            isRecoveryCurrent: c,
                            isToggleCurrent,
                            isUnmuting: l,
                            microphoneRequest,
                            popoutWindowEl
                        });
                        if (m.result === "permission_denied_in_main_window") {
                            IeComponent((e)=>o("WAWebModalManager").ModalManager.open(e), o("WAWebModalManager").closeModalManager);
                            return;
                        }
                        if (m.result === "permission_denied" || m.result === "permission_denied_at_prompt") {
                            yield pe({
                                activeCall,
                                isBlockedAtPrompt: m.result === "permission_denied_at_prompt",
                                isDocPip,
                                modalManager: {
                                    closeModal,
                                    openModal
                                }
                            });
                            return;
                        }
                        if (m.result !== "ready") {
                            return;
                        }
                        fe(activeCall, e, n);
                        yield le(n, m.isActionCurrent);
                    } finally{
                        microphoneRequest?.release();
                        s.finish();
                    }
                }
            });
            return function(t) {
                return e.apply(this, arguments);
            };
        })(), [
            closeModal,
            isDocPip,
            isMuted,
            openModal,
            popoutWindowEl
        ]);
        const handleVideoMuteToggle = useCallback((()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                if (!(isVideoMuted && !o("WAWebVoipLocalVideoPolicy").isLocalVideoAllowed())) {
                    if (e === "in_call") {
                        o("WAWebCallUserJourneyInCallAction").logInCallAction(isVideoMuted ? o("WAWebCallUserJourneyLogger").PARITY_CALL_ACTION_TYPE.TURN_ON_CAMERA : o("WAWebCallUserJourneyLogger").PARITY_CALL_ACTION_TYPE.TURN_OFF_CAMERA);
                    }
                    const canOfferDialog = e !== "auto";
                    const n = r("nullthrows")((yield o("WAWebVoipStackInterface").getVoipStackInterface()));
                    if (n.type === "web") {
                        const i = r("WAWebCallCollection").activeCall;
                        o("WAWebVoipJoinWithoutCamera").clearJoinWithoutCamera(i?.id);
                        const l = i && !i.isVideo && isVideoMuted && o("WAWebVoipVideoStateUtils").isVideoStateInactiveForCallMode(i.selfVideoState);
                        if (l === true) {
                            const turnCameraOn = function() {
                                return ue(function() {
                                    return n.requestVideoUpgrade();
                                }, {
                                    closeModal,
                                    openModal
                                });
                            };
                            if (yield Y({
                                canOfferDialog,
                                closeModal,
                                isDocPip,
                                logContext: "A/V switch",
                                openModal,
                                popoutWindowEl,
                                turnCameraOn
                            })) {
                                return;
                            }
                            yield turnCameraOn();
                        } else {
                            const u = !isVideoMuted;
                            const c = (t)=>de(function(e) {
                                    return n.setCallVideoMute(e);
                                }, t);
                            if (!u && (yield Y({
                                canOfferDialog,
                                closeModal,
                                isDocPip,
                                logContext: "video toggle",
                                openModal,
                                popoutWindowEl,
                                turnCameraOn: function() {
                                    return c(false);
                                }
                            }))) {
                                return;
                            }
                            yield c(u);
                        }
                    } else {
                        throw r("err")(`voip: UI: video mute toggle: setCallVideoMute not available for
          ${n.type}`);
                    }
                }
            });
            return function(t) {
                return e.apply(this, arguments);
            };
        })(), [
            closeModal,
            isDocPip,
            isVideoMuted,
            openModal,
            popoutWindowEl
        ]);
        const handleRaiseHandToggle = useCallback((()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                o("WAWebVoipActivityTracker").trackUiActivity(o("WAWebVoipActivityTracker").VoipUiActivity.CONTROL_PANEL_RAISE_HAND_CLICK);
                const t = r("nullthrows")((yield o("WAWebVoipStackInterface").getVoipStackInterface()));
                if (t.type === "web") {
                    const n = r("WAWebCallCollection").activeCall;
                    if (n != null) {
                        const a = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow();
                        const i = n.isHandRaisedForParticipant(a);
                        const l = !i;
                        o("WAWebCallUserJourneyInCallAction").logInCallAction(l ? o("WAWebCallUserJourneyLogger").PARITY_CALL_ACTION_TYPE.TAP_RAISE_HAND : o("WAWebCallUserJourneyLogger").PARITY_CALL_ACTION_TYPE.TAP_LOWER_HAND, e);
                        try {
                            yield t.raiseHand(l);
                        } catch (error) {
                            o("WALogger").WARN(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                                "voip: UI: raise hand toggle failed: ",
                                ""
                            ])), String(error));
                        }
                    }
                }
            });
            return function(t) {
                return e.apply(this, arguments);
            };
        })(), []);
        const handleReactionSelect = useCallback((()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
                o("WAWebCallUserJourneyInCallAction").logInCallAction(o("WAWebCallUserJourneyLogger").PARITY_CALL_ACTION_TYPE.TAP_REACTION, t);
                o("WAWebVoipActivityTracker").trackUiActivity(o("WAWebVoipActivityTracker").VoipUiActivity.CONTROL_PANEL_REACTIONS_CLICK);
                let n = e;
                const activeCall = r("WAWebCallCollection").activeCall;
                if (activeCall != null) {
                    try {
                        const i = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow();
                        const l = activeCall.getReactionForParticipant(i);
                        n = l === e ? "" : e;
                    } catch (error) {
                        o("WALogger").WARN(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: UI: reaction select: failed to resolve self reaction: ",
                            ""
                        ])), String(error));
                    }
                }
                const s = r("nullthrows")((yield o("WAWebVoipStackInterface").getVoipStackInterface()));
                if (s.type === "web") {
                    yield s.sendReaction(n);
                } else {
                    throw r("err")(`voip: UI: reaction select: sendReaction not available for ${s.type}`);
                }
            });
            return function(t, n) {
                return e.apply(this, arguments);
            };
        })(), []);
        const handleAutoUnmute = useCallback(function() {
            return handleMuteToggle("auto");
        }, [
            handleMuteToggle
        ]);
        return {
            handleAutoUnmute,
            handleBannerAccept,
            handleBannerIgnore,
            handleClickAccept,
            handleClickDismiss,
            handleClickEnd,
            handleClickReject,
            handleMuteToggle,
            handleRaiseHandToggle,
            handleReactionSelect,
            handleVideoMuteToggle,
            isAccepting
        };
    }
    function ee(e) {
        return te.apply(this, arguments);
    }
    function te() {
        te = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = o("WAWebVoipStackInterface").getCachedVoipStackInterface();
            const n = t ?? r("nullthrows")((yield o("WAWebVoipStackInterface").getVoipStackInterface()));
            if (!e()) {
                o("WALogger").LOG(b || (b = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [mute toggle] request became stale while loading the VoIP stack"
                ])));
                return false;
            }
            if (n.type !== "web") {
                throw r("err")(`voip: UI: mute toggle: microphone recovery not available for ${n.type} stack`);
            }
            return true;
        });
        return te.apply(this, arguments);
    }
    function ne(e) {
        return re.apply(this, arguments);
    }
    function re() {
        re = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ isDocPip, isRecoveryCurrent, isToggleCurrent, isUnmuting, microphoneRequest, popoutWindowEl }) {
            if (!isUnmuting) {
                return {
                    isActionCurrent: isToggleCurrent,
                    result: "ready"
                };
            }
            const l = isRecoveryCurrent();
            if (!(yield ee(isToggleCurrent))) {
                return {
                    isActionCurrent: isToggleCurrent,
                    result: "cancelled"
                };
            }
            const shouldRecoverMicrophone = l || isRecoveryCurrent();
            return {
                isActionCurrent: shouldRecoverMicrophone ? isRecoveryCurrent : isToggleCurrent,
                result: yield oe({
                    isDocPip,
                    isRecoveryCurrent,
                    isToggleCurrent,
                    microphoneRequest,
                    popoutWindowEl,
                    shouldRecoverMicrophone
                })
            };
        });
        return re.apply(this, arguments);
    }
    function oe(e) {
        return ae.apply(this, arguments);
    }
    function ae() {
        ae = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ isDocPip, isRecoveryCurrent, isToggleCurrent, microphoneRequest, popoutWindowEl, shouldRecoverMicrophone }) {
            if (shouldRecoverMicrophone) {
                let didPrompt = false;
                let didFocusMainWindow = false;
                const c = yield o("WAWebVoipRecoverMicrophone").prepareMicrophoneForUnmute({
                    isCallCurrent: isRecoveryCurrent,
                    microphoneRequest,
                    onPermissionPrompt: function() {
                        didPrompt = true;
                        if (isDocPip) {
                            didFocusMainWindow = o("WAWebVoipPopoutWindowState").focusMainWindowForMediaPrompt(popoutWindowEl, "mute toggle", "microphone");
                        }
                    },
                    targetWindow: isDocPip ? null : popoutWindowEl
                });
                if (isToggleCurrent()) {
                    if (c === "permission_denied") {
                        return ge({
                            didFocusMainWindow,
                            didPrompt,
                            isDocPip
                        });
                    }
                    if (c !== "ready") {
                        return "cancelled";
                    }
                    return "ready";
                }
                return "cancelled";
            }
            const d = yield o("WAWebVoipAcquireMediaStream").queryPermissionStatus(false);
            const d_micPermission = d.micPermission;
            if (isToggleCurrent()) {
                if (d_micPermission === "denied") {
                    return "permission_denied";
                }
                if (d_micPermission === "prompt" && isDocPip) {
                    o("WAWebVoipPopoutWindowState").focusMainWindowForMediaPrompt(popoutWindowEl, "mute toggle", "microphone");
                }
                return "ready";
            }
            return "cancelled";
        });
        return ae.apply(this, arguments);
    }
    function IeComponent(e, t) {
        const Component = r("WAWebVoipMicrophonePermissionDeniedGuide.react");
        e(<Component onConfirm={t}/>);
        o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [mute toggle] Mic permission denied, showing guide popup"
        ])));
    }
    function le(e, t) {
        return se.apply(this, arguments);
    }
    function se() {
        se = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = r("nullthrows")((yield o("WAWebVoipStackInterface").getVoipStackInterface()));
            if (!t()) {
                o("WALogger").LOG(v || (v = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [mute toggle] request became stale while loading the VoIP stack"
                ])));
                return;
            }
            if (n.type !== "web") {
                throw r("err")(`voip: UI: mute toggle: setCallMute not available for ${n.type}`);
            }
            const a = yield n.setCallMute(e);
            if (a !== 0) {
                o("WALogger").WARN(S || (S = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: setCallMute failed with status: ",
                    ""
                ])), a);
            }
        });
        return se.apply(this, arguments);
    }
    function ue(e, t) {
        return ce.apply(this, arguments);
    }
    function ce() {
        ce = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, { closeModal, openModal }) {
            o("WAWebVoipActivityTracker").trackUiActivity(o("WAWebVoipActivityTracker").VoipUiActivity.USER_UNMUTE_CAMERA);
            const a = yield e();
            if (a !== 0) {
                o("WALogger").WARN(R || (R = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [A/V switch] requestVideoUpgrade failed converting audio\n  call to video with status: ",
                    ""
                ])), a);
                if (!(a === P || a === N)) {
                    const Component = o("WAWebGuidePopup.react").GuidePopup;
                    openModal(<Component messaging={o("WAWebGuidePopup.react").Messaging.VIDEO_UPGRADE_FAIL} type={o("WAWebGuidePopup.react").GuidePopupType.GUIDE_NONE} featureSurface={o("WAWebGuidePopup.react").FeatureSurface.VOIP_VIDEO_UPGRADE} onConfirm={closeModal}/>);
                }
            }
        });
        return ce.apply(this, arguments);
    }
    function de(e, t) {
        return me.apply(this, arguments);
    }
    function me() {
        me = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            o("WAWebVoipActivityTracker").trackUiActivity(t ? o("WAWebVoipActivityTracker").VoipUiActivity.USER_MUTE_CAMERA : o("WAWebVoipActivityTracker").VoipUiActivity.USER_UNMUTE_CAMERA);
            const n = yield e(t);
            if (n !== 0) {
                o("WALogger").WARN(L || (L = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: setCallVideoMute failed with status: ",
                    ""
                ])), n);
            }
        });
        return me.apply(this, arguments);
    }
    function pe(e) {
        return _e.apply(this, arguments);
    }
    function _e() {
        _e = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ activeCall, isBlockedAtPrompt, isDocPip, modalManager }) {
            if (isBlockedAtPrompt && activeCall != null) {
                yield o("WAWebVoipJoinDeviceRecovery").offerPermissionButtonAfterUnmuteBlock(activeCall);
            }
            o("WAWebVoipBlockedMicrophoneDialog").showBlockedMicrophoneDialog(modalManager, {
                isDocPip,
                showGuide: function() {
                    return IeComponent(modalManager.openModal, modalManager.closeModal);
                }
            });
        });
        return _e.apply(this, arguments);
    }
    function fe(activeCall, t, n) {
        if (activeCall != null) {
            if (t !== "auto") {
                o("WAWebVoipBlockedMicrophoneJoinState").forgetBlockedMicrophoneMuteAndJoin(activeCall.id);
            } else if (n) {
                o("WAWebVoipBlockedMicrophoneJoinState").recordBlockedMicrophoneMute(activeCall.id);
            }
        }
    }
    function ge({ didFocusMainWindow, didPrompt, isDocPip }) {
        if (didFocusMainWindow) {
            return "permission_denied_in_main_window";
        }
        if (didPrompt && !isDocPip) {
            return "permission_denied_at_prompt";
        }
        return "permission_denied";
    }
    l.default = useZ;
}, 98);