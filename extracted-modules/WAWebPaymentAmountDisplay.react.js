__d("WAWebPaymentAmountDisplay.react", [
    "WAWebCurrencyUtils",
    "WAWebFlex.react",
    "WAWebPaymentBackground.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const u = 36;
    const c = 80;
    const d = {
        fontSize: function(t) {
            return [
                {
                    fontSize: t != null ? "xdmh292" : t,
                    $$css: true
                },
                {
                    "--x-fontSize": ((e)=>{
                        if (typeof e === "number") {
                            return `${e}px`;
                        }
                        return e ?? undefined;
                    })(t)
                }
            ];
        },
        height: function(t) {
            return [
                {
                    height: t != null ? "x16ye13r" : t,
                    $$css: true
                },
                {
                    "--x-height": ((e)=>{
                        if (typeof e === "number") {
                            return `${e}px`;
                        }
                        return e ?? undefined;
                    })(t)
                }
            ];
        },
        width: function(t) {
            return [
                {
                    width: t != null ? "x5lhr3w" : t,
                    $$css: true
                },
                {
                    "--x-width": ((e)=>{
                        if (typeof e === "number") {
                            return `${e}px`;
                        }
                        return e ?? undefined;
                    })(t)
                }
            ];
        },
        amount: {
            fontWeight: "xk50ysn",
            $$css: true
        },
        amountStrike: {
            fontWeight: "xk50ysn",
            textDecoration: "xmqliwb",
            textDecorationThickness: "xudwaec",
            $$css: true
        },
        amountContainer: {
            marginTop: "x1xmf6yo",
            $$css: true
        },
        paymentBackgroundThumb: {
            height: "xwzfr38",
            $$css: true
        },
        paymentBackgroundWrapper: {
            alignSelf: "xkh2ocl",
            $$css: true
        }
    };
    function m(e) {
        const t = o("react-compiler-runtime").c(21);
        const { amount1000, currency, fontSize, height, isStrikethrough, width } = e;
        const _ = fontSize === undefined ? u : fontSize;
        const f = height === undefined ? c : height;
        const g = isStrikethrough === undefined ? false : isStrikethrough;
        let h;
        if (t[0] !== amount1000 || t[1] !== currency) {
            h = o("WAWebCurrencyUtils").formatAmount1000ToParts(currency, amount1000);
            t[0] = amount1000;
            t[1] = currency;
            t[2] = h;
        } else {
            h = t[2];
        }
        const y = h;
        let C;
        if (t[3] !== f) {
            C = d.height(f);
            t[3] = f;
            t[4] = C;
        } else {
            C = t[4];
        }
        let b;
        if (t[5] !== width) {
            b = width != null && d.width(width);
            t[5] = width;
            t[6] = b;
        } else {
            b = t[6];
        }
        let v;
        if (t[7] !== C || t[8] !== b) {
            v = [
                d.paymentBackgroundWrapper,
                C,
                b
            ];
            t[7] = C;
            t[8] = b;
            t[9] = v;
        } else {
            v = t[9];
        }
        const S = g ? d.amountStrike : d.amount;
        let R;
        if (t[10] !== _) {
            R = d.fontSize(_);
            t[10] = _;
            t[11] = R;
        } else {
            R = t[11];
        }
        let L;
        if (t[12] !== S || t[13] !== R) {
            L = [
                S,
                R
            ];
            t[12] = S;
            t[13] = R;
            t[14] = L;
        } else {
            L = t[14];
        }
        const E = `${y.symbol} ${y.integer}${y.decimal}`;
        let k;
        if (t[15] !== L || t[16] !== E) {
            const Component = o("WAWebFlex.react").FlexRow;
            const Component_1 = o("WAWebFlex.react").FlexRow;
            const Component_2 = r("WAWebPaymentBackground.react");
            k = <Component_2 thumbXstyle={d.paymentBackgroundThumb}><Component_1 xstyle={d.amountContainer}><Component xstyle={L}>{E}</Component></Component_1></Component_2>;
            t[15] = L;
            t[16] = E;
            t[17] = k;
        } else {
            k = t[17];
        }
        let I;
        if (t[18] !== k || t[19] !== v) {
            const Component = o("WAWebFlex.react").FlexColumn;
            I = <Component align="stretch" grow={1} shrink={0} xstyle={v}>{k}</Component>;
            t[18] = k;
            t[19] = v;
            t[20] = I;
        } else {
            I = t[20];
        }
        return I;
    }
    l.default = m;
}, 98);