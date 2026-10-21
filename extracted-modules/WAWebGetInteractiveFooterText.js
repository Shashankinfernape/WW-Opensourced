__d("WAWebGetInteractiveFooterText", [
    "fbt",
    "WAWebABProps",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebL10N",
    "WAWebMsgType",
    "WAWebOrderStatusButton",
    "isStringNullOrEmpty"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    const e = Intl.DateTimeFormat(r("WAWebL10N").getFullLocale(), {
        month: "short",
        day: "numeric",
        weekday: "short"
    });
    function u(e) {
        if (e.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE) {
            return c({
                footer: e.footer,
                interactivePayload: e.interactivePayload,
                nativeFlowName: e.nativeFlowName,
                type: e.type
            });
        }
        return e.footer;
    }
    function c({ footer, interactivePayload, nativeFlowName, type }) {
        if (type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE && nativeFlowName === r("WAWebInteractiveMessagesNativeFlowName").ORDER_STATUS) {
            const u = o("WAWebOrderStatusButton").getOrderStatusButtonFor({
                interactivePayload,
                type
            });
            if (u != null) {
                const c = u.order;
                const { order_creator_surface, order_date, shipping_method, tracking } = c;
                if (order_creator_surface === "biz_inbox" && o("WAWebABProps").getABPropConfigValue("utility_order_view_mbs_enabled")) {
                    if (order_date == null) {
                        return null;
                    }
                    const f = e.format(Number(order_date) * 1000);
                    return s._("Placed on {order_date}", [
                        s._param("order_date", f)
                    ]).toString();
                }
                if (tracking) {
                    return `${tracking.courier_name} • ${tracking.tracking_ref}`;
                }
                const g = r("isStringNullOrEmpty")(shipping_method) ? s._("Not available") : shipping_method;
                return s._("Shipping method: {shipping_method}", [
                    s._param("shipping_method", g)
                ]).toString();
            }
        }
        return footer;
    }
    l.getInteractiveFooterText = u;
    l.getInteractiveFooterTextFor = c;
}, 226);