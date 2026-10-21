__d("WASmaxMixins", [
    "WAArrayBufferUtils",
    "WAWapJid"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = "smax$any";
    function s(e, t) {
        c(e, t);
        d(e, t);
        if (t.content instanceof Uint8Array) {
            p(e, t.content);
        } else if (t.content != null) {
            _(e, t.content);
        }
        return e;
    }
    function u(e, t, n, r) {
        if (n != null) {
            return e(t, n, r);
        }
        return t;
    }
    function c({ tag: r }, n) {
        const o = n.tag;
        if (o !== e && r !== o) {
            const a = new Error(`tag mismatch: ${r} != ${o}`);
            a.stack;
            throw a;
        }
    }
    function d({ attrs: n }, t) {
        const r = t.attrs;
        Object.keys(r).forEach((e)=>{
            const t = r[e];
            const o = n[e];
            if (t != null && o != null) {
                if (m(t, o)) {
                    return;
                }
                const a = new Error(`conflict for key: ${e}`);
                a.stack;
                throw a;
            }
            n[e] = t;
        });
    }
    function m(e, t) {
        if (typeof e === "string" && typeof t === "string") {
            return e === t;
        }
        if (e instanceof o("WAWapJid").WapJid && t instanceof o("WAWapJid").WapJid) {
            return e.toString() === t.toString();
        }
        return false;
    }
    function p(e, t) {
        const n = e.content;
        if (n instanceof Uint8Array) {
            if (!o("WAArrayBufferUtils").uint8ArraysEqualUNSAFE(n, t)) {
                const r = new Error("elementValue mismatch: bytes dose not equal");
                r.stack;
                throw r;
            }
            return;
        }
        if (n != null) {
            const a = new Error("elementValue mismatch: destination has children");
            a.stack;
            throw a;
        }
        e.content = t;
    }
    function _(e, t) {
        const n = e.content;
        if (n instanceof Uint8Array) {
            const r = new Error("children mismatch: destination has element value");
            r.stack;
            throw r;
        }
        if (n == null || n.length === 0) {
            e.content = t;
            return;
        }
        if (!f(n, t)) {
            const o = new Error("children mismatch: child counts are not compatible");
            o.stack;
            throw o;
        }
        const a = [];
        const i = Array.from(n);
        t.forEach((e)=>{
            const t = i.findIndex((t)=>t.tag === e.tag);
            if (t === -1) {
                a.push(e);
            } else {
                const n = i.splice(t, 1);
                const r = s(n[0], e);
                a.push(r);
            }
        });
        i.forEach((e)=>a.push(e));
        e.content = a;
    }
    function f(e, t) {
        const n = g(t);
        const r = g(e);
        for(let o = Object.keys(n), a = 0; a < o.length; a++){
            const i = o[a];
            const l = n[i];
            const s = r[i];
            if (l != null && s != null && l !== s) {
                return false;
            }
        }
        return true;
    }
    function g(e) {
        return e.reduce((e, { tag: n })=>{
            const r = e[n];
            e[n] = r == null ? 1 : r + 1;
            return e;
        }, {});
    }
    l.mergeStanzas = s;
    l.optionalMerge = u;
}, 98);