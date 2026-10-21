__d("WAWebCountryPhoneNumberInput.react", [
    "WAWebCountrySelect.react",
    "WAWebEmoji",
    "WAWebEmoji.react",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebHybridRegGating",
    "WAWebLinkDevicePhoneNumberEntryInput.react",
    "WAWebLinkDevicePhoneNumberEntryInputFormatUtils",
    "WDSMargins.stylex",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = e;
    const { useCallback, useMemo } = u;
    const errorMessageDOMId = "link-device-phone-number-entry-screen-error";
    const p = {
        countrySelectWrapper: {
            height: "xdd8jsf",
            $$css: true
        },
        countrySelectWrapperWDS: {
            height: "x1vqgdyp",
            $$css: true
        },
        marginBottom12: {
            marginBottom: "xcytdqz",
            $$css: true
        },
        marginBottom8: {
            marginBottom: "xefnzgg",
            $$css: true
        },
        marginBottom32: {
            marginBottom: "xg6s713",
            $$css: true
        },
        color: {
            color: "x14ug900",
            $$css: true
        },
        wdsInputWidth: {
            width: "x1x62fxo",
            $$css: true
        },
        linkDeviceInputOverride: {
            borderTopColor: "x18aof6w",
            borderInlineEndColor: "xoz6bk6",
            borderBottomColor: "x1ct8bjc",
            borderInlineStartColor: "x357qen",
            backgroundColor: "x1p8t8ri",
            $$css: true
        }
    };
    function _(e) {
        const t = o("react-compiler-runtime").c(58);
        const { countries, error, onBlur, onChangePhoneNumber, onChangeSelectedCountry, onFocus, onPhoneNumberLengthExceeded, onSubmit, phoneNumberWithoutCountryCode, ref, selectedCountryId, shouldDisplayError, showCountrySelect, surface, theme } = e;
        const S = showCountrySelect === undefined ? true : showCountrySelect;
        const R = theme != null ? theme === "wds" : o("WAWebHybridRegGating").isHybridRegEnabled();
        const L = surface === "guest-calling-post-call" || surface === "link-device-phone-number";
        let E;
        if (t[0] !== onChangePhoneNumber || t[1] !== onPhoneNumberLengthExceeded || t[2] !== phoneNumberWithoutCountryCode) {
            E = function(t, n) {
                if (!o("WAWebLinkDevicePhoneNumberEntryInputFormatUtils").isPhoneNumberInputLengthAllowed(t, phoneNumberWithoutCountryCode, n)) {
                    onPhoneNumberLengthExceeded?.();
                    return;
                }
                onChangePhoneNumber(t, n);
            };
            t[0] = onChangePhoneNumber;
            t[1] = onPhoneNumberLengthExceeded;
            t[2] = phoneNumberWithoutCountryCode;
            t[3] = E;
        } else {
            E = t[3];
        }
        const k = E;
        let I;
        e: {
            if (selectedCountryId == null) {
                I = null;
                break e;
            }
            let T;
            if (t[4] !== selectedCountryId) {
                const D = o("WAWebCountrySelect.react").getCountryFlagEmoji(selectedCountryId);
                T = o("WAWebEmoji").EmojiUtil.normalizeEmojiFromString(D);
                t[4] = selectedCountryId;
                t[5] = T;
            } else {
                T = t[5];
            }
            const x = T;
            if (x == null) {
                I = null;
                break e;
            }
            let $;
            if (t[6] !== x) {
                $ = s.jsx(r("WAWebEmoji.react"), {
                    emoji: x,
                    selectable: false
                });
                t[6] = x;
                t[7] = $;
            } else {
                $ = t[7];
            }
            I = $;
        }
        const P = I;
        if (R && L) {
            let N;
            if (t[8] === Symbol.for("react.memo_cache_sentinel")) {
                N = [
                    o("WDSMargins.stylex").wdsMargins.marginBottom16,
                    p.color,
                    p.wdsInputWidth
                ];
                t[8] = N;
            } else {
                N = t[8];
            }
            let M;
            if (t[9] !== countries || t[10] !== onChangeSelectedCountry || t[11] !== selectedCountryId || t[12] !== S || t[13] !== surface) {
                const Component = o("WAWebCountrySelect.react").CountrySelect;
                const Component_1 = r("WAWebFlexItem.react");
                M = S && <Component_1 isFlexContainer xstyle={[
                    p.countrySelectWrapperWDS,
                    p.marginBottom12
                ]}><Component key={selectedCountryId} width="100%" countries={countries} testid="phone-number-country-selector" onChange={onChangeSelectedCountry} initialActiveOptionId={selectedCountryId} theme={surface === "guest-calling-post-call" || surface === "link-device-phone-number" ? "link-devices-screen-wds" : "default"}/></Component_1>;
                t[9] = countries;
                t[10] = onChangeSelectedCountry;
                t[11] = selectedCountryId;
                t[12] = S;
                t[13] = surface;
                t[14] = M;
            } else {
                M = t[14];
            }
            let w;
            if (t[15] !== error || t[16] !== shouldDisplayError) {
                w = {
                    errorShown: shouldDisplayError,
                    errorMessageDOMId,
                    errorMessage: error
                };
                t[15] = error;
                t[16] = shouldDisplayError;
                t[17] = w;
            } else {
                w = t[17];
            }
            const A = S ? null : P;
            const F = theme ?? "default";
            let O;
            if (t[18] !== k || t[19] !== onBlur || t[20] !== onFocus || t[21] !== onSubmit || t[22] !== phoneNumberWithoutCountryCode || t[23] !== ref || t[24] !== selectedCountryId || t[25] !== w || t[26] !== A || t[27] !== F) {
                const Component = r("WAWebLinkDevicePhoneNumberEntryInput.react");
                O = <Component ref={ref} countryCodeIso={selectedCountryId} phoneNumberWithoutCountryPrefix={phoneNumberWithoutCountryCode} a11yErrorMessage={w} onChange={k} onEnter={onSubmit} onFocus={onFocus} onBlur={onBlur} icon={A} theme={F}/>;
                t[18] = k;
                t[19] = onBlur;
                t[20] = onFocus;
                t[21] = onSubmit;
                t[22] = phoneNumberWithoutCountryCode;
                t[23] = ref;
                t[24] = selectedCountryId;
                t[25] = w;
                t[26] = A;
                t[27] = F;
                t[28] = O;
            } else {
                O = t[28];
            }
            let B;
            if (t[29] !== M || t[30] !== O) {
                const Component = o("WAWebFlex.react").FlexColumn;
                B = <Component align="stretch" xstyle={N}>{M}{O}</Component>;
                t[29] = M;
                t[30] = O;
                t[31] = B;
            } else {
                B = t[31];
            }
            return B;
        }
        let W;
        if (t[32] !== countries || t[33] !== onChangeSelectedCountry || t[34] !== selectedCountryId || t[35] !== S || t[36] !== surface) {
            const Component = o("WAWebCountrySelect.react").CountrySelect;
            const Component_1 = r("WAWebFlexItem.react");
            W = S && <Component_1 isFlexContainer xstyle={[
                p.countrySelectWrapper,
                p.marginBottom12
            ]}><Component key={selectedCountryId} width="100%" countries={countries} testid="phone-number-country-selector" onChange={onChangeSelectedCountry} initialActiveOptionId={selectedCountryId} theme={surface === "guest-calling-post-call" || surface === "link-device-phone-number" ? "link-devices-screen" : "default"}/></Component_1>;
            t[32] = countries;
            t[33] = onChangeSelectedCountry;
            t[34] = selectedCountryId;
            t[35] = S;
            t[36] = surface;
            t[37] = W;
        } else {
            W = t[37];
        }
        const q = shouldDisplayError || L ? p.marginBottom8 : p.marginBottom32;
        let U;
        if (t[38] !== error || t[39] !== shouldDisplayError) {
            U = {
                errorShown: shouldDisplayError,
                errorMessageDOMId,
                errorMessage: error
            };
            t[38] = error;
            t[39] = shouldDisplayError;
            t[40] = U;
        } else {
            U = t[40];
        }
        const V = S ? null : P;
        const H = theme ?? "default";
        const G = L && p.linkDeviceInputOverride;
        let z;
        if (t[41] !== k || t[42] !== onFocus || t[43] !== onSubmit || t[44] !== phoneNumberWithoutCountryCode || t[45] !== ref || t[46] !== selectedCountryId || t[47] !== U || t[48] !== V || t[49] !== H || t[50] !== G) {
            const Component = r("WAWebLinkDevicePhoneNumberEntryInput.react");
            z = <Component ref={ref} countryCodeIso={selectedCountryId} phoneNumberWithoutCountryPrefix={phoneNumberWithoutCountryCode} a11yErrorMessage={U} onChange={k} onEnter={onSubmit} onFocus={onFocus} icon={V} theme={H} xstyle={G}/>;
            t[41] = k;
            t[42] = onFocus;
            t[43] = onSubmit;
            t[44] = phoneNumberWithoutCountryCode;
            t[45] = ref;
            t[46] = selectedCountryId;
            t[47] = U;
            t[48] = V;
            t[49] = H;
            t[50] = G;
            t[51] = z;
        } else {
            z = t[51];
        }
        let j;
        if (t[52] !== z || t[53] !== q) {
            const Component = r("WAWebFlexItem.react");
            j = <Component xstyle={q}>{z}</Component>;
            t[52] = z;
            t[53] = q;
            t[54] = j;
        } else {
            j = t[54];
        }
        let K;
        if (t[55] !== j || t[56] !== W) {
            const Component = o("WAWebFlex.react").FlexColumn;
            K = <Component align="stretch">{W}{j}</Component>;
            t[55] = j;
            t[56] = W;
            t[57] = K;
        } else {
            K = t[57];
        }
        return K;
    }
    l.default = _;
}, 98);