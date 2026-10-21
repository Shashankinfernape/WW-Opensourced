__d("WAWebCagEventsAwarenessBanner.react", [
    "fbt",
    "WAWebConversationBanner.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebTabOrder",
    "WAWebText.react",
    "WAWebUimUie.react",
    "WAWebUserPrefsEvents",
    "WDSIconIcCampaignMegaphone.react",
    "react",
    "useWAWebTimeout"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = {
        paddingInlineEnd18: {
            paddingInlineEnd: "x1x5flf6",
            $$css: true
        }
    };
    const d = {
        banner: {
            backgroundColor: "x1280gxy",
            $$css: true
        },
        announcementSpeaker: {
            color: "xo1mcw5",
            $$css: true
        }
    };
    function MComponent({ onClose, ref }) {
        if (!o("WAWebUserPrefsEvents").getCagEventsAwarenessBannerFirstSeenTimestamp()) {
            o("WAWebUserPrefsEvents").setCagEventsAwarenessBannerFirstSeenTimestamp();
        }
        o("useWAWebTimeout").useAlarm(onClose, o("WAWebUserPrefsEvents").getCagEventsAwarenessBannerAutoDismissalExpiration(), {
            immediate: true,
            isGlobal: true
        });
        const href = o("WAWebFaqUrl").getEventsLearnMoreFaqUrl();
        const CHAT_HEADER_BUTTON = o("WAWebTabOrder").TAB_ORDER.CHAT_HEADER_BUTTON;
        const Component = r("WAWebFlexItem.react");
        const Component_1 = o("WAWebExternalLink.react").ExternalLink;
        const Component_2 = o("WAWebText.react").WAWebTextMuted;
        const Component_3 = r("WAWebFlexItem.react");
        const Component_4 = o("WAWebFlex.react").FlexRow;
        const Component_5 = r("WAWebConversationBanner.react");
        const Component_6 = o("WAWebUimUie.react").UIE;
        return <Component_6 displayName="CagEventsAwarenessBanner" escapable><Component_5 ref={ref} xstyle={d.banner} onClose={onClose} data-tab={CHAT_HEADER_BUTTON}><Component_4 align="center"><Component xstyle={c.paddingInlineEnd18}>{u.jsx(r("WDSIconIcCampaignMegaphone.react"), {
            iconXstyle: d.announcementSpeaker,
            width: 32,
            height: 32
        })}</Component><Component_3><Component_2 as="span">{s._("Create events in announcement groups.")} <Component_1 href={href} tabIndex={0} data-tab={CHAT_HEADER_BUTTON}>{r("WAWebFbtCommon")("Learn more")}</Component_1></Component_2></Component_3></Component_4></Component_5></Component_6>;
    }
    MComponent.displayName = `${MComponent.name} [from ${i.id}]`;
    l.default = MComponent;
}, 226);