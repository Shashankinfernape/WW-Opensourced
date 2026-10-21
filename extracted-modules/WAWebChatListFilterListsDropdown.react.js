__d("WAWebChatListFilterListsDropdown.react", [
    "fbt",
    "WAWebChatCollection",
    "WAWebChatListAiStatusFilterPills",
    "WAWebCountRenderingUtils",
    "WAWebCreateOrEditListDrawer.react",
    "WAWebDrawerManager",
    "WAWebFilterLogging",
    "WAWebLabelCollection",
    "WAWebLabelFlowLoadable",
    "WAWebListUtils",
    "WAWebListsGatingUtils",
    "WAWebListsIntroPopupLoadable",
    "WAWebListsUtil",
    "WAWebMobilePlatforms",
    "WAWebModalManager",
    "WAWebNewsletterChatListUtils",
    "WAWebNewsletterCollection",
    "WAWebNux",
    "WAWebPaymentSendIcon.react",
    "WAWebSMBListsIntroPopup.react",
    "WAWebSchemaLabel",
    "WAWebTabOrder",
    "WAWebWamEnumUpdateEntryPoint",
    "WDSChip.react",
    "WDSIconIcAdd.react",
    "WDSIconIcAlternateEmail.react",
    "WDSIconIcArrowDropDown.react",
    "WDSIconIcFavorite.react",
    "WDSIconIcGroup.react",
    "WDSIconIcSwitchAccount.react",
    "WDSIconIcUnread.react",
    "WDSMenu.react",
    "WDSMenuItem.react",
    "react",
    "react-compiler-runtime",
    "useMergeRefs",
    "useWAWebIsChannelsInChatListEnabled",
    "useWAWebListener",
    "useWAWebNux",
    "useWAWebStableCallback",
    "useWDSMenu"
], function(t, n, r, o, a, i, l, s) {
    const e = [
        "ref",
        "currentFilter",
        "filters",
        "filterSession",
        "onDropdownOpen",
        "onSelect"
    ];
    const u = [
        "ref",
        "onClick",
        "opened",
        "tabOrder"
    ];
    let c;
    const d = c || (c = o("react"));
    const m = c;
    const { useEffect, useMemo, useRef, useState } = m;
    const h = {
        iconColor: {
            color: "x1tk34jx",
            $$css: true
        }
    };
    function y(e) {
        const t = o("react-compiler-runtime").c(2);
        let n;
        if (t[0] !== e) {
            n = d.jsx(o("WAWebPaymentSendIcon.react").PaymentSendIcon, babelHelpers.extends({}, e, {
                height: 12,
                width: 12
            }));
            t[0] = e;
            t[1] = n;
        } else {
            n = t[1];
        }
        return n;
    }
    function C(t) {
        const i = o("react-compiler-runtime").c(64);
        let l;
        let u;
        let c;
        let m;
        let _;
        let C;
        let L;
        if (i[0] !== t) {
            C = t.ref;
            l = t.currentFilter;
            c = t.filters;
            u = t.filterSession;
            m = t.onDropdownOpen;
            _ = t.onSelect;
            L = babelHelpers.objectWithoutPropertiesLoose(t, e);
            i[0] = t;
            i[1] = l;
            i[2] = u;
            i[3] = c;
            i[4] = m;
            i[5] = _;
            i[6] = C;
            i[7] = L;
        } else {
            l = i[1];
            u = i[2];
            c = i[3];
            m = i[4];
            _ = i[5];
            C = i[6];
            L = i[7];
        }
        const E = l?.kind;
        const k = l?.label;
        let I;
        if (i[8] === Symbol.for("react.memo_cache_sentinel")) {
            I = o("WAWebMobilePlatforms").isSMB();
            i[8] = I;
        } else {
            I = i[8];
        }
        const T = I;
        let D;
        if (i[9] === Symbol.for("react.memo_cache_sentinel")) {
            D = o("WAWebListUtils").getListsUnreadChatCountMap(o("WAWebNewsletterChatListUtils").getChannelsFilterPillUnreadCounts());
            i[9] = D;
        } else {
            D = i[9];
        }
        const x = useState(D);
        const $ = x[0];
        const P = x[1];
        const N = T ? o("WAWebNux").NUX.SMB_LISTS_INTRO : o("WAWebNux").NUX.ADD_TO_LISTS;
        const M = r("useWAWebNux")(N);
        const w = M[0];
        const A = M[1];
        const FRef = useRef(null);
        const O = r("useMergeRefs")(FRef, C);
        const B = useState(undefined);
        const W = B[0];
        const q = B[1];
        let U;
        if (i[10] === Symbol.for("react.memo_cache_sentinel")) {
            U = function() {
                return P(o("WAWebListUtils").getListsUnreadChatCountMap(o("WAWebNewsletterChatListUtils").getChannelsFilterPillUnreadCounts()));
            };
            i[10] = U;
        } else {
            U = i[10];
        }
        const V = r("useWAWebStableCallback")(U);
        let H;
        if (i[11] === Symbol.for("react.memo_cache_sentinel")) {
            H = [
                "change:showUnreadInTitle",
                "change:archive",
                "add",
                "remove",
                "reset",
                "change:unreadCount",
                "change:isFavorite",
                "change:hasUnreadMention"
            ];
            i[11] = H;
        } else {
            H = i[11];
        }
        o("useWAWebListener").useListener(o("WAWebChatCollection").ChatCollection, H, V);
        o("useWAWebListener").useListener(o("WAWebLabelCollection").LabelCollection, "change:count", V);
        const G = r("useWAWebIsChannelsInChatListEnabled")();
        o("useWAWebListener").useListener(G ? r("WAWebNewsletterCollection") : null, "add remove change:archive change:unreadCount", V);
        const zRef = useRef(G);
        let j;
        let K;
        if (i[12] !== G || i[13] !== V) {
            j = function() {
                if (zRef.current !== G) {
                    zRef.current = G;
                    V();
                }
            };
            K = [
                G,
                V
            ];
            i[12] = G;
            i[13] = V;
            i[14] = j;
            i[15] = K;
        } else {
            j = i[14];
            K = i[15];
        }
        useEffect(j, K);
        const hasNumber = Array.from($.values()).some(S);
        let X;
        if (i[16] !== hasNumber || i[17] !== c || i[18] !== _ || i[19] !== E || i[20] !== k || i[21] !== w || i[22] !== $ || i[23] !== A) {
            let Y;
            if (i[25] !== hasNumber || i[26] !== _ || i[27] !== E || i[28] !== k || i[29] !== $) {
                Y = function(t, n) {
                    const e = o("WAWebListUtils").resolvePillLabel(t.getLabel);
                    const a = function() {
                        _(t.filter, t.listId, t.listType, n);
                    };
                    const i = o("WAWebListUtils").getUnreadChatsCountForFilter(t, $);
                    const toggled = E === t.filter && (o("WAWebListUtils").isBuiltInList(t.listType) || t.listId == null || k === t.listId) || E == null && t.filter == null;
                    const s = o("WAWebCountRenderingUtils").renderCount(i, 100, "unread_message");
                    const u = o("WAWebChatListAiStatusFilterPills").isAiStatusFilter(t.filter);
                    const c = o("WAWebListUtils").shouldShowListIcon(t.listType, t.color) || u && t.color != null;
                    const m = t.listType === o("WAWebSchemaLabel").ListType.FAVORITES;
                    const p = t.listType === o("WAWebSchemaLabel").ListType.GROUPS;
                    const f = t.listType === o("WAWebSchemaLabel").ListType.UNREAD;
                    const g = t.listType === o("WAWebSchemaLabel").ListType.MENTIONS_AND_REPLIES;
                    const C = ()=>{
                        if (T) {
                            if (m) {
                                return r("WDSIconIcFavorite.react");
                            }
                            if (p) {
                                return r("WDSIconIcGroup.react");
                            }
                            if (f) {
                                return r("WDSIconIcUnread.react");
                            }
                            if (g) {
                                return r("WDSIconIcAlternateEmail.react");
                            }
                            if (c) {
                                return y;
                            }
                        }
                    };
                    const Component = r("WDSMenuItem.react");
                    const b = <Component key={t.id} Icon={C()} iconXstyle={c ? h.iconColor : undefined} title={e} onPress={a} hasNumber={hasNumber} number={s ?? undefined} isToggleable toggled={toggled} testid={t.testid} truncateText/>;
                    if (c) {
                        return <span key={t.id} className="xjp7ctv" style={{
                            "--list-icon-color": t.color
                        }}>{b}</span>;
                    }
                    return b;
                };
                i[25] = hasNumber;
                i[26] = _;
                i[27] = E;
                i[28] = k;
                i[29] = $;
                i[30] = Y;
            } else {
                Y = i[30];
            }
            X = c.map(Y);
            if (c.length > 0) {
                let J;
                if (i[31] === Symbol.for("react.memo_cache_sentinel")) {
                    J = d.jsx(r("WDSMenuItem.react"), {
                        type: "separator"
                    }, "separator");
                    i[31] = J;
                } else {
                    J = i[31];
                }
                X.push(J);
            }
            const Z = v;
            let ee;
            if (i[32] !== w || i[33] !== A) {
                ee = function() {
                    if (o("WAWebListUtils").isListFlowMaxListsCountReached()) {
                        o("WAWebListsUtil").showMaxListsModal();
                        return;
                    }
                    if (w) {
                        const E1 = T ? o("WAWebSMBListsIntroPopup.react").SMBListsIntroPopup : o("WAWebListsIntroPopupLoadable").ListsIntroPopupLoadable;
                        o("WAWebModalManager").ModalManager.open(<E1 onContinue={function() {
                            A();
                            Z();
                        }}/>);
                    } else {
                        Z();
                    }
                };
                i[32] = w;
                i[33] = A;
                i[34] = ee;
            } else {
                ee = i[34];
            }
            const te = ee;
            let ne;
            if (i[35] === Symbol.for("react.memo_cache_sentinel")) {
                ne = s._("New list");
                i[35] = ne;
            } else {
                ne = i[35];
            }
            let re;
            if (i[36] !== te) {
                const Component = r("WDSMenuItem.react");
                re = <Component key="create-new-list-item" Icon={r("WDSIconIcAdd.react")} title={ne} onPress={te} testid="create-new-list-item" truncateText/>;
                i[36] = te;
                i[37] = re;
            } else {
                re = i[37];
            }
            X.push(re);
            if (o("WAWebListsGatingUtils").isListsM2Enabled()) {
                const oe = b;
                let ae;
                if (i[38] === Symbol.for("react.memo_cache_sentinel")) {
                    const Component = r("WDSMenuItem.react");
                    ae = <Component key="manage-lists-item" Icon={r("WDSIconIcSwitchAccount.react")} title={s._("Manage lists")} onPress={oe} testid="manage-lists-item" truncateText/>;
                    i[38] = ae;
                } else {
                    ae = i[38];
                }
                X.push(ae);
            }
            i[16] = hasNumber;
            i[17] = c;
            i[18] = _;
            i[19] = E;
            i[20] = k;
            i[21] = w;
            i[22] = $;
            i[23] = A;
            i[24] = X;
        } else {
            X = i[24];
        }
        let ie;
        if (i[39] !== W || i[40] !== X) {
            const Component = r("WDSMenu.react");
            ie = {
                targetRef: FRef,
                menu: <Component maxHeight={W}>{X}</Component>
            };
            i[39] = W;
            i[40] = X;
            i[41] = ie;
        } else {
            ie = i[41];
        }
        const le = r("useWDSMenu")(ie);
        const { closeMenu, isMenuOpen, menuPortal, openMenu } = le;
        let me;
        if (i[42] !== closeMenu || i[43] !== u || i[44] !== isMenuOpen || i[45] !== m || i[46] !== openMenu) {
            me = function() {
                if (isMenuOpen) {
                    closeMenu();
                } else {
                    m?.();
                    if (FRef.current != null) {
                        const e = FRef.current.getBoundingClientRect();
                        const t = window.innerHeight - e.bottom - 16;
                        q(Math.max(100, t));
                    }
                    openMenu();
                    if (u != null) {
                        o("WAWebFilterLogging").logLabelDropdownShownEvent(u.newSessionId());
                    }
                }
            };
            i[42] = closeMenu;
            i[43] = u;
            i[44] = isMenuOpen;
            i[45] = m;
            i[46] = openMenu;
            i[47] = me;
        } else {
            me = i[47];
        }
        const pe = me;
        const { "aria-selected": aria_selected, "aria-controls": aria_controls } = L;
        let ge;
        if (i[48] !== pe || i[49] !== isMenuOpen || i[50] !== O || i[51] !== L.id || i[52] !== L.onFocus || i[53] !== L.role || i[54] !== L.tabIndex || i[55] !== aria_controls || i[56] !== aria_selected) {
            ge = <R key="filters-dropdown" ref={O} tabOrder={o("WAWebTabOrder").TAB_ORDER.CHAT_LIST_FILTER} opened={isMenuOpen} onClick={pe} id={L.id} role={L.role} aria-selected={aria_selected} aria-controls={aria_controls} tabIndex={L.tabIndex} onFocus={L.onFocus}/>;
            i[48] = pe;
            i[49] = isMenuOpen;
            i[50] = O;
            i[51] = L.id;
            i[52] = L.onFocus;
            i[53] = L.role;
            i[54] = L.tabIndex;
            i[55] = aria_controls;
            i[56] = aria_selected;
            i[57] = ge;
        } else {
            ge = i[57];
        }
        let he;
        if (i[58] === Symbol.for("react.memo_cache_sentinel")) {
            he = {
                className: "x10l6tqk"
            };
            i[58] = he;
        } else {
            he = i[58];
        }
        let ye;
        if (i[59] !== menuPortal) {
            ye = <div {...babelHelpers.extends({}, he, {
                "data-testid": "chat_list_filter_menu_portal",
                children: menuPortal
            })}/>;
            i[59] = menuPortal;
            i[60] = ye;
        } else {
            ye = i[60];
        }
        let Ce;
        if (i[61] !== ge || i[62] !== ye) {
            Ce = <>{ge}{ye}</>;
            i[61] = ge;
            i[62] = ye;
            i[63] = Ce;
        } else {
            Ce = i[63];
        }
        return Ce;
    }
    function b() {
        o("WAWebDrawerManager").DrawerManager.openDrawerLeft(d.jsx(o("WAWebLabelFlowLoadable").LabelFlowLoadable, {
            isInitialStep: true,
            entryPoint: o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.CHAT_LIST_FILTER_MANAGE
        }));
    }
    function v() {
        const Component = r("WAWebCreateOrEditListDrawer.react");
        o("WAWebDrawerManager").DrawerManager.openDrawerLeft(<Component onBack={o("WAWebDrawerManager").closeDrawerLeft} onClose={o("WAWebDrawerManager").closeDrawerLeft} entryPoint={o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.ADD_LIST_FILTER}/>);
    }
    function S(e) {
        return e > 0;
    }
    function R(e) {
        const n = o("react-compiler-runtime").c(22);
        let a;
        let i;
        let l;
        let c;
        let m;
        if (n[0] !== e) {
            l = e.ref;
            a = e.onClick;
            i = e.opened;
            m = e.tabOrder;
            c = babelHelpers.objectWithoutPropertiesLoose(e, u);
            n[0] = e;
            n[1] = a;
            n[2] = i;
            n[3] = l;
            n[4] = c;
            n[5] = m;
        } else {
            a = n[1];
            i = n[2];
            l = n[3];
            c = n[4];
            m = n[5];
        }
        let p;
        if (n[6] === Symbol.for("react.memo_cache_sentinel")) {
            p = s._("More lists");
            n[6] = p;
        } else {
            p = n[6];
        }
        const _ = p;
        let f;
        if (n[7] !== a) {
            f = function(t) {
                a?.(t);
            };
            n[7] = a;
            n[8] = f;
        } else {
            f = n[8];
        }
        const g = c.onFocus ?? undefined;
        const { "aria-selected": aria_selected, "aria-controls": aria_controls } = c;
        let C;
        if (n[9] !== i || n[10] !== l || n[11] !== c.id || n[12] !== c.role || n[13] !== f || n[14] !== g || n[15] !== aria_selected || n[16] !== aria_controls) {
            const Component = r("WDSChip.react");
            C = <Component ref={l} id={c.id} label={_} onPress={f} onFocus={g} role={c.role} aria-pressed={i} aria-selected={aria_selected} aria-controls={aria_controls} Icon={r("WDSIconIcArrowDropDown.react")} iconOnly testid="chat_list_more_lists_pill"/>;
            n[9] = i;
            n[10] = l;
            n[11] = c.id;
            n[12] = c.role;
            n[13] = f;
            n[14] = g;
            n[15] = aria_selected;
            n[16] = aria_controls;
            n[17] = C;
        } else {
            C = n[17];
        }
        let b;
        if (n[18] !== c.tabIndex || n[19] !== C || n[20] !== m) {
            b = <div tabIndex={c.tabIndex} data-tab={m}>{C}</div>;
            n[18] = c.tabIndex;
            n[19] = C;
            n[20] = m;
            n[21] = b;
        } else {
            b = n[21];
        }
        return b;
    }
    l.default = C;
}, 226);