__d("WAWebBizFormatInteractiveMsg", [
    "fbt",
    "WAWebABProps",
    "WAWebBizOrderDetailsParams",
    "WAWebBloksWidgetPayload",
    "WAWebBrazilPixKeyFormattingUtils",
    "WAWebCurrencyUtils",
    "WAWebGetInteractiveFooterText",
    "WAWebHsmGatingUtils",
    "WAWebInteractiveMessageType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebOrderDetails",
    "WAWebOrderPaymentStatus",
    "WAWebOrderStatus",
    "WAWebOrderStatusButton",
    "WAWebUserPrefsTypes"
], function(t, n, r, o, a, i, l, s) {
    function e(e, { formatAsSearchResult = false } = {}) {
        if (e.interactiveType === r("WAWebInteractiveMessageType").SHOPS_STOREFRONT) {
            return e.caption || (e.interactiveHeader?.title ?? "");
        }
        if (e.nativeFlowName === r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_INFO) {
            const m = _(e);
            if (m != null) {
                return m;
            }
        }
        if (e.nativeFlowName === r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS) {
            const f = p(e);
            if (f != null) {
                return f;
            }
        }
        if (e.nativeFlowName === r("WAWebInteractiveMessagesNativeFlowName").ORDER_STATUS) {
            const g = d(e);
            if (g != null) {
                return g;
            }
        }
        const h = [
            e.interactiveHeader?.title,
            formatAsSearchResult ? e.interactiveHeader?.subtitle : null,
            e.caption,
            e.footer
        ].filter(Boolean).join("\n");
        if (h === "") {
            return u(e.bloksWidget);
        }
        return h;
    }
    function u(bloksWidget) {
        if (bloksWidget == null) {
            return "";
        }
        if (o("WAWebBloksWidgetPayload").isA2UIBloksWidget(bloksWidget) && o("WAWebHsmGatingUtils").isBloksWidgetEnabled() && o("WAWebABProps").getABPropConfigValue("im_a2ui_reply_quote_enabled")) {
            const n = o("WAWebBloksWidgetPayload").readA2UITitle(bloksWidget.data);
            if (n != null) {
                return n;
            }
        }
        return bloksWidget.fallback ?? "";
    }
    function c(e) {
        switch(e){
            case o("WAWebOrderStatus").OrderStatus.Pending:
                return s._("Order pending");
            case o("WAWebOrderStatus").OrderStatus.Canceled:
                return s._("Order cancelled");
            case o("WAWebOrderStatus").OrderStatus.PartiallyShipped:
                return s._("Order partially shipped");
            case o("WAWebOrderStatus").OrderStatus.Complete:
                return s._("Order completed 🎉");
            case o("WAWebOrderStatus").OrderStatus.Shipped:
                return s._("Order shipped");
            case o("WAWebOrderStatus").OrderStatus.Processing:
                return s._("Order processing");
            case o("WAWebOrderStatus").OrderStatus.PaymentRequested:
                return s._("Payment requested");
            case o("WAWebOrderStatus").OrderStatus.PreparingToShip:
                return s._("Order preparing to ship");
            case o("WAWebOrderStatus").OrderStatus.Delivered:
                return s._("Order delivered 🎉");
            case o("WAWebOrderStatus").OrderStatus.Confirmed:
                return s._("Order confirmed");
            case o("WAWebOrderStatus").OrderStatus.Delayed:
                return s._("Order delayed");
            case o("WAWebOrderStatus").OrderStatus.OutForDelivery:
                return s._("Order out for delivery");
            case o("WAWebOrderStatus").OrderStatus.Failed:
                return s._("Order failed");
            case o("WAWebOrderStatus").OrderStatus.Refunded:
                return s._("Order refunded");
        }
    }
    function d(e) {
        const t = o("WAWebOrderStatus").getOrderStatusInfo(e);
        if (t == null) {
            return null;
        }
        const t_status = t.status;
        if (t_status == null) {
            return null;
        }
        const r = o("WAWebOrderStatusButton").getOrderStatusButton(e);
        if (r != null) {
            const a = c(t_status).toString();
            const i = e.caption;
            const l = o("WAWebGetInteractiveFooterText").getInteractiveFooterText(e);
            const u = s._("Order #{order-id}", [
                s._param("order-id", r.reference_id)
            ]);
            return [
                a,
                u,
                i,
                l
            ].filter(Boolean).join("\n");
        }
        return m(e);
    }
    function m(e) {
        const t = o("WAWebOrderStatus").getOrderStatusInfo(e);
        if (t == null) {
            return null;
        }
        const t_status = t.status;
        if (t_status == null) {
            return null;
        }
        if (o("WAWebOrderStatus").hasOrderStatusButton(e)) {
            const r = c(t_status).toString();
            const a = e.caption;
            return [
                `*${r}*`,
                a
            ].filter(Boolean).join("\n");
        }
        return h(e.caption, t_status);
    }
    function p(e) {
        const t = o("WAWebOrderDetails").getOrderInfo(e);
        if (t == null) {
            return null;
        }
        const { currency, items, totalAmount } = t;
        const i = o("WAWebCurrencyUtils").formatAmount({
            amount: totalAmount,
            currency
        });
        if (items.length !== 0) {
            return `${items[0].name} · ${i}`;
        }
        return i;
    }
    function _(e) {
        const a = o("WAWebOrderDetails").getOrderInfo(e);
        if (a == null) {
            return null;
        }
        const a_paymentSettings = a.paymentSettings;
        const l = s._("Pix");
        const u = a_paymentSettings?.at(0)?.[o("WAWebBizOrderDetailsParams").PaymentSettingType.PIX_STATIC_CODE];
        const c = u?.merchant_name ?? "";
        const d = u?.key ?? "";
        const m = o("WAWebUserPrefsTypes").PixKeyType.cast(u?.key_type);
        return `${c} · ${l.toString()}: ${o("WAWebBrazilPixKeyFormattingUtils").getFormattedPixKey(d, m)}`;
    }
    function f(e) {
        const t = o("WAWebOrderPaymentStatus").getOrderPaymentStatusInfoFromNativeFlow(e);
        if (t == null) {
            return null;
        }
        return y(e.caption, t?.paymentStatus).toString();
    }
    function g(e) {
        const t = o("WAWebOrderPaymentStatus").getOrderPaymentStatusInfoFromNativeFlow(e);
        if (t == null) {
            return null;
        }
        return C(t?.paymentMethod);
    }
    function h(e, t) {
        let n = "";
        switch(t){
            case o("WAWebOrderStatus").OrderStatus.Pending:
                n = s._("Status: Pending");
                break;
            case o("WAWebOrderStatus").OrderStatus.Canceled:
                n = s._("Status: Cancelled");
                break;
            case o("WAWebOrderStatus").OrderStatus.PartiallyShipped:
                n = s._("Status: Partially shipped");
                break;
            case o("WAWebOrderStatus").OrderStatus.Complete:
                n = s._("Status: Complete");
                break;
            case o("WAWebOrderStatus").OrderStatus.Shipped:
                n = s._("Status: Shipped");
                break;
            case o("WAWebOrderStatus").OrderStatus.Processing:
                n = s._("Status: Processing");
                break;
            case o("WAWebOrderStatus").OrderStatus.PaymentRequested:
                n = s._("Status: Payment requested");
                break;
            case o("WAWebOrderStatus").OrderStatus.PreparingToShip:
                n = s._("Status: Preparing to ship");
                break;
            case o("WAWebOrderStatus").OrderStatus.Delivered:
                n = s._("Status: Delivered");
                break;
            case o("WAWebOrderStatus").OrderStatus.Confirmed:
                n = s._("Status: Confirmed");
                break;
            case o("WAWebOrderStatus").OrderStatus.Delayed:
                n = s._("Status: Delayed");
                break;
            case o("WAWebOrderStatus").OrderStatus.OutForDelivery:
                n = s._("Status: Out for delivery");
                break;
            case o("WAWebOrderStatus").OrderStatus.Failed:
                n = s._("Status: Failed");
                break;
            case o("WAWebOrderStatus").OrderStatus.Refunded:
                n = s._("Status: Refunded");
                break;
        }
        if (e != null && e.toLowerCase().includes(n.toString().toLowerCase())) {
            return e || "";
        }
        return `${n.toString()}
${e || ""}`.trim();
    }
    function y(e, t) {
        let n = "";
        switch(t){
            case o("WAWebOrderPaymentStatus").OrderPaymentStatus.Captured:
                n = s._("Payment: Paid");
                break;
            case o("WAWebOrderPaymentStatus").OrderPaymentStatus.Pending:
                n = s._("Payment: Pending");
                break;
            case o("WAWebOrderPaymentStatus").OrderPaymentStatus.Failed:
                n = s._("Payment: Failed");
                break;
        }
        return `${n.toString()}
${e ?? ""}`.trim();
    }
    function C(e) {
        let t = "";
        switch(e){
            case o("WAWebOrderPaymentStatus").OrderPaymentMethod.PaymentInstruction:
                t = s._("Paying outside WhatsApp");
                break;
            case o("WAWebOrderPaymentStatus").OrderPaymentMethod.Confirm:
                t = s._("Order confirmed");
                break;
        }
        return t.toString();
    }
    l.formatInteractive = e;
    l.getOrderStatusButtonBodyTitle = c;
    l.formatOrderStatusMessagePreview = d;
    l.formatOrderStatusMessageBody = m;
    l.formatOrderDetailsMessagePreview = p;
    l.formatPaymentInfoMessagePreview = _;
    l.formatOrderPaymentStatusMessage = f;
    l.formatOrderPaymentMethodMessage = g;
    l.appendPrefilledMsg = h;
    l.appendPrefilledOrderPaymentMsg = y;
}, 226);