__d("WAWebChatListSearch.react", [
    "fbt",
    "$InternalEnum",
    "Keys",
    "WALogger",
    "WAWebBotFrontendUtils",
    "WAWebBotGating",
    "WAWebChatEntryPoint",
    "WAWebChatListFilterLabelsDropdownMenu.react",
    "WAWebChatSearchFilters",
    "WAWebChatlistPanelMode",
    "WAWebChatlistUtils",
    "WAWebCmd",
    "WAWebConnGetters",
    "WAWebConnModel",
    "WAWebDropdownItem.react",
    "WAWebFbtCommon",
    "WAWebFeatureFlagName",
    "WAWebFilterIcon.react",
    "WAWebFilterLogging",
    "WAWebFlex.react",
    "WAWebHeaderInfoPanelActions",
    "WAWebInboxFiltersGatingUtils",
    "WAWebL10NIsUsingSupportedBritishEnglishLocale",
    "WAWebLabelCollection",
    "WAWebListsLabelGatingUtils",
    "WAWebMessageYourselfMetricUtils",
    "WAWebMsgCollection",
    "WAWebResolveBotProfile",
    "WAWebSearchUserJourneyLogger",
    "WAWebSearchZeroState.react",
    "WAWebTabOrder",
    "WAWebUim",
    "WAWebUimUie.react",
    "WAWebUseRecentlySearchedChats",
    "WAWebVelocityTransitionGroup",
    "WAWebWamEnumProfileEntryPoint",
    "WAWebWamEnumSearchUjCriteriaType",
    "WAWebWamEnumSearchUjDismissType",
    "WAWebWamEnumSearchUjItemType",
    "WDSButton.react",
    "WDSIconIcAccountCircleOff.react",
    "WDSIconIcPerson.react",
    "WDSIconIcUnread.react",
    "WDSIconWdsIcCalendarSearch.react",
    "WDSIconWdsIcCommunities.react",
    "WDSIconWdsIcLogoMetaAiColor.react",
    "WDSIconWdsIcTransferOwnership.react",
    "WDSSearchBar.react",
    "getErrorSafe",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebGetFeatureFlag",
    "useWAWebListener",
    "useWAWebOnUnmount",
    "useWAWebStableCallback",
    "useWAWebTimeout",
    "useWAWebUIM"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    let f;
    let g;
    const h = [
        "ref"
    ];
    let y;
    let C;
    const b = C || (C = o("react"));
    const v = C;
    const { useDeferredValue, useEffect, useImperativeHandle, useRef, useState, useTransition } = v;
    const T = {
        marginInlineEnd10: {
            marginInlineEnd: "x1sa5p1d",
            $$css: true
        },
        marginTop7: {
            marginTop: "x1rhet7l",
            $$css: true
        }
    };
    const D = {
        icon: {
            width: "xvy4d1p",
            fill: "x117rol3",
            $$css: true
        },
        iconButton: {
            color: "xhslqc4",
            $$css: true
        },
        chatlistFilterEnabled: {
            paddingInlineEnd: "xyri2b",
            $$css: true
        },
        listSearch: {
            position: "x1n2onr6",
            zIndex: "x11uqc5h",
            boxSizing: "x9f619",
            display: "x78zum5",
            flex: "x1okw0bk",
            alignItems: "x6s0dn4",
            height: "xdj0cbh",
            paddingTop: "xexx8yu",
            paddingInlineEnd: "xde1mab",
            paddingBottom: "x18d9i69",
            paddingInlineStart: "x1iw51ew",
            backgroundColor: "x1280gxy",
            borderBottomWidth: "x1qhh985",
            borderBottomStyle: "x1sy0etr",
            $$css: true
        },
        container: {
            paddingInlineStart: "x1phvje8",
            paddingInlineEnd: "xcldk2z",
            alignItems: "x7a106z",
            marginBottom: "x4tpdpg",
            $$css: true
        }
    };
    const x = n("$InternalEnum").Mirrored([
        "CHAT_MSG_SEARCH",
        "NEW_CHAT_CONTACT_SEARCH",
        "FORWARD_MSG_SEARCH",
        "NEWSLETTER_SEARCH"
    ]);
    const $ = [
        x.CHAT_MSG_SEARCH,
        x.NEW_CHAT_CONTACT_SEARCH,
        x.NEWSLETTER_SEARCH
    ];
    const P = function() {};
    function NComponent(e) {
        const t = o("react-compiler-runtime").c(14);
        const { icon, iconContainerClass, kind, label, onClick } = e;
        const s = `chat_filter_${kind || ""}`;
        let u;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            u = {
                className: "x9f619 x78zum5 x6s0dn4 x193iq5w x16ovd2e x1evaxtz x12xbjc7 xb0esv5 x6ikm8r x10wlt62 xhslqc4 x1ypdohk"
            };
            t[0] = u;
        } else {
            u = t[0];
        }
        let c;
        if (t[1] !== icon || t[2] !== iconContainerClass) {
            c = <div className={iconContainerClass}>{icon}</div>;
            t[1] = icon;
            t[2] = iconContainerClass;
            t[3] = c;
        } else {
            c = t[3];
        }
        let d;
        if (t[4] === Symbol.for("react.memo_cache_sentinel")) {
            d = {
                className: "x150mmf0 x1f6kntn x1o2sk6j"
            };
            t[4] = d;
        } else {
            d = t[4];
        }
        let m;
        if (t[5] !== label) {
            m = <div {...babelHelpers.extends({}, d, {
                children: label
            })}/>;
            t[5] = label;
            t[6] = m;
        } else {
            m = t[6];
        }
        let p;
        if (t[7] !== c || t[8] !== m) {
            p = <div {...babelHelpers.extends({}, u, {
                children: [
                    c,
                    m
                ]
            })}/>;
            t[7] = c;
            t[8] = m;
            t[9] = p;
        } else {
            p = t[9];
        }
        let _;
        if (t[10] !== s || t[11] !== onClick || t[12] !== p) {
            const Component = o("WAWebDropdownItem.react").DropdownItem;
            _ = <Component action={onClick} testid={s}>{p}</Component>;
            t[10] = s;
            t[11] = onClick;
            t[12] = p;
            t[13] = _;
        } else {
            _ = t[13];
        }
        return _;
    }
    function M(e) {
        const t = o("react-compiler-runtime").c(27);
        const e_updateSearchFilter = e.updateSearchFilter;
        const a = [];
        let i;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            i = b.jsx(r("WDSIconIcUnread.react"), {
                height: 24,
                width: 24,
                testid: "search-unread",
                iconXstyle: D.icon
            });
            t[0] = i;
        } else {
            i = t[0];
        }
        let l;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            l = s._("Unread chats");
            t[1] = l;
        } else {
            l = t[1];
        }
        let u;
        if (t[2] !== e_updateSearchFilter) {
            u = <NComponent key="unread" icon={i} kind={o("WAWebChatSearchFilters").SearchFilters.UNREAD} label={l} onClick={function() {
                return e_updateSearchFilter({
                    kind: o("WAWebChatSearchFilters").SearchFilters.UNREAD
                });
            }}/>;
            t[2] = e_updateSearchFilter;
            t[3] = u;
        } else {
            u = t[3];
        }
        a.push(u);
        if (o("WAWebInboxFiltersGatingUtils").inboxFavoritesEnabled()) {
            let c;
            if (t[4] === Symbol.for("react.memo_cache_sentinel")) {
                c = b.jsx(r("WDSIconIcPerson.react"), {
                    iconXstyle: D.icon
                });
                t[4] = c;
            } else {
                c = t[4];
            }
            let d;
            if (t[5] === Symbol.for("react.memo_cache_sentinel")) {
                d = s._("Favourites");
                t[5] = d;
            } else {
                d = t[5];
            }
            let m;
            if (t[6] !== e_updateSearchFilter) {
                m = <NComponent key="favorites" icon={c} kind={o("WAWebChatSearchFilters").SearchFilters.FAVORITES} label={d} onClick={function() {
                    return e_updateSearchFilter({
                        kind: o("WAWebChatSearchFilters").SearchFilters.FAVORITES
                    });
                }}/>;
                t[6] = e_updateSearchFilter;
                t[7] = m;
            } else {
                m = t[7];
            }
            a.push(m);
        }
        const enabled = r("useWAWebGetFeatureFlag")(o("WAWebFeatureFlagName").FeatureFlagName.CHAT_ASSIGNMENT).enabled;
        if (enabled) {
            let _;
            let iconContainerClass;
            if (t[8] === Symbol.for("react.memo_cache_sentinel")) {
                _ = b.jsx(r("WDSIconWdsIcTransferOwnership.react"), {
                    iconXstyle: D.icon
                });
                iconContainerClass = "x1n2onr6 x1xf60ip";
                t[8] = _;
                t[9] = iconContainerClass;
            } else {
                _ = t[8];
                iconContainerClass = t[9];
            }
            let g;
            if (t[10] === Symbol.for("react.memo_cache_sentinel")) {
                g = s._("Assigned to you");
                t[10] = g;
            } else {
                g = t[10];
            }
            let h;
            if (t[11] !== e_updateSearchFilter) {
                h = <NComponent key="assigned-to-you" icon={_} iconContainerClass={iconContainerClass} kind={o("WAWebChatSearchFilters").SearchFilters.ASSIGNED_TO_YOU} label={g} onClick={function() {
                    return e_updateSearchFilter({
                        kind: o("WAWebChatSearchFilters").SearchFilters.ASSIGNED_TO_YOU
                    });
                }}/>;
                t[11] = e_updateSearchFilter;
                t[12] = h;
            } else {
                h = t[12];
            }
            a.push(h);
        }
        if (o("WAWebListsLabelGatingUtils").smartFiltersEnabled()) {
            let y;
            if (t[13] === Symbol.for("react.memo_cache_sentinel")) {
                y = b.jsx(r("WDSIconIcPerson.react"), {
                    iconXstyle: D.icon
                });
                t[13] = y;
            } else {
                y = t[13];
            }
            let C;
            if (t[14] === Symbol.for("react.memo_cache_sentinel")) {
                C = s._("Contacts");
                t[14] = C;
            } else {
                C = t[14];
            }
            let v;
            if (t[15] !== e_updateSearchFilter) {
                v = <NComponent key="contact" icon={y} kind={o("WAWebChatSearchFilters").SearchFilters.CONTACT} label={C} onClick={function() {
                    return e_updateSearchFilter({
                        kind: o("WAWebChatSearchFilters").SearchFilters.CONTACT
                    });
                }}/>;
                t[15] = e_updateSearchFilter;
                t[16] = v;
            } else {
                v = t[16];
            }
            let S;
            if (t[17] === Symbol.for("react.memo_cache_sentinel")) {
                S = b.jsx(r("WDSIconIcAccountCircleOff.react"), {
                    iconXstyle: D.icon
                });
                t[17] = S;
            } else {
                S = t[17];
            }
            let R;
            if (t[18] === Symbol.for("react.memo_cache_sentinel")) {
                R = s._("Non-contacts");
                t[18] = R;
            } else {
                R = t[18];
            }
            let L;
            if (t[19] !== e_updateSearchFilter) {
                L = <NComponent key="non_contact" icon={S} kind={o("WAWebChatSearchFilters").SearchFilters.NON_CONTACT} label={R} onClick={function() {
                    return e_updateSearchFilter({
                        kind: o("WAWebChatSearchFilters").SearchFilters.NON_CONTACT
                    });
                }}/>;
                t[19] = e_updateSearchFilter;
                t[20] = L;
            } else {
                L = t[20];
            }
            a.push(v, L);
        }
        let E;
        if (t[21] === Symbol.for("react.memo_cache_sentinel")) {
            E = b.jsx(r("WDSIconWdsIcCommunities.react"), {
                height: 24,
                width: 24,
                iconXstyle: D.icon
            });
            t[21] = E;
        } else {
            E = t[21];
        }
        let k;
        if (t[22] === Symbol.for("react.memo_cache_sentinel")) {
            k = s._("Groups");
            t[22] = k;
        } else {
            k = t[22];
        }
        let I;
        if (t[23] !== e_updateSearchFilter) {
            I = <NComponent key="group" icon={E} kind={o("WAWebChatSearchFilters").SearchFilters.GROUP} label={k} onClick={function() {
                return e_updateSearchFilter({
                    kind: o("WAWebChatSearchFilters").SearchFilters.GROUP
                });
            }}/>;
            t[23] = e_updateSearchFilter;
            t[24] = I;
        } else {
            I = t[24];
        }
        a.push(I);
        let T;
        if (t[25] === Symbol.for("react.memo_cache_sentinel")) {
            T = {
                className: "x889kno xsfy40s x1a8lsjc x13jy36j x14ug900"
            };
            t[25] = T;
        } else {
            T = t[25];
        }
        let x;
        if (t[26] === Symbol.for("react.memo_cache_sentinel")) {
            x = <div {...babelHelpers.extends({}, T, {
                key: "chat_filter_kind_header"
            })}>{s._("Chats")}</div>;
            t[26] = x;
        } else {
            x = t[26];
        }
        return [
            x
        ].concat(a);
    }
    const w = {
        iconWrapper: {
            width: "x23j0i4",
            height: "xd7y6wv",
            color: "xhslqc4",
            borderStartStartRadius: "x1c9tyrk",
            borderStartEndRadius: "xeusxvb",
            borderEndEndRadius: "x1pahc9y",
            borderEndStartRadius: "x1ertn4p",
            $$css: true
        },
        iconWrapperActive: {
            color: "x67lv5d",
            backgroundColor: "xa9qhua",
            $$css: true
        }
    };
    function AComponent(e) {
        const t = o("react-compiler-runtime").c(11);
        const { active, onClick } = e;
        let a;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = o("WAWebConnGetters").getIsSMB(o("WAWebConnModel").Conn) ? s._("Chat filters menu") : s._("Unread chats filter");
            t[0] = a;
        } else {
            a = t[0];
        }
        const i = a;
        let l;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            l = {
                className: "xdj266r xqf2s3x xat24cr x150mmf0"
            };
            t[1] = l;
        } else {
            l = t[1];
        }
        const u = active && w.iconWrapperActive;
        let c;
        if (t[2] !== u) {
            c = [
                w.iconWrapper,
                u
            ];
            t[2] = u;
            t[3] = c;
        } else {
            c = t[3];
        }
        let d;
        if (t[4] === Symbol.for("react.memo_cache_sentinel")) {
            d = b.jsx(o("WAWebFilterIcon.react").FilterIcon, {
                height: 20,
                width: 20
            });
            t[4] = d;
        } else {
            d = t[4];
        }
        let m;
        if (t[5] !== c) {
            const Component = o("WAWebFlex.react").FlexRow;
            m = <Component align="center" xstyle={c} justify="center">{d}</Component>;
            t[5] = c;
            t[6] = m;
        } else {
            m = t[6];
        }
        let p;
        if (t[7] !== active || t[8] !== onClick || t[9] !== m) {
            p = <button {...babelHelpers.extends({
                "aria-label": i,
                "aria-pressed": active,
                "data-tab": o("WAWebTabOrder").TAB_ORDER.CHAT_LIST_FILTER,
                onClick,
                title: i
            }, l, {
                children: m
            })}/>;
            t[7] = active;
            t[8] = onClick;
            t[9] = m;
            t[10] = p;
        } else {
            p = t[10];
        }
        return p;
    }
    function F(t) {
        const t_ref = t.ref;
        const i = babelHelpers.objectWithoutPropertiesLoose(t, h);
        const l = r("useWAWebUIM")();
        const i_loading = i.loading;
        const v = i_loading === undefined ? false : i_loading;
        const { ariaLabel, placeholder, spellCheck, listFilterEnabled } = i;
        const B = listFilterEnabled === undefined ? false : listFilterEnabled;
        const { onSearch, type, showPlaceholderUntilType } = i;
        const V = showPlaceholderUntilType === undefined ? false : showPlaceholderUntilType;
        const { filterSession, chatlistFilterEnabled } = i;
        const z = chatlistFilterEnabled === undefined ? false : chatlistFilterEnabled;
        const i_mode = i.mode;
        const K = i_mode === undefined ? r("WAWebChatlistPanelMode").Chatlist : i_mode;
        const { actionElem, focusOnMount } = i;
        const autoFocus = focusOnMount === undefined ? false : focusOnMount;
        const i_inboxFiltersEnabled = i.inboxFiltersEnabled;
        const Z = i_inboxFiltersEnabled === undefined ? false : i_inboxFiltersEnabled;
        const { inboxFilter, showJumpToDateButton, onJumpToDateButtonClicked, onBackButton, onSearchInputFocus, handleKeyDown, usernameSearchEnabled } = i;
        const le = usernameSearchEnabled === undefined ? false : usernameSearchEnabled;
        const i_searchZeroStateAllowed = i.searchZeroStateAllowed;
        const ue = i_searchZeroStateAllowed === undefined ? false : i_searchZeroStateAllowed;
        const i_askMetaAiButtonAllowed = i.askMetaAiButtonAllowed;
        const de = i_askMetaAiButtonAllowed === undefined ? false : i_askMetaAiButtonAllowed;
        const meRef = useRef(null);
        const peRef = useRef(null);
        const _eRef = useRef(null);
        const fe = useState("");
        const ge = fe[0];
        const he = fe[1];
        const ye = useState(null);
        const Ce = ye[0];
        const be = ye[1];
        const ve = useState(false);
        const Se = ve[0];
        const Re = ve[1];
        const Le = useState(null);
        const Ee = Le[0];
        const ke = Le[1];
        const Ie = useTransition();
        const Te = Ie[1];
        const De = o("WAWebUseRecentlySearchedChats").useRecentlySearchedChats();
        const { clearAllRecentSearches, recentChats } = De;
        const PeRef = useRef(null);
        const NeRef = useRef(null);
        const Me = inboxFilter?.label ?? null;
        const kind = Z ? inboxFilter?.kind : Ce;
        const Ae = !!(kind || Me);
        const Fe = useState(false);
        const Oe = Fe[0];
        const Be = Fe[1];
        const We = ue && (Se || Oe) && !Ae && !ge && recentChats.length > 0;
        const qe = useDeferredValue(We);
        const Ue = We && qe;
        const clearSearch = function() {
            const meRef_current = meRef.current;
            if (!(!meRef_current || Ee)) {
                he("");
            }
        };
        const He = r("useWAWebStableCallback")(function() {
            clearSearch();
            if (K === r("WAWebChatlistPanelMode").Chatlist) {
                meRef.current?.blur();
                Re(false);
            }
            if (!z && !Z) {
                be(null);
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[ChatListSearch] handleCancel: clear (no filters)"
                ])));
                onSearch("");
            } else {
                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[ChatListSearch] handleCancel: clear kind=",
                    " label=",
                    ""
                ])), kind ?? "none", !!Me);
                onSearch("", {
                    kind,
                    label: Me
                });
            }
            o("WAWebSearchUserJourneyLogger").SearchUserJourneyLogger.dismiss(o("WAWebWamEnumSearchUjDismissType").SEARCH_UJ_DISMISS_TYPE.OTHER);
        });
        const Ge = useState(null);
        const ze = Ge[0];
        const je = Ge[1];
        o("useWAWebListener").useListener(ze, "keydown", function(e) {
            if (e.keyCode === r("Keys").ESC) {
                if (!(e.target instanceof HTMLInputElement)) {
                    e.stopPropagation();
                    He();
                }
            }
        });
        o("useWAWebListener").useListener(o("WAWebMsgCollection").MsgCollection, "new_msg_sent", function() {
            if (Ae) {
                He();
            }
        });
        useEffect(function() {
            if (!(!Se || ge || Ae)) {
                const e = peRef.current;
                if (!e || !e.contains(e.ownerDocument.activeElement)) {
                    He();
                }
            }
        }, [
            ge,
            Ae,
            Se,
            He
        ]);
        useEffect(function() {
            if (Se && !ge && !Ae) {
                o("WAWebSearchUserJourneyLogger").SearchUserJourneyLogger.nullStateShow(recentChats.length);
            }
        }, [
            Ae,
            Se,
            recentChats.length,
            ge
        ]);
        r("useWAWebOnUnmount")(He);
        const KeRef = useRef(null);
        const Qe = o("useWAWebTimeout").useManualTimeout(function() {
            let e;
            const KeRef_current = KeRef.current;
            KeRef.current = null;
            const n = (e = PeRef.current) == null || e.getElement == null ? undefined : e.getElement();
            if (n != null && KeRef_current instanceof HTMLElement && n.contains(KeRef_current)) {
                Be(true);
                Re(false);
                return;
            }
            if (!ge) {
                o("WAWebSearchUserJourneyLogger").SearchUserJourneyLogger.dismiss(o("WAWebWamEnumSearchUjDismissType").SEARCH_UJ_DISMISS_TYPE.OTHER);
            }
            Re(false);
        });
        const Xe = Qe[0];
        const Ye = Qe[1];
        const Je = function(t) {
            if (t.relatedTarget != null) {
                if (!EtRef.current) {
                    KeRef.current = t.relatedTarget;
                    Xe(0);
                }
            }
        };
        const Ze = function() {
            Be(false);
        };
        const et = (t)=>{
            if (t.keyCode === r("Keys").DOWN && Ue) {
                PeRef.current?.focus();
                Be(true);
                t.preventDefault();
                return;
            }
            handleKeyDown?.(t);
            if (t.keyCode !== r("Keys").ESC) {
                return false;
            }
            He();
            return true;
        };
        const tt = function(t) {
            if (t.keyCode === r("Keys").RETURN) {
                if (i.onEnter != null) {
                    i.onEnter(t);
                }
            }
            if (t.keyCode === r("Keys").ESC) {
                t.stopPropagation();
            }
            et(t);
        };
        const onClear = function() {
            o("WAWebSearchUserJourneyLogger").SearchUserJourneyLogger.dismiss(o("WAWebWamEnumSearchUjDismissType").SEARCH_UJ_DISMISS_TYPE.OTHER);
        };
        const rt = function(t) {
            const e = typeof t === "string" ? t : t.text;
            he(e);
            if (e) {
                o("WAWebSearchUserJourneyLogger").SearchUserJourneyLogger.searchStart(i.tsSurface, o("WAWebWamEnumSearchUjCriteriaType").SEARCH_UJ_CRITERIA_TYPE.TEXT_MATCH_FILTER);
            }
            o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "[ChatListSearch] handleChange: text=",
                " label=",
                " kind=",
                ""
            ])), !!e, !!Me, kind ?? "none");
            Te(function() {
                onSearch(e, {
                    label: Me,
                    kind
                });
            });
        };
        const ot = ()=>{
            ke(null);
        };
        const updateSearchFilter_1 = function(t) {
            if (Ee) {
                ot();
            }
            be(t.kind ?? null);
            if (filterSession) {
                o("WAWebFilterLogging").logSelectFilterEvent(filterSession.sessionId, t);
            }
            o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                "[ChatListSearch] updateSearchFilter: text=",
                " kind=",
                " label=",
                ""
            ])), !!ge, t.kind ?? "none", !!t.label);
            onSearch(ge, t);
        };
        const it = function() {
            Ye();
            const NeRef_current = NeRef.current;
            if (NeRef_current) {
                NeRef_current.style.display = "";
            }
            meRef.current?.focus();
            Re(true);
            Be(false);
        };
        const lt = function() {
            Ye();
            if (K === r("WAWebChatlistPanelMode").Chatlist || type === x.FORWARD_MSG_SEARCH) {
                o("WAWebMessageYourselfMetricUtils").UiMessageYourselfSearchAction.startSession();
                o("WAWebMessageYourselfMetricUtils").UiMessageYourselfSearchAction.searchBarPressed();
            } else if (type === x.NEW_CHAT_CONTACT_SEARCH) {
                o("WAWebMessageYourselfMetricUtils").UiMessageYourselfNewChatAction.searchBarPressed();
            }
            it();
            onSearchInputFocus?.();
            o("WAWebSearchUserJourneyLogger").SearchUserJourneyLogger.searchCtaClicked(i.tsSurface);
        };
        const StComponent = (t)=>{
            if (filterSession) {
                o("WAWebFilterLogging").logOpenFilterEvent(filterSession.newSessionId());
            }
            t.stopPropagation();
            const updateSearchFilter = function(label) {
                o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[ChatListSearch] showFilterSelector: label filter"
                ])));
                updateSearchFilter_1({
                    label,
                    kind: o("WAWebChatSearchFilters").SearchFilters.LABELS
                });
            };
            ke({
                menu: <>{type !== x.CHAT_MSG_SEARCH ? <M updateSearchFilter={updateSearchFilter_1}/> : null}{b.jsx(r("WAWebChatListFilterLabelsDropdownMenu.react"), {
                    updateSearchFilter
                })}</>,
                anchor: t.target
            });
        };
        const ut = function(t) {
            if (Ae) {
                o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[ChatListSearch] handleChatlistFilterButtonClick: clear"
                ])));
                updateSearchFilter_1({
                    kind: null,
                    label: null
                });
                return;
            }
            if (!o("WAWebConnGetters").getIsSMB(o("WAWebConnModel").Conn)) {
                o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[ChatListSearch] handleChatlistFilterButtonClick: UNREAD"
                ])));
                updateSearchFilter_1({
                    kind: o("WAWebChatSearchFilters").SearchFilters.UNREAD
                });
                return;
            }
            StComponent(t);
        };
        const cursorIsAtEnd = function() {
            const meRef_current = meRef.current;
            if (meRef_current == null) {
                return false;
            }
            return meRef_current.selectionEnd === meRef_current.value.length;
        };
        const select = function() {
            meRef.current?.select();
        };
        const clearFilter = function() {
            o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                "[ChatListSearch] clearFilter: clear"
            ])));
            updateSearchFilter_1({
                kind: null,
                label: null
            });
        };
        const getCalendarElementRef = function() {
            return _eRef;
        };
        const hasFocus = function() {
            return Se;
        };
        const dismissZeroState = function() {
            const NeRef_current = NeRef.current;
            if (NeRef_current) {
                NeRef_current.style.display = "none";
            }
            Re(false);
            Be(false);
        };
        useImperativeHandle(t_ref, function() {
            return {
                cursorIsAtEnd,
                select,
                focus: it,
                clearSearch,
                clearFilter,
                dismissZeroState,
                getCalendarElementRef,
                hasFocus
            };
        });
        let gt;
        if (Se) {
            gt = b.jsx(o("WAWebUimUie.react").UIE, {
                displayName: "ListSearch",
                escapable: true,
                requestDismiss: He,
                requestFocus: it,
                requestRecentFocusOnUnmount: false,
                uimState: o("WAWebUim").UIMState.PASSIVE
            });
        }
        const ht = (y || (y = r("stylex")))([
            D.listSearch,
            z && D.chatlistFilterEnabled,
            (K === r("WAWebChatlistPanelMode").Chatlist || K === r("WAWebChatlistPanelMode").CallsTab) && D.container
        ]);
        const yt = !ge && (V || !Se || Ae || K === r("WAWebChatlistPanelMode").CommandPalette);
        let Ct = null;
        if (yt) {
            if (placeholder != null) {
                Ct = placeholder;
            } else if (K === r("WAWebChatlistPanelMode").Chatlist && (type == null || !$.includes(type)) && kind == null) {
                Ct = de && o("WAWebBotGating").isAiSearchAskButtonEnabled() ? s._("Ask Meta AI or Search") : s._("Search or start a new chat");
            } else if (K === r("WAWebChatlistPanelMode").CommandPalette) {
                Ct = s._("Search chats, contacts and settings");
            } else if (K === r("WAWebChatlistPanelMode").CallsTab) {
                Ct = le ? r("WAWebFbtCommon")("Search name, number or @username") : r("WAWebFbtCommon")("Search name or number");
            } else if (Me != null) {
                Ct = s._("Search in {labelName}...", [
                    s._param("labelName", o("WAWebLabelCollection").LabelCollection.assertGet(Me).name)
                ]);
            } else if (kind === o("WAWebChatSearchFilters").SearchFilters.GROUP) {
                Ct = Z ? s._("Search group chats") : s._("Search in groups");
            } else if (kind === o("WAWebChatSearchFilters").SearchFilters.COMMUNITY) {
                Ct = s._("Search community chats");
            } else if (kind === o("WAWebChatSearchFilters").SearchFilters.UNREAD) {
                Ct = s._("Search unread chats");
            } else if (kind === o("WAWebChatSearchFilters").SearchFilters.LABELS) {
                Ct = s._("Search labelled chats");
            } else if (kind === o("WAWebChatSearchFilters").SearchFilters.FAVORITES) {
                Ct = o("WAWebL10NIsUsingSupportedBritishEnglishLocale").isUsingSupportedBritishEnglishLocale() ? s._("Search favourite chats") : s._("Search favourite chats");
            } else if (kind === o("WAWebChatSearchFilters").SearchFilters.TO_YOU) {
                Ct = s._("Search mentions and replies");
            } else if (kind === o("WAWebChatSearchFilters").SearchFilters.BROADCAST) {
                Ct = s._("Search in broadcast lists");
            } else if (kind === o("WAWebChatSearchFilters").SearchFilters.CONTACT) {
                Ct = Z ? s._("Search chats with contacts") : s._("Search in chats with contacts");
            } else if (kind === o("WAWebChatSearchFilters").SearchFilters.NON_CONTACT) {
                Ct = s._("Search in chats with non contacts");
            } else if (kind === o("WAWebChatSearchFilters").SearchFilters.ASSIGNED_TO_YOU) {
                Ct = s._("Search chats assigned to you");
            } else {
                Ct = r("WAWebFbtCommon")("Search");
            }
        }
        const bt = de && ge.trim().length > 0 && !Ae && o("WAWebBotGating").isAiSearchAskButtonEnabled();
        const vt = function() {
            const e = ge.trim();
            if (e.length !== 0) {
                o("WAWebBotFrontendUtils").sendMetaBotQuery(e, o("WAWebChatEntryPoint").ChatEntryPoint.MetaAISearchAskButton).catch((e)=>{
                    o("WALogger").ERROR(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                        "Failed to send Meta AI query"
                    ]))).catching(r("getErrorSafe")(e)).sendLogs("meta-ai-search-ask-fail");
                });
                He();
            }
        };
        const endAccessory = bt ? {
            kind: "chip",
            props: {
                Icon: r("WDSIconWdsIcLogoMetaAiColor.react"),
                label: s._("Ask"),
                isNeutral: true,
                onPress: vt,
                tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_LIST_SEARCH,
                testid: "ask-meta-ai-pill",
                "aria-label": s._("Ask Meta AI")
            }
        } : undefined;
        const Rt = function(t, n) {
            o("WAWebSearchUserJourneyLogger").SearchUserJourneyLogger.nullStateItemClick(o("WAWebWamEnumSearchUjItemType").SEARCH_UJ_ITEM_TYPE.RECENT_SEARCH_INDIVIDUAL_SUGGESTION, n, recentChats.length);
            if (o("WAWebResolveBotProfile").shouldHideMuseBotFromCachedProfile(t.id)) {
                o("WAWebHeaderInfoPanelActions").openInfoPanel({
                    chat: t,
                    profileEntryPoint: o("WAWebWamEnumProfileEntryPoint").PROFILE_ENTRY_POINT.SEARCH,
                    uim: l
                });
                He();
                return;
            }
            o("WAWebChatlistUtils").openExistingChat(t.id).then(()=>{
                o("WAWebCmd").Cmd.scrollToActiveChat();
                He();
            });
        };
        const onClearAll = function() {
            o("WAWebSearchUserJourneyLogger").SearchUserJourneyLogger.recentSearchesClearAllClick();
            clearAllRecentSearches();
        };
        var EtRef = useRef(false);
        const onSetShowingClearConfirmation = function(t) {
            EtRef.current = t;
        };
        const Component = r("WDSButton.react");
        const Component_1 = r("WDSSearchBar.react");
        const Component_2 = r("WAWebSearchZeroState.react");
        const Component_3 = r("WAWebVelocityTransitionGroup");
        return <><div className={ht} data-testid="chat-list-search-container" ref={peRef}>{showJumpToDateButton === true && <Component Icon={r("WDSIconWdsIcCalendarSearch.react")} xstyle={[
            T.marginInlineEnd10,
            T.marginTop7,
            D.iconButton
        ]} onPress={onJumpToDateButtonClicked ?? P} aria-label={s._("Jump to date")} variant="borderless"/>}<div ref={je} className="x1n2onr6 x9f619 x98rzlu x1plvlek xryxfnj"><div className="x1gxa6cn xa0aww2"><Component_1 autoFocus={autoFocus} ref={meRef} endAccessory={endAccessory} testid={type === x.CHAT_MSG_SEARCH ? "chat_thread_message_search_bar" : "chat_list_search_bar"} gpuAnimationEnabled hintText={yt ? String(Ct) : ""} loading={v} onBlur={Je} onClear={onClear} onFocus={lt} onKeyDown={tt} onValueChange={rt} tabOrder={o("WAWebTabOrder").TAB_ORDER.CHAT_LIST_SEARCH} value={ge}/></div></div>{z && <AComponent active={Ae} onClick={ut}/>}{actionElem}{gt}</div><div ref={NeRef}><Component_3 transitionName="ai-search-suggestions">{Ue ? <Component_2 onBlur={Ze} recentChats={recentChats} onChatClick={Rt} onClearAll={onClearAll} onKeyDown={handleKeyDown} onSearchFocus={it} onSetShowingClearConfirmation={onSetShowingClearConfirmation} ref={PeRef}/> : null}</Component_3></div></>;
    }
    F.displayName = `${F.name} [from ${i.id}]`;
    const O = F;
    l.ListSearchType = x;
    l.ListSearch = O;
}, 226);