__d("WAWebBizBroadcastMarketingMessagesEligibilityModel", [
    "WALogger"
], function(t, n, r, o, a, i, l) {
    let e;
    let s = null;
    function u(t) {
        s = t;
        o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "[broadcast:mm-eligibility] updated: ",
            ""
        ])), String(t));
    }
    function c() {
        return s === true;
    }
    l.updateMarketingMessagesEligibility = u;
    l.isMarketingMessagesEligible = c;
}, 98);