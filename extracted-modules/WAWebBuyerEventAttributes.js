__d("WAWebBuyerEventAttributes", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = [
        "cta",
        "paymentMethodChoice",
        "acceptedPaymentMethod",
        "p2mFlow",
        "p2pFlow",
        "flow",
        "p2mType",
        "status",
        "currency",
        "isTosAccepted",
        "flowExperience",
        "isCtwaOriginated",
        "referral",
        "error",
        "orderContentVariant",
        "messageType",
        "hasProductVariants",
        "hasAttachment",
        "hasAttachmentDownload",
        "p2mOfferingType",
        "numInstallments",
        "isTemplate",
        "isCtaAvailable",
        "chatType",
        "isSimplifiedOrder",
        "isUpr",
        "messageId",
        "identifierType",
        "methodType",
        "screen"
    ];
    function l(e) {
        return e.replace(/[A-Z]/g, (e)=>`_${e.toLowerCase()}`);
    }
    function s(t) {
        const n = {};
        for (const r of e){
            const o = t[r];
            if (o != null) {
                n[l(r)] = o;
            }
        }
        return n;
    }
    i.buyerEventAttributesToObject = s;
}, 66);