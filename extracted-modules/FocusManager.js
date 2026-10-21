__d("FocusManager", [
    "getTabbableNodes"
], function(t, n, r, o, a, i, l) {
    let e = false;
    let s = false;
    let u = false;
    const c = 500;
    function d() {
        try {
            const e = document.createElement("div");
            e.addEventListener("focus", function(e) {
                e.preventDefault();
                e.stopPropagation();
            }, true);
            e.focus(Object.defineProperty({}, "preventScroll", {
                get: function() {
                    s = true;
                }
            }));
        } catch (e) {}
    }
    function m(e) {
        for(var t = e.parentElement, n = [], r = document.scrollingElement || document.documentElement; t && t !== r;){
            const o = t;
            const { offsetHeight, offsetWidth } = o;
            if (offsetHeight < t.scrollHeight || offsetWidth < t.scrollWidth) {
                n.push([
                    t,
                    t.scrollTop,
                    t.scrollLeft
                ]);
            }
            t = t.parentElement;
        }
        if (r) {
            n.push([
                r,
                r.scrollTop,
                r.scrollLeft
            ]);
        }
        return n;
    }
    function p(e) {
        for (const [r, o, a] of e){
            r.scrollTop = o;
            r.scrollLeft = a;
        }
    }
    function _(e, t) {
        for(let n = Array.isArray(e) ? e : [
            e
        ], r = 0; r < n.length; r++){
            const o = t.DO_NOT_USE_queryAllNodes(n[r]);
            if (o) {
                return o;
            }
        }
        return null;
    }
    function f(e, t) {
        for(let n = Array.isArray(e) ? e : [
            e
        ], r = 0; r < n.length; r++){
            const o = t.DO_NOT_USE_queryFirstNode(n[r]);
            if (o) {
                return o;
            }
        }
        return null;
    }
    function g(e, t, n) {
        const r = n || {};
        const { focusWithAutoFocus, focusWithoutUserIntent, preventScroll } = r;
        const l = f(e, t);
        if (l != null) {
            C(l, {
                preventScroll,
                focusWithoutUserIntent,
                focusWithAutoFocus
            });
        }
    }
    function h() {
        return e;
    }
    function y(e) {
        return e._focusWithAutoFocus === true;
    }
    function C(t, n) {
        const r = n || {};
        const { focusWithAutoFocus, focusWithoutUserIntent, preventScroll } = r;
        if (t !== null) {
            if (!u) {
                u = true;
                d();
            }
            const l = t._tabIndexState;
            if (l && l.canTab === false) {
                return;
            }
            const _ = l ? l.value : t.tabIndex;
            t.tabIndex = -1;
            const f = e;
            const g = preventScroll || false;
            if (focusWithAutoFocus === true) {
                t._focusWithAutoFocus = true;
                window.setTimeout(function() {
                    t._focusWithAutoFocus = false;
                }, c);
            }
            try {
                e = focusWithoutUserIntent || false;
                const h = t.__lexicalEditor;
                if (h !== undefined) {
                    h.focus();
                } else if (!g) {
                    E(t);
                } else if (s) {
                    E(t, {
                        preventScroll: true
                    });
                } else {
                    const y = m(t);
                    E(t);
                    p(y);
                }
            } catch (e) {} finally{
                e = f;
            }
            t.tabIndex = _;
        }
    }
    function b(e, t, n) {
        const o = r("getTabbableNodes")(e, t);
        const a = o[0];
        const i = o[2];
        const l = o[3];
        const s = o[4];
        if (s !== null && s !== i && a) {
            C(a[l + 1], {
                preventScroll: n
            });
        }
    }
    function v(e, t, n) {
        const o = r("getTabbableNodes")(e, t);
        const a = o[0];
        const i = o[1];
        const l = o[3];
        const s = o[4];
        if (s !== null && s !== i && a) {
            C(a[l - 1], {
                preventScroll: n
            });
        }
    }
    function S(e, t, n, o, a) {
        const i = r("getTabbableNodes")(e, t);
        const l = i[0];
        const s = i[1];
        const u = i[2];
        const c = i[3];
        const d = i[4];
        if (!(d === null || l === null)) {
            if (d === u) {
                if (a != null) {
                    a();
                } else if (o === true) {
                    C(s);
                    n.preventDefault();
                    n.stopPropagation();
                }
            } else {
                C(l[c + 1]);
                n.preventDefault();
                n.stopPropagation();
            }
        }
    }
    function R(e, t, n, o, a) {
        const i = r("getTabbableNodes")(e, t);
        const l = i[0];
        const s = i[1];
        const u = i[2];
        const c = i[3];
        const d = i[4];
        if (!(d === null || l === null)) {
            if (d === s) {
                if (a != null) {
                    a();
                } else if (o === true) {
                    C(u);
                    n.preventDefault();
                    n.stopPropagation();
                }
            } else {
                C(l[c - 1]);
                n.preventDefault();
                n.stopPropagation();
            }
        }
    }
    function L(e, t) {
        HTMLElement.prototype.focus.call(e, t);
    }
    var E = (t, n)=>{
        if ("focus" in t) {
            t.focus(n);
        } else {
            L(t, n);
        }
    };
    l.getAllNodesFromOneOrManyQueries = _;
    l.getFirstNodeFromOneOrManyQueries = f;
    l.focusFirst = g;
    l.isFocusingWithoutUserIntent = h;
    l.wasElementAutoFocused = y;
    l.focusElement = C;
    l.focusNext = b;
    l.focusPrevious = v;
    l.focusNextContained = S;
    l.focusPreviousContained = R;
}, 98);