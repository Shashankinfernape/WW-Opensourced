__d("useWAWebAiThreadTitle", [
    "WAWebAiThreadGetters",
    "WAWebBotGating",
    "WAWebChatCollection",
    "WAWebResolveThreadForEntryPoint",
    "react",
    "react-compiler-runtime",
    "useWAWebAiThreadValues",
    "useWAWebListener"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const useState = (e || (e = o("react"))).useState;
    function u(e, t) {
        const n = o("react-compiler-runtime").c(10);
        let r;
        if (n[0] !== e) {
            let a;
            r = e.isBot() && (a = o("WAWebChatCollection").ChatCollection.get(e)) != null ? a : null;
            n[0] = e;
            n[1] = r;
        } else {
            r = n[1];
        }
        const i = r;
        let l;
        if (n[2] !== i?.aiThreads) {
            l = function() {
                return i?.aiThreads ?? null;
            };
            n[2] = i?.aiThreads;
            n[3] = l;
        } else {
            l = n[3];
        }
        const u = useState(l);
        const c = u[0];
        const d = u[1];
        const m = useState(i);
        const p = m[0];
        const _ = m[1];
        if (i !== p) {
            _(i);
            d(i?.aiThreads ?? null);
        }
        let g;
        if (n[4] !== i?.aiThreads) {
            g = function() {
                d(i?.aiThreads ?? null);
            };
            n[4] = i?.aiThreads;
            n[5] = g;
        } else {
            g = n[5];
        }
        o("useWAWebListener").useListener(i, "change:aiThreads", g);
        let h;
        if (n[6] !== c || n[7] !== t) {
            h = t == null ? null : c?.get(t) ?? null;
            n[6] = c;
            n[7] = t;
            n[8] = h;
        } else {
            h = n[8];
        }
        const C = h;
        let b;
        if (n[9] === Symbol.for("react.memo_cache_sentinel")) {
            b = [
                o("WAWebAiThreadGetters").getDisplayTitle
            ];
            n[9] = b;
        } else {
            b = n[9];
        }
        const v = o("useWAWebAiThreadValues").useOptionalAiThreadValues(C, b);
        if (!(C == null || v == null)) {
            const S = v[0];
            if (!(t != null && o("WAWebResolveThreadForEntryPoint").isDefaultThread(t) && o("WAWebBotGating").isDefaultThreadRoutingEnabled())) {
                return S;
            }
        }
    }
    l.default = u;
}, 98);