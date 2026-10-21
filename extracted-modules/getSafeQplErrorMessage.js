__d("getSafeQplErrorMessage", [], function(t, n, r, o, a, i) {
    "use strict";
    function e(e) {
        if (e == null) {
            return "<null>";
        }
        if (e.messageFormat != null && typeof e.messageFormat === "string" && e.messageParams != null && Array.isArray(e.messageParams)) {
            try {
                return l.apply(void 0, [
                    e.messageFormat
                ].concat(e.messageParams));
            } catch (e) {}
        }
        if (e instanceof Error || typeof e === "string") {
            return e.toString();
        }
        return "<unknown>";
    }
    function l(e, ...n) {
        let o = 0;
        return e.replace(/%s/g, ()=>String(n[o++]));
    }
    i.getSafeQPLErrorMessage = e;
}, 66);