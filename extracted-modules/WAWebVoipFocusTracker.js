__d("WAWebVoipFocusTracker", [
    "WALogger",
    "WAWebBaseJSHaltDetector"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    const p = 5000;
    const _ = 1000;
    let f = false;
    let g = "main";
    let h = 0;
    let y = true;
    let C = 0;
    let mainTabVisibleMsT = 0;
    let mainTabHiddenMsT = 0;
    let popoutWebWindowMsT = 0;
    let pipWebWindowMsT = 0;
    let jsHaltCount = 0;
    let jsHaltTotalMsT = 0;
    let k = null;
    let I = null;
    let T = null;
    let D = null;
    function x(e) {
        if (y) {
            mainTabVisibleMsT += e - C;
        } else {
            mainTabHiddenMsT += e - C;
        }
        C = e;
    }
    function $(t) {
        if (!(!f || g === t)) {
            const n = Date.now();
            const r = g;
            const a = n - h;
            switch(g){
                case "main":
                    x(n);
                    break;
                case "popout":
                    popoutWebWindowMsT += a;
                    break;
                default:
                    if (g === "pip") {
                        pipWebWindowMsT += a;
                    }
            }
            g = t;
            h = n;
            if (t === "main") {
                y = !document.hidden;
                C = n;
            }
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [FocusTracker] ",
                " -> ",
                " (",
                " lasted ",
                "ms)"
            ])), r, t, r, a);
        }
    }
    function P() {
        g = "main";
        h = 0;
        y = true;
        C = 0;
        mainTabVisibleMsT = 0;
        mainTabHiddenMsT = 0;
        popoutWebWindowMsT = 0;
        pipWebWindowMsT = 0;
        jsHaltCount = 0;
        jsHaltTotalMsT = 0;
        k = null;
        I = null;
        T = null;
    }
    function N() {
        if (T != null) {
            document.removeEventListener("visibilitychange", T);
            T = null;
        }
        const e = k;
        if (e != null) {
            e.stopDetection();
            if (I != null) {
                e.off(o("WAWebBaseJSHaltDetector").JS_HALT_EVENT, I);
                I = null;
            }
            k = null;
        }
    }
    function M(e) {
        $(e);
    }
    function w() {
        if (!f) {
            f = true;
            D = null;
            N();
            P();
            const e = Date.now();
            h = e;
            g = "main";
            y = !document.hidden;
            C = e;
            T = function() {
                if (!(!f || g !== "main")) {
                    const e = Date.now();
                    const t = e - C;
                    x(e);
                    y = !document.hidden;
                    o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [FocusTracker] main tab ",
                        " (prev state lasted ",
                        "ms)"
                    ])), y ? "visible" : "hidden", t);
                }
            };
            document.addEventListener("visibilitychange", T);
            const t = new (o("WAWebBaseJSHaltDetector")).BaseJsHaltDetector(p, _);
            k = t;
            I = function(t) {
                jsHaltCount++;
                jsHaltTotalMsT += t;
                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [FocusTracker] JS halt detected: ",
                    "ms"
                ])), t);
            };
            t.on(o("WAWebBaseJSHaltDetector").JS_HALT_EVENT, I);
            t.startDetection();
            o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [FocusTracker] Started tracking (mode=",
                ")"
            ])), g);
        }
    }
    function A() {
        if (f) {
            D = F();
            f = false;
            N();
            o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [FocusTracker] stopped"
            ])));
        }
    }
    function F() {
        if (!f) {
            return D;
        }
        const e = Date.now();
        switch(g){
            case "main":
                x(e);
                break;
            case "popout":
                popoutWebWindowMsT += e - h;
                break;
            default:
                if (g === "pip") {
                    pipWebWindowMsT += e - h;
                }
        }
        o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [FocusTracker] snap: vis=",
            " hid=",
            " pop=",
            " pip=",
            " halt=",
            " haltT=",
            ""
        ])), mainTabVisibleMsT, mainTabHiddenMsT, popoutWebWindowMsT, pipWebWindowMsT, jsHaltCount, jsHaltTotalMsT);
        return {
            mainTabVisibleMsT,
            mainTabHiddenMsT,
            popoutWebWindowMsT,
            pipWebWindowMsT,
            jsHaltCount,
            jsHaltTotalMsT
        };
    }
    function O() {
        const e = Date.now();
        mainTabVisibleMsT = 0;
        mainTabHiddenMsT = 0;
        popoutWebWindowMsT = 0;
        pipWebWindowMsT = 0;
        jsHaltCount = 0;
        jsHaltTotalMsT = 0;
        h = e;
        C = e;
    }
    l.notifyWindowModeChanged = M;
    l.startVoipFocusTracking = w;
    l.stopVoipFocusTracking = A;
    l.snapshotFocusStats = F;
    l.resetFocusStats = O;
}, 98);