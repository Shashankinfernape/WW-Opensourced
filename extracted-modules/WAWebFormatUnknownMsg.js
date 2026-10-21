__d("WAWebFormatUnknownMsg", [
    "fbt",
    "WAWebCommonMsgUtils",
    "WAWebFbtAppName",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c() {
        return s._("This message couldn't load. Open the message on your phone to view it.");
    }
    function d(e) {
        const t = o("WAWebMsgGetters").getIsNewsletterMsg(e);
        if (t) {
            return s._("You received a channel update which couldn't load. Open the message on your phone to view it.");
        }
        return c();
    }
    function m(e) {
        const t = o("WAWebMsgGetters").getIsNewsletterMsg(e);
        if (t) {
            return s._("You sent a channel update which couldn't load. Open the message on your phone to view it.");
        }
        return c();
    }
    function p(e) {
        const t = o("WAWebMsgGetters").getIsNewsletterMsg(e);
        if (t) {
            return s._("You received a channel update which couldn't load. Open the message on your phone to view it.");
        }
        return c();
    }
    function _(e) {
        if (o("WAWebMsgGetters").getIsSentByMe(e)) {
            return m(e);
        }
        return d(e);
    }
    function f() {
        return s._("This response type isn't supported on this device yet. View the response on your phone.");
    }
    function g(e) {
        if (e.futureproofType === o("WAWebMsgType").MSG_TYPE.REACTION) {
            if (o("WAWebMsgGetters").getIsSentByMe(e)) {
                return s._("Your reaction couldn't load. Open the message on your phone to view it.");
            }
            return s._("This reaction couldn't load. Open the message on your phone to view it.");
        }
        if (e.futureproofType === o("WAWebMsgType").MSG_TYPE.PROTOCOL && e.futureproofSubtype === "message_edit") {
            if (o("WAWebMsgGetters").getIsSentByMe(e)) {
                return s._("Your edited message couldn't load. Open the message on your phone to view it.");
            }
            return s._("This edited message couldn't load. Open the message on your phone to view it.");
        }
        if (e.futureproofType === o("WAWebMsgType").MSG_TYPE.KEEP_IN_CHAT) {
            if (o("WAWebMsgGetters").getIsSentByMe(e)) {
                return _(e);
            }
            return s._("A message in this chat was kept from disappearing. Open the message on your phone to view it.");
        }
        if (e.futureproofType === o("WAWebMsgType").MSG_TYPE.PIN_MESSAGE) {
            if (o("WAWebMsgGetters").getIsSentByMe(e)) {
                return s._("Your pinned message couldn't load. Open the message on your phone to view it.");
            }
            return s._("This pinned message couldn't load. Open the message on your phone to view it.");
        }
        if (e.futureproofType === o("WAWebMsgType").MSG_TYPE.ALBUM) {
            return s._("Media files");
        }
        if (e.type === o("WAWebMsgType").MSG_TYPE.AUTOMATED_GREETING_MESSAGE) {
            return c();
        }
        if (o("WAWebCommonMsgUtils").isRichResponseMsg(e.type)) {
            return f();
        }
        if (e.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN && e.futureproofType === o("WAWebMsgType").MSG_TYPE.CALL_LOG) {
            return s._("This call couldn't load. Open the message on your phone to view it.");
        }
        if (e.futureproofType === o("WAWebMsgType").MSG_TYPE.POLL_ADD_OPTION_ENCRYPTED) {
            if (o("WAWebMsgGetters").getIsSentByMe(e)) {
                return s._("You added an option to a poll, but this version of WhatsApp doesn't support it.");
            }
            return s._("Someone added an option to a poll, but this version of WhatsApp doesn't support it.");
        }
        if (o("WAWebMsgGetters").getIsSentByMe(e)) {
            return _(e);
        }
        switch(e.subtype){
            case "phone":
                return p(e);
            case "phone_only_feature":
                return c();
            default:
                return _(e);
        }
    }
    function HComponent(e) {
        if (e.futureproofType === o("WAWebMsgType").MSG_TYPE.REACTION) {
            return s._("You received a reaction. Update your version of WhatsApp to see reactions.");
        }
        const Component = o("WAWebFbtAppName").WAWebAppShortName;
        switch(e.subtype){
            case "phone":
                return p(e);
            case "phone_only_feature":
                return s._("This message can't be shown on {=m1}. Open WhatsApp on your phone to view.", [
                    s._implicitParam("=m1", <Component>{s._("")}</Component>)
                ]);
            default:
                return d(e);
        }
    }
    l.defaultFutureproofMsgText = _;
    l.richResponseUnsupportedMsgText = f;
    l.formatUnknownMsgText = g;
    l.formatUnknownMsgNotification = HComponent;
}, 226);