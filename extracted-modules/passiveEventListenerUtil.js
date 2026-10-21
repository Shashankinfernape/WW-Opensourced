__d("passiveEventListenerUtil", [], function(t, n, r, o, a, i) {
    "use strict";
    let e = false;
    try {
        const l = Object.defineProperty({}, "passive", {
            get: function() {
                e = true;
            }
        });
        window.addEventListener("test", null, l);
    } catch (e) {}
    const s = e;
    function u(e) {
        if (s || typeof e === "boolean") {
            return e;
        }
        return e.capture || false;
    }
    i.isPassiveEventListenerSupported = s;
    i.makeEventOptions = u;
}, 66);