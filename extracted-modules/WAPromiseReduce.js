__d("WAPromiseReduce", [
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i) {
    "use strict";
    const e = (()=>{
        const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            let r = n;
            for(let o = e.length, a = 0; a < o; a++){
                r = yield t(r, e[a], a);
            }
            return r;
        });
        return function(n, r, o) {
            return e.apply(this, arguments);
        };
    })();
    i.promiseReduce = e;
}, 66);