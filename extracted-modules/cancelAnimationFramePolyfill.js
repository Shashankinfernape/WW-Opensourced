__d("cancelAnimationFramePolyfill", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = t.__fbNativeCancelAnimationFrame || t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.mozCancelAnimationFrame || t.oCancelAnimationFrame || t.msCancelAnimationFrame || t.clearTimeout;
    i.default = e;
}, 66);