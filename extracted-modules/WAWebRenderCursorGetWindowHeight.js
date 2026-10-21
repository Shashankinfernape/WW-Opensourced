__d("WAWebRenderCursorGetWindowHeight", [
    "WAWebDebounce"
], function(t, n, r, o, a, i, l) {
    let window_innerHeight = window.innerHeight;
    const s = r("WAWebDebounce")(function(t) {
        window_innerHeight = window.innerHeight;
    }, 500);
    window.addEventListener("resize", s);
    function u() {
        return window_innerHeight;
    }
    l.default = u;
}, 98);