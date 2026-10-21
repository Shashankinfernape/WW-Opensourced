__d("WAWebCallModel", [
    "WALogger",
    "WAWebABProps",
    "WAWebCallCollection",
    "WAWebCallNotificationBus",
    "WAWebEnvironment",
    "WAWebEventEmitter",
    "WAWebNoop",
    "WAWebPttAudioChannels",
    "WAWebUserPrefsMeUser",
    "WAWebVoipCallStateUtils",
    "WAWebVoipEventConstants",
    "WAWebVoipGatingUtils",
    "WAWebVoipPerfMeasurement",
    "WAWebVoipVideoStateUtils",
    "WAWebVoipWaCallEnums"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = 3;
    const u = ((t)=>{
        function n(e) {
            let n;
            n = t.call(this) || this;
            n.id = "";
            n.peerJid = null;
            n.offerTime = 0;
            n.isVideo = false;
            n.isGroup = false;
            n.groupJid = null;
            n.groupCallParticipants = null;
            n.groupCallParticipantsConnected = null;
            n.groupCallParticipantStates = null;
            n.groupCallParticipantGridRanks = null;
            n.outgoing = false;
            n.isSilenced = false;
            n.offerReceivedWhileOffline = false;
            n.isVoiceChat = false;
            n.isBotGroupCall = false;
            n.silenceReason = null;
            n.callLinkState = null;
            n.callLinkToken = null;
            n.callLinkCreatorJid = null;
            n.callLinkVideoEnabled = false;
            n.isCallLink = false;
            n.isEventLink = false;
            n.isGuestEligible = false;
            n.isSelfCallLinkAdmin = false;
            n.isInWaitingRoom = false;
            n.displayWaitingRoomDenied = false;
            n.isWaitingRoomAdmin = false;
            n.isWaitingRoomEnabled = false;
            n.waitingRoomFilter = null;
            n.isDualStreamSsEnabled = false;
            n.waitingRoomUsers = [];
            n.waitingRoomUsersCount = 0;
            n.selfVideoState = null;
            n.peerVideoState = null;
            n.peerVideoJid = null;
            n.selfMicMuted = false;
            n.peerMicMuted = false;
            n.peerAudioLevel = 0;
            n.selfAudioLevel = 0;
            n.selfPreviewCorner = null;
            n.selfPreviewSize = "normal";
            n.shouldShowPostCallSurvey = false;
            n.postCallSurveyInteracted = false;
            n.wasEverConnected = false;
            n.wasEverActive = false;
            n.didRefreshGroupInfoOnMismatch = false;
            n.callLogResult = null;
            n.userEndedCall = false;
            n.callFailedReason = null;
            n.peerBusy = false;
            n.networkOfflineTimer = null;
            n.$Call$p_1 = null;
            n.$Call$p_2 = new Map;
            n.$Call$p_3 = o("WAWebVoipWaCallEnums").ScreenShareState.Stopped;
            n.$Call$p_4 = 0;
            n.$Call$p_5 = new Map;
            n.$Call$p_6 = new Map;
            n.$Call$p_7 = false;
            n.$Call$p_8 = false;
            n.$Call$p_9 = null;
            n.$Call$p_10 = null;
            n.$Call$p_11 = new Map;
            n.$Call$p_12 = new Map;
            n.$Call$p_13 = new Map;
            n.$Call$p_14 = new Map;
            n.$Call$p_15 = null;
            if (e != null) {
                n.id = e;
            }
            return n;
        }
        babelHelpers.inheritsLoose(n, t);
        const a = n.prototype;
        a.delete = function() {
            this.stopListening();
        };
        a.getState = function() {
            return this.$Call$p_1;
        };
        a.setState = function(t) {
            const e = this.$Call$p_1;
            this.$Call$p_1 = t;
            this.trigger(o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.STATE));
            if (o("WAWebVoipCallStateUtils").isCallConnected(t)) {
                this.wasEverConnected = true;
            }
            if (o("WAWebVoipCallStateUtils").isCallActive(t)) {
                this.wasEverActive = true;
            }
            this.$Call$p_16(e);
            if (!r("WAWebEnvironment").isWindows && this.wasEverConnected && !o("WAWebVoipCallStateUtils").isCallTerminal(e) && o("WAWebVoipCallStateUtils").isCallTerminal(t)) {
                r("WAWebCallCollection").trigger(o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallCollectionEvents.END_CALL_TONE));
            }
            o("WAWebVoipPerfMeasurement").onCallStateChange(t, this.outgoing);
            if (o("WAWebVoipCallStateUtils").isCallTerminal(t)) {
                let n;
                this.$Call$p_2.clear();
                this.$Call$p_11.clear();
                this.$Call$p_12.clear();
                this.$Call$p_3 = o("WAWebVoipWaCallEnums").ScreenShareState.Stopped;
                this.$Call$p_4 = 0;
                this.$Call$p_5.clear();
                this.$Call$p_6.clear();
                this.$Call$p_7 = false;
                this.$Call$p_8 = false;
                this.$Call$p_13.clear();
                this.$Call$p_14.clear();
                this.$Call$p_15 = null;
                this.peerBusy = false;
                this.trigger((n = o("WAWebVoipEventConstants")).getChangeEvent(n.VoipCallModelEvents.PEER_RECONNECTING));
                r("WAWebCallCollection").trigger(n.getChangeEvent(n.VoipCallModelEvents.PEER_RECONNECTING));
                this.trigger(n.getChangeEvent(n.VoipCallModelEvents.REACTION_STATES));
                this.trigger(n.getChangeEvent(n.VoipCallModelEvents.RAISED_HAND_STATES));
                this.trigger(n.getChangeEvent(n.VoipCallModelEvents.SCREEN_SHARE_STATES));
                this.trigger(n.getChangeEvent(n.VoipCallModelEvents.NETWORK_HEALTH));
                r("WAWebCallCollection").trigger(n.getChangeEvent(n.VoipCallModelEvents.NETWORK_HEALTH));
            }
        };
        a.markPeerBusy = function() {
            this.peerBusy = true;
            this.trigger(o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.STATE));
        };
        a.updateSelfPreviewSize = function(t) {
            if (this.selfPreviewSize !== t) {
                this.selfPreviewSize = t;
                this.trigger(o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.SELF_PREVIEW_SIZE));
            }
        };
        a.hasActiveVideo = function() {
            return !o("WAWebVoipVideoStateUtils").isVideoStateInactiveForCallMode(this.selfVideoState) || !o("WAWebVoipVideoStateUtils").isVideoStateInactiveForCallMode(this.peerVideoState);
        };
        a.shouldShowVideoUI = function() {
            if (this.selfVideoState == null && this.peerVideoState == null) {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: shouldShowVideoUI: video states null, fallback"
                ])));
                return this.isVideo;
            }
            if (this.selfVideoState != null && this.peerVideoState == null) {
                return this.shouldShowSelfPreview();
            }
            if (this.selfVideoState == null && this.peerVideoState != null) {
                return this.shouldShowPeerVideo() || this.peerVideoState === o("WAWebVoipWaCallEnums").VideoState.UnknownPeer;
            }
            return this.shouldShowSelfPreview() || this.shouldShowPeerVideo() || this.peerVideoState === o("WAWebVoipWaCallEnums").VideoState.UnknownPeer;
        };
        a.shouldShowSelfPreview = function() {
            if (this.isVideo) {
                return true;
            }
            return o("WAWebVoipVideoStateUtils").isVideoEnabled(this.selfVideoState);
        };
        a.shouldShowPeerVideo = function() {
            if (this.peerVideoState == null) {
                return false;
            }
            return o("WAWebVoipVideoStateUtils").shouldShowVideo(this.peerVideoState);
        };
        a.$Call$p_17 = function() {
            return this.callLinkState === o("WAWebVoipWaCallEnums").CallLinkState.JoinSent || this.callLinkState === o("WAWebVoipWaCallEnums").CallLinkState.JoinAcked;
        };
        a.isInCallLinkPreview = function() {
            if (!this.isCallLink) {
                return false;
            }
            if (this.callLinkState === o("WAWebVoipWaCallEnums").CallLinkState.QueryAcked) {
                return true;
            }
            const e = o("WAWebVoipCallStateUtils").isCallConnected(this.$Call$p_1);
            return this.$Call$p_17() && !e;
        };
        a.isInCallLinkLobby = function() {
            const e = this.$Call$p_1 === o("WAWebVoipWaCallEnums").CallState.ConnectedLonely;
            return this.isCallLink && this.$Call$p_17() && e;
        };
        a.isConnectingToCallLinkLobby = function() {
            return this.isCallLink && this.$Call$p_17() && !o("WAWebVoipCallStateUtils").isCallConnected(this.$Call$p_1);
        };
        a.isConnectingToCallLinkLobbyOutsideWaitingRoom = function() {
            const e = this.isInWaitingRoom || this.isWaitingRoomEnabled && !this.isWaitingRoomAdmin;
            return this.isConnectingToCallLinkLobby() && !e;
        };
        a.isWaitingRoomToggleOn = function(t) {
            if (o("WAWebVoipWaCallEnums").wireStringToWaitingRoomFilter(this.waitingRoomFilter) === o("WAWebVoipWaCallEnums").WaitingRoomFilter.GuestsOnly && t()) {
                return false;
            }
            return this.isWaitingRoomEnabled;
        };
        a.setPeerReconnectingState = function(t, n, a) {
            const e = t.toString();
            if (n) {
                this.$Call$p_2.set(e, {
                    isReconnecting: n,
                    option: a
                });
            } else {
                this.$Call$p_2.delete(e);
            }
            this.trigger(o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.PEER_RECONNECTING));
            r("WAWebCallCollection").trigger(o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.PEER_RECONNECTING));
        };
        a.getPeerReconnectingState = function(t) {
            return this.$Call$p_2.get(t.toString());
        };
        a.setNetHealth = function(t) {
            let e;
            this.$Call$p_15 = t;
            this.trigger((e = o("WAWebVoipEventConstants")).getChangeEvent(e.VoipCallModelEvents.NETWORK_HEALTH));
            r("WAWebCallCollection").trigger(e.getChangeEvent(e.VoipCallModelEvents.NETWORK_HEALTH));
        };
        a.getNetHealth = function() {
            return this.$Call$p_15;
        };
        a.setScreenShareState = function(t, n, r) {
            const e = n === o("WAWebVoipWaCallEnums").ScreenShareState.Started && r != null && Number.isFinite(r) ? r : 0;
            if (o("WAWebUserPrefsMeUser").isMeAccount(t)) {
                this.$Call$p_3 = n;
                this.$Call$p_4 = e;
                if (n === o("WAWebVoipWaCallEnums").ScreenShareState.Started) {
                    this.$Call$p_7 = false;
                }
            } else {
                this.$Call$p_5.set(t, n);
                if (e > 0) {
                    this.$Call$p_6.set(t, e);
                } else {
                    this.$Call$p_6.delete(t);
                }
                if (!this.isAnyPeerScreenSharing()) {
                    this.$Call$p_7 = false;
                }
            }
            this.trigger(o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.SCREEN_SHARE_STATES));
        };
        a.setSelfScreenShareRejected = function(t) {
            this.$Call$p_7 = t;
            this.trigger(o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.SCREEN_SHARE_STATES));
        };
        a.isSelfScreenShareRejected = function() {
            return this.$Call$p_7;
        };
        a.tryMarkScreenShareUpdateAppModalShown = function() {
            if (this.$Call$p_8) {
                return false;
            }
            this.$Call$p_8 = true;
            return true;
        };
        a.isSelfScreenSharing = function() {
            return this.$Call$p_3 === o("WAWebVoipWaCallEnums").ScreenShareState.Started;
        };
        a.isAnyPeerScreenSharing = function() {
            return new Set(this.$Call$p_5.values()).has(o("WAWebVoipWaCallEnums").ScreenShareState.Started);
        };
        a.getScreenSharingPeerJid = function() {
            for (const [t, n] of this.$Call$p_5){
                if (n === o("WAWebVoipWaCallEnums").ScreenShareState.Started) {
                    return t;
                }
            }
            return null;
        };
        a.isDualStreamScreenShareEnabled = function() {
            if (this.$Call$p_9 == null) {
                this.$Call$p_9 = o("WAWebABProps").getABPropConfigValue("calling_screen_share_milestone_version") >= s;
            }
            return this.isDualStreamSsEnabled && this.$Call$p_9;
        };
        a.isDualStreamScreenShareReceiverEnabled = function() {
            if (this.$Call$p_10 == null) {
                this.$Call$p_10 = o("WAWebABProps").getABPropConfigValue("calling_enable_dual_stream_receiver");
            }
            return this.isDualStreamSsEnabled && this.$Call$p_10;
        };
        a.isSelfDualStreaming = function() {
            return this.isDualStreamScreenShareEnabled() && this.$Call$p_3 === o("WAWebVoipWaCallEnums").ScreenShareState.Started && this.$Call$p_4 >= s;
        };
        a.isPeerDualStreaming = function(t) {
            return this.isDualStreamScreenShareReceiverEnabled() && !o("WAWebUserPrefsMeUser").isMeAccount(t) && this.$Call$p_5.get(t) === o("WAWebVoipWaCallEnums").ScreenShareState.Started && (this.$Call$p_6.get(t) ?? 0) >= s;
        };
        a.getDualStreamingPeerJids = function() {
            if (!this.isDualStreamScreenShareReceiverEnabled()) {
                return [];
            }
            const e = [];
            for (const [r, a] of this.$Call$p_5){
                if (a === o("WAWebVoipWaCallEnums").ScreenShareState.Started && (this.$Call$p_6.get(r) ?? 0) >= s) {
                    e.push(r);
                }
            }
            return e;
        };
        a.setReactionForParticipant = function(t, n) {
            const e = t.toString();
            this.$Call$p_11.set(e, n);
            this.trigger(o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.REACTION_STATES));
        };
        a.clearReactionForParticipant = function(t) {
            const e = t.toString();
            this.$Call$p_11.delete(e);
            this.trigger(o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.REACTION_STATES));
        };
        a.getReactionForParticipant = function(t) {
            const e = typeof t === "string" ? t : t.toString();
            return this.$Call$p_11.get(e);
        };
        a.setRaisedHandForParticipant = function(t) {
            const e = t.toString();
            this.$Call$p_12.set(e, true);
            this.trigger(o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.RAISED_HAND_STATES));
        };
        a.clearRaisedHandForParticipant = function(t) {
            const e = t.toString();
            this.$Call$p_12.delete(e);
            this.trigger(o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.RAISED_HAND_STATES));
        };
        a.isHandRaisedForParticipant = function(t) {
            const n = typeof t === "string" ? t : t.toString();
            return this.$Call$p_12.get(n) ?? false;
        };
        a.setGroupParticipantMediaStates = function(t, n) {
            this.$Call$p_13 = t;
            this.$Call$p_14 = n;
        };
        a.getParticipantVideoState = function(t) {
            const e = this.$Call$p_13.get(t.toString());
            if (e != null || this.isGroup) {
                return e;
            }
            if (o("WAWebUserPrefsMeUser").isMeAccount(t)) {
                return this.selfVideoState;
            }
            return this.peerVideoState;
        };
        a.isParticipantVideoMuted = function(t) {
            const e = this.getParticipantVideoState(t);
            if (e == null) {
                return true;
            }
            return o("WAWebVoipVideoStateUtils").isVideoMuted(e);
        };
        a.getParticipantMuteState = function(t) {
            const e = this.$Call$p_14.get(t.toString());
            if (e != null || this.isGroup) {
                return e;
            }
            if (o("WAWebUserPrefsMeUser").isMeAccount(t)) {
                return this.selfMicMuted;
            }
            return this.peerMicMuted;
        };
        a.isParticipantMicMuted = function(t) {
            return this.getParticipantMuteState(t) ?? false;
        };
        a.updateParticipantVideoState = function(t, n) {
            this.$Call$p_13.set(t.toString(), n);
        };
        a.updateParticipantMicState = function(t, n) {
            this.$Call$p_14.set(t.toString(), n);
        };
        a.$Call$p_16 = function(t) {
            if (!(r("WAWebEnvironment").isWindows && !o("WAWebVoipGatingUtils").isWinHybridPlusEnabled()) && this.peerJid) {
                const e = {
                    wid: this.peerJid,
                    msgId: this.id,
                    isVideo: this.isVideo,
                    isGroup: this.isGroup,
                    isSilenced: this.isSilenced,
                    groupJid: this.groupJid,
                    groupCallParticipants: this.groupCallParticipants
                };
                if (!this.offerReceivedWhileOffline && this.getState() === o("WAWebVoipWaCallEnums").CallState.ReceivedCall) {
                    r("WAWebCallNotificationBus").trigger("alert_call", e);
                    const n = o("WAWebPttAudioChannels").MainAudioChannel.claim(this, r("WAWebNoop"));
                    n();
                } else {
                    r("WAWebCallNotificationBus").trigger("cancel_call", e);
                    const a = this.getState();
                    if (t === o("WAWebVoipWaCallEnums").CallState.ReceivedCall && !this.wasEverConnected && !this.outgoing && !this.userEndedCall && !o("WAWebVoipCallStateUtils").isCallConnecting(a) && !o("WAWebVoipCallStateUtils").isCallConnected(a) && !c(this.callLogResult)) {
                        r("WAWebCallNotificationBus").trigger("missed_call", e);
                    }
                }
            }
        };
        return n;
    })(r("WAWebEventEmitter"));
    function c(e) {
        return e === o("WAWebVoipWaCallEnums").CallLogResult.AcceptedElsewhere || e === o("WAWebVoipWaCallEnums").CallLogResult.ScreenedElsewhere;
    }
    l.default = u;
}, 98);