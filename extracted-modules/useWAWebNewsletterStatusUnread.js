__d("useWAWebNewsletterStatusUnread", [
    "WAWebContactGetters",
    "WAWebNewsletterCollection",
    "WAWebNewsletterGatingUtils",
    "WAWebStatusCollection",
    "WAWebUserPrefsNewsletter",
    "react",
    "react-compiler-runtime",
    "useWAWebListener"
], function(t, n, r, o, a, i, l) {
    let e;
    const useState = (e || (e = o("react"))).useState;
    function u() {
        if (!o("WAWebNewsletterGatingUtils").isNewsletterStatusAllEntrypointsEnabled()) {
            return false;
        }
        const e = o("WAWebUserPrefsNewsletter").getNewsletterTabLastSeenTimestamp();
        return o("WAWebStatusCollection").StatusCollection.getUnexpired({
            containsAnyUnreadStatus: true
        }).some((t)=>o("WAWebContactGetters").getIsNewsletter(t.contact) && t.t > e);
    }
    function c() {
        const e = o("react-compiler-runtime").c(2);
        const t = useState(u);
        const n = t[0];
        const a = t[1];
        let i;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            i = function() {
                const e = u();
                a(function(t) {
                    if (t !== e) {
                        return e;
                    }
                    return t;
                });
            };
            e[0] = i;
        } else {
            i = e[0];
        }
        const l = i;
        let c;
        if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
            c = [
                "add",
                "remove",
                "change:unreadCount",
                "change:t"
            ];
            e[1] = c;
        } else {
            c = e[1];
        }
        o("useWAWebListener").useListener(o("WAWebStatusCollection").StatusCollection, c, l);
        o("useWAWebListener").useListener(r("WAWebNewsletterCollection"), "newsletter_tab_close", l);
        return n;
    }
    l.useWAWebNewsletterStatusUnread = c;
}, 98);