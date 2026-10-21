__d("WDSRichTextShell.react", [
    "Locale",
    "WDSTextFieldVariants",
    "react",
    "react-strict-dom"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const u = o("Locale").isRTL();
    const c = {
        container: {
            alignItems: "x6s0dn4",
            display: "x78zum5",
            flexDirection: "x1q0g3np",
            $$css: true
        },
        content: {
            flexGrow: "x1iyjqo2",
            position: "x1n2onr6",
            display: "x78zum5",
            alignItems: "x6s0dn4",
            minWidth: "xeuugli",
            $$css: true
        },
        multiLineContainer: {
            height: "xt7dq6l",
            paddingTop: "x889kno",
            paddingBottom: "x1a8lsjc",
            alignItems: "x1cy8zhl",
            $$css: true
        },
        multiLineContent: {
            alignItems: "x1cy8zhl",
            $$css: true
        },
        multiLineAddOn: {
            alignSelf: "xqcrz7y",
            $$css: true
        },
        containerReadOnly: {
            outlineStyle: "x1t137rt",
            paddingInlineStart: "x1c1uobl",
            paddingInlineEnd: "xyri2b",
            marginInlineStart: "x1lziwak",
            marginInlineEnd: "x14z9mp",
            marginLeft: null,
            marginRight: null,
            backgroundColor: "x3biohu xyl69t7",
            $$css: true
        },
        addOnBottomReadOnly: {
            paddingInlineStart: "x1c1uobl",
            paddingInlineEnd: "xyri2b",
            paddingLeft: null,
            paddingRight: null,
            $$css: true
        }
    };
    function d({ addOnBottom, addOnEnd, addOnStart, children, hasAddOnEnd, hasValue, isDisabled, isFocused, isMultiLine, isPlaceholderMode, isReadOnly, label, labelTestId, platform, shouldShowError }) {
        const b = o("WDSTextFieldVariants").WDSTextFieldLabelVariant(shouldShowError, isDisabled, hasAddOnEnd, platform);
        const v = o("WDSTextFieldVariants").WDSTextFieldColorVariant(shouldShowError, platform);
        const b_xstyleConfig = b.xstyleConfig;
        const v_xstyleConfig = v.xstyleConfig;
        const L = platform === "iOS";
        const Component = o("react-strict-dom").html.div;
        const Component_1 = o("react-strict-dom").html.label;
        const Component_2 = o("react-strict-dom").html.label;
        const Component_3 = o("react-strict-dom").html.div;
        const Component_4 = o("react-strict-dom").html.div;
        const Component_5 = o("react-strict-dom").html.div;
        const Component_6 = o("react-strict-dom").html.div;
        const Component_7 = o("react-strict-dom").html.div;
        return <Component_7 style={b_xstyleConfig.root}><Component_5 style={[
            c.container,
            b_xstyleConfig.container,
            v_xstyleConfig?.container,
            isDisabled && b_xstyleConfig.containerDisabled,
            isDisabled && v_xstyleConfig?.containerDisabled,
            isMultiLine === true && c.multiLineContainer,
            isReadOnly === true && c.containerReadOnly
        ]}>{addOnStart != null && <Component style={[
            b_xstyleConfig.addOnStart,
            isMultiLine === true && c.multiLineAddOn
        ]}>{addOnStart}</Component>}<Component_3 style={[
            c.content,
            b_xstyleConfig.content,
            isMultiLine === true && c.multiLineContent
        ]}>{label != null && !L && isPlaceholderMode !== true && <Component_1 data-testid={undefined} style={[
            b_xstyleConfig.label,
            v_xstyleConfig?.label,
            isDisabled && b_xstyleConfig.labelDisabled,
            isDisabled && v_xstyleConfig?.labelDisabled,
            isFocused && b_xstyleConfig.labelFocused,
            isFocused && v_xstyleConfig?.labelFocused,
            hasValue && b_xstyleConfig.labelFilled,
            hasValue && v_xstyleConfig?.labelFilled,
            (isFocused || hasValue) && u && b_xstyleConfig.labelFilled
        ]}>{label}</Component_1>}{L && label != null && isPlaceholderMode !== true && <Component_2 data-testid={undefined} style={[
            b_xstyleConfig.label,
            v_xstyleConfig?.label
        ]}>{label}</Component_2>}{children}</Component_3>{addOnEnd != null && <Component_4 style={[
            b_xstyleConfig.addOnEnd,
            isMultiLine === true && c.multiLineAddOn
        ]}>{addOnEnd}</Component_4>}</Component_5>{addOnBottom != null && <Component_6 style={[
            b_xstyleConfig.addOnBottom,
            isReadOnly === true && c.addOnBottomReadOnly
        ]}>{addOnBottom}</Component_6>}</Component_7>;
    }
    d.displayName = `${d.name} [from ${i.id}]`;
    l.default = d;
}, 98);