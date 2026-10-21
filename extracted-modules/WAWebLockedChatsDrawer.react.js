__d("WAWebLockedChatsDrawer.react", [
    "fbt",
    "WAWebChatCellV2.react",
    "WAWebChatCollection",
    "WAWebChatContextMenuItemBlock.react",
    "WAWebChatContextMenuItemDelete.react",
    "WAWebChatContextMenuItemMarkUnread.react",
    "WAWebChatContextMenuItemMute.react",
    "WAWebChatContextMenuItemUnlock.react",
    "WAWebChatEntryPoint",
    "WAWebChatListMenuItem.react",
    "WAWebChatLockUtils",
    "WAWebChatLockWAMUtils",
    "WAWebChatSearchModel",
    "WAWebCmd",
    "WAWebComposeBoxActions",
    "WAWebCopyToClipboard",
    "WAWebDevOnlyBadge.react",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDropdownItem.react",
    "WAWebDropdownItemSeparator.react",
    "WAWebEmptyState.react",
    "WAWebFlatList.react",
    "WAWebFlatListContainer.react",
    "WAWebFlatListController",
    "WAWebFocusTracer",
    "WAWebKeyboardHotKeys.react",
    "WAWebMiscGatingUtils",
    "WAWebPrivacyNarrativeE2EMessage.react",
    "WAWebSearchInput",
    "WAWebStateUtils",
    "WAWebTabOrder",
    "WAWebWamEnumChatLockActionType",
    "WAWebWamEnumLandingSurface",
    "gkx",
    "react",
    "react-compiler-runtime",
    "useWAWebChatLockRestriction",
    "useWAWebListener",
    "useWAWebOnUnmount",
    "useWAWebOpenChat",
    "useWAWebSearchModel"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = e;
    const { useEffect, useMemo, useRef, useState } = c;
    const f = {
        surface: "settings-drawer"
    };
    const g = (t)=>t.id.toString();
    const h = (HRef_current, n)=>HRef_current != null && n instanceof HTMLElement;
    function y(e) {
        const t = o("react-compiler-runtime").c(50);
        const { entryPoint, focusOnMount, onClose, ref, unlockEntryPoint } = e;
        const m = focusOnMount === undefined ? true : focusOnMount;
        const y = o("useWAWebSearchModel").useSearchModel(b);
        const { query, results } = y;
        const L = o("useWAWebOpenChat").useOpenChat();
        const L_openedChat = L.openedChat;
        const k = useState(false);
        const I = k[0];
        const onContextMenuToggle = k[1];
        const D = results?.query.searchText;
        const x = D != null && D !== "";
        let $;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            $ = [
                "change",
                "add",
                "remove"
            ];
            t[0] = $;
        } else {
            $ = t[0];
        }
        let P;
        if (t[1] !== D || t[2] !== query || t[3] !== results?.query.options) {
            P = function() {
                query(D ?? "", results?.query.options);
            };
            t[1] = D;
            t[2] = query;
            t[3] = results?.query.options;
            t[4] = P;
        } else {
            P = t[4];
        }
        o("useWAWebListener").useListener(o("WAWebChatCollection").ChatCollection, $, P);
        let N;
        if (t[5] !== entryPoint || t[6] !== unlockEntryPoint) {
            N = {
                id: "locked-chats-drawer",
                condition: "always",
                entryPoint,
                unlockEntryPoint,
                landingSurface: o("WAWebWamEnumLandingSurface").LANDING_SURFACE.FOLDER
            };
            t[5] = entryPoint;
            t[6] = unlockEntryPoint;
            t[7] = N;
        } else {
            N = t[7];
        }
        const M = o("useWAWebChatLockRestriction").useChatLockRestriction(N);
        let w;
        let A;
        if (t[8] !== entryPoint || t[9] !== M) {
            w = function() {
                if (M) {
                    o("WAWebChatLockWAMUtils").chatLockActionWAMEvent({
                        actionEntryPoint: entryPoint,
                        chatLockActionType: o("WAWebWamEnumChatLockActionType").CHAT_LOCK_ACTION_TYPE.FOLDER_OPEN
                    });
                }
            };
            A = [
                M,
                entryPoint
            ];
            t[8] = entryPoint;
            t[9] = M;
            t[10] = w;
            t[11] = A;
        } else {
            w = t[10];
            A = t[11];
        }
        useEffect(w, A);
        r("useWAWebOnUnmount")(o("WAWebChatLockUtils").leaveLockedChats);
        let F;
        if (t[12] !== results?.results) {
            F = (results == null ? undefined : results.results.map(C)) ?? [];
            t[12] = results?.results;
            t[13] = F;
        } else {
            F = t[13];
        }
        const B = F;
        let W;
        if (t[14] === Symbol.for("react.memo_cache_sentinel")) {
            W = s._("Search locked chats");
            t[14] = W;
        } else {
            W = t[14];
        }
        const q = W;
        let U;
        if (t[15] === Symbol.for("react.memo_cache_sentinel")) {
            U = o("WAWebMiscGatingUtils").isPrivacyNarrativeV1Enabled() ? u.jsx(o("WAWebPrivacyNarrativeE2EMessage.react").E2eMessageChatList, {
                tabOrder: o("WAWebTabOrder").TAB_ORDER.DRAWER_FOOTER
            }) : null;
            t[15] = U;
        } else {
            U = t[15];
        }
        const V = U;
        const HRef = useRef(null);
        const GRef = useRef(null);
        let z;
        if (t[16] === Symbol.for("react.memo_cache_sentinel")) {
            z = new Map;
            t[16] = z;
        } else {
            z = t[16];
        }
        const jRef = useRef(z);
        let K;
        if (t[17] === Symbol.for("react.memo_cache_sentinel")) {
            K = function(t, n) {
                if (t) {
                    jRef.current.set(n, t);
                } else {
                    jRef.current.delete(n);
                }
            };
            t[17] = K;
        } else {
            K = t[17];
        }
        const Q = K;
        let X;
        if (t[18] === Symbol.for("react.memo_cache_sentinel")) {
            X = {
                index: 0,
                id: ""
            };
            t[18] = X;
        } else {
            X = t[18];
        }
        const Y = useState(X);
        const J = Y[0];
        const Z = Y[1];
        let ee;
        let te;
        if (t[19] !== J || t[20] !== B) {
            const ne = (t)=>{
                if (B.length !== 0) {
                    let e = J.index + (t === "up" ? -1 : 1);
                    if (e >= B.length) {
                        e = 0;
                    } else if (e < 0) {
                        e = B.length - 1;
                    }
                    const n = B[e];
                    if (n) {
                        const r = g(n.chat);
                        Z({
                            id: r,
                            index: e
                        });
                        ee?.(r);
                    }
                }
            };
            te = {
                up: function() {
                    return ne("up");
                },
                down: function() {
                    return ne("down");
                },
                enter: function({ target }) {
                    if (!(J.index < 0)) {
                        const n = jRef.current.get(J.id);
                        if (n === target) {
                            const r = B[J.index].chat;
                            if (r) {
                                o("WAWebCmd").Cmd.openChatBottom({
                                    chat: r,
                                    chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.Chatlist
                                }).then(()=>{
                                    window.setTimeout(function() {
                                        o("WAWebComposeBoxActions").ComposeBoxActions.focus(r);
                                    }, 200);
                                });
                            }
                        }
                    }
                }
            };
            ee = function(t) {
                if (t != null) {
                    const e = jRef.current.get(t);
                    if (e) {
                        r("WAWebFocusTracer").focus(e);
                    }
                }
            };
            t[19] = J;
            t[20] = B;
            t[21] = ee;
            t[22] = te;
        } else {
            ee = t[21];
            te = t[22];
        }
        let re;
        if (t[23] !== I) {
            re = function(t) {
                const HRef_current = HRef.current;
                const t_relatedTarget = t.relatedTarget;
                if (!(!h(HRef_current, t_relatedTarget) || HRef_current != null && HRef_current.contains(t_relatedTarget) || I)) {
                    Z({
                        index: -1,
                        id: ""
                    });
                }
            };
            t[23] = I;
            t[24] = re;
        } else {
            re = t[24];
        }
        const oe = re;
        let ae;
        if (t[25] !== ee || t[26] !== B || t[27] !== L_openedChat) {
            ae = function({ target }) {
                const HRef_current = HRef.current;
                if (!(!h(HRef_current, target) || target !== HRef_current)) {
                    let r = 0;
                    if (L_openedChat != null) {
                        const o = B.findIndex((e)=>g(e.chat) === g(L_openedChat));
                        if (o !== -1) {
                            r = o;
                        }
                    }
                    const a = B[r];
                    if (a) {
                        const i = g(a.chat);
                        Z({
                            id: i,
                            index: r
                        });
                        ee(i);
                    }
                }
            };
            t[25] = ee;
            t[26] = B;
            t[27] = L_openedChat;
            t[28] = ae;
        } else {
            ae = t[28];
        }
        const ie = ae;
        let le;
        if (t[29] === Symbol.for("react.memo_cache_sentinel")) {
            le = new (r("WAWebFlatListController"));
            t[29] = le;
        } else {
            le = t[29];
        }
        const se = le;
        let ue;
        if (t[30] === Symbol.for("react.memo_cache_sentinel")) {
            ue = s._("Locked chats");
            t[30] = ue;
        } else {
            ue = t[30];
        }
        const ce = onClose == null ? o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.TAB : o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL;
        let de;
        if (t[31] !== onClose || t[32] !== ce) {
            const Component = o("WAWebDrawerHeader.react").DrawerHeader;
            de = <Component title={ue} onBack={onClose} type={ce}/>;
            t[31] = onClose;
            t[32] = ce;
            t[33] = de;
        } else {
            de = t[33];
        }
        let me;
        if (t[34] !== J || t[35] !== oe || t[36] !== ie || t[37] !== te || t[38] !== x || t[39] !== B || t[40] !== L_openedChat) {
            const Component = o("WAWebFlatList.react").FlatList;
            const Component_1 = r("WAWebFlatListContainer.react");
            const Component_2 = o("WAWebKeyboardHotKeys.react").HotKeys;
            me = B.length === 0 ? u.jsx(o("WAWebEmptyState.react").Empty, {
                title: x ? s._("No locked chats found") : s._("You have no locked chats")
            }) : <div data-testid="locked-chatlist"><Component_2 ref={HRef} handlers={te} onFocus={ie} onBlur={oe} data-tab={o("WAWebTabOrder").TAB_ORDER.DRAWER_CONTENT}><Component_1 flatListControllers={[
                se
            ]} className="x1rife3k x1plvlek x1hm9lzh x1sa5p1d"><Component ref={GRef} data={B} renderItem={function(t) {
                const Component = r("WAWebChatCellV2.react");
                return <Component key={t.itemKey} size="large" ref={function(n) {
                    Q(n, g(t.chat));
                }} onClick={function() {
                    o("WAWebCmd").Cmd.openChatBottom({
                        chat: t.chat,
                        chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.Chatlist
                    });
                }} active={g(t.chat) === J.id} applyFocusStyles={false} chat={t.chat} contextMenuItems={v(t.chat)} forceActive={L_openedChat != null && g(L_openedChat) === g(t.chat)} showCommunityInfo onContextMenuToggle={onContextMenuToggle}/>;
            }} direction="vertical" flatListController={se} disablePointerEventsOnScroll={false}/></Component_1></Component_2></div>;
            t[34] = J;
            t[35] = oe;
            t[36] = ie;
            t[37] = te;
            t[38] = x;
            t[39] = B;
            t[40] = L_openedChat;
            t[41] = me;
        } else {
            me = t[41];
        }
        let pe;
        if (t[42] !== m || t[43] !== query || t[44] !== me) {
            const Component = o("WAWebSearchInput").DrawerSearchInput;
            const Component_1 = r("WAWebDrawerBody.react");
            pe = <Component_1><Component tabOrder={o("WAWebTabOrder").TAB_ORDER.DRAWER_CONTENT} onSearch={query} focusOnMount={m} placeholder={q}>{me}{V}</Component></Component_1>;
            t[42] = m;
            t[43] = query;
            t[44] = me;
            t[45] = pe;
        } else {
            pe = t[45];
        }
        let _e;
        if (t[46] !== ref || t[47] !== de || t[48] !== pe) {
            const Component = r("WAWebDrawer.react");
            _e = <Component ref={ref} theme="archived" testid="settings-drawer" tsNavigationData={f}>{de}{pe}</Component>;
            t[46] = ref;
            t[47] = de;
            t[48] = pe;
            t[49] = _e;
        } else {
            _e = t[49];
        }
        return _e;
    }
    function C(e) {
        return babelHelpers.extends({}, o("WAWebChatListMenuItem.react").getFlatListConfigFromChat(e.data, {
            showCommunityInfo: true
        }));
    }
    function b() {
        return new (o("WAWebChatSearchModel")).LockedChatSearch;
    }
    function v(chat) {
        const t = o("WAWebStateUtils").unproxy(chat);
        const n = [
            u.jsx(r("WAWebChatContextMenuItemUnlock.react"), {
                chat: t
            }, "unlock"),
            u.jsx(r("WAWebChatContextMenuItemDelete.react"), {
                chat: t
            }, "delete"),
            u.jsx(r("WAWebChatContextMenuItemMute.react"), {
                chat: t
            }, "mute"),
            u.jsx(r("WAWebChatContextMenuItemBlock.react"), {
                chat: t
            }, "block"),
            u.jsx(r("WAWebChatContextMenuItemMarkUnread.react"), {
                chat: t
            }, "mark_unread")
        ];
        if (!r("gkx")("26258")) {
            n.push(u.jsx(r("WAWebDropdownItemSeparator.react"), {}, "separator"));
            const Component = o("WAWebDropdownItem.react").DropdownItem;
            n.push(<Component key="copy_id" testid="copy-chat-id" action={function() {
                o("WAWebCopyToClipboard").copyTextToClipboard(g(t));
            }}>{u.jsx(o("WAWebDevOnlyBadge.react").DevOnlyBadge, {
                label: "Copy Chat ID"
            })}</Component>);
        }
        return n;
    }
    l.default = y;
}, 226);