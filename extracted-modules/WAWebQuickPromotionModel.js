__d("WAWebQuickPromotionModel", [
    "WATimeUtils",
    "WAWebBaseModel",
    "WAWebPersistedJobDefinitions",
    "WAWebQuickPromotionCustomHandlingUtils",
    "WAWebServicedJobs"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.promotion = o("WAWebBaseModel").prop();
            t.isDismissedThisSession = o("WAWebBaseModel").session(false);
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.dismiss = function() {
            this.isDismissedThisSession = true;
            const tracking = this.promotion.tracking;
            tracking.dismisses += 1;
            tracking.lastDismissTs = o("WATimeUtils").unixTime();
            o("WAWebServicedJobs").runServicedJob(o("WAWebPersistedJobDefinitions").jobSerializers.dismissQuickPromotion(this.promotion.id));
            o("WAWebQuickPromotionCustomHandlingUtils").maybeExecuteQuickPromotionCustomHandlingSpec(this.promotion, "dismiss");
        };
        t_prototype.primaryActionClick = function() {
            const tracking = this.promotion.tracking;
            tracking.primaryClicks += 1;
            tracking.lastPrimaryClickTs = o("WATimeUtils").unixTime();
            o("WAWebServicedJobs").runServicedJob(o("WAWebPersistedJobDefinitions").jobSerializers.primaryActionClickInQuickPromotion(this.promotion.id));
            o("WAWebQuickPromotionCustomHandlingUtils").maybeExecuteQuickPromotionCustomHandlingSpec(this.promotion, "primaryActionClick");
        };
        t_prototype.impression = function() {
            const promotion = this.promotion;
            const e_tracking = promotion.tracking;
            const t_lastImpressionTs = e_tracking.lastImpressionTs;
            if (t_lastImpressionTs != null) {
                const r = promotion.data.qpConfigEligibilityDurationMs;
                if (o("WATimeUtils").castUnixTimeToMillisTime(t_lastImpressionTs) + r >= o("WATimeUtils").millisTime()) {
                    return;
                }
            }
            e_tracking.impressions += 1;
            e_tracking.lastImpressionTs = o("WATimeUtils").unixTime();
            o("WAWebServicedJobs").runServicedJob(o("WAWebPersistedJobDefinitions").jobSerializers.impressionOnQuickPromotion(promotion.id));
            o("WAWebQuickPromotionCustomHandlingUtils").maybeExecuteQuickPromotionCustomHandlingSpec(this.promotion, "impression");
        };
        return t;
    })(o("WAWebBaseModel").BaseModel);
    e.Proxy = "QuickPromotion";
    const s = o("WAWebBaseModel").defineModel(e);
    l.QuickPromotionModel = s;
}, 98);