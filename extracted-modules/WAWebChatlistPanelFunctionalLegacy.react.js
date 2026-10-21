__d("WAWebChatlistPanelFunctionalLegacy.react", [
    "fbt",
    "Promise",
    "WAAbortError",
    "WAFtsIsSearchQueryEligibleForMessageSearch",
    "WALogger",
    "WAPromiseRaceAbort",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebAccessibility.react",
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebBizAiAgentStatusUtils",
    "WAWebBizAiChatOpenAttribution",
    "WAWebBizAiHandoffRemovalTimingModel",
    "WAWebBizAiWebSmartComposerAiListsGateModel",
    "WAWebBizBroadcastDeviceCapabilityCommon",
    "WAWebBotProfileCollection",
    "WAWebBusinessBroadcastUserJourneyLogger",
    "WAWebCallsTabDialerGating",
    "WAWebChatArchivedEntryPoint.react",
    "WAWebChatAssignmentCollection",
    "WAWebChatAssignmentUtils",
    "WAWebChatCollection",
    "WAWebChatEntryPoint",
    "WAWebChatGetters",
    "WAWebChatListFilters.react",
    "WAWebChatListSearch.react",
    "WAWebChatLockUtils",
    "WAWebChatLockedEntryPoint.react",
    "WAWebChatMessageSearch",
    "WAWebChatModel",
    "WAWebChatSearchFilters",
    "WAWebChatSearchQuery",
    "WAWebChatlistBanners.react",
    "WAWebChatlistFunctional.react",
    "WAWebChatlistPanelMode",
    "WAWebChatlistPanelUtils",
    "WAWebChatlistUtils",
    "WAWebChevronCustomIcons",
    "WAWebClientFeatureFlags",
    "WAWebCmd",
    "WAWebCommandCollection",
    "WAWebCommandModel",
    "WAWebCommunityGroupJourneyEventImpl",
    "WAWebComposeBoxActions",
    "WAWebConnGetters",
    "WAWebConnModel",
    "WAWebConsumerMultiSelectBar.react",
    "WAWebContactCollection",
    "WAWebContactGetters",
    "WAWebContactModel",
    "WAWebContactSearchExperienceLogger",
    "WAWebContactSearchGatingUtils",
    "WAWebContactSyncLogger",
    "WAWebContactlessChatUtils",
    "WAWebCoreActionsODS",
    "WAWebCustomerManagerGating",
    "WAWebDesktopUpsellChatlistToastbar.react",
    "WAWebDesktopUpsellSearchToastbar.react",
    "WAWebDialerUnknownContactWithCallButtons.react",
    "WAWebDrawerManager",
    "WAWebDrawerManagerContext",
    "WAWebEmptyState.react",
    "WAWebEnvironment",
    "WAWebErrorBoundary.react",
    "WAWebFilterLogging",
    "WAWebFilterSession",
    "WAWebFindCommonGroupsContactAction",
    "WAWebFlatList.react",
    "WAWebFlatListContainer.react",
    "WAWebFlatListController",
    "WAWebFocusTracer",
    "WAWebFrontendChatGetters",
    "WAWebFrontendConstants",
    "WAWebFrontendContactGetters",
    "WAWebFrontendMsgGetters",
    "WAWebFtsConstants",
    "WAWebFtsMsgsCallLogCollection",
    "WAWebFtsMsgsCollection",
    "WAWebGroupMetadataTypeUtils",
    "WAWebGroupType",
    "WAWebHeaderInfoPanelActions",
    "WAWebHistorySyncComponents.react",
    "WAWebInboxFiltersGatingUtils",
    "WAWebKeyboardHotKeys.react",
    "WAWebKeyboardRun",
    "WAWebL10NAccentFold",
    "WAWebLeadStageStore",
    "WAWebListsLabelGatingUtils",
    "WAWebMessageYourselfMetricUtils",
    "WAWebMiscGatingUtils",
    "WAWebMixedMultiSelectBar.react",
    "WAWebModalManager",
    "WAWebMsgCollection",
    "WAWebMsgModel",
    "WAWebMultiSelectEntryPointConstants",
    "WAWebMultiSelection",
    "WAWebNewsletterChatListUtils",
    "WAWebNewsletterCollection",
    "WAWebNewsletterGatingUtils",
    "WAWebNonContactPushNameSearchModel",
    "WAWebNoop",
    "WAWebOfflineHandler",
    "WAWebOfflineResumeProgressToastbar.react",
    "WAWebOfflineResumeTypes",
    "WAWebOrgGatingUtils",
    "WAWebOrgMemberSearchRows",
    "WAWebOutContactCollection",
    "WAWebOutContactInviteJourney",
    "WAWebPhoneNumberSearch",
    "WAWebPrivacyNarrativeE2EMessage.react",
    "WAWebPttOocPlayer",
    "WAWebResolveBotProfile",
    "WAWebSearchLogging",
    "WAWebSearchUserJourneyLogger",
    "WAWebSelectableState",
    "WAWebSettingsConst",
    "WAWebSettingsFlowLoadable",
    "WAWebSingleSelection",
    "WAWebSlicedMatcher",
    "WAWebSpinner.react",
    "WAWebStylesEnv",
    "WAWebUimUie.react",
    "WAWebUnknownContactSection.react",
    "WAWebUnnamedGroupSearch",
    "WAWebUseRecentlySearchedChats",
    "WAWebUsernameKeyVerificationFlowLazy",
    "WAWebUsernameTypes",
    "WAWebVelocityAnimate",
    "WAWebVelocityTransitionGroup",
    "WAWebVoipCallsTabPanelManager",
    "WAWebWamEnumChatFilterActionTypes",
    "WAWebWamEnumContactSearchEntrypoint",
    "WAWebWamEnumLandingSurface",
    "WAWebWamEnumProfileEntryPoint",
    "WAWebWamEnumSearchActionName",
    "WAWebWamEnumSearchUjItemType",
    "WAWebWamEnumSurfaceType",
    "WAWebWamEnumTsSurface",
    "WAWebWamEnumUnlockEntryPoint",
    "WAWebWid",
    "asyncToGeneratorRuntime",
    "countWhere",
    "cr:177",
    "cr:4300",
    "cr:4301",
    "cr:4434",
    "cr:5923",
    "cr:5932",
    "cr:5959",
    "err",
    "gkx",
    "isEmptyObject",
    "isStringNullOrEmpty",
    "nullthrows",
    "react",
    "react-compiler-runtime",
    "useLazyRef",
    "useWAWebCallbackAfterRender",
    "useWAWebChatLockRestriction",
    "useWAWebDebouncedCallback",
    "useWAWebForceUpdate",
    "useWAWebIsChannelsInChatListEnabled",
    "useWAWebListener",
    "useWAWebOnUnmount",
    "useWAWebOrgMemberSearch",
    "useWAWebShiftTimerCallback",
    "useWAWebStableCallback",
    "useWAWebThrottledCallback",
    "useWAWebUIM",
    "useWAWebUnknownContact",
    "useWAWebUnmountSignal"
], function(t, n, r, o, a, i, l, s) {
    let d;
    let m;
    let p;
    let _;
    let f;
    let g;
    let h;
    let y;
    let C;
    let b;
    let v;
    let S;
    let R;
    let L;
    let E;
    let k;
    let I;
    let T;
    let D;
    let x;
    let $;
    let P;
    let N;
    let M;
    let w;
    let A;
    let F;
    let O;
    let B;
    let W;
    let q;
    let U;
    let V;
    let H;
    let G;
    let z;
    let j;
    let K;
    let Q;
    let X;
    let Y;
    let J;
    let Z;
    let ee;
    let te;
    let ne;
    const re = ne || (ne = o("react"));
    const oe = ne;
    const { startTransition, useCallback, useEffect, useImperativeHandle, useMemo, useRef, useState } = oe;
    const me = n("cr:5923") ?? n("cr:4300");
    const pe = n("cr:5932") ?? n("cr:4301");
    const _e = n("cr:5959") ?? n("cr:4434");
    const fe = [];
    function ge(e) {
        return e.filter((e)=>{
            const t = o("WAWebFrontendMsgGetters").getMaybeChat(e);
            return t == null || !o("WAWebResolveBotProfile").shouldHideMuseBotFromCachedProfile(t.id);
        });
    }
    function he(e, mode) {
        if (mode === r("WAWebChatlistPanelMode").CallsTab) {
            return e;
        }
        return ge(e);
    }
    const ye = {
        unreadContainer: {
            zIndex: "x11uqc5h",
            flexGrow: "x1c4vz4f",
            flexShrink: "x2lah0s",
            flexBasis: "xdl72j9",
            overflowX: "x1plvlek",
            overflowY: "xryxfnj",
            $$css: true
        },
        unreadIcon: {
            verticalAlign: "xwgq4w4",
            $$css: true
        }
    };
    const Ce = _e?.executeDebugCommand;
    const be = 50;
    const ve = 75;
    const Se = {
        THROTTLE: 450
    };
    const Re = new Set([
        o("WAWebChatSearchFilters").SearchFilters.CONTACT,
        o("WAWebChatSearchFilters").SearchFilters.NON_CONTACT,
        o("WAWebChatSearchFilters").SearchFilters.UNREAD,
        o("WAWebChatSearchFilters").SearchFilters.FAVORITES
    ]);
    const Le = new Set([
        o("WAWebChatSearchFilters").SearchFilters.UNREAD,
        o("WAWebChatSearchFilters").SearchFilters.CONTACT,
        o("WAWebChatSearchFilters").SearchFilters.GROUP,
        o("WAWebChatSearchFilters").SearchFilters.FAVORITES,
        o("WAWebChatSearchFilters").SearchFilters.LABELS,
        o("WAWebChatSearchFilters").SearchFilters.COMMUNITY,
        o("WAWebChatSearchFilters").SearchFilters.CHANNELS,
        o("WAWebChatSearchFilters").SearchFilters.TO_YOU
    ]);
    function Ee() {
        return Le;
    }
    function ke(e) {
        return e.map((e)=>babelHelpers.extends({}, e, {
                showsTertiaryRow: o("WAWebBizAiAgentStatusUtils").shouldShowTertiaryRowForChat(e.chat)
            }));
    }
    function Ie(mode, t) {
        if (mode === r("WAWebChatlistPanelMode").CallsTab) {
            return o("WAWebWamEnumProfileEntryPoint").PROFILE_ENTRY_POINT.CALLS;
        }
        if (t) {
            return o("WAWebWamEnumProfileEntryPoint").PROFILE_ENTRY_POINT.SEARCH;
        }
        return o("WAWebWamEnumProfileEntryPoint").PROFILE_ENTRY_POINT.CHATS_HOME;
    }
    function TeComponent(e) {
        "use no forget";
        const { callsTabBanner, chatlistPanelRef } = e;
        const c = chatlistPanelRef === undefined ? null : chatlistPanelRef;
        const { endMultiSelect, hideLockedChats, hideMultiSelectBar, labelFilter, mode, multiSelectEntryPoint, multiSelection, selectable, showArchiveV2, startChatInteraction, suppressOfflineResumeToastbar, unknownContactPhoneSearchEnabled, unknownContactUsernameSearchEnabled } = e;
        const uim = r("useWAWebUIM")();
        const Oe = r("isStringNullOrEmpty")(labelFilter) ? undefined : {
            label: labelFilter
        };
        const Be = o("WAWebOfflineHandler").OfflineMessageHandler.getResumeUIProgressBarType() === o("WAWebOfflineResumeTypes").ResumeUIProgressBarType.Toastbar;
        const We = useState(false);
        const qe = We[0];
        const Ue = We[1];
        const Ve = useState(false);
        const loading_1 = Ve[0];
        const Ge = Ve[1];
        const ze = useState(undefined);
        const je = ze[0];
        const Ke = ze[1];
        const Qe = useState([]);
        const commonGroups = Qe[0];
        const Ye = Qe[1];
        const Je = useState(o("WAWebNonContactPushNameSearchModel").EMPTY_NON_CONTACT_PUSHNAMES);
        const Ze = Je[0];
        const et = Je[1];
        const tt = useState({
            text: ""
        });
        const nt = tt[0];
        const rt = tt[1];
        const ot = useState(false);
        const at = ot[0];
        const it = ot[1];
        const lt = useState(multiSelectEntryPoint);
        const multiSelectEntryPoint_1 = lt[0];
        const ut = lt[1];
        const ct = useState(Oe);
        const dt = ct[0];
        const mt = ct[1];
        const pt = useState(undefined);
        const _t = pt[0];
        const ft = pt[1];
        const gt = useState(Be);
        const ht = gt[0];
        const yt = gt[1];
        const Ct = useState(false);
        const bt = Ct[0];
        const vt = Ct[1];
        const St = o("WAWebABProps").getABPropConfigValue("web_chatlist_fts_listener_cleanup");
        const Rt = function() {
            if (mode === r("WAWebChatlistPanelMode").CallsTab) {
                return new (r("WAWebFtsMsgsCallLogCollection"));
            }
            return new (r("WAWebFtsMsgsCollection"));
        };
        const Lt = r("useLazyRef")(Rt);
        if (!St) {
            Rt();
        }
        r("useWAWebOnUnmount")(function() {
            if (St) {
                Lt.current.delete(true);
            }
        });
        const EtRef = useRef(new (r("WAWebSingleSelection"))([], function(e) {
            return e.id.toString();
        }));
        const ktRef = useRef(new (o("WAWebChatSearchQuery")).SearchQuery);
        const ItRef = useRef(null);
        const TtRef = useRef(null);
        const DtRef = useRef(null);
        const xtRef = useRef(null);
        const $tRef = useRef(null);
        const PtRef = useRef(null);
        const NtRef = useRef(null);
        const Mt = useCallback(function(e) {
            TtRef.current = e;
        }, []);
        const wtRef = useRef(new (r("WAWebFlatListController")));
        const AtRef = useRef(multiSelection || new (r("WAWebMultiSelection"))([], function(e) {
            return e.id.toString();
        }));
        const FtRef = useRef(new (r("WAWebSelectableState"))(selectable || false));
        useEffect(function() {
            FtRef.current?.setSelectable(!!selectable);
        }, [
            selectable
        ]);
        const OtRef = useRef(new (r("WAWebFilterSession")));
        const BtRef = useRef({});
        const WtRef = useRef(new Set);
        const qtRef = useRef(null);
        const UtRef = useRef(null);
        const VtRef = useRef(null);
        const HtRef = useRef(null);
        const GtRef = useRef(false);
        const zt = r("useWAWebUnmountSignal")();
        const jt = r("useWAWebIsChannelsInChatListEnabled")() && mode === r("WAWebChatlistPanelMode").Chatlist;
        const newsletters = n("cr:177")(jt);
        const QtRef = useRef({
            enabled: jt,
            newsletters
        });
        const Xt = useCallback(function(e) {
            return !e || !!(r("isStringNullOrEmpty")(e.label) && !e.kind);
        }, []);
        const Yt = useCallback(function(e, t, n) {
            const r = o("WAWebL10NAccentFold").accentFold(e);
            if (!r || !o("WAWebContactSearchGatingUtils").canTermsMeetFuzzySearchThreshold(r.split(/\s+/).filter(Boolean))) {
                return null;
            }
            const n_includeActiveChat = n.includeActiveChat;
            const i = n_includeActiveChat === undefined ? false : n_includeActiveChat;
            const n_includeStickyChats = n.includeStickyChats;
            const s = Ee();
            const candidates = o("WAWebChatCollection").ChatCollection.getModelsArray();
            const c = o("WAWebContactSearchGatingUtils").getFuzzySearchTimeoutThreshold() * 1000;
            const m = new (o("WATimeUtils")).MonotonicTimer;
            let p = false;
            return {
                candidates,
                isTimedOut: function() {
                    if (p) {
                        return true;
                    }
                    const e = m.elapsed();
                    if (e > c) {
                        o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                            "Fuzzy chat search timeout ",
                            "ms (limit ",
                            "ms)"
                        ])), e, c);
                        p = true;
                        return true;
                    }
                    return false;
                },
                matchOne: function(n) {
                    if (!o("WAWebFrontendChatGetters").getShouldAppearInList(n)) {
                        return null;
                    }
                    const e = i && EtRef.current.getVal() === n;
                    if (e) {
                        return {
                            chat: n
                        };
                    }
                    const a = n.archive && t.kind != null && s.has(t.kind);
                    if (a) {
                        return null;
                    }
                    if (n_includeStickyChats != null && n_includeStickyChats.has(n.id.toString())) {
                        return {
                            chat: n
                        };
                    }
                    const u = n.contact.searchMatchFuzzy(r);
                    if (u == null) {
                        return null;
                    }
                    const c = t.kind == null && t.label == null || o("WAWebChatMessageSearch").matchFilter(n, t);
                    if (c) {
                        return {
                            chat: n,
                            searchMatch: u
                        };
                    }
                    return null;
                }
            };
        }, []);
        const Jt = useCallback(function({ filter, options, searchText }) {
            const a = filter ?? {};
            const { includeActiveChat = false, includeStickyChats } = options ?? {};
            const c = Ee();
            const QtRef_current = QtRef.current;
            const { enabled, newsletters } = QtRef_current;
            const _ = (t)=>{
                if (enabled && o("WAWebNewsletterChatListUtils").shouldIncludeChannelsForFilter(a)) {
                    return o("WAWebNewsletterChatListUtils").getChatListChannelResults({
                        activeChat: includeActiveChat ? EtRef.current.getVal() : null,
                        includeArchived: t !== "" && (a.kind == null || !c.has(a.kind)),
                        matchesFilter: function(t) {
                            return Xt(a) || o("WAWebChatMessageSearch").matchFilter(t, a);
                        },
                        newsletters,
                        searchText: t,
                        stickyIds: includeStickyChats
                    });
                }
                return [];
            };
            let f = (searchText || "").trim();
            if (f || !Xt(a)) {
                f = o("WAWebL10NAccentFold").accentFold(f);
                const g = o("WAWebPhoneNumberSearch").numberSearch(f);
                const h = [];
                o("WAWebChatCollection").ChatCollection.filter((e)=>{
                    if (!o("WAWebFrontendChatGetters").getShouldAppearInList(e)) {
                        return false;
                    }
                    const t = includeActiveChat && EtRef.current.getVal() === e;
                    if (t) {
                        h.push({
                            chat: e
                        });
                        return true;
                    }
                    const n = e.archive && a.kind != null && c.has(a.kind);
                    if (n) {
                        return false;
                    }
                    if (includeStickyChats != null && includeStickyChats.has(e.id.toString())) {
                        h.push({
                            chat: e
                        });
                        return true;
                    }
                    if (a.label != null) {
                        const r = e.contact.searchMatchExact(f, g, a.label);
                        if (r != null && o("WAWebChatMessageSearch").leadStageMatches(e, a)) {
                            h.push({
                                chat: e,
                                searchMatch: r
                            });
                            return true;
                        }
                    }
                    if (f) {
                        const i = e.contact.searchMatchExact(f, g);
                        if (i != null) {
                            const l = a.kind == null && a.label == null || o("WAWebChatMessageSearch").matchFilter(e, a);
                            if (l) {
                                h.push({
                                    chat: e,
                                    searchMatch: i
                                });
                                return true;
                            }
                        }
                    } else {
                        const d = a.kind == null && a.label == null || o("WAWebChatMessageSearch").matchFilter(e, a);
                        if (d) {
                            h.push({
                                chat: e
                            });
                            return true;
                        }
                    }
                    const m = o("WAWebUnnamedGroupSearch").searchMatchUnnamedGroupExact(e, f);
                    if (m != null) {
                        const p = a.kind == null && a.label == null || o("WAWebChatMessageSearch").matchFilter(e, a);
                        if (p) {
                            h.push({
                                chat: e,
                                searchMatch: m
                            });
                            return true;
                        }
                    }
                    return false;
                });
                const y = _(f);
                let C = h;
                if (h.length === 0 && f) {
                    const b = Yt(f, a, {
                        includeActiveChat,
                        includeStickyChats
                    });
                    if (b != null) {
                        C = o("WAWebSlicedMatcher").drainMatcherSync(b);
                    }
                }
                return ke(o("WAWebNewsletterChatListUtils").mergeChatListResults(C, y));
            }
            const v = o("WAWebChatCollection").ChatCollection.filter((e)=>!e.archive && o("WAWebFrontendChatGetters").getShouldAppearInList(e));
            return ke(o("WAWebNewsletterChatListUtils").mergeChatListResults(v.map((e)=>({
                    chat: e
                })), _("")));
        }, [
            Yt,
            Xt
        ]);
        const Zt = useState(function() {
            return Jt({
                filter: dt,
                searchText: ""
            });
        });
        const en = Zt[0];
        const tn = Zt[1];
        const nn = useCallback(function(e) {
            const { searchText, filter } = e;
            const r = filter === undefined ? {} : filter;
            const e_includeChats = e.includeChats;
            const i = e_includeChats === undefined ? false : e_includeChats;
            const e_includeNonContacts = e.includeNonContacts;
            const showWithoutName = e_includeNonContacts === undefined ? false : e_includeNonContacts;
            if (r.kind === o("WAWebChatSearchFilters").SearchFilters.CONTACT || r.kind === o("WAWebChatSearchFilters").SearchFilters.NON_CONTACT || r.kind === o("WAWebChatSearchFilters").SearchFilters.UNREAD || r.kind === o("WAWebChatSearchFilters").SearchFilters.FAVORITES) {
                return null;
            }
            const u = (searchText || "").trim();
            if (!u && Xt(r)) {
                return null;
            }
            const c = o("WAWebL10NAccentFold").accentFold(u);
            const number = o("WAWebPhoneNumberSearch").numberSearch(c);
            return {
                query: {
                    text: c,
                    number,
                    label: r.label
                },
                filter: {
                    showMe: !!c,
                    showWithoutName,
                    cancelAt: e.cancelAt,
                    filterFn: function(t) {
                        const e = t.id.isBot() && o("WAWebResolveBotProfile").shouldHideMuseBotFromCachedProfile(t.id);
                        if (i && !e) {
                            return true;
                        }
                        const n = o("WAWebChatCollection").ChatCollection.getLatestChatForWid(t.id);
                        if (n == null && e) {
                            return false;
                        }
                        if (i) {
                            return true;
                        }
                        return n == null || !o("WAWebFrontendChatGetters").getShouldAppearInList(n);
                    }
                }
            };
        }, [
            Xt
        ]);
        const rn = useCallback(function(e) {
            const t = nn(e ?? {});
            if (t == null) {
                return [];
            }
            return o("WAWebContactCollection").ContactCollection.searchContacts(t);
        }, [
            nn
        ]);
        const on = useState(function() {
            return rn({
                searchText: "",
                filter: dt
            });
        });
        const an = on[0];
        const ln = on[1];
        const contactSearchMatches = useMemo(function() {
            const e = new Map;
            if (an != null) {
                for (const t of an){
                    const { contact, searchMatch } = t;
                    e.set(contact.id.toString(), searchMatch);
                }
            }
            return e;
        }, [
            an
        ]);
        const un = useCallback(function(e) {
            if (e.length > 0 && !GtRef.current) {
                o("WAWebOutContactInviteJourney").startOutContactInviteJourney();
                GtRef.current = true;
            }
        }, []);
        const cn = useCallback(function(e, t) {
            const n = (e || "").trim();
            if (!n) {
                GtRef.current = false;
                return [];
            }
            const r = o("WAWebL10NAccentFold").accentFold(n);
            const a = o("WAWebOutContactCollection").OutContactCollection.searchOutContacts({
                query: {
                    text: r,
                    number: o("WAWebPhoneNumberSearch").numberSearch(n)
                },
                skipFuzzySearch: t?.skipFuzzySearch
            });
            un(a);
            return a;
        }, [
            un
        ]);
        const dn = useState(function() {
            return [];
        });
        const mn = dn[0];
        const pn = dn[1];
        const outContactSearchMatches = useMemo(function() {
            const e = new Map;
            for (const t of mn){
                const { outContact, searchMatch } = t;
                e.set(outContact.id.toString(), searchMatch);
            }
            return e;
        }, [
            mn
        ]);
        const chatSearchMatches = useMemo(function() {
            const e = new Map;
            for (const t of en){
                const { chat, searchMatch } = t;
                if (searchMatch != null) {
                    e.set(chat.id.toString(), searchMatch);
                }
            }
            return e;
        }, [
            en
        ]);
        const gn = useMemo(function() {
            return en.map(({ chat })=>chat);
        }, [
            en
        ]);
        const hn = useMemo(function() {
            return an?.map(function({ contact }) {
                return contact;
            }) || [];
        }, [
            an
        ]);
        const yn = r("useWAWebStableCallback")(function() {
            let e;
            if (document.activeElement === document.body) {
                r("WAWebFocusTracer").focus(TtRef.current);
                if (!((e = TtRef.current) == null || e.focus == null)) {
                    e.focus();
                }
            }
        });
        const Cn = r("useWAWebOrgMemberSearch")(nt.filter?.kind != null && Re.has(nt.filter.kind) ? "" : nt.text, o("WAWebOrgGatingUtils").isOrgInfoDisplayEnabled(), yn);
        const bn = Cn[0];
        const onRetryOrgMemberSearch = Cn[1];
        const orgMemberSections = useMemo(function() {
            return o("WAWebOrgMemberSearchRows").dedupeOrgMemberSections(bn, gn, hn);
        }, [
            bn,
            gn,
            hn
        ]);
        const nonContactPushnames = useMemo(function() {
            return o("WAWebOrgMemberSearchRows").withoutOrgMembers(Ze, orgMemberSections);
        }, [
            Ze,
            orgMemberSections
        ]);
        const Ln = useCallback(function(e) {
            const t = (e || "").trim();
            if (!t || mode !== r("WAWebChatlistPanelMode").CommandPalette) {
                return [];
            }
            return o("WAWebCommandCollection").CommandCollection.query({
                query: t,
                type: "action"
            });
        }, [
            mode
        ]);
        const En = De(Ln);
        const kn = useState(function() {
            return En("");
        });
        const In = kn[0];
        const Tn = kn[1];
        const Dn = useCallback(function(e) {
            const n = (e || "").trim();
            if (!n || mode !== r("WAWebChatlistPanelMode").CommandPalette || !o("WAWebClientFeatureFlags").isFeatureEnabled("debug_commands")) {
                return [];
            }
            return (me == null ? undefined : me.query(n).slice(0, 3)) ?? [];
        }, [
            mode
        ]);
        const xn = De(Dn);
        const $n = useState(function() {
            return xn("");
        });
        const Pn = $n[0];
        const Nn = $n[1];
        const Mn = useCallback(function(e) {
            const t = (e || "").trim().toLowerCase();
            if (!t || mode !== r("WAWebChatlistPanelMode").CommandPalette) {
                return [];
            }
            const n = o("WAWebChatCollection").ChatCollection.filter((e)=>o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(e.groupMetadata) === o("WAWebGroupType").GroupType.COMMUNITY && e.formattedTitle.toLowerCase().includes(t));
            return n;
        }, [
            mode
        ]);
        const wn = De(Mn);
        const An = useState(function() {
            return wn("");
        });
        const Fn = An[0];
        const On = An[1];
        const Bn = useCallback(function(e) {
            const t = (e || "").trim();
            if (!t || mode !== r("WAWebChatlistPanelMode").CommandPalette) {
                return [];
            }
            return o("WAWebCommandCollection").CommandCollection.query({
                query: t,
                type: "setting"
            });
        }, [
            mode
        ]);
        const Wn = De(Bn);
        const qn = useState(function() {
            return Wn("");
        });
        const Un = qn[0];
        const Vn = qn[1];
        const Hn = o("useWAWebForceUpdate").useForceUpdateDONOTUSE();
        const Gn = r("useWAWebDebouncedCallback")(function(e = false) {
            if (r("isStringNullOrEmpty")(labelFilter)) {
                Fo();
            }
            const searchTerm = ktRef.current.trimmed();
            UtRef.current?.abort();
            UtRef.current = new AbortController;
            const signal = UtRef.current.signal;
            Ge(true);
            const l = (te || (te = n("Promise"))).resolve().then(()=>{
                if (!e && !qe) {
                    ir({
                        searching: true
                    }, ve);
                }
            }).then(()=>{
                if (e) {
                    Lt.current.resetSearch();
                }
                return Lt.current.search({
                    count: o("WAWebFtsConstants").FTS_NUM_RESULTS,
                    filter: ktRef.current.filter,
                    searchTerm
                });
            });
            qtRef.current = r("WAPromiseRaceAbort")(l, signal).then((t)=>{
                if (t && !t.canceled) {
                    ir({
                        searching: false
                    }, ve);
                    if (e) {
                        Hn();
                    }
                }
            }).catch(o("WAAbortError").catchAbort(r("WAWebNoop"))).finally(()=>{
                if (UtRef.current?.signal === signal) {
                    Ge(false);
                    qtRef.current = undefined;
                    UtRef.current = undefined;
                }
            }).catch(()=>{
                if (qe) {
                    ir({
                        searching: false
                    }, ve);
                }
            });
        }, o("WAWebFtsConstants").FTS_TYPING_DELAY);
        const zn = r("useWAWebThrottledCallback")(function(e, t) {
            const n = Jt({
                filter: t,
                searchText: e
            });
            if (br(n)) {
                ir({
                    chats: n
                }, ve, be);
            }
        }, Se.THROTTLE, {
            leading: false,
            trailing: true
        });
        const jn = r("useWAWebThrottledCallback")(function(e, t) {
            const n = rn({
                searchText: e,
                filter: t,
                includeChats: mode === r("WAWebChatlistPanelMode").CallsTab
            });
            const a = cn(e);
            o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                "WAWebChatlistPanelFunctional: Updating contacts via throttledFilteredContacts, count: ",
                ""
            ])), n.length);
            ir({
                contacts: n,
                outContacts: a
            }, ve, be);
        }, Se.THROTTLE, {
            leading: false,
            trailing: true
        });
        const Kn = r("useWAWebThrottledCallback")(function(e) {
            const t = En(e);
            ir({
                actions: t
            }, ve, be);
        }, Se.THROTTLE, {
            leading: false,
            trailing: true
        });
        const Qn = r("useWAWebThrottledCallback")(function(e) {
            const debugCommands = xn(e);
            ir({
                debugCommands
            }, ve, be);
        }, Se.THROTTLE, {
            leading: false,
            trailing: true
        });
        const Xn = r("useWAWebThrottledCallback")(function(e) {
            const communities = wn(e);
            ir({
                communities
            }, ve, be);
        }, Se.THROTTLE, {
            leading: false,
            trailing: true
        });
        const Yn = r("useWAWebThrottledCallback")(function(e) {
            const settingsCommands = Wn(e);
            ir({
                settingsCommands
            }, ve, be);
        }, Se.THROTTLE, {
            leading: false,
            trailing: true
        });
        const Jn = r("useWAWebThrottledCallback")(function() {
            if (!sr()) {
                jn.cancel();
                const e = rn({
                    filter: ktRef.current.filter
                });
                o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "WAWebChatlistPanelFunctional: Updating contacts via ContactCollection sort, count: ",
                    ""
                ])), e.length);
                ir({
                    contacts: e
                });
            }
        }, Se.THROTTLE);
        const Zn = r("useWAWebThrottledCallback")(function(e) {
            if (Ur(e)) {
                Qr();
            }
        }, 100);
        const er = r("useWAWebDebouncedCallback")(function() {
            const e = ktRef.current.trimmed();
            if (!e) {
                Ye([]);
                return;
            }
            const filter = ktRef.current.filter;
            if (filter.kind === o("WAWebChatSearchFilters").SearchFilters.CONTACT || filter.kind === o("WAWebChatSearchFilters").SearchFilters.NON_CONTACT || filter.kind === o("WAWebChatSearchFilters").SearchFilters.FAVORITES) {
                Ye([]);
                return;
            }
            const a = o("WAWebABProps").getABPropConfigValue("wa_web_groups_in_common_multi_contact");
            if (a && o("WAWebFindCommonGroupsContactAction").shouldRunMultiContactTokenSearch(e)) {
                const l = e.split(/\s+/).filter(Boolean);
                const s = o("WAWebABProps").getABPropConfigValue("web_max_contacts_to_show_common_groups");
                const u = l.map((e)=>rn({
                        searchText: e,
                        filter,
                        includeChats: true,
                        includeNonContacts: true,
                        cancelAt: s + 1
                    }));
                if (u.some((e)=>e.length === 0)) {
                    Ye([]);
                    return;
                }
                const c = new Set;
                const d = [];
                for (const m of u){
                    for (const p of m){
                        const f = p.contact;
                        const g = f.id.toString();
                        if (!c.has(g)) {
                            c.add(g);
                            d.push(f);
                        }
                    }
                }
                HtRef.current?.abort();
                HtRef.current = new AbortController;
                const h = HtRef.current.signal;
                VtRef.current = r("WAPromiseRaceAbort")(o("WAWebFindCommonGroupsContactAction").findCommonGroupsForContacts(d), h).then(()=>{
                    if (e === ktRef.current.trimmed()) {
                        const t = o("WAWebABProps").getABPropConfigValue("web_max_found_common_groups_displayed");
                        const n = o("WAWebFindCommonGroupsContactAction").findGroupsWithContactGroups(u, t);
                        Ye(n);
                    }
                }).catch(r("WAWebNoop")).finally(()=>{
                    VtRef.current = null;
                    HtRef.current = null;
                });
            } else {
                const C = o("WAWebABProps").getABPropConfigValue("web_max_contacts_to_show_common_groups");
                const b = rn({
                    searchText: e,
                    filter,
                    includeChats: true,
                    includeNonContacts: true,
                    cancelAt: C + 1
                });
                if (b.length === 0) {
                    Ye([]);
                    return;
                }
                const v = b.map((()=>{
                    const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ contact }) {
                        try {
                            yield o("WAWebFindCommonGroupsContactAction").findCommonGroups(contact);
                            return contact.commonGroups;
                        } catch (err) {
                            const n = String(err);
                            o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                                "get from participants table failed"
                            ]))).verbose().sendLogs(`get from participants table failed when finding common groups: ${n}`);
                            throw r("err")("get from participants table failed");
                        }
                    });
                    return function(t) {
                        return e.apply(this, arguments);
                    };
                })());
                HtRef.current?.abort();
                HtRef.current = new AbortController;
                const S = HtRef.current.signal;
                VtRef.current = r("WAPromiseRaceAbort")((te || (te = n("Promise"))).all(v), S).then((t)=>{
                    if (e === ktRef.current.trimmed()) {
                        const n = Vr(t, b.map(({ contact })=>contact));
                        Ye(n);
                    }
                }).catch(r("WAWebNoop")).finally(()=>{
                    VtRef.current = null;
                    HtRef.current = null;
                });
            }
        }, 750);
        const tr = useCallback(function() {
            const e = ktRef.current.trimmed();
            const kind = ktRef.current.filter.kind;
            if (!e || kind === o("WAWebChatSearchFilters").SearchFilters.CONTACT || kind === o("WAWebChatSearchFilters").SearchFilters.NON_CONTACT || kind === o("WAWebChatSearchFilters").SearchFilters.FAVORITES) {
                return o("WAWebNonContactPushNameSearchModel").EMPTY_NON_CONTACT_PUSHNAMES;
            }
            return o("WAWebNonContactPushNameSearchModel").searchNonContactPushnames(e);
        }, []);
        const nr = r("useWAWebDebouncedCallback")(function() {
            et(tr());
        }, o("WAWebNonContactPushNameSearchModel").NON_CONTACT_PUSHNAME_SEARCH_DEBOUNCE_MS);
        const rr = r("useWAWebDebouncedCallback")(function(e) {
            Hr(e);
        }, 1000);
        const or = useCallback(function(e) {
            if (!r("isEmptyObject")(e)) {
                if (e.searching !== undefined) {
                    Ue(e.searching);
                }
                if (e.chats !== undefined) {
                    tn(e.chats);
                }
                if (e.contacts !== undefined) {
                    ln(e.contacts);
                }
                if (e.nonContactPushnames !== undefined) {
                    et(e.nonContactPushnames);
                }
                if (e.outContacts !== undefined) {
                    pn(e.outContacts);
                }
                if (e.messages !== undefined) {
                    Ke(e.messages);
                }
                if (e.actions !== undefined) {
                    Tn(e.actions);
                }
                if (e.communities !== undefined) {
                    On(e.communities);
                }
                if (e.debugCommands !== undefined) {
                    Nn(e.debugCommands);
                }
                if (e.settingsCommands !== undefined) {
                    Vn(e.settingsCommands);
                }
                if (e.commonGroups !== undefined) {
                    Ye(e.commonGroups);
                }
                if (e.showMultiSelectBar !== undefined) {
                    it(e.showMultiSelectBar);
                }
                if (e.multiSelectEntryPoint !== undefined) {
                    ut(e.multiSelectEntryPoint);
                }
                if (e.filterPreset !== undefined) {
                    mt(e.filterPreset);
                }
                if (e.unreadButton !== undefined) {
                    ft(e.unreadButton);
                }
                if (e.showOfflineToastbar !== undefined) {
                    yt(e.showOfflineToastbar);
                }
                if (e.lockedChatsEntryPointVisible !== undefined) {
                    vt(e.lockedChatsEntryPointVisible);
                }
            }
        }, []);
        const ar = r("useWAWebShiftTimerCallback")(function() {
            or(BtRef.current);
            BtRef.current = {};
        });
        var ir = useCallback(function(e, t, n) {
            if (!r("isEmptyObject")(e)) {
                const o = Object.keys(e).some((t)=>BtRef.current[t] !== e[t]);
                if (o) {
                    Object.assign(BtRef.current, e);
                    ar(t, n);
                }
            }
        }, [
            ar
        ]);
        const lr = useCallback(function() {
            return mode === r("WAWebChatlistPanelMode").CallsTab || !!ktRef.current.query;
        }, [
            mode
        ]);
        var sr = De(lr);
        const ur = r("useWAWebStableCallback")(function(e) {
            if (o("WAWebResolveBotProfile").shouldHideMuseBotFromCachedProfile(e.id)) {
                o("WAWebHeaderInfoPanelActions").openInfoPanel({
                    chat: e,
                    profileEntryPoint: Ie(mode, sr()),
                    uim
                });
                if (mode === r("WAWebChatlistPanelMode").CallsTab) {
                    o("WAWebDrawerManager").DrawerManager.closeDrawerLeft();
                }
                return true;
            }
            return false;
        });
        const cr = (mode === r("WAWebChatlistPanelMode").Chatlist || mode === r("WAWebChatlistPanelMode").CallsTab) && sr();
        const searchPhoneNumber = cr && unknownContactPhoneSearchEnabled === true;
        const searchUsername = cr && unknownContactUsernameSearchEnabled === true;
        const pr = r("useWAWebUnknownContact")({
            phoneOrUsername: nt.text,
            searchPhoneNumber,
            searchUsername,
            alwaysRequireUsernameAtPrefix: true,
            requestOrigin: o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN.UNKNOWN_CONTACT_SEARCH_GLOBAL
        });
        const { error, loading, onRetry, unknownContactInfo } = pr;
        const contactInfo = unknownContactInfo != null && (unknownContactInfo.wid == null || unknownContactInfo.chat != null || !o("WAWebResolveBotProfile").shouldHideMuseBotFromCachedProfile(unknownContactInfo.wid)) ? unknownContactInfo : null;
        const Cr = useCallback(function(e) {
            const t = en.length === e.length;
            if (!t) {
                return true;
            }
            const n = en.some((t, n)=>t.chat.id !== e[n].chat.id || t.showsTertiaryRow !== e[n].showsTertiaryRow);
            return n;
        }, [
            en
        ]);
        var br = De(Cr);
        const vrRef = useRef(0);
        const SrRef = useRef(null);
        const RrRef = useRef(null);
        const LrRef = useRef(false);
        o("useWAWebListener").useListener(o("WAWebChatCollection").ChatCollection, "remove", function(e) {
            o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                "WAWebChatlistPanelFunctional: ChatCollection remove event, isSearching: ",
                ""
            ])), !!ktRef.current.query);
            if (ktRef.current.query) {
                const t = en.filter((t)=>t.chat !== e);
                if (en && t.length !== en.length) {
                    ir({
                        chats: t
                    });
                }
            } else {
                zn.cancel();
                ir({
                    chats: Jt({
                        filter: ktRef.current.filter
                    })
                });
            }
        });
        o("useWAWebListener").useListener(o("WAWebContactCollection").ContactCollection, "remove", function(e) {
            if (sr()) {
                const t = an.filter((t)=>t.contact !== e);
                if (an && t.length !== an.length) {
                    o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                        "WAWebChatlistPanelFunctional: Updating contacts via ContactCollection remove (searching), old count: ",
                        ", new count: ",
                        ""
                    ])), an.length, t.length);
                    ir({
                        contacts: t
                    });
                }
            } else {
                jn.cancel();
                const n = rn({
                    searchText: undefined,
                    filter: ktRef.current.filter
                });
                o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                    "WAWebChatlistPanelFunctional: Updating contacts via ContactCollection remove (not searching), count: ",
                    ""
                ])), n.length);
                ir({
                    contacts: n
                });
            }
        });
        o("useWAWebListener").useListener(sr() ? o("WAWebOutContactCollection").OutContactCollection : null, [
            "add",
            "change",
            "remove",
            "reset"
        ], function() {
            const query = ktRef.current.query;
            ir({
                outContacts: query ? cn(query, {
                    skipFuzzySearch: true
                }) : []
            });
        });
        o("useWAWebListener").useListener(o("WAWebChatAssignmentCollection").ChatAssignmentCollection, [
            "add",
            "remove"
        ], function(e) {
            if (o("WAWebChatAssignmentUtils").canAssignChats() && ktRef.current.filter.kind === o("WAWebChatSearchFilters").SearchFilters.ASSIGNED_TO_YOU) {
                if (ktRef.current.query) {
                    const t = en.filter((t)=>t.chat !== e);
                    if (en && t.length !== en.length) {
                        ir({
                            chats: t
                        });
                    }
                } else {
                    zn.cancel();
                    ir({
                        chats: Jt({
                            filter: ktRef.current.filter
                        })
                    });
                }
            }
        });
        const Er = r("useWAWebThrottledCallback")(function(e) {
            if (!(sr() || ktRef.current.filter.kind !== o("WAWebChatSearchFilters").SearchFilters.UNREAD && (!o("WAWebChatAssignmentUtils").canAssignChats() || ktRef.current.filter.kind !== o("WAWebChatSearchFilters").SearchFilters.ASSIGNED_TO_YOU))) {
                zn.cancel();
                const t = ktRef.current.filter.kind === o("WAWebChatSearchFilters").SearchFilters.UNREAD;
                if (t && e) {
                    WtRef.current.add(e.id.toString());
                }
                let n = Jt({
                    filter: ktRef.current.filter,
                    options: {
                        includeActiveChat: true,
                        includeStickyChats: t ? WtRef.current : undefined
                    }
                });
                if (t) {
                    n.forEach((e)=>WtRef.current.add(e.chat.id.toString()));
                }
                if (e && !t) {
                    n = n.filter((t)=>t.chat !== e);
                }
                ir({
                    chats: n
                });
            }
        }, Se.THROTTLE);
        const kr = r("useWAWebStableCallback")(function() {
            if (!sr()) {
                if (ktRef.current.filter.kind === o("WAWebChatSearchFilters").SearchFilters.UNREAD) {
                    Er();
                    return;
                }
                if (ktRef.current.filter.kind === o("WAWebChatSearchFilters").SearchFilters.FAVORITES) {
                    Tr();
                    return;
                }
                if (ktRef.current.filter.kind === o("WAWebChatSearchFilters").SearchFilters.TO_YOU) {
                    Dr();
                    return;
                }
                zn.cancel();
                const e = Jt({
                    filter: ktRef.current.filter
                });
                const t = en.length !== e.length || en.some((t, n)=>t.chat.id !== e[n]?.chat.id || t.showsTertiaryRow !== e[n]?.showsTertiaryRow);
                if (t) {
                    ir(babelHelpers.extends({
                        chats: e
                    }, undefined));
                }
            }
        });
        o("useWAWebListener").useListener(o("WAWebChatCollection").ChatCollection, [
            "sort",
            "change:archive",
            "change:isParentGroup"
        ], function() {
            o("WALogger").LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                "WAWebChatlistPanelFunctional: ChatCollection sort/archive/isParentGroup event, isSearching: ",
                ", filter: ",
                ""
            ])), sr(), ktRef.current.filter.kind ?? "none");
            kr();
        });
        o("useWAWebListener").useListener(o("WAWebChatCollection").ChatCollection, [
            "change:unreadCount",
            "change:isAssignedToMe"
        ], function() {
            return Er();
        });
        const Ir = r("useWAWebStableCallback")(function() {
            if (o("WAWebNewsletterChatListUtils").shouldIncludeChannelsForFilter(ktRef.current.filter)) {
                kr();
            }
        });
        useEffect(function() {
            const QtRef_current = QtRef.current;
            if (!(QtRef_current.enabled === jt && QtRef_current.newsletters === newsletters)) {
                QtRef.current = {
                    enabled: jt,
                    newsletters
                };
                Ir();
            }
        }, [
            jt,
            newsletters,
            Ir
        ]);
        o("useWAWebListener").useListener(jt ? r("WAWebNewsletterCollection") : null, [
            "sort",
            "change:archive",
            "change:unreadCount"
        ], Ir);
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "close_chat", function(e) {
            Er(e);
        });
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "chatlock:lock", function() {
            vt(false);
        });
        var Tr = r("useWAWebThrottledCallback")(function() {
            if (!(sr() || ktRef.current.filter.kind !== o("WAWebChatSearchFilters").SearchFilters.FAVORITES)) {
                zn.cancel();
                const e = Jt({
                    filter: ktRef.current.filter,
                    options: {
                        includeActiveChat: false
                    }
                });
                ir({
                    chats: e
                });
            }
        }, Se.THROTTLE);
        o("useWAWebListener").useListener(o("WAWebChatCollection").ChatCollection, "change:isFavorite", function() {
            return Tr();
        });
        var Dr = r("useWAWebThrottledCallback")(function() {
            if (!(sr() || ktRef.current.filter.kind !== o("WAWebChatSearchFilters").SearchFilters.TO_YOU)) {
                zn.cancel();
                const e = Jt({
                    filter: ktRef.current.filter,
                    options: {
                        includeActiveChat: true
                    }
                });
                ir({
                    chats: e
                });
            }
        }, Se.THROTTLE);
        o("useWAWebListener").useListener(o("WAWebChatCollection").ChatCollection, "change:hasUnreadMention", function() {
            return Dr();
        });
        o("useWAWebListener").useListener(o("WAWebBotProfileCollection").BotProfileCollection, [
            "add",
            "change:product"
        ], function() {
            if (sr()) {
                zn.cancel();
                const e = ktRef.current.query;
                const t = ktRef.current.filter;
                ir({
                    chats: Jt({
                        filter: t,
                        searchText: e
                    }),
                    contacts: rn({
                        searchText: e,
                        filter: t,
                        includeChats: mode === r("WAWebChatlistPanelMode").CallsTab
                    }),
                    nonContactPushnames: tr()
                });
                Hn();
            }
        });
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, [
            "offline_progress_update_from_bridge",
            "offline_delivery_end_from_bridge"
        ], function() {
            return Oo();
        });
        o("useWAWebListener").useListener(o("WAWebContactCollection").ContactCollection, "sort", Jn);
        o("useWAWebListener").useListener(Lt.current, [
            "bulk_remove",
            "reset"
        ], function() {
            if (!sr()) {
                zn.cancel();
                ir({
                    chats: Jt({
                        filter: ktRef.current.filter
                    })
                });
            }
        });
        o("useWAWebListener").useListener(r("WAWebVoipCallsTabPanelManager"), "onWriteCallLogMessage", function() {
            zn.cancel();
            Gn(true);
        });
        o("useWAWebListener").useListener(o("WAWebMsgCollection").MsgCollection, "new_msg_sent", function() {
            if (sr()) {
                Jr().then(()=>Br());
            } else {
                Br();
            }
        });
        o("useWAWebListener").useListener(o("WAWebChatCollection").ChatCollection, "change:unreadCount", function(e) {});
        o("useWAWebListener").useListener(o("WAWebChatCollection").ChatCollection, [
            "change:archive",
            "remove"
        ], function(e) {});
        o("useWAWebListener").useListener(o("WAWebChatCollection").ChatCollection, "reset", function() {});
        o("useWAWebListener").useListener(o("WAWebModalManager").ModalManager, [
            "open_modal",
            "open_media"
        ], function() {
            o("WALogger").LOG(C || (C = babelHelpers.taggedTemplateLiteralLoose([
                "WAWebChatlistPanelFunctional: ModalManager open_modal/open_media event received"
            ])));
            if (mode === r("WAWebChatlistPanelMode").Chatlist && o("WAWebABProps").getABPropConfigValue("inbox_filters_reset_timeout") > 0 && o("WAWebInboxFiltersGatingUtils").inboxFiltersEnabled()) {
                o("WALogger").LOG(b || (b = babelHelpers.taggedTemplateLiteralLoose([
                    "WAWebChatlistPanelFunctional: Calling handleChatlistDisplayUpdate(true) from open_modal/open_media event"
                ])));
                Wo(true);
            }
        });
        o("useWAWebListener").useListener(o("WAWebModalManager").ModalManager, [
            "close_modal",
            "close_media"
        ], function() {
            o("WALogger").LOG(v || (v = babelHelpers.taggedTemplateLiteralLoose([
                "WAWebChatlistPanelFunctional: ModalManager close_modal/close_media event received"
            ])));
            if (mode === r("WAWebChatlistPanelMode").Chatlist && o("WAWebABProps").getABPropConfigValue("inbox_filters_reset_timeout") > 0 && o("WAWebInboxFiltersGatingUtils").inboxFiltersEnabled()) {
                o("WALogger").LOG(S || (S = babelHelpers.taggedTemplateLiteralLoose([
                    "WAWebChatlistPanelFunctional: Calling handleChatlistDisplayUpdate() from close_modal/close_media event"
                ])));
                Wo();
            }
        });
        o("useWAWebListener").useListener(o("WAWebChatCollection").ChatCollection, "change:contact.labels", function() {
            if (o("WAWebInboxFiltersGatingUtils").inboxFiltersEnabled() && ktRef.current.filter.kind === o("WAWebChatSearchFilters").SearchFilters.LABELS && ktRef.current.filter.label != null) {
                zn.cancel();
                ir({
                    chats: Jt({
                        filter: ktRef.current.filter
                    })
                });
            }
        });
        useEffect(function() {
            if (o("WAWebCustomerManagerGating").customerManagerEnabled()) {
                return o("WAWebLeadStageStore").subscribeToLeadStageStore(function() {
                    if (!(ktRef.current.filter.leadStage == null || sr())) {
                        zn.cancel();
                        ir({
                            chats: Jt({
                                filter: ktRef.current.filter
                            })
                        });
                    }
                });
            }
        }, [
            ir,
            Jt,
            sr,
            zn
        ]);
        const xr = function() {
            if (!sr()) {
                zn.cancel();
                ir({
                    chats: Jt({
                        filter: ktRef.current.filter
                    })
                });
            }
        };
        o("useWAWebListener").useListener(o("WAWebChatCollection").ChatCollection, [
            "change:capiThreadControl",
            "change:isAiHandoff",
            "change:labels"
        ], xr);
        o("useWAWebListener").useListener(o("WAWebBizAiHandoffRemovalTimingModel").BizAiHandoffRemovalTimingEventBus, "updated", xr);
        o("useWAWebListener").useListener(o("WAWebBizAiWebSmartComposerAiListsGateModel").BizAiWebSmartComposerAiListsGateEventBus, "updated", xr);
        const $r = useCallback(function() {
            let e;
            return false;
            let t;
            if (SrRef.current && !((e = SrRef.current) != null && e.archive)) {
                let n;
                vrRef.current = (n + 0.5) * o("WAWebFlatList.react").DEFAULT_ITEM_HEIGHT;
                if (!t) {
                    t = ItRef.current != null && ItRef.current.scrollTop > vrRef.current;
                }
                SrRef.current = undefined;
            }
        }, [
            _t
        ]);
        const Pr = useCallback(function() {
            if (_t === true) {
                SrRef.current = undefined;
                ft(false);
            }
        }, [
            _t
        ]);
        const Nr = useCallback(function(e) {
            if (!e.active) {
                const t = SrRef.current != null && r("WAWebWid").equals(SrRef.current.id, e.id);
                if (e.isDirty()) {
                    if (!t) {
                        SrRef.current = e;
                    }
                } else if (t) {
                    Pr();
                }
            }
        }, [
            Pr
        ]);
        const Mr = useCallback(function(e) {
            if (SrRef.current && r("WAWebWid").equals(SrRef.current.id, e.id)) {
                Pr();
            }
        }, [
            Pr
        ]);
        const wr = useCallback(function() {
            let e;
            if ($tRef.current) {
                if ((e = $tRef.current) != null) {
                    e.focusFirst();
                }
            }
        }, []);
        const Ar = useCallback(function() {
            const e = AtRef.current && AtRef.current.getSelected().length > 0 && !hideMultiSelectBar;
            if (at !== e) {
                ir({
                    showMultiSelectBar: e
                });
            }
        }, [
            at,
            hideMultiSelectBar,
            ir
        ]);
        o("useWAWebListener").useListener(AtRef.current, "all", Ar);
        const handleKeyDown = useCallback(function(e) {
            if (e.key === "ArrowDown") {
                if (!(TtRef.current && !TtRef.current.cursorIsAtEnd())) {
                    if (e != null) {
                        e.preventDefault();
                    }
                    wr();
                }
            }
        }, [
            wr
        ]);
        const onStartMultiSelect = useCallback(function(e) {
            if (e !== multiSelectEntryPoint_1) {
                ut(e);
            }
        }, [
            multiSelectEntryPoint_1
        ]);
        var Br = useCallback(function() {
            const ItRef_current = ItRef.current;
            if (ItRef_current) {
                const t = ItRef_current.scrollTop;
                if (ItRef_current.scrollTop !== 0) {
                    if (t < ItRef_current.clientHeight) {
                        r("WAWebVelocityAnimate")(ItRef_current, "scroll", {
                            duration: 300,
                            container: ItRef_current,
                            offset: -(ItRef_current.scrollTop + ItRef_current.getBoundingClientRect().top)
                        });
                    } else {
                        ItRef_current.scrollTop = 0;
                    }
                }
            }
        }, [
            Pr
        ]);
        const Wr = useCallback(function() {
            const BtRef_current = BtRef.current;
            if (BtRef_current != null && "searching" in BtRef_current) {
                return BtRef_current.searching || false;
            }
            return qe;
        }, [
            qe
        ]);
        const qr = useCallback(function(e) {
            if (!Lt.current.hasMoreMsgs || Wr() || mode !== r("WAWebChatlistPanelMode").CallsTab && !r("WAFtsIsSearchQueryEligibleForMessageSearch")(ktRef.current.query || "")) {
                return false;
            }
            return e.scrollTop + o("WAWebFrontendConstants").SCROLL_FUDGE > e.scrollHeight - e.clientHeight;
        }, [
            Lt,
            Wr,
            mode
        ]);
        var Ur = De(qr);
        var Vr = useCallback(function(e, t) {
            const n = new Map;
            const r = (o)=>{
                const r = e[o];
                if (r) {
                    r.forEach((e)=>{
                        if (e) {
                            if (!n.has(e)) {
                                n.set(e, []);
                            }
                            n.get(e).push(t[o]);
                        }
                    });
                }
            };
            for(let a = 0; a < e.length; a++){
                r(a);
            }
            const i = [];
            n.forEach((e, t)=>{
                i.push([
                    t,
                    e
                ]);
            });
            i.sort((e, t)=>{
                if (e[1].length === t[1].length) {
                    if (e[0].t != null && t[0].t != null) {
                        return t[0].t - e[0].t;
                    }
                    if (e[0].t != null) {
                        return -1;
                    }
                    return 1;
                }
                return t[1].length - e[1].length;
            });
            return i.slice(0, o("WAWebABProps").getABPropConfigValue("web_max_found_common_groups_displayed"));
        }, []);
        var Hr = useCallback((()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                o("WALogger").LOG(R || (R = babelHelpers.taggedTemplateLiteralLoose([
                    "WAWebChatlistPanelFunctional: handleSecretCodeSearch called, searchTextLength: ",
                    ", hideLockedChats: ",
                    ""
                ])), e.length, hideLockedChats ?? false);
                if (hideLockedChats !== true) {
                    o("WALogger").LOG(L || (L = babelHelpers.taggedTemplateLiteralLoose([
                        "WAWebChatlistPanelFunctional: handleSecretCodeSearch early return - hideLockedChats is not true"
                    ])));
                    return;
                }
                const t = yield o("WAWebChatLockUtils").validateSecretCode(e, {
                    unlockAppOnSuccess: true,
                    unlockEntryPoint: o("WAWebWamEnumUnlockEntryPoint").UNLOCK_ENTRY_POINT.SEARCH,
                    landingSurface: o("WAWebWamEnumLandingSurface").LANDING_SURFACE.FOLDER
                });
                o("WALogger").LOG(E || (E = babelHelpers.taggedTemplateLiteralLoose([
                    "WAWebChatlistPanelFunctional: handleSecretCodeSearch validation result: ",
                    ", lockedChatsEntryPointVisible: ",
                    ", chatLockComponentIsMounted: ",
                    ""
                ])), t, bt, o("useWAWebChatLockRestriction").chatLockComponentIsMounted());
                if (!t && bt && !o("useWAWebChatLockRestriction").chatLockComponentIsMounted()) {
                    o("WALogger").LOG(k || (k = babelHelpers.taggedTemplateLiteralLoose([
                        "WAWebChatlistPanelFunctional: handleSecretCodeSearch locking chats (validation failed)"
                    ])));
                    o("WAWebChatLockUtils").lockChats();
                }
                o("WALogger").LOG(I || (I = babelHelpers.taggedTemplateLiteralLoose([
                    "WAWebChatlistPanelFunctional: handleSecretCodeSearch calling debounceSetState, setting lockedChatsEntryPointVisible to: ",
                    ""
                ])), t);
                ir({
                    lockedChatsEntryPointVisible: t
                });
            });
            return function(t) {
                return e.apply(this, arguments);
            };
        })(), [
            hideLockedChats,
            bt,
            ir
        ]);
        const Gr = useCallback(function() {
            const en_length = en.length;
            const an_length = an.length;
            const messagesCount = je == null ? 0 : he(je, mode).length;
            const length = he(Lt.current.toArray(), mode).length;
            const Xe_length = commonGroups.length;
            return {
                chatsCount: en_length,
                contactsCount: an_length,
                messagesCount,
                groupsInCommonCount: Xe_length,
                ftsMessagesCount: length
            };
        }, [
            en.length,
            an.length,
            je,
            mode,
            commonGroups.length,
            Lt
        ]);
        useEffect(function() {
            if (ktRef.current.query) {
                const e = Gr();
                const { chatsCount, contactsCount, ftsMessagesCount, groupsInCommonCount, messagesCount } = e;
                if (chatsCount > 0 || contactsCount > 0 || ftsMessagesCount > 0 || groupsInCommonCount > 0 || messagesCount > 0) {
                    o("WAWebCoreActionsODS").logGlobalSearchHasResults();
                }
                o("WAWebSearchUserJourneyLogger").SearchUserJourneyLogger.resultPageShow(babelHelpers.extends({}, e));
            }
        }, [
            Gr
        ]);
        const zr = useCallback(function() {
            zn.cancel();
            jn.cancel();
            Kn.cancel();
            Qn.cancel();
            Xn.cancel();
            Yn.cancel();
            Zn.cancel();
        }, [
            zn,
            jn,
            Kn,
            Qn,
            Xn,
            Yn,
            Zn
        ]);
        const jr = useCallback(function() {
            Gn.cancel();
            er.cancel();
            nr.cancel();
            Lt.current.resetSearch();
            Lt.current.reset();
            UtRef.current?.abort();
            HtRef.current?.abort();
            Ge(false);
            Ye([]);
            et(o("WAWebNonContactPushNameSearchModel").EMPTY_NON_CONTACT_PUSHNAMES);
            if (Wr()) {
                ir({
                    searching: false
                }, ve);
            }
        }, [
            er,
            ir,
            Gn,
            Lt,
            Wr,
            nr
        ]);
        const Kr = useCallback(function(e, t) {
            const n = e ?? ktRef.current.query;
            if (mode === r("WAWebChatlistPanelMode").CallsTab || r("WAFtsIsSearchQueryEligibleForMessageSearch")(n) || !r("isStringNullOrEmpty")(t?.label)) {
                if (!qe) {
                    startTransition(function() {
                        Ue(true);
                    });
                }
                Gn();
            } else if (Wr()) {
                jr();
            } else {
                Lt.current.reset();
            }
        }, [
            mode,
            Wr,
            qe,
            Gn,
            jr,
            Lt
        ]);
        var Qr = De(Kr);
        const Xr = r("useWAWebCallbackAfterRender")([
            en,
            an,
            In,
            Pn,
            Fn,
            Un,
            qe
        ]);
        const Yr = useCallback(function() {
            return new (te || (te = n("Promise")))(function(e) {
                o("WALogger").LOG(T || (T = babelHelpers.taggedTemplateLiteralLoose([
                    "WAWebChatlistPanelFunctional: handleStopSearch called"
                ])));
                if (!Xt(ktRef.current.filter)) {
                    o("WAWebFilterLogging").logSearchWithFilterEvent(OtRef.current.sessionId);
                }
                jr();
                rt({
                    text: ""
                });
                o("WAWebNonContactPushNameSearchModel").getNonContactPushNameSearch().invalidateCache();
                ktRef.current.clear();
                zr();
                if (TtRef.current != null) {
                    if (TtRef.current.clearSearch != null) {
                        TtRef.current.clearSearch();
                    }
                }
                Xr(e);
                if (zt.aborted) {
                    o("WALogger").LOG(D || (D = babelHelpers.taggedTemplateLiteralLoose([
                        "WAWebChatlistPanelFunctional: Skipping setState in handleStopSearch because component is unmounting"
                    ])));
                    return;
                }
                o("WALogger").LOG(x || (x = babelHelpers.taggedTemplateLiteralLoose([
                    "WAWebChatlistPanelFunctional: Proceeding with setState in handleStopSearch, updating 8 fields"
                ])));
                or({
                    chats: Jt({}),
                    contacts: rn(),
                    outContacts: [],
                    actions: En(),
                    debugCommands: xn(),
                    communities: wn(),
                    settingsCommands: Wn(),
                    searching: false
                });
            });
        }, [
            Xt,
            jr,
            zr,
            or,
            Jt,
            rn,
            En,
            xn,
            wn,
            Wn,
            Xr,
            zt.aborted
        ]);
        var Jr = De(Yr);
        const Zr = useCallback(function(e, t) {
            o("WALogger").LOG($ || ($ = babelHelpers.taggedTemplateLiteralLoose([
                "WAWebChatlistPanelFunctional: handleSearch called hasSearchText: ",
                ", hasLabel: ",
                ", filterKind: ",
                ""
            ])), !!e, !!(t != null && t.label), t?.kind ?? "none");
            rr(e);
            rt({
                text: e,
                filter: t
            });
            if (mode !== r("WAWebChatlistPanelMode").CallsTab && !e && Xt(t)) {
                o("WALogger").LOG(P || (P = babelHelpers.taggedTemplateLiteralLoose([
                    "WAWebChatlistPanelFunctional: handleSearch clearing search (empty text and no filter)"
                ])));
                ktRef.current.updateQuery(e);
                ktRef.current.updateLabelQuery({});
                Jr();
                return;
            }
            const query = ktRef.current.query;
            if (mode !== r("WAWebChatlistPanelMode").CallsTab && ktRef.current.equals(e, t)) {
                o("WALogger").LOG(N || (N = babelHelpers.taggedTemplateLiteralLoose([
                    "WAWebChatlistPanelFunctional: handleSearch query unchanged, skipping"
                ])));
                return;
            }
            ktRef.current.updateQuery(e);
            ktRef.current.updateLabelQuery(t);
            if (sr()) {
                wtRef.current.setScrollFromStart(0);
                Qr(e, t);
                er();
                nr();
                zn(e, t);
                jn(e, t);
                Kn(e);
                Qn(e);
                Xn(e);
                Yn(e);
            } else {
                if (query && !e) {
                    Jr();
                }
                tn(Jt({
                    filter: t
                }));
            }
        }, [
            rr,
            mode,
            Xt,
            sr,
            Jr,
            Qr,
            er,
            nr,
            zn,
            jn,
            Kn,
            Qn,
            Xn,
            Yn,
            Jt
        ]);
        const eo = De(Zr);
        const toRef = useRef(eo);
        useEffect(function() {
            o("WALogger").LOG(M || (M = babelHelpers.taggedTemplateLiteralLoose([
                "WAWebChatlistPanelFunctional: useEffect[handleSearchRef] running, updating ref with latest handleSearch"
            ])));
            toRef.current = eo;
        }, [
            eo
        ]);
        const noRef = useRef(selectable === true);
        useEffect(function() {
            const noRef_current = noRef.current;
            noRef.current = selectable === true;
            if (selectable === true && !noRef_current) {
                toRef.current("");
            }
        }, [
            selectable
        ]);
        useEffect(function() {
            o("WALogger").LOG(w || (w = babelHelpers.taggedTemplateLiteralLoose([
                "WAWebChatlistPanelFunctional: useEffect[mount] running (component mount), mode: ",
                ", hasLabelFilter: ",
                ""
            ])), mode, !!labelFilter);
            if (mode === r("WAWebChatlistPanelMode").CallsTab) {
                o("WALogger").LOG(A || (A = babelHelpers.taggedTemplateLiteralLoose([
                    "WAWebChatlistPanelFunctional: useEffect[mount] initializing CallsTab search"
                ])));
                eo("");
            }
            if (mode === r("WAWebChatlistPanelMode").CommandPalette) {
                o("WALogger").LOG(F || (F = babelHelpers.taggedTemplateLiteralLoose([
                    "WAWebChatlistPanelFunctional: useEffect[mount] initializing CommandPalette"
                ])));
                o("WAWebCommandCollection").CommandCollection.reset();
                o("WAWebCommandCollection").CommandCollection.initializeCommands();
            }
            if (!r("isStringNullOrEmpty")(labelFilter)) {
                o("WALogger").LOG(O || (O = babelHelpers.taggedTemplateLiteralLoose([
                    "WAWebChatlistPanelFunctional: useEffect[mount] initializing labelFilter search"
                ])));
                eo("", {
                    label: labelFilter
                });
            }
            if (o("WAWebChatCollection").ChatCollection.some((e)=>o("WAWebChatGetters").getIsBroadcast(e))) {
                const e = en.some(({ chat })=>o("WAWebChatGetters").getIsBroadcast(chat));
                const t = r("countWhere")(en, function({ chat }) {
                    return o("WAWebChatGetters").getIsBroadcast(chat);
                });
                const n = o("WAWebChatCollection").ChatCollection.some((e)=>o("WAWebChatGetters").getIsBroadcast(e) && (e.broadcastMetadata?.recipients?.length ?? 0) === 0);
                const a = o("WAWebChatCollection").ChatCollection.some((e)=>o("WAWebChatGetters").getIsBroadcast(e) && (e.broadcastMetadata?.recipients?.length ?? 0) !== 0);
                o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.broadcastChatListItemViewed(e, t, n, a, o("WAWebBizBroadcastDeviceCapabilityCommon").getPrimarySupportsBusinessBroadcast());
            }
        }, []);
        const ro = useCallback(function() {
            return !!ktRef.current.query;
        }, []);
        const oo = useCallback(function(searchResult, t) {
            if (t != null && o("WAWebContactGetters").getIsMe(t.contact)) {
                o("WAWebMessageYourselfMetricUtils").UiMessageYourselfSearchAction.logMessageYourselfOpenedEvent(t, sr());
            }
            if (o("WAWebListsLabelGatingUtils").smartFiltersEnabled() && r("isStringNullOrEmpty")(labelFilter) && (!Xt(ktRef.current.filter) || ro())) {
                const n = ktRef.current.filter;
                const sessionId = OtRef.current.sessionId;
                o("WAWebFilterLogging").logSearchItemSelectedFilterEvent({
                    chatId: t?.id,
                    filter: n,
                    searchResult,
                    sessionId
                });
                if (t) {
                    o("WAWebComposeBoxActions").ComposeBoxActions.addMsgSendingLogAttributes(t, {
                        handleOnce: function() {
                            o("WAWebFilterLogging").logSearchMsgSentFilterEvent({
                                chatId: t.id,
                                filter: n,
                                searchResult,
                                sessionId
                            });
                        }
                    });
                }
            }
        }, [
            labelFilter,
            sr,
            Xt,
            ro
        ]);
        const ao = De(oo);
        const io = useCallback((()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, msgContext, a) {
                if (o("WAWebResolveBotProfile").shouldHideMuseBotFromCachedProfile(t.id)) {
                    if (mode === r("WAWebChatlistPanelMode").CallsTab) {
                        ur(t);
                    }
                    return;
                }
                yield o("WAWebChatlistUtils").openExistingChatWithEntryPoint({
                    chatEntryPoint: o("WAWebBizAiChatOpenAttribution").getBizAiChatEntryPointFromFilter(ktRef.current.filter),
                    id: t.id,
                    msg: a,
                    msgContext
                });
                ao("message", t);
            });
            return function(t, n, r, o) {
                return e.apply(this, arguments);
            };
        })(), [
            ao,
            mode,
            ur
        ]);
        const lo = De(io);
        const so = useCallback((()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
                const n = o("WAWebFrontendContactGetters").getIsMyContact(t.contact);
                const r = n ? o("WAWebWamEnumSearchActionName").SEARCH_ACTION_NAME.CLICK_ON_CONTACT_WITH_EXISTING_CHAT : o("WAWebWamEnumSearchActionName").SEARCH_ACTION_NAME.CLICK_ON_NON_CONTACT_WITH_EXISTING_CHAT;
                o("WAWebContactSearchExperienceLogger").ContactSearchExperienceLogger.log({
                    contactSearchEntrypoint: o("WAWebWamEnumContactSearchEntrypoint").CONTACT_SEARCH_ENTRYPOINT.CHATS_LIST_GLOBAL_SEARCH,
                    searchActionName: r,
                    searchStartsWithAt: ktRef.current.query.startsWith("@")
                });
                o("WALogger").LOG(B || (B = babelHelpers.taggedTemplateLiteralLoose([
                    "WAWebChatlistPanelFunctional: handleChatClick, isSearching: ",
                    ""
                ])), sr());
                if (sr()) {
                    o("WAWebUseRecentlySearchedChats").addChatToRecentSearches(t.id.toString());
                }
                if (!ur(t)) {
                    const a = (yield o("WAWebChatlistUtils").openExistingChatWithEntryPoint({
                        chatEntryPoint: o("WAWebBizAiChatOpenAttribution").getBizAiChatEntryPointFromFilter(ktRef.current.filter),
                        id: t.id
                    })) != null;
                    const i = a ? o("WAWebWamEnumSearchActionName").SEARCH_ACTION_NAME.INITIATION_SUCCESS : o("WAWebWamEnumSearchActionName").SEARCH_ACTION_NAME.INITIATION_FAILURE;
                    o("WAWebContactSearchExperienceLogger").ContactSearchExperienceLogger.log({
                        contactSearchEntrypoint: o("WAWebWamEnumContactSearchEntrypoint").CONTACT_SEARCH_ENTRYPOINT.CHATS_LIST_GLOBAL_SEARCH,
                        searchActionName: i,
                        searchStartsWithAt: ktRef.current.query.startsWith("@")
                    });
                    if (o("WAWebChatGetters").getIsBroadcast(t)) {
                        ao("broadcast_list", t);
                    } else if (o("WAWebChatGetters").getIsGroup(t)) {
                        new (o("WAWebCommunityGroupJourneyEventImpl")).CommunityGroupJourneyEvent({
                            action: o("WAWebWamEnumChatFilterActionTypes").CHAT_FILTER_ACTION_TYPES.GROUP_NAVIGATION,
                            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHATLIST,
                            chat: t
                        }).commit();
                        ao("group", t);
                    } else {
                        ao("chat", t);
                    }
                }
            });
            return function(t, n) {
                return e.apply(this, arguments);
            };
        })(), [
            ao,
            sr,
            ur
        ]);
        const uo = De(so);
        const co = useCallback((()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
                const n = o("WAWebFrontendContactGetters").getIsMyContact(t);
                const a = n ? o("WAWebWamEnumSearchActionName").SEARCH_ACTION_NAME.CLICK_ON_CONTACT : o("WAWebWamEnumSearchActionName").SEARCH_ACTION_NAME.CLICK_ON_NON_CONTACT;
                o("WAWebContactSearchExperienceLogger").ContactSearchExperienceLogger.log({
                    contactSearchEntrypoint: o("WAWebWamEnumContactSearchEntrypoint").CONTACT_SEARCH_ENTRYPOINT.CHATS_LIST_GLOBAL_SEARCH,
                    searchActionName: a,
                    searchStartsWithAt: ktRef.current.query.startsWith("@")
                });
                if (o("WAWebResolveBotProfile").shouldHideMuseBotFromCachedProfile(t.id)) {
                    const i = o("WAWebChatCollection").ChatCollection.getLatestChatForWid(t.id);
                    if (i != null) {
                        ur(i);
                    }
                    return;
                }
                const l = yield o("WAWebChatlistUtils").openOrCreateLatestChat(t.id);
                o("WAWebContactSearchExperienceLogger").ContactSearchExperienceLogger.log({
                    contactSearchEntrypoint: o("WAWebWamEnumContactSearchEntrypoint").CONTACT_SEARCH_ENTRYPOINT.CHATS_LIST_GLOBAL_SEARCH,
                    searchActionName: o("WAWebWamEnumSearchActionName").SEARCH_ACTION_NAME.INITIATION_SUCCESS,
                    searchStartsWithAt: ktRef.current.query.startsWith("@")
                });
                ao("contact", l);
                if (mode === r("WAWebChatlistPanelMode").CallsTab) {
                    o("WAWebDrawerManager").DrawerManager.closeDrawerLeft();
                }
            });
            return function(t, n) {
                return e.apply(this, arguments);
            };
        })(), [
            mode,
            ao,
            ur
        ]);
        const mo = De(co);
        const onUnknownContactClick = r("useWAWebStableCallback")((()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                e.preventDefault();
                e.stopPropagation();
                if (unknownContactInfo != null) {
                    const searchStartsWithAt = nt.text.startsWith("@");
                    const isUsernameSearch = unknownContactInfo.isUsernameSearch;
                    o("WAWebContactSearchExperienceLogger").ContactSearchExperienceLogger.log({
                        contactSearchEntrypoint: o("WAWebWamEnumContactSearchEntrypoint").CONTACT_SEARCH_ENTRYPOINT.CHATS_LIST_GLOBAL_SEARCH,
                        searchActionName: o("WAWebWamEnumSearchActionName").SEARCH_ACTION_NAME.CLICK_ON_NON_CONTACT,
                        isUsernameSearch,
                        searchStartsWithAt
                    });
                    let a;
                    if (unknownContactInfo?.wid == null) {
                        a = yield o("WAWebUsernameKeyVerificationFlowLazy").usernameKeyVerificationFlow({
                            username: unknownContactInfo.username,
                            searchLogContext: {
                                contactSearchEntrypoint: o("WAWebWamEnumContactSearchEntrypoint").CONTACT_SEARCH_ENTRYPOINT.CHATS_LIST_GLOBAL_SEARCH,
                                searchStartsWithAt
                            }
                        });
                        if (a == null) {
                            return;
                        }
                    } else {
                        a = unknownContactInfo.wid;
                    }
                    if (o("WAWebResolveBotProfile").shouldHideMuseBotFromCachedProfile(a)) {
                        if (unknownContactInfo.chat != null) {
                            ur(unknownContactInfo.chat);
                        }
                        return;
                    }
                    const i = unknownContactInfo.chat ?? (yield o("WAWebChatlistUtils").openOrCreateLatestChat(a));
                    o("WAWebSearchUserJourneyLogger").SearchUserJourneyLogger.resultItemClick(babelHelpers.extends({
                        item: i,
                        itemTypeOverride: o("WAWebWamEnumSearchUjItemType").SEARCH_UJ_ITEM_TYPE.UNKNOWN_CONTACT
                    }, Gr()));
                    const l = yield o("WAWebCmd").Cmd.openChatFromUnread({
                        chat: i,
                        chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.Chatlist
                    });
                    const s = l ? o("WAWebWamEnumSearchActionName").SEARCH_ACTION_NAME.INITIATION_SUCCESS : o("WAWebWamEnumSearchActionName").SEARCH_ACTION_NAME.INITIATION_FAILURE;
                    o("WAWebContactSearchExperienceLogger").ContactSearchExperienceLogger.log({
                        contactSearchEntrypoint: o("WAWebWamEnumContactSearchEntrypoint").CONTACT_SEARCH_ENTRYPOINT.CHATS_LIST_GLOBAL_SEARCH,
                        searchActionName: s,
                        isUsernameSearch,
                        searchStartsWithAt
                    });
                    if (l) {
                        o("WAWebComposeBoxActions").ComposeBoxActions.focus(i);
                    }
                }
            });
            return function(t) {
                return e.apply(this, arguments);
            };
        })());
        const _o = useCallback(function(e, t, n, a) {
            e.preventDefault();
            e.stopPropagation();
            o("WAWebSearchLogging").logSearchActionTypeAheadItemClick(t, a);
            let itemTypeOverride;
            if (t instanceof o("WAWebChatModel").Chat && o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(t.groupMetadata) === o("WAWebGroupType").GroupType.COMMUNITY) {
                itemTypeOverride = o("WAWebWamEnumSearchUjItemType").SEARCH_UJ_ITEM_TYPE.COMMUNITY;
            }
            const l = Gr();
            o("WAWebSearchUserJourneyLogger").SearchUserJourneyLogger.resultItemClick(babelHelpers.extends({
                item: a ?? t,
                itemTypeOverride
            }, l));
            if (startChatInteraction) {
                startChatInteraction();
            }
            if (mode === r("WAWebChatlistPanelMode").CommandPalette) {
                o("WAWebModalManager").ModalManager.close();
            }
            if (t instanceof o("WAWebMsgModel").Msg) {
                const s = o("WAWebFrontendMsgGetters").getChat(t);
                s.getEventMsgs().initialize();
                const u = o("WAWebChatMessageSearch").getSearchContext({
                    chat: s,
                    msgKey: t.id
                });
                u.msg = t;
                lo(e, s, u);
            } else if (t instanceof o("WAWebChatModel").Chat) {
                t.getEventMsgs().initialize();
                if (n != null) {
                    lo(e, t, n, a);
                } else if (o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(t.groupMetadata) === o("WAWebGroupType").GroupType.COMMUNITY) {
                    o("WAWebCmd").Cmd.openCommunityHome(t.id, false);
                } else {
                    uo(e, t);
                }
            } else if (t instanceof r("WAWebContactModel")) {
                mo(e, t);
            } else if (t instanceof r("WAWebCommandModel")) {
                switch(t.type){
                    case "setting":
                        {
                            o("WAWebDrawerManager").DrawerManager.openDrawerLeft(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
                                descriptorType: "settings",
                                initialStep: o("WAWebSettingsConst").SettingsSteps.cast(t.id)
                            } : re.jsx(o("WAWebSettingsFlowLoadable").SettingsFlowLoadable, {
                                initialStep: o("WAWebSettingsConst").SettingsSteps.cast(t.id)
                            }));
                            break;
                        }
                    case "action":
                        {
                            r("WAWebKeyboardRun")(t.name);
                            break;
                        }
                }
            } else {
                if ((!r("gkx")("26258") || r("gkx")("16539")) && pe && t instanceof pe) {
                    if (Ce != null) {
                        Ce(t);
                    }
                }
            }
        }, [
            Gr,
            startChatInteraction,
            mode,
            lo,
            uo,
            mo
        ]);
        const onItemClick = De(_o);
        const go = useCallback(function(e) {
            const query = ktRef.current.query;
            const filter = ktRef.current.filter;
            const m = xn(query)[0] ?? En(query)[0] ?? Wn(query)[0] ?? wn(query)[0] ?? Jt({
                filter,
                searchText: query
            })[0]?.chat ?? rn({
                searchText: query,
                filter,
                includeChats: mode === r("WAWebChatlistPanelMode").CallsTab
            })[0]?.contact ?? he(Lt.current.toArray(), mode)[0];
            if (m) {
                onItemClick(e, m);
            }
        }, [
            xn,
            En,
            Wn,
            wn,
            Jt,
            rn,
            Lt,
            onItemClick,
            mode
        ]);
        const ho = De(go);
        const yo = o("WAWebDrawerManagerContext").useDrawerManagerContext("left");
        const Co = useCallback(function() {
            let t;
            const n = yo.existsDrawer() ?? false;
            if (!(n && mode !== r("WAWebChatlistPanelMode").CommandPalette)) {
                r("WAWebFocusTracer").focus(TtRef.current);
                if (!((t = TtRef.current) == null || t.focus == null)) {
                    t.focus();
                }
            }
        }, [
            mode,
            yo
        ]);
        const onFocusSearch = De(Co);
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "focus_chat_search", onFocusSearch);
        const vo = r("useWAWebStableCallback")(function() {
            const NtRef_current = NtRef.current;
            if (NtRef_current != null) {
                const t = NtRef_current.querySelector('[tabindex="0"]');
                t?.focus();
            }
        });
        const up = r("useWAWebStableCallback")(function(e) {
            e.preventDefault();
            e.stopPropagation();
            const $tRef_current = $tRef.current;
            if (en.length > 0 && $tRef_current != null) {
                $tRef_current.focusLast();
            } else {
                onFocusSearch();
            }
        });
        const Ro = useMemo(function() {
            return {
                up
            };
        }, [
            up
        ]);
        const Lo = useCallback(function(e) {
            if (e.target instanceof HTMLElement) {
                Zn(e.target);
            }
        }, [
            Zn
        ]);
        const Eo = useCallback(function() {
            TtRef.current?.clearFilter();
        }, []);
        const onShowSearch = useCallback(function() {
            let e;
            if (!((e = TtRef.current) == null || e.focus == null)) {
                e.focus();
            }
        }, []);
        const Io = useCallback(function(e) {
            if (en != null && en.length || an != null && an.length || Ze.length || mn != null && mn.length || e.length || je != null && he(je, mode).length > 0 || Fn != null && Fn.length || Pn != null && Pn.length || In != null && In.length || Un != null && Un.length || contactInfo != null || commonGroups != null && commonGroups.length || orgMemberSections.length) {
                return [
                    null,
                    null
                ];
            }
            if (!r("isStringNullOrEmpty")(labelFilter)) {
                if (qe) {
                    return [
                        <span key="null"/>,
                        null
                    ];
                }
                return [
                    re.jsx(o("WAWebEmptyState.react").NoResultForLabel, {
                        labelId: labelFilter
                    }, "no-result-for-label"),
                    o("WAWebEmptyState.react").noResultForLabelFbt(labelFilter)
                ];
            }
            if (ktRef.current.query) {
                if (qe) {
                    return [
                        re.jsx(o("WAWebEmptyState.react").Searching, {}, "searching"),
                        o("WAWebEmptyState.react").searchingFbt()
                    ];
                }
                const Component = o("WAWebEmptyState.react").Search;
                return [
                    <Component key="search" hasFilter={ktRef.current.hasFilter()} onClearFilter={Eo}/>,
                    o("WAWebEmptyState.react").searchFbt()
                ];
            }
            const kind = ktRef.current.filter.kind;
            if (!sr() && kind != null && [
                o("WAWebChatSearchFilters").SearchFilters.UNREAD,
                o("WAWebChatSearchFilters").SearchFilters.ASSIGNED_TO_YOU,
                o("WAWebChatSearchFilters").SearchFilters.AI_RESPONDING,
                o("WAWebChatSearchFilters").SearchFilters.AI_HANDOFF
            ].concat(o("WAWebInboxFiltersGatingUtils").inboxFiltersEnabled() ? [
                o("WAWebChatSearchFilters").SearchFilters.CONTACT,
                o("WAWebChatSearchFilters").SearchFilters.GROUP,
                o("WAWebChatSearchFilters").SearchFilters.LABELS,
                o("WAWebChatSearchFilters").SearchFilters.COMMUNITY
            ] : []).concat(o("WAWebInboxFiltersGatingUtils").inboxFavoritesEnabled() ? [
                o("WAWebChatSearchFilters").SearchFilters.FAVORITES
            ] : []).concat(o("WAWebInboxFiltersGatingUtils").inboxToYouFilterEnabled() ? [
                o("WAWebChatSearchFilters").SearchFilters.TO_YOU
            ] : []).concat(o("WAWebNewsletterGatingUtils").isChannelsInChatListEnabled() ? [
                o("WAWebChatSearchFilters").SearchFilters.CHANNELS
            ] : []).includes(kind)) {
                const a = o("WAWebEmptyState.react").getNoFilteredChatsStrings(kind)?.title;
                const Component = o("WAWebEmptyState.react").NoFilteredChats;
                return [
                    <Component key="no-filtered-chats" filter={ktRef.current.filter} filterSession={OtRef.current} onClearFilter={Eo} onShowSearch={onShowSearch}/>,
                    a
                ];
            }
            if (o("WAWebChatCollection").ChatCollection.some((e)=>o("WAWebFrontendChatGetters").getShouldAppearInList(e))) {
                return [
                    re.jsx(o("WAWebEmptyState.react").AllArchived, {}, "all-archived"),
                    o("WAWebEmptyState.react").allArchivedFbt()
                ];
            }
            return [
                re.jsx(o("WAWebEmptyState.react").ListChats, {}, "list-chats"),
                o("WAWebEmptyState.react").listChatsFbt()
            ];
        }, [
            en,
            an,
            Ze,
            je,
            mode,
            Fn,
            Pn,
            In,
            Un,
            qe,
            labelFilter,
            sr,
            Eo,
            onShowSearch,
            contactInfo,
            commonGroups,
            mn.length,
            orgMemberSections
        ]);
        const To = De(Io);
        const Do = useCallback(function(e) {
            ItRef.current = e;
        }, []);
        const xo = useCallback(function() {
            ir({
                showMultiSelectBar: false
            });
            if (AtRef.current) {
                AtRef.current.unsetAll();
            }
            if (FtRef.current) {
                FtRef.current.setSelectable(!!selectable);
            }
            endMultiSelect?.();
        }, [
            ir,
            selectable,
            endMultiSelect
        ]);
        const $o = useCallback(function() {
            return false;
        }, [
            _t
        ]);
        const Po = useCallback(function() {
            return o("WAWebChatCollection").ChatCollection.some((e)=>e.archive && o("WAWebFrontendChatGetters").getShouldAppearInList(e)) || jt && r("WAWebNewsletterCollection").some(o("WAWebNewsletterChatListUtils").isArchivedChatListChannel);
        }, [
            jt
        ]);
        const No = useCallback(function() {
            return !!(mode === r("WAWebChatlistPanelMode").Chatlist && showArchiveV2 === true && !at && ktRef.current.isEmptyQuery() && !ktRef.current.hasFilter() && en && en.length > 0 && FtRef.current?.isSelectable !== true && Po());
        }, [
            mode,
            showArchiveV2,
            at,
            en,
            Po
        ]);
        const Mo = De(No);
        const wo = useCallback(function() {
            return o("WAWebChatlistPanelUtils").shouldShowLockedChatsPanel({
                mode,
                selectableState: FtRef.current,
                showMultiSelectBar: at,
                hideLockedChats: hideLockedChats === true,
                lockedChatsEntryPointVisible: bt,
                searchQuery: ktRef.current
            });
        }, [
            mode,
            hideLockedChats,
            at,
            bt
        ]);
        const Ao = De(wo);
        var Fo = useCallback(function() {
            if (o("WAWebListsLabelGatingUtils").smartFiltersEnabled()) {
                o("WAWebFilterLogging").logSearchFilterEvent(OtRef.current.sessionId, ktRef.current.filter);
            }
        }, []);
        var Oo = useCallback(function() {
            ir({
                showOfflineToastbar: o("WAWebOfflineHandler").OfflineMessageHandler.getResumeUIProgressBarType() === o("WAWebOfflineResumeTypes").ResumeUIProgressBarType.Toastbar
            });
        }, [
            ir
        ]);
        const Bo = useCallback(function(e = false) {
            o("WALogger").LOG(W || (W = babelHelpers.taggedTemplateLiteralLoose([
                "WAWebChatlistPanelFunctional: handleChatlistDisplayUpdate called, open: ",
                ", chatlistHidden: ",
                ", filterKind: ",
                ""
            ])), e, LrRef.current, ktRef.current.filter.kind ?? "none");
            o("WAWebCmd").Cmd.chatListVisibilityChange(!e);
            if (!ktRef.current.filter.kind) {
                o("WALogger").LOG(q || (q = babelHelpers.taggedTemplateLiteralLoose([
                    "WAWebChatlistDisplayUpdate: Early return - no filter selected"
                ])));
                return;
            }
            if (e && LrRef.current) {
                o("WALogger").LOG(U || (U = babelHelpers.taggedTemplateLiteralLoose([
                    "WAWebChatlistDisplayUpdate: Early return - chatlist already hidden"
                ])));
                return;
            }
            const a = new (te || (te = n("Promise")))(function(e) {
                self.setTimeout(function() {
                    const n = yo.existsDrawer() ?? false;
                    e(n);
                }, 0);
            });
            const i = new te(function(e) {
                self.setTimeout(function() {
                    return o("WAWebModalManager").ModalManager.exists(e);
                }, 0);
            });
            const l = new te(function(e) {
                self.setTimeout(function() {
                    return o("WAWebModalManager").ModalManager.existsMedia(e);
                }, 0);
            });
            te.all([
                a,
                i,
                l
            ]).then(([t, n, a])=>{
                if (zt.aborted) {
                    o("WALogger").LOG(V || (V = babelHelpers.taggedTemplateLiteralLoose([
                        "WAWebChatlistDisplayUpdate: Unmount signal aborted, skipping processing"
                    ])));
                    return;
                }
                const i = t || n || a;
                o("WALogger").LOG(H || (H = babelHelpers.taggedTemplateLiteralLoose([
                    "WAWebChatlistDisplayUpdate: Checked overlays - drawer: ",
                    ", modal: ",
                    ", media: ",
                    ", hovered: ",
                    ""
                ])), t, n, a, i);
                if (i) {
                    o("WALogger").LOG(G || (G = babelHelpers.taggedTemplateLiteralLoose([
                        "WAWebChatlistDisplayUpdate: Marking chatlist as hidden (user left chats screen)"
                    ])));
                    LrRef.current = true;
                } else if (LrRef.current) {
                    o("WALogger").LOG(z || (z = babelHelpers.taggedTemplateLiteralLoose([
                        "WAWebChatlistDisplayUpdate: Marking chatlist as visible (user returned to chats screen)"
                    ])));
                    LrRef.current = false;
                    if (RrRef.current != null) {
                        const l = Date.now() - r("nullthrows")(RrRef.current);
                        const s = o("WAWebABProps").getABPropConfigValue("inbox_filters_reset_timeout") * 1000;
                        o("WALogger").LOG(j || (j = babelHelpers.taggedTemplateLiteralLoose([
                            "WAWebChatlistDisplayUpdate: Filters set timespan: ",
                            "ms, reset timeout: ",
                            "ms"
                        ])), l, s);
                        if (l >= s) {
                            o("WALogger").LOG(K || (K = babelHelpers.taggedTemplateLiteralLoose([
                                "WAWebChatlistDisplayUpdate: Resetting filters via handleSearchRef.current (timeout exceeded)"
                            ])));
                            toRef.current(ktRef.current.query, {
                                kind: null
                            });
                        } else {
                            o("WALogger").LOG(Q || (Q = babelHelpers.taggedTemplateLiteralLoose([
                                "WAWebChatlistDisplayUpdate: Filters NOT reset (timeout not exceeded)"
                            ])));
                        }
                    } else {
                        o("WALogger").LOG(X || (X = babelHelpers.taggedTemplateLiteralLoose([
                            "WAWebChatlistDisplayUpdate: No filter set time tracked"
                        ])));
                    }
                } else {
                    o("WALogger").LOG(Y || (Y = babelHelpers.taggedTemplateLiteralLoose([
                        "WAWebChatlistDisplayUpdate: Chatlist remains visible (no state change)"
                    ])));
                }
            }).catch(r("WAWebNoop"));
        }, [
            yo,
            zt.aborted
        ]);
        var Wo = De(Bo);
        const qo = useCallback(function() {
            if (ro()) {
                return true;
            }
            const e = o("WAWebInboxFiltersGatingUtils").inboxFiltersEnabled();
            if (e === false && ktRef.current.hasLabelFilter()) {
                return true;
            }
            if (ktRef.current.filter.kind == null) {
                return false;
            }
            const t = e ? o("WAWebChatSearchFilters").isFilterExcludedFromSearchTreatmentInInboxFlow : o("WAWebChatSearchFilters").isFilterExcludedFromSearchTreatmentInNormalFlow;
            return !t(ktRef.current.filter.kind);
        }, [
            ro
        ]);
        const Uo = useCallback(function() {
            if (mode === r("WAWebChatlistPanelMode").Chatlist && o("WAWebABProps").getABPropConfigValue("inbox_filters_reset_timeout") > 0 && o("WAWebInboxFiltersGatingUtils").inboxFiltersEnabled()) {
                o("WALogger").LOG(J || (J = babelHelpers.taggedTemplateLiteralLoose([
                    "WAWebChatlistPanelFunctional: Calling handleChatlistDisplayUpdate(true) from handleDrawerOpenLeft"
                ])));
                Wo(true);
            }
        }, [
            mode,
            Wo
        ]);
        const onLeftDrawerOpen = De(Uo);
        const Ho = useCallback(function() {
            if (mode === r("WAWebChatlistPanelMode").Chatlist && o("WAWebABProps").getABPropConfigValue("inbox_filters_reset_timeout") > 0 && o("WAWebInboxFiltersGatingUtils").inboxFiltersEnabled()) {
                o("WALogger").LOG(Z || (Z = babelHelpers.taggedTemplateLiteralLoose([
                    "WAWebChatlistPanelFunctional: Calling handleChatlistDisplayUpdate() from handleLeftDrawerClose"
                ])));
                Wo();
            }
        }, [
            mode,
            Wo
        ]);
        const onLeftDrawerClose = De(Ho);
        useImperativeHandle(c, function() {
            return {
                containsDOMNode: function(t) {
                    if (PtRef.current) {
                        return PtRef.current.contains(t);
                    }
                    return false;
                },
                onLeftDrawerOpen,
                onLeftDrawerClose
            };
        }, [
            onLeftDrawerOpen,
            onLeftDrawerClose
        ]);
        const Lt_current = Lt.current;
        const ftsResult = Lt_current.length > 0 ? he(Lt_current.toArray(), mode) : fe;
        const Ko = je == null ? fe : he(je, mode);
        const Qo = To(ftsResult);
        let Xo = Qo[1];
        if (Xo == null && orgMemberSections.some((e)=>e.loading)) {
            Xo = s._("Searching for organization members");
        }
        let Yo = Qo[0];
        let Jo;
        const Zo = o("WAWebInboxFiltersGatingUtils").inboxFiltersEnabled();
        const ea = qo();
        let ta = null;
        let na = false;
        const ra = ktRef.current?.query || "";
        if (ea && (searchPhoneNumber || searchUsername) && ra) {
            const oa = contactInfo?.wid;
            const aa = contactInfo?.username;
            const ia = !an.some(({ contact })=>oa != null && contact.id.equals(oa) || aa != null && o("WAWebUsernameTypes").serializeMaybeUsername(contact.username) === aa) && (mode === r("WAWebChatlistPanelMode").CallsTab || !en.some(({ chat })=>oa != null && chat.id.equals(oa) || aa != null && o("WAWebUsernameTypes").serializeMaybeUsername(chat.contact.username) === aa));
            if (loading) {
                ta = <div key="unknown-contact-loading" className="x78zum5 x1c4vz4f x2lah0s xdl72j9 xl56j7k x1p5oq8j xwxc41k">{re.jsx(o("WAWebSpinner.react").Spinner, {
                    stroke: 6,
                    size: 24
                })}</div>;
            } else if (error) {
                const Component = o("WAWebEmptyState.react").SearchingNonContactError;
                ta = <Component key="error" error={o("WAWebContactlessChatUtils").getErrorStr(error)} onClick={onRetry}/>;
            } else if (contactInfo && ia) {
                na = true;
                const Component = r("WAWebDialerUnknownContactWithCallButtons.react");
                const Component_1 = r("WAWebUnknownContactSection.react");
                const Component_2 = o("WAWebKeyboardHotKeys.react").HotKeys;
                ta = <Component_2 key="unknown-contact" ref={NtRef} handlers={Ro}>{mode === r("WAWebChatlistPanelMode").CallsTab && contactInfo.wid != null && o("WAWebCallsTabDialerGating").callsTabDialerEnabled() ? <Component contactInfo={contactInfo} onUnknownContactClick={onUnknownContactClick} searchText={ra}/> : <Component_1 contactInfo={contactInfo} onUnknownContactClick={onUnknownContactClick} searchText={ra}/>}</Component_2>;
            }
        }
        if (Yo == null && (mode === r("WAWebChatlistPanelMode").CallsTab || mode === r("WAWebChatlistPanelMode").Chatlist || mode === r("WAWebChatlistPanelMode").CommandPalette && ktRef.current.query.length > 0)) {
            let la;
            const sa = {
                flatListController: wtRef.current,
                chats: gn,
                contacts: hn,
                contactSearchMatches,
                messages: Ko,
                actions: In || [],
                debugCommands: Pn || [],
                communities: Fn || [],
                settings: Un || [],
                filterPreset: dt,
                commonGroups,
                nonContactPushnames,
                orgMemberSections,
                onRetryOrgMemberSearch,
                isSearching: ea,
                isSearchInputFocused: !!((la = TtRef.current) != null && la.hasFocus()),
                searchQuery: ktRef.current,
                ftsResult,
                selection: EtRef.current,
                onFocusSearch,
                multiSelection: AtRef.current,
                onStartMultiSelect,
                selectableState: FtRef.current,
                onItemClick,
                mode
            };
            Yo = re.jsx(r("WAWebChatlistFunctional.react"), babelHelpers.extends({}, sa, {
                outContacts: mn,
                outContactSearchMatches,
                chatSearchMatches,
                onFocusAfterLast: na ? vo : undefined,
                ref: $tRef
            }));
        }
        if (ht === true && suppressOfflineResumeToastbar !== true) {
            Jo = re.jsx(r("WAWebOfflineResumeProgressToastbar.react"), {});
        }
        if (Jo == null && ht !== true && Yo != null && mode === r("WAWebChatlistPanelMode").Chatlist) {
            Jo = sr() ? re.jsx(r("WAWebDesktopUpsellSearchToastbar.react"), {}) : re.jsx(r("WAWebDesktopUpsellChatlistToastbar.react"), {});
        }
        const ua = qe && !r("isStringNullOrEmpty")(labelFilter) || qe && Lt.current.length ? <div key="spinner" className="x78zum5 x1c4vz4f x2lah0s xdl72j9 xl56j7k x1p5oq8j xwxc41k">{re.jsx(o("WAWebSpinner.react").Spinner, {
            stroke: 6,
            size: 24
        })}</div> : null;
        const ca = mode === r("WAWebChatlistPanelMode").CommandPalette;
        const onScroll = Lt.current.hasMoreMsgs && Gn.length || $o() ? Lo : undefined;
        let ma;
        let pa = null;
        let _a;
        const onFilterChange = useCallback(function(e) {
            if (ktRef.current.filter.kind === o("WAWebChatSearchFilters").SearchFilters.UNREAD && e.kind !== o("WAWebChatSearchFilters").SearchFilters.UNREAD) {
                WtRef.current.clear();
            }
            RrRef.current = e.kind == null ? undefined : Date.now();
            o("WALogger").LOG(ee || (ee = babelHelpers.taggedTemplateLiteralLoose([
                "WAWebChatlistPanelFunctional: Calling handleSearch from handleFilterChange, hasQuery: ",
                ", filterKind: ",
                ""
            ])), !!ktRef.current.query, e.kind ?? "none");
            toRef.current(ktRef.current.query, e);
        }, []);
        const onDropdownOpen = useCallback(function() {
            TtRef.current?.dismissZeroState();
        }, []);
        let ha;
        let ya;
        const Component = o("WAWebChatListSearch.react").ListSearch;
        if (at || multiSelectEntryPoint_1 === o("WAWebMultiSelectEntryPointConstants").MultiSelectEntryPoint.ChatListHeaderDropdown) {
            const Ca = o("WAWebConnGetters").getIsSMB(o("WAWebConnModel").Conn) && multiSelectEntryPoint_1 !== o("WAWebMultiSelectEntryPointConstants").MultiSelectEntryPoint.ChatListHeaderDropdown;
            const Component = r("WAWebMixedMultiSelectBar.react");
            const Component_1 = r("WAWebConsumerMultiSelectBar.react");
            const Component_2 = o("WAWebUimUie.react").UIE;
            ma = <Component_2 key="multiSelectBar" displayName="MultiSelect" escapable dismissOnWindowResize requestDismiss={xo}>{Ca ? <Component theme="chatlist-panel" selectedModels={AtRef.current} labelEditEnabled={multiSelectEntryPoint_1 === o("WAWebMultiSelectEntryPointConstants").MultiSelectEntryPoint.Label} multiSelectEntryPoint={multiSelectEntryPoint_1} onCancel={xo}/> : <Component_1 selectedModels={AtRef.current} onCancel={xo}/>}</Component_2>;
            Xo = Xo == null && ma != null ? s._("Select Chats") : Xo;
        } else if (selectable !== true && (_a = <div {...babelHelpers.extends({
            ref: xtRef
        }, {
            0: {
                className: "x1c4vz4f x2lah0s xdl72j9 x1280gxy"
            },
            1: {
                className: "x1c4vz4f x2lah0s xdl72j9 x1280gxy x18wx58x"
            }
        }[!!ca << 0], {
            children: <Component ref={Mt} handleKeyDown={handleKeyDown} onSearch={eo} onEnter={ho} filterSession={OtRef.current} listFilterEnabled={mode === r("WAWebChatlistPanelMode").Chatlist && !Zo} chatlistFilterEnabled={mode === r("WAWebChatlistPanelMode").Chatlist && !Zo} inboxFiltersEnabled={mode === r("WAWebChatlistPanelMode").Chatlist && Zo} inboxFilter={ktRef.current.filter} focusOnMount={mode === r("WAWebChatlistPanelMode").CommandPalette} loading={loading_1} mode={mode} showPlaceholderUntilType usernameSearchEnabled={unknownContactUsernameSearchEnabled === true} tsSurface={o("WAWebWamEnumTsSurface").TS_SURFACE.CHAT_LIST} searchZeroStateAllowed={mode === r("WAWebChatlistPanelMode").Chatlist} askMetaAiButtonAllowed={mode === r("WAWebChatlistPanelMode").Chatlist}/>
        })}/>, mode === r("WAWebChatlistPanelMode").Chatlist && Zo)) {
            const ba = function(t) {
                if (TtRef.current?.hasFocus() && t.button === 0) {
                    t.preventDefault();
                }
            };
            const Component = o("WAWebChatListFilters.react").ChatListFilters;
            ha = <Component ref={DtRef} filter={ktRef.current.filter} filterSession={OtRef.current} onDropdownOpen={onDropdownOpen} onFilterChange={onFilterChange} onMouseDown={ba}/>;
        }
        if (r("isStringNullOrEmpty")(labelFilter)) {
            let va;
            if ((!r("gkx")("26258") || r("gkx")("16539")) && _t === true) {
                va = <div className="x10l6tqk x78zum5 xuk3077 xl56j7k xh8yej3 x16wdlz0 x2b8uid"><div className="x9f619 x1rg5ohu xq8v1hd x1fgtraw xexx8yu x18d9i69 xwn43p0 x1x5flf6 x6ikm8r x10wlt62 x1nxh6w3 xk50ysn xgif2c7 x1pse0pq xlyipyv xuxw1ft xyp3urf x6nvzda x4i4b9w xhl9efl xj65ea0 x1wpep30" onClick={Br} role="button"><span className="xqf2s3x">{re.jsx(o("WAWebChevronCustomIcons").ChevronUpCustomIcon, {
                    xstyle: ye.unreadIcon,
                    height: 19,
                    displayInline: true
                })}</span>{s._("Unread messages")}</div></div>;
            }
            const Sa = mode === r("WAWebChatlistPanelMode").CallsTab || ca || ea || ma ? null : re.jsx(r("WAWebChatlistBanners.react"), {});
            const Ra = !ea && !ma ? callsTabBanner : null;
            pa = <>{_a}{ha}{Sa}{Ra}{ma}</>;
        }
        if (Mo()) {
            ya = re.jsx(r("WAWebChatArchivedEntryPoint.react"), {});
        }
        let La;
        if (Ao()) {
            const Component = r("WAWebChatLockedEntryPoint.react");
            La = <Component onOpen={function() {
                Jr();
            }}/>;
        }
        let Ea;
        if (Jo == null && (ro() || ktRef.current.hasLabelFilter())) {
            Ea = re.jsx(o("WAWebHistorySyncComponents.react").HistorySyncSearchIncompletePlaceholder, {});
        }
        const ka = en?.length ?? 0;
        const Ia = o("WAWebMiscGatingUtils").isPrivacyNarrativeV1Enabled() && ka > 0 ? re.jsx(o("WAWebPrivacyNarrativeE2EMessage.react").E2eMessageChatList, {}) : null;
        const Ta = mode === r("WAWebChatlistPanelMode").CallsTab && o("WAWebMiscGatingUtils").isPrivacyNarrativeV1Enabled() ? re.jsx(o("WAWebPrivacyNarrativeE2EMessage.react").E2eMessageCallsList, {}) : null;
        const Da = Xo != null ? re.jsx(o("WAWebAccessibility.react").InvisibleAnnouncement, {
            text: Xo
        }) : null;
        const Component_1 = o("WAWebErrorBoundary.react").ErrorBoundary;
        const Component_2 = r("WAWebFlatListContainer.react");
        const Component_3 = o("WAWebErrorBoundary.react").ErrorBoundary;
        const Component_4 = o("WAWebErrorBoundary.react").ErrorBoundary;
        const Component_5 = o("WAWebErrorBoundary.react").ErrorBoundary;
        return <div {...babelHelpers.extends({
            id: "side"
        }, {
            0: {
                className: "x78zum5 x1n2onr6 xdt5ytf x5yr21d x6ikm8r x10wlt62 x1280gxy"
            },
            2: {
                className: "x78zum5 x1n2onr6 xdt5ytf x5yr21d x1280gxy x1p5oq8j xwxc41k x1g0dm76 xpdmqnj x6ikm8r x10wlt62"
            },
            1: {
                className: "x78zum5 x1n2onr6 xdt5ytf x5yr21d x6ikm8r x10wlt62 x1280gxy xd0qcmr xsh6knr x1n13l81 xv8lwpf"
            },
            3: {
                className: "x78zum5 x1n2onr6 xdt5ytf x5yr21d x1280gxy x1p5oq8j xwxc41k x1g0dm76 xpdmqnj x6ikm8r x10wlt62 xd0qcmr xsh6knr x1n13l81 xv8lwpf"
            }
        }[!!ca << 1 | !!ca << 0], {
            ref: PtRef,
            children: [
                <Component_1 name="app-header">{pa}</Component_1>,
                <Component_3 name="chat-list" type="fatal"><Component_2 flatListControllers={[
                    wtRef.current
                ]} ref={Do} className={{
                    0: {
                        className: "x1vjfegm x78zum5 xdt5ytf x1iyjqo2 x1odjw0f x1280gxy"
                    },
                    2: {
                        className: "x1vjfegm x78zum5 xdt5ytf x1iyjqo2 x1odjw0f x1280gxy x5u1c9j"
                    },
                    1: {
                        className: "x1vjfegm x78zum5 xdt5ytf x1iyjqo2 x1odjw0f x1280gxy xe09je3 x1rohswg xfk6m8"
                    },
                    3: {
                        className: "x1vjfegm x78zum5 xdt5ytf x1iyjqo2 x1odjw0f x1280gxy x5u1c9j xe09je3 x1rohswg xfk6m8"
                    }
                }[!!o("WAWebStylesEnv").hasSafariFix << 1 | (mode === r("WAWebChatlistPanelMode").CommandPalette) << 0].className} onScroll={onScroll} id="pane-side" data-scrolltracepolicy="wa.web.chatlist">{La}{!r("WAWebEnvironment").isWindows && ya}{Da}{Yo}{ta}{ua}{mode === r("WAWebChatlistPanelMode").Chatlist && (Ea ?? Ia)}{mode === r("WAWebChatlistPanelMode").CallsTab && Ta}</Component_2></Component_3>,
                <Component_4 name="out-of-chat-player">{re.jsx(r("WAWebPttOocPlayer"), {})}</Component_4>,
                <Component_5 name="chat-list-toastbar">{Jo ?? null}</Component_5>
            ]
        })}/>;
    }
    TeComponent.displayName = `${TeComponent.name} [from ${i.id}]`;
    function De(e) {
        const t = o("react-compiler-runtime").c(3);
        const n = r("useWAWebStableCallback")(e);
        let a;
        if (t[0] !== e || t[1] !== n) {
            a = o("WAWebABProps").getABPropConfigValue("web_memlab_fixes_4") ? n : e;
            t[0] = e;
            t[1] = n;
            t[2] = a;
        } else {
            a = t[2];
        }
        return a;
    }
    l.filterVisibleGlobalSearchMessages = ge;
    l.getFiltersWhichArchivedChats = Ee;
    l.ChatlistPanelFunctional = TeComponent;
}, 226);