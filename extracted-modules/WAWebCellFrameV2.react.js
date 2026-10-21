__d("WAWebCellFrameV2.react", [
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = {
        middleContainer: {
            flex: "x12lumcd",
            alignItems: "x1qjc9v5",
            justifyContent: "xl56j7k",
            boxSizing: "x9f619",
            $$css: true
        },
        primaryContainer: {
            alignItems: "x6s0dn4",
            $$css: true
        },
        grow: {
            flexGrow: "x1iyjqo2",
            $$css: true
        },
        stretch: {
            alignItems: "x1qjc9v5",
            $$css: true
        },
        borderBox: {
            boxSizing: "x9f619",
            $$css: true
        },
        ellipsis: {
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            whiteSpace: "xuxw1ft",
            textOverflow: "xlyipyv",
            $$css: true
        },
        primaryRight: {
            paddingInlineStart: "xmzvs34",
            $$css: true
        },
        secondaryRight: {
            paddingInlineStart: "xmzvs34",
            $$css: true
        },
        primary: {
            lineHeight: "xggjnk3",
            $$css: true
        }
    };
    const c = {
        container: {
            minHeight: "x1ba4aug",
            $$css: true
        },
        detailLeft: {
            paddingTop: "x1y1aw1k",
            paddingBottom: "xwib8y2",
            paddingInlineStart: "xmzvs34",
            paddingInlineEnd: "xf159sx",
            minWidth: "xnei2rj",
            $$css: true
        },
        middleContainer: {
            paddingTop: "x1y1aw1k",
            paddingBottom: "xwib8y2",
            $$css: true
        },
        middleContainerNoDetailLeft: {
            paddingInlineStart: "xmzvs34",
            $$css: true
        },
        middleContainerNoDetailRight: {
            paddingInlineEnd: "xf159sx",
            $$css: true
        },
        detailRight: {
            paddingTop: "x1y1aw1k",
            paddingBottom: "xwib8y2",
            paddingInlineStart: "xmzvs34",
            paddingInlineEnd: "xf159sx",
            minWidth: "xnei2rj",
            $$css: true
        }
    };
    const d = {
        container: {
            minHeight: "x879a55",
            $$css: true
        },
        containerRefreshed: {
            minHeight: "x879a55",
            marginLeft: "x16ydxro",
            marginRight: "xyo1k6t",
            marginInlineStart: null,
            marginInlineEnd: null,
            $$css: true
        },
        detailLeft: {
            paddingTop: "x1y1aw1k",
            paddingBottom: "xwib8y2",
            paddingInlineStart: "xf7dkkf",
            paddingInlineEnd: "xv54qhq",
            minWidth: "x1fns5xo",
            $$css: true
        },
        detailLeftRefreshed: {
            paddingTop: "xz9dl7a",
            paddingBottom: "xsag5q8",
            paddingInlineStart: "xe2zdcy",
            paddingInlineEnd: "x1pic42t",
            minWidth: "x1fns5xo",
            $$css: true
        },
        middleContainer: {
            paddingTop: "x1y1aw1k",
            paddingBottom: "xwib8y2",
            $$css: true
        },
        middleContainerRefreshed: {
            paddingTop: "xz9dl7a",
            paddingBottom: "xsag5q8",
            $$css: true
        },
        middleContainerNoDetailLeft: {
            paddingInlineStart: "xf7dkkf",
            $$css: true
        },
        middleContainerNoDetailRight: {
            paddingInlineEnd: "xv54qhq",
            $$css: true
        },
        middleContainerNoDetailRightRefreshed: {
            paddingInlineEnd: "x2vl965",
            $$css: true
        },
        detailRight: {
            paddingTop: "x1y1aw1k",
            paddingBottom: "xwib8y2",
            paddingInlineStart: "xf7dkkf",
            paddingInlineEnd: "xv54qhq",
            minWidth: "x1fns5xo",
            $$css: true
        }
    };
    const m = {
        container: {
            minHeight: "x1qafhyn",
            $$css: true
        },
        detailLeft: {
            paddingTop: "x1y1aw1k",
            paddingBottom: "xwib8y2",
            paddingInlineStart: "xf7dkkf",
            paddingInlineEnd: "xv54qhq",
            minWidth: "x900493",
            $$css: true
        },
        middleContainer: {
            paddingTop: "x1y1aw1k",
            paddingBottom: "xwib8y2",
            $$css: true
        },
        middleContainerNoDetailLeft: {
            paddingInlineStart: "xf7dkkf",
            $$css: true
        },
        middleContainerNoDetailRight: {
            paddingInlineEnd: "xv54qhq",
            $$css: true
        },
        detailRight: {
            paddingTop: "x1y1aw1k",
            paddingBottom: "xwib8y2",
            paddingInlineStart: "xf7dkkf",
            paddingInlineEnd: "xv54qhq",
            minWidth: "x900493",
            $$css: true
        }
    };
    function p(e) {
        const y = o("react-compiler-runtime").c(52);
        const { containerXStyle, detailLeftXStyle, detailRightXStyle, isRefresh, middleContainerXStyle, primaryRightXStyle, primaryXStyle, secondaryRightXStyle, secondaryXStyle, alignDetailRight, alignPrimary, detailLeft, detailRight, detailTop, detailTopRight, justifyDetailRight, primary, primaryRight, secondary, secondaryRight, size } = e;
        const W = alignDetailRight === undefined ? "center" : alignDetailRight;
        const q = alignPrimary === undefined ? "center" : alignPrimary;
        const justify = justifyDetailRight === undefined ? "center" : justifyDetailRight;
        let V;
        e: switch(size){
            case "large":
                {
                    V = m;
                    break e;
                }
            case "medium":
                {
                    V = d;
                    break e;
                }
            case "small":
                {
                    V = c;
                    break e;
                }
            default:
        }
        const H = isRefresh === true ? V?.containerRefreshed : V?.container;
        let G;
        if (y[0] !== containerXStyle || y[1] !== H) {
            G = [
                u.borderBox,
                u.grow,
                u.stretch,
                H,
                containerXStyle
            ].flat();
            y[0] = containerXStyle;
            y[1] = H;
            y[2] = G;
        } else {
            G = y[2];
        }
        let z;
        if (y[3] !== detailLeft || y[4] !== detailLeftXStyle || y[5] !== isRefresh || y[6] !== V?.detailLeft || y[7] !== V?.detailLeftRefreshed) {
            const Component = o("WAWebFlex.react").FlexRow;
            z = !!detailLeft && <Component shrink={0} xstyle={[
                isRefresh === true ? V?.detailLeftRefreshed : V?.detailLeft,
                detailLeftXStyle
            ]} justify="center" align="center">{detailLeft}</Component>;
            y[3] = detailLeft;
            y[4] = detailLeftXStyle;
            y[5] = isRefresh;
            y[6] = V?.detailLeft;
            y[7] = V?.detailLeftRefreshed;
            y[8] = z;
        } else {
            z = y[8];
        }
        const Y = detailLeft == null && V?.middleContainerNoDetailLeft;
        const J = detailRight == null && (isRefresh === true ? V?.middleContainerNoDetailRightRefreshed : V?.middleContainerNoDetailRight);
        const Z = isRefresh === true ? V?.middleContainerRefreshed : V?.middleContainer;
        let ee;
        if (y[9] !== middleContainerXStyle || y[10] !== Y || y[11] !== J || y[12] !== Z) {
            ee = [
                u.middleContainer,
                Y,
                J,
                Z,
                middleContainerXStyle
            ];
            y[9] = middleContainerXStyle;
            y[10] = Y;
            y[11] = J;
            y[12] = Z;
            y[13] = ee;
        } else {
            ee = y[13];
        }
        let te;
        if (y[14] !== detailTop || y[15] !== detailTopRight || y[16] !== primaryRightXStyle || y[17] !== primaryXStyle) {
            const Component = r("WAWebFlexItem.react");
            const Component_1 = r("WAWebFlexItem.react");
            const Component_2 = o("WAWebFlex.react").FlexRow;
            te = !!detailTop && <Component_2 xstyle={u.primaryContainer}><Component grow={1} xstyle={[
                u.ellipsis,
                u.borderBox,
                primaryXStyle
            ]}>{detailTop}</Component>{!!detailTopRight && <Component_1 shrink={0} xstyle={[
                u.primaryRight,
                u.ellipsis,
                u.borderBox,
                primaryRightXStyle
            ]}>{detailTopRight}</Component_1>}</Component_2>;
            y[14] = detailTop;
            y[15] = detailTopRight;
            y[16] = primaryRightXStyle;
            y[17] = primaryXStyle;
            y[18] = te;
        } else {
            te = y[18];
        }
        let ne;
        if (y[19] !== primaryXStyle) {
            ne = [
                u.ellipsis,
                u.borderBox,
                u.primary,
                primaryXStyle
            ];
            y[19] = primaryXStyle;
            y[20] = ne;
        } else {
            ne = y[20];
        }
        let re;
        if (y[21] !== primary || y[22] !== ne) {
            const Component = r("WAWebFlexItem.react");
            re = <Component grow={1} xstyle={ne}>{primary}</Component>;
            y[21] = primary;
            y[22] = ne;
            y[23] = re;
        } else {
            re = y[23];
        }
        let oe;
        if (y[24] !== primaryRight || y[25] !== primaryRightXStyle) {
            const Component = r("WAWebFlexItem.react");
            oe = !!primaryRight && <Component shrink={0} xstyle={[
                u.primaryRight,
                u.ellipsis,
                u.borderBox,
                primaryRightXStyle
            ]}>{primaryRight}</Component>;
            y[24] = primaryRight;
            y[25] = primaryRightXStyle;
            y[26] = oe;
        } else {
            oe = y[26];
        }
        let ae;
        if (y[27] !== q || y[28] !== re || y[29] !== oe) {
            const Component = o("WAWebFlex.react").FlexRow;
            ae = <Component align={q}>{re}{oe}</Component>;
            y[27] = q;
            y[28] = re;
            y[29] = oe;
            y[30] = ae;
        } else {
            ae = y[30];
        }
        let ie;
        if (y[31] !== secondary || y[32] !== secondaryRight || y[33] !== secondaryRightXStyle || y[34] !== secondaryXStyle) {
            const Component = r("WAWebFlexItem.react");
            const Component_1 = r("WAWebFlexItem.react");
            const Component_2 = o("WAWebFlex.react").FlexRow;
            ie = !!secondary && <Component_2><Component grow={1} xstyle={[
                u.ellipsis,
                u.borderBox,
                secondaryXStyle
            ]}>{secondary}</Component>{!!secondaryRight && <Component_1 shrink={0} xstyle={[
                u.secondaryRight,
                u.ellipsis,
                u.borderBox,
                secondaryRightXStyle
            ]}>{secondaryRight}</Component_1>}</Component_2>;
            y[31] = secondary;
            y[32] = secondaryRight;
            y[33] = secondaryRightXStyle;
            y[34] = secondaryXStyle;
            y[35] = ie;
        } else {
            ie = y[35];
        }
        let le;
        if (y[36] !== ee || y[37] !== te || y[38] !== ae || y[39] !== ie) {
            const Component = o("WAWebFlex.react").FlexColumn;
            le = <Component grow={1} shrink={1} basis="auto" xstyle={ee}>{te}{ae}{ie}</Component>;
            y[36] = ee;
            y[37] = te;
            y[38] = ae;
            y[39] = ie;
            y[40] = le;
        } else {
            le = y[40];
        }
        let se;
        if (y[41] !== W || y[42] !== detailRight || y[43] !== detailRightXStyle || y[44] !== justify || y[45] !== V?.detailRight) {
            const Component = o("WAWebFlex.react").FlexRow;
            se = !!detailRight && <Component shrink={0} justify={justify} align={W} xstyle={[
                V?.detailRight,
                detailRightXStyle
            ]}>{detailRight}</Component>;
            y[41] = W;
            y[42] = detailRight;
            y[43] = detailRightXStyle;
            y[44] = justify;
            y[45] = V?.detailRight;
            y[46] = se;
        } else {
            se = y[46];
        }
        let de;
        if (y[47] !== le || y[48] !== se || y[49] !== G || y[50] !== z) {
            const Component = o("WAWebFlex.react").FlexRow;
            de = <Component align="center" xstyle={G}>{z}{le}{se}</Component>;
            y[47] = le;
            y[48] = se;
            y[49] = G;
            y[50] = z;
            y[51] = de;
        } else {
            de = y[51];
        }
        return de;
    }
    l.default = p;
}, 98);