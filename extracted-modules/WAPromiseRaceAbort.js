__d("WAPromiseRaceAbort", [
    "Promise",
    "WAAbortError"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    function s(t, r) {
        if (r == null) {
            return t;
        }
        let a;
        const i = r.aborted ? (e || (e = n("Promise"))).reject(new (o("WAAbortError")).AbortError) : new (e || (e = n("Promise")))(function(e, t) {
            const n = function() {
                t(new (o("WAAbortError")).AbortError);
            };
            r.addEventListener("abort", n);
            a = function() {
                r.removeEventListener("abort", n);
            };
        });
        return (e || (e = n("Promise"))).race([
            i,
            t
        ]).finally(()=>{
            a?.();
            a = null;
        });
    }
    l.default = s;
}, 98);