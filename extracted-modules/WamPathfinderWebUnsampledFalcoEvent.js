__d("WamPathfinderWebUnsampledFalcoEvent", [
    "FalcoLoggerInternal",
    "Promise",
    "getFalcoLogPolicy_DO_NOT_USE",
    "requireDeferred"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = r("getFalcoLogPolicy_DO_NOT_USE")("8817");
    const c = {
        platform: (s = r("requireDeferred"))("WAWebFalcoCanonicalPlatform").__setRef("WamPathfinderWebUnsampledFalcoEvent"),
        os_version: s("WAWebFalcoCanonicalOsVersion").__setRef("WamPathfinderWebUnsampledFalcoEvent"),
        app_version: s("WAWebFalcoCanonicalAppVersion").__setRef("WamPathfinderWebUnsampledFalcoEvent"),
        md_id: s("WAWebFalcoCanonicalMdId").__setRef("WamPathfinderWebUnsampledFalcoEvent"),
        md_session_id: s("WAWebFalcoCanonicalMdSessionId").__setRef("WamPathfinderWebUnsampledFalcoEvent")
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
    const m = o("FalcoLoggerInternal").create("wam_pathfinder_web_unsampled", u, d);
    l.default = m;
}, 98);