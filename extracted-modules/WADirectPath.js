__d("WADirectPath", [
    "WAResultOrError"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = "0_0_0_.enc";
    function s(e) {
        return e;
    }
    function u(t) {
        if (t == null) {
            return o("WAResultOrError").makeError("direct-path-undefined");
        }
        if (t === "") {
            return o("WAResultOrError").makeError("direct-path-empty");
        }
        if (t.includes(e)) {
            return o("WAResultOrError").makeError("direct-path-corrupted");
        }
        return o("WAResultOrError").makeResult(t);
    }
    l.unsafeCastToDirectPath = s;
    l.validateDirectPath = u;
}, 98);