__d("useWAWebChatLockEvents", [
    "WAWebChatLockUtils",
    "WAWebCmd",
    "react",
    "react-compiler-runtime",
    "useWAWebListener"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const useState = (e || (e = o("react"))).useState;
    function u() {
        const e = o("react-compiler-runtime").c(3);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = o("WAWebChatLockUtils").lockedChatsAreAccessible();
            e[0] = t;
        } else {
            t = e[0];
        }
        const n = useState(t);
        const r = n[0];
        const a = n[1];
        let i;
        if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
            i = function() {
                a(false);
            };
            e[1] = i;
        } else {
            i = e[1];
        }
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "chatlock:lock", i);
        let l;
        if (e[2] === Symbol.for("react.memo_cache_sentinel")) {
            l = function() {
                a(true);
            };
            e[2] = l;
        } else {
            l = e[2];
        }
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "chatlock:unlock", l);
        return r;
    }
    l.useChatLockEvents = u;
}, 98);