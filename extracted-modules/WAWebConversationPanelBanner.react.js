__d("WAWebConversationPanelBanner.react", [
    "$InternalEnum",
    "WAWebCagEventsAwarenessBanner.react",
    "WAWebChangeNumberNotificationBanner.react",
    "WAWebChatGetters",
    "WAWebConversationPanelStyleUtils",
    "WAWebGroupDescriptionBanner.react",
    "WAWebMembershipApprovalRequestsBanner.react",
    "WAWebMetaAICTABanner.react",
    "WAWebNewsletterAILabelBanner.react",
    "WAWebNewsletterAdminProfilesBanner.react",
    "WAWebNewsletterChannelAlertsBanner.react",
    "WAWebNewsletterNotificationSettingsBanner.react",
    "WAWebNewsletterPinnedMessagesBanner.react",
    "WAWebPinnedMessagesBanner.react",
    "WAWebReportToAdminNewReportBanner.react",
    "WAWebSimilarNewslettersUnitsLoadable.react",
    "WAWebSubgroupSuggestionsBanner.react",
    "WAWebVelocityTransitionGroup",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebCagEventsAwarenessBanner.react",
    "useWAWebConversationPanelGroupDescription",
    "useWAWebNewsletterAdminProfilesBanner",
    "useWAWebNewsletterNotificationSettingsBanner",
    "useWAWebSimilarNewslettersConversationBanner"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = {
        topBorder: {
            borderTopWidth: "x178xt8z",
            borderTopStyle: "x13fuv20",
            borderTopColor: "xx42vgk",
            backgroundColor: "x1h3rtpe",
            $$css: true
        },
        banner: {
            flexGrow: "x1c4vz4f",
            flexShrink: "x2lah0s",
            flexBasis: "xdl72j9",
            borderBottomWidth: "xso031l",
            borderBottomStyle: "x1q0q8m5",
            borderBottomColor: "x120ee7l",
            $$css: true
        },
        absoluteBanner: {
            position: "x10l6tqk",
            top: "x1imwcls",
            insetInlineStart: "x1o0tod",
            insetInlineEnd: "xtijo5x",
            left: null,
            right: null,
            borderInlineStartColor: "x1vb5itz",
            borderInlineStartStyle: "x1t7ytsu",
            borderInlineStartWidth: "xpilrb4",
            $$css: true
        },
        material: {
            borderBottomWidth: "x1qhh985",
            $$css: true
        }
    };
    const d = n("$InternalEnum")({
        CagEventsAwareness: 1,
        MembershipApprovalRequests: 2,
        ReportToAdminNewReport: 3,
        SubgroupSuggestions: 4,
        GroupDescription: 5,
        PinnedMessages: 6,
        NewsletterChannelAlerts: 7,
        NewsletterAILabelNux: 8,
        NewsletterPinnedMessages: 9,
        MetaAICTABanner: 10,
        NewsletterNotificationSettings: 11,
        NewsletterAdminProfiles: 12
    });
    function m(t) {
        const n = o("react-compiler-runtime").c(39);
        const { chat, groupMetadata } = t;
        const l = r("useWAWebConversationPanelGroupDescription")(chat);
        const s = l[0];
        const m = l[1];
        const f = o("WAWebMembershipApprovalRequestsBanner.react").useMembershipApprovalRequestsBanner(chat);
        const g = f[0];
        const h = f[1];
        const y = o("WAWebReportToAdminNewReportBanner.react").useReportToAdminNewReportBanner(chat);
        const C = y[0];
        const b = y[1];
        const v = o("WAWebPinnedMessagesBanner.react").useWAWebPinnedMessagesBanner(chat);
        const S = o("WAWebNewsletterPinnedMessagesBanner.react").useWAWebNewsletterPinnedMessagesBanner(chat);
        const R = o("WAWebNewsletterChannelAlertsBanner.react").useNewsletterChannelAlertsBanner(chat);
        const L = R[0];
        const E = R[1];
        const k = o("WAWebNewsletterAILabelBanner.react").useNewsletterAILabelBanner(chat);
        const I = k[0];
        const T = k[1];
        const D = o("WAWebSubgroupSuggestionsBanner.react").useSubgroupSuggestionsBanner(chat);
        const x = D[0];
        const $ = D[1];
        const subgroupSuggestionsCount = D[2];
        const N = r("useWAWebCagEventsAwarenessBanner.react")(chat);
        const M = N[0];
        const w = N[1];
        const A = o("WAWebMetaAICTABanner.react").useMetaAICTABanner(chat);
        const F = o("WAWebChangeNumberNotificationBanner.react").useChangeNumberNotificationBanner(chat);
        const O = o("useWAWebSimilarNewslettersConversationBanner").useSimilarNewslettersConversationBanner(chat);
        const B = o("useWAWebNewsletterNotificationSettingsBanner").useNewsletterNotificationSettingsBanner(chat);
        const W = B[0];
        const q = B[1];
        const U = o("useWAWebNewsletterAdminProfilesBanner").useNewsletterAdminProfilesBanner(chat);
        const V = U[0];
        const H = U[1];
        let component;
        if (n[0] !== w) {
            const Component = r("WAWebCagEventsAwarenessBanner.react");
            component = <Component onClose={w}/>;
            n[0] = w;
            n[1] = component;
        } else {
            component = n[1];
        }
        let z;
        if (n[2] !== chat || n[3] !== m || n[4] !== h || n[5] !== E || n[6] !== b || n[7] !== $ || n[8] !== T || n[9] !== H || n[10] !== q || n[11] !== groupMetadata || n[12] !== M || n[13] !== s || n[14] !== g || n[15] !== A || n[16] !== I || n[17] !== V || n[18] !== L || n[19] !== W || n[20] !== S || n[21] !== v || n[22] !== C || n[23] !== x || n[24] !== subgroupSuggestionsCount || n[25] !== component) {
            const Component = o("WAWebMembershipApprovalRequestsBanner.react").MembershipApprovalRequestsBanner;
            const Component_1 = o("WAWebReportToAdminNewReportBanner.react").ReportToAdminNewReportBanner;
            const Component_2 = o("WAWebSubgroupSuggestionsBanner.react").SubgroupSuggestionsBanner;
            const Component_3 = r("WAWebGroupDescriptionBanner.react");
            const Component_4 = o("WAWebNewsletterChannelAlertsBanner.react").NewsletterChannelAlertsBanner;
            const Component_5 = o("WAWebNewsletterAILabelBanner.react").NewsletterAILabelBanner;
            const Component_6 = r("WAWebNewsletterNotificationSettingsBanner.react");
            const Component_7 = r("WAWebNewsletterAdminProfilesBanner.react");
            const K = [
                {
                    condition: M,
                    component,
                    priority: d.CagEventsAwareness
                },
                {
                    condition: g,
                    component: <Component onClose={h} chat={chat}/>,
                    priority: d.MembershipApprovalRequests
                },
                {
                    condition: C,
                    component: <Component_1 onClose={b} chat={chat}/>,
                    priority: d.ReportToAdminNewReport
                },
                {
                    condition: x,
                    component: <Component_2 onClose={$} chat={chat} subgroupSuggestionsCount={subgroupSuggestionsCount}/>,
                    priority: d.SubgroupSuggestions
                },
                {
                    condition: !!(s && groupMetadata != null && groupMetadata.displayedDesc),
                    component: <Component_3 onClose={m} chat={chat} groupMetadata={groupMetadata}/>,
                    priority: d.GroupDescription
                },
                {
                    condition: v,
                    component: u.jsx(o("WAWebPinnedMessagesBanner.react").PinnedMessagesBanner, {
                        chat
                    }),
                    priority: d.PinnedMessages
                },
                {
                    condition: o("WAWebChatGetters").getIsNewsletter(chat) && S,
                    component: u.jsx(o("WAWebNewsletterPinnedMessagesBanner.react").WAWebNewsletterPinnedMessagesBanner, {
                        chat
                    }),
                    priority: d.NewsletterPinnedMessages
                },
                {
                    condition: o("WAWebChatGetters").getIsNewsletter(chat) && L,
                    component: <Component_4 newsletter={chat} onClose={E}/>,
                    priority: d.NewsletterChannelAlerts
                },
                {
                    condition: I,
                    component: <Component_5 onClose={T}/>,
                    priority: d.NewsletterAILabelNux
                },
                {
                    condition: A,
                    component: u.jsx(o("WAWebMetaAICTABanner.react").MetaAICTABanner, {}),
                    priority: d.MetaAICTABanner
                },
                {
                    condition: W,
                    component: <Component_6 chat={chat} onClose={q}/>,
                    priority: d.NewsletterNotificationSettings
                },
                {
                    condition: V,
                    component: <Component_7 chat={chat} onClose={H}/>,
                    priority: d.NewsletterAdminProfiles
                }
            ];
            z = K.filter(_).sort(p)[0]?.component;
            n[2] = chat;
            n[3] = m;
            n[4] = h;
            n[5] = E;
            n[6] = b;
            n[7] = $;
            n[8] = T;
            n[9] = H;
            n[10] = q;
            n[11] = groupMetadata;
            n[12] = M;
            n[13] = s;
            n[14] = g;
            n[15] = A;
            n[16] = I;
            n[17] = V;
            n[18] = L;
            n[19] = W;
            n[20] = S;
            n[21] = v;
            n[22] = C;
            n[23] = x;
            n[24] = subgroupSuggestionsCount;
            n[25] = component;
            n[26] = z;
        } else {
            z = n[26];
        }
        const Q = z;
        let X;
        if (n[27] !== Q || n[28] !== chat || n[29] !== F) {
            X = F ? u.jsx(o("WAWebChangeNumberNotificationBanner.react").ChangeNumberNotificationBanner, {
                chat,
                xstyle: Q != null && c.topBorder
            }) : null;
            n[27] = Q;
            n[28] = chat;
            n[29] = F;
            n[30] = X;
        } else {
            X = n[30];
        }
        const Y = X;
        let J;
        if (n[31] !== chat || n[32] !== O) {
            J = o("WAWebChatGetters").getIsNewsletter(chat) && O ? <div {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(c.banner, r("WAWebConversationPanelStyleUtils").sharedLayer, c.topBorder, c.absoluteBanner, c.material), {
                children: u.jsx(o("WAWebSimilarNewslettersUnitsLoadable.react").SimilarNewslettersConversationBannerLoadable, {
                    chat
                })
            })}/> : null;
            n[31] = chat;
            n[32] = O;
            n[33] = J;
        } else {
            J = n[33];
        }
        const Z = J;
        if (Q == null && Y == null && Z == null) {
            return null;
        }
        let ee;
        if (n[34] === Symbol.for("react.memo_cache_sentinel")) {
            ee = [
                c.banner,
                r("WAWebConversationPanelStyleUtils").sharedLayer,
                c.topBorder,
                c.material
            ];
            n[34] = ee;
        } else {
            ee = n[34];
        }
        let te;
        if (n[35] !== Q || n[36] !== Y || n[37] !== Z) {
            const Component = r("WAWebVelocityTransitionGroup");
            te = <Component transitionName="butterbar" xstyle={ee}>{Q}{Y}{Z}</Component>;
            n[35] = Q;
            n[36] = Y;
            n[37] = Z;
            n[38] = te;
        } else {
            te = n[38];
        }
        return te;
    }
    function p(e, t) {
        return e.priority - t.priority;
    }
    function _(e) {
        return e.condition;
    }
    l.default = m;
}, 98);