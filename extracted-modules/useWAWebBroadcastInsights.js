__d("useWAWebBroadcastInsights", [
    "WALogger",
    "WAWebBizBroadcastInsightsStorageUtils",
    "WAWebBroadcastConsts",
    "WAWebCmd",
    "asyncToGeneratorRuntime",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const { useEffect, useState } = u;
    function useM(t) {
        const r = useState(null);
        const insights = r[0];
        const i = r[1];
        const l = useState(true);
        const loading = l[0];
        const u = l[1];
        useEffect(function() {
            if (t === "") {
                return;
            }
            let r = false;
            function a() {
                return l.apply(this, arguments);
            }
            function l() {
                l = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[useWAWebBroadcastInsights] Loading insights for campaign ",
                        ""
                    ])), t);
                    const n = yield o("WAWebBizBroadcastInsightsStorageUtils").getInsightsForCampaign(t);
                    if (!r) {
                        i(n);
                        u(false);
                    }
                });
                return l.apply(this, arguments);
            }
            a();
            const s = function() {
                a();
            };
            o("WAWebCmd").Cmd.on(o("WAWebBroadcastConsts").BIZ_BROADCAST_CAMPAIGN_UPDATED_EVENT, s);
            return function() {
                r = true;
                o("WAWebCmd").Cmd.off(o("WAWebBroadcastConsts").BIZ_BROADCAST_CAMPAIGN_UPDATED_EVENT, s);
            };
        }, [
            t
        ]);
        return {
            insights,
            loading
        };
    }
    l.default = useM;
}, 98);