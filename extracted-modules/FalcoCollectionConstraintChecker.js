__d("FalcoCollectionConstraintChecker", [], function(t, n, r, o, a, i) {
    "use strict";
    function e(consents, t, n) {
        if (typeof t !== "number" || !Number.isInteger(t)) {
            return false;
        }
        const r = consents[String(t)];
        if (r == null) {
            return false;
        }
        return r <= n;
    }
    function l(e, t) {
        if (typeof t !== "number" || !Number.isInteger(t) || t < 0 || t > 52) {
            return false;
        }
        return Math.floor(e / 2 ** t) % 2 === 1;
    }
    function s(t, n, r) {
        if (!Array.isArray(r)) {
            return false;
        }
        const o = r[0];
        if (o === "n") {
            if (r.length !== 2 || !Array.isArray(r[1])) {
                return false;
            }
            return !s(t, n, r[1]);
        }
        if (o === "c") {
            return e(t.consents, r[1], n);
        }
        if (o === "m") {
            return l(t.modes ?? 0, r[1]);
        }
        if (o !== "a" && o !== "o") {
            return false;
        }
        let i = o === "a";
        for(let u = 1; u < r.length; u++){
            const c = r[u];
            if (!Array.isArray(c)) {
                return false;
            }
            i = s(t, n, c);
            if (i) {
                if (o === "o") {
                    return true;
                }
            } else if (o === "a") {
                return false;
            }
        }
        return i;
    }
    i.default = s;
}, 66);