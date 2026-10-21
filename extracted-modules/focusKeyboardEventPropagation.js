__d("focusKeyboardEventPropagation", [], function(t, n, r, o, a, i) {
    "use strict";
    function e(e) {
        return e._stopFocusKeyboardPropagation === true;
    }
    function l(e) {
        e._stopFocusKeyboardPropagation = true;
    }
    i.hasFocusKeyboardEventPropagationStopped = e;
    i.stopFocusKeyboardEventPropagation = l;
}, 66);