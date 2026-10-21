__d("WAWebCarouselMsgUtils", [
    "WALogger",
    "WAWebMsgCollection",
    "WAWebMsgGetters"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    function c(t) {
        if (!t.isCarouselCard) {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "getParentMsgFromCarouselCard called on non carousel card."
            ]))).sendLogs("getParentMsgFromCarouselCard-error");
            return;
        }
        if (t.parentMsgId == null) {
            o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "parentMsgId is null on carousel card."
            ]))).sendLogs("getParentMsgFromCarouselCard-error");
            return;
        }
        const n = o("WAWebMsgCollection").MsgCollection.get(t.parentMsgId);
        if (n == null) {
            o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "Could not find parent msg (id=",
                ") for carousel card."
            ])), t.parentMsgId).sendLogs("getParentMsgFromCarouselCard-error");
        }
        return n;
    }
    function d(e) {
        if (!e.id.fromMe) {
            return false;
        }
        if (o("WAWebMsgGetters").getBizBotType(e) != null) {
            return true;
        }
        if (!e.isCarouselCard) {
            return false;
        }
        const t = c(e);
        return t != null && o("WAWebMsgGetters").getBizBotType(t) != null;
    }
    function m(e) {
        const t = [];
        const n = function(n) {
            return t.push(n);
        };
        for (const r of e){
            if (r.carouselCards != null) {
                r.carouselCards.forEach(n);
            } else {
                n(r);
            }
        }
        return t;
    }
    l.getParentMsgFromCarouselCard = c;
    l.isOutgoingBizBotMessage = d;
    l.flattenMsgs = m;
}, 98);