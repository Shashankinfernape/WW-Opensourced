__d("cometVirtualizationMarginBounds", [
    "VirtualizationConfig"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = o("VirtualizationConfig").getScrollDirectionDiscount();
    const s = o("VirtualizationConfig").getTopBottomMarginLowerBoundScreenHeightRatio();
    function u(t, n, r, o) {
        const a = r ? 1 : e;
        const i = r ? e : 1;
        const l = Math.min(t * i, n);
        const u = Math.min(t * a, n);
        return {
            bottomMax: o != null && !r ? o : l,
            lowerBound: n / s,
            topMax: o != null && r ? o : u
        };
    }
    function c(e, t, n) {
        return Math.min(t, Math.max(n, e));
    }
    l.computeMarginBounds = u;
    l.clampRestoredMargin = c;
}, 98);