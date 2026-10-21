__d("WAWebOrgBackgroundSyncJob", [
    "WAWebABPropsCache",
    "WAWebBackendApi",
    "WAWebCallsOnlyGating",
    "WAWebOrgGatingUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e() {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            yield o("WAWebABPropsCache").waitForABPropConfigsReady();
            if (!o("WAWebCallsOnlyGating").isCallsOnlyModeEnabled() && o("WAWebOrgGatingUtils").isOrgInfoDisplayEnabled()) {
                o("WAWebBackendApi").frontendFireAndForget("syncOrgsInBackground", {
                    bypassCooldown: false,
                    forceDirectory: false
                });
            }
        });
        return s.apply(this, arguments);
    }
    l.runOrgBackgroundSync = e;
}, 98);