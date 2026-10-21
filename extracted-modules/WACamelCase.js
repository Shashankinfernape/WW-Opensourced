__d("WACamelCase", [], function(t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
        const n = t || {};
        const r = n.treatNumbersAsWordBoundaries;
        const o = r === void 0 ? true : r;
        let a = e.replace(/_|-/g, " ");
        if (o) {
            a = a.replace(/[0-9]/g, (e)=>`${e} `);
        }
        return a.replace(/(?:^\w|[A-Z]|\b\w)/g, (e, t)=>{
            if (t === 0) {
                return e.toLowerCase();
            }
            return e.toUpperCase();
        }).replace(/\s+/g, "");
    }
    i.default = e;
}, 66);