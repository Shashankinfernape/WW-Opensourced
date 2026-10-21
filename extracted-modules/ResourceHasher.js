__d("ResourceHasher", [
    "invariant"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    const e = "placeholder";
    let u = 0;
    function c(e) {
        return `async:${e}`;
    }
    function d() {
        return `ejs:${u++}`;
    }
    function m(e) {
        if (typeof e !== "string") {
            s(0, 19551, e);
        }
        return e;
    }
    l.PLACEHOLDER = e;
    l.getAsyncHash = c;
    l.createExternalJSHash = d;
    l.getValidResourceHash = m;
}, 98);