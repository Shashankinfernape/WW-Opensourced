__d("WAWebBootstrapBizBroadcastCampaigns", [
    "Promise",
    "WALogger",
    "WAWebBizBroadcastCampaignInitFromStorage",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m = null;
    let p = false;
    function _() {
        if (m != null) {
            if (p) {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[bb:bootstrap] already complete, returning cached result"
                ])));
            } else {
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[bb:bootstrap] already in progress, joining existing task"
                ])));
            }
            return m;
        }
        m = f();
        return m;
    }
    function f() {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "[bb:bootstrap] start"
            ])));
            try {
                yield (d || (d = n("Promise"))).all([
                    o("WAWebBizBroadcastCampaignInitFromStorage").restoreBizBroadcastCampaigns(),
                    o("WAWebBizBroadcastCampaignInitFromStorage").restoreBizBroadcastCampaignInsights()
                ]);
                p = true;
                o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[bb:bootstrap] done"
                ])));
            } catch (e) {
                m = null;
                throw e;
            }
        });
        return g.apply(this, arguments);
    }
    l.bootstrapBizBroadcastCampaigns = _;
}, 98);