__d("WAWebVelocityBackgroundTimer", [
    "WAWebThirdPartyMigrationGatingUtils",
    "velocity-animate"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
        if (!o("WAWebThirdPartyMigrationGatingUtils").isVelocityAnimateMigrationEnabled()) {
            if (e) {
                r("velocity-animate").enableSmoothBackgroundAnimations();
            } else {
                r("velocity-animate").disableSmoothBackgroundAnimations();
            }
        }
    }
    l.toggleSmoothBackgroundAnimations = e;
}, 98);