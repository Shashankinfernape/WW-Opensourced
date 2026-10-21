__d("RSTAdsManagerUtilsMainThread", [
    "requireWeak"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e = null;
    r("requireWeak")("AdsAccountStore", function(t) {
        e = t;
    });
    let s = null;
    r("requireWeak")("AdsPERouterHelper", function(e) {
        s = e;
    });
    function u() {
        try {
            const a = s?.getRouter()?.getQueryParams() ?? {};
            const { selected_ad_ids, selected_adset_ids, selected_campaign_ids } = a;
            const c = selected_ad_ids?.toArray() ?? [];
            const d = selected_adset_ids?.toArray() ?? [];
            const m = selected_campaign_ids?.toArray() ?? [];
            return {
                adIds: c.map((e)=>String(e)),
                adsetIds: d.map((e)=>String(e)),
                campaignIds: m.map((e)=>String(e))
            };
        } catch (e) {
            return {
                adIds: [],
                adsetIds: [],
                campaignIds: []
            };
        }
    }
    function c() {
        return e?.getSelectedAccountID() ?? "0";
    }
    function d() {
        return e?.getSelectedBusinessID() ?? "0";
    }
    function m() {
        return {};
    }
    l.getAdEntityIds = u;
    l.getAdAccountID = c;
    l.getBusinessID = d;
    l.getAdsAnnotations = m;
}, 98);