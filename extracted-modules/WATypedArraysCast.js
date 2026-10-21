__d("WATypedArraysCast", [
    "WABase64"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
        if (t instanceof e) {
            return t;
        }
        if (typeof t === "string") {
            return new e(o("WABase64").decodeB64(t));
        }
        return new e(t);
    }
    l.castTypedArrays = e;
}, 98);