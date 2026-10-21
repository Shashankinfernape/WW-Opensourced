__d("WAWebBizBroadcastCampaignInsightsCollection", [
    "Promise",
    "WAWebBizBroadcastCampaignInsightsModel",
    "WAWebStaleBaseCollection"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = ((t)=>{
        function r(...a) {
            let r;
            r = t.call(this, ...a) || this;
            r.bootstrapped = false;
            r.findImpl = function(t) {
                return (e || (e = n("Promise"))).resolve({
                    id: t.toString()
                });
            };
            return babelHelpers.assertThisInitialized(r) || babelHelpers.assertThisInitialized(r);
        }
        babelHelpers.inheritsLoose(r, t);
        const r_prototype = r.prototype;
        r_prototype.markBootstrapped = function() {
            this.bootstrapped = true;
            this.trigger("bootstrapped");
        };
        return r;
    })(o("WAWebStaleBaseCollection").StaleBaseCollection);
    s.model = o("WAWebBizBroadcastCampaignInsightsModel").BizBroadcastCampaignInsights;
    const u = new s;
    l.default = u;
}, 98);