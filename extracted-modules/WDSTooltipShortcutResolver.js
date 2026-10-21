__d("WDSTooltipShortcutResolver", [], function(t, n, r, o, a, i) {
    "use strict";
    let e = null;
    function l(t) {
        e = t;
    }
    function s(t) {
        return e?.(t);
    }
    i.registerWDSTooltipShortcutResolver = l;
    i.getWDSTooltipShortcut = s;
}, 66);