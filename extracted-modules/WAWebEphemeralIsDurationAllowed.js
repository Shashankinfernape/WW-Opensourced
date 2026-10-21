__d("WAWebEphemeralIsDurationAllowed", [], function(t, n, r, o, a, i) {
    const e = [
        86400,
        604800,
        7776000
    ];
    function l(t) {
        if (t < 0) {
            return false;
        }
        if (t === 0) {
            return true;
        }
        return e.includes(t);
    }
    i.isEphemeralDurationAllowed = l;
}, 66);