__d("WAWebCallRandomIdStore", [
    "WARandomHex"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = 64;
    const s = new Map;
    function u(e) {
        if (e == null || e === "") {
            return null;
        }
        const t = s.get(e);
        if (t != null) {
            d(e, t);
            return t;
        }
        const n = o("WARandomHex").randomHex(16);
        s.set(e, n);
        m();
        return n;
    }
    function c(e) {
        if (e == null || e === "") {
            return null;
        }
        const t = s.get(e);
        if (t == null) {
            return null;
        }
        d(e, t);
        return t;
    }
    function d(e, t) {
        s.delete(e);
        s.set(e, t);
    }
    function m() {
        if (!(s.size <= e)) {
            const t = s.keys().next();
            if (!t.done) {
                s.delete(t.value);
            }
        }
    }
    let p = null;
    function _(e) {
        p = e;
    }
    function f() {
        return p;
    }
    function g() {
        p = null;
    }
    function h() {
        s.clear();
        p = null;
    }
    function y() {
        return s.size;
    }
    l.getOrCreateCallRandomId = u;
    l.getCallRandomIdForCall = c;
    l.setCurrentCallRandomId = _;
    l.getCurrentCallRandomId = f;
    l.clearCurrentCallRandomId = g;
    l.resetCallRandomIds = h;
    l.getRetainedCallCountForTest = y;
}, 98);