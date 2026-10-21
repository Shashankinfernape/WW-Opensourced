__d("useWAWebTransitionPresence", [
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const { useCallback: u, useEffect: c, useRef: d, useState: m } = s;
    function p(e) {
        const t = e.map((e)=>e.key);
        const n = m(function() {
            return {
                initialKeys: new Set(t),
                order: t,
                elements: new Map(e.map((e)=>[
                        e.key,
                        e.element
                    ])),
                presentKeys: t
            };
        });
        const r = n[0];
        const o = n[1];
        const a = d(new Map);
        c(function() {
            const t = new Map;
            for (const n of e){
                t.set(n.key, n.element);
            }
            a.current = t;
        }, [
            e
        ]);
        if (!f(t, r.presentKeys)) {
            o(function(n) {
                const r = _(n.order, t);
                const o = new Set(t);
                const i = new Set(n.initialKeys);
                for (const l of i){
                    if (!o.has(l)) {
                        i.delete(l);
                    }
                }
                const s = new Map(n.elements);
                for (const u of e){
                    s.set(u.key, u.element);
                }
                for (const c of r){
                    if (!o.has(c)) {
                        const m = a.current.get(c) ?? n.elements.get(c);
                        if (m != null) {
                            s.set(c, m);
                        }
                    }
                }
                for (const p of Array.from(s.keys())){
                    if (!r.includes(p)) {
                        s.delete(p);
                    }
                }
                return {
                    initialKeys: i,
                    order: r,
                    elements: s,
                    presentKeys: t
                };
            });
        }
        const i = u(function(e) {
            o(function(t) {
                if (!t.order.includes(e) || t.presentKeys.includes(e)) {
                    return t;
                }
                const n = new Map(t.elements);
                n.delete(e);
                return {
                    initialKeys: t.initialKeys,
                    order: t.order.filter((t)=>t !== e),
                    elements: n,
                    presentKeys: t.presentKeys
                };
            });
        }, []);
        const l = new Map(e.map((e)=>[
                e.key,
                e.element
            ]));
        const s = new Set(e.map((e)=>e.key));
        const p = [];
        for (const g of r.order){
            const y = l.get(g) ?? r.elements.get(g);
            if (y != null) {
                p.push({
                    key: g,
                    element: y,
                    isPresent: s.has(g)
                });
            }
        }
        return {
            initialKeys: r.initialKeys,
            items: p,
            notifyExited: i
        };
    }
    function _(e, t) {
        const n = new Set(t);
        const r = new Map;
        let o = [];
        for (const a of e){
            if (n.has(a)) {
                if (o.length > 0) {
                    r.set(a, o);
                    o = [];
                }
            } else {
                o.push(a);
            }
        }
        const i = [];
        for (const l of t){
            const s = r.get(l);
            if (s != null) {
                for (const u of s){
                    i.push(u);
                }
            }
            i.push(l);
        }
        for (const c of o){
            i.push(c);
        }
        if (f(e, i)) {
            return e;
        }
        return i;
    }
    function f(e, t) {
        if (e.length !== t.length) {
            return false;
        }
        for(let n = 0; n < e.length; n++){
            if (e[n] !== t[n]) {
                return false;
            }
        }
        return true;
    }
    l.default = p;
}, 98);