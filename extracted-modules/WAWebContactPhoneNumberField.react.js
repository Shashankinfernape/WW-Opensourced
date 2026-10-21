__d("WAWebContactPhoneNumberField.react", [
    "fbt",
    "WAWebFlex.react",
    "WAWebPhoneNumberInput.react",
    "WDSIconIcCheck.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = e;
    const { useRef, useState } = c;
    const p = {
        paddingTop9: {
            paddingTop: "x96k8nx",
            $$css: true
        },
        paddingBottom5: {
            paddingBottom: "xs9asl8",
            $$css: true
        }
    };
    const _ = {
        container: {
            position: "x1n2onr6",
            minWidth: "xeuugli",
            $$css: true
        },
        inputRow: {
            borderBottomWidth: "xlxy82",
            borderBottomStyle: "x1q0q8m5",
            borderBottomColor: "x16pkwpw",
            $$css: true
        },
        inputFocused: {
            borderBottomColor: "x1rrvw3c",
            $$css: true
        },
        checkMark: {
            color: "xdlexau",
            $$css: true
        }
    };
    function f(e) {
        const t = o("react-compiler-runtime").c(20);
        const { countryCode, errorMessageDOMId, errorShown, isValid, numberWithoutPrefix, onChange, onEnter } = e;
        const h = useState(false);
        const y = h[0];
        const C = h[1];
        const bRef = useRef(null);
        let v;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            v = <div className="x1pg5gke x1d3mw78 xm7witj">{s._("Phone")}</div>;
            t[0] = v;
        } else {
            v = t[0];
        }
        const S = y && _.inputFocused;
        let R;
        if (t[1] !== S) {
            R = [
                _.inputRow,
                S
            ];
            t[1] = S;
            t[2] = R;
        } else {
            R = t[2];
        }
        let L;
        if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
            L = [
                p.paddingTop9,
                p.paddingBottom5
            ];
            t[3] = L;
        } else {
            L = t[3];
        }
        let E;
        let k;
        if (t[4] === Symbol.for("react.memo_cache_sentinel")) {
            E = function() {
                C(false);
            };
            k = function() {
                C(true);
            };
            t[4] = E;
            t[5] = k;
        } else {
            E = t[4];
            k = t[5];
        }
        let I;
        if (t[6] === Symbol.for("react.memo_cache_sentinel")) {
            I = s._("Phone number");
            t[6] = I;
        } else {
            I = t[6];
        }
        let T;
        if (t[7] !== countryCode || t[8] !== errorMessageDOMId || t[9] !== errorShown || t[10] !== numberWithoutPrefix || t[11] !== onChange || t[12] !== onEnter) {
            const Component = r("WAWebPhoneNumberInput.react");
            const Component_1 = o("WAWebFlex.react").FlexItem;
            T = <Component_1 xstyle={L} grow={1} shrink={1}><Component countryCodeIso={countryCode} errorMessageDOMId={errorMessageDOMId} errorShown={errorShown} onBlur={E} onFocus={k} onChange={onChange} onEnter={onEnter} phoneNumberWithoutCountryPrefix={numberWithoutPrefix} ref={bRef} showCountryPrefix={false} ariaLabel={I}/></Component_1>;
            t[7] = countryCode;
            t[8] = errorMessageDOMId;
            t[9] = errorShown;
            t[10] = numberWithoutPrefix;
            t[11] = onChange;
            t[12] = onEnter;
            t[13] = T;
        } else {
            T = t[13];
        }
        let D;
        if (t[14] !== isValid) {
            const Component = o("WAWebFlex.react").FlexItem;
            D = isValid && <Component grow={0} shrink={0}>{u.jsx(r("WDSIconIcCheck.react"), {
                xstyle: _.checkMark
            })}</Component>;
            t[14] = isValid;
            t[15] = D;
        } else {
            D = t[15];
        }
        let x;
        if (t[16] !== R || t[17] !== T || t[18] !== D) {
            const Component = o("WAWebFlex.react").FlexRow;
            const Component_1 = o("WAWebFlex.react").FlexColumn;
            x = <Component_1 xstyle={_.container} grow={1} align="stretch" dir="auto">{v}<Component xstyle={R} align="center">{T}{D}</Component></Component_1>;
            t[16] = R;
            t[17] = T;
            t[18] = D;
            t[19] = x;
        } else {
            x = t[19];
        }
        return x;
    }
    l.default = f;
}, 226);