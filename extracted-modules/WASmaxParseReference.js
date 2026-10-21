__d("WASmaxParseReference", [
    "WAHasProperty",
    "WAResultOrError",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, r, o) {
        const a = m(t, n);
        if (!a.success) {
            return _(a);
        }
        const i = e(a.value, n[n.length - 1], r, o);
        if (i.success) {
            return i;
        }
        return _(i);
    }
    function s(t, n, r, a, i) {
        if (p(n, r)) {
            return e(t, n, r, a, i);
        }
        return o("WASmaxParseUtils").voidSuccess;
    }
    function u(t, n) {
        return e(o("WASmaxParseUtils").attrString, t, n);
    }
    function c(e, t) {
        if (p(e, t)) {
            return u(e, t);
        }
        return o("WASmaxParseUtils").voidSuccess;
    }
    function d(e, t) {
        const n = m(e, t);
        if (!n.success) {
            return _(n);
        }
        const r = o("WASmaxParseUtils").contentString(n.value);
        if (r.success) {
            return r;
        }
        return _(r);
    }
    function m(e, t) {
        for(var n = t.length, r = e, a = 0; a < n - 1; a++){
            const i = t[a];
            const l = o("WASmaxParseUtils").flattenedChildWithTag(r, i);
            if (!l.success) {
                return l;
            }
            r = l.value;
        }
        return o("WAResultOrError").makeResult(r);
    }
    function p(e, t) {
        const n = m(e, t);
        return n.success && r("WAHasProperty")(n.value.attrs, t[t.length - 1]);
    }
    function _(e) {
        return o("WAResultOrError").makeError(`in the reference, ${e.error}`);
    }
    l.attrFromReference = e;
    l.optionalAttrFromReference = s;
    l.attrStringFromReference = u;
    l.optionalAttrStringFromReference = c;
    l.contentStringFromReference = d;
}, 98);