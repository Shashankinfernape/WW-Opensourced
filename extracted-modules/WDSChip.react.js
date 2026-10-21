__d("WDSChip.react", [
    "BaseButtonV3.react",
    "WDSChipConfig",
    "WDSIconIcArrowDropDown.react",
    "WDSPressMotionStyles",
    "WDSText.react",
    "WDSTooltip.react",
    "getPlatformByGK",
    "intlSummarizeNumber",
    "react"
], function(t, n, r, o, a, i, l) {
    const e = [
        "ref"
    ];
    const s = [
        "Icon",
        "label",
        "size",
        "directional",
        "iconOnly",
        "isSelected",
        "isNeutral",
        "onPress",
        "onPressIn",
        "onPressOut",
        "onHoverIn",
        "onHoverOut",
        "onFocus",
        "onBlur",
        "isDisabled",
        "focusable",
        "id",
        "testid",
        "smbLabelsContent",
        "showEndDropdownIcon",
        "endNumber",
        "truncateText",
        "profilePhoto",
        "platform",
        "tabOrder",
        "role",
        "aria-pressed"
    ];
    let u;
    const c = u || (u = o("react"));
    const u_useState = u.useState;
    const m = {
        truncatedText: {
            maxWidth: "x1qh4rir",
            $$css: true
        }
    };
    function PComponent(t) {
        const t_ref = t.ref;
        const a = babelHelpers.objectWithoutPropertiesLoose(t, e);
        const { Icon, label, size } = a;
        const p = size === undefined ? "default" : size;
        const a_directional = a.directional;
        const directional = a_directional === undefined ? true : a_directional;
        const a_iconOnly = a.iconOnly;
        const h = a_iconOnly === undefined ? false : a_iconOnly;
        const a_isSelected = a.isSelected;
        const C = a_isSelected === undefined ? false : a_isSelected;
        const a_isNeutral = a.isNeutral;
        const v = a_isNeutral === undefined ? false : a_isNeutral;
        const { onPress, onPressIn, onPressOut, onHoverIn, onHoverOut, onFocus, onBlur, isDisabled } = a;
        const x = isDisabled === undefined ? false : isDisabled;
        const a_focusable = a.focusable;
        const P = a_focusable === undefined ? true : a_focusable;
        const { id, testid, smbLabelsContent, showEndDropdownIcon, endNumber, truncateText } = a;
        const B = truncateText === undefined ? false : truncateText;
        const { profilePhoto, platform } = a;
        const U = platform === undefined ? o("getPlatformByGK").WDS_PLATFORM : platform;
        const { tabOrder, role, "aria-pressed": aria_pressed } = a;
        const z = babelHelpers.objectWithoutPropertiesLoose(a, s);
        const j = U ?? o("getPlatformByGK").WDS_PLATFORM;
        const K = u_useState(false);
        const Q = K[0];
        const X = K[1];
        const Y = u_useState(false);
        const J = Y[0];
        const Z = Y[1];
        function ee(e) {
            if (x !== true) {
                Z(true);
                if (a.onHoverIn != null) {
                    a.onHoverIn(e);
                }
            }
        }
        function te(e) {
            if (x !== true) {
                Z(false);
                X(false);
                if (a.onHoverOut != null) {
                    a.onHoverOut(e);
                }
            }
        }
        function onPointerDown(e) {
            if (x !== true) {
                X(true);
                if (a.onPressIn != null) {
                    a.onPressIn(e);
                }
            }
        }
        function onPointerUp(e) {
            if (x !== true) {
                X(false);
                if (a.onPressOut != null) {
                    a.onPressOut(e);
                }
            }
        }
        function onPointerCancel() {
            if (x !== true) {
                X(false);
            }
        }
        function onPointerLeave() {
            if (x !== true) {
                X(false);
            }
        }
        function ie(e) {
            onPress?.(e);
        }
        const le = o("WDSChipConfig").getChipIconSizeAndStyle(j);
        const se = le[0];
        const ue = le[1];
        let ce;
        if (profilePhoto != null) {
            ce = profilePhoto;
        } else if (Icon != null) {
            ce = <Icon height={se} width={se} xstyle={ue} directional={directional}/>;
        }
        let de;
        if (showEndDropdownIcon === true) {
            de = c.jsx(r("WDSIconIcArrowDropDown.react"), {
                height: se,
                width: se,
                xstyle: ue,
                directional
            });
        }
        if (endNumber != null) {
            const Component = r("WDSText.react");
            de = <Component type="Body3Emphasized" colorName={o("WDSChipConfig").getButtonFontColor(C, v, x)} selectable={false}>{r("intlSummarizeNumber")(endNumber)}</Component>;
        }
        let me;
        if (smbLabelsContent) {
            me = smbLabelsContent;
        } else if (h && ce != null) {
            me = ce;
        } else {
            const Component = r("WDSText.react");
            me = <Component maxLines={1} xstyle={B && m.truncatedText} type="Body2Emphasized" colorName={o("WDSChipConfig").getButtonFontColor(C, v, x)} selectable={false}>{label}</Component>;
        }
        if (B) {
            me = <span title={label.toString()}>{me}</span>;
        }
        let pe = aria_pressed;
        if (pe == null && a["aria-selected"] == null) {
            pe = C;
        }
        const _e = showEndDropdownIcon != null;
        const fe = o("WDSChipConfig").getButtonColorStyles(C, v);
        const ge = h ? o("WDSPressMotionStyles").WDSPressMotionStyles.compact : o("WDSPressMotionStyles").WDSPressMotionStyles.medium;
        const Component = r("WDSTooltip.react");
        return <Component label={label} disabled={!h}>{c.jsx(r("BaseButtonV3.react"), babelHelpers.extends({}, z, {
            role,
            "aria-pressed": pe,
            disabled: x || undefined,
            variant: {
                xstyleConfig: babelHelpers.extends({}, fe.xstyleConfig, {
                    pressable: [
                        fe.xstyleConfig.pressable,
                        o("WDSPressMotionStyles").WDSPressMotionStyles.pressable
                    ],
                    pressablePressed: [
                        fe.xstyleConfig.pressablePressed,
                        ge
                    ]
                })
            },
            sizeVariant: {
                xstyleConfig: o("WDSChipConfig").getButtonSizeStyles(p, ce != null, de != null && _e, de != null && !_e, h, j)
            },
            addOnStart: h ? undefined : ce,
            addOnEnd: h ? undefined : de,
            ref: t_ref,
            focusable: P && !x,
            onClick: ie,
            onPointerDown,
            onPointerUp,
            onPointerCancel,
            onPointerLeave,
            onMouseEnter: ee,
            onMouseLeave: te,
            onFocus,
            onBlur,
            "data-tab": tabOrder,
            hovered: J && !Q,
            pressed: Q,
            id,
            testid: undefined,
            children: me
        }))}</Component>;
    }
    PComponent.displayName = `${PComponent.name} [from ${i.id}]`;
    l.default = PComponent;
}, 98);