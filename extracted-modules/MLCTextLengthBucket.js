__d("MLCTextLengthBucket", [
    "$InternalEnum"
], function(t, n, r, o, a, i) {
    "use strict";
    const e = n("$InternalEnum").Mirrored([
        "S",
        "M",
        "L",
        "XL"
    ]);
    function l(t) {
        if (t <= 500) {
            return e.S;
        }
        if (t <= 1000) {
            return e.M;
        }
        if (t <= 2500) {
            return e.L;
        }
        return e.XL;
    }
    i.getTextLengthBucket = l;
}, 66);