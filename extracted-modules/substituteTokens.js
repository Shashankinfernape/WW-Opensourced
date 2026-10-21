__d("substituteTokens", [
    "invariant",
    "IntlPunctuation"
], function(t, n, r, o, a, i, l, s) {
    const hasOwnProperty = Object.prototype.hasOwnProperty;
    const u = new RegExp(`\\{([^}]+)\\}(${o("IntlPunctuation").PUNCT_CHAR_CLASS}*)`, "g");
    function c(e) {
        return e;
    }
    function d(t, n, r) {
        if (n == null) {
            return t;
        }
        if (typeof n !== "object") {
            s(0, 6041, t);
        }
        const a = [];
        const i = [];
        const l = t.replace(u, (t, l, s)=>{
            if (!(hasOwnProperty.call(n, l) || r == null || r.onMissingParameterError == null)) {
                r.onMissingParameterError(Object.keys(n), l);
            }
            const u = n[l];
            if (u != null && typeof u === "object") {
                a.push(u);
                i.push(l);
                return `${s}`;
            }
            if (u == null) {
                return "";
            }
            return String(u) + o("IntlPunctuation").dedupeStops(String(u), s);
        }).split("").map(o("IntlPunctuation").applyPhonologicalRules);
        if (l.length === 1) {
            return l[0];
        }
        const d = l[0] !== "" ? [
            l[0]
        ] : [];
        for(let m = 0; m < a.length; m++){
            d.push(a[m]);
            if (l[m + 1] !== "") {
                d.push(l[m + 1]);
            }
        }
        return d;
    }
    i.exports = d;
}, 34);