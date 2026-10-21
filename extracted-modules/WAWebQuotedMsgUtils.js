__d("WAWebQuotedMsgUtils", [
    "fbt",
    "WAWebBizOrderDetailsParams",
    "WAWebBrazilPixKeyFormattingUtils",
    "WAWebCurrencyUtils",
    "WAWebFormatMsgText",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgCollection",
    "WAWebMsgType",
    "WAWebOrderDetailProductLabel",
    "WAWebOrderDetails",
    "WAWebProductCatalogCatalogConstants",
    "WAWebStringTruncation",
    "WAWebUserPrefsTypes",
    "WAWebVcardGetNameFromParsed",
    "fbs"
], function(t, n, r, o, a, i, l, s) {
    const e = [
        "conversation",
        "starred",
        "msgInfo"
    ];
    const u = {
        EXPLICIT: 0,
        AUTO: 1
    };
    function c(e) {
        switch(e.type){
            case o("WAWebMsgType").MSG_TYPE.DOCUMENT:
                if (e.isVcardOverMmsDocument) {
                    return p(e);
                }
                return r("WAWebFormatMsgText")({
                    msg: e.unsafe()
                });
            case o("WAWebMsgType").MSG_TYPE.MULTI_VCARD:
                return m(e);
            case o("WAWebMsgType").MSG_TYPE.MUSIC:
                return d(e);
            case o("WAWebMsgType").MSG_TYPE.PRODUCT:
                return _(e);
            case o("WAWebMsgType").MSG_TYPE.NATIVE_FLOW:
            case o("WAWebMsgType").MSG_TYPE.INTERACTIVE:
                if (e.nativeFlowName === r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS || e.nativeFlowName === r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_INFO) {
                    return f(e);
                }
                return r("WAWebFormatMsgText")({
                    msg: e.unsafe()
                });
            default:
                return r("WAWebFormatMsgText")({
                    msg: e.unsafe()
                });
        }
    }
    function d(e) {
        return e.musicData?.title ?? r("WAWebFormatMsgText")({
            msg: e.unsafe()
        });
    }
    function m(e) {
        const length = e.vcardList.length;
        if (length > 0) {
            return s._("_j{\"*\":\"{count} contacts\",\"_1\":\"1 contact\"}", [
                s._plural(length, "count")
            ]);
        }
        return s._("No contacts");
    }
    function p(e) {
        if (e.mediaData.parsedVcards) {
            const n = e.mediaData.parsedVcards;
            if (n.length > 1) {
                return s._("_j{\"*\":\"{count} contacts\",\"_1\":\"1 contact\"}", [
                    s._plural(n.length, "count")
                ]).toString();
            }
            return o("WAWebVcardGetNameFromParsed").vcardGetNameFromParsed(n[0]) || r("fbs")._("Contact").toString();
        } else if (e.pageCount != null) {
            return s._("_j{\"*\":\"{count} contacts\",\"_1\":\"1 contact\"}", [
                s._plural(e.pageCount, "count")
            ]).toString();
        }
        return e.mediaData?.filename || r("fbs")._("Document").toString();
    }
    function _({ currencyCode, description, priceAmount1000, salePriceAmount1000, title }) {
        let l;
        if (currencyCode != null && priceAmount1000 != null) {
            const s = (amount)=>o("WAWebCurrencyUtils").formatAmount1000({
                    amount,
                    currency: currencyCode
                });
            l = salePriceAmount1000 != null ? `${s(salePriceAmount1000)} ~${s(priceAmount1000)}~` : s(priceAmount1000);
        } else {
            if (description != null && description !== "") {
                l = o("WAWebStringTruncation").truncateAtCodepoints(description, o("WAWebProductCatalogCatalogConstants").MAX_REPLY_PRODUCT_DESC_LENGTH);
            }
        }
        return [
            o("WAWebStringTruncation").truncateAtCodepoints(title, o("WAWebProductCatalogCatalogConstants").MAX_REPLY_PRODUCT_TITLE_LENGTH),
            l
        ].filter(Boolean).join("\n");
    }
    function f(e) {
        const t = o("WAWebOrderDetails").getOrderInfo(e);
        if (t == null) {
            return "";
        }
        const t_buttonName = t.buttonName;
        if (t_buttonName === "payment_info") {
            const l = s._("Pix");
            const u = t.paymentSettings;
            const c = u?.at(0)?.[o("WAWebBizOrderDetailsParams").PaymentSettingType.PIX_STATIC_CODE];
            const d = c?.merchant_name ?? "";
            const m = c?.key ?? "";
            const p = o("WAWebUserPrefsTypes").PixKeyType.cast(c?.key_type);
            return `${d}
${l.toString()}: ${o("WAWebBrazilPixKeyFormattingUtils").getFormattedPixKey(m, p)}`;
        }
        if (t.items.length === 0) {
            return o("WAWebCurrencyUtils").formatAmount({
                amount: t.totalAmount,
                currency: t.currency
            });
        }
        return `${o("WAWebOrderDetailProductLabel").getOrderDetailProductLabel(t.items)}
${s._("Quantity {order_items_quantity} • {order_total_price}", [
            s._param("order_items_quantity", t.quantity),
            s._param("order_total_price", o("WAWebCurrencyUtils").formatAmount({
                amount: t.totalAmount,
                currency: t.currency
            }))
        ]).toString()}`;
    }
    function g(t) {
        if (t != null && e.includes(t)) {
            return 58;
        }
        return 79;
    }
    function h(e) {
        return o("WAWebMsgCollection").MsgCollection.byThreadId([
            e
        ]).length;
    }
    l.QuotedType = u;
    l.formatQuotedMsg = c;
    l.formatMultiVcardText = m;
    l.formatVcardOverMmsText = p;
    l.formatProductText = _;
    l.getImageSize = g;
    l.getMessagesCountByThreadId = h;
}, 226);