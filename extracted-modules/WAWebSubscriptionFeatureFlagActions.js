__d("WAWebSubscriptionFeatureFlagActions", [
    "WAWebFeatureFlagCollection"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WAWebFeatureFlagCollection").FeatureFlagCollection.get(e);
        return t?.enabled === true;
    }
    l.isSubscriptionFeatureFlagEnabled = e;
}, 98);