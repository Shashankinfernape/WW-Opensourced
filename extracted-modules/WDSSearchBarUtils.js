__d("WDSSearchBarUtils", [
    "fbt",
    "WDSButton.react",
    "WDSFlex.stylex",
    "WDSSearchBarConfig",
    "WDSSpinner.react",
    "react",
    "react-strict-dom",
    "stylex"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    let u;
    const c = u || (u = o("react"));
    const d = {
        iconContainer: {
            height: "x5yr21d",
            display: "x78zum5",
            alignItems: "x6s0dn4",
            justifyItems: "x1o2pa38",
            $$css: true
        },
        pointerButtonContainer: {
            height: "x10w6t97",
            width: "x187nhsf",
            $$css: true
        },
        androidTouchButtonContainer: {
            height: "x1vqgdyp",
            width: "x100vrsf",
            $$css: true
        },
        iOSTouchButtonContainer: {
            height: "xxk0z11",
            width: "xvy4d1p",
            color: "xhslqc4",
            $$css: true
        },
        spinnerCentered: {
            display: "x78zum5",
            alignItems: "x6s0dn4",
            justifyContent: "xl56j7k",
            $$css: true
        },
        cancelButtonContainer: {
            display: "x78zum5",
            width: "xnalus7",
            maxWidth: "x1t8xbu",
            opacity: "xg01cxk",
            visibility: "xlshs6z",
            transform: "xumwmo6",
            transition: "xy9syeq",
            $$css: true
        },
        cancelButtonVisible: {
            width: "xh8yej3",
            opacity: "x1hc1fzr",
            visibility: "xnpuxes",
            transform: "xbryuvx",
            $$css: true
        }
    };
    function MComponent({ EndIcon, density, onEndIconClick, platform, tabOrder }) {
        if (EndIcon == null || onEndIconClick == null) {
            return null;
        }
        let s;
        if (density === o("WDSSearchBarConfig").SearchBarDensity.POINTER) {
            s = d.pointerButtonContainer;
        } else if (platform === "android") {
            s = d.androidTouchButtonContainer;
        } else {
            s = d.iOSTouchButtonContainer;
        }
        const Component = r("WDSButton.react");
        const Component_1 = o("react-strict-dom").html.div;
        return <Component_1 style={d.iconContainer}><Component variant="borderless" size="small" onPress={onEndIconClick} Icon={EndIcon} aria-label="End icon button" tabOrder={tabOrder} widthMode="fit" xstyle={s}/></Component_1>;
    }
    MComponent.displayName = `${MComponent.name} [from ${i.id}]`;
    function p({ density, gpuAnimationEnabled, platform, size }) {
        let l;
        if (density === o("WDSSearchBarConfig").SearchBarDensity.POINTER) {
            l = d.pointerButtonContainer;
        } else if (platform === "android") {
            l = d.androidTouchButtonContainer;
        } else {
            l = d.iOSTouchButtonContainer;
        }
        const Component = o("react-strict-dom").html.div;
        const Component_1 = o("react-strict-dom").html.div;
        return <Component_1 style={d.iconContainer}><Component style={[
            l,
            d.spinnerCentered
        ]}>{c.jsx(r("WDSSpinner.react"), {
            gpuAnimationEnabled,
            size
        })}</Component></Component_1>;
    }
    p.displayName = `${p.name} [from ${i.id}]`;
    function Component({ isFocused, onCancel, textInput }) {
        const Component = r("WDSButton.react");
        const Component_1 = o("react-strict-dom").html.div;
        return <div {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WDSFlex.stylex").wdsFlex.flex, o("WDSFlex.stylex").wdsFlex.alignCenter), {
            children: [
                <div {...babelHelpers.extends({}, e.props(o("WDSFlex.stylex").wdsFlex.flex, o("WDSFlex.stylex").wdsFlex.flexGrow1, isFocused && o("WDSFlex.stylex").wdsFlex.flexShrink1), {
                    children: textInput
                })}/>,
                <Component_1 style={[
                    d.cancelButtonContainer,
                    isFocused && d.cancelButtonVisible
                ]}><Component platform="iOS" variant="borderless" label={s._("Cancel")} onPress={onCancel}/></Component_1>
            ]
        })}/>;
    }
    Component.displayName = `${Component.name} [from ${i.id}]`;
    l.SearchBarAddOnEnd = MComponent;
    l.SearchBarAddOnEndSpinner = p;
    l.SearchBarWrapperIOS = Component;
}, 226);