__d("WeakRefApiUtils", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = typeof window !== "undefined" ? window : self;
    const e_WeakMap = e.WeakMap;
    const s = L();
    const e_WeakSet = e.WeakSet;
    const c = E();
    const e_WeakRef = e.WeakRef;
    const m = k();
    const p = s && c && m;
    class _ {
        deref() {}
    }
    class f {
        add(t) {
            return this;
        }
        delete(t) {
            return false;
        }
        has(t) {
            return false;
        }
    }
    class g {
        delete(t) {
            return false;
        }
        get(t) {}
        has(t) {
            return false;
        }
        set(t, n) {
            return this;
        }
    }
    function h() {
        if (s) {
            return e_WeakMap;
        }
        return null;
    }
    function y() {
        if (s && e_WeakMap) {
            return e_WeakMap;
        }
        return g;
    }
    function C() {
        if (c) {
            return e_WeakSet;
        }
        return null;
    }
    function b() {
        if (c && e_WeakSet) {
            return e_WeakSet;
        }
        return f;
    }
    function v() {
        if (m) {
            return e_WeakRef;
        }
        return null;
    }
    function S() {
        if (m && e_WeakRef) {
            return e_WeakRef;
        }
        return _;
    }
    function R(e) {
        if (typeof e.replace === "function") {
            return e.replace(/\n/g, " ").replace(/\s+/g, " ");
        }
        return null;
    }
    function L() {
        return e_WeakMap != null && typeof e_WeakMap.toString === "function" && R(e_WeakMap.toString()) === "function WeakMap() { [native code] }";
    }
    function E() {
        return e_WeakSet != null && typeof e_WeakSet.toString === "function" && R(e_WeakSet.toString()) === "function WeakSet() { [native code] }";
    }
    function k() {
        return e_WeakRef != null && typeof e_WeakRef.toString === "function" && R(e_WeakRef.toString()) === "function WeakRef() { [native code] }";
    }
    function I() {
        return p;
    }
    i.WeakRefNoOp = _;
    i.WeakSetNoOp = f;
    i.WeakMapNoOp = g;
    i.getNativeWeakMap = h;
    i.getNativeWeakMapOrFallback = y;
    i.getNativeWeakSet = C;
    i.getNativeWeakSetOrFallback = b;
    i.getNativeWeakRef = v;
    i.getNativeWeakRefOrFallback = S;
    i.isWeakMapNative = L;
    i.isWeakSetNative = E;
    i.isWeakRefNative = k;
    i.isWeakAPINative = I;
}, 66);