__d("WAWebBrAddPixKeyOfferReceipt", [
    "WAWebBrAddPixKeyMessageGating",
    "WAWebBrAddPixKeyMessageOffer",
    "WAWebBrAddPixKeyPartnerDirectory",
    "WAWebFutureproofProtoUtils"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e({ fromMe, proto, senders }) {
        if (!o("WAWebBrAddPixKeyMessageGating").isAddPixKeyMessageEnabled() || fromMe || !s(proto).includes(o("WAWebBrAddPixKeyMessageOffer").OFFER_PAYMENT_ACCOUNT_BUTTON_NAME)) {
            return false;
        }
        return !o("WAWebBrAddPixKeyPartnerDirectory").isAddPixKeyPartnerSender(senders);
    }
    function s(proto) {
        const l = u(proto);
        const s = l.interactiveMessage ?? l.templateMessage?.interactiveMessageTemplate;
        return [].concat((l.buttonsMessage?.buttons ?? []).map((e)=>e.nativeFlowInfo?.name), c(s), (s?.carouselMessage?.cards ?? []).flatMap(c));
    }
    function u(proto) {
        let n = proto;
        for(let r = o("WAWebFutureproofProtoUtils").maybeGetFutureproofMessage(n)?.message; r != null;){
            n = r;
            r = o("WAWebFutureproofProtoUtils").maybeGetFutureproofMessage(n)?.message;
        }
        return n;
    }
    function c(e) {
        return (e?.nativeFlowMessage?.buttons ?? []).map((e)=>e.name);
    }
    l.shouldDropAddPixKeyOffer = e;
}, 98);