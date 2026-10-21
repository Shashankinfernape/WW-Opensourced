__d("useWAWebOpenChat", [
    "WAWebChatCollection",
    "WAWebCmd",
    "react",
    "react-compiler-runtime",
    "useWAWebListener"
], function(t, n, r, o, a, i, l) {
    let e;
    const useState = (e || (e = o("react"))).useState;
    function u() {
        const e = o("react-compiler-runtime").c(4);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = o("WAWebChatCollection").ChatCollection.getActive();
            e[0] = t;
        } else {
            t = e[0];
        }
        const n = useState(t);
        const openedChat = n[0];
        const a = n[1];
        let i;
        if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
            i = function(t) {
                a(t);
            };
            e[1] = i;
        } else {
            i = e[1];
        }
        o("useWAWebListener").useListener(o("WAWebChatCollection").ChatCollection, "change:active", i);
        const openChat = c;
        let u;
        if (e[2] !== openedChat) {
            u = {
                openedChat,
                openChat
            };
            e[2] = openedChat;
            e[3] = u;
        } else {
            u = e[3];
        }
        return u;
    }
    function c(e, t) {
        return o("WAWebCmd").Cmd.openChatBottom({
            chat: e,
            chatEntryPoint: t
        });
    }
    l.useOpenChat = u;
}, 98);