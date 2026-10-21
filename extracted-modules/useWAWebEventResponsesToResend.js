__d("useWAWebEventResponsesToResend", [
    "WAWebEventResponseCollection",
    "react-compiler-runtime",
    "useWAWebAggregatedView"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("react-compiler-runtime").c(5);
        const n = o("useWAWebAggregatedView").useAggregatedView(o("WAWebEventResponseCollection").EventResponseCollection.byIsFailedByMe, true);
        let r;
        if (t[0] !== n || t[1] !== e) {
            let a;
            if (t[3] !== e) {
                a = function({ parentMsgKey }) {
                    return e.some((e)=>e.equals(parentMsgKey));
                };
                t[3] = e;
                t[4] = a;
            } else {
                a = t[4];
            }
            r = n.filter(a);
            t[0] = n;
            t[1] = e;
            t[2] = r;
        } else {
            r = t[2];
        }
        return r;
    }
    l.default = e;
}, 98);