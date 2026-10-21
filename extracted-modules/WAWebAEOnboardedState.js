__d("WAWebAEOnboardedState", [
    "WAWebAECompanionGating",
    "WAWebCmd",
    "WAWebCoexCanonicalMembership",
    "WAWebCoexProductStateStore",
    "WAWebMobilePlatforms",
    "WAWebUserPrefsGeneral",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const useSyncExternalStore = (e || (e = o("react"))).useSyncExternalStore;
    function u() {
        if (!o("WAWebMobilePlatforms").isSMB()) {
            return false;
        }
        const e = o("WAWebCoexProductStateStore").getCoexProductState();
        if (e != null && o("WAWebAECompanionGating").isCoexStateSyncEnabled()) {
            return e.surfaces.includes(o("WAWebCoexCanonicalMembership").AE_SURFACE);
        }
        return o("WAWebUserPrefsGeneral").getDetectedOutcomeOnboardingStatus();
    }
    function useC() {
        return useSyncExternalStore(d, u);
    }
    function d(e) {
        const t = function() {
            if (o("WAWebMobilePlatforms").isSMB() && o("WAWebCoexProductStateStore").getCoexProductState() != null) {
                e();
            }
        };
        o("WAWebCoexProductStateStore").subscribeToCoexProductStateChanges(e);
        o("WAWebCmd").Cmd.on("on_ab_props_update_from_bridge", t);
        return function() {
            o("WAWebCoexProductStateStore").unsubscribeFromCoexProductStateChanges(e);
            o("WAWebCmd").Cmd.off("on_ab_props_update_from_bridge", t);
        };
    }
    l.isAEOnboarded = u;
    l.useIsAEOnboarded = useC;
}, 98);