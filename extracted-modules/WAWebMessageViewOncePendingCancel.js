__d("WAWebMessageViewOncePendingCancel", [
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebSpinner.react",
    "WDSIconIcClose.react",
    "react",
    "useWAWebStaticButtonA11y"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = {
        inactiveIconSvg: {
            opacity: "xbyyjgo",
            $$css: true
        },
        spinner: {
            position: "x10l6tqk",
            top: "x13vifvy",
            insetInlineEnd: "xtijo5x",
            bottom: "x1ey2m1c",
            insetInlineStart: "x1o0tod",
            left: null,
            right: null,
            $$css: true
        }
    };
    function c({ onClick }) {
        const n = r("useWAWebStaticButtonA11y")(onClick);
        const a = n[0];
        const i = n[1];
        const l = onClick == null;
        const c = l ? i : {};
        const Component = o("WAWebFlex.react").FlexRow;
        return <div {...babelHelpers.extends({
            className: {
                0: "x1n2onr6 x78zum5 x3psx0u x6s0dn4 xl56j7k xvy4d1p xxk0z11 xdj266r x7g7pl8 xat24cr x3n7f7h",
                1: "x1n2onr6 x78zum5 x3psx0u x6s0dn4 xl56j7k xvy4d1p xxk0z11 xdj266r x7g7pl8 xat24cr x3n7f7h x1h6gzvc"
            }[!!l << 0],
            ref: a,
            "aria-label": r("WAWebFbtCommon")("Cancel")
        }, c, {
            children: [
                <div className="xhslqc4">{s.jsx(r("WDSIconIcClose.react"), {
                    height: 14,
                    iconXstyle: l && u.inactiveIconSvg,
                    width: 14
                })}</div>,
                <Component xstyle={u.spinner} align="center" justify="center">{s.jsx(o("WAWebSpinner.react").Spinner, {
                    color: "accent",
                    size: 18,
                    stroke: 5
                })}</Component>
            ]
        })}/>;
    }
    c.displayName = `${c.name} [from ${i.id}]`;
    l.default = c;
}, 98);