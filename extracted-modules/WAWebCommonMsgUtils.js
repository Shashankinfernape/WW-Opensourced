__d("WAWebCommonMsgUtils", [
    "$InternalEnum",
    "WALogger",
    "WAWebCommonMsgSubtypeTypes",
    "WAWebMsgType",
    "WAWebRichResponse.flow"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = n("$InternalEnum")({
        DEFAULT: "d",
        SIGNIFICANT: "s",
        AMBIENT: "a",
        NOTEWORTHY: "n",
        IGNORE: "i"
    });
    function u(e, t) {
        switch(e){
            case o("WAWebMsgType").MSG_TYPE.GP2:
            case o("WAWebMsgType").MSG_TYPE.BROADCAST_NOTIFICATION:
            case o("WAWebMsgType").MSG_TYPE.NOTIFICATION:
            case o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE:
            case o("WAWebMsgType").MSG_TYPE.E2E_NOTIFICATION:
            case o("WAWebMsgType").MSG_TYPE.PINNED_MESSAGE:
            case o("WAWebMsgType").MSG_TYPE.NEWSLETTER_NOTIFICATION:
            case o("WAWebMsgType").MSG_TYPE.MESSAGE_HISTORY_BUNDLE:
            case o("WAWebMsgType").MSG_TYPE.MESSAGE_HISTORY_NOTICE:
            case o("WAWebMsgType").MSG_TYPE.POLL_ADD_OPTION_DECRYPTED:
                return true;
            case o("WAWebMsgType").MSG_TYPE.PROTOCOL:
                return t === "ephemeral_setting" || t === "share_phone_number" || t === "event_edit_decrypted" || t === "limit_sharing_system_message";
            default:
                return false;
        }
    }
    function c(e) {
        return e === o("WAWebMsgType").MSG_TYPE.CIPHERTEXT || e === o("WAWebMsgType").MSG_TYPE.DEBUG_PLACEHOLDER;
    }
    function d(e, t) {
        return t === o("WAWebCommonMsgSubtypeTypes").MsgSubtype.Fanout && e === o("WAWebCommonMsgSubtypeTypes").MsgSubtype.ViewOnceUnavailableFanout;
    }
    function m(e) {
        return e === o("WAWebMsgType").MSG_TYPE.QUARANTINED;
    }
    function p(e) {
        return e === o("WAWebMsgType").MSG_TYPE.UNKNOWN;
    }
    function _(e) {
        return e === o("WAWebMsgType").MSG_TYPE.RICH_RESPONSE;
    }
    function f(e) {
        return g(e.type, e.richResponse);
    }
    function g(e, t) {
        if (!_(e)) {
            return false;
        }
        const n = t?.parseState;
        return n === o("WAWebRichResponse.flow").RichResponseParseState.Partial || n === o("WAWebRichResponse.flow").RichResponseParseState.Parsed;
    }
    function h(e) {
        return e === o("WAWebMsgType").MSG_TYPE.CALL_LOG;
    }
    function y(t) {
        const n = [];
        let r = 0;
        t.forEach((e)=>{
            if (e.type === void 0) {
                r++;
                if (n.length < 3) {
                    n.push(e.id);
                }
            }
        });
        if (r > 0) {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "undefined message type count::",
                " msgIds::",
                ""
            ])), r, n).sendLogs("undefined-msg-type", {
                sampling: 0.01
            });
        }
    }
    l.EventType = s;
    l.isNotificationType = u;
    l.isPlaceholderMsg = c;
    l.isPlaceholderSubtypeUpgrade = d;
    l.isQuarantinedMsg = m;
    l.isFutureproofMsg = p;
    l.isRichResponseMsg = _;
    l.isSomewhatParsedRichResponseMsg = f;
    l.isSomewhatParsedRichResponse = g;
    l.isCallLogMsg = h;
    l.logUndefinedMessage = y;
}, 98);