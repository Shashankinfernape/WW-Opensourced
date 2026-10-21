__d("WAArrayBuffersConcat", [], function(t, n, r, o, a, i) {
    "use strict";
    function e(...t_1) {
        const r = t_1.reduce((e, t)=>e + t.byteLength, 0);
        const o = new Uint8Array(r);
        let a = 0;
        t_1.forEach((e)=>{
            o.set(new Uint8Array(e), a);
            a += e.byteLength;
        });
        return o.buffer;
    }
    i.concatArrayBuffers = e;
}, 66);