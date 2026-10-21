__d("WAWebUprAttachmentTrayFeature", [
    "WAWebBizFrontendGatingUtils",
    "WAWebConnGetters",
    "WAWebConnModel",
    "WAWebContactGetters",
    "WAWebGetMessageChatTypeFromWid",
    "WAWebPaymentsChatUtils",
    "WAWebUserPrefsCustomPaymentMethods",
    "WAWebWamEnumMessageChatType"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        if (!o("WAWebConnGetters").getIsSMB(o("WAWebConnModel").Conn) || !o("WAWebBizFrontendGatingUtils").isUprAttachmentTrayEnabled(t) || !s(e) || !o("WAWebBizFrontendGatingUtils").isUprSendEnabledForCountry(t) || o("WAWebGetMessageChatTypeFromWid").getMessageChatTypeFromWid(e.id) !== o("WAWebWamEnumMessageChatType").MESSAGE_CHAT_TYPE.INDIVIDUAL) {
            return false;
        }
        return o("WAWebPaymentsChatUtils").doesUserHaveCountryPhoneNumber(e.id, t);
    }
    function s({ contact }) {
        return contact != null && !o("WAWebContactGetters").getIsMe(contact) && !contact.isEnterprise;
    }
    function u(t) {
        const n = new Map;
        for (const r of o("WAWebUserPrefsCustomPaymentMethods").getAllUprStoredKeys()){
            const i = n.get(r.country) ?? [];
            i.push(r);
            n.set(r.country, i);
        }
        for (const [s, u] of n){
            if (e(t, s)) {
                return {
                    country: s,
                    currency: u[0].currency,
                    keys: u
                };
            }
        }
        return null;
    }
    l.isChatEligibleForUprCountry = e;
    l.resolveUprMethodForChat = u;
}, 98);