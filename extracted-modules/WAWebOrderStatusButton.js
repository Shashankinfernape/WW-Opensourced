__d("WAWebOrderStatusButton", [
    "WAWebMsgType"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        if (e.type !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE) {
            return null;
        }
        return s({
            interactivePayload: e.interactivePayload,
            type: e.type
        });
    }
    function s({ interactivePayload: n, type }) {
        if (type !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE) {
            return null;
        }
        return d(n?.buttons?.[0]);
    }
    function u(t) {
        return e(t)?.order?.order_creator_surface === "biz_inbox";
    }
    function c(e) {
        return s(e)?.order?.order_creator_surface === "biz_inbox";
    }
    function d(e) {
        if (e?.name !== "order_status") {
            return null;
        }
        const t = e?.buttonParamsJson;
        if (t == null) {
            return null;
        }
        try {
            const n = JSON.parse(t);
            return n;
        } catch (e) {
            return null;
        }
    }
    l.getOrderStatusButton = e;
    l.getOrderStatusButtonFor = s;
    l.isInboxCreatedOrder = u;
    l.isInboxCreatedOrderFor = c;
    l.parseOrderStatusButton = d;
}, 98);