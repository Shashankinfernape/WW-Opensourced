__d("WAWebParseListMessageProto", [
    "WAWebMsgType",
    "WAWebProtobufsE2E.pb",
    "sumBy"
], function(t, n, r, o, a, i, l) {
    function e({ baseMessage: t, messageProtobuf: n }) {
        const a = n.listMessage;
        if (a != null) {
            let i;
            const l = a.listType;
            if (l === o("WAWebProtobufsE2E.pb").Message$ListMessage$ListType.SINGLE_SELECT || l === o("WAWebProtobufsE2E.pb").Message$ListMessage$ListType.PRODUCT_LIST) {
                let s = t.businessOwnerJid;
                let u = t.productListItemCount;
                if (a.listType === o("WAWebProtobufsE2E.pb").Message$ListMessage$ListType.PRODUCT_LIST) {
                    s = a.productListInfo?.businessOwnerJid;
                    u = a.productListInfo != null ? r("sumBy")(a.productListInfo.productSections, function(e) {
                        return e.products.length;
                    }) : void 0;
                }
                i = babelHelpers.extends({}, t, {
                    businessOwnerJid: s,
                    productListItemCount: u,
                    type: o("WAWebMsgType").MSG_TYPE.LIST,
                    kind: o("WAWebMsgType").MsgKind.List,
                    list: a,
                    footer: a.footerText
                });
            } else {
                i = babelHelpers.extends({}, t, {
                    type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
                    kind: o("WAWebMsgType").MsgKind.Unknown
                });
            }
            return {
                msgData: i,
                contextInfo: a.contextInfo
            };
        }
    }
    l.default = e;
}, 98);