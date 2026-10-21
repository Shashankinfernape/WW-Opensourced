__d("WAWebPaymentLinkPreview.react", [
    "WAWebCurrencyUtils",
    "WAWebFlex.react",
    "WAWebPaymentAmountDisplay.react",
    "WAWebPaymentLinkPreviewWithAmountFeature",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const u = 6;
    const c = "x1qak2s4-B";
    const d = {
        container: {
            alignItems: "x6s0dn4",
            backgroundColor: "x1bu39yj",
            display: "x78zum5",
            flexDirection: "x1q0g3np",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            position: "x1n2onr6",
            width: "xh8yej3",
            $$css: true
        },
        body: {
            boxSizing: "x9f619",
            display: "x78zum5",
            flexDirection: "xdt5ytf",
            flexGrow: "x1iyjqo2",
            flexShrink: "xs83m0k",
            justifyContent: "xl56j7k",
            lineHeight: "x17fgdl5",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            paddingTop: "x16ovd2e",
            paddingInlineEnd: "xde1mab",
            paddingBottom: "xdvlbce",
            paddingInlineStart: "x1iwz3mf",
            $$css: true
        },
        title: {
            color: "x14ug900",
            display: "x104kibb",
            fontSize: "x6prxxf",
            fontWeight: "x1s688f",
            lineHeight: "x1ipzhd2",
            marginBottom: "xjpr12u",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            textAlign: "x1yc453h",
            textOverflow: "xlyipyv",
            WebkitBoxOrient: "x1ua5tub",
            WebkitLineClamp: "x1h7i4cw",
            $$css: true
        },
        amountContainer: {
            flexShrink: "x2lah0s",
            $$css: true
        },
        inlineAmount: {
            color: "xhslqc4",
            fontSize: "x6prxxf",
            fontWeight: "x1fcty0u",
            lineHeight: "x1ipzhd2",
            $$css: true
        },
        shimmer: {
            animationDuration: "xvjg3zp",
            animationIterationCount: "xa4qsjk",
            animationName: "x1ptvdk8",
            animationTimingFunction: "x1esw782",
            backgroundImage: "x1ji6iu3",
            height: "x5yr21d",
            insetInlineStart: "x1o0tod",
            left: null,
            right: null,
            pointerEvents: "x47corl",
            position: "x10l6tqk",
            top: "x13vifvy",
            width: "xh8yej3",
            $$css: true
        }
    };
    function m(e) {
        const t = o("react-compiler-runtime").c(22);
        const { isLoading, previewMetadata, title, urlElement } = e;
        let c = null;
        let m = null;
        if (t[0] !== previewMetadata.amount || t[1] !== previewMetadata.currency || t[2] !== previewMetadata.offset) {
            const p = o("WAWebPaymentLinkPreviewWithAmountFeature").computeAmount1000(previewMetadata.amount, previewMetadata.offset, previewMetadata.currency);
            if (p != null) {
                const _ = o("WAWebCurrencyUtils").formatAmount1000ToParts(p.currency, p.amount1000);
                const f = _.integer.replace(/\D/g, "");
                const g = _.decimal.replace(/\D/g, "");
                const h = f.length + g.length;
                if (h <= u) {
                    let y;
                    if (t[5] !== p) {
                        const Component = o("WAWebFlex.react").FlexRow;
                        y = <Component shrink={0} xstyle={d.amountContainer}>{s.jsx(r("WAWebPaymentAmountDisplay.react"), {
                            amount1000: p.amount1000,
                            currency: p.currency,
                            fontSize: 16,
                            width: 96
                        })}</Component>;
                        t[5] = p;
                        t[6] = y;
                    } else {
                        y = t[6];
                    }
                    c = y;
                } else {
                    const C = `${_.symbol} ${_.integer}${_.decimal}`;
                    let b;
                    if (t[7] !== C) {
                        const Component = o("WAWebFlex.react").FlexRow;
                        b = <Component xstyle={d.inlineAmount}>{C}</Component>;
                        t[7] = C;
                        t[8] = b;
                    } else {
                        b = t[8];
                    }
                    m = b;
                }
            }
            t[0] = previewMetadata.amount;
            t[1] = previewMetadata.currency;
            t[2] = previewMetadata.offset;
            t[3] = c;
            t[4] = m;
        } else {
            c = t[3];
            m = t[4];
        }
        let v;
        if (t[9] !== isLoading || t[10] !== title) {
            const Component = o("WAWebFlex.react").FlexRow;
            v = !isLoading && title != null && <Component xstyle={d.title}>{title}</Component>;
            t[9] = isLoading;
            t[10] = title;
            t[11] = v;
        } else {
            v = t[11];
        }
        const S = !isLoading && m;
        let R;
        if (t[12] !== v || t[13] !== S || t[14] !== urlElement) {
            const Component = o("WAWebFlex.react").FlexColumn;
            R = <Component xstyle={d.body}>{v}{S}{urlElement}</Component>;
            t[12] = v;
            t[13] = S;
            t[14] = urlElement;
            t[15] = R;
        } else {
            R = t[15];
        }
        const L = !isLoading && c;
        let E;
        if (t[16] !== isLoading) {
            E = isLoading && s.jsx(o("WAWebFlex.react").FlexRow, {
                xstyle: d.shimmer
            });
            t[16] = isLoading;
            t[17] = E;
        } else {
            E = t[17];
        }
        let k;
        if (t[18] !== R || t[19] !== L || t[20] !== E) {
            const Component = o("WAWebFlex.react").FlexRow;
            k = <Component testid="payment-link-preview" xstyle={d.container}>{R}{L}{E}</Component>;
            t[18] = R;
            t[19] = L;
            t[20] = E;
            t[21] = k;
        } else {
            k = t[21];
        }
        return k;
    }
    l.default = m;
}, 98);