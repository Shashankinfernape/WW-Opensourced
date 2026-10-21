__d("WAWebOutContactInviteFailureDialog.react", [
    "fbt",
    "WAWebCopyTextWithToast",
    "WDSButton.react",
    "WDSDialog.react",
    "WDSDialogBridge",
    "WDSIconIcContentCopy.react",
    "WDSIllustrationWdsPictoAttentionFeedbackNegative.react",
    "WDSProfilePhoto.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const e_useCallback = e.useCallback;
    function D2Component(e) {
        const t = o("react-compiler-runtime").c(34);
        const { inviteUrl, name, onDismiss } = e;
        let l;
        if (t[0] !== inviteUrl) {
            l = function() {
                o("WAWebCopyTextWithToast").copyTextWithToast({
                    failureMsg: s._("Couldn't copy link"),
                    successMsg: s._("Link copied"),
                    text: inviteUrl
                });
            };
            t[0] = inviteUrl;
            t[1] = l;
        } else {
            l = t[1];
        }
        const onPress = l;
        let d;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            d = s._("The invite couldn't be sent. Try inviting from WhatsApp on your phone, or copy the link below to send it a different way.");
            t[2] = d;
        } else {
            d = t[2];
        }
        let m;
        if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
            m = s._("OK");
            t[3] = m;
        } else {
            m = t[3];
        }
        let p;
        if (t[4] !== onDismiss) {
            const Component = r("WDSButton.react");
            p = <Component label={m} onPress={onDismiss} testid="out-contact-invite-failure-ok" variant="outline" widthMode="flexible"/>;
            t[4] = onDismiss;
            t[5] = p;
        } else {
            p = t[5];
        }
        let headerMedia;
        if (t[6] === Symbol.for("react.memo_cache_sentinel")) {
            headerMedia = <div className="x78zum5 xl56j7k x12xbjc7">{u.jsx(r("WDSIllustrationWdsPictoAttentionFeedbackNegative.react"), {
                "aria-hidden": true,
                testid: "out-contact-invite-failure-illustration"
            })}</div>;
            t[6] = headerMedia;
        } else {
            headerMedia = t[6];
        }
        let f;
        let g;
        if (t[7] === Symbol.for("react.memo_cache_sentinel")) {
            f = s._("Invite not sent");
            g = {
                className: "x6s0dn4 x78zum5 x1qvou4u x1s70e7g xvg22vi"
            };
            t[7] = f;
            t[8] = g;
        } else {
            f = t[7];
            g = t[8];
        }
        let h;
        if (t[9] === Symbol.for("react.memo_cache_sentinel")) {
            h = <div className="x3x0x6p x1iyjqo2 xjm9jq1" data-testid="out-contact-invite-failure-link-divider-start"/>;
            t[9] = h;
        } else {
            h = t[9];
        }
        let y;
        let C;
        if (t[10] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WDSText.react");
            C = <div {...babelHelpers.extends({}, g, {
                "data-testid": "out-contact-invite-failure-link-divider",
                children: [
                    h,
                    <Component type="Body2" colorName="contentDeemphasized">{s._("Copy invite link:")}</Component>,
                    <div className="x3x0x6p x1iyjqo2 xjm9jq1" data-testid="out-contact-invite-failure-link-divider-end"/>
                ]
            })}/>;
            y = {
                className: "x6s0dn4 xx42vgk xbogo7e x120ee7l x1vb5itz xlr9sxt xvvg52n xwd4zgb xq8v1ta x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 x9f619 x78zum5 x1f0uite xs2akgl x1xrf6ya xscbp6u xdx6fka xvtqlqk xh8yej3"
            };
            t[10] = y;
            t[11] = C;
        } else {
            y = t[10];
            C = t[11];
        }
        let b;
        if (t[12] !== name) {
            b = u.jsx(r("WDSProfilePhoto.react"), {
                isDecorative: true,
                name,
                size: "medium",
                type: "person"
            });
            t[12] = name;
            t[13] = b;
        } else {
            b = t[13];
        }
        let v;
        if (t[14] === Symbol.for("react.memo_cache_sentinel")) {
            v = {
                className: "x1iyjqo2 xeuugli"
            };
            t[14] = v;
        } else {
            v = t[14];
        }
        let S;
        if (t[15] !== name) {
            const Component = r("WDSText.react");
            S = <Component type="Body1Emphasized" colorName="contentDefault">{name}</Component>;
            t[15] = name;
            t[16] = S;
        } else {
            S = t[16];
        }
        let R;
        if (t[17] === Symbol.for("react.memo_cache_sentinel")) {
            R = {
                className: "x6ikm8r xlyipyv xuxw1ft"
            };
            t[17] = R;
        } else {
            R = t[17];
        }
        let L;
        if (t[18] !== inviteUrl) {
            const Component = r("WDSText.react");
            L = <div {...babelHelpers.extends({}, R, {
                children: <Component type="Body2" colorName="contentDeemphasized">{inviteUrl}</Component>
            })}/>;
            t[18] = inviteUrl;
            t[19] = L;
        } else {
            L = t[19];
        }
        let E;
        if (t[20] !== S || t[21] !== L) {
            E = <div {...babelHelpers.extends({}, v, {
                children: [
                    S,
                    L
                ]
            })}/>;
            t[20] = S;
            t[21] = L;
            t[22] = E;
        } else {
            E = t[22];
        }
        let k;
        if (t[23] === Symbol.for("react.memo_cache_sentinel")) {
            k = s._("Copy link").toString();
            t[23] = k;
        } else {
            k = t[23];
        }
        let I;
        if (t[24] !== onPress) {
            const Component = r("WDSButton.react");
            I = <Component aria-label={k} Icon={r("WDSIconIcContentCopy.react")} onPress={onPress} size="small" testid="out-contact-invite-failure-copy-link" variant="borderless"/>;
            t[24] = onPress;
            t[25] = I;
        } else {
            I = t[25];
        }
        let T;
        if (t[26] !== b || t[27] !== E || t[28] !== I) {
            T = <div {...babelHelpers.extends({}, y, {
                "data-testid": "out-contact-invite-failure-link-card",
                children: [
                    b,
                    E,
                    I
                ]
            })}/>;
            t[26] = b;
            t[27] = E;
            t[28] = I;
            t[29] = T;
        } else {
            T = t[29];
        }
        let D;
        if (t[30] !== onDismiss || t[31] !== T || t[32] !== p) {
            const Component = r("WDSDialog.react");
            D = <Component closeButton description={d} footer={p} headerMedia={headerMedia} headerType="expressive" layoutType="expressive" onDismiss={onDismiss} open size="lg" testid="out-contact-invite-failure-dialog" title={f}>{C}{T}</Component>;
            t[30] = onDismiss;
            t[31] = T;
            t[32] = p;
            t[33] = D;
        } else {
            D = t[33];
        }
        return D;
    }
    function m(e, inviteUrl) {
        o("WDSDialogBridge").openWDSDialog(<D2Component inviteUrl={inviteUrl} name={e} onDismiss={o("WDSDialogBridge").closeWDSDialog}/>);
    }
    l.WAWebOutContactInviteFailureDialog = D2Component;
    l.showOutContactInviteFailureDialog = m;
}, 226);