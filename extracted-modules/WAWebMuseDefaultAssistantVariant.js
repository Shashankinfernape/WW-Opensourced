__d("WAWebMuseDefaultAssistantVariant", [
    "$InternalEnum",
    "WAWebCmd",
    "WAWebMuseDefaultAssistantVariantSource",
    "WAWebPrimaryFeaturesModel"
], function(t, n, r, o, a, i, l) {
    const e = n("$InternalEnum")({
        MetaAI: 0,
        MuseAfterLinking: 1,
        MuseAlways: 2
    });
    function s() {
        return e.cast(o("WAWebMuseDefaultAssistantVariantSource").readMuseDefaultAssistantVariantSource()) ?? e.MetaAI;
    }
    function u(e) {
        const t = function() {
            return e();
        };
        o("WAWebCmd").Cmd.on("on_ab_props_update_from_bridge", t);
        o("WAWebPrimaryFeaturesModel").PrimaryFeatures.on("change:features", t);
        return function() {
            o("WAWebCmd").Cmd.off("on_ab_props_update_from_bridge", t);
            o("WAWebPrimaryFeaturesModel").PrimaryFeatures.off("change:features", t);
        };
    }
    l.MuseDefaultAssistantVariant = e;
    l.getMuseDefaultAssistantVariant = s;
    l.subscribeToMuseDefaultAssistantVariant = u;
}, 98);