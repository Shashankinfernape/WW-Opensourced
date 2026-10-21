__d("useWAWebConversationPanelGroupDescription", [
    "WAWebChatGetters",
    "WAWebFrontendChatGetters",
    "WAWebGroupGatingUtils",
    "WAWebMsgType",
    "WAWebUserPrefsGeneral",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const useState = (e || (e = o("react"))).useState;
    function useU(e) {
        const t = o("react-compiler-runtime").c(5);
        let n;
        if (t[0] !== e) {
            n = function() {
                if (!o("WAWebChatGetters").getIsGroup(e) || o("WAWebGroupGatingUtils").getGroupDescriptionLength() <= 0 || o("WAWebUserPrefsGeneral").getSeenGroupDesc(e.id)) {
                    return false;
                }
                o("WAWebUserPrefsGeneral").setSeenGroupDesc(e.id);
                if (e.unreadCount === 0) {
                    return !e.msgs.some(c);
                }
                return !o("WAWebFrontendChatGetters").getShouldShowUnreadDivider(e);
            };
            t[0] = e;
            t[1] = n;
        } else {
            n = t[1];
        }
        const r = useState(n);
        const a = r[0];
        const i = r[1];
        let l;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            l = function() {
                i(false);
            };
            t[2] = l;
        } else {
            l = t[2];
        }
        const u = l;
        let d;
        if (t[3] !== a) {
            d = [
                a,
                u
            ];
            t[3] = a;
            t[4] = d;
        } else {
            d = t[4];
        }
        return d;
    }
    function c(e) {
        return e.type !== o("WAWebMsgType").MSG_TYPE.E2E_NOTIFICATION && e.type !== o("WAWebMsgType").MSG_TYPE.GP2;
    }
    l.default = useU;
}, 98);