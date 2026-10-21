__d("VirtualizationConfig", [
    "justknobx"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = {
        isVisible: true,
        nodeHeight: null
    };
    const s = 4000;
    function u() {
        return r("justknobx")._("1003");
    }
    function c() {
        return r("justknobx")._("3656") ?? 1000;
    }
    function d() {
        return r("justknobx")._("3658");
    }
    function m() {
        return r("justknobx")._("3659");
    }
    function p() {
        return (r("justknobx")._("3655") ?? 0) / 10;
    }
    function _() {
        return r("justknobx")._("3657") ?? 0;
    }
    function f() {
        return r("justknobx")._("5895");
    }
    function g() {
        return r("justknobx")._("6042");
    }
    const h = 0;
    const y = false;
    l.DEFAULT_INIT_RENDER_CONFIG = e;
    l.VERTICAL_HIDEABLE_MARGIN = s;
    l.isVirtualizationEnabledInJK = u;
    l.getScrollHandlingDebounceMs = c;
    l.getMarginScrollDelta = d;
    l.getScrollSpeedFactorBase = m;
    l.getScrollDirectionDiscount = p;
    l.getTopBottomMarginLowerBoundScreenHeightRatio = _;
    l.getMarginObservationSampleCap = f;
    l.isNonInteractiveClickPinExclusionEnabled = g;
    l.HORIZONTAL_HIDEABLE_MARGIN = h;
    l.IS_INTERSECTION_MARGIN_SUPPORTED = y;
}, 98);