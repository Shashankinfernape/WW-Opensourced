__d("WAPromiseTimeout", [
    "Promise",
    "WACustomError"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = function(r, a, i) {
        let t = null;
        const l = new (e || (e = n("Promise")))(function(e, n) {
            t = setTimeout(()=>{
                n(new (o("WACustomError")).TimeoutError(i));
                clearTimeout(t);
            }, a);
        });
        return e.race([
            r,
            l
        ]).finally(()=>{
            clearTimeout(t);
        });
    };
    l.promiseTimeout = s;
}, 98);