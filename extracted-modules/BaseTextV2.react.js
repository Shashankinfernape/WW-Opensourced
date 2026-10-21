__d("BaseTextV2.react", [
    "BaseHeading.react",
    "BaseTextContext",
    "BaseTextV2SpanWrapper.react",
    "BaseTextV2TooltipWrapper.react",
    "BaseTextV2Utils",
    "react",
    "react-compiler-runtime",
    "react-strict-dom"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const u = {
        auto: {
            hyphens: "xkjl1po",
            $$css: true
        },
        manual: {
            hyphens: "xxydokm",
            $$css: true
        }
    };
    const c = {
        base: {
            maxWidth: "x193iq5w",
            minWidth: "xeuugli",
            wordBreak: "x13faqbe",
            wordWrap: "x1vvkbs",
            $$css: true
        },
        block: {
            display: "x1lliihq",
            $$css: true
        },
        center: {
            textAlign: "x2b8uid",
            $$css: true
        },
        end: {
            textAlign: "xp4054r",
            $$css: true
        },
        heading: {
            maxWidth: "x193iq5w",
            minWidth: "xeuugli",
            $$css: true
        },
        inline: {
            display: "xt0psk2",
            $$css: true
        },
        linClampOneLine: {
            display: "x1lliihq",
            maxWidth: "x193iq5w",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            textOverflow: "xlyipyv",
            whiteSpace: "xuxw1ft",
            $$css: true
        },
        lineClamp: {
            WebkitBoxOrient: "x1ua5tub",
            display: "x104kibb",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            $$css: true
        },
        lineClampMultiLine: {
            display: "x1lliihq",
            maxWidth: "x193iq5w",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            $$css: true
        },
        lineClampRoot: {
            display: "x1lliihq",
            overflowX: "x1plvlek",
            overflowY: "xryxfnj",
            position: "x1n2onr6",
            $$css: true
        },
        numberOfLines: function(t) {
            return [
                {
                    WebkitLineClamp: t != null ? "x1yhjpo9" : t,
                    $$css: true
                },
                {
                    "--x-WebkitLineClamp": t ?? undefined
                }
            ];
        },
        preserveNewLines: {
            whiteSpace: "x1fj9vlw",
            $$css: true
        },
        start: {
            textAlign: "x1yc453h",
            $$css: true
        }
    };
    function d(e) {
        const t = o("react-compiler-runtime").c(33);
        const { children, colorVariant, dir, fontMetrics, hyphens, id, isPrimaryHeading, isSemanticHeading, maxLines, preserveNewLines, ref, suppressHydrationWarning, testid, textAlign, truncationTooltip, typeVariant } = e;
        const R = hyphens === undefined ? "none" : hyphens;
        const isPrimaryHeading_1 = isPrimaryHeading === undefined ? false : isPrimaryHeading;
        const E = isSemanticHeading === undefined ? false : isSemanticHeading;
        const k = maxLines === undefined ? 0 : maxLines;
        const I = preserveNewLines === undefined ? false : preserveNewLines;
        const T = textAlign === undefined ? "auto" : textAlign;
        const textType = typeVariant.xstyleConfig.textType;
        const textColor = colorVariant.xstyleConfig.textColor;
        const $ = o("BaseTextContext").useBaseTextContext();
        const P = $?.nested === true;
        let N;
        if (t[0] !== fontMetrics || t[1] !== typeVariant.fontSize || t[2] !== typeVariant.lineGap) {
            N = o("BaseTextV2Utils").precomputeValues({
                fontMetrics,
                fontSize: typeVariant.fontSize,
                lineGap: typeVariant.lineGap
            });
            t[0] = fontMetrics;
            t[1] = typeVariant.fontSize;
            t[2] = typeVariant.lineGap;
            t[3] = N;
        } else {
            N = t[3];
        }
        const computedValues = N;
        let w;
        if (t[4] !== children || t[5] !== k) {
            const Component = o("react-strict-dom").html.span;
            const Component_1 = o("react-strict-dom").html.span;
            w = k === 0 ? children : <Component_1 style={c.lineClampRoot}><Component style={k === 1 ? c.linClampOneLine : [
                c.numberOfLines(k),
                c.lineClampMultiLine,
                c.lineClamp
            ]}>{children}</Component></Component_1>;
            t[4] = children;
            t[5] = k;
            t[6] = w;
        } else {
            w = t[6];
        }
        const A = w;
        let F;
        if (t[7] !== k || t[8] !== A || t[9] !== truncationTooltip) {
            const Component = r("BaseTextV2TooltipWrapper.react");
            F = truncationTooltip != null && k > 0 ? <Component truncationTooltip={truncationTooltip}>{A}</Component> : A;
            t[7] = k;
            t[8] = A;
            t[9] = truncationTooltip;
            t[10] = F;
        } else {
            F = t[10];
        }
        const O = F;
        const B = P ? undefined : dir;
        const W = T !== "auto" && c[T];
        const q = !P && c.block;
        const U = P && c.inline;
        const V = R !== "none" && u[R];
        const H = I && c.preserveNewLines;
        let G;
        if (t[11] !== W || t[12] !== q || t[13] !== U || t[14] !== V || t[15] !== H || t[16] !== textColor || t[17] !== textType) {
            G = [
                c.base,
                W,
                q,
                U,
                V,
                H,
                textColor,
                textType
            ];
            t[11] = W;
            t[12] = q;
            t[13] = U;
            t[14] = V;
            t[15] = H;
            t[16] = textColor;
            t[17] = textType;
            t[18] = G;
        } else {
            G = t[18];
        }
        let z;
        if (t[19] !== computedValues || t[20] !== id || t[21] !== P || t[22] !== ref || t[23] !== suppressHydrationWarning || t[24] !== B || t[25] !== G || t[26] !== testid || t[27] !== O) {
            const Component = r("BaseTextV2SpanWrapper.react");
            z = <Component computedValues={computedValues} dir={B} id={id} nested={P} ref={ref} suppressHydrationWarning={suppressHydrationWarning} testid={undefined} xstyle={G}>{O}</Component>;
            t[19] = computedValues;
            t[20] = id;
            t[21] = P;
            t[22] = ref;
            t[23] = suppressHydrationWarning;
            t[24] = B;
            t[25] = G;
            t[26] = testid;
            t[27] = O;
            t[28] = z;
        } else {
            z = t[28];
        }
        const j = z;
        let K;
        if (t[29] !== isPrimaryHeading_1 || t[30] !== E || t[31] !== j) {
            const Component = r("BaseHeading.react");
            const Q = E || isPrimaryHeading_1 ? <Component isPrimaryHeading={isPrimaryHeading_1} xstyle={c.heading}>{j}</Component> : j;
            const Component_1 = o("BaseTextContext").BaseTextContextProvider;
            K = <Component_1 nested>{Q}</Component_1>;
            t[29] = isPrimaryHeading_1;
            t[30] = E;
            t[31] = j;
            t[32] = K;
        } else {
            K = t[32];
        }
        return K;
    }
    l.default = d;
}, 98);