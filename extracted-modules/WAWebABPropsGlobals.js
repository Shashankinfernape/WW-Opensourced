__d("WAWebABPropsGlobals", [
    "WAWebABProps",
    "WAWebABPropsExpoKeyUtils",
    "WAWebCanonicalUtils",
    "WAWebDebounce",
    "WAWebNetworkStatus",
    "WAWebWamGlobals",
    "WAWebWefrClientExposureWamEvent",
    "justknobx"
], function(t, n, r, o, a, i, l) {
    const e = 1000;
    const s = new Set;
    const u = new Set;
    let c = "";
    function d() {
        if (o("WAWebABProps").getABPropConfigValue("wam_disable_expokey_attribute")) {
            o("WAWebWamGlobals").Global.set({
                expoKey: null
            });
        } else {
            const e = o("WAWebABPropsExpoKeyUtils").combineExposuresIntoExpoKey(u);
            if (c !== e) {
                f(e);
                c = e;
            }
            o("WAWebWamGlobals").Global.set({
                expoKey: e
            });
        }
    }
    function m(e) {
        if (e != null) {
            o("WAWebWamGlobals").Global.set({
                abKey2: e
            });
        }
    }
    function p(e) {
        if (r("justknobx")._("1964")) {
            r("WAWebNetworkStatus").waitIfOffline().then(()=>{
                new (o("WAWebWefrClientExposureWamEvent")).WefrClientExposureWamEvent(e).commit();
            });
        } else {
            new (o("WAWebWefrClientExposureWamEvent")).WefrClientExposureWamEvent(e).commit();
        }
    }
    function _() {
        const e = o("WAWebABPropsExpoKeyUtils").combineExposuresIntoExpoKey(u);
        p({
            exposureKey: e,
            sentWithDaily: true,
            isCanonicalEntPresent: o("WAWebCanonicalUtils").isCanonicalPresent()
        });
    }
    var f = r("WAWebDebounce")(function(e) {
        p({
            exposureKey: e,
            sentWithDaily: false,
            isCanonicalEntPresent: o("WAWebCanonicalUtils").isCanonicalPresent()
        });
    }, e);
    l.CLIENT_EXPOSURE_PULSE_DEBOUNCE_MS = e;
    l.accessedConfigs = s;
    l.exposureKeys = u;
    l.updateGlobalExpoKey = d;
    l.updateGlobalABKey = m;
    l.logClientExposurePulseEventFromDailyStatsTask = _;
}, 98);