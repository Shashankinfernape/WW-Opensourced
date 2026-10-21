__d("WAWebTooltip.react", [
    "WAWebPopover.react",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l) {
    const e = [
        "arrowXStyle",
        "element",
        "onClick",
        "tooltipXStyle"
    ];
    let s;
    let u;
    const c = u || (u = o("react"));
    const d = {
        tooltip: {
            display: "x1rg5ohu",
            maxWidth: "x1dc814f",
            fontSize: "x1nxh6w3",
            color: "xowaa7l",
            textAlign: "x2b8uid",
            textOverflow: "xlyipyv",
            textShadow: "x7opvkv",
            backgroundColor: "xpip370",
            borderStartStartRadius: "x12l2aii",
            borderStartEndRadius: "x1mbk4o",
            borderEndEndRadius: "x14vvt0a",
            borderEndStartRadius: "x1w3ol1v",
            $$css: true
        },
        arrow: {
            backgroundColor: "xpip370",
            $$css: true
        },
        paddingHoriz16: {
            paddingInlineStart: "xdx6fka",
            paddingInlineEnd: "xvtqlqk",
            $$css: true
        },
        paddingVert8: {
            paddingTop: "x16ovd2e",
            paddingBottom: "x12xbjc7",
            $$css: true
        }
    };
    function M3(e) {
        const t = o("react-compiler-runtime").c(9);
        const { children: n, onClick: a, ref: i, tooltipXStyle: l } = e;
        let u;
        if (a != null) {
            let m;
            if (t[0] !== a) {
                m = {
                    onClick: a,
                    role: "button",
                    tabIndex: 0
                };
                t[0] = a;
                t[1] = m;
            } else {
                m = t[1];
            }
            u = m;
        }
        let p;
        if (t[2] !== l) {
            p = (s || (s = r("stylex"))).props(d.tooltip, d.paddingHoriz16, d.paddingVert8, l);
            t[2] = l;
            t[3] = p;
        } else {
            p = t[3];
        }
        let _;
        if (t[4] !== n || t[5] !== u || t[6] !== i || t[7] !== p) {
            _ = <div {...babelHelpers.extends({}, p, {
                ref: i,
                role: "tooltip",
                "data-testid": "tooltip"
            }, u, {
                children: n
            })}/>;
            t[4] = n;
            t[5] = u;
            t[6] = i;
            t[7] = p;
            t[8] = _;
        } else {
            _ = t[8];
        }
        return _;
    }
    function p(t) {
        const n = o("react-compiler-runtime").c(22);
        let r;
        let a;
        let i;
        let l;
        let s;
        if (n[0] !== t) {
            r = t.arrowXStyle;
            a = t.element;
            i = t.onClick;
            s = t.tooltipXStyle;
            l = babelHelpers.objectWithoutPropertiesLoose(t, e);
            n[0] = t;
            n[1] = r;
            n[2] = a;
            n[3] = i;
            n[4] = l;
            n[5] = s;
        } else {
            r = n[1];
            a = n[2];
            i = n[3];
            l = n[4];
            s = n[5];
        }
        const u = !!i;
        let p;
        if (n[6] !== a || n[7] !== i || n[8] !== s) {
            p = <M3 onClick={i} tooltipXStyle={s}>{a}</M3>;
            n[6] = a;
            n[7] = i;
            n[8] = s;
            n[9] = p;
        } else {
            p = n[9];
        }
        let _;
        if (n[10] !== r) {
            _ = [
                d.arrow,
                r
            ];
            n[10] = r;
            n[11] = _;
        } else {
            _ = n[11];
        }
        let f;
        if (n[12] !== l || n[13] !== u || n[14] !== p || n[15] !== _) {
            f = babelHelpers.extends({}, l, {
                dismissable: u,
                element: p,
                arrowXStyle: _
            });
            n[12] = l;
            n[13] = u;
            n[14] = p;
            n[15] = _;
            n[16] = f;
        } else {
            f = n[16];
        }
        const h = o("WAWebPopover.react").usePopoverElement(f);
        const { hidePopover: y, popover: C, popoverIsVisible: b, showPopover: v } = h;
        let S;
        if (n[17] !== y || n[18] !== C || n[19] !== b || n[20] !== v) {
            S = {
                tooltip: C,
                showTooltip: v,
                hideTooltip: y,
                tooltipIsVisible: b
            };
            n[17] = y;
            n[18] = C;
            n[19] = b;
            n[20] = v;
            n[21] = S;
        } else {
            S = n[21];
        }
        return S;
    }
    function _(e) {
        const t = o("react-compiler-runtime").c(13);
        const { alignment: n, buffer: r, children: a, enableEnterTransition: i, name: l, openingDelay: s, position: u, showOnFocus: c, targetRef: d, testid: m } = e;
        const _ = r === void 0 ? 8 : r;
        const f = i === void 0 ? true : i;
        const g = c === void 0 ? true : c;
        let h;
        if (t[0] !== g) {
            h = g ? [
                "hover",
                "focus"
            ] : "hover";
            t[0] = g;
            t[1] = h;
        } else {
            h = t[1];
        }
        let y;
        if (t[2] !== n || t[3] !== _ || t[4] !== a || t[5] !== f || t[6] !== l || t[7] !== s || t[8] !== u || t[9] !== h || t[10] !== d || t[11] !== m) {
            y = {
                target: d,
                position: u,
                alignment: n,
                element: a,
                buffer: _,
                name: l,
                enableEnterTransition: f,
                enableExitTransition: false,
                initHandling: h,
                openingDelay: s,
                testid: m
            };
            t[2] = n;
            t[3] = _;
            t[4] = a;
            t[5] = f;
            t[6] = l;
            t[7] = s;
            t[8] = u;
            t[9] = h;
            t[10] = d;
            t[11] = m;
            t[12] = y;
        } else {
            y = t[12];
        }
        const C = p(y);
        const b = C.tooltip;
        return b;
    }
    function f(e) {
        const t = p(e);
        const n = t.tooltip;
        return n;
    }
    l.PopoverAlignment = o("WAWebPopover.react").PopoverAlignment;
    l.PopoverPosition = o("WAWebPopover.react").PopoverPosition;
    l.useTooltip = p;
    l.WAWebHoverTooltip = _;
    l.WAWebControllableTooltip = f;
}, 98);