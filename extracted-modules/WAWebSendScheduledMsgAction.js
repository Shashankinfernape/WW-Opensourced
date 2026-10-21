__d("WAWebSendScheduledMsgAction", [
    "Promise",
    "WAJobOrchestratorTypes",
    "WALogger",
    "WAWebAttachMediaConstants",
    "WAWebAttachMediaGetters",
    "WAWebCommonMsgSubtypeTypes",
    "WAWebContactSystemMsg",
    "WAWebDBProcessMessage",
    "WAWebIsScheduledMessagesAvailableForChat",
    "WAWebLidMigrationFrontendUtils",
    "WAWebMessageSendPerfReporter",
    "WAWebMessageSendReporter",
    "WAWebMessageSendReporterFrontendDeps",
    "WAWebMsgInfoUtils",
    "WAWebMsgModel",
    "WAWebMsgType",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebScheduledMsgConstants",
    "WAWebScheduledMsgLimitDialog.react",
    "WAWebScheduledMsgRevealKeyStore",
    "WAWebScheduledMsgStore",
    "WAWebSendHdImagePair",
    "WAWebSendMsgRecordAction",
    "WAWebSendMsgResultAction",
    "WAWebSendTextMsgChatAction",
    "WAWebStateUtils",
    "WAWebViewMode.flow",
    "WAWebWamMsgUtils",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "err",
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
    function g(e) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ addSystemBubble = true, chat, options = {}, scheduledTimestampS, text }) {
            if (!o("WAWebIsScheduledMessagesAvailableForChat").isScheduledMessagesAvailableForChat(chat)) {
                throw r("err")("[scheduled_msg] Scheduled messages not available for this chat");
            }
            const _ = o("WAWebStateUtils").unproxy(chat);
            const f = yield o("WAWebSendTextMsgChatAction").createTextMsgData(_, text, options);
            if (f == null) {
                return false;
            }
            const g = o("WAWebWidToJid").widToChatJid(_.id);
            if (yield o("WAWebScheduledMsgStore").isChatAtScheduleLimit(g)) {
                o("WAWebScheduledMsgLimitDialog.react").showScheduledMsgLimitReachedDialog();
                return false;
            }
            const h = babelHelpers.extends({}, f, {
                isScheduledMsg: true,
                scheduledTimestampS,
                viewMode: o("WAWebViewMode.flow").ViewModeType.SCHEDULED_MESSAGE
            });
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[scheduled_msg] Scheduling message for chat ",
                " at ",
                ""
            ])), _.id.toLogString(), String(scheduledTimestampS));
            const y = o("WAWebSendTextMsgChatAction").maybeCreateTextMsgRichTextFormatSendCommit(h, _.id);
            let ERROR_UNKNOWN = o("WAWebSendMsgResultAction").SendMsgResult.ERROR_UNKNOWN;
            let b = null;
            try {
                let v;
                yield o("WAWebLidMigrationFrontendUtils").validateMissingAccountLid(_, h, "addAndSendTextMsg");
                const R = new (o("WAWebMsgModel")).Msg(h);
                const L = !!((v = _.groupMetadata) != null && v.isLidAddressingMode);
                const E = o("WAWebMsgInfoUtils").getGroupMessageSendReporterOptions(_.id, o("WAWebWamMsgUtils").msgIsLid(h, _.id, L));
                R.wamMessageSendReporter = new (o("WAWebMessageSendReporter")).MessageSendReporter(R, babelHelpers.extends({}, E, {
                    frontendDeps: o("WAWebMessageSendReporterFrontendDeps").MAIN_WEB_MESSAGE_SEND_REPORTER_FRONTEND_DEPS
                }));
                R.wamMessageSendPerfReporter = new (o("WAWebMessageSendPerfReporter")).MessageSendPerfReporter({
                    chatWid: R.to,
                    mediaType: o("WAWebWamMsgUtils").getWamMediaType(R),
                    messageType: o("WAWebWamMsgUtils").getWamMessageType(R)
                });
                yield o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("sendMessage", n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    R.wamMessageSendPerfReporter?.startSavedStage();
                    yield o("WAWebDBProcessMessage").storeMessages([
                        h
                    ], _.id);
                    R.wamMessageSendPerfReporter?.postSavedStage();
                    const n = yield o("WAWebSendMsgRecordAction").sendMsgRecord(R);
                    ERROR_UNKNOWN = n.messageSendResult;
                    b = n.ackErrorCode;
                    return n;
                }), {
                    priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION
                }).waitUntilCompleted();
            } catch (error) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[scheduled_msg] Failed to send scheduled message"
                ]))).catching(r("getErrorSafe")(error)).sendLogs("scheduled-msg-send-error");
                throw error;
            }
            if (b === o("WAWebScheduledMsgConstants").SCHEDULED_MSG_RESOURCE_LIMIT_NACK_CODE) {
                yield o("WAWebScheduledMsgRevealKeyStore").updateRevealKeyStatus(h.id.toString(), "FAILED");
                o("WAWebScheduledMsgLimitDialog.react").showScheduledMsgLimitReachedDialog();
            }
            if (ERROR_UNKNOWN === o("WAWebSendMsgResultAction").SendMsgResult.OK) {
                if (y != null) {
                    y();
                }
            }
            if (addSystemBubble) {
                try {
                    yield S(_);
                } catch (error) {
                    o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[scheduled_msg] Failed to add scheduled system message"
                    ]))).catching(r("getErrorSafe")(error)).sendLogs("scheduled-msg-sys-error");
                }
            }
            return ERROR_UNKNOWN === o("WAWebSendMsgResultAction").SendMsgResult.OK;
        });
        return h.apply(this, arguments);
    }
    function y(e, t, n) {
        return C.apply(this, arguments);
    }
    function C() {
        C = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            const t_originalAttachment = t.originalAttachment;
            if (t_originalAttachment != null && t.mediaPrep != null && t.state !== o("WAWebAttachMediaConstants").ATTACH_MEDIA_STATE.ERROR && (t.state !== o("WAWebAttachMediaConstants").ATTACH_MEDIA_STATE.PROCESSING || n.addEvenWhilePreparing === true) && o("WAWebSendHdImagePair").shouldSendAsHdImagePair(e, t, n)) {
                return o("WAWebSendHdImagePair").sendHdImagePair({
                    chat: e,
                    childPrep: t.mediaPrep,
                    fileOrigin: t.fileOrigin,
                    options: n,
                    parentPlaceholderProps: o("WAWebAttachMediaGetters").getPreviewable(t) ? o("WAWebSendHdImagePair").getParentPlaceholderProps(t) : undefined,
                    source: t_originalAttachment
                });
            }
            return t.sendToChat({
                chat: e,
                options: n
            });
        });
        return C.apply(this, arguments);
    }
    function b(e) {
        return v.apply(this, arguments);
    }
    function v() {
        v = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ addSystemBubble = true, chat, medias, opts = {}, scheduledTimestampS }) {
            if (!o("WAWebIsScheduledMessagesAvailableForChat").isScheduledMediaAvailableForChat(chat)) {
                throw r("err")("[scheduled_msg] Scheduled media not available for this chat");
            }
            if (medias.length !== 0) {
                const g = medias.find(({ media })=>!o("WAWebScheduledMsgConstants").SCHEDULABLE_MEDIA_TYPES.has(media.type));
                if (g != null) {
                    throw r("err")(`[scheduled_msg] Cannot schedule media of type ${g.media.type}`);
                }
                if (opts.isViewOnce === true) {
                    throw r("err")("[scheduled_msg] Cannot schedule view-once media");
                }
                const h = medias.length > o("WAWebScheduledMsgConstants").MAX_MEDIA_MSGS_TO_SCHEDULE ? medias.slice(0, o("WAWebScheduledMsgConstants").MAX_MEDIA_MSGS_TO_SCHEDULE) : medias;
                if (h.length < medias.length) {
                    o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[scheduled_msg] Capping scheduled media from ",
                        " to ",
                        ""
                    ])), String(medias.length), String(o("WAWebScheduledMsgConstants").MAX_MEDIA_MSGS_TO_SCHEDULE)).sendLogs("scheduled-media-capped");
                }
                const C = o("WAWebStateUtils").unproxy(chat);
                const b = o("WAWebWidToJid").widToChatJid(C.id);
                if (yield o("WAWebScheduledMsgStore").isChatAtScheduleLimit(b)) {
                    o("WAWebScheduledMsgLimitDialog.react").showScheduledMsgLimitReachedDialog();
                    return;
                }
                o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[scheduled_msg] Scheduling ",
                    " media message(s) for chat ",
                    " at ",
                    ""
                ])), String(h.length), C.id.toLogString(), String(scheduledTimestampS));
                const v = C.composeQuotedMsg;
                C.composeQuotedMsg = null;
                let R = false;
                const L = [];
                for (const [k, I] of h.entries()){
                    const T = I.media;
                    const D = {
                        type: T.type,
                        caption: T.caption,
                        mentionedJidList: I.mentionedJidList,
                        groupMentions: I.groupMentions,
                        addEvenWhilePreparing: o("WAWebAttachMediaGetters").getPreviewable(T) && T.state === o("WAWebAttachMediaConstants").ATTACH_MEDIA_STATE.PROCESSING,
                        quotedMsg: k === 0 ? v : undefined,
                        threadId: opts.threadId,
                        isScheduledMsg: true,
                        scheduledTimestampS,
                        viewMode: o("WAWebViewMode.flow").ViewModeType.SCHEDULED_MESSAGE
                    };
                    try {
                        const x = yield y(C, T, D);
                        if (x.ackErrorCode === o("WAWebScheduledMsgConstants").SCHEDULED_MSG_RESOURCE_LIMIT_NACK_CODE) {
                            R = true;
                            if (x.msg != null) {
                                L.push(x.msg.id.toString());
                            }
                            break;
                        }
                    } catch (error) {
                        o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                            "[scheduled_msg] Failed to send scheduled media message"
                        ]))).catching(r("getErrorSafe")(error)).sendLogs("scheduled-media-send-error");
                        throw error;
                    }
                }
                if (R) {
                    yield (f || (f = n("Promise"))).all(L.map((e)=>o("WAWebScheduledMsgRevealKeyStore").updateRevealKeyStatus(e, "FAILED")));
                    o("WAWebScheduledMsgLimitDialog.react").showScheduledMsgLimitReachedDialog();
                }
                if (addSystemBubble) {
                    try {
                        yield S(C);
                    } catch (error) {
                        o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                            "[scheduled_msg] Failed to add scheduled system message"
                        ]))).catching(r("getErrorSafe")(error)).sendLogs("scheduled-media-sys-error");
                    }
                }
            }
        });
        return v.apply(this, arguments);
    }
    function S(e) {
        return R.apply(this, arguments);
    }
    function R() {
        R = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = o("WAWebContactSystemMsg").genNotificationMsg(e.id, {
                type: o("WAWebMsgType").MSG_TYPE.NOTIFICATION,
                kind: o("WAWebMsgType").MsgKind.Notification,
                subtype: o("WAWebCommonMsgSubtypeTypes").MsgSubtype.ScheduledMessageCreated,
                viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
                isNewMsg: true
            });
            try {
                yield o("WAWebDBProcessMessage").storeMessages([
                    t
                ], e.id);
            } catch (error) {
                o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[scheduled_msg] persist ScheduledMessageCreated bubble -"
                ]))).catching(r("getErrorSafe")(error)).sendLogs("scheduled-msg-sys-persist-error");
            }
            const n = new (o("WAWebMsgModel")).Msg(t);
            e.msgs.add(n);
        });
        return R.apply(this, arguments);
    }
    l.sendScheduledTextMsgToChat = g;
    l.sendScheduledMediaMsgToChat = b;
}, 98);