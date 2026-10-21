__d("WAWebContactPhoneNumberReadOnlyField.react", [
    "fbt",
    "WAIsoToCc",
    "WAWebFlex.react",
    "WAWebLinkDevicePhoneNumberEntryInputFormatUtils",
    "WDSMargins.stylex",
    "nullthrows",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c(e) {
        const t = o("react-compiler-runtime").c(8);
        const { countryCode, numberWithoutPrefix } = e;
        let i;
        if (t[0] !== countryCode || t[1] !== numberWithoutPrefix) {
            i = r("nullthrows")(o("WAWebLinkDevicePhoneNumberEntryInputFormatUtils").formatPhoneNumberInput({
                countryCodeIso: countryCode,
                phoneNumberWithoutCountryCode: numberWithoutPrefix
            }));
            t[0] = countryCode;
            t[1] = numberWithoutPrefix;
            t[2] = i;
        } else {
            i = t[2];
        }
        const i_formattedInputValue = i.formattedInputValue;
        const d = r("WAIsoToCc")[countryCode];
        const m = `${countryCode} +${d} ${i_formattedInputValue}`;
        let p;
        if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
            p = [
                o("WDSMargins.stylex").wdsMargins.marginTop8,
                o("WDSMargins.stylex").wdsMargins.marginBottom16
            ];
            t[3] = p;
        } else {
            p = t[3];
        }
        let _;
        let f;
        if (t[4] === Symbol.for("react.memo_cache_sentinel")) {
            _ = <div className="x1pg5gke x1d3mw78 xm7witj">{s._("Phone")}</div>;
            f = {
                className: "x1lkfr7t x1fc57z9 x1anpbxc"
            };
            t[4] = _;
            t[5] = f;
        } else {
            _ = t[4];
            f = t[5];
        }
        let g;
        if (t[6] !== m) {
            const Component = o("WAWebFlex.react").FlexColumn;
            g = <Component xstyle={p} align="start" grow={0} shrink={0}>{_}<div {...babelHelpers.extends({}, f, {
                children: m
            })}/></Component>;
            t[6] = m;
            t[7] = g;
        } else {
            g = t[7];
        }
        return g;
    }
    l.default = c;
}, 226);