__d("WamExperienceIdDailyFalcoEvent", [
    "FalcoLoggerInternal",
    "Promise",
    "getFalcoLogPolicy_DO_NOT_USE",
    "requireDeferred"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = r("getFalcoLogPolicy_DO_NOT_USE")("9454");
    const u = {
        app_build: r("requireDeferred")("WAWebFalcoCanonicalAppBuild").__setRef("WamExperienceIdDailyFalcoEvent"),
        platform: r("requireDeferred")("WAWebFalcoCanonicalPlatform").__setRef("WamExperienceIdDailyFalcoEvent")
    };
    function c() {
        return (e || (e = n("Promise"))).all(Object.entries(u).map(([t, n])=>n.load().then((e)=>[
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
    const d = o("FalcoLoggerInternal").create("wam_experience_id_daily", s, c);
    l.default = d;
}, 98);