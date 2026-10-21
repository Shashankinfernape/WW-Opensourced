__d("WAWebABPropsWamGlobals", [
    "AnalyticsCoreData",
    "WAWebABProps",
    "WAWebWamGlobals"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = 256;
    const u = 512;
    function c() {
        const e = o("WAWebABProps").getABPropConfigValue("service_improvement_opt_out_flag");
        if (e) {
            return s;
        }
        return s + u;
    }
    function d() {
        o("WAWebWamGlobals").Global.set({
            serviceImprovementOptOut: o("WAWebABProps").getABPropConfigValue("service_improvement_opt_out_flag")
        });
        try {
            const t = e || (e = n("AnalyticsCoreData"));
            t.consent_state = c();
        } catch (e) {}
    }
    l.getServiceImprovementConsentStateBits = c;
    l.setAbPropDependingGlobalWamAttributes = d;
}, 98);