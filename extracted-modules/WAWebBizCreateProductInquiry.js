__d("WAWebBizCreateProductInquiry", [
    "WATimeUtils",
    "WAWebAck",
    "WAWebMediaOpaqueData",
    "WAWebMsgKey",
    "WAWebMsgModel",
    "WAWebMsgType",
    "WAWebProductSelectors",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow"
], function(t, n, r, o, a, i, l) {
    function e({ catalogWid, chatId, mediaData, product, sessionId }) {
        const s = {
            ack: o("WAWebAck").ACK.CLOCK,
            id: new (r("WAWebMsgKey"))({
                id: `product_inquiry_${r("WAWebMsgKey").newId_DEPRECATED()}`,
                remote: chatId,
                fromMe: true
            }),
            from: chatId,
            to: o("WAWebUserPrefsMeUser").getMeUserOrThrow(),
            t: o("WATimeUtils").unixTime(),
            type: o("WAWebMsgType").MSG_TYPE.PRODUCT,
            kind: o("WAWebMsgType").MsgKind.Product,
            viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
            title: product.name,
            description: product.description,
            businessOwnerJid: catalogWid.toString({
                legacy: true
            }),
            productId: product.id.toString(),
            url: product.url,
            productImageCount: product.getProductImageCollectionCount(),
            body: mediaData.preview instanceof r("WAWebMediaOpaqueData") ? mediaData.preview.getBase64() : null,
            currencyCode: product.currency,
            priceAmount1000: product.priceAmount1000,
            salePriceAmount1000: o("WAWebProductSelectors").isSalePriceActive(product) ? product.salePriceAmount1000 : null,
            sessionId,
            retailerId: product.retailerId
        };
        const u = new (o("WAWebMsgModel")).Msg(s);
        u.mediaData.set(mediaData);
        return u;
    }
    l.createProductInquiry = e;
}, 98);