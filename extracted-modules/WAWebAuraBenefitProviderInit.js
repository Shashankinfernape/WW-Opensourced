__d("WAWebAuraBenefitProviderInit", [
    "WAWebAuraGating",
    "WAWebFeatureFlagCollection"
], function(t, n, r, o, a, i, l) {
    function e() {
        r("WAWebAuraGating").initFeatureFlagProvider(function(e) {
            const n = o("WAWebFeatureFlagCollection").FeatureFlagCollection.get(e);
            if (n == null) {
                return null;
            }
            return {
                enabled: n.enabled === true,
                limit: n.limit ?? null
            };
        });
    }
    l.initAuraBenefitFeatureFlagProvider = e;
}, 98);