__d("useWAWebArchivedChatsActivityIndicator", [
    "WAWebChatCollection",
    "WAWebChatGetters",
    "WAWebChatUnreadConstants",
    "WAWebFrontendChatGetters",
    "WAWebNewsletterChatListUtils",
    "WAWebNewsletterCollection",
    "WAWebNewsletterGatingUtils",
    "react",
    "react-compiler-runtime",
    "useWAWebChatListChannelsListener",
    "useWAWebListener"
], function(t, n, r, o, a, i, l) {
    let e;
    const useState = (e || (e = o("react"))).useState;
    function useU() {
        const e = o("react-compiler-runtime").c(8);
        const t = useState(d);
        const n = t[0];
        const a = t[1];
        const i = useState(m);
        const showUnreadMentionIcon = i[0];
        const u = i[1];
        let c;
        let p;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            c = [
                "add",
                "remove",
                "reset",
                "change:archive",
                "change:unreadCount",
                "change:pendingSeenCount",
                "change:muteExpiration"
            ];
            p = function() {
                return a(d());
            };
            e[0] = c;
            e[1] = p;
        } else {
            c = e[0];
            p = e[1];
        }
        o("useWAWebListener").useListener(o("WAWebChatCollection").ChatCollection, c, p);
        let _;
        if (e[2] === Symbol.for("react.memo_cache_sentinel")) {
            _ = function() {
                return a(d());
            };
            e[2] = _;
        } else {
            _ = e[2];
        }
        r("useWAWebChatListChannelsListener")("add remove reset change:archive change:unreadCount change:pendingSeenCount", _);
        let f;
        let g;
        if (e[3] === Symbol.for("react.memo_cache_sentinel")) {
            f = [
                "change:archive",
                "change:hasUnreadMention",
                "change:archiveAtMentionViewedInDrawer"
            ];
            g = function() {
                return u(m());
            };
            e[3] = f;
            e[4] = g;
        } else {
            f = e[3];
            g = e[4];
        }
        o("useWAWebListener").useListener(o("WAWebChatCollection").ChatCollection, f, g);
        let h;
        if (e[5] !== showUnreadMentionIcon || e[6] !== n) {
            h = {
                unreadCount: n,
                showUnreadMentionIcon
            };
            e[5] = showUnreadMentionIcon;
            e[6] = n;
            e[7] = h;
        } else {
            h = e[7];
        }
        return h;
    }
    function c(e) {
        return e.archive && (o("WAWebFrontendChatGetters").getOptimisticUnreadCount(e) > 0 || o("WAWebFrontendChatGetters").getOptimisticUnreadCount(e) === o("WAWebChatUnreadConstants").MARKED_AS_UNREAD);
    }
    function d() {
        const length = o("WAWebChatCollection").ChatCollection.filter(c).length;
        if (o("WAWebNewsletterGatingUtils").isChannelsInChatListEnabled()) {
            return length + r("WAWebNewsletterCollection").countWhere(function(e) {
                return o("WAWebNewsletterChatListUtils").isUnlockedSubscribedOrOwnedChannel(e) && c(e);
            });
        }
        return length;
    }
    function m() {
        const e = o("WAWebChatCollection").ChatCollection.filter((e)=>c(e) && o("WAWebChatGetters").getIsGroup(e));
        return e.some((e)=>{
            const t = e.unreadMentionMetadata.getUnreadMentionCount();
            return t > 0 && !e.archiveAtMentionViewedInDrawer;
        });
    }
    l.useArchivedChatsActivityIndicator = useU;
}, 98);