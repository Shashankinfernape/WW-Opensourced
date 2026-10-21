__d("WAWebGenerateProductMessageProto", [
    "WAWebGenerateImageMessageProto"
], function(t, n, r, o, a, i, l) {
    function e({ contextInfo, json, mediaMetadata }) {
        let productImage;
        if (mediaMetadata != null) {
            productImage = r("WAWebGenerateImageMessageProto")({
                json,
                mediaMetadata,
                contextInfo
            }).imageMessage;
        }
        const productMessage = {
            product: {
                productImage,
                productId: json.productId,
                title: json.title,
                description: json.description,
                currencyCode: json.currencyCode,
                priceAmount1000: json.priceAmount1000 || undefined,
                salePriceAmount1000: json.salePriceAmount1000 || undefined,
                retailerId: json.retailerId,
                url: json.url,
                productImageCount: json.productImageCount
            },
            businessOwnerJid: json.businessOwnerJid,
            contextInfo,
            body: json.caption,
            footer: json.footer
        };
        return {
            productMessage
        };
    }
    l.default = e;
}, 98);