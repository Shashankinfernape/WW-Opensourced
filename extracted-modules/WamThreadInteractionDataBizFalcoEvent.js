__d("WamThreadInteractionDataBizFalcoEvent", [
    "FalcoLoggerInternal",
    "Promise",
    "getFalcoLogPolicy_DO_NOT_USE",
    "requireDeferred"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = r("getFalcoLogPolicy_DO_NOT_USE")("8281");
    const c = {
        app_build: (s = r("requireDeferred"))("WAWebFalcoCanonicalAppBuild").__setRef("WamThreadInteractionDataBizFalcoEvent"),
        device_classification: s("WAWebFalcoCanonicalDeviceClassification").__setRef("WamThreadInteractionDataBizFalcoEvent"),
        platform: s("WAWebFalcoCanonicalPlatform").__setRef("WamThreadInteractionDataBizFalcoEvent"),
        webc_phone_platform: s("WAWebFalcoCanonicalPlatform").__setRef("WamThreadInteractionDataBizFalcoEvent")
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
    const m = o("FalcoLoggerInternal").create("wam_thread_interaction_data_biz", u, d);
    l.default = m;
}, 98);