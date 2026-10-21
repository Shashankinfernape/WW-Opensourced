__d("WAWebUseCartProductQuantity", [
    "WAWebCartCollection",
    "react",
    "react-compiler-runtime",
    "useWAWebListener"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const { useEffect, useMemo, useState } = s;
    const m = (t)=>{
        const r = t.catalogWid?.toString() ?? null;
        if (r) {
            return o("WAWebCartCollection").CartCollection.findCart(r);
        }
        return null;
    };
    const p = (t, n)=>{
        const o = (n == null ? undefined : n.cartItemCollection.get(t)) ?? null;
        return o?.get("quantity") ?? 0;
    };
    const _ = (t, n)=>{
        const r = new Set(t?.variantInfo?.availability?.listing.map(function(e) {
            return e.product_id;
        }));
        let o = 0;
        if (n != null) {
            n.cartItemCollection.forEach((e)=>{
                if (r != null && r.has(e.id)) {
                    o += e.quantity;
                }
            });
        }
        return o;
    };
    function useF(e) {
        const t = o("react-compiler-runtime").c(12);
        let n;
        if (t[0] !== e) {
            n = m(e);
            t[0] = e;
            t[1] = n;
        } else {
            n = t[1];
        }
        const r = n;
        let a;
        if (t[2] !== r || t[3] !== e.id) {
            a = p(e.id.toString(), r);
            t[2] = r;
            t[3] = e.id;
            t[4] = a;
        } else {
            a = t[4];
        }
        const i = useState(a);
        const l = i[0];
        const s = i[1];
        let c;
        let _;
        if (t[5] !== r || t[6] !== e.id) {
            c = function() {
                s(p(e.id.toString(), r));
            };
            _ = [
                e.id,
                r
            ];
            t[5] = r;
            t[6] = e.id;
            t[7] = c;
            t[8] = _;
        } else {
            c = t[7];
            _ = t[8];
        }
        useEffect(c, _);
        let f;
        if (t[9] !== r || t[10] !== e.id) {
            f = function() {
                s(p(e.id.toString(), r));
            };
            t[9] = r;
            t[10] = e.id;
            t[11] = f;
        } else {
            f = t[11];
        }
        o("useWAWebListener").useListener(r, "change:cartItemCollection", f);
        return l;
    }
    function useG(e) {
        const t = o("react-compiler-runtime").c(12);
        let n;
        if (t[0] !== e) {
            n = m(e);
            t[0] = e;
            t[1] = n;
        } else {
            n = t[1];
        }
        const r = n;
        let a;
        if (t[2] !== r || t[3] !== e) {
            a = _(e, r);
            t[2] = r;
            t[3] = e;
            t[4] = a;
        } else {
            a = t[4];
        }
        const i = useState(a);
        const l = i[0];
        const s = i[1];
        let c;
        let p;
        if (t[5] !== r || t[6] !== e) {
            c = function() {
                s(_(e, r));
            };
            p = [
                e,
                r
            ];
            t[5] = r;
            t[6] = e;
            t[7] = c;
            t[8] = p;
        } else {
            c = t[7];
            p = t[8];
        }
        useEffect(c, p);
        let f;
        if (t[9] !== r || t[10] !== e) {
            f = function() {
                s(_(e, r));
            };
            t[9] = r;
            t[10] = e;
            t[11] = f;
        } else {
            f = t[11];
        }
        o("useWAWebListener").useListener(r, "change:cartItemCollection", f);
        return l;
    }
    l.useCartProductQuantity = useF;
    l.useCartProductQuantityMultiple = useG;
}, 98);