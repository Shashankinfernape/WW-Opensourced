__d("WAWebPinMsgParseWebMsgInfoPinInChat", [
    "WALogger",
    "WALongInt",
    "WAWebAddOnParseWebMsgInfo",
    "WAWebProtobufsE2E.pb",
    "WAWebProtobufsWeb.pb",
    "WAWebWidFactory",
    "getErrorSafe",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(e) {
        if (e === o("WAWebProtobufsE2E.pb").Message$PinInChatMessage$Type.PIN_FOR_ALL) {
            return o("WAWebProtobufsWeb.pb").PinInChat$Type.PIN_FOR_ALL;
        }
        if (e === o("WAWebProtobufsE2E.pb").Message$PinInChatMessage$Type.UNPIN_FOR_ALL) {
            return o("WAWebProtobufsWeb.pb").PinInChat$Type.UNPIN_FOR_ALL;
        }
        if (e === o("WAWebProtobufsE2E.pb").Message$PinInChatMessage$Type.UNKNOWN_TYPE) {
            return o("WAWebProtobufsWeb.pb").PinInChat$Type.UNKNOWN_TYPE;
        }
        return (()=>{
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        })();
    }
    function c(t, n) {
        const a = [];
        try {
            if (t == null || n == null) {
                return a;
            }
            const l = [];
            if (t.pinInChat != null && n.pinInChat != null) {
                l.push(n.pinInChat);
            } else if (t.messageAddOns?.length > 0) {
                for (const c of t.messageAddOns){
                    if (c.messageAddOnType === o("WAWebProtobufsWeb.pb").MessageAddOn$MessageAddOnType.PIN_IN_CHAT) {
                        const m = c.messageAddOn?.pinInChatMessage;
                        if (m != null) {
                            l.push({
                                key: m.key,
                                type: u(r("nullthrows")(m.type)),
                                senderTimestampMs: c.senderTimestampMs,
                                serverTimestampMs: c.serverTimestampMs,
                                messageAddOnContextInfo: c.addOnContextInfo
                            });
                        }
                    }
                }
            }
            for (const p of l){
                const { key: _, messageAddOnContextInfo: f, senderTimestampMs: g, serverTimestampMs: h, type: y } = p;
                const C = r("nullthrows")(o("WAWebAddOnParseWebMsgInfo").buildAddonMsgKey({
                    key: r("nullthrows")(_)
                }));
                const { msgKey: b, sender: v } = C;
                if (v == null) {
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "parseWebMsgInfoPinInChat: pinInChat sender should be a wid."
                    ])));
                } else {
                    a.push({
                        msgKey: b,
                        parentMsgKey: n.id,
                        chatId: o("WAWebWidFactory").asChatWid(b.remote),
                        senderTimestampMs: o("WALongInt").numberOrThrowIfTooLarge(r("nullthrows")(g)),
                        t: o("WAWebAddOnParseWebMsgInfo").getAddonServerTimestamp(h) ?? void 0,
                        pinType: r("nullthrows")(y),
                        sender: v,
                        pinExpiryDuration: f?.messageAddOnDurationInSecs
                    });
                }
            }
        } catch (e) {
            const R = r("getErrorSafe")(e);
            o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "[history sync] parseWebMsgInfoPinInChat err=",
                " stack=",
                ""
            ])), R?.name, R?.stack);
        }
        return a;
    }
    l.parseWebMsgInfoPinInChat = c;
}, 98);