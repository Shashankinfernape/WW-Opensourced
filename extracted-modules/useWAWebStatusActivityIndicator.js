__d("useWAWebStatusActivityIndicator", [
    "WATimeUtils",
    "WAWebCollectionConstants",
    "WAWebContactCollection",
    "WAWebContactGetters",
    "WAWebStatusCollection",
    "WAWebUserPrefsStatusTab",
    "react",
    "react-compiler-runtime",
    "useWAWebListener"
], function(t, n, r, o, a, i, l) {
    let e;
    const useState = (e || (e = o("react"))).useState;
    function u() {
        const e = o("react-compiler-runtime").c(5);
        const t = useState(c);
        const hasUnread = t[0];
        const r = t[1];
        let a;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = function() {
                r(c());
            };
            e[0] = a;
        } else {
            a = e[0];
        }
        const i = a;
        o("useWAWebListener").useListener(o("WAWebContactCollection").ContactCollection, o("WAWebCollectionConstants").COLLECTION_HAS_SYNCED, i);
        let l;
        if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
            l = [
                "add",
                "remove",
                "change:unreadCount",
                "change:t"
            ];
            e[1] = l;
        } else {
            l = e[1];
        }
        o("useWAWebListener").useListener(o("WAWebStatusCollection").StatusCollection, l, i);
        let u;
        if (e[2] === Symbol.for("react.memo_cache_sentinel")) {
            u = function() {
                r(false);
                o("WAWebUserPrefsStatusTab").saveStatusTabLastSeenTimestamp(o("WATimeUtils").unixTime());
            };
            e[2] = u;
        } else {
            u = e[2];
        }
        const clearUnreadActivity = u;
        let m;
        if (e[3] !== hasUnread) {
            m = {
                hasUnread,
                clearUnreadActivity
            };
            e[3] = hasUnread;
            e[4] = m;
        } else {
            m = e[4];
        }
        return m;
    }
    function c() {
        const e = o("WAWebUserPrefsStatusTab").getStatusTabLastSeenTimestamp();
        return o("WAWebStatusCollection").StatusCollection.getUnexpired({
            containsAnyUnreadStatus: true
        }).some((t)=>t.t > e && !o("WAWebContactGetters").getCalculatedStatusMute(t.contact));
    }
    l.useWAWebStatusActivityIndicator = u;
}, 98);