__d("WAWebParseProtocolMessageEditProto", [
    "WALogger",
    "WALongInt",
    "WAWebBotBaseGating",
    "WAWebE2EProtoParser",
    "WAWebE2EProtoUtils",
    "WAWebMessageAssociationGatingUtils",
    "WAWebMsgType",
    "WAWebProtobufsE2E.pb",
    "WAWebSpoilerGating",
    "getErrorSafe",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = 3;
    function u({ editedMessage: t }) {
        for(let n = 0; n < s; n++){
            const r = c(t);
            if (r == null) {
                break;
            }
            t = r;
        }
        return t;
    }
    function c(e) {
        if (e == null) {
            return null;
        }
        const { associatedChildMessage: n, groupMentionedMessage: r, spoilerMessage: a } = e;
        if (n != null && o("WAWebMessageAssociationGatingUtils").isFutureproofAssociatedChildEnabled()) {
            return n.message;
        }
        if (a != null && a.message?.spoilerMessage == null && o("WAWebSpoilerGating").isSpoilerReceiverEnabled()) {
            return a.message;
        }
        return r?.message;
    }
    function d(e) {
        if (o("WAWebSpoilerGating").isSpoilerReceiverEnabled()) {
            return false;
        }
        const r = e.spoilerMessage?.message?.protocolMessage;
        if (r?.type === o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type.MESSAGE_EDIT) {
            return true;
        }
        const a = e.protocolMessage;
        return a != null && a.type === o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type.MESSAGE_EDIT && a.editedMessage?.spoilerMessage != null;
    }
    function m(e) {
        return {
            msgData: babelHelpers.extends({}, e, {
                type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
                kind: o("WAWebMsgType").MsgKind.Unknown,
                futureproofType: o("WAWebMsgType").MSG_TYPE.PROTOCOL,
                futureproofSubtype: "message_edit"
            }),
            contextInfo: null
        };
    }
    function p({ baseMessage: n, messageProtobuf: a, msgContext: i }) {
        if (d(a)) {
            return m(n);
        }
        const l = a.protocolMessage;
        if (!(l == null || l?.type !== o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type.MESSAGE_EDIT) && !(i !== "relay" && i !== "outgoing")) {
            try {
                const p = _(n, l, i) ?? h(n, l, i) ?? f(n, l) ?? g(n, l, i, a.messageContextInfo);
                return p || null;
            } catch (t) {
                const y = r("getErrorSafe")(t);
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "parseProtocolMessageEditProto: error:",
                    ", stack: ",
                    ""
                ])), y.name, y.stack).tags("messaging").sendLogs("parseProtocolMessageEditProto: EditParseError");
                throw y;
            }
        }
    }
    function _(e, t, n) {
        const a = u(t);
        const i = !!(a != null && a.conversation) || !!(a != null && a.extendedTextMessage);
        if (!i) {
            return null;
        }
        const l = o("WAWebE2EProtoUtils").translateRegularMessageKeyToLocalReference(t.key, e);
        const s = babelHelpers.extends({}, o("WAWebE2EProtoParser").parseMsgProto({
            messageProtobuf: r("nullthrows")(a),
            message: e,
            msgContext: n
        }), {
            type: o("WAWebMsgType").MSG_TYPE.PROTOCOL,
            kind: o("WAWebMsgType").MsgKind.Protocol,
            subtype: "message_edit",
            editMsgType: o("WAWebMsgType").MSG_TYPE.CHAT,
            latestEditSenderTimestampMs: o("WALongInt").maybeNumberOrThrowIfTooLarge(t.timestampMs),
            latestEditMsgKey: e.id,
            protocolMessageKey: l
        });
        return {
            msgData: s,
            contextInfo: null
        };
    }
    function f(e, t) {
        const n = u(t);
        let r;
        let a;
        let i;
        if (n != null && n.imageMessage) {
            r = o("WAWebMsgType").MSG_TYPE.IMAGE;
            a = n.imageMessage.caption;
            i = n.imageMessage.contextInfo;
        } else if (n != null && n.videoMessage) {
            r = o("WAWebMsgType").MSG_TYPE.VIDEO;
            a = n.videoMessage.caption;
            i = n.videoMessage.contextInfo;
        } else if (n != null && n.documentMessage) {
            r = o("WAWebMsgType").MSG_TYPE.DOCUMENT;
            a = n.documentMessage.caption;
            i = n.documentMessage.contextInfo;
        } else if (n != null && n.documentWithCaptionMessage) {
            r = o("WAWebMsgType").MSG_TYPE.DOCUMENT;
            a = n.documentWithCaptionMessage?.message?.documentMessage?.caption;
            i = n.documentWithCaptionMessage?.message?.documentMessage?.contextInfo;
        }
        if (!r || a === "" || a == null) {
            return null;
        }
        const c = babelHelpers.extends({}, e, {
            type: o("WAWebMsgType").MSG_TYPE.PROTOCOL,
            kind: o("WAWebMsgType").MsgKind.Protocol,
            subtype: "message_edit",
            editMsgType: r,
            caption: a,
            latestEditSenderTimestampMs: o("WALongInt").maybeNumberOrThrowIfTooLarge(t.timestampMs),
            latestEditMsgKey: e.id,
            protocolMessageKey: o("WAWebE2EProtoUtils").translateRegularMessageKeyToLocalReference(t.key, e)
        });
        return {
            msgData: c,
            contextInfo: i
        };
    }
    function g(e, t, n, r) {
        const i = t.editedMessage?.richResponseMessage;
        if (i) {
            return y({
                baseMessage: e,
                editMsgType: o("WAWebMsgType").MSG_TYPE.RICH_RESPONSE,
                messageContextInfo: r,
                msgContext: n,
                protocolMessage: t
            });
        }
        return null;
    }
    function h(e, t, n) {
        const a = t.editedMessage;
        const i = a?.imageMessage ?? a?.videoMessage;
        if (!i || !o("WAWebBotBaseGating").isLoadingMediaMessagesEnabled(e)) {
            return null;
        }
        return y({
            baseMessage: e,
            editMsgType: o("WAWebMsgType").MSG_TYPE.LOADING_MEDIA,
            msgContext: n,
            protocolMessage: t
        });
    }
    function y({ baseMessage: t, editMsgType: n, messageContextInfo: a, msgContext: i, protocolMessage: l }) {
        const s = o("WAWebE2EProtoUtils").translateRegularMessageKeyToLocalReference(l.key, t);
        const u = babelHelpers.extends({}, o("WAWebE2EProtoParser").parseMsgProto({
            messageProtobuf: babelHelpers.extends({}, r("nullthrows")(l.editedMessage), a ? {
                messageContextInfo: a
            } : {}),
            message: t,
            msgContext: i
        }), {
            type: o("WAWebMsgType").MSG_TYPE.PROTOCOL,
            kind: o("WAWebMsgType").MsgKind.Protocol,
            subtype: "message_edit",
            editMsgType: n,
            latestEditSenderTimestampMs: o("WALongInt").maybeNumberOrThrowIfTooLarge(l.timestampMs),
            latestEditMsgKey: t.id,
            protocolMessageKey: s
        });
        return {
            msgData: u,
            contextInfo: null
        };
    }
    l.default = p;
}, 98);