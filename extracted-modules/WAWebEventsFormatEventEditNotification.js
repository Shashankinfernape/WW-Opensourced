__d("WAWebEventsFormatEventEditNotification", [
    "fbt",
    "WAWebChatCommunityUtils",
    "WAWebChatContactUtils",
    "WAWebContactCollection",
    "WAWebContactGetters",
    "WAWebFrontendContactGetters",
    "WAWebFrontendMsgGetters",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebUserPrefsMeUser",
    "nullthrows"
], function(t, n, r, o, a, i, l, s) {
    function e(e) {
        const t = r("nullthrows")(e.type === o("WAWebMsgType").MSG_TYPE.PROTOCOL && e.subtype === "event_edit_decrypted" ? e : null);
        const n = o("WAWebMsgCollection").MsgCollection.get(e.protocolMessageKey);
        const a = n ? o("WAWebMsgGetters").getSender(n) : e.protocolMessageKey.participant;
        if (!a) {
            if (t.isEventCanceled) {
                return s._("{event-name} was cancelled", [
                    s._param("event-name", t.eventName)
                ]);
            }
            return s._("{event-name} was updated", [
                s._param("event-name", t.eventName)
            ]);
        }
        const i = o("WAWebContactCollection").ContactCollection.gadd(a);
        const l = o("WAWebContactGetters").getNotifyName(i);
        let u;
        if (o("WAWebFrontendContactGetters").getIsMyContact(i)) {
            u = o("WAWebFrontendContactGetters").getFormattedName(i);
        } else if (l != null) {
            u = o("WAWebChatContactUtils").getFormattedNotifyName(o("WAWebContactGetters").getNotifyName(i));
        } else {
            u = o("WAWebChatCommunityUtils").shouldMaskPhoneNumberForChat(o("WAWebFrontendMsgGetters").getChat(e), i) ? o("WAWebFrontendContactGetters").getMaskedPhoneLid(i) : o("WAWebFrontendContactGetters").getFormattedUsernameOrPhone(i);
        }
        const c = o("WAWebUserPrefsMeUser").isMeAccount(a);
        const t_eventName = t.eventName;
        if (t.isEventCanceled) {
            if (c) {
                return s._("You cancelled {event-name}", [
                    s._param("event-name", t_eventName)
                ]);
            }
            return s._("{contact-name} cancelled {event-name}", [
                s._param("contact-name", u),
                s._param("event-name", t_eventName)
            ]);
        }
        if (c) {
            return s._("You updated {event-name}", [
                s._param("event-name", t_eventName)
            ]);
        }
        return s._("{contact-name} updated {event-name}", [
            s._param("contact-name", u),
            s._param("event-name", t_eventName)
        ]);
    }
    l.formatEventEditNotification = e;
}, 226);