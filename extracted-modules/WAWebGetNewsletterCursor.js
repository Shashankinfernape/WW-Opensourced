__d("WAWebGetNewsletterCursor", [
    "WAWebNewsletterSystemMessages"
], function(t, n, r, o, a, i, l) {
    function e(e, t, n) {
        const a = n.length > 0 ? n : e.toArray();
        const i = t === "before" ? a[0]?.serverId : a[a.length - 1]?.serverId;
        if (i == null) {
            return null;
        }
        if (t === "before") {
            return {
                before: s(i)
            };
        }
        return {
            after: s(i)
        };
    }
    function s(e) {
        return Math.min(Math.max(e, o("WAWebNewsletterSystemMessages").EARLIEST_AVAILABLE_MESSAGE_ID - 1), o("WAWebNewsletterSystemMessages").LATEST_AVAILABLE_MESSAGE_ID);
    }
    l.getNewsletterCursor = e;
}, 98);