__d("QPLTimestamp", [], function(t, n, r, o, a, i) {
    "use strict";
    function e(e) {
        if (e === 0) {
            return "0";
        }
        const t = e.toFixed(6).split(".", 2);
        const n = t[0];
        const r = t[1];
        if (n === "0") {
            return r.replace(/^0+/, "");
        }
        return n + r;
    }
    function l(t, n) {
        const r = n - t;
        return e(r);
    }
    i.timestampToSerializedNanoseconds = e;
    i.calculateDurationAsNanoseconds = l;
}, 66);