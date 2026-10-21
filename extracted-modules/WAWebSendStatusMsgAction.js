__d("WAWebSendStatusMsgAction", [
    "invariant",
    "WALogger",
    "WAWebAck",
    "WAWebAutoCrosspostAction",
    "WAWebDBProcessMessage",
    "WAWebEncryptAndSendStatusMsg",
    "WAWebLidStatusMigrationUtils",
    "WAWebMessageSendPerfReporter",
    "WAWebMessageSendReporterFrontendDeps",
    "WAWebMsgKey",
    "WAWebMsgModel",
    "WAWebOutgoingMessage",
    "WAWebPostSendStatusFailure",
    "WAWebSendMsgMetricReporter",
    "WAWebSendMsgResultAction",
    "WAWebSendMsgTypes",
    "WAWebStatusCollection",
    "WAWebStatusLoggingUtils",
    "WAWebStatusMsgDataUtils",
    "WAWebStatusPosterActionsLogger",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsStatus",
    "WAWebWamEnumMessageSendResultType",
    "WAWebWamEnumStatusContentType",
    "WAWebWamMsgUtils",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
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
    function y(e) {
        switch(e){
            case "chat":
                return o("WAWebWamEnumStatusContentType").STATUS_CONTENT_TYPE.TEXT;
            case "image":
                return o("WAWebWamEnumStatusContentType").STATUS_CONTENT_TYPE.PHOTO;
            case "video":
                return o("WAWebWamEnumStatusContentType").STATUS_CONTENT_TYPE.VIDEO;
            case "gif":
            case "sticker":
                return o("WAWebWamEnumStatusContentType").STATUS_CONTENT_TYPE.GIF;
            case "ptt":
            case "audio":
                return o("WAWebWamEnumStatusContentType").STATUS_CONTENT_TYPE.VOICE;
            default:
                return o("WAWebWamEnumStatusContentType").STATUS_CONTENT_TYPE.PHOTO;
        }
    }
    function C(e, t) {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, funnelContext) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "sendStatusTextMsgAction: start to send text message"
            ])));
            const d = yield o("WAWebStatusMsgDataUtils").createTextStatusMsgData(t);
            if (d == null) {
                s(0, 73062);
            }
            const m = new (o("WAWebMsgModel")).Msg(d);
            m.wamMessageSendPerfReporter = new (o("WAWebMessageSendPerfReporter")).MessageSendPerfReporter({
                chatWid: m.to,
                mediaType: o("WAWebWamMsgUtils").getWamMediaType(m),
                messageType: o("WAWebWamMsgUtils").getWamMessageType(m)
            });
            const p = o("WAWebSendMsgMetricReporter").createMsgModelMetricReporter(m, o("WAWebMessageSendReporterFrontendDeps").MAIN_WEB_MESSAGE_SEND_REPORTER_FRONTEND_DEPS);
            p.sendReporter = p.sendReporter ?? p.createSendReporter();
            p.sendPerfReporter?.startRenderedStage();
            o("WAWebStatusCollection").StatusCollection.handleUpdate(d, false);
            yield o("WAWebStatusCollection").StatusCollection.addStatusMessages(m.author, [
                m
            ]);
            p.sendPerfReporter?.postRenderedStage();
            p.sendPerfReporter?.startSavedStage();
            yield o("WAWebDBProcessMessage").storeMessages([
                d
            ], m.to);
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "sendStatusTextMsgAction: store text message"
            ])));
            p.sendPerfReporter?.postSavedStage();
            return R({
                funnelContext,
                metricsReporter: p,
                msg: m,
                msgData: d,
                retryCount: 0
            });
        });
        return b.apply(this, arguments);
    }
    function v(e) {
        return S.apply(this, arguments);
    }
    function S() {
        S = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ beforeSend, funnelContext, mediaMsgData }) {
            o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "sendStatusMediaMsgAction: start to send status message"
            ])));
            const h = babelHelpers.extends({}, mediaMsgData, {
                id: new (r("WAWebMsgKey"))({
                    fromMe: mediaMsgData.id.fromMe,
                    remote: mediaMsgData.id.remote,
                    id: mediaMsgData.id.id,
                    participant: mediaMsgData.id.participant ? o("WAWebLidStatusMigrationUtils").matWidConvert(mediaMsgData.id.participant) : undefined
                }),
                from: o("WAWebLidStatusMigrationUtils").matWidConvert(mediaMsgData.from),
                author: o("WAWebLidStatusMigrationUtils").matWidConvert(o("WAWebUserPrefsMeUser").getMeUserOrThrow()),
                canBeReshared: false
            });
            const y = new (o("WAWebMsgModel")).Msg(h);
            y.wamMessageSendPerfReporter = new (o("WAWebMessageSendPerfReporter")).MessageSendPerfReporter({
                chatWid: y.to,
                mediaType: o("WAWebWamMsgUtils").getWamMediaType(y),
                messageType: o("WAWebWamMsgUtils").getWamMessageType(y)
            });
            const C = o("WAWebSendMsgMetricReporter").createMsgModelMetricReporter(y, o("WAWebMessageSendReporterFrontendDeps").MAIN_WEB_MESSAGE_SEND_REPORTER_FRONTEND_DEPS);
            C.sendReporter = C.sendReporter ?? C.createSendReporter();
            C.sendPerfReporter?.startRenderedStage();
            o("WAWebStatusCollection").StatusCollection.handleUpdate(h, false);
            yield o("WAWebStatusCollection").StatusCollection.addStatusMessages(y.author, [
                y
            ]);
            C.sendPerfReporter?.postRenderedStage();
            C.sendPerfReporter?.startSavedStage();
            yield o("WAWebDBProcessMessage").storeMessages([
                h
            ], y.to);
            o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                "sendStatusMediaMsgAction: store media message"
            ])));
            C.sendPerfReporter?.postSavedStage();
            C.sendPerfReporter?.startReadyToSendStage();
            yield y.waitForPrep();
            try {
                yield beforeSend(y);
            } catch (error) {
                o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[status] failed to send status message with ",
                    ""
                ])), error).sendLogs("status-send-media-error");
                C.sendReporter?.postFailure({
                    result: o("WAWebWamEnumMessageSendResultType").MESSAGE_SEND_RESULT_TYPE.ERROR_UPLOAD,
                    isTerminal: true
                });
                return {
                    messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult.ERROR_UPLOAD
                };
            }
            C.sendPerfReporter?.postReadyToSendStage();
            o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                "sendStatusMediaMsgAction: media prep done for status message"
            ])));
            return R({
                funnelContext,
                metricsReporter: C,
                msg: y,
                msgData: h,
                retryCount: 0
            });
        });
        return S.apply(this, arguments);
    }
    function R(e) {
        return L.apply(this, arguments);
    }
    function L() {
        L = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ funnelContext, metricsReporter, msg, msgData, retryCount = 0 }) {
            o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                "_sendStatusMessage: send status message ",
                ""
            ])), msg.id);
            const u = new (o("WAWebStatusPosterActionsLogger")).StatusPosterActionsLogger(funnelContext?.sessionId);
            const contentType = y(msg.type);
            u.logPostStatusRequest(contentType, retryCount, funnelContext?.entryPoint);
            const sendMsgRecord = {
                type: o("WAWebSendMsgTypes").SendMessageRecordType.Message,
                data: msg
            };
            const msgProtobuf = o("WAWebOutgoingMessage").createOutgoingMessageProtobuf(o("WAWebOutgoingMessage").OutgoingMessageOriginType.Status, sendMsgRecord);
            o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                "_sendStatusMessage: generate protobuf"
            ])));
            try {
                yield o("WAWebEncryptAndSendStatusMsg").encryptAndSendStatusMsg({
                    metricsReporter,
                    msgProtobuf,
                    sendMsgRecord
                });
                metricsReporter.sendReporter?.postSuccess();
                msg.updateAck(o("WAWebAck").ACK.SENT);
                const C = yield o("WAWebStatusLoggingUtils").statusIdForLogging(msg);
                u.logPostStatusSuccess(contentType, C, funnelContext?.entryPoint);
                o("WAWebAutoCrosspostAction").triggerAutoCrosspostIfEnabled(msg);
                o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                    "_sendStatusMessage: done"
                ])));
                return {
                    messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult.OK,
                    msg
                };
            } catch (error) {
                msg.updateAck(o("WAWebAck").ACK.FAILED);
                const b = r("getErrorSafe")(error);
                u.logPostStatusFailure({
                    contentType,
                    entryPoint: funnelContext?.entryPoint,
                    failureReason: b?.message,
                    retryCount
                });
                o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                    "_sendStatusMessage: failed with ",
                    ""
                ])), error);
                const v = yield o("WAWebUserPrefsStatus").getStatusPrivacySetting();
                return o("WAWebPostSendStatusFailure").postStatusSendFailure(b, metricsReporter, v);
            }
        });
        return L.apply(this, arguments);
    }
    l.getContentTypeForLogging = y;
    l.sendStatusTextMsgAction = C;
    l.sendStatusMediaMsgAction = v;
}, 98);