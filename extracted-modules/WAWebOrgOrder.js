__d("WAWebOrgOrder", [], function(t, n, r, o, a, i) {
    const e = new TextEncoder;
    function l(e, t) {
        const n = c(e.name, t.name);
        if (n !== 0) {
            return n;
        }
        return u(e.id, t.id);
    }
    function s(e) {
        return e.slice().sort(l);
    }
    function u(e, t) {
        const n = m(e);
        const r = m(t);
        if (n.length !== r.length) {
            return n.length - r.length;
        }
        return p(n, r);
    }
    function c(t, n) {
        const r = e.encode(d(t));
        const o = e.encode(d(n));
        for(let a = Math.min(r.length, o.length), i = 0; i < a; i++){
            if (r[i] !== o[i]) {
                return r[i] - o[i];
            }
        }
        return r.length - o.length;
    }
    function d(e) {
        return e.replace(/[A-Z]/g, (e)=>e.toLowerCase());
    }
    function m(e) {
        return e.replace(/^0+(?=\d)/, "");
    }
    function p(e, t) {
        if (e === t) {
            return 0;
        }
        if (e < t) {
            return -1;
        }
        return 1;
    }
    i.compareOrgsForDisplay = l;
    i.sortOrgsForDisplay = s;
    i.compareUnsignedDecimalStrings = u;
}, 66);