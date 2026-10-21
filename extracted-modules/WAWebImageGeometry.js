__d("WAWebImageGeometry", [], function(t, n, r, o, a, i) {
    function e(e, t) {
        if (typeof e !== "number" || e < 0 || e !== e) {
            return {
                width: t,
                height: t
            };
        }
        if (e > 1) {
            return {
                width: t,
                height: Math.max(t / e, 1)
            };
        }
        return {
            width: Math.max(t * e, 1),
            height: t
        };
    }
    function l(e, t, n) {
        let r = t ?? n;
        let o = e ?? n;
        if (r > o) {
            if (r > n) {
                o *= n / r;
                r = n;
            }
        } else if (o > n) {
            r *= n / o;
            o = n;
        }
        return {
            width: Math.max(r, 1),
            height: Math.max(o, 1)
        };
    }
    i.aspectRatioScaled = e;
    i.boundHeightWidth = l;
}, 66);