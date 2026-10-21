__d("WDSButton.react", [
    "BaseButtonV3.react",
    "WDSIconIcArrowDropDown.react",
    "WDSPressMotionStyles",
    "WDSSpinner.react",
    "WDSText.react",
    "cr:10098",
    "getPlatformByGK",
    "react"
], function(t, n, r, o, a, i, l) {
    const e = [
        "ref"
    ];
    let s;
    const u = s || (s = o("react"));
    const s_useState = s.useState;
    const d = {
        loading: {
            cursor: "xky4qsq",
            $$css: true
        },
        disabled: {
            cursor: "x1h6gzvc",
            $$css: true
        },
        truncatedLabel: {
            maxWidth: "x193iq5w",
            minWidth: "xeuugli",
            $$css: true
        },
        truncatedRoot: {
            maxWidth: "x193iq5w",
            minWidth: "xeuugli",
            $$css: true
        }
    };
    const m = {
        widthModeConstrained: {
            width: "xezivpi",
            $$css: true
        },
        widthModeFit: {
            width: "xeq5yr9",
            $$css: true
        },
        widthModeFlexible: {
            boxSizing: "x9f619",
            width: "xh8yej3",
            $$css: true
        },
        widthModeNoShrink: {
            flexShrink: "x2lah0s",
            $$css: true
        }
    };
    const p = {
        constrained: m.widthModeConstrained,
        fit: m.widthModeFit,
        flexible: m.widthModeFlexible
    };
    const _ = {
        mediaLight: {
            ":focus-visible_outlineColor": "x41cuts",
            ":focus-visible_outlineStyle": "x9v5kkp",
            ":focus-visible_outlineOffset": "xyu9ima",
            ":focus-visible_outlineWidth": "x100v1rl",
            $$css: true
        },
        mediaDark: {
            ":focus-visible_outlineColor": "x3ce2fp",
            ":focus-visible_outlineStyle": "x9v5kkp",
            ":focus-visible_outlineOffset": "xyu9ima",
            ":focus-visible_outlineWidth": "x100v1rl",
            $$css: true
        },
        default: {
            ":focus-visible_outlineColor": "xtnn1bt",
            ":focus-visible_outlineStyle": "x9v5kkp",
            ":focus-visible_outlineOffset": "xmw7ebm",
            ":focus-visible_outlineWidth": "xrdum7p",
            $$css: true
        }
    };
    function FComponent(t) {
        const t_ref = t.ref;
        const l = babelHelpers.objectWithoutPropertiesLoose(t, e);
        const { children, disabled, Icon, label, loading, profilePhoto, size } = l;
        const v = size === undefined ? "medium" : size;
        const l_type = l.type;
        const R = l_type === undefined ? "default" : l_type;
        const l_widthMode = l.widthMode;
        const E = l_widthMode === undefined ? "fit" : l_widthMode;
        const l_variant = l.variant;
        const I = l_variant === undefined ? "filled" : l_variant;
        const { directional, linkProps, id, onFocusIn, onFocusOut, onPress, onPressIn, onPressOut, testid, truncateText } = l;
        const O = truncateText === undefined ? false : truncateText;
        const { xstyle, platform } = l;
        const q = platform === undefined ? o("getPlatformByGK").WDS_PLATFORM : platform;
        const { tabOrder, "aria-disabled": aria_disabled, "aria-expanded": aria_expanded, "aria-haspopup": aria_haspopup, "aria-pressed": aria_pressed, "aria-label": aria_label } = l;
        const platform_1 = q ?? o("getPlatformByGK").WDS_PLATFORM;
        const Q = l.showEndDropdownIcon === true && (platform_1 === "windowsWeb" || platform_1 === "macWeb");
        const X = s_useState(false);
        const pressed = X[0];
        const J = X[1];
        const Z = s_useState(false);
        const hovered = Z[0];
        const te = Z[1];
        function onMouseEnter(e) {
            if (!(loading === true || disabled === true)) {
                te(true);
                if (l.onHoverIn != null) {
                    l.onHoverIn(e);
                }
            }
        }
        function onMouseLeave(e) {
            if (!(loading === true || disabled === true)) {
                te(false);
                J(false);
                if (l.onHoverOut != null) {
                    l.onHoverOut(e);
                }
            }
        }
        function onPointerDown(e) {
            if (!(loading === true || disabled === true)) {
                J(true);
                if (onPressIn != null) {
                    onPressIn(e);
                }
            }
        }
        function onPointerUp(e) {
            if (!(loading === true || disabled === true)) {
                J(false);
                if (onPressOut != null) {
                    onPressOut(e);
                }
            }
        }
        function onPointerCancel() {
            if (!(loading === true || disabled === true)) {
                J(false);
            }
        }
        function onPointerLeave() {
            if (!(loading === true || disabled === true)) {
                J(false);
            }
        }
        function se(e) {
            if (loading !== true) {
                if (onPress != null) {
                    onPress(e);
                }
            }
        }
        const ue = linkProps?.href != null;
        const ce = Icon != null || profilePhoto != null;
        const de = Q === true;
        const me = label != null;
        const pe = n("cr:10098").getButtonIconSizeAndStyle(v, ce && !me);
        const _e = pe[0];
        const xstyle_1 = pe[1];
        let ge;
        if (profilePhoto != null) {
            ge = profilePhoto;
        } else if (Icon != null) {
            ge = <Icon height={_e} width={_e} xstyle={xstyle_1} directional={directional}/>;
        }
        let he;
        if (Q === true) {
            he = u.jsx(r("WDSIconIcArrowDropDown.react"), {
                height: _e,
                width: _e,
                xstyle: xstyle_1,
                directional
            });
        }
        const ye = n("cr:10098").getButtonColorStyles(I, R, ce || loading === true, me, disabled === true, loading === true, platform_1);
        const Ce = _;
        let be;
        if (R === "media") {
            be = I === "filled" ? Ce.mediaLight : Ce.mediaDark;
        } else {
            be = Ce.default;
        }
        const ve = [
            be,
            loading === true && d.loading,
            disabled === true && d.disabled
        ];
        const pressableHovered = ye.xstyleConfig.pressableHovered;
        const pressable = [
            ye.xstyleConfig.pressable,
            ve,
            I !== "borderless" && o("WDSPressMotionStyles").WDSPressMotionStyles.pressable,
            E !== "flexible" && m.widthModeNoShrink
        ];
        let Le;
        if (ce && !me && de) {
            Le = o("WDSPressMotionStyles").WDSPressMotionStyles.small;
        } else if (ce && !me) {
            Le = o("WDSPressMotionStyles").WDSPressMotionStyles.compact;
        } else {
            Le = o("WDSPressMotionStyles").WDSPressMotionStyles.medium;
        }
        const variant = {
            xstyleConfig: {
                pressable,
                pressableDisabled: ye.xstyleConfig.pressableDisabled,
                pressableFocused: ye.xstyleConfig.pressableFocused,
                pressableHovered,
                pressablePressed: [
                    ye.xstyleConfig.pressablePressed,
                    Le
                ]
            }
        };
        const Component = r("WDSText.react");
        const ke = me ? <Component type="Body2Emphasized" selectable={false} maxLines={1} xstyle={O && d.truncatedLabel} platform={platform_1} colorName={n("cr:10098").getButtonFontColor(I, R, disabled === true, platform_1)}>{label}</Component> : null;
        const Ie = n("cr:10098").getButtonSizeStyles(v, ce || loading === true, de, me, I, platform_1);
        const Te = {
            ref: t_ref,
            id,
            testid,
            sizeVariant: {
                xstyleConfig: babelHelpers.extends({}, Ie, {
                    content: de ? [
                        Ie.content,
                        Ie.addOnEnd,
                        xstyle,
                        O && d.truncatedRoot
                    ] : [
                        Ie.content,
                        xstyle,
                        O && d.truncatedRoot
                    ],
                    children: [
                        Ie.children,
                        O && d.truncatedLabel
                    ],
                    width: p[E] ?? null
                })
            },
            onPointerDown,
            onPointerUp,
            onPointerCancel,
            onPointerLeave,
            onFocusIn,
            onFocusOut,
            addOnStart: loading === true ? u.jsx(r("WDSSpinner.react"), {
                size: _e,
                platform: platform_1
            }) : ge,
            addOnEnd: he,
            onMouseEnter,
            onMouseLeave,
            variant,
            focusable: !l.disabled
        };
        const De = ue && linkProps != null ? u.jsxs(r("BaseButtonV3.react"), babelHelpers.extends({}, Te, linkProps, {
            onClick: se,
            "data-tab": tabOrder,
            hovered,
            children: [
                ke,
                children
            ]
        })) : u.jsxs(r("BaseButtonV3.react"), babelHelpers.extends({}, Te, {
            "data-tab": tabOrder,
            onClick: se,
            "aria-disabled": aria_disabled,
            "aria-expanded": aria_expanded,
            "aria-haspopup": aria_haspopup,
            "aria-pressed": aria_pressed,
            "aria-label": aria_label,
            disabled: disabled === true,
            hovered,
            pressed,
            children: [
                ke,
                children
            ]
        }));
        if (ke && O) {
            return <span className="x193iq5w xeuugli x6ikm8r x10wlt62 xh8yej3" title={label?.toString()}>{De}</span>;
        }
        return De;
    }
    FComponent.displayName = `${FComponent.name} [from ${i.id}]`;
    l.default = FComponent;
}, 98);