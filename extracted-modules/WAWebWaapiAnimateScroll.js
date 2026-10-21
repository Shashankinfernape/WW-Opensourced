__d("WAWebWaapiAnimateScroll", [
    "Promise"
], function(t, n, r, o, a, i) {
    let e;
    const l = new WeakMap;
    function s({ axis: t, container: n, node: r, offset: o }) {
        const a = n.getBoundingClientRect();
        const i = r.getBoundingClientRect();
        if (t === "x") {
            return n.scrollLeft + (i.left - a.left) + o;
        }
        return n.scrollTop + (i.top - a.top) + o;
    }
    function u(t, r, o, a, i, l) {
        d(r);
        const s = o === "x" ? r.scrollLeft : r.scrollTop;
        const u = a - s;
        if (i <= 0 || u === 0) {
            m(r, o, a);
            return (e || (e = n("Promise"))).resolve();
        }
        return new (e || (e = n("Promise")))(function(e) {
            let n = null;
            let a = false;
            const c = function() {
                a = true;
                _(t, c);
                _(r, c);
                e();
            };
            p(t, c);
            if (r !== t) {
                p(r, c);
            }
            const d = function(f) {
                if (!a) {
                    n = n ?? f;
                    const p = Math.min((f - n) / i, 1);
                    m(r, o, s + u * l(p));
                    if (p < 1) {
                        window.requestAnimationFrame(d);
                    } else {
                        _(t, c);
                        _(r, c);
                        e();
                    }
                }
            };
            window.requestAnimationFrame(d);
        });
    }
    function c(t, r, o, a) {
        if (r <= 0 && o <= 0) {
            a();
            return (e || (e = n("Promise"))).resolve();
        }
        return new (e || (e = n("Promise")))(function(e) {
            let n = null;
            let i = false;
            const l = function() {
                i = true;
                _(t, l);
                e();
            };
            p(t, l);
            const s = function(c) {
                if (!i) {
                    n = n ?? c;
                    const u = c - n - o;
                    if (u >= 0) {
                        a();
                    }
                    if (u < r) {
                        window.requestAnimationFrame(s);
                    } else {
                        _(t, l);
                        e();
                    }
                }
            };
            window.requestAnimationFrame(s);
        });
    }
    function d(e) {
        const t = l.get(e);
        if (t != null) {
            Array.from(t).forEach((e)=>e());
        }
    }
    function m(e, t, n) {
        if (t === "x") {
            e.scrollLeft = n;
        } else {
            e.scrollTop = n;
        }
    }
    function p(e, t) {
        const r = l.get(e) ?? new Set;
        r.add(t);
        l.set(e, r);
    }
    function _(e, t) {
        const n = l.get(e);
        if (n != null) {
            n.delete(t);
            if (n.size === 0) {
                l.delete(e);
            }
        }
    }
    i.computeScrollTarget = s;
    i.tweenScroll = u;
    i.runProgressTween = c;
    i.cancelScrollTweens = d;
}, 66);