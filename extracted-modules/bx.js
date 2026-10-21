__d("bx", [
    "FBLogger"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = {};
    function s(t) {
        const n = e[t];
        if (!n) {
            throw r("FBLogger")("staticresources").mustfixThrow(`bx${`(...): Unknown file path "${t}"`}`);
        }
        return n;
    }
    s.add = function(t, n) {
        const r = false;
        for(const o in t){
            if (n) {
                n.entry++;
            }
            if (o in e) {
                if (n) {
                    n.dup_entry++;
                }
            } else {
                t[o].loggingID = o;
                e[o] = t[o];
            }
        }
    };
    s.getURL = function(e) {
        return e.uri;
    };
    l.default = s;
}, 98);