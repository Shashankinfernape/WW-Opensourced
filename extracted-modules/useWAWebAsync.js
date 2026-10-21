__d("useWAWebAsync", [
    "react",
    "useWAWebStableCallback"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const { useEffect, useState } = s;
    const d = {
        loading: true,
        error: null,
        value: null
    };
    function m(e, t, n = true) {
        const o = r("useWAWebStableCallback")(e);
        const a = useState(d);
        const i = a[0];
        const l = a[1];
        useEffect(function() {
            if (n) {
                const e = new AbortController;
                l(d);
                o(e.signal).then((t)=>{
                    if (!e.signal.aborted) {
                        l({
                            loading: false,
                            error: null,
                            value: t
                        });
                    }
                }).catch((e)=>{
                    l({
                        loading: false,
                        error: e,
                        value: null
                    });
                });
                return function() {
                    e.abort();
                };
            }
        }, [
            o
        ].concat(t));
        return i;
    }
    l.default = m;
}, 98);