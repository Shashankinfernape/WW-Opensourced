__d("WAWebOutgoingMessage", [
    "$InternalEnum",
    "WALogger",
    "WAWebE2EProtoGenerator",
    "WAWebE2EProtoUtils",
    "WAWebFrontendMsgGetters",
    "WAWebHandleMsgError",
    "WAWebMedia",
    "WAWebMessagePluginParseProtobuf",
    "WAWebMessageSecretLocationUtils",
    "WAWebMsgType",
    "WAWebProcessBaseMsgInfo",
    "WAWebSendMsgTypes",
    "WAWebVerifyProtobufMsgObjectKeys",
    "cr:10197"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = new Set([
        (u = o("WAWebMsgType")).MSG_TYPE.CIPHERTEXT,
        u.MSG_TYPE.UNKNOWN,
        u.MSG_TYPE.GP2,
        u.MSG_TYPE.E2E_NOTIFICATION,
        u.MSG_TYPE.NOTIFICATION_TEMPLATE
    ]);
    const d = n("$InternalEnum")({
        Chat: "chat",
        ChatResend: "chat-resend",
        Retry: "retry",
        Newsletter: "newsletter",
        Report: "report",
        Status: "status",
        Debug: "debug"
    });
    const m = (n, r, a)=>{
        if (!c.has(r.data.type)) {
            try {
                const t = o("WAWebE2EProtoUtils").getMutableMessageProtobuf(a);
                o("WAWebVerifyProtobufMsgObjectKeys").verifyProtobufMessageObjectKeys(t);
                o("WAWebMessagePluginParseProtobuf").parseProtobuf({
                    msgContext: "outgoing",
                    messageProtobuf: t,
                    baseMessage: r.type === o("WAWebSendMsgTypes").SendMessageRecordType.Message ? o("WAWebProcessBaseMsgInfo").msgToBaseMsgInfo(r.data) : o("WAWebProcessBaseMsgInfo").msgDataToBaseMsgInfo(r.data)
                });
            } catch (error) {
                if (error instanceof o("WAWebHandleMsgError").MessageValidationError) {
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "generate proto: type:",
                        " error:",
                        ""
                    ])), r.data.type, error.name).tags("messaging").sendLogs(`outgoingMsg: ${error.name}`);
                } else {
                    o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "generate proto uncategorized error: msgId:",
                        " type:",
                        " error:",
                        ""
                    ])), r.data.id, r.data.type, error).sendLogs(`outgoing ${String(n)} ${r.data.type}`, {
                        sampling: 0.01
                    });
                }
                throw error;
            }
            o("WAWebMessageSecretLocationUtils").verifyTopLevelMessageSecret({
                context: o("WAWebMessageSecretLocationUtils").MessageSecretCheckContext.Sender,
                proto: a
            });
        }
    };
    const p = "https://a.whatsapp.net";
    const _ = (data)=>{
        if (data.type === o("WAWebMsgType").MSG_TYPE.STICKER && data.deprecatedMms3Url == null) {
            data.deprecatedMms3Url = p;
        }
        let e;
        if (o("WAWebFrontendMsgGetters").getAsMms(data)) {
            if (data.isUnsentPhoneMsg()) {
                e = {
                    type: data.type
                };
            } else {
                const n = o("WAWebMedia").mediaMetadata(data);
                if (data.type === o("WAWebMsgType").MSG_TYPE.STICKER && n.url == null) {
                    n.url = p;
                }
                e = n;
            }
        }
        return o("WAWebE2EProtoGenerator").createMsgProtobuf(data, e || {});
    };
    function f(e, t) {
        const n = t.type === o("WAWebSendMsgTypes").SendMessageRecordType.Message ? _(t.data) : o("WAWebE2EProtoGenerator").createAddonProtobuf(t.data);
        m(e, t, n);
        return n;
    }
    function g(e, t) {
        return f(e, {
            type: o("WAWebSendMsgTypes").SendMessageRecordType.Message,
            data: t
        });
    }
    l.OutgoingMessageOriginType = d;
    l.createOutgoingMessageProtobuf = f;
    l.createOutgoingMsgModelProtobuf = g;
}, 98);