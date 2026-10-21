__d("WAErrorMessage", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = "NoErrorMessageProvided";
    function l(t) {
        if (typeof t === "string") {
            return t;
        }
        if (t instanceof Error) {
            return t.toString();
        }
        if (typeof t === "object") {
            if (typeof t?.description === "string") {
                return t.description;
            }
            if (typeof t?.message === "string") {
                return t.message;
            }
        }
        return e;
    }
    i.maybeGetMessageFromError = l;
}, 66);