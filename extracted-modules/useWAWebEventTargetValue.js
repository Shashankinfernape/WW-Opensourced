__d("useWAWebEventTargetValue", [
    "WAHash",
    "react",
    "useWAWebListener",
    "useWAWebStableCallback"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const { useEffect: u, useRef: c, useState: d } = s;
    function m(e, t, n, a = []) {
        let i;
        if (e == null) {
            i = [];
        } else if (Array.isArray(e)) {
            i = e.filter(Boolean);
        } else {
            i = [
                e
            ];
        }
        const l = c(true);
        const s = r("useWAWebStableCallback")(function() {
            return n();
        });
        const m = d(function() {
            return s();
        });
        const p = m[0];
        const _ = m[1];
        o("useWAWebListener").useListeners(i.map((e)=>({
                source: e,
                eventOrEvents: t,
                callback: function() {
                    _(s());
                }
            })));
        const f = i.map(r("WAHash")).join(" ");
        u(function() {
            if (l.current) {
                l.current = false;
                return;
            }
            _(s());
        }, [
            f,
            s
        ].concat(a));
        return p;
    }
    l.default = m;
}, 98);