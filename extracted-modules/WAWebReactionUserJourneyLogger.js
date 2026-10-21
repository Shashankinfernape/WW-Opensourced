__d("WAWebReactionUserJourneyLogger", [
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebGetSharedSessionId",
    "WAWebPonyfillsCryptoRandomUUID",
    "WAWebReactionUserJourneyWamEvent",
    "WAWebReactionsCollection",
    "WAWebUnifiedSession",
    "WAWebWamEnumReactionUserJourneyAction",
    "WAWebWamEnumTsSurface",
    "WAWebWamEnumUserJourneyChatType",
    "WAWebWamMsgUtils"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    class s {
        constructor(e = o("WAWebGetSharedSessionId").getSharedSessionId()){
            this.loggingEnabled = false;
            this.loggingEnabled = o("WAWebABProps").getABPropConfigValue("reaction_user_journey_logging_enabled");
            this.$1 = e;
        }
        trayOpen(t, n, r) {
            this.$10({
                chatId: t,
                message: n,
                entryPoint: r,
                uiSurface: m(t),
                action: o("WAWebWamEnumReactionUserJourneyAction").REACTION_USER_JOURNEY_ACTION.TRAY_OPEN
            });
        }
        searchOpen() {
            this.$10({
                action: o("WAWebWamEnumReactionUserJourneyAction").REACTION_USER_JOURNEY_ACTION.SEARCH_OPEN
            });
        }
        reactionSelect(t) {
            this.$10({
                action: t.length === 0 ? o("WAWebWamEnumReactionUserJourneyAction").REACTION_USER_JOURNEY_ACTION.REACTION_UNSELECT : o("WAWebWamEnumReactionUserJourneyAction").REACTION_USER_JOURNEY_ACTION.REACTION_SELECT
            });
        }
        reactionUnselect() {
            this.$10({
                action: o("WAWebWamEnumReactionUserJourneyAction").REACTION_USER_JOURNEY_ACTION.REACTION_UNSELECT
            });
        }
        reactionSearch() {
            this.$10({
                action: o("WAWebWamEnumReactionUserJourneyAction").REACTION_USER_JOURNEY_ACTION.REACTION_SEARCH
            });
        }
        trayClose() {
            this.$10({
                action: o("WAWebWamEnumReactionUserJourneyAction").REACTION_USER_JOURNEY_ACTION.TRAY_CLOSE
            });
        }
        reactionDetails(t, n, r) {
            this.$10({
                chatId: t,
                message: n,
                entryPoint: r,
                uiSurface: m(t),
                action: o("WAWebWamEnumReactionUserJourneyAction").REACTION_USER_JOURNEY_ACTION.REACTION_DETAILS
            });
        }
        selectProfile() {
            this.$10({
                action: o("WAWebWamEnumReactionUserJourneyAction").REACTION_USER_JOURNEY_ACTION.SELECT_PROFILE
            });
        }
        detailsDismiss() {
            this.$10({
                action: o("WAWebWamEnumReactionUserJourneyAction").REACTION_USER_JOURNEY_ACTION.DETAILS_DISMISS
            });
        }
        selectAlbumThumbnail() {
            this.$10({
                action: o("WAWebWamEnumReactionUserJourneyAction").REACTION_USER_JOURNEY_ACTION.SELECT_ALBUM_THUMBNAIL
            });
        }
        $10(n) {
            if (this.loggingEnabled) {
                const t = o("WAWebUnifiedSession").UnifiedSessionManager.getSessionId();
                if (t == null) {
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[uj] [reaction] Unified session ID is null"
                    ])));
                    return;
                }
                if (u(n.action) && this.$2 == null) {
                    this.$2 = r("WAWebPonyfillsCryptoRandomUUID")();
                    if (n.chatId != null) {
                        this.$3 = d(n.chatId);
                    }
                    this.$4 = n.uiSurface;
                    this.$5 = n.entryPoint;
                    const a = n.message;
                    if (a != null && a.id != null) {
                        const l = o("WAWebReactionsCollection").ReactionsCollection.get(a.id);
                        this.$7 = l?.reactionByMe != null;
                        this.$6 = (l?.reactions.length ?? 0) > 0;
                        this.$8 = o("WAWebWamMsgUtils").getWamMediaType(a);
                        this.$9 = o("WAWebWamMsgUtils").getWamMessageType(a);
                    }
                }
                const s = this.$2;
                if (s != null) {
                    const m = new (o("WAWebReactionUserJourneyWamEvent")).ReactionUserJourneyWamEvent;
                    m.appSessionId = this.$1;
                    m.unifiedSessionId = t;
                    m.userJourneyFunnelId = s;
                    if (this.$4 != null) {
                        m.uiSurface = this.$4;
                    }
                    if (this.$3 != null) {
                        m.userJourneyChatType = this.$3;
                    }
                    m.userJourneyEventMs = o("WATimeUtils").unixTimeMs();
                    m.reactionUserJourneyAction = n.action;
                    if (this.$5 != null) {
                        m.reactionUserJourneyEntryPoint = this.$5;
                    }
                    if (this.$7 != null) {
                        m.messageHasReaction = this.$7;
                    }
                    if (this.$6 != null) {
                        m.messageHasOwnReaction = this.$6;
                    }
                    if (this.$8 != null) {
                        m.messageMediaType = this.$8;
                    }
                    if (this.$9 != null) {
                        m.messageType = this.$9;
                    }
                    m.commit();
                    if (c(n.action)) {
                        this.$2 = null;
                        this.$3 = null;
                        this.$4 = null;
                        this.$5 = null;
                        this.$7 = null;
                        this.$6 = null;
                        this.$8 = null;
                        this.$9 = null;
                    }
                }
            }
        }
    }
    function u(action) {
        return action === o("WAWebWamEnumReactionUserJourneyAction").REACTION_USER_JOURNEY_ACTION.TRAY_OPEN || action === o("WAWebWamEnumReactionUserJourneyAction").REACTION_USER_JOURNEY_ACTION.REACTION_DETAILS;
    }
    function c(action) {
        return action === o("WAWebWamEnumReactionUserJourneyAction").REACTION_USER_JOURNEY_ACTION.TRAY_CLOSE || action === o("WAWebWamEnumReactionUserJourneyAction").REACTION_USER_JOURNEY_ACTION.REACTION_UNSELECT || action === o("WAWebWamEnumReactionUserJourneyAction").REACTION_USER_JOURNEY_ACTION.REACTION_SELECT || action === o("WAWebWamEnumReactionUserJourneyAction").REACTION_USER_JOURNEY_ACTION.DETAILS_DISMISS || action === o("WAWebWamEnumReactionUserJourneyAction").REACTION_USER_JOURNEY_ACTION.SELECT_PROFILE;
    }
    function d(chatId) {
        if (chatId.isUser()) {
            return o("WAWebWamEnumUserJourneyChatType").USER_JOURNEY_CHAT_TYPE.INDIVIDUAL;
        }
        if (chatId.isGroup()) {
            return o("WAWebWamEnumUserJourneyChatType").USER_JOURNEY_CHAT_TYPE.GROUP;
        }
        if (chatId.isNewsletter()) {
            return o("WAWebWamEnumUserJourneyChatType").USER_JOURNEY_CHAT_TYPE.CHANNEL;
        }
        return null;
    }
    function m(e) {
        if (e.isGroup()) {
            return o("WAWebWamEnumTsSurface").TS_SURFACE.GROUP_CHAT;
        }
        return o("WAWebWamEnumTsSurface").TS_SURFACE.CHAT_THREAD;
    }
    const p = new s;
    l.ReactionUserJourneyLogger = p;
}, 98);