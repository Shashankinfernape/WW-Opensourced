__d("WAWebVoipWasmHeapMonitor", [
    "WALogger"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    const d = 1048576;
    const m = 1000;
    let p = null;
    let _ = null;
    let f = null;
    let g = null;
    let peakBytes = 0;
    let y = 0;
    let C = 0;
    function b(e) {
        return (e / d).toFixed(1);
    }
    function v(e) {
        return e.GROWABLE_HEAP_U8().buffer.byteLength;
    }
    function S(e) {
        if (f !== e) {
            f = e;
            g = null;
            peakBytes = 0;
        }
    }
    function R(e) {
        S(e);
        const bytes = v(e);
        const n = g;
        const deltaBytes = n == null ? 0 : bytes - n;
        if (bytes > peakBytes) {
            peakBytes = bytes;
        }
        g = bytes;
        return {
            bytes,
            deltaBytes,
            peakBytes
        };
    }
    function L(e) {
        const t = R(e);
        if (t.deltaBytes === 0) {
            return null;
        }
        return t;
    }
    function E(t, n) {
        o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "voip: WASM heap snapshot phase=",
            " bytes=",
            " mb=",
            " delta=",
            " peakMb=",
            ""
        ])), t, n.bytes, b(n.bytes), n.deltaBytes, b(n.peakBytes));
    }
    function k(e) {
        o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
            "voip: WASM heap grew phase=",
            " bytes=",
            " mb=",
            " delta=",
            " peakMb=",
            ""
        ])), "call_state_non_none", e.bytes, b(e.bytes), e.deltaBytes, b(e.peakBytes));
    }
    function I(e) {
        o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
            "voip: WASM heap monitor_start phase=",
            " bytes=",
            " mb=",
            " delta=",
            " peakMb=",
            ""
        ])), "call_state_non_none", e.bytes, b(e.bytes), e.deltaBytes, b(e.peakBytes));
    }
    function T() {
        const e = _;
        if (e != null) {
            C++;
            const t = L(e);
            if (t != null) {
                k(t);
            }
        }
    }
    function D(e, t) {
        E(t, R(e));
    }
    function x(e, t) {
        if (p == null) {
            S(e);
            _ = e;
            C = 0;
            const n = R(e);
            y = n.bytes;
            I(n);
            p = window.setInterval(T, t ?? m);
        }
    }
    function $() {
        if (p != null) {
            window.clearInterval(p);
            p = null;
            const e = _;
            _ = null;
            if (e != null) {
                const t = R(e);
                o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: WASM heap monitor_stop phase=",
                    " bytes=",
                    " mb=",
                    " delta=",
                    " peakMb=",
                    " sessionDelta=",
                    " polls=",
                    ""
                ])), "call_state_none", t.bytes, b(t.bytes), t.deltaBytes, b(t.peakBytes), t.bytes - y, C);
                y = 0;
                C = 0;
            }
        }
    }
    l.logWasmHeapSnapshot = D;
    l.startWasmHeapMonitor = x;
    l.stopWasmHeapMonitor = $;
}, 98);