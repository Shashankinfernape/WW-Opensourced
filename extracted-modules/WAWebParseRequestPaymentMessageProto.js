__d("WAWebParseRequestPaymentMessageProto", [
    "WALogger",
    "WALongInt",
    "WAWebDecodeJid",
    "WAWebE2EProtoParser",
    "WAWebE2EProtoUtils",
    "WAWebMsgType",
    "WAWebParseMsgPaymentInfo",
    "WAWebProtobufsWeb.pb",
    "WAWebWid",
    "WAWebWidFactory",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    let e;
    function s({ baseMessage: a, messageProtobuf: i, msgContext: l, paymentInfo: s }) {
        const u = i.requestPaymentMessage;
        if (u != null) {
            const c = u.noteMessage?.extendedTextMessage?.contextInfo;
            if (s != null && s.futureproofed || o("WAWebE2EProtoUtils").hasUnsupportedCurrency(s)) {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "parseRequestPaymentMessageProto: novi txn unsupported"
                ])));
                return {
                    msgData: babelHelpers.extends({}, a, {
                        type: o("WAWebMsgType").MSG_TYPE.PAYMENT,
                        kind: o("WAWebMsgType").MsgKind.Payment,
                        subtype: "phone_only_feature"
                    }),
                    contextInfo: c
                };
            }
            const d = u.noteMessage;
            const m = d?.extendedTextMessage != null || d?.conversation != null || d?.stickerMessage != null;
            const p = d && m ? o("WAWebE2EProtoParser").parseMsgProto({
                messageProtobuf: d,
                message: {},
                msgContext: l
            }) : void 0;
            const _ = s != null ? o("WAWebParseMsgPaymentInfo").parseMsgPaymentInfo(s) : {};
            if (u.amount == null) {
                if (u.currencyCodeIso4217 != null && _.paymentCurrency == null) {
                    _.paymentCurrency = u.currencyCodeIso4217;
                }
                if (u.amount1000 != null && _.paymentAmount1000 == null) {
                    _.paymentAmount1000 = o("WALongInt").numberOrThrowIfTooLarge(u.amount1000);
                }
            } else {
                if (u.amount.currencyCode != null && _.paymentCurrency == null) {
                    _.paymentCurrency = u.amount.currencyCode;
                }
                if (u.amount.value != null && _.paymentAmount1000 == null) {
                    const f = u.amount;
                    const g = f.offset == null || f.offset === 0 ? 1000 : f.offset;
                    _.paymentAmount1000 = parseFloat(f.value) * 1000 / g;
                }
            }
            if (u.requestFrom != null && _?.paymentMessageReceiverJid == null) {
                const h = o("WAWebDecodeJid").decodeJid(u.requestFrom);
                if (h != null) {
                    if (typeof h !== "string") {
                        _.paymentMessageReceiverJid = h;
                    } else if (r("WAWebWid").isWid(h)) {
                        _.paymentMessageReceiverJid = o("WAWebWidFactory").createWid(h);
                    }
                }
            }
            if ((_?.paymentStatus == null || _?.paymentTxnStatus == null) && o("WAWebE2EProtoUtils").isEitherSenderOrReceiverOfPaymentMessage(a.id, r("nullthrows")(_.paymentMessageReceiverJid))) {
                _.paymentStatus = o("WAWebProtobufsWeb.pb").PaymentInfo$Status.WAITING;
                _.paymentTxnStatus = o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.COLLECT_INIT;
            }
            if (u.expiryTimestamp != null && _?.paymentExpiryTimestamp == null) {
                _.paymentExpiryTimestamp = o("WALongInt").numberOrThrowIfTooLarge(u.expiryTimestamp);
            }
            if (m) {
                return {
                    msgData: babelHelpers.extends({}, a, {
                        type: o("WAWebMsgType").MSG_TYPE.PAYMENT,
                        kind: o("WAWebMsgType").MsgKind.Payment,
                        subtype: "request"
                    }, _, {
                        paymentNoteMsg: p
                    }),
                    contextInfo: c
                };
            }
            return {
                msgData: babelHelpers.extends({}, a, {
                    type: o("WAWebMsgType").MSG_TYPE.PAYMENT,
                    kind: o("WAWebMsgType").MsgKind.Payment,
                    subtype: "futureproof"
                }, _),
                contextInfo: c
            };
        }
    }
    l.default = s;
}, 98);