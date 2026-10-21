__d("WAWebSelectButton.react", [
    "WAWebButton.react",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebStopEvent",
    "WDSIconIcArrowDropDown.react",
    "WDSIconIcChevronRight.react",
    "WDSIconIcExpandMore.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    const e = [
        "ref"
    ];
    let s;
    const u = s || (s = o("react"));
    const c = {
        label: {
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            textOverflow: "xlyipyv",
            $$css: true
        },
        linkDevicesBorderTheme: {
            borderTopWidth: "x178xt8z",
            borderInlineEndWidth: "x1lun4ml",
            borderBottomWidth: "xso031l",
            borderInlineStartWidth: "xpilrb4",
            borderTopStyle: "x13fuv20",
            borderInlineEndStyle: "x18b5jzi",
            borderBottomStyle: "x1q0q8m5",
            borderInlineStartStyle: "x1t7ytsu",
            borderTopColor: "x18aof6w",
            borderInlineEndColor: "xoz6bk6",
            borderBottomColor: "x1ct8bjc",
            borderInlineStartColor: "x357qen",
            borderStartStartRadius: "x1g83kfv",
            borderStartEndRadius: "x3qq2k7",
            borderEndEndRadius: "x2x8art",
            borderEndStartRadius: "x1qor8vf",
            $$css: true
        },
        linkDevicesBorderThemeWdsLike: {
            borderTopWidth: "x178xt8z",
            borderInlineEndWidth: "x1lun4ml",
            borderBottomWidth: "xso031l",
            borderInlineStartWidth: "xpilrb4",
            borderTopStyle: "x13fuv20",
            borderInlineEndStyle: "x18b5jzi",
            borderBottomStyle: "x1q0q8m5",
            borderInlineStartStyle: "x1t7ytsu",
            borderTopColor: "x1pyc6se",
            borderInlineEndColor: "x1mlb2bo",
            borderBottomColor: "x16pkwpw",
            borderInlineStartColor: "xqe4bef",
            borderStartStartRadius: "xyi3aci",
            borderStartEndRadius: "xwf5gio",
            borderEndEndRadius: "x1p453bz",
            borderEndStartRadius: "x1suzm8a",
            $$css: true
        },
        about20BorderTheme: {
            borderTopWidth: "x178xt8z",
            borderInlineEndWidth: "x1lun4ml",
            borderBottomWidth: "xso031l",
            borderInlineStartWidth: "xpilrb4",
            borderTopStyle: "x13fuv20",
            borderInlineEndStyle: "x18b5jzi",
            borderBottomStyle: "x1q0q8m5",
            borderInlineStartStyle: "x1t7ytsu",
            borderTopColor: "x1pyc6se",
            borderInlineEndColor: "x1mlb2bo",
            borderBottomColor: "x16pkwpw",
            borderInlineStartColor: "xqe4bef",
            borderStartStartRadius: "xyi3aci",
            borderStartEndRadius: "xwf5gio",
            borderEndEndRadius: "x1p453bz",
            borderEndStartRadius: "x1suzm8a",
            $$css: true
        },
        paddingAbout20: {
            paddingInlineStart: "x1iw51ew",
            paddingInlineEnd: "x1uc92m",
            paddingTop: "x16ovd2e",
            paddingBottom: "x12xbjc7",
            $$css: true
        },
        paddingWdsLike: {
            paddingInlineStart: "x1iw51ew",
            paddingInlineEnd: "x1uc92m",
            $$css: true
        },
        linkDevicesIconTheme: {
            color: "x1lljey2",
            transform: "x1iffjtl",
            $$css: true
        },
        paddingStart8: {
            paddingInlineStart: "x12w63v0",
            $$css: true
        },
        about20LabelColor: {
            color: "x14ug900",
            fontWeight: "xo1l8bm",
            $$css: true
        }
    };
    function d(t) {
        const n = o("react-compiler-runtime").c(23);
        let a;
        let i;
        if (n[0] !== t) {
            i = t.ref;
            a = babelHelpers.objectWithoutPropertiesLoose(t, e);
            n[0] = t;
            n[1] = a;
            n[2] = i;
        } else {
            a = n[1];
            i = n[2];
        }
        const l = a;
        const { ariaLabel, ariaRoleDescription, children, label, testid, theme, width } = l;
        const borderStyles = theme === "about-20-screen" ? c.about20BorderTheme : theme === "default" ? null : theme === "link-devices-screen" ? c.linkDevicesBorderTheme : theme === "link-devices-screen-wds" ? c.linkDevicesBorderThemeWdsLike : null;
        const paddingStyles = theme === "link-devices-screen-wds" ? c.paddingWdsLike : theme === "about-20-screen" ? c.paddingAbout20 : null;
        const C = theme === "about-20-screen" && c.about20LabelColor;
        let b;
        if (n[3] !== C) {
            b = [
                c.label,
                C
            ];
            n[3] = C;
            n[4] = b;
        } else {
            b = n[4];
        }
        let v;
        if (n[5] !== label || n[6] !== b) {
            const Component = r("WAWebFlexItem.react");
            v = <Component justify="start" align="center" xstyle={b}>{label}</Component>;
            n[5] = label;
            n[6] = b;
            n[7] = v;
        } else {
            v = n[7];
        }
        let S;
        if (n[8] !== theme) {
            S = theme === "about-20-screen" ? u.jsx(r("WDSIconIcExpandMore.react"), {
                colorName: "contentDefault"
            }) : theme === "link-devices-screen-wds" ? u.jsx(r("WDSIconIcExpandMore.react"), {
                colorName: "contentActionDefault"
            }) : theme === "link-devices-screen" ? u.jsx(r("WDSIconIcChevronRight.react"), {
                xstyle: c.paddingStart8,
                width: 20,
                iconXstyle: c.linkDevicesIconTheme
            }) : u.jsx(r("WDSIconIcArrowDropDown.react"), {
                height: 20,
                width: 20,
                xstyle: c.paddingStart8
            });
            n[8] = theme;
            n[9] = S;
        } else {
            S = n[9];
        }
        let R;
        if (n[10] !== v || n[11] !== S) {
            const Component = o("WAWebFlex.react").FlexRow;
            R = <Component justify="all" align="center" grow={1}>{v}{S}</Component>;
            n[10] = v;
            n[11] = S;
            n[12] = R;
        } else {
            R = n[12];
        }
        let L;
        if (n[13] !== ariaLabel || n[14] !== ariaRoleDescription || n[15] !== children || n[16] !== i || n[17] !== borderStyles || n[18] !== paddingStyles || n[19] !== R || n[20] !== testid || n[21] !== width) {
            const Component = o("WAWebButton.react").WAWebButtonSecondary;
            L = <Component onClick={o("WAWebStopEvent").stopPropagation} ref={i} width={width} ariaLabel={ariaLabel} ariaRoleDescription={ariaRoleDescription} borderStyles={borderStyles} paddingStyles={paddingStyles} testid={testid}>{R}{children}</Component>;
            n[13] = ariaLabel;
            n[14] = ariaRoleDescription;
            n[15] = children;
            n[16] = i;
            n[17] = borderStyles;
            n[18] = paddingStyles;
            n[19] = R;
            n[20] = testid;
            n[21] = width;
            n[22] = L;
        } else {
            L = n[22];
        }
        return L;
    }
    l.SelectButton = d;
}, 98);