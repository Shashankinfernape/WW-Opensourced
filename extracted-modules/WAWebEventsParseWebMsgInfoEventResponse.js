__d("WAWebEventsParseWebMsgInfoEventResponse", [
    "WALogger",
    "WALongInt",
    "WAWebAddOnParseWebMsgInfo",
    "WAWebEventResponseMsgDataConversion",
    "WAWebMsgType",
    "WAWebProtobufsWeb.pb",
    "asyncToGeneratorRuntime",
    "compactMap",
    "getErrorSafe",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(e) {
        if (e.length === 0) {
            return null;
        }
        return e.filter((e)=>e.messageAddOnType === o("WAWebProtobufsWeb.pb").MessageAddOn$MessageAddOnType.EVENT_RESPONSE).map((e)=>({
                timestampMs: e.serverTimestampMs,
                eventResponseMessageKey: e.messageAddOnKey,
                eventResponseMessage: e.legacyMessage?.eventResponseMessage,
                unread: e.status !== o("WAWebProtobufsWeb.pb").WebMessageInfo$Status.READ
            }));
    }
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ parsedWebMsgInfo: n, webMsgInfo: a }) {
            try {
                if (!(a != null && a.eventResponses) || !n || n.type !== o("WAWebMsgType").MSG_TYPE.EVENT_CREATION) {
                    return [];
                }
                const l = n;
                const c = u(a.messageAddOns) ?? a.eventResponses;
                return r("compactMap")(c, function(t) {
                    try {
                        let n;
                        const a = (n = r("nullthrows"))(t.eventResponseMessageKey, "eventResponseMessageKey");
                        const i = n(t.eventResponseMessage, "eventResponseMessage");
                        const s = n(o("WAWebAddOnParseWebMsgInfo").buildAddonMsgKey({
                            key: a
                        }));
                        const u = s.msgKey;
                        return o("WAWebEventResponseMsgDataConversion").protobufToEventResponseMsgData({
                            responseProtobuf: i,
                            id: u,
                            parentMsgKey: l.id,
                            senderTimestampMs: o("WALongInt").numberOrThrowIfTooLarge(n(i.timestampMs, "senderTimestampMs")),
                            t: o("WAWebAddOnParseWebMsgInfo").getAddonServerTimestamp(t.timestampMs),
                            ack: null,
                            read: t.unread !== true
                        });
                    } catch (t) {
                        const c = r("getErrorSafe")(t);
                        o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "[history sync] Failed to parse eventResponse"
                        ]))).catching(c).sendLogs("parseWebMsgInfoEventResponses-responses-parse-error");
                        return null;
                    }
                });
            } catch (e) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] parseWebMsgInfoEventResponses"
                ]))).catching(r("getErrorSafe")(e)).sendLogs("parseWebMsgInfoEventResponses-error");
                return [];
            }
        });
        return d.apply(this, arguments);
    }
    l.parseWebMsgInfoEventResponses = c;
}, 98);