__d("CometErrorOverlay", [
    "ExecutionEnvironment",
    "ReactDOM",
    "react"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = s || (s = o("react"));
    function c() {
        if ((e || (e = r("ExecutionEnvironment"))).canUseDOM) {
            const t = document.body;
            if (t == null) {
                return null;
            }
            const n = document.createElement("div");
            t.appendChild(n);
            return n;
        }
        return null;
    }
    function d(t) {
        const n = c();
        if (n != null) {
            const a = function() {
                if ((e || (e = r("ExecutionEnvironment"))).canUseDOM) {
                    window.setTimeout(function() {
                        i.unmount();
                        n.remove();
                    }, 0);
                }
            };
            var i = o("ReactDOM").createRoot(n, {
                unstable_strictMode: true
            });
            const l = t(a);
            i.render(l);
            return a;
        }
    }
    l.injectComponent = d;
}, 98);