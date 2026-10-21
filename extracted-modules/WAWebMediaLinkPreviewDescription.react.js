__d("WAWebMediaLinkPreviewDescription.react", [
    "WAWebEmojiText.react",
    "WAWebL10N",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = {
        marginBottom1: {
            marginBottom: "x1ty9z65",
            $$css: true
        }
    };
    const d = {
        description: {
            color: "xhslqc4",
            flexGrow: "x1c4vz4f",
            flexShrink: "x7f0hsc",
            flexBasis: "xdl72j9",
            fontSize: "x1pg5gke",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            textOverflow: "xlyipyv",
            $$css: true
        },
        statusDescription: {
            color: "xa2ctma",
            fontSize: "x1f6kntn",
            $$css: true
        },
        oneLineClamp: {
            maxHeight: "x1h4inun",
            WebkitBoxOrient: "x1ua5tub",
            display: "x104kibb",
            WebkitLineClamp: "xh0615m",
            $$css: true
        },
        twoLinesClamp: {
            maxHeight: "x1ot9ia1",
            WebkitBoxOrient: "x1ua5tub",
            display: "x104kibb",
            $$css: true
        },
        composeDescription: {
            maxWidth: "x17fpy1y",
            lineHeight: "x1o168i8",
            fontSize: "x1f6kntn",
            $$css: true
        },
        tenLinesClamp: {
            WebkitBoxOrient: "x1ua5tub",
            WebkitLineClamp: "x1but23e",
            display: "x104kibb",
            $$css: true
        },
        callLinkDescription: {
            fontSize: "x1f6kntn",
            $$css: true
        },
        fullPreviewNotHighQualityLayoutDescription: {
            overflowX: "x1plvlek",
            overflowY: "xryxfnj",
            $$css: true
        }
    };
    const m = 280;
    function p({ isCompose, isComposeHQPreview, isFullPreview, isHighQualityLayout }) {
        if (isCompose) {
            if (isComposeHQPreview) {
                return d.twoLinesClamp;
            }
            return d.oneLineClamp;
        }
        if (isFullPreview) {
            if (isHighQualityLayout) {
                return d.tenLinesClamp;
            }
            return d.fullPreviewNotHighQualityLayoutDescription;
        }
        return d.twoLinesClamp;
    }
    function _(t) {
        const n = o("react-compiler-runtime").c(16);
        const { breakWord, children, isCallLink, isCompose, isComposeHQPreview, isFullPreview, isHighQualityLayout, isStatus, testid, useTextLimit } = t;
        const b = isCallLink === undefined ? false : isCallLink;
        if (children == null) {
            return null;
        }
        const v = r("WAWebL10N").isRTL() ? "rtl" : "ltr";
        const S = typeof children === "string" ? v : undefined;
        const R = useTextLimit ? m : undefined;
        const L = testid ?? "link-description";
        let E;
        if (n[0] !== b || n[1] !== isCompose || n[2] !== isComposeHQPreview || n[3] !== isFullPreview || n[4] !== isHighQualityLayout || n[5] !== isStatus) {
            E = (e || (e = r("stylex"))).props([
                d.description,
                isStatus && d.statusDescription,
                isCompose && [
                    d.composeDescription,
                    c.marginBottom1
                ],
                b && d.callLinkDescription,
                p({
                    isCompose,
                    isComposeHQPreview,
                    isFullPreview,
                    isHighQualityLayout
                })
            ]);
            n[0] = b;
            n[1] = isCompose;
            n[2] = isComposeHQPreview;
            n[3] = isFullPreview;
            n[4] = isHighQualityLayout;
            n[5] = isStatus;
            n[6] = E;
        } else {
            E = n[6];
        }
        let k;
        if (n[7] !== breakWord || n[8] !== children || n[9] !== S || n[10] !== R) {
            k = typeof children === "string" ? u.jsx(o("WAWebEmojiText.react").EmojiText, babelHelpers.extends({
                text: children,
                textLimit: R,
                titlify: true,
                direction: S,
                multiline: true
            }, breakWord === true && {
                breakWord: true
            })) : children;
            n[7] = breakWord;
            n[8] = children;
            n[9] = S;
            n[10] = R;
            n[11] = k;
        } else {
            k = n[11];
        }
        let I;
        if (n[12] !== L || n[13] !== E || n[14] !== k) {
            I = <div {...babelHelpers.extends({
                "data-testid": L
            }, E, {
                children: k
            })}/>;
            n[12] = L;
            n[13] = E;
            n[14] = k;
            n[15] = I;
        } else {
            I = n[15];
        }
        return I;
    }
    l.default = _;
}, 98);