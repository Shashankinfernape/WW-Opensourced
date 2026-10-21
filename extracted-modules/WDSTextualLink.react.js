__d("WDSTextualLink.react", [
    "BaseLinkV2.react",
    "WDSFontTokenStyles",
    "getPlatformByGK",
    "react",
    "stylex"
], function(t, n, r, o, a, i, l) {
    const e = [
        "children",
        "data-tab",
        "download",
        "href",
        "onBlur",
        "onClick",
        "onFocus",
        "onKeyDown",
        "platform",
        "robotoPropValue",
        "testid",
        "textConfig"
    ];
    let s;
    let u;
    const c = u || (u = o("react"));
    const d = {
        link: {
            outline: "x1a2a7pz",
            cursor: "x1ypdohk",
            color: "x1ph7ams x17f7hit",
            fontWeight: "xuv8nkb",
            textDecoration: "x1hl2dhg xt0b8zv x1eo1aoc xbvygy2 x1wp9yj1 xv854yx",
            backgroundColor: "x1k74hu9 xp30eni",
            textUnderlineOffset: "xrys4gj xhmieyt",
            $$css: true
        },
        buttonLink: {
            fontFamily: "xjb2p0i",
            fontSize: "x1qlqyl8",
            borderTopWidth: "x972fbf",
            borderInlineEndWidth: "x10w94by",
            borderBottomWidth: "x1qhh985",
            borderInlineStartWidth: "x14e42zd",
            paddingTop: "xexx8yu",
            paddingInlineEnd: "xyri2b",
            paddingBottom: "x18d9i69",
            paddingInlineStart: "x1c1uobl",
            background: "x11g6tue",
            $$css: true
        }
    };
    function m(t) {
        const { children, "data-tab": data_tab, download, href, onBlur, onClick, onFocus, onKeyDown, platform } = t;
        const g = platform === undefined ? o("getPlatformByGK").WDS_PLATFORM : platform;
        const t_robotoPropValue = t.robotoPropValue;
        const y = t_robotoPropValue === undefined ? 0 : t_robotoPropValue;
        const { testid, textConfig } = t;
        const v = babelHelpers.objectWithoutPropertiesLoose(t, e);
        const S = href != null && href !== "" && href !== "#";
        let R = g === "windowsWeb" || g === "macWeb";
        if (y === 1 && g === "windowsWeb" || y === 2 && g === "macWeb" || y === 3) {
            R = true;
        }
        const L = g === "iOS" ? o("WDSFontTokenStyles").WDSFontTokenStylesiOS : g === "android" ? o("WDSFontTokenStyles").WDSFontTokenStylesAndroid : g === "macWeb" && R ? o("WDSFontTokenStyles").WDSFontTokenStylesMacRoboto : g === "macWeb" || g === "windowsWeb" ? o("WDSFontTokenStyles").WDSFontTokenStyles : (()=>{
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${g}`);
        })();
        const E = textConfig === "Body1" || textConfig === "Body1Emphasized" ? L.Body1Emphasized : textConfig === "Body2" || textConfig === "Body2Emphasized" ? L.Body2Emphasized : textConfig === "Body3" || textConfig === "Body3Emphasized" ? L.Body3Emphasized : textConfig === "Headline1" ? L.Headline1 : textConfig === "Headline2" ? L.Headline2 : textConfig === "LargeTitle1" ? L.LargeTitle1 : textConfig === "LargeTitle2" ? L.LargeTitle2 : undefined;
        if (S) {
            const k = onClick;
            return c.jsx(r("BaseLinkV2.react"), babelHelpers.extends({
                href,
                onClick: k,
                variant: {
                    xstyleConfig: {
                        link: [
                            d.link,
                            E
                        ]
                    }
                },
                target: "_blank",
                rel: "noopener noreferrer",
                onFocusOut: onBlur,
                onFocusIn: onFocus,
                onFocus,
                dataTab: data_tab,
                testid: undefined,
                download
            }, v, {
                children
            }));
        }
        return <button {...babelHelpers.extends({
            "data-tab": data_tab,
            "data-testid": undefined,
            type: "button",
            onClick,
            onKeyDown,
            onBlur,
            onFocus
        }, (s || (s = r("stylex"))).props(d.buttonLink, d.link, E), v, {
            children
        })}/>;
    }
    m.displayName = `${m.name} [from ${i.id}]`;
    l.default = m;
}, 98);