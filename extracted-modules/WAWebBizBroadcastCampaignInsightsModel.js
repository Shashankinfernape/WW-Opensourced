__d("WAWebBizBroadcastCampaignInsightsModel", [
    "WAWebBaseModel",
    "WAWebBizBroadcastCampaignInsightsCollection",
    "WAWebModelUtils"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.id = o("WAWebModelUtils").prop();
            t.recipientCount = o("WAWebModelUtils").prop(0);
            t.deliveredCount = o("WAWebModelUtils").prop(0);
            t.readCount = o("WAWebModelUtils").prop(0);
            t.repliedCount = o("WAWebModelUtils").prop(0);
            t.quickReplyCount = o("WAWebModelUtils").prop(0);
            t.lastUpdatedTimestampMs = o("WAWebModelUtils").prop(0);
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.getCollection = function() {
            return r("WAWebBizBroadcastCampaignInsightsCollection");
        };
        return t;
    })(o("WAWebBaseModel").BaseModel);
    e.Proxy = "bizBroadcastCampaignInsights";
    const s = o("WAWebBaseModel").defineModel(e);
    l.BizBroadcastCampaignInsights = s;
}, 98);