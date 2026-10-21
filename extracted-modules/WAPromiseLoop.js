__d("WAPromiseLoop", [
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
        return l.apply(this, arguments);
    }
    function l() {
        l = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            for(var n = {
                resolved: false
            }, r = function(t) {
                n = {
                    resolved: true,
                    value: t
                };
            }, o = 0, a = t; !n.resolved;){
                a = yield e(r, a, o);
                o++;
            }
            return n.value;
        });
        return l.apply(this, arguments);
    }
    i.promiseLoop = e;
}, 66);