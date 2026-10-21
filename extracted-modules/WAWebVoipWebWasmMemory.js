__d("WAWebVoipWebWasmMemory", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = 65536;
    const l = 10 * 1024 * 1024;
    const s = 1024 * 1024 * 1024;
    function u(t) {
        if (t) {
            return new WebAssembly.Memory({
                initial: l / e,
                maximum: s / e,
                shared: true
            });
        }
        return null;
    }
    i.createVoipWasmMemoryOverride = u;
}, 66);