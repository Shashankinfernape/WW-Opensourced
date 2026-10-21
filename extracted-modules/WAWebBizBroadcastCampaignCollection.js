__d("WAWebBizBroadcastCampaignCollection", [
    "Promise",
    "WAWebBizBroadcastCampaignGetters",
    "WAWebBizBroadcastCampaignModel",
    "WAWebCollectionUtils",
    "WAWebStaleBaseCollection"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = ((t)=>{
        function r(...i) {
            let r;
            r = t.call(this, ...i) || this;
            r.bootstrapped = false;
            r.byBroadcastJid = o("WAWebCollectionUtils").aggregated(function(e) {
                return e.broadcastJid;
            });
            r.byStatus = o("WAWebCollectionUtils").aggregated(function(e) {
                return e.status;
            }, {
                subscribeToKey: "status"
            });
            r.byDevice = o("WAWebCollectionUtils").aggregated(function(e) {
                return e.deviceId;
            });
            r.findImpl = function(t) {
                return (e || (e = n("Promise"))).resolve({
                    id: t.toString()
                });
            };
            return babelHelpers.assertThisInitialized(r) || babelHelpers.assertThisInitialized(r);
        }
        babelHelpers.inheritsLoose(r, t);
        const r_prototype = r.prototype;
        r_prototype.remove = function(n, r) {
            const e = t.prototype.remove.call(this, n, r);
            e.forEach((e)=>{
                if (e != null) {
                    o("WAWebBizBroadcastCampaignGetters").clearBizBroadcastCampaignGetterCacheFor(e);
                }
            });
            return e;
        };
        r_prototype.reset = function() {
            this.forEach(o("WAWebBizBroadcastCampaignGetters").clearBizBroadcastCampaignGetterCacheFor);
            t.prototype.reset.call(this);
        };
        r_prototype.markBootstrapped = function() {
            this.bootstrapped = true;
            this.trigger("bootstrapped");
        };
        return r;
    })(o("WAWebStaleBaseCollection").StaleBaseCollection);
    s.model = o("WAWebBizBroadcastCampaignModel").BizBroadcastCampaign;
    s.comparator = function(e, t) {
        return t.createdTimestamp - e.createdTimestamp;
    };
    const u = new s;
    l.default = u;
}, 98);