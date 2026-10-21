__d("WAWebMsgInfoUtils", [
    "WAWebAgentModelUtils",
    "WAWebBizCtwaAGMUtils",
    "WAWebChatCollection",
    "WAWebFrontendMsgGetters",
    "WAWebGroupMetadataGetters",
    "WAWebGroupType",
    "WAWebMsgGetters",
    "WAWebMsgMayFail"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        if (o("WAWebMsgGetters").getIsNewsletterMsg(e) || o("WAWebFrontendMsgGetters").getAsAlbum(e) || o("WAWebFrontendMsgGetters").getAsCallLog(e) || o("WAWebBizCtwaAGMUtils").isAutomatedGreetingMessage({
            isAGMShown: e.ctwaContext?.automatedGreetingMessageShown,
            msgSource: e.ctwaContext?.sourceApp,
            msgSubtype: e.subtype,
            msgType: e.type
        })) {
            return false;
        }
        return !!(o("WAWebMsgGetters").getIsSentByMe(e) && !o("WAWebFrontendMsgGetters").getAsRevoked(e) && !o("WAWebMsgMayFail").msgMayFail(e) && (!e.isMdHistoryMsg || o("WAWebAgentModelUtils").canUserSeeMessageAttribution() && e.agentId != null));
    }
    function s(e, t) {
        const n = {};
        if (e.isGroup()) {
            n.groupData = u(e, t);
        }
        return n;
    }
    function u(e, isLid) {
        const n = o("WAWebChatCollection").ChatCollection.get(e);
        const r = {
            groupId: e.toString(),
            amIAdmin: null,
            isCag: null,
            isLid,
            isLidAddressingMode: null,
            wamTypeOfGroup: null,
            participantCount: null,
            deviceCount: null,
            deviceSizeBucket: null,
            isCapiGroup: null,
            isOpenBotGroup: null,
            isTeeBotGroup: null
        };
        const a = n?.groupMetadata;
        if (a) {
            const i = !!(a != null && a.isLidAddressingMode);
            const l = o("WAWebGroupMetadataGetters").getGroupType(a);
            const s = l === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP;
            r.wamTypeOfGroup = o("WAWebGroupType").groupTypeToWamEnum(l);
            r.isCag = s;
            r.isLidAddressingMode = i;
            r.isCapiGroup = a.hasCapi === true;
            r.amIAdmin = a.participants.iAmAdmin();
            r.participantCount = a.participants.length;
        }
        return r;
    }
    l.canOpenInfoDrawer = e;
    l.getGroupMessageSendReporterOptions = s;
}, 98);