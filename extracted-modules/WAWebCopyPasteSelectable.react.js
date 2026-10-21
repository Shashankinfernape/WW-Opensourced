__d("WAWebCopyPasteSelectable.react", [
    "WAWebClassnames",
    "WAWebCopyPasteCopyable.react",
    "WAWebDomElementMatches",
    "WAWebExternalLink.react",
    "WAWebURLUtils",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l) {
    const e = [
        "ref",
        "forwardedRef"
    ];
    const s = [
        "element",
        "ref"
    ];
    const u = [
        "className",
        "selectable",
        "selectAll"
    ];
    const c = [
        "appTextTemplate",
        "className",
        "plainText",
        "prePlainText",
        "selectable",
        "selectAll",
        "xstyle"
    ];
    let d;
    let m;
    const p = m || (m = o("react"));
    const _ = "selectable-text";
    const f = `${o("WAWebCopyPasteCopyable.react").COPYABLE_CSS_CLASS} ${_}`;
    const g = `.${_}`;
    const h = f;
    const y = "select-all";
    const C = `.${y}`;
    function b(e) {
        if (!e) {
            return false;
        }
        if (!(e instanceof HTMLElement)) {
            const t = e.parentElement;
            return b(t);
        }
        return r("WAWebDomElementMatches")(e, g) || r("WAWebDomElementMatches")(e, `${g} *`);
    }
    function v(e) {
        if (e) {
            if (e instanceof HTMLElement) {
                return r("WAWebDomElementMatches")(e, C);
            }
            return v(e.parentElement);
        }
        return false;
    }
    function S(e) {
        if (!(e instanceof HTMLElement)) {
            return [];
        }
        const t = b(e);
        if (t) {
            return Array.from(e.childNodes);
        }
        const n = Array.from(e.querySelectorAll(g));
        return n.filter((e)=>!n.some((t)=>t !== e && t.contains(e)));
    }
    function R(e) {
        if (e instanceof HTMLElement) {
            return !!e.querySelector(g);
        }
        return false;
    }
    function L(e) {
        if (e) {
            if (e instanceof HTMLElement) {
                return r("WAWebDomElementMatches")(e, `${C} *`);
            }
            return L(e.parentElement);
        }
        return false;
    }
    function E(e) {
        if (!L(e)) {
            return null;
        }
        let o;
        for(let t = e, n = 0, r = 5; t && n < r;){
            if (v(t) && t instanceof HTMLElement) {
                o = t;
                break;
            }
            t = t.parentElement;
            n++;
        }
        return o;
    }
    function k(e) {
        const t = o("react-compiler-runtime").c(2);
        let n;
        if (t[0] !== e) {
            n = e.selectable ? p.jsx(o("WAWebCopyPasteCopyable.react").CopyableCode, babelHelpers.extends({}, F(e))) : <code {...babelHelpers.extends({}, O(e))}/>;
            t[0] = e;
            t[1] = n;
        } else {
            n = t[1];
        }
        return n;
    }
    function I(e) {
        const t = o("react-compiler-runtime").c(2);
        let n;
        if (t[0] !== e) {
            n = e.selectable ? p.jsx(o("WAWebCopyPasteCopyable.react").CopyableDel, babelHelpers.extends({}, F(e))) : <del {...babelHelpers.extends({}, O(e))}/>;
            t[0] = e;
            t[1] = n;
        } else {
            n = t[1];
        }
        return n;
    }
    function T(e) {
        const t = o("react-compiler-runtime").c(2);
        let n;
        if (t[0] !== e) {
            n = e.selectable ? p.jsx(o("WAWebCopyPasteCopyable.react").CopyableDiv, babelHelpers.extends({}, F(e))) : <div {...babelHelpers.extends({}, O(e))}/>;
            t[0] = e;
            t[1] = n;
        } else {
            n = t[1];
        }
        return n;
    }
    function D(e) {
        const t = o("react-compiler-runtime").c(2);
        let n;
        if (t[0] !== e) {
            n = e.selectable ? p.jsx(o("WAWebCopyPasteCopyable.react").CopyableEm, babelHelpers.extends({}, F(e))) : <em {...babelHelpers.extends({}, O(e))}/>;
            t[0] = e;
            t[1] = n;
        } else {
            n = t[1];
        }
        return n;
    }
    function x(t) {
        const r = o("react-compiler-runtime").c(10);
        let a;
        let i;
        let l;
        let s;
        if (r[0] !== t) {
            s = Symbol.for("react.early_return_sentinel");
            e: {
                const { ref: u, forwardedRef: c } = t;
                const d = babelHelpers.objectWithoutPropertiesLoose(t, e);
                i = u;
                a = d;
                if (a.selectable) {
                    s = p.jsx(o("WAWebCopyPasteCopyable.react").CopyableImg, babelHelpers.extends({
                        forwardedRef: i
                    }, F(a)));
                    break e;
                }
                l = O(a);
            }
            r[0] = t;
            r[1] = a;
            r[2] = i;
            r[3] = l;
            r[4] = s;
        } else {
            a = r[1];
            i = r[2];
            l = r[3];
            s = r[4];
        }
        if (s !== Symbol.for("react.early_return_sentinel")) {
            return s;
        }
        const m = l;
        const _ = m.onClick ? 0 : -1;
        const f = a.alt ?? "";
        let g;
        if (r[5] !== m || r[6] !== i || r[7] !== _ || r[8] !== f) {
            g = <img {...babelHelpers.extends({
                ref: i
            }, m, {
                tabIndex: _,
                alt: f
            })}/>;
            r[5] = m;
            r[6] = i;
            r[7] = _;
            r[8] = f;
            r[9] = g;
        } else {
            g = r[9];
        }
        return g;
    }
    function $(e) {
        const t = o("react-compiler-runtime").c(3);
        const n = e.href;
        if (n != null && n !== "" && !r("WAWebURLUtils").hasValidUrlScheme(n)) {
            let a;
            if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
                a = <span/>;
                t[0] = a;
            } else {
                a = t[0];
            }
            return a;
        }
        let i;
        if (t[1] !== e) {
            i = e.selectable ? p.jsx(o("WAWebCopyPasteCopyable.react").CopyableLink, babelHelpers.extends({
                dir: "ltr",
                dataTab: e.dataTab
            }, F(e))) : p.jsx(o("WAWebExternalLink.react").ExternalLinkEl, babelHelpers.extends({
                dataTab: e.dataTab
            }, O(e)));
            t[1] = e;
            t[2] = i;
        } else {
            i = t[2];
        }
        return i;
    }
    function P(e) {
        const t = o("react-compiler-runtime").c(2);
        let n;
        if (t[0] !== e) {
            n = e.selectable ? p.jsx(o("WAWebCopyPasteCopyable.react").CopyableSpan, babelHelpers.extends({}, F(e))) : <span {...babelHelpers.extends({}, O(e))}/>;
            t[0] = e;
            t[1] = n;
        } else {
            n = t[1];
        }
        return n;
    }
    function N(e) {
        const t = o("react-compiler-runtime").c(2);
        let n;
        if (t[0] !== e) {
            n = e.selectable ? p.jsx(o("WAWebCopyPasteCopyable.react").CopyableStrong, babelHelpers.extends({}, F(e))) : <strong {...babelHelpers.extends({}, O(e))}/>;
            t[0] = e;
            t[1] = n;
        } else {
            n = t[1];
        }
        return n;
    }
    function M(e) {
        const t = o("react-compiler-runtime").c(2);
        let n;
        if (t[0] !== e) {
            n = e.selectable ? p.jsx(o("WAWebCopyPasteCopyable.react").CopyableBlockQuote, babelHelpers.extends({}, F(e))) : <blockquote {...babelHelpers.extends({}, O(e))}/>;
            t[0] = e;
            t[1] = n;
        } else {
            n = t[1];
        }
        return n;
    }
    function w(e) {
        const t = o("react-compiler-runtime").c(9);
        let n;
        let r;
        let a;
        let i;
        if (t[0] !== e) {
            i = Symbol.for("react.early_return_sentinel");
            e: {
                const { element: l, ref: u } = e;
                const c = babelHelpers.objectWithoutPropertiesLoose(e, s);
                r = u;
                if (c.selectable) {
                    i = p.jsx(o("WAWebCopyPasteCopyable.react").Copyable, babelHelpers.extends({
                        element: l
                    }, F(c), {
                        ref: r
                    }));
                    break e;
                }
                n = l;
                a = O(c);
            }
            t[0] = e;
            t[1] = n;
            t[2] = r;
            t[3] = a;
            t[4] = i;
        } else {
            n = t[1];
            r = t[2];
            a = t[3];
            i = t[4];
        }
        if (i !== Symbol.for("react.early_return_sentinel")) {
            return i;
        }
        let d;
        if (t[5] !== n || t[6] !== r || t[7] !== a) {
            d = p.jsx(n, babelHelpers.extends({}, a, {
                ref: r
            }));
            t[5] = n;
            t[6] = r;
            t[7] = a;
            t[8] = d;
        } else {
            d = t[8];
        }
        return d;
    }
    const A = w;
    function F(e) {
        const { className: n, selectable: r, selectAll: a } = e;
        const i = babelHelpers.objectWithoutPropertiesLoose(e, u);
        const l = i;
        l.className = o("WAWebClassnames").classnamesConvertMeToStylexPlease(n, "xnpuxes", {
            [_]: r,
            [y]: r && a
        });
        const s = i["data-testid"];
        const c = a === true ? "select-all selectable-text" : "selectable-text";
        l["data-testid"] = s != null ? `${s} ${c}` : c;
        return l;
    }
    function O(e) {
        const { appTextTemplate: t, className: n, plainText: a, prePlainText: i, selectable: l, selectAll: s, xstyle: u } = e;
        const m = babelHelpers.objectWithoutPropertiesLoose(e, c);
        const p = m;
        p.className = o("WAWebClassnames").classnamesConvertMeToStylexPlease(n, "xnpuxes", u != null ? (d || (d = r("stylex")))(u) : null);
        return p;
    }
    l.SELECTABLE_CSS_CLASS = _;
    l.SELECTABLE_INPUT_CSS_CLASS = h;
    l.isSelectable = b;
    l.isSelectAll = v;
    l.findSelectableChildren = S;
    l.hasSelectableChildren = R;
    l.findSelectAllParent = E;
    l.SelectableCode = k;
    l.SelectableDel = I;
    l.SelectableDiv = T;
    l.SelectableEm = D;
    l.SelectableImg = x;
    l.SelectableLink = $;
    l.SelectableSpan = P;
    l.SelectableStrong = N;
    l.SelectableBlockQuote = M;
    l.Selectable = A;
}, 98);