__d("useWAWebBizBroadcastCampaignByMsg", [
    "WAWebBizBroadcastCampaignAPI",
    "WAWebBroadcastConsts",
    "WAWebCmd",
    "asyncToGeneratorRuntime",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const { useEffect, useState } = s;
    function useD(e) {
        const t = useState(null);
        const r = t[0];
        const a = t[1];
        const i = useState(e);
        const l = i[0];
        const s = i[1];
        if (l !== e) {
            s(e);
            a(null);
        }
        useEffect(function() {
            let t = 0;
            let r = false;
            function i() {
                return l.apply(this, arguments);
            }
            function l() {
                l = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    const n = ++t;
                    const i = yield o("WAWebBizBroadcastCampaignAPI").getBizBroadcastCampaignByMsgId(e);
                    if (n === t) {
                        r = i != null;
                        a(i != null ? i.campaignId : null);
                    }
                });
                return l.apply(this, arguments);
            }
            i();
            const s = function() {
                if (!r) {
                    i();
                }
            };
            o("WAWebCmd").Cmd.on(o("WAWebBroadcastConsts").BIZ_BROADCAST_CAMPAIGN_UPDATED_EVENT, s);
            return function() {
                t++;
                o("WAWebCmd").Cmd.off(o("WAWebBroadcastConsts").BIZ_BROADCAST_CAMPAIGN_UPDATED_EVENT, s);
            };
        }, [
            e
        ]);
        return r;
    }
    l.default = useD;
}, 98);