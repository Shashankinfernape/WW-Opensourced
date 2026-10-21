__d("WAWebFormatMessageHistoryBundleBody", [
    "fbt",
    "WALongInt",
    "WAWeb-moment",
    "WAWebContactCollection",
    "WAWebFrontendContactGetters",
    "WAWebGroupHistoryMsgData.flow",
    "WAWebL10N",
    "WAWebUserPrefsMeUser"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e, t) {
        return u({
            author: e.author,
            metadata: e.groupHistoryBundleMetadata
        }, t);
    }
    function u({ author, metadata }, t) {
        const u = author != null ? o("WAWebContactCollection").ContactCollection.get(author) : null;
        const R = u ? o("WAWebFrontendContactGetters").getDisplayName(u) : author?.toString() ?? "";
        if (t === o("WAWebGroupHistoryMsgData.flow").MessageHistoryBundleProcessState.FAILED || t === o("WAWebGroupHistoryMsgData.flow").MessageHistoryBundleProcessState.FAILED_NO_RETRY) {
            return d(R);
        }
        if (t === o("WAWebGroupHistoryMsgData.flow").MessageHistoryBundleProcessState.DEDUPED) {
            return m(R);
        }
        if (t === o("WAWebGroupHistoryMsgData.flow").MessageHistoryBundleProcessState.DOWNLOADING || t === o("WAWebGroupHistoryMsgData.flow").MessageHistoryBundleProcessState.PROCESSING) {
            return p(R);
        }
        const L = metadata?.oldestMessageTimestampInWindow;
        if (metadata == null || L == null) {
            return c();
        }
        const E = Intl.DateTimeFormat(r("WAWeb-moment").locale(), {
            month: "short",
            day: "numeric",
            year: "numeric",
            hour: "numeric",
            minute: "2-digit"
        }).format(Number(o("WALongInt").longIntToDecimalString(L)) * 1000);
        const k = metadata.historyReceivers ?? [];
        const I = k.map((e)=>{
            const t = o("WAWebContactCollection").ContactCollection.get(e);
            if (t) {
                return o("WAWebFrontendContactGetters").getDisplayName(t);
            }
            return e.toString();
        });
        const T = I[0] || "";
        const D = metadata.nonHistoryReceivers ?? [];
        const x = S(D);
        if (author != null && o("WAWebUserPrefsMeUser").isMeAccount(author)) {
            if (k.length === 1) {
                if (x != null) {
                    return C(T, E, x);
                }
                return _(T, E);
            }
            if (k.length === 2) {
                const $ = I[1] || "";
                if (x != null) {
                    return b(T, $, E, x);
                }
                return f(T, $, E);
            }
            if (x != null) {
                return v(T, k.length - 1, E, x);
            }
            return g(T, k.length - 1, E);
        }
        if (t === o("WAWebGroupHistoryMsgData.flow").MessageHistoryBundleProcessState.INJECTED_PARTIAL) {
            return h(R, E);
        }
        return y(R, E);
    }
    function c() {
        return s._("Message history was sent");
    }
    function d(e) {
        return s._("Couldn't download message history that {sender contact name} sent you", [
            s._param("sender contact name", e)
        ]);
    }
    function m(e) {
        return s._("{sender contact name} also sent you message history, which you already got from someone else", [
            s._param("sender contact name", e)
        ]);
    }
    function p(e) {
        return s._("Downloading message history that {sender contact name} sent you", [
            s._param("sender contact name", e)
        ]);
    }
    function _(e, t) {
        return s._("You sent {name of the group history receiver} message history that starts on {timestamp}", [
            s._param("name of the group history receiver", e),
            s._param("timestamp", t)
        ]);
    }
    function f(e, t, n) {
        return s._("You sent {name of the group history receiver} and {name of the second group history receiver} message history that starts on {timestamp}", [
            s._param("name of the group history receiver", e),
            s._param("name of the second group history receiver", t),
            s._param("timestamp", n)
        ]);
    }
    function g(e, t, n) {
        return s._("_j{\"*\":\"You sent {name of the group history receiver} and {number} others message history that starts on {timestamp}\",\"_1\":\"You sent {name of the group history receiver} and 1 other message history that starts on {timestamp}\"}", [
            s._plural(t, "number", r("WAWebL10N").n(t)),
            s._param("name of the group history receiver", e),
            s._param("timestamp", n)
        ]);
    }
    function h(e, t) {
        return s._("{author name} sent you message history that starts on {timestamp}. Some messages may not be available", [
            s._param("author name", e),
            s._param("timestamp", t)
        ]);
    }
    function y(e, t) {
        return s._("{author name} sent you message history that starts on {timestamp}", [
            s._param("author name", e),
            s._param("timestamp", t)
        ]);
    }
    function C(e, t, n) {
        return s._("You sent {name of the group history receiver} message history that starts on {timestamp}. {name of the non-history receiver} didn't receive history", [
            s._param("name of the group history receiver", e),
            s._param("timestamp", t),
            s._param("name of the non-history receiver", n)
        ]);
    }
    function b(e, t, n, r) {
        return s._("You sent {name of the group history receiver} and {name of the second group history receiver} message history that starts on {timestamp}. {name of the non-history receiver} didn't receive history", [
            s._param("name of the group history receiver", e),
            s._param("name of the second group history receiver", t),
            s._param("timestamp", n),
            s._param("name of the non-history receiver", r)
        ]);
    }
    function v(e, t, n, o) {
        return s._("_j{\"*\":\"You sent {name of the group history receiver} and {number} others message history that starts on {timestamp}. {name of the non-history receiver} didn't receive history\",\"_1\":\"You sent {name of the group history receiver} and 1 other message history that starts on {timestamp}. {name of the non-history receiver} didn't receive history\"}", [
            s._plural(t, "number", r("WAWebL10N").n(t)),
            s._param("name of the group history receiver", e),
            s._param("timestamp", n),
            s._param("name of the non-history receiver", o)
        ]);
    }
    function S(e) {
        if (e.length === 0) {
            return null;
        }
        const t = e[0];
        const n = o("WAWebContactCollection").ContactCollection.get(t);
        if (n) {
            return o("WAWebFrontendContactGetters").getDisplayName(n);
        }
        return t.toString();
    }
    l.formatMessageHistoryBundleBody = e;
    l.formatMessageHistoryBundleBodyFor = u;
}, 226);