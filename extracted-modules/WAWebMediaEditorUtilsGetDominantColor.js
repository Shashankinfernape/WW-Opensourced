__d("WAWebMediaEditorUtilsGetDominantColor", [
    "WAWebMediaEditorUtilsColor"
], function(t, n, r, o, a, i, l) {
    const e = 5;
    const s = 4;
    const u = new (o("WAWebMediaEditorUtilsColor")).Color(220, 220, 220);
    function c(e) {
        const t = document.createElement("canvas");
        const n = t.getContext("2d");
        if (!n) {
            return null;
        }
        const r = t.height = e.height;
        const o = t.width = e.width;
        n.drawImage(e, 0, 0);
        try {
            const a = n.getImageData(0, 0, o, r);
            return a.data;
        } catch (e) {
            return null;
        }
    }
    function d(t) {
        for(var n = e * s, r = 0, a = 0, i = 0, l = 0, u = 0, c = 0; c < t.length; c += n){
            const d = t[c + 3];
            const m = t[c] * d;
            const p = t[c + 1] * d;
            const _ = t[c + 2] * d;
            r += m;
            a += p;
            i += _;
            l += d;
            u++;
        }
        if (l) {
            return new (o("WAWebMediaEditorUtilsColor")).Color(Math.round(r / l), Math.round(a / l), Math.round(i / l), Math.round(l / u) / 255);
        }
        return new (o("WAWebMediaEditorUtilsColor")).Color(0, 0, 0, 0);
    }
    function m(e) {
        const t = c(e);
        if (t) {
            return d(t);
        }
        return u;
    }
    l.DEFAULT_DOMINANT_COLOR = u;
    l.getDominantColor = m;
}, 98);