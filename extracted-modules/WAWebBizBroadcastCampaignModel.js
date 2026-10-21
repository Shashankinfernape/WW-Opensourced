__d("WAWebBizBroadcastCampaignModel", [
    "WAWebBaseModel",
    "WAWebBizBroadcastCampaignCollection",
    "WAWebBizBroadcastCampaignGetters",
    "WAWebBizBroadcastCampaignInsightsCollection",
    "WAWebModelUtils"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.id = o("WAWebModelUtils").prop();
            t.adGroupId = o("WAWebModelUtils").prop();
            t.adId = o("WAWebModelUtils").prop();
            t.broadcastJid = o("WAWebModelUtils").prop();
            t.campaignName = o("WAWebModelUtils").prop();
            t.createdTimestamp = o("WAWebModelUtils").prop();
            t.deviceId = o("WAWebModelUtils").prop();
            t.isDuplicate = o("WAWebModelUtils").prop();
            t.msgId = o("WAWebModelUtils").prop();
            t.pendingBroadcastMessageId = o("WAWebModelUtils").prop();
            t.reservedQuota = o("WAWebModelUtils").prop();
            t.scheduledTimestamp = o("WAWebModelUtils").prop();
            t.sourceCampaignId = o("WAWebModelUtils").prop();
            t.status = o("WAWebModelUtils").prop();
            t.insights = o("WAWebModelUtils").session();
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.initialize = function() {
            e.prototype.initialize.call(this);
            this.addChild("insights", r("WAWebBizBroadcastCampaignInsightsCollection").gadd(this.id));
        };
        t_prototype.getCollection = function() {
            return r("WAWebBizBroadcastCampaignCollection");
        };
        t_prototype.delete = function() {
            e.prototype.delete.call(this);
            o("WAWebBizBroadcastCampaignGetters").clearBizBroadcastCampaignGetterCacheFor(this);
        };
        return t;
    })(o("WAWebBaseModel").BaseModel);
    e.Proxy = "bizBroadcastCampaign";
    const s = o("WAWebBaseModel").defineModel(e);
    l.BizBroadcastCampaign = s;
}, 98);