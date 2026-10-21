__d("CometMouseActivity", [
    "clearTimeout",
    "removeFromArray",
    "setTimeout"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = 50;
    const s = [];
    let u = [];
    let c = null;
    function d() {
        if (s.length > 0) {
            s.forEach((e)=>e());
        }
        if (u.length > 0) {
            u.forEach((e)=>e());
            u = [];
        }
        c = null;
    }
    function m() {
        r("clearTimeout")(c);
        c = r("setTimeout")(function() {
            d();
        }, e);
    }
    let p = false;
    function init() {
        if (!p) {
            window.addEventListener("mousemove", m);
            p = true;
        }
        return function() {
            window.removeEventListener("mousemove", m);
        };
    }
    function addOnMouseStopCallback(e) {
        if (!p) {
            init();
        }
        s.push(e);
        return function() {
            r("removeFromArray")(s, e);
        };
    }
    function addOnMouseStopCallbackOnce(e) {
        if (!p) {
            init();
        }
        u.push(e);
        return function() {
            r("removeFromArray")(u, e);
        };
    }
    const h = {
        addOnMouseStopCallback,
        addOnMouseStopCallbackOnce,
        init
    };
    l.default = h;
}, 98);