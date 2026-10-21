__d("WAWebShouldShowCallButtons", [
    "WAWebBizCoexGatingUtils",
    "WAWebChatGetters",
    "WAWebContactGetters",
    "WAWebFrontendChatGetters",
    "WAWebFrontendContactGetters",
    "WAWebGroupMetadataTypeUtils",
    "WAWebGroupType"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
        let n;
        const e_contact = e.contact;
        const a = o("WAWebChatGetters").getIsGroup(e);
        const i = o("WAWebChatGetters").getIsNewsletter(e);
        const l = o("WAWebChatGetters").getIsBroadcast(e);
        const s = o("WAWebFrontendChatGetters").getGroupMetadata(e);
        const u = a && (s?.participants.length ?? 0) === 1;
        const shouldDisableStartCall = a && ((s == null ? undefined : s.participants.iAmMember()) !== true || s?.announce === true && !((n = s == null ? undefined : s.participants.iAmAdmin()) != null && n) || s?.isSuspendedOrTerminated() === true || u);
        const m = s?.hasCapi === true;
        const shouldShow = c(e_contact) && o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(s) !== o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP && !m && !i && !shouldDisableStartCall && !l;
        return {
            shouldShow,
            shouldDisableStartCall
        };
    }
    function s(t) {
        return e(t).shouldShow;
    }
    function u(e) {
        return !e.isBot() && !e.isAiHub() && !e.isPSA();
    }
    function c(e) {
        return !o("WAWebContactGetters").getIsMe(e) && !o("WAWebFrontendContactGetters").getIsContactBlocked(e) && !e.isEnterprise && u(e.id) && !o("WAWebBizCoexGatingUtils").isCallingDisabledOnAuthAgentSoftOffboarded();
    }
    l.getCallButtonsState = e;
    l.shouldShowCallButtons = s;
    l.canBeCallParticipant = u;
    l.canCallContact = c;
}, 98);