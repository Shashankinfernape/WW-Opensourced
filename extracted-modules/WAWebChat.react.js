__d("WAWebChat.react", [
    "fbt",
    "WAFilteredCatch",
    "WALogger",
    "WAWebAccessibility.react",
    "WAWebBizAiAgentStatusUtils",
    "WAWebBizAiWebSmartComposerAiListsGateModel",
    "WAWebChatAssignmentCollection",
    "WAWebChatAssignmentGatingUtils",
    "WAWebChatAssignmentLogEvents.flow",
    "WAWebChatAssignmentUtils",
    "WAWebChatCell.react",
    "WAWebChatCellContextMenuV2.react",
    "WAWebChatCollection",
    "WAWebChatEntryPoint",
    "WAWebChatEphemerality",
    "WAWebChatGetters",
    "WAWebChatIcons.react",
    "WAWebChatListTimestamp.react",
    "WAWebChatModel",
    "WAWebChatPreferenceCollection",
    "WAWebChatPreferenceModel",
    "WAWebChatSearchQuery",
    "WAWebChatlistAppearanceSettingsGating",
    "WAWebChatlistTertiaryPillsRow.react",
    "WAWebChatlistWDSRowGating",
    "WAWebChatstateInfo.react",
    "WAWebCmd",
    "WAWebCommunityGatingUtils",
    "WAWebComposeBoxActions",
    "WAWebContactGetters",
    "WAWebDataTransfer",
    "WAWebDetailImage.react",
    "WAWebDomScroll",
    "WAWebEnvironment",
    "WAWebEphemeralFbtKic",
    "WAWebErrorBoundary.react",
    "WAWebEventFiles",
    "WAWebFeatureFlagCollection",
    "WAWebFeatureFlagName",
    "WAWebFocusTracer",
    "WAWebFrontendChatGetters",
    "WAWebGroupChatImage.react",
    "WAWebGroupHistoryParticipantStateHydration",
    "WAWebGroupMetadataCollection",
    "WAWebGroupMetadataContext",
    "WAWebGroupMetadataTypeUtils",
    "WAWebGroupType",
    "WAWebIdleTaskRunner",
    "WAWebKeyboardHotKeys.react",
    "WAWebListenerHoc_DEPRECATED",
    "WAWebMediaLoadErrors",
    "WAWebMemberLabelCollection",
    "WAWebMobilePlatforms",
    "WAWebMultiSelectEntryPointConstants",
    "WAWebMuteCollection",
    "WAWebMuteGetters",
    "WAWebName.react",
    "WAWebNewsletterChatHeaderSubtitle.react",
    "WAWebOrgIcon.react",
    "WAWebOrgMemberLidEligibility",
    "WAWebParticipantsList.react",
    "WAWebPreloadChatMessagesAction",
    "WAWebResolveSupportedMediaTypes",
    "WAWebStackedCirclesImage.react",
    "WAWebStateHoc_DEPRECATED.react",
    "WAWebStateUtils",
    "WAWebStatusChatlistRing.react",
    "WAWebTimerHoc_DEPRECATED.react",
    "WAWebUimUie.react",
    "WAWebUimUieMenu.react",
    "WAWebUserPrefsMeUser",
    "WAWebUserSubtitle.react",
    "WAWebWamEnumMediaPickerOriginType",
    "WAWebWamEnumStatusRowSection",
    "WAWebWid",
    "WAWebWidToJid",
    "WDSFocusStateStyles",
    "WDSFontTokenStyles",
    "WDSPreviewListItemMetrics",
    "cr:16700",
    "gkx",
    "justknobx",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebABPropConfigValue",
    "useWAWebPrimaryOrgMembershipForContact"
], function(t, n, r, o, a, i, l, s) {
    const e = [
        "chat",
        "doNotBoldUnread",
        "ephemeralIcon",
        "fakePin",
        "filterPreset",
        "firstCellInList",
        "forceActive",
        "hiddenSubgroupIcon",
        "hideArchivedIcon",
        "hideMuteIcon",
        "hidePin",
        "mode",
        "overrideCommunityAnnouncementGroupName",
        "skipCheckMark",
        "smallUnread",
        "testid",
        "theme"
    ];
    let u;
    let c;
    let d;
    const m = d || (d = o("react"));
    const d_PureComponent = d.PureComponent;
    const _ = {
        LAST: "LAST",
        INFO: "INFO"
    };
    const f = "Files";
    function g(e, t) {
        if (o("WAWebChatSearchQuery").isSearchResult(t)) {
            return o("WAWebWamEnumStatusRowSection").STATUS_ROW_SECTION.CHAT_LIST_SEARCH;
        }
        if (e.isNewsletter()) {
            return o("WAWebWamEnumStatusRowSection").STATUS_ROW_SECTION.CHANNEL_SUBSCRIBER_LIST;
        }
        return o("WAWebWamEnumStatusRowSection").STATUS_ROW_SECTION.CHAT_LIST;
    }
    function H3Component(e) {
        const t = o("react-compiler-runtime").c(11);
        const { lid, name } = e;
        const i = o("useWAWebABPropConfigValue").useABPropConfigValue("whatsapp_orgs_enabled");
        let l;
        if (t[0] !== lid) {
            l = o("WAWebWidToJid").userLidtoLidUserJid(lid);
            t[0] = lid;
            t[1] = l;
        } else {
            l = t[1];
        }
        const s = r("useWAWebPrimaryOrgMembershipForContact")(l);
        if (!i) {
            return name;
        }
        let u;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            u = {
                className: "x6s0dn4 x78zum5 xeuugli x6ikm8r x10wlt62 xh8yej3"
            };
            t[2] = u;
        } else {
            u = t[2];
        }
        let c;
        if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
            c = {
                className: "x6s0dn4 x78zum5 xs83m0k xeuugli x6ikm8r x10wlt62"
            };
            t[3] = c;
        } else {
            c = t[3];
        }
        let d;
        if (t[4] !== name) {
            d = <div {...babelHelpers.extends({}, c, {
                "data-testid": "chat-list-title-name",
                children: name
            })}/>;
            t[4] = name;
            t[5] = d;
        } else {
            d = t[5];
        }
        let p;
        if (t[6] !== s) {
            p = m.jsx(r("WAWebOrgIcon.react"), {
                membership: s
            });
            t[6] = s;
            t[7] = p;
        } else {
            p = t[7];
        }
        let _;
        if (t[8] !== d || t[9] !== p) {
            _ = <div {...babelHelpers.extends({}, u, {
                "data-testid": "chat-list-title-content",
                children: [
                    d,
                    p
                ]
            })}/>;
            t[8] = d;
            t[9] = p;
            t[10] = _;
        } else {
            _ = t[10];
        }
        return _;
    }
    const y = ((d_PureComponent_1)=>{
        function a(e) {
            let a;
            a = d_PureComponent_1.call(this, e) || this;
            a.$1 = 0;
            a.$3 = function(e) {
                a.$2 = e;
            };
            a.$5 = function(e) {
                a.$4 = e;
            };
            a.state = {
                active: false,
                focused: false,
                dragging: false,
                searchText: "",
                contextMenu: null,
                wdsMenuOpen: false,
                chatId: null,
                unreadCount: 0,
                isHovered: false,
                chatlistDensity: S(),
                chatAssignmentVisibleToUser: o("WAWebFeatureFlagCollection").FeatureFlagCollection.get(o("WAWebFeatureFlagName").FeatureFlagName.CHAT_ASSIGNMENT)?.enabled === true,
                assignedAgents: o("WAWebChatAssignmentGatingUtils").chatAssignmentEnabled() ? o("WAWebChatAssignmentCollection").ChatAssignmentCollection.getAgentCollectionForChatId(a.props.chat.id).toArray() : []
            };
            a.$8 = null;
            a.$9 = function() {
                a.setState({
                    chatlistDensity: S()
                });
            };
            a.$10 = function(e) {
                if (a.props.chat.groupMetadata?.parentGroup?.equals(e.id) === true) {
                    a.forceUpdate();
                }
            };
            a.$7 = function() {
                const e = o("WAWebFrontendChatGetters").getOptimisticUnreadCount(a.props.chat);
                if (e !== a.state.unreadCount) {
                    a.setState({
                        unreadCount: e
                    });
                }
            };
            a.$11 = function() {
                let e;
                const chat = a.props.chat;
                if (o("WAWebChatGetters").getIsGroup(chat) && (e = chat.groupMetadata) != null && e.stale) {
                    r("WAWebGroupMetadataCollection").find(chat.id);
                }
            };
            a.$12 = function() {
                const chat = a.props.chat;
                if (o("WAWebChatGetters").getIsGroup(chat)) {
                    r("WAWebMemberLabelCollection").initializeLabelsForChat(o("WAWebWidToJid").widToGroupJid(chat.id));
                }
            };
            a.$13 = function() {
                const chat = a.props.chat;
                if (o("WAWebChatGetters").getIsGroup(chat)) {
                    o("WAWebGroupHistoryParticipantStateHydration").prefetchGroupHistoryStateForChat(chat.id);
                }
            };
            a.$14 = function() {
                if (a.props.searchQuery) {
                    a.setState({
                        searchText: a.props.searchQuery.trimmed()
                    });
                } else {
                    o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "Chat: prop searchQuery is undefined"
                    ])));
                }
            };
            a.$15 = function(e) {
                if (e === "focus") {
                    const t = a.$4;
                    if (t) {
                        o("WAWebDomScroll").scrollIntoViewIfNeeded(t);
                        r("WAWebFocusTracer").focus(t);
                    }
                }
                a.setState({
                    active: !!e
                });
            };
            a.$16 = function() {
                if (o("WAWebChatAssignmentGatingUtils").chatAssignmentEnabled()) {
                    const assignedAgents = o("WAWebChatAssignmentCollection").ChatAssignmentCollection.getAgentCollectionForChatId(a.props.chat.id).toArray();
                    a.setState({
                        assignedAgents
                    });
                }
            };
            a.contextEnabled = function() {
                const noContext = a.props.noContext;
                return !noContext;
            };
            a.$17 = function(e) {
                if (a.contextEnabled()) {
                    e.preventDefault();
                    e.stopPropagation();
                    const t = r("justknobx")._("6451") && (e.button === 2 || e.ctrlKey);
                    if (t && a.$18) {
                        a.$19({
                            event: e
                        });
                    } else if (a.$20) {
                        a.$20();
                    } else if (a.$18) {
                        a.$18();
                    }
                }
            };
            a.assignChat = function() {
                const e = !!(a.props.searchQuery && !a.props.searchQuery.isEmptyQuery());
                const archive = a.props.chat.archive;
                if (a.props.mode === _.INFO) {
                    o("WAWebCmd").Cmd.assignChat(a.props.chat, o("WAWebChatAssignmentLogEvents.flow").ChatAssignmentEntryPointType.CONTACT_INFO_SCREEN);
                    return;
                }
                if (e || archive) {
                    o("WAWebCmd").Cmd.assignChat(a.props.chat, o("WAWebChatAssignmentLogEvents.flow").ChatAssignmentEntryPointType.MULTI_SELECT);
                    return;
                }
                const a_props = a.props;
                const { multiSelection, onStartMultiSelect, selectableState } = a_props;
                if (selectableState && multiSelection && onStartMultiSelect) {
                    selectableState.setSelectable(true);
                    multiSelection.setVal(o("WAWebStateUtils").unproxy(a.props.chat));
                    onStartMultiSelect(o("WAWebMultiSelectEntryPointConstants").MultiSelectEntryPoint.ChatAssignment);
                }
            };
            a.$19 = function(e) {
                if (e.event && a.$18) {
                    a.$18(e.event);
                } else if (e.anchor && a.$20) {
                    a.$20();
                }
            };
            a.$18 = null;
            a.$20 = null;
            a.$21 = function(e) {
                a.$18 = e;
            };
            a.$22 = function(e) {
                a.$20 = e;
            };
            a.$23 = function(wdsMenuOpen) {
                a.setState({
                    wdsMenuOpen
                });
                a.props.onContextMenuChange?.(wdsMenuOpen);
            };
            a.$24 = function() {
                a.setState({
                    contextMenu: null
                });
                a.props.onContextMenuChange?.(false);
            };
            a.$25 = function(e) {
                const a_props = a.props;
                const { chat, onClick } = a_props;
                if (onClick) {
                    onClick(e, o("WAWebStateUtils").unproxy(chat));
                }
            };
            a.$26 = function(e) {
                if (e.button === 0) {
                    a.$25(e);
                }
            };
            a.$27 = function() {
                o("WAWebPreloadChatMessagesAction").preloadChatMessagesAction(o("WAWebStateUtils").unproxy(a.props.chat));
                a.setState({
                    isHovered: true
                });
            };
            a.$28 = function() {
                a.setState({
                    isHovered: false
                });
            };
            a.$29 = function(e) {
                if (!(e.target !== e.currentTarget && r("justknobx")._("6451"))) {
                    e.preventDefault();
                    e.stopPropagation();
                    a.$25(e);
                }
            };
            a.$30 = function(e) {
                if (a.props.chat.canSend) {
                    const t = new (r("WAWebDataTransfer"))(e.dataTransfer);
                    if (t.hasType(f)) {
                        if (a.$1 === 0) {
                            a.setState({
                                dragging: true
                            });
                        }
                        a.$1 += 1;
                    }
                }
            };
            a.$31 = function(e) {
                if (a.props.chat.canSend) {
                    const t = new (r("WAWebDataTransfer"))(e.dataTransfer);
                    if (t.hasType(f)) {
                        a.$1 -= 1;
                        if (a.$1 === 0) {
                            a.setState({
                                dragging: false
                            });
                        }
                    }
                }
            };
            a.$32 = function(e) {
                const chat = a.props.chat;
                if (chat.canSend) {
                    a.setState({
                        dragging: false
                    });
                    const n = new (r("WAWebDataTransfer"))(e.dataTransfer);
                    if (n.hasType(f)) {
                        o("WAWebEventFiles").getFiles(e).then((e)=>{
                            o("WAWebCmd").Cmd.openChatFromUnread({
                                chat,
                                chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.DragAndDrop
                            }).then((n)=>{
                                if (n) {
                                    o("WAWebCmd").Cmd.attachMediaDrawer({
                                        chat,
                                        bot3pMediaInputAuthorized: o("WAWebResolveSupportedMediaTypes").isBot3pMediaInputEnabled(chat),
                                        initCaption: chat.getComposeContents(),
                                        attachments: e.map((file)=>({
                                                file
                                            })),
                                        fileOrigin: o("WAWebWamEnumMediaPickerOriginType").MEDIA_PICKER_ORIGIN_TYPE.CHAT_PHOTO_LIBRARY
                                    });
                                }
                            });
                        }).catch(o("WAFilteredCatch").filteredCatch(o("WAWebMediaLoadErrors").MediaDragDropError, function(e) {
                            o("WAWebCmd").Cmd.openChatFromUnread({
                                chat,
                                chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.DragAndDrop
                            }).then((n)=>{
                                if (n && e.src) {
                                    o("WAWebComposeBoxActions").ComposeBoxActions.paste(chat, e.src);
                                }
                            });
                        }));
                    }
                }
            };
            a.$33 = function(e) {
                if (!(a.props.alwaysFocusable === true && !a.$34(e))) {
                    a.setState({
                        focused: true
                    });
                }
            };
            a.$35 = function() {
                a.setState({
                    focused: false
                });
            };
            a.$36 = {
                enter: a.$29,
                space: a.$29,
                left: function() {
                    return a.props.handleArrowKeyInChatItem?.(a.props.chat.id.toString());
                },
                right: function() {
                    return a.props.handleArrowKeyInChatItem?.(a.props.chat.id.toString());
                }
            };
            a.$6 = a.props.throttle(a.$7, 0, {
                leading: false,
                trailing: true
            });
            return a;
        }
        babelHelpers.inheritsLoose(a, d_PureComponent_1);
        a.getDerivedStateFromProps = function(t, n) {
            const e = {};
            const t_active = t.active;
            let i = false;
            if (t_active != null) {
                const l = t_active.value;
                if (l instanceof o("WAWebChatModel").Chat) {
                    i = r("WAWebWid").equals(l.id, t.chat.id);
                } else if (l instanceof r("WAWebWid") && r("WAWebWid").isGroup(l)) {
                    i = r("WAWebWid").equals(l, t.chat.id);
                }
            }
            if (n.active !== i) {
                e.active = !!i;
            }
            const s = t.searchQuery ? t.searchQuery.trimmed() : "";
            if (n.searchText !== s) {
                e.searchText = s;
            }
            const u = t.chat.id;
            if (n.chatId !== u) {
                e.chatId = u;
                e.unreadCount = o("WAWebFrontendChatGetters").getOptimisticUnreadCount(t.chat);
            }
            return e;
        };
        const a_prototype = a.prototype;
        a_prototype.componentDidMount = function() {
            const e = this;
            let t;
            const chat = this.props.chat;
            this.initListeners(this.props);
            if (this.props.wdsPreviewRowEligible === true && r("gkx")("22829")) {
                r("WAWebChatPreferenceCollection").on("add", this.$9);
                r("WAWebChatPreferenceCollection").on("change:chatlistDensity", this.$9);
                o("WAWebChatCollection").ChatCollection.on("add remove", this.$10);
                this.$8 = function() {
                    r("WAWebChatPreferenceCollection").off("add", e.$9);
                    r("WAWebChatPreferenceCollection").off("change:chatlistDensity", e.$9);
                    o("WAWebChatCollection").ChatCollection.off("add remove", e.$10);
                };
            }
            if (o("WAWebChatGetters").getIsGroup(chat) && (t = chat.groupMetadata) != null && t.stale) {
                o("WAWebIdleTaskRunner").UIBusyTasks.enqueue(this.$11);
            }
            if (o("WAWebChatGetters").getIsGroup(chat)) {
                o("WAWebIdleTaskRunner").UIBusyTasks.enqueue(this.$12);
                o("WAWebIdleTaskRunner").UIBusyTasks.enqueue(this.$13);
            }
        };
        a_prototype.componentWillUnmount = function() {
            this.$8?.();
        };
        a_prototype.componentDidUpdate = function(t) {
            const chat = this.props.chat;
            if (chat !== t.chat) {
                let n;
                if (o("WAWebChatGetters").getIsGroup(chat) && (n = chat.groupMetadata) != null && n.stale) {
                    o("WAWebIdleTaskRunner").UIBusyTasks.enqueue(this.$11);
                }
                if (o("WAWebChatGetters").getIsGroup(chat)) {
                    o("WAWebIdleTaskRunner").UIBusyTasks.enqueue(this.$12);
                    o("WAWebIdleTaskRunner").UIBusyTasks.enqueue(this.$13);
                }
            }
            if (o("WAWebFrontendChatGetters").getOptimisticUnreadCount(chat) !== this.state.unreadCount) {
                this.$6();
            }
            this.initListeners(this.props, t);
        };
        a_prototype.initListeners = function(t, n) {
            const e = this;
            const { active, chat, listeners, searchQuery } = t;
            if (n?.searchQuery && n.searchQuery !== searchQuery) {
                listeners.remove(n.searchQuery, o("WAWebChatSearchQuery").SEARCH_EVENT, this.$14);
            }
            if (searchQuery && (!n || searchQuery !== n.searchQuery)) {
                listeners.add(searchQuery, o("WAWebChatSearchQuery").SEARCH_EVENT, this.$14);
            }
            const s = n?.chat.id;
            if (!chat.id.equals(s) && (n != null && n.active && listeners.remove(n.active, n.chat.id.toString(), this.$15), active)) {
                const u = chat.id.toString();
                listeners.add(active, u, this.$15);
            }
            if (!n && o("WAWebChatAssignmentGatingUtils").chatAssignmentEnabled()) {
                listeners.add(o("WAWebFeatureFlagCollection").FeatureFlagCollection, "add remove change:enabled reset", function() {
                    e.setState({
                        chatAssignmentVisibleToUser: o("WAWebFeatureFlagCollection").FeatureFlagCollection.get(o("WAWebFeatureFlagName").FeatureFlagName.CHAT_ASSIGNMENT)?.enabled === true
                    });
                });
            }
            if (!n) {
                listeners.add(o("WAWebBizAiWebSmartComposerAiListsGateModel").BizAiWebSmartComposerAiListsGateEventBus, "updated", function() {
                    return e.forceUpdate();
                });
            }
            if (s) {
                listeners.remove(o("WAWebChatAssignmentCollection").ChatAssignmentCollection.getAgentCollectionForChatId(s), "add change remove", this.$16);
            }
            listeners.add(o("WAWebChatAssignmentCollection").ChatAssignmentCollection.getAgentCollectionForChatId(chat.id), "add change remove", this.$16);
            if (!n) {
                listeners.add(o("WAWebChatCollection").ChatCollection, "change:isParentGroup", function(t) {
                    if (t.id.equals(e.props.chat.id) || e.props.chat.groupMetadata?.parentGroup?.equals(t.id) === true) {
                        e.forceUpdate();
                    }
                });
            }
        };
        a_prototype.$34 = function({ currentTarget, target }) {
            return target === currentTarget && currentTarget instanceof HTMLElement && currentTarget.matches(":focus-visible");
        };
        a_prototype.render = function() {
            const props = this.props;
            const { chat, doNotBoldUnread, ephemeralIcon, fakePin, filterPreset, firstCellInList, forceActive, hiddenSubgroupIcon, hideArchivedIcon, hideMuteIcon, hidePin, mode, overrideCommunityAnnouncementGroupName, skipCheckMark, smallUnread, testid, theme } = props;
            const x = babelHelpers.objectWithoutPropertiesLoose(props, e);
            let x_secondary = x.secondary;
            const state = this.state;
            const { active, assignedAgents, contextMenu, dragging, focused, isHovered, searchText, unreadCount } = state;
            const chat_contact = chat.contact;
            let U;
            let V;
            let tertiary = null;
            const G = o("WAWebChatAssignmentUtils").canAssignChat(chat) && chat.isAssignedToMe && chat.unopenedByAssignedAgent;
            const z = o("WAWebBizAiAgentStatusUtils").isChatAiEnabled(chat);
            const j = doNotBoldUnread !== true && (unreadCount !== 0 || G) && !z;
            switch(mode){
                case _.LAST:
                    U = m.jsx(r("WAWebChatListTimestamp.react"), {
                        chat,
                        hasUnreadStyle: j,
                        mute: chat.mute,
                        unreadCount
                    });
                    if (x_secondary == null) {
                        x_secondary = m.jsx(r("WAWebChatstateInfo.react"), {
                            chat
                        });
                        V = m.jsx(o("WAWebChatIcons.react").Icons, {
                            chat,
                            mute: chat.mute,
                            unreadCount,
                            hideArchivedIcon: hideArchivedIcon === true,
                            hideMuteIcon: hideMuteIcon === true,
                            unreadMentionIcon: o("WAWebChatGetters").getIsGroup(chat) && chat.hasUnreadMention,
                            smallUnread,
                            hidePin,
                            fakePin,
                            dimWhenMuted: true
                        });
                    }
                    if (this.props.hideTertiaryRow !== true && o("WAWebBizAiAgentStatusUtils").shouldShowTertiaryRowForChat(chat, this.props.showCommunityInfo === true)) {
                        tertiary = m.jsx(r("WAWebChatlistTertiaryPillsRow.react"), {
                            chat
                        });
                    }
                    break;
                case _.INFO:
                    if (x_secondary == null) {
                        if (o("WAWebChatGetters").getIsGroup(chat) || o("WAWebChatGetters").getIsBroadcast(chat)) {
                            x_secondary = chat.groupMetadata ? m.jsx(r("WAWebParticipantsList.react"), {
                                groupMetadata: chat.groupMetadata
                            }) : null;
                        } else if (o("WAWebChatGetters").getIsNewsletter(chat)) {
                            x_secondary = m.jsx(r("WAWebNewsletterChatHeaderSubtitle.react"), {
                                newsletterMetadata: chat.newsletterMetadata,
                                location: "info"
                            });
                        } else if (chat_contact != null) {
                            x_secondary = m.jsx(r("WAWebUserSubtitle.react"), {
                                userSubtitle: {
                                    chatId: chat.id,
                                    chatstate: chat.presence.chatstate,
                                    contact: chat_contact,
                                    location: "list",
                                    presence: chat.presence
                                }
                            });
                        }
                    }
                    break;
            }
            const showChatAssignmentIcon = o("WAWebChatAssignmentUtils").canAssignChat(chat) && this.state.chatAssignmentVisibleToUser;
            let Q;
            const X = this.props.showCommunityInfo === true && o("WAWebCommunityGatingUtils").shouldShowNewSubgroupIdentity(chat.groupMetadata);
            if (X) {
                const J = chat.groupMetadata?.getParentGroupChat();
                if (J != null) {
                    Q = m.jsx(o("WAWebName.react").Name, {
                        chat: J,
                        titlify: true,
                        ellipsify: true
                    });
                }
            }
            const Z = n("cr:16700") != null && this.props.wdsPreviewRowEligible === true && o("WAWebChatlistWDSRowGating").shouldUseWDSPreviewRow({
                chat,
                chatAssignmentVisibleToUser: this.state.chatAssignmentVisibleToUser,
                hasTertiary: tertiary != null,
                isSelectable: this.props.selectableState?.isSelectable === true,
                showChatAssignmentIcon
            });
            let photoSize = this.props.photoSize;
            if (theme === "chat-info") {
                photoSize = 49;
            }
            if (theme === "subgroup" || theme === "community-tab-subgroup") {
                photoSize = 40;
            }
            if (Z) {
                photoSize = o("WDSPreviewListItemMetrics").WDSPreviewListItemAvatarPx[this.state.chatlistDensity];
            }
            const te = o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(chat.groupMetadata) === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP;
            const ne = m.jsx(o("WAWebDetailImage.react").DetailImage, {
                id: chat.id,
                size: photoSize,
                waitIdle: !r("WAWebEnvironment").isWindows,
                shape: te ? o("WAWebDetailImage.react").DetailImageShape.Squircle : null,
                ephemeralIcon,
                isHoveredOrActive: isHovered || active,
                hiddenSubgroupIcon,
                showOutline: false
            });
            const re = this.props.showStatusRingAroundProfilePhoto === true && chat_contact != null && !(Z && this.state.chatlistDensity === "singleLine");
            const profilePhotoSize = Z && this.state.chatlistDensity === "compact" ? "small" : "medium";
            const regularChatImage = re ? m.jsx(r("WAWebStatusChatlistRing.react"), {
                contact: chat_contact,
                profilePhotoSize,
                rowSection: g(chat.id, this.props.searchQuery),
                rowIndex: o("WAWebChatSearchQuery").isSearchResult(this.props.searchQuery) ? 0 : this.props.index || 0
            }) : ne;
            const showCommunityInfo = this.props.showCommunityInfo;
            const showCommunityInfo_1 = showCommunityInfo === undefined ? false : showCommunityInfo;
            const se = o("WAWebChatGetters").getIsGroup(chat) ? m.jsx(r("WAWebGroupChatImage.react"), {
                chat,
                regularChatImage,
                selection: this.props.active,
                showSpeakerForCag: this.props.showSpeakerForCag,
                showCommunityInfo: showCommunityInfo_1,
                isHovered,
                size: photoSize,
                theme: o("WAWebStackedCirclesImage.react").SubgroupImageTheme.CHAT_LIST
            }) : null;
            const mouseDownAsClick = this.props.mouseDownAsClick;
            const ce = r("gkx")("26258") ? false : o("WAWebMuteCollection").MuteCollection.getCollapseMuted() && !o("WAWebChatGetters").getIsNewsletter(chat);
            let de;
            if (contextMenu) {
                const Component = o("WAWebUimUie.react").UIE;
                de = <Component displayName="ChatContextMenu" escapable popable dismissOnWindowResize requestDismiss={this.$24}>{m.jsx(r("WAWebUimUieMenu.react"), {
                    contextMenu
                })}</Component>;
            }
            const searchMatch = this.props.searchMatch;
            const pe = searchMatch == null || searchMatch.results.length === 0 ? searchText : searchMatch.results.map((e)=>searchMatch.match.substring(e.startIndex, e.startIndex + e.length)).join(" ");
            const _e = unreadCount !== 0 ? <span className="xzpqnlu x1hyvwdk xjm9jq1 x6ikm8r x10wlt62 x10l6tqk x1i1rx1s">{unreadCount > 0 ? s._("_j{\"*\":\"{count} unread messages\",\"_1\":\"1 unread message\"}", [
                s._plural(unreadCount, "count")
            ]) : s._("Unread")}</span> : null;
            const fe = tertiary != null && o("WAWebBizAiAgentStatusUtils").shouldShowLabelPillsForChat(chat);
            const ge = m.jsx(o("WAWebName.react").Name, {
                chat,
                firstLabel: filterPreset?.label,
                highlightText: pe,
                showBusinessCheckmark: this.props.showVerifiedBadge ?? (chat_contact != null && o("WAWebContactGetters").getShowBusinessCheckmarkInChatlist(chat_contact)),
                showLabelIcon: o("WAWebMobilePlatforms").isSMB() && !fe,
                titlify: true,
                ellipsify: true,
                showChatAssignmentIcon,
                assignedAgents,
                showMessageYourselfName: chat_contact != null && o("WAWebContactGetters").getIsMe(chat_contact),
                skipCheckMark,
                overrideCommunityAnnouncementGroupName,
                xstyle: o("WDSFontTokenStyles").WDSFontTokenStyles.Body1,
                truncateName: true,
                unknownUserLogContext: "chat_list"
            });
            const he = this.props.searchQuery != null && !o("WAWebUserPrefsMeUser").isMeAccount(chat.id) ? o("WAWebOrgMemberLidEligibility").getWAWebOrgMemberLid(chat.id) : null;
            const ye = he != null ? <H3Component lid={he} name={ge}/> : ge;
            const Ce = <>{_e}{ye}</>;
            let be = null;
            const ve = o("WAWebChatEphemerality").getEphemeralSetting(chat);
            if (ve != null && ve !== 0) {
                const Component = o("WAWebAccessibility.react").InvisibleLabel;
                be = <Component>{o("WAWebEphemeralFbtKic").getDisappearingMessageExplanationStringKic(ve)}</Component>;
            }
            const Component = o("WAWebErrorBoundary.react").ErrorBoundary;
            const Se = <Component name="chat-cell-image">{o("WAWebChatGetters").getIsGroup(chat) && se != null ? se : regularChatImage}</Component>;
            const Re = x.focused ?? focused;
            const Le = chat_contact != null && o("WAWebContactGetters").getIsMe(chat_contact) ? "message-yourself-row" : testid;
            const Component_1 = n("cr:16700");
            const Component_2 = r("WAWebChatCell.react");
            const Ee = Z && n("cr:16700") != null ? <Component_1 active={forceActive ?? !!active} chat={chat} avatar={Se} contextEnabled={this.contextEnabled} dragging={!!dragging} focused={Re === true} menuOpen={!!contextMenu || this.state.wdsMenuOpen} mentioned={o("WAWebChatGetters").getIsGroup(chat) && chat.hasUnreadMention === true} onContext={this.$19} onMouseEnter={this.$27} onMouseLeave={this.$28} onPress={this.$25} pressOnMouseDown={mouseDownAsClick === true} parentName={Q} pinned={hidePin !== true && chat.pin != null && chat.pin > 0 || fakePin === true} primary={ye} primaryDetail={U} ref={this.$3} secondary={x_secondary} starred={chat.isFavorite} testid={Le} unread={j} unreadCount={unreadCount}/> : <Component_2 id={chat.id} ref={this.$3} theme={theme} contextEnabled={this.contextEnabled} pendingAction={chat.pendingAction} contextMenu={!!contextMenu || this.state.wdsMenuOpen} unreadStyle={j} active={forceActive ?? !!active} activeStyleType={this.props.activeStyleType} isMuted={ce && o("WAWebMuteGetters").getIsMuted(chat.mute)} dragging={!!dragging} image={Se} primary={Ce} primaryDetail={U} secondary={x_secondary} secondaryDetail={V} onClick={mouseDownAsClick ? undefined : this.$25} onMouseDown={mouseDownAsClick ? this.$26 : undefined} onContext={this.$19} onMouseEnter={this.$27} onMouseLeave={this.$28} testid={Le} isNewsletter={o("WAWebChatGetters").getIsNewsletter(chat)} label={Q} tertiary={tertiary} firstCellInList={firstCellInList} className={(c || (c = r("stylex")))(Re && o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocusPersistent)}/>;
            const Component_3 = r("WAWebChatCellContextMenuV2.react");
            const Component_4 = o("WAWebKeyboardHotKeys.react").HotKeys;
            const Component_5 = r("WAWebGroupMetadataContext").Provider;
            return <Component_5 value={chat.groupMetadata}><Component_4 ref={this.$5} handlers={this.$36} onFocus={this.$33} onBlur={this.$35} onContextMenu={this.$17} focusType={this.props.alwaysFocusable === true ? "all" : "keyboardOnly"} onDragEnter={this.$30} onDragLeave={this.$31} onDrop={this.$32} aria-selected={forceActive ?? active} data-tab={this.props.tabOrder} tabIndex={active || this.props.alwaysFocusable === true ? 0 : -1}><><Component_3 chat={chat} assignChat={this.assignChat} cellRef={this.$2} chatListIndex={this.props.index} hideArchiveOption={this.props.hideArchiveOption === true} multiSelection={this.props.multiSelection} onStartMultiSelect={this.props.onStartMultiSelect} searchQuery={this.props.searchQuery} selectableState={this.props.selectableState} onContextMenuChange={this.$23} onContextMenuReady={this.$21} onChevronMenuReady={this.$22}/>{Ee}</>{be}{de}</Component_4></Component_5>;
        };
        return a;
    })(d_PureComponent);
    y.CONCERNS = {
        chat: [
            "id",
            "isReadOnly",
            "pendingAction",
            "canSend",
            "contact",
            "presence",
            "groupMetadata",
            "newsletterMetadata",
            "mute",
            "pendingSeenCount",
            "unreadCount",
            "labels",
            "archive",
            "hasUnreadMention",
            "unopenedByAssignedAgent",
            "chatlistPreview",
            "lastReactionPreview",
            "isAssignedToMe",
            "msgs",
            "msgs",
            "msgsChanged",
            "pendingDeleteForMeCount",
            "isFavorite",
            "capiThreadControl",
            "isAiHandoff",
            "aiHandoffRemovalExpiry",
            "aiHandoffStartedAt",
            "groupType",
            "active",
            "pin",
            "formattedTitle"
        ]
    };
    y.defaultProps = {
        mode: _.LAST
    };
    function C() {
        return r("WAWebTimerHoc_DEPRECATED.react")(o("WAWebListenerHoc_DEPRECATED").ListenerHOC(r("WAWebStateHoc_DEPRECATED.react")(y, y.CONCERNS)));
    }
    const b = C();
    const v = C();
    function S() {
        let e;
        if (o("WAWebChatlistAppearanceSettingsGating").isChatlistAppearanceSettingsEnabled() && (e = r("WAWebChatPreferenceCollection").get(o("WAWebChatPreferenceModel").DEFAULT_PREFERENCE)?.chatlistDensity) != null) {
            return e;
        }
        return o("WAWebChatPreferenceModel").DEFAULT_CHATLIST_DENSITY;
    }
    l.Mode = _;
    l.getChatlistRingRowSection = g;
    l.ChatFactory = C;
    l.Chat = b;
    l.ChatOrContact = v;
}, 226);