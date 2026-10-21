__d("WAResultOrError", [], function(t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
        if (t != null) {
            return {
                success: false,
                error: e,
                payload: t
            };
        }
        return {
            success: false,
            error: e
        };
    }
    function l(e) {
        return {
            success: true,
            value: e
        };
    }
    function s(e) {
        return {
            success: false,
            error: e
        };
    }
    i.DEPRECATED_makeError = e;
    i.makeResult = l;
    i.makeError = s;
}, 66);