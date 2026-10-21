__d("WAWebDrawerSection.react", [
    "WAWebClassnames",
    "WAWebDrawerSectionAnimation.stylex",
    "WAWebRow.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = {
        container: {
            position: "x1n2onr6",
            flexGrow: "x1c4vz4f",
            flexShrink: "x2lah0s",
            flexBasis: "xdl72j9",
            marginBottom: "xyorhqc",
            backgroundColor: "x1280gxy",
            $$css: true
        },
        containerRefreshed: {
            flex: "x3psx0u",
            marginBottom: "xat24cr",
            backgroundColor: "x1280gxy",
            $$css: true
        },
        paddingTop8: {
            paddingTop: "x16ovd2e",
            $$css: true
        }
    };
    const d = {
        paddingLarge: {
            paddingTop: "x7sb2j6",
            paddingInlineEnd: "x5zjp28",
            paddingBottom: "x1i2zvha",
            paddingInlineStart: "x162tt16",
            $$css: true
        },
        paddingSmall: {
            paddingTop: "x7sb2j6",
            paddingInlineEnd: "x1ekh9h2",
            paddingBottom: "x1i2zvha",
            paddingInlineStart: "xsdj86q",
            $$css: true
        },
        paddingSmallRefreshed: {
            paddingTop: "x7sb2j6",
            paddingInlineEnd: "x1xnnf8n",
            paddingBottom: "x1i2zvha",
            paddingInlineStart: "x106a9eq",
            $$css: true
        },
        paddingNoMargin: {
            paddingTop: "xyinxu5",
            paddingInlineEnd: "x5zjp28",
            paddingBottom: "x1a8lsjc",
            paddingInlineStart: "x162tt16",
            marginBottom: "xat24cr",
            $$css: true
        },
        refresh: {
            paddingTop: "x1p5oq8j",
            paddingInlineEnd: "x5zjp28",
            paddingBottom: "xwxc41k",
            paddingInlineStart: "x162tt16",
            marginBottom: "x4n8cb0",
            $$css: true
        },
        refreshPaddingTitle: {
            marginBottom: "x4n8cb0",
            $$css: true
        },
        padding: {
            paddingTop: "xyinxu5",
            paddingInlineEnd: "x5zjp28",
            paddingBottom: "x1a8lsjc",
            paddingInlineStart: "x162tt16",
            $$css: true
        },
        paddingNoVertical: {
            paddingTop: "xexx8yu",
            paddingInlineEnd: "x5zjp28",
            paddingBottom: "x18d9i69",
            paddingInlineStart: "x162tt16",
            $$css: true
        },
        paddingSmallHorizontalNoVertical: {
            paddingTop: "xexx8yu",
            paddingInlineEnd: "x1pic42t",
            paddingBottom: "x18d9i69",
            paddingInlineStart: "x1onr9mi",
            $$css: true
        },
        groupDescriptionPadding: {
            paddingTop: "xyinxu5",
            paddingInlineEnd: "x5zjp28",
            paddingBottom: "x1a8lsjc",
            paddingInlineStart: "x162tt16",
            $$css: true
        },
        noPadding: {
            paddingTop: "xexx8yu",
            paddingInlineEnd: "xyri2b",
            paddingBottom: "x18d9i69",
            paddingInlineStart: "x1c1uobl",
            $$css: true
        },
        paddingProduct: {
            paddingTop: "x7sb2j6",
            paddingInlineEnd: "x5zjp28",
            paddingBottom: "x84yb8i",
            paddingInlineStart: "x162tt16",
            marginBottom: "xat24cr",
            $$css: true
        },
        centerColumnFixedWidth: {
            width: "x1l2rt3b",
            marginTop: "xdj266r",
            marginInlineEnd: "x11t971q",
            marginInlineStart: "xvc5jky",
            marginBottom: "xyorhqc",
            $$css: true
        },
        expandHeight: {
            flexGrow: "x1iyjqo2",
            flexShrink: "xs83m0k",
            flexBasis: "x1t1x2f9",
            $$css: true
        },
        listSection: {
            marginBottom: "xat24cr",
            $$css: true
        },
        titleLarger: {
            marginBottom: "xat24cr",
            $$css: true
        },
        stickyButtonSection: {
            zIndex: "x1rozsjd",
            boxSizing: "x9f619",
            paddingTop: "x109j2v6",
            paddingInlineEnd: "x64bnmy",
            paddingBottom: "x1hhzuzn",
            paddingInlineStart: "x13jy36j",
            marginBottom: "xat24cr",
            $$css: true
        },
        transparent: {
            backgroundColor: "xjbqb8w",
            $$css: true
        },
        fullHeight: {
            marginBottom: "xat24cr",
            flexGrow: "x1iyjqo2",
            flexShrink: "xs83m0k",
            flexBasis: "x1t1x2f9",
            $$css: true
        },
        refreshNew: {
            paddingTop: "x1h678fw",
            paddingInlineEnd: "xcldk2z",
            paddingBottom: "xv6tirj",
            paddingInlineStart: "x1phvje8",
            $$css: true
        }
    };
    const m = {
        defaultTitle: {
            paddingTop: "xyinxu5",
            paddingInlineEnd: "x5zjp28",
            paddingBottom: "x1g2khh7",
            paddingInlineStart: "x162tt16",
            $$css: true
        },
        refreshTitle: {
            paddingTop: "xexx8yu",
            paddingInlineEnd: "xyri2b",
            paddingBottom: "x18d9i69",
            paddingInlineStart: "x1c1uobl",
            marginBottom: "x1ibc7va",
            $$css: true
        },
        refreshPaddingTitleTitle: {
            paddingTop: "x1p5oq8j",
            paddingInlineEnd: "x5zjp28",
            paddingBottom: "xwxc41k",
            paddingInlineStart: "x162tt16",
            $$css: true
        },
        groupDescriptionPaddingTitle: {
            paddingTop: "xexx8yu",
            paddingInlineEnd: "xyri2b",
            paddingBottom: "x18d9i69",
            paddingInlineStart: "x1c1uobl",
            marginBottom: "x12nagc",
            $$css: true
        },
        noPaddingTitle: {
            paddingTop: "xexx8yu",
            paddingInlineEnd: "xyri2b",
            paddingBottom: "x18d9i69",
            paddingInlineStart: "x1c1uobl",
            $$css: true
        },
        titleLargerTitle: {
            paddingTop: "x1stpksq",
            paddingInlineEnd: "x1a4sjiy",
            paddingBottom: "xr1496l",
            paddingInlineStart: "xvahy20",
            $$css: true
        },
        paddingTitle: {
            paddingTop: "xexx8yu",
            paddingInlineEnd: "xyri2b",
            paddingBottom: "x18d9i69",
            paddingInlineStart: "x1c1uobl",
            marginBottom: "x1u7kmwd",
            $$css: true
        },
        listSectionTitle: {
            paddingTop: "x9orja2",
            paddingInlineEnd: "xv54qhq",
            paddingBottom: "x1t4gjm",
            paddingInlineStart: "xf7dkkf",
            $$css: true
        }
    };
    function p(t) {
        const n = o("react-compiler-runtime").c(37);
        const { animation, "aria-label": aria_label, children, className, "data-list-scroll-offset": data_list_scroll_offset, ellipsify, ref, subtitle, testid, theme, title, titleOnClick, titleTestId, titleXStyle, xstyle } = t;
        const L = animation === undefined ? true : animation;
        const ellipsify_1 = ellipsify === undefined ? true : ellipsify;
        let k;
        let I;
        let T;
        if (n[0] !== L || n[1] !== aria_label || n[2] !== className || n[3] !== ellipsify_1 || n[4] !== ref || n[5] !== subtitle || n[6] !== theme || n[7] !== title || n[8] !== titleOnClick || n[9] !== titleTestId || n[10] !== titleXStyle || n[11] !== xstyle) {
            const D = (e || (e = r("stylex")))(L && o("WAWebDrawerSectionAnimation.stylex").animateStyle.animate, false, false, theme === "refresh-new" ? c.containerRefreshed : c.container, theme && _(theme), xstyle);
            if (title != null) {
                let x;
                if (n[15] !== theme) {
                    x = f(theme);
                    n[15] = theme;
                    n[16] = x;
                } else {
                    x = n[16];
                }
                let $;
                if (n[17] !== x || n[18] !== titleXStyle) {
                    $ = [
                        x,
                        c.paddingTop8,
                        titleXStyle
                    ];
                    n[17] = x;
                    n[18] = titleXStyle;
                    n[19] = $;
                } else {
                    $ = n[19];
                }
                let P;
                if (n[20] !== title) {
                    const Component = r("WDSText.react");
                    P = <Component type="Body2Emphasized" colorName="contentDeemphasized">{title}</Component>;
                    n[20] = title;
                    n[21] = P;
                } else {
                    P = n[21];
                }
                let N;
                if (n[22] !== aria_label || n[23] !== ellipsify_1 || n[24] !== subtitle || n[25] !== $ || n[26] !== P || n[27] !== titleOnClick || n[28] !== titleTestId) {
                    const Component = r("WAWebRow.react");
                    N = <Component side={subtitle} onClick={titleOnClick} ellipsify={ellipsify_1} aria-label={aria_label} xstyle={$} testid={titleTestId}>{P}</Component>;
                    n[22] = aria_label;
                    n[23] = ellipsify_1;
                    n[24] = subtitle;
                    n[25] = $;
                    n[26] = P;
                    n[27] = titleOnClick;
                    n[28] = titleTestId;
                    n[29] = N;
                } else {
                    N = n[29];
                }
                T = N;
            }
            k = ref;
            I = o("WAWebClassnames").classnamesConvertMeToStylexPlease(className, D);
            n[0] = L;
            n[1] = aria_label;
            n[2] = className;
            n[3] = ellipsify_1;
            n[4] = ref;
            n[5] = subtitle;
            n[6] = theme;
            n[7] = title;
            n[8] = titleOnClick;
            n[9] = titleTestId;
            n[10] = titleXStyle;
            n[11] = xstyle;
            n[12] = k;
            n[13] = I;
            n[14] = T;
        } else {
            k = n[12];
            I = n[13];
            T = n[14];
        }
        let M;
        if (n[30] !== children || n[31] !== data_list_scroll_offset || n[32] !== k || n[33] !== I || n[34] !== testid || n[35] !== T) {
            M = <div ref={k} className={I} data-list-scroll-offset={data_list_scroll_offset} data-testid={testid}>{T}{children}</div>;
            n[30] = children;
            n[31] = data_list_scroll_offset;
            n[32] = k;
            n[33] = I;
            n[34] = testid;
            n[35] = T;
            n[36] = M;
        } else {
            M = n[36];
        }
        return M;
    }
    function _(theme) {
        switch(theme){
            case "refresh-new":
                return d.refreshNew;
            case "chat-info":
                return null;
            case "center-column-fixed-width":
                return d.centerColumnFixedWidth;
            case "padding":
                return d.padding;
            case "padding-large":
                return d.paddingLarge;
            case "padding-product":
                return d.paddingProduct;
            case "padding-small":
                return d.paddingSmall;
            case "padding-no-margin":
                return d.paddingNoMargin;
            case "padding-no-vertical":
                return d.paddingNoVertical;
            case "padding-small-horizontal-no-vertical":
                return d.paddingSmallHorizontalNoVertical;
            case "expand-height":
                return d.expandHeight;
            case "sticky-button-section":
                return d.stickyButtonSection;
            case "refresh":
                return d.refresh;
            case "refresh-padding-title":
                return d.refreshPaddingTitle;
            case "group-desc-padding":
                return d.groupDescriptionPadding;
            case "no-padding":
                return d.noPadding;
            case "list-section":
                return d.listSection;
            case "title-larger":
                return d.titleLarger;
            case "transparent":
                return d.transparent;
            case "full-height":
                return d.fullHeight;
            default:
                return d.paddingSmallRefreshed;
        }
    }
    function f(theme) {
        switch(theme){
            case "padding-large":
            case "padding-product":
            case "padding-small":
            case "padding-no-margin":
            case "padding-no-vertical":
            case "expand-height":
            case "sticky-button-section":
            case "chat-info":
            case "center-column-fixed-width":
                return m.defaultTitle;
            case "refresh-new":
                return null;
            case "padding":
                return m.paddingTitle;
            case "refresh":
                return m.refreshTitle;
            case "refresh-padding-title":
                return m.refreshPaddingTitleTitle;
            case "group-desc-padding":
                return m.groupDescriptionPaddingTitle;
            case "no-padding":
                return m.noPaddingTitle;
            case "list-section":
                return m.listSectionTitle;
            case "title-larger":
                return m.titleLargerTitle;
            default:
                return m.defaultTitle;
        }
    }
    l.default = p;
}, 98);