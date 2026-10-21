__d("WAWebSelectModal.react", [
    "fbt",
    "$InternalEnum",
    "Promise",
    "WAWebBizMultiSelectProductList.react",
    "WAWebBotUtils",
    "WAWebChatContact.react",
    "WAWebChatListSearch.react",
    "WAWebChatModel",
    "WAWebContactCollection",
    "WAWebContactCollectionUtils",
    "WAWebContactComparator",
    "WAWebContactModel",
    "WAWebContactUtils",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebFbtCommon",
    "WAWebFindChatAction",
    "WAWebFlatListController",
    "WAWebFocusTracer",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebMultiSelectChatList.react",
    "WAWebMultiSelectContactList.react",
    "WAWebMultiSelection",
    "WAWebOutContactModel",
    "WAWebOutContactPillItem.react",
    "WAWebSelectAllMenuBarItem.react",
    "WAWebSelectModalFooter.react",
    "WAWebSelectModalSearchBox.react",
    "WAWebSelectModalSelectedChatList.react",
    "WAWebShareContentUserJourneyLogger",
    "WAWebSingleSelection",
    "WAWebSpinner.react",
    "WAWebUsernameGatingUtils",
    "WAWebUsernameSearchPlaceholder",
    "WAWebWid",
    "WAWebWidFactory",
    "WDSPaddings.stylex",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useLazyRef",
    "useVisibility",
    "useWAWebListener"
], function(t, n, r, o, a, i, l, s) {
    const e = [
        "ref"
    ];
    let u;
    let c;
    let d;
    const m = d || (d = o("react"));
    const p = d;
    const { useCallback, useEffect, useEffectEvent, useImperativeHandle, useMemo, useRef, useState } = p;
    const v = n("$InternalEnum").Mirrored([
        "ChatSelectModal",
        "ContactSelectModal",
        "ParticipantManageModal",
        "ProductSelectModal"
    ]);
    const S = {
        footer: {
            boxShadow: "xpx74rz",
            $$css: true
        },
        spinner: {
            justifyContent: "xl56j7k",
            alignItems: "x6s0dn4",
            $$css: true
        },
        pillContainer: {
            display: "x78zum5",
            flexWrap: "x1a02dak",
            maxHeight: "x1aoj0v",
            overflowX: "xw2csxc",
            overflowY: "x1odjw0f",
            backgroundColor: "x1280gxy",
            $$css: true
        }
    };
    function R(contacts) {
        return contacts ?? o("WAWebContactCollectionUtils").getFilteredContacts(o("WAWebContactCollection").ContactCollection, {});
    }
    function LComponent(e) {
        const t = o("react-compiler-runtime").c(64);
        const { activeRef, flatListControllerRef, handleLeaveList, handleSelectionChanged, handleUsernameContactRowClicked, listRef, onLoading, outContactSelections, props, searchText, selectionsRef } = e;
        switch(props.listType){
            case v.ChatSelectModal:
                {
                    const b = props.getInitialItems;
                    const S = selectionsRef;
                    const includeMetaAi = props.includeMetaAi ?? false;
                    const includeHatch = props.includeHatch ?? false;
                    const includeMyStatus = props.includeMyStatus ?? false;
                    const includeOrgMembers = props.includeOrgMembers ?? false;
                    let T;
                    if (t[0] !== activeRef || t[1] !== flatListControllerRef || t[2] !== b || t[3] !== handleLeaveList || t[4] !== handleSelectionChanged || t[5] !== listRef || t[6] !== props.chatFilter || t[7] !== props.contactFilter || t[8] !== props.customItemSecondaryText || t[9] !== props.ephemeralIcon || t[10] !== props.excludeAcp2RestrictedChats || t[11] !== props.excludeChat || t[12] !== props.excludeContacts || t[13] !== props.hasForwarded || t[14] !== props.hasFrequentlyForwarded || t[15] !== props.includeNewsletters || t[16] !== props.isDisabled || t[17] !== props.maxItems || t[18] !== props.maxItemsExceedErrorMsg || t[19] !== props.onDataLoaded || t[20] !== props.onEditStatusAudience || t[21] !== searchText || t[22] !== S || t[23] !== includeMetaAi || t[24] !== includeHatch || t[25] !== includeMyStatus || t[26] !== includeOrgMembers) {
                        const Component = r("WAWebMultiSelectChatList.react");
                        T = <Component ref={listRef} excludeChat={props.excludeChat} getInitialItems={b} searchText={searchText} active={activeRef} selections={S} maxChats={props.maxItems} maxChatsExceedErrorMsg={props.maxItemsExceedErrorMsg} onLeaveList={handleLeaveList} onSelectionChanged={handleSelectionChanged} hasFrequentlyForwarded={props.hasFrequentlyForwarded} hasForwarded={props.hasForwarded} flatListController={flatListControllerRef} isDisabled={props.isDisabled} ephemeralIcon={props.ephemeralIcon} customItemSecondaryText={props.customItemSecondaryText} onChatsLoaded={props.onDataLoaded} excludeContacts={props.excludeContacts} includeNewsletters={props.includeNewsletters} chatFilter={props.chatFilter} contactFilter={props.contactFilter} excludeAcp2RestrictedChats={props.excludeAcp2RestrictedChats} includeMetaAi={includeMetaAi} includeHatch={includeHatch} includeMyStatus={includeMyStatus} includeOrgMembers={includeOrgMembers} onEditStatusAudience={props.onEditStatusAudience}/>;
                        t[0] = activeRef;
                        t[1] = flatListControllerRef;
                        t[2] = b;
                        t[3] = handleLeaveList;
                        t[4] = handleSelectionChanged;
                        t[5] = listRef;
                        t[6] = props.chatFilter;
                        t[7] = props.contactFilter;
                        t[8] = props.customItemSecondaryText;
                        t[9] = props.ephemeralIcon;
                        t[10] = props.excludeAcp2RestrictedChats;
                        t[11] = props.excludeChat;
                        t[12] = props.excludeContacts;
                        t[13] = props.hasForwarded;
                        t[14] = props.hasFrequentlyForwarded;
                        t[15] = props.includeNewsletters;
                        t[16] = props.isDisabled;
                        t[17] = props.maxItems;
                        t[18] = props.maxItemsExceedErrorMsg;
                        t[19] = props.onDataLoaded;
                        t[20] = props.onEditStatusAudience;
                        t[21] = searchText;
                        t[22] = S;
                        t[23] = includeMetaAi;
                        t[24] = includeHatch;
                        t[25] = includeMyStatus;
                        t[26] = includeOrgMembers;
                        t[27] = T;
                    } else {
                        T = t[27];
                    }
                    return T;
                }
            case v.ParticipantManageModal:
            case v.ContactSelectModal:
                {
                    const D = props.getInitialItems;
                    const x = selectionsRef;
                    const customGetKnownContacts = props.customGetKnownContacts;
                    let P;
                    if (t[28] !== props.contacts) {
                        P = R(props.contacts);
                        t[28] = props.contacts;
                        t[29] = P;
                    } else {
                        P = t[29];
                    }
                    let N;
                    if (t[30] !== activeRef || t[31] !== flatListControllerRef || t[32] !== D || t[33] !== handleLeaveList || t[34] !== handleSelectionChanged || t[35] !== handleUsernameContactRowClicked || t[36] !== listRef || t[37] !== onLoading || t[38] !== outContactSelections || t[39] !== props.allowBlockedContacts || t[40] !== props.allowUnknownContactSearch || t[41] !== props.customGetKnownContacts || t[42] !== props.customSecondaryText || t[43] !== props.includeYouSection || t[44] !== props.isDisabled || t[45] !== props.isSelected || t[46] !== props.maxItems || t[47] !== props.maxItemsExceedErrorMsg || t[48] !== props.noResultsText || t[49] !== props.outContactInviteEntryPoint || t[50] !== props.outContacts || t[51] !== props.suggestedContacts || t[52] !== props.targetWindow || t[53] !== searchText || t[54] !== x || t[55] !== P) {
                        const Component = o("WAWebMultiSelectContactList.react").MultiSelectContactList;
                        N = <Component handleUsernameContactRowClicked={handleUsernameContactRowClicked} ref={listRef} customGetKnownContacts={customGetKnownContacts} contacts={P} suggestedContacts={props.suggestedContacts} includeYouSection={props.includeYouSection} getInitialItems={D} searchText={searchText} active={activeRef} selections={x} maxContacts={props.maxItems} maxContactsExceedErrorMsg={props.maxItemsExceedErrorMsg} onLeaveList={handleLeaveList} onSelectionChanged={handleSelectionChanged} isDisabled={props.isDisabled} isSelected={props.isSelected} customSecondaryText={props.customSecondaryText} allowBlockedContacts={props.allowBlockedContacts} flatListController={flatListControllerRef} allowUnknownContactSearch={props.allowUnknownContactSearch} noResultsText={props.noResultsText} onLoading={onLoading} outContacts={props.outContacts} outContactInviteEntryPoint={props.outContactInviteEntryPoint} outContactSelections={outContactSelections} targetWindow={props.targetWindow}/>;
                        t[30] = activeRef;
                        t[31] = flatListControllerRef;
                        t[32] = D;
                        t[33] = handleLeaveList;
                        t[34] = handleSelectionChanged;
                        t[35] = handleUsernameContactRowClicked;
                        t[36] = listRef;
                        t[37] = onLoading;
                        t[38] = outContactSelections;
                        t[39] = props.allowBlockedContacts;
                        t[40] = props.allowUnknownContactSearch;
                        t[41] = props.customGetKnownContacts;
                        t[42] = props.customSecondaryText;
                        t[43] = props.includeYouSection;
                        t[44] = props.isDisabled;
                        t[45] = props.isSelected;
                        t[46] = props.maxItems;
                        t[47] = props.maxItemsExceedErrorMsg;
                        t[48] = props.noResultsText;
                        t[49] = props.outContactInviteEntryPoint;
                        t[50] = props.outContacts;
                        t[51] = props.suggestedContacts;
                        t[52] = props.targetWindow;
                        t[53] = searchText;
                        t[54] = x;
                        t[55] = P;
                        t[56] = N;
                    } else {
                        N = t[56];
                    }
                    return N;
                }
            case v.ProductSelectModal:
                {
                    const M = selectionsRef;
                    let w;
                    if (t[57] !== activeRef || t[58] !== flatListControllerRef || t[59] !== handleSelectionChanged || t[60] !== listRef || t[61] !== props.onDataLoaded || t[62] !== M) {
                        const Component = r("WAWebBizMultiSelectProductList.react");
                        w = <Component ref={listRef} flatListController={flatListControllerRef} active={activeRef} selections={M} onSelectionChanged={handleSelectionChanged} onProductsLoaded={props.onDataLoaded}/>;
                        t[57] = activeRef;
                        t[58] = flatListControllerRef;
                        t[59] = handleSelectionChanged;
                        t[60] = listRef;
                        t[61] = props.onDataLoaded;
                        t[62] = M;
                        t[63] = w;
                    } else {
                        w = t[63];
                    }
                    return w;
                }
        }
    }
    function EComponent(e) {
        const t = o("react-compiler-runtime").c(4);
        const { previewComponent, selectionsRef } = e;
        let i;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            i = [];
            t[0] = i;
        } else {
            i = t[0];
        }
        const l = useState(i);
        const s = l[0];
        const u = l[1];
        let c;
        let d;
        if (t[1] !== selectionsRef) {
            c = function() {
                const selectionsRef_current = selectionsRef.current;
                const t = ()=>{
                    const t = selectionsRef_current.getSelected();
                    u(t);
                };
                t();
                const n = function() {
                    t();
                };
                selectionsRef_current.on("all", n);
                return function() {
                    selectionsRef_current.off("all", n);
                };
            };
            d = [
                selectionsRef
            ];
            t[1] = selectionsRef;
            t[2] = c;
            t[3] = d;
        } else {
            c = t[2];
            d = t[3];
        }
        useEffect(c, d);
        const m = s.length === 1;
        const p = s[0];
        if (p == null || !m) {
            return null;
        }
        let _ = false;
        if (p.id != null) {
            const g = String(p.id);
            if (r("WAWebWid").isWid(g)) {
                const h = o("WAWebWidFactory").createWid(g);
                _ = o("WAWebBotUtils").isMetaAiBot(h);
            }
        }
        if (_) {
            return previewComponent;
        }
        return null;
    }
    function KComponent(t) {
        const t_ref = t.ref;
        const l = babelHelpers.objectWithoutPropertiesLoose(t, e);
        const { activeWithoutSelection, disclaimer, enableKeyboardSelectionFix } = l;
        const I = enableKeyboardSelectionFix === undefined ? false : enableKeyboardSelectionFix;
        const { enableSelectAll, footerAccessory, getAnnouncementSummary, getInitialOutContacts, getSelectionSummary, groupWid, handleUsernameContactRowClicked, hasDirtyAppendMsgComposeBox } = l;
        const A = hasDirtyAppendMsgComposeBox === undefined ? false : hasDirtyAppendMsgComposeBox;
        const { hasForwarded, headerRightActionElement, hideFooter } = l;
        const W = hideFooter === undefined ? false : hideFooter;
        const l_isNonMediaForward = l.isNonMediaForward;
        const U = l_isNonMediaForward === undefined ? false : l_isNonMediaForward;
        const { listType, loadingInitialItems, maxItems, multipleSelectionFooterType, onBack, onCancel, onConfirm, onOutContactSelectionChanged, onOverlayClick, onSearchMouseDown, onSearchTermChanged, onSelectionChanged, previewComponent, shouldShowSelectedChatList } = l;
        const re = shouldShowSelectedChatList === undefined ? false : shouldShowSelectedChatList;
        const { shouldShowSelectionSummary, singleSelectionFooterType, testid, tsNavigationData, useShortName } = l;
        const ueRef = useRef(null);
        const ceRef = useRef(null);
        const deRef = useRef(null);
        const meRef = useRef(false);
        const pe = I;
        const _e = pe ? l.targetWindow ?? window : null;
        o("useWAWebListener").useListener(_e, "keydown", function() {
            meRef.current = false;
        }, {
            capture: true
        });
        o("useWAWebListener").useListener(_e, "click", function(e) {
            meRef.current = e.detail !== 0;
        }, {
            capture: true
        });
        const fe = r("useVisibility")({
            onVisible: function() {
                o("WAWebShareContentUserJourneyLogger").ShareContentUserJourneyLogger.contactPickerDisplayed();
            }
        });
        const ge = fe[0];
        const he = r("useLazyRef")(function() {
            return new (r("WAWebSingleSelection"))([], function(e) {
                return e.id.toString();
            });
        });
        const selectionsRef = r("useLazyRef")(function() {
            return new (r("WAWebMultiSelection"))([], function(e) {
                return e.id.toString();
            });
        });
        const Ce = useState(function() {
            const e = new (r("WAWebMultiSelection"))([], function(e) {
                return `${e.id}`;
            });
            if (getInitialOutContacts != null) {
                getInitialOutContacts().forEach((t)=>{
                    e.setVal(t, true);
                });
            }
            return e;
        });
        const outContactSelections = Ce[0];
        const ve = r("useLazyRef")(function() {
            return new (r("WAWebFlatListController"));
        });
        const Se = useState("");
        const Re = Se[0];
        const Le = Se[1];
        const setSearchText = useCallback(function(e) {
            Le(e);
            onSearchTermChanged?.(e);
        }, [
            onSearchTermChanged
        ]);
        const ke = useState(false);
        const Ie = ke[0];
        const onLoading = ke[1];
        const De = useState(false);
        const xe = De[0];
        const $e = De[1];
        const Pe = useState(false);
        const isAllSelected = Pe[0];
        const Me = Pe[1];
        const we = useState([]);
        const Ae = we[0];
        const Fe = we[1];
        const Oe = useState([]);
        const Be = Oe[0];
        const We = Oe[1];
        const qe = useMemo(function() {
            return R(l.contacts).length + (l.outContacts?.length ?? 0);
        }, [
            l.contacts,
            l.outContacts
        ]);
        const startActive = (l.getInitialItems ? l.getInitialItems().length !== 0 : false) || (getInitialOutContacts ? getInitialOutContacts().length !== 0 : false);
        const Ve = useEffectEvent(function(e) {
            return onOutContactSelectionChanged?.(e);
        });
        useEffect(function() {
            const ye_current = selectionsRef.current;
            const t = ()=>{
                const t = ye_current.getSelected();
                const n = outContactSelections.getSelected();
                const o = t.length + n.length;
                $e(o > 0);
                Fe(n);
                Ve(n);
                Me(qe > 0 && o === qe);
                if (listType === v.ParticipantManageModal) {
                    We(t.filter((e)=>e instanceof r("WAWebContactModel")));
                }
            };
            t();
            const n = function() {
                t();
            };
            const o = function() {
                t();
            };
            ye_current.on("all", n);
            outContactSelections.on("all", o);
            return function() {
                ye_current.off("all", n);
                outContactSelections.off("all", o);
            };
        }, [
            listType,
            selectionsRef,
            outContactSelections,
            qe
        ]);
        const handleFocusList = function(t) {
            if (t) {
                t.preventDefault();
                t.stopPropagation();
            }
        };
        useImperativeHandle(t_ref, function() {
            return {
                handleFocusList,
                getElement: function() {
                    return ueRef.current;
                }
            };
        });
        const onDown = function(t) {
            he.current.setFirst(true);
        };
        const onScroll = function(t) {
            let e;
            if ((e = deRef.current) != null && e.updateForScrollEvent) {
                deRef.current.updateForScrollEvent(t);
            }
        };
        const je = function(t) {
            he.current.unset();
        };
        const handleLeaveList = function(t) {
            r("WAWebFocusTracer").focus(ceRef.current);
        };
        const Qe = function(t) {
            let e;
            if (!(pe || (e = deRef.current) == null)) {
                e.toggleFirst(false);
            }
        };
        const onForward = function() {
            const e = selectionsRef.current.getSelected();
            const outContacts = outContactSelections.getSelected();
            let a = false;
            if (l.includeMyStatus === true) {
                a = e.some((e)=>e instanceof o("WAWebChatModel").Chat && e.id.isStatus());
            }
            o("WAWebShareContentUserJourneyLogger").ShareContentUserJourneyLogger.recipientsSelected(e.length, a);
            if (listType === v.ParticipantManageModal) {
                onConfirm({
                    selectedItems: e.filter((e)=>e instanceof r("WAWebContactModel")),
                    outContacts
                });
            } else if (listType === v.ContactSelectModal || listType === v.ProductSelectModal) {
                onConfirm({
                    selectedItems: e
                });
            } else {
                (c || (c = n("Promise"))).all(e.map((e)=>{
                    if (e instanceof r("WAWebContactModel")) {
                        return o("WAWebFindChatAction").findOrCreateLatestChat(e.id, "forwardSelectedModals").then(({ chat })=>chat);
                    }
                    return e;
                })).then((e)=>{
                    onConfirm({
                        selectedItems: e,
                        isSearchResult: !!Re
                    });
                });
            }
        };
        const handleSelectionChanged = function(item, n) {
            if (!pe || meRef.current) {
                ceRef.current?.select();
            }
            if (onSelectionChanged != null) {
                const r = selectionsRef.current.getSelected();
                onSelectionChanged({
                    item,
                    selected: n,
                    selectedItems: r
                });
            }
        };
        const onDelete_1 = function(t, item) {
            const e = selectionsRef.current.getSelected();
            const r = e.find((e)=>{
                const r = e.contact ?? e;
                return r.id.equals(item.id);
            });
            if (r != null && (selectionsRef.current.setVal(r, false), onSelectionChanged != null)) {
                const o = selectionsRef.current.getSelected();
                onSelectionChanged({
                    item,
                    selected: false,
                    selectedItems: o
                });
            }
        };
        const Ze = function() {
            let e;
            if ((e = deRef.current) != null && e.selectAll) {
                deRef.current.selectAll();
            }
        };
        const et = function() {
            if (onCancel != null) {
                const e = selectionsRef.current.getSelected();
                onCancel(e);
            } else {
                o("WAWebModalManager").ModalManager.close();
            }
            o("WAWebShareContentUserJourneyLogger").ShareContentUserJourneyLogger.cancel();
        };
        const tt = ()=>{
            if (enableSelectAll !== true || listType !== v.ContactSelectModal) {
                return false;
            }
            const e = R(l.contacts);
            return maxItems == null || e.length <= maxItems;
        };
        const onDelete = function(t) {
            outContactSelections.setVal(t, false);
        };
        const rt = useMemo(function() {
            const e = [].concat(Be).sort(o("WAWebContactComparator").ContactComparator);
            const t = [].concat(Ae).sort(o("WAWebContactComparator").ContactComparator);
            return o("WAWebContactUtils").mergeSortedContacts(e, t);
        }, [
            Be,
            Ae
        ]);
        const ot = listType === v.ParticipantManageModal && rt.length > 0 ? <div {...babelHelpers.extends({}, (u || (u = r("stylex"))).props(S.pillContainer, o("WDSPaddings.stylex").wdsPaddings.paddingTop20, o("WDSPaddings.stylex").wdsPaddings.paddingEnd24, o("WDSPaddings.stylex").wdsPaddings.paddingBottom4, o("WDSPaddings.stylex").wdsPaddings.paddingStart24), {
            children: rt.map((e)=>{
                if (e instanceof r("WAWebOutContactModel")) {
                    const Component = r("WAWebOutContactPillItem.react");
                    return <Component key={e.id.toString()} outContact={e} onDelete={onDelete}/>;
                }
                const Component = o("WAWebChatContact.react").Contact;
                return <Component key={e.id.toString()} contact={e} useShortName={useShortName ?? false} onDelete={l.isDisabled != null && l.isDisabled(e) ? undefined : onDelete_1} type={o("WAWebChatContact.react").ContactCellType.SMALL} theme="list-names" waitIdle truncateName/>;
            })
        })}/> : null;
        const Component = r("WAWebSelectModalSelectedChatList.react");
        const at = re && (listType === v.ChatSelectModal || listType === v.ContactSelectModal) ? <Component chats={selectionsRef.current} onDelete={onDelete_1}/> : null;
        const it = function() {
            if (!A) {
                if (onOverlayClick != null) {
                    onOverlayClick();
                    return;
                }
                o("WAWebModalManager").ModalManager.existsSupportModal(function(e) {
                    if (e) {
                        o("WAWebModalManager").ModalManager.closeSupportModal();
                    } else {
                        o("WAWebModalManager").ModalManager.close();
                    }
                });
            }
        };
        const ariaLabel = listType === v.ContactSelectModal ? s._("Search contacts") : null;
        const sendButtonAriaLabel = listType === v.ContactSelectModal ? s._("Send selected contacts") : null;
        const ut = onBack ? {
            onBack
        } : {
            onCancel: et
        };
        if (loadingInitialItems === true) {
            const Component = r("WAWebDrawer.react");
            const Component_1 = o("WAWebModal.react").Modal;
            return <Component_1 tsNavigationData={tsNavigationData ?? undefined} ref={ueRef} type={o("WAWebModal.react").ModalTheme.Tower} onOverlayClick={it}><Component key="chat-modal" testid={testid ?? "chat-modal"} disableNavigationLogging xstyle={S.spinner}>{m.jsx(o("WAWebSpinner.react").Spinner, {})}</Component></Component_1>;
        }
        const Component_1 = r("WAWebSelectAllMenuBarItem.react");
        const Component_2 = r("WAWebDrawerBody.react");
        const Component_3 = o("WAWebSelectModalFooter.react").SelectModalFooter;
        const Component_4 = r("WAWebDrawer.react");
        const Component_5 = o("WAWebModal.react").Modal;
        return <Component_5 tsNavigationData={tsNavigationData ?? undefined} ref={ueRef} type={o("WAWebModal.react").ModalTheme.Tower} onOverlayClick={it}><Component_4 key="chat-modal" ref={ge} testid={testid ?? "chat-modal"} disableNavigationLogging>{m.jsx(o("WAWebDrawerHeader.react").DrawerHeader, babelHelpers.extends({
            menu: tt() ? <Component_1 isAllSelected={isAllSelected} onClick={Ze}/> : null,
            title: l.title,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.POPUP,
            rightActionElement: headerRightActionElement
        }, ut, {
            children: l.headerChildren
        }))}{m.jsx(r("WAWebSelectModalSearchBox.react"), babelHelpers.extends({
            ref: ceRef,
            ariaLabel,
            setSearchText,
            onDown,
            onEnter: Qe,
            onFocus: je,
            onMouseDown: onSearchMouseDown,
            enabled: l.enableSearchBox,
            placeholder: (l.allowUnknownContactSearch == null || l.allowUnknownContactSearch === true) && o("WAWebUsernameGatingUtils").usernameContactlessChatEnabled() ? o("WAWebUsernameSearchPlaceholder").getUsernameSearchPlaceholder() : r("WAWebFbtCommon")("Search name or number"),
            showPlaceholderUntilType: true,
            loading: Ie
        }, hasForwarded != null && {
            searchType: o("WAWebChatListSearch.react").ListSearchType.FORWARD_MSG_SEARCH
        }, {
            focusOnMount: true
        }))}{l.hideCustomHeaderWhenSelected === true && xe ? null : l.customHeader}{at}{ot}<Component_2 flatListControllers={[
            ve.current
        ]} onScroll={onScroll}>{l.scrollableHeader}<LComponent handleUsernameContactRowClicked={handleUsernameContactRowClicked} props={l} selectionsRef={selectionsRef.current} activeRef={he.current} listRef={deRef} flatListControllerRef={ve.current} searchText={Re} handleLeaveList={handleLeaveList} handleSelectionChanged={handleSelectionChanged} onLoading={onLoading} outContactSelections={outContactSelections}/></Component_2>{!U || previewComponent == null ? previewComponent : <EComponent previewComponent={previewComponent} selectionsRef={selectionsRef}/>}{!W && <Component_3 accessory={footerAccessory} singleSelectionType={singleSelectionFooterType} multipleSelectionType={multipleSelectionFooterType} selections={selectionsRef.current} onForward={onForward} startActive={startActive} getSelectionSummary={getSelectionSummary} getAnnouncementSummary={getAnnouncementSummary} shouldShowSelectionSummary={shouldShowSelectionSummary} activeWithoutSelection={activeWithoutSelection} additionalSelectedCount={Ae.length} listType={listType} disclaimer={disclaimer} xstyle={previewComponent == null && S.footer} sendButtonAriaLabel={sendButtonAriaLabel} groupWid={groupWid}/>}</Component_4></Component_5>;
    }
    KComponent.displayName = `${KComponent.name} [from ${i.id}]`;
    l.ListType = v;
    l.SelectModal = KComponent;
}, 226);