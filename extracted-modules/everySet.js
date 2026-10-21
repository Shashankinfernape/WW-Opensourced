__d("everySet", [], function(t, n, r, o, a, i) {
    "use strict";
    function e(e, t, n) {
        const r = e.entries();
        for(let o = r.next(); !o.done;){
            const a = o.value;
            if (!t.call(n, a[1], a[0], e)) {
                return false;
            }
            o = r.next();
        }
        return true;
    }
    i.default = e;
}, 66);