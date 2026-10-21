__d("WAWebVoipScreenShareSurfaceState", [
    "WAWebEventEmitter"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = new (r("WAWebEventEmitter"));
    let s = null;
    function u(t) {
        const n = t === "monitor" ? "monitor" : t === "window" ? "window" : t === "browser" ? "browser" : null;
        if (s !== n) {
            s = n;
            e.trigger("change");
        }
    }
    function c() {
        return s;
    }
    l.WAWebVoipScreenShareSurfaceEventEmitter = e;
    l.setSelfScreenShareSurface = u;
    l.getSelfScreenShareSurface = c;
}, 98);