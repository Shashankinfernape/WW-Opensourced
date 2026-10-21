__d("WAWebBizOrderAction", [
    "WAWebBizOrderBridge"
], function(t, n, r, o, a, i, l) {
    function e({ height, orderId, sellerJid, token, width }) {
        return o("WAWebBizOrderBridge").queryOrder({
            height,
            orderId,
            sellerJid,
            token,
            width
        });
    }
    function s(e, t) {
        return o("WAWebBizOrderBridge").createOrder(e, t);
    }
    l.queryOrder = e;
    l.createOrder = s;
}, 98);