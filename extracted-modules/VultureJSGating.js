__d("VultureJSGating", [
    "justknobx"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e = false;
    function s() {
        e = true;
    }
    function u() {
        if (e) {
            return false;
        }
        return r("justknobx")._("2635");
    }
    l.__DO_NOT_USE_DISABLE_VULTURE_JS_LOGGING = s;
    l.isLoggingEnabled = u;
}, 98);