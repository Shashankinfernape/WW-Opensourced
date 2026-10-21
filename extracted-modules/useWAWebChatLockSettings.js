__d("useWAWebChatLockSettings", [
    "WAWebChatLockSettings",
    "react",
    "react-compiler-runtime",
    "useWAWebListener"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const useState = (e || (e = o("react"))).useState;
    function u(e) {
        return {
            hideLockedChats: e.hideLockedChats === true,
            hasSecretCode: e.secretCode != null
        };
    }
    function useC() {
        const e = o("react-compiler-runtime").c(3);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = o("WAWebChatLockSettings").getChatLockSettings();
            e[0] = t;
        } else {
            t = e[0];
        }
        const n = t;
        let r;
        if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
            r = function() {
                return u(n);
            };
            e[1] = r;
        } else {
            r = e[1];
        }
        const a = useState(r);
        const i = a[0];
        const l = a[1];
        let c;
        if (e[2] === Symbol.for("react.memo_cache_sentinel")) {
            c = function() {
                l(u(n));
            };
            e[2] = c;
        } else {
            c = e[2];
        }
        o("useWAWebListener").useListener(n, "change", c);
        return i;
    }
    l.useChatLockSettings = useC;
}, 98);