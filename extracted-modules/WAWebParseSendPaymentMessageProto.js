__d("WAWebParseSendPaymentMessageProto", [
    "WALogger",
    "WAWebABProps",
    "WAWebDecodeJid",
    "WAWebE2EProtoParser",
    "WAWebE2EProtoUtils",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebParseMsgPaymentInfo",
    "WAWebUserPrefsMeUser",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = 1;
    function c({ baseMessage: a, messageProtobuf: i, msgContext: l, paymentInfo: s }) {
        const c = i.sendPaymentMessage;
        if (c != null) {
            const m = c.noteMessage?.extendedTextMessage?.contextInfo;
            if (o("WAWebABProps").getABPropConfigValue("wa_web_xb_bubble_enabled") !== true && c.noteMessage?.extendedTextMessage?.paymentExtendedMetadata?.type === u) {
                return {
                    msgData: babelHelpers.extends({}, a, {
                        type: "unknown",
                        kind: o("WAWebMsgType").MsgKind.Unknown,
                        subtype: "phone_only_feature"
                    }),
                    contextInfo: m
                };
            }
            if (s?.futureproofed === true || o("WAWebE2EProtoUtils").hasUnsupportedCurrency(s)) {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "parseSendPaymentMessageProto: novi txns unsupported"
                ])));
                return {
                    msgData: babelHelpers.extends({}, a, {
                        type: "unknown",
                        kind: o("WAWebMsgType").MsgKind.Unknown,
                        subtype: "phone_only_feature"
                    }),
                    contextInfo: m
                };
            }
            const { noteMessage: p, requestMessageKey: _ } = c;
            const f = p?.extendedTextMessage != null || p?.conversation != null || p?.stickerMessage != null;
            const g = f ? "send" : "futureproof";
            const h = p && f ? o("WAWebE2EProtoParser").parseMsgProto({
                messageProtobuf: p,
                message: {},
                msgContext: l
            }) : void 0;
            const y = s != null ? o("WAWebParseMsgPaymentInfo").parseMsgPaymentInfo(s) : null;
            const C = _ ? d(_, a.id, g) : null;
            if (f) {
                return {
                    msgData: babelHelpers.extends({}, a, {
                        type: o("WAWebMsgType").MSG_TYPE.PAYMENT,
                        kind: o("WAWebMsgType").MsgKind.Payment,
                        subtype: "send"
                    }, y, {
                        paymentRequestMessageKey: C,
                        paymentNoteMsg: h
                    }),
                    contextInfo: m
                };
            }
            return {
                msgData: babelHelpers.extends({}, a, {
                    type: o("WAWebMsgType").MSG_TYPE.PAYMENT,
                    kind: o("WAWebMsgType").MsgKind.Payment,
                    subtype: "futureproof"
                }, y, {
                    paymentRequestMessageKey: C
                }),
                contextInfo: m
            };
        }
    }
    function d(e, t, n) {
        if (!e) {
            throw r("err")("getPaymentRequestMessageKey: no message key is defined");
        }
        const a = e.id;
        if (a == null || a === "") {
            throw r("err")("getPaymentRequestMessageKey: no key id is defined");
        }
        if (!t) {
            o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "getPaymentRequestMessageKey: no message id is defined"
            ])));
            return null;
        }
        let i;
        if (t.remote.isGroup()) {
            const l = o("WAWebDecodeJid").decodeJid(e.participant);
            const u = typeof l === "string" ? o("WAWebUserPrefsMeUser").isSerializedWidMe(l) : o("WAWebUserPrefsMeUser").isMeAccount(l);
            if (t.fromMe || u || n === "send") {
                i = o("WAWebDecodeJid").decodeJid(e.participant);
            } else {
                return null;
            }
        }
        const c = new (r("WAWebMsgKey"))({
            fromMe: !t.fromMe,
            remote: t.remote,
            id: a,
            participant: i
        });
        return c;
    }
    l.default = c;
}, 98);