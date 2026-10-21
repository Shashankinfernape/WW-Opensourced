__d("WAUnicodeUtils", [
    "WAStringz"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = 5000;
    const s = 0.5;
    function u(e, t) {
        return d(e || "", 0, t);
    }
    function c(e) {
        return o("WAStringz").length(e || "");
    }
    function d(t, n, r) {
        if (t == null || t === "") {
            return "";
        }
        const a = n || 0;
        const i = r ?? 1 / 0;
        if (a === 0 && i === 1 / 0) {
            return t;
        }
        if (t.length >= e && i / t.length <= s) {
            return _(t, a, i);
        }
        return o("WAStringz").substring(t, a, i);
    }
    function m(t, n, r) {
        const a = t || "";
        const i = n || 0;
        const l = r ?? 1 / 0;
        if (a.length >= e && l / a.length <= s) {
            return f(a, i, l);
        }
        return o("WAStringz").toArray(a).slice(i, l);
    }
    function p(e, t) {
        if (t == null || encodeURI(e).length <= t) {
            return e;
        }
        let n = 0;
        const r = m(e);
        for(let o = r.length, a = 0; a < o; a++){
            const i = r[a];
            const l = encodeURI(i).length;
            if (n + l > t) {
                return d(e, 0, a);
            }
            n += l;
        }
        return e;
    }
    function _(e, t, n) {
        const r = new RegExp(o("WAStringz").astralRange);
        let a = "";
        let i;
        let l = 0;
        do {
            i = r.exec(e);
            if (i) {
                a += i[0];
            }
            l++;
        }while (i && l < n)
        return a;
    }
    function f(e, t, n) {
        const r = new RegExp(o("WAStringz").astralRange);
        const a = [];
        let i;
        do {
            i = r.exec(e);
            if (i) {
                a.push(i[0]);
            }
        }while (i && a.length < n)
        return a;
    }
    l.firstNCodepoints = u;
    l.numCodepoints = c;
    l.substring = d;
    l.toArray = m;
    l.firstNEncodedBytes = p;
}, 98);