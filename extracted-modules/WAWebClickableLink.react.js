__d("WAWebClickableLink.react", [
    "WAWebClassnames",
    "WAWebExternalLink.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebStaticButtonA11y"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    function c(t) {
        const i = o("react-compiler-runtime").c(18);
        const { ariaLabel: l, children: s, className: c, href: d, onClick: m, tabIndex: p, title: _, xstyle: f } = t;
        let g;
        if (i[0] !== d || i[1] !== m) {
            g = (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                    if (!(d != null && (e.metaKey || e.altKey))) {
                        e.preventDefault();
                        yield m(e);
                    }
                });
                return function(n) {
                    return e.apply(this, arguments);
                };
            })();
            i[0] = d;
            i[1] = m;
            i[2] = g;
        } else {
            g = i[2];
        }
        const h = g;
        const y = r("useWAWebStaticButtonA11y")(m);
        const C = y[0];
        const b = y[1];
        const v = t.testid ?? "clickable-link";
        let S;
        if (i[3] !== c || i[4] !== f) {
            S = o("WAWebClassnames").classnamesConvertMeToStylexPlease(c, "x1xlr1w8 xt0b8zv xbvygy2 x17f7hit xp30eni xhmieyt", (e || (e = r("stylex")))(f));
            i[3] = c;
            i[4] = f;
            i[5] = S;
        } else {
            S = i[5];
        }
        const R = d ?? void 0;
        const L = p ?? void 0;
        const E = t["data-tab"];
        let k;
        if (i[6] !== l || i[7] !== b || i[8] !== s || i[9] !== C || i[10] !== h || i[11] !== v || i[12] !== S || i[13] !== R || i[14] !== L || i[15] !== E || i[16] !== _) {
            k = u.jsx(o("WAWebExternalLink.react").ExternalLinkEl, babelHelpers.extends({}, b, {
                ref: C,
                "data-testid": v,
                className: S,
                href: R,
                onClick: h,
                role: "button",
                title: _,
                tabIndex: L,
                "data-tab": E,
                "aria-label": l,
                children: s
            }));
            i[6] = l;
            i[7] = b;
            i[8] = s;
            i[9] = C;
            i[10] = h;
            i[11] = v;
            i[12] = S;
            i[13] = R;
            i[14] = L;
            i[15] = E;
            i[16] = _;
            i[17] = k;
        } else {
            k = i[17];
        }
        return k;
    }
    l.default = c;
}, 98);