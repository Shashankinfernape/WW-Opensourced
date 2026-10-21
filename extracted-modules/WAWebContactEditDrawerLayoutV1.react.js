__d("WAWebContactEditDrawerLayoutV1.react", [
    "WAWebContactEditRowStyles.stylex",
    "WAWebFlex.react",
    "WDSIconIcCall.react",
    "WDSMargins.stylex",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        const t = o("react-compiler-runtime").c(12);
        const { isExistingContact, phoneNumberField, syncToAddressbookSwitch, usernameField } = e;
        let u;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            u = [
                o("WAWebContactEditRowStyles.stylex").contactEditRowStyles.paddingInline25,
                o("WAWebContactEditRowStyles.stylex").contactEditRowStyles.marginTop15
            ];
            t[0] = u;
        } else {
            u = t[0];
        }
        const c = isExistingContact ? o("WDSMargins.stylex").wdsMargins.marginTop32 : o("WAWebContactEditRowStyles.stylex").contactEditRowStyles.marginTop30;
        let d;
        if (t[1] !== c) {
            const Component = o("WAWebFlex.react").FlexItem;
            d = <Component xstyle={o("WAWebContactEditRowStyles.stylex").contactEditRowStyles.iconSection}>{s.jsx(r("WDSIconIcCall.react"), {
                width: 22,
                xstyle: [
                    c,
                    o("WDSMargins.stylex").wdsMargins.marginStart2
                ]
            })}</Component>;
            t[1] = c;
            t[2] = d;
        } else {
            d = t[2];
        }
        let m;
        if (t[3] !== phoneNumberField) {
            const Component = o("WAWebFlex.react").FlexItem;
            m = <Component grow={1} shrink={1}>{phoneNumberField}</Component>;
            t[3] = phoneNumberField;
            t[4] = m;
        } else {
            m = t[4];
        }
        let p;
        if (t[5] !== d || t[6] !== m) {
            const Component = o("WAWebFlex.react").FlexRow;
            p = <Component xstyle={u}>{d}{m}</Component>;
            t[5] = d;
            t[6] = m;
            t[7] = p;
        } else {
            p = t[7];
        }
        let _;
        if (t[8] !== syncToAddressbookSwitch || t[9] !== p || t[10] !== usernameField) {
            _ = <>{usernameField}{p}{syncToAddressbookSwitch}</>;
            t[8] = syncToAddressbookSwitch;
            t[9] = p;
            t[10] = usernameField;
            t[11] = _;
        } else {
            _ = t[11];
        }
        return _;
    }
    l.default = u;
}, 98);