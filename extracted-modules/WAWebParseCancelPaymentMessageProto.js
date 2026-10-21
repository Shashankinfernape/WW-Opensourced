__d("WAWebParseCancelPaymentMessageProto", [
    "WAWebDecodeJid",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebUserPrefsMeUser",
    "WAWebWid",
    "err"
], function(t, n, r, o, a, i, l) {
    function e({ baseMessage: t, messageProtobuf: n }) {
        const r = n.cancelPaymentRequestMessage;
        if (r != null) {
            const a = r.key;
            if (a != null) {
                const i = s(a, t);
                return {
                    msgData: babelHelpers.extends({}, t, {
                        type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
                        kind: o("WAWebMsgType").MsgKind.Unknown,
                        subtype: "payment_transaction_request_cancelled",
                        paymentRequestMessageKey: i
                    }),
                    contextInfo: null
                };
            }
        }
    }
    function s(e, t) {
        if (!e) {
            throw r("err")("parseProtocolMessageProto: no message key is defined for cancel payment request message");
        }
        const n = e.id;
        if (n == null || n === "") {
            throw r("err")("parseProtocolMessageProto: no message id is defined for cancel payment request message");
        }
        const a = o("WAWebDecodeJid").decodeJid(e.participant);
        const i = typeof a === "string" ? r("WAWebWid").isWid(a) && o("WAWebUserPrefsMeUser").isSerializedWidMe(a) : o("WAWebUserPrefsMeUser").isMeAccount(a);
        let l = void 0;
        if (t.id.remote.isGroup()) {
            l = t.id.participant;
            if (t.id.fromMe) {
                l = o("WAWebDecodeJid").decodeJid(t.from);
            } else if (i) {
                return null;
            }
        }
        const s = new (r("WAWebMsgKey"))({
            id: n,
            fromMe: t.id.fromMe,
            remote: t.id.remote,
            participant: l
        });
        return s;
    }
    l.default = e;
}, 98);