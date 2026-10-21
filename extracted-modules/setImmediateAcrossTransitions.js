__d("setImmediateAcrossTransitions", [
    "TimeSlice",
    "setImmediatePolyfill"
], function(t, n, r, o, a, i, l) {
    function e(e, ...o) {
        const t = r("TimeSlice").guard(e, "setImmediate", {
            propagationType: r("TimeSlice").PropagationType.CONTINUATION,
            registerCallStack: true
        });
        return r("setImmediatePolyfill")(t, ...o);
    }
    l.default = e;
}, 98);