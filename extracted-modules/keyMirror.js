__d("keyMirror", [
    "FBLogger"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
        const t = {};
        if (!(e instanceof Object && !Array.isArray(e))) {
            throw r("FBLogger")("comet_infra").mustfixThrow("keyMirror(...): Argument must be an object.");
        }
        for(const n in e){
            if (Object.prototype.hasOwnProperty.call(e, n)) {
                t[n] = n;
            }
        }
        return t;
    }
    l.default = e;
}, 98);