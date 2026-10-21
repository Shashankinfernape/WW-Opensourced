__d("WAWebStickerPngThumbnailValidation", [], function(t, n, r, o, a, i) {
    const e = 65536;
    const l = 256;
    const s = [
        137,
        80,
        78,
        71,
        13,
        10,
        26,
        10
    ];
    const u = [
        73,
        72,
        68,
        82
    ];
    const c = 8;
    const d = 12;
    const m = 16;
    const p = 20;
    const _ = 13;
    const f = 24;
    function g(t) {
        if (t.byteLength < f || t.byteLength > e) {
            return false;
        }
        const n = new Uint8Array(t);
        if (s.some((e, t)=>n[t] !== e) || h(n, c) !== _ || u.some((e, t)=>n[d + t] !== e)) {
            return false;
        }
        const r = h(n, m);
        const o = h(n, p);
        return r > 0 && r <= l && o > 0 && o <= l;
    }
    function h(e, t) {
        return e[t] * 16777216 + e[t + 1] * 65536 + e[t + 2] * 256 + e[t + 3];
    }
    i.isRenderablePngThumbnail = g;
}, 66);