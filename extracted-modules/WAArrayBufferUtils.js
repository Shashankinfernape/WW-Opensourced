__d("WAArrayBufferUtils", [
    "Promise",
    "err"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    function s(e) {
        const t = new ArrayBuffer(e.length);
        const n = new Uint8Array(t);
        let o;
        let r = 0;
        for(o = e.length; r < o; r++){
            n[r] = e.charCodeAt(r);
        }
        return n.buffer;
    }
    function u(t, r = 500000) {
        return new (e || (e = n("Promise")))(function(e, n) {
            const o = t.length;
            const a = new ArrayBuffer(o);
            const i = new Uint8Array(a);
            let l = 0;
            setTimeout(s, 0);
            function s() {
                for(const n = Math.min(l + r, o); l < n;){
                    i[l] = t.charCodeAt(l);
                    l++;
                }
                if (l === o) {
                    e(a);
                    return;
                }
                setTimeout(s, 16);
            }
        });
    }
    function c(e) {
        return String.fromCharCode(...new Uint8Array(e));
    }
    const d = 8388607;
    function m(e, t) {
        const n = new Uint8Array(e);
        if (t > d) {
            throw r("err")("Divisor is too big");
        }
        let o = 0;
        for(let a = 0; a < n.length; ++a){
            o = ((o << 8) + n[a]) % t;
        }
        return o;
    }
    function p(e) {
        const t = e.map((e)=>new Uint8Array(e));
        const n = t.reduce((e, t)=>e + t.byteLength, 0);
        const r = new Uint8Array(n);
        t.reduce((e, t)=>{
            r.set(t, e);
            return e + t.byteLength;
        }, 0);
        return r.buffer.slice(r.byteOffset, r.byteOffset + r.byteLength);
    }
    function _(e, t) {
        const n = new Uint8Array(e);
        const r = new Uint8Array(t);
        return f(n, r);
    }
    function f(e, t) {
        if (e.byteLength !== t.byteLength) {
            return false;
        }
        for(let n = 0; n !== e.byteLength; n++){
            if (e[n] !== t[n]) {
                return false;
            }
        }
        return true;
    }
    l.stringToArrayBuffer = s;
    l.largeStringToArrayBuffer = u;
    l.arrayBufferToString = c;
    l.arrayBufferMod = m;
    l.concatBuffers = p;
    l.arrayBuffersEqualUNSAFE = _;
    l.uint8ArraysEqualUNSAFE = f;
}, 98);