__d("WAWebIcceBubbleActivationHandlers", [
    "WAWebWamEnumSubSurface"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
        if (e) {
            return o("WAWebWamEnumSubSurface").SUB_SURFACE.MISSED_ICCE_BUBBLE;
        }
        return o("WAWebWamEnumSubSurface").SUB_SURFACE.ICCE_BUBBLE_OTHER_RESULT;
    }
    function s(e) {
        return {
            onClick: function(n) {
                const t = window.getSelection();
                const n_currentTarget = n.currentTarget;
                if (!(t != null && t.toString().length > 0 && (n_currentTarget.contains(t.anchorNode) || n_currentTarget.contains(t.focusNode)))) {
                    e();
                }
            },
            onKeyDown: function(n) {
                if (n.key === "Enter" || n.key === " ") {
                    n.preventDefault();
                    n.stopPropagation();
                    e();
                }
            }
        };
    }
    l.getIcceBubbleSubSurface = e;
    l.getIcceBubbleActivationHandlers = s;
}, 98);