__d("WAWebBrazilPaymentReceiptAddedFormatMsgText", [
    "WAWebBrazilPaymentReceiptAddedNotification",
    "WAWebFrontendMsgGetters"
], function(t, n, r, o, a, i, l) {
    function e({ msg }) {
        return o("WAWebBrazilPaymentReceiptAddedNotification").getBrazilPaymentReceiptAddedPreview(o("WAWebFrontendMsgGetters").getChat(msg));
    }
    l.default = e;
}, 98);