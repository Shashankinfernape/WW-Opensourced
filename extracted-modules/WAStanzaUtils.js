__d("WAStanzaUtils", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = /^[0-9A-Za-z-]{1,32}$/;
    function l(e) {
        return e;
    }
    function s(t) {
        if (e.test(t)) {
            return t;
        }
        return null;
    }
    i.toStanzaId = l;
    i.validateCallId = s;
}, 66);