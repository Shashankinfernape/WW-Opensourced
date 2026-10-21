__d("WAWebBusinessProfileIconSection.react", [
    "fbt",
    "$InternalEnum",
    "WAWebFlex.react",
    "WAWebStylesEnv",
    "WDSButton.react",
    "WDSIconIcEdit.react",
    "WDSMargins.stylex",
    "WDSPaddings.stylex",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = {
        marginInlineEnd7: {
            marginInlineEnd: "xcknrev",
            $$css: true
        },
        marginTop6: {
            marginTop: "x1k70j0n",
            $$css: true
        }
    };
    const d = {
        disabled: {
            color: "xhslqc4",
            $$css: true
        },
        editPencil: {
            color: "xhslqc4",
            $$css: true
        },
        fontSmoothing: {
            MozOsxFontSmoothing: "xlh3980",
            WebkitFontSmoothing: "xvmahel",
            $$css: true
        },
        sectionEmptyText: {
            color: "xhslqc4",
            fontSize: "x1lkfr7t",
            $$css: true
        },
        sectionMain: {
            flexBasis: "x1t1x2f9",
            flexGrow: "x1iyjqo2",
            lineHeight: "x37zpob",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            $$css: true
        },
        sectionPrimaryIcon: {
            color: "xhslqc4",
            flexShrink: "x2lah0s",
            width: "xvy4d1p",
            $$css: true
        },
        sectionPrimaryIconSvg: {
            height: "xxk0z11",
            width: "xvy4d1p",
            $$css: true
        }
    };
    const m = n("$InternalEnum")({
        SmallMargin: "small-margin",
        NoMargin: "no-margin",
        NoMarginSmallGutter: "no-margin-small-gutter"
    });
    function p(e) {
        const t = o("react-compiler-runtime").c(33);
        const { Icon, content, disabled, editPencilXstyle, emptyText, fieldName, onEdit, svgXstyle, testid, theme, type, xstyle } = e;
        const v = type === undefined ? "field" : type;
        let S;
        if (t[0] !== editPencilXstyle || t[1] !== fieldName || t[2] !== onEdit || t[3] !== testid) {
            const Component = r("WDSButton.react");
            S = onEdit ? <div data-testid={testid != null ? `${testid}-edit` : undefined}><Component Icon={r("WDSIconIcEdit.react")} xstyle={[
                d.editPencil,
                editPencilXstyle
            ]} onPress={onEdit} variant="borderless" directional aria-label={s._("Click to edit {fieldName}", [
                s._param("fieldName", fieldName)
            ])}/></div> : undefined;
            t[0] = editPencilXstyle;
            t[1] = fieldName;
            t[2] = onEdit;
            t[3] = testid;
            t[4] = S;
        } else {
            S = t[4];
        }
        const R = S;
        const L = emptyText != null && !content;
        const E = L ? emptyText : content;
        let k;
        if (t[5] !== Icon || t[6] !== svgXstyle) {
            k = Icon ? <Icon iconXstyle={[
                d.sectionPrimaryIconSvg,
                svgXstyle
            ]}/> : null;
            t[5] = Icon;
            t[6] = svgXstyle;
            t[7] = k;
        } else {
            k = t[7];
        }
        const I = k;
        const T = theme === m.SmallMargin && o("WDSMargins.stylex").wdsMargins.marginTop16;
        const D = (theme === m.NoMargin || theme === m.NoMarginSmallGutter) && o("WDSMargins.stylex").wdsMargins.marginTop0;
        let x;
        if (t[8] !== T || t[9] !== D) {
            x = [
                o("WDSMargins.stylex").wdsMargins.marginTop32,
                T,
                D
            ];
            t[8] = T;
            t[9] = D;
            t[10] = x;
        } else {
            x = t[10];
        }
        const $ = testid != null ? `${testid}-icon` : undefined;
        const P = v === "field" && c.marginTop6;
        const N = theme === m.NoMarginSmallGutter && c.marginInlineEnd7;
        let M;
        if (t[11] !== P || t[12] !== N || t[13] !== xstyle) {
            M = [
                d.sectionPrimaryIcon,
                o("WDSMargins.stylex").wdsMargins.marginEnd28,
                P,
                N,
                xstyle
            ];
            t[11] = P;
            t[12] = N;
            t[13] = xstyle;
            t[14] = M;
        } else {
            M = t[14];
        }
        let w;
        if (t[15] !== I || t[16] !== M || t[17] !== $) {
            const Component = o("WAWebFlex.react").FlexItem;
            w = <Component testid={$} xstyle={M}>{I}</Component>;
            t[15] = I;
            t[16] = M;
            t[17] = $;
            t[18] = w;
        } else {
            w = t[18];
        }
        const A = testid != null ? `${testid}-content` : undefined;
        const F = v === "container" && o("WDSMargins.stylex").wdsMargins.marginTop4;
        const O = L && d.sectionEmptyText;
        const B = L && o("WAWebStylesEnv").isOSMac && d.fontSmoothing;
        const W = disabled === true && d.disabled;
        let q;
        if (t[19] !== F || t[20] !== O || t[21] !== B || t[22] !== W) {
            q = [
                d.sectionMain,
                o("WDSPaddings.stylex").wdsPaddings.paddingEnd2,
                F,
                O,
                B,
                W
            ];
            t[19] = F;
            t[20] = O;
            t[21] = B;
            t[22] = W;
            t[23] = q;
        } else {
            q = t[23];
        }
        let U;
        if (t[24] !== E || t[25] !== A || t[26] !== q) {
            const Component = o("WAWebFlex.react").FlexItem;
            U = <Component testid={A} xstyle={q}>{E}</Component>;
            t[24] = E;
            t[25] = A;
            t[26] = q;
            t[27] = U;
        } else {
            U = t[27];
        }
        let V;
        if (t[28] !== R || t[29] !== w || t[30] !== U || t[31] !== x) {
            const Component = o("WAWebFlex.react").FlexRow;
            V = <Component xstyle={x}>{w}{U}{R}</Component>;
            t[28] = R;
            t[29] = w;
            t[30] = U;
            t[31] = x;
            t[32] = V;
        } else {
            V = t[32];
        }
        return V;
    }
    l.IconSectionTheme = m;
    l.IconSection = p;
}, 226);