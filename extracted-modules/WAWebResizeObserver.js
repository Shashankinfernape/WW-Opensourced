__d("WAWebResizeObserver", [
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    function s() {
        if (e == null) {
            e = new WeakMap;
        }
        return e;
    }
    let u;
    function c() {
        if (u == null) {
            u = new ResizeObserver(function(e) {
                for (const t of e){
                    const n = s().get(t.target);
                    const r = t.contentRect;
                    const { bottom: o, height: a, left: i, right: l, top: u, width: c, x: d, y: m } = r;
                    if (n != null) {
                        n({
                            x: d,
                            y: m,
                            width: c,
                            height: a,
                            top: u,
                            left: i,
                            bottom: o,
                            right: l
                        });
                    }
                }
            });
        }
        return u;
    }
    function d(e, t) {
        const n = c();
        const o = s();
        if (o.has(e)) {
            throw r("err")("You can't observe the same element twice.");
        }
        o.set(e, t);
        n.observe(e);
        return function() {
            n.unobserve(e);
            o.delete(e);
        };
    }
    l.observe = d;
}, 98);