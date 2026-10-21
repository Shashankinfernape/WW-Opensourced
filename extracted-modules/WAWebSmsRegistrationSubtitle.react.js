__d("WAWebSmsRegistrationSubtitle.react", [
    "fbt",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebHybridRegGating",
    "WAWebLandingTypography.stylex",
    "WAWebLinkDeviceCommonInstructions.react",
    "WDSColorStyles.stylex",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    const d = {
        subtitle: {
            lineHeight: "x1qfxs89",
            letterSpacing: "xfq947u",
            textAlign: "x2b8uid",
            $$css: true
        },
        subtitleStart: {
            textAlign: "x1yc453h",
            $$css: true
        }
    };
    function M1(t) {
        const n = o("react-compiler-runtime").c(5);
        const { children: a, theme: i, useLandingStyle: l } = t;
        const s = l === void 0 ? false : l;
        const u = i === "wds" || o("WAWebHybridRegGating").isHybridRegEnabled();
        if (s) {
            let d;
            if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
                d = (e || (e = r("stylex"))).props(o("WAWebLandingTypography.stylex").landingTypography.landingSubtitle, o("WDSColorStyles.stylex").WDSColorStyles.contentDeemphasized);
                n[0] = d;
            } else {
                d = n[0];
            }
            let m;
            if (n[1] !== a) {
                m = <span {...babelHelpers.extends({
                    "data-testid": "sms_registration_landing_subtitle"
                }, d, {
                    children: a
                })}/>;
                n[1] = a;
                n[2] = m;
            } else {
                m = n[2];
            }
            return m;
        }
        if (u) {
            let p;
            if (n[3] !== a) {
                const Component = r("WDSText.react");
                p = <Component type="Body2" colorName="contentDeemphasized">{a}</Component>;
                n[3] = a;
                n[4] = p;
            } else {
                p = n[4];
            }
            return p;
        }
        return a;
    }
    function p({ ctaText: t, includeNewLine: a = false, includesSmsText: l = true, registrationNoticeType: p = "data-rates", textAlign: f = "center", theme: g, useLandingStyle: y = false }) {
        const C = g === "wds" || o("WAWebHybridRegGating").isHybridRegEnabled();
        const b = C && !y;
        const v = y || !C;
        const S = t != null || f === "start" || !l || p === "sms-verification";
        const R = p === "sms-verification" ? s._("We'll send an SMS to verify your number. Read our\u00a0{privacy_policy_link}{line_break} Click \"{CTA text to accept conditions}\" to accept the\u00a0{terms_of_service_link}", [
            s._param("privacy_policy_link", <span className="xuxw1ft">{c.jsx(o("WAWebLinkDeviceCommonInstructions.react").ExternalHelpLink, {
                isBold: b,
                testId: "link_device_registration_privacy_policy_link",
                text: s._("Privacy Policy"),
                url: "https://www.whatsapp.com/legal/privacy-policy",
                showArrow: false,
                showUnderline: v,
                useDeemphasizedThemedColor: y
            })}{s._(".")}</span>),
            s._param("line_break", a ? <br/> : <></>),
            s._param("CTA text to accept conditions", t ?? r("WAWebFbtCommon")("Continue")),
            s._param("terms_of_service_link", <span className="xuxw1ft">{c.jsx(o("WAWebLinkDeviceCommonInstructions.react").ExternalHelpLink, {
                isBold: b,
                testId: "link_device_registration_terms_of_service_link",
                text: s._("Terms of Service"),
                url: "https://www.whatsapp.com/legal/terms-of-service",
                showArrow: false,
                showUnderline: v,
                useDeemphasizedThemedColor: y
            })}{s._(".")}</span>)
        ]) : s._("Message and data rates may apply. Read our\u00a0{privacy_policy_link}{line_break} Click \"{CTA text to accept conditions}\" to accept the\u00a0{terms_of_service_link}", [
            s._param("privacy_policy_link", <span className="xuxw1ft">{c.jsx(o("WAWebLinkDeviceCommonInstructions.react").ExternalHelpLink, {
                isBold: b,
                testId: "link_device_registration_privacy_policy_link",
                text: s._("Privacy Policy"),
                url: "https://www.whatsapp.com/legal/privacy-policy",
                showArrow: false,
                showUnderline: v,
                useDeemphasizedThemedColor: y
            })}{s._(".")}</span>),
            s._param("line_break", a ? <br/> : <></>),
            s._param("CTA text to accept conditions", t ?? r("WAWebFbtCommon")("Continue")),
            s._param("terms_of_service_link", <span className="xuxw1ft">{c.jsx(o("WAWebLinkDeviceCommonInstructions.react").ExternalHelpLink, {
                isBold: b,
                testId: "link_device_registration_terms_of_service_link",
                text: s._("Terms of Service"),
                url: "https://www.whatsapp.com/legal/terms-of-service",
                showArrow: false,
                showUnderline: v,
                useDeemphasizedThemedColor: y
            })}{s._(".")}</span>)
        ]);
        const Component = o("WAWebFlex.react").FlexRow;
        const Component_1 = o("WAWebFlex.react").FlexRow;
        const Component_2 = o("WAWebFlex.react").FlexColumn;
        return <Component_2 rowGap={2} xstyle={[
            d.subtitle,
            f === "start" && d.subtitleStart
        ]}>{l && <Component alignSelf="center" align="center" wrap="wrap" justify="center"><M1 theme={g} useLandingStyle={y}>{s._("We'll send an SMS to your phone, where you can download WhatsApp and register your account.")}</M1></Component>}<Component_1 alignSelf="center" align="center" wrap="wrap" justify={f}><M1 theme={g} useLandingStyle={y}>{S ? R : s._("Message and data rates may apply. Read our\u00a0{privacy_policy_link} Click \"Continue\" to accept the\u00a0{terms_of_service_link}", [
            s._param("privacy_policy_link", <span className="xuxw1ft">{c.jsx(o("WAWebLinkDeviceCommonInstructions.react").ExternalHelpLink, {
                isBold: b,
                testId: "link_device_registration_privacy_policy_link",
                text: s._("Privacy Policy"),
                url: "https://www.whatsapp.com/legal/privacy-policy",
                showArrow: false,
                showUnderline: v,
                useDeemphasizedThemedColor: y
            })}{s._(".")}</span>),
            s._param("terms_of_service_link", <span className="xuxw1ft">{c.jsx(o("WAWebLinkDeviceCommonInstructions.react").ExternalHelpLink, {
                isBold: b,
                testId: "link_device_registration_terms_of_service_link",
                text: s._("Terms of Service"),
                url: "https://www.whatsapp.com/legal/terms-of-service",
                showArrow: false,
                showUnderline: v,
                useDeemphasizedThemedColor: y
            })}{s._(".")}</span>)
        ])}</M1></Component_1></Component_2>;
    }
    p.displayName = `${p.name} [from ${i.id}]`;
    l.SmsRegistrationSubtitleText = M1;
    l.SmsRegistrationSubtitle = p;
}, 226);