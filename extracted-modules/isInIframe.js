__d("isInIframe", [], function(t, n, r, o, a, i) {
    const e = typeof window !== "undefined" && window.top != null && window != window.top;
    function l() {
        return e;
    }
    i.default = l;
}, 66);