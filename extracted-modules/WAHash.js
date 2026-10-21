__d("WAHash", [
    "err"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = new WeakMap;
    let s = 0;
    function u(t) {
        if (t === null) {
            return "null";
        }
        switch(typeof t){
            case "undefined":
                return "undefined";
            case "number":
                return `n:${t}`;
            case "string":
                return `s:${t}`;
            case "boolean":
                return `b:${t.toString()}`;
            case "object":
                {
                    let n = e.get(t);
                    if (n == null) {
                        n = s++;
                        e.set(t, n);
                    }
                    return `o:${n}`;
                }
            default:
                throw r("err")("Unsupported type");
        }
    }
    l.default = u;
}, 98);