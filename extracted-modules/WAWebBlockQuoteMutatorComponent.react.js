__d("WAWebBlockQuoteMutatorComponent.react", [
    "WAWebABProps",
    "WAWebCopyPasteSelectable.react",
    "WAWebFormatComponentUtils",
    "WAWebL10N",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = {
        quote: {
            display: "x1rg5ohu",
            position: "x1n2onr6",
            width: "xh8yej3",
            color: "xhslqc4",
            $$css: true
        },
        quotedColor: {
            color: "x15rks2t",
            borderTopColor: "x1b4hy2t",
            borderInlineEndColor: "x1273586",
            borderBottomColor: "x1tnzt7h",
            borderInlineStartColor: "x1mi4oqr",
            $$css: true
        },
        marginVert4: {
            marginTop: "xav9cv8",
            marginBottom: "x4tpdpg",
            $$css: true
        },
        joinedLine: {
            verticalAlign: "x16dsc37",
            $$css: true
        },
        joinedPreviousLine: {
            marginTop: "xdj266r",
            $$css: true
        },
        joinedNextLine: {
            marginBottom: "xat24cr",
            $$css: true
        }
    };
    function DComponent(t) {
        const n = o("react-compiler-runtime").c(37);
        const { children, dir, inline, joinsNextLine, joinsPreviousLine, quoted, selectable } = t;
        const f = children === undefined ? "" : children;
        const g = inline === undefined ? false : inline;
        const h = joinsNextLine === undefined ? false : joinsNextLine;
        const y = joinsPreviousLine === undefined ? false : joinsPreviousLine;
        const C = quoted === undefined ? false : quoted;
        const b = dir;
        let v;
        let S;
        let R;
        let L;
        let E;
        let k;
        let I;
        let T;
        if (n[0] !== f || n[1] !== g || n[2] !== h || n[3] !== y || n[4] !== C || n[5] !== selectable || n[6] !== b) {
            L = Symbol.for("react.early_return_sentinel");
            e: {
                const D = m(b);
                if (g) {
                    const x = {
                        0: "xt0psk2 x14atkfc xhslqc4 xct1zlm x1t7ytsu x19mw7rs x7phf20 xaso8d8",
                        2: "xt0psk2 x14atkfc x15rks2t x1b4hy2t x1273586 x1tnzt7h xct1zlm x1t7ytsu x19mw7rs x7phf20 xaso8d8",
                        1: "xt0psk2 x14atkfc xct1zlm x1t7ytsu x7phf20 xaso8d8 xhslqc4 x1if355w x18b5jzi xp93uhy x1p8j9ns x1gabggj",
                        3: "xt0psk2 x14atkfc xct1zlm x1t7ytsu x7phf20 xaso8d8 x15rks2t x1b4hy2t x1tnzt7h x1mi4oqr x1if355w x18b5jzi xp93uhy x1p8j9ns x1gabggj"
                    }[!!C << 1 | !!D << 0];
                    let $;
                    if (n[15] !== f || n[16] !== selectable || n[17] !== x || n[18] !== b) {
                        const Component = o("WAWebCopyPasteSelectable.react").SelectableSpan;
                        $ = <Component dir={b} selectable={selectable} prePlainText="> " className={x}>{f}</Component>;
                        n[15] = f;
                        n[16] = selectable;
                        n[17] = x;
                        n[18] = b;
                        n[19] = $;
                    } else {
                        $ = n[19];
                    }
                    L = $;
                    break e;
                }
                v = o("WAWebCopyPasteSelectable.react").SelectableBlockQuote;
                k = b;
                I = selectable;
                T = "> ";
                if (n[20] !== h || n[21] !== y || n[22] !== C) {
                    S = (e || (e = r("stylex")))([
                        c.quote,
                        C && c.quotedColor,
                        !C && c.marginVert4,
                        (y || h) && c.joinedLine,
                        y && c.joinedPreviousLine,
                        h && c.joinedNextLine
                    ]);
                    n[20] = h;
                    n[21] = y;
                    n[22] = C;
                    n[23] = S;
                } else {
                    S = n[23];
                }
                R = <div {...babelHelpers.extends({}, {
                    0: {
                        className: "x10l6tqk x1o0tod x13vifvy x5yr21d x1g8rjiy x1518k6t xkqq1k2 x91jh78 x1xkn691 x4oqio7"
                    },
                    8: {
                        className: "x10l6tqk x1o0tod x13vifvy x5yr21d x1g8rjiy x1518k6t xkqq1k2 x91jh78 x1xkn691 x4oqio7 xtijo5x"
                    },
                    4: {
                        className: "x10l6tqk x1o0tod x13vifvy x5yr21d x1g8rjiy xkqq1k2 x91jh78 x1xkn691 x4oqio7 xtwfq29"
                    },
                    12: {
                        className: "x10l6tqk x1o0tod x13vifvy x5yr21d x1g8rjiy xkqq1k2 x91jh78 x1xkn691 x4oqio7 xtijo5x xtwfq29"
                    },
                    2: {
                        className: "x10l6tqk x1o0tod x13vifvy x5yr21d x1g8rjiy x1518k6t x1xkn691 x4oqio7 x1bczwif x17un8ov"
                    },
                    10: {
                        className: "x10l6tqk x1o0tod x13vifvy x5yr21d x1g8rjiy x1518k6t x1xkn691 x4oqio7 xtijo5x x1bczwif x17un8ov"
                    },
                    6: {
                        className: "x10l6tqk x1o0tod x13vifvy x5yr21d x1g8rjiy x1xkn691 x4oqio7 xtwfq29 x1bczwif x17un8ov"
                    },
                    14: {
                        className: "x10l6tqk x1o0tod x13vifvy x5yr21d x1g8rjiy x1xkn691 x4oqio7 xtijo5x xtwfq29 x1bczwif x17un8ov"
                    },
                    1: {
                        className: "x10l6tqk x1o0tod x13vifvy x5yr21d x1g8rjiy x1518k6t xkqq1k2 x91jh78 x11o6v7j x1e7945m"
                    },
                    9: {
                        className: "x10l6tqk x1o0tod x13vifvy x5yr21d x1g8rjiy x1518k6t xkqq1k2 x91jh78 xtijo5x x11o6v7j x1e7945m"
                    },
                    5: {
                        className: "x10l6tqk x1o0tod x13vifvy x5yr21d x1g8rjiy xkqq1k2 x91jh78 xtwfq29 x11o6v7j x1e7945m"
                    },
                    13: {
                        className: "x10l6tqk x1o0tod x13vifvy x5yr21d x1g8rjiy xkqq1k2 x91jh78 xtijo5x xtwfq29 x11o6v7j x1e7945m"
                    },
                    3: {
                        className: "x10l6tqk x1o0tod x13vifvy x5yr21d x1g8rjiy x1518k6t x1bczwif x17un8ov x11o6v7j x1e7945m"
                    },
                    11: {
                        className: "x10l6tqk x1o0tod x13vifvy x5yr21d x1g8rjiy x1518k6t xtijo5x x1bczwif x17un8ov x11o6v7j x1e7945m"
                    },
                    7: {
                        className: "x10l6tqk x1o0tod x13vifvy x5yr21d x1g8rjiy xtwfq29 x1bczwif x17un8ov x11o6v7j x1e7945m"
                    },
                    15: {
                        className: "x10l6tqk x1o0tod x13vifvy x5yr21d x1g8rjiy xtijo5x xtwfq29 x1bczwif x17un8ov x11o6v7j x1e7945m"
                    }
                }[!!D << 3 | !!C << 2 | !!y << 1 | !!h << 0])}/>;
                E = ({
                    0: {
                        className: "x1rg5ohu x1gx403c xj0a0fe xeaf4i8"
                    },
                    1: {
                        className: "x1rg5ohu xj0a0fe xeaf4i8 x1c1uobl x1q3ajuy"
                    }
                })[!!D << 0];
            }
            n[0] = f;
            n[1] = g;
            n[2] = h;
            n[3] = y;
            n[4] = C;
            n[5] = selectable;
            n[6] = b;
            n[7] = v;
            n[8] = S;
            n[9] = R;
            n[10] = L;
            n[11] = E;
            n[12] = k;
            n[13] = I;
            n[14] = T;
        } else {
            v = n[7];
            S = n[8];
            R = n[9];
            L = n[10];
            E = n[11];
            k = n[12];
            I = n[13];
            T = n[14];
        }
        if (L !== Symbol.for("react.early_return_sentinel")) {
            return L;
        }
        let P;
        if (n[24] !== f) {
            P = o("WAWebFormatComponentUtils").removeFirstLeadingSpace(f);
            n[24] = f;
            n[25] = P;
        } else {
            P = n[25];
        }
        let N;
        if (n[26] !== P || n[27] !== E) {
            N = <div {...babelHelpers.extends({}, E, {
                children: P
            })}/>;
            n[26] = P;
            n[27] = E;
            n[28] = N;
        } else {
            N = n[28];
        }
        let M;
        if (n[29] !== v || n[30] !== S || n[31] !== R || n[32] !== N || n[33] !== k || n[34] !== I || n[35] !== T) {
            M = u.jsxs(v, {
                dir: k,
                selectable: I,
                prePlainText: T,
                className: S,
                children: [
                    R,
                    N
                ]
            });
            n[29] = v;
            n[30] = S;
            n[31] = R;
            n[32] = N;
            n[33] = k;
            n[34] = I;
            n[35] = T;
            n[36] = M;
        } else {
            M = n[36];
        }
        return M;
    }
    function m(e) {
        return !o("WAWebABProps").getABPropConfigValue("expanded_formatting_multiline_quotes") && e === "rtl" !== r("WAWebL10N").isRTL();
    }
    l.default = DComponent;
}, 98);