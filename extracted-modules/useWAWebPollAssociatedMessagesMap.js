__d("useWAWebPollAssociatedMessagesMap", [
    "WAWebGetOptionAssociatedImageMap",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
    "useWAWebAsync",
    "useWAWebListener"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const useState = (e || (e = o("react"))).useState;
    function u(e, t) {
        const a = o("react-compiler-runtime").c(9);
        let i;
        if (a[0] === Symbol.for("react.memo_cache_sentinel")) {
            i = new Map;
            a[0] = i;
        } else {
            i = a[0];
        }
        const l = useState(i);
        const u = l[0];
        const p = l[1];
        const _ = t.map(m);
        const f = useState(_.map(d));
        const g = f[0];
        const h = f[1];
        let y;
        if (a[1] !== t) {
            y = function(n) {
                return {
                    source: n,
                    eventOrEvents: "change:filehash",
                    callback: function() {
                        h(t.map(c));
                    }
                };
            };
            a[1] = t;
            a[2] = y;
        } else {
            y = a[2];
        }
        o("useWAWebListener").useListeners(_.map(y));
        let C;
        if (a[3] !== t || a[4] !== e) {
            C = (()=>{
                const r = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    const n = yield o("WAWebGetOptionAssociatedImageMap").getOptionAssociatedMsgsMap(e, t);
                    p(n);
                });
                return function() {
                    return r.apply(this, arguments);
                };
            })();
            a[3] = t;
            a[4] = e;
            a[5] = C;
        } else {
            C = a[5];
        }
        let b;
        if (a[6] !== t || a[7] !== g) {
            b = [
                t,
                g
            ];
            a[6] = t;
            a[7] = g;
            a[8] = b;
        } else {
            b = a[8];
        }
        r("useWAWebAsync")(C, b);
        return u;
    }
    function c(e) {
        return e.mediaData.filehash;
    }
    function d(e) {
        return e.filehash;
    }
    function m(e) {
        return e.mediaData;
    }
    l.usePollAssociatedMessagesMap = u;
}, 98);