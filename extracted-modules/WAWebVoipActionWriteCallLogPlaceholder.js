__d("WAWebVoipActionWriteCallLogPlaceholder", [
    "WALogger",
    "WAWebCallLogMsgData.flow",
    "WAWebCallLogUtils",
    "WAWebDBGetByParentMsgKey",
    "WAWebMsgCollection",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebSchemaMessageOrphans",
    "WAWebSendMsgChatAction",
    "WAWebViewMode.flow",
    "WAWebVoipActionSurfaceCallLogChat",
    "WAWebVoipCallLogPlaceholderTracker",
    "WAWebVoipCallsTabPanelManager",
    "WAWebVoipPendingCallLogOutcome",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    function d(e) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ callCreator, callId, groupJid, isVideoCall, t }) {
            try {
                const m = yield o("WAWebCallLogUtils").getCallLogTargetDetails({
                    callCreatorWid: callCreator,
                    callId,
                    groupJid
                });
                const { chatId, fromMe, msgKeyId, participant } = m;
                const h = groupJid ?? chatId;
                const y = {
                    type: o("WAWebMsgType").MSG_TYPE.CALL_LOG,
                    kind: o("WAWebMsgType").MsgKind.CallLog,
                    viewMode: o("WAWebViewMode.flow").ViewModeType.CALL_LOG_OFFLINE_RESUME,
                    callOutcome: o("WAWebCallLogMsgData.flow").CallOutcome.Unknown,
                    isVideoCall,
                    callCreator,
                    from: callCreator,
                    t,
                    id: new (r("WAWebMsgKey"))({
                        remote: h,
                        fromMe,
                        id: msgKeyId,
                        participant
                    }),
                    to: h
                };
                const C = o("WAWebMsgCollection").MsgCollection.get(y.id);
                if (C != null) {
                    o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[voip] placeholder ",
                        ": ICCE exists, skip"
                    ])), callId);
                    return;
                }
                const b = yield o("WAWebDBGetByParentMsgKey").getMessageOrphansByParentMsgKey(y.id);
                let v;
                if (b.length > 0) {
                    const S = b[0];
                    v = babelHelpers.extends({}, S.parsedMsgPayload, {
                        id: y.id,
                        t: y.t
                    });
                    o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[voip] placeholder ",
                        ": merged with orphan"
                    ])), callId);
                } else {
                    v = y;
                    o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[voip] placeholder ",
                        ": writing hidden ICCE"
                    ])), callId);
                }
                const R = o("WAWebVoipPendingCallLogOutcome").mergePendingCallLogOutcome(v);
                const { callLogMessage, pendingOutcome } = R;
                const k = yield o("WAWebSendMsgChatAction").addVoipCallLogMsgToChat(h, callLogMessage);
                if (k != null && pendingOutcome != null && callLogMessage.id != null) {
                    o("WAWebVoipPendingCallLogOutcome").clearPendingCallLogOutcome(callLogMessage.id, pendingOutcome);
                }
                if (b.length > 0) {
                    yield o("WAWebSchemaMessageOrphans").getMessageOrphanTable().bulkRemove(b.map((e)=>e.msgKey));
                }
                if (k != null) {
                    yield o("WAWebVoipActionSurfaceCallLogChat").maybeSurfaceCallLogChatInChatList(h, callLogMessage);
                }
                r("WAWebVoipCallsTabPanelManager").trigger("onWriteCallLogMessage", k);
            } catch (error) {
                o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip] placeholder resolve failed for callId=",
                    ""
                ])), callId).catching(r("getErrorSafe")(error)).sendLogs("voip-placeholder-resolve-fail");
            } finally{
                o("WAWebVoipCallLogPlaceholderTracker").markPlaceholderResolved(callId);
            }
        });
        return m.apply(this, arguments);
    }
    l.writeCallOfferPlaceholder = d;
}, 98);