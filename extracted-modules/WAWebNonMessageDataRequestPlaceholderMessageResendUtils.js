__d("WAWebNonMessageDataRequestPlaceholderMessageResendUtils", [
    "WATimeUtils",
    "WAWebABProps",
    "WAWebMsgType",
    "WAWebProtobufsE2E.pb",
    "WAWebSendNonMessageDataRequest"
], function(t, n, r, o, a, i, l) {
    const e = new Set;
    const s = new Set;
    const u = 32;
    function c(t, n) {
        if (n) {
            const r = [];
            const a = o("WATimeUtils").unixTime();
            const i = o("WAWebABProps").getABPropConfigValue("placeholder_message_resend_maximum_days_limit") * o("WATimeUtils").DAY_SECONDS;
            t.forEach((t)=>{
                if (t.type === o("WAWebMsgType").MSG_TYPE.CIPHERTEXT && !e.has(t.id) && a - t.t <= i && !t.unsafe().isMdHistoryMsg && t.subtype !== "bot_unavailable_fanout" && t.subtype !== "hosted_unavailable_fanout" && t.subtype !== "view_once_unavailable_fanout" && t.subtype !== "acp_unavailable_fanout") {
                    e.add(t.id);
                    r.push(t.id);
                }
            });
            if (r.length > 0) {
                for(let l = 0; l < r.length; l += u){
                    const msgKeys = r.slice(l, l + u);
                    o("WAWebSendNonMessageDataRequest").sendPeerDataOperationRequest(o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType.PLACEHOLDER_MESSAGE_RESEND, {
                        msgKeys
                    });
                }
            }
        }
    }
    l.inFlightPlaceholderResendRequests = s;
    l.handlePlaceholderMsgsSeen = c;
}, 98);