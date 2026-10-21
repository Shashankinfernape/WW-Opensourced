__d("WAWebParseOrderMessageProto", [
    "WALongInt",
    "WAWebE2EProtoParserApi",
    "WAWebMsgType"
], function(t, n, r, o, a, i, l) {
    function e({ baseMessage: t, messageProtobuf: n }) {
        const r = n.orderMessage;
        if (r != null) {
            const { catalogType: a, contextInfo: i, itemCount: l, message: s, orderId: u, orderTitle: c, sellerJid: d, status: m, surface: p, thumbnail: _, token: f, totalAmount1000: g, totalCurrencyCode: h } = r;
            const y = babelHelpers.extends({}, t, {
                type: o("WAWebMsgType").MSG_TYPE.ORDER,
                kind: o("WAWebMsgType").MsgKind.Order,
                thumbnail: o("WAWebE2EProtoParserApi").decodeBytes(_),
                message: s || "",
                orderId: u,
                itemCount: l || 0,
                status: m,
                surface: p,
                sellerJid: d,
                orderTitle: c || "",
                token: f || "",
                totalAmount1000: o("WALongInt").numberOrThrowIfTooLarge(g ?? 0),
                totalCurrencyCode: h,
                catalogType: a,
                body: ""
            });
            return {
                msgData: y,
                contextInfo: i
            };
        }
    }
    l.default = e;
}, 98);