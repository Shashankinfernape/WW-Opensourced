__d("useWAWebViewRepliesThreads", [
    "WAWebLoadViewRepliesThreadsAction",
    "WAWebNoop",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const useEffect = (e || (e = o("react"))).useEffect;
    function u(e) {
        const t = o("react-compiler-runtime").c(4);
        const e_viewRepliesThreads = e.viewRepliesThreads;
        let a;
        let i;
        if (t[0] !== e || t[1] !== e_viewRepliesThreads) {
            a = function() {
                if (e_viewRepliesThreads != null) {
                    o("WAWebLoadViewRepliesThreadsAction").loadViewRepliesThreads(e).finally(r("WAWebNoop"));
                }
            };
            i = [
                e_viewRepliesThreads,
                e
            ];
            t[0] = e;
            t[1] = e_viewRepliesThreads;
            t[2] = a;
            t[3] = i;
        } else {
            a = t[2];
            i = t[3];
        }
        useEffect(a, i);
    }
    l.default = u;
}, 98);