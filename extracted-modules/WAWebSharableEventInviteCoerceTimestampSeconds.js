__d("WAWebSharableEventInviteCoerceTimestampSeconds", [], function(t, n, r, o, a, i) {
    const e = 1000000000000;
    const l = 100000000;
    const s = 1000;
    function u(t) {
        if (t == null) {
            return t;
        }
        if (t >= e) {
            return Math.floor(t / s);
        }
        if (t > 0 && t < l) {
            return t * s;
        }
        return t;
    }
    i.default = u;
}, 66);