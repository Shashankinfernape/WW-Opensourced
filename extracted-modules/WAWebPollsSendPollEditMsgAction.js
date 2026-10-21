__d("WAWebPollsSendPollEditMsgAction", [
    "WATimeUtils",
    "WAWebAddOnParseWebMsgInfo",
    "WAWebClock",
    "WAWebFrontendMsgGetters",
    "WAWebLidMeUserForChat",
    "WAWebMessageEditUtils",
    "WAWebMsgGetters",
    "WAWebMsgKey",
    "WAWebMsgKeyUtils",
    "WAWebMsgType",
    "WAWebPollEditEncryptMsgData",
    "WAWebSendAddonMsgChatAction",
    "WAWebSendMsgResultAction",
    "WAWebViewMode.flow",
    "WAXplatTrim",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ newTitle, parentMsg }) {
            const i = o("WAXplatTrim").trim(newTitle);
            const l = o("WAXplatTrim").trim(parentMsg.pollName ?? "");
            if (!parentMsg.id.fromMe) {
                throw r("err")("Only the poll creator can edit the poll");
            }
            if (i === "") {
                throw r("err")("Poll edit title cannot be empty");
            }
            if (i === l) {
                throw r("err")("Poll edit title is unchanged");
            }
            if (!o("WAWebMessageEditUtils").isParentWithinEditUIWindow({
                msgKey: parentMsg.id,
                parentTsInSeconds: parentMsg.t
            }) && !o("WAWebMessageEditUtils").isMessageYourselfEditExempt({
                msgKey: parentMsg.id,
                msgType: parentMsg.type
            })) {
                throw r("err")("Poll edit window has expired");
            }
            if (parentMsg.pollEndTime != null && parentMsg.pollEndTime <= o("WAWebClock").Clock.getServerTimeMs()) {
                throw r("err")("Poll has ended");
            }
            const s = o("WAWebLidMeUserForChat").getMeUserLidOrJidForChat(o("WAWebFrontendMsgGetters").getChat(parentMsg.unsafe()), o("WAWebMsgKeyUtils").TranslateMsgKeyType.EditMessage);
            const u = new (r("WAWebMsgKey"))({
                fromMe: true,
                remote: parentMsg.id.remote,
                id: yield r("WAWebMsgKey").newId(),
                participant: o("WAWebMsgGetters").getIsGroupMsg(parentMsg.unsafe()) ? s : undefined
            });
            const c = babelHelpers.extends({}, o("WAWebMsgKeyUtils").msgKeyToTargetInfo(u, o("WAWebMsgKeyUtils").TranslateMsgKeyType.EditMessage), {
                id: u,
                t: o("WATimeUtils").unixTime(),
                type: o("WAWebMsgType").MSG_TYPE.PROTOCOL,
                subtype: "poll_edit_decrypted",
                kind: o("WAWebMsgType").MsgKind.ProtocolPollEdit,
                viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
                latestEditSenderTimestampMs: o("WAWebAddOnParseWebMsgInfo").getIncreasingLatestSenderTimestampMs(parentMsg.unsafe().latestEditSenderTimestampMs),
                latestEditMsgKey: u,
                protocolMessageKey: parentMsg.id,
                editMsgType: o("WAWebMsgType").MSG_TYPE.POLL_CREATION,
                pollName: i
            });
            const d = yield o("WAWebPollEditEncryptMsgData").createEncryptedPollEditMsgData(c, parentMsg.unsafe());
            const m = yield o("WAWebSendAddonMsgChatAction").addAndSendAddonToChat(d);
            if (m.messageSendResult !== o("WAWebSendMsgResultAction").SendMsgResult.OK) {
                throw r("err")("Failed to send poll edit");
            }
        });
        return s.apply(this, arguments);
    }
    l.sendPollEdit = e;
}, 98);