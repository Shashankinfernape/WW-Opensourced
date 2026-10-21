__d("WamPathfinderWebFalcoEvent", [
    "FalcoLoggerInternal",
    "Promise",
    "getFalcoLogPolicy_DO_NOT_USE",
    "requireDeferred"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = r("getFalcoLogPolicy_DO_NOT_USE")("7577");
    const c = {
        platform: (s = r("requireDeferred"))("WAWebFalcoCanonicalPlatform").__setRef("WamPathfinderWebFalcoEvent"),
        os_version: s("WAWebFalcoCanonicalOsVersion").__setRef("WamPathfinderWebFalcoEvent"),
        app_version: s("WAWebFalcoCanonicalAppVersion").__setRef("WamPathfinderWebFalcoEvent"),
        md_id: s("WAWebFalcoCanonicalMdId").__setRef("WamPathfinderWebFalcoEvent"),
        md_session_id: s("WAWebFalcoCanonicalMdSessionId").__setRef("WamPathfinderWebFalcoEvent")
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
    const m = o("FalcoLoggerInternal").create("wam_pathfinder_web", u, d);
    l.default = m;
}, 98);