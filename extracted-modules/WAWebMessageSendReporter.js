__d("WAWebMessageSendReporter", [
    "MetaConfig",
    "WALogger",
    "WAStartSendToSentQplFlow",
    "WAWebAfterReadUtils",
    "WAWebAppTracker",
    "WAWebCoreActionsODS",
    "WAWebCoreActionsODSMsgGetters",
    "WAWebCoreActionsODSSyncd",
    "WAWebEditMessageSendWamEvent",
    "WAWebEphemeralityResolver",
    "WAWebMessageSendWamEvent",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebNewsletterGatingUtils",
    "WAWebRevokeMessageSendWamEvent",
    "WAWebSessionScopeWamUtils",
    "WAWebStickerPremiumStatus",
    "WAWebUsernameGatingUtils",
    "WAWebUsernameTypes",
    "WAWebWamAddressingModeUtils",
    "WAWebWamEnumChatOriginsType",
    "WAWebWamEnumEditType",
    "WAWebWamEnumEncryptionTypeCode",
    "WAWebWamEnumMediaType",
    "WAWebWamEnumMessageDistributionEnumType",
    "WAWebWamEnumMessageSendResultType",
    "WAWebWamEnumMessageType",
    "WAWebWamEnumRevokeType",
    "WAWebWamGroupMetricUtils",
    "WAWebWamMessageUtils",
    "WAWebWamMsgUtils",
    "WAWebWamNumberToSizeBucket",
    "WAWebWid",
    "nullthrows",
    "qpl"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    const p = {
        createPostODSCountersFn: o("WAWebCoreActionsODSMsgGetters").createPostODSCountersFn,
        createPostODSErrorCountersFn: o("WAWebCoreActionsODSMsgGetters").createPostODSErrorCountersFn,
        logMCMigrationControl: o("WAWebCoreActionsODS").logMCMigrationControl,
        logMCMigrationTest: o("WAWebCoreActionsODS").logMCMigrationTest,
        logMCMigrationRegression: o("WAWebCoreActionsODSSyncd").logMCMigrationRegression
    };
    class _ {
        constructor(t, n){
            this.$3 = false;
            this.$4 = o("WAWebWamEnumMediaType").MEDIA_TYPE.NONE;
            this.$8 = false;
            this.$1 = t.to;
            if (h(t.type) && n?.isResend !== true) {
                this.$7 = o("WAStartSendToSentQplFlow").startSendToSentQplFlow({
                    chatType: f(t.to),
                    event: r("qpl")._(891433801, "3599"),
                    messageType: g(t.type, t.isGif)
                });
            }
            var l = !!t.caption;
            if (t.type === o("WAWebMsgType").MSG_TYPE.DOCUMENT) {
                l = o("WAWebMsgGetters").getIsCaptionByUser(t);
            }
            var m = n?.odsDeps ?? p;
            var _ = n?.frontendDeps;
            this.$5 = m.createPostODSCountersFn(t);
            this.$6 = m.createPostODSErrorCountersFn(t);
            var y = r("MetaConfig")._("434");
            var C = 0;
            if (y === 2) {
                m.logMCMigrationTest();
                C = 0.0000075;
            } else if (y === 1) {
                m.logMCMigrationControl();
                C = 0.0000015;
            }
            m.logMCMigrationRegression(y, C);
            var b = this.$1;
            this.$2 = new (o("WAWebMessageSendWamEvent")).MessageSendWamEvent({
                messageType: o("WAWebWamMsgUtils").getWamMessageType(t),
                messageMediaType: o("WAWebWamMsgUtils").getWamMediaType(t),
                mediaCaptionPresent: l,
                fastForwardEnabled: true,
                messageIsFanout: true,
                messageIsForward: !!t.isForwarded,
                messageIsRevoke: !!o("WAWebMsgGetters").getIsRevoke(t),
                isViewOnce: !!t.isViewOnce,
                isScheduled: !!o("WAWebMsgGetters").getIsScheduledMsg(t),
                isAReply: o("WAWebMsgGetters").getIsReply(t),
                e2eBackfill: !!(n != null && n.isResend),
                messageDistributionType: o("WAWebWamEnumMessageDistributionEnumType").MESSAGE_DISTRIBUTION_ENUM_TYPE.REGULAR_MESSAGE,
                editType: o("WAWebMsgGetters").getWamEditType(t),
                botType: o("WAWebWamMsgUtils").getWamBotType({
                    chatId: b,
                    bizBotType: t.bizBotType
                }),
                isAComment: o("WAWebMsgGetters").getType(t) === o("WAWebMsgType").MSG_TYPE.COMMENT
            });
            var v = o("WAWebMsgGetters").getIsGroupMsg(t);
            var S = o("WAWebMsgGetters").getIsNewsletterMsg(t);
            var R = t.to.isStatus();
            var L = _ ?? {};
            var E = L.ChatCollection;
            var k = L.ContactCollection;
            var I = k?.getMeContact();
            var T = b.isRegularUser() ? k?.get(b) : null;
            this.$2.hasUsername = o("WAWebUsernameTypes").isPresentUsername(I?.username);
            this.$2.hasUsernamePin = I?.usernameKey != null;
            if (T) {
                var D = _?.getFormattedUserAndType(T).type;
                if (D) {
                    this.$2.oppositeVisibleIdentification = D;
                }
                if (T.isHosted === true) {
                    this.$2.encryptionType = o("WAWebWamEnumEncryptionTypeCode").ENCRYPTION_TYPE_CODE.COEX;
                }
            }
            var x = o("WAWebWamMessageUtils").getVcardMsgWamData(t, "send");
            if (x) {
                var $ = x.lidOnlyVcardCount;
                var P = x.pnAndLidVcardCount;
                var N = x.pnOnlyVcardCount;
                this.$2.sharedPhoneNumberContactSize = N;
                this.$2.sharedUsernameContactSize = $;
                this.$2.sharedPhoneNumberWithUsernameContactSize = P;
            }
            var M;
            var w = E?.get(b) ?? {
                lidOriginType: o("WAWebUsernameTypes").LidOriginType.GENERAL
            };
            if (w != null && w.lidOriginType) {
                switch(w?.lidOriginType){
                    case o("WAWebUsernameTypes").LidOriginType.PNH_CTWA:
                        M = o("WAWebWamEnumChatOriginsType").CHAT_ORIGINS_TYPE.LID_CTWA;
                        break;
                    case o("WAWebUsernameTypes").LidOriginType.GENERAL:
                        M = o("WAWebWamEnumChatOriginsType").CHAT_ORIGINS_TYPE.OTHERS;
                        break;
                }
            } else {
                if (this.$1.isLid()) {
                    M = o("WAWebWamEnumChatOriginsType").CHAT_ORIGINS_TYPE.LID_CTWA;
                } else {
                    M = o("WAWebWamEnumChatOriginsType").CHAT_ORIGINS_TYPE.OTHERS;
                }
            }
            if (M) {
                this.$2.chatOrigins = M;
            }
            if (t.ephemeralDuration != null) {
                this.$2.ephemeralityDuration = t.ephemeralDuration;
            }
            var A = t.afterReadDuration;
            if (A != null && o("WAWebAfterReadUtils").isAfterReadEnabled()) {
                this.$2.isAfterRead = A > 0;
                this.$2.afterReadDuration = A;
            }
            var F = o("WAWebMsgGetters").getWamDisappearingModeTrigger(t);
            if (F != null) {
                this.$2.ephemeralityTriggerAction = F;
            }
            var O = o("WAWebMsgGetters").getWamDisappearingModeInitiatedByMe(t);
            if (O != null) {
                this.$2.ephemeralityInitiator = O;
            }
            if (!v && !S && !R) {
                this.$2.isLid = b.isLid();
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "MessageSendReporter constructor before get ephemeral for me"
                ])));
                var B = o("WAWebEphemeralityResolver").getEphemeralDurationForUser(k?.getMeContact());
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "MessageSendReporter constructor after get ephemeral for me"
                ])));
                if (B != null) {
                    this.$2.senderDefaultDisappearingDuration = B;
                }
                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "MessageSendReporter constructor before get ephemeral for wid"
                ])));
                var W = o("WAWebEphemeralityResolver").getEphemeralDurationForUser(k?.get(b));
                o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "MessageSendReporter constructor after get ephemeral for wid"
                ])));
                if (W != null) {
                    this.$2.receiverDefaultDisappearingDuration = W;
                }
            }
            if (o("WAWebMsgGetters").getIsRevoke(t)) {
                this.$2.revokeType = t.subtype === "admin_revoke" || t.subtype === "admin" ? o("WAWebWamEnumRevokeType").REVOKE_TYPE.ADMIN : o("WAWebWamEnumRevokeType").REVOKE_TYPE.SENDER;
                var q = o("WAWebMsgGetters").getRevokeDuration(t);
                if (q != null) {
                    this.$2.revokeDuration = q;
                }
            }
            if (o("WAWebMsgGetters").getIsEditProtocolMsg(t)) {
                var U = r("nullthrows")(n?.originalMessage, "edit protocol msg must have an original msg");
                this.$2.editDuration = o("WAWebMsgGetters").getT(t) - o("WAWebMsgGetters").getT(U);
                this.$4 = o("WAWebWamMsgUtils").getWamMediaType(U);
            }
            var V = o("WAWebMsgGetters").getWamDisappearingModeInitiator(t);
            if (V != null) {
                this.$2.disappearingChatInitiator = V;
            }
            var H = o("WAWebWamMsgUtils").getWamAgentEngagementType(t);
            if (H != null) {
                this.$2.agentEngagementType = H;
            }
            if (v) {
                var G;
                this.$2.isLid = !!(!(n == null || (G = n.groupData) == null) && G.isLidAddressingMode);
                if (n?.groupData != null) {
                    this.setGroupData(n.groupData);
                }
            }
            if (R) {
                this.$2.isLid = true;
            }
            if (S && o("WAWebNewsletterGatingUtils").isWamoSubLoggingEnabled()) {
                this.$2.isPremium = !!t.isWamoSub;
            }
            if (o("WAWebMsgGetters").getType(t) === o("WAWebMsgType").MSG_TYPE.STICKER) {
                this.$2.stickerIsPremium = t.stickerPremiumStatus === o("WAWebStickerPremiumStatus").StickerPremiumStatus.PREMIUM;
            }
            o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                "MessageSendReporter constructor done"
            ])));
        }
        setDeviceCount(t) {
            this.$2.deviceCount = o("WAWebWamGroupMetricUtils").capCount(t);
            this.$2.deviceSizeBucket = r("WAWebWamNumberToSizeBucket")(t);
        }
        setParticipantCount(t) {
            this.$2.participantCount = t;
        }
        setGroupData(t) {
            const e = o("WAWebWamAddressingModeUtils").getAddressingModeMetricsFromGroupMetadata(t);
            if (e != null) {
                this.$2.localAddressingMode = e;
            }
            if (t.wamTypeOfGroup != null) {
                this.$2.typeOfGroup = t.wamTypeOfGroup;
            }
            if (t.participantCount != null) {
                this.$2.participantCount = t.participantCount;
            }
            if (t.deviceCount != null) {
                this.$2.deviceCount = t.deviceCount;
            }
            if (t.deviceSizeBucket != null) {
                this.$2.deviceSizeBucket = t.deviceSizeBucket;
            }
        }
        setMessageDistributionType(t) {
            this.$2.messageDistributionType = t;
        }
        setMessageIsFirstUserMessage(t) {
            this.$2.messageIsFirstUserMessage = t;
        }
        setIsPq(t) {
            if (t === true) {
                this.$2.isPq = true;
            }
        }
        setCoexV2SendMode(t) {
            this.$2.encryptionType = t ? o("WAWebWamEnumEncryptionTypeCode").ENCRYPTION_TYPE_CODE.SELF_COEX_V2 : o("WAWebWamEnumEncryptionTypeCode").ENCRYPTION_TYPE_CODE.COEX_V2;
        }
        setSessionScope(t) {
            const e = o("WAWebSessionScopeWamUtils").sessionScopeToWamType(t);
            if (e != null) {
                this.$2.sessionScope = e;
            }
        }
        setOppositeHasUsername(t) {
            if (o("WAWebUsernameGatingUtils").usernameAdoptionAndEngagementMonitoringEnabled()) {
                this.$2.oppositeHasUsername = t;
            }
        }
        postSuccess() {
            o("WAWebAppTracker").AppTracker.stop(o("WAWebAppTracker").AppTrackerType.SendMessage);
            this.$2.messageSendResult = o("WAWebWamEnumMessageSendResultType").MESSAGE_SEND_RESULT_TYPE.OK;
            this.$2.messageSendResultIsTerminal = false;
            this.$9();
            this.$5();
            this.$10();
        }
        postFailure({ isTerminal, qplFailReason, result }) {
            o("WAWebAppTracker").AppTracker.stop(o("WAWebAppTracker").AppTrackerType.SendMessage);
            this.$2.messageSendResult = result;
            this.$2.messageSendResultIsTerminal = isTerminal;
            this.$2.weight = 0;
            this.$9();
            this.$6(result, isTerminal);
            this.$11(result, qplFailReason);
        }
        $10() {
            const e = this.$7;
            if (!(e == null || this.$8)) {
                this.$8 = true;
                e.addPoint(o("WAStartSendToSentQplFlow").SendToSentPoint.ServerAckSent.valueOf());
                e.endSuccess();
            }
        }
        $11(t, n) {
            const e = this.$7;
            if (!(e == null || this.$8)) {
                this.$8 = true;
                e.endFail(n ?? "", {
                    string: {
                        messageSendResult: String(t)
                    }
                });
            }
        }
        $12() {
            new (o("WAWebRevokeMessageSendWamEvent")).RevokeMessageSendWamEvent({
                messageSendResultIsTerminal: this.$2.messageSendResultIsTerminal,
                messageType: this.$2.messageType,
                resendCount: this.$2.resendCount,
                retryCount: this.$2.retryCount,
                revokeDuration: this.$2.revokeDuration,
                revokeType: this.$2.revokeType
            }).commit();
        }
        $13() {
            new (o("WAWebEditMessageSendWamEvent")).EditMessageSendWamEvent({
                messageSendResultIsTerminal: this.$2.messageSendResultIsTerminal,
                messageType: this.$2.messageType,
                resendCount: this.$2.resendCount,
                retryCount: this.$2.retryCount,
                editType: this.$2.editType,
                editDuration: this.$2.editDuration,
                typeOfGroup: this.$2.typeOfGroup,
                mediaType: this.$4
            }).commit();
        }
        $9() {
            if (this.$3) {
                o("WALogger").WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[MessageSendReporter] skip post, already posted"
                ])));
                return;
            }
            this.$3 = true;
            this.$2.markMessageSendT();
            if (this.$2.messageSendT != null) {
                o("WAWebAppTracker").attachWAMAppContext(this.$2, this.$2.messageSendT);
            }
            this.$2.commit();
            if (this.$2.messageIsRevoke && this.$2.messageType !== o("WAWebWamEnumMessageType").MESSAGE_TYPE.STATUS) {
                this.$12();
            }
            if (this.$2.editType !== o("WAWebWamEnumEditType").EDIT_TYPE.NOT_EDITED) {
                this.$13();
            }
        }
    }
    function f(e) {
        if (r("WAWebWid").isStatus(e)) {
            return o("WAStartSendToSentQplFlow").SendToSentChatType.Status;
        }
        if (r("WAWebWid").isNewsletter(e)) {
            return o("WAStartSendToSentQplFlow").SendToSentChatType.Channel;
        }
        if (r("WAWebWid").isGroup(e)) {
            return o("WAStartSendToSentQplFlow").SendToSentChatType.Group;
        }
        if (r("WAWebWid").isBroadcast(e)) {
            return o("WAStartSendToSentQplFlow").SendToSentChatType.Broadcast;
        }
        return o("WAStartSendToSentQplFlow").SendToSentChatType.Individual;
    }
    function g(type, isGif) {
        if (type === o("WAWebMsgType").MSG_TYPE.IMAGE) {
            return o("WAStartSendToSentQplFlow").SendToSentMessageType.Image;
        }
        if (type === o("WAWebMsgType").MSG_TYPE.VIDEO) {
            if (isGif === true) {
                return o("WAStartSendToSentQplFlow").SendToSentMessageType.Gif;
            }
            return o("WAStartSendToSentQplFlow").SendToSentMessageType.Video;
        }
        if (type === o("WAWebMsgType").MSG_TYPE.AUDIO) {
            return o("WAStartSendToSentQplFlow").SendToSentMessageType.Audio;
        }
        if (type === o("WAWebMsgType").MSG_TYPE.PTT) {
            return o("WAStartSendToSentQplFlow").SendToSentMessageType.Ptt;
        }
        if (type === o("WAWebMsgType").MSG_TYPE.DOCUMENT) {
            return o("WAStartSendToSentQplFlow").SendToSentMessageType.Document;
        }
        if (type === o("WAWebMsgType").MSG_TYPE.STICKER) {
            return o("WAStartSendToSentQplFlow").SendToSentMessageType.Sticker;
        }
        if (type === o("WAWebMsgType").MSG_TYPE.CHAT) {
            return o("WAStartSendToSentQplFlow").SendToSentMessageType.Text;
        }
        return o("WAStartSendToSentQplFlow").SendToSentMessageType.Unknown;
    }
    function h(type) {
        return type === o("WAWebMsgType").MSG_TYPE.IMAGE || type === o("WAWebMsgType").MSG_TYPE.VIDEO || type === o("WAWebMsgType").MSG_TYPE.AUDIO || type === o("WAWebMsgType").MSG_TYPE.PTT || type === o("WAWebMsgType").MSG_TYPE.DOCUMENT || type === o("WAWebMsgType").MSG_TYPE.STICKER;
    }
    l.MessageSendReporter = _;
}, 98);