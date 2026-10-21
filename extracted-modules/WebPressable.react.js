__d("WebPressable.react", [
    "ExecutionEnvironment",
    "FBLogger",
    "WebPressability",
    "WebPressableGroupContext",
    "emptyHook",
    "joinClasses",
    "react",
    "stylex",
    "useWebPressableTouchStartHandler"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = [
        "accessibilityLabel",
        "accessibilityRelationship",
        "accessibilityRole",
        "accessibilityState",
        "accessibilityValue",
        "allowClickEventPropagation",
        "children",
        "className_DEPRECATED",
        "disabled",
        "draggable",
        "focusableDisabled",
        "forwardedRef",
        "link",
        "nativeID",
        "onBlur",
        "onContextMenu",
        "onFocus",
        "onFocusChange",
        "onFocusVisibleChange",
        "onHoverChange",
        "onHoverEnd",
        "onHoverMove",
        "onHoverStart",
        "onKeyDown",
        "onPress",
        "onPressChange",
        "onPressEnd",
        "onPressMove",
        "onPressStart",
        "preventContextMenu",
        "preventDefault",
        "style",
        "suppressFocusRing",
        "tabbable",
        "testID",
        "testOnly_state",
        "xstyle"
    ];
    let s;
    let u;
    let c;
    const d = c || (c = o("react"));
    const m = c;
    const { useCallback, useContext, useRef, useState } = m;
    const h = (s || (s = r("ExecutionEnvironment"))).canUseDOM ? o("WebPressability").usePressability : r("emptyHook").thatReturnsNull;
    const y = [
        "menuitem",
        "tab",
        "none"
    ];
    const C = {
        article: "article",
        banner: "header",
        complementary: "aside",
        contentinfo: "footer",
        figure: "figure",
        form: "form",
        heading: "h1",
        label: "label",
        link: "a",
        list: "ul",
        listitem: "li",
        main: "main",
        navigation: "nav",
        none: "div",
        region: "section"
    };
    function b(accessibilityRole, link) {
        let n = "div";
        if (accessibilityRole != null && y.includes(accessibilityRole) && link != null && link.url != null) {
            n = "a";
        } else if (accessibilityRole != null) {
            const r = C[accessibilityRole];
            if (r != null) {
                n = r;
            }
        }
        return n;
    }
    function v(accessibilityRole) {
        switch(accessibilityRole){
            case "label":
                return;
            default:
                return accessibilityRole;
        }
    }
    const S = (t)=>{
        const t_target = t.target;
        const e_tagName = t_target.tagName;
        const r = t_target.isContentEditable || e_tagName === "A" && t_target.href != null || e_tagName === "BUTTON" || e_tagName === "INPUT" || e_tagName === "SELECT" || e_tagName === "TEXTAREA";
        if (t_target.tabIndex === 0 && !r) {
            const o = t.key;
            if (o === "Enter") {
                return true;
            }
            const a = t_target.getAttribute("role");
            if ((o === " " || o === "Spacebar") && (a === "button" || a === "checkbox" || a === "combobox" || a === "menuitem" || a === "menuitemcheckbox" || a === "menuitemradio" || a === "option" || a === "radio" || a === "switch" || a === "tab")) {
                return true;
            }
        }
        return false;
    };
    function R(target) {
        if (typeof document !== "undefined" && typeof document.contains === "function") {
            return document.contains(target);
        }
        return false;
    }
    function L(e) {
        for(let t = e; t != null;){
            if (t.tagName === "A" && t.href != null) {
                return true;
            }
            t = t.parentNode;
        }
        return false;
    }
    function E({ altKey, ctrlKey, currentTarget, metaKey, shiftKey, target }, preventDefault) {
        let s = target;
        s = R(target) ? target : currentTarget;
        const u = L(s);
        const c = altKey || ctrlKey || metaKey || shiftKey;
        return preventDefault !== false && u && !c;
    }
    function KComponent(t) {
        const nRef = useRef(null);
        const o = useState(false);
        const a = o[0];
        const i = o[1];
        const l = useState(false);
        const s = l[0];
        const c = l[1];
        const m = useState(false);
        const y = m[0];
        const C = m[1];
        const R = useState(false);
        const L = R[0];
        const k = R[1];
        const D = useContext(r("WebPressableGroupContext"));
        const { accessibilityLabel, accessibilityRelationship, accessibilityRole, accessibilityState, accessibilityValue, allowClickEventPropagation } = t;
        const A = allowClickEventPropagation === undefined ? false : allowClickEventPropagation;
        const { children, className_DEPRECATED, disabled, draggable, focusableDisabled, forwardedRef, link, nativeID, onBlur, onContextMenu, onFocus, onFocusChange, onFocusVisibleChange, onHoverChange, onHoverEnd, onHoverMove, onHoverStart, onKeyDown, onPress, onPressChange, onPressEnd, onPressMove, onPressStart, preventContextMenu, preventDefault, style, suppressFocusRing } = t;
        const ce = suppressFocusRing === undefined ? false : suppressFocusRing;
        const { tabbable, testID, testOnly_state, xstyle } = t;
        const fe = babelHelpers.objectWithoutPropertiesLoose(t, e);
        const Ge = b(accessibilityRole, link);
        const he = disabled === true || accessibilityState?.disabled === true;
        const ye = accessibilityState?.hidden;
        const Ce = Ge === "a" && he !== true;
        const be = {
            disabled: he === true || testOnly_state?.disabled === true || false,
            focusVisible: s || testOnly_state?.focusVisible === true,
            focused: a || testOnly_state?.focused === true,
            hovered: y || testOnly_state?.hovered === true,
            pressed: L || testOnly_state?.pressed === true
        };
        const ve = typeof children === "function" ? children(be) : children;
        const Se = typeof className_DEPRECATED === "function" ? className_DEPRECATED(be) : className_DEPRECATED;
        const Re = typeof style === "function" ? style(be) : style;
        const Le = typeof xstyle === "function" ? xstyle(be) : xstyle;
        h(nRef, {
            disabled: he,
            onBlur,
            onContextMenu,
            onFocus,
            onFocusChange: useI(i, onFocusChange),
            onFocusVisibleChange: useI(c, onFocusVisibleChange),
            onHoverChange: useI(C, onHoverChange),
            onHoverEnd,
            onHoverMove,
            onHoverStart,
            onPressChange: useI(k, onPressChange),
            onPressEnd,
            onPressMove,
            onPressStart,
            preventContextMenu,
            preventDefault: preventDefault ?? true
        });
        const Ee = useCallback(function(e) {
            if (onPress) {
                onPress(e);
            }
            if ((onPress || link != null) && A !== true) {
                e.stopPropagation();
            }
            if (E(e, preventDefault)) {
                e.nativeEvent.preventDefault();
            }
        }, [
            A,
            link,
            onPress,
            preventDefault
        ]);
        const ke = useCallback(function(e) {
            if (onKeyDown) {
                onKeyDown(e);
            }
            if (S(e)) {
                const t = e.key;
                if (t === " " || t === "Spacebar") {
                    e.preventDefault();
                }
                if (onPress) {
                    onPress(e);
                    e.stopPropagation();
                }
            }
        }, [
            onKeyDown,
            onPress
        ]);
        const Ie = useCallback(function(e) {
            nRef.current = e;
            if (typeof forwardedRef === "function") {
                forwardedRef(e);
            } else if (forwardedRef != null) {
                forwardedRef.current = e;
            }
        }, [
            forwardedRef
        ]);
        r("useWebPressableTouchStartHandler")(nRef, D, Ee);
        let Te = -1;
        const De = he === true && focusableDisabled === true;
        if ((he !== true || De) && ye !== true && tabbable !== false) {
            Te = 0;
        }
        const xe = link?.download;
        const $e = (xe === true || typeof xe === "string") && Ce;
        return <Ge {...babelHelpers.extends({}, fe, {
            "aria-activedescendant": accessibilityRelationship?.activedescendant,
            "aria-busy": accessibilityState?.busy,
            "aria-checked": accessibilityState?.checked,
            "aria-controls": accessibilityRelationship?.controls,
            "aria-current": accessibilityRelationship?.current,
            "aria-describedby": accessibilityRelationship?.describedby,
            "aria-details": accessibilityRelationship?.details,
            "aria-disabled": he === true && accessibilityRole !== "none" ? he : undefined,
            "aria-errormessage": accessibilityRelationship?.errormessage,
            "aria-expanded": accessibilityState?.expanded,
            "aria-haspopup": accessibilityRelationship?.haspopup,
            "aria-hidden": ye,
            "aria-invalid": accessibilityState?.invalid,
            "aria-label": accessibilityLabel,
            "aria-labelledby": accessibilityRelationship?.labelledby,
            "aria-modal": accessibilityState?.modal,
            "aria-orientation": accessibilityState?.orientation,
            "aria-owns": accessibilityRelationship?.owns,
            "aria-pressed": accessibilityState?.pressed,
            "aria-readonly": accessibilityState?.readonly,
            "aria-required": accessibilityState?.required,
            "aria-selected": accessibilityState?.selected,
            "aria-valuemax": accessibilityValue?.max,
            "aria-valuemin": accessibilityValue?.min,
            "aria-valuenow": accessibilityValue?.now,
            "aria-valuetext": accessibilityValue?.text,
            attributionsrc: Ce ? link?.attributionsrc : undefined,
            children: ve,
            className: r("joinClasses")((u || (u = r("stylex")))(T.root, be.disabled && T.disabled, (!be.focusVisible || ce === true) && T.focusNotVisible, Le, D && T.rootInGroup), Se),
            "data-testid": undefined,
            download: $e ? xe : undefined,
            draggable,
            href: Ce ? link?.url : undefined,
            id: nativeID,
            onClick: he ? undefined : Ee,
            onKeyDown: he ? undefined : ke,
            ref: Ie,
            rel: Ce ? link?.rel : undefined,
            role: v(accessibilityRole),
            style: Re,
            tabIndex: Te,
            target: Ce ? link?.target : undefined
        })}/>;
    }
    KComponent.displayName = `${KComponent.name} [from ${i.id}]`;
    function useI(e, t) {
        return useCallback(function(n) {
            e(n);
            if (t) {
                t(n);
            }
        }, [
            t,
            e
        ]);
    }
    var T = {
        disabled: {
            cursor: "x1h6gzvc",
            $$css: true
        },
        focusNotVisible: {
            outlineStyle: "x1t137rt",
            $$css: true
        },
        root: {
            WebkitTapHighlightColor: "x1i10hfl",
            alignItems: "x1qjc9v5",
            backgroundColor: "xjbqb8w",
            borderTopColor: "xjqpnuy",
            borderInlineEndColor: "xc5r6h4",
            borderBottomColor: "xqeqjp1",
            borderInlineStartColor: "x1phubyo",
            borderTopStyle: "x13fuv20",
            borderInlineEndStyle: "x18b5jzi",
            borderBottomStyle: "x1q0q8m5",
            borderInlineStartStyle: "x1t7ytsu",
            borderTopWidth: "x972fbf",
            borderInlineEndWidth: "x10w94by",
            borderBottomWidth: "x1qhh985",
            borderInlineStartWidth: "x14e42zd",
            boxSizing: "x9f619",
            cursor: "x1ypdohk",
            display: "x78zum5",
            flexBasis: "xdl72j9",
            flexDirection: "xdt5ytf",
            flexShrink: "x2lah0s",
            listStyleType: "x3ct3a4",
            listStylePosition: null,
            listStyleImage: null,
            marginTop: "xdj266r",
            marginInlineEnd: "x14z9mp",
            marginBottom: "xat24cr",
            marginInlineStart: "x1lziwak",
            minHeight: "x2lwn1j",
            minWidth: "xeuugli",
            paddingTop: "xexx8yu",
            paddingInlineEnd: "xyri2b",
            paddingBottom: "x18d9i69",
            paddingInlineStart: "x1c1uobl",
            position: "x1n2onr6",
            textAlign: "x16tdsg8",
            textDecoration: "x1hl2dhg",
            touchAction: "xggy1nq",
            zIndex: "x1ja2u2z",
            $$css: true
        },
        rootInGroup: {
            touchAction: "x5ve5x3",
            $$css: true
        }
    };
    l.default = KComponent;
}, 98);