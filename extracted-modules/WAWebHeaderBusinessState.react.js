__d("WAWebHeaderBusinessState.react", [
    "WAWebBotGating",
    "WAWebBotGroupGatingUtils",
    "WAWebBusinessProfileCollection",
    "WAWebBusinessProfileGetters",
    "WAWebCTWAGatingUtils",
    "WAWebChatGetters",
    "WAWebCommonCTWAConsumerTransparency",
    "WAWebContactGetters",
    "WAWebEphemeralityFrontendUtils",
    "WAWebFrontendChatGetters",
    "WAWebFrontendContactGetters",
    "WAWebGroupMetadataGetters",
    "WAWebHasAcceptedBizBotTos",
    "WAWebHeaderOrgMemberTagSubtitleContentLoadable",
    "WAWebName.react",
    "WAWebOrgIcon.react",
    "WAWebOrgMemberLidEligibility",
    "WAWebUseBusinessProfile.react",
    "WAWebUserPrefsMeUser",
    "WAWebUserSubtitle.react",
    "WAWebWidToJid",
    "WDSIconIcVisibilityOff.react",
    "WDSIconWdsIc3PAiBotFilled.react",
    "WDSIconWdsIcLogoHatchFilled.react",
    "WDSIconWdsIcLogoMetaAiColor.react",
    "WDSIconWdsIcMetaDataChevron.react",
    "WDSIconWdsIcMetaDataDoubleChevron.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
    "useWAWebABPropConfigValue",
    "useWAWebBusinessProfileValues",
    "useWAWebChatValues",
    "useWAWebContactValues",
    "useWAWebGroupMetadataValues",
    "useWAWebPrimaryOrgMembershipForContact"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = e;
    const { useEffect, useState } = u;
    const m = 5000;
    function p({ contact }) {
        const a = o("useWAWebContactValues").useOptionalContactValues(contact?.id, [
            o("WAWebContactGetters").getShouldForceBusinessUpdate
        ]) ?? [
            false
        ];
        const i = a[0];
        useEffect(function() {
            function e() {
                return t.apply(this, arguments);
            }
            function t() {
                t = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    if (contact != null) {
                        yield o("WAWebBusinessProfileCollection").BusinessProfileCollection.find(contact.id);
                    }
                });
                return t.apply(this, arguments);
            }
            if (i) {
                e();
            }
        }, []);
        return null;
    }
    p.displayName = `${p.name} [from ${i.id}]`;
    function Component(e) {
        const a = o("react-compiler-runtime").c(13);
        const e_chat = e.chat;
        const l = o("useWAWebContactValues").useOptionalContactValues(e_chat.contact?.id, [
            o("WAWebContactGetters").getIsMe,
            o("WAWebContactGetters").getShowBusinessCheckmarkAsPrimary
        ]) ?? [
            false,
            false
        ];
        const showMessageYourselfName = l[0];
        const c = l[1];
        let d;
        let m;
        if (a[0] !== e_chat.id) {
            const p = o("WAWebUserPrefsMeUser").isMeAccount(e_chat.id) ? null : o("WAWebOrgMemberLidEligibility").getWAWebOrgMemberLid(e_chat.id);
            d = r("useWAWebPrimaryOrgMembershipForContact");
            m = p == null ? null : o("WAWebWidToJid").userLidtoLidUserJid(p);
            a[0] = e_chat.id;
            a[1] = d;
            a[2] = m;
        } else {
            d = a[1];
            m = a[2];
        }
        const membership = d(m);
        let f;
        if (a[3] === Symbol.for("react.memo_cache_sentinel")) {
            f = {
                className: "x6s0dn4 x78zum5 xs83m0k xeuugli x6ikm8r x10wlt62"
            };
            a[3] = f;
        } else {
            f = a[3];
        }
        let g;
        if (a[4] !== e_chat || a[5] !== showMessageYourselfName || a[6] !== c) {
            g = <div {...babelHelpers.extends({
                "data-testid": "conversation-info-header-chat-title-name"
            }, f, {
                children: s.jsx(o("WAWebName.react").Name, {
                    chat: e_chat,
                    ellipsify: true,
                    showBusinessCheckmark: c,
                    testid: "conversation-info-header-chat-title",
                    showMessageYourselfName,
                    truncateName: true,
                    unknownUserLogContext: "chat_header"
                })
            })}/>;
            a[4] = e_chat;
            a[5] = showMessageYourselfName;
            a[6] = c;
            a[7] = g;
        } else {
            g = a[7];
        }
        let h;
        if (a[8] !== membership) {
            h = s.jsx(r("WAWebOrgIcon.react"), {
                membership
            });
            a[8] = membership;
            a[9] = h;
        } else {
            h = a[9];
        }
        let y;
        if (a[10] !== g || a[11] !== h) {
            y = <>{g}{h}</>;
            a[10] = g;
            a[11] = h;
            a[12] = y;
        } else {
            y = a[12];
        }
        return y;
    }
    function f(e) {
        const a = o("react-compiler-runtime").c(14);
        const { assignmentSubtitle, chatId, chatstate, contact, location, orgMemberLid, presence, threadId } = e;
        const f = o("useWAWebABPropConfigValue").useABPropConfigValue("whatsapp_orgs_enabled");
        const g = o("useWAWebContactValues").useOptionalContactValues(contact.id, [
            o("WAWebContactGetters").getShowAsMetaVerified,
            o("WAWebContactGetters").getIsMe,
            o("WAWebContactGetters").getShowBusinessCheckmarkAsSecondary,
            o("WAWebFrontendContactGetters").getShowBiz3pBotVerifiedNameAsSecondary,
            o("WAWebContactGetters").getVerifiedName
        ]) ?? [
            false,
            false,
            false,
            false,
            null
        ];
        const h = g[0];
        const y = g[1];
        const C = g[2];
        const b = g[3];
        const v = g[4];
        const S = o("WAWebBotGating").isBizBot3pAvailable() ? contact.id : null;
        o("WAWebUseBusinessProfile.react").useBusinessProfile(S);
        const R = o("useWAWebBusinessProfileValues").useOptionalBusinessProfileValues(S, [
            o("WAWebBusinessProfileGetters").getIsBizBot3p
        ]) ?? [];
        const L = R[0];
        const E = L === true;
        const showVerifiedName = b && E === true;
        let I;
        if (a[0] !== assignmentSubtitle || a[1] !== chatId || a[2] !== chatstate || a[3] !== contact || a[4] !== location || a[5] !== presence || a[6] !== C || a[7] !== showVerifiedName || a[8] !== threadId) {
            I = {
                assignmentSubtitle,
                chatId,
                chatstate,
                contact,
                location,
                presence,
                showBusinessCheckmark: C,
                showVerifiedName,
                threadId
            };
            a[0] = assignmentSubtitle;
            a[1] = chatId;
            a[2] = chatstate;
            a[3] = contact;
            a[4] = location;
            a[5] = presence;
            a[6] = C;
            a[7] = showVerifiedName;
            a[8] = threadId;
            a[9] = I;
        } else {
            I = a[9];
        }
        const T = I;
        const D = h && v != null && v !== "";
        const orgMemberLid_1 = !f || D || y ? null : orgMemberLid ?? null;
        let $;
        if (a[10] !== orgMemberLid_1 || a[11] !== presence || a[12] !== T) {
            $ = orgMemberLid_1 == null ? s.jsx(r("WAWebUserSubtitle.react"), {
                userSubtitle: T
            }) : s.jsx(r("WAWebHeaderOrgMemberTagSubtitleContentLoadable"), {
                orgMemberLid: orgMemberLid_1,
                presence,
                userSubtitle: T
            });
            a[10] = orgMemberLid_1;
            a[11] = presence;
            a[12] = T;
            a[13] = $;
        } else {
            $ = a[13];
        }
        return $;
    }
    function g(e, t, n) {
        const d = o("react-compiler-runtime").c(14);
        const e_contact = e.contact;
        const p = o("WAWebHasAcceptedBizBotTos").useHasAcceptedBizBotTos();
        let _;
        if (d[0] === Symbol.for("react.memo_cache_sentinel")) {
            _ = [
                o("WAWebContactGetters").getBusinessProfile
            ];
            d[0] = _;
        } else {
            _ = d[0];
        }
        const f = o("useWAWebContactValues").useOptionalContactValues(e_contact?.id, _);
        let g;
        if (d[1] === Symbol.for("react.memo_cache_sentinel")) {
            g = [
                o("WAWebBusinessProfileGetters").getIsBizBot1p
            ];
            d[1] = g;
        } else {
            g = d[1];
        }
        const C = o("useWAWebBusinessProfileValues").useOptionalBusinessProfileValues(f?.[0]?.id ?? null, g);
        const b = C?.[0] === true;
        const v = o("useWAWebChatValues").useOptionalChatValues(e.id, [
            o("WAWebFrontendChatGetters").getEphemeralDuration
        ]) ?? [];
        const S = v[0];
        const R = o("useWAWebGroupMetadataValues").useOptionalGroupMetadataValues(e.groupMetadata?.id, [
            o("WAWebGroupMetadataGetters").getEphemeralDuration
        ]) ?? [];
        const L = R[0];
        let E;
        if (d[2] !== e || d[3] !== S || d[4] !== L) {
            E = h(e, S, L);
            d[2] = e;
            d[3] = S;
            d[4] = L;
            d[5] = E;
        } else {
            E = d[5];
        }
        const k = E;
        const I = useY(String(e.id), k && o("WAWebChatGetters").getIsGroup(e)) && (t === "muse" || t === "aiAgents");
        if (e_contact != null) {
            if (b && p && o("WAWebCTWAGatingUtils").isUpdatedConsumerDisclosureUiRowEnabled()) {
                let T;
                if (d[6] === Symbol.for("react.memo_cache_sentinel")) {
                    T = {
                        type: "discreet",
                        Icon: r("WDSIconWdsIcMetaDataDoubleChevron.react")
                    };
                    d[6] = T;
                } else {
                    T = d[6];
                }
                return T;
            }
            if (o("WAWebCommonCTWAConsumerTransparency").shouldShowConsumerTransparencyDisclosure(e)) {
                let D;
                if (d[7] === Symbol.for("react.memo_cache_sentinel")) {
                    D = {
                        type: "discreet",
                        Icon: r("WDSIconWdsIcMetaDataChevron.react")
                    };
                    d[7] = D;
                } else {
                    D = d[7];
                }
                return D;
            }
            if (I) {
                let x;
                if (d[8] === Symbol.for("react.memo_cache_sentinel")) {
                    x = {
                        type: "discreet",
                        testid: "disappearing-messages-refreshed"
                    };
                    d[8] = x;
                } else {
                    x = d[8];
                }
                return x;
            }
            if (t === "muse") {
                let $;
                if (d[9] === Symbol.for("react.memo_cache_sentinel")) {
                    $ = {
                        type: "discreet",
                        Icon: r("WDSIconWdsIcLogoHatchFilled.react"),
                        testid: "conversation-header-muse-agent-badge"
                    };
                    d[9] = $;
                } else {
                    $ = d[9];
                }
                return $;
            }
            if (t === "aiAgents") {
                let P;
                if (d[10] === Symbol.for("react.memo_cache_sentinel")) {
                    P = {
                        type: "discreet",
                        Icon: r("WDSIconWdsIc3PAiBotFilled.react"),
                        testid: "conversation-header-ai-agents-badge"
                    };
                    d[10] = P;
                } else {
                    P = d[10];
                }
                return P;
            }
            if (o("WAWebBotGroupGatingUtils").isOpenGroupBotParticipantAddEnabled() && e.groupMetadata?.isOpenBotGroup === true) {
                let N;
                if (d[11] === Symbol.for("react.memo_cache_sentinel")) {
                    N = {
                        type: "discreet",
                        Icon: r("WDSIconWdsIcLogoMetaAiColor.react")
                    };
                    d[11] = N;
                } else {
                    N = d[11];
                }
                return N;
            }
            if (k) {
                let M;
                if (d[12] === Symbol.for("react.memo_cache_sentinel")) {
                    M = {
                        type: "discreet",
                        testid: "disappearing-messages-refreshed"
                    };
                    d[12] = M;
                } else {
                    M = d[12];
                }
                return M;
            }
            if (n) {
                let w;
                if (d[13] === Symbol.for("react.memo_cache_sentinel")) {
                    w = {
                        type: "discreet",
                        Icon: r("WDSIconIcVisibilityOff.react")
                    };
                    d[13] = w;
                } else {
                    w = d[13];
                }
                return w;
            }
        }
    }
    function h(e, t, n) {
        const r = o("WAWebChatGetters").getIsGroup(e) ? n : t;
        return r != null && r > 0 && !o("WAWebEphemeralityFrontendUtils").isEphemeralityDisabledInUIForChat(e);
    }
    function useY(e, t) {
        const n = o("react-compiler-runtime").c(4);
        const r = useState(null);
        const a = r[0];
        const i = r[1];
        let l;
        let s;
        if (n[0] !== e || n[1] !== t) {
            l = function() {
                if (t) {
                    const n = window.setTimeout(function() {
                        return i(e);
                    }, m);
                    return function() {
                        window.clearTimeout(n);
                        i(function(t) {
                            if (t === e) {
                                return null;
                            }
                            return t;
                        });
                    };
                }
            };
            s = [
                e,
                t
            ];
            n[0] = e;
            n[1] = t;
            n[2] = l;
            n[3] = s;
        } else {
            l = n[2];
            s = n[3];
        }
        useEffect(l, s);
        return t && a !== e;
    }
    l.WAWebHeaderBusinessProfileSync = p;
    l.WAWebHeaderChatTitle = Component;
    l.WAWebHeaderUserSubtitle = f;
    l.useWAWebConversationHeaderBadge = g;
}, 98);