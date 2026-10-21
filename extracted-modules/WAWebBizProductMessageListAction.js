__d("WAWebBizProductMessageListAction", [
    "WAWebMsgCollection"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        const r = o("WAWebMsgCollection").MsgCollection.get(t);
        const a = r?.list?.productListInfo?.headerImage?.productId;
        if (e === a && r != null) {
            r.productHeaderImageRejected = true;
        }
    }
    l.updateProductListHeaderImageRejected = e;
}, 98);