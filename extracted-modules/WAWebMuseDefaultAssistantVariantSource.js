__d("WAWebMuseDefaultAssistantVariantSource", [
    "WAWebPrimaryFeaturesModel"
], function(t, n, r, o, a, i, l) {
    function e() {
        if (o("WAWebPrimaryFeaturesModel").PrimaryFeatures.hasFeature("ai_meta_ai_muse_default_assistant_variant_2") || o("WAWebPrimaryFeaturesModel").PrimaryFeatures.hasFeature("ai_meta_ai_muse_default_assistant_variant_3")) {
            return 2;
        }
        if (o("WAWebPrimaryFeaturesModel").PrimaryFeatures.hasFeature("ai_meta_ai_muse_default_assistant_variant_1")) {
            return 1;
        }
        return 0;
    }
    l.readMuseDefaultAssistantVariantSource = e;
}, 98);