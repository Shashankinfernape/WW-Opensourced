__d("WAWebThreadMetadata", [
    "WAWebBackendApi"
], function(t, n, r, o, a, i, l) {
    let e = null;
    function s(t) {
        e = t;
        o("WAWebBackendApi").frontendFireAndForget("updateChatPreviewT", {
            threadMeta: t.chatTimestamp
        });
    }
    function u() {
        return e;
    }
    function c() {
        const n = e?.chatTimestamp;
        if (n != null) {
            o("WAWebBackendApi").frontendFireAndForget("resetChatPreviewT", {
                chatIds: Object.keys(n)
            });
        }
        e = null;
    }
    l.setOfflineThreadMeta = s;
    l.getOfflineThreadMetaPreview = u;
    l.resetThreadMeta = c;
}, 98);