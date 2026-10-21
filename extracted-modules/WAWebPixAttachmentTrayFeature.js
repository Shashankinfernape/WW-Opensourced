__d("WAWebPixAttachmentTrayFeature", [
    "WAWebABProps",
    "WAWebConnGetters",
    "WAWebConnModel",
    "WAWebContactGetters",
    "WAWebGetMessageChatTypeFromWid",
    "WAWebPaymentsChatUtils",
    "WAWebPaymentsConstants",
    "WAWebPaymentsGatingUtils",
    "WAWebPixFeature",
    "WAWebPixQuickReplyFeature",
    "WAWebWamEnumMessageChatType"
], function(t, n, r, o, a, i, l) {
    function e() {
        return o("WAWebABProps").getABPropConfigValue("payments_br_pix_web_attachment_tray");
    }
    function s(t) {
        const n = o("WAWebConnGetters").getIsSMB(o("WAWebConnModel").Conn) && o("WAWebPixFeature").isPixEnabled() && o("WAWebABProps").getABPropConfigValue("payments_br_pix_on_web") && e();
        const r = !o("WAWebConnGetters").getIsSMB(o("WAWebConnModel").Conn) && o("WAWebPaymentsGatingUtils").consumerPixActionsEnabled();
        if (!n && !r || o("WAWebContactGetters").getIsMe(t.contact) || t.contact.isEnterprise || t.id.isAiHub()) {
            return false;
        }
        const a = o("WAWebGetMessageChatTypeFromWid").getMessageChatTypeFromWid(t.id);
        if (a === o("WAWebWamEnumMessageChatType").MESSAGE_CHAT_TYPE.INDIVIDUAL) {
            return o("WAWebPaymentsChatUtils").doesUserHaveCountryPhoneNumber(t.id, o("WAWebPaymentsConstants").BRAZIL_COUNTRY_CODE);
        }
        if (a === o("WAWebWamEnumMessageChatType").MESSAGE_CHAT_TYPE.GROUP) {
            if (r) {
                return o("WAWebPaymentsGatingUtils").consumerSharePixGroupsEnabled() && o("WAWebPixQuickReplyFeature").isEligiblePixGroupChat(t);
            }
            return o("WAWebPixQuickReplyFeature").showPixQuickReplyInAttachmentTrayForGroups(t);
        }
        return false;
    }
    l.shouldShowPixInAttachmentTray = s;
}, 98);