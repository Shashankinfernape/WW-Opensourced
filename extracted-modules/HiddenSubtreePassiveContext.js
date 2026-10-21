__d("HiddenSubtreePassiveContext", [
    "react"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const UContext = s.createContext({
        getCurrentState: function() {
            return {
                backgrounded: false,
                hidden: false,
                hiddenOrBackgrounded: false,
                hiddenOrBackgrounded_FIXME: false,
                visibleForAnimation: false
            };
        },
        subscribeToChanges: function(t) {
            return {
                remove: function() {}
            };
        }
    });
    l.default = UContext;
}, 98);