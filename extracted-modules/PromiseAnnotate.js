__d("PromiseAnnotate", [], function(t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
        e.displayName = t;
        return e;
    }
    function l({ displayName }) {
        if (typeof displayName === "string") {
            return displayName;
        }
        return null;
    }
    i.setDisplayName = e;
    i.getDisplayName = l;
}, 66);