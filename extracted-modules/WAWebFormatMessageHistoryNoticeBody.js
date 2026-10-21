__d("WAWebFormatMessageHistoryNoticeBody", [
    "fbt",
    "WALongInt",
    "WAWeb-moment",
    "WAWebChatContactUtils",
    "WAWebContactCollection",
    "WAWebContactGetters",
    "WAWebFrontendContactGetters",
    "WAWebL10N"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
        if (o("WAWebFrontendContactGetters").getIsMyContact(e)) {
            return o("WAWebFrontendContactGetters").getFormattedName(e);
        }
        const t = o("WAWebContactGetters").getNotifyName(e);
        if (t != null) {
            return o("WAWebChatContactUtils").getFormattedNotifyName(t).toString();
        }
        return o("WAWebFrontendContactGetters").getFormattedUsernameOrPhone(e);
    }
    function u(e) {
        return c({
            author: e.author,
            metadata: e.groupHistoryBundleMetadata
        });
    }
    function c({ author, metadata }) {
        const s = metadata?.oldestMessageTimestampInWindow;
        if (metadata == null || s == null || author == null) {
            return d();
        }
        const u = Intl.DateTimeFormat(r("WAWeb-moment").locale(), {
            month: "short",
            day: "numeric",
            year: "numeric",
            hour: "numeric",
            minute: "2-digit"
        }).format(Number(o("WALongInt").longIntToDecimalString(s)) * 1000);
        const c = metadata.historyReceivers ?? [];
        const h = c.map((t)=>{
            const n = o("WAWebContactCollection").ContactCollection.get(t);
            if (n) {
                return e(n);
            }
            return t.toString();
        });
        const y = o("WAWebContactCollection").ContactCollection.get(author);
        const C = y ? e(y) : author.toString();
        const b = h[0] || "";
        const v = metadata.nonHistoryReceivers ?? [];
        const S = g(v);
        if (c.length === 1) {
            if (S != null) {
                return _(C, b, u, S);
            }
            return m(C, b, u);
        }
        if (S != null) {
            return f(C, b, c.length - 1, u, S);
        }
        return p(C, b, c.length - 1, u);
    }
    function d() {
        return s._("Message history was sent");
    }
    function m(e, t, n) {
        return s._("{author name} sent {receiver name} message history that starts on {timestamp}", [
            s._param("author name", e),
            s._param("receiver name", t),
            s._param("timestamp", n)
        ]);
    }
    function p(e, t, n, o) {
        return s._("_j{\"*\":\"{author name} sent {receiver name} and {number} others message history that starts on {timestamp}\",\"_1\":\"{author name} sent {receiver name} and 1 other message history that starts on {timestamp}\"}", [
            s._plural(n, "number", r("WAWebL10N").n(n)),
            s._param("author name", e),
            s._param("receiver name", t),
            s._param("timestamp", o)
        ]);
    }
    function _(e, t, n, r) {
        return s._("{author name} sent {receiver name} message history that starts on {timestamp}. {name of the non-history receiver} didn't receive history", [
            s._param("author name", e),
            s._param("receiver name", t),
            s._param("timestamp", n),
            s._param("name of the non-history receiver", r)
        ]);
    }
    function f(e, t, n, o, a) {
        return s._("_j{\"*\":\"{author name} sent {receiver name} and {number} others message history that starts on {timestamp}. {name of the non-history receiver} didn't receive history\",\"_1\":\"{author name} sent {receiver name} and 1 other message history that starts on {timestamp}. {name of the non-history receiver} didn't receive history\"}", [
            s._plural(n, "number", r("WAWebL10N").n(n)),
            s._param("author name", e),
            s._param("receiver name", t),
            s._param("timestamp", o),
            s._param("name of the non-history receiver", a)
        ]);
    }
    function g(t) {
        if (t.length === 0) {
            return null;
        }
        const n = t[0];
        const r = o("WAWebContactCollection").ContactCollection.get(n);
        if (r) {
            return e(r);
        }
        return n.toString();
    }
    l.formatMessageHistoryNoticeBody = u;
    l.formatMessageHistoryNoticeBodyFor = c;
}, 226);