__d("WAWebVoipCaptureCap", [
    "WALogger",
    "WAWebVoipMobileDevice",
    "justknobx"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = [
        {
            minParticipants: 3,
            cap: {
                width: 640,
                height: 480
            }
        },
        {
            minParticipants: 9,
            cap: {
                width: 480,
                height: 360
            }
        }
    ];
    function u(e) {
        if (!m() || !o("WAWebVoipMobileDevice").isVoipMobileDevice()) {
            return null;
        }
        let t = null;
        for (const n of s){
            if (e >= n.minParticipants) {
                t = n.cap;
            }
        }
        return t;
    }
    function c(e, t) {
        if (t == null) {
            return e;
        }
        return {
            width: Math.min(e.width, t.width),
            height: Math.min(e.height, t.height),
            maxFps: e.maxFps
        };
    }
    let d = false;
    function m() {
        try {
            return r("justknobx")._("6514");
        } catch (error) {
            if (!d) {
                d = true;
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [CaptureCap] capture cap JK unavailable, using fallback=true: ",
                    ""
                ])), String(error));
            }
            return true;
        }
    }
    l.getGroupCallCaptureCap = u;
    l.applyCaptureCap = c;
}, 98);