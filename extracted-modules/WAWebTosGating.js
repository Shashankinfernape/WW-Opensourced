__d("WAWebTosGating", [
    "WAWebABPropsInternalNumber",
    "WAWebBotGating",
    "WAWebBotTos",
    "WAWebBotTosIds",
    "WAWebBotUtils",
    "WAWebHandleMsgTypes.flow",
    "WAWebPDFNCommonUtils",
    "WAWebTos",
    "WAWebTosGatingUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        if (o("WAWebTosGatingUtils").tos3GatingEnabled()) {
            if (o("WAWebTos").TosManager.getState(o("WAWebTos").TOS_3_ID) === "NOT_ACCEPTED" && e.privacyMode?.hostStorage === o("WAWebHandleMsgTypes.flow").HostStorageEnumType.Facebook && !o("WAWebABPropsInternalNumber").getFbBrandedNumber(e.id.user)) {
                return true;
            }
        }
        return false;
    }
    function s(e) {
        if (o("WAWebBotTos").hasAcceptedNonBlockingBotTos() || o("WAWebPDFNCommonUtils").hasAcceptedTos(String(o("WAWebBotGating").getMasterBotNoticeId()))) {
            return false;
        }
        const t = o("WAWebBotTosIds").getBusinessAssistantLegacyNoticeId();
        if (t != null && o("WAWebPDFNCommonUtils").hasAcceptedTos(String(t)) || o("WAWebBotUtils").isBotChannelFBID(e.id)) {
            return false;
        }
        return !!(e.id.isPnBot() && !o("WAWebBotTos").hasSeenAgentTos() && !o("WAWebBotTos").hasSeenShortcutTos() && !o("WAWebBotTos").hasSeenInvokeTos());
    }
    l.shouldBlockByTos = e;
    l.shouldBlockByBotTos = s;
}, 98);