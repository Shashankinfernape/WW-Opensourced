__d("xhrSimpleDataSerializer", [], function(t, n, r, o, a, i) {
    "use strict";
    function e(e) {
        const t = [];
        for(const n in e){
            t.push(`${encodeURIComponent(n)}=${encodeURIComponent(e[n])}`);
        }
        return t.join("&");
    }
    i.default = e;
}, 66);