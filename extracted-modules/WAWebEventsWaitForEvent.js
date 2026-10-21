__d("WAWebEventsWaitForEvent", [
    "Promise",
    "WAAbortError",
    "WAWebBoolFunc"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(t, r, a = o("WAWebBoolFunc").returnTrue, i) {
        if (i != null && i.aborted) {
            return (e || (e = n("Promise"))).reject(new (o("WAAbortError")).AbortError);
        }
        return new (e || (e = n("Promise")))(function(e, n) {
            const l = function() {
                if (a.apply(this, arguments)) {
                    if (u != null) {
                        u();
                    }
                    e.apply(this, arguments);
                }
            };
            const s = function() {
                u?.();
                n(new (o("WAAbortError")).AbortError);
            };
            var u = function() {
                t.removeEventListener(r, l);
                i?.removeEventListener("abort", s);
                u = null;
            };
            i?.addEventListener("abort", s);
            t.addEventListener(r, l);
        });
    }
    l.default = s;
}, 98);