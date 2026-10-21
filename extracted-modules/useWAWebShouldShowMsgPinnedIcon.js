__d("useWAWebShouldShowMsgPinnedIcon", [
    "useWAWebIsNewsletterMsgPinned",
    "useWAWebIsPinnedMsg"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = r("useWAWebIsNewsletterMsgPinned")(e);
        const n = r("useWAWebIsPinnedMsg")(e);
        return t || n;
    }
    l.default = e;
}, 98);