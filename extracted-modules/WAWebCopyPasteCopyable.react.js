__d("WAWebCopyPasteCopyable.react", [
    "WACamelCase",
    "WAWebClassnames",
    "WAWebDomElementMatches",
    "WAWebExternalLink.react",
    "WAWebURLUtils",
    "isStringNullOrEmpty",
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
        "appTextTemplate",
        "plainText",
        "prePlainText",
        "xstyle"
    ];
    let c;
    let d;
    const m = d || (d = o("react"));
    const p = "copyable-text";
    const _ = `.${p}`;
    const f = "data-plain-text";
    const g = O(f);
    const h = "data-pre-plain-text";
    const y = O(h);
    const C = "data-app-text-template";
    const b = O(C);
    function v(e) {
        return e instanceof HTMLElement && r("WAWebDomElementMatches")(e, _);
    }
    function S(e) {
        return e.dataset[y];
    }
    function R(e) {
        return e.dataset[g];
    }
    function L(e) {
        return e.dataset[b];
    }
    function E(e) {
        const t = Array.from(e.querySelectorAll(_));
        return t.filter((e)=>!t.some((t)=>t !== e && t.contains(e)));
    }
    function k(e) {
        const t = o("react-compiler-runtime").c(4);
        let n;
        if (t[0] !== e) {
            n = F(e);
            t[0] = e;
            t[1] = n;
        } else {
            n = t[1];
        }
        let r;
        if (t[2] !== n) {
            r = <code {...babelHelpers.extends({}, n)}/>;
            t[2] = n;
            t[3] = r;
        } else {
            r = t[3];
        }
        return r;
    }
    function I(e) {
        const t = o("react-compiler-runtime").c(4);
        let n;
        if (t[0] !== e) {
            n = F(e);
            t[0] = e;
            t[1] = n;
        } else {
            n = t[1];
        }
        let r;
        if (t[2] !== n) {
            r = <del {...babelHelpers.extends({}, n)}/>;
            t[2] = n;
            t[3] = r;
        } else {
            r = t[3];
        }
        return r;
    }
    function T(e) {
        const t = o("react-compiler-runtime").c(4);
        let n;
        if (t[0] !== e) {
            n = F(e);
            t[0] = e;
            t[1] = n;
        } else {
            n = t[1];
        }
        let r;
        if (t[2] !== n) {
            r = <div {...babelHelpers.extends({}, n)}/>;
            t[2] = n;
            t[3] = r;
        } else {
            r = t[3];
        }
        return r;
    }
    function D(e) {
        const t = o("react-compiler-runtime").c(4);
        let n;
        if (t[0] !== e) {
            n = F(e);
            t[0] = e;
            t[1] = n;
        } else {
            n = t[1];
        }
        let r;
        if (t[2] !== n) {
            r = <em {...babelHelpers.extends({}, n)}/>;
            t[2] = n;
            t[3] = r;
        } else {
            r = t[3];
        }
        return r;
    }
    function x(t) {
        const r = o("react-compiler-runtime").c(9);
        let a;
        let i;
        let l;
        if (r[0] !== t) {
            const { ref: s, forwardedRef: u } = t;
            const c = babelHelpers.objectWithoutPropertiesLoose(t, e);
            i = s;
            a = u;
            l = F(c);
            r[0] = t;
            r[1] = a;
            r[2] = i;
            r[3] = l;
        } else {
            a = r[1];
            i = r[2];
            l = r[3];
        }
        const d = l;
        const p = a ?? i;
        const _ = d.onClick ? 0 : -1;
        const f = d.alt ?? "";
        let g;
        if (r[4] !== d || r[5] !== p || r[6] !== _ || r[7] !== f) {
            g = <img {...babelHelpers.extends({
                ref: p
            }, d, {
                tabIndex: _,
                alt: f
            })}/>;
            r[4] = d;
            r[5] = p;
            r[6] = _;
            r[7] = f;
            r[8] = g;
        } else {
            g = r[8];
        }
        return g;
    }
    function $(e) {
        const t = o("react-compiler-runtime").c(6);
        let n;
        let a;
        if (t[0] !== e) {
            n = F(e);
            const i = n.href;
            a = !r("isStringNullOrEmpty")(i) && !r("WAWebURLUtils").hasValidUrlScheme(i);
            t[0] = e;
            t[1] = n;
            t[2] = a;
        } else {
            n = t[1];
            a = t[2];
        }
        if (a) {
            let l;
            if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
                l = <span/>;
                t[3] = l;
            } else {
                l = t[3];
            }
            return l;
        }
        let s;
        if (t[4] !== n) {
            s = m.jsx(o("WAWebExternalLink.react").ExternalLinkEl, babelHelpers.extends({}, n));
            t[4] = n;
            t[5] = s;
        } else {
            s = t[5];
        }
        return s;
    }
    function P(e) {
        const t = o("react-compiler-runtime").c(4);
        let n;
        if (t[0] !== e) {
            n = F(e);
            t[0] = e;
            t[1] = n;
        } else {
            n = t[1];
        }
        let r;
        if (t[2] !== n) {
            r = <span {...babelHelpers.extends({}, n)}/>;
            t[2] = n;
            t[3] = r;
        } else {
            r = t[3];
        }
        return r;
    }
    function N(e) {
        const t = o("react-compiler-runtime").c(4);
        let n;
        if (t[0] !== e) {
            n = F(e);
            t[0] = e;
            t[1] = n;
        } else {
            n = t[1];
        }
        let r;
        if (t[2] !== n) {
            r = <strong {...babelHelpers.extends({}, n)}/>;
            t[2] = n;
            t[3] = r;
        } else {
            r = t[3];
        }
        return r;
    }
    function M(e) {
        const t = o("react-compiler-runtime").c(4);
        let n;
        if (t[0] !== e) {
            n = F(e);
            t[0] = e;
            t[1] = n;
        } else {
            n = t[1];
        }
        let r;
        if (t[2] !== n) {
            r = <blockquote {...babelHelpers.extends({}, n)}/>;
            t[2] = n;
            t[3] = r;
        } else {
            r = t[3];
        }
        return r;
    }
    function w(e) {
        const t = o("react-compiler-runtime").c(8);
        let n;
        let r;
        let a;
        if (t[0] !== e) {
            const { element: i, ref: l } = e;
            const u = babelHelpers.objectWithoutPropertiesLoose(e, s);
            r = l;
            n = i;
            a = F(u);
            t[0] = e;
            t[1] = n;
            t[2] = r;
            t[3] = a;
        } else {
            n = t[1];
            r = t[2];
            a = t[3];
        }
        let c;
        if (t[4] !== n || t[5] !== r || t[6] !== a) {
            c = m.jsx(n, babelHelpers.extends({}, a, {
                ref: r
            }));
            t[4] = n;
            t[5] = r;
            t[6] = a;
            t[7] = c;
        } else {
            c = t[7];
        }
        return c;
    }
    const A = w;
    function F(e) {
        const { appTextTemplate: t, plainText: n, prePlainText: a, xstyle: i } = e;
        const l = babelHelpers.objectWithoutPropertiesLoose(e, u);
        const s = babelHelpers.extends({}, l);
        s.className = o("WAWebClassnames").classnamesConvertMeToStylexPlease(l.className, p);
        if (n != null) {
            s[f] = n;
        }
        if (a != null) {
            s[h] = a;
        }
        if (t != null) {
            s[C] = t;
        }
        if (i != null) {
            s.className = o("WAWebClassnames").classnamesConvertMeToStylexPlease(s.className, (c || (c = r("stylex")))(i));
        }
        return s;
    }
    function O(e) {
        return r("WACamelCase")(e.replace(/^data-/, ""));
    }
    l.COPYABLE_CSS_CLASS = p;
    l.PLAIN_TEXT_DATA_ATTR = g;
    l.APP_TEXT_TEMPLATE_DATA_ATTR = b;
    l.isCopyable = v;
    l.getPrePlainTextData = S;
    l.getPlainTextData = R;
    l.getAppTextTemplateData = L;
    l.findCopyableChildren = E;
    l.CopyableCode = k;
    l.CopyableDel = I;
    l.CopyableDiv = T;
    l.CopyableEm = D;
    l.CopyableImg = x;
    l.CopyableLink = $;
    l.CopyableSpan = P;
    l.CopyableStrong = N;
    l.CopyableBlockQuote = M;
    l.Copyable = A;
}, 98);