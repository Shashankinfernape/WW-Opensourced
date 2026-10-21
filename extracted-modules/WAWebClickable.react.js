__d("WAWebClickable.react", [
    "$InternalEnum",
    "WAWebClassnames",
    "WAWebKeyboardIsKeyActivation",
    "WDSFocusStateStyles",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useMergeRefs",
    "useWAWebIsKeyboardUser"
], function(t, n, r, o, a, i, l) {
    const e = [
        "ref"
    ];
    let s;
    let u;
    const c = u || (u = o("react"));
    const d = u.useRef;
    const m = n("$InternalEnum").Mirrored([
        "Default",
        "Image"
    ]);
    const p = {
        imageFocus: {
            ":focus_filter": "x1cm50aa",
            $$css: true
        }
    };
    function _(t) {
        const n = o("react-compiler-runtime").c(14);
        const a = t.ref;
        const i = babelHelpers.objectWithoutPropertiesLoose(t, e);
        const { as: l, children: u, className: _, dataTestId: f, inlineStyle: g, onClick: h, preventDefaultKeyboard: y, xstyle: C } = i;
        const b = l === void 0 ? "div" : l;
        const v = y === void 0 ? false : y;
        const S = b;
        const R = r("useWAWebIsKeyboardUser")();
        const L = R.isKeyboardUser;
        const E = d(null);
        const k = r("useMergeRefs")(a, E);
        const I = function(t) {
            if (r("WAWebKeyboardIsKeyActivation")(t) && h) {
                E.current?.click();
                if (v) {
                    t.preventDefault();
                }
            }
        };
        let T;
        let D;
        let x;
        let $;
        let P;
        let N;
        if (h) {
            T = i.role ?? "button";
            D = i.ariaLabel;
            x = i.tabIndex ?? 0;
            $ = i.focusTheme ?? m.Default;
            P = i.title;
            N = i["data-tab"];
        }
        const F = T;
        const O = x;
        const B = D;
        const W = P;
        const q = N;
        const U = o("WAWebClassnames").classnamesConvertMeToStylexPlease(_, (s || (s = r("stylex")))(C, L && m.Default === $ && o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus, L && m.Image === $ && p.imageFocus));
        let V;
        if (n[0] !== S || n[1] !== D || n[2] !== u || n[3] !== N || n[4] !== f || n[5] !== I || n[6] !== g || n[7] !== k || n[8] !== h || n[9] !== T || n[10] !== U || n[11] !== x || n[12] !== P) {
            V = <S onClick={h} role={F} tabIndex={O} data-testid={f} aria-label={B} title={W} data-tab={q} ref={k} className={U} onKeyDown={I} style={g}>{u}</S>;
            n[0] = S;
            n[1] = D;
            n[2] = u;
            n[3] = N;
            n[4] = f;
            n[5] = I;
            n[6] = g;
            n[7] = k;
            n[8] = h;
            n[9] = T;
            n[10] = U;
            n[11] = x;
            n[12] = P;
            n[13] = V;
        } else {
            V = n[13];
        }
        return V;
    }
    const f = _;
    l.FocusTheme = m;
    l.Clickable = f;
}, 98);