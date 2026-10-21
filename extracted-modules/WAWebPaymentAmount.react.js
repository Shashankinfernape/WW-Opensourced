__d("WAWebPaymentAmount.react", [
    "WAWebCurrencyUtils",
    "WDSMargins.stylex",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = {
        amount: {
            display: "x78zum5",
            alignItems: "x1cy8zhl",
            lineHeight: "xggjnk3",
            $$css: true
        },
        amountInteger: {
            marginTop: "xifccgj",
            fontSize: "x8cw2a4",
            fontWeight: "x1iikomf",
            $$css: true
        },
        isQuotedAmountInteger: {
            marginTop: "x1y332i5",
            fontSize: "x1aueamr",
            fontWeight: "x1fcty0u",
            $$css: true
        }
    };
    function d(t) {
        const n = o("react-compiler-runtime").c(23);
        const { amount1000, currency, isQuoted } = t;
        let s;
        if (n[0] !== amount1000 || n[1] !== currency) {
            s = o("WAWebCurrencyUtils").formatAmount1000ToParts(currency, amount1000);
            n[0] = amount1000;
            n[1] = currency;
            n[2] = s;
        } else {
            s = n[2];
        }
        const d = s;
        let m;
        if (n[3] === Symbol.for("react.memo_cache_sentinel")) {
            m = (e || (e = r("stylex"))).props(c.amount, o("WDSMargins.stylex").wdsMargins.marginTop4);
            n[3] = m;
        } else {
            m = n[3];
        }
        let p;
        if (n[4] !== isQuoted) {
            p = ({
                0: {
                    className: "x1aueamr x1p8j9ns"
                },
                2: {
                    className: "x1f6kntn xk50ysn x1p8j9ns"
                },
                1: {
                    className: "x1aueamr x1mpyi22"
                },
                3: {
                    className: "x1f6kntn xk50ysn x1mpyi22"
                }
            })[(isQuoted === true) << 1 | (isQuoted === true) << 0];
            n[4] = isQuoted;
            n[5] = p;
        } else {
            p = n[5];
        }
        let _;
        if (n[6] !== d.symbol || n[7] !== p) {
            _ = <span {...babelHelpers.extends({}, p, {
                children: d.symbol
            })}/>;
            n[6] = d.symbol;
            n[7] = p;
            n[8] = _;
        } else {
            _ = n[8];
        }
        let f;
        if (n[9] !== isQuoted) {
            f = (e || (e = r("stylex"))).props(c.amountInteger, isQuoted === true && c.isQuotedAmountInteger, isQuoted === true ? o("WDSMargins.stylex").wdsMargins.marginEnd0 : o("WDSMargins.stylex").wdsMargins.marginEnd2);
            n[9] = isQuoted;
            n[10] = f;
        } else {
            f = n[10];
        }
        let g;
        if (n[11] !== d.integer || n[12] !== f) {
            g = <span {...babelHelpers.extends({}, f, {
                children: d.integer
            })}/>;
            n[11] = d.integer;
            n[12] = f;
            n[13] = g;
        } else {
            g = n[13];
        }
        let h;
        if (n[14] !== isQuoted) {
            h = ({
                0: {
                    className: "x1aueamr"
                },
                1: {
                    className: "x1f6kntn xk50ysn"
                }
            })[(isQuoted === true) << 0];
            n[14] = isQuoted;
            n[15] = h;
        } else {
            h = n[15];
        }
        let y;
        if (n[16] !== d.decimal || n[17] !== h) {
            y = <span {...babelHelpers.extends({}, h, {
                children: d.decimal
            })}/>;
            n[16] = d.decimal;
            n[17] = h;
            n[18] = y;
        } else {
            y = n[18];
        }
        let C;
        if (n[19] !== _ || n[20] !== g || n[21] !== y) {
            C = <div {...babelHelpers.extends({}, m, {
                children: [
                    _,
                    g,
                    y
                ]
            })}/>;
            n[19] = _;
            n[20] = g;
            n[21] = y;
            n[22] = C;
        } else {
            C = n[22];
        }
        return C;
    }
    l.default = d;
}, 98);