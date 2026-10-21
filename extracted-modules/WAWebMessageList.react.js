__d("WAWebMessageList.react", [
    "WAArraysShallowEqual",
    "WALogger",
    "WAWebABProps",
    "WAWebChatEntryPoint",
    "WAWebCmd",
    "WAWebDomScroll",
    "WAWebEmbeddedChatContext",
    "WAWebFrontendConstants",
    "WAWebKeyboardListHotKeys.react",
    "WAWebListenerHoc_DEPRECATED",
    "WAWebMessageAssociation.flow",
    "WAWebMessageAssociationUIUtils",
    "WAWebMessageHandlers",
    "WAWebMessageListGenerateMsgListRows",
    "WAWebMessageListRowRenderers",
    "WAWebMessagePosition",
    "WAWebMsgActionCapability",
    "WAWebMsgCollection",
    "WAWebPrivacyModeGating",
    "WAWebReplyToMsgChatAction",
    "WAWebTabOrder",
    "WAWebTypingIndicator.react",
    "WAWebTypingIndicatorGatingUtils",
    "WAWebViewMode.flow",
    "WAWebViewModeUtils",
    "WAWebWamEnumQuotedMessageUserJourneyEntryPoint",
    "WDSMargins.stylex",
    "asyncToGeneratorRuntime",
    "justknobx",
    "nullthrows",
    "react",
    "shallowEqual",
    "stylex"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = [
        "msgs"
    ];
    const u = [
        "msgs"
    ];
    const c = [
        "getScrollContainer",
        "isMsgVisible",
        "listeners",
        "msgs",
        "onMessageSelect",
        "onRenderedMessageRefsChange",
        "selectedMessages"
    ];
    const d = [
        "getScrollContainer",
        "isMsgVisible",
        "listeners",
        "msgs",
        "onMessageSelect",
        "onRenderedMessageRefsChange",
        "selectedMessages"
    ];
    let m;
    let p;
    const _ = p || (p = o("react"));
    const f = p;
    const { Component: Component_1, createRef } = f;
    const y = {
        messageList: {
            flex: "x3psx0u",
            paddingBottom: "x12xbjc7",
            paddingInlineStart: "x1c1uobl",
            transition: "x1yjeaew",
            $$css: true
        },
        maxWidth: {
            width: "xh8yej3",
            maxWidth: "xquzyny",
            $$css: true
        },
        messageListSelectable: {
            paddingInlineStart: "x1tvauco",
            transition: "x18314t",
            $$css: true
        },
        wrapper: {
            position: "x1n2onr6",
            $$css: true
        }
    };
    const C = ((Component_1_1)=>{
        function a(e) {
            let a;
            a = Component_1_1.call(this, e) || this;
            a.$1 = {};
            a.$2 = {};
            a.$3 = {};
            a.$4 = {};
            a.$5 = {};
            a.$8 = createRef();
            a.$9 = function() {
                return a.$8.current;
            };
            a.$10 = function(e) {
                const current = a.$8.current;
                if (current) {
                    return e.find((e)=>{
                        const n = current.compareDocumentPosition(e);
                        return n === 4 || n === 20;
                    }) ?? null;
                }
                return null;
            };
            a.$11 = function(e) {
                a.$7 = e;
            };
            a.state = {
                isTypingIndicatorVisible: false
            };
            a.$18 = function() {
                const e = a.$7;
                if (e != null) {
                    o("WAWebMessageHandlers").handleMessageReply(a.props.chat, e, o("WAWebWamEnumQuotedMessageUserJourneyEntryPoint").QUOTED_MESSAGE_USER_JOURNEY_ENTRY_POINT.KEYBOARD_SHORTCUT, {
                        replyInPlace: a.context
                    });
                }
            };
            a.$19 = function() {
                const e = a.$7;
                if (e != null) {
                    if (!a.context) {
                        r("WAWebReplyToMsgChatAction")(e);
                    }
                }
            };
            a.$20 = function() {
                const e = a.$7;
                if (e != null && o("WAWebMsgActionCapability").canForwardMsg(e)) {
                    o("WAWebMessageHandlers").handleOpenForwardFlow({
                        msg: e,
                        multiSelect: false
                    });
                }
            };
            a.$21 = function() {
                const e = a.$7;
                const chat = a.props.chat;
                if (e != null && o("WAWebMsgActionCapability").canStarMsg(e)) {
                    o("WAWebCmd").Cmd.sendStarMsgs(chat, [
                        e
                    ]);
                }
            };
            a.$16 = function() {
                a.forceUpdate();
            };
            a.$17 = function(e) {
                let t = null;
                if (e.parentMsgKey && e?.associationType === o("WAWebMessageAssociation.flow").MessageAssociationType.MEDIA_ALBUM && !o("WAWebViewModeUtils").isViewModeVisibleInSurface(o("WAWebViewMode.flow").ViewModeSurface.CHAT, e?.viewMode)) {
                    t = o("WAWebMsgCollection").MsgCollection.get(r("nullthrows")(e.parentMsgKey));
                }
                const n = a.$5[e.id.toString()];
                if (!(!n && !t)) {
                    const i = !t && n.isGroupedSticker();
                    if (!i) {
                        const l = t ? o("WAWebMessageAssociationUIUtils").getHiddenAssociatedMessages(t.id, o("WAWebViewMode.flow").ViewModeSurface.CHAT) : n.props.msgs;
                        const s = new Set(l.map((e)=>e.id.toString()));
                        const u = function() {
                            const r = t ? a.getMsgWrapperRef(t.id.toString()) : n.refAlbumComponents[e.id.toString()];
                            return r?.getContainerElement();
                        };
                        if (t || a.$5[e.id.toString()]) {
                            o("WAWebCmd").Cmd.mediaViewerModal({
                                msg: e,
                                getZoomNode: u,
                                highlightedMsgIds: s
                            });
                        }
                    }
                }
            };
            a.$15 = function({ newKey, oldKey }) {
                const r = newKey.toString();
                const o = oldKey.toString();
                const i = a.$1[o];
                if (i) {
                    delete a.$1[o];
                    a.$1[r] = i;
                    if (a.props.onRenderedMessageRefsChange != null) {
                        a.props.onRenderedMessageRefsChange();
                    }
                }
            };
            a.$22 = function(isTypingIndicatorVisible) {
                a.setState({
                    isTypingIndicatorVisible
                });
            };
            a.$23 = function(e, t) {
                const n = a.$1[t];
                if (e != null) {
                    a.$1[t] = e;
                } else {
                    delete a.$1[t];
                }
                if (n !== e) {
                    if (a.props.onRenderedMessageRefsChange != null) {
                        a.props.onRenderedMessageRefsChange();
                    }
                }
            };
            a.$25 = function({ albumId, msgs, ref }) {
                if (ref) {
                    a.$3[albumId] = ref;
                    msgs.forEach((e)=>{
                        a.$5[e.id.toString()] = ref;
                    });
                } else {
                    delete a.$3[albumId];
                    msgs.forEach((e)=>{
                        delete a.$5[e.id.toString()];
                    });
                }
                a.props.onRenderedMessageRefsChange?.();
            };
            a.$30 = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                yield o("WAWebCmd").Cmd.openChatBottom({
                    chat: a.props.chat,
                    chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.InChatScrollBoundary
                });
            });
            const e_msgs = e.msgs;
            a.$6 = e_msgs.length > 0 ? e_msgs[e_msgs.length - 1] : null;
            return a;
        }
        babelHelpers.inheritsLoose(a, Component_1_1);
        const a_prototype = a.prototype;
        a_prototype.shouldComponentUpdate = function(t, n) {
            const t_msgs = t.msgs;
            const o = babelHelpers.objectWithoutPropertiesLoose(t, s);
            const props = this.props;
            const a_msgs = props.msgs;
            const l = babelHelpers.objectWithoutPropertiesLoose(props, u);
            if (n.isTypingIndicatorVisible !== this.state.isTypingIndicatorVisible) {
                return true;
            }
            return !r("shallowEqual")(o, l) || !r("WAArraysShallowEqual")(t_msgs, a_msgs);
        };
        a_prototype.$12 = function() {
            const e = this.props.msgs[0];
            return e != null && !Object.prototype.hasOwnProperty.call(this.$1, e.id.toString());
        };
        a_prototype.$13 = function(t) {
            const { getScrollContainer, isMsgVisible, listeners, msgs, onMessageSelect, onRenderedMessageRefsChange, selectedMessages } = t;
            const u = babelHelpers.objectWithoutPropertiesLoose(t, c);
            const props = this.props;
            const { getScrollContainer: getScrollContainer_1, isMsgVisible: isMsgVisible_1, listeners: listeners_1, msgs: msgs_1, onMessageSelect: onMessageSelect_1, onRenderedMessageRefsChange: onRenderedMessageRefsChange_1, selectedMessages: selectedMessages_1 } = props;
            const b = babelHelpers.objectWithoutPropertiesLoose(props, d);
            return !r("shallowEqual")(u, b);
        };
        a_prototype.$14 = function(t, n) {
            if (t === this.props || !r("shallowEqual")(n, this.state) || !r("WAArraysShallowEqual")(t.msgs, this.props.msgs) || this.$12() || this.$13(t)) {
                return true;
            }
            return !o("WAWebABProps").getABPropConfigValue("web_message_list_skip_noop_scroll_anchor");
        };
        a_prototype.getSnapshotBeforeUpdate = function(t, n) {
            const e = this;
            if (!this.$14(t, n)) {
                return null;
            }
            const a = this.props.getScrollContainer();
            const i = this.props.msgs.find((t)=>Object.prototype.hasOwnProperty.call(e.$1, t.id));
            if (i == null) {
                return null;
            }
            const commonMessageId = i.id.toString();
            const s = r("nullthrows")(this.getMsgWrapperRef(commonMessageId)?.getContainerElement());
            return {
                commonMessageId,
                commonMessageTop: this.getMsgElementOffsetTop(s) - a.scrollTop
            };
        };
        a_prototype.componentDidMount = function() {
            let e;
            this.props.listeners.add(o("WAWebMsgCollection").MsgCollection, "change:msgKey", this.$15);
            this.props.listeners.add((e = o("WAWebCmd")).Cmd, "refresh_messages", this.$16);
            this.props.listeners.add(e.Cmd, "open_media_viewer_for_album_media", this.$17);
            this.props.listeners.add(e.Cmd, "reply_current_message_keyboard_shortcut", this.$18);
            this.props.listeners.add(e.Cmd, "reply_current_message_private", this.$19);
            this.props.listeners.add(e.Cmd, "forward_current_message", this.$20);
            this.props.listeners.add(e.Cmd, "star_current_message", this.$21);
            this.props.listeners.add(e.Cmd, "typing_indicator_visibility_change", this.$22);
        };
        a_prototype.componentDidUpdate = function(t, n, a) {
            const e = this.props.getScrollContainer();
            if (a != null) {
                const { commonMessageId, commonMessageTop } = a;
                const u = r("nullthrows")(this.getMsgWrapperRef(commonMessageId)?.getContainerElement());
                const c = this.getMsgElementOffsetTop(u) - commonMessageTop;
                if (Math.abs(c - e.scrollTop) >= 1 && r("justknobx")._("6292")) {
                    o("WAWebDomScroll").stopAnimatedScroll(e);
                }
                e.scrollTop = c;
            }
        };
        a_prototype.getMsgElementOffsetTop = function(t) {
            if (o("WAWebPrivacyModeGating").isPrivacyScreenEnabled()) {
                for(var e = this.props.getScrollContainer(), n = t.offsetTop, r = t.offsetParent; r instanceof HTMLElement && r !== e;){
                    n += r.offsetTop;
                    r = r.offsetParent;
                }
                return n;
            }
            const t_offsetParent = t.offsetParent;
            if (t_offsetParent instanceof HTMLElement) {
                return t_offsetParent.offsetTop + t.offsetTop;
            }
            return t.offsetTop;
        };
        a_prototype.getMsgVisibility = function(n) {
            const t = this.props.getScrollContainer();
            const t_scrollTop = t.scrollTop;
            const a = t_scrollTop + t.clientHeight;
            const i = n?.getContainerElement();
            if (!i) {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "getMsgVisibility on invalid ref: ",
                    ""
                ])), n);
                return {
                    visibility: o("WAWebMessagePosition").MSG_VISIBILITY.VISIBLE,
                    offset: 0
                };
            }
            const l = this.getMsgElementOffsetTop(i);
            if (l + i.clientHeight <= t_scrollTop) {
                return {
                    visibility: o("WAWebMessagePosition").MSG_VISIBILITY.ABOVE,
                    offset: l - t_scrollTop
                };
            }
            if (l >= a) {
                return {
                    visibility: o("WAWebMessagePosition").MSG_VISIBILITY.BELOW,
                    offset: l - t_scrollTop
                };
            }
            return {
                visibility: o("WAWebMessagePosition").MSG_VISIBILITY.VISIBLE,
                offset: l - t_scrollTop
            };
        };
        a_prototype.getMsgWrapperRef = function(t) {
            return this.$1[t] || this.$5[t] || this.$4[t];
        };
        a_prototype.getMsgComponentRef = function(t) {
            if (this.$1[t]) {
                return this.$1[t].getMsgComponentRef();
            }
            if (this.$5[t]) {
                return this.$5[t].refAlbumComponents[t] && this.$5[t].refAlbumComponents[t].getRef();
            }
        };
        a_prototype.getDateMarkerRef = function(t) {
            return this.$2[t];
        };
        a_prototype.$24 = function(t, n) {
            if (n) {
                this.$2[t] = n;
            } else {
                delete this.$2[t];
            }
        };
        a_prototype.getRenderedDateMarkers = function() {
            return this.$2;
        };
        a_prototype.$26 = function(t, n) {
            const e = this;
            if (t) {
                n.forEach((n)=>{
                    e.$4[n.id.toString()] = t;
                });
            } else {
                n.forEach((t)=>{
                    delete e.$4[t.id.toString()];
                });
            }
            this.props.onRenderedMessageRefsChange?.();
        };
        a_prototype.$27 = function() {
            return this.props.selectedMessages;
        };
        a_prototype.$28 = function() {
            return this.props.onMessageSelect;
        };
        a_prototype.$29 = function() {
            const e = this;
            return {
                msgs: this.props.msgs,
                selectable: this.props.selectable,
                isMsgVisible: this.props.isMsgVisible,
                unreadCount: this.props.unreadCount,
                refUnread: this.$8,
                handleMsgRendered: this.$23,
                handleDateMarkerRendered: function(n, r) {
                    return e.$24(n, r);
                },
                handleAlbumRendered: this.$25,
                handleBotPluginCarouselRendered: function(n, r) {
                    return e.$26(n, r);
                },
                getMsgWrapperRef: function(n) {
                    return e.getMsgWrapperRef(n);
                },
                selectedMessages: this.$27(),
                onMessageSelect: this.$28(),
                setFocusedMessage: this.$11,
                chat: this.props.chat
            };
        };
        a_prototype.render = function() {
            const n = this;
            const props = this.props;
            const { focusedMsgCtx, msgs, unreadCount } = props;
            const u = o("WAWebTypingIndicatorGatingUtils").shouldShowMessageListTypingIndicator(this.props.chat.id, this.props.threadId);
            let c;
            let d;
            if (focusedMsgCtx) {
                c = focusedMsgCtx.msg;
                if (focusedMsgCtx.isUnreadDivider === true && unreadCount > 0) {
                    d = focusedMsgCtx.msg;
                }
            }
            const Component = o("WAWebKeyboardListHotKeys.react").ListHotKeys;
            const p = <><Component dataTab={o("WAWebTabOrder").TAB_ORDER.MESSAGE_LIST} className={(m || (m = r("stylex")))(y.messageList, this.props.selectable && y.messageListSelectable, [
                y.maxWidth,
                o("WDSMargins.stylex").wdsMargins.marginHorAuto
            ])} getPriorityFocusItem={this.$9} getDefaultFocusItem={this.$10} onBeforeEnd={this.$30} handlers={null} removeTabIndexFocusInside aria-label={null}>{r("WAWebMessageListGenerateMsgListRows")(r("WAWebMessageListRowRenderers")(this.$29()), msgs, c?.safe(), d?.safe(), unreadCount, this.$6)}{u && <div {...babelHelpers.extends({
                onAnimationStart: function() {
                    if (!(!n.props.isNearBottom || !n.state.isTypingIndicatorVisible)) {
                        o("WAWebCmd").Cmd.scrollChatHeight(o("WAWebFrontendConstants").SCROLL_FUDGE);
                    }
                }
            }, {
                0: {
                    className: "xqtp20y x252dbw"
                },
                1: {
                    className: "x252dbw xxk0z11 x1mibc2w x2mfxb xu90me3"
                }
            }[!!this.state.isTypingIndicatorVisible << 0])}/>}</Component>{u && <div {...babelHelpers.extends({}, (m || (m = r("stylex"))).props(y.wrapper, y.maxWidth, o("WDSMargins.stylex").wdsMargins.marginHorAuto), {
                children: _.jsx(r("WAWebTypingIndicator.react"), {
                    chat: this.props.chat
                })
            })}/>}</>;
            return p;
        };
        return a;
    })(Component_1);
    C.contextType = o("WAWebEmbeddedChatContext").WAWebEmbeddedChatContext;
    const b = o("WAWebListenerHoc_DEPRECATED").ListenerHOC(C);
    const v = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.getDateMarkerRef = function(t) {
            return this.getComponent().getDateMarkerRef(t);
        };
        t_prototype.getMsgComponentRef = function(t) {
            return this.getComponent().getMsgComponentRef(t);
        };
        t_prototype.getMsgWrapperRef = function(t) {
            return this.getComponent().getMsgWrapperRef(t);
        };
        t_prototype.getMsgVisibility = function(t) {
            return this.getComponent().getMsgVisibility(t);
        };
        t_prototype.getRenderedDateMarkers = function() {
            return this.getComponent().getRenderedDateMarkers();
        };
        return t;
    })(b);
    l.default = v;
}, 98);