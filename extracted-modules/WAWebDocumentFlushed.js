__d("WAWebDocumentFlushed", [
    "Promise",
    "WAAbortError",
    "once"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = [];
    const u = r("once")(function() {
        return new AbortController().signal;
    });
    function c() {
        while(s.length > 0){
            const e = s[0];
            s.shift();
            e();
        }
    }
    function d() {
        let e;
        const t = window.requestAnimationFrame(function() {
            e = self.setTimeout(function() {
                c();
            }, 0);
        });
        return function() {
            window.cancelAnimationFrame(t);
            self.clearTimeout(e);
        };
    }
    function m(t) {
        const a = t?.signal ?? u();
        return new (e || (e = n("Promise")))(function(e, t) {
            if (a.aborted) {
                t(new (o("WAAbortError")).AbortError);
                return;
            }
            let n;
            function r() {
                a.removeEventListener("abort", l);
                const e = s.indexOf(i);
                if (e !== -1) {
                    s.splice(e, 1);
                }
                if (s.length === 0 && n != null) {
                    n();
                    n = null;
                }
            }
            function i() {
                r();
                e();
            }
            function l() {
                r();
                t(new (o("WAAbortError")).AbortError);
            }
            s.push(i);
            a.addEventListener("abort", l);
            if (s.length === 1) {
                n = d();
            }
        });
    }
    function p() {
        c();
        return (e || (e = n("Promise"))).resolve();
    }
    l.documentFlushed = m;
    l.resolveAllForTestingOnly = p;
}, 98);