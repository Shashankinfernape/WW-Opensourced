__d("WDSSearchBar.react", [
    "BaseTextInputV2.react",
    "Locale",
    "MagnifyingglassIOS.svg.react",
    "UserAgent",
    "WAWebKeyboardShortcuts",
    "WDSChip.react",
    "WDSFlex.stylex",
    "WDSIconIcArrowBack.react",
    "WDSIconIcClose.react",
    "WDSIconIcSearch.react",
    "WDSSearchBarConfig",
    "WDSSearchBarUtils",
    "WDSShortcut.react",
    "XmarkCircleFillIOS.svg.react",
    "react",
    "react-strict-dom",
    "stylex",
    "useMergeRefs",
    "wdsHeight"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = [
        "ref"
    ];
    let s;
    let u;
    const c = u || (u = o("react"));
    const d = u;
    const { useCallback, useEffect, useRef, useState } = d;
    const g = {
        focusRingHideOutline: {
            outline: "x1ucz5p",
            $$css: true
        }
    };
    const h = r("UserAgent").isPlatform("Mac OS X") ? "macWeb" : "windowsWeb";
    const dir = o("Locale").isRTL() ? "rtl" : "ltr";
    function CComponent(t) {
        const t_ref = t.ref;
        const { EndIcon, endAccessory, gpuAnimationEnabled = false, hintText, loading = false, onEndIconClick, onValueChange, onChange, onFocus, onBlur, onKeyDown, onEnter, onClear, value, testid, platform = h, shortcut, defaultValue = "", tabOrder, autoComplete = "off", autoFocus = false, xstyle } = babelHelpers.objectWithoutPropertiesLoose(t, e);
        const VRef = useRef(null);
        const HRef = useRef(null);
        const G = useState(function() {
            return String(defaultValue);
        });
        const z = G[0];
        const j = G[1];
        const K = value ?? z;
        const onValueChange_1 = useCallback(function(e) {
            onValueChange?.(e);
            if (value == null) {
                j(e);
            }
        }, [
            value,
            onValueChange
        ]);
        const X = useCallback(function() {
            onClear?.();
            onValueChange?.("");
            if (value == null) {
                j("");
            }
        }, [
            value,
            onClear,
            onValueChange
        ]);
        const Y = useState(false);
        const isFocused = Y[0];
        const Z = Y[1];
        const ee = useCallback(function(e) {
            if (e.key === "Escape") {
                X();
                if (HRef.current != null) {
                    HRef.current.blur();
                }
            }
            onKeyDown?.(e);
        }, [
            X,
            onKeyDown
        ]);
        useEffect(function() {
            const HRef_current = HRef.current;
            HRef_current?.addEventListener("keydown", ee);
            return function() {
                HRef_current?.removeEventListener("keydown", ee);
            };
        }, [
            ee
        ]);
        const te = r("useMergeRefs")(HRef, t_ref);
        const ne = platform === "macWeb" || platform === "windowsWeb";
        const density = ne ? o("WDSSearchBarConfig").SearchBarDensity.POINTER : o("WDSSearchBarConfig").SearchBarDensity.TOUCH;
        const variant = o("WDSSearchBarConfig").getSearchBarVariant(density, platform);
        const ae = o("WDSSearchBarConfig").getSearchIconSize(density);
        const onSubmit = function(t) {
            t.preventDefault();
            t.stopPropagation();
            onEnter?.(K);
        };
        useEffect(function() {
            if (value != null) {
                j(value);
            }
        }, [
            value
        ]);
        useEffect(function() {
            if (HRef.current != null && tabOrder != null) {
                HRef.current.setAttribute("data-tab", String(tabOrder));
            }
        }, [
            tabOrder
        ]);
        let le;
        if (shortcut != null) {
            if (typeof shortcut === "object") {
                le = shortcut;
            } else {
                le = o("WAWebKeyboardShortcuts").getWDSShortcuts(shortcut);
            }
        }
        const se = ((endAccessory_1)=>{
            if ((typeof endAccessory_1 === "object" && endAccessory_1 !== null || typeof endAccessory_1 === "function") && endAccessory_1.kind === "chip" && "props" in endAccessory_1) {
                const t = endAccessory_1.props;
                return c.jsx(r("WDSChip.react"), babelHelpers.extends({}, t), "accessory");
            }
            return null;
        })(endAccessory);
        let ue = null;
        if (loading) {
            ue = c.jsx(o("WDSSearchBarUtils").SearchBarAddOnEndSpinner, {
                density,
                gpuAnimationEnabled,
                platform,
                size: ae
            }, "builtin");
        } else if (K !== "") {
            const Component = o("WDSSearchBarUtils").SearchBarAddOnEnd;
            ue = <Component key="builtin" platform={platform} EndIcon={r(platform === "iOS" ? "XmarkCircleFillIOS.svg.react" : "WDSIconIcClose.react")} onEndIconClick={X} density={density} tabOrder={tabOrder}/>;
        } else if (EndIcon != null) {
            const Component = o("WDSSearchBarUtils").SearchBarAddOnEnd;
            ue = <Component key="builtin" EndIcon={EndIcon} platform={platform} onEndIconClick={onEndIconClick} density={density} tabOrder={tabOrder}/>;
        }
        const ce = ne && le != null && !loading && K === "" ? c.jsx(r("WDSShortcut.react"), babelHelpers.extends({}, le), "shortcut") : null;
        const de = [
            ce,
            se,
            ue
        ].filter(Boolean);
        const addOnEnd = de.length === 0 ? undefined : de.length === 1 ? de[0] : <div {...babelHelpers.extends({}, (s || (s = r("stylex"))).props(o("WDSFlex.stylex").wdsFlex.flex, o("WDSFlex.stylex").wdsFlex.alignCenter, o("WDSFlex.stylex").wdsFlex.columnGapHalf, o("wdsHeight").wdsHeight.fullHeight), {
            children: de
        })}/>;
        const pe = useCallback(function(e) {
            Z(true);
            onFocus?.(e);
        }, [
            onFocus
        ]);
        const _e = useCallback(function(e) {
            Z(false);
            onBlur?.(e);
        }, [
            onBlur
        ]);
        let fe;
        if (platform === "android" && isFocused) {
            fe = c.jsx(r("WDSIconIcArrowBack.react"), {
                width: ae,
                height: ae
            });
        } else if (platform === "iOS") {
            fe = c.jsx(r("MagnifyingglassIOS.svg.react"), {
                width: ae,
                height: ae
            });
        } else {
            fe = c.jsx(r("WDSIconIcSearch.react"), {
                width: ae,
                height: ae
            });
        }
        const Component = r("BaseTextInputV2.react");
        const textInput = <Component placeholder={hintText} testid={undefined} ref={te} aria-label={hintText} addOnStart={fe} autoComplete={autoComplete} autoFocus={autoFocus} onValueChange={onValueChange_1} onChange={onChange} onFocus={pe} onBlur={_e} value={K} variant={variant} addOnEnd={addOnEnd} suppressFocusRing focusRingXStyle={g.focusRingHideOutline}/>;
        const Component_1 = o("WDSSearchBarUtils").SearchBarWrapperIOS;
        const he = platform === "iOS" ? <Component_1 isFocused={isFocused} onCancel={X} textInput={textInput}/> : textInput;
        if (onEnter) {
            return <form {...babelHelpers.extends({
                ref: VRef,
                onSubmit,
                dir
            }, (s || (s = r("stylex"))).props(xstyle), {
                children: he
            })}/>;
        }
        const Component_2 = o("react-strict-dom").html.div;
        return <Component_2 dir={dir} ref={VRef} style={xstyle}>{he}</Component_2>;
    }
    CComponent.displayName = `${CComponent.name} [from ${i.id}]`;
    l.default = CComponent;
}, 98);