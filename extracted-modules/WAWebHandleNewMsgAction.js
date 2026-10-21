__d("WAWebHandleNewMsgAction", [
    "Promise",
    "WAFilteredCatch",
    "WALogger",
    "WATimeUtils",
    "WAWebAfterReadUtils",
    "WAWebApiChat",
    "WAWebBackendErrors",
    "WAWebBeyondPhoneNumberGatingUtils",
    "WAWebBizAiHandoffRemoval",
    "WAWebBizBroadcastProHiddenChatClassifier",
    "WAWebBotGenTypingIndicatorMsg",
    "WAWebCTWAGatingUtils",
    "WAWebChangePresenceHandlerAction",
    "WAWebChatEphemerality",
    "WAWebChatGetters",
    "WAWebChatLoadMessages",
    "WAWebChatViewMode.flow",
    "WAWebCmd",
    "WAWebCollectionConstants",
    "WAWebCommonCTWAConsumerTransparency",
    "WAWebCommonCTWADataSharing",
    "WAWebCommonCTWALogging",
    "WAWebCommonMsgUtils",
    "WAWebConversionTupleCollection",
    "WAWebCtwaConversationDepthUtils",
    "WAWebDBUpdateChatTable",
    "WAWebEnvironment",
    "WAWebFrontendMsgGetters",
    "WAWebGroupMetadataCollection",
    "WAWebGroupUnreadMessageType",
    "WAWebHandleMsgReceiptCommon",
    "WAWebInvisiblePlaceholderViewModeProcessor",
    "WAWebLidMigrationLogging",
    "WAWebMmSignalSharingLoggingEvents",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebNewsletterCommonGatingUtils",
    "WAWebNoop",
    "WAWebRichOrderStatusLogger",
    "WAWebSchemaChat",
    "WAWebSendNotSpamAction",
    "WAWebSetArchiveChatActionUtils",
    "WAWebSmb3pdAggregatedConversionSignalAction",
    "WAWebUnreadMentionModel",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "WAWebViewModeUtils",
    "WAWebWamEnumCtwaDirectionFrom",
    "WAWebWamEnumWebcQueryTriggerType",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
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
    let C;
    function b() {
        return !o("WAWebCmd").Cmd.isOfflineDeliveryEnd;
    }
    let v = false;
    function S(t, n) {
        if (!o("WAWebMsgGetters").getIsSentByMe(n)) {
            const i = o("WAWebChatEphemerality").getAfterReadDurationForChat(t);
            const l = o("WAWebChatEphemerality").getEphemeralSetting(t);
            if (!(i == null && l == null)) {
                const s = o("WAWebMsgGetters").getAfterReadDuration(n) ?? null;
                const u = o("WAWebMsgGetters").getEphemeralDuration(n) ?? null;
                if (!(s === i && u === l)) {
                    o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[after-read][diag] incoming msg ephemerality differs from chat setting: chatId=",
                        " group=",
                        " type=",
                        " msgAfterReadDuration=",
                        " chatAfterReadDuration=",
                        " msgEphemeralDuration=",
                        " chatEphemeralDuration=",
                        " afterReadEnabled=",
                        ""
                    ])), t.id.toLogString(), o("WAWebChatGetters").getIsGroup(t), n.type, s ?? "none", i ?? "none", u ?? "none", l ?? "none", o("WAWebAfterReadUtils").isAfterReadEnabled()).tags("after-read");
                }
            }
        }
    }
    function R(e, t) {
        o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
            "handleNewMsgForChat chatId: ",
            " type: ",
            ", sub type: ",
            ""
        ])), e.id.toLogString(), t.type, t.subtype);
        S(e, t);
        if (o("WAWebChatGetters").getIsNewsletter(e) && !o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled() || !t) {
            return (C || (C = n("Promise"))).resolve();
        }
        let a = (C || (C = n("Promise"))).resolve();
        if (o("WAWebMsgGetters").getIsSentByMe(t) && !e.notSpam && !o("WAWebChatGetters").getIsNewsletter(e)) {
            a = r("WAWebSendNotSpamAction")(e, false);
        }
        if (o("WAWebFrontendMsgGetters").getEventType(t) === o("WAWebCommonMsgUtils").EventType.IGNORE) {
            return (C || (C = n("Promise"))).resolve();
        }
        let i = false;
        return a.then(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const n = {};
            const a = o("WAWebBizAiHandoffRemoval").computeHandoffRemovalExpiry(e);
            if (a !== undefined) {
                n.aiHandoffRemovalExpiry = a;
            }
            if (e.promises.updateSortTime) {
                e.promises.updateSortTime.abortController.abort();
            }
            if (o("WAWebMsgGetters").getIsSentByMeFromWeb(t) && e.archive && o("WAWebSetArchiveChatActionUtils").shouldUnarchiveChat(o("WAWebMsgGetters").getIsSentByMe(t))) {
                n.archive = false;
            }
            if (e.promises.setArchive) {
                e.promises.setArchive.abortController.abort();
            }
            if (!o("WAWebChatGetters").getIsNewsletter(e) && t.subtype !== o("WAWebBotGenTypingIndicatorMsg").BOT_TYPING_PLACEHOLDER_MSG_SUBTYPE) {
                if (o("WAWebMsgGetters").getIsSentByMe(t)) {
                    e.markedUnread = false;
                } else {
                    r("WAWebChangePresenceHandlerAction")({
                        id: e.id,
                        participant: t.author,
                        type: "idle"
                    }, false);
                }
            }
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "handleNewMsgForChat: before updating chat table ",
                ""
            ])), e.id.toLogString());
            try {
                yield o("WAWebDBUpdateChatTable").updateChatTable(e.id, n);
            } catch (error) {
                const l = yield o("WAWebSchemaChat").getChatTable().get(e.id.toString());
                const s = l != null;
                o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "handleNewMsgForChat: update chat table failed id=",
                    " exists=",
                    ""
                ])), e.id.toLogString(), s).catching(r("getErrorSafe")(error)).sendLogs("handle-new-msg-cannot-update-chat");
                throw error;
            }
            const f = babelHelpers.extends({}, n);
            try {
                let g;
                if (b() && (o("WAWebViewModeUtils").isViewModeVisibleInSurface(o("WAWebViewMode.flow").ViewModeSurface.CHAT, t.viewMode) || (g = o("WAWebInvisiblePlaceholderViewModeProcessor").InvisiblePlaceholderViewModeProcessor.compatibleMessageTypes) != null && g.includes(t.type) || o("WAWebViewModeUtils").isOfflineResumeCallLogPlaceholderViewMode(t.viewMode))) {
                    o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "handleNewMsgForChat: updating UI immediatelly ",
                        ""
                    ])), e.id.toLogString());
                    const h = e.chatViewMode !== o("WAWebChatViewMode.flow").ChatViewModeType.ONLY_MARKETING_FROM_SELF && o("WAWebBizBroadcastProHiddenChatClassifier").isBizBroadcastProMarketingPeerCopy(t, e.id);
                    if (!h) {
                        f.t = t.t;
                    }
                    if ((o("WAWebFrontendMsgGetters").getEventType(t) === o("WAWebCommonMsgUtils").EventType.AMBIENT || o("WAWebFrontendMsgGetters").getEventType(t) === o("WAWebCommonMsgUtils").EventType.DEFAULT) && !t.id.fromMe && t.read !== true) {
                        if (o("WAWebViewModeUtils").isOfflineResumeCallLogPlaceholderViewMode(t.viewMode)) {
                            e.set({
                                unreadCount: e.unreadCount + 1 || 1
                            });
                            if (e.activeUnreadCount > 0) {
                                e.set({
                                    activeUnreadCount: e.activeUnreadCount + 1
                                });
                            }
                        } else {
                            i = true;
                        }
                    }
                } else {
                    const y = yield o("WAWebApiChat").getChatMeta(e.id);
                    const { timestamp, unreadCount } = y;
                    f.unreadCount = unreadCount;
                    f.t = timestamp;
                    if (e.activeUnreadCount > 0) {
                        f.activeUnreadCount = e.activeUnreadCount + Number(o("WAWebViewModeUtils").isViewModeVisibleInSurface(o("WAWebViewMode.flow").ViewModeSurface.CHAT, t.viewMode));
                    }
                }
                f.unreadDividerOffset = 0;
            } catch (error) {
                const R = r("getErrorSafe")(error);
                o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "onNewMsg: chat table metadata not found id=",
                    ""
                ])), e.id.toLogString()).catching(R);
                if (!v) {
                    v = true;
                    const k = yield o("WAWebSchemaChat").getChatTable().get(e.id.toString());
                    const I = e.accountLid ? yield o("WAWebSchemaChat").getChatTable().get(e.accountLid?.toString()) : null;
                    o("WAWebLidMigrationLogging").logLidMetadata();
                    const T = k != null;
                    const D = I != null;
                    o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                        "onNewMsg err chatId=",
                        " lid=",
                        " byId=",
                        " byLid=",
                        ""
                    ])), e.id.toLogString(), e.accountLid?.toLogString(), T, D).tags("missing-lid");
                    o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "onNewMsg: chat table metadata not found id=",
                        ""
                    ])), e.id.toLogString()).catching(R).sendLogs("onNewMsg: unable to find metadata from chat table");
                }
            }
            return f;
        })).then((()=>{
            const a = n("asyncToGeneratorRuntime").asyncToGenerator(function*(n) {
                if (i) {
                    n.unreadCount = e.unreadCount + 1 || 1;
                    if (e.activeUnreadCount > 0) {
                        n.activeUnreadCount = e.activeUnreadCount + 1;
                    }
                }
                e.set(n);
                if (n.aiHandoffRemovalExpiry !== undefined) {
                    o("WAWebBizAiHandoffRemoval").armHandoffRemovalEvictionTimer(e);
                }
                if (t.ctwaContext != null) {
                    o("WAWebCommonCTWAConsumerTransparency").handleConsumerTransparencyForNewMsg({
                        chat: e,
                        conversionData: t.ctwaContext.conversionData,
                        conversionSource: t.ctwaContext.conversionSource,
                        ctwaSignals: t.ctwaContext.ctwaSignals,
                        fromMe: t.id.fromMe
                    });
                    o("WAWebCommonCTWALogging").maybeSetCtwaMessageReceivedInUserPreferenceStore(t);
                }
                if (t.ctwaContext != null) {
                    const a = t.ctwaContext;
                    const { conversionData, conversionDelaySeconds, conversionSource, ctwaSignals, sourceId } = a;
                    const m = conversionDelaySeconds != null && conversionDelaySeconds > 0 && o("WAWebCTWAGatingUtils").isCtwaConversionCreationFromDelayEnabled() ? conversionDelaySeconds : 0;
                    r("WAWebConversionTupleCollection").add({
                        conversionSource,
                        conversionData,
                        ctwaSignals,
                        sourceId,
                        id: e.id,
                        timestamp: o("WATimeUtils").unixTime() - m,
                        fromMe: t.id.fromMe
                    }, {
                        merge: true
                    });
                }
                if (o("WAWebCtwaConversationDepthUtils").CTWA_CONVERSATION_COUNTER_MSG_TYPES.has(t.type) && o("WAWebCommonCTWADataSharing").getReceivedCTWAEligibilityFromChat(e)) {
                    queueMicrotask(()=>{
                        o("WAWebCtwaConversationDepthUtils").advanceCtwaConversationCounters(e, t.id.fromMe);
                        o("WAWebSmb3pdAggregatedConversionSignalAction").log3pdAggregatedConversionSignal(e, "message", "message", t.id.fromMe ? o("WAWebWamEnumCtwaDirectionFrom").CTWA_DIRECTION_FROM.BUSINESS : o("WAWebWamEnumCtwaDirectionFrom").CTWA_DIRECTION_FROM.CUSTOMER);
                    });
                }
                const p = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
                const _ = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow();
                if (t.type === "gp2" && (t.subtype === "add" || t.subtype === "create")) {
                    const C = p != null && !o("WAWebBeyondPhoneNumberGatingUtils").removePnDependenciesEnabled() ? p : _;
                    r("WAWebGroupMetadataCollection").trigger(`group_participant_change_${C.toString()}`, {
                        gid: e.id
                    });
                }
                if (o("WAWebMsgGetters").getIsSentByMe(t)) {
                    if (e.unreadCount > 0 || e.markedUnread) {
                        const I = e.id.toString() === t.id.remote.toString();
                        o("WALogger").LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                            "selfmsg-unread: chat=",
                            " chatIsLid=",
                            " msgRemote=",
                            " msgIsLid=",
                            " sameKey=",
                            " unreadCount=",
                            " activeUnread=",
                            " markedUnread=",
                            " accountLid=",
                            ""
                        ])), e.id.toLogString(), e.id.isLid(), t.id.remote.toLogString(), t.id.remote.isLid(), I, e.unreadCount, e.activeUnreadCount, e.markedUnread, e.accountLid?.toLogString() ?? "none");
                    }
                    if (e.activeUnreadCount > 0) {
                        e.activeUnreadCount = 0;
                        e.markedUnread = false;
                    }
                } else {
                    switch(o("WAWebFrontendMsgGetters").getEventType(t)){
                        case o("WAWebCommonMsgUtils").EventType.DEFAULT:
                        case o("WAWebCommonMsgUtils").EventType.AMBIENT:
                            if (o("WAWebFrontendMsgGetters").getEventType(t) === o("WAWebCommonMsgUtils").EventType.DEFAULT) {
                                o("WAWebCmd").Cmd.alertNewMsg(t);
                            }
                            if (e.msgs.length < o("WAWebCollectionConstants").MSG_PRELOAD_THRESHOLD && !o("WAWebChatGetters").getIsNewsletter(e)) {
                                o("WAWebChatLoadMessages").loadEarlierMsgs({
                                    chat: e,
                                    trigger: o("WAWebWamEnumWebcQueryTriggerType").WEBC_QUERY_TRIGGER_TYPE.NEW_MESSAGE_PREFETCH
                                }).catch(o("WAFilteredCatch").filteredCatch(o("WAWebBackendErrors").E404, r("WAWebNoop"))).catch((e)=>{
                                    o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                                        "chat:onNewMsg failed\n",
                                        ""
                                    ], [
                                        "chat:onNewMsg failed\\n",
                                        ""
                                    ])), String(e));
                                });
                            }
                            break;
                        case o("WAWebCommonMsgUtils").EventType.NOTEWORTHY:
                            if (t.type === o("WAWebMsgType").MSG_TYPE.CALL_LOG && !r("WAWebEnvironment").isWindows || t.subtype === "sender_invite") {
                                o("WAWebCmd").Cmd.alertNewMsg(t);
                            }
                            break;
                        case o("WAWebCommonMsgUtils").EventType.SIGNIFICANT:
                            {
                                if (t.type === "gp2" && t.subtype === "add" && o("WAWebUserPrefsMeUser").isMeAccount(t.recipients[0]) && !e.contact.name) {
                                    return;
                                }
                                o("WAWebCmd").Cmd.alertNewMsg(t);
                                const v = p != null && !o("WAWebBeyondPhoneNumberGatingUtils").removePnDependenciesEnabled() ? p : _;
                                r("WAWebGroupMetadataCollection").trigger(`group_participant_change_${v.toString()}`, {
                                    gid: e.id
                                });
                                break;
                            }
                        default:
                            break;
                    }
                    const S = t.mediaData;
                    if (S && (S.type === "image" || S.type === "video")) {
                        o("WAWebCmd").Cmd.newMediaMsg(t);
                    }
                    if (n.unreadCount != null && n.unreadCount > 0 && !b()) {
                        o("WAWebHandleMsgReceiptCommon").processOrphanPeerReceipt(t.id).catch((e)=>{
                            o("WALogger").ERROR(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                                "[handleNewMsgForChat] processOrphanPeerReceipt failed for ",
                                ""
                            ])), t.id).catching(r("getErrorSafe")(e)).sendLogs("orphan-peer-receipt-process-failed");
                        });
                    }
                    if (o("WAWebMsgGetters").getIsImportantMessage(t)) {
                        const R = new (r("WAWebUnreadMentionModel"))({
                            id: t.id.toString(),
                            timestamp: t.t
                        });
                        e.unreadMentionMetadata.addUnreadMentions(R, o("WAWebGroupUnreadMessageType").UnreadMessageType.NEW_MESSAGE);
                        if (e.archiveAtMentionViewedInDrawer) {
                            const L = new Map;
                            L.set(e.id.toString(), false);
                            o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                                "handleNewMsgForChat: will mark chat for archive"
                            ])));
                            yield o("WAWebApiChat").updateChatArchiveDrawer(L);
                            e.archiveAtMentionViewedInDrawer = false;
                        }
                    }
                }
                o("WAWebMmSignalSharingLoggingEvents").logMmSignalSharingNewMessageEvent({
                    chat: e,
                    newMsg: t
                });
                o("WAWebRichOrderStatusLogger").logRichOrderStatusInconsistencies(t);
            });
            return function(e) {
                return a.apply(this, arguments);
            };
        })());
    }
    l.handleNewMsgForChat = R;
}, 98);