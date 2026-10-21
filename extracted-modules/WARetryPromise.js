__d("WARetryPromise", [
    "Promise",
    "WAAbortError",
    "err"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    function s(t, a) {
        return new (e || (e = n("Promise")))(function(i, l) {
            let s = 0;
            let u;
            let c = false;
            if (a) {
                const d = function() {
                    a.removeEventListener("abort", d);
                    c = true;
                    if (u != null) {
                        clearTimeout(u);
                    }
                    l(new (o("WAAbortError")).AbortError);
                };
                if (a.aborted) {
                    d();
                    return;
                }
                a.addEventListener("abort", d);
            }
            function m() {
                let o = false;
                let a = false;
                u = null;
                try {
                    const d = t({
                        retry: function(t) {
                            if (!(c || a)) {
                                o = true;
                                s++;
                                if (t == null) {
                                    return m();
                                }
                                u = setTimeout(m, t);
                            }
                        },
                        failCount: s
                    });
                    if (!(d instanceof (e || (e = n("Promise"))))) {
                        throw r("err")("TypeError: task must return a promise");
                    }
                    d.then((e)=>{
                        if (!(c || o)) {
                            a = true;
                            i(e);
                        }
                    }).catch((e)=>{
                        if (!(c || o)) {
                            a = true;
                            l(e);
                        }
                    });
                } catch (e) {
                    if (c || o) {
                        return;
                    }
                    l(e);
                }
            }
            m();
        });
    }
    l.default = s;
}, 98);