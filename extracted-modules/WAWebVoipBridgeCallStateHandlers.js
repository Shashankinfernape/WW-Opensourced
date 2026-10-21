__d("WAWebVoipBridgeCallStateHandlers", [
    "fbt",
    "WALogger",
    "WAWebABProps",
    "WAWebAvUpgradeBannerState",
    "WAWebCallCollection",
    "WAWebCallModel",
    "WAWebEnvironment",
    "WAWebInCallWaitingRoomNotificationHelper",
    "WAWebModalManager",
    "WAWebMsgGetters",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUserPrefsMeUser",
    "WAWebVoipActionWriteCallLogCallStateChanged",
    "WAWebVoipActivityTracker",
    "WAWebVoipBridgeMicSilenceToast",
    "WAWebVoipCallStateUtils",
    "WAWebVoipCameraAutoOffModal.react",
    "WAWebVoipEventConstants",
    "WAWebVoipGatingUtils",
    "WAWebVoipOngoingCallCollection",
    "WAWebVoipPermissionCheckCaptureRegistry",
    "WAWebVoipPopoutModalManager",
    "WAWebVoipPopoutWindowState",
    "WAWebVoipScreenShareUpdateAppModal.react",
    "WAWebVoipUiDocPipPortalContainer.react",
    "WAWebVoipUiManager",
    "WAWebVoipUiPopoutWindowPortalContainer.react",
    "WAWebVoipVideoRenderSource",
    "WAWebVoipVideoRendererRegistry",
    "WAWebVoipVideoStateUtils",
    "WAWebVoipWaCallEnums",
    "asyncToGeneratorRuntime",
    "justknobx",
    "react"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
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
    const P = $ || ($ = o("react"));
    function N(linkToken, t) {
        if (linkToken != null && linkToken !== "") {
            return linkToken;
        }
        if (t != null && o("WAWebMsgGetters").getIsCallLink(t) === true) {
            const n = o("WAWebMsgGetters").getCallLinkToken(t);
            if (n != null && n !== "") {
                return n;
            }
        }
        return null;
    }
    function M(e, t, n) {
        if (e != null) {
            const a = new Set(e.map((e)=>e.toString()));
            const jids = [];
            for (const l of t){
                const s = l.toString();
                if (!(a.has(s) || o("WAWebUserPrefsMeUser").isMeAccount(l) || l.isBot() || n.get(s) === o("WAWebVoipWaCallEnums").CallParticipantState.Connected)) {
                    jids.push(l);
                }
            }
            if (jids.length !== 0) {
                r("WAWebCallCollection").trigger(o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallCollectionEvents.PARTICIPANTS_INVITED), {
                    jids
                });
            }
        }
    }
    const w = {
        setCallState: (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ callInfo, callState }) {
                if (o("WAWebVoipCallStateUtils").isCallTerminal(callState)) {
                    A(callInfo.callId, callInfo.linkToken, r("WAWebCallCollection").activeCall);
                }
                if (!r("WAWebEnvironment").isWindows || o("WAWebVoipGatingUtils").isWinHybridPlusEnabled()) {
                    o("WAWebVoipUiManager").setupVoipActiveCallChangeListener();
                }
                if (r("WAWebCallCollection").activeCall == null && o("WAWebVoipCallStateUtils").isCallTerminal(callState)) {
                    o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: Ignoring terminal setCallState with no active call"
                    ])));
                    return;
                }
                const l = o("WAWebVoipOngoingCallCollection").WAWebVoipOngoingCallCollection.getByCallId(callInfo.callId);
                const s = N(callInfo.linkToken, l);
                const h = s != null && s !== "";
                if (r("WAWebCallCollection").activeCall == null) {
                    o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: Creating new call model for call state"
                    ])));
                    if (!callInfo.isCaller) {
                        o("WAWebVoipActivityTracker").trackActivity(o("WAWebVoipActivityTracker").VoipActivity.INCOMING_CALL_MODEL_CREATING);
                    }
                    const y = new (r("WAWebCallModel"));
                    y.id = callInfo.callId;
                    y.peerJid = callInfo.peerJid;
                    y.isVideo = callInfo.videoEnabled;
                    y.isGroup = callInfo.isGroupCall;
                    y.groupJid = callInfo.groupJid;
                    y.outgoing = callInfo.isCaller;
                    y.isBotGroupCall = callInfo.isBotGroupCall;
                    if (callInfo.isGroupCall && callInfo.participants) {
                        const C = [];
                        const b = [];
                        const v = new Map;
                        for (const S of callInfo.participants){
                            C.push(S.jid);
                            v.set(S.jid.toString(), S.state);
                            if (S.state === o("WAWebVoipWaCallEnums").CallParticipantState.Connected) {
                                b.push(S.jid);
                            }
                        }
                        y.groupCallParticipants = C;
                        y.groupCallParticipantsConnected = b;
                        y.groupCallParticipantStates = v;
                    }
                    if (callInfo.videoEnabled) {
                        y.selfVideoState = o("WAWebVoipWaCallEnums").VideoState.Enabled;
                        y.peerVideoState = o("WAWebVoipWaCallEnums").VideoState.Enabled;
                    } else {
                        y.selfVideoState = o("WAWebVoipWaCallEnums").VideoState.Disabled;
                        y.peerVideoState = o("WAWebVoipWaCallEnums").VideoState.Disabled;
                    }
                    if (h) {
                        y.isCallLink = true;
                        y.callLinkToken = s;
                        y.isGuestEligible = callInfo.isGuestEligible;
                        if (l != null && o("WAWebMsgGetters").getIsCallLink(l) === true) {
                            const R = o("WAWebMsgGetters").getSender(l);
                            if (R == null) {
                                o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                                    "voip: setCallState: joinable call-link Msg for ",
                                    " has no sender, callLinkCreatorJid stays null"
                                ])), callInfo.callId);
                            }
                            y.callLinkCreatorJid = R;
                            if (R != null && o("WAWebUserPrefsMeUser").isMeAccount(R)) {
                                y.isSelfCallLinkAdmin = true;
                            }
                        } else {
                            o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                                "voip: setCallState: no joinable call-link Msg for ",
                                ""
                            ])), callInfo.callId);
                        }
                    }
                    r("WAWebCallCollection").setActiveCall(y);
                    if (h && y.callLinkCreatorJid != null) {
                        y.trigger(o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.CALL_LINK_CREATOR_JID));
                    }
                    if (h && y.isSelfCallLinkAdmin) {
                        y.trigger(o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.IS_SELF_CALL_LINK_ADMIN));
                    }
                }
                if (r("WAWebCallCollection").activeCall != null && callInfo.isGroupCall && !r("WAWebCallCollection").activeCall.isGroup) {
                    r("WAWebCallCollection").activeCall.isGroup = callInfo.isGroupCall;
                    r("WAWebCallCollection").activeCall.trigger(o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.IS_GROUP));
                }
                const activeCall = r("WAWebCallCollection").activeCall;
                const callInfo_peerJid = callInfo.peerJid;
                const k = activeCall?.id === callInfo.callId;
                const I = !o("WAWebVoipCallStateUtils").isCallTerminal(callState) && activeCall?.id === s;
                if (activeCall != null && h && (k || I)) {
                    if (!activeCall.isCallLink) {
                        activeCall.isCallLink = true;
                        activeCall.callLinkToken = s;
                        activeCall.trigger(o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.CALL_LINK_STATE));
                    }
                    if (activeCall.isGuestEligible !== callInfo.isGuestEligible) {
                        activeCall.isGuestEligible = callInfo.isGuestEligible;
                        activeCall.trigger(o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.CALL_LINK_STATE));
                    }
                    if (callInfo.callId != null && activeCall.id !== callInfo.callId && activeCall.id === s) {
                        o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: Updating call.id from linkToken to actual callId: ",
                            ""
                        ])), callInfo.callId);
                        activeCall.id = callInfo.callId;
                        activeCall.trigger("change:id");
                    }
                    if (callInfo_peerJid != null) {
                        const T = activeCall.peerJid == null || activeCall.peerJid.toJid() !== callInfo_peerJid.toJid();
                        if (T) {
                            o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                                "voip: Updating peerJid for call link: ",
                                ""
                            ])), callInfo_peerJid.toJid());
                            activeCall.peerJid = callInfo_peerJid;
                            activeCall.trigger(o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.PEER_JID));
                        }
                    }
                    if (callInfo.participants) {
                        const D = callInfo.participants.find((e)=>e.userType === o("WAWebVoipWaCallEnums").CallUserType.Admin);
                        if (D != null) {
                            const x = activeCall.callLinkCreatorJid;
                            activeCall.callLinkCreatorJid = D.jid;
                            if (x == null || x.toJid() !== D.jid.toJid()) {
                                activeCall.trigger(o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.CALL_LINK_CREATOR_JID));
                            }
                            const $ = callInfo.participants.some((e)=>e.userType === o("WAWebVoipWaCallEnums").CallUserType.Admin && o("WAWebUserPrefsMeUser").isMeAccount(e.jid));
                            if (activeCall.isSelfCallLinkAdmin !== $) {
                                activeCall.isSelfCallLinkAdmin = $;
                                activeCall.trigger(o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.IS_SELF_CALL_LINK_ADMIN));
                            }
                        }
                    }
                }
                if (activeCall != null && callInfo.callId != null && activeCall.id !== callInfo.callId && o("WAWebVoipCallStateUtils").isCallActive(callState) && o("WAWebVoipCallStateUtils").isCallOutgoing(activeCall.getState())) {
                    o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: Updating call.id during auto-connect: ",
                        ""
                    ])), callInfo.callId);
                    activeCall.id = callInfo.callId;
                    activeCall.outgoing = callInfo.isCaller;
                    activeCall.trigger("change:id");
                }
                const P = r("WAWebCallCollection").activeCall?.id === callInfo.callId;
                if (P && activeCall != null) {
                    activeCall.isWaitingRoomEnabled = callInfo.isWaitingRoomEnabled;
                    activeCall.isWaitingRoomAdmin = callInfo.isWaitingRoomAdmin;
                    activeCall.waitingRoomFilter = callInfo.waitingRoomFilter;
                    activeCall.isInWaitingRoom = callInfo.isInWaitingRoom;
                    activeCall.waitingRoomUsers = callInfo.waitingRoomUsers;
                    activeCall.waitingRoomUsersCount = callInfo.waitingRoomUsersCount;
                    activeCall.isDualStreamSsEnabled = callInfo.isDualStreamSsEnabled;
                    activeCall.trigger(o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.WAITING_ROOM_STATE));
                    o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: Setting call state to ",
                        ""
                    ])), callState);
                    activeCall.setState(callState);
                    r("WAWebCallCollection").setIsInConnectedCall(o("WAWebVoipCallStateUtils").isCallConnected(callState));
                } else if (!o("WAWebVoipCallStateUtils").isCallTerminal(callState)) {
                    o("WALogger").WARN(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: Dropped non-terminal state update ",
                        " (activeCall.id=",
                        " !== callInfo.callId=",
                        ")"
                    ])), callState, String(r("WAWebCallCollection").activeCall?.id), String(callInfo.callId));
                }
                if (o("WAWebVoipCallStateUtils").isCallTerminal(callState) && P) {
                    o("WAWebInCallWaitingRoomNotificationHelper").closeInCallWaitingRoomNotification(callInfo.callId);
                    r("WAWebCallCollection").setActiveCall(null);
                    r("WAWebCallCollection").setIsInConnectedCall(false);
                }
                if (!o("WAWebVoipGatingUtils").isGuestViewer()) {
                    if (!callInfo.isCaller) {
                        o("WAWebVoipActivityTracker").trackActivity(o("WAWebVoipActivityTracker").VoipActivity.INCOMING_CALL_MSG_GENERATING);
                    }
                    const w = yield o("WAWebVoipActionWriteCallLogCallStateChanged").generateCallLogFromCallStateChangedEvent(callInfo);
                    const F = r("WAWebCallCollection").activeCall;
                    if (w != null && F != null && F.id === callInfo.callId) {
                        if (!callInfo.isCaller) {
                            o("WAWebVoipActivityTracker").trackActivity(o("WAWebVoipActivityTracker").VoipActivity.INCOMING_CALL_MSG_READY);
                        }
                        F.msg = w;
                        F.trigger(o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.MSG));
                    }
                }
            });
            function a(e) {
                return t.apply(this, arguments);
            }
            return a;
        })(),
        handleVideoStateChange: function({ videoStateData }) {
            const activeCall = r("WAWebCallCollection").activeCall;
            if (activeCall) {
                const a = videoStateData.isSelf != null && videoStateData.isSelf;
                if (a) {
                    activeCall.selfVideoState = videoStateData.videoState;
                    activeCall.trigger(o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.SELF_VIDEO_STATE));
                    if (o("WAWebVoipVideoStateUtils").isVideoStateInactiveForCallMode(videoStateData.videoState)) {
                        o("WAWebVoipUiPopoutWindowPortalContainer.react").setMediaStream("camera", null);
                    }
                } else {
                    activeCall.peerVideoState = videoStateData.videoState;
                    if (videoStateData.userJid) {
                        activeCall.peerVideoJid = videoStateData.userJid;
                    }
                    const i = videoStateData.userJid;
                    if (i != null && (o("WAWebVoipVideoStateUtils").isVideoStateInactiveForCallMode(videoStateData.videoState) || videoStateData.videoState === o("WAWebVoipWaCallEnums").VideoState.Paused)) {
                        o("WAWebVoipVideoRendererRegistry").videoRendererRegistry.onPeerVideoInactive(o("WAWebVoipVideoRenderSource").WAWebVoipVideoRenderSource.peer(i, o("WAWebVoipVideoRenderSource").WAWebVoipVideoRenderStream.CAMERA));
                    }
                }
                const participantJid = videoStateData.userJid;
                if (activeCall.isGroup && participantJid != null) {
                    activeCall.updateParticipantVideoState(participantJid, videoStateData.videoState);
                    activeCall.trigger("participantVideoStateChange", {
                        participantJid,
                        videoState: videoStateData.videoState
                    });
                }
                if (videoStateData.callMediaStateChanged === true) {
                    const s = activeCall.hasActiveVideo();
                    o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [A/V switch] Call media state changed,\n        selfVideoState: ",
                        ",\n        peerVideoState: ",
                        ",\n        isVideoCall: ",
                        ""
                    ])), activeCall.selfVideoState, activeCall.peerVideoState, s);
                    activeCall.isVideo = s;
                    activeCall.trigger(o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.IS_VIDEO));
                }
                activeCall.trigger(o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.VIDEO_STATE));
            }
        },
        handleMuteStateChange: function({ callInfo }) {
            o("WALogger").LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                "voip: Mute state change received, callInfo: ",
                ""
            ])), callInfo);
            const activeCall = r("WAWebCallCollection").activeCall;
            if (activeCall) {
                let a = null;
                if (activeCall.isGroup) {
                    const l = activeCall.groupCallParticipantsConnected ?? [];
                    const s = l.filter((e)=>!o("WAWebUserPrefsMeUser").isMeAccount(e));
                    if (s.length === 1) {
                        a = s[0];
                    }
                } else {
                    a = activeCall.peerJid;
                }
                let u = false;
                let c = false;
                if (callInfo.participants) {
                    for (const d of callInfo.participants){
                        if (o("WAWebUserPrefsMeUser").isMeAccount(d.jid)) {
                            u = d.isMuted;
                        } else if (a != null && d.jid.equals(a)) {
                            c = d.isMuted;
                        }
                        if (activeCall.isGroup) {
                            const m = activeCall.isParticipantMicMuted(d.jid);
                            activeCall.updateParticipantMicState(d.jid, d.isMuted);
                            if (d.isMuted !== m) {
                                activeCall.trigger("participantMicStateChange", {
                                    participantJid: d.jid,
                                    isMuted: d.isMuted
                                });
                            }
                        }
                    }
                }
                activeCall.selfMicMuted = u;
                activeCall.peerMicMuted = c;
                o("WALogger").LOG(C || (C = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: Updated mute states - selfMuted: ",
                    ", peerMuted: ",
                    ""
                ])), u, c);
                activeCall.trigger(o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.SELF_MIC_MUTED));
                activeCall.trigger(o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.PEER_MIC_MUTED));
            }
        },
        handleGroupInfoChangedGroupCall: function({ groupInfoChangedPayload }) {
            const activeCall = r("WAWebCallCollection").activeCall;
            if (activeCall) {
                if (!activeCall.isGroup) {
                    activeCall.isGroup = true;
                    activeCall.trigger(o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.IS_GROUP));
                }
                const l = activeCall.groupCallParticipants ?? (activeCall.peerJid != null ? [
                    activeCall.peerJid
                ] : null);
                const s = new Set((activeCall.groupCallParticipantsConnected ?? []).map((e)=>e.toString()));
                const u = [];
                const c = [];
                const d = new Map;
                const m = [];
                const p = new Map;
                const _ = new Map;
                for (const f of groupInfoChangedPayload.CallParticipants ?? []){
                    u.push(f.participant);
                    d.set(f.participant.toString(), f.outcome);
                    if (f.videoState != null) {
                        const h = f.videoState;
                        p.set(f.participant.toString(), h);
                    } else {
                        const y = activeCall.getParticipantVideoState(f.participant);
                        if (y != null) {
                            p.set(f.participant.toString(), y);
                        }
                    }
                    if (f.isMuted != null) {
                        const C = f.isMuted;
                        _.set(f.participant.toString(), C);
                    } else {
                        const v = activeCall.getParticipantMuteState(f.participant);
                        if (v != null) {
                            _.set(f.participant.toString(), v);
                        }
                    }
                    if (f.outcome === o("WAWebVoipWaCallEnums").CallParticipantState.Connected) {
                        c.push(f.participant);
                        m.push(f.participant.toLogString());
                        if (!s.has(f.participant.toString())) {
                            activeCall.setPeerReconnectingState(f.participant, false, o("WAWebVoipWaCallEnums").ReconnectingOption.Text);
                            activeCall.clearRaisedHandForParticipant(f.participant);
                            activeCall.clearReactionForParticipant(f.participant);
                            activeCall.setScreenShareState(f.participant, o("WAWebVoipWaCallEnums").ScreenShareState.Stopped);
                        }
                    } else if (f.outcome === o("WAWebVoipWaCallEnums").CallParticipantState.Terminated || f.outcome === o("WAWebVoipWaCallEnums").CallParticipantState.TimedOut || f.outcome === o("WAWebVoipWaCallEnums").CallParticipantState.Rejected) {
                        o("WAWebVoipVideoRendererRegistry").videoRendererRegistry.removeParticipantAVSync(f.participant);
                        activeCall.setPeerReconnectingState(f.participant, false, o("WAWebVoipWaCallEnums").ReconnectingOption.Text);
                    }
                }
                activeCall.groupCallParticipants = u;
                activeCall.groupCallParticipantsConnected = c;
                activeCall.groupCallParticipantStates = d;
                activeCall.setGroupParticipantMediaStates(p, _);
                M(l, u, d);
                o("WALogger").LOG(b || (b = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: Group call connected participants: ",
                    ""
                ])), m.join(", "));
                activeCall.trigger(o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.GROUP_CALL_PARTICIPANT_STATES));
            }
        },
        handlePeerVideoPermissionChange: function({ peerVideoPermissionData }) {
            const { isBannerVisible, jid, videoState } = peerVideoPermissionData;
            if (videoState === o("WAWebVoipWaCallEnums").VideoState.UnknownPeer && isBannerVisible) {
                r("WAWebAvUpgradeBannerState").showBanner({
                    jid,
                    videoState,
                    isBannerVisible
                });
            } else {
                r("WAWebAvUpgradeBannerState").removeBannerForJid(jid);
            }
        },
        handleAudioLevelChange: function({ participantJid }) {
            const activeCall = r("WAWebCallCollection").activeCall;
            if (!activeCall) {
                o("WALogger").LOG(v || (v = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [FRONTEND] ERROR: No active call"
                ])));
                return;
            }
            const a = o("WAWebUserPrefsMeUser").isMeAccount(participantJid);
            if (a) {
                activeCall.selfAudioLevel = 1;
                activeCall.trigger(o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.SELF_AUDIO_LEVEL));
            } else {
                activeCall.peerAudioLevel = 1;
                activeCall.trigger(o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.PEER_AUDIO_LEVEL));
            }
            if (activeCall.isGroup) {
                activeCall.trigger("participantAudioLevelChange", {
                    participantJid
                });
            }
        },
        handleReactionStateChange: function({ reactionData }) {
            const activeCall = r("WAWebCallCollection").activeCall;
            if (activeCall) {
                const { callReaction, jid, reactionState } = reactionData;
                if (reactionState === 1) {
                    activeCall.setReactionForParticipant(jid, callReaction);
                } else if (reactionState === 2) {
                    activeCall.clearReactionForParticipant(jid);
                }
            }
        },
        handleRaiseHandStateChange: function({ raiseHandData }) {
            const activeCall = r("WAWebCallCollection").activeCall;
            if (activeCall) {
                const { isHandRaised, jid } = raiseHandData;
                if (isHandRaised) {
                    activeCall.setRaisedHandForParticipant(jid);
                } else {
                    activeCall.clearRaisedHandForParticipant(jid);
                }
            }
        },
        showMicrophoneSilenceToast: o("WAWebVoipBridgeMicSilenceToast").showMicrophoneSilenceToastImpl,
        handleRelayBindsFailed: function() {
            o("WALogger").LOG(S || (S = babelHelpers.taggedTemplateLiteralLoose([
                "voip: handleRelayBindsFailed: Setting call failed reason (possible firewall blocking)"
            ])));
            r("WAWebCallCollection").setCallFailedReason(o("WAWebVoipWaCallEnums").CallFailedReason.RelayBindsFailed);
        },
        handleScreenShareStateChange: function(t) {
            const activeCall = r("WAWebCallCollection").activeCall;
            if (activeCall) {
                activeCall.setScreenShareState(t.sharer_jid, t.state, t.sharer_version != null ? Number(t.sharer_version) : undefined);
                const n = o("WAWebUserPrefsMeUser").isMeAccount(t.sharer_jid);
                if (n && (t.state === o("WAWebVoipWaCallEnums").ScreenShareState.Stopped || t.state === o("WAWebVoipWaCallEnums").ScreenShareState.Failed)) {
                    o("WAWebVoipUiPopoutWindowPortalContainer.react").setMediaStream("desktop", null);
                    if (t.reason === o("WAWebVoipWaCallEnums").ScreenShareEndReason.TakeOver) {
                        activeCall.setSelfScreenShareRejected(true);
                        o("WAWebToastManager").ToastManager.open(P.jsx(o("WAWebToast.react").Toast, {
                            msg: s._("Another participant is already sharing their screen"),
                            duration: 5000
                        }));
                    }
                }
                if (!n && t.state === o("WAWebVoipWaCallEnums").ScreenShareState.Stopped && t.reason === o("WAWebVoipWaCallEnums").ScreenShareEndReason.NotSupported && Number(t.sharer_version) >= Number(o("WAWebVoipWaCallEnums").ScreenShareVersion.Version3) && o("WAWebABProps").getABPropConfigValue("call_screen_share_dual_stream_app_update_dialog_enabled") && activeCall.tryMarkScreenShareUpdateAppModalShown()) {
                    o("WAWebModalManager").ModalManager.open(P.jsx(r("WAWebVoipScreenShareUpdateAppModal.react"), {}));
                }
            }
        },
        handleSelfCameraAutoOff: function({ cameraAutoOffData }) {
            if (r("WAWebCallCollection").activeCall) {
                const n = o("WAWebVoipCameraAutoOffModal.react").getCameraAutoOffMessage(cameraAutoOffData.reason);
                if (n != null) {
                    const a = o("WAWebVoipPopoutWindowState").getPopoutWindow() != null || o("WAWebVoipUiDocPipPortalContainer.react").getIsDocPipWindowOpen() ? o("WAWebVoipPopoutModalManager").VoipPopoutModalManager : o("WAWebModalManager").ModalManager;
                    a.open(P.jsx(o("WAWebVoipCameraAutoOffModal.react").WAWebVoipCameraAutoOffModal, {
                        closeModal: function() {
                            return a.close();
                        },
                        message: n
                    }));
                }
            }
        },
        handleRxTrafficStateForPeerChanged: function(t) {
            const activeCall = r("WAWebCallCollection").activeCall;
            if (activeCall) {
                const { isStateOn, jid, reconnectingOption } = t;
                activeCall.setPeerReconnectingState(jid, isStateOn, reconnectingOption);
            }
        },
        handleNetHealthStatusChanged: function(t) {
            const activeCall = r("WAWebCallCollection").activeCall;
            if (activeCall) {
                const { currentState, previousState, shouldSendNoNetworkBanner, shouldSendPoorBanner } = t;
                activeCall.setNetHealth(t);
            }
        },
        handleCallLinkStateChanged: function(t) {
            if (t.callLinkState === o("WAWebVoipWaCallEnums").CallLinkState.None) {
                const a = r("WAWebCallCollection").activeCall;
                A(t.linkToken, null, a);
                const i = F(a, t.linkToken);
                if (i != null) {
                    o("WALogger").LOG(R || (R = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: Call link state is None, clearing active call"
                    ])));
                    o("WAWebInCallWaitingRoomNotificationHelper").closeInCallWaitingRoomNotification(i.id);
                    r("WAWebCallCollection").setActiveCall(null);
                }
                return;
            }
            if (!r("WAWebEnvironment").isWindows || o("WAWebVoipGatingUtils").isWinHybridPlusEnabled()) {
                o("WAWebVoipUiManager").setupVoipActiveCallChangeListener();
            }
            let activeCall = r("WAWebCallCollection").activeCall;
            const s = activeCall?.isSelfCallLinkAdmin ?? false;
            if (activeCall == null) {
                o("WALogger").LOG(L || (L = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: Creating new call model for call link"
                ])));
                const c = new (r("WAWebCallModel"));
                c.id = t.linkToken;
                c.isCallLink = true;
                c.callLinkState = t.callLinkState;
                c.callLinkToken = t.linkToken;
                c.callLinkCreatorJid = t.creatorJid ?? t.self.jid;
                c.callLinkVideoEnabled = t.videoEnabled;
                c.isEventLink = t.isEventLink;
                c.isGuestEligible = t.isGuestEligible;
                c.isVideo = t.videoEnabled;
                c.outgoing = true;
                c.selfVideoState = o("WAWebVoipVideoStateUtils").getInitialCallLinkSelfVideoState(t.videoEnabled, t.videoMuted);
                r("WAWebCallCollection").setActiveCall(c);
                activeCall = c;
            } else {
                o("WALogger").LOG(E || (E = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: Updating existing call with call link state ",
                    ""
                ])), t.callLinkState);
                if (activeCall.callLinkToken !== t.linkToken) {
                    activeCall.isSelfCallLinkAdmin = false;
                }
                activeCall.isCallLink = true;
                activeCall.callLinkState = t.callLinkState;
                activeCall.callLinkToken = t.linkToken;
                activeCall.callLinkCreatorJid = t.creatorJid ?? t.self.jid;
                activeCall.callLinkVideoEnabled = t.videoEnabled;
                activeCall.isEventLink = t.isEventLink;
                activeCall.isGuestEligible = t.isGuestEligible;
            }
            const m = activeCall.isSelfCallLinkAdmin || t.self.userType === o("WAWebVoipWaCallEnums").CallUserType.Admin || t.creatorJid != null && o("WAWebUserPrefsMeUser").isMeAccount(t.creatorJid);
            activeCall.isSelfCallLinkAdmin = m;
            if (s !== m) {
                activeCall.trigger(o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.IS_SELF_CALL_LINK_ADMIN));
            }
            activeCall.trigger(o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.CALL_LINK_CREATOR_JID));
            activeCall.trigger(o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.CALL_LINK_STATE));
            r("WAWebCallCollection").trigger(o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.CALL_LINK_STATE));
            r("WAWebCallCollection").trigger(o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallCollectionEvents.ACTIVE_CALL));
        },
        handleWaitingRoomDenied: function(t) {
            o("WALogger").LOG(k || (k = babelHelpers.taggedTemplateLiteralLoose([
                "voip: handleWaitingRoomDenied"
            ])));
            o("WAWebToastManager").ToastManager.open(P.jsx(o("WAWebToast.react").Toast, {
                msg: s._("Your request to join the call was not approved.")
            }));
            const activeCall = r("WAWebCallCollection").activeCall;
            if (activeCall != null) {
                activeCall.displayWaitingRoomDenied = true;
                activeCall.trigger(o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.DISPLAY_WAITING_ROOM_DENIED));
            }
        },
        handleIsInWaitingRoomChanged: function({ isInWaitingRoom, isWaitingRoomAdmin, isWaitingRoomEnabled, waitingRoomFilter }) {
            o("WALogger").LOG(I || (I = babelHelpers.taggedTemplateLiteralLoose([
                "voip: handleIsInWaitingRoomChanged: inWR=",
                ", enabled=",
                ", admin=",
                ""
            ])), isInWaitingRoom, isWaitingRoomEnabled, isWaitingRoomAdmin);
            const activeCall = r("WAWebCallCollection").activeCall;
            if (activeCall != null) {
                activeCall.isInWaitingRoom = isInWaitingRoom;
                activeCall.isWaitingRoomEnabled = isWaitingRoomEnabled;
                activeCall.isWaitingRoomAdmin = isWaitingRoomAdmin;
                activeCall.waitingRoomFilter = waitingRoomFilter;
                activeCall.trigger(o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.IS_IN_WAITING_ROOM));
                activeCall.trigger(o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.WAITING_ROOM_STATE));
            }
        },
        handleWaitingRoomStateChanged: function({ isInWaitingRoom, isWaitingRoomAdmin, isWaitingRoomEnabled, waitingRoomFilter, waitingRoomUsers, waitingRoomUsersCount }) {
            o("WALogger").LOG(T || (T = babelHelpers.taggedTemplateLiteralLoose([
                "voip: handleWaitingRoomStateChanged: enabled=",
                ", admin=",
                ", inWR=",
                ", count=",
                ""
            ])), isWaitingRoomEnabled, isWaitingRoomAdmin, isInWaitingRoom, waitingRoomUsersCount);
            const activeCall = r("WAWebCallCollection").activeCall;
            if (activeCall != null) {
                activeCall.isWaitingRoomEnabled = isWaitingRoomEnabled;
                activeCall.isWaitingRoomAdmin = isWaitingRoomAdmin;
                activeCall.waitingRoomFilter = waitingRoomFilter;
                activeCall.isInWaitingRoom = isInWaitingRoom;
                activeCall.waitingRoomUsers = waitingRoomUsers;
                activeCall.waitingRoomUsersCount = waitingRoomUsersCount;
                activeCall.trigger(o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.WAITING_ROOM_STATE));
                activeCall.trigger(o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.IS_IN_WAITING_ROOM));
                if (isWaitingRoomAdmin) {
                    o("WAWebInCallWaitingRoomNotificationHelper").maybeShowOrCloseInCallWaitingRoomNotification({
                        callId: activeCall.id,
                        waitingRoomUsers,
                        waitingRoomUsersCount
                    });
                }
            }
        },
        handleMuteRequestFailed: function() {
            o("WALogger").LOG(D || (D = babelHelpers.taggedTemplateLiteralLoose([
                "voip: handleMuteRequestFailed"
            ])));
            r("WAWebCallCollection").trigger(o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallCollectionEvents.MUTE_REQUEST_FAILED));
        },
        handleVoipSettingsUpdate: function({ callId, isDualStreamSsEnabled }) {
            const activeCall = r("WAWebCallCollection").activeCall;
            if (!(activeCall == null || activeCall.id !== callId)) {
                if (activeCall.isDualStreamSsEnabled !== isDualStreamSsEnabled) {
                    o("WALogger").LOG(x || (x = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: isDualStreamSsEnabled ",
                        " -> ",
                        ""
                    ])), String(activeCall.isDualStreamSsEnabled), String(isDualStreamSsEnabled));
                    activeCall.isDualStreamSsEnabled = isDualStreamSsEnabled;
                    activeCall.trigger(o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.SCREEN_SHARE_STATES));
                }
            }
        },
        handleCallGridRankingChanged: function({ callInfo }) {
            const activeCall = r("WAWebCallCollection").activeCall;
            if (activeCall != null) {
                const a = new Map;
                for (const i of callInfo.participants){
                    const l = i.callGridRank;
                    if (l != null) {
                        a.set(i.jid.toString(), l);
                    }
                }
                activeCall.groupCallParticipantGridRanks = a;
                activeCall.trigger(o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.GROUP_CALL_PARTICIPANT_STATES));
            }
        }
    };
    function A(e, t, n) {
        if (r("justknobx")._("5756")) {
            for (const a of O(e, t, n)){
                o("WAWebVoipPermissionCheckCaptureRegistry").releasePermissionCheckCaptures(a);
            }
        }
    }
    function F(e, linkToken) {
        if (e?.isCallLink !== true) {
            return null;
        }
        if (r("justknobx")._("5756")) {
            if (e.id === linkToken) {
                return e;
            }
            return null;
        }
        return e;
    }
    function O(e, t, n) {
        const r = n != null && n.id === e ? n : null;
        const o = n != null && n.id !== e ? n : null;
        const a = new Set;
        B(a, e, o);
        B(a, t, o);
        B(a, r?.callLinkToken, null);
        return a;
    }
    function B(e, t, n) {
        if (!(t == null || t === "" || n != null && (n.id === t || n.callLinkToken === t))) {
            e.add(t);
        }
    }
    l.VoipBridgeCallStateHandlers = w;
}, 226);