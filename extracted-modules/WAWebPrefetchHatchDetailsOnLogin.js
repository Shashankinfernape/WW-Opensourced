__d("WAWebPrefetchHatchDetailsOnLogin", [
    "WAWebCmd",
    "WAWebHatchChannelBootstrap",
    "WAWebHatchFrontendGating",
    "WAWebPrimaryFeaturesModel"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e = false;
    let s = false;
    let u = false;
    function c() {
        if (!e) {
            e = true;
            s = o("WAWebCmd").Cmd.isMainStreamReadyMd === true;
            if (!s) {
                o("WAWebCmd").Cmd.on("main_stream_mode_ready_from_bridge", function() {
                    s = true;
                    d();
                });
            }
            o("WAWebPrimaryFeaturesModel").PrimaryFeatures.on("change:aiHatchIntegrationEnabled", function() {
                d();
            });
            o("WAWebCmd").Cmd.on("on_ab_props_update_from_bridge", function() {
                d();
            });
            d();
        }
    }
    function d() {
        if (!(u || !s || !o("WAWebHatchFrontendGating").isHatchIntegrationEnabled())) {
            u = true;
            o("WAWebHatchChannelBootstrap").bootstrapHatchWhenLinked();
        }
    }
    l.initHatchDetailsPrefetchOnLogin = c;
}, 98);