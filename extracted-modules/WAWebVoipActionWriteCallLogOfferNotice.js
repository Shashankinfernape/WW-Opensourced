__d("WAWebVoipActionWriteCallLogOfferNotice", [
    "WATimeUtils",
    "WAWebCallLogUtils",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebReleaseToEventLoop",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "WAWebVoipActionWriteCallLogImpl",
    "WAWebVoipCallLogPlaceholderTracker",
    "WAWebVoipPhaseTracker",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = o("WAWebVoipPhaseTracker").beginPostCallWork();
            try {
                yield o("WAWebReleaseToEventLoop").releaseToEventLoop();
                const { callCreatorWid, callId, callOutcome, groupJid, isGroup, isOffline, isVideo, offerTime, silenceReason } = e;
                const p = yield o("WAWebCallLogUtils").getCallLogTargetDetails({
                    callCreatorWid,
                    callId,
                    groupJid
                });
                const { callCreatorUserWid, chatId, fromMe, msgKeyId } = p;
                const y = o("WAWebVoipCallLogPlaceholderTracker").isOfflineCallLogOrderingEnabled() ? false : isOffline === true || offerTime == null || !o("WATimeUtils").sameDay(o("WATimeUtils").castToUnixTime(offerTime), o("WATimeUtils").unixTime());
                let C;
                const b = {
                    type: o("WAWebMsgType").MSG_TYPE.CALL_LOG,
                    viewMode: y ? o("WAWebViewMode.flow").ViewModeType.CALL_LOG_OFFLINE_RESUME : o("WAWebViewMode.flow").ViewModeType.VISIBLE,
                    kind: o("WAWebMsgType").MsgKind.CallLog,
                    from: callCreatorUserWid,
                    callOutcome,
                    callSilenceReason: silenceReason,
                    isVideoCall: isVideo,
                    callCreator: callCreatorWid,
                    t: offerTime ?? o("WATimeUtils").unixTime()
                };
                const v = {
                    type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
                    viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
                    kind: o("WAWebMsgType").MsgKind.Unknown,
                    from: callCreatorUserWid,
                    futureproofType: o("WAWebMsgType").MSG_TYPE.CALL_LOG,
                    t: offerTime ?? o("WATimeUtils").unixTime()
                };
                const S = isGroup && groupJid ? groupJid : chatId;
                if (isGroup && callId != null) {
                    if (groupJid) {
                        if (silenceReason === "vc_wave_all") {
                            C = babelHelpers.extends({
                                id: new (r("WAWebMsgKey"))({
                                    remote: S,
                                    fromMe,
                                    id: msgKeyId,
                                    participant: callCreatorWid
                                }),
                                to: groupJid,
                                author: callCreatorWid
                            }, v);
                        } else {
                            C = babelHelpers.extends({
                                id: new (r("WAWebMsgKey"))({
                                    remote: chatId,
                                    fromMe,
                                    id: msgKeyId
                                }),
                                to: groupJid,
                                author: callCreatorWid
                            }, b);
                        }
                    }
                } else if (silenceReason === "vc_wave_all") {
                    C = babelHelpers.extends({
                        id: new (r("WAWebMsgKey"))({
                            remote: S,
                            fromMe,
                            id: msgKeyId
                        }),
                        to: o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE()
                    }, v);
                } else {
                    C = babelHelpers.extends({
                        id: new (r("WAWebMsgKey"))({
                            remote: chatId,
                            fromMe,
                            id: msgKeyId
                        }),
                        to: o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE()
                    }, b);
                }
                if (C != null) {
                    yield o("WAWebVoipActionWriteCallLogImpl").writeVoipCallLogMessageImpl(S, C, isOffline === true, isOffline !== true);
                }
            } finally{
                o("WAWebVoipPhaseTracker").endPostCallWork(t);
            }
        });
        return s.apply(this, arguments);
    }
    l.generateCallLogOfferNotice = e;
}, 98);