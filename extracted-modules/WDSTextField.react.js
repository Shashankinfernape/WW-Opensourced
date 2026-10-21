__d("WDSTextField.react", [
    "BaseTextInputV2.react",
    "Locale",
    "UserAgent",
    "WDSTextFieldUtils",
    "WDSTextFieldUtils.iOS",
    "WDSTextFieldVariants",
    "react"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = [
        "ref"
    ];
    let s;
    const u = s || (s = o("react"));
    const c = s;
    const { useCallback, useEffect, useId, useLayoutEffect, useRef, useState } = c;
    const h = {
        focusRingHideOutline: {
            outline: "x1ucz5p",
            $$css: true
        }
    };
    const y = o("Locale").isRTL();
    const C = 8;
    const b = r("UserAgent").isPlatform("Mac OS X") ? "macWeb" : "windowsWeb";
    function v(t) {
        const t_ref = t.ref;
        const { EndIcon, StartIcon, bottomText, defaultValue = "", error = false, errorText, success = false, successText, label, floatingLabel = true, maxCharacterCount, onEndIconClick, onValueChange, onChange, onFocus, onBlur, onEnter, value, prefix, suffix, disabled, loading = false, testid, labelTestId, loadingText, readOnly, type, autoComplete, name, endIconAriaLabel, platform = b } = babelHelpers.objectWithoutPropertiesLoose(t, e);
        const ne = useState(function() {
            return String(defaultValue);
        });
        const re = ne[0];
        const oe = ne[1];
        const ae = value ?? re;
        const ie = useState(0);
        const le = ie[0];
        const se = ie[1];
        const ue = useState(0);
        const ce = ue[0];
        const de = ue[1];
        const meRef = useRef(null);
        const pe = useId();
        const bottomId = `bottom-text-${pe}`;
        const fe = platform === "iOS";
        const ge = maxCharacterCount != null && ae.length > maxCharacterCount;
        const shouldShowError = error || ge;
        const ye = disabled === true && !shouldShowError;
        const Ce = useState(false);
        const be = Ce[0];
        const ve = Ce[1];
        useLayoutEffect(function() {
            if (meRef.current) {
                const e = meRef.current;
                const t = e.querySelector("label");
                if (t) {
                    const n = t.getBoundingClientRect();
                    const r = e.getBoundingClientRect();
                    if (y === true) {
                        const o = r.right - n.right;
                        const a = o - C;
                        se(a);
                    } else {
                        const i = n.left - r.left;
                        const l = i - C;
                        se(-l);
                    }
                }
            }
        }, [
            StartIcon,
            prefix
        ]);
        useLayoutEffect(function() {
            if (meRef.current) {
                const e = meRef.current;
                de(e.offsetWidth);
            }
        }, []);
        const Se = useCallback(function(e) {
            onValueChange?.(e);
            if (value == null) {
                oe(e);
            }
        }, [
            value,
            onValueChange
        ]);
        const Re = function(t) {
            t.preventDefault();
            t.stopPropagation();
            onEnter?.();
        };
        const onClearInput = useCallback(function() {
            onValueChange?.("");
            if (value == null) {
                oe("");
            }
        }, [
            value,
            onValueChange
        ]);
        const Ee = useCallback(function() {
            ve(true);
            onFocus?.();
        }, [
            onFocus
        ]);
        const ke = useCallback(function() {
            ve(false);
            onBlur?.();
        }, [
            onBlur
        ]);
        useEffect(function() {
            if (value != null) {
                oe(value);
            }
        }, [
            value
        ]);
        const Ie = fe ? shouldShowError && errorText != null || loading && loadingText != null || success && successText != null : bottomText != null || errorText != null || maxCharacterCount != null;
        let addOnBottom = null;
        if (Ie) {
            if (fe) {
                addOnBottom = u.jsx(o("WDSTextFieldUtils.iOS").TextFieldAddOnBottom, {
                    errorText,
                    loading,
                    loadingText,
                    shouldShowError,
                    successText,
                    shouldShowSuccess: success
                });
            } else {
                addOnBottom = u.jsx(o("WDSTextFieldUtils").TextFieldAddOnBottom, {
                    bottomText,
                    errorText,
                    maxCharacterCount,
                    value: ae,
                    platform,
                    shouldShowError,
                    bottomId
                });
            }
        }
        const De = fe ? error || maxCharacterCount != null || loading || success || ae.length > 0 : shouldShowError || EndIcon != null || suffix != null || loading;
        let addOnEnd = null;
        const Component = o("WDSTextFieldUtils.iOS").TextFieldAddOnEnd;
        const Component_1 = o("WDSTextFieldUtils").TextFieldAddOnEnd;
        if (De) {
            if (fe) {
                addOnEnd = <Component shouldShowError={error} maxCharacterCount={maxCharacterCount} value={ae} shouldShowSuccess={success} loading={loading} onClearInput={onClearInput} isFocused={be && readOnly !== true}/>;
            } else {
                addOnEnd = <Component_1 shouldShowError={shouldShowError} EndIcon={EndIcon} endIconAriaLabel={endIconAriaLabel} suffix={suffix} onEndIconClick={onEndIconClick} loading={loading} platform={platform}/>;
            }
        }
        const $e = StartIcon != null || prefix != null;
        let addOnStart = null;
        if ($e) {
            if (fe) {
                addOnStart = u.jsx(o("WDSTextFieldUtils.iOS").TextFieldAddOnStart, {
                    prefix
                });
            } else {
                addOnStart = u.jsx(o("WDSTextFieldUtils").TextFieldAddOnStart, {
                    prefix,
                    StartIcon,
                    platform
                });
            }
        }
        const Ne = floatingLabel === false && (be || ae !== "") ? "" : label;
        const Component_2 = r("BaseTextInputV2.react");
        const Me = <Component_2 readOnly={readOnly} type={type} autoComplete={autoComplete} name={name} disabled={ye} testid={undefined} labelTestId={labelTestId} ref={t_ref} label={Ne} addOnStart={addOnStart} addOnEnd={addOnEnd} addOnBottom={addOnBottom} onValueChange={Se} onChange={onChange} onFocus={Ee} onBlur={ke} value={ae} variant={o("WDSTextFieldVariants").WDSTextFieldLabelVariant(shouldShowError, ye, De, platform)} variantColor={o("WDSTextFieldVariants").WDSTextFieldColorVariant(shouldShowError, platform)} suppressFocusRing focusRingXStyle={h.focusRingHideOutline} aria-invalid={shouldShowError} aria-errormessage={shouldShowError && addOnBottom ? bottomId : undefined} aria-describedby={addOnBottom ? bottomId : undefined}/>;
        if (onEnter) {
            return <form ref={meRef} style={babelHelpers.extends({
                [o("WDSTextFieldVariants").labelMoveDistanceVarname]: `${le}px`
            }, fe && {
                [o("WDSTextFieldVariants").textFieldLabelWidth]: `calc(0.35 * (${ce}px - 2 * ${o("WDSTextFieldVariants").iOSTextInputContainerPaddingInline}))`
            })} onSubmit={Re}>{Me}</form>;
        }
        return <div ref={meRef} style={babelHelpers.extends({
            [o("WDSTextFieldVariants").labelMoveDistanceVarname]: `${le}px`
        }, fe && {
            [o("WDSTextFieldVariants").textFieldLabelWidth]: `calc(0.35 * (${ce}px - 2 * ${o("WDSTextFieldVariants").iOSTextInputContainerPaddingInline}))`
        })}>{Me}</div>;
    }
    v.displayName = `${v.name} [from ${i.id}]`;
    l.default = v;
}, 98);