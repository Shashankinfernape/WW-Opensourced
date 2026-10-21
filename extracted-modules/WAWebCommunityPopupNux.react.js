__d("WAWebCommunityPopupNux.react", [
    "fbt",
    "WAWebCmd",
    "WAWebCommunityGatingUtils",
    "WAWebCommunityNuxAnimationData",
    "WAWebConfirmPopup.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebLottieAnimationLoadable",
    "WAWebModal.react",
    "WAWebModalManager",
    "WDSText.react",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = e;
    const { useEffect, useRef } = c;
    const p = {
        badge: {
            marginTop: "x14beivq",
            $$css: true
        },
        headerText: {
            maxWidth: "x13qrzjo",
            $$css: true
        },
        paragraph: {
            marginTop: "xwvj9da",
            marginInlineEnd: "x11t971q",
            marginBottom: "x1p1pd2l",
            marginInlineStart: "xvc5jky",
            $$css: true
        },
        disclaimer: {
            marginTop: "xdj266r",
            marginInlineEnd: "x11t971q",
            marginBottom: "x1j8zywd",
            marginInlineStart: "xvc5jky",
            $$css: true
        },
        animation: {
            height: "x1wkxgih",
            $$css: true
        }
    };
    function _({ onClose, parentChat }) {
        const aRef = useRef();
        const i = function() {
            o("WAWebModalManager").ModalManager.close();
            onClose?.();
        };
        const l = function() {
            o("WAWebCmd").Cmd.openCommunityHome(parentChat.id);
            o("WAWebModalManager").ModalManager.close();
            onClose?.();
        };
        const c = s._("Welcome to a community");
        const _ = u.jsx(o("WAWebLottieAnimationLoadable").LottieAnimation, {
            loop: false,
            autoplay: true,
            data: r("WAWebCommunityNuxAnimationData"),
            xstyle: p.animation
        });
        const Component = o("WAWebExternalLink.react").ExternalLink;
        const f = <>{s._("As a member, you can see and join groups in this community and stay updated with admin announcements.")} {o("WAWebCommunityGatingUtils").communityCreatePrivacyEnabled() ? null : <Component href={o("WAWebFaqUrl").getCommunityHomeNuxUrl()}>{r("WAWebFbtCommon")("Learn more")}</Component>}</>;
        const g = s._("Your profile is visible to community admins.");
        const Component_1 = o("WAWebExternalLink.react").ExternalLink;
        const h = <>{s._("Your profile is visible to community admins. Our Privacy Policy includes details about Communities.")} <Component_1 href={o("WAWebFaqUrl").getCommunityMemberPrivacyUrl()}>{r("WAWebFbtCommon")("Learn more")}</Component_1></>;
        useEffect(function() {
            aRef.current?.focus();
        }, []);
        const Component_2 = r("WAWebFlexItem.react");
        const Component_3 = o("WAWebFlex.react").FlexRow;
        const Component_4 = r("WDSText.react");
        const Component_5 = o("WAWebFlex.react").FlexRow;
        const Component_6 = r("WDSText.react");
        const Component_7 = o("WAWebFlex.react").FlexRow;
        const Component_8 = r("WDSText.react");
        const Component_9 = o("WAWebFlex.react").FlexRow;
        const Component_10 = r("WDSText.react");
        const Component_11 = o("WAWebFlex.react").FlexRow;
        const Component_12 = o("WAWebConfirmPopup.react").ConfirmPopup;
        return <Component_12 okText={s._("View community")} cancelText={s._("Close")} onOK={l} onCancel={i} type={o("WAWebModal.react").ModalTheme.Promote} ref={aRef}><Component_3 align="center" justify="center"><Component_2 xstyle={p.badge}>{_}</Component_2></Component_3><Component_5 align="center" justify="center"><h2 data-testid="community-popup-nux-heading-wrapper" className="x9u28bd xvc5jky x11t971q xat24cr"><Component_4 type="Headline1" colorName="contentDefault" textAlign="center" testid="community-popup-nux-heading" xstyle={p.headerText}>{c}</Component_4></h2></Component_5>{parentChat.formattedTitle != null ? <Component_7 align="center" justify="center"><p data-testid="community-popup-nux-parent-title-paragraph"><Component_6 type="Body2" colorName="contentDefault" testid="community-popup-nux-parent-title">{parentChat.formattedTitle}</Component_6></p></Component_7> : null}<Component_9 align="center" justify="center"><p data-testid="community-popup-nux-description-paragraph"><Component_8 type="Body2" colorName="contentDefault" textAlign="center" testid="community-popup-nux-description" xstyle={p.paragraph}>{f}</Component_8></p></Component_9><Component_11 align="center" justify="center"><p data-testid="community-popup-nux-privacy-paragraph"><Component_10 type="Body3" colorName="contentDeemphasized" textAlign="center" testid="community-popup-nux-privacy" xstyle={p.disclaimer}>{o("WAWebCommunityGatingUtils").communityCreatePrivacyEnabled() ? h : g}</Component_10></p></Component_11></Component_12>;
    }
    _.displayName = `${_.name} [from ${i.id}]`;
    l.default = _;
}, 226);