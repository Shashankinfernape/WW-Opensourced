__d("WDSText.react", [
    "BaseTextV2.react",
    "BaseTextV2FontMetrics",
    "WDSColorStyles.stylex",
    "WDSFontConfig",
    "getPlatformByGK",
    "react"
], function(t, n, r, o, a, i, l) {
    const e = [
        "ref"
    ];
    const s = [
        "colorName",
        "maxLines",
        "type",
        "xstyle",
        "preserveNewLines",
        "robotoPropValue",
        "platform",
        "selectable"
    ];
    let u;
    const c = u || (u = o("react"));
    const d = {
        selectable: {
            userSelect: "x1hx0egp",
            $$css: true
        },
        nonselectable: {
            userSelect: "x87ps6o",
            $$css: true
        }
    };
    function m(t) {
        const t_ref = t.ref;
        const a = babelHelpers.objectWithoutPropertiesLoose(t, e);
        const { colorName, maxLines, type, xstyle, preserveNewLines } = a;
        const preserveNewLines_1 = preserveNewLines === undefined ? true : preserveNewLines;
        const a_robotoPropValue = a.robotoPropValue;
        const g = a_robotoPropValue === undefined ? 0 : a_robotoPropValue;
        const a_platform = a.platform;
        const y = a_platform === undefined ? o("getPlatformByGK").WDS_PLATFORM : a_platform;
        const a_selectable = a.selectable;
        const b = a_selectable === undefined ? true : a_selectable;
        const v = babelHelpers.objectWithoutPropertiesLoose(a, s);
        const textColor = o("WDSColorStyles.stylex").WDSColorStyles[a.colorName];
        const R = y ?? o("getPlatformByGK").WDS_PLATFORM;
        let L = o("WDSFontConfig").WDSTextConfig[type];
        let fontMetrics;
        let k = R === "windowsWeb" || R === "macWeb";
        if (g === 1 && R === "windowsWeb" || g === 2 && R === "macWeb" || g === 3) {
            k = true;
        }
        if (R === "iOS") {
            fontMetrics = o("BaseTextV2FontMetrics").AppleSystemFontMetrics;
            L = o("WDSFontConfig").WDSTextConfigiOS[type];
        } else if (R === "android") {
            fontMetrics = o("BaseTextV2FontMetrics").RobotoFontMetrics;
            L = o("WDSFontConfig").WDSTextConfigAndroid[type];
        } else if (k) {
            fontMetrics = o("BaseTextV2FontMetrics").RobotoFontMetrics;
            if (R === "macWeb") {
                L = o("WDSFontConfig").WDSTextConfigMacRoboto[type];
            }
        } else {
            fontMetrics = R === "macWeb" ? o("BaseTextV2FontMetrics").AppleSystemFontMetrics : o("BaseTextV2FontMetrics").WindowsSystemFontMetrics;
        }
        return c.jsx(r("BaseTextV2.react"), babelHelpers.extends({
            ref: t_ref,
            fontMetrics,
            colorVariant: {
                xstyleConfig: {
                    textColor
                }
            },
            typeVariant: babelHelpers.extends({}, L, {
                xstyleConfig: {
                    textType: [
                        xstyle,
                        b ? d.selectable : d.nonselectable,
                        L.xstyleConfig.textType
                    ]
                }
            }),
            preserveNewLines: preserveNewLines_1,
            maxLines: maxLines ?? 0
        }, v, {
            children: a.children
        }));
    }
    m.displayName = `${m.name} [from ${i.id}]`;
    l.default = m;
}, 98);