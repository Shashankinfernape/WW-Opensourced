__d("WAWebFormatPinInChatNotification", [
    "fbt",
    "WAWebChatCommunityUtils",
    "WAWebChatContactUtils",
    "WAWebCommonMsgTemplateParamsUtils",
    "WAWebContactCollection",
    "WAWebContactGetters",
    "WAWebFrontendContactGetters",
    "WAWebFrontendMsgGetters",
    "WAWebMsgGetters",
    "WAWebUserPrefsMeUser",
    "nullthrows"
], function(t, n, r, o, a, i, l, s) {
    function e(e) {
        const a = r("nullthrows")(o("WAWebCommonMsgTemplateParamsUtils").interpretMsgTemplateParams({
            type: "pinned_message",
            templateParams: e.templateParams
        })?.[0] ?? o("WAWebMsgGetters").getSender(e));
        const i = o("WAWebUserPrefsMeUser").isMeAccount(a);
        if (i) {
            return s._("You pinned a message");
        }
        const l = o("WAWebContactCollection").ContactCollection.gadd(a);
        const u = o("WAWebContactGetters").getNotifyName(l);
        let c;
        if (o("WAWebFrontendContactGetters").getIsMyContact(l)) {
            c = o("WAWebFrontendContactGetters").getFormattedName(l);
        } else if (u != null) {
            c = o("WAWebChatContactUtils").getFormattedNotifyName(o("WAWebContactGetters").getNotifyName(l));
        } else {
            c = o("WAWebChatCommunityUtils").shouldMaskPhoneNumberForChat(o("WAWebFrontendMsgGetters").getChat(e), l) ? o("WAWebFrontendContactGetters").getMaskedPhoneLid(l) : o("WAWebFrontendContactGetters").getFormattedUsernameOrPhone(l);
        }
        return s._("{contact-name} pinned a message", [
            s._param("contact-name", c)
        ]);
    }
    l.formatPinInChatNotification = e;
}, 226);