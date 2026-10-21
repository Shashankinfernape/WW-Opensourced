__d("WAWebUseArrowKeyNavigation", [
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const { useCallback, useEffect, useRef } = s;
    function m(e) {
        const t = o("react-compiler-runtime").c(2);
        const e_prefix = e.prefix;
        let r;
        if (t[0] !== e_prefix) {
            r = function() {
                const e = Array.from(document.querySelectorAll(`[data-${e_prefix}-item]`));
                e.forEach((e, t)=>{
                    e.setAttribute(`data-${e_prefix}-item-index`, t.toString());
                });
            };
            t[0] = e_prefix;
            t[1] = r;
        } else {
            r = t[1];
        }
        useEffect(r, undefined);
    }
    function useP(e) {
        const t = o("react-compiler-runtime").c(20);
        const e_prefix = e.prefix;
        const rRef = useRef(null);
        const aRef = useRef(0);
        let i;
        if (t[0] !== e_prefix) {
            i = {
                prefix: e_prefix
            };
            t[0] = e_prefix;
            t[1] = i;
        } else {
            i = t[1];
        }
        m(i);
        let l;
        if (t[2] !== e_prefix) {
            l = function() {
                const rRef_current = rRef.current;
                if (rRef_current == null) {
                    return [];
                }
                return Array.from(rRef_current.querySelectorAll(`[data-${e_prefix}-item]`));
            };
            t[2] = e_prefix;
            t[3] = l;
        } else {
            l = t[3];
        }
        const s = l;
        let u;
        if (t[4] !== e_prefix) {
            u = function() {
                const t = rRef.current?.querySelector(`[data-${e_prefix}-item-selected="true"]`);
                if (t) {
                    const o = parseInt(t.getAttribute(`data-${e_prefix}-item-index`), 10);
                    aRef.current = o;
                    t.focus();
                }
            };
            t[4] = e_prefix;
            t[5] = u;
        } else {
            u = t[5];
        }
        const focusSelectedItem = u;
        let p;
        let focusItemIndex;
        if (t[6] !== s) {
            p = function(t) {
                const e = {
                    next: 1,
                    prev: -1
                };
                const n = s();
                const r = aRef.current + e[t];
                if (!(r < 0 || r >= n.length)) {
                    focusItemIndex(r);
                }
            };
            focusItemIndex = function(t) {
                const e = s();
                const n = e[t];
                n?.focus();
                aRef.current = t;
            };
            t[6] = s;
            t[7] = p;
            t[8] = focusItemIndex;
        } else {
            p = t[7];
            focusItemIndex = t[8];
        }
        let f;
        if (t[9] !== focusSelectedItem) {
            f = function(t) {
                const e = t.target === rRef.current;
                if (e) {
                    focusSelectedItem();
                }
            };
            t[9] = focusSelectedItem;
            t[10] = f;
        } else {
            f = t[10];
        }
        const g = f;
        let up;
        let down;
        if (t[11] !== p) {
            up = function() {
                return p("prev");
            };
            down = function() {
                return p("next");
            };
            t[11] = p;
            t[12] = up;
            t[13] = down;
        } else {
            up = t[12];
            down = t[13];
        }
        let C;
        if (t[14] !== focusItemIndex || t[15] !== focusSelectedItem || t[16] !== g || t[17] !== up || t[18] !== down) {
            C = {
                ref: rRef,
                onFocus: g,
                up,
                down,
                focusItemIndex,
                focusSelectedItem
            };
            t[14] = focusItemIndex;
            t[15] = focusSelectedItem;
            t[16] = g;
            t[17] = up;
            t[18] = down;
            t[19] = C;
        } else {
            C = t[19];
        }
        return C;
    }
    l.useArrowKeyNavigation = useP;
}, 98);