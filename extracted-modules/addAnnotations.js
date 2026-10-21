__d("addAnnotations", [], function(t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
        Object.keys(t).forEach((n)=>{
            e[n] = Object.assign(e[n] ?? {}, t[n]);
        });
    }
    i.default = e;
}, 66);