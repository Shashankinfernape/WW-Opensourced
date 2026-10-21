__d("requestIdleCallbackAcrossTransitions", [
    "IdleCallbackImplementation",
    "TimeSlice"
], function(t, n, r, o, a, i, l) {
    const e = t.requestIdleCallback || o("IdleCallbackImplementation").requestIdleCallback;
    function s(n, o) {
        const a = r("TimeSlice").guard(n, "requestIdleCallback", {
            propagationType: r("TimeSlice").PropagationType.CONTINUATION,
            registerCallStack: true
        });
        return e.call(t, a, o);
    }
    l.default = s;
}, 98);