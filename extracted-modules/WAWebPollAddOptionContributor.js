__d("WAWebPollAddOptionContributor", [
    "WAWebChatCommunityUtils",
    "WAWebChatContactUtils",
    "WAWebContactCollection",
    "WAWebContactGetters",
    "WAWebFrontendContactGetters",
    "WAWebFrontendMsgGetters",
    "WAWebMsgGetters",
    "WAWebUserPrefsMeUser"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WAWebMsgGetters").getSender(e);
        if (t == null) {
            return null;
        }
        if (o("WAWebUserPrefsMeUser").isMeAccount(t)) {
            return {
                kind: "me"
            };
        }
        const contact = o("WAWebContactCollection").ContactCollection.gadd(t);
        return {
            kind: "other",
            name: s({
                chat: o("WAWebFrontendMsgGetters").getChat(e),
                contact,
                formattedName: o("WAWebFrontendContactGetters").getFormattedName(contact),
                isMyContact: o("WAWebFrontendContactGetters").getIsMyContact(contact),
                notifyName: o("WAWebContactGetters").getNotifyName(contact)
            })
        };
    }
    function s({ chat, contact, formattedName, isMyContact, notifyName }) {
        if (isMyContact) {
            return formattedName;
        }
        if (notifyName != null) {
            return o("WAWebChatContactUtils").getFormattedNotifyName(notifyName);
        }
        if (o("WAWebChatCommunityUtils").shouldMaskPhoneNumberForChat(chat, contact)) {
            return o("WAWebFrontendContactGetters").getMaskedPhoneLid(contact);
        }
        return o("WAWebFrontendContactGetters").getFormattedUsernameOrPhone(contact);
    }
    l.getPollAddOptionContributor = e;
    l.resolveContributorName = s;
}, 98);