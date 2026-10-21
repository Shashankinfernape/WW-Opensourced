__d("RSTMetadataCollectorMainThread", [
    "FBLogger",
    "QPLCrashResiliencePlugin",
    "RSTInteractionTrackingMainThread",
    "RSTRecoverableUnresponsivenessTrackingMainThread",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e = false;
    function s() {
        if (!e) {
            try {
                o("RSTInteractionTrackingMainThread").start();
                o("RSTRecoverableUnresponsivenessTrackingMainThread").start();
                o("QPLCrashResiliencePlugin").startQPLCrashResilience();
                e = true;
            } catch (error) {
                r("FBLogger")("responsive-tracker").catching(r("getErrorSafe")(error)).warn("Failed to start RST metadata collector");
            }
        }
    }
    l.start = s;
}, 98);