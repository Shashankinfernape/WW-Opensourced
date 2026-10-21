__d("stringHash", [], function(t, n, r, o, a, i) {
    "use strict";
    function e(e) {
        let t = 0;
        for(let n = 0; n < e.length; n++){
            t = (t * 33 + e.charCodeAt(n)) % 4294967296;
        }
        return t.toString(16);
    }
    function l(t, n = "|") {
        const r = t.join(n);
        return e(r);
    }
    i.stringHash = e;
    i.stringArrayHash = l;
}, 66);