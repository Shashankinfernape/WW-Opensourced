__d("IdleCallbackImplementation", [
    "performanceNow",
    "requestAnimationFramePolyfill"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = [];
    let u = 0;
    let c = 0;
    let d = -1;
    let m = false;
    const p = 1000 / 60;
    const _ = 2;
    function f(e) {
        return e;
    }
    function g(e) {
        return e;
    }
    function h(e, n) {
        const r = c++;
        s[r] = e;
        C();
        if (n != null && n.timeout > 0) {
            const o = r;
            t.setTimeout(function() {
                return E(o);
            }, n.timeout);
        }
        return r;
    }
    function y(e) {
        s[e] = null;
    }
    function C() {
        if (!m) {
            m = true;
            r("requestAnimationFramePolyfill")(function(t) {
                m = false;
                v((e || (e = r("performanceNow")))() - t);
            });
        }
    }
    function b(e) {
        const t = p - _;
        if (e < t) {
            return t - e;
        }
        const n = e % p;
        if (n > t || n < _) {
            return 0;
        }
        return t - n;
    }
    function v(t) {
        const n = (e || (e = r("performanceNow")))();
        if (n > d) {
            const o = b(t);
            if (o > 0) {
                const a = n + o;
                L(a);
                d = a;
            }
        }
        if (S()) {
            C();
        }
    }
    function S() {
        return u < s.length;
    }
    function R() {
        while(S()){
            const e = s[u];
            u++;
            if (e) {
                return e;
            }
        }
        return null;
    }
    function L(t) {
        while((e || (e = r("performanceNow")))() < t){
            const n = R();
            if (n == null) {
                break;
            }
            n(new k(t));
        }
    }
    function E(e) {
        const n = s[e];
        if (n) {
            y(e);
            n(new k(null));
        }
    }
    class k {
        constructor(e){
            this.didTimeout = e == null;
            this.$1 = e;
        }
        timeRemaining() {
            const t = this.$1;
            if (t != null) {
                const n = (e || (e = r("performanceNow")))();
                if (n < t) {
                    return t - n;
                }
            }
            return 0;
        }
    }
    l.requestIdleCallback = h;
    l.cancelIdleCallback = y;
}, 98);