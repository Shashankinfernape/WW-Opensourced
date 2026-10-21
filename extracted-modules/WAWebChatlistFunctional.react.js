__d("WAWebChatlistFunctional.react", [
    "fbt",
    "Promise",
    "WAWebABProps",
    "WAWebBizAiAgentChatDisabledUtils",
    "WAWebBizAiAgentGating",
    "WAWebBotFrontendUtils",
    "WAWebBotGating",
    "WAWebCallLogUtils",
    "WAWebChatCollection",
    "WAWebChatGetters",
    "WAWebChatLisFunctionalPageNav.react",
    "WAWebChatLockUtils",
    "WAWebChatModel",
    "WAWebChatSearchFilters",
    "WAWebChatlistItem.react",
    "WAWebChatlistPanelMode",
    "WAWebChatlistPinnedDivider",
    "WAWebChatlistTypes",
    "WAWebCmd",
    "WAWebContactModel",
    "WAWebContactUtils",
    "WAWebDisappearingMessageKeepInChatWamEvent",
    "WAWebEnvironment",
    "WAWebEventUtils",
    "WAWebFavoriteCollection",
    "WAWebFavoritesUtils",
    "WAWebFlatList.react",
    "WAWebFocusTracer",
    "WAWebFrontendMsgGetters",
    "WAWebInboxFiltersGatingUtils",
    "WAWebKeyboardHotKeys.react",
    "WAWebKeyboardTabUtils",
    "WAWebListUtils",
    "WAWebListsGatingUtils",
    "WAWebManageAiHandoffButton.react",
    "WAWebManageListButton.react",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebMuteCollection",
    "WAWebMuteGetters",
    "WAWebNonContactPushNameSearchModel",
    "WAWebNoop",
    "WAWebOrgMemberSearchRows",
    "WAWebOutContactModel",
    "WAWebTabOrder",
    "WAWebTextSizeUtils",
    "WAWebTimeSpentLoggingNavigation",
    "WAWebUim",
    "WAWebUimUie.react",
    "WAWebUseRecentlySearchedChats",
    "WAWebVoipCallsTabCallInfoUtils",
    "WAWebVoipCallsTabPanelManager",
    "WAWebVoipOngoingCallCollection",
    "WAWebWamEnumKicActionNameType",
    "asyncToGeneratorRuntime",
    "gkx",
    "nullthrows",
    "react",
    "useWAWebCallsTabCallLogVisibilityChange",
    "useWAWebChatlistRowHeight",
    "useWAWebEventTargetValue",
    "useWAWebIncomingCall",
    "useWAWebIsKeyboardUser",
    "useWAWebListener"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    const d = u;
    const { useCallback, useDeferredValue, useEffect, useImperativeHandle, useMemo, useRef, useState } = d;
    const extraItems = r("gkx")("9220") ? 6 : 30;
    const b = 44;
    const v = 48;
    const S = 56;
    const R = 56;
    const L = 61;
    const E = {
        flatListViewport: {
            paddingTop: "x16ovd2e",
            $$css: true
        }
    };
    const getDefaultHeight = function() {
        const height = o("WAWebTextSizeUtils").getWAWebTextSizeStyles().height;
        return height + 4;
    };
    const getDetailImageSize = function() {
        return o("WAWebTextSizeUtils").getWAWebTextSizeStyles().detailImageSize;
    };
    const T = [];
    const D = [];
    const x = [];
    const $ = [];
    function P(t) {
        "use no forget";
        const { actions, chats } = t;
        const P = chats === undefined ? T : chats;
        const { chatSearchMatches, commonGroups } = t;
        const w = commonGroups === undefined ? D : commonGroups;
        const { communities, contacts, contactSearchMatches, debugCommands, filterPreset, flatListController, ftsResult, isSearching, isSearchInputFocused, messages, mode, multiSelection, nonContactPushnames } = t;
        const Q = nonContactPushnames === undefined ? x : nonContactPushnames;
        const { onFocusAfterLast, onFocusSearch, onItemClick, onRetryOrgMemberSearch } = t;
        const handleRetryOrgMemberSearch = onRetryOrgMemberSearch === undefined ? r("WAWebNoop") : onRetryOrgMemberSearch;
        const { onStartMultiSelect, orgMemberSections } = t;
        const re = orgMemberSections === undefined ? o("WAWebOrgMemberSearchRows").EMPTY_ORG_RENDER_SECTIONS : orgMemberSections;
        const { outContacts, outContactSearchMatches, ref, searchQuery, selectableState, selection, settings } = t;
        const deRef = useRef(true);
        const meRef = useRef(null);
        const peRef = useRef(null);
        const _eRef = useRef(null);
        const feRef = useRef(null);
        const geRef = useRef(new Map);
        const heRef = useRef(null);
        const ye = useState([]);
        const Ce = ye[0];
        const be = ye[1];
        const ve = useState([]);
        const Se = ve[0];
        const Re = ve[1];
        const Le = useState(false);
        const Ee = Le[0];
        const ke = Le[1];
        const IeRef = useRef(o("WAWebChatCollection").ChatCollection.getActive());
        const Te = useState(selection?.getVal());
        const De = Te[0];
        const setSelectedChat = Te[1];
        const $e = useState(0);
        const Pe = $e[0];
        const Ne = $e[1];
        const Me = useDeferredValue(ftsResult);
        const we = useMemo(function() {
            const ftsStarred_1 = [];
            const ftsKept_1 = [];
            const ftsMessages_1 = [];
            for (const r of Me ?? []){
                if (o("WAWebChatLockUtils").chatIsAccessible(o("WAWebFrontendMsgGetters").getChat(r))) {
                    if (r.star) {
                        ftsStarred_1.push(r);
                    } else if (o("WAWebMsgGetters").getIsKept(r)) {
                        ftsKept_1.push(r);
                    } else if (o("WAWebVoipOngoingCallCollection").WAWebVoipOngoingCallCollection.getByCallId(r.id.id) == null) {
                        ftsMessages_1.push(r);
                    }
                }
            }
            return {
                ftsStarred: ftsStarred_1,
                ftsKept: ftsKept_1,
                ftsMessages: ftsMessages_1
            };
        }, [
            Me
        ]);
        const { ftsKept, ftsMessages, ftsStarred } = we;
        const mutedChats = useMemo(function() {
            if (!r("gkx")("26258") || r("gkx")("16539")) {
                return (P ?? []).filter(({ mute })=>o("WAWebMuteGetters").getIsMuted(mute));
            }
            return $;
        }, [
            P,
            Pe
        ]);
        const We = useState(!r("gkx")("26258") || r("gkx")("16539") ? o("WAWebMuteCollection").MuteCollection.getCollapseMuted() : false);
        const qe = We[0];
        const Ue = We[1];
        const Ve = useState(true);
        const mutedChatsCollapsed = Ve[0];
        const Ge = Ve[1];
        const zeRef = useRef(0);
        const je = r("useWAWebIsKeyboardUser")();
        const je_isKeyboardUser = je.isKeyboardUser;
        useEffect(function() {
            zeRef.current = o("WAWebTimeSpentLoggingNavigation").tsNavigationEnter({
                surface: "chat-list"
            });
            selection?.init(Nt());
            return function() {
                o("WAWebTimeSpentLoggingNavigation").tsNavigationExit(zeRef.current);
            };
        }, []);
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "focus_next_chat", function(e) {
            ot(null, true, e);
        });
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "focus_prev_chat", function(e) {
            rt(null, true, e);
        });
        const Qe = useCallback(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (!o("WAWebABProps").getABPropConfigValue("enable_upcoming_schedule_call_events_in_calls_tab")) {
                be([]);
                Re([]);
                return;
            }
            const t = yield (e || (e = n("Promise"))).all([
                o("WAWebEventUtils").getUpcomingEvents(),
                o("WAWebEventUtils").getUpcomingEventsForCallsTab()
            ]);
            const r = t[0];
            const a = t[1];
            const i = a.slice(0, 1);
            be(i);
            Re(r);
        }), []);
        const Xe = useCallback(function() {
            if (feRef.current && peRef.current) {
                r("WAWebFocusTracer").focus(peRef.current);
            }
        }, []);
        const handleMutedChatsBarClick = useCallback(function() {
            if (!r("gkx")("26258") || r("gkx")("16539")) {
                Ge(function(e) {
                    return !e;
                });
            }
        }, []);
        const handleChatClick = useCallback(function(e, t) {
            if (t.id.isAiHub() && o("WAWebBizAiAgentGating").isBizAiWebAgentChatDisabled()) {
                o("WAWebBizAiAgentChatDisabledUtils").openBizAiAgentChatDisabledAlert(t);
                return;
            }
            if (o("WAWebBotGating").isMetaAiChatInThreadsMode(t.id)) {
                if (isSearching) {
                    o("WAWebUseRecentlySearchedChats").addChatToRecentSearches(t.id.toString());
                }
                o("WAWebBotFrontendUtils").runMetaAiThreadsFlow(t, {
                    type: "MetaAiChat"
                });
                return;
            }
            const e_nativeEvent = e.nativeEvent;
            if (e_nativeEvent instanceof MouseEvent) {
                setSelectedChat(null);
                selection.unset();
            }
            onItemClick?.(e, t);
        }, [
            selection,
            onItemClick,
            isSearching
        ]);
        const Ze = useCallback(function(e) {
            const t = selection?.getVal();
            if (e === t) {
                if (selection != null) {
                    selection.unset();
                }
            }
            IeRef.current = null;
            setSelectedChat(e);
        }, [
            selection
        ]);
        const et = useCallback(function(e) {
            selection?.setVal(e, false);
            meRef.current = e;
        }, [
            selection
        ]);
        const tt = useCallback(function(e = 100) {
            if (feRef.current && selection && selection.index >= 0) {
                feRef.current.scrollIntoViewIfNeeded(selection.index, e);
            }
        }, [
            selection
        ]);
        const nt = useCallback(function(e) {
            tt();
            setSelectedChat(selection?.getVal());
        }, [
            selection,
            tt
        ]);
        var rt = useCallback(function(e, t, n) {
            e?.preventDefault();
            const r = selection?.prev();
            if (r != null && r > -1) {
                if (selection != null) {
                    selection.setPrev(true);
                }
                nt(n);
            }
        }, [
            selection,
            nt
        ]);
        var ot = useCallback(function(e, t, n) {
            e?.preventDefault();
            const r = selection?.next();
            if (selection?.index !== r) {
                if (selection != null) {
                    selection.setNext(true);
                }
                nt(n);
            } else if (onFocusAfterLast != null) {
                if (selection != null) {
                    selection.unset();
                }
                onFocusAfterLast(e);
            }
        }, [
            selection,
            nt,
            onFocusAfterLast
        ]);
        const at = useCallback(function(e, t, n) {
            e?.preventDefault();
            if (selection?.index !== t) {
                if (selection != null) {
                    selection.set(t, true);
                }
                nt(n);
            }
        }, [
            selection,
            nt
        ]);
        const it = useCallback(function() {
            const _eRef_current = _eRef.current;
            if (_eRef_current) {
                _eRef_current.activate();
            }
            selection?.setFirst();
            tt(0);
            setSelectedChat(selection?.getVal());
            if (mode === r("WAWebChatlistPanelMode").CommandPalette) {
                ot(undefined);
            }
        }, [
            selection,
            tt,
            mode,
            ot
        ]);
        const focusLast = useCallback(function() {
            const _eRef_current = _eRef.current;
            if (_eRef_current) {
                _eRef_current.activate();
            }
            const t = selection ? selection.list.length - 1 : -1;
            if (!(t < 0)) {
                if (selection != null) {
                    selection.setLast();
                }
                tt(t);
                setSelectedChat(selection?.getVal());
            }
        }, [
            selection,
            tt
        ]);
        const st = o("WAWebChatLisFunctionalPageNav.react").usePageNavigation({
            selection,
            setSelectedChat
        });
        const { handlePageDown, handlePageUp } = st;
        const dt = useCallback(function() {
            const IeRef_current = IeRef.current;
            if (!IeRef_current) {
                it();
                return;
            }
            const t = selection == null ? undefined : selection.list.indexOf(IeRef_current);
            if (t == null || t < 0) {
                it();
                return;
            }
            const _eRef_current = _eRef.current;
            if (_eRef_current) {
                _eRef_current.activate();
            }
            selection?.set(t, true);
            setSelectedChat(selection?.getVal());
            tt();
        }, [
            selection,
            tt,
            it
        ]);
        const mt = useCallback(function(e) {
            if (e.target === peRef.current && deRef.current && je_isKeyboardUser) {
                if (selection && selection.index < 0) {
                    dt();
                } else {
                    if (_eRef.current) {
                        _eRef.current.activate();
                    }
                    if (selection != null) {
                        selection.reset(true);
                    }
                }
                setSelectedChat(selection?.getVal());
            }
        }, [
            selection,
            dt,
            je_isKeyboardUser
        ]);
        const onPointerEventsOn = useCallback(function() {
            deRef.current = true;
        }, []);
        const onPointerEventsOff = useCallback(function() {
            deRef.current = false;
        }, []);
        const onContextMenuChange = useCallback(function(e) {
            ke(e);
        }, []);
        const gt = useCallback(function(e) {
            const peRef_current = peRef.current;
            const e_relatedTarget = e.relatedTarget;
            if (!(!e_relatedTarget || !peRef_current || !(e_relatedTarget instanceof HTMLElement) || peRef_current.contains(e_relatedTarget) || Ee)) {
                if (selection != null) {
                    selection.set(-1, false);
                }
                setSelectedChat(null);
            }
        }, [
            Ee,
            selection
        ]);
        const createPreventAutoReadProps = useCallback(function(e) {
            const activeStyleType = e === De ? "BORDER" : "DEFAULT";
            return {
                forceActive: undefined,
                activeStyleType,
                onContextMenuChange
            };
        }, [
            De,
            onContextMenuChange
        ]);
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "update_chatlist_selection", et);
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "open_chat", function({ chat, threadId }) {
            if (!(o("WAWebBotGating").isMetaAiChatInThreadsMode(chat.id) && threadId != null)) {
                IeRef.current = chat;
            }
        });
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "close_chat", function(e) {
            Ze(e);
            if (je_isKeyboardUser) {
                if (selection != null) {
                    selection.setVal(e, true);
                }
                setSelectedChat(e);
            }
        });
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "archive_chat", function({ chat }) {
            if (chat === IeRef.current) {
                IeRef.current = null;
            }
        });
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "scroll_to_active_chat", function() {
            tt(0);
        });
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "scroll_chat_list_to_top", function() {
            if (feRef.current) {
                feRef.current.scrollIntoViewIfNeeded(0, 0);
            }
        });
        o("useWAWebListener").useListener(o("WAWebChatCollection").ChatCollection, "change:muteExpiration", function() {
            if (!r("gkx")("26258") || r("gkx")("16539")) {
                Ne(function(e) {
                    return e + 1;
                });
            }
        });
        o("useWAWebListener").useListener(o("WAWebMuteCollection").MuteCollection, "change:collapseMuted", function(e) {
            if (!r("gkx")("26258") || r("gkx")("16539")) {
                Ue(e);
            }
        });
        o("useWAWebListener").useListener(r("WAWebVoipCallsTabPanelManager"), "closeCallLogInfoPanel", function() {
            if (mode === r("WAWebChatlistPanelMode").CallsTab) {
                if (selection != null) {
                    selection.unset();
                }
            }
        });
        o("useWAWebListener").useListener(o("WAWebMsgCollection").MsgCollection, [
            "add",
            "remove",
            "reset"
        ], function() {
            if (mode === r("WAWebChatlistPanelMode").CallsTab) {
                Qe();
            }
        });
        o("useWAWebListener").useListener(o("WAWebVoipOngoingCallCollection").WAWebVoipOngoingCallCollection, [
            "add",
            "remove",
            "reset"
        ], function() {
            if (mode === r("WAWebChatlistPanelMode").CallsTab) {
                Qe();
            }
        });
        useEffect(function() {
            if (mode === r("WAWebChatlistPanelMode").CallsTab) {
                Qe();
            }
        }, [
            mode,
            Qe
        ]);
        const isSelecting = r("useWAWebEventTargetValue")(selectableState, "all", function() {
            return selectableState?.isSelectable === true;
        });
        const Ct = r("useWAWebChatlistRowHeight")({
            getDefaultHeight,
            isSearching,
            isSelecting,
            mode
        });
        const { getHeightForChat, showPinnedDivider } = Ct;
        const St = useState(function() {
            return o("WAWebFavoritesUtils").getFavoriteItemsLimited(3);
        });
        const Rt = St[0];
        const Lt = St[1];
        o("useWAWebListener").useListener(o("WAWebFavoriteCollection").FavoriteCollection, [
            "add",
            "remove",
            "change"
        ], function() {
            Lt(o("WAWebFavoritesUtils").getFavoriteItemsLimited(3));
        });
        const EtRef = useRef();
        const kt = useMemo(function() {
            const o = selection?.list;
            if (!o || o.length === 0) {
                return "";
            }
            const a = o[0]?.id?.toString() ?? "";
            const i = o[o.length - 1]?.id?.toString() ?? "";
            return `${o.length}-${a}-${i}`;
        }, [
            selection?.list
        ]);
        const ItRef = useRef();
        const Tt = r("useWAWebIncomingCall")();
        const Dt = useState(function() {
            return o("WAWebVoipCallsTabCallInfoUtils").getShouldShowInCallsTabCallLog;
        });
        const xt = Dt[0];
        const $t = Dt[1];
        r("useWAWebCallsTabCallLogVisibilityChange")(mode === r("WAWebChatlistPanelMode").CallsTab ? function() {
            $t(function() {
                return function(e) {
                    return o("WAWebVoipCallsTabCallInfoUtils").getShouldShowInCallsTabCallLog(e);
                };
            });
        } : null);
        const Pt = useMemo(function() {
            if (mode !== r("WAWebChatlistPanelMode").CallsTab) {
                return [];
            }
            const e = (Me ?? []).filter(xt);
            if (e.length === 0) {
                return [];
            }
            return o("WAWebCallLogUtils").mergeCallRecords(e.slice(0, 200));
        }, [
            mode,
            Me,
            xt
        ]);
        var Nt = useCallback(function() {
            if (mode === r("WAWebChatlistPanelMode").CallsTab) {
                const e = [];
                if (!isSelecting && (o("WAWebVoipOngoingCallCollection").WAWebVoipOngoingCallCollection.hasOngoingJoinableGroupCalls() && e.push(...o("WAWebVoipOngoingCallCollection").WAWebVoipOngoingCallCollection.getModelsArray()), o("WAWebABProps").getABPropConfigValue("enable_upcoming_schedule_call_events_in_calls_tab") && Ce.length > 0 && e.push(Ce[0]), !isSearching)) {
                    const t = Rt;
                    if (t.length > 0) {
                        for (const n of t){
                            if (n.chat != null) {
                                e.push(n.chat);
                            } else if (n.contact != null) {
                                e.push(n.contact);
                            }
                        }
                    } else {
                        e.push(o("WAWebChatlistTypes").CALLS_ADD_FAVORITE_SELECTION_ITEM);
                    }
                }
                if (Pt.length > 0) {
                    e.push(...Pt.map(({ mergedMsgs })=>mergedMsgs[mergedMsgs.length - 1]));
                }
                return [].concat(e, debugCommands, actions, settings, communities, P, contacts, w.map((e)=>e[0]), messages);
            }
            return [].concat(debugCommands, actions, settings, communities, P, contacts, w.map((e)=>e[0]), ftsStarred, ftsKept, ftsMessages, messages);
        }, [
            debugCommands,
            actions,
            settings,
            communities,
            P,
            contacts,
            w,
            ftsStarred,
            ftsKept,
            messages,
            mode,
            Ce,
            isSearching,
            isSelecting,
            ftsMessages,
            Pt,
            Rt
        ]);
        const Mt = useMemo(function() {
            return Nt();
        }, [
            Nt
        ]);
        useEffect(function() {
            let e;
            const EtRef_current = EtRef.current;
            const ItRef_current = ItRef.current;
            EtRef.current = isSearching;
            ItRef.current = kt;
            if (selection) {
                const o = IeRef.current;
                const a = EtRef_current !== false && !isSearching && !isSearchInputFocused && !((e = searchQuery?.hasFilter()) != null && e) && !(o != null && o.archive);
                selection.init(Mt, a);
                if (o && selection.list.includes(o) && selection.getVal() !== o && !je_isKeyboardUser && mode === r("WAWebChatlistPanelMode").Chatlist && !isSearching && !isSearchInputFocused) {
                    selection.setVal(o, false);
                }
                if (mode === r("WAWebChatlistPanelMode").CommandPalette && ItRef_current !== undefined && kt !== ItRef_current) {
                    selection.setFirst(false);
                }
                if (EtRef_current === true && !isSearching && !isSearchInputFocused) {
                    const i = selection.getVal();
                    if (!i && meRef.current) {
                        selection.setVal(meRef.current);
                    }
                }
            }
        }, [
            selection,
            Mt,
            isSearching,
            isSearchInputFocused,
            searchQuery,
            je_isKeyboardUser,
            mode,
            kt
        ]);
        const setCheckboxWrapperRef = useCallback(function(e, t) {
            if (t != null) {
                geRef.current.set(e, t);
                return;
            }
            geRef.current.delete(e);
        }, []);
        const At = useCallback(function(e) {
            return geRef.current?.get(e);
        }, []);
        const Ft = useCallback(function() {
            if (mode !== r("WAWebChatlistPanelMode").CommandPalette) {
                if (selection != null) {
                    selection.reset(false, false);
                }
                if (selection && selection.index > -1 && document.activeElement === document.body) {
                    Xe();
                }
            }
        }, [
            mode,
            selection,
            Xe
        ]);
        const Ot = useCallback(function(e) {
            e.stopPropagation();
            e.preventDefault();
            onFocusSearch?.();
        }, [
            onFocusSearch
        ]);
        const handleKeptMessageClick = useCallback(function(e, t) {
            const n = new (o("WAWebDisappearingMessageKeepInChatWamEvent")).DisappearingMessageKeepInChatWamEvent({
                kicActionName: o("WAWebWamEnumKicActionNameType").KIC_ACTION_NAME_TYPE.SEARCH_RESULTS_TAP,
                isAGroup: o("WAWebChatGetters").getIsGroup(t)
            });
            if (o("WAWebChatGetters").getIsGroup(t)) {
                n.set({
                    isAdmin: t.groupMetadata?.participants.iAmAdmin()
                });
            }
            n.commit();
            onItemClick?.(e, t);
        }, [
            onItemClick
        ]);
        const restoreFocus = useCallback(function() {
            selection?.reset(true);
        }, [
            selection
        ]);
        const handleContactItemClick = useCallback(function(e, t, n, r) {
            onItemClick?.(e, t);
        }, [
            onItemClick
        ]);
        const handleMultiSelect = useCallback(function(e, t, n) {
            multiSelection?.setVal(e, t, n);
        }, [
            multiSelection
        ]);
        const handleArrowKeyInChatItem = useCallback(function(e) {
            const t = At(e);
            if (t) {
                const n = o("WAWebKeyboardTabUtils").getNextTabbableElement(t, o("WAWebKeyboardTabUtils").TabDirection.FORWARD, o("WAWebKeyboardTabUtils").FocusType.TABBABLE);
                r("WAWebFocusTracer").focus(n);
            }
        }, [
            At
        ]);
        heRef.current = {
            handleMultiSelect,
            handleArrowKeyInChatItem,
            setCheckboxWrapperRef,
            handleChatClick,
            onStartMultiSelect,
            handleContactItemClick,
            onItemClick,
            handleKeptMessageClick,
            handleMutedChatsBarClick,
            handleRetryOrgMemberSearch,
            createPreventAutoReadProps
        };
        const renderItem = useCallback(function(e) {
            const heRef_current = heRef.current;
            if (heRef_current == null) {
                return null;
            }
            let n;
            if (e.type === o("WAWebChatlistTypes").WAWebChatlistRow.ROW_CONTACTS && e.data != null && contactSearchMatches != null) {
                const a = e.data;
                if (a instanceof r("WAWebContactModel")) {
                    n = contactSearchMatches.get(a.id.toString());
                }
            } else if (e.type === o("WAWebChatlistTypes").WAWebChatlistRow.ROW_CHATS && e.data != null && chatSearchMatches != null) {
                const i = e.data;
                if (i instanceof o("WAWebChatModel").Chat) {
                    n = chatSearchMatches.get(i.id.toString());
                }
            }
            if (e.type === o("WAWebChatlistTypes").WAWebChatlistRow.ROW_OUT_CONTACTS && e.data != null && outContactSearchMatches != null) {
                const l = e.data;
                if (l instanceof r("WAWebOutContactModel")) {
                    n = outContactSearchMatches.get(l.id.toString());
                }
            }
            return c.jsx(r("WAWebChatlistItem.react"), {
                data: e,
                mode,
                selectableState,
                multiSelection,
                searchQuery,
                filterPreset,
                selection,
                mutedChats,
                mutedChatsCollapsed,
                getDetailImageSize,
                handlers: heRef_current,
                searchMatch: n
            });
        }, [
            contactSearchMatches,
            outContactSearchMatches,
            mode,
            selectableState,
            multiSelection,
            searchQuery,
            filterPreset,
            selection,
            mutedChats,
            mutedChatsCollapsed,
            chatSearchMatches
        ]);
        const Gt = useMemo(function() {
            if (mode !== r("WAWebChatlistPanelMode").CallsTab) {
                return [];
            }
            const e = [];
            if (!isSearching && !isSelecting) {
                if (Tt != null && !Tt.isGroup) {
                    e.push({
                        itemKey: "section-incoming-call",
                        type: o("WAWebChatlistTypes").WAWebChatlistSection.SEC_CALLS_INCOMING,
                        height: v
                    });
                    e.push({
                        itemKey: `incoming-call-${Tt.id}`,
                        data: Tt,
                        type: o("WAWebChatlistTypes").WAWebChatlistRow.ROW_CALL_INCOMING,
                        height: 80
                    });
                }
                if (o("WAWebVoipOngoingCallCollection").WAWebVoipOngoingCallCollection.hasOngoingJoinableGroupCalls()) {
                    e.push({
                        itemKey: "section-ongoing-calls",
                        type: o("WAWebChatlistTypes").WAWebChatlistSection.SEC_CALLS_ONGOING,
                        height: v
                    });
                    e.push(...o("WAWebVoipOngoingCallCollection").WAWebVoipOngoingCallCollection.getModelsArray().map((e)=>({
                            itemKey: `ongoing-call-${e.id.toString()}`,
                            data: e,
                            type: o("WAWebChatlistTypes").WAWebChatlistRow.ROW_CALL_ONGOING,
                            height: 96
                        })));
                }
                if (o("WAWebABProps").getABPropConfigValue("enable_upcoming_schedule_call_events_in_calls_tab") && Ce.length > 0) {
                    const t = Ce[0];
                    const showViewAllUpcomingEvents = Se.length > 1;
                    e.push({
                        itemKey: "section-upcoming-events",
                        type: o("WAWebChatlistTypes").WAWebChatlistSection.SEC_UPCOMING_EVENTS,
                        height: S,
                        showViewAllUpcomingEvents
                    });
                    e.push({
                        itemKey: `upcoming-event-${t.id.toString()}`,
                        data: t,
                        type: o("WAWebChatlistTypes").WAWebChatlistRow.ROW_UPCOMING_EVENT,
                        height: 88
                    });
                }
                const a = Rt;
                const showViewAllFavorites = a.length > 0;
                e.push({
                    itemKey: "section-calls-favorites",
                    type: o("WAWebChatlistTypes").WAWebChatlistSection.SEC_CALLS_FAVORITES,
                    height: R,
                    showViewAllFavorites
                });
                if (a.length > 0) {
                    e.push(...a.map((e)=>({
                            itemKey: `favorite-chat-${e.wid.toString()}`,
                            data: e,
                            type: o("WAWebChatlistTypes").WAWebChatlistRow.ROW_CALLS_FAVORITE
                        })));
                } else {
                    e.push({
                        itemKey: "add-favorite-button",
                        type: o("WAWebChatlistTypes").WAWebChatlistRow.ROW_CALLS_ADD_FAVORITE
                    });
                }
            }
            if (isSearching && contacts && contacts.length > 0) {
                e.push({
                    itemKey: "section-contacts",
                    type: o("WAWebChatlistTypes").WAWebChatlistSection.SEC_CONTACTS,
                    height: b
                });
                e.push(...contacts.map((e)=>({
                        itemKey: `contact-${e.id.toString()}`,
                        data: e,
                        type: o("WAWebChatlistTypes").WAWebChatlistRow.ROW_CONTACTS
                    })));
            }
            if (Pt.length > 0) {
                if (isSearching) {
                    e.push({
                        itemKey: "section-calls-search-results",
                        type: o("WAWebChatlistTypes").WAWebChatlistSection.SEC_CALLS_SEARCH_RESULTS,
                        height: b
                    });
                } else {
                    e.push({
                        itemKey: "section-calls-recent",
                        type: o("WAWebChatlistTypes").WAWebChatlistSection.SEC_CALLS_RECENT,
                        height: L
                    });
                }
                e.push(...Pt.map(({ mergedMsgs }, t)=>{
                    const r = mergedMsgs[mergedMsgs.length - 1];
                    return {
                        itemKey: `msg-${r.id.toString()}`,
                        data: mergedMsgs,
                        type: o("WAWebChatlistTypes").WAWebChatlistRow.ROW_CALL_LOG,
                        index: isSearching ? undefined : t
                    };
                }));
            }
            return e;
        }, [
            mode,
            isSearching,
            isSelecting,
            contacts,
            Pt,
            Ce,
            Se,
            Rt,
            Tt
        ]);
        const zt = useMemo(function() {
            if (isSearching) {
                return o("WAWebNonContactPushNameSearchModel").dedupeNonContactPushnames(Q, P ?? [], contacts ?? []);
            }
            return o("WAWebNonContactPushNameSearchModel").EMPTY_NON_CONTACT_PUSHNAMES;
        }, [
            isSearching,
            Q,
            P,
            contacts
        ]);
        const jt = useMemo(function() {
            if (mode === r("WAWebChatlistPanelMode").CallsTab) {
                return [];
            }
            const e = [];
            let t = 0;
            if (isSearching && debugCommands && debugCommands.length > 0) {
                e.push({
                    itemKey: "section-debug-commands",
                    type: o("WAWebChatlistTypes").WAWebChatlistSection.SEC_DEBUG_COMMANDS,
                    height: b
                });
            }
            e.push(...(debugCommands ?? []).map((e)=>({
                    itemKey: `debug-command-${e.id.toString()}`,
                    data: e,
                    type: o("WAWebChatlistTypes").WAWebChatlistRow.ROW_DEBUG_COMMANDS,
                    height: 60
                })));
            if (isSearching && actions && actions.length > 0) {
                e.push({
                    itemKey: "section-actions",
                    type: o("WAWebChatlistTypes").WAWebChatlistSection.SEC_ACTIONS,
                    height: b
                });
            }
            e.push(...(actions ?? []).map((e)=>({
                    itemKey: `action-${e.id.toString()}`,
                    data: e,
                    type: o("WAWebChatlistTypes").WAWebChatlistRow.ROW_ACTIONS,
                    height: 60
                })));
            if (isSearching && settings && settings.length > 0) {
                e.push({
                    itemKey: "section-settings",
                    type: o("WAWebChatlistTypes").WAWebChatlistSection.SEC_SETTINGS,
                    height: b
                });
            }
            e.push(...(settings ?? []).map((e)=>({
                    itemKey: `setting-${e.id.toString()}`,
                    data: e,
                    type: o("WAWebChatlistTypes").WAWebChatlistRow.ROW_SETTINGS,
                    height: 60
                })));
            if (isSearching && communities && communities.length > 0) {
                e.push({
                    itemKey: "section-communities",
                    type: o("WAWebChatlistTypes").WAWebChatlistSection.SEC_COMMUNITIES,
                    height: b
                });
            }
            e.push(...(communities ?? []).map((e)=>({
                    itemKey: `community-${e.id.toString()}`,
                    data: e,
                    type: o("WAWebChatlistTypes").WAWebChatlistRow.ROW_COMMUNITIES,
                    height: 72
                })));
            if (!(searchQuery && searchQuery.filter.kind === o("WAWebChatSearchFilters").SearchFilters.LABELS && o("WAWebInboxFiltersGatingUtils").inboxFiltersEnabled())) {
                if (isSearching && P && P.length > 0) {
                    e.push({
                        itemKey: "section-chats",
                        type: o("WAWebChatlistTypes").WAWebChatlistSection.SEC_CHATS,
                        height: b
                    });
                } else if (!isSearching && searchQuery && searchQuery.filter.kind === o("WAWebChatSearchFilters").SearchFilters.UNREAD && !o("WAWebInboxFiltersGatingUtils").inboxFiltersEnabled()) {
                    e.push({
                        itemKey: "section-chats",
                        type: o("WAWebChatlistTypes").WAWebChatlistSection.SEC_UNREAD_CHATS,
                        height: b
                    });
                } else if (!isSearching && searchQuery && searchQuery.filter.kind === o("WAWebChatSearchFilters").SearchFilters.ASSIGNED_TO_YOU) {
                    e.push({
                        itemKey: "section-chats",
                        type: o("WAWebChatlistTypes").WAWebChatlistSection.SEC_ASSIGNED_TO_YOU,
                        height: b
                    });
                }
            }
            if (!isSearching && qe) {
                if (mutedChats.length > 0) {
                    e.push({
                        itemKey: "section-collapse-muted",
                        contentKey: `${String(mutedChatsCollapsed)}-${mutedChats.length}`,
                        type: o("WAWebChatlistTypes").WAWebChatlistSection.SEC_MUTED_CHATS,
                        height: 30
                    });
                }
                if (!mutedChatsCollapsed) {
                    e.push(...mutedChats.map((e)=>({
                            itemKey: `chat-${e.id.toString()}`,
                            data: e,
                            expanded: !mutedChatsCollapsed,
                            type: o("WAWebChatlistTypes").WAWebChatlistRow.ROW_CHATS,
                            height: getHeightForChat(e)
                        })));
                }
                e.push(...o("WAWebChatlistPinnedDivider").toChatRowsWithPinnedDivider((P ?? []).filter((e)=>!o("WAWebMuteGetters").getIsMuted(e.mute)), showPinnedDivider, function(e) {
                    return {
                        itemKey: `chat-${e.id.toString()}`,
                        data: e,
                        type: o("WAWebChatlistTypes").WAWebChatlistRow.ROW_CHATS,
                        index: t++,
                        height: getHeightForChat(e)
                    };
                }));
            } else {
                e.push(...o("WAWebChatlistPinnedDivider").toChatRowsWithPinnedDivider([].concat(P ?? []), showPinnedDivider, function(e) {
                    return {
                        itemKey: `chat-${e.id.toString()}`,
                        data: e,
                        type: o("WAWebChatlistTypes").WAWebChatlistRow.ROW_CHATS,
                        index: t++,
                        height: getHeightForChat(e)
                    };
                }));
            }
            const n = (outContacts ?? []).map((e)=>e.outContact);
            const a = o("WAWebContactUtils").mergeSortedContacts(contacts ?? [], n);
            if (isSearching && a.length > 0) {
                e.push({
                    itemKey: "section-contacts",
                    type: o("WAWebChatlistTypes").WAWebChatlistSection.SEC_CONTACTS,
                    height: b
                });
            }
            e.push(...a.map((e)=>{
                if (e instanceof r("WAWebOutContactModel")) {
                    return {
                        itemKey: `out-contact-${e.id.toString()}`,
                        data: e,
                        type: o("WAWebChatlistTypes").WAWebChatlistRow.ROW_OUT_CONTACTS
                    };
                }
                return {
                    itemKey: `contact-${e.id.toString()}`,
                    data: e,
                    type: o("WAWebChatlistTypes").WAWebChatlistRow.ROW_CONTACTS
                };
            }));
            if (isSearching) {
                const i = (n)=>{
                    e.push({
                        itemKey: `section-org-members-${n.orgId}`,
                        type: o("WAWebChatlistTypes").WAWebChatlistSection.SEC_ORG_MEMBERS,
                        orgName: n.orgName,
                        height: b
                    });
                    const t = o("WAWebOrgMemberSearchRows").toOrgMemberStatusRow(n);
                    if (t != null) {
                        e.push(t);
                        return 1;
                    }
                    e.push(...n.members.map((e)=>({
                            itemKey: `org-member-${n.orgId}-${e.id}`,
                            data: e,
                            type: o("WAWebChatlistTypes").WAWebChatlistRow.ROW_ORG_MEMBERS
                        })));
                };
                for (const l of re){
                    i(l);
                }
            }
            if (isSearching && w && w.length > 0) {
                e.push({
                    itemKey: "section-common-groups",
                    type: o("WAWebChatlistTypes").WAWebChatlistSection.SEC_COMMON_GROUPS,
                    height: b
                });
            }
            e.push(...(w ?? []).map((e)=>({
                    itemKey: `common-group-${e[0].id.toString()}-${e[1].map((e)=>e.id.toString()).join("-")}`,
                    data: e,
                    type: o("WAWebChatlistTypes").WAWebChatlistRow.ROW_COMMON_GROUPS
                })));
            if (isSearching && zt.length > 0) {
                e.push({
                    itemKey: "section-non-contact-pushname",
                    type: o("WAWebChatlistTypes").WAWebChatlistSection.SEC_NON_CONTACT_PUSHNAME,
                    height: b
                });
                e.push(...zt.map((e)=>({
                        itemKey: `non-contact-pushname-${e.id.toString()}`,
                        data: e,
                        type: o("WAWebChatlistTypes").WAWebChatlistRow.ROW_NON_CONTACT_PUSHNAME
                    })));
            }
            if (isSearching && ftsStarred.length > 0) {
                e.push({
                    itemKey: "section-starred",
                    type: o("WAWebChatlistTypes").WAWebChatlistSection.SEC_STARRED,
                    height: b
                });
            }
            e.push(...ftsStarred.map((e)=>({
                    itemKey: `starred-${e.id.toString()}`,
                    data: e,
                    type: o("WAWebChatlistTypes").WAWebChatlistRow.ROW_STARRED
                })));
            if (isSearching && ftsKept.length > 0) {
                e.push({
                    itemKey: "section-kept",
                    type: o("WAWebChatlistTypes").WAWebChatlistSection.SEC_KEPT,
                    height: b
                });
            }
            e.push(...ftsKept.map((e)=>({
                    itemKey: `kept-${e.id.toString()}`,
                    data: e,
                    type: o("WAWebChatlistTypes").WAWebChatlistRow.ROW_KEPT
                })));
            if (isSearching && ftsMessages.length > 0) {
                e.push({
                    itemKey: "section-msg",
                    type: o("WAWebChatlistTypes").WAWebChatlistSection.SEC_MSG,
                    height: b
                });
            }
            e.push(...ftsMessages.map((e)=>({
                    itemKey: `msg-${e.id.toString()}`,
                    data: e,
                    type: o("WAWebChatlistTypes").WAWebChatlistRow.ROW_MSG
                })));
            if (isSearching && messages && messages.length > 0) {
                e.push({
                    itemKey: "section-msg",
                    type: o("WAWebChatlistTypes").WAWebChatlistSection.SEC_MSG,
                    height: b
                });
            }
            e.push(...(messages ?? []).map((e)=>({
                    itemKey: `msg-${e.id.toString()}`,
                    data: e,
                    type: o("WAWebChatlistTypes").WAWebChatlistRow.ROW_MSG
                })));
            return e;
        }, [
            getHeightForChat,
            showPinnedDivider,
            mode,
            isSearching,
            debugCommands,
            actions,
            settings,
            communities,
            zt,
            re,
            searchQuery,
            P,
            qe,
            outContacts,
            contacts,
            w,
            ftsStarred,
            ftsKept,
            ftsMessages,
            messages,
            mutedChats,
            mutedChatsCollapsed
        ]);
        const Kt = useMemo(function() {
            if (mode === r("WAWebChatlistPanelMode").CallsTab) {
                return Gt;
            }
            return jt;
        }, [
            mode,
            Gt,
            jt
        ]);
        const Qt = useMemo(function() {
            return {
                extraItems
            };
        }, []);
        o("useWAWebListener").useListener(document, "keydown", function(e) {
            const isWindows = r("WAWebEnvironment").isWindows;
            if (isWindows && e && e.ctrlKey) {
                const n = parseInt(e.key, 10);
                if (!isNaN(n) && n >= 1 && n <= 9) {
                    const o = n - 1;
                    e.preventDefault();
                    at(e, o);
                }
            }
        });
        useEffect(function() {
            return function() {
                if (!(selection && selection.list.length > 0)) {
                    const e = selection?.getVal();
                    if (e instanceof o("WAWebChatModel").Chat && e.isState && !isSearching) {
                        o("WAWebCmd").Cmd.closeChat(e);
                    }
                }
            };
        }, [
            selection,
            isSearching
        ]);
        useImperativeHandle(ref, function() {
            return {
                focusFirst: it,
                focusLast,
                requestFocus: Ft,
                restoreFocus
            };
        }, [
            it,
            focusLast,
            Ft,
            restoreFocus
        ]);
        const Xt = useMemo(function() {
            return {
                down: function(t) {
                    return ot(t, false);
                },
                j: function(t) {
                    return ot(t, false);
                },
                up: function(t) {
                    return rt(t, false);
                },
                k: function(t) {
                    return rt(t, false);
                },
                "/": function(t) {
                    return Ot(t);
                },
                home: function(t) {
                    return at(t, 0);
                },
                end: function(t) {
                    return at(t, selection ? selection.list.length - 1 : 0);
                },
                pagedown: function(t) {
                    return handlePageDown(t);
                },
                pageup: function(t) {
                    return handlePageUp(t);
                }
            };
        }, [
            ot,
            rt,
            Ot,
            at,
            selection,
            handlePageDown,
            handlePageUp
        ]);
        const Yt = useMemo(function() {
            if (isSearching) {
                return s._("Search results.");
            }
            return s._("Chat list");
        }, [
            isSearching
        ]);
        let Jt = null;
        if (!isSearching && searchQuery?.filter.kind === o("WAWebChatSearchFilters").SearchFilters.AI_HANDOFF && (P?.length ?? 0) > 0 && o("WAWebBizAiAgentGating").isAiListsWebUIEnabled()) {
            Jt = c.jsx(r("WAWebManageAiHandoffButton.react"), {});
        } else if (!isSearching && searchQuery?.filter.kind != null && (P?.length ?? 0) > 0 && o("WAWebListsGatingUtils").isListsM2Enabled()) {
            const Zt = o("WAWebListUtils").getManageListInfo(searchQuery.filter);
            if (Zt != null) {
                Jt = c.jsx(r("WAWebManageListButton.react"), {
                    listId: Zt.listId,
                    listName: Zt.listName
                });
            }
        }
        const Component = o("WAWebKeyboardHotKeys.react").HotKeys;
        const Component_1 = o("WAWebUimUie.react").UIE;
        return <><Component_1 displayName="Chatlist" ref={_eRef} uimState={o("WAWebUim").UIMState.PASSIVE} requestFocus={Ft}><Component tabIndex={0} handlers={Xt} onFocus={mt} onBlur={gt} ref={peRef} data-tab={o("WAWebTabOrder").TAB_ORDER.CHAT_LIST}>{c.jsx(o("WAWebFlatList.react").FlatList, babelHelpers.extends({
            "aria-label": Yt,
            testid: "chat-list",
            data: Kt,
            renderItem,
            flatListController,
            direction: "vertical",
            defaultItemHeight: getDefaultHeight(),
            onPointerEventsOff,
            onPointerEventsOn,
            ref: feRef
        }, Qt, {
            role: "grid",
            itemRole: "row",
            "aria-rowcount": P?.length ?? 0,
            viewportXstyles: E.flatListViewport
        }))}</Component></Component_1>{Jt}</>;
    }
    P.displayName = `${P.name} [from ${i.id}]`;
    l.default = P;
}, 226);