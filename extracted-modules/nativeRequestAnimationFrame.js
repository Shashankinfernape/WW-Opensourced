__d("nativeRequestAnimationFrame", [], function(t, n, r, o, a, i) {
    const e = t.__fbNativeRequestAnimationFrame || t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || t.msRequestAnimationFrame;
    i.default = e;
}, 66);