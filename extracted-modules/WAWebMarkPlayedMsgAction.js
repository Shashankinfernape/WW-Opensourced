__d("WAWebMarkPlayedMsgAction", [
    "Promise",
    "WALogger",
    "WAWebAck",
    "WAWebChatThreadLogging",
    "WAWebFrontendMsgGetters",
    "WAWebMsgGetters",
    "WAWebSendPlayedReceiptJob",
    "WAWebStateUtils",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    function d(e) {
        return p(o("WAWebStateUtils").unproxy(e));
    }
    function m(e) {
        return _(o("WAWebStateUtils").unproxy(e));
    }
    function p(t) {
        if (_(t)) {
            r("WAWebSendPlayedReceiptJob")(t, o("WAWebFrontendMsgGetters").getChat(t).id).catch((t)=>{
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Msg:sendPlayed failed"
                ]))).catching(r("getErrorSafe")(t)).sendLogs("send-played-failed");
            });
            (c || (c = n("Promise"))).resolve().then(()=>{
                t.ack = o("WAWebAck").ACK.PLAYED;
                if (t.isViewOnce) {
                    o("WAWebChatThreadLogging").handleActivitiesForChatThreadLogging([
                        {
                            activityType: "viewOnceOpen",
                            ts: t.t,
                            chatId: t.id.remote
                        }
                    ]);
                }
            }).catch((e)=>{
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "Msg:markPlayed failed"
                ]))).sendLogs("mark-played-failed");
            });
        } else {
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "Msg:msg should not call sendPlayed"
            ])));
        }
    }
    function _(e) {
        return f({
            ack: e.ack,
            isAckPlayable: o("WAWebMsgGetters").getIsAckPlayable(e),
            isSentByMe: o("WAWebMsgGetters").getIsSentByMe(e),
            isViewOnce: e.isViewOnce
        });
    }
    function f({ ack, isAckPlayable, isSentByMe, isViewOnce }) {
        if (isSentByMe || ack != null && ack >= o("WAWebAck").ACK.PLAYED) {
            return false;
        }
        return isAckPlayable || isViewOnce;
    }
    l.markPlayed = d;
    l.canMarkPlayed = m;
    l.canMarkPlayedFor = f;
}, 98);