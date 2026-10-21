__d("WACrc32", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = 3988292384;
    const l = 4294967295;
    let s;
    function u(e, t) {
        let n = t;
        for(s || (s = c()); e.size();){
            n = s[(n ^ e.readUint8()) & 255] ^ n >>> 8;
        }
        return ~n >>> 0;
    }
    function c() {
        const t = new Uint32Array(256);
        for(let n = 0, r = 0, o = 0; n < 256; r = ++n){
            for(o = 0; o < 8; ++o){
                r = r & 1 ? r >>> 1 ^ e : r >>> 1;
            }
            t[n] = r;
        }
        return t;
    }
    function d(e, t = l) {
        return e.peek(u, t);
    }
    i.default = d;
}, 66);