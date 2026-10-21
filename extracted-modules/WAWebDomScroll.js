__d("WAWebDomScroll", [
    "Promise",
    "WATypeUtils",
    "WAWebVelocityAnimate",
    "err",
    "getScrollParent"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = new WeakMap;
    function u(e, node, n) {
        const r = {
            node
        };
        s.set(e, r);
        return n.finally(()=>{
            if (s.get(e) === r) {
                s.delete(e);
            }
        });
    }
    function c(e) {
        const t = s.get(e);
        if (t != null) {
            s.delete(e);
            r("WAWebVelocityAnimate")(t.node, "stop");
        }
    }
    function d(e, t = true, n) {
        if (e.scrollIntoViewIfNeeded != null && o("WATypeUtils").isFunction(e.scrollIntoViewIfNeeded)) {
            return e.scrollIntoViewIfNeeded(t);
        }
        const r = h(n || e.parentNode);
        const a = window.getComputedStyle(r, null);
        const i = parseInt(a.getPropertyValue("border-top-width"), 10);
        const l = e.offsetTop - r.offsetTop < r.scrollTop;
        const s = e.offsetTop - r.offsetTop + e.clientHeight - i > r.scrollTop + r.clientHeight;
        const u = l && !s;
        if ((l || s) && t) {
            r.scrollTop = e.offsetTop - r.offsetTop - r.clientHeight / 2 - i + e.clientHeight / 2;
        }
        if ((l || s) && !t) {
            e.scrollIntoView(u);
        }
        return !(l || s);
    }
    function m(e, t = true, n) {
        const r = h(n || e.parentNode);
        const o = window.getComputedStyle(r, null);
        const a = parseInt(o.getPropertyValue("border-top-width"), 10);
        const i = e.offsetTop - r.offsetTop < r.scrollTop;
        const l = e.offsetTop - r.offsetTop + e.clientHeight - a > r.scrollTop + r.clientHeight;
        const s = i && !l;
        if (t) {
            r.scrollTop = e.offsetTop - r.offsetTop - r.clientHeight / 2 - a + e.clientHeight / 2;
        } else {
            e.scrollIntoView(s);
        }
        return !(i || l);
    }
    function p(e, t) {
        const n = e.getBoundingClientRect();
        return n.top >= 0 && n.left >= 0 && n.bottom <= (window.innerHeight || document.documentElement.clientHeight) && n.right <= (window.innerWidth || document.documentElement.clientWidth) && !_(n, t);
    }
    function _(e, t) {
        const n = g(t);
        return n > 0 && e.top < t.getBoundingClientRect().top + n;
    }
    function f(t, o, a = {}) {
        const i = h(o || t.offsetParent);
        const l = r("getScrollParent")(t, false);
        const s = i === l;
        const d = a.pos || "center";
        const m = a.duration != null && a.duration !== 0 ? a.duration : 1000;
        const _ = a.offset || 0;
        const f = s ? t.offsetTop : i.offsetTop + t.offsetTop;
        if (a.scrollIfNeeded === true && p(t, l)) {
            return (e || (e = n("Promise"))).resolve();
        }
        const y = !!a.animate;
        switch(d){
            case "top":
                l.scrollTop = f + _ - g(l);
                return (e || (e = n("Promise"))).resolve();
            case "bottom":
                l.scrollTop = f + t.clientHeight - l.clientHeight;
                return (e || (e = n("Promise"))).resolve();
            case "center":
                if (y) {
                    const C = s ? t : i;
                    c(l);
                    r("WAWebVelocityAnimate")(C, "stop");
                    r("WAWebVelocityAnimate")(l, "stop");
                    let offset = (t.clientHeight - l.clientHeight - g(l)) / 2;
                    if (!s) {
                        offset += t.offsetTop;
                    }
                    return u(l, C, r("WAWebVelocityAnimate")(C, "scroll", {
                        duration: m,
                        container: l,
                        offset,
                        easing: a.easing
                    }));
                }
                l.scrollTop = f + t.clientHeight / 2 - (l.clientHeight + g(l)) / 2;
                return (e || (e = n("Promise"))).resolve();
            case "offset":
                if (y) {
                    c(l);
                    r("WAWebVelocityAnimate")(t, "stop");
                    r("WAWebVelocityAnimate")(l, "stop");
                    return u(l, t, r("WAWebVelocityAnimate")(t, "scroll", {
                        duration: m,
                        container: l,
                        offset: -_,
                        easing: a.easing
                    }));
                }
                l.scrollTop = f - _;
                return (e || (e = n("Promise"))).resolve();
        }
        return (e || (e = n("Promise"))).resolve();
    }
    function g(e) {
        const t = parseFloat(window.getComputedStyle(e).getPropertyValue("scroll-padding-top"));
        if (Number.isNaN(t)) {
            return 0;
        }
        return t;
    }
    function h(e) {
        if (e != null && e.nodeType === Node.ELEMENT_NODE) {
            return e;
        }
        throw r("err")("utils:DOM parent not defined or is not a valid HTMLElement");
    }
    l.stopAnimatedScroll = c;
    l.scrollIntoViewIfNeeded = d;
    l.scrollIntoView = m;
    l.scrollAt = f;
    l.getScrollPaddingTop = g;
}, 98);