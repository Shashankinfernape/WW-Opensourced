__d("WAWebStructuredClone", [
    "Promise",
    "err"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = Reflect.get(globalThis, "structuredClone");
    function u(e) {
        if (s != null) {
            return s(e);
        }
        return d(e, new Map);
    }
    const c = u;
    function d(t, r) {
        if (typeof t === "function" || typeof t === "symbol") {
            throw p(`WAWebStructuredClone: cannot clone a ${typeof t}`);
        }
        if (t == null || typeof t !== "object") {
            return t;
        }
        if (r.has(t)) {
            return r.get(t);
        }
        if (t instanceof (e || (e = n("Promise"))) || t instanceof WeakMap || t instanceof WeakSet) {
            throw p("WAWebStructuredClone: cannot clone a non-serializable object");
        }
        if (Array.isArray(t)) {
            const o = [];
            o.length = t.length;
            r.set(t, o);
            for (const [i, l] of Object.entries(t)){
                Object.defineProperty(o, i, {
                    value: d(l, r),
                    writable: true,
                    enumerable: true,
                    configurable: true
                });
            }
            return o;
        }
        if (t instanceof Date) {
            return m(r, t, new Date(t.getTime()));
        }
        if (t instanceof RegExp) {
            return m(r, t, new RegExp(t.source, t.flags));
        }
        if (t instanceof ArrayBuffer) {
            return _(t, r);
        }
        if (t instanceof DataView) {
            return m(r, t, new DataView(_(t.buffer, r), t.byteOffset, t.byteLength));
        }
        const s = f(t, r);
        if (s != null) {
            return m(r, t, s);
        }
        if (ArrayBuffer.isView(t)) {
            throw p("WAWebStructuredClone: cannot clone this binary view type");
        }
        if (t instanceof Map) {
            const u = new Map;
            r.set(t, u);
            for (const [g, b] of t){
                u.set(d(g, r), d(b, r));
            }
            return u;
        }
        if (t instanceof Set) {
            const v = new Set;
            r.set(t, v);
            for (const S of t){
                v.add(d(S, r));
            }
            return v;
        }
        if (t instanceof Error) {
            return C(t, r);
        }
        const R = h(t);
        if (R != null) {
            return m(r, t, R);
        }
        const L = y(t);
        if (L != null) {
            return m(r, t, L);
        }
        if (({}).toString.call(t) !== "[object Object]") {
            throw p("WAWebStructuredClone: cannot clone a non-serializable object");
        }
        const E = {};
        r.set(t, E);
        for (const [I, T] of Object.entries(t)){
            Object.defineProperty(E, I, {
                value: d(T, r),
                writable: true,
                enumerable: true,
                configurable: true
            });
        }
        return E;
    }
    function m(e, t, n) {
        e.set(t, n);
        return n;
    }
    function p(e) {
        const t = r("err")(e);
        t.name = "DataCloneError";
        return t;
    }
    function _(e, t) {
        const n = t.get(e);
        if (n instanceof ArrayBuffer) {
            return n;
        }
        const r = e.slice(0);
        t.set(e, r);
        return r;
    }
    function f(e, t) {
        if (e instanceof Uint8Array) {
            return g(Uint8Array, e, t);
        }
        if (e instanceof Uint8ClampedArray) {
            return g(Uint8ClampedArray, e, t);
        }
        if (e instanceof Int8Array) {
            return g(Int8Array, e, t);
        }
        if (e instanceof Int16Array) {
            return g(Int16Array, e, t);
        }
        if (e instanceof Uint16Array) {
            return g(Uint16Array, e, t);
        }
        if (e instanceof Int32Array) {
            return g(Int32Array, e, t);
        }
        if (e instanceof Uint32Array) {
            return g(Uint32Array, e, t);
        }
        if (e instanceof Float32Array) {
            return g(Float32Array, e, t);
        }
        if (e instanceof Float64Array) {
            return g(Float64Array, e, t);
        }
        return null;
    }
    function g(e, t, n) {
        return new e(_(t.buffer, n), t.byteOffset, t.length);
    }
    function h(e) {
        if (e instanceof Boolean || e instanceof Number || e instanceof String) {
            return Object(e.valueOf());
        }
        return null;
    }
    function y(e) {
        if (typeof File === "function" && e instanceof File) {
            return new File([
                e
            ], e.name, {
                type: e.type,
                lastModified: e.lastModified
            });
        }
        if (typeof Blob === "function" && e instanceof Blob) {
            return new Blob([
                e
            ], {
                type: e.type
            });
        }
        if (typeof ImageData === "function" && e instanceof ImageData) {
            const t = new Uint8ClampedArray(e.data);
            if (e.colorSpace != null) {
                return new ImageData(t, e.width, e.height, {
                    colorSpace: e.colorSpace
                });
            }
            return new ImageData(t, e.width, e.height);
        }
        return null;
    }
    function C(e, t) {
        const n = b(e.name, e.message);
        t.set(e, n);
        if (e.stack != null) {
            n.stack = e.stack;
        }
        if (Object.hasOwn(e, "cause")) {
            n.cause = d(e.cause, t);
        }
        return n;
    }
    function b(e, t) {
        switch(e){
            case "EvalError":
                return new EvalError(t);
            case "RangeError":
                return new RangeError(t);
            case "ReferenceError":
                return new ReferenceError(t);
            case "SyntaxError":
                return new SyntaxError(t);
            case "TypeError":
                return new TypeError(t);
            case "URIError":
                return new URIError(t);
            default:
                return new Error(t);
        }
    }
    l.default = c;
}, 98);