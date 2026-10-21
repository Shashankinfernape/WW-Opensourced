__d("WAWebPaymentPayWithRow.react", [
    "WAWebFlex.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = {
        total: {
            width: "xh8yej3",
            paddingTop: "x1yrsyyn",
            $$css: true
        },
        payWithText: {
            paddingInlineStart: "x25sj25",
            $$css: true
        },
        icon: {
            paddingTop: "x1gxa6cn",
            paddingInlineEnd: "x1uc92m",
            $$css: true
        }
    };
    function d(t) {
        const n = o("react-compiler-runtime").c(19);
        const { children, childrenXstyle, label, labelXstyle, testid, xstyle } = t;
        const p = testid === undefined ? "payment-pay-with-row" : testid;
        let _;
        if (n[0] !== xstyle) {
            _ = [
                c.total,
                xstyle
            ];
            n[0] = xstyle;
            n[1] = _;
        } else {
            _ = n[1];
        }
        let f;
        if (n[2] !== labelXstyle) {
            f = (e || (e = r("stylex"))).props(c.payWithText, labelXstyle);
            n[2] = labelXstyle;
            n[3] = f;
        } else {
            f = n[3];
        }
        let g;
        if (n[4] !== label) {
            const Component = r("WDSText.react");
            g = <Component type="Body2Emphasized" colorName="contentDefault" testid="payment-pay-with-label">{label}</Component>;
            n[4] = label;
            n[5] = g;
        } else {
            g = n[5];
        }
        let h;
        if (n[6] !== f || n[7] !== g) {
            h = <p {...babelHelpers.extends({
                "data-testid": "payment-pay-with-label-paragraph"
            }, f, {
                children: g
            })}/>;
            n[6] = f;
            n[7] = g;
            n[8] = h;
        } else {
            h = n[8];
        }
        let y;
        if (n[9] !== childrenXstyle) {
            y = [
                c.icon,
                childrenXstyle
            ];
            n[9] = childrenXstyle;
            n[10] = y;
        } else {
            y = n[10];
        }
        let C;
        if (n[11] !== children || n[12] !== y) {
            const Component = o("WAWebFlex.react").FlexRow;
            C = <Component xstyle={y} justify="end">{children}</Component>;
            n[11] = children;
            n[12] = y;
            n[13] = C;
        } else {
            C = n[13];
        }
        let b;
        if (n[14] !== _ || n[15] !== h || n[16] !== C || n[17] !== p) {
            const Component = o("WAWebFlex.react").FlexRow;
            b = <Component xstyle={_} justify="all" align="center" testid={p}>{h}{C}</Component>;
            n[14] = _;
            n[15] = h;
            n[16] = C;
            n[17] = p;
            n[18] = b;
        } else {
            b = n[18];
        }
        return b;
    }
    l.default = d;
}, 98);