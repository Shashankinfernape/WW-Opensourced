__d("WAWebContactEditDrawerLayoutV2.react", [
    "fbt",
    "WAWebClickable.react",
    "WAWebContactEditAddInfoButtons.react",
    "WAWebContactEditRowStyles.stylex",
    "WAWebFlex.react",
    "WDSIconIcCall.react",
    "WDSIconIcClose.react",
    "WDSMargins.stylex",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    const u_useState = u.useState;
    function m(t) {
        const n = o("react-compiler-runtime").c(23);
        const { hasPrefilledPhoneNumber, hasPrefilledUsername, isExistingContact, onRemovePhoneNumber, onRemoveUsername, phoneNumberField, renderUsernameField, syncToAddressbookSwitch } = t;
        const g = u_useState(hasPrefilledPhoneNumber);
        const h = g[0];
        const y = g[1];
        const C = u_useState(hasPrefilledUsername);
        const b = C[0];
        const v = C[1];
        let S;
        if (n[0] !== onRemovePhoneNumber) {
            S = function() {
                y(false);
                onRemovePhoneNumber();
            };
            n[0] = onRemovePhoneNumber;
            n[1] = S;
        } else {
            S = n[1];
        }
        const R = S;
        let L;
        if (n[2] !== onRemoveUsername) {
            L = function() {
                v(false);
                onRemoveUsername();
            };
            n[2] = onRemoveUsername;
            n[3] = L;
        } else {
            L = n[3];
        }
        const E = L;
        const k = !h || !b;
        let I;
        if (n[4] === Symbol.for("react.memo_cache_sentinel")) {
            I = s._("Remove phone number");
            n[4] = I;
        } else {
            I = n[4];
        }
        const T = I;
        let D;
        if (n[5] !== R || n[6] !== isExistingContact || n[7] !== h || n[8] !== phoneNumberField || n[9] !== syncToAddressbookSwitch) {
            const Component = o("WAWebFlex.react").FlexItem;
            const Component_1 = o("WAWebFlex.react").FlexItem;
            const Component_2 = o("WAWebClickable.react").Clickable;
            const Component_3 = o("WAWebFlex.react").FlexItem;
            const Component_4 = o("WAWebFlex.react").FlexRow;
            D = h ? <><Component_4 xstyle={[
                o("WAWebContactEditRowStyles.stylex").contactEditRowStyles.paddingInline25,
                o("WAWebContactEditRowStyles.stylex").contactEditRowStyles.marginTop15
            ]}><Component xstyle={o("WAWebContactEditRowStyles.stylex").contactEditRowStyles.iconSection}>{c.jsx(r("WDSIconIcCall.react"), {
                width: 22,
                xstyle: [
                    isExistingContact ? o("WDSMargins.stylex").wdsMargins.marginTop32 : o("WAWebContactEditRowStyles.stylex").contactEditRowStyles.marginTop30,
                    o("WDSMargins.stylex").wdsMargins.marginStart2
                ]
            })}</Component><Component_1 grow={1} shrink={1}>{phoneNumberField}</Component_1><Component_3 xstyle={o("WAWebContactEditRowStyles.stylex").contactEditRowStyles.removeSection}><Component_2 ariaLabel={T} dataTestId="remove-contact-phone-number-btn" onClick={R} xstyle={o("WAWebContactEditRowStyles.stylex").contactEditRowStyles.removeButton}>{c.jsx(r("WDSIconIcClose.react"), {
                height: 24,
                width: 24
            })}</Component_2></Component_3></Component_4>{syncToAddressbookSwitch}</> : null;
            n[5] = R;
            n[6] = isExistingContact;
            n[7] = h;
            n[8] = phoneNumberField;
            n[9] = syncToAddressbookSwitch;
            n[10] = D;
        } else {
            D = n[10];
        }
        let x;
        if (n[11] !== h || n[12] !== b || n[13] !== k) {
            const Component = r("WAWebContactEditAddInfoButtons.react");
            x = k ? <div {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(h && o("WDSMargins.stylex").wdsMargins.marginTop16), {
                children: <Component onAddPhoneNumber={h ? null : function() {
                    return y(true);
                }} onAddUsername={b ? null : function() {
                    return v(true);
                }}/>
            })}/> : null;
            n[11] = h;
            n[12] = b;
            n[13] = k;
            n[14] = x;
        } else {
            x = n[14];
        }
        let $;
        if (n[15] !== E || n[16] !== b || n[17] !== renderUsernameField) {
            $ = b ? renderUsernameField(E) : null;
            n[15] = E;
            n[16] = b;
            n[17] = renderUsernameField;
            n[18] = $;
        } else {
            $ = n[18];
        }
        let P;
        if (n[19] !== D || n[20] !== x || n[21] !== $) {
            P = <>{D}{x}{$}</>;
            n[19] = D;
            n[20] = x;
            n[21] = $;
            n[22] = P;
        } else {
            P = n[22];
        }
        return P;
    }
    l.default = m;
}, 226);