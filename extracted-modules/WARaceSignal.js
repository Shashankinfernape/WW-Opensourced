__d("WARaceSignal", [
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
        return l.apply(this, arguments);
    }
    function l() {
        l = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            let n;
            const r = new AbortController;
            if (e.some((e)=>e.aborted)) {
                r.abort();
            } else {
                n = function() {
                    for (const t of e){
                        t.removeEventListener("abort", o);
                    }
                    n = null;
                };
                var o = function() {
                    n?.();
                    r.abort();
                };
                for (const a of e){
                    a.addEventListener("abort", o);
                }
            }
            try {
                return yield t(r.signal);
            } finally{
                n?.();
            }
        });
        return l.apply(this, arguments);
    }
    i.default = e;
}, 66);