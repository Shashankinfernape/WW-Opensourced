__d("WAPromiseBackoffs", [
    "Promise",
    "err"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    function s(e, t) {
        if (e === 0) {
            return 0;
        }
        const n = g(t.algo);
        for(let r = 1; r < e; r++){
            n();
        }
        return d(t, n());
    }
    function u(e) {
        const t = e.relativeDelay;
        const n = t === void 0 ? false : t;
        let r = null;
        const o = g(e.algo);
        return function() {
            const t = r;
            if (t == null) {
                r = n ? Date.now() : 0;
                return 0;
            }
            let a = d(e, o());
            if (n) {
                const i = Date.now();
                const l = i - t;
                if (l > 0) {
                    a = Math.max(0, a - l);
                }
                r = i;
            }
            return a;
        };
    }
    function c(t) {
        const r = u(t);
        return function(o) {
            return new (e || (e = n("Promise")))(function(e) {
                const t = r();
                if (t > 0) {
                    setTimeout(e, t, o);
                } else {
                    e(o);
                }
            });
        };
    }
    function d({ jitter: r = 0.1, max: o, min: a }, t) {
        let i = t;
        if (o != null && i > o) {
            i = o;
        }
        if (a != null && i < a) {
            i = a;
        }
        if (r !== 0) {
            i = Math.ceil(i * (1 + r * Math.random()));
        }
        return i;
    }
    function m(e) {
        let t = e.second - e.first;
        let n = e.first - t;
        return function() {
            const e = t + n;
            n = t;
            t = e;
            return e;
        };
    }
    function p({ base: n = 2, first: r }) {
        return function() {
            const e = r;
            r *= n;
            return e;
        };
    }
    function _({ delay: t }) {
        return function() {
            return t;
        };
    }
    function f({ backoff: t, toMs: n }) {
        const r = g(t);
        return function() {
            return n(r());
        };
    }
    function g(e) {
        switch(e.type){
            case "fibonacci":
                return m(e);
            case "exponential":
                return p(e);
            case "constant":
                return _(e);
            case "adjust":
                return f(e);
            default:
                throw r("err")(`makeTimeFunc unrecognized backoff ${e.type}`);
        }
    }
    l.getDelay = s;
    l.createTimer = u;
    l.createPromiseTimer = c;
}, 98);