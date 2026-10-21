__d("setImmediatePolyfill", [
    "invariant",
    "ImmediateImplementation",
    "PromiseUsePolyfillSetImmediateGK"
], function({ setImmediate }, n, r, o, a, i, l, s) {
    if (r("PromiseUsePolyfillSetImmediateGK").www_always_use_polyfill_setimmediate || !setImmediate) {
        setImmediate = r("ImmediateImplementation").setImmediate;
    }
    function u(t, ...r) {
        if (typeof t !== "function") {
            s(0, 5912);
        }
        return setImmediate(t, ...r);
    }
    l.default = u;
}, 98);