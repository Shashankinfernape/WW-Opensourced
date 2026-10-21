__d("WAWebTosUrl", [
    "WAWebL10N"
], function(t, n, r, o, a, i, l) {
    const e = "https://www.whatsapp.com/legal/";
    const s = "https://www.whatsapp.com/legal/business-terms";
    const u = "https://www.facebook.com/legal/terms/businesstools";
    const c = "https://faq.whatsapp.com/732422085323636";
    function d() {
        return `${e}?lg=${r("WAWebL10N").getNormalizedLocale()}`;
    }
    function m() {
        return `${s}?lg=${r("WAWebL10N").getNormalizedLocale()}`;
    }
    function p() {
        return u;
    }
    function _() {
        return `${c}?lg=${r("WAWebL10N").getNormalizedLocale()}`;
    }
    l.getTosUrl = d;
    l.getBizTosUrl = m;
    l.getMetaBizTosUrl = p;
    l.getBizDataSharingHcaUrl = _;
}, 98);