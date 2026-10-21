__d("WAWebNewsletterAILabelBanner.react", [
    "fbt",
    "WAWebChatGetters",
    "WAWebConversationBanner.react",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebFrontendChatGetters",
    "WAWebNewsletterAiContentInfoModalOpener",
    "WAWebNewsletterAiContentInfoModalTypes",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterMetadataGetters",
    "WAWebNux",
    "WAWebUimUie.react",
    "WDSIconIcInfo.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
    "useWAWebChatValues",
    "useWAWebNewsletterMetadataValues",
    "useWAWebNux"
], function(t, n, r, o, a, i, l, s) {
    const e = [
        "ref"
    ];
    let u;
    const c = u || (u = o("react"));
    const u_useCallback = u.useCallback;
    const m = {
        banner: {
            backgroundColor: "x1280gxy",
            $$css: true
        },
        icon: {
            color: "xhslqc4",
            $$css: true
        },
        iconContainer: {
            paddingInlineEnd: "xvtqlqk",
            $$css: true
        }
    };
    function p(t) {
        const n = o("react-compiler-runtime").c(9);
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
        const a_onClose = a.onClose;
        const d = _;
        let p;
        if (n[3] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WAWebFlexItem.react");
            p = <Component xstyle={m.iconContainer}>{c.jsx(r("WDSIconIcInfo.react"), {
                width: 24,
                height: 24,
                xstyle: m.icon
            })}</Component>;
            n[3] = p;
        } else {
            p = n[3];
        }
        let f;
        if (n[4] === Symbol.for("react.memo_cache_sentinel")) {
            f = s._("Channels in your country are required to label AI content.");
            n[4] = f;
        } else {
            f = n[4];
        }
        let g;
        if (n[5] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WDSText.react");
            const Component_1 = r("WDSText.react");
            const Component_2 = o("WAWebFlex.react").FlexRow;
            g = <Component_2 align="center">{p}<Component_1 type="Body2" colorName="contentDefault">{f} <Component type="Body2Emphasized" colorName="contentActionEmphasized" testid="ai-label-banner-see-details">{s._("See details")}</Component></Component_1></Component_2>;
            n[5] = g;
        } else {
            g = n[5];
        }
        let h;
        if (n[6] !== a_onClose || n[7] !== i) {
            const Component = r("WAWebConversationBanner.react");
            const Component_1 = o("WAWebUimUie.react").UIE;
            h = <Component_1 displayName="NewsletterAILabelBanner" escapable><Component ref={i} xstyle={m.banner} onClick={d} onClose={a_onClose}>{g}</Component></Component_1>;
            n[6] = a_onClose;
            n[7] = i;
            n[8] = h;
        } else {
            h = n[8];
        }
        return h;
    }
    function _() {
        o("WAWebNewsletterAiContentInfoModalOpener").openAiContentInfoModal(o("WAWebNewsletterAiContentInfoModalTypes").AiContentModalVariant.ADMIN_NUX);
    }
    function f(e) {
        let t;
        const n = o("react-compiler-runtime").c(10);
        let a;
        if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = [
                o("WAWebFrontendChatGetters").getNewsletterMetadata
            ];
            n[0] = a;
        } else {
            a = n[0];
        }
        const i = o("useWAWebChatValues").useChatValues(e.id, a);
        const l = i[0];
        (t = o("useWAWebNewsletterMetadataValues").useOptionalNewsletterMetadataValues(l?.id, [
            o("WAWebNewsletterMetadataGetters").getMembershipType
        ], {
            isStrong: true
        })) != null;
        let s;
        if (n[1] !== e.id) {
            s = o("WAWebNux").getAILabelBannerNuxKey(e.id.toString());
            n[1] = e.id;
            n[2] = s;
        } else {
            s = n[2];
        }
        const c = r("useWAWebNux")(s);
        const d = c[0];
        const m = c[2];
        let p;
        if (n[3] !== e || n[4] !== l || n[5] !== d) {
            p = o("WAWebChatGetters").getIsNewsletter(e) && d && (l?.iAmAdminOrOwner() ?? false) && o("WAWebNewsletterGatingUtils").isChannelSGISenderSelfDisclosureEnabled();
            n[3] = e;
            n[4] = l;
            n[5] = d;
            n[6] = p;
        } else {
            p = n[6];
        }
        const f = p;
        let g;
        if (n[7] !== m || n[8] !== f) {
            g = [
                f,
                m
            ];
            n[7] = m;
            n[8] = f;
            n[9] = g;
        } else {
            g = n[9];
        }
        return g;
    }
    l.NewsletterAILabelBanner = p;
    l.useNewsletterAILabelBanner = f;
}, 226);