__d("WAWebAiThreadComparator", [
    "WAWebBotGating"
], function(t, n, r, o, a, i, l) {
    const e = function(t, n) {
        if (o("WAWebBotGating").isAiThreadPinEnabled()) {
            const a = t.pinThreadTimestamp ?? 0;
            const i = n.pinThreadTimestamp ?? 0;
            if (a > 0 != i > 0) {
                if (a > 0) {
                    return -1;
                }
                return 1;
            }
            if (a > 0 && i > 0 && a !== i) {
                if (a > i) {
                    return -1;
                }
                return 1;
            }
        }
        const l = t.lastMessageTimestamp || 0;
        const s = n.lastMessageTimestamp || 0;
        if (l !== s) {
            if (l > s) {
                return -1;
            }
            return 1;
        }
        if (t.title < n.title) {
            return -1;
        }
        return 1;
    };
    l.default = e;
}, 98);