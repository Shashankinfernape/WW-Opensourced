__d("WAWebPhoneNumberInput.react", [
    "WAIsoToCc",
    "WAWebClassnames",
    "WAWebCopyPasteSelectable.react",
    "WAWebLinkDevicePhoneNumberEntryInputFormatUtils",
    "WAWebUA",
    "WDSPaddings.stylex",
    "WDSTextField.react",
    "nullthrows",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useMergeRefs"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = s;
    const { useEffect, useRef, useState } = c;
    const _ = {
        phoneNumberText: {
            fontSize: "x1jchvi3",
            fontVariantNumeric: "xss6m8b",
            $$css: true
        },
        input: {
            position: "x1n2onr6",
            color: "x14ug900",
            zIndex: "x1n327nk",
            width: "xh8yej3",
            borderTopWidth: "x972fbf",
            borderInlineEndWidth: "x10w94by",
            borderBottomWidth: "x1qhh985",
            borderInlineStartWidth: "x14e42zd",
            backgroundColor: "xjbqb8w",
            ":focus_outline": "x1uvtmcs",
            $$css: true
        }
    };
    function f(t) {
        const n = o("react-compiler-runtime").c(43);
        const { ariaLabel, countryCodeIso, errorMessage, errorMessageDOMId, errorShown, icon, onBlur, onChange, onEnter, onFocus, phoneNumberWithoutCountryPrefix, ref, showCountryPrefix, theme } = t;
        const k = showCountryPrefix === undefined ? true : showCountryPrefix;
        const I = theme === undefined ? "default" : theme;
        const T = I === "wds";
        const D = useState(null);
        const x = D[0];
        const $ = D[1];
        const PRef = useRef(null);
        const N = r("useMergeRefs")(ref, PRef);
        const M = useState(true);
        const w = M[0];
        const A = M[1];
        const F = countryCodeIso == null ? null : r("WAIsoToCc")[countryCodeIso];
        let O;
        let B;
        if (n[0] !== countryCodeIso || n[1] !== w || n[2] !== F || n[3] !== phoneNumberWithoutCountryPrefix || n[4] !== k) {
            const W = o("WAWebLinkDevicePhoneNumberEntryInputFormatUtils").formatPhoneNumberInput({
                countryCodeIso,
                phoneNumberWithoutCountryCode: phoneNumberWithoutCountryPrefix ?? ""
            });
            const q = r("nullthrows")(W, "Unexpected null phone number format result, likely because of invalid country code");
            const { formattedInputValue, placeholder } = q;
            O = placeholder;
            B = k ? o("WAWebLinkDevicePhoneNumberEntryInputFormatUtils").getFullFormattedInputValue(w, F, formattedInputValue) : formattedInputValue;
            n[0] = countryCodeIso;
            n[1] = w;
            n[2] = F;
            n[3] = phoneNumberWithoutCountryPrefix;
            n[4] = k;
            n[5] = O;
            n[6] = B;
        } else {
            O = n[5];
            B = n[6];
        }
        const H = B;
        const GRef = useRef(null);
        let z;
        let j;
        if (n[7] !== x || n[8] !== H) {
            z = function() {
                let e = null;
                if (x != null && x !== GRef.current) {
                    GRef.current = x;
                    if (x.shouldPositionNextToDigit) {
                        const t = Array.from(H.matchAll(/\d/g));
                        if (t.length > x.selectionStart) {
                            e = t[x.selectionStart].index;
                        }
                    } else {
                        e = x.selectionStart;
                    }
                }
                if (e != null && PRef.current instanceof HTMLInputElement) {
                    PRef.current.setSelectionRange(e, e);
                }
            };
            j = [
                x,
                H
            ];
            n[7] = x;
            n[8] = H;
            n[9] = z;
            n[10] = j;
        } else {
            z = n[9];
            j = n[10];
        }
        useEffect(z, j);
        let K;
        if (n[11] !== countryCodeIso || n[12] !== onChange || n[13] !== F || n[14] !== phoneNumberWithoutCountryPrefix || n[15] !== k) {
            K = function({ target }) {
                const { value, selectionStart } = target;
                const a = k ? value : `${F ?? ""}${value}`;
                const l = o("WAWebLinkDevicePhoneNumberEntryInputFormatUtils").cleanPhoneNumberInputValue(a);
                const { countryCodeIso: countryCodeIso_1, phoneNumberWithoutCountryCode } = l;
                if (countryCodeIso_1 === countryCodeIso && phoneNumberWithoutCountryCode === phoneNumberWithoutCountryPrefix) {
                    $({
                        selectionStart,
                        shouldPositionNextToDigit: false
                    });
                } else {
                    const d = o("WAWebLinkDevicePhoneNumberEntryInputFormatUtils").cleanPhoneNumberInputValue(value.substr(0, selectionStart ?? 0));
                    const m = d.fullRawPhoneNumber;
                    $({
                        selectionStart: k && F != null && m.length === 0 ? F?.toString().length ?? 0 : m.length,
                        shouldPositionNextToDigit: true
                    });
                }
                if (countryCodeIso_1 == null) {
                    A(value.includes("+"));
                } else {
                    A(true);
                }
                onChange(g(countryCodeIso, countryCodeIso_1), phoneNumberWithoutCountryCode);
            };
            n[11] = countryCodeIso;
            n[12] = onChange;
            n[13] = F;
            n[14] = phoneNumberWithoutCountryPrefix;
            n[15] = k;
            n[16] = K;
        } else {
            K = n[16];
        }
        const Q = K;
        let X;
        if (n[17] !== H.length || n[18] !== onFocus) {
            X = function() {
                $({
                    selectionStart: H.length,
                    shouldPositionNextToDigit: false
                });
                onFocus?.();
            };
            n[17] = H.length;
            n[18] = onFocus;
            n[19] = X;
        } else {
            X = n[19];
        }
        const Y = X;
        let J;
        if (n[20] !== T) {
            J = ({
                0: {
                    className: "x1n2onr6"
                },
                1: {
                    className: "x1n2onr6 xh8yej3"
                }
            })[!!T << 0];
            n[20] = T;
            n[21] = J;
        } else {
            J = n[21];
        }
        let Z;
        if (n[22] !== onEnter) {
            Z = function(t) {
                t.preventDefault();
                onEnter?.();
            };
            n[22] = onEnter;
            n[23] = Z;
        } else {
            Z = n[23];
        }
        let ee;
        if (n[24] !== ariaLabel || n[25] !== errorMessage || n[26] !== errorMessageDOMId || n[27] !== errorShown || n[28] !== H || n[29] !== Q || n[30] !== Y || n[31] !== icon || n[32] !== T || n[33] !== N || n[34] !== onBlur || n[35] !== O) {
            const Component = r("WDSTextField.react");
            ee = T ? <Component ref={N} testid="phone-number-input" label={ariaLabel} prefix={icon ?? undefined} error={errorShown} errorText={errorMessage} value={H} onChange={Q} onFocus={Y} onBlur={onBlur}/> : <><H9Component formattedInputValue={H} placeholder={O}/><input ref={N} dir="ltr" data-testid="phone-number-input" aria-label={ariaLabel} aria-describedby={errorShown ? errorMessageDOMId : ""} aria-required="true" aria-invalid={errorShown ? "true" : "false"} className={o("WAWebClassnames").classnamesConvertMeToStylexPlease(o("WAWebCopyPasteSelectable.react").SELECTABLE_CSS_CLASS, (e || (e = r("stylex")))(_.input, _.phoneNumberText, o("WDSPaddings.stylex").wdsPaddings.padding0))} type="text" value={H} onChange={Q} onFocus={Y} onBlur={onBlur}/></>;
            n[24] = ariaLabel;
            n[25] = errorMessage;
            n[26] = errorMessageDOMId;
            n[27] = errorShown;
            n[28] = H;
            n[29] = Q;
            n[30] = Y;
            n[31] = icon;
            n[32] = T;
            n[33] = N;
            n[34] = onBlur;
            n[35] = O;
            n[36] = ee;
        } else {
            ee = n[36];
        }
        let te;
        if (n[37] !== ee || n[38] !== Z) {
            te = <form onSubmit={Z}>{ee}</form>;
            n[37] = ee;
            n[38] = Z;
            n[39] = te;
        } else {
            te = n[39];
        }
        let ne;
        if (n[40] !== te || n[41] !== J) {
            ne = <div {...babelHelpers.extends({}, J, {
                children: te
            })}/>;
            n[40] = te;
            n[41] = J;
            n[42] = ne;
        } else {
            ne = n[42];
        }
        return ne;
    }
    function g(countryCodeIso, t) {
        if (t != null && countryCodeIso != null && r("WAIsoToCc")[t] === r("WAIsoToCc")[countryCodeIso]) {
            return countryCodeIso;
        }
        return t;
    }
    function H9Component(e) {
        const t = o("react-compiler-runtime").c(9);
        const { formattedInputValue, placeholder } = e;
        let a;
        if (t[0] !== placeholder) {
            a = placeholder.split(/(_+)/).map(y);
            t[0] = placeholder;
            t[1] = a;
        } else {
            a = t[1];
        }
        const i = a;
        let l;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            l = {
                className: "x10l6tqk xs7f9wi xu96u03 xhslqc4 x126k92a x87ps6o x1jchvi3 xss6m8b"
            };
            t[2] = l;
        } else {
            l = t[2];
        }
        let s;
        if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
            s = {
                className: "x19co3pv"
            };
            t[3] = s;
        } else {
            s = t[3];
        }
        let c;
        if (t[4] !== formattedInputValue) {
            c = <span {...babelHelpers.extends({}, s, {
                children: formattedInputValue
            })}/>;
            t[4] = formattedInputValue;
            t[5] = c;
        } else {
            c = t[5];
        }
        let d;
        if (t[6] !== i || t[7] !== c) {
            d = <div {...babelHelpers.extends({}, l, {
                "aria-hidden": "true",
                children: [
                    c,
                    i
                ]
            })}/>;
            t[6] = i;
            t[7] = c;
            t[8] = d;
        } else {
            d = t[8];
        }
        return d;
    }
    function y(e, t) {
        const n = t % 2 === 1;
        return <span key={`${t}:${e}`} {...babelHelpers.extends({}, {
            0: {},
            2: {
                className: "x1rg5ohu x1qcr5yj xahfe03"
            },
            1: {
                className: "x1rg5ohu xtf6cww xkivrog"
            },
            3: {
                className: "x1rg5ohu xtf6cww xkivrog"
            }
        }[!!(n && o("WAWebUA").UA.os === o("WAWebUA").OS_TYPE.WINDOWS) << 1 | !!(n && o("WAWebUA").UA.os === o("WAWebUA").OS_TYPE.MAC) << 0], {
            children: e
        })}/>;
    }
    y.displayName = `${y.name} [from ${i.id}]`;
    l.default = f;
}, 98);