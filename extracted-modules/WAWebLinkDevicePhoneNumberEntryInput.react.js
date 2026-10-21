__d("WAWebLinkDevicePhoneNumberEntryInput.react", [
    "fbt",
    "WAWebHybridRegGating",
    "WAWebPhoneNumberInput.react",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    const d = u;
    const { useImperativeHandle, useRef, useState } = d;
    const f = {
        inputWrapperWds: {
            height: "x1vqgdyp",
            $$css: true
        },
        inputWrapper: {
            position: "x1n2onr6",
            paddingTop: "xqv4dci",
            paddingBottom: "x1aazizy",
            paddingLeft: "xd3ty66",
            paddingRight: "xcicffo",
            minWidth: "x1vktgvc",
            height: "x1qx5ct2",
            backgroundColor: "xk7ee7b",
            borderTopWidth: "x178xt8z",
            borderInlineEndWidth: "x1lun4ml",
            borderBottomWidth: "xso031l",
            borderInlineStartWidth: "xpilrb4",
            borderTopStyle: "x13fuv20",
            borderInlineEndStyle: "x18b5jzi",
            borderBottomStyle: "x1q0q8m5",
            borderInlineStartStyle: "x1t7ytsu",
            borderTopColor: "xx42vgk",
            borderInlineEndColor: "xbogo7e",
            borderBottomColor: "x120ee7l",
            borderInlineStartColor: "x1vb5itz",
            borderStartStartRadius: "x1g83kfv",
            borderStartEndRadius: "x3qq2k7",
            borderEndEndRadius: "x2x8art",
            borderEndStartRadius: "x1qor8vf",
            $$css: true
        },
        inputWrapperFocused: {
            borderTopWidth: "x178xt8z",
            borderInlineEndWidth: "x1lun4ml",
            borderBottomWidth: "xso031l",
            borderInlineStartWidth: "xpilrb4",
            borderTopStyle: "x13fuv20",
            borderInlineEndStyle: "x18b5jzi",
            borderBottomStyle: "x1q0q8m5",
            borderInlineStartStyle: "x1t7ytsu",
            borderTopColor: "xlze6vy",
            borderInlineEndColor: "x47fsot",
            borderBottomColor: "x1rrvw3c",
            borderInlineStartColor: "x18djku1",
            $$css: true
        }
    };
    function g(t) {
        const n = o("react-compiler-runtime").c(33);
        const { a11yErrorMessage, countryCodeIso, icon, onBlur, onChange, onEnter, onFocus, phoneNumberWithoutCountryPrefix, ref, theme, xstyle } = t;
        const { errorMessageDOMId, errorShown } = a11yErrorMessage;
        const L = theme != null ? theme === "wds" : o("WAWebHybridRegGating").isHybridRegEnabled();
        const E = useState(false);
        const k = E[0];
        const I = E[1];
        const TRef = useRef(null);
        let D;
        if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
            D = function() {
                return {
                    focus: function() {
                        TRef.current?.focus();
                    }
                };
            };
            n[0] = D;
        } else {
            D = n[0];
        }
        useImperativeHandle(ref, D);
        const x = "link_device_phone_number_input_wrapper";
        const $ = {
            0: {
                className: "x1n2onr6 x1pha01r x1ed109x"
            },
            1: {
                className: "x1n2onr6 x1ed109x x14ug900"
            }
        }[!!L << 0];
        let P;
        if (n[1] === Symbol.for("react.memo_cache_sentinel")) {
            P = function() {
                TRef.current?.focus();
            };
            n[1] = P;
        } else {
            P = n[1];
        }
        let N;
        if (n[2] !== k || n[3] !== L || n[4] !== xstyle) {
            N = (e || (e = r("stylex"))).props(L ? f.inputWrapperWds : f.inputWrapper, k && !L && f.inputWrapperFocused, xstyle);
            n[2] = k;
            n[3] = L;
            n[4] = xstyle;
            n[5] = N;
        } else {
            N = n[5];
        }
        const M = L ? "wds" : "default";
        let w;
        if (n[6] !== onBlur || n[7] !== I) {
            w = function() {
                I(false);
                onBlur?.();
            };
            n[6] = onBlur;
            n[7] = I;
            n[8] = w;
        } else {
            w = n[8];
        }
        let A;
        if (n[9] !== onFocus || n[10] !== I) {
            A = function() {
                I(true);
                onFocus?.();
            };
            n[9] = onFocus;
            n[10] = I;
            n[11] = A;
        } else {
            A = n[11];
        }
        let F;
        if (n[12] !== L) {
            F = L ? s._("Phone number") : s._("Type your phone number to log in to WhatsApp");
            n[12] = L;
            n[13] = F;
        } else {
            F = n[13];
        }
        let O;
        if (n[14] !== a11yErrorMessage.errorMessage || n[15] !== countryCodeIso || n[16] !== errorMessageDOMId || n[17] !== errorShown || n[18] !== icon || n[19] !== onChange || n[20] !== onEnter || n[21] !== phoneNumberWithoutCountryPrefix || n[22] !== M || n[23] !== w || n[24] !== A || n[25] !== F) {
            const Component = r("WAWebPhoneNumberInput.react");
            O = <Component theme={M} countryCodeIso={countryCodeIso} errorMessageDOMId={errorMessageDOMId} errorShown={errorShown} errorMessage={a11yErrorMessage.errorMessage} icon={icon} onBlur={w} onFocus={A} onChange={onChange} onEnter={onEnter} phoneNumberWithoutCountryPrefix={phoneNumberWithoutCountryPrefix} ref={TRef} ariaLabel={F}/>;
            n[14] = a11yErrorMessage.errorMessage;
            n[15] = countryCodeIso;
            n[16] = errorMessageDOMId;
            n[17] = errorShown;
            n[18] = icon;
            n[19] = onChange;
            n[20] = onEnter;
            n[21] = phoneNumberWithoutCountryPrefix;
            n[22] = M;
            n[23] = w;
            n[24] = A;
            n[25] = F;
            n[26] = O;
        } else {
            O = n[26];
        }
        let B;
        if (n[27] !== O || n[28] !== N) {
            B = <div {...babelHelpers.extends({}, N, {
                children: O
            })}/>;
            n[27] = O;
            n[28] = N;
            n[29] = B;
        } else {
            B = n[29];
        }
        let W;
        if (n[30] !== B || n[31] !== $) {
            W = <div {...babelHelpers.extends({
                "data-testid": x
            }, $, {
                onClick: P,
                dir: "ltr",
                children: B
            })}/>;
            n[30] = B;
            n[31] = $;
            n[32] = W;
        } else {
            W = n[32];
        }
        return W;
    }
    l.default = g;
}, 226);