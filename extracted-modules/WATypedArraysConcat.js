__d("WATypedArraysConcat", [], function(t, n, r, o, a, i) {
    "use strict";
    function e(e, t, n = 0) {
        const r = t.reduce((e, t)=>e + t.length, n);
        const o = new e(r);
        let a = 0;
        t.forEach((e)=>{
            o.set(e, a);
            a += e.length;
        });
        return o;
    }
    i.concatTypedArrays = e;
}, 66);