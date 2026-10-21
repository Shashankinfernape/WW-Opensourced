__d("WDSActionTile.react", [
    "WDSActionTileConfig",
    "WDSDisabledStateStyles",
    "WDSFocusStateStyles",
    "WDSPressMotionStyles",
    "WDSText.react",
    "WDSTooltip.react",
    "react",
    "react-strict-dom"
], function(t, n, r, o, a, i, l) {
    const e = [
        "ref"
    ];
    const s = [
        "Icon",
        "disabled",
        "id",
        "label",
        "onPress",
        "platform",
        "tabOrder",
        "testid",
        "tooltip"
    ];
    let u;
    const c = u || (u = o("react"));
    const u_useState = u.useState;
    function m(t) {
        const t_ref = t.ref;
        const a = babelHelpers.objectWithoutPropertiesLoose(t, e);
        const { Icon, disabled, id, label, onPress, platform, tabOrder, testid, tooltip } = a;
        const y = babelHelpers.objectWithoutPropertiesLoose(a, s);
        const C = u_useState(false);
        const b = C[0];
        const v = C[1];
        const S = u_useState(false);
        const R = S[0];
        const L = S[1];
        const E = platform ?? (navigator.userAgent.includes("Mac OS X") ? "macWeb" : "windowsWeb");
        const k = o("WDSActionTileConfig").getButtonSizeStyles(E);
        const I = o("WDSActionTileConfig").getIconSizeAndStyle();
        const T = I[0];
        const D = I[1];
        const x = b && !R && disabled !== true;
        const Component = o("react-strict-dom").html.div;
        const Component_1 = o("react-strict-dom").html.div;
        const Component_2 = r("WDSText.react");
        const Component_3 = o("react-strict-dom").html.div;
        const Component_4 = o("react-strict-dom").html.div;
        const $ = <Component_4 style={k.content}><Component_1 style={[
            o("WDSActionTileConfig").getIconContainerStyle(),
            o("WDSPressMotionStyles").WDSPressMotionStyles.pressable,
            R && o("WDSPressMotionStyles").WDSPressMotionStyles.small
        ]}>{x && <Component data-testid={undefined} style={o("WDSActionTileConfig").getIconHoverOverlayStyle()}/>}{<Icon height={T} xstyle={D} width={T} colorName="contentActionDefault"/>}</Component_1><Component_3 style={[
            o("WDSActionTileConfig").WDSActionTileStyles.label
        ]}><Component_2 type="Body3" maxLines={1} colorName="contentDefault" selectable={false}>{label}</Component_2></Component_3></Component_4>;
        const Component_5 = r("WDSTooltip.react");
        return <div className="x14atkfc x18qnofl"><Component_5 label={tooltip ?? ""} disabled={!(disabled === true && tooltip != null)}>{c.jsx(o("react-strict-dom").html.button, babelHelpers.extends({}, y, {
            "data-tab": tabOrder,
            tabIndex: 0,
            onClick: disabled === true ? undefined : onPress,
            onMouseEnter: function() {
                return v(true);
            },
            onMouseLeave: function() {
                v(false);
                L(false);
            },
            onPointerDown: disabled !== true ? function() {
                return L(true);
            } : undefined,
            onPointerCancel: disabled !== true ? function() {
                return L(false);
            } : undefined,
            onPointerLeave: disabled !== true ? function() {
                return L(false);
            } : undefined,
            onPointerUp: disabled !== true ? function() {
                return L(false);
            } : undefined,
            ref: t_ref,
            id,
            "data-testid": undefined,
            style: [
                k.container,
                o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus,
                disabled === true && o("WDSDisabledStateStyles").WDSDisabledStateStyles.genericDisabledPersistent
            ],
            children: $
        }))}</Component_5></div>;
    }
    m.displayName = `${m.name} [from ${i.id}]`;
    l.default = m;
}, 98);