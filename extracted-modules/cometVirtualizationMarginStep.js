__d("cometVirtualizationMarginStep", [
    "VirtualizationConfig"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = o("VirtualizationConfig").getMarginScrollDelta();
    const s = o("VirtualizationConfig").getScrollSpeedFactorBase();
    function u(e, t) {
        return e.bottom === t.bottom && e.left === t.left && e.right === t.right && e.top === t.top;
    }
    function c(t, n, r, o) {
        const a = r === 0 ? 1 : r / s;
        const i = e * a;
        const { bottomMax, lowerBound, topMax } = o;
        const m = n ? babelHelpers.extends({}, t, {
            bottom: Math.min(bottomMax, t.bottom + i),
            top: Math.min(topMax, Math.max(lowerBound, t.top - i))
        }) : babelHelpers.extends({}, t, {
            bottom: Math.min(bottomMax, Math.max(lowerBound, t.bottom - i)),
            top: Math.min(topMax, t.top + i)
        });
        if (u(t, m)) {
            return t;
        }
        return m;
    }
    l.areMarginsEqual = u;
    l.computeNextMargin = c;
}, 98);