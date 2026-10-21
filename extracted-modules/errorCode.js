__d("errorCode", [], function(t, n, r, o, a, i) {
    "use strict";
    function e(e) {
        const t = new Error(`errorCode("${e}"): This should not happen. Oh noes!`);
        t.stack;
        throw t;
    }
    i.default = e;
}, 66);