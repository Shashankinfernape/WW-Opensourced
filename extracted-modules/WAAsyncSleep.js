__d("WAAsyncSleep", [
    "Promise",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i) {
    "use strict";
    let e;
    function l(e, t, n) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t = 200, n = 200) {
            if (e > 0 && e % t === 0) {
                yield u(n);
            }
        });
        return s.apply(this, arguments);
    }
    function u(t) {
        return new (e || (e = n("Promise")))(function(e) {
            return setTimeout(e, t);
        });
    }
    i.asyncSleepAfterGivenLoopIteration = l;
    i.asyncSleep = u;
}, 66);