__d("BaseButton.react", [
    "BaseButtonPopoverContext",
    "Pressable.react",
    "PressableText.react",
    "react",
    "react-compiler-runtime",
    "useFeedPressEventHandler"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const e_useContext = e.useContext;
    function c(e) {
        const t = o("react-compiler-runtime").c(60);
        const { ref, allowClickEventPropagation, "aria-activedescendant": aria_activedescendant, "aria-busy": aria_busy, "aria-checked": aria_checked, "aria-controls": aria_controls, "aria-current": aria_current, "aria-describedby": aria_describedby, "aria-disabled": aria_disabled, "aria-expanded": aria_expanded, "aria-haspopup": aria_haspopup, "aria-hidden": aria_hidden, "aria-invalid": aria_invalid, "aria-label": aria_label, "aria-labelledby": aria_labelledby, "aria-pressed": aria_pressed, "aria-required": aria_required, "aria-selected": aria_selected, children, disabled, display, focusable, focusableDisabled, id, label, onBlur, onClick, onContextMenu, onFocus, onFocusChange, onFocusVisibleChange, onHoverChange, onHoverEnd, onHoverMove, onHoverStart, onPressChange, onPressEnd, onPressStart, preventContextMenu, role, style, suppressFocusRing, suppressHydrationWarning, testid, testOnly_pressed, xstyle } = e;
        const J = disabled === undefined ? false : disabled;
        const Z = display === undefined ? "inline" : display;
        const ee = testOnly_pressed === undefined ? false : testOnly_pressed;
        const te = role;
        const ne = te !== "none" ? aria_label ?? label : undefined;
        const re = ref;
        let oe;
        let ae;
        let ie;
        oe = r("useFeedPressEventHandler")(onClick);
        ae = r("useFeedPressEventHandler")(onPressStart);
        ie = r("useFeedPressEventHandler")(onContextMenu);
        const le = e_useContext(r("BaseButtonPopoverContext"));
        const haspopup = le != null && aria_haspopup == null ? le.haspopup : aria_haspopup;
        let ue;
        if (t[0] !== aria_activedescendant || t[1] !== aria_controls || t[2] !== aria_current || t[3] !== aria_describedby || t[4] !== aria_labelledby || t[5] !== haspopup) {
            ue = {
                activedescendant: aria_activedescendant,
                controls: aria_controls,
                current: aria_current,
                describedby: aria_describedby,
                haspopup,
                labelledby: aria_labelledby
            };
            t[0] = aria_activedescendant;
            t[1] = aria_controls;
            t[2] = aria_current;
            t[3] = aria_describedby;
            t[4] = aria_labelledby;
            t[5] = haspopup;
            t[6] = ue;
        } else {
            ue = t[6];
        }
        const ce = aria_disabled ?? J;
        const expanded = le != null && aria_expanded == null ? le.expanded : aria_expanded;
        let me;
        if (t[7] !== aria_busy || t[8] !== aria_checked || t[9] !== aria_hidden || t[10] !== aria_invalid || t[11] !== aria_pressed || t[12] !== aria_required || t[13] !== aria_selected || t[14] !== ce || t[15] !== expanded) {
            me = {
                busy: aria_busy,
                checked: aria_checked,
                disabled: ce,
                expanded,
                hidden: aria_hidden,
                invalid: aria_invalid,
                pressed: aria_pressed,
                required: aria_required,
                selected: aria_selected
            };
            t[7] = aria_busy;
            t[8] = aria_checked;
            t[9] = aria_hidden;
            t[10] = aria_invalid;
            t[11] = aria_pressed;
            t[12] = aria_required;
            t[13] = aria_selected;
            t[14] = ce;
            t[15] = expanded;
            t[16] = me;
        } else {
            me = t[16];
        }
        let pe;
        if (t[17] !== ee) {
            pe = {
                disabled: false,
                focused: false,
                focusVisible: false,
                hovered: false,
                pressed: ee
            };
            t[17] = ee;
            t[18] = pe;
        } else {
            pe = t[18];
        }
        let _e;
        if (t[19] !== ne || t[20] !== J || t[21] !== re || t[22] !== id || t[23] !== onBlur || t[24] !== onFocus || t[25] !== onFocusChange || t[26] !== onFocusVisibleChange || t[27] !== onHoverChange || t[28] !== onHoverEnd || t[29] !== onHoverMove || t[30] !== onHoverStart || t[31] !== onPressChange || t[32] !== onPressEnd || t[33] !== preventContextMenu || t[34] !== style || t[35] !== suppressHydrationWarning || t[36] !== ue || t[37] !== me || t[38] !== pe || t[39] !== testid || t[40] !== ie || t[41] !== oe || t[42] !== ae || t[43] !== xstyle) {
            _e = {
                accessibilityLabel: ne,
                accessibilityRelationship: ue,
                accessibilityState: me,
                disabled: J,
                forwardedRef: re,
                nativeID: id,
                onBlur,
                onContextMenu: ie,
                onFocus,
                onFocusChange,
                onFocusVisibleChange,
                onHoverChange,
                onHoverEnd,
                onHoverMove,
                onHoverStart,
                onPress: oe,
                onPressChange,
                onPressEnd,
                onPressStart: ae,
                preventContextMenu,
                style,
                suppressHydrationWarning,
                testID: testid,
                testOnly_state: pe,
                xstyle
            };
            t[19] = ne;
            t[20] = J;
            t[21] = re;
            t[22] = id;
            t[23] = onBlur;
            t[24] = onFocus;
            t[25] = onFocusChange;
            t[26] = onFocusVisibleChange;
            t[27] = onHoverChange;
            t[28] = onHoverEnd;
            t[29] = onHoverMove;
            t[30] = onHoverStart;
            t[31] = onPressChange;
            t[32] = onPressEnd;
            t[33] = preventContextMenu;
            t[34] = style;
            t[35] = suppressHydrationWarning;
            t[36] = ue;
            t[37] = me;
            t[38] = pe;
            t[39] = testid;
            t[40] = ie;
            t[41] = oe;
            t[42] = ae;
            t[43] = xstyle;
            t[44] = _e;
        } else {
            _e = t[44];
        }
        const fe = _e;
        if (Z === "block") {
            const ge = te === "menuitem" || te === "menuitemcheckbox" || te === "menuitemradio" || te === "none" || te === "gridcell" || te === "switch" || te === "combobox" || te === "checkbox" || te === "tab" || te === "radio" || te === "option" ? te : "button";
            let he;
            if (t[45] !== ge || t[46] !== allowClickEventPropagation || t[47] !== fe || t[48] !== children || t[49] !== focusable || t[50] !== focusableDisabled || t[51] !== suppressFocusRing) {
                he = s.jsx(r("Pressable.react"), babelHelpers.extends({}, fe, {
                    accessibilityRole: ge,
                    allowClickEventPropagation,
                    focusableDisabled,
                    suppressFocusRing,
                    tabbable: focusable,
                    children
                }));
                t[45] = ge;
                t[46] = allowClickEventPropagation;
                t[47] = fe;
                t[48] = children;
                t[49] = focusable;
                t[50] = focusableDisabled;
                t[51] = suppressFocusRing;
                t[52] = he;
            } else {
                he = t[52];
            }
            return he;
        } else {
            const ye = te === "combobox" || te === "menuitem" || te === "menuitemcheckbox" || te === "menuitemradio" || te === "option" || te === "none" || te === "link" || te === "tab" ? te : "button";
            let Ce;
            if (t[53] !== ye || t[54] !== fe || t[55] !== children || t[56] !== focusable || t[57] !== focusableDisabled || t[58] !== suppressFocusRing) {
                Ce = s.jsx(r("PressableText.react"), babelHelpers.extends({
                    focusable,
                    focusableDisabled
                }, fe, {
                    accessibilityRole: ye,
                    direction: "none",
                    suppressFocusRing,
                    children
                }));
                t[53] = ye;
                t[54] = fe;
                t[55] = children;
                t[56] = focusable;
                t[57] = focusableDisabled;
                t[58] = suppressFocusRing;
                t[59] = Ce;
            } else {
                Ce = t[59];
            }
            return Ce;
        }
    }
    l.default = c;
}, 98);