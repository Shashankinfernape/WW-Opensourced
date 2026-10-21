__d("WAWebGenerateOrderMessageProto", [
    "WAWebE2EProtoUtils"
], function(t, n, r, o, a, i, l) {
    function e({ json }) {
        if (json.itemCount || json.message || json.orderId || json.orderTitle || json.sellerJid || json.status || json.surface || json.thumbnail || json.token || json.totalAmount1000 || json.totalCurrencyCode || json.catalogType) {
            return {
                orderMessage: {
                    itemCount: json.itemCount,
                    message: json.message,
                    orderId: json.orderId,
                    orderTitle: json.orderTitle,
                    sellerJid: json.sellerJid,
                    status: json.status,
                    surface: json.surface,
                    thumbnail: o("WAWebE2EProtoUtils").encodeBytes(json.thumbnail),
                    token: json.token,
                    totalAmount1000: json.totalAmount1000,
                    totalCurrencyCode: json.totalCurrencyCode,
                    catalogType: json.catalogType
                }
            };
        }
        return {
            conversation: json.body
        };
    }
    l.default = e;
}, 98);