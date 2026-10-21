__d("WAWebPinsDbSerialization", [
    "WAWebAddonConstants",
    "WAWebAddonProcessMsgsUtils",
    "WAWebMsgGetters",
    "WAWebMsgKey",
    "WAWebMsgKeyUtils",
    "WAWebMsgType",
    "WAWebProtobufsE2E.pb",
    "WAWebViewMode.flow",
    "WAWebWidFactory",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return babelHelpers.extends({}, e, {
            msgKey: e.msgKey.toString(),
            parentMsgKey: e.parentMsgKey.toString(),
            chatId: e.chatId.toString(),
            sender: e.sender.toString()
        });
    }
    function s(e) {
        return babelHelpers.extends({}, e, {
            msgKey: r("WAWebMsgKey").fromString(e.msgKey),
            parentMsgKey: r("WAWebMsgKey").fromString(e.parentMsgKey),
            chatId: o("WAWebWidFactory").asChatWid(o("WAWebWidFactory").createWid(e.chatId)),
            sender: o("WAWebWidFactory").createUserWidOrThrow(e.sender)
        });
    }
    function u(e) {
        const sender = o("WAWebWidFactory").asUserWidOrThrow(r("nullthrows")(o("WAWebMsgGetters").getSender(e))).toString();
        return {
            msgKey: e.id.toString(),
            ack: e.ack,
            t: e.t,
            read: e.read,
            parentMsgKey: e.pinParentKey.toString(),
            senderTimestampMs: e.pinSenderTimestampMs,
            chatId: e.id.remote.toString(),
            sender,
            pinType: e.pinMessageType,
            pinExpiryDuration: e.pinExpiryDuration
        };
    }
    function c(e) {
        const { ack, id, read, t: t_1 } = e;
        return {
            base: {
                msgKey: id.toString(),
                ack,
                t: t_1,
                read,
                targetMsgKey: o("WAWebAddonProcessMsgsUtils").getParentMsgKey(e).toString()
            },
            addonProps: {
                pinSenderTimestampMs: e.pinSenderTimestampMs,
                pinMessageType: e.pinMessageType,
                pinExpiryDuration: e.pinExpiryDuration
            }
        };
    }
    function d(e) {
        const t = c(e);
        const { addonProps, base } = t;
        return babelHelpers.extends({}, base, {
            rowType: o("WAWebAddonConstants").AddonMinimizedType.PinInChat,
            arbitraryIndex: e.id.remote.toString(),
            addonProps
        });
    }
    function m(e) {
        const n = r("WAWebMsgKey").fromString(e.msgKey);
        const e_addonProps = e.addonProps;
        return babelHelpers.extends({
            id: n
        }, o("WAWebMsgKeyUtils").msgKeyToTargetInfo(n, o("WAWebMsgKeyUtils").TranslateMsgKeyType.Addon), {
            type: o("WAWebMsgType").MSG_TYPE.PIN_MESSAGE,
            kind: o("WAWebMsgType").MsgKind.PinInChat,
            viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
            ack: e.ack,
            t: e.t,
            read: e.read,
            pinParentKey: r("WAWebMsgKey").fromString(e.targetMsgKey),
            pinSenderTimestampMs: e_addonProps.pinSenderTimestampMs,
            pinMessageType: o("WAWebProtobufsE2E.pb").Message$PinInChatMessage$Type.cast(e_addonProps.pinMessageType) ?? o("WAWebProtobufsE2E.pb").Message$PinInChatMessage$Type.UNKNOWN_TYPE,
            pinExpiryDuration: e_addonProps.pinExpiryDuration
        });
    }
    function p(e) {
        const n = r("WAWebMsgKey").fromString(e.msgKey);
        const a = o("WAWebMsgKeyUtils").msgKeyToTargetInfo(n, o("WAWebMsgKeyUtils").TranslateMsgKeyType.Addon);
        const { author, from, to } = a;
        return {
            id: r("WAWebMsgKey").fromString(e.msgKey),
            from,
            to,
            author,
            type: o("WAWebMsgType").MSG_TYPE.PIN_MESSAGE,
            kind: o("WAWebMsgType").MsgKind.PinInChat,
            viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
            ack: e.ack,
            t: e.t,
            read: e.read,
            pinSenderTimestampMs: e.senderTimestampMs,
            pinParentKey: r("WAWebMsgKey").fromString(e.parentMsgKey),
            pinMessageType: o("WAWebProtobufsE2E.pb").Message$PinInChatMessage$Type.cast(e.pinType) ?? o("WAWebProtobufsE2E.pb").Message$PinInChatMessage$Type.UNKNOWN_TYPE,
            pinExpiryDuration: e.pinExpiryDuration
        };
    }
    l.serializePinInChat = e;
    l.deserializePinInChat = s;
    l.serializePinInChatMsgData = u;
    l.pinInChatMsgDatIntoUnifiedAddonRow = d;
    l.unifiedAddonRowIntoPinInChatMsgData = m;
    l.deserializePinInChatMsgData = p;
}, 98);