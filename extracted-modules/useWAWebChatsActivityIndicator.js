__d("useWAWebChatsActivityIndicator", [
    "WAWebChatCollection",
    "WAWebNewsletterChatListUtils",
    "react",
    "react-compiler-runtime",
    "useWAWebChatListChannelsListener",
    "useWAWebListener"
], function(t, n, r, o, a, i, l) {
    let e;
    const useState = (e || (e = o("react"))).useState;
    function useU() {
        const e = o("react-compiler-runtime").c(4);
        const t = c;
        const n = useState(t);
        const unreadChatCount = n[0];
        const i = n[1];
        let l;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            l = function() {
                i(t());
            };
            e[0] = l;
        } else {
            l = e[0];
        }
        const u = l;
        let d;
        if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
            d = [
                "add",
                "remove",
                "reset",
                "change:showUnreadInTitle"
            ];
            e[1] = d;
        } else {
            d = e[1];
        }
        o("useWAWebListener").useListener(o("WAWebChatCollection").ChatCollection, d, u);
        r("useWAWebChatListChannelsListener")("add remove reset change:showUnreadInTitle change:archive", u);
        let m;
        if (e[2] !== unreadChatCount) {
            m = {
                unreadChatCount
            };
            e[2] = unreadChatCount;
            e[3] = m;
        } else {
            m = e[3];
        }
        return m;
    }
    function c() {
        return o("WAWebChatCollection").ChatCollection.getUnreadCount() + o("WAWebNewsletterChatListUtils").getChannelsTitleUnreadCount();
    }
    l.useChatsActivityIndicator = useU;
}, 98);