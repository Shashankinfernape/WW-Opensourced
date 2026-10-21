__d("useWAWebActiveChat", [
    "WAWebChatCollection",
    "WAWebCmd",
    "react",
    "react-compiler-runtime",
    "useWAWebListener"
], function(t, n, r, o, a, i, l) {
    let e;
    const useState = (e || (e = o("react"))).useState;
    function u() {
        const e = o("react-compiler-runtime").c(3);
        const t = useState(c);
        const n = t[0];
        const r = t[1];
        let a;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = function({ chat }) {
                return r(chat);
            };
            e[0] = a;
        } else {
            a = e[0];
        }
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "open_chat", a);
        let i;
        if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
            i = function() {
                return r(null);
            };
            e[1] = i;
        } else {
            i = e[1];
        }
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "close_active_chat", i);
        let l;
        if (e[2] === Symbol.for("react.memo_cache_sentinel")) {
            l = function() {
                return r(null);
            };
            e[2] = l;
        } else {
            l = e[2];
        }
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "close_chat", l);
        return n;
    }
    function c() {
        return o("WAWebChatCollection").ChatCollection.getActive();
    }
    l.default = u;
}, 98);