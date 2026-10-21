__d("WAWebNewsletterChannelAlertsBanner.react", [
    "fbt",
    "WAWebConversationBanner.react",
    "WAWebDrawerManager",
    "WAWebEnforcementActionLogging",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebFrontendChatGetters",
    "WAWebKeyboardTabUtils",
    "WAWebNewsletterEnforcementAlertFlowLoadable",
    "WAWebNewsletterMetadataGetters",
    "WAWebNux",
    "WAWebText.react",
    "WAWebUimUie.react",
    "WAWebWamEnumInteractionEntryPoint",
    "WAWebWamEnumInteractionSurface",
    "WDSIconIcWarning.react",
    "react",
    "react-compiler-runtime",
    "useWAWebChatValues",
    "useWAWebNewsletterGeosuspendedCountries",
    "useWAWebNewsletterHasProfilePictureDeletionAlerts",
    "useWAWebNewsletterIsSuspended",
    "useWAWebNewsletterMessageDeliveryUpdates",
    "useWAWebNewsletterMetadataValues",
    "useWAWebNux",
    "useWAWebUIM"
], function(t, n, r, o, a, i, l, s) {
    const e = [
        "ref"
    ];
    let u;
    const c = u || (u = o("react"));
    const d = {
        banner: {
            backgroundColor: "x1280gxy",
            $$css: true
        },
        criticalColor: {
            color: "x30a034",
            $$css: true
        },
        paddingEnd20: {
            paddingInlineEnd: "xcldk2z",
            $$css: true
        }
    };
    function m(t) {
        const n = o("react-compiler-runtime").c(15);
        let a;
        let i;
        if (n[0] !== t) {
            i = t.ref;
            a = babelHelpers.objectWithoutPropertiesLoose(t, e);
            n[0] = t;
            n[1] = a;
            n[2] = i;
        } else {
            a = n[1];
            i = n[2];
        }
        const l = a;
        const { newsletter, onClose } = l;
        const p = r("useWAWebUIM")();
        let _;
        if (n[3] !== newsletter.id || n[4] !== onClose) {
            _ = function() {
                if (!r("WAWebEnforcementActionLogging").isSessionStarted()) {
                    r("WAWebEnforcementActionLogging").startEnforcementSession(o("WAWebWamEnumInteractionEntryPoint").INTERACTION_ENTRY_POINT.ALERT_BANNER, newsletter.id.toString(), o("WAWebWamEnumInteractionSurface").INTERACTION_SURFACE.NEWSLETTER_CONVERSATION_SCREEN);
                }
                r("WAWebEnforcementActionLogging").logAlertBannerDismissClick();
                onClose();
            };
            n[3] = newsletter.id;
            n[4] = onClose;
            n[5] = _;
        } else {
            _ = n[5];
        }
        const f = _;
        let g;
        if (n[6] !== newsletter || n[7] !== p) {
            g = function() {
                r("WAWebEnforcementActionLogging").startEnforcementSession(o("WAWebWamEnumInteractionEntryPoint").INTERACTION_ENTRY_POINT.ALERT_BANNER, newsletter.id.toString(), o("WAWebWamEnumInteractionSurface").INTERACTION_SURFACE.NEWSLETTER_CONVERSATION_SCREEN);
                r("WAWebEnforcementActionLogging").logChannelAlertsClick();
                const Component = o("WAWebNewsletterEnforcementAlertFlowLoadable").WAWebNewsletterEnforcementAlertFlowLoadable;
                o("WAWebDrawerManager").DrawerManager.openDrawerRight(<Component chat={newsletter} onClose={o("WAWebDrawerManager").closeDrawerRight}/>, {
                    transition: "slide-left",
                    uim: p,
                    focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE
                });
            };
            n[6] = newsletter;
            n[7] = p;
            n[8] = g;
        } else {
            g = n[8];
        }
        const h = g;
        let y;
        if (n[9] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WAWebFlexItem.react");
            y = <Component xstyle={d.paddingEnd20}>{c.jsx(r("WDSIconIcWarning.react"), {
                iconXstyle: d.criticalColor,
                height: 24,
                width: 24
            })}</Component>;
            n[9] = y;
        } else {
            y = n[9];
        }
        let C;
        if (n[10] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebText.react").WAWebTextSectionTitle;
            const Component_1 = r("WAWebFlexItem.react");
            const Component_2 = o("WAWebFlex.react").FlexRow;
            C = <Component_2 align="center">{y}<Component_1><Component color="primary">{s._("Channel alerts")}</Component></Component_1></Component_2>;
            n[10] = C;
        } else {
            C = n[10];
        }
        let b;
        if (n[11] !== f || n[12] !== h || n[13] !== i) {
            const Component = r("WAWebConversationBanner.react");
            const Component_1 = o("WAWebUimUie.react").UIE;
            b = <Component_1 displayName="NewsletterChannelAlertsBanner" escapable><Component onClick={h} onClose={f} ref={i} xstyle={d.banner}>{C}</Component></Component_1>;
            n[11] = f;
            n[12] = h;
            n[13] = i;
            n[14] = b;
        } else {
            b = n[14];
        }
        return b;
    }
    function p(e) {
        let t;
        const i = o("react-compiler-runtime").c(13);
        let l;
        if (i[0] === Symbol.for("react.memo_cache_sentinel")) {
            l = [
                o("WAWebFrontendChatGetters").getNewsletterMetadata
            ];
            i[0] = l;
        } else {
            l = i[0];
        }
        const s = o("useWAWebChatValues").useChatValues(e.id, l);
        const u = s[0];
        (t = o("useWAWebNewsletterMetadataValues").useOptionalNewsletterMetadataValues(u?.id, [
            o("WAWebNewsletterMetadataGetters").getMembershipType
        ], {
            isStrong: true
        })) != null;
        const c = o("useWAWebNewsletterMessageDeliveryUpdates").useNewsletterMessageDeliveryUpdates(e) ?? [];
        const d = o("useWAWebNewsletterGeosuspendedCountries").useNewsletterGeosuspendedCountries(e) ?? [];
        const m = o("useWAWebNewsletterIsSuspended").useNewsletterIsSuspended(e);
        let p;
        if (i[1] !== e.id) {
            p = o("WAWebNux").getNewsletterAlertsBannerNuxKey(e.id.toString());
            i[1] = e.id;
            i[2] = p;
        } else {
            p = i[2];
        }
        const f = r("useWAWebNux")(p);
        const g = f[0];
        const h = f[1];
        const y = c.length > 0;
        const C = d.length > 0;
        const b = o("useWAWebNewsletterHasProfilePictureDeletionAlerts").useWAWebNewsletterHasProfilePictureDeletionAlerts(e);
        let v;
        if (i[3] !== C || i[4] !== y || i[5] !== b || i[6] !== m || i[7] !== u || i[8] !== g) {
            v = g && (u?.iAmAdminOrOwner() ?? false) && (y || C || m || b);
            i[3] = C;
            i[4] = y;
            i[5] = b;
            i[6] = m;
            i[7] = u;
            i[8] = g;
            i[9] = v;
        } else {
            v = i[9];
        }
        const R = v;
        let L;
        if (i[10] !== R || i[11] !== h) {
            L = [
                R,
                h
            ];
            i[10] = R;
            i[11] = h;
            i[12] = L;
        } else {
            L = i[12];
        }
        return L;
    }
    l.NewsletterChannelAlertsBanner = m;
    l.useNewsletterChannelAlertsBanner = p;
}, 226);