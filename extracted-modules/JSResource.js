__d("JSResource", [
    "JSResourceReferenceImpl"
], function(t, n, r, o, a, i, l) {
    const e = {};
    function s(t, n) {
        e[t] = n;
    }
    function u(t) {
        return e[t];
    }
    function c(e) {
        const t = e;
        const n = u(t);
        if (n) {
            return n;
        }
        const o = new (r("JSResourceReferenceImpl"))(t);
        s(t, o);
        return o;
    }
    c.loadAll = r("JSResourceReferenceImpl").loadAll;
    l.default = c;
}, 98);