__d("WAWebStickerCreateButton.react", [
    "fbt",
    "WAWebUnstyledButton.react",
    "WDSIconIcAdd.react",
    "WDSMargins.stylex",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    const d = {
        marginTop25: {
            marginTop: "x1e1m7ul",
            $$css: true
        }
    };
    const m = {
        button: {
            width: "x1hp1aql",
            height: "x6h4ims",
            display: "x78zum5",
            justifyContent: "xl56j7k",
            alignItems: "x6s0dn4",
            $$css: true
        },
        container: {
            width: "x1lraqik",
            height: "xsi6dy0",
            backgroundColor: "x1od0jb8",
            color: "x7ncltm",
            fontSize: "x1nxh6w3",
            borderTopWidth: "x178xt8z",
            borderInlineEndWidth: "x1lun4ml",
            borderBottomWidth: "xso031l",
            borderInlineStartWidth: "xpilrb4",
            borderTopStyle: "x13fuv20",
            borderInlineEndStyle: "x18b5jzi",
            borderBottomStyle: "x1q0q8m5",
            borderInlineStartStyle: "x1t7ytsu",
            borderTopColor: "xx42vgk",
            borderInlineEndColor: "xbogo7e",
            borderBottomColor: "x120ee7l",
            borderInlineStartColor: "x1vb5itz",
            borderStartStartRadius: "x1xn7y0n",
            borderStartEndRadius: "x1uxb8k9",
            borderEndEndRadius: "x1vmbcc8",
            borderEndStartRadius: "x16xm01d",
            ":hover_transform": "xt8homm",
            transitionProperty: "x11xpdln",
            transitionDuration: "x1g2r6go",
            transitionTimingFunction: "xwji4o3",
            willChange: "x1so62im",
            display: "x78zum5",
            flexDirection: "xdt5ytf",
            alignItems: "x6s0dn4",
            justifyContent: "xl56j7k",
            $$css: true
        },
        containerExpressionPanels: {
            width: "x1247r65",
            height: "xng8ra",
            fontSize: "x1ncwhqj",
            $$css: true
        }
    };
    function p(t) {
        const n = o("react-compiler-runtime").c(12);
        const { onClick, theme } = t;
        let l;
        if (n[0] !== onClick) {
            l = function(t) {
                onClick?.(t);
            };
            n[0] = onClick;
            n[1] = l;
        } else {
            l = n[1];
        }
        const u = l;
        let p;
        if (n[2] === Symbol.for("react.memo_cache_sentinel")) {
            p = s._("Create sticker");
            n[2] = p;
        } else {
            p = n[2];
        }
        let _;
        if (n[3] !== theme) {
            _ = (e || (e = r("stylex"))).props(m.container, theme === "stickerExpressionsPanel" && m.containerExpressionPanels, theme !== "stickerExpressionsPanel" && d.marginTop25, theme !== "stickerExpressionsPanel" && o("WDSMargins.stylex").wdsMargins.marginBottom20);
            n[3] = theme;
            n[4] = _;
        } else {
            _ = n[4];
        }
        let f;
        let g;
        if (n[5] === Symbol.for("react.memo_cache_sentinel")) {
            f = c.jsx(r("WDSIconIcAdd.react"), {
                height: 24,
                width: 24,
                xstyle: o("WDSMargins.stylex").wdsMargins.marginBottom4
            });
            g = <span>{s._("Create")}</span>;
            n[5] = f;
            n[6] = g;
        } else {
            f = n[5];
            g = n[6];
        }
        let h;
        if (n[7] !== _) {
            h = <div {...babelHelpers.extends({}, _, {
                children: [
                    f,
                    g
                ]
            })}/>;
            n[7] = _;
            n[8] = h;
        } else {
            h = n[8];
        }
        let y;
        if (n[9] !== u || n[10] !== h) {
            const Component = r("WAWebUnstyledButton.react");
            y = <Component xstyle={m.button} onClick={u} aria-label={p}>{h}</Component>;
            n[9] = u;
            n[10] = h;
            n[11] = y;
        } else {
            y = n[11];
        }
        return y;
    }
    l.default = p;
}, 226);