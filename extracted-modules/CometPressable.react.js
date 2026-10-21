__d("CometPressable.react", [
    "BaseButton.react",
    "BaseDisabledContext",
    "BaseLink.react",
    "CometPressableOverlay.react",
    "asyncToGeneratorRuntime",
    "react",
    "stylex",
    "useCometPressableBehavior",
    "useCometPressableContextMenu",
    "useCometPressableEventStates",
    "useCometPressableStyles",
    "useMergeRefs"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = [
        "ref"
    ];
    const s = [
        "allowClickEventPropagation",
        "children",
        "cursorDisabled",
        "xstyle",
        "disabled",
        "display",
        "expanding",
        "hideFocusOverlay",
        "isUsingCustomFocusRing",
        "hideHoverOverlay",
        "isContainerTarget",
        "linkProps",
        "onFocusChange",
        "onFocusIn",
        "onFocusOut",
        "onFocusVisibleChange",
        "onHoverChange",
        "onHoverIn",
        "onHoverMove",
        "onHoverOut",
        "onPress",
        "onPressAction",
        "onPressChange",
        "onPressIn",
        "onPressOut",
        "preventContextMenu",
        "overlayDisabled",
        "overlayOffset",
        "overlayFocusRingPosition",
        "overlayFocusVisibleStyle",
        "overlayHoveredStyle",
        "overlayPressedStyle",
        "overlayFocused",
        "overlayRadius",
        "overlayXStyle",
        "suppressFocusRing",
        "testOnly_pressed",
        "testid",
        "pressedStyleValue",
        "style",
        "dynamicHoverTiltAngle",
        "dynamicHoverTranslationPercent",
        "showDynamicHover"
    ];
    const u = [
        "url"
    ];
    let c;
    let d;
    const m = d || (d = o("react"));
    const p = d;
    const { startTransition, useCallback, useRef } = p;
    function HComponent(t) {
        const t_ref = t.ref;
        const i = babelHelpers.objectWithoutPropertiesLoose(t, e);
        const { allowClickEventPropagation, children, cursorDisabled } = i;
        const cursorDisabled_1 = cursorDisabled === undefined ? false : cursorDisabled;
        const { xstyle, disabled } = i;
        const b = disabled === undefined ? false : disabled;
        const { display, expanding } = i;
        const expanding_1 = expanding === undefined ? display === "block" : expanding;
        const i_hideFocusOverlay = i.hideFocusOverlay;
        const hideFocusOverlay = i_hideFocusOverlay === undefined ? false : i_hideFocusOverlay;
        const i_isUsingCustomFocusRing = i.isUsingCustomFocusRing;
        const I = i_isUsingCustomFocusRing === undefined ? false : i_isUsingCustomFocusRing;
        const i_hideHoverOverlay = i.hideHoverOverlay;
        const D = i_hideHoverOverlay === undefined ? false : i_hideHoverOverlay;
        const i_isContainerTarget = i.isContainerTarget;
        const isContainerTarget = i_isContainerTarget === undefined ? false : i_isContainerTarget;
        const { linkProps, onFocusChange, onFocusIn, onFocusOut, onFocusVisibleChange, onHoverChange, onHoverIn, onHoverMove, onHoverOut, onPress, onPressAction, onPressChange, onPressIn, onPressOut, preventContextMenu, overlayDisabled } = i;
        const overlayDisabled_1 = overlayDisabled === undefined ? false : overlayDisabled;
        const { overlayOffset, overlayFocusRingPosition, overlayFocusVisibleStyle, overlayHoveredStyle, overlayPressedStyle, overlayFocused } = i;
        const te = overlayFocused === undefined ? false : overlayFocused;
        const { overlayRadius, overlayXStyle, suppressFocusRing } = i;
        const suppressFocusRing_1 = suppressFocusRing === undefined ? false : suppressFocusRing;
        const i_testOnly_pressed = i.testOnly_pressed;
        const testOnly_pressed = i_testOnly_pressed === undefined ? false : i_testOnly_pressed;
        const { testid, pressedStyleValue, style, dynamicHoverTiltAngle, dynamicHoverTranslationPercent, showDynamicHover } = i;
        const _e = babelHelpers.objectWithoutPropertiesLoose(i, s);
        const feRef = useRef(null);
        const ge = r("useMergeRefs")(t_ref, feRef);
        const he = o("BaseDisabledContext").useBaseDisabledContext();
        const disabled_1 = he === true || b;
        const Ce = useCallback(function(e) {
            if (onPress) {
                onPress(e);
            }
            if (!e.defaultPrevented && onPressAction != null) {
                startTransition(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    yield onPressAction();
                }));
            }
        }, [
            onPress,
            onPressAction
        ]);
        const be = onPress != null || onPressAction != null ? Ce : undefined;
        const ve = r("useCometPressableEventStates")({
            onFocusChange,
            onFocusVisibleChange,
            onHoverChange,
            onPressChange,
            ref: feRef,
            testOnly_pressed
        });
        const { focused, focusVisible, hovered, onFocusChangeHandler, onFocusVisibleChangeHandler, onHoverChangeHandler, onPressChangesHandler, pressed } = ve;
        const xe = {
            onBlur: onFocusOut,
            onClick: be ?? onPress,
            onFocus: onFocusIn,
            onFocusChange: onFocusChangeHandler,
            onFocusVisibleChange: onFocusVisibleChangeHandler,
            onHoverChange: onHoverChangeHandler,
            onHoverEnd: onHoverOut,
            onHoverMove,
            onHoverStart: onHoverIn,
            onPressChange: onPressChangesHandler,
            onPressEnd: onPressOut,
            onPressStart: onPressIn
        };
        const $e = r("useCometPressableStyles")({
            cursorDisabled: cursorDisabled_1,
            disabled: disabled_1,
            display,
            expanding: expanding_1,
            focused,
            focusVisible,
            hideFocusOverlay,
            hovered,
            isLink: linkProps != null,
            overlayDisabled: overlayDisabled_1,
            overlayFocusRingPosition,
            pressed,
            pressedStyleValue,
            suppressFocusRing: suppressFocusRing_1,
            xstyle
        });
        const { pressedStyle, xstyle: xstyle_1 } = $e;
        r("useCometPressableContextMenu")({
            isContainerTarget,
            linkProps,
            localRef: feRef,
            onContextMenu: _e.onContextMenu,
            preventContextMenu
        });
        const Me = r("useCometPressableBehavior")();
        const { isPlaceholder, suppressInteractiveElements } = Me;
        const overlay = overlayDisabled_1 ? null : m.jsx(r("CometPressableOverlay.react"), {
            focusRingPosition: overlayFocusRingPosition,
            focusVisible: !hideFocusOverlay && (focusVisible || te),
            focusVisibleStyle: overlayFocusVisibleStyle,
            hovered: !D && hovered,
            hoveredStyle: overlayHoveredStyle,
            offset: overlayOffset,
            pressed,
            pressedStyle: overlayPressedStyle,
            radius: overlayRadius,
            showFocusRing: !I,
            xstyle: overlayXStyle
        });
        const Oe = typeof children === "function" ? children({
            disabled: disabled_1,
            focused,
            focusVisible,
            hovered,
            overlay,
            pressed
        }) : <>{children}{overlay}</>;
        const Be = babelHelpers.extends({}, style, pressedStyle);
        if (suppressInteractiveElements) {
            const We = display === "inline" ? "span" : "div";
            return <We {...babelHelpers.extends({
                display: display === "inline" ? display : "block",
                preventContextMenu
            }, _e, {
                className: (c || (c = r("stylex")))(xstyle_1),
                "data-testid": undefined,
                ref: ge,
                style: Be,
                children: Oe
            })}/>;
        }
        if (linkProps != null) {
            const qe = linkProps.url;
            const Ue = babelHelpers.objectWithoutPropertiesLoose(linkProps, u);
            const Ve = babelHelpers.extends({}, Ue, {
                href: qe
            });
            return m.jsx(r("BaseLink.react"), babelHelpers.extends({}, xe, _e, Ve, {
                brid: linkProps.brid,
                disabled: disabled_1,
                display: display === "inline" ? display : "block",
                fbclid: linkProps.fbclid,
                preventContextMenu,
                ref: ge,
                style: Be,
                suppressFocusRing: true,
                testid: undefined,
                xstyle: xstyle_1,
                children: Oe
            }));
        }
        return m.jsx(r("BaseButton.react"), babelHelpers.extends({}, xe, _e, {
            allowClickEventPropagation,
            disabled: disabled_1,
            display: display === "inline" ? display : "block",
            preventContextMenu,
            ref: ge,
            style: Be,
            suppressFocusRing: true,
            testid: undefined,
            xstyle: xstyle_1,
            children: Oe
        }));
    }
    HComponent.displayName = `${HComponent.name} [from ${i.id}]`;
    l.default = HComponent;
}, 98);