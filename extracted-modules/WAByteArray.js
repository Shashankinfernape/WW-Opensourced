__d("WAByteArray", [], function(t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
        let n = t;
        const r = new Uint8Array(e);
        for(let o = e - 1; o >= 0; o--){
            r[o] = n & 255;
            n >>>= 8;
        }
        return r;
    }
    function l(e) {
        return e.buffer.slice(e.byteOffset, e.byteLength + e.byteOffset);
    }
    function s(e, t) {
        if (!e || !t) {
            return false;
        }
        const n = new Uint8Array(e);
        const r = new Uint8Array(t);
        const o = n.length;
        const a = r.length;
        if (o !== a) {
            return false;
        }
        for(let i = 0; i < o; i++){
            if (n[i] !== r[i]) {
                return false;
            }
        }
        return true;
    }
    i.intToBytes = e;
    i.uint8ArrayToBuffer = l;
    i.compareArrayBuffer = s;
}, 66);