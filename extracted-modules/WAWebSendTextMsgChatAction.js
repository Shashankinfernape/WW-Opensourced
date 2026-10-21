__d("WAWebSendTextMsgChatAction", [
    "WAJobOrchestratorTypes",
    "WALogger",
    "WAWebABProps",
    "WAWebAppTracker",
    "WAWebBizAgentAction",
    "WAWebBizBotTosUtils",
    "WAWebBotBaseGating",
    "WAWebBotFrontendLoggingUtils",
    "WAWebBotGroupGatingUtils",
    "WAWebBotLoggingUtils",
    "WAWebBotMessageSecret",
    "WAWebBotProfileCollection",
    "WAWebChatGetters",
    "WAWebCoexV2RelayEligibility",
    "WAWebDBProcessMessage",
    "WAWebDBThreadMetadataBulkHelper",
    "WAWebEmptyChatSystemMsg",
    "WAWebGetEphemeralFieldsMsgActionsUtils",
    "WAWebGroupMetadataGetters",
    "WAWebHatchCommandMetadataUtils",
    "WAWebLidMigrationFrontendUtils",
    "WAWebLimitSharingPropMappingUtils",
    "WAWebMaybeGetAppendedAiThreadAttributes",
    "WAWebMaybeGetAppendedViewRepliesThreadId",
    "WAWebMaybeGetBotModeSelection",
    "WAWebMessagePluginGenerateReportingTokenContent",
    "WAWebMessageSendPerfReporter",
    "WAWebMessageSendReporter",
    "WAWebMessageSendReporterFrontendDeps",
    "WAWebMessagingGatingUtils",
    "WAWebMsgDataUtils",
    "WAWebMsgInfoUtils",
    "WAWebMsgModel",
    "WAWebMsgType",
    "WAWebNewsletterGatingUtils",
    "WAWebNonJidMentionType",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebPresenceChatAction",
    "WAWebPrivacyMode_WORKER_INCOMPATIBLE",
    "WAWebProductCatalogLogEvents",
    "WAWebQuestionsGatingUtils",
    "WAWebRichTextFormatMessageSendLogger",
    "WAWebSendMsgChatActionUtils",
    "WAWebSendMsgRecordAction",
    "WAWebSendMsgResultAction",
    "WAWebSpoilerFormatRegex",
    "WAWebStateUtils",
    "WAWebThreadMsgUtils",
    "WAWebThreadWriteThroughAction",
    "WAWebUserPrefsMeUser",
    "WAWebWamMsgUtils",
    "WAWebWid",
    "asyncToGeneratorRuntime",
    "isEmptyObject"
], function(t, n, r, o, a, i, l) {
    const e = [
        "initiatedBy"
    ];
    let s;
    let u;
    let c;
    function d(e, t) {
        return o("WAWebRichTextFormatMessageSendLogger").maybeCreateRichTextFormatMessageSendCommit(e, t);
    }
    function m(e, t, n) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n = {}) {
            const r = o("WAWebStateUtils").unproxy(e);
            const a = yield _(r, t, n);
            if (a) {
                yield o("WAWebBizBotTosUtils").maybeShowBizBot1pTos(r);
                const i = yield o("WAWebSendMsgChatActionUtils").maybeDisableEphemeralityForMsg(r, a);
                const { msgData, systemMsgs } = i;
                return g(r, msgData, systemMsgs, {
                    skipRichTextFormatLogging: n.skipRichTextFormatLogging
                });
            }
        });
        return p.apply(this, arguments);
    }
    function _(e, t, n) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n, a = {}) {
            let m;
            const _ = (n || "").trim();
            if (_ === "") {
                return null;
            }
            const f = a;
            const { aiMediaCollectionInfo, aiThreadInfo, ctwaContext, encryptedCommentFields, groupMentions, isQuestion, isWamoSub, linkPreview, mentionedJidList, paymentLinkMetadata, questionReplyQuotedMessage, quotedMsg, quotedMsgAdminGroupJid, quotedMsgAdminGroupSubject, quotedMsgAdminParentGroupJid, selectedCarouselCardIndex, selectedId, selectedIndex, threadIds } = f;
            o("WAWebPresenceChatAction").clearPresence(t);
            let A;
            if (quotedMsg) {
                A = quotedMsg.msgContextInfo(t.id);
            } else if (quotedMsgAdminGroupJid != null && quotedMsgAdminGroupSubject != null && quotedMsgAdminParentGroupJid != null) {
                A = {
                    quotedRemoteJid: quotedMsgAdminGroupJid,
                    quotedGroupSubject: quotedMsgAdminGroupSubject,
                    quotedParentGroupJid: quotedMsgAdminParentGroupJid
                };
            } else if (quotedMsgAdminGroupJid != null) {
                A = {
                    quotedRemoteJid: quotedMsgAdminGroupJid
                };
            } else if (isQuestion === true) {
                if (o("WAWebQuestionsGatingUtils").isQuestionSenderEnabledForMsgType(o("WAWebMsgType").MSG_TYPE.CHAT)) {
                    A = {
                        isQuestion: true
                    };
                } else {
                    o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[questions] Unsupported question message type: ",
                        ""
                    ])), o("WAWebMsgType").MSG_TYPE.CHAT).tags("questions").sendLogs(`questions-unsupported-message-type-${o("WAWebMsgType").MSG_TYPE.CHAT}`);
                    return null;
                }
            } else if (questionReplyQuotedMessage) {
                if (o("WAWebQuestionsGatingUtils").isQuestionReplySenderEnabledForMsgType(o("WAWebMsgType").MSG_TYPE.CHAT)) {
                    A = {
                        questionReplyQuotedMessage
                    };
                } else {
                    o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[questions] Unsupported question reply message type: ",
                        ""
                    ])), o("WAWebMsgType").MSG_TYPE.CHAT).tags("questions").sendLogs(`questions-unsupported-reply-message-type-${o("WAWebMsgType").MSG_TYPE.CHAT}`);
                    return null;
                }
            }
            let limitSharing;
            if (t.limitSharing != null) {
                const O = t.limitSharing;
                const B = O.initiatedBy;
                const W = babelHelpers.objectWithoutPropertiesLoose(O, e);
                limitSharing = babelHelpers.extends({}, W, {
                    initiatedByMe: o("WAWebUserPrefsMeUser").isMeAccount(B)
                });
                if (r("WAWebWid").isGroup(t.id) && typeof limitSharing.trigger === "string") {
                    limitSharing.trigger = o("WAWebLimitSharingPropMappingUtils").getLimitSharingTriggerFromGroupSettingsChange(limitSharing.trigger);
                }
            }
            const q = babelHelpers.extends({}, linkPreview);
            const U = babelHelpers.extends({}, q, A, {
                mentionedJidList,
                groupMentions,
                ctwaContext,
                body: _,
                isSpoiler: o("WAWebSpoilerFormatRegex").hasSpoilerMarkup(_) && o("WAWebABProps").getABPropConfigValue("is_spoiler_rich_format_sender_enabled"),
                subtype: r("isEmptyObject")(q) ? null : "url",
                urlText: t.urlText,
                urlNumber: t.urlNumber,
                botMsgBodyType: a.botMsgBodyType
            }, (yield o("WAWebMsgDataUtils").genOutgoingMsgData(t, "chat")), {
                paymentLinkMetadata,
                limitSharing,
                threadIds,
                aiThreadInfo,
                aiMediaCollectionInfo
            }, o("WAWebGetEphemeralFieldsMsgActionsUtils").getEphemeralFields(t));
            const V = yield o("WAWebMaybeGetAppendedAiThreadAttributes").maybeGetAppendedAiThreadAttributes(U);
            const H = V[0];
            const G = V[1];
            o("WAWebBotFrontendLoggingUtils").maybeLogFirstPromptSentInAiThread(t, babelHelpers.extends({}, U, {
                threadIds: H
            }));
            U.threadIds = H;
            U.aiThreadInfo = G;
            U.threadIds = o("WAWebMaybeGetAppendedViewRepliesThreadId").maybeGetAppendedViewRepliesThreadId(U) ?? U.threadIds;
            U.botModeSelection = U.botModeSelection ?? o("WAWebMaybeGetBotModeSelection").maybeGetBotModeSelection(t, U);
            U.botModeOverride = U.botModeOverride ?? o("WAWebMaybeGetBotModeSelection").maybeGetBotDynamicModeSelection(t, U);
            if (t.urlText) {
                t.urlText = undefined;
            }
            if (t.urlNumber) {
                t.urlNumber = undefined;
            }
            if (selectedIndex != null) {
                U.type = "template_button_reply";
                U.selectedId = selectedId;
                U.selectedIndex = selectedIndex;
                U.selectedCarouselCardIndex = selectedCarouselCardIndex;
            }
            const z = o("WAWebPrivacyMode_WORKER_INCOMPATIBLE").getPrivacyModeFromModel(t.id);
            if (z != null) {
                U.privacyModeWhenSent = z;
            }
            U.agentId = o("WAWebBizAgentAction").getAgentId(U);
            if (o("WAWebBotBaseGating").isBotEnabled() && (!o("WAWebBotGroupGatingUtils").isOpenGroupBotSendEnabled() || t.groupMetadata?.isOpenBotGroup !== true)) {
                const j = y(t, mentionedJidList);
                if (j != null) {
                    U.invokedBotWid = j;
                    const K = quotedMsg?.botTargetSenderJid;
                    if (K != null && !o("WAWebUserPrefsMeUser").isMeAccount(K)) {
                        U.botTargetSenderJid = quotedMsg?.botTargetSenderJid;
                    }
                }
            }
            const Q = t.isCAGAdmin();
            const X = U.subtype === "url";
            const Y = !!(o("WAWebBotBaseGating").isBotEnabled() && (m = U.invokedBotWid) != null && m.isBot());
            const J = !!(U.to.isBot() && (o("WAWebBotBaseGating").isBotEnabled() || U.to.isSupportAgentBot()));
            const Z = o("WAWebMessagingGatingUtils").isReportingTokenSendingEnabled() && o("WAWebMessagePluginGenerateReportingTokenContent").isMsgTypeReportingTokenCompatible(U.type, U.subtype);
            const ee = U.messageSecret == null && (yield o("WAWebCoexV2RelayEligibility").genIsCoexV2RelayEligibleSend(U.to));
            if (Q || X || Y || J || Z || ee) {
                U.messageSecret = self.crypto.getRandomValues(new Uint8Array(32));
            }
            if (Y || o("WAWebBotGroupGatingUtils").isOpenGroupBotSendEnabled() && t.groupMetadata?.isOpenBotGroup === true) {
                U.botMessageSecret = yield o("WAWebBotMessageSecret").genBotMsgSecretFromMsgSecret(U.messageSecret);
            }
            const te = o("WAWebBotGroupGatingUtils").getSendGroupBotParticipant(t.groupMetadata);
            if (te != null) {
                U.botGroupParticipant = te;
            }
            if (Y || J) {
                let ne;
                if (Y) {
                    ne = U.invokedBotWid;
                } else if (J) {
                    ne = U.to;
                }
                if (ne != null) {
                    const oe = o("WAWebBotProfileCollection").BotProfileCollection.get(ne)?.personaId;
                    if (oe != null) {
                        U.botPersonaId = oe;
                    }
                }
            }
            const ae = o("WAWebBotLoggingUtils").maybeGetBotMetricsMetadata(U);
            U.botMetricsMetadata = ae;
            const ie = o("WAWebHatchCommandMetadataUtils").resolveHatchCommandMetadata(_, t.id);
            if (ie != null) {
                U.botCommandMetadata = ie;
            }
            if (quotedMsg && quotedMsg.type === o("WAWebMsgType").MSG_TYPE.PRODUCT) {
                o("WAWebProductCatalogLogEvents").logProductMessageBusinessSend(quotedMsg, quotedMsg.sessionId);
            }
            if (encryptedCommentFields) {
                U.type = o("WAWebMsgType").MSG_TYPE.COMMENT;
                U.encIv = encryptedCommentFields?.encIv;
                U.encPayload = encryptedCommentFields?.encPayload;
                U.targetMessageKey = encryptedCommentFields?.targetMessageKey;
            }
            if (isWamoSub === true && o("WAWebChatGetters").getIsNewsletter(t) && o("WAWebNewsletterGatingUtils").isWamoSubCreatorExperienceSupported()) {
                U.isWamoSub = true;
            }
            let le = 0;
            if (a.maybeNonJidMentioned === true && /@all\b/g.test(_)) {
                le |= r("WAWebNonJidMentionType").MENTION_ALL;
            }
            if (le > 0) {
                U.nonJidMentions = le;
            }
            if (a.hatchRequest != null) {
                U.hatchMetadataSync = {
                    type: "req",
                    requestId: U.id.id,
                    request: a.hatchRequest
                };
            }
            return U;
        });
        return f.apply(this, arguments);
    }
    function g(e, t, n, r) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, a, i = {}) {
            let s;
            o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "addAndSendTextMsg chat: ",
                ""
            ])), e.id.toLogString());
            yield o("WAWebLidMigrationFrontendUtils").validateMissingAccountLid(e, t, "addAndSendTextMsg");
            const m = new (o("WAWebMsgModel")).Msg(t);
            const p = i.skipRichTextFormatLogging === true ? null : o("WAWebRichTextFormatMessageSendLogger").maybeCreateRichTextFormatMessageSendCommit(m, e.id);
            const _ = o("WAWebSendMsgChatActionUtils").maybeGetOpusSystemMsg(e, "opus-send-text-fail");
            const f = [].concat(_ ? [
                _
            ] : [], (yield r("WAWebEmptyChatSystemMsg")(m, e)) ?? [], a ?? []).filter(Boolean);
            const g = !!((s = e.groupMetadata) != null && s.isLidAddressingMode);
            const h = o("WAWebMsgInfoUtils").getGroupMessageSendReporterOptions(e.id, o("WAWebWamMsgUtils").msgIsLid(t, e.id, g));
            m.wamMessageSendReporter = new (o("WAWebMessageSendReporter")).MessageSendReporter(m, babelHelpers.extends({}, h, {
                frontendDeps: o("WAWebMessageSendReporterFrontendDeps").MAIN_WEB_MESSAGE_SEND_REPORTER_FRONTEND_DEPS
            }));
            m.wamMessageSendPerfReporter = new (o("WAWebMessageSendPerfReporter")).MessageSendPerfReporter({
                chatWid: m.to,
                mediaType: o("WAWebWamMsgUtils").getWamMediaType(m),
                messageType: o("WAWebWamMsgUtils").getWamMessageType(m)
            });
            o("WAWebAppTracker").AppTracker.start(o("WAWebAppTracker").AppTrackerType.SendMessage);
            m.wamMessageSendPerfReporter?.startRenderedStage();
            if (f.length > 0) {
                e.msgs.add(f);
            }
            e.msgs.add(m);
            o("WAWebThreadWriteThroughAction").writeThroughToLiveThreads(e, [
                m
            ]);
            m.wamMessageSendPerfReporter?.postRenderedStage();
            e.createdLocally = false;
            const y = f.length > 0 ? [].concat(f, [
                t
            ]) : [
                t
            ];
            const C = yield o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("sendMessage", n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                m.wamMessageSendPerfReporter?.startSavedStage();
                yield o("WAWebDBProcessMessage").storeMessages(y, e.id);
                m.wamMessageSendPerfReporter?.postSavedStage();
                if (o("WAWebThreadMsgUtils").isThreadMsg(t)) {
                    yield o("WAWebDBThreadMetadataBulkHelper").persistNewMessagesThreadMetadataInBulk([
                        t
                    ]);
                }
                const a = yield o("WAWebSendMsgRecordAction").sendMsgRecord(m);
                return a;
            }), {
                priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION
            }).waitUntilCompleted();
            if (C?.messageSendResult === o("WAWebSendMsgResultAction").SendMsgResult.OK) {
                if (p != null) {
                    p();
                }
            }
            return C;
        });
        return h.apply(this, arguments);
    }
    function y(e, t) {
        return t?.find(function(t) {
            return t.isBot() && C(e, t);
        });
    }
    function C(e, t) {
        if (!e.id.isGroup()) {
            return true;
        }
        const e_groupMetadata = e.groupMetadata;
        return o("WAWebBotGroupGatingUtils").isGroupBotInvokeAllowed(t, e_groupMetadata == null || e_groupMetadata.announce === true || o("WAWebGroupMetadataGetters").getIsCag(e_groupMetadata));
    }
    l.maybeCreateTextMsgRichTextFormatSendCommit = d;
    l.sendTextMsgToChat = m;
    l.createTextMsgData = _;
    l.addAndSendTextMsg = g;
    l.getInvokedBotWid = y;
}, 98);