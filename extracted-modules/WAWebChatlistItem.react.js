__d("WAWebChatlistItem.react", [
    "fbt",
    "CometPlaceholder.react",
    "WALogger",
    "WAWebAddFavoriteButton.react",
    "WAWebCallLogEntryCell.react",
    "WAWebCallLogJoinOngoingCell.react",
    "WAWebCallUserJourneyCallsTabAction",
    "WAWebCallUserJourneyLogger",
    "WAWebChat.react",
    "WAWebChatAction.react",
    "WAWebChatContact.react",
    "WAWebChatMessage.react",
    "WAWebChatSetting.react",
    "WAWebChatlistPanelMode",
    "WAWebChatlistTypes",
    "WAWebChatlistWrappedItem.react",
    "WAWebCmd",
    "WAWebCommonGroupSubtitle.react",
    "WAWebCommunityCells.react",
    "WAWebContactCallButtons.react",
    "WAWebContactGetters",
    "WAWebFavoriteCell.react",
    "WAWebFlatList.react",
    "WAWebFocusTracer",
    "WAWebFrontendMsgGetters",
    "WAWebMsgModelUtils",
    "WAWebNonContactPushNameSearchModel",
    "WAWebOrgMemberSearchCell.react",
    "WAWebOrgMemberSearchErrorRow.react",
    "WAWebOrgMemberSearchLoadingRow.react",
    "WAWebOrgMemberSearchRows",
    "WAWebOrgMemberSearchStrings",
    "WAWebOutContactCell.react",
    "WAWebPreCallUserJourneyLogger",
    "WAWebSectionHeader.react",
    "WAWebTabOrder",
    "WAWebUpcomingEventCell.react",
    "WAWebVoipCallsTabOpenCallInfo",
    "WAWebVoipCallsTabPanelManager",
    "WAWebVoipGatingUtils",
    "WAWebWamEnumCompanionInviteOriginType",
    "WAWebWamEnumSubSurface",
    "WDSButton.react",
    "WDSSectionDivider.react",
    "cr:104",
    "cr:3587",
    "cr:4088",
    "cr:5736",
    "deferredLoadComponent",
    "gkx",
    "nullthrows",
    "react",
    "react-compiler-runtime",
    "requireDeferredForDisplay",
    "useWAWebActiveChatStyle",
    "useWAWebListener"
], function(t, n, r, o, a, i, l, s) {
    const e = [
        "chat",
        "createPreventAutoReadProps"
    ];
    let d;
    let m;
    let p;
    const _ = p || (p = o("react"));
    const f = p;
    const { memo, useRef } = f;
    const Y1 = n("cr:104") ?? n("cr:3587");
    const C = n("cr:5736") ?? n("cr:4088");
    const B3 = r("deferredLoadComponent")(r("requireDeferredForDisplay")("WAWebCallLogIncomingCell.react").__setRef("WAWebChatlistItem.react"));
    const V1 = o("WAWebChat.react").ChatFactory();
    const S = o("WAWebChatContact.react").ContactFactory();
    function R(t) {
        const n = o("react-compiler-runtime").c(13);
        let a;
        let i;
        let l;
        if (n[0] !== t) {
            a = t.chat;
            l = t.createPreventAutoReadProps;
            i = babelHelpers.objectWithoutPropertiesLoose(t, e);
            n[0] = t;
            n[1] = a;
            n[2] = i;
            n[3] = l;
        } else {
            a = n[1];
            i = n[2];
            l = n[3];
        }
        const s = r("useWAWebActiveChatStyle")(a, true);
        let u;
        if (n[4] !== a || n[5] !== l) {
            u = l(a);
            n[4] = a;
            n[5] = l;
            n[6] = u;
        } else {
            u = n[6];
        }
        const c = u;
        let c_forceActive = c.forceActive;
        let c_activeStyleType = c.activeStyleType;
        const p = s.forceActive === true;
        const f = c.activeStyleType === "BORDER";
        if (p && f) {
            c_forceActive = true;
            c_activeStyleType = "BOTH";
        } else if (p) {
            c_forceActive = true;
            c_activeStyleType = "DEFAULT";
        } else if (f) {
            c_activeStyleType = "BORDER";
        }
        let g;
        if (n[7] !== c_activeStyleType || n[8] !== a || n[9] !== i || n[10] !== c_forceActive || n[11] !== c.onContextMenuChange) {
            g = <V1 {...babelHelpers.extends({
                chat: a
            }, i, {
                forceActive: c_forceActive,
                activeStyleType: c_activeStyleType,
                onContextMenuChange: c.onContextMenuChange
            })}/>;
            n[7] = c_activeStyleType;
            n[8] = a;
            n[9] = i;
            n[10] = c_forceActive;
            n[11] = c.onContextMenuChange;
            n[12] = g;
        } else {
            g = n[12];
        }
        return g;
    }
    function L(e) {
        const t = o("react-compiler-runtime").c(2);
        const e_active = e.active;
        const aRef = useRef(null);
        let i;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            i = function(t) {
                if (t === "focus") {
                    r("WAWebFocusTracer").focus(aRef.current);
                }
            };
            t[0] = i;
        } else {
            i = t[0];
        }
        o("useWAWebListener").useListener(e_active, o("WAWebChatlistTypes").CALLS_ADD_FAVORITE_SELECTION_ID, i);
        let s;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WAWebAddFavoriteButton.react");
            s = <Component ref={aRef}/>;
            t[1] = s;
        } else {
            s = t[1];
        }
        return s;
    }
    function EComponent(e) {
        const t = o("react-compiler-runtime").c(287);
        const { data, filterPreset, getDetailImageSize, handlers, mode, multiSelection, mutedChats, mutedChatsCollapsed, searchMatch, searchQuery, selectableState, selection } = e;
        const { createPreventAutoReadProps, handleArrowKeyInChatItem, handleChatClick, handleContactItemClick, handleKeptMessageClick, handleMultiSelect, handleMutedChatsBarClick, onItemClick, onStartMultiSelect, setCheckboxWrapperRef } = handlers;
        let W;
        if (t[0] !== handleArrowKeyInChatItem || t[1] !== handleMultiSelect || t[2] !== mode || t[3] !== multiSelection || t[4] !== selectableState || t[5] !== setCheckboxWrapperRef) {
            W = {
                mode,
                selectableState,
                multiSelection,
                onSelect: handleMultiSelect,
                onArrowKeyInChatItem: handleArrowKeyInChatItem,
                setCheckboxWrapperRef
            };
            t[0] = handleArrowKeyInChatItem;
            t[1] = handleMultiSelect;
            t[2] = mode;
            t[3] = multiSelection;
            t[4] = selectableState;
            t[5] = setCheckboxWrapperRef;
            t[6] = W;
        } else {
            W = t[6];
        }
        const q = W;
        switch(data.type){
            case o("WAWebChatlistTypes").WAWebChatlistSection.SEC_CHATS:
                {
                    let U;
                    if (t[7] === Symbol.for("react.memo_cache_sentinel")) {
                        U = <X1 header={s._("Chats")}/>;
                        t[7] = U;
                    } else {
                        U = t[7];
                    }
                    return U;
                }
            case o("WAWebChatlistTypes").WAWebChatlistSection.SEC_UNREAD_CHATS:
                {
                    let V;
                    if (t[8] === Symbol.for("react.memo_cache_sentinel")) {
                        V = <X1 header={s._("Filtered by unread")}/>;
                        t[8] = V;
                    } else {
                        V = t[8];
                    }
                    return V;
                }
            case o("WAWebChatlistTypes").WAWebChatlistSection.SEC_CONTACTS:
                {
                    let H;
                    if (t[9] === Symbol.for("react.memo_cache_sentinel")) {
                        H = <X1 header={s._("Contacts")}/>;
                        t[9] = H;
                    } else {
                        H = t[9];
                    }
                    return H;
                }
            case o("WAWebChatlistTypes").WAWebChatlistSection.SEC_ACTIONS:
                {
                    let G;
                    if (t[10] === Symbol.for("react.memo_cache_sentinel")) {
                        G = <X1 header={s._("Actions")}/>;
                        t[10] = G;
                    } else {
                        G = t[10];
                    }
                    return G;
                }
            case o("WAWebChatlistTypes").WAWebChatlistSection.SEC_DEBUG_COMMANDS:
                {
                    let z;
                    if (t[11] === Symbol.for("react.memo_cache_sentinel")) {
                        z = <X1 header="Debug Commands"/>;
                        t[11] = z;
                    } else {
                        z = t[11];
                    }
                    return z;
                }
            case o("WAWebChatlistTypes").WAWebChatlistSection.SEC_COMMUNITIES:
                {
                    let j;
                    if (t[12] === Symbol.for("react.memo_cache_sentinel")) {
                        j = <X1 header={s._("Communities")}/>;
                        t[12] = j;
                    } else {
                        j = t[12];
                    }
                    return j;
                }
            case o("WAWebChatlistTypes").WAWebChatlistSection.SEC_SETTINGS:
                {
                    let K;
                    if (t[13] === Symbol.for("react.memo_cache_sentinel")) {
                        K = <X1 header={s._("Settings")}/>;
                        t[13] = K;
                    } else {
                        K = t[13];
                    }
                    return K;
                }
            case o("WAWebChatlistTypes").WAWebChatlistSection.SEC_COMMON_GROUPS:
                {
                    let Q;
                    if (t[14] === Symbol.for("react.memo_cache_sentinel")) {
                        Q = <X1 header={s._("Groups in common")}/>;
                        t[14] = Q;
                    } else {
                        Q = t[14];
                    }
                    return Q;
                }
            case o("WAWebChatlistTypes").WAWebChatlistSection.SEC_NON_CONTACT_PUSHNAME:
                {
                    let X;
                    if (t[15] === Symbol.for("react.memo_cache_sentinel")) {
                        X = <X1 header={o("WAWebNonContactPushNameSearchModel").getNonContactPushNameHeader()}/>;
                        t[15] = X;
                    } else {
                        X = t[15];
                    }
                    return X;
                }
            case o("WAWebChatlistTypes").WAWebChatlistSection.SEC_ORG_MEMBERS:
                {
                    let Y;
                    if (t[16] === Symbol.for("react.memo_cache_sentinel")) {
                        Y = <X1 header={o("WAWebOrgMemberSearchStrings").getOrgMemberSearchHeader()}/>;
                        t[16] = Y;
                    } else {
                        Y = t[16];
                    }
                    return Y;
                }
            case o("WAWebChatlistTypes").WAWebChatlistSection.SEC_STARRED:
                {
                    let J;
                    if (t[17] === Symbol.for("react.memo_cache_sentinel")) {
                        J = <X1 testid="starred-messages-header" header={s._("Starred messages")}/>;
                        t[17] = J;
                    } else {
                        J = t[17];
                    }
                    return J;
                }
            case o("WAWebChatlistTypes").WAWebChatlistSection.SEC_KEPT:
                {
                    let Z;
                    if (t[18] === Symbol.for("react.memo_cache_sentinel")) {
                        Z = <X1 testid="kept-messages-header" header={s._("Kept messages")}/>;
                        t[18] = Z;
                    } else {
                        Z = t[18];
                    }
                    return Z;
                }
            case o("WAWebChatlistTypes").WAWebChatlistSection.SEC_MSG:
                {
                    let ee;
                    if (t[19] === Symbol.for("react.memo_cache_sentinel")) {
                        ee = <X1 header={s._("Messages")}/>;
                        t[19] = ee;
                    } else {
                        ee = t[19];
                    }
                    return ee;
                }
            case o("WAWebChatlistTypes").WAWebChatlistSection.SEC_CALLS_FAVORITES:
                {
                    let te;
                    if (t[20] !== data.showViewAllFavorites) {
                        te = data.showViewAllFavorites === true ? <K1Component/> : null;
                        t[20] = data.showViewAllFavorites;
                        t[21] = te;
                    } else {
                        te = t[21];
                    }
                    let ne;
                    if (t[22] === Symbol.for("react.memo_cache_sentinel")) {
                        ne = s._("Favourites");
                        t[22] = ne;
                    } else {
                        ne = t[22];
                    }
                    let re;
                    if (t[23] !== te) {
                        re = _.jsx(r("WDSSectionDivider.react"), {
                            header: {
                                action: te,
                                title: ne,
                                type: "emphasized"
                            }
                        });
                        t[23] = te;
                        t[24] = re;
                    } else {
                        re = t[24];
                    }
                    return re;
                }
            case o("WAWebChatlistTypes").WAWebChatlistSection.SEC_UPCOMING_EVENTS:
                {
                    let oe;
                    if (t[25] !== data.showViewAllUpcomingEvents) {
                        oe = data.showViewAllUpcomingEvents === true ? <TComponent/> : null;
                        t[25] = data.showViewAllUpcomingEvents;
                        t[26] = oe;
                    } else {
                        oe = t[26];
                    }
                    let ae;
                    if (t[27] === Symbol.for("react.memo_cache_sentinel")) {
                        ae = s._("Upcoming");
                        t[27] = ae;
                    } else {
                        ae = t[27];
                    }
                    let ie;
                    if (t[28] !== oe) {
                        ie = _.jsx(r("WDSSectionDivider.react"), {
                            header: {
                                action: oe,
                                title: ae,
                                type: "emphasized"
                            }
                        });
                        t[28] = oe;
                        t[29] = ie;
                    } else {
                        ie = t[29];
                    }
                    return ie;
                }
            case o("WAWebChatlistTypes").WAWebChatlistSection.SEC_CALLS_INCOMING:
                {
                    let le;
                    if (t[30] === Symbol.for("react.memo_cache_sentinel")) {
                        le = _.jsx(r("WDSSectionDivider.react"), {
                            header: {
                                title: s._("Incoming"),
                                type: "emphasized"
                            }
                        });
                        t[30] = le;
                    } else {
                        le = t[30];
                    }
                    return le;
                }
            case o("WAWebChatlistTypes").WAWebChatlistSection.SEC_CALLS_ONGOING:
                {
                    let se;
                    if (t[31] === Symbol.for("react.memo_cache_sentinel")) {
                        se = _.jsx(r("WDSSectionDivider.react"), {
                            header: {
                                title: s._("Ongoing"),
                                type: "emphasized"
                            }
                        });
                        t[31] = se;
                    } else {
                        se = t[31];
                    }
                    return se;
                }
            case o("WAWebChatlistTypes").WAWebChatlistSection.SEC_CALLS_RECENT:
                {
                    let ue;
                    if (t[32] === Symbol.for("react.memo_cache_sentinel")) {
                        ue = _.jsx(r("WDSSectionDivider.react"), {
                            header: {
                                title: s._("Recent"),
                                type: "emphasized"
                            }
                        });
                        t[32] = ue;
                    } else {
                        ue = t[32];
                    }
                    return ue;
                }
            case o("WAWebChatlistTypes").WAWebChatlistSection.SEC_CALLS_SEARCH_GROUPS:
                {
                    let ce;
                    if (t[33] === Symbol.for("react.memo_cache_sentinel")) {
                        ce = _.jsx(r("WAWebSectionHeader.react"), {
                            header: s._("Groups")
                        });
                        t[33] = ce;
                    } else {
                        ce = t[33];
                    }
                    return ce;
                }
            case o("WAWebChatlistTypes").WAWebChatlistSection.SEC_CALLS_SEARCH_RESULTS:
                {
                    let de;
                    if (t[34] === Symbol.for("react.memo_cache_sentinel")) {
                        de = <X1 header={s._("Calls")}/>;
                        t[34] = de;
                    } else {
                        de = t[34];
                    }
                    return de;
                }
            case o("WAWebChatlistTypes").WAWebChatlistRow.ROW_PINNED_DIVIDER:
                {
                    let me;
                    if (t[35] === Symbol.for("react.memo_cache_sentinel")) {
                        me = _.jsx(r("WDSSectionDivider.react"), {
                            divider: true,
                            testid: "chat_list_pinned_divider"
                        });
                        t[35] = me;
                    } else {
                        me = t[35];
                    }
                    return me;
                }
            case o("WAWebChatlistTypes").WAWebChatlistSection.SEC_MUTED_CHATS:
                {
                    let pe;
                    if (t[36] !== handleMutedChatsBarClick || t[37] !== mutedChats || t[38] !== mutedChatsCollapsed) {
                        pe = C != null ? <C mutedChats={mutedChats} mutedChatsCollapsed={mutedChatsCollapsed} onClick={handleMutedChatsBarClick}/> : null;
                        t[36] = handleMutedChatsBarClick;
                        t[37] = mutedChats;
                        t[38] = mutedChatsCollapsed;
                        t[39] = pe;
                    } else {
                        pe = t[39];
                    }
                    return pe;
                }
            case o("WAWebChatlistTypes").WAWebChatlistSection.SEC_ASSIGNED_TO_YOU:
                {
                    let _e;
                    if (t[40] === Symbol.for("react.memo_cache_sentinel")) {
                        _e = <X1 header={s._("Assigned to you")}/>;
                        t[40] = _e;
                    } else {
                        _e = t[40];
                    }
                    return _e;
                }
            case o("WAWebChatlistTypes").WAWebChatlistRow.ROW_CHATS:
                {
                    const { data: data_1, index } = data;
                    let he;
                    if (t[41] !== getDetailImageSize) {
                        he = getDetailImageSize();
                        t[41] = getDetailImageSize;
                        t[42] = he;
                    } else {
                        he = t[42];
                    }
                    const wdsPreviewRowEligible = mode === r("WAWebChatlistPanelMode").Chatlist;
                    let Ce;
                    if (t[43] !== data_1 || t[44] !== createPreventAutoReadProps || t[45] !== filterPreset || t[46] !== handleArrowKeyInChatItem || t[47] !== handleChatClick || t[48] !== index || t[49] !== multiSelection || t[50] !== onStartMultiSelect || t[51] !== searchMatch || t[52] !== searchQuery || t[53] !== selectableState || t[54] !== selection || t[55] !== he || t[56] !== wdsPreviewRowEligible) {
                        Ce = <R chat={data_1} createPreventAutoReadProps={createPreventAutoReadProps} mode={o("WAWebChat.react").Mode.LAST} searchQuery={searchQuery} searchMatch={searchMatch} filterPreset={filterPreset} onClick={handleChatClick} mouseDownAsClick selectableState={selectableState} multiSelection={multiSelection} onStartMultiSelect={onStartMultiSelect} active={selection} ephemeralIcon="chat-list" showStatusRingAroundProfilePhoto index={index} photoSize={he} showCommunityInfo skipCheckMark handleArrowKeyInChatItem={handleArrowKeyInChatItem} wdsPreviewRowEligible={wdsPreviewRowEligible}/>;
                        t[43] = data_1;
                        t[44] = createPreventAutoReadProps;
                        t[45] = filterPreset;
                        t[46] = handleArrowKeyInChatItem;
                        t[47] = handleChatClick;
                        t[48] = index;
                        t[49] = multiSelection;
                        t[50] = onStartMultiSelect;
                        t[51] = searchMatch;
                        t[52] = searchQuery;
                        t[53] = selectableState;
                        t[54] = selection;
                        t[55] = he;
                        t[56] = wdsPreviewRowEligible;
                        t[57] = Ce;
                    } else {
                        Ce = t[57];
                    }
                    let be;
                    if (t[58] !== data_1 || t[59] !== Ce || t[60] !== q) {
                        be = _.jsx(r("WAWebChatlistWrappedItem.react"), babelHelpers.extends({}, q, {
                            model: data_1,
                            children: Ce
                        }));
                        t[58] = data_1;
                        t[59] = Ce;
                        t[60] = q;
                        t[61] = be;
                    } else {
                        be = t[61];
                    }
                    return be;
                }
            case o("WAWebChatlistTypes").WAWebChatlistRow.ROW_CONTACTS:
                {
                    const ve = data.data;
                    let Se;
                    if (t[62] !== ve || t[63] !== mode) {
                        Se = mode === r("WAWebChatlistPanelMode").CallsTab && o("WAWebVoipGatingUtils").isCallingEnabled() && !o("WAWebContactGetters").getIsMe(ve);
                        t[62] = ve;
                        t[63] = mode;
                        t[64] = Se;
                    } else {
                        Se = t[64];
                    }
                    const Re = Se;
                    let Le;
                    if (t[65] !== getDetailImageSize) {
                        Le = getDetailImageSize();
                        t[65] = getDetailImageSize;
                        t[66] = Le;
                    } else {
                        Le = t[66];
                    }
                    let hideStatus;
                    if (t[67] !== ve) {
                        hideStatus = o("WAWebContactGetters").getIsMe(ve);
                        t[67] = ve;
                        t[68] = hideStatus;
                    } else {
                        hideStatus = t[68];
                    }
                    let ke;
                    if (t[69] !== ve) {
                        ke = o("WAWebContactGetters").getIsMe(ve);
                        t[69] = ve;
                        t[70] = ke;
                    } else {
                        ke = t[70];
                    }
                    let Ie;
                    if (t[71] !== ve || t[72] !== Re) {
                        Ie = Re ? _.jsx(r("WAWebContactCallButtons.react"), {
                            contact: ve
                        }) : null;
                        t[71] = ve;
                        t[72] = Re;
                        t[73] = Ie;
                    } else {
                        Ie = t[73];
                    }
                    let Te;
                    if (t[74] !== ve || t[75] !== handleContactItemClick || t[76] !== searchMatch || t[77] !== searchQuery || t[78] !== selection || t[79] !== Le || t[80] !== hideStatus || t[81] !== ke || t[82] !== Ie) {
                        Te = <S contact={ve} active={selection} searchQuery={searchQuery} searchMatch={searchMatch} onClick={handleContactItemClick} mouseDownAsClick waitIdle showStatusRingAroundProfilePhoto photoSize={Le} hideStatus={hideStatus} showMessageYourselfName={ke} detail={Ie}/>;
                        t[74] = ve;
                        t[75] = handleContactItemClick;
                        t[76] = searchMatch;
                        t[77] = searchQuery;
                        t[78] = selection;
                        t[79] = Le;
                        t[80] = hideStatus;
                        t[81] = ke;
                        t[82] = Ie;
                        t[83] = Te;
                    } else {
                        Te = t[83];
                    }
                    let De;
                    if (t[84] !== ve || t[85] !== Te || t[86] !== q) {
                        De = _.jsx(r("WAWebChatlistWrappedItem.react"), babelHelpers.extends({}, q, {
                            model: ve,
                            children: Te
                        }));
                        t[84] = ve;
                        t[85] = Te;
                        t[86] = q;
                        t[87] = De;
                    } else {
                        De = t[87];
                    }
                    return De;
                }
            case o("WAWebChatlistTypes").WAWebChatlistRow.ROW_ORG_MEMBERS:
                {
                    const xe = data.data;
                    let $e;
                    if (t[88] !== handleContactItemClick || t[89] !== xe) {
                        $e = function(t) {
                            const e = o("WAWebOrgMemberSearchRows").toOrgMemberContact(xe);
                            if (e != null) {
                                handleContactItemClick(t, e);
                            }
                        };
                        t[88] = handleContactItemClick;
                        t[89] = xe;
                        t[90] = $e;
                    } else {
                        $e = t[90];
                    }
                    let Pe;
                    if (t[91] !== xe || t[92] !== $e) {
                        const Component = r("WAWebOrgMemberSearchCell.react");
                        Pe = <Component member={xe} onClick={$e}/>;
                        t[91] = xe;
                        t[92] = $e;
                        t[93] = Pe;
                    } else {
                        Pe = t[93];
                    }
                    let Ne;
                    if (t[94] !== xe || t[95] !== Pe || t[96] !== q) {
                        Ne = _.jsx(r("WAWebChatlistWrappedItem.react"), babelHelpers.extends({}, q, {
                            model: xe,
                            children: Pe
                        }));
                        t[94] = xe;
                        t[95] = Pe;
                        t[96] = q;
                        t[97] = Ne;
                    } else {
                        Ne = t[97];
                    }
                    return Ne;
                }
            case o("WAWebChatlistTypes").WAWebChatlistRow.ROW_ORG_MEMBERS_LOADING:
                {
                    let Me;
                    if (t[98] === Symbol.for("react.memo_cache_sentinel")) {
                        Me = _.jsx(r("WAWebOrgMemberSearchLoadingRow.react"), {});
                        t[98] = Me;
                    } else {
                        Me = t[98];
                    }
                    return Me;
                }
            case o("WAWebChatlistTypes").WAWebChatlistRow.ROW_ORG_MEMBERS_ERROR:
                {
                    let we;
                    if (t[99] !== data.failure || t[100] !== handlers.handleRetryOrgMemberSearch) {
                        const Component = r("WAWebOrgMemberSearchErrorRow.react");
                        we = <Component failure={data.failure} onRetry={handlers.handleRetryOrgMemberSearch}/>;
                        t[99] = data.failure;
                        t[100] = handlers.handleRetryOrgMemberSearch;
                        t[101] = we;
                    } else {
                        we = t[101];
                    }
                    return we;
                }
            case o("WAWebChatlistTypes").WAWebChatlistRow.ROW_OUT_CONTACTS:
                {
                    const Ae = data.data;
                    let Fe;
                    if (t[102] !== Ae || t[103] !== searchMatch) {
                        Fe = _.jsx(r("WAWebOutContactCell.react"), {
                            contact: Ae,
                            entryPoint: o("WAWebWamEnumCompanionInviteOriginType").COMPANION_INVITE_ORIGIN_TYPE.CHATLIST_SEARCH,
                            isSearchResult: true,
                            searchMatch
                        });
                        t[102] = Ae;
                        t[103] = searchMatch;
                        t[104] = Fe;
                    } else {
                        Fe = t[104];
                    }
                    let Oe;
                    if (t[105] !== Ae || t[106] !== Fe || t[107] !== q) {
                        Oe = _.jsx(r("WAWebChatlistWrappedItem.react"), babelHelpers.extends({}, q, {
                            model: Ae,
                            children: Fe
                        }));
                        t[105] = Ae;
                        t[106] = Fe;
                        t[107] = q;
                        t[108] = Oe;
                    } else {
                        Oe = t[108];
                    }
                    return Oe;
                }
            case o("WAWebChatlistTypes").WAWebChatlistRow.ROW_NON_CONTACT_PUSHNAME:
                {
                    const Be = data.data;
                    let We;
                    if (t[109] !== getDetailImageSize) {
                        We = getDetailImageSize();
                        t[109] = getDetailImageSize;
                        t[110] = We;
                    } else {
                        We = t[110];
                    }
                    let qe;
                    if (t[111] !== Be || t[112] !== handleContactItemClick || t[113] !== searchQuery || t[114] !== selection || t[115] !== We) {
                        qe = <S contact={Be} active={selection} searchQuery={searchQuery} onClick={handleContactItemClick} mouseDownAsClick waitIdle showStatusRingAroundProfilePhoto photoSize={We}/>;
                        t[111] = Be;
                        t[112] = handleContactItemClick;
                        t[113] = searchQuery;
                        t[114] = selection;
                        t[115] = We;
                        t[116] = qe;
                    } else {
                        qe = t[116];
                    }
                    let Ue;
                    if (t[117] !== Be || t[118] !== qe || t[119] !== q) {
                        Ue = _.jsx(r("WAWebChatlistWrappedItem.react"), babelHelpers.extends({}, q, {
                            model: Be,
                            children: qe
                        }));
                        t[117] = Be;
                        t[118] = qe;
                        t[119] = q;
                        t[120] = Ue;
                    } else {
                        Ue = t[120];
                    }
                    return Ue;
                }
            case o("WAWebChatlistTypes").WAWebChatlistRow.ROW_ACTIONS:
                {
                    const Ve = data.data;
                    let He;
                    if (t[121] !== Ve || t[122] !== onItemClick || t[123] !== searchQuery || t[124] !== selection) {
                        const Component = r("WAWebChatAction.react");
                        He = <Component action={Ve} active={selection} onClick={onItemClick} searchQuery={searchQuery}/>;
                        t[121] = Ve;
                        t[122] = onItemClick;
                        t[123] = searchQuery;
                        t[124] = selection;
                        t[125] = He;
                    } else {
                        He = t[125];
                    }
                    let Ge;
                    if (t[126] !== Ve || t[127] !== He || t[128] !== q) {
                        Ge = _.jsx(r("WAWebChatlistWrappedItem.react"), babelHelpers.extends({}, q, {
                            model: Ve,
                            children: He
                        }));
                        t[126] = Ve;
                        t[127] = He;
                        t[128] = q;
                        t[129] = Ge;
                    } else {
                        Ge = t[129];
                    }
                    return Ge;
                }
            case o("WAWebChatlistTypes").WAWebChatlistRow.ROW_DEBUG_COMMANDS:
                {
                    const ze = data.data;
                    if ((!r("gkx")("26258") || r("gkx")("16539")) && Y1 != null) {
                        let je;
                        if (t[130] !== ze || t[131] !== onItemClick || t[132] !== searchQuery || t[133] !== selection) {
                            je = <Y1 active={selection} debugCommand={ze} onClick={onItemClick} searchQuery={searchQuery}/>;
                            t[130] = ze;
                            t[131] = onItemClick;
                            t[132] = searchQuery;
                            t[133] = selection;
                            t[134] = je;
                        } else {
                            je = t[134];
                        }
                        let Ke;
                        if (t[135] !== ze || t[136] !== je || t[137] !== q) {
                            Ke = _.jsx(r("WAWebChatlistWrappedItem.react"), babelHelpers.extends({}, q, {
                                model: ze,
                                children: je
                            }));
                            t[135] = ze;
                            t[136] = je;
                            t[137] = q;
                            t[138] = Ke;
                        } else {
                            Ke = t[138];
                        }
                        return Ke;
                    }
                    o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "[WAWebChatlistItem] UnknownDataError: ROW_DEBUG_COMMANDS"
                    ])));
                    throw new (o("WAWebFlatList.react")).UnknownDataError(data);
                }
            case o("WAWebChatlistTypes").WAWebChatlistRow.ROW_COMMUNITIES:
                {
                    const Qe = data.data;
                    let parentGroupMetadata;
                    if (t[139] !== Qe.groupMetadata) {
                        parentGroupMetadata = r("nullthrows")(Qe.groupMetadata);
                        t[139] = Qe.groupMetadata;
                        t[140] = parentGroupMetadata;
                    } else {
                        parentGroupMetadata = t[140];
                    }
                    let Ye;
                    if (t[141] !== Qe || t[142] !== onItemClick) {
                        Ye = function(t) {
                            return onItemClick?.(t, Qe);
                        };
                        t[141] = Qe;
                        t[142] = onItemClick;
                        t[143] = Ye;
                    } else {
                        Ye = t[143];
                    }
                    let Je;
                    if (t[144] !== Qe || t[145] !== selection || t[146] !== parentGroupMetadata || t[147] !== Ye) {
                        const Component = o("WAWebCommunityCells.react").CommunityCell;
                        Je = <Component active={selection} parentGroupMetadata={parentGroupMetadata} parentGroupChat={Qe} onClick={Ye} inCommandPalette/>;
                        t[144] = Qe;
                        t[145] = selection;
                        t[146] = parentGroupMetadata;
                        t[147] = Ye;
                        t[148] = Je;
                    } else {
                        Je = t[148];
                    }
                    let Ze;
                    if (t[149] !== Qe || t[150] !== Je || t[151] !== q) {
                        Ze = _.jsx(r("WAWebChatlistWrappedItem.react"), babelHelpers.extends({}, q, {
                            model: Qe,
                            children: Je
                        }));
                        t[149] = Qe;
                        t[150] = Je;
                        t[151] = q;
                        t[152] = Ze;
                    } else {
                        Ze = t[152];
                    }
                    return Ze;
                }
            case o("WAWebChatlistTypes").WAWebChatlistRow.ROW_SETTINGS:
                {
                    const et = data.data;
                    let tt;
                    if (t[153] !== onItemClick || t[154] !== searchQuery || t[155] !== selection || t[156] !== et) {
                        const Component = r("WAWebChatSetting.react");
                        tt = <Component active={selection} onClick={onItemClick} searchQuery={searchQuery} setting={et}/>;
                        t[153] = onItemClick;
                        t[154] = searchQuery;
                        t[155] = selection;
                        t[156] = et;
                        t[157] = tt;
                    } else {
                        tt = t[157];
                    }
                    let nt;
                    if (t[158] !== et || t[159] !== tt || t[160] !== q) {
                        nt = _.jsx(r("WAWebChatlistWrappedItem.react"), babelHelpers.extends({}, q, {
                            model: et,
                            children: tt
                        }));
                        t[158] = et;
                        t[159] = tt;
                        t[160] = q;
                        t[161] = nt;
                    } else {
                        nt = t[161];
                    }
                    return nt;
                }
            case o("WAWebChatlistTypes").WAWebChatlistRow.ROW_COMMON_GROUPS:
                {
                    const commonGroup = data.data;
                    const ot = commonGroup[0];
                    let at;
                    if (t[162] !== commonGroup || t[163] !== searchQuery) {
                        at = _.jsx(r("WAWebCommonGroupSubtitle.react"), {
                            commonGroup,
                            searchQuery
                        });
                        t[162] = commonGroup;
                        t[163] = searchQuery;
                        t[164] = at;
                    } else {
                        at = t[164];
                    }
                    const it = at;
                    let lt;
                    if (t[165] !== createPreventAutoReadProps || t[166] !== ot) {
                        lt = createPreventAutoReadProps(ot);
                        t[165] = createPreventAutoReadProps;
                        t[166] = ot;
                        t[167] = lt;
                    } else {
                        lt = t[167];
                    }
                    let st;
                    if (t[168] !== filterPreset || t[169] !== ot || t[170] !== multiSelection || t[171] !== onItemClick || t[172] !== onStartMultiSelect || t[173] !== searchQuery || t[174] !== it || t[175] !== selectableState || t[176] !== selection || t[177] !== lt) {
                        st = <V1 {...babelHelpers.extends({
                            chat: ot,
                            secondary: it,
                            mode: o("WAWebChat.react").Mode.LAST,
                            searchQuery,
                            filterPreset,
                            onClick: onItemClick,
                            mouseDownAsClick: true,
                            selectableState,
                            multiSelection,
                            onStartMultiSelect,
                            active: selection
                        }, lt)}/>;
                        t[168] = filterPreset;
                        t[169] = ot;
                        t[170] = multiSelection;
                        t[171] = onItemClick;
                        t[172] = onStartMultiSelect;
                        t[173] = searchQuery;
                        t[174] = it;
                        t[175] = selectableState;
                        t[176] = selection;
                        t[177] = lt;
                        t[178] = st;
                    } else {
                        st = t[178];
                    }
                    let ut;
                    if (t[179] !== ot || t[180] !== st || t[181] !== q) {
                        ut = _.jsx(r("WAWebChatlistWrappedItem.react"), babelHelpers.extends({}, q, {
                            model: ot,
                            children: st
                        }));
                        t[179] = ot;
                        t[180] = st;
                        t[181] = q;
                        t[182] = ut;
                    } else {
                        ut = t[182];
                    }
                    return ut;
                }
            case o("WAWebChatlistTypes").WAWebChatlistRow.ROW_STARRED:
                {
                    const ct = data.data;
                    let dt;
                    if (t[183] !== ct) {
                        dt = o("WAWebFrontendMsgGetters").getChat(ct);
                        t[183] = ct;
                        t[184] = dt;
                    } else {
                        dt = t[184];
                    }
                    const mt = `chatlist-starred-message-${ct.id.id}`;
                    let pt;
                    if (t[185] !== filterPreset || t[186] !== onItemClick || t[187] !== searchQuery || t[188] !== selection || t[189] !== ct || t[190] !== dt || t[191] !== mt) {
                        const Component = r("WAWebChatMessage.react");
                        pt = <Component msg={ct} chat={dt} searchQuery={searchQuery} filterPreset={filterPreset} onClick={onItemClick} active={selection} testid={mt}/>;
                        t[185] = filterPreset;
                        t[186] = onItemClick;
                        t[187] = searchQuery;
                        t[188] = selection;
                        t[189] = ct;
                        t[190] = dt;
                        t[191] = mt;
                        t[192] = pt;
                    } else {
                        pt = t[192];
                    }
                    let _t;
                    if (t[193] !== ct || t[194] !== pt || t[195] !== q) {
                        _t = _.jsx(r("WAWebChatlistWrappedItem.react"), babelHelpers.extends({}, q, {
                            model: ct,
                            children: pt
                        }));
                        t[193] = ct;
                        t[194] = pt;
                        t[195] = q;
                        t[196] = _t;
                    } else {
                        _t = t[196];
                    }
                    return _t;
                }
            case o("WAWebChatlistTypes").WAWebChatlistRow.ROW_KEPT:
                {
                    const ft = data.data;
                    let gt;
                    if (t[197] !== ft) {
                        gt = o("WAWebFrontendMsgGetters").getChat(ft);
                        t[197] = ft;
                        t[198] = gt;
                    } else {
                        gt = t[198];
                    }
                    const ht = `chatlist-kept-message-${ft.id.id}`;
                    let yt;
                    if (t[199] !== filterPreset || t[200] !== handleKeptMessageClick || t[201] !== ft || t[202] !== searchQuery || t[203] !== selection || t[204] !== gt || t[205] !== ht) {
                        const Component = r("WAWebChatMessage.react");
                        yt = <Component msg={ft} chat={gt} searchQuery={searchQuery} filterPreset={filterPreset} onClick={handleKeptMessageClick} active={selection} testid={ht}/>;
                        t[199] = filterPreset;
                        t[200] = handleKeptMessageClick;
                        t[201] = ft;
                        t[202] = searchQuery;
                        t[203] = selection;
                        t[204] = gt;
                        t[205] = ht;
                        t[206] = yt;
                    } else {
                        yt = t[206];
                    }
                    let Ct;
                    if (t[207] !== ft || t[208] !== yt || t[209] !== q) {
                        Ct = _.jsx(r("WAWebChatlistWrappedItem.react"), babelHelpers.extends({}, q, {
                            model: ft,
                            children: yt
                        }));
                        t[207] = ft;
                        t[208] = yt;
                        t[209] = q;
                        t[210] = Ct;
                    } else {
                        Ct = t[210];
                    }
                    return Ct;
                }
            case o("WAWebChatlistTypes").WAWebChatlistRow.ROW_MSG:
                {
                    const bt = data.data;
                    let vt;
                    if (t[211] !== bt) {
                        vt = o("WAWebFrontendMsgGetters").getChat(bt);
                        t[211] = bt;
                        t[212] = vt;
                    } else {
                        vt = t[212];
                    }
                    const St = `chatlist-message-${bt.id.id}`;
                    let Rt;
                    if (t[213] !== filterPreset || t[214] !== bt || t[215] !== onItemClick || t[216] !== searchQuery || t[217] !== selection || t[218] !== vt || t[219] !== St) {
                        const Component = r("WAWebChatMessage.react");
                        Rt = <Component msg={bt} chat={vt} searchQuery={searchQuery} filterPreset={filterPreset} onClick={onItemClick} active={selection} testid={St}/>;
                        t[213] = filterPreset;
                        t[214] = bt;
                        t[215] = onItemClick;
                        t[216] = searchQuery;
                        t[217] = selection;
                        t[218] = vt;
                        t[219] = St;
                        t[220] = Rt;
                    } else {
                        Rt = t[220];
                    }
                    let Lt;
                    if (t[221] !== bt || t[222] !== Rt || t[223] !== q) {
                        Lt = _.jsx(r("WAWebChatlistWrappedItem.react"), babelHelpers.extends({}, q, {
                            model: bt,
                            children: Rt
                        }));
                        t[221] = bt;
                        t[222] = Rt;
                        t[223] = q;
                        t[224] = Lt;
                    } else {
                        Lt = t[224];
                    }
                    return Lt;
                }
            case o("WAWebChatlistTypes").WAWebChatlistRow.ROW_CALL_INCOMING:
                {
                    const Et = data.data;
                    let fallback;
                    if (t[225] === Symbol.for("react.memo_cache_sentinel")) {
                        fallback = <div style={{
                            minHeight: 72
                        }}/>;
                        t[225] = fallback;
                    } else {
                        fallback = t[225];
                    }
                    let It;
                    if (t[226] !== Et) {
                        const Component = r("CometPlaceholder.react");
                        It = <Component fallback={fallback} name="WAWebCallLogIncomingCell"><B3 call={Et}/></Component>;
                        t[226] = Et;
                        t[227] = It;
                    } else {
                        It = t[227];
                    }
                    return It;
                }
            case o("WAWebChatlistTypes").WAWebChatlistRow.ROW_CALL_ONGOING:
                {
                    const Tt = data.data;
                    let Dt;
                    if (t[228] !== Tt || t[229] !== selection) {
                        Dt = function() {
                            return selection?.setVal(Tt);
                        };
                        t[228] = Tt;
                        t[229] = selection;
                        t[230] = Dt;
                    } else {
                        Dt = t[230];
                    }
                    let xt;
                    if (t[231] !== Tt || t[232] !== selection || t[233] !== Dt) {
                        const Component = r("WAWebCallLogJoinOngoingCell.react");
                        xt = <Component callLogMsg={Tt} active={selection} onClick={Dt}/>;
                        t[231] = Tt;
                        t[232] = selection;
                        t[233] = Dt;
                        t[234] = xt;
                    } else {
                        xt = t[234];
                    }
                    let $t;
                    if (t[235] !== Tt || t[236] !== xt || t[237] !== q) {
                        $t = _.jsx(r("WAWebChatlistWrappedItem.react"), babelHelpers.extends({}, q, {
                            model: Tt,
                            children: xt
                        }));
                        t[235] = Tt;
                        t[236] = xt;
                        t[237] = q;
                        t[238] = $t;
                    } else {
                        $t = t[238];
                    }
                    return $t;
                }
            case o("WAWebChatlistTypes").WAWebChatlistRow.ROW_CALL_LOG:
                {
                    const { data: data_1, index } = data;
                    const Mt = data_1[data_1.length - 1];
                    let wt;
                    if (t[239] !== Mt) {
                        wt = s._("Select call from {name}", [
                            s._param("name", o("WAWebMsgModelUtils").getMsgDisplayName(Mt))
                        ]);
                        t[239] = Mt;
                        t[240] = wt;
                    } else {
                        wt = t[240];
                    }
                    let At;
                    if (t[241] !== data_1 || t[242] !== handleMultiSelect) {
                        At = function(t, n, r) {
                            for (const e of data_1){
                                handleMultiSelect(e, n, r);
                            }
                        };
                        t[241] = data_1;
                        t[242] = handleMultiSelect;
                        t[243] = At;
                    } else {
                        At = t[243];
                    }
                    let Ft;
                    if (t[244] !== Mt || t[245] !== selection) {
                        Ft = function() {
                            return selection?.setVal(Mt);
                        };
                        t[244] = Mt;
                        t[245] = selection;
                        t[246] = Ft;
                    } else {
                        Ft = t[246];
                    }
                    let Ot;
                    if (t[247] !== data_1 || t[248] !== filterPreset || t[249] !== index || t[250] !== searchQuery || t[251] !== selection || t[252] !== Ft) {
                        const Component = o("WAWebCallLogEntryCell.react").CallLogEntryCell;
                        Ot = <Component itemPosition={index} mergedMsgs={data_1} searchQuery={searchQuery} filterPreset={filterPreset} onClick={Ft} active={selection} testidPrefix="chatlist-message"/>;
                        t[247] = data_1;
                        t[248] = filterPreset;
                        t[249] = index;
                        t[250] = searchQuery;
                        t[251] = selection;
                        t[252] = Ft;
                        t[253] = Ot;
                    } else {
                        Ot = t[253];
                    }
                    let Bt;
                    if (t[254] !== Mt || t[255] !== wt || t[256] !== At || t[257] !== Ot || t[258] !== q) {
                        Bt = _.jsx(r("WAWebChatlistWrappedItem.react"), babelHelpers.extends({}, q, {
                            model: Mt,
                            checkboxAriaLabel: wt,
                            onSelect: At,
                            children: Ot
                        }));
                        t[254] = Mt;
                        t[255] = wt;
                        t[256] = At;
                        t[257] = Ot;
                        t[258] = q;
                        t[259] = Bt;
                    } else {
                        Bt = t[259];
                    }
                    return Bt;
                }
            case o("WAWebChatlistTypes").WAWebChatlistRow.ROW_CALLS_FAVORITE:
                {
                    const favoriteItem = data.data;
                    const Ut = favoriteItem.chat ?? favoriteItem.contact;
                    if (Ut == null) {
                        return null;
                    }
                    let Vt;
                    if (t[260] !== favoriteItem || t[261] !== Ut || t[262] !== selection) {
                        Vt = function() {
                            selection?.setVal(Ut);
                            o("WAWebVoipCallsTabOpenCallInfo").openVoipCallsTabFavorite(favoriteItem);
                        };
                        t[260] = favoriteItem;
                        t[261] = Ut;
                        t[262] = selection;
                        t[263] = Vt;
                    } else {
                        Vt = t[263];
                    }
                    let Ht;
                    if (t[264] !== getDetailImageSize) {
                        Ht = getDetailImageSize();
                        t[264] = getDetailImageSize;
                        t[265] = Ht;
                    } else {
                        Ht = t[265];
                    }
                    let Gt;
                    if (t[266] !== favoriteItem || t[267] !== selection || t[268] !== Vt || t[269] !== Ht) {
                        const Component = r("WAWebFavoriteCell.react");
                        Gt = <Component active={selection} favoriteItem={favoriteItem} onClick={Vt} photoSize={Ht} testid="chatlist-favorite"/>;
                        t[266] = favoriteItem;
                        t[267] = selection;
                        t[268] = Vt;
                        t[269] = Ht;
                        t[270] = Gt;
                    } else {
                        Gt = t[270];
                    }
                    let zt;
                    if (t[271] !== Ut || t[272] !== Gt || t[273] !== q) {
                        zt = _.jsx(r("WAWebChatlistWrappedItem.react"), babelHelpers.extends({}, q, {
                            model: Ut,
                            children: Gt
                        }));
                        t[271] = Ut;
                        t[272] = Gt;
                        t[273] = q;
                        t[274] = zt;
                    } else {
                        zt = t[274];
                    }
                    return zt;
                }
            case o("WAWebChatlistTypes").WAWebChatlistRow.ROW_CALLS_ADD_FAVORITE:
                {
                    let jt;
                    if (t[275] !== selection) {
                        jt = <L active={selection}/>;
                        t[275] = selection;
                        t[276] = jt;
                    } else {
                        jt = t[276];
                    }
                    return jt;
                }
            case o("WAWebChatlistTypes").WAWebChatlistRow.ROW_UPCOMING_EVENT:
                {
                    const Kt = data.data;
                    let Qt;
                    if (t[277] !== Kt) {
                        Qt = function() {
                            const e = new (o("WAWebPreCallUserJourneyLogger")).PreCallUserJourneyLogger;
                            e.clickEventDetail(o("WAWebWamEnumSubSurface").SUB_SURFACE.NONE);
                            const t = o("WAWebFrontendMsgGetters").getChat(Kt);
                            const n = o("WAWebFrontendMsgGetters").getAsEventCreation(Kt);
                            if (n != null) {
                                o("WAWebCmd").Cmd.openEventInfoDrawer(t, n);
                            }
                        };
                        t[277] = Kt;
                        t[278] = Qt;
                    } else {
                        Qt = t[278];
                    }
                    const Xt = Qt;
                    let Yt;
                    if (t[279] !== Kt || t[280] !== Xt || t[281] !== selection) {
                        const Component = r("WAWebUpcomingEventCell.react");
                        Yt = <Component eventMessage={Kt} active={selection} onClick={Xt}/>;
                        t[279] = Kt;
                        t[280] = Xt;
                        t[281] = selection;
                        t[282] = Yt;
                    } else {
                        Yt = t[282];
                    }
                    let Jt;
                    if (t[283] !== Kt || t[284] !== Yt || t[285] !== q) {
                        Jt = _.jsx(r("WAWebChatlistWrappedItem.react"), babelHelpers.extends({}, q, {
                            model: Kt,
                            children: Yt
                        }));
                        t[283] = Kt;
                        t[284] = Yt;
                        t[285] = q;
                        t[286] = Jt;
                    } else {
                        Jt = t[286];
                    }
                    return Jt;
                }
            default:
                o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAWebChatlistItem] UnknownDataError: default"
                ])));
                throw new (o("WAWebFlatList.react")).UnknownDataError(data);
        }
    }
    function K1Component() {
        const e = o("react-compiler-runtime").c(1);
        const t = I;
        let n;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WDSButton.react");
            n = <Component aria-label={s._("View all favourites")} label={s._("View all")} onPress={t} size="small" tabOrder={o("WAWebTabOrder").TAB_ORDER.CHAT_LIST} testid="view-all-favorites-section-button" variant="outline"/>;
            e[0] = n;
        } else {
            n = e[0];
        }
        return n;
    }
    function I() {
        new (o("WAWebPreCallUserJourneyLogger")).PreCallUserJourneyLogger().tapFavoritesSeeAll();
        o("WAWebCallUserJourneyCallsTabAction").logCallsTabCallAction(o("WAWebCallUserJourneyLogger").OUT_OF_CALL_ACTION_TYPE.TAP_FAVORITES_SEE_ALL, o("WAWebWamEnumSubSurface").SUB_SURFACE.NONE);
        r("WAWebVoipCallsTabPanelManager").trigger("openFavoritesDrawer");
    }
    function TComponent() {
        const e = o("react-compiler-runtime").c(1);
        const t = D;
        let n;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WDSButton.react");
            n = <Component aria-label={s._("View all upcoming events")} label={s._("View all")} onPress={t} size="small" tabOrder={o("WAWebTabOrder").TAB_ORDER.CHAT_LIST} testid="view-all-upcoming-events-section-button" variant="outline"/>;
            e[0] = n;
        } else {
            n = e[0];
        }
        return n;
    }
    function D() {
        r("WAWebVoipCallsTabPanelManager").trigger("openUpcomingEventsDrawer");
    }
    function X1(e) {
        const t = o("react-compiler-runtime").c(5);
        const { header, testid } = e;
        let header_1;
        if (t[0] !== header) {
            header_1 = {
                title: header,
                type: "default"
            };
            t[0] = header;
            t[1] = header_1;
        } else {
            header_1 = t[1];
        }
        const l = testid ?? "section-header";
        let s;
        if (t[2] !== header_1 || t[3] !== l) {
            s = _.jsx(r("WDSSectionDivider.react"), {
                header: header_1,
                testid: l
            });
            t[2] = header_1;
            t[3] = l;
            t[4] = s;
        } else {
            s = t[4];
        }
        return s;
    }
    const $ = memo(EComponent);
    l.default = $;
}, 226);