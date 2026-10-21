__d("WAWebNewsletterAdminInsightsModel", [
    "WAWebBaseModel",
    "WAWebModelUtils",
    "WAWebNewsletterAdminInsightsGetters",
    "WAWebNewsletterInsightUtils",
    "WAWebWid"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.rangeStart = o("WAWebModelUtils").prop();
            t.rangeEnd = o("WAWebModelUtils").prop();
            t.dataStatus = o("WAWebModelUtils").prop(function() {
                return o("WAWebNewsletterInsightUtils").NewsletterInsightDataStatus.Available;
            });
            t.accountsReachedAll = o("WAWebModelUtils").prop();
            t.accountsReachedChannels = o("WAWebModelUtils").prop();
            t.accountsReachedChannelStatus = o("WAWebModelUtils").prop();
            t.reachDeltaAll = o("WAWebModelUtils").prop();
            t.reachDeltaChannels = o("WAWebModelUtils").prop();
            t.reachDeltaChannelStatus = o("WAWebModelUtils").prop();
            t.followersReachedAll = o("WAWebModelUtils").prop();
            t.followersReachedChannels = o("WAWebModelUtils").prop();
            t.followersReachedChannelStatus = o("WAWebModelUtils").prop();
            t.nonFollowersReachedAll = o("WAWebModelUtils").prop();
            t.nonFollowersReachedChannels = o("WAWebModelUtils").prop();
            t.nonFollowersReachedChannelStatus = o("WAWebModelUtils").prop();
            t.reachByCountryAll = o("WAWebModelUtils").prop(function() {
                return [];
            });
            t.reachByCountryChannels = o("WAWebModelUtils").prop(function() {
                return [];
            });
            t.reachByCountryChannelStatus = o("WAWebModelUtils").prop(function() {
                return [];
            });
            t.followers = o("WAWebModelUtils").prop();
            t.followersDelta = o("WAWebModelUtils").prop();
            t.followersByCountry = o("WAWebModelUtils").prop(function() {
                return [];
            });
            t.netFollows = o("WAWebModelUtils").prop();
            t.growthChartData = o("WAWebModelUtils").prop(function() {
                return [];
            });
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.delete = function() {
            e.prototype.delete.call(this);
            o("WAWebNewsletterAdminInsightsGetters").clearNewsletterAdminInsightsGetterCacheFor(this);
        };
        return t;
    })(o("WAWebBaseModel").BaseModel);
    e.Proxy = "newsletterInsights";
    e.idClass = r("WAWebWid");
    const s = o("WAWebBaseModel").defineModel(e);
    l.NewsletterAdminInsights = s;
}, 98);