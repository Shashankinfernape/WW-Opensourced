__d("WAWebClientFeatureFlags", [
    "WAWebEnvironment",
    "gkx"
], function(t, n, r, o, a, i, l) {
    const e = false;
    const s = {
        lid_debug: false,
        youtube_video_preview_without_blur: r("gkx")("16539"),
        message_add_ons: false,
        reactions_filter_problematic_flags: true,
        skip_compliance_phone_check: false,
        debug_commands: e,
        debug_1_year_history_sync: r("WAWebEnvironment").isWindows
    };
    function u(e) {
        return s[e];
    }
    function c(e) {
        s[e] = true;
    }
    function d(e) {
        s[e] = false;
    }
    function m() {
        if (r("gkx")("16539")) {
            const t = new URLSearchParams((location.search ?? "").toLowerCase());
            p(t, "feature_enable", c);
            p(t, "feature_disable", d);
        }
    }
    function p(e, t, n) {
        const r = e.get(t);
        if (r != null) {
            const o = r.split(",");
            o.forEach((e)=>{
                if (e in s) {
                    n(e);
                } else {
                    `${e}`;
                }
            });
        }
    }
    l.isFeatureEnabled = u;
    l.debugEnableFeatureFlag = c;
    l.debugDisableFeatureFlag = d;
    l.overwriteDebugFeatures = m;
}, 98);