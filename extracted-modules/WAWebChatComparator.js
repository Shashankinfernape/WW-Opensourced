__d("WAWebChatComparator", [
    "WAWebChatSortTime"
], function(t, n, r, o, a, i, l) {
    const e = function(t, n) {
        const e = t.pin || 0;
        const r = n.pin || 0;
        if (e || r) {
            if (e !== r) {
                if (e > r) {
                    return -1;
                }
                return 1;
            }
            if (t.id.toString() < n.id.toString()) {
                return -1;
            }
            return 1;
        }
        const a = o("WAWebChatSortTime").getChatSortTime(t);
        const i = o("WAWebChatSortTime").getChatSortTime(n);
        if (a !== i) {
            if (a > i) {
                return -1;
            }
            return 1;
        }
        if (t.id.toString() < n.id.toString()) {
            return -1;
        }
        return 1;
    };
    l.default = e;
}, 98);