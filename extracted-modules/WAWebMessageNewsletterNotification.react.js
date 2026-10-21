__d("WAWebMessageNewsletterNotification.react", [
    "fbt",
    "WAWebClickableLink.react",
    "WAWebCommonNewsletterEnums",
    "WAWebCommonNewsletterStrings",
    "WAWebEmojiText.react",
    "WAWebModalManager",
    "WAWebMsgGetters",
    "WAWebNewsletterCollection",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterMessageAdminContextCard.react",
    "WAWebNewsletterModelUtils",
    "WAWebNewsletterPhoneNumberPrivacyNux.react",
    "WAWebNewsletterPublicChannelPrivacyNux.react",
    "WAWebStateUtils",
    "WDSIconIcSensors.react",
    "WDSMargins.stylex",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    const d = {
        marginTop3: {
            marginTop: "x7r5mf7",
            $$css: true
        }
    };
    const m = {
        linkColor: {
            color: "x1bvqhpb",
            $$css: true
        },
        channelsIcon: {
            display: "x1rg5ohu",
            verticalAlign: "x16dsc37",
            $$css: true
        }
    };
    function p({ subtype, templateParams }) {
        switch(subtype){
            case "newsletter_created":
                {
                    const r = templateParams[0];
                    const a = templateParams[1];
                    if (a === "owner") {
                        return o("WAWebCommonNewsletterStrings").getYouCreatedChannelWithNameText(String(r));
                    }
                    return s._("The channel \"{channel_name}\" was created", [
                        s._param("channel_name", r)
                    ]);
                }
            case "newsletter_privacy":
                {
                    const i = templateParams[0];
                    if (o("WAWebNewsletterModelUtils").isMembershipAdminOrOwner(i?.toString())) {
                        return s._("This channel is public and visible to anyone, including WhatsApp. There is added privacy for your profile and phone number. Click to learn more.");
                    }
                    return s._("This channel has added privacy for your profile and phone number. Click to learn more.");
                }
            case "newsletter_deleted":
                {
                    const l = templateParams[0];
                    return s._("The channel \"{newsletter_name}\" was deleted", [
                        s._param("newsletter_name", l)
                    ]);
                }
        }
    }
    function _({ chat, subtype, templateParams }) {
        switch(subtype){
            case "newsletter_privacy":
                {
                    const i = templateParams[0];
                    const l = o("WAWebNewsletterModelUtils").isMembershipAdminOrOwner(i?.toString()) ? c.jsx(r("WAWebNewsletterPublicChannelPrivacyNux.react"), {
                        chat,
                        userRole: o("WAWebCommonNewsletterEnums").NewsletterMembershipType.cast(i?.toString())
                    }) : c.jsx(r("WAWebNewsletterPhoneNumberPrivacyNux.react"), {});
                    return function() {
                        o("WAWebModalManager").ModalManager.open(l);
                    };
                }
            default:
                return null;
        }
    }
    function f(t) {
        const n = o("react-compiler-runtime").c(13);
        const t_msgKey = t.msgKey;
        let i;
        if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
            i = [
                o("WAWebMsgGetters").getSubtype,
                o("WAWebMsgGetters").getTemplateParams
            ];
            n[0] = i;
        } else {
            i = n[0];
        }
        const l = o("useWAWebMsgValues").useMsgValues(t_msgKey, i);
        const s = l[0];
        const templateParams = l[1];
        let f;
        let g;
        if (n[1] !== t_msgKey.remote || n[2] !== s || n[3] !== templateParams) {
            const y = r("WAWebNewsletterCollection").get(t_msgKey.remote);
            const C = _({
                subtype: s,
                templateParams,
                chat: y
            });
            let b;
            if (n[6] === Symbol.for("react.memo_cache_sentinel")) {
                b = <div {...babelHelpers.extends({}, (e || (e = r("stylex"))).props([
                    m.channelsIcon,
                    d.marginTop3,
                    o("WDSMargins.stylex").wdsMargins.marginEnd4
                ]), {
                    children: c.jsx(r("WDSIconIcSensors.react"), {
                        height: 14,
                        testid: "newsletter-system-message",
                        width: 14
                    })
                })}/>;
                n[6] = b;
            } else {
                b = n[6];
            }
            const v = b;
            let S;
            if (n[7] !== s || n[8] !== templateParams) {
                S = <span>{s === "newsletter_privacy" ? <>{v}{c.jsx(o("WAWebEmojiText.react").EmojiText, {
                    breakWord: true,
                    text: p({
                        subtype: s,
                        templateParams
                    })
                })}</> : c.jsx(o("WAWebEmojiText.react").EmojiText, {
                    breakWord: true,
                    inlineblock: true,
                    text: p({
                        subtype: s,
                        templateParams
                    })
                })}</span>;
                n[7] = s;
                n[8] = templateParams;
                n[9] = S;
            } else {
                S = n[9];
            }
            const R = S;
            const Component = r("WAWebClickableLink.react");
            f = C != null ? <Component onClick={C} xstyle={m.linkColor}>{R}</Component> : R;
            g = s === "newsletter_admin_context_card" && y != null && o("WAWebNewsletterGatingUtils").isNewsletterAdminContextCardEnabled(o("WAWebStateUtils").unproxy(y).newsletterMetadata?.membershipType) ? c.jsx(r("WAWebNewsletterMessageAdminContextCard.react"), {
                chat: y
            }) : null;
            n[1] = t_msgKey.remote;
            n[2] = s;
            n[3] = templateParams;
            n[4] = f;
            n[5] = g;
        } else {
            f = n[4];
            g = n[5];
        }
        const L = g;
        const E = s ? `subtype-${s}` : null;
        const k = L ?? f;
        let I;
        if (n[10] !== E || n[11] !== k) {
            I = <div data-testid={E}>{k}</div>;
            n[10] = E;
            n[11] = k;
            n[12] = I;
        } else {
            I = n[12];
        }
        return I;
    }
    l.default = f;
}, 226);