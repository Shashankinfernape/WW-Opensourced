__d("LongAnimationFrameConfig", [
    "CurrentUser",
    "FBLogger",
    "WebResponsivenessConfig"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = {
        app_id: "default",
        skip_script_position_conversion: [
            "smit.vn$",
            "ag-scripts\\.js",
            "sctx\\.part"
        ],
        logging_ratio: 1
    };
    function s(t) {
        const l = t ?? r("CurrentUser").getAppID();
        const s = r("WebResponsivenessConfig").long_animation_frame?.app_config ?? [];
        if (s.length === 0) {
            return e;
        }
        return s.find((e)=>`${e.app_id}` == `${l ?? 0}`) ?? s.find((e)=>e.app_id === "default") ?? e;
    }
    function u(e) {
        const t = s(e);
        const t_skip_script_position_conversion = t.skip_script_position_conversion;
        if (t_skip_script_position_conversion == null) {
            return babelHelpers.extends({}, t, {
                skip_script_position_conversion: []
            });
        }
        const skip_script_position_conversion = [];
        for (const a of t_skip_script_position_conversion){
            try {
                let i = a.trim();
                if (i.startsWith("/") && i.endsWith("/")) {
                    i = i.slice(1, i.length - 1);
                }
                skip_script_position_conversion.push(new RegExp(i));
            } catch (e) {
                r("FBLogger")("long-animation-frame").warn("Failed to construct regex from %s", a);
            }
        }
        return babelHelpers.extends({}, t, {
            skip_script_position_conversion
        });
    }
    let c = null;
    function d(e) {
        if (c == null) {
            c = u(e);
        }
        const r = c?.logging_ratio ?? 1;
        return Math.random() <= r;
    }
    l.getLoAFAppConfig = u;
    l.shouldLogLoAF = d;
}, 98);