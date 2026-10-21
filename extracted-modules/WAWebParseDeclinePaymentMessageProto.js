__d("WAWebParseDeclinePaymentMessageProto", [
    "WAWebDecodeJid",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebUserPrefsMeUser",
    "err"
], function(t, n, r, o, a, i, l) {
    function e({ baseMessage: t, messageProtobuf: n }) {
        const r = n.declinePaymentRequestMessage;
        if (r != null) {
            const a = s(r.key, t);
            return {
                msgData: babelHelpers.extends({}, t, {
                    type: "unknown",
                    kind: o("WAWebMsgType").MsgKind.Unknown,
                    subtype: "payment_action_request_declined",
                    paymentRequestMessageKey: a
                }),
                contextInfo: null
            };
        }
    }
    function s(e, t) {
        if (!e) {
            throw r("err")("parseProtocolMessageProto: no message key is defined for decline payment request message");
        }
        const n = e.id;
        if (n == null || n === "") {
            throw r("err")("parseProtocolMessageProto: no message id is defined for decline payment request message");
        }
        let a;
        if (t.id.remote.isGroup()) {
            const i = o("WAWebDecodeJid").decodeJid(e.participant);
            const l = typeof i === "string" ? o("WAWebUserPrefsMeUser").isSerializedWidMe(i) : o("WAWebUserPrefsMeUser").isMeAccount(i);
            if (t.id.fromMe || l || t.subtype === "send") {
                a = o("WAWebDecodeJid").decodeJid(e.participant);
            } else {
                return null;
            }
        }
        const s = new (r("WAWebMsgKey"))({
            fromMe: !t.id.fromMe,
            remote: t.id.remote,
            id: n,
            participant: a
        });
        return s;
    }
    l.default = e;
}, 98);