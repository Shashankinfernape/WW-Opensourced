__d("WAPromiseMap", [
    "Promise",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i) {
    "use strict";
    let e;
    function l(e, t) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, r) {
            const o = yield t;
            return (e || (e = n("Promise"))).all(o.map((t, o)=>(e || (e = n("Promise"))).resolve(r(t, o))));
        });
        return s.apply(this, arguments);
    }
    i.promiseMap = l;
}, 66);