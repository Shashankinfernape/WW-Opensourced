__d("WAPromiseProps", [
    "Promise"
], function(t, n, r, o, a, i) {
    "use strict";
    let e;
    function l(t) {
        const r = Object.keys(t);
        const o = (e || (e = n("Promise"))).all(r.map((e)=>t[e]));
        function a(e) {
            const t = {};
            for(let n = 0; n < e.length; n++){
                t[r[n]] = e[n];
            }
            return t;
        }
        return o.then(a);
    }
    i.promiseProps = l;
}, 66);