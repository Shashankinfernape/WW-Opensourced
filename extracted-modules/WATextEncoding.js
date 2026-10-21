__d("WATextEncoding", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = TextEncoder;
    const l = TextDecoder;
    const s = e;
    const u = l;
    function c() {
        return new s;
    }
    function d() {
        return new u;
    }
    i.newTextEncoder = c;
    i.newTextDecoder = d;
}, 66);