__d("WAWebSendPinMessageAction", [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebAck",
    "WAWebChatGetters",
    "WAWebFrontendMsgGetters",
    "WAWebMsgCollection",
    "WAWebMsgKey",
    "WAWebMsgModel",
    "WAWebMsgType",
    "WAWebPinInChatCollection",
    "WAWebPinInChatMetricUtils",
    "WAWebPinMsgConstants",
    "WAWebProtobufsE2E.pb",
    "WAWebReferentialMsgKey",
    "WAWebSendAddonMsgChatAction",
    "WAWebSendMsgResultAction",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(e, t, n, r) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, a, i, l) {
            const u = o("WAWebFrontendMsgGetters").getChat(t);
            const c = u.id;
            const from = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow();
            const m = o("WAWebChatGetters").getIsGroup(u) ? o("WAWebWidFactory").asUserWidOrThrow(from) : undefined;
            const _ = new (r("WAWebMsgKey"))({
                id: yield r("WAWebMsgKey").newId(),
                remote: u.id,
                fromMe: true,
                participant: m
            });
            const senderTimestampMs = o("WATimeUtils").unixTimeMs();
            const globalClockUnixTimeSeconds = o("WATimeUtils").unixTime();
            let h;
            let pinExpiryDuration;
            let timeRemainingToExpirySecs;
            if (a === o("WAWebProtobufsE2E.pb").Message$PinInChatMessage$Type.PIN_FOR_ALL) {
                h = o("WAWebPinMsgConstants").PIN_STATE.PIN;
                pinExpiryDuration = o("WAWebPinMsgConstants").getPinExpiryDuration(i ?? o("WAWebPinMsgConstants").DEFAULT_PIN_EXPIRY_DURATION_OPTION);
            } else if (a === o("WAWebProtobufsE2E.pb").Message$PinInChatMessage$Type.UNPIN_FOR_ALL) {
                h = o("WAWebPinMsgConstants").PIN_STATE.UNPIN;
                pinExpiryDuration = 0;
                timeRemainingToExpirySecs = o("WAWebPinInChatMetricUtils").getFiniteTimeRemainingSecs(o("WAWebPinInChatCollection").PinInChatCollection.getByParentMsgKey(t.id));
            }
            if (h == null) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "WAWebSendPinMessageAction:sendPinInChatMsg Invalid pinType"
                ])));
                return (s || (s = n("Promise"))).resolve(null);
            }
            const pinInChatObj = {
                msgKey: _.toString(),
                parentMsgKey: t.id.toString(),
                senderTimestampMs,
                sender: from.toString(),
                chatId: u.id.toString(),
                pinType: h,
                pinExpiryDuration,
                read: true,
                ack: l ?? o("WAWebAck").ACK.CLOCK
            };
            const v = p({
                author: m,
                from,
                globalClockUnixTimeSeconds,
                msg: t,
                msgKey: _,
                pinInChatObj,
                pinType: a,
                to: c
            });
            const S = yield o("WAWebSendAddonMsgChatAction").addAndSendAddonToChat(v);
            if (S.messageSendResult !== o("WAWebSendMsgResultAction").SendMsgResult.OK) {
                throw r("err")("PinInChat send Error");
            }
            const R = new (o("WAWebMsgModel")).Msg(v);
            o("WAWebPinInChatMetricUtils").logPinInChatMessageSend({
                msg: R,
                parentMsg: t,
                chat: u,
                timeRemainingToExpirySecs
            });
            return S;
        });
        return c.apply(this, arguments);
    }
    function d(e) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = o("WAWebMsgCollection").MsgCollection.assertGet(e.parentMsgKey);
            if (e.pinType === o("WAWebPinMsgConstants").PIN_STATE.PIN) {
                yield u(t, o("WAWebProtobufsE2E.pb").Message$PinInChatMessage$Type.PIN_FOR_ALL, o("WAWebPinMsgConstants").getPinExpiryOption(e.pinExpiryDuration ?? o("WAWebPinMsgConstants").getPinExpiryDuration(o("WAWebPinMsgConstants").DEFAULT_PIN_EXPIRY_DURATION_OPTION)), e.ack);
            } else {
                yield u(t, o("WAWebProtobufsE2E.pb").Message$PinInChatMessage$Type.UNPIN_FOR_ALL, undefined, e.ack);
            }
        });
        return m.apply(this, arguments);
    }
    function p({ author, from, globalClockUnixTimeSeconds, msg, msgKey, pinInChatObj, pinType, to }) {
        return {
            id: msgKey,
            type: o("WAWebMsgType").MSG_TYPE.PIN_MESSAGE,
            viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
            kind: o("WAWebMsgType").MsgKind.PinInChat,
            to,
            from,
            author,
            pinParentKey: o("WAWebReferentialMsgKey").getReferentialMsgKey(msg),
            pinSenderTimestampMs: pinInChatObj.senderTimestampMs,
            pinMessageType: pinType,
            pinExpiryDuration: pinInChatObj.pinExpiryDuration,
            t: globalClockUnixTimeSeconds,
            isNewMsg: true,
            local: true,
            ack: pinInChatObj.ack
        };
    }
    l.sendPinInChatMsg = u;
    l.resendPinInChatMsg = d;
    l.getMsgJson = p;
}, 98);