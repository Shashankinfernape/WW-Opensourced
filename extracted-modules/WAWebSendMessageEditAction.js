__d("WAWebSendMessageEditAction", [
    "Promise",
    "WAJobOrchestratorTypes",
    "WALogger",
    "WATimeUtils",
    "WAWebBotGroupGatingUtils",
    "WAWebChatGetters",
    "WAWebCodeFormatMutator",
    "WAWebCoexEditDeleteAlertUtils",
    "WAWebCreateEncryptedMessageEditMsgData",
    "WAWebDBMessageDelete",
    "WAWebDBMsgUtils",
    "WAWebDBProcessMessage",
    "WAWebDBUpdateMessageTable",
    "WAWebErrorType",
    "WAWebFrontendMsgGetters",
    "WAWebLidMeUserForChat",
    "WAWebMessageEditUtils",
    "WAWebMessageSendPerfReporter",
    "WAWebMessageSendReporter",
    "WAWebMessageSendReporterFrontendDeps",
    "WAWebMessagingGatingUtils",
    "WAWebMsgActionCapability",
    "WAWebMsgDataFromModel",
    "WAWebMsgGetters",
    "WAWebMsgInfoUtils",
    "WAWebMsgKey",
    "WAWebMsgKeyUtils",
    "WAWebMsgModel",
    "WAWebMsgModelFromData",
    "WAWebMsgType",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterSendMsgAction",
    "WAWebOpenCoexEditDeleteAlertModal",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebPaymentLink",
    "WAWebProcessAddonsJob",
    "WAWebSendMsgRecordAction",
    "WAWebSendMsgResultAction",
    "WAWebSerializeError",
    "WAWebSpoilerFormatRegex",
    "WAWebSpoilerGating",
    "WAWebStateUtils",
    "WAWebUserPrefsMultiDevice",
    "WAWebViewMode.flow",
    "WAWebWamMsgUtils",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "err",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    function d(e) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ editedMsg, parent, timestamp }) {
            if (o("WAWebMessageEditUtils").isParentWithinEditProcessingWindow({
                parentTsInSeconds: parent.t,
                editTsInSeconds: timestamp,
                msgKey: parent.id
            }) || o("WAWebMessageEditUtils").isMessageYourselfEditExempt({
                msgKey: parent.id,
                msgType: parent.type
            })) {
                yield L(editedMsg, o("WAWebErrorType").SendFailureErrorCode.NoError);
            } else {
                yield L(parent, o("WAWebErrorType").SendFailureErrorCode.EditWindowExpired);
                yield L(editedMsg, o("WAWebErrorType").SendFailureErrorCode.EditWindowExpired);
            }
        });
        return m.apply(this, arguments);
    }
    function p(e, t) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (t != null) {
                yield o("WAWebDBUpdateMessageTable").updateMessageTable(e.id, {
                    count: t
                });
            }
        });
        return _.apply(this, arguments);
    }
    function f(e) {
        const t = o("WAWebMsgGetters").getLatestEditMsgKey(e);
        if (t == null || !o("WAWebMsgActionCapability").canEditText(e)) {
            return (c || (c = n("Promise"))).resolve();
        }
        return o("WAWebDBMsgUtils").getMsgByMsgKey(t).then((t)=>{
            if (t) {
                return b(o("WAWebStateUtils").unproxy(e), o("WAWebMsgModelFromData").msgModelFromMsgData(t));
            }
        }).catch((e)=>{});
    }
    function g(e, t, options) {
        if (!o("WAWebMsgActionCapability").canEditText(e) && !o("WAWebMsgActionCapability").canEditCaption(e)) {
            return (c || (c = n("Promise"))).reject(r("err")("Cannot edit message"));
        }
        const u = h({
            msg: o("WAWebStateUtils").unproxy(e),
            options,
            text: t
        });
        const d = o("WAWebFrontendMsgGetters").getChat(e);
        const m = d?.id?.toString() ?? "";
        const p = d?.contact?.isHosted === true;
        const _ = o("WAWebUserPrefsMultiDevice").getIsHostedMeAccountFromLocalStorage() === true;
        return S(o("WAWebStateUtils").unproxy(e), u).then(()=>{
            if (o("WAWebCoexEditDeleteAlertUtils").shouldShowCoexEditAlert(m, p)) {
                o("WAWebCoexEditDeleteAlertUtils").markCoexEditAlertShown(m);
                o("WAWebOpenCoexEditDeleteAlertModal").openCoexEditAlertModal(_);
            }
        });
    }
    function h({ msg, options, text }) {
        let t;
        let n;
        const s = o("WAWebFrontendMsgGetters").getChat(msg);
        const u = o("WAWebLidMeUserForChat").getMeUserLidOrJidForChat(s, o("WAWebMsgKeyUtils").TranslateMsgKeyType.EditMessage);
        const c = o("WAWebChatGetters").getIsGroup(s) ? o("WAWebWidFactory").asUserWidOrThrow(u) : undefined;
        const d = new (r("WAWebMsgKey"))({
            id: r("WAWebMsgKey").newId_DEPRECATED(),
            remote: msg.id.remote,
            fromMe: true,
            participant: c
        });
        const { groupMentions, linkPreview, mentionedJidList } = options;
        let f = {
            id: d,
            from: u,
            to: msg.id.remote,
            type: o("WAWebMsgType").MSG_TYPE.PROTOCOL,
            kind: o("WAWebMsgType").MsgKind.Protocol,
            subtype: "message_edit",
            viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
            protocolMessageKey: msg.id,
            local: true,
            t: o("WATimeUtils").unixTime(),
            mentionedJidList,
            groupMentions,
            latestEditMsgKey: d,
            latestEditSenderTimestampMs: o("WATimeUtils").unixTimeMs(),
            editMsgType: msg.type,
            errorCode: o("WAWebErrorType").SendFailureErrorCode.NoError,
            messageSecret: o("WAWebMessagingGatingUtils").isReportingTokenSendingEnabled() ? msg.messageSecret : null,
            botGroupParticipant: o("WAWebChatGetters").getIsGroup(s) && (t = o("WAWebBotGroupGatingUtils").getSendGroupBotParticipant(s.groupMetadata)) != null ? t : undefined,
            aiProvenance: o("WAWebMsgGetters").getIsNewsletterMsg(msg) && o("WAWebNewsletterGatingUtils").isChannelSGISenderEnabled() && (n = msg.aiProvenance) != null ? n : undefined
        };
        switch(r("nullthrows")(o("WAWebMessageEditUtils").getMsgEditType(msg.type))){
            case o("WAWebMessageEditUtils").MsgEditType.TextEdit:
                {
                    const S = text.trim();
                    f = babelHelpers.extends({}, f, {
                        body: S,
                        isSpoiler: o("WAWebSpoilerFormatRegex").hasSpoilerMarkup(S) && o("WAWebSpoilerGating").isSpoilerSenderEnabled(),
                        title: linkPreview?.title ?? undefined,
                        matchedText: linkPreview?.matchedText ?? undefined,
                        description: linkPreview?.description,
                        thumbnail: linkPreview?.thumbnail ?? undefined,
                        richPreviewType: linkPreview?.richPreviewType,
                        doNotPlayInline: linkPreview?.doNotPlayInline,
                        inviteGrpType: linkPreview?.inviteGrpType,
                        thumbnailDirectPath: linkPreview?.thumbnailDirectPath,
                        thumbnailSha256: linkPreview?.thumbnailSha256,
                        thumbnailEncSha256: linkPreview?.thumbnailEncSha256,
                        thumbnailHeight: linkPreview?.thumbnailHeight,
                        thumbnailWidth: linkPreview?.thumbnailWidth,
                        mediaKey: linkPreview?.mediaKey ?? undefined,
                        mediaKeyTimestamp: linkPreview?.mediaKeyTimestamp ?? undefined,
                        paymentLinkMetadata: o("WAWebPaymentLink").getPaymentLinkMessageMetadata(linkPreview, o("WAWebCodeFormatMutator").removeCodeBlocks(text)) ?? undefined
                    });
                    break;
                }
            case o("WAWebMessageEditUtils").MsgEditType.CaptionEdit:
                {
                    const caption = text.trim();
                    f = babelHelpers.extends({}, f, {
                        caption,
                        isSpoiler: o("WAWebSpoilerFormatRegex").hasSpoilerMarkup(caption) && o("WAWebSpoilerGating").isSpoilerSenderEnabled()
                    });
                    break;
                }
            case o("WAWebMessageEditUtils").MsgEditType.EventEdit:
            case o("WAWebMessageEditUtils").MsgEditType.PollEdit:
            case o("WAWebMessageEditUtils").MsgEditType.RichResponseEdit:
            case o("WAWebMessageEditUtils").MsgEditType.LoadingMediaEdit:
                break;
        }
        return f;
    }
    function y(e, t, n, r, o) {
        return C.apply(this, arguments);
    }
    function C() {
        C = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n, r, a, i) {
            if (t.latestEditMsgKey) {
                yield o("WAWebDBMessageDelete").removeMessagesFromHistory([
                    t.latestEditMsgKey.toString()
                ]);
            }
            try {
                i.startSavedStage();
                yield o("WAWebDBProcessMessage").storeMessages([
                    r ?? n
                ], a);
                i.postSavedStage();
            } catch (error) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[message-edit][sendMessageEdit] store protocol msg failed"
                ]))).verbose().sendLogs("storeSentMessageEdit failed");
                throw error;
            }
            i.startRenderedStage();
            yield o("WAWebProcessAddonsJob").processEditProtocolMsgsJob([
                n
            ]);
            i.postRenderedStage();
        });
        return C.apply(this, arguments);
    }
    function b(e, t) {
        return v.apply(this, arguments);
    }
    function v() {
        v = n("asyncToGeneratorRuntime").asyncToGenerator(function*(parent, editedMsg) {
            const n = o("WAWebMsgGetters").getIsNewsletterMsg(parent) ? yield o("WAWebNewsletterSendMsgAction").sendNewsletterEditMsg(parent, editedMsg) : yield o("WAWebSendMsgRecordAction").sendMsgRecord(editedMsg);
            const { count, messageSendResult, t: t_1 } = n;
            if (messageSendResult !== o("WAWebSendMsgResultAction").SendMsgResult.OK) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[message-edit][sendMsgEditRecord] send failed"
                ]))).sendLogs("message-edit-send-fail");
                parent.isSendFailure = true;
                return;
            }
            yield d({
                editedMsg,
                parent,
                timestamp: t_1
            });
            yield p(parent, count);
            parent.updateAck(editedMsg.ack);
            parent.isSendFailure = editedMsg.isSendFailure === true || editedMsg.errorCode === o("WAWebErrorType").SendFailureErrorCode.EditWindowExpired;
        });
        return v.apply(this, arguments);
    }
    function S(e, t) {
        return R.apply(this, arguments);
    }
    function R() {
        R = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            let a;
            const i = o("WAWebFrontendMsgGetters").getChat(e);
            const l = !!((a = i.groupMetadata) != null && a.isLidAddressingMode);
            const s = o("WAWebWamMsgUtils").msgIsLid(e, i.id, l);
            const c = o("WAWebMsgInfoUtils").getGroupMessageSendReporterOptions(i.id, s);
            c.originalMessage = e;
            const d = e.messageSecret != null;
            let m = t;
            if (d) {
                try {
                    m = yield o("WAWebCreateEncryptedMessageEditMsgData").createEncryptedMessageEditMsgData(t, e);
                } catch (error) {
                    o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[message-edit] Failed to create encrypted message edit ",
                        ""
                    ])), r("WAWebSerializeError")(error)).sendLogs("encrypted-message-edit-failed");
                }
            }
            const p = new (o("WAWebMsgModel")).Msg(m ?? t);
            p.wamMessageSendReporter = new (o("WAWebMessageSendReporter")).MessageSendReporter(p, babelHelpers.extends({}, c, {
                frontendDeps: o("WAWebMessageSendReporterFrontendDeps").MAIN_WEB_MESSAGE_SEND_REPORTER_FRONTEND_DEPS
            }));
            p.wamMessageSendPerfReporter = new (o("WAWebMessageSendPerfReporter")).MessageSendPerfReporter({
                chatWid: p.to,
                mediaType: o("WAWebWamMsgUtils").getWamMediaType(p),
                messageType: o("WAWebWamMsgUtils").getWamMessageType(p)
            });
            const p_wamMessageSendPerfReporter = p.wamMessageSendPerfReporter;
            yield o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("sendMessageEdit", (()=>{
                const r = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chatId, msgData }) {
                    yield y(msgData, t, m, chatId, p_wamMessageSendPerfReporter);
                    yield b(e, p);
                });
                return function(e) {
                    return r.apply(this, arguments);
                };
            })(), {
                priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION
            }).waitUntilCompleted({
                msgData: o("WAWebMsgDataFromModel").msgDataFromMsgModel(e),
                chatId: o("WAWebFrontendMsgGetters").getChat(e).id
            });
        });
        return R.apply(this, arguments);
    }
    function L(e, errorCode) {
        e.errorCode = errorCode;
        return o("WAWebDBUpdateMessageTable").updateMessageTable(e.id, {
            errorCode
        });
    }
    l.resendLatestEdit = f;
    l.sendMessageEdit = g;
    l.createEditMsgData = h;
    l.addAndSendMessageEdit = S;
}, 98);