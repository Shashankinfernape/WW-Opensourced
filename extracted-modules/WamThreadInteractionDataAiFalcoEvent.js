__d("WamThreadInteractionDataAiFalcoEvent", [
    "FalcoLoggerInternal",
    "Promise",
    "getFalcoLogPolicy_DO_NOT_USE",
    "requireDeferred"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = r("getFalcoLogPolicy_DO_NOT_USE")("8002");
    const c = {
        app_build: (s = r("requireDeferred"))("WAWebFalcoCanonicalAppBuild").__setRef("WamThreadInteractionDataAiFalcoEvent"),
        device_classification: s("WAWebFalcoCanonicalDeviceClassification").__setRef("WamThreadInteractionDataAiFalcoEvent"),
        platform: s("WAWebFalcoCanonicalPlatform").__setRef("WamThreadInteractionDataAiFalcoEvent"),
        webc_phone_platform: s("WAWebFalcoCanonicalPlatform").__setRef("WamThreadInteractionDataAiFalcoEvent")
    };
    function d() {
        return (e || (e = n("Promise"))).all(Object.entries(c).map(([t, n])=>n.load().then((e)=>[
                    t,
                    e()
                ]))).then((e)=>{
            const t = {};
            e.forEach(([n, r])=>{
                t[n] = r;
            });
            return t;
        });
    }
    const m = o("FalcoLoggerInternal").create("wam_thread_interaction_data_ai", u, d);
    l.default = m;
}, 98);