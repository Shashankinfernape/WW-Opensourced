__d("WAWebOutContactInviteConfirmDialog.react", [
    "fbt",
    "Promise",
    "WAWebPhoneUtils",
    "WDSButtonGroup.react",
    "WDSDialog.react",
    "WDSDialogBridge",
    "WDSFlex.stylex",
    "WDSIconIcSendFilled.react",
    "WDSProfilePhoto.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebOnUnmount"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    let c;
    const d = c || (c = o("react"));
    const m = {
        contactCard: {
            borderTopColor: "xx42vgk",
            borderInlineEndColor: "xbogo7e",
            borderBottomColor: "x120ee7l",
            borderInlineStartColor: "x1vb5itz",
            borderStartStartRadius: "xlr9sxt",
            borderStartEndRadius: "xvvg52n",
            borderEndEndRadius: "xwd4zgb",
            borderEndStartRadius: "xq8v1ta",
            borderTopStyle: "x13fuv20",
            borderInlineEndStyle: "x18b5jzi",
            borderBottomStyle: "x1q0q8m5",
            borderInlineStartStyle: "x1t7ytsu",
            borderTopWidth: "x178xt8z",
            borderInlineEndWidth: "x1lun4ml",
            borderBottomWidth: "xso031l",
            borderInlineStartWidth: "xpilrb4",
            boxSizing: "x9f619",
            paddingTop: "x1xrf6ya",
            paddingBottom: "xscbp6u",
            paddingInlineStart: "xdx6fka",
            paddingInlineEnd: "xvtqlqk",
            width: "xh8yej3",
            $$css: true
        },
        contactDetails: {
            textAlign: "x2b8uid",
            width: "xh8yej3",
            $$css: true
        }
    };
    function P1Component(e) {
        const t = o("react-compiler-runtime").c(39);
        const { isNewContact, name, onConfirm, onDismiss, onUnmount, phoneNumber } = e;
        r("useWAWebOnUnmount")(onUnmount);
        let _;
        if (t[0] !== phoneNumber) {
            _ = o("WAWebPhoneUtils").formatPhone(phoneNumber);
            t[0] = phoneNumber;
            t[1] = _;
        } else {
            _ = t[1];
        }
        const f = _;
        let g;
        if (t[2] !== name) {
            g = s._("{contact_name}", [
                s._param("contact_name", name)
            ]);
            t[2] = name;
            t[3] = g;
        } else {
            g = t[3];
        }
        const h = g;
        const y = isNewContact === true ? f : h;
        let C;
        if (t[4] !== f || t[5] !== isNewContact) {
            C = isNewContact === true ? s._("Not in your contacts") : f;
            t[4] = f;
            t[5] = isNewContact;
            t[6] = C;
        } else {
            C = t[6];
        }
        const b = C;
        let v;
        if (t[7] !== isNewContact || t[8] !== name) {
            v = isNewContact === true ? s._("This contact isn't on WhatsApp. We'll send an invite for you.") : s._("{contact_name} isn't on WhatsApp. We'll send an invite for you.", [
                s._param("contact_name", name)
            ]);
            t[7] = isNewContact;
            t[8] = name;
            t[9] = v;
        } else {
            v = t[9];
        }
        let S;
        if (t[10] === Symbol.for("react.memo_cache_sentinel")) {
            S = s._("Send invite");
            t[10] = S;
        } else {
            S = t[10];
        }
        let primaryButtonProps;
        if (t[11] !== onConfirm) {
            primaryButtonProps = {
                Icon: r("WDSIconIcSendFilled.react"),
                label: S,
                onPress: onConfirm,
                size: "small",
                testid: "out-contact-invite-confirm-send",
                type: "default",
                variant: "filled"
            };
            t[11] = onConfirm;
            t[12] = primaryButtonProps;
        } else {
            primaryButtonProps = t[12];
        }
        let L;
        if (t[13] === Symbol.for("react.memo_cache_sentinel")) {
            L = s._("Cancel");
            t[13] = L;
        } else {
            L = t[13];
        }
        let secondaryButtonProps;
        if (t[14] !== onDismiss) {
            secondaryButtonProps = {
                label: L,
                onPress: onDismiss,
                size: "small",
                testid: "out-contact-invite-confirm-cancel",
                type: "default",
                variant: "borderless"
            };
            t[14] = onDismiss;
            t[15] = secondaryButtonProps;
        } else {
            secondaryButtonProps = t[15];
        }
        let k;
        if (t[16] !== primaryButtonProps || t[17] !== secondaryButtonProps) {
            k = d.jsx(r("WDSButtonGroup.react"), {
                orientation: "stacked",
                width: "fill",
                primaryButtonProps,
                secondaryButtonProps
            });
            t[16] = primaryButtonProps;
            t[17] = secondaryButtonProps;
            t[18] = k;
        } else {
            k = t[18];
        }
        let I;
        let T;
        if (t[19] === Symbol.for("react.memo_cache_sentinel")) {
            I = s._("Send invite");
            T = (u || (u = r("stylex"))).props(m.contactCard, o("WDSFlex.stylex").wdsFlex.flexColumnCenter, o("WDSFlex.stylex").wdsFlex.gapDouble);
            t[19] = I;
            t[20] = T;
        } else {
            I = t[19];
            T = t[20];
        }
        let D;
        if (t[21] !== h) {
            D = d.jsx(r("WDSProfilePhoto.react"), {
                isDecorative: true,
                name: h,
                size: "large",
                testid: "out-contact-invite-confirm-contact-photo",
                type: "person"
            });
            t[21] = h;
            t[22] = D;
        } else {
            D = t[22];
        }
        let x;
        if (t[23] === Symbol.for("react.memo_cache_sentinel")) {
            x = (u || (u = r("stylex"))).props(m.contactDetails, o("WDSFlex.stylex").wdsFlex.flexColumnCenter);
            t[23] = x;
        } else {
            x = t[23];
        }
        let $;
        if (t[24] !== y) {
            const Component = r("WDSText.react");
            $ = <Component type="Body1Emphasized" colorName="contentDefault">{y}</Component>;
            t[24] = y;
            t[25] = $;
        } else {
            $ = t[25];
        }
        let P;
        if (t[26] !== b) {
            const Component = r("WDSText.react");
            P = <Component type="Body2" colorName="contentDeemphasized">{b}</Component>;
            t[26] = b;
            t[27] = P;
        } else {
            P = t[27];
        }
        let N;
        if (t[28] !== $ || t[29] !== P) {
            N = <div {...babelHelpers.extends({}, x, {
                "data-testid": "out-contact-invite-confirm-contact-details",
                children: [
                    $,
                    P
                ]
            })}/>;
            t[28] = $;
            t[29] = P;
            t[30] = N;
        } else {
            N = t[30];
        }
        let M;
        if (t[31] !== D || t[32] !== N) {
            M = <div {...babelHelpers.extends({}, T, {
                "data-testid": "out-contact-invite-confirm-contact",
                children: [
                    D,
                    N
                ]
            })}/>;
            t[31] = D;
            t[32] = N;
            t[33] = M;
        } else {
            M = t[33];
        }
        let w;
        if (t[34] !== onDismiss || t[35] !== M || t[36] !== v || t[37] !== k) {
            const Component = r("WDSDialog.react");
            w = <Component closeButton description={v} footer={k} headerType="functional" layoutType="expressive" onDismiss={onDismiss} open size="lg" testid="out-contact-invite-confirm-dialog" title={I}>{M}</Component>;
            t[34] = onDismiss;
            t[35] = M;
            t[36] = v;
            t[37] = k;
            t[38] = w;
        } else {
            w = t[38];
        }
        return w;
    }
    function _(t, r, a) {
        return new (e || (e = n("Promise")))(function(e) {
            let n = false;
            const i = (r)=>{
                if (!n) {
                    n = true;
                    e(r);
                }
            };
            const l = (t)=>{
                if (!n) {
                    i(t);
                    o("WDSDialogBridge").closeWDSDialog();
                }
            };
            o("WDSDialogBridge").openWDSDialog(<P1Component name={t} isNewContact={a} phoneNumber={r} onConfirm={function() {
                return l(true);
            }} onDismiss={function() {
                return l(false);
            }} onUnmount={function() {
                return i(false);
            }}/>);
        });
    }
    l.WAWebOutContactInviteConfirmDialog = P1Component;
    l.waitForOutContactInviteConfirmDialog = _;
}, 226);