__d("WAPromiseEach", [
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i) {
    "use strict";
    const e = (()=>{
        const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = [];
            for(let r = 0; r < e.length; r++){
                n.push((yield t(e[r], r)));
            }
            return n;
        });
        return function(n, r) {
            return e.apply(this, arguments);
        };
    })();
    i.promiseEach = e;
}, 66);