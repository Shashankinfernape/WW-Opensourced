__d("WAWebConversationMsgs.react", [
    "fbt",
    "WAAbortError",
    "WAFilteredCatch",
    "WALogger",
    "WARaceSignal",
    "WAShiftTimer",
    "WAThrottle",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebBackendErrors",
    "WAWebBizChatAssignmentOpenedAction",
    "WAWebChatAssignmentUtils",
    "WAWebChatEntryPoint",
    "WAWebChatGetters",
    "WAWebChatLoadMessages",
    "WAWebChatMessageSearch",
    "WAWebChatMsgsCollection",
    "WAWebChatThreadLogging",
    "WAWebClock",
    "WAWebCmd",
    "WAWebCometComposedTextV2URParserLoadable",
    "WAWebComposeBoxActions",
    "WAWebContactGetters",
    "WAWebConversationLoadMoreMessages.react",
    "WAWebConversationMsgsMenuV2.react",
    "WAWebConversationMsgsUtils",
    "WAWebConversationSpamUtils",
    "WAWebCopyPasteCopyableArea.react",
    "WAWebDebounce",
    "WAWebDocumentFlushed",
    "WAWebDomScroll",
    "WAWebEmptyOrgChatCard.react",
    "WAWebFocusTracer",
    "WAWebFrontendConstants",
    "WAWebFrontendMsgGetters",
    "WAWebGetBrazilnteractiveActions",
    "WAWebGroupCatchUpWamEvent",
    "WAWebHistorySyncUtils",
    "WAWebJumpToButtons.react",
    "WAWebJumpToQuotedMsgContextStack",
    "WAWebListenerHoc_DEPRECATED",
    "WAWebMathRoundUp10thPercentage",
    "WAWebMessageHoverBarProvider.react",
    "WAWebMessageList.react",
    "WAWebMessagePosition",
    "WAWebMessageStickyDateMarker.react",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebMsgKey",
    "WAWebMsgModelUtils",
    "WAWebMsgType",
    "WAWebNewsletterExtendedGatingUtils",
    "WAWebNewsletterGetMessageUpdatesAction",
    "WAWebNewsletterLiveUpdatesManager",
    "WAWebNewsletterRepairMsgHistoryAction",
    "WAWebNonMessageDataRequestPlaceholderMessageResendUtils",
    "WAWebNoop",
    "WAWebTextStatusGatingUtils",
    "WAWebThemeContext",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUnifiedResponseScrollSettle",
    "WAWebUnifiedResponseUtils",
    "WAWebUnmountSignalHoc_DEPRECATED.react",
    "WAWebUpdateUnreadChatAction",
    "WAWebUserPrefsMeUser",
    "WAWebVelocityAnimate",
    "WAWebWid",
    "WDSMargins.stylex",
    "cr:12474",
    "err",
    "getErrorSafe",
    "isEmptyObject",
    "nullthrows",
    "react",
    "shallowEqual",
    "stylex"
], function(t, n, r, o, a, i, l, s) {
    const e = [
        "msgLoadState"
    ];
    const u = [
        "msgLoadState"
    ];
    let c;
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
    const L = R || (R = o("react"));
    const E = R;
    const { Component: Component_5, createRef } = E;
    const T = 3000;
    const D = 8.5;
    const x = 300;
    const $ = 80;
    const P = 20;
    const N = 100;
    const duration = 1;
    const w = 'input, textarea, [contenteditable="true"], [role="textbox"]';
    const A = new Set([
        " ",
        "ArrowDown",
        "ArrowUp",
        "End",
        "Home",
        "PageDown",
        "PageUp"
    ]);
    const F = [];
    const O = {
        paddingTop: "x1jm3axb",
        scrollPaddingTop: "xvgfjn3",
        $$css: true
    };
    const B = {
        pane: {
            position: "x10l6tqk",
            top: "x13vifvy",
            insetInlineStart: "x1o0tod",
            zIndex: "xupqr0c",
            boxSizing: "x9f619",
            display: "x78zum5",
            flexDirection: "xdt5ytf",
            width: "xh8yej3",
            height: "x5yr21d",
            overflowX: "x6ikm8r",
            overflowY: "x1rife3k",
            backgroundColor: "xjbqb8w",
            transition: "x1ewm37j",
            $$css: true
        },
        selectable: {
            backgroundColor: "xesnlum",
            transition: "xzya46m",
            $$css: true
        },
        topInset: function(t) {
            return [
                O,
                {
                    "--x-paddingTop": ((e)=>{
                        if (typeof e === "number") {
                            return `${e}px`;
                        }
                        return e ?? undefined;
                    })(`${t}px`),
                    "--x-scrollPaddingTop": ((e)=>{
                        if (typeof e === "number") {
                            return `${e}px`;
                        }
                        return e ?? undefined;
                    })(`${t}px`)
                }
            ];
        },
        jumpToContainer: {
            height: "x5yr21d",
            width: "xh8yej3",
            maxWidth: "xquzyny",
            position: "x1n2onr6",
            $$css: true
        },
        copyableArea: {
            height: "x5yr21d",
            $$css: true
        }
    };
    let W = false;
    function q(e) {
        try {
            return o("WAWebUnifiedResponseUtils").isUnifiedResponseVisible(e);
        } catch (error) {
            if (!W) {
                W = true;
                o("WAWebUnifiedResponseScrollSettle").reportScrollSettleFailure(error);
            }
            return false;
        }
    }
    function U(e) {
        const e_currentTarget = e.currentTarget;
        if (e.target !== e_currentTarget || !(e_currentTarget instanceof HTMLElement)) {
            return false;
        }
        const offsetX = e.nativeEvent.offsetX;
        return offsetX < 0 || offsetX >= e_currentTarget.clientWidth;
    }
    function V(e) {
        if (e > 0) {
            return B.topInset(e);
        }
        return null;
    }
    function H(e, t) {
        if (r("WAWebWid").isUser(e) && o("WAWebTextStatusGatingUtils").receiveTextStatusEnabled()) {
            o("WAWebCmd").Cmd.trigger("conversation_near_bottom_changed", e, t);
        }
    }
    const G = ((Component_5_1)=>{
        function a(e) {
            let n;
            n = Component_5_1.call(this, e) || this;
            n.$1 = 0;
            n.$3 = new Map;
            n.$4 = [];
            n.$10 = false;
            n.$11 = false;
            n.$12 = 0;
            n.$13 = 0;
            n.$14 = false;
            n.$15 = function(e) {
                return n.scrollContainer = e;
            };
            n.$16 = createRef();
            n.$17 = createRef();
            n.$18 = createRef();
            n.$19 = null;
            n.$20 = null;
            n.$21 = null;
            n.$22 = 0;
            n.$23 = 0;
            n.$24 = null;
            n.$25 = 0;
            n.$26 = false;
            n.$27 = 0;
            n.$28 = F;
            n.$29 = new Set;
            n.$30 = 0;
            n.$44 = function(e) {
                const n_scrollContainer = n.scrollContainer;
                if (n_scrollContainer) {
                    r("WAWebVelocityAnimate")(n_scrollContainer, "stop");
                    r("WAWebVelocityAnimate")(n_scrollContainer, "scroll", {
                        duration: 300,
                        container: n_scrollContainer,
                        offset: e
                    });
                }
            };
            n.$54 = function(e) {
                const current = n.$17.current;
                n.$18.current = current?.getMsgWrapperRef(e.toString());
            };
            n.$55 = function(e) {
                n.$19 = e.toString();
                n.$60();
            };
            n.$51 = function(e) {
                if (e.has(n.props.chat.id.toString())) {
                    o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "_onHistorySyncStateUpdate called, attempt to load earlier"
                    ]))).tags("history-sync");
                    n.$10 = false;
                    n.loadEarlierMsgs();
                }
            };
            n.$63 = function() {
                n.forceUpdate();
            };
            n.$64 = function() {
                if (!(n.$29.size === 0 || n.$26)) {
                    n.$26 = true;
                    const e = ++n.$27;
                    const t = n.props.getUnmountSignal();
                    o("WAWebDocumentFlushed").documentFlushed({
                        signal: t
                    }).then(()=>{
                        if (!t.aborted && e === n.$27) {
                            n.$26 = false;
                            n.$61(true);
                        }
                    }).catch(o("WAFilteredCatch").filteredCatch(o("WAAbortError").AbortError, r("WAWebNoop"))).finally(()=>{
                        if (e === n.$27) {
                            n.$26 = false;
                        }
                    });
                }
            };
            n.$45 = function(e) {
                const t = n.$4[n.$4.length - 1];
                if (t) {
                    const r = t.toString();
                    const o = n.$17.current;
                    if (r && o) {
                        const i = o.getMsgWrapperRef(r)?.getContainerElement();
                        if (i) {
                            const l = n.scrollContainer;
                            if (!l) {
                                return;
                            }
                            const msgBottom = n.$65(l, i);
                            n.$62 = {
                                msg: i,
                                container: l,
                                msgBottom
                            };
                        }
                    }
                }
            };
            n.$46 = function(e) {
                if (n.$62) {
                    const t = n.$62;
                    const { container, msg, msgBottom } = t;
                    n.$66(container, msg, msgBottom);
                    n.$62 = undefined;
                }
            };
            n.$57 = function(e, t) {
                const listeners = n.props.listeners;
                const a = o("WAWebABProps").getABPropConfigValue("web_memlab_fixes_2") && t != null ? t : n.props;
                const { chat, msgCollection } = a;
                const { chat: chat_1, focusCtx, msgCollection: msgCollection_1 } = e;
                if (msgCollection) {
                    listeners.remove(msgCollection, "remove_msgs insert_msgs bulk_add", n.$68);
                    listeners.remove(chat.msgs, "change:last", n.$69);
                }
                listeners.remove(chat, "change:unreadCount", n.$70);
                listeners.remove(chat, "change:unreadEditTimestampMs", n.$70);
                listeners.remove(chat, "change:activeUnreadCount", n.$71);
                listeners.remove(chat, "change:pendingDeleteForMeCount", n.$63);
                if (n.$9 != null) {
                    n.$9();
                }
                n.$9 = msgCollection_1.onMsgLoadStateChange(n.$72);
                if (o("WAWebChatGetters").getIsGroup(chat)) {
                    listeners.remove(chat.unreadMentionMetadata.unreadMentionCollection, "add remove reset", n.$73);
                }
                if (o("WAWebChatGetters").getIsGroup(chat_1)) {
                    listeners.add(chat_1.unreadMentionMetadata.unreadMentionCollection, "add remove reset", n.$73);
                }
                listeners.add(chat_1, "change:unreadCount", n.$70);
                listeners.add(chat_1, "change:unreadEditTimestampMs", n.$70);
                listeners.add(chat_1, "change:activeUnreadCount", n.$71);
                listeners.add(chat_1, "change:pendingDeleteForMeCount", n.$63);
                listeners.add(chat_1.msgs, "change:last", n.$69);
                listeners.add(msgCollection_1, "remove_msgs insert_msgs bulk_add", n.$68);
                if (focusCtx && msgCollection_1.loadAroundPromise) {
                    n.props.interaction?.startInteraction();
                    n.props.interaction?.addAnnotation({
                        loadingType: "load_around",
                        surface: o("WAWebChatGetters").getIsNewsletter(n.props.chat) ? "channels" : "chats"
                    });
                    msgCollection_1.loadAroundPromise.catch((e)=>{
                        o("WAFilteredCatch").filteredCatch(o("WAWebBackendErrors").E404, function() {
                            n.props.interaction?.failInteraction(e);
                            o("WAWebToastManager").ToastManager.open(L.jsx(o("WAWebToast.react").Toast, {
                                msg: s._("Couldn't find message")
                            }));
                            o("WAWebCmd").Cmd.openChatBottom({
                                chat: chat_1,
                                chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.InChatLoadAroundFallback
                            }).catch(()=>{});
                        })(e);
                    }).finally(()=>{
                        n.props.interaction?.completeInteraction();
                    });
                }
            };
            n.$33 = o("WAThrottle").throttle(function() {
                const e = n.props.getUnmountSignal();
                o("WAWebDocumentFlushed").documentFlushed({
                    signal: e
                }).then(()=>{
                    if (e.aborted) {
                        throw new (o("WAAbortError")).AbortError;
                    }
                    n.$61();
                    if (!e.aborted) {
                        const t = n;
                        const r = t.scrollContainer;
                        if (r != null) {
                            const a = r.scrollTop;
                            const i = a < x;
                            const l = n.$74();
                            if (i) {
                                n.$14 = true;
                            } else if (l) {
                                n.$14 = false;
                            }
                            if (!n.$10 && r.scrollTop < x) {
                                if (n.hasMoreMessagesOnIslandAbove()) {
                                    n.forceUpdate();
                                } else {
                                    n.loadEarlierMsgs();
                                }
                            }
                            if (!(n.$10 && r.scrollTop < $)) {
                                if (r.scrollTop > $) {
                                    n.$10 = false;
                                }
                                if (n.$30 === 0 && n.$24 != null && Math.abs(r.scrollTop - n.$24) > o("WAWebJumpToQuotedMsgContextStack").RETURN_POINT_INVALIDATION_SCROLL_PX) {
                                    o("WAWebJumpToQuotedMsgContextStack").JumpToQuotedMsgContextStack.clear(n.props.chat.id);
                                }
                                const s = n.state;
                                const { cursor, isNearBottom } = s;
                                if (l) {
                                    n.$37(true);
                                    if (cursor.getEnd(n.props.msgCollection) < n.props.msgCollection.length || !o("WAWebConversationMsgsUtils").isMostRecentCMC(n.props)) {
                                        n.$75();
                                    }
                                    if (n.hasMoreMessagesOnIslandBelow()) {
                                        n.forceUpdate();
                                    } else if (o("WAWebConversationMsgsUtils").isMostRecentCMC(n.props) && isNearBottom !== l) {
                                        n.setState({
                                            isNearBottom: l,
                                            newUnread: 0
                                        });
                                        H(n.props.chat.id, l);
                                    }
                                } else if (isNearBottom !== l && !n.hasMoreMessagesOnIslandBelow()) {
                                    n.setState({
                                        isNearBottom: l
                                    });
                                    H(n.props.chat.id, l);
                                }
                            }
                        }
                    }
                }).catch(o("WAFilteredCatch").filteredCatch(o("WAAbortError").AbortError, r("WAWebNoop")));
            }, 100);
            n.$72 = function() {
                const msgLoadState = n.state.msgLoadState;
                const msgLoadState_1 = o("WAWebConversationMsgsUtils").getMsgLoadState(n.props.msgCollection);
                let r = {
                    msgLoadState: msgLoadState_1
                };
                if (msgLoadState.isLoadingAroundMsgs && !msgLoadState_1.isLoadingAroundMsgs) {
                    const a = o("WAWebConversationMsgsUtils").validateFocusCtx(n.props.focusCtx);
                    const i = a?.msg;
                    if (i) {
                        r = babelHelpers.extends({}, r, {
                            cursor: n.state.cursor.init(i.id, n.props.msgCollection),
                            focusCtx: a
                        });
                    }
                }
                n.setState(r);
            };
            n.$34 = o("WAThrottle").throttle(function() {
                n.$61();
            }, 100);
            n.$50 = function({ newKey, oldKey }) {
                const o = oldKey.toString();
                const a = newKey.toString();
                const i = n.$3.get(o);
                if (i) {
                    n.$3.delete(o);
                    n.$3.set(a, i);
                }
                for(let l = 0; l < n.$4.length; ++l){
                    if (n.$4[l] === oldKey) {
                        n.$4[l] = newKey;
                        break;
                    }
                }
            };
            n.$35 = r("WAWebDebounce")(function() {
                const e = n.$74();
                if (n.state.isNearBottom !== e) {
                    n.setState({
                        isNearBottom: e
                    });
                    H(n.props.chat.id, e);
                }
            }, 100);
            n.loadEarlierMsgs = function() {
                const n_props = n.props;
                const { chat, msgCollection } = n_props;
                const n_state = n.state;
                const { cursor, msgLoadState } = n_state;
                n.props.interaction?.startInteraction();
                n.props.interaction?.addAnnotation({
                    loadingType: "load_earlier_msgs",
                    surface: o("WAWebChatGetters").getIsNewsletter(n.props.chat) ? "newsletters" : "chats"
                });
                if (cursor.getStart(msgCollection) > 0) {
                    if (cursor.hasBefore(msgCollection)) {
                        n.props.interaction?.completeInteraction();
                        n.setState({
                            cursor: cursor.loadBefore(msgCollection)
                        });
                    }
                } else {
                    if (msgLoadState.isLoadingEarlierMsgs || msgLoadState.isLoadingAroundMsgs) {
                        n.props.interaction?.addAnnotation({
                            interrupted: "loading_other_msgs"
                        });
                        n.props.interaction?.completeInteraction();
                        return;
                    }
                    if (o("WAWebConversationMsgsUtils").noEarlierMsgStateIsIncorrect(chat, o("WAWebConversationMsgsUtils").isMostRecentCMC(n.props), msgLoadState, n.props.threadId)) {
                        msgCollection.msgLoadState.noEarlierMsgs = false;
                    }
                    if (msgCollection.msgLoadState.noEarlierMsgs) {
                        n.props.interaction?.addAnnotation({
                            interrupted: "no_earlier_msgs"
                        });
                        n.props.interaction?.completeInteraction();
                        return;
                    }
                    const h = n.props.getUnmountSignal();
                    o("WAWebChatLoadMessages").loadEarlierMsgs({
                        chat,
                        msgCollection,
                        threadId: n.props.threadId
                    }).then((e)=>{
                        if (h.aborted) {
                            n.props.interaction?.addAnnotation({
                                interrupted: "aborted"
                            });
                            n.props.interaction?.completeInteraction();
                            return;
                        }
                        if (!e || e.length === 0) {
                            n.$10 = true;
                        } else {
                            n.$10 = false;
                        }
                        const i = {};
                        if (!n.state.focusCtx) {
                            i.focusCtx = o("WAWebConversationMsgsUtils").getUnreadFocusCtx(n.props, n.state.unreadCount);
                        }
                        if (cursor.hasBefore(msgCollection)) {
                            i.cursor = cursor.loadBefore(msgCollection);
                        }
                        n.setState(i);
                        n.props.interaction?.completeInteraction();
                    }).catch((e)=>{
                        const a = r("getErrorSafe")(e);
                        o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                            "ConversationMsgs:loadEarlierMsgs failed"
                        ]))).catching(a);
                        n.props.interaction?.failInteraction(a);
                    });
                }
            };
            n.$75 = function() {
                const n_props = n.props;
                const { chat, msgCollection } = n_props;
                const n_state = n.state;
                const { cursor, msgLoadState } = n_state;
                n.props.interaction?.startInteraction();
                n.props.interaction?.addAnnotation({
                    loadingType: "load_recent_msgs",
                    surface: o("WAWebChatGetters").getIsNewsletter(n.props.chat) ? "newsletters" : "chats"
                });
                if (cursor.getEnd(msgCollection) < msgCollection.length) {
                    n.props.interaction?.completeInteraction();
                    n.props.interaction?.addAnnotation({
                        interrupted: "already_loaded"
                    });
                    n.setState({
                        cursor: cursor.loadAfter(msgCollection)
                    });
                    return;
                }
                if (msgLoadState.isLoadingRecentMsgs || msgLoadState.isLoadingAroundMsgs) {
                    n.props.interaction?.addAnnotation({
                        interrupted: "loading_other_msgs"
                    });
                    n.props.interaction?.completeInteraction();
                    return;
                }
                const g = new AbortController;
                const g_signal = g.signal;
                const y = n.props.getUnmountSignal();
                const C = r("WARaceSignal")([
                    g_signal,
                    y
                ], function(e) {
                    return o("WAWebChatLoadMessages").loadRecentMsgs({
                        chat,
                        msgCollection,
                        signal: e,
                        threadId: n.props.threadId
                    }).then(()=>{
                        if (e.aborted) {
                            n.props.interaction?.addAnnotation({
                                interrupted: "aborted"
                            });
                            n.props.interaction?.completeInteraction();
                            throw new (o("WAAbortError")).AbortError;
                        }
                        if (cursor.hasAfter(msgCollection)) {
                            n.setState({
                                cursor: cursor.loadAfter(msgCollection)
                            });
                        } else if (n.state.cursor.getEnd(msgCollection) >= msgCollection.length && o("WAWebConversationMsgsUtils").isMostRecentCMC(n.props)) {
                            n.forceUpdate();
                        }
                        n.props.interaction?.completeInteraction();
                    });
                }).catch(o("WAAbortError").catchAbort(r("WAWebNoop"))).catch((e)=>{
                    const a = r("getErrorSafe")(e);
                    n.props.interaction?.failInteraction(a);
                    o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                        "ConversationMsgs:loadRecentMsgs failed"
                    ]))).catching(a);
                }).finally(()=>{
                    n.$8 = null;
                });
                n.$8 = {
                    promise: C,
                    controller: g
                };
            };
            n.handleComposeHeightChange = function(e) {
                const n_scrollContainer = n.scrollContainer;
                if (n_scrollContainer) {
                    if (e) {
                        if (n_scrollContainer && e < 0 && n_scrollContainer.scrollTop === n_scrollContainer.scrollHeight - n_scrollContainer.clientHeight) {
                            return;
                        }
                        n.$67(n_scrollContainer, n_scrollContainer.scrollTop + e);
                    } else {
                        const o = n_scrollContainer.scrollHeight - (n_scrollContainer.scrollTop + n_scrollContainer.clientHeight);
                        r("WAWebVelocityAnimate")(n_scrollContainer, {
                            tween: 18
                        }, {
                            progress: function() {
                                n.$67(n_scrollContainer, n_scrollContainer.scrollHeight - o - n_scrollContainer.clientHeight);
                            },
                            duration: 300
                        }, [
                            0.1,
                            0.82,
                            0.25,
                            1
                        ]);
                    }
                }
            };
            n.$76 = function() {
                return r("nullthrows")(n.scrollContainer, "unexpected empty scroll container");
            };
            n.getScrollBottom = function() {
                const n_scrollContainer = n.scrollContainer;
                if (n_scrollContainer) {
                    return n_scrollContainer.scrollHeight - (n_scrollContainer.scrollTop + n_scrollContainer.clientHeight);
                }
                return 0;
            };
            n.$36 = new (o("WAShiftTimer")).ShiftTimer(function() {
                n.$16.current?.setVisibility(false);
            });
            n.$32 = new (o("WAShiftTimer")).ShiftTimer(function(e) {
                const { dateMarkerIdx, silent = false } = e || {};
                const current = n.$17.current;
                if (!(!current || typeof dateMarkerIdx !== "number")) {
                    const s = silent || Date.now() - (n.$2 || 0) < 200;
                    if (!s) {
                        n.$58();
                    }
                    const u = current.getDateMarkerRef(dateMarkerIdx);
                    if (dateMarkerIdx === -1) {
                        n.$16.current?.updateDateMarkerText();
                    } else if (u) {
                        const m = u.getTimestamp();
                        const p = o("WAWebClock").Clock.relativeDateStr(m).toString();
                        n.$16.current?.updateDateMarkerText(p, m);
                    }
                    if (n.$7 !== dateMarkerIdx) {
                        const _ = current.getDateMarkerRef(n.$7);
                        if (_) {
                            _.show();
                        }
                        if (u) {
                            u.hide();
                        }
                    }
                }
            });
            n.$80 = function() {
                n.$3.forEach((e, t)=>{
                    if (n.props.chat.unreadMentionMetadata.hasMentionId(t)) {
                        n.props.chat.unreadMentionMetadata.removeUnreadMentions(t);
                    }
                });
            };
            n.isMsgVisible = function(e, t = false) {
                let r = e;
                const a = o("WAWebMsgCollection").MsgCollection.get(r);
                if (a != null && a.isCarouselCard === true) {
                    r = a.parentMsgId ?? r;
                }
                return n.$3.has(r.toString()) && (t ? true : n.getMsgComponent(r));
            };
            n.$81 = function(e) {
                n.$33();
            };
            n.$48 = function() {
                const n_props = n.props;
                const { chat, threadId } = n_props;
                const i = threadId != null && (chat.aiThreads?.get(threadId)?.unreadCount ?? 0) > 0;
                if (!(n.$5 != null && n.$5 !== 0 || !chat.isDirty() && !chat.hasUnreadEdit() && !i)) {
                    const l = 2500;
                    n.$5 = self.setTimeout(function() {
                        n.$5 = null;
                        n.$37();
                    }, l);
                }
            };
            n.$49 = function() {
                if (!(!n.state.unreadCount || !o("WAWebConversationMsgsUtils").isMostRecentCMC(n.props))) {
                    const e = n.props.chat;
                    if (e.unreadCount === 0) {
                        n.setState({
                            unreadCount: 0
                        });
                        e.activeUnreadCount = 0;
                    }
                    e.markedUnread = false;
                }
            };
            n.$82 = function() {
                n.$23++;
                n.$83();
            };
            n.$84 = function() {
                n.$23++;
                n.$85();
            };
            n.$86 = function() {
                n.$23++;
                n.$87();
            };
            n.$83 = function() {
                const msgCollection = n.props.msgCollection;
                if (o("WAWebConversationMsgsUtils").isMostRecentCMC(n.props) && n.state.cursor.getEnd(msgCollection) >= msgCollection.length) {
                    n.$42();
                } else {
                    o("WAWebCmd").Cmd.openChatBottom({
                        chat: n.props.chat,
                        threadId: n.props.threadId,
                        chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.InChatJumpToBottom
                    }).then((e)=>{
                        if (e) {
                            o("WAWebComposeBoxActions").ComposeBoxActions.focus(n.props.chat);
                        }
                    });
                }
            };
            n.$56 = function(e) {
                if (e === n.props.chat.id) {
                    const t = n.$25;
                    const r = o("WAWebJumpToQuotedMsgContextStack").JumpToQuotedMsgContextStack.size(e);
                    if (r > t) {
                        n.$24 = n.scrollContainer?.scrollTop ?? null;
                    } else {
                        if (r === 0) {
                            n.$24 = null;
                        }
                    }
                    n.$25 = r;
                    n.forceUpdate();
                }
            };
            n.$85 = function() {
                const chat = n.props.chat;
                const r = o("WAWebJumpToQuotedMsgContextStack").JumpToQuotedMsgContextStack.pop(chat.id);
                if (r != null) {
                    const a = o("WAWebMsgCollection").MsgCollection.get(r.toString());
                    const i = o("WAWebChatMessageSearch").getSearchContext({
                        chat,
                        msgKey: a?.id ?? r
                    });
                    if (i != null) {
                        n.$30++;
                        o("WAWebCmd").Cmd.openChatAt({
                            chat,
                            chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.InChatJumpBackToContext,
                            msgContext: i
                        }).then((e)=>{
                            n.$30 = Math.max(0, n.$30 - 1);
                            if (n.$30 === 0 && e && o("WAWebJumpToQuotedMsgContextStack").JumpToQuotedMsgContextStack.hasReturnPoint(n.props.chat.id)) {
                                n.$24 = n.scrollContainer?.scrollTop ?? null;
                            }
                        });
                    }
                }
            };
            n.$87 = function() {
                const chat = n.props.chat;
                const e_unreadMentionMetadata = chat.unreadMentionMetadata;
                if (e_unreadMentionMetadata) {
                    const a = e_unreadMentionMetadata.pendingUnreadMentionCount;
                    const mentionsCountPendingPercentage = o("WAWebMathRoundUp10thPercentage").roundUp10thPercentage(a, e_unreadMentionMetadata.getUnreadMentionCount());
                    new (o("WAWebGroupCatchUpWamEvent")).GroupCatchUpWamEvent({
                        mentionsCountPendingPercentage
                    }).commit();
                    if (a > 0) {
                        const l = s._("_j{\"*\":\"{count} \\u0040 messages not synced\",\"_1\":\"1 \\u0040 message not synced\"}", [
                            s._plural(a, "count")
                        ]);
                        o("WAWebToastManager").ToastManager.open(L.jsx(o("WAWebToast.react").Toast, {
                            msg: l
                        }));
                        e_unreadMentionMetadata.pendingUnreadMentionCount = 0;
                        n.setState({
                            unreadMentionCount: e_unreadMentionMetadata.getUnreadMentionCount()
                        });
                        return;
                    }
                    if (e_unreadMentionMetadata.unreadMentionCollection.length) {
                        const c = e_unreadMentionMetadata.oldestUnreadMention();
                        const d = r("WAWebMsgKey").fromString(c?.id);
                        const m = o("WAWebMsgCollection").MsgCollection.get(d.toString());
                        const p = o("WAWebChatMessageSearch").getSearchContext({
                            chat,
                            msgKey: m?.id ?? d
                        });
                        p.highlightMentionMsg = true;
                        p.enableAnimation = false;
                        if (p) {
                            o("WAWebCmd").Cmd.openChatAt({
                                chat: n.props.chat,
                                chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.InChatJumpToMention,
                                msgContext: p
                            });
                        }
                    }
                }
            };
            n.$42 = function(e) {
                n.$22++;
                o("WAWebJumpToQuotedMsgContextStack").JumpToQuotedMsgContextStack.clear(n.props.chat.id);
                const n_scrollContainer = n.scrollContainer;
                if (n_scrollContainer) {
                    n.$67(n_scrollContainer, n_scrollContainer.scrollHeight - n_scrollContainer.clientHeight);
                }
                if (e) {
                    e();
                }
                const a = n.props.getUnmountSignal();
                o("WAWebDocumentFlushed").documentFlushed({
                    signal: a
                }).then(()=>{
                    if (!a.aborted) {
                        n.setState({
                            cursor: n.state.cursor.resetBeforeCursor(n.props.msgCollection)
                        });
                    }
                }).catch(o("WAFilteredCatch").filteredCatch(o("WAAbortError").AbortError, r("WAWebNoop")));
            };
            n.$43 = function(e) {
                const t = ++n.$22;
                if (n.$88()) {
                    const a = n.$23;
                    const i = n.props.getUnmountSignal();
                    let l = null;
                    o("WAWebDocumentFlushed").documentFlushed({
                        signal: i
                    }).then(()=>{
                        const n_scrollContainer = n.scrollContainer;
                        if (n_scrollContainer == null || t !== n.$22) {
                            return false;
                        }
                        l = n_scrollContainer;
                        return o("WAWebUnifiedResponseScrollSettle").shouldReapplyScrollAfterUnifiedResponseLoad(n_scrollContainer, o("WAWebCometComposedTextV2URParserLoadable").requireBundle, i, function() {
                            return t !== n.$22 || n.scrollContainer !== n_scrollContainer || n.$23 !== a;
                        });
                    }).then((o)=>{
                        const n_scrollContainer = n.scrollContainer;
                        if (!(!o || n_scrollContainer == null || n_scrollContainer !== l || t !== n.$22 || n.$23 !== a)) {
                            r("WAWebVelocityAnimate")(n_scrollContainer, "stop");
                            e();
                        }
                    }).catch((e)=>{
                        if (!(e instanceof o("WAAbortError").AbortError)) {
                            o("WAWebUnifiedResponseScrollSettle").reportScrollSettleFailure(e);
                        }
                    });
                }
            };
            n.$89 = function() {
                n.$23++;
            };
            n.$90 = function(e) {
                if (e.deltaY !== 0) {
                    n.$23++;
                }
            };
            n.$91 = function(e) {
                const e_target = e.target;
                if (!(e.defaultPrevented || !A.has(e.key) || e_target instanceof Element && e_target.closest(w))) {
                    n.$23++;
                }
            };
            n.$92 = function(e) {
                if (U(e)) {
                    n.$23++;
                }
            };
            n.$69 = function(e, t) {
                const n_props = n.props;
                const { chat, msgCollection } = n_props;
                const focusCtx = n.state.focusCtx;
                let cursor = n.state.cursor;
                const c = msgCollection.last();
                if (!o("WAWebConversationMsgsUtils").isMostRecentCMC(n.props)) {
                    if (t && e && o("WAWebConversationMsgsUtils").shouldJumpToBottomForNewOwnMsg(e)) {
                        o("WAWebJumpToQuotedMsgContextStack").JumpToQuotedMsgContextStack.clear(chat.id);
                        n.$83();
                    }
                    return;
                }
                const d = {};
                const m = document.hasFocus();
                const p = n.$74();
                let _ = p;
                if (m && p) {
                    d.unreadCount = chat.activeUnreadCount;
                    if (chat.activeUnreadCount === 0) {
                        d.focusCtx = undefined;
                    }
                    cursor = cursor.setFocusedMsgKey(msgCollection);
                } else if (c && t && o("WAWebConversationMsgsUtils").shouldJumpToBottomForNewOwnMsg(c)) {
                    _ = true;
                    if (n.state.unreadCount) {
                        d.unreadCount = 0;
                    }
                    d.focusCtx = undefined;
                    cursor = cursor.setFocusedMsgKey(msgCollection);
                    o("WAWebJumpToQuotedMsgContextStack").JumpToQuotedMsgContextStack.clear(chat.id);
                    n.$83();
                }
                if (focusCtx && !Object.prototype.hasOwnProperty.call(d, "focusCtx")) {
                    cursor = cursor.loadAfter(msgCollection, {
                        count: 1
                    });
                } else {
                    cursor = cursor.loadBeforeCapped(msgCollection, {
                        count: 1
                    });
                }
                if (cursor !== n.state.cursor) {
                    d.cursor = cursor;
                }
                if (!r("isEmptyObject")(d)) {
                    n.$11 = true;
                    n.setState(d, function() {
                        if (t) {
                            n.$41({
                                fetchLastMessage: false
                            });
                        }
                        n.$11 = false;
                        if (_) {
                            n.$42();
                        }
                        n.$70();
                    });
                }
            };
            n.$47 = function() {
                n.$6 = self.setTimeout(function() {
                    if (n.state.isNearBottom && !(o("WAWebChatGetters").getIsNewsletter(n.props.chat) === true && n.state.focusCtx?.highlightMsg === true && (n.state.focusCtx.msg == null || !o("WAWebMsgModelUtils").isLastMsg(n.state.focusCtx.msg)))) {
                        n.$42();
                    }
                }, 1);
            };
            n.$73 = function() {
                const chat = n.props.chat;
                const t = chat.unreadMentionMetadata.getUnreadMentionCount();
                n.setState({
                    unreadMentionCount: t
                });
            };
            n.$70 = r("WAWebDebounce")(function() {
                if (!n.$11) {
                    const e = n.props.chat;
                    const t = n.$74();
                    const a = document.hasFocus();
                    n.$37(t, a);
                    const i = {};
                    if (e.unreadCount && !e.pendingSeenCount && o("WAWebConversationMsgsUtils").isMostRecentCMC(n.props)) {
                        i.unreadCount = e.unreadCount;
                        const l = o("WAWebConversationMsgsUtils").getUnreadFocusCtx(n.props, n.state.unreadCount);
                        if (l && i.focusCtx !== n.props.focusCtx) {
                            i.focusCtx = l;
                            i.cursor = n.state.cursor.setFocusedMsgKey(n.props.msgCollection, l.msg?.id);
                        }
                    } else if (e.unreadCount === 0 && n.state.unreadCount !== 0) {
                        const u = n.props.msgCollection.last();
                        if (u && o("WAWebFrontendMsgGetters").getAsRevoked(u)) {
                            i.unreadCount = 0;
                        }
                    }
                    const c = t && n.state.unreadCount + 1 === i.unreadCount;
                    if (!t && o("WAWebConversationMsgsUtils").isMostRecentCMC(n.props) || !e.pendingSeenCount && n.state.newUnread !== e.unreadCount) {
                        i.newUnread = e.unreadCount;
                    }
                    if (!r("isEmptyObject")(i)) {
                        n.setState(i, function() {
                            if (c) {
                                n.$42();
                            }
                        });
                    }
                    if (e.unreadCount === 0 && n.state.unreadCount !== 0) {
                        e.activeUnreadCount = n.state.unreadCount;
                    }
                }
            }, 150);
            n.$71 = function() {
                if (!n.$11) {
                    const e = n.props.chat;
                    n.setState({
                        unreadCount: e.activeUnreadCount
                    });
                }
            };
            n.$68 = function(e, t) {
                let cursor = n.state.cursor.ensureValidFocus(n.props.msgCollection);
                if (e?.length > 0 && t?.at === 0 && cursor.hasBefore(n.props.msgCollection)) {
                    cursor = cursor.loadBefore(n.props.msgCollection, {
                        count: e.length
                    });
                }
                if (n.state.cursor !== cursor) {
                    n.setState({
                        cursor
                    });
                } else {
                    n.forceUpdate();
                }
            };
            n.handlePageUpDown = function(e) {
                n.$23++;
                r("WAWebFocusTracer").focus(n.scrollContainer);
            };
            n.scrollMessages = function() {
                n.$23++;
                const t = n.$4[n.$4.length - 1];
                if (t) {
                    const a = n.$17.current;
                    if (a) {
                        const i = a.getMsgWrapperRef(t.toString())?.getContainerElement();
                        if (i) {
                            let l = n.$4.length === 1 ? i.clientHeight : 0;
                            const s = n.scrollContainer;
                            r("WAWebVelocityAnimate")(i, "stop");
                            if (s) {
                                r("WAWebVelocityAnimate")(s, "stop");
                                l -= o("WAWebDomScroll").getScrollPaddingTop(s);
                            }
                            r("WAWebVelocityAnimate")(i, "scroll", {
                                duration: 300,
                                container: s,
                                offset: l
                            });
                        }
                    }
                }
            };
            n.$93 = function(e) {
                if (!(e.metaKey || e.ctrlKey)) {
                    e.preventDefault();
                    if (e.key === "Enter" && !e.shiftKey) {
                        o("WAWebComposeBoxActions").ComposeBoxActions.send(n.props.chat);
                    } else {
                        o("WAWebComposeBoxActions").ComposeBoxActions.paste(n.props.chat, String.fromCharCode(e.charCode));
                    }
                }
            };
            n.$94 = function(e) {
                if ((document.getSelection()?.toString() ?? "") === "") {
                    const a = n.props.chat;
                    if (!(!o("WAWebConversationMsgsUtils").isSimplifiedChatConversationMenuEnabled(a) && !o("WAWebContactGetters").getIsUser(a) && !o("WAWebContactGetters").getIsGroup(a) && !o("WAWebContactGetters").getIsBroadcast(a))) {
                        e.preventDefault();
                        e.stopPropagation();
                        o("WAWebChatThreadLogging").handleActivitiesForChatThreadLogging([
                            {
                                activityType: "chatOverflowClicks",
                                ts: o("WATimeUtils").unixTime(),
                                chatId: a.id
                            }
                        ]);
                        if (n.$20 != null) {
                            n.$20(e);
                        }
                    }
                }
            };
            n.$95 = function(e) {
                n.$20 = e;
            };
            n.$96 = function(e) {
                e.preventDefault();
                o("WAWebComposeBoxActions").ComposeBoxActions.sendPaste(n.props.chat, e);
            };
            n.$59 = function() {
                if (n.props.notifyChatRendered) {
                    n.props.notifyChatRendered(n.getMsgs());
                }
            };
            n.$52 = function() {
                const msgCollection = n.props.msgCollection;
                const cursor = n.state.cursor;
                if (cursor.hasBefore(msgCollection)) {
                    n.setState({
                        cursor: cursor.loadBefore(msgCollection)
                    });
                }
            };
            n.$53 = function() {
                const msgCollection = n.props.msgCollection;
                n.setState({
                    cursor: n.state.cursor.init(msgCollection.last()?.id, msgCollection)
                }, function() {
                    if (n.props.chat.unreadCount === 0) {
                        n.$83();
                    }
                });
            };
            const e_chat = e.chat;
            const unreadCount = e_chat.pendingSeenCount ? 0 : e_chat.unreadCount;
            const l = o("WAWebChatGetters").getIsGroup(e_chat) ? e_chat.unreadMentionMetadata.getUnreadMentionCount() : 0;
            n.state = babelHelpers.extends({}, o("WAWebConversationMsgsUtils").getInitialCursorAndFocusContext(e, unreadCount), {
                unreadCount,
                unreadMentionCount: l,
                isNearBottom: true,
                newUnread: 0,
                contextMenu: null,
                msgLoadState: o("WAWebConversationMsgsUtils").getMsgLoadState(e.msgCollection),
                lastSelectable: e.selectable,
                lastChat: e.chat,
                lastMsgCollection: e.msgCollection,
                lastFocusCtx: e.focusCtx,
                lastThreadId: e.threadId
            });
            return n;
        }
        babelHelpers.inheritsLoose(a, Component_5_1);
        const a_prototype = a.prototype;
        a_prototype.componentWillUnmount = function() {
            this.$27++;
            this.$26 = false;
            this.$31(F);
            this.$29.clear();
            this.$21?.abort();
            if (this.$9 != null) {
                this.$9();
            }
            this.$32.cancel();
            this.$33.cancel();
            this.$34.cancel();
            this.$35.cancel();
            this.$36.cancel();
            if (this.$5 != null && this.$5 !== 0) {
                self.clearTimeout(this.$5);
            }
            if (this.$6 != null && this.$6 !== 0) {
                self.clearTimeout(this.$6);
            }
            this.$37();
            this.props.chat.markedUnread = false;
            this.props.chat.unreadMentionMetadata.reset();
            this.props.chat.activeUnreadCount = 0;
            this.$38();
        };
        a_prototype.$39 = function() {
            const chat = this.props.chat;
            if (o("WAWebChatGetters").getIsNewsletter(chat) && o("WAWebNewsletterExtendedGatingUtils").isNewsletterReactionEnabled()) {
                o("WAWebNewsletterGetMessageUpdatesAction").maybeUpdateMsgsAddOns(chat.msgs.getModelsArray(), chat);
            }
        };
        a_prototype.$40 = function() {
            const chat = this.props.chat;
            if (o("WAWebChatGetters").getIsNewsletter(chat)) {
                o("WAWebNewsletterLiveUpdatesManager").LiveUpdatesManager.subscribe(chat.id);
            }
        };
        a_prototype.$38 = function() {
            o("WAWebNewsletterLiveUpdatesManager").LiveUpdatesManager.unsubscribe();
        };
        a_prototype.componentDidMount = function() {
            const e = this;
            let t;
            const props = this.props;
            const { chat, listeners } = props;
            this.$26 = false;
            this.$40();
            this.$39();
            this.$41({
                fetchLastMessage: true
            });
            listeners.add((t = o("WAWebCmd")).Cmd, "scroll_chat_to_bottom", function(t, n) {
                e.$42(t);
                if (n?.isChatOpen === true) {
                    e.$43(function() {
                        e.$42();
                    });
                }
            });
            listeners.add(t.Cmd, "scroll_messages", this.scrollMessages);
            listeners.add(t.Cmd, "scroll_chat_by_height", function(t) {
                e.$44(t);
            });
            listeners.add(t.Cmd, "panes_will_change", this.$45);
            listeners.add(t.Cmd, "panes_did_change", this.$46);
            listeners.add(t.Cmd, "scroll_to_focused_msg", function(t, n) {
                e.$1 = Date.now();
                t();
                if (n?.isUnifiedResponseReplay !== true) {
                    e.$43(function() {
                        o("WAWebCmd").Cmd.trigger("scroll_to_focused_msg", r("WAWebNoop"), babelHelpers.extends({}, n, {
                            animate: true,
                            duration,
                            isUnifiedResponseReplay: true,
                            scrollIfNeeded: false
                        }));
                    });
                }
            });
            listeners.add(t.Cmd, "reaction_changed_last_msg", this.$47);
            listeners.add(window, "focus", this.$48);
            listeners.add(window, "blur", this.$49);
            listeners.add(window, "resize", this.$34);
            listeners.add(window, "resize", this.$35);
            listeners.add(o("WAWebMsgCollection").MsgCollection, "change:msgKey", this.$50);
            listeners.add(t.Cmd, "new_history_sync_chunk_processed_from_bridge", this.$51);
            listeners.add(chat, "msgs:preloaded", this.$52);
            listeners.add(chat, "msgs:history_repaired", this.$53);
            listeners.add(t.Cmd, "group_notification_context_card_rendered", this.$54);
            listeners.add(t.Cmd, "contact_info_card_rendered", this.$55);
            listeners.add(o("WAWebJumpToQuotedMsgContextStack").JumpToQuotedMsgContextStack, o("WAWebJumpToQuotedMsgContextStack").JUMP_TO_QUOTED_MSG_CONTEXT_CHANGE, this.$56);
            this.$57(this.props);
            const l = this.props.getUnmountSignal();
            o("WAWebDocumentFlushed").documentFlushed({
                signal: l
            }).then(()=>{
                if (!l.aborted) {
                    e.$58();
                }
            }).catch(o("WAFilteredCatch").filteredCatch(o("WAAbortError").AbortError, r("WAWebNoop")));
            this.props.updateOpenedChatInfo({
                chat
            });
            o("WAWebUpdateUnreadChatAction").sendSeen({
                chat,
                threadId: this.props.threadId
            });
            if (o("WAWebChatAssignmentUtils").canAssignChats() && chat.isAssignedToMe && chat.unopenedByAssignedAgent) {
                o("WAWebBizChatAssignmentOpenedAction").markChatAsOpened(chat);
            }
            this.$33();
            this.$59();
        };
        a.getDerivedStateFromProps = function(t, n) {
            let e = {
                lastSelectable: t.selectable,
                lastChat: t.chat,
                lastMsgCollection: t.msgCollection,
                lastFocusCtx: t.focusCtx,
                lastThreadId: t.threadId
            };
            if (t.selectable === n.lastSelectable && (t.chat !== n.lastChat || t.msgCollection !== n.lastMsgCollection || t.focusCtx !== n.lastFocusCtx || t.threadId !== n.lastThreadId)) {
                e = babelHelpers.extends({}, e, {
                    msgLoadState: o("WAWebConversationMsgsUtils").getMsgLoadState(t.msgCollection)
                }, o("WAWebConversationMsgsUtils").getInitialCursorAndFocusContext(t, n.unreadCount));
            }
            return e;
        };
        a_prototype.shouldComponentUpdate = function(n, o) {
            if (!r("shallowEqual")(n, this.props)) {
                return true;
            }
            const state = this.state;
            const t_msgLoadState = state.msgLoadState;
            const i = babelHelpers.objectWithoutPropertiesLoose(state, e);
            const o_msgLoadState = o.msgLoadState;
            const s = babelHelpers.objectWithoutPropertiesLoose(o, u);
            return !r("shallowEqual")(o_msgLoadState, t_msgLoadState) || !r("shallowEqual")(s, i);
        };
        a_prototype.componentDidUpdate = function(t) {
            if (t.selectable === this.props.selectable && (t.chat !== this.props.chat || t.msgCollection !== this.props.msgCollection || t.focusCtx !== this.props.focusCtx)) {
                if (this.$8) {
                    this.$8.controller.abort();
                }
                this.$57(this.props, t);
            }
            if (t.chat !== this.props.chat) {
                this.$19 = null;
                this.$38();
                this.$40();
                o("WAWebJumpToQuotedMsgContextStack").JumpToQuotedMsgContextStack.clear(t.chat.id);
                this.$24 = null;
                this.$25 = o("WAWebJumpToQuotedMsgContextStack").JumpToQuotedMsgContextStack.size(this.props.chat.id);
            }
            const chat = this.props.chat;
            this.$61(t.chat === chat);
            this.props.updateOpenedChatInfo({
                chat
            });
            if (t.msgCollection !== this.props.msgCollection) {
                this.$41({
                    fetchLastMessage: true
                });
                this.$33();
            }
            this.$59();
        };
        a_prototype.$41 = function({ fetchLastMessage }) {
            if (r("WAWebWid").isNewsletter(this.props.chat.id)) {
                this.$21?.abort();
                this.$21 = new AbortController;
                o("WAWebNewsletterRepairMsgHistoryAction").repairNewsletterMsgHistory({
                    chat: this.props.chat,
                    msgCollection: this.props.msgCollection,
                    unmountSignal: this.$21.signal,
                    fetchLastMessage
                });
            }
        };
        a_prototype.getVisibleMessageAnchors = function() {
            return this.$28;
        };
        a_prototype.subscribeToVisibleMessageAnchors = function(t) {
            const e = this;
            this.$29.add(t);
            this.$64();
            return function() {
                e.$29.delete(t);
            };
        };
        a_prototype.$31 = function(t) {
            if (!(this.$28.length === t.length && this.$28.every((e, n)=>e.anchor === t[n]?.anchor && e.msg === t[n]?.msg))) {
                this.$28 = t;
                this.$29.forEach((e)=>e());
            }
        };
        a_prototype.$65 = function({ scrollTop, scrollHeight, clientHeight }, n) {
            const a = scrollHeight - (scrollTop + clientHeight);
            return scrollHeight - (n.offsetTop + n.clientHeight + a);
        };
        a_prototype.$66 = function(t, { offsetTop, clientHeight }, r) {
            const a = offsetTop + clientHeight + r - t.clientHeight;
            this.$67(t, a);
        };
        a_prototype.getRenderedMessageCount = function() {
            return this.getMsgs().length;
        };
        a_prototype.hasMoreMessagesOnIslandAbove = function() {
            return this.$12 > 0;
        };
        a_prototype.hasMoreMessagesOnIslandBelow = function() {
            const e = this.getRenderedMessageCount();
            return e > this.$12 + N;
        };
        a_prototype.setScrollBottom = function(t) {
            const scrollContainer = this.scrollContainer;
            if (scrollContainer) {
                this.$67(scrollContainer, scrollContainer.scrollHeight - t - scrollContainer.clientHeight);
            }
        };
        a_prototype.$67 = function(t, n) {
            this.$2 = Date.now();
            if (t) {
                t.scrollTop = n;
            }
        };
        a_prototype.focus = function() {
            const t = this.state.focusCtx?.msg?.id.toString();
            if (t != null) {
                const o = this.$17.current?.getMsgWrapperRef(t);
                o?.getContainerElement()?.focus();
            }
        };
        a_prototype.$58 = function() {
            this.$16.current?.setVisibility(true);
            this.$36.debounce(T);
        };
        a_prototype.$74 = function() {
            const scrollContainer = this.scrollContainer;
            if (scrollContainer) {
                return scrollContainer.scrollTop + o("WAWebFrontendConstants").SCROLL_FUDGE * 3 > scrollContainer.scrollHeight - scrollContainer.clientHeight;
            }
            return false;
        };
        a_prototype.$77 = function() {
            return this.props.topInset ?? 0;
        };
        a_prototype.$78 = function() {
            return this.props.stickyDateMarkerTop ?? D;
        };
        a_prototype.getMsgs = function(t = false) {
            const e = this;
            const n = t ? Date.now() : 0;
            const props = this.props;
            const { focusCtx, msgCollection, threadId } = props;
            const state = this.state;
            const { cursor, msgLoadState } = state;
            if (focusCtx && msgLoadState.isLoadingAroundMsgs) {
                return [];
            }
            const d = new (o("WAWebChatMsgsCollection")).ChatMsgsCollection;
            d.set(msgCollection.filter((e)=>o("WAWebConversationMsgsUtils").isMsgVisibleInConversation({
                    msg: e,
                    msgCollection,
                    threadId
                })));
            let m = d.toArray().slice(cursor.getStart(d), cursor.getEnd(d)).map((e)=>e.safe()).filter((t)=>{
                if (o("WAWebGetBrazilnteractiveActions").shouldHideOffsiteCardPayConfirmation(t) || t.type === o("WAWebMsgType").MSG_TYPE.GP2 && t.subtype === "create" && !o("WAWebUserPrefsMeUser").isMeAccount(e.props.chat.groupMetadata?.owner)) {
                    return false;
                }
                return !t.pendingDeleteForMe;
            });
            o("WAWebNonMessageDataRequestPlaceholderMessageResendUtils").handlePlaceholderMsgsSeen(m, t);
            if (t) {
                m = this.$79(m);
            }
            if (t && n > 0) {
                const _ = Date.now() - n;
                if (_ > 500) {
                    o("WALogger").WARN(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                        "[ConversationMsgs] Slow getMsgs in render: ",
                        "ms, ",
                        " msgs, ",
                        " visible msgs, ",
                        " total msgs"
                    ])), _, m.length, d.length, msgCollection.length);
                }
            }
            return m;
        };
        a_prototype.$79 = function(t) {
            const e = this.state.cursor.before + this.state.cursor.after;
            if (t.length <= N) {
                this.$12 = 0;
                this.$13 = e;
                return t;
            }
            o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                "[ConversationMsgs][applyMessagesIsland] msgs len = ",
                ""
            ])), t.length);
            const n = Math.max(e - this.$13, P);
            let r;
            if (this.$14) {
                r = Math.max(0, this.$12 - n);
                o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                    "[ConversationMsgs][applyMessagesIsland] setting new start up ",
                    ""
                ])), r);
            } else {
                const a = Math.max(0, t.length - N);
                r = Math.min(a, this.$12 + n);
                o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                    "[ConversationMsgs][applyMessagesIsland] setting new start down ",
                    ""
                ])), r);
            }
            this.$12 = Math.max(0, Math.min(r, t.length - N));
            o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                "[ConversationMsgs][applyMessagesIsland] setting currentIslandStart ",
                ""
            ])), this.$12);
            this.$13 = e;
            return t.slice(this.$12, this.$12 + N);
        };
        a_prototype.$61 = function(silent) {
            const current = this.$17.current;
            if (!current) {
                this.$3.clear();
                this.$31(F);
                return;
            }
            const visibleMsgOrder = [];
            const msgs = current.props.msgs;
            const l = new Map;
            const s = [];
            const renderedMsgsInfo = {};
            for(var dateMarkerIdx = 0, d = msgs.length - 1; dateMarkerIdx < d;){
                const m = Math.floor((dateMarkerIdx + d) / 2);
                const p = msgs[m].id.toString();
                const _ = current.getMsgWrapperRef(p);
                if (current.getMsgVisibility(_).visibility === o("WAWebMessagePosition").MSG_VISIBILITY.ABOVE) {
                    dateMarkerIdx = m + 1;
                } else {
                    d = m;
                }
            }
            let f = 0;
            for(let g = dateMarkerIdx; g < msgs.length; g++){
                const h = msgs[g].id.toString();
                const C = current.getMsgWrapperRef(h);
                if (!C) {
                    f++;
                    continue;
                }
                const b = current.getMsgVisibility(C);
                if (b.visibility !== o("WAWebMessagePosition").MSG_VISIBILITY.VISIBLE) {
                    break;
                }
                renderedMsgsInfo[h] = {
                    offset: b.offset,
                    t: msgs[g].t
                };
                l.set(h, C);
                visibleMsgOrder.push(msgs[g].id);
                const v = o("WAWebConversationMsgsUtils").getMessageAnchor(C);
                if (v != null) {
                    s.push({
                        anchor: v,
                        msg: msgs[g].unsafe()
                    });
                }
            }
            if (f > 0) {
                o("WALogger").ERROR(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " msgRef(s) not found!"
                ])), f);
            }
            this.$31(s);
            if (this.scrollContainer) {
                const S = this.scrollContainer.scrollTop;
                const R = this.$78();
                dateMarkerIdx = 0;
                d = Object.keys(current.getRenderedDateMarkers()).length - 1;
                const L = current.getDateMarkerRef(0);
                const E = L && L.getElement();
                if (E && E.offsetTop <= S + R) {
                    while(dateMarkerIdx < d){
                        const k = Math.ceil((dateMarkerIdx + d) / 2);
                        const I = current.getDateMarkerRef(k);
                        if (!I) {
                            throw r("err")(`DateMarkerRef: ${k} not found. ${Object.keys(current.getRenderedDateMarkers()).toString()}}`);
                        }
                        const T = I.getElement();
                        if (T && T.offsetTop > S + R) {
                            d = k - 1;
                        } else {
                            dateMarkerIdx = k;
                        }
                    }
                } else {
                    dateMarkerIdx = -1;
                }
                this.$32.onOrBefore(0, {
                    dateMarkerIdx,
                    silent
                });
                this.$7 = dateMarkerIdx;
                this.pauseHiddenGifs(this.$3, l);
                this.$3 = l;
                this.$4 = visibleMsgOrder;
                if (n("cr:12474") != null) {
                    n("cr:12474").setCenterVisibleMsgId(visibleMsgOrder);
                }
                this.$80();
                this.props.updateOpenedChatInfo({
                    renderedMsgsInfo,
                    visibleMsgOrder,
                    clientHeight: this.scrollContainer ? this.scrollContainer.clientHeight : 0
                });
                this.$60();
            }
        };
        a_prototype.getMsgComponent = function(t) {
            const current = this.$17.current;
            if (current) {
                return current.getMsgComponentRef(t.toString());
            }
        };
        a_prototype.pauseHiddenGifs = function(t, n) {
            const e = this;
            t.forEach((t, r)=>{
                if (!n.has(r)) {
                    const o = e.props.msgCollection.get(r);
                    if (o?.isGif === true) {
                        const a = e.$17.current;
                        const i = a?.getMsgComponentRef(r);
                        if (i?.pause != null) {
                            i.pause();
                        }
                    }
                }
            });
        };
        a_prototype.$37 = function(t, n) {
            let a = t;
            let i = n;
            const props = this.props;
            const { chat, msgCollection, threadId } = props;
            const cursor = this.state.cursor;
            const m = threadId != null && (chat.aiThreads?.get(threadId)?.unreadCount ?? 0) > 0;
            if (!(!((chat.isDirty() || m) && o("WAWebConversationMsgsUtils").isMostRecentCMC(this.props) && cursor.getEnd(msgCollection) >= msgCollection.length) && !chat.hasUnreadEdit()) && (typeof i === "undefined" && (i = document.hasFocus()), !!i && (typeof a === "undefined" && (a = this.$74()), !!a))) {
                o("WAWebUpdateUnreadChatAction").sendSeenDebounced({
                    chat,
                    threadId: this.props.threadId
                });
                return true;
            }
        };
        a_prototype.$88 = function() {
            return this.props.msgCollection.some((e)=>e.type === o("WAWebMsgType").MSG_TYPE.RICH_RESPONSE && q(e));
        };
        a_prototype.checkIfGroupNotificationContextCardDisplayed = function() {
            try {
                return this.$18.current != null && this.$17.current?.getMsgVisibility(this.$18.current).visibility === o("WAWebMessagePosition").MSG_VISIBILITY.VISIBLE;
            } catch (error) {
                o("WALogger").WARN(C || (C = babelHelpers.taggedTemplateLiteralLoose([
                    "[ConversationMsgs] Error while checking if group notification context card is displayed"
                ]))).catching(r("getErrorSafe")(error)).sendLogs("group-notification-context-card-visibility-check-error");
                return false;
            }
        };
        a_prototype.$60 = function() {
            if (o("WAWebChatGetters").getIsGroup(this.props.chat)) {
                this.props.updateCanShowSpamPanel?.(!this.checkIfGroupNotificationContextCardDisplayed());
            } else if (o("WAWebConversationSpamUtils").shouldShowSpamPanel(this.props.chat)) {
                this.props.updateCanShowSpamPanel?.(!this.checkIfContactInfoCardDisplayed());
            }
        };
        a_prototype.checkIfContactInfoCardDisplayed = function() {
            try {
                const e = this.$17.current;
                if (e == null || this.$19 == null) {
                    return false;
                }
                const t = e.getMsgWrapperRef(this.$19);
                if (t == null) {
                    return false;
                }
                return e.getMsgVisibility(t).visibility === o("WAWebMessagePosition").MSG_VISIBILITY.VISIBLE;
            } catch (error) {
                o("WALogger").WARN(b || (b = babelHelpers.taggedTemplateLiteralLoose([
                    "[ConversationMsgs] Error while checking if contact info card is displayed"
                ]))).catching(r("getErrorSafe")(error)).sendLogs("contact-info-card-visibility-check-error");
                return false;
            }
        };
        a_prototype.$97 = function() {
            const props = this.props;
            const { chat, msgCollection } = props;
            const msgLoadState = this.state.msgLoadState;
            const a = this.state.cursor.getStart(msgCollection) > 0;
            const i = !msgLoadState.noEarlierMsgs;
            const l = chat.endOfHistoryTransferType != null && o("WAWebHistorySyncUtils").primaryHasMoreMessagesReadyToLoad(chat.endOfHistoryTransferType);
            const s = o("WAWebConversationMsgsUtils").isMostRecentCMC(this.props);
            const u = o("WAWebConversationMsgsUtils").noEarlierMsgStateIsIncorrect(chat, s, msgLoadState, this.props.threadId);
            const c = a || i || l || u;
            o("WALogger").LOG(v || (v = babelHelpers.taggedTemplateLiteralLoose([
                "[ConversationMsgs] loadEarlier decision: shouldShow=",
                ", hasMoreMsgsAboveCursor=",
                ", hasEarlierMsgs=",
                ", hasMoreHistorySyncMsgs=",
                ", noEarlierMsgIncorrect=",
                ", isMostRecentCMC=",
                ", noEarlierMsgs=",
                ", endOfHistoryTransferType=",
                ", cursorStart=",
                ", msgCollectionLength=",
                ""
            ])), String(c), String(a), String(i), String(l), String(u), String(s), String(msgLoadState.noEarlierMsgs), String(chat.endOfHistoryTransferType), String(this.state.cursor.getStart(msgCollection)), String(msgCollection.length));
            return c;
        };
        a_prototype.render = function() {
            const props = this.props;
            const { bottomBanners, chat, msgCollection, onMessageSelect, selectable, threadId } = props;
            const state = this.state;
            const { focusCtx, msgLoadState, unreadMentionCount } = state;
            const _ = !!focusCtx;
            const f = this.$77();
            const g = this.$78();
            const h = this.getMsgs(true);
            const y = h.length > 0 && o("WAWebMsgGetters").getIsGroupHistoryMessageInOwnChat(h[0]);
            const Component = r("WAWebMessageList.react");
            const C = <Component ref={this.$17} getScrollContainer={this.$76} chat={chat} unreadCount={this.state.unreadCount} selectable={selectable} onMessageSelect={onMessageSelect} onRenderedMessageRefsChange={this.$64} msgs={h} focusedMsgCtx={focusCtx} selectedMessages={this.props.selectedMessages} isMsgVisible={this.isMsgVisible} isNearBottom={this.state.isNearBottom} threadId={this.props.threadId}/>;
            let b;
            let v;
            let R;
            if (_ && msgLoadState.isLoadingAroundMsgs) {
                b = L.jsx(r("WAWebConversationLoadMoreMessages.react"), {
                    direction: "around",
                    isMostRecentCMC: o("WAWebConversationMsgsUtils").isMostRecentCMC(this.props),
                    loadMoreMsgs: r("WAWebNoop"),
                    isLoadingEarlierMsgs: msgLoadState.isLoadingEarlierMsgs,
                    isLoadingRecentMsgs: msgLoadState.isLoadingRecentMsgs,
                    isLoadingAroundMsgs: msgLoadState.isLoadingAroundMsgs,
                    isRepairingMsgHistory: msgLoadState.isRepairingMsgHistory,
                    chat,
                    threadId
                });
            } else {
                if (this.$97() || threadId != null) {
                    v = L.jsx(r("WAWebConversationLoadMoreMessages.react"), {
                        direction: "earlier",
                        isMostRecentCMC: o("WAWebConversationMsgsUtils").isMostRecentCMC(this.props),
                        loadMoreMsgs: this.loadEarlierMsgs,
                        isLoadingEarlierMsgs: msgLoadState.isLoadingEarlierMsgs,
                        isLoadingRecentMsgs: msgLoadState.isLoadingRecentMsgs,
                        isLoadingAroundMsgs: msgLoadState.isLoadingAroundMsgs,
                        mdHistorySyncTransferState: chat.endOfHistoryTransferType,
                        isRepairingMsgHistory: msgLoadState.isRepairingMsgHistory,
                        chat,
                        chatId: chat.id,
                        threadId
                    });
                }
                if (threadId == null && (this.state.cursor.getEnd(msgCollection) < msgCollection.length || !o("WAWebConversationMsgsUtils").isMostRecentCMC(this.props) || msgLoadState.isRepairingMsgHistory)) {
                    R = L.jsx(r("WAWebConversationLoadMoreMessages.react"), {
                        direction: "recent",
                        isMostRecentCMC: o("WAWebConversationMsgsUtils").isMostRecentCMC(this.props),
                        loadMoreMsgs: this.$75,
                        isLoadingEarlierMsgs: msgLoadState.isLoadingEarlierMsgs,
                        isLoadingRecentMsgs: msgLoadState.isLoadingRecentMsgs,
                        isLoadingAroundMsgs: msgLoadState.isLoadingAroundMsgs,
                        isRepairingMsgHistory: msgLoadState.isRepairingMsgHistory
                    });
                }
            }
            const E = <div {...babelHelpers.extends({}, (S || (S = r("stylex"))).props(B.jumpToContainer, o("WDSMargins.stylex").wdsMargins.marginHorAuto), {
                children: L.jsx(r("WAWebJumpToButtons.react"), {
                    chat,
                    unreadMentionCount,
                    newUnread: this.state.newUnread,
                    isNearBottom: this.state.isNearBottom,
                    handleJumpToBottom: this.$82,
                    handleJumpBackToContext: o("WAWebJumpToQuotedMsgContextStack").JumpToQuotedMsgContextStack.hasReturnPoint(chat.id) ? this.$84 : null,
                    handleJumpToMention: this.$86,
                    isMostRecentAndNotLoading: !msgLoadState.isLoadingAroundMsgs && !o("WAWebConversationMsgsUtils").isMostRecentCMC(this.props)
                })
            })}/>;
            const Component_1 = r("WAWebMessageStickyDateMarker.react");
            const Component_2 = r("WAWebMessageHoverBarProvider.react");
            const Component_3 = o("WAWebConversationMsgsMenuV2.react").ConversationMsgsMenuV2;
            const Component_4 = r("WAWebCopyPasteCopyableArea.react");
            return <Component_4 xstyle={B.copyableArea}><Component_1 ref={this.$16} scrollContainerRef={this.scrollContainer} chat={this.props.chat} topOffset={g - D}/>{E}<div {...babelHelpers.extends({}, S.props(B.selectable, B.pane, V(f)), {
                "data-testid": "conversation-panel-messages",
                "data-scrolltracepolicy": "wa.web.conversation.messages",
                ref: this.$15,
                onScroll: this.$81,
                onWheel: this.$90,
                onTouchMove: this.$89,
                onKeyDown: this.$91,
                onMouseDown: this.$92,
                onKeyPress: this.$93,
                onContextMenu: this.$94,
                onPaste: this.$96,
                tabIndex: 0,
                children: [
                    <div {...babelHelpers.extends({}, {
                        0: {
                            className: "x12lumcd xx9tyur"
                        },
                        2: {
                            className: "x12lumcd xx9tyur x1lz4jft"
                        },
                        1: {
                            className: "x12lumcd xx9tyur xeo6yiz"
                        },
                        3: {
                            className: "x12lumcd xx9tyur xeo6yiz"
                        }
                    }[!!y << 1 | !!(y && this.context?.theme === "dark") << 0])}/>,
                    b,
                    v,
                    o("WAWebABProps").getABPropConfigValue("wa_web_quick_reactions") === true ? <Component_2>{C}</Component_2> : C,
                    R,
                    L.jsx(r("WAWebEmptyOrgChatCard.react"), {
                        chat,
                        threadId
                    }),
                    <div>{bottomBanners}</div>
                ]
            })}/><Component_3 chat={chat} selectable={selectable} onSelect={this.props.onSelectMessages} onCancelSelect={this.props.onCancelSelectMessages} scrollContainerRef={this.scrollContainer} onMenuReady={this.$95}/></Component_4>;
        };
        return a;
    })(Component_5);
    G.contextType = o("WAWebThemeContext").ThemeContext;
    const z = r("WAWebUnmountSignalHoc_DEPRECATED.react")(o("WAWebListenerHoc_DEPRECATED").ListenerHOC(G));
    const j = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.getVisibleMessageAnchors = function() {
            return this.getComponent().getVisibleMessageAnchors();
        };
        t_prototype.subscribeToVisibleMessageAnchors = function(t) {
            return this.getComponent().subscribeToVisibleMessageAnchors(t);
        };
        t_prototype.getRenderedMessageCount = function() {
            return this.getComponent().getRenderedMessageCount();
        };
        t_prototype.getScrollBottom = function() {
            return this.getComponent().getScrollBottom();
        };
        t_prototype.onComposeHeightChange = function(t) {
            this.getComponent().handleComposeHeightChange(t);
        };
        t_prototype.onPageUpDown = function(t) {
            this.getComponent().handlePageUpDown(t);
        };
        t_prototype.setScrollBottom = function(t) {
            this.getComponent().setScrollBottom(t);
        };
        t_prototype.focus = function() {
            this.getComponent().focus();
        };
        t_prototype.checkIfGroupNotificationContextCardDisplayed = function() {
            return this.getComponent().checkIfGroupNotificationContextCardDisplayed();
        };
        return t;
    })(z);
    l.default = j;
}, 226);