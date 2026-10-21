__d("WABase64Modulo", [], function(t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
        for(var n = atob(e), r = 0, o = 0; o < n.length; o++){
            const a = n.charCodeAt(o);
            const i = a >> 4;
            const l = a & 15;
            r = ((r << 4) + i) % t;
            r = ((r << 4) + l) % t;
        }
        return r;
    }
    i.default = e;
}, 66);