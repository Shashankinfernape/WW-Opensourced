__d("useWAWebRerenderOnActiveChatChange", [
    "WAWebCmd",
    "react",
    "react-compiler-runtime",
    "useWAWebListener"
], function(t, n, r, o, a, i, l) {
    let e;
    const useState = (e || (e = o("react"))).useState;
    function useU() {
        const e = o("react-compiler-runtime").c(1);
        const t = useState(0);
        const n = t[1];
        let r;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            r = function() {
                return n(c);
            };
            e[0] = r;
        } else {
            r = e[0];
        }
        const a = r;
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "open_chat", a);
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "close_chat", a);
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "close_active_chat", a);
    }
    function c(e) {
        return e + 1;
    }
    l.default = useU;
}, 98);