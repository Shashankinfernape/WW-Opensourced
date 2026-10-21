__d("WAWebParseProductMessageProto", [
    "WALongInt",
    "WAWebMsgType",
    "WAWebParseImageMessageProto"
], function(t, n, r, o, a, i, l) {
    function e({ baseMessage: t, messageProtobuf: n, msgContext: a }) {
        const i = n.productMessage;
        if (i != null) {
            const { body: l, businessOwnerJid: s, contextInfo: u, footer: c, product: d } = i;
            if (d != null) {
                const { currencyCode: m, description: p, priceAmount1000: _, productId: f, productImage: g, productImageCount: h, retailerId: y, salePriceAmount1000: C, title: b, url: v } = d;
                let S;
                if (g != null) {
                    const R = r("WAWebParseImageMessageProto")({
                        messageProtobuf: {
                            imageMessage: g
                        },
                        baseMessage: t,
                        msgContext: a
                    });
                    if (R != null) {
                        const L = R.msgData;
                        S = {
                            deprecatedMms3Url: L.deprecatedMms3Url,
                            directPath: L.directPath,
                            staticUrl: L.staticUrl,
                            mimetype: L.mimetype,
                            filehash: L.filehash,
                            encFilehash: L.encFilehash,
                            size: L.size,
                            height: L.height,
                            width: L.width,
                            mediaKey: L.mediaKey,
                            mediaKeyTimestamp: L.mediaKeyTimestamp,
                            body: L.body,
                            interactiveAnnotations: L.interactiveAnnotations,
                            scanLengths: L.scanLengths,
                            scansSidecar: L.scansSidecar,
                            isViewOnce: L.isViewOnce,
                            thumbnailDirectPath: L.thumbnailDirectPath,
                            thumbnailSha256: L.thumbnailSha256,
                            thumbnailEncSha256: L.thumbnailEncSha256
                        };
                    }
                }
                const E = babelHelpers.extends({}, t, {
                    type: o("WAWebMsgType").MSG_TYPE.PRODUCT,
                    kind: o("WAWebMsgType").MsgKind.Product,
                    businessOwnerJid: s,
                    productId: f,
                    currencyCode: m,
                    priceAmount1000: o("WALongInt").numberOrThrowIfTooLarge(_ ?? 0) || void 0,
                    salePriceAmount1000: o("WALongInt").numberOrThrowIfTooLarge(C ?? 0) || void 0,
                    retailerId: y,
                    url: v,
                    productImageCount: h,
                    title: b,
                    description: p,
                    caption: l,
                    footer: c
                }, S);
                return {
                    msgData: E,
                    contextInfo: u
                };
            }
        }
    }
    l.default = e;
}, 98);