__d("WAWebChatlistPinnedDivider", [
    "WAWebChatlistTypes",
    "WDSSectionDividerMetrics"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
        const r = [];
        let a = false;
        let i = false;
        for (const l of e){
            if ((l.pin ?? 0) > 0) {
                a = true;
            } else if (t && a && !i) {
                r.push({
                    itemKey: "pinned-divider",
                    type: o("WAWebChatlistTypes").WAWebChatlistRow.ROW_PINNED_DIVIDER,
                    height: o("WDSSectionDividerMetrics").WDSSectionDividerBareHeight
                });
                i = true;
            }
            r.push(n(l));
        }
        return r;
    }
    l.toChatRowsWithPinnedDivider = e;
}, 98);