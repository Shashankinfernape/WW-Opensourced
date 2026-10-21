__d("WAWebChatModel", [
    "fbt",
    "Promise",
    "WAFilteredCatch",
    "WAInOrderPromiseQueue",
    "WALogger",
    "WAPromiseDelays",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebAck",
    "WAWebAiThreadCollection",
    "WAWebAlarm",
    "WAWebAppTracker",
    "WAWebBackendErrors",
    "WAWebBaseModel",
    "WAWebBizAiAgentGating",
    "WAWebBizAiHandoffRemoval",
    "WAWebBizLabelUtils",
    "WAWebBotGating",
    "WAWebBotProfileCollection",
    "WAWebBotUtils",
    "WAWebBroadcastMetadataCollection",
    "WAWebChatAssignmentCollection",
    "WAWebChatAssignmentGatingUtils",
    "WAWebChatCollection",
    "WAWebChatConstants",
    "WAWebChatDocMsgsCollection",
    "WAWebChatEntryPoint",
    "WAWebChatFlowTypes",
    "WAWebChatGetters",
    "WAWebChatGroupUtils",
    "WAWebChatLinkMsgsCollection",
    "WAWebChatLoadMessages",
    "WAWebChatMedia",
    "WAWebChatMediaMsgsCollection",
    "WAWebChatMessageSearch",
    "WAWebChatModelDerivedMethods",
    "WAWebChatParticipantColor",
    "WAWebChatShowUnreadInTitle",
    "WAWebChatSquelchConstants",
    "WAWebChatThemeGatingUtils",
    "WAWebChatThemeValue",
    "WAWebChatUnreadMentions",
    "WAWebChatUpdates",
    "WAWebChatViewMode.flow",
    "WAWebCmd",
    "WAWebCollectionConstants",
    "WAWebConnGetters",
    "WAWebConnModel",
    "WAWebContactCollection",
    "WAWebDBEphemeralMessage",
    "WAWebDBUpdateChatTable",
    "WAWebDBUpdateContactTable",
    "WAWebDebounce",
    "WAWebDecrementThreadUnreadCountsAction",
    "WAWebEventMsgsCollection",
    "WAWebFavoriteCollection",
    "WAWebFrontendChatGetters",
    "WAWebFrontendContactGetters",
    "WAWebFrontendMsgGetters",
    "WAWebGroupMetadataCollection",
    "WAWebGroupMetadataGetters",
    "WAWebGroupSafetyCheckUtils",
    "WAWebHandleNewMsgAction",
    "WAWebKeepInChatMsgUtils",
    "WAWebL10N",
    "WAWebLidMigrationUtils",
    "WAWebLimitSharingModelUtils",
    "WAWebMedia",
    "WAWebMemoryPressureCacheRegistry",
    "WAWebMsgDataFromModel",
    "WAWebMsgGetters",
    "WAWebMsgLinks",
    "WAWebMuteCollection",
    "WAWebNewsletterCollection",
    "WAWebNewsletterMetadataCollection",
    "WAWebNewsletterMetadataGetters",
    "WAWebNoop",
    "WAWebOTPLoggingHelper",
    "WAWebPresenceChatAction",
    "WAWebPresenceCollection",
    "WAWebRequestDeleteAddOns",
    "WAWebSendNotSpamAction",
    "WAWebStarredMsgCollection",
    "WAWebSuperChatMsgs",
    "WAWebThreadsGating",
    "WAWebTos",
    "WAWebTrustedContactsUtils",
    "WAWebUnreadMentionMetadataModel",
    "WAWebUpdateDraftMessageChatAction",
    "WAWebUpdateLastAddOnPreviewChatAction",
    "WAWebUserPrefsMeUser",
    "WAWebValidateLidChat",
    "WAWebViewOnceState",
    "WAWebViewRepliesCollection",
    "WAWebWamEnumWebcChatType",
    "WAWebWid",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "nullthrows"
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
    let h;
    let y;
    const C = 1000;
    const b = ((t)=>{
        function a(...r) {
            let e;
            e = t.call(this, ...r) || this;
            e.id = o("WAWebBaseModel").prop();
            e.accountLid = o("WAWebBaseModel").prop();
            e.t = o("WAWebBaseModel").prop();
            e.unreadCount = o("WAWebBaseModel").prop(0);
            e.unreadDividerOffset = o("WAWebBaseModel").prop(0);
            e.archive = o("WAWebBaseModel").prop();
            e.isReadOnly = o("WAWebBaseModel").prop();
            e.isLocked = o("WAWebBaseModel").prop();
            e.isAnnounceGrpRestrict = o("WAWebBaseModel").prop();
            e.modifyTag = o("WAWebBaseModel").prop();
            e.muteExpiration = o("WAWebBaseModel").prop(0);
            e.mentionAllMuteExpiration = o("WAWebBaseModel").prop();
            e.callMuteExpiration = o("WAWebBaseModel").prop();
            e.isAutoMuted = o("WAWebBaseModel").prop(false);
            e.wallpaper = o("WAWebBaseModel").prop();
            e.showDoodle = o("WAWebBaseModel").prop();
            e.chatThemeId = o("WAWebBaseModel").prop();
            e.colorSchemeId = o("WAWebBaseModel").prop();
            e.stockWallpaperImageId = o("WAWebBaseModel").prop();
            e.wallpaperValue = o("WAWebBaseModel").prop();
            e.chatThemeValue = o("WAWebBaseModel").prop();
            e.name = o("WAWebBaseModel").prop();
            e.notSpam = o("WAWebBaseModel").prop();
            e.pin = o("WAWebBaseModel").prop();
            e.changeNumberOldJid = o("WAWebBaseModel").prop();
            e.changeNumberNewJid = o("WAWebBaseModel").prop();
            e.lastReceivedKey = o("WAWebBaseModel").prop();
            e.capiThreadControl = o("WAWebBaseModel").prop();
            e.isAiHandoff = o("WAWebBaseModel").prop();
            e.aiHandoffRemovalExpiry = o("WAWebBaseModel").prop();
            e.aiHandoffStartedAt = o("WAWebBaseModel").prop();
            e.aiLastHandoffActor = o("WAWebBaseModel").prop();
            e.suggestedRepliesEnabled = o("WAWebBaseModel").prop();
            e.capiCallingPermissionType = o("WAWebBaseModel").prop();
            e.ephemeralDuration = o("WAWebBaseModel").prop();
            e.ephemeralSettingTimestamp = o("WAWebBaseModel").prop();
            e.afterReadDuration = o("WAWebBaseModel").prop();
            e.disappearingModeInitiator = o("WAWebBaseModel").prop();
            e.disappearingModeTrigger = o("WAWebBaseModel").prop();
            e.disappearingModeInitiatedByMe = o("WAWebBaseModel").prop();
            e.createdLocally = o("WAWebBaseModel").prop();
            e.chatViewMode = o("WAWebBaseModel").prop(o("WAWebChatViewMode.flow").ChatViewModeType.VISIBLE);
            e.pendingAction = o("WAWebBaseModel").session();
            e.formattedTitle = o("WAWebBaseModel").session();
            e.active = o("WAWebBaseModel").session();
            e.pausedTimerId = o("WAWebBaseModel").session();
            e.presenceResendTimerId = o("WAWebBaseModel").session();
            e.recording = o("WAWebBaseModel").session();
            e.typing = o("WAWebBaseModel").session();
            e.colors = o("WAWebBaseModel").session();
            e.attachMediaContents = o("WAWebBaseModel").session();
            e.draftAttachMediaContentsSortTs = o("WAWebBaseModel").session();
            e.isCameraCaptureDrawerOpen = o("WAWebBaseModel").session(false);
            e.isComposingPoll = o("WAWebBaseModel").session(false);
            e.pttRecordingSession = o("WAWebBaseModel").session();
            e.squelch = o("WAWebBaseModel").session();
            e.reactionSquelch = o("WAWebBaseModel").session();
            e.pendingSeenCount = o("WAWebBaseModel").session(0);
            e.markedUnread = o("WAWebBaseModel").session();
            e.trusted = o("WAWebBaseModel").session();
            e.groupSafetyChecked = o("WAWebBaseModel").session();
            e.canSend = o("WAWebBaseModel").session();
            e.showUnreadInTitle = o("WAWebBaseModel").session(false);
            e.activeUnreadCount = o("WAWebBaseModel").session();
            e.isFavorite = o("WAWebBaseModel").session(false);
            e.promises = o("WAWebBaseModel").session(function() {
                return {};
            });
            e.ftsCache = o("WAWebBaseModel").session(function() {
                return {};
            });
            e.composeQuotedMsg = o("WAWebBaseModel").session();
            e.composeQuotedMsgRemoteJid = o("WAWebBaseModel").session();
            e.quotedMsgAdminGroupJid = o("WAWebBaseModel").session();
            e.quotedMsgAdminGroupSubject = o("WAWebBaseModel").session();
            e.quotedMsgAdminParentGroupJid = o("WAWebBaseModel").session();
            e.groupMetadata = o("WAWebBaseModel").session();
            e.broadcastMetadata = o("WAWebBaseModel").session();
            e.broadcastRecipientCount = o("WAWebBaseModel").session(0);
            e.bbProEntrypointEnabled = o("WAWebBaseModel").session(false);
            e.newsletterMetadata = o("WAWebBaseModel").session();
            e.presence = o("WAWebBaseModel").session();
            e.mute = o("WAWebBaseModel").session();
            e.contact = o("WAWebBaseModel").session();
            e.mediaCount = o("WAWebBaseModel").session(0);
            e.linkCount = o("WAWebBaseModel").session(0);
            e.docCount = o("WAWebBaseModel").session(0);
            e.productCount = o("WAWebBaseModel").session(0);
            e.pendingDeleteForMeCount = o("WAWebBaseModel").session(0);
            e.isParentGroup = o("WAWebBaseModel").session();
            e.groupType = o("WAWebBaseModel").session();
            e.hasCapi = o("WAWebBaseModel").session();
            e.unreadMentionsOfMe = o("WAWebBaseModel").prop();
            e.unreadMentionCount = o("WAWebBaseModel").prop();
            e.hasUnreadMention = o("WAWebBaseModel").prop(false);
            e.archiveAtMentionViewedInDrawer = o("WAWebBaseModel").prop(false);
            e.hasChatBeenOpened = o("WAWebBaseModel").prop(false);
            e.tcToken = o("WAWebBaseModel").prop();
            e.tcTokenTimestamp = o("WAWebBaseModel").prop();
            e.tcTokenSenderTimestamp = o("WAWebBaseModel").prop();
            e.msgUnsyncedButtonReplyMsgs = o("WAWebBaseModel").prop();
            e.endOfHistoryTransfer = o("WAWebBaseModel").session(false);
            e.endOfHistoryTransferType = o("WAWebBaseModel").prop();
            e.pendingInitialLoading = o("WAWebBaseModel").prop(false);
            e.lastReactionPreview = o("WAWebBaseModel").prop();
            e.chatlistPreview = o("WAWebBaseModel").prop();
            e.previewT = o("WAWebBaseModel").prop();
            e.unopenedByAssignedAgent = o("WAWebBaseModel").session(false);
            e.isAssignedToMe = o("WAWebBaseModel").session(false);
            e.assignedAgent = o("WAWebBaseModel").session();
            e.unreadEditTimestampMs = o("WAWebBaseModel").prop();
            e.draftMessage = o("WAWebBaseModel").prop();
            e.draftMessageSortTs = o("WAWebBaseModel").session();
            e.ephemeralDisplayedExemptions = o("WAWebBaseModel").prop();
            e.hasOpened = o("WAWebBaseModel").prop();
            e.lastChatEntryTimestamp = o("WAWebBaseModel").prop();
            e.botInitialTypingIndicatorMsgId = o("WAWebBaseModel").session();
            e.hasCreatedBotInvokeSystemMsg = o("WAWebBaseModel").prop();
            e.bizBotSystemMsgType = o("WAWebBaseModel").prop();
            e.hasRequestedWelcomeMsg = o("WAWebBaseModel").prop(false);
            e.lidOriginType = o("WAWebBaseModel").prop();
            e.historyChatId = o("WAWebBaseModel").prop();
            e.hasCtwaConsumerDataSharingDisclosureSystemMsg = o("WAWebBaseModel").prop(false);
            e.hasPreloaded = o("WAWebBaseModel").session(false);
            e.chatEntryPoint = o("WAWebBaseModel").session(o("WAWebChatEntryPoint").ChatEntryPoint.Initialization);
            e.forceDismissAiAgentBlockBar = o("WAWebBaseModel").session(false);
            e.isSmartComposerHandoffCardDismissed = o("WAWebBaseModel").session(false);
            e.limitSharing = o("WAWebBaseModel").prop();
            e.acp2Setting = o("WAWebBaseModel").prop();
            e.mmSignalSharingExpirationWindow = o("WAWebBaseModel").prop();
            e.isSenderNewAccount = o("WAWebBaseModel").prop();
            e.isSenderSuspicious = o("WAWebBaseModel").prop();
            e.parentCompanyName = o("WAWebBaseModel").prop();
            e.obaPhoneNumber = o("WAWebBaseModel").prop();
            e.toneId = o("WAWebBaseModel").prop();
            e.aiThreads = o("WAWebBaseModel").session(null);
            e.viewRepliesThreads = o("WAWebBaseModel").session(null);
            e.aiHandoffRemovalEvictionTimer = o("WAWebBaseModel").session(null);
            return babelHelpers.assertThisInitialized(e) || babelHelpers.assertThisInitialized(e);
        }
        babelHelpers.inheritsLoose(a, t);
        const a_prototype = a.prototype;
        a_prototype.initialize = function() {
            const n = this;
            let a;
            t.prototype.initialize.call(this);
            this.deriveThemeValueObjectsFromFlats();
            o("WAWebBizAiHandoffRemoval").armHandoffRemovalEvictionTimer(this);
            o("WAWebValidateLidChat").validateLidChat(this);
            this.addQueue = new (r("WAInOrderPromiseQueue"));
            this.sendQueue = new (r("WAInOrderPromiseQueue"));
            this.$ChatImpl$p_1 = new Set;
            this.$ChatImpl$p_2 = new Map;
            this.$ChatImpl$p_3 = new AbortController;
            this.$ChatImpl$p_4();
            this.msgs.msgLoadState.contextLoaded = true;
            this.unreadMentionMetadata = new (r("WAWebUnreadMentionMetadataModel"));
            o("WAWebChatUnreadMentions").initializeUnreadMentions(this);
            this.listenTo(this.unreadMentionMetadata.unreadMentionCollection, "add", this.$ChatImpl$p_5);
            this.listenTo(this.unreadMentionMetadata.unreadMentionCollection, "remove", this.$ChatImpl$p_5);
            this.listenTo(this.unreadMentionMetadata.unreadMentionCollection, "reset", this.$ChatImpl$p_5);
            this.listenTo(this.unreadMentionMetadata, "change:pendingUnreadMentionCount", this.$ChatImpl$p_5);
            this.addChild("presence", o("WAWebPresenceCollection").PresenceCollection.gadd(this.$ChatImpl$p_6()));
            const i = o("WAWebMuteCollection").MuteCollection.get(this.id);
            if (i) {
                this.addChild("mute", i);
            } else {
                this.addChild("mute", o("WAWebMuteCollection").MuteCollection.gadd({
                    id: this.id,
                    expiration: this.muteExpiration,
                    isAutoMuted: this.isAutoMuted,
                    mentionAllMuteExpiration: this.mentionAllMuteExpiration,
                    callExpiration: this.callMuteExpiration
                }));
            }
            this.listenTo(this.mute, "change:expiration", this.$ChatImpl$p_7);
            this.listenTo(this.mute, "change:isAutoMuted", this.$ChatImpl$p_7);
            this.listenTo(this.mute, "change:mentionAllMuteExpiration", this.$ChatImpl$p_8);
            this.listenTo(this.mute, "change:callExpiration", this.$ChatImpl$p_9);
            this.addChild("contact", o("WAWebContactCollection").ContactCollection.gadd(this.id));
            if (this.name && !this.contact.name) {
                const l = {
                    name: this.name
                };
                if (o("WAWebChatGetters").getIsUser(this) && !o("WAWebChatGetters").getIsPSA(this)) {
                    o("WAWebDBUpdateContactTable").updateContactTable(this.contact.id, l).then(()=>{
                        n.contact.set(l);
                    });
                } else {
                    this.contact.set(l);
                }
            }
            this.listenTo(this.contact, "change:name", this.$ChatImpl$p_10);
            this.listenTo(this.contact, "change:isContactBlocked", this.$ChatImpl$p_11);
            this.listenTo(this, "change:id", this.$ChatImpl$p_12);
            this.listenTo(this, "change:archive", this.$ChatImpl$p_12);
            this.listenTo(this, "change:unreadCount", this.$ChatImpl$p_12);
            this.listenTo(this, "change:pendingSeenCount", this.$ChatImpl$p_12);
            this.listenTo(this, "change:muteExpiration", this.$ChatImpl$p_12);
            this.listenTo(this, "change:isLocked", this.$ChatImpl$p_12);
            this.listenTo(o("WAWebFavoriteCollection").FavoriteCollection, "add", this.$ChatImpl$p_13);
            this.listenTo(o("WAWebFavoriteCollection").FavoriteCollection, "remove", this.$ChatImpl$p_13);
            this.listenTo(o("WAWebFavoriteCollection").FavoriteCollection, "change", this.$ChatImpl$p_13);
            if (o("WAWebFavoriteCollection").FavoriteCollection.get(this.id.toString())) {
                this.isFavorite = true;
            }
            if (o("WAWebChatGetters").getIsGroup(this)) {
                this.trusted = true;
            }
            this.listenTo(o("WAWebTos").TosManager, "change", this.$ChatImpl$p_11);
            this.listenTo(this.contact, "change:privacyMode", this.$ChatImpl$p_11);
            if (o("WAWebChatGetters").getIsGroup(this)) {
                const s = r("WAWebGroupMetadataCollection").gadd(this.id);
                this.addChild("groupMetadata", s);
                this.listenTo(s, "change:stale", this.$ChatImpl$p_14);
                this.listenTo(s, "change:announce", this.$ChatImpl$p_14);
                this.listenTo(s, "change:parentGroup", this.$ChatImpl$p_15);
                this.listenTo(s, "change:isParentGroup", this.$ChatImpl$p_15);
                this.listenTo(s, "change:defaultSubgroup", this.$ChatImpl$p_15);
                this.listenTo(s, "change:generalSubgroup", this.$ChatImpl$p_15);
                this.groupType = o("WAWebGroupMetadataGetters").getGroupType(s);
                this.listenTo(s, "change:hasCapi", this.$ChatImpl$p_16);
                this.hasCapi = s.hasCapi;
                this.listenTo(s.participants, "change:isAdmin", this.$ChatImpl$p_14);
                this.listenTo(s.participants, "bulk_add", this.$ChatImpl$p_14);
                this.listenTo(s.participants, "bulk_remove", this.$ChatImpl$p_14);
                for (const u of [
                    "change:trusted",
                    "change:stale"
                ]){
                    this.listenTo(s, u, this.isTrusted);
                }
                for (const c of [
                    "change:groupSafetyCheck",
                    "change:stale"
                ]){
                    this.listenTo(s, c, this.isGroupSafetyChecked);
                }
                this.listenTo(s, "change:participants", this.$ChatImpl$p_17);
                this.listenTo(s, "change:stale", this.$ChatImpl$p_17);
                this.listenTo(s, "change:suspended", this.$ChatImpl$p_17);
                this.listenTo(s, "change:terminated", this.$ChatImpl$p_17);
                this.listenTo(s.participants, "change:contact.formattedShortName", this.$ChatImpl$p_10);
                this.$ChatImpl$p_14();
                o("WAWebChatGroupUtils").updateReadOnly(this);
                this.listenTo(this, "change:isAnnounceGrpRestrict", this.$ChatImpl$p_18);
                this.listenTo(s, "change:isParentGroup", this.$ChatImpl$p_19);
                this.isParentGroup = s.isParentGroup;
            }
            if (o("WAWebChatGetters").getIsBroadcast(this)) {
                if (!r("WAWebBroadcastMetadataCollection").get(this.id)) {
                    r("WAWebBroadcastMetadataCollection").update(this.id).then(()=>{
                        o("WAWebChatGroupUtils").updateTitle(n);
                    }).catch((t)=>{
                        o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "broadcast title update failed \n",
                            ""
                        ], [
                            "broadcast title update failed \\n",
                            ""
                        ])), t);
                    });
                }
                const d = r("WAWebBroadcastMetadataCollection").gadd(this.id);
                this.addChild("broadcastMetadata", d);
                if (d.recipients != null) {
                    this.broadcastRecipientCount = d.recipients.length;
                    this.listenTo(d.recipients, "add", this.$ChatImpl$p_20);
                    this.listenTo(d.recipients, "remove", this.$ChatImpl$p_20);
                    this.listenTo(d.recipients, "reset", this.$ChatImpl$p_20);
                    this.listenTo(d.recipients, "change:contact.formattedShortName", function(e, t) {
                        const r = d.recipients.get(e.id);
                        if (r != null) {
                            r.formattedShortName = t;
                        }
                        o("WAWebChatGroupUtils").updateTitle(n);
                    });
                }
            }
            if (o("WAWebChatGetters").getIsNewsletter(this)) {
                const m = r("WAWebNewsletterMetadataCollection").gadd(this.id);
                this.addChild("newsletterMetadata", m);
                o("WAWebChatGroupUtils").updateReadOnly(this);
                o("WAWebChatGroupUtils").updateCanSend(this);
                this.listenTo(m, "change:membershipType", this.$ChatImpl$p_18);
            } else {
                this.listenTo(this.presence, "change:isOnline", this.$ChatImpl$p_21);
            }
            this.listenTo(this, "change:isReadOnly", this.$ChatImpl$p_22);
            const p = this.getCollection();
            if (p.notSpam[this.id] && !this.notSpam) {
                r("WAWebSendNotSpamAction")(this).catch(r("WAWebNoop"));
            }
            p.notSpam[this.id] = !!this.notSpam;
            if (!this.notSpam) {
                this.listenTo(this, "change:notSpam", this.$ChatImpl$p_23);
            }
            o("WAWebChatGroupUtils").updateTitle(this);
            this.isTrusted();
            this.groupSafetyChecked = !!((a = this.groupMetadata) != null && a.groupSafetyCheck);
            o("WAWebChatGroupUtils").updateCanSend(this);
            this.listenTo(this.contact, "change:name", this.isTrusted);
            this.listenTo(this.msgs, "add", this.$ChatImpl$p_24);
            this.listenTo(this.msgs, "update_sort_time", this.$ChatImpl$p_25);
            this.listenTo(this.msgs, "bulk_add", this.$ChatImpl$p_26);
            this.listenTo(this.msgs, "add", this.$ChatImpl$p_27);
            this.listenTo(this.msgs, "bulk_add", this.deregisterExpiredViewOnceBulkMessages);
            this.listenTo(this.msgs, "add", this.$ChatImpl$p_28);
            this.listenTo(this.msgs, "remove", this.$ChatImpl$p_28);
            this.listenTo(this.msgs, "change:ephemeralExpirationTimestamp", this.$ChatImpl$p_28);
            this.listenTo(this.msgs, "change:kicState", this.$ChatImpl$p_28);
            this.listenTo(this.msgs, "change:expiredTimestamp", this.$ChatImpl$p_28);
            this.listenTo(this.msgs, "bulk_add", this.$ChatImpl$p_29);
            this.listenTo(this.msgs, "change:kicState", this.$ChatImpl$p_30);
            this.listenTo(this, "change:msgs", this.$ChatImpl$p_31);
            this.saveAssignedColorsDebounced = r("WAWebDebounce")(function() {
                return o("WAWebChatParticipantColor").saveAssignedColors(n);
            }, 1000);
            this.listenTo(this, "change:active", this.$ChatImpl$p_32);
            this.pendingAction = 0;
            this.listenTo(this, "change:t", this.$ChatImpl$p_33);
            this.listenTo(this, "change:modifyTag", this.$ChatImpl$p_33);
            if (!o("WAWebABProps").getABPropConfigValue("web_memlab_fixes_3")) {
                this.listenTo(r("WAWebL10N"), "locale_change", this.$ChatImpl$p_10);
            }
            o("WAWebBizLabelUtils").initializeLabels(this);
            if (o("WAWebConnGetters").getIsSMB(o("WAWebConnModel").Conn)) {
                this.$ChatImpl$p_34();
            }
            o("WAWebChatShowUnreadInTitle").computeShowUnreadInTitle(this);
            this.$ChatImpl$p_35();
            if (o("WAWebBotUtils").isMetaAiBot(this.id) && o("WAWebBotGating").isAiChatThreadsEnabled()) {
                const _ = new (o("WAWebAiThreadCollection")).AiThreadCollection;
                this.aiThreads = _;
            }
            if (o("WAWebThreadsGating").isViewRepliesEntryPointEnabled(this) || o("WAWebThreadsGating").isViewRepliesContextMenuEnabled(this)) {
                this.viewRepliesThreads = new (o("WAWebViewRepliesCollection")).ViewRepliesCollection(this.id);
            }
            if (this.id.isFbidBot()) {
                if (!o("WAWebBotProfileCollection").BotProfileCollection.get(this.id)) {
                    o("WAWebBotProfileCollection").BotProfileCollection.find(this.id);
                }
            }
            if (o("WAWebBizAiAgentGating").isAiAgentAutoReplyEnabled()) {
                this.listenTo(this, "change:capiThreadControl", this.$ChatImpl$p_11);
                this.listenTo(this, "change:forceDismissAiAgentBlockBar", this.$ChatImpl$p_11);
            }
            this.listenTo(o("WAWebCmd").Cmd, "reachout_timelock_state_change", this.$ChatImpl$p_11);
            this.listenTo(o("WAWebCmd").Cmd, "new_chat_message_capping_state_change", this.$ChatImpl$p_11);
            this.listenTo(this, "change:tcToken", this.$ChatImpl$p_11);
        };
        a_prototype.$ChatImpl$p_34 = function() {
            if (o("WAWebChatAssignmentGatingUtils").chatAssignmentEnabled()) {
                this.set("unopenedByAssignedAgent", o("WAWebChatAssignmentCollection").ChatAssignmentCollection.getChatUnopenedStatus(this.id));
                const e = o("WAWebChatAssignmentCollection").ChatAssignmentCollection.getAgentCollectionForChatId(this.id);
                this.set("isAssignedToMe", this.$ChatImpl$p_36());
                this.set("assignedAgent", e.at(0));
                this.listenTo(e, "add", this.$ChatImpl$p_37);
                this.listenTo(e, "remove", this.$ChatImpl$p_37);
                this.listenTo(e, "change", this.$ChatImpl$p_37);
            }
        };
        a_prototype.$ChatImpl$p_35 = function() {
            this.eventMsgs = new (r("WAWebEventMsgsCollection"))(this);
            this.listenTo(this.msgs, "bulk_add", this.$ChatImpl$p_38);
            this.listenTo(this.msgs, "change:msgs", this.$ChatImpl$p_39);
        };
        a_prototype.$ChatImpl$p_11 = function() {
            o("WAWebChatGroupUtils").updateCanSend(this);
        };
        a_prototype.$ChatImpl$p_10 = function() {
            o("WAWebChatGroupUtils").updateTitle(this);
        };
        a_prototype.$ChatImpl$p_7 = function() {
            o("WAWebChatUpdates").updateMuteExpiration(this);
        };
        a_prototype.$ChatImpl$p_8 = function() {
            o("WAWebChatUpdates").updateMentionAllMuteExpiration(this);
        };
        a_prototype.$ChatImpl$p_9 = function() {
            o("WAWebChatUpdates").updateCallMuteExpiration(this);
        };
        a_prototype.$ChatImpl$p_17 = function() {
            o("WAWebChatGroupUtils").updateReadOnly(this);
        };
        a_prototype.$ChatImpl$p_18 = function() {
            o("WAWebChatGroupUtils").updateReadOnly(this);
            o("WAWebChatGroupUtils").updateCanSend(this);
        };
        a_prototype.$ChatImpl$p_31 = function() {
            return o("WAWebChatMedia").resetMediaMsgs(this);
        };
        a_prototype.$ChatImpl$p_33 = function() {
            o("WAWebChatMessageSearch").clearFtsCache(this);
        };
        a_prototype.$ChatImpl$p_25 = function() {
            o("WAWebChatUpdates").updateSortTime(this);
        };
        a_prototype.$ChatImpl$p_21 = function() {
            o("WAWebPresenceChatAction").presenceOnlineChanged(this);
        };
        a_prototype.$ChatImpl$p_13 = function() {
            this.isFavorite = !!o("WAWebFavoriteCollection").FavoriteCollection.get(this.id.toString());
        };
        a_prototype.$ChatImpl$p_15 = function() {
            o("WAWebChatShowUnreadInTitle").computeShowUnreadInTitle(this);
            const groupMetadata = this.groupMetadata;
            if (groupMetadata != null) {
                this.groupType = o("WAWebGroupMetadataGetters").getGroupType(groupMetadata);
            }
        };
        a_prototype.$ChatImpl$p_16 = function() {
            const groupMetadata = this.groupMetadata;
            if (groupMetadata != null) {
                this.hasCapi = groupMetadata.hasCapi;
            }
        };
        a_prototype.$ChatImpl$p_19 = function() {
            const groupMetadata = this.groupMetadata;
            if (groupMetadata != null) {
                this.isParentGroup = groupMetadata.isParentGroup;
            }
        };
        a_prototype.$ChatImpl$p_20 = function() {
            const broadcastMetadata = this.broadcastMetadata;
            if (broadcastMetadata?.recipients != null) {
                this.broadcastRecipientCount = broadcastMetadata.recipients.length;
            }
            o("WAWebChatGroupUtils").updateTitle(this);
        };
        a_prototype.$ChatImpl$p_22 = function() {
            if (o("WAWebChatGetters").getIsGroup(this) || o("WAWebChatGetters").getIsNewsletter(this)) {
                this.isTrusted();
                o("WAWebChatGroupUtils").updateCanSend(this);
            }
            if (o("WAWebChatGetters").getIsGroup(this)) {
                r("WAWebGroupMetadataCollection").update(this.id);
            }
        };
        a_prototype.$ChatImpl$p_24 = function(t) {
            o("WAWebHandleNewMsgAction").handleNewMsgForChat(this, t);
        };
        a_prototype.$ChatImpl$p_26 = function(t, n) {
            o("WAWebChatMedia").addMediaMsgs(this, t, n);
        };
        a_prototype.$ChatImpl$p_29 = function(t) {
            const e = this;
            t.forEach((t)=>e.$ChatImpl$p_28(t));
        };
        a_prototype.$ChatImpl$p_30 = function(t) {
            const keptMsgs = this.keptMsgs;
            if (keptMsgs) {
                if (o("WAWebMsgGetters").getIsKept(t)) {
                    keptMsgs.add(t);
                } else {
                    keptMsgs.remove(t);
                }
            }
        };
        a_prototype.$ChatImpl$p_37 = function() {
            const e = o("WAWebChatAssignmentCollection").ChatAssignmentCollection.getAgentCollectionForChatId(this.id);
            this.set("unopenedByAssignedAgent", o("WAWebChatAssignmentCollection").ChatAssignmentCollection.getChatUnopenedStatus(this.id));
            this.set("isAssignedToMe", this.$ChatImpl$p_36());
            this.set("assignedAgent", e.at(0));
        };
        a_prototype.$ChatImpl$p_38 = function(t, n) {
            const e = t.filter((e)=>o("WAWebFrontendMsgGetters").getAsEventCreation(e));
            if (e.length) {
                this.getEventMsgs().add(e, n);
            }
        };
        a_prototype.$ChatImpl$p_39 = function() {
            if (this.eventMsgs) {
                this.eventMsgs.delete();
                this.eventMsgs?.initialize();
            }
        };
        a_prototype.$ChatImpl$p_36 = function() {
            const e = o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE().getDeviceId();
            return o("WAWebChatAssignmentCollection").ChatAssignmentCollection.getAgentCollectionForChatId(this.id).getModelsArray().some((t)=>t.deviceId === e);
        };
        a_prototype.$ChatImpl$p_5 = function() {
            o("WAWebChatUnreadMentions").handleUnreadMention(this);
        };
        a_prototype.set = function(n, r, o) {
            if (typeof n === "string") {
                if (n === "muteExpiration" && this.mute) {
                    this.mute.setMute(r);
                }
                if (n === "isAutoMuted" && this.mute) {
                    this.mute.setAutoMuted(r);
                }
                if (n === "callMuteExpiration" && this.mute) {
                    const a = r ?? 0;
                    if ((this.mute.callExpiration ?? 0) !== a) {
                        this.mute.muteCall(a);
                    }
                }
            } else {
                if (Object.hasOwn(n, "muteExpiration") && this.mute) {
                    this.mute.setMute(n.muteExpiration, n.isAutoMuted);
                }
                if (Object.hasOwn(n, "callMuteExpiration") && this.mute) {
                    const s = n.callMuteExpiration ?? 0;
                    if ((this.mute.callExpiration ?? 0) !== s) {
                        this.mute.muteCall(s);
                    }
                }
            }
            t.prototype.set.call(this, n, r, o);
            return this;
        };
        a_prototype.equals = function(t) {
            return this.id.equals(t?.id);
        };
        a_prototype.addPendingAction = function(t) {
            const e = this;
            const n = function() {
                e.$ChatImpl$p_40();
            };
            t.then(n, n);
            this.pendingAction++;
        };
        a_prototype.$ChatImpl$p_40 = function() {
            if (this.pendingAction > 0) {
                this.pendingAction--;
            } else {
                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "chat:onPendingActionUpdate pendingAction value is invalid"
                ])));
                this.pendingAction = 0;
            }
        };
        a_prototype.$ChatImpl$p_4 = function() {
            if (o("WAWebFrontendChatGetters").getHasDraftMessage(this)) {
                this.draftMessageSortTs = this.draftMessage?.timestamp;
            } else {
                if (this.draftMessageSortTs != null) {
                    this.draftMessageSortTs = null;
                }
            }
        };
        a_prototype.$ChatImpl$p_32 = function() {
            const e = this;
            if (o("WAWebChatGetters").getIsGroup(this) && this.active) {
                this.squelch = o("WAWebChatSquelchConstants").SQUELCH_RESET_VALUE;
                this.reactionSquelch = o("WAWebChatSquelchConstants").SQUELCH_RESET_VALUE;
            }
            if (this.active) {
                this.hasChatBeenOpened = true;
            }
            this.presence.chatActive = this.active;
            if (this.active) {
                const lastChatEntryTimestamp = o("WATimeUtils").unixTime();
                const n = this.lastChatEntryTimestamp;
                if (n == null || lastChatEntryTimestamp - n > o("WATimeUtils").HOUR_SECONDS) {
                    o("WAWebDBUpdateChatTable").updateChatTable(this.id, {
                        lastChatEntryTimestamp
                    }).then(()=>{
                        e.lastChatEntryTimestamp = lastChatEntryTimestamp;
                    }).catch(r("WAWebNoop"));
                }
            } else {
                this.$ChatImpl$p_4();
                this.getCollection().sort();
                this.deregisterExpiredViewOnceBulkMessages(this.msgs);
                this.$ChatImpl$p_41();
                o("WAWebMemoryPressureCacheRegistry").registerMemoryPressureCache(E);
                this.$ChatImpl$p_42();
                const a = Array.from(this.$ChatImpl$p_1);
                o("WAWebDBEphemeralMessage").removeExpiredMessagesFromHistory(a).then(()=>{
                    const t = a.map((e)=>e.id.toString());
                    if (t.length > 0) {
                        o("WAWebUpdateLastAddOnPreviewChatAction").deleteModelsForLastAddOnPreview(t);
                        return o("WAWebRequestDeleteAddOns").requestDeleteAddOns(e.id.toString(), t);
                    }
                }).catch((e)=>{
                    o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[ephemeral-leak] drain DB delete failed count=",
                        ""
                    ])), a.length).catching(r("getErrorSafe")(e)).tags("ephemeral-messages").sendLogs("ephemeral-leak-drain-failed", {
                        sendLogsType: o("WALogger").SendLogsType.INVESTIGATION
                    });
                });
                this.$ChatImpl$p_1.forEach((t)=>{
                    e.$ChatImpl$p_1.delete(t);
                    t.delete({
                        skipUpdatingSortTime: true,
                        doNotResetLastReceived: true
                    });
                });
            }
        };
        a_prototype.$ChatImpl$p_41 = function() {
            const msgs = this.msgs;
            if (!(msgs.length <= o("WAWebCollectionConstants").PAGE_SIZE)) {
                const t = msgs.length - o("WAWebCollectionConstants").PAGE_SIZE;
                const n = msgs.getModelsArray().slice(0, t);
                msgs.remove(n, {
                    silent: true
                }, true);
                msgs.msgLoadState.noEarlierMsgs = false;
            }
        };
        a_prototype.trimMessagesForMemoryPressure = function() {
            const msgs = this.msgs;
            if (msgs.length <= 1 || this.active || L(msgs)) {
                return 0;
            }
            const t = o("WAWebFrontendChatGetters").getPreviewMessage(this);
            const n = t != null ? msgs.indexOf(t) : -1;
            const r = n >= 0 ? n : msgs.length - 1;
            if (r <= 0) {
                return 0;
            }
            msgs.remove(msgs.getModelsArray().slice(0, r), {
                silent: true
            }, true);
            msgs.msgLoadState.noEarlierMsgs = false;
            return r;
        };
        a_prototype.$ChatImpl$p_42 = function() {
            if (o("WAWebABProps").getABPropConfigValue("web_evict_thumbnail_hq_on_inactive")) {
                for (const e of this.msgs.getModelsArray()){
                    if (e.thumbnailHQ) {
                        e.set({
                            thumbnailHQ: undefined
                        }, {
                            silent: true
                        });
                    }
                }
            }
        };
        a_prototype.$ChatImpl$p_23 = function() {
            const e = this.getCollection();
            e.notSpam[this.id] = this.notSpam;
            this.isTrusted();
            if (this.notSpam) {
                this.stopListening(this, "change:notSpam");
            }
        };
        a_prototype.isCAGAdmin = function() {
            const t = this.groupMetadata?.participants.iAmAdmin();
            if (t != null) {
                return t && o("WAWebFrontendChatGetters").getIsCAG(this);
            }
            return false;
        };
        a_prototype.hasMaybeSentMsgToChat = function() {
            return this.getAllMsgs().some((e)=>o("WAWebMsgGetters").getIsSentByMe(e));
        };
        a_prototype.isTrusted = function() {
            let e = false;
            if (o("WAWebChatGetters").getIsGroup(this)) {
                e = this.isReadOnly || this.notSpam || this.groupMetadata?.isTrusted();
            } else {
                if (o("WAWebChatGetters").getIsBroadcast(this) || o("WAWebChatGetters").getIsNewsletter(this)) {
                    e = true;
                } else if (o("WAWebChatGetters").getIsUser(this)) {
                    e = this.notSpam || o("WAWebFrontendContactGetters").getIsMyContact(this.contact);
                }
            }
            if (e !== true && this.hasMaybeSentMsgToChat()) {
                e = true;
            }
            if (o("WAWebChatGetters").getIsGroup(this) && e !== this.trusted) {
                o("WAWebGroupSafetyCheckUtils").handleIsTrustedChangeForGroupSafety(this, !!e);
            }
            return this.trusted = !!e;
        };
        a_prototype.isGroupSafetyChecked = function() {
            let e = false;
            if (this.groupMetadata) {
                e = this.groupMetadata?.groupSafetyCheck;
                if (e !== this.groupSafetyChecked) {
                    o("WAWebGroupSafetyCheckUtils").handleGroupSafetyCheckStateUpdate(this, !!this.trusted, e);
                }
            }
            return this.groupSafetyChecked = !!e;
        };
        a_prototype.isSuspendedOrTerminated = function() {
            if (o("WAWebChatGetters").getIsGroup(this)) {
                let e;
                return !!((e = this.groupMetadata) != null && e.isSuspendedOrTerminated());
            } else if (o("WAWebChatGetters").getIsNewsletter(this)) {
                const t = this.newsletterMetadata;
                return t != null && o("WAWebNewsletterMetadataGetters").getIsSuspendedOrTerminated(t);
            }
            return false;
        };
        a_prototype.title = function() {
            if (o("WAWebChatGetters").getIsGroup(this)) {
                return this.formattedTitle ?? s._("Unknown subject").toString();
            }
            return this.formattedTitle;
        };
        a_prototype.getTcToken = function() {
            if (this.tcToken == null || this.tcTokenTimestamp == null || o("WAWebTrustedContactsUtils").isTokenExpired(this.tcTokenTimestamp, o("WAWebTrustedContactsUtils").TcTokenMode.Receiver)) {
                return null;
            }
            return this.tcToken;
        };
        a_prototype.shouldShowUnreadDivider = function() {
            return o("WAWebFrontendChatGetters").getShouldShowUnreadDivider(this);
        };
        a_prototype.delete = function() {
            t.prototype.delete.call(this);
            this.getCollection().remove(this.id);
            this.$ChatImpl$p_3.abort();
            r("WAWebAlarm").clearTimeout(this.aiHandoffRemovalEvictionTimer);
            this.aiHandoffRemovalEvictionTimer = null;
            this.presence.delete();
            o("WAWebCmd").Cmd.closeChat(this);
            if (this.groupMetadata) {
                this.groupMetadata.delete();
            }
            if (this.mediaMsgs) {
                this.mediaMsgs.delete();
            }
            if (this.linkMsgs) {
                this.linkMsgs.delete();
            }
            if (this.docMsgs) {
                this.docMsgs.delete();
            }
            if (this.productMsgs) {
                this.productMsgs.delete();
            }
            if (this.eventMsgs) {
                this.eventMsgs.delete();
            }
            if (this.keptMsgs) {
                this.keptMsgs.delete();
            }
            const starredMsgs = this.starredMsgs;
            if (starredMsgs) {
                starredMsgs.delete();
                starredMsgs.stopListening();
                starredMsgs.reset();
            }
            o("WAWebChatGetters").clearChatGetterCacheFor(this);
            o("WAWebFrontendChatGetters").clearFrontendChatGetterCacheFor(this);
        };
        a_prototype.isDirty = function() {
            return this.unreadCount !== 0;
        };
        a_prototype.hasUnreadEdit = function() {
            return this.unreadEditTimestampMs != null;
        };
        a_prototype.setComposeContents = function(t) {
            let t_text = t.text;
            if (t.text?.trim() === "") {
                t_text = t.text?.trim();
            }
            const a = {
                text: t_text,
                ctwaContext: t.ctwaContext,
                ctwaContextLinkData: t.ctwaContextLinkData,
                timestamp: t.timestamp,
                omittedUrl: t.omittedURL
            };
            o("WAWebUpdateDraftMessageChatAction").updateDraftMessageChat(this.id, a);
        };
        a_prototype.getComposeContents = function() {
            if (this.draftMessage) {
                const e = {
                    timestamp: this.draftMessage.timestamp,
                    text: this.draftMessage.text
                };
                const t = this.draftMessage;
                const { ctwaContext, ctwaContextLinkData, omittedUrl } = t;
                if (omittedUrl != null) {
                    e.omittedURL = omittedUrl;
                }
                if (ctwaContext != null) {
                    e.ctwaContext = ctwaContext;
                }
                if (ctwaContextLinkData != null) {
                    e.ctwaContextLinkData = ctwaContextLinkData;
                }
                return e;
            }
        };
        a_prototype.setAttachMediaContents = function(t) {
            this.attachMediaContents = t;
            this.draftAttachMediaContentsSortTs = t ? o("WATimeUtils").unixTime() : null;
        };
        a_prototype.setIsCameraCaptureDrawerOpen = function(t) {
            this.isCameraCaptureDrawerOpen = t;
        };
        a_prototype.isComposingWithUnsavedChanges = function() {
            return this.isComposingPoll;
        };
        a_prototype.isBusinessGroup = function() {
            const t = this.groupMetadata?.participants.getAdmins();
            if (!t) {
                return false;
            }
            for (const n of t){
                const r = o("WAWebContactCollection").ContactCollection.get(n.id);
                if (r != null && r.isBusiness) {
                    return true;
                }
            }
            return false;
        };
        a_prototype.isCAG = function() {
            return o("WAWebFrontendChatGetters").getIsCAG(this);
        };
        a_prototype.onEmptyMRM = function() {
            o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                "models:Chat:removeMsg 0 messages left, querying..."
            ])));
            o("WAWebChatLoadMessages").loadEarlierMsgs({
                chat: this
            }).catch(o("WAFilteredCatch").filteredCatch(o("WAWebBackendErrors").E404, r("WAWebNoop"))).catch((e)=>{
                o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "chat:onEmptyMRM failed\n",
                    ""
                ], [
                    "chat:onEmptyMRM failed\\n",
                    ""
                ])), e);
            });
        };
        a_prototype.deleteMsgsPartial = function(t, n = false) {
            const e = this;
            const unreadCount = this.unreadCount;
            const a = [];
            this.getAllCMCs().forEach((r)=>{
                const i = r.filter((n, r, o)=>!t.apply(e, [
                        n,
                        r,
                        o
                    ]));
                r.remove(i, undefined, n);
                a.push(...i);
                i.forEach((e)=>{
                    if (o("WAWebMsgGetters").getIsAuthenticationMessage(e)) {
                        o("WAWebOTPLoggingHelper").logOTPMessageDeleted(o("WAWebMsgDataFromModel").msgDataFromMsgModel(e));
                    }
                    e.delete();
                });
            });
            const aiThreads = this.aiThreads;
            if (aiThreads != null) {
                const l = o("WAWebDecrementThreadUnreadCountsAction").getThreadUnreadDeltasFromMessages(a);
                o("WAWebDecrementThreadUnreadCountsAction").decrementThreadUnreadCountsAction(l, aiThreads);
            }
            [].concat(this.msgChunks).forEach((t)=>{
                if (t.length === 0) {
                    e.removeMsgsCollection(t);
                }
            });
            if (this.msgs.length > 0) {
                const s = unreadCount > this.msgs.length ? this.msgs.length : unreadCount;
                o("WAWebDBUpdateChatTable").updateChatTable(this.id, {
                    unreadCount: s
                }).then(()=>{
                    e.unreadCount = s;
                    e.msgs.msgLoadState.noEarlierMsgs = e.endOfHistoryTransferType !== o("WAWebChatConstants").ConversationEndOfHistoryTransferModelPropType.INCOMPLETE;
                });
            }
        };
        a_prototype.deleteMessages = function(t) {
            const e = this;
            const n = function(n, r, o) {
                return !t.includes(n.id.toString());
            };
            this.deleteMsgsPartial(n, true);
            if (this.getAllMsgs().length === 0) {
                o("WAWebChatLoadMessages").loadEarlierMsgs({
                    chat: this
                }).catch((t)=>{
                    o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                        "chat:deleteMessages:loadEarlierMsgs failed ",
                        ""
                    ])), e.id.toLogString()).catching(r("getErrorSafe")(t)).sendLogs("chat-delete-messages-load-earlier-failed");
                });
            }
            o("WAWebLimitSharingModelUtils").createLimitSharingMsgOnChatClear(this.id);
        };
        a_prototype.getLastMsgKeyForAction = function() {
            const e = this.msgs.last();
            let t;
            if (e) {
                if (!this.lastReceivedKey || e.id.fromMe && e.local && e.ack === o("WAWebAck").ACK.CLOCK) {
                    t = e.id;
                } else {
                    t = this.lastReceivedKey;
                }
            }
            return t || undefined;
        };
        a_prototype.getWebcChatType = function() {
            const e = o("WAWebFrontendChatGetters").getKind(this);
            if (e != null) {
                switch(e){
                    case o("WAWebChatFlowTypes").ChatKindType.Chat:
                        return o("WAWebWamEnumWebcChatType").WEBC_CHAT_TYPE.INDIVIDUAL;
                    case o("WAWebChatFlowTypes").ChatKindType.Group:
                        return o("WAWebWamEnumWebcChatType").WEBC_CHAT_TYPE.GROUP;
                    case o("WAWebChatFlowTypes").ChatKindType.Broadcast:
                        return o("WAWebWamEnumWebcChatType").WEBC_CHAT_TYPE.BROADCAST_LIST;
                    case o("WAWebChatFlowTypes").ChatKindType.Newsletter:
                        return o("WAWebWamEnumWebcChatType").WEBC_CHAT_TYPE.NEWSLETTER;
                    case o("WAWebChatFlowTypes").ChatKindType.Community:
                        return o("WAWebWamEnumWebcChatType").WEBC_CHAT_TYPE.COMMUNITY;
                }
            } else {
                const t = new TypeError(`Invalid Chat.kind ${String(e)}`);
                t.stack;
                throw t;
            }
        };
        a_prototype.getMdChatAssignmentChatType = function() {
            return o("WAWebChatModelDerivedMethods").getMdChatAssignmentChatTypeFn(this);
        };
        a_prototype.deregisterExpiredViewOnceBulkMessages = function(t) {
            const e = this;
            t.forEach((t)=>e.$ChatImpl$p_27(t));
        };
        a_prototype.$ChatImpl$p_27 = function(t) {
            if (o("WAWebViewOnceState").isExpired(t.safe())) {
                o("WAWebAppTracker").AppTracker.mark(o("WAWebAppTracker").AppTrackerType.PurgeViewOnce);
                o("WAWebMedia").deregisterMsg(t);
            }
        };
        a_prototype.$ChatImpl$p_28 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = this;
                r("WAWebAlarm").clearTimeout(this.$ChatImpl$p_2.get(e));
                this.$ChatImpl$p_2.delete(e);
                this.$ChatImpl$p_1.delete(e);
                const a = o("WAWebMsgGetters").getEphemeralExpirationTimestamp(e);
                if (!(a == null || !this.msgs.includes(e) || o("WAWebMsgGetters").getIsKept(e))) {
                    const i = (()=>{
                        const a = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                            t.$ChatImpl$p_2.delete(e);
                            if (!o("WAWebMsgGetters").getIsKept(e)) {
                                const n = e.afterReadDuration != null && e.afterReadDuration > 0;
                                if (!t.active || n) {
                                    const a = n && t.active;
                                    if (a) {
                                        e.isFadingOut = true;
                                        yield o("WAPromiseDelays").delayMs(C);
                                    }
                                    try {
                                        yield o("WAWebDBEphemeralMessage").removeExpiredMessagesFromHistory([
                                            e
                                        ]);
                                    } catch (error) {
                                        o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                                            "[ephemeral-leak] handleExpiration DB delete failed"
                                        ]))).catching(r("getErrorSafe")(error)).tags("ephemeral-messages").sendLogs("ephemeral-leak-handle-expiration-failed", {
                                            sendLogsType: o("WALogger").SendLogsType.INVESTIGATION
                                        });
                                        return;
                                    }
                                    o("WAWebUpdateLastAddOnPreviewChatAction").deleteModelsForLastAddOnPreview([
                                        e.id.toString()
                                    ]);
                                    yield o("WAWebRequestDeleteAddOns").requestDeleteAddOns(t.id.toString(), [
                                        e.id.toString()
                                    ]);
                                    e.delete({
                                        skipUpdatingSortTime: true,
                                        doNotResetLastReceived: true
                                    });
                                } else {
                                    t.$ChatImpl$p_1.add(e);
                                }
                            }
                        });
                        return function() {
                            return a.apply(this, arguments);
                        };
                    })();
                    if (o("WAWebKeepInChatMsgUtils").isExpired(e)) {
                        return i();
                    }
                    const l = r("WAWebAlarm").setGlobalTimeout(function() {
                        i();
                    }, a * 1000);
                    this.$ChatImpl$p_2.set(e, l);
                }
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.isUnreadMsg = function(t) {
            return this.$ChatImpl$p_43(t, this.unreadCount);
        };
        a_prototype.isActiveUnreadMsg = function(t) {
            return this.$ChatImpl$p_43(t, this.activeUnreadCount);
        };
        a_prototype.$ChatImpl$p_43 = function(t, n) {
            if (n <= 0) {
                return false;
            }
            const e = this.msgs.getModelsArray();
            let r = 0;
            for(let a = e.length - 1; a >= 0; a--){
                const i = e[a];
                if (o("WAWebMsgGetters").getIsUnreadType(i)) {
                    if (i === t) {
                        return true;
                    }
                    r++;
                    if (r >= n) {
                        break;
                    }
                }
            }
            return false;
        };
        a_prototype.setWallpaperValue = function(wallpaperValue) {
            this.wallpaperValue = wallpaperValue;
            return o("WAWebDBUpdateChatTable").updateChatTable(this.id, {
                wallpaperValue
            });
        };
        a_prototype.setChatThemeValue = function(chatThemeValue) {
            this.chatThemeValue = chatThemeValue;
            return o("WAWebDBUpdateChatTable").updateChatTable(this.id, {
                chatThemeValue
            });
        };
        a_prototype.deriveThemeValueObjectsFromFlats = function() {
            const e = this.wallpaper != null || this.showDoodle != null || this.stockWallpaperImageId != null;
            if (this.wallpaperValue == null && e) {
                this.wallpaperValue = o("WAWebChatThemeValue").wallpaperValueFromFlat({
                    wallpaper: this.wallpaper,
                    showDoodle: this.showDoodle,
                    stockWallpaperImageId: this.stockWallpaperImageId
                });
            }
            const t = this.chatThemeId != null || this.colorSchemeId != null;
            if (this.chatThemeValue == null && t) {
                this.chatThemeValue = o("WAWebChatThemeValue").chatThemeValueFromFlat({
                    chatThemeId: this.chatThemeId ?? null,
                    colorSchemeId: this.colorSchemeId ?? null
                });
            }
        };
        a_prototype.persistDerivedThemeValuesIfNeeded = function() {
            const e = this.wallpaper != null || this.showDoodle != null || this.chatThemeId != null || this.colorSchemeId != null || this.stockWallpaperImageId != null;
            if (!o("WAWebChatThemeGatingUtils").isChatThemesEnabled() || !e) {
                return (y || (y = n("Promise"))).resolve();
            }
            const chatThemeValue = this.chatThemeValue;
            const wallpaperValue = this.wallpaperValue;
            this.wallpaper = null;
            this.showDoodle = null;
            this.chatThemeId = null;
            this.colorSchemeId = null;
            this.stockWallpaperImageId = null;
            return o("WAWebDBUpdateChatTable").updateChatTable(this.id, {
                wallpaperValue,
                chatThemeValue,
                wallpaper: null,
                showDoodle: null,
                chatThemeId: null,
                colorSchemeId: null,
                stockWallpaperImageId: null
            });
        };
        a_prototype.setSuggestedRepliesEnabled = function(suggestedRepliesEnabled) {
            this.suggestedRepliesEnabled = suggestedRepliesEnabled;
            return o("WAWebDBUpdateChatTable").updateChatTable(this.id, {
                suggestedRepliesEnabled
            });
        };
        a_prototype.setForceDismissAiAgentBlockingBar = function(t) {
            this.forceDismissAiAgentBlockBar = t;
        };
        a_prototype.$ChatImpl$p_14 = function() {
            const e = this;
            const groupMetadata = this.groupMetadata;
            if (o("WAWebChatGetters").getIsGroup(this) && groupMetadata != null && !groupMetadata.stale) {
                const isAnnounceGrpRestrict = !groupMetadata.participants.iAmAdmin() && groupMetadata.announce;
                if (this.isAnnounceGrpRestrict !== isAnnounceGrpRestrict) {
                    o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                        "chat:_updateIsAnnounceGrpRestrict:old ",
                        ", new: ",
                        ""
                    ])), this.isAnnounceGrpRestrict, isAnnounceGrpRestrict);
                    o("WAWebDBUpdateChatTable").updateChatTable(this.id, {
                        isAnnounceGrpRestrict
                    }).then(()=>e.isAnnounceGrpRestrict = isAnnounceGrpRestrict);
                }
            }
        };
        a_prototype.sortMsgs = function(t, n) {
            const e = t.map((e)=>{
                const t = r("nullthrows")(e.getMsgChunk(n ?? undefined));
                return {
                    msg: e,
                    chunkT: r("nullthrows")(t.at(0)).t,
                    index: t.indexOf(e)
                };
            });
            return e.sort((e, t)=>{
                if (e.chunkT === t.chunkT) {
                    return e.index - t.index;
                }
                return e.chunkT - t.chunkT;
            }).map((e)=>e.msg);
        };
        a_prototype.$ChatImpl$p_12 = function() {
            o("WAWebChatShowUnreadInTitle").computeShowUnreadInTitle(this);
        };
        a_prototype.removeFromCollection = function(t) {
            if (t.star) {
                o("WAWebStarredMsgCollection").removeStarredMsgs([
                    t
                ]);
            }
            if (o("WAWebMsgGetters").getIsMedia(t) && this.mediaMsgs) {
                this.mediaMsgs.remove(t);
            } else if (o("WAWebMsgLinks").hasLinkGalleryLinks(t) && this.linkMsgs) {
                this.linkMsgs.remove(t);
            } else if (o("WAWebFrontendMsgGetters").getAsDoc(t) && this.docMsgs) {
                this.docMsgs.remove(t);
            } else if (o("WAWebFrontendMsgGetters").getAsProduct(t) != null && this.productMsgs) {
                this.productMsgs.remove(t);
            } else if (o("WAWebFrontendMsgGetters").getAsEventCreation(t) != null && this.eventMsgs) {
                this.eventMsgs.remove(t);
            }
            if (o("WAWebMsgGetters").getIsKept(t) && this.keptMsgs) {
                this.keptMsgs.remove(t);
            }
            o("WAWebFrontendMsgGetters").getChat(t).unreadMentionMetadata.removeUnreadMentions(t.id.toString());
        };
        a_prototype.getMediaMsgs = function() {
            if (!this.mediaMsgs) {
                this.mediaMsgs = new (r("WAWebChatMediaMsgsCollection"));
            }
            return this.mediaMsgs;
        };
        a_prototype.getLinkMsgs = function() {
            if (!this.linkMsgs) {
                this.linkMsgs = new (r("WAWebChatLinkMsgsCollection"));
            }
            return this.linkMsgs;
        };
        a_prototype.getDocMsgs = function() {
            if (!this.docMsgs) {
                this.docMsgs = new (r("WAWebChatDocMsgsCollection"));
            }
            return this.docMsgs;
        };
        a_prototype.getEventMsgs = function() {
            if (!this.eventMsgs) {
                this.eventMsgs = new (r("WAWebEventMsgsCollection"))(this);
            }
            return this.eventMsgs;
        };
        a_prototype.getParticipantCount = function() {
            return this.groupMetadata?.participants.length || 1;
        };
        a_prototype.iAmAdmin = function() {
            if (this.groupMetadata) {
                return this.groupMetadata.participants.iAmAdmin();
            }
            return false;
        };
        a_prototype.hasKeptMsgs = function() {
            return this.msgs.some((e)=>o("WAWebMsgGetters").getIsKept(e));
        };
        a_prototype.canSendPolls = function() {
            return o("WAWebChatModelDerivedMethods").canSendPolls(this);
        };
        a_prototype.getAbortController = function() {
            return this.$ChatImpl$p_3;
        };
        a_prototype.getDeleteSignal = function() {
            return this.getAbortController().signal;
        };
        a_prototype.getCollection = function() {
            if (o("WAWebChatGetters").getIsNewsletter(this)) {
                return r("WAWebNewsletterCollection");
            }
            return o("WAWebChatCollection").ChatCollection;
        };
        a_prototype.updateBotInvokeSystemMsgCreated = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                yield o("WAWebDBUpdateChatTable").updateChatTable(this.id, {
                    hasCreatedBotInvokeSystemMsg: true
                });
                this.hasCreatedBotInvokeSystemMsg = true;
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.updateBizBotSysMsgCreated = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                yield o("WAWebDBUpdateChatTable").updateChatTable(this.id, {
                    bizBotSystemMsgType: e
                });
                this.bizBotSystemMsgType = e;
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.$ChatImpl$p_6 = function() {
            if (o("WAWebLidMigrationUtils").shouldHaveAccountLid(this.id)) {
                return this.accountLid ?? (o("WALogger").ERROR(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                    "[presence] getPresenceKey: lid-migrated user no accountLid"
                ]))).sendLogs("presence-key-missing-account-lid"), this.id);
            }
            return this.id;
        };
        return a;
    })(r("WAWebSuperChatMsgs"));
    b.Proxy = "chat";
    b.idClass = r("WAWebWid");
    const v = o("WAWebBaseModel").defineModel(b);
    function release() {
        let e = 0;
        for (const t of o("WAWebChatCollection").ChatCollection.getModelsArray()){
            e += R(t);
        }
        return e;
    }
    function R(e) {
        try {
            return e.trimMessagesForMemoryPressure();
        } catch (error) {
            o("WALogger").WARN(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                "[memory-pressure] trimming chat messages failed"
            ]))).catching(r("getErrorSafe")(error)).sendLogs("memory-pressure-trim-chat-failed");
            return 0;
        }
    }
    function L({ msgLoadState }) {
        return msgLoadState.isLoadingEarlierMsgs || msgLoadState.isLoadingRecentMsgs || msgLoadState.isLoadingAroundMsgs;
    }
    var E = {
        name: "inactive_chat_msgs",
        unit: "messages",
        release
    };
    l.Chat = v;
}, 226);