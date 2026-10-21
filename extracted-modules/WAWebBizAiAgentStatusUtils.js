__d("WAWebBizAiAgentStatusUtils", [
    "fbt",
    "WAWebBizAiAgentGating",
    "WAWebBizAiHandoffRemoval",
    "WAWebBusinessProfileCollection",
    "WAWebBusinessProfileGetters",
    "WAWebChatCollection",
    "WAWebChatGetters",
    "WAWebChatListPillUtils",
    "WAWebCommunityGatingUtils",
    "WAWebContactGetters",
    "WAWebFrontendChatGetters",
    "WAWebLabelCollection",
    "WAWebListsGatingUtils",
    "WAWebMobilePlatforms",
    "WAWebProtobufsE2E.pb",
    "WAWebUserPrefsMeUser",
    "react-compiler-runtime",
    "useWAWebChatValues",
    "useWAWebEventTargetValue",
    "useWAWebListener"
], function(t, n, r, o, a, i, l, s) {
    function e() {
        return s._("Your AI Agent");
    }
    function u() {
        const e = o("WAWebBusinessProfileCollection").BusinessProfileCollection.getMeBusinessProfile();
        return e != null && o("WAWebBusinessProfileGetters").getIsBizBot1p(e);
    }
    const c = [
        "change:automatedType",
        "change:dataSource"
    ];
    const d = [
        "add"
    ].concat(c);
    function m(e) {
        "use no forget";
        return r("useWAWebEventTargetValue")(e ? o("WAWebBusinessProfileCollection").BusinessProfileCollection : null, d, function() {
            return e && u();
        }, [
            e
        ]);
    }
    function p(e, t) {
        "use no forget";
        o("useWAWebListener").useListener(e ? o("WAWebBusinessProfileCollection").BusinessProfileCollection : null, d, function(e) {
            if (o("WAWebUserPrefsMeUser").isMeAccount(e.id)) {
                t();
            }
        });
    }
    function _(e) {
        return e.id.isRegularUser() && !e.id.isIAS() && !o("WAWebContactGetters").getIsMe(e.contact) && !o("WAWebContactGetters").getIsAiHub(e.contact);
    }
    function f(e) {
        return _(e) && !e.id.isSupportAccount() && !e.id.isCAPISupportAccount();
    }
    function g(e, t) {
        return o("WAWebMobilePlatforms").isSMB() && o("WAWebBizAiAgentGating").isAiAgentAutoReplyEnabled() && f(e) && (t?.hasOnboardedAiAgent ?? u()) && !h(e, t);
    }
    function h(e, t) {
        if (t != null) {
            return y(t.recipientRunsAiAgent, t.recipientIsEnterprise, t.recipientIsHosted);
        }
        const e_contact = e.contact;
        const n_businessProfile = e_contact.businessProfile;
        return y(n_businessProfile != null && o("WAWebBusinessProfileGetters").getIsBizBot1p(n_businessProfile), o("WAWebContactGetters").getIsEnterprise(e_contact), o("WAWebContactGetters").getIsHosted(e_contact));
    }
    function y(e, t, n) {
        return e || t && n !== true;
    }
    function C(e) {
        return e.capiThreadControl === o("WAWebProtobufsE2E.pb").Message$CloudAPIThreadControlNotification$CloudAPIThreadControl.CONTROL_TAKEN;
    }
    function b(e) {
        return C(e) && _(e);
    }
    function v(e) {
        return g(e) || b(e);
    }
    function S(e) {
        const t = o("react-compiler-runtime").c(1);
        let n;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            n = [
                o("WAWebChatGetters").getCapiThreadControl
            ];
            t[0] = n;
        } else {
            n = t[0];
        }
        const r = o("useWAWebChatValues").useChatValues(e, n);
        const a = r[0];
        return a === o("WAWebProtobufsE2E.pb").Message$CloudAPIThreadControlNotification$CloudAPIThreadControl.CONTROL_TAKEN;
    }
    function R(e) {
        return E(e, C(e), e.forceDismissAiAgentBlockBar);
    }
    function L(e) {
        const n = o("WAWebChatCollection").ChatCollection.get(e);
        const r = S(e);
        const a = o("useWAWebChatValues").useOptionalChatValues(e, [
            o("WAWebFrontendChatGetters").getForceDismissAiAgentBlockBar
        ]) ?? [];
        const i = a[0];
        return n != null && E(n, r, i);
    }
    function E(e, t, n) {
        return t && _(e) && n !== true;
    }
    function k(e) {
        return C(e);
    }
    function I(e) {
        if (!o("WAWebMobilePlatforms").isSMB() || !f(e) && !b(e)) {
            return null;
        }
        const e_capiThreadControl = e.capiThreadControl;
        if (e_capiThreadControl === o("WAWebProtobufsE2E.pb").Message$CloudAPIThreadControlNotification$CloudAPIThreadControl.CONTROL_TAKEN) {
            return "responding";
        }
        if (e_capiThreadControl === o("WAWebProtobufsE2E.pb").Message$CloudAPIThreadControlNotification$CloudAPIThreadControl.CONTROL_PASSED && e.isAiHandoff === true && o("WAWebBizAiHandoffRemoval").isHandoffChatRetained(e)) {
            return "handoff";
        }
        return null;
    }
    function T(e) {
        return I(e) != null && o("WAWebBizAiAgentGating").isAiListsWebUIEnabled();
    }
    function D(e) {
        if (o("WAWebListsGatingUtils").isListsChatListRowPillEnabled()) {
            return x(e);
        }
        return false;
    }
    function x({ labels }) {
        if (labels == null || labels.length === 0) {
            return false;
        }
        const n = o("WAWebBizAiAgentGating").isAiListsWebUIEnabled();
        return labels.some((e)=>{
            const t = o("WAWebLabelCollection").LabelCollection.get(e);
            return t != null && !!t.name && o("WAWebChatListPillUtils").isPillEligibleListType(t.type, n);
        });
    }
    function $(e, t = false) {
        if (t && o("WAWebCommunityGatingUtils").shouldShowNewSubgroupIdentity(e.groupMetadata)) {
            return false;
        }
        return T(e) || D(e);
    }
    l.getAiHubSubtitle = e;
    l.hasOnboardedAiAgent = u;
    l.ONBOARDING_EVENTS = c;
    l.useHasOnboardedAiAgent = m;
    l.useObserveAiAgentOnboarding = p;
    l.isChatEligibleForAiAgent = g;
    l.isChatAiEnabled = C;
    l.canChangeAiReplyStatus = v;
    l.useIsChatAiEnabled = S;
    l.shouldShowAiAgentBlockBar = R;
    l.useShouldShowAiAgentBlockBar = L;
    l.shouldMuteNotification = k;
    l.resolveAiChatStatus = I;
    l.shouldShowAiChipsForChat = T;
    l.shouldShowLabelPillsForChat = D;
    l.hasDisplayableLabels = x;
    l.shouldShowTertiaryRowForChat = $;
}, 226);