__d("WAWebRadio.react", [
    "$InternalEnum",
    "WAWebFlex.react",
    "WAWebText.react",
    "WDSBaseRadio.react",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l) {
    const e = [
        "label",
        "secondaryLabel",
        "disabled",
        "onDisabledClick",
        "xstyle",
        "testid",
        "checked",
        "theme"
    ];
    let s;
    let u;
    const c = u || (u = o("react"));
    const u_useId = u.useId;
    const m = {
        option: {
            display: "x78zum5",
            alignItems: "x6s0dn4",
            cursor: "x1ypdohk",
            $$css: true
        },
        optionText: {
            lineHeight: "x132q4wb",
            display: "x1rg5ohu",
            $$css: true
        },
        themeNormal: {
            fontSize: "x1f6kntn",
            minHeight: "x1ba4aug",
            $$css: true
        },
        themeLarge: {
            backgroundColor: "x1ubxc9n",
            borderStartStartRadius: "xyi3aci",
            borderStartEndRadius: "xwf5gio",
            borderEndEndRadius: "x1p453bz",
            borderEndStartRadius: "x1suzm8a",
            boxSizing: "x9f619",
            fontSize: "x1jchvi3",
            minHeight: "xbktkl8",
            paddingInlineStart: "x12w63v0",
            paddingInlineEnd: "x1nzty39",
            paddingLeft: null,
            paddingRight: null,
            width: "xh8yej3",
            $$css: true
        },
        disabledText: {
            opacity: "xbyyjgo",
            $$css: true
        },
        paddingStart20: {
            paddingInlineStart: "x1phvje8",
            $$css: true
        },
        paddingStart12: {
            paddingInlineStart: "x1iw51ew",
            $$css: true
        }
    };
    const p = n("$InternalEnum")({
        NORMAL: "normal",
        LARGE: "large"
    });
    function _(t) {
        const { label: label_1, secondaryLabel, disabled, onDisabledClick, xstyle, testid, checked, theme } = t;
        const h = theme === undefined ? secondaryLabel != null ? p.LARGE : p.NORMAL : theme;
        const y = babelHelpers.objectWithoutPropertiesLoose(t, e);
        const C = u_useId();
        const b = function(t) {
            if (disabled === true && onDisabledClick != null) {
                t.preventDefault();
                t.stopPropagation();
                onDisabledClick();
            }
        };
        const v = function(t) {
            if (t.key === "Enter" || t.key === " ") {
                b(t);
            }
        };
        let S;
        let R;
        switch(h){
            case p.LARGE:
                S = [
                    m.themeLarge
                ];
                R = m.paddingStart20;
                break;
            case p.NORMAL:
                S = [
                    m.themeNormal
                ];
                R = m.paddingStart12;
        }
        const Component = o("WAWebText.react").WAWebTextMuted;
        return <label {...babelHelpers.extends({}, (s || (s = r("stylex"))).props(m.option, S, xstyle, disabled === true && m.disabledText), {
            onClick: b,
            onKeyDown: v,
            "data-testid": testid ?? "radio-label",
            children: [
                c.jsx(r("WDSBaseRadio.react"), babelHelpers.extends({}, y, {
                    disabled,
                    "aria-labelledby": C,
                    checked,
                    testid: `wds-radio-input-${checked ? "checked" : "unchecked"}`
                })),
                <span {...babelHelpers.extends({}, s.props(m.optionText, m.paddingStart20, R), {
                    id: C,
                    "data-testid": "radio-label-text",
                    children: [
                        label_1,
                        <Component color="secondary" as="div">{secondaryLabel}</Component>
                    ]
                })}/>
            ]
        })}/>;
    }
    _.displayName = `${_.name} [from ${i.id}]`;
    function f(e) {
        const t = o("react-compiler-runtime").c(20);
        const { ariaLabel, checkedValue, name, onChange, options, tabIndex, testid, theme } = e;
        const m = !checkedValue;
        let p;
        if (t[0] !== onChange) {
            p = function(t, n) {
                if (t != null) {
                    t(n.value);
                }
                if (onChange != null) {
                    onChange(n.value);
                }
            };
            t[0] = onChange;
            t[1] = p;
        } else {
            p = t[1];
        }
        const f = p;
        let g;
        if (t[2] !== checkedValue || t[3] !== f || t[4] !== name || t[5] !== m || t[6] !== options || t[7] !== theme) {
            let h;
            if (t[9] !== checkedValue || t[10] !== f || t[11] !== name || t[12] !== m || t[13] !== theme) {
                h = function(t, n) {
                    const e = checkedValue === t.value;
                    return <_ key={t.value} value={t.value} label={t.label} name={name} checked={e} tabIndex={e || m && n === 0 ? 0 : -1} secondaryLabel={t.secondaryLabel} disabled={t.disabled === true && !e} onDisabledClick={t.onDisabledClick} testid={t.testid} xstyle={t.xstyle} onChange={function() {
                        return f(t.onChange, t);
                    }} theme={theme}/>;
                };
                t[9] = checkedValue;
                t[10] = f;
                t[11] = name;
                t[12] = m;
                t[13] = theme;
                t[14] = h;
            } else {
                h = t[14];
            }
            g = options.map(h);
            t[2] = checkedValue;
            t[3] = f;
            t[4] = name;
            t[5] = m;
            t[6] = options;
            t[7] = theme;
            t[8] = g;
        } else {
            g = t[8];
        }
        let y;
        if (t[15] !== ariaLabel || t[16] !== g || t[17] !== tabIndex || t[18] !== testid) {
            const Component = o("WAWebFlex.react").FlexColumn;
            y = <Component testid={testid} role="radiogroup" aria-label={ariaLabel} tabIndex={tabIndex}>{g}</Component>;
            t[15] = ariaLabel;
            t[16] = g;
            t[17] = tabIndex;
            t[18] = testid;
            t[19] = y;
        } else {
            y = t[19];
        }
        return y;
    }
    l.RadioWithLabelThemeEnum = p;
    l.RadioWithLabel = _;
    l.RadioGroup = f;
}, 98);