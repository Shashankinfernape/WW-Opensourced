__d("WAWebPixQuickReplyFeature", [
    "WAWebABProps",
    "WAWebGetMessageChatTypeFromWid",
    "WAWebPaymentsChatUtils",
    "WAWebPaymentsConstants",
    "WAWebUserPrefsCustomPaymentMethods",
    "WAWebWamEnumMessageChatType"
], function(t, n, r, o, a, i, l) {
    const e = 10;
    function s() {
        return o("WAWebABProps").getABPropConfigValue("payments_br_pix_quick_reply_enabled");
    }
    function u() {
        return o("WAWebABProps").getABPropConfigValue("br_payments_pix_groups_enabled");
    }
    function c(e) {
        return o("WAWebUserPrefsCustomPaymentMethods").isPIXValid() && p(e.groupMetadata) && u();
    }
    function d(e) {
        return s() && c(e);
    }
    function m({ groupMetadata }) {
        if (groupMetadata == null || groupMetadata.participants.length === 0 || groupMetadata.participants.length > e) {
            return false;
        }
        return p(groupMetadata);
    }
    function p(groupMetadata) {
        if (groupMetadata == null) {
            return false;
        }
        const e_participants = groupMetadata.participants;
        return e_participants.every((e)=>o("WAWebPaymentsChatUtils").doesUserHaveCountryPhoneNumber(e.id, o("WAWebPaymentsConstants").BRAZIL_COUNTRY_CODE));
    }
    function _(e) {
        if (!s() || e == null) {
            return false;
        }
        const t = o("WAWebGetMessageChatTypeFromWid").getMessageChatTypeFromWid(e.id);
        switch(t){
            case o("WAWebWamEnumMessageChatType").MESSAGE_CHAT_TYPE.INDIVIDUAL:
                return o("WAWebPaymentsChatUtils").doesUserHaveCountryPhoneNumber(e.id, o("WAWebPaymentsConstants").BRAZIL_COUNTRY_CODE);
            case o("WAWebWamEnumMessageChatType").MESSAGE_CHAT_TYPE.GROUP:
                return c(e);
            default:
                return false;
        }
    }
    l.showPixQuickReplyInAttachmentTrayForGroups = d;
    l.isEligiblePixGroupChat = m;
    l.shouldShowPixQuickReplyForChat = _;
}, 98);