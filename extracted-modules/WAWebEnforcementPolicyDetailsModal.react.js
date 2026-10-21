__d("WAWebEnforcementPolicyDetailsModal.react", [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebEnforcementActionLogging",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebModalManager",
    "WAWebWamEnumInteractionSurface",
    "WDSIconIcBlock.react",
    "WDSIconIcShield.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
    "useWAWebListener"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const e_useEffect = e.useEffect;
    const d = {
        textCenter: {
            textAlign: "x2b8uid",
            $$css: true
        },
        bulletRow: {
            alignItems: "x1cy8zhl",
            boxSizing: "x9f619",
            width: "xh8yej3",
            $$css: true
        },
        bulletIcon: {
            width: "x1useyqa",
            $$css: true
        },
        iconColor: {
            color: "xhslqc4",
            $$css: true
        }
    };
    function MComponent({ policyInformation }) {
        e_useEffect(function() {
            r("WAWebEnforcementActionLogging").setSurface(o("WAWebWamEnumInteractionSurface").INTERACTION_SURFACE.ENFORCEMENT_POLICY_DETAILS_BOTTOM_SHEET);
        }, []);
        o("useWAWebListener").useListener(o("WAWebModalManager").ModalManager, "close_modal", function() {
            r("WAWebEnforcementActionLogging").logDismissModalClick();
        });
        const Component = r("WDSText.react");
        const Component_1 = o("WAWebFlex.react").FlexRow;
        const Component_2 = r("WDSText.react");
        const Component_3 = o("WAWebFlex.react").FlexColumn;
        const Component_4 = o("WAWebFlex.react").FlexColumn;
        const Component_5 = o("WAWebConfirmPopup.react").ConfirmPopup;
        return <Component_5 okText={r("WAWebFbtCommon")("Close")} onOK={o("WAWebModalManager").closeModalManager} cancelText={s._("See Channels Guidelines")} onCancel={p} testid="enforcement-policy-details-modal"><Component_1 align="center" justify="center" padding={24} testid="popup-title"><Component type="Headline1" colorName="contentDefault" textAlign="center">{policyInformation.headline}</Component></Component_1><Component_3 align="center" justify="center"><Component_2 type="Body2" colorName="contentDefault" xstyle={d.textCenter}>{policyInformation.subtitle}</Component_2></Component_3><Component_4 align="center" justify="start" paddingTop={16}><_ icon={u.jsx(r("WDSIconIcBlock.react"), {
            height: 24,
            width: 24
        })} text={policyInformation.explanation} testid="enforcement-policy-explanation-bullet"/><_ icon={u.jsx(r("WDSIconIcShield.react"), {
            height: 24,
            width: 24
        })} text={policyInformation.adminDisclaimer} testid="enforcement-policy-admin-disclaimer-bullet"/></Component_4></Component_5>;
    }
    MComponent.displayName = `${MComponent.name} [from ${i.id}]`;
    function p() {
        r("WAWebEnforcementActionLogging").logChannelGuidelinesClick();
        o("WAWebExternalLink.react").openExternalLink(o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl());
    }
    function _(e) {
        const t = o("react-compiler-runtime").c(9);
        const { icon, testid, text } = e;
        let l;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            l = [
                d.bulletIcon,
                d.iconColor
            ];
            t[0] = l;
        } else {
            l = t[0];
        }
        let s;
        if (t[1] !== icon) {
            const Component = o("WAWebFlex.react").FlexColumn;
            s = <Component align="start" shrink={0} xstyle={l}>{icon}</Component>;
            t[1] = icon;
            t[2] = s;
        } else {
            s = t[2];
        }
        let c;
        if (t[3] !== text) {
            const Component = r("WDSText.react");
            const Component_1 = o("WAWebFlex.react").FlexColumn;
            c = <Component_1><Component type="Body2" colorName="contentDefault">{text}</Component></Component_1>;
            t[3] = text;
            t[4] = c;
        } else {
            c = t[4];
        }
        let m;
        if (t[5] !== s || t[6] !== c || t[7] !== testid) {
            const Component = o("WAWebFlex.react").FlexRow;
            m = <Component xstyle={d.bulletRow} marginBottom={8} paddingBottom={4} paddingStart={8} paddingTop={4} testid={testid}>{s}{c}</Component>;
            t[5] = s;
            t[6] = c;
            t[7] = testid;
            t[8] = m;
        } else {
            m = t[8];
        }
        return m;
    }
    l.default = MComponent;
}, 226);