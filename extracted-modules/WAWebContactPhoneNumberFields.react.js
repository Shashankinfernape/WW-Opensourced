__d("WAWebContactPhoneNumberFields.react", [
    "fbt",
    "$InternalEnum",
    "WALogger",
    "WAWebContactLogging",
    "WAWebContactPhoneNumberField.react",
    "WAWebCountriesUtils",
    "WAWebCountrySelectField.react",
    "WAWebFlex.react",
    "WAWebOutContactInviteAction",
    "WAWebOutContactInviteGatingUtils",
    "WAWebText.react",
    "WAWebUnstyledButton.react",
    "WAWebWamEnumCompanionInviteOriginType",
    "WDSButton.react",
    "WDSPaddings.stylex",
    "react",
    "react-compiler-runtime",
    "useWAWebCountries",
    "useWAWebUnmountSignal"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    const d = u;
    const { useRef, useState } = d;
    const _ = {
        marginTop10: {
            marginTop: "x1anpbxc",
            $$css: true
        }
    };
    const f = n("$InternalEnum").Mirrored([
        "Registered",
        "Unregistered",
        "Invalid",
        "Duplicate",
        "IsCustomer"
    ]);
    function g(e) {
        return e !== f.Unregistered;
    }
    const h = "contact-phone-number-fields-error";
    function y(e) {
        const t = o("react-compiler-runtime").c(39);
        const { countryCode, fullPhoneNumber, isNewContact, numberWithoutPrefix, onChange, onInviteSent, onViewDuplicateContact, origin, status } = e;
        let y;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            y = {
                filterType: o("WAWebCountriesUtils").COUNTRY_FILTER_TYPE.WHATSAPP_REGISTRATION
            };
            t[0] = y;
        } else {
            y = t[0];
        }
        const b = o("useWAWebCountries").useCountries(y);
        const { error, value } = b;
        const errorShown = status != null && status !== f.Registered;
        if (value == null || error != null) {
            return null;
        }
        let L;
        let E;
        if (t[1] !== countryCode || t[2] !== numberWithoutPrefix || t[3] !== onChange) {
            E = function(t) {
                L(t, numberWithoutPrefix);
            };
            L = function(t, r) {
                onChange(t ?? countryCode, r);
            };
            t[1] = countryCode;
            t[2] = numberWithoutPrefix;
            t[3] = onChange;
            t[4] = L;
            t[5] = E;
        } else {
            L = t[4];
            E = t[5];
        }
        let k;
        if (t[6] !== onViewDuplicateContact) {
            k = function() {
                return onViewDuplicateContact?.();
            };
            t[6] = onViewDuplicateContact;
            t[7] = k;
        } else {
            k = t[7];
        }
        let I;
        if (t[8] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebText.react").WAWebTextMuted;
            I = <Component color="teal" weight="medium">{s._("View contact")}</Component>;
            t[8] = I;
        } else {
            I = t[8];
        }
        let T;
        if (t[9] !== k) {
            const Component = r("WAWebUnstyledButton.react");
            T = <Component onClick={k}>{I}</Component>;
            t[9] = k;
            t[10] = T;
        } else {
            T = t[10];
        }
        const D = T;
        const x = origin === o("WAWebContactLogging").ContactSourceType.NewChat && onViewDuplicateContact != null;
        let $;
        if (t[11] !== D) {
            const Component = o("WAWebText.react").WAWebTextMuted;
            $ = <Component>{s._("This phone number is already in your contacts. {view-contact-button}", [
                s._param("view-contact-button", D)
            ])}</Component>;
            t[11] = D;
            t[12] = $;
        } else {
            $ = t[12];
        }
        const P = $;
        let N;
        if (t[13] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebText.react").WAWebTextMuted;
            N = <Component>{s._("This phone number is already in your contacts.")}</Component>;
            t[13] = N;
        } else {
            N = t[13];
        }
        const M = N;
        let w;
        if (t[14] === Symbol.for("react.memo_cache_sentinel")) {
            w = [
                o("WDSPaddings.stylex").wdsPaddings.paddingTop8,
                o("WDSPaddings.stylex").wdsPaddings.paddingBottom20
            ];
            t[14] = w;
        } else {
            w = t[14];
        }
        let A;
        if (t[15] === Symbol.for("react.memo_cache_sentinel")) {
            A = {
                className: "xzj7eog xkh2ocl x78zum5"
            };
            t[15] = A;
        } else {
            A = t[15];
        }
        let F;
        if (t[16] !== value || t[17] !== countryCode || t[18] !== E) {
            const Component = r("WAWebCountrySelectField.react");
            F = <div {...babelHelpers.extends({}, A, {
                dir: "auto",
                children: <Component key={countryCode} countries={value} testid="phone-number-country-selector" onChange={E} initialSelection={countryCode}/>
            })}/>;
            t[16] = value;
            t[17] = countryCode;
            t[18] = E;
            t[19] = F;
        } else {
            F = t[19];
        }
        const isValid = status === f.Registered;
        let B;
        if (t[20] !== countryCode || t[21] !== L || t[22] !== errorShown || t[23] !== numberWithoutPrefix || t[24] !== isValid) {
            const Component = r("WAWebContactPhoneNumberField.react");
            B = <Component countryCode={countryCode} numberWithoutPrefix={numberWithoutPrefix} onChange={L} isValid={isValid} errorShown={errorShown} errorMessageDOMId={h}/>;
            t[20] = countryCode;
            t[21] = L;
            t[22] = errorShown;
            t[23] = numberWithoutPrefix;
            t[24] = isValid;
            t[25] = B;
        } else {
            B = t[25];
        }
        let W;
        if (t[26] !== B || t[27] !== F) {
            const Component = o("WAWebFlex.react").FlexRow;
            W = <Component grow={1} shrink={1} dir="ltr">{F}{B}</Component>;
            t[26] = B;
            t[27] = F;
            t[28] = W;
        } else {
            W = t[28];
        }
        let q;
        if (t[29] !== x || t[30] !== P || t[31] !== fullPhoneNumber || t[32] !== isNewContact || t[33] !== onInviteSent || t[34] !== status) {
            const Component = o("WAWebText.react").WAWebTextMuted;
            const Component_1 = o("WAWebText.react").WAWebTextMuted;
            const Component_2 = o("WAWebText.react").WAWebTextMuted;
            const Component_3 = o("WAWebFlex.react").FlexRow;
            q = status && <Component_3 id={h} xstyle={_.marginTop10}>{status === f.IsCustomer && <Component>{s._("This contact is already your customer.")}</Component>}{status === f.Invalid && <Component_1>{s._("Enter a valid phone number for the selected country.")}</Component_1>}{status === f.Registered && <Component_2>{s._("This phone number is on WhatsApp.")}</Component_2>}{status === f.Unregistered && <C key={fullPhoneNumber} fullPhoneNumber={fullPhoneNumber} isNewContact={isNewContact} onInviteSent={onInviteSent}/>}{status === f.Duplicate && x && P}{status === f.Duplicate && !x && M}</Component_3>;
            t[29] = x;
            t[30] = P;
            t[31] = fullPhoneNumber;
            t[32] = isNewContact;
            t[33] = onInviteSent;
            t[34] = status;
            t[35] = q;
        } else {
            q = t[35];
        }
        let U;
        if (t[36] !== W || t[37] !== q) {
            const Component = o("WAWebFlex.react").FlexColumn;
            U = <Component align="stretch" xstyle={w}>{W}{q}</Component>;
            t[36] = W;
            t[37] = q;
            t[38] = U;
        } else {
            U = t[38];
        }
        return U;
    }
    function C({ fullPhoneNumber, isNewContact, onInviteSent }) {
        const l = useState(false);
        const u = l[0];
        const d = l[1];
        const _RefRef = useRef(false);
        const fRef = useRef(false);
        const g = r("useWAWebUnmountSignal")();
        const h = function() {
            if (!(fullPhoneNumber == null || _RefRef.current || fRef.current)) {
                _RefRef.current = true;
                d(true);
                const t = isNewContact === true ? o("WAWebOutContactInviteAction").sendInvite(fullPhoneNumber, o("WAWebWamEnumCompanionInviteOriginType").COMPANION_INVITE_ORIGIN_TYPE.CONTACT_EDIT_DRAWER, undefined, undefined, true) : o("WAWebOutContactInviteAction").sendInvite(fullPhoneNumber, o("WAWebWamEnumCompanionInviteOriginType").COMPANION_INVITE_ORIGIN_TYPE.CONTACT_EDIT_DRAWER);
                t.then((e)=>{
                    if (e && !g.aborted) {
                        fRef.current = true;
                        if (onInviteSent != null) {
                            onInviteSent();
                        }
                    }
                }).catch((t)=>{
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[out-contact-invite] sendInvite failed unexpectedly: ",
                        ""
                    ])), t);
                }).finally(()=>{
                    _RefRef.current = false;
                    if (!g.aborted && !fRef.current) {
                        d(false);
                    }
                });
            }
        };
        if (fullPhoneNumber != null && o("WAWebOutContactInviteGatingUtils").isContactEditInviteCtaEnabled(fullPhoneNumber)) {
            const Component = o("WAWebText.react").WAWebTextMuted;
            const Component_1 = r("WDSButton.react");
            const Component_2 = o("WAWebFlex.react").FlexColumn;
            return <Component_2 align="stretch"><Component>{s._("This phone number is not on WhatsApp.")}</Component><div className="x1nmyh1g" data-testid="invite-non-wa-contact-actions"><Component_1 testid="invite-non-wa-contact-btn" disabled={u} onPress={h} size="medium" type="default" variant="filled" label={s._("Invite to WhatsApp")}/></div></Component_2>;
        }
        const Component = o("WAWebText.react").WAWebTextMuted;
        return <Component>{s._("This phone number is not on WhatsApp. Invite them on your primary device.")}</Component>;
    }
    C.displayName = `${C.name} [from ${i.id}]`;
    l.PhoneNumberStatusType = f;
    l.shouldShowSyncToAddressbookSwitch = g;
    l.ContactPhoneNumberFields = y;
}, 226);