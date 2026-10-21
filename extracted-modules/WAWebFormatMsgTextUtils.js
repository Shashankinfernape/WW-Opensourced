__d("WAWebFormatMsgTextUtils", [
    "fbt",
    "WAWebCurrencyUtils",
    "WAWebFormatPaymentMsg",
    "WAWebSpoilerNotificationMask",
    "WAWebUnformatMsg",
    "WAWebVcardGetNameFromParsed",
    "WAWebVcardUtils",
    "compactMap"
], function(t, n, r, o, a, i, l, s) {
    function e(e, t) {
        const t_spoilerReplacement = t.spoilerReplacement;
        if (t_spoilerReplacement == null) {
            return e;
        }
        const r = o("WAWebSpoilerNotificationMask").maskSpoilersForPreview(e, t_spoilerReplacement);
        t.onSpoilerReplacementHandled?.();
        return r;
    }
    function u(e, t, n) {
        const o = r("WAWebUnformatMsg")(e, t, n.spoilerReplacement);
        if (n.spoilerReplacement != null) {
            if (n.onSpoilerReplacementHandled != null) {
                n.onSpoilerReplacementHandled();
            }
        }
        return o;
    }
    function c(e, t) {
        if (e == null) {
            return null;
        }
        const n = t.isDynamicReplyButtonsMsg === true;
        if (t.footer != null && t.footer !== "" && n) {
            return `${e}
${t.footer}`;
        }
        return e;
    }
    function d(e) {
        switch(e.subtype){
            case "ciphertext":
                return s._("Waiting for this payment message's note. This may take a while.");
            case "futureproof":
                return s._("This payment message has a note, but your version of WhatsApp doesn't support viewing it.");
            case "send":
                {
                    const n = e.paymentNoteMsg?.body != null ? ` - ${e.paymentNoteMsg.body}` : "";
                    const r = e.paymentCurrency && e.paymentAmount1000 ? o("WAWebCurrencyUtils").formatAmount1000({
                        amount: e.paymentAmount1000,
                        currency: e.paymentCurrency
                    }) : s._("Payment").toString();
                    return r + n;
                }
            case "request":
                {
                    const i = e.paymentNoteMsg?.body != null ? ` - ${e.paymentNoteMsg.body}` : "";
                    const l = e.paymentCurrency && e.paymentAmount1000 ? o("WAWebCurrencyUtils").formatAmount1000({
                        amount: e.paymentAmount1000,
                        currency: e.paymentCurrency
                    }) : s._("Payment").toString();
                    return l + i;
                }
            case "invite":
                return o("WAWebFormatPaymentMsg").formatPaymentInviteMessageText(e.id);
            default:
                return s._("Payment message. Open WhatsApp on your phone to view.");
        }
    }
    function m(e) {
        if (e.length > 1) {
            const t = r("compactMap")(e, function(e) {
                return o("WAWebVcardGetNameFromParsed").vcardGetNameFromParsed(e);
            });
            return o("WAWebVcardUtils").getNameStringFromNames(t);
        }
        return o("WAWebVcardGetNameFromParsed").vcardGetNameFromParsed(e[0]) || s._("Contact");
    }
    l.maskSpoilersWithOptions = e;
    l.unformatTextWithSpoilerReplacement = u;
    l.maybeAddFooter = c;
    l.formatPayment = d;
    l.formatParsedVcardsDisplayText = m;
}, 226);