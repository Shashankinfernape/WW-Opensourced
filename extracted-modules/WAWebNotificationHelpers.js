__d("WAWebNotificationHelpers", [
    "fbt",
    "WAWebABProps",
    "WAWebBizAiStrings",
    "WAWebChatCollection",
    "WAWebChatGetters",
    "WAWebCmd",
    "WAWebEnvironment",
    "WAWebFbtCommon",
    "WAWebFrontendContactGetters",
    "WAWebFrontendMsgGetters",
    "WAWebGroupMetadataCollection",
    "WAWebGroupMetadataGetters",
    "WAWebMsgGetters",
    "WAWebMuteCollection",
    "WAWebMuteGetters",
    "WAWebNotificationPermission",
    "WAWebOfflineHandler",
    "WAWebParticipantListUtils",
    "WAWebQuotedMsgModelUtils",
    "WAWebSettingsGetters",
    "WAWebSettingsModel",
    "WAWebUnknownUserDisplayEnricher",
    "WAWebUserPrefsNotifications",
    "WAWebWamEnumOppositeVisibleIdentificationType",
    "gkx",
    "nullthrows"
], function(t, n, r, o, a, i, l, s) {
    function e() {
        return document.hasFocus();
    }
    function u() {
        return o("WAWebOfflineHandler").OfflineMessageHandler.isResumeOnSocketDisconnectInProgress() || !o("WAWebCmd").Cmd.isOfflineDeliveryEnd;
    }
    function c(e, t = true) {
        if (!o("WAWebChatGetters").getIsGroup(e) || o("WAWebChatGetters").getIsGroup(e) && e.isReadOnly) {
            return false;
        }
        const n = Date.now();
        const a = e.squelch || 0;
        if (n > a) {
            if (t) {
                r("WAWebGroupMetadataCollection").find(e.id).then((t)=>{
                    if (t != null) {
                        const n = d(e.id, t);
                        e.squelch = Date.now() + n;
                    }
                });
            }
            return false;
        }
        return true;
    }
    function d(e, t) {
        const length = t.participants.length;
        return Math.min(120, 30 + 5 * length) * 1000;
    }
    function m(e) {
        let t;
        const n = o("WAWebFrontendMsgGetters").getMaybeChat(e);
        return n != null && !!((t = n.groupMetadata) != null && t.isParentGroup);
    }
    function p(e) {
        if (r("gkx")("26258") || !o("WAWebMsgGetters").getIsGroupMsg(e) || g(e)) {
            return false;
        }
        return !!o("WAWebUserPrefsNotifications").getIgnoreNondirectGroupMsg();
    }
    function _(e) {
        const t = o("WAWebFrontendMsgGetters").getChat(e);
        if (t == null || !o("WAWebMuteGetters").getIsMuted(t.mute)) {
            return false;
        }
        if (!o("WAWebChatGetters").getIsGroup(t)) {
            return true;
        }
        if (g(e) || o("WAWebMsgGetters").getHasMentionAll(e)) {
            const n = o("WAWebMsgGetters").getSender(e);
            if (n == null) {
                return false;
            }
            const r = o("WAWebChatCollection").ChatCollection.get(n);
            return r != null && o("WAWebMuteGetters").getIsMuted(r.mute) === true;
        }
        return true;
    }
    function f(e) {
        const t = o("WAWebFrontendMsgGetters").getChat(e);
        if (t == null || !o("WAWebMuteGetters").getIsMuted(t.mute) || !o("WAWebChatGetters").getIsGroup(t)) {
            return false;
        }
        return o("WAWebMsgGetters").getHasMentionAll(e) && o("WAWebMuteGetters").getIsMentionAllMuted(t.mute);
    }
    function g(e) {
        return o("WAWebMsgGetters").getHasMentionOfMe(e) || o("WAWebQuotedMsgModelUtils").isMyQuotedMsg(e);
    }
    function h(e) {
        const t = o("WAWebFrontendMsgGetters").getMaybeChat(e);
        if (t == null || !o("WAWebSettingsGetters").getShowArchiveV2(r("WAWebSettingsModel")) || !t.archive) {
            return false;
        }
        if (!o("WAWebChatGetters").getIsGroup(t)) {
            return true;
        }
        if (g(e)) {
            const n = o("WAWebMsgGetters").getSender(e);
            const a = n != null ? o("WAWebChatCollection").ChatCollection.get(n) : null;
            return a != null && o("WAWebMuteGetters").getIsMuted(a.mute) === true;
        }
        return true;
    }
    function y(e) {
        if (o("WAWebChatGetters").getIsGroup(e)) {
            return s._("WhatsApp group message");
        }
        return s._("WhatsApp message");
    }
    function C(e) {
        if (e.isLocked) {
            return r("WAWebFbtCommon")("WhatsApp").toString();
        }
        if (e.id.isAiHub()) {
            return o("WAWebBizAiStrings").getBizAiHubTitle().toString();
        }
        const e_groupMetadata = e.groupMetadata;
        if (e_groupMetadata != null && o("WAWebGroupMetadataGetters").getIsUnnamed(e_groupMetadata)) {
            return o("WAWebParticipantListUtils").calculateUnnamedGroupFullParticipantsList(r("nullthrows")(e.groupMetadata), true);
        }
        const n = e.msgs.last();
        if (n?.subtype === "sender_invite") {
            const a = o("WAWebFrontendContactGetters").getFormattedName(e.contact);
            if (n?.templateParams && n?.templateParams[0] === "true") {
                return s._("{receiver_name} accepted your invitation", [
                    s._param("receiver_name", a)
                ]).toString();
            }
            return s._("{receiver_name} joined WhatsApp", [
                s._param("receiver_name", a)
            ]).toString();
        }
        const i = o("WAWebFrontendContactGetters").getFormattedNameAndType(e.contact);
        const { displayName, type } = i;
        if (!o("WAWebChatGetters").getIsGroup(e) && e.contact != null && type === o("WAWebWamEnumOppositeVisibleIdentificationType").OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.PLACEHOLDER) {
            o("WAWebUnknownUserDisplayEnricher").logUnknownUserDisplayed("push_notification", e.contact.id);
        }
        return displayName || y(e).toString();
    }
    function b(t) {
        if (r("WAWebEnvironment").isWindows) {
            return e() && t?.isChatsSurfaceActive === true;
        }
        return e();
    }
    function v(e) {
        const t = o("WAWebABProps").getABPropConfigValue("wa_web_enable_granular_notifications");
        if (!t) {
            return o("WAWebMuteCollection").MuteCollection.getGlobalSounds();
        }
        if (e && t) {
            const n = o("WAWebChatGetters").getIsGroup(e);
            if (n) {
                return o("WAWebMuteCollection").MuteCollection.getGlobalGroupSoundsEnabled();
            }
            return o("WAWebMuteCollection").MuteCollection.getGlobalSoundsEnabled();
        }
        return true;
    }
    function S(e) {
        const t = o("WAWebABProps").getABPropConfigValue("wa_web_enable_granular_notifications");
        if (!o("WAWebNotificationPermission").isNotificationPermissionGranted()) {
            return false;
        }
        if (!t) {
            return o("WAWebMuteCollection").MuteCollection.getGlobalNotifications();
        }
        if (e) {
            const n = o("WAWebChatGetters").getIsGroup(e);
            if (n) {
                return o("WAWebMuteCollection").MuteCollection.getGlobalGroupNotificationsEnabled();
            }
            return o("WAWebMuteCollection").MuteCollection.getGlobalNotificationsEnabled();
        }
        return true;
    }
    l.appIsActive = e;
    l.isOfflineResumeInProgress = u;
    l.shouldSquelch = c;
    l._calculateTimeoutFromGroupMetadata = d;
    l.isCommunityHomeAdd = m;
    l.shouldIgnoreGroupMsg = p;
    l.isMutedAndNotMentioned = _;
    l.isMentionAllMutedForMsg = f;
    l.isMeUserMentionedOrQuoted = g;
    l.isArchivedAndNotMentioned = h;
    l.getNotificationTitle = C;
    l.shouldMuteDueToAppState = b;
    l.shouldPlaySoundGranular = v;
    l.shouldEnableNotificationGranular = S;
}, 226);