__d("WAWebProtocolRevokeMessageUtils", [
    "WALogger",
    "WAWebAck",
    "WAWebE2EProtoUtils",
    "WAWebHandleMsgError",
    "WAWebHandleMsgMetaUtils",
    "WAWebMsgType",
    "WAWebProtobufsE2E.pb",
    "WAWebWamEnumE2eFailureReason",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.name = "ProtocolRevokeMessageValidationError";
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(o("WAWebHandleMsgError").MessageValidationError);
    function d({ baseMessage, editAttr, messageProtobuf, msgContext, msgMeta }) {
        const messageProtobuf_protocolMessage = messageProtobuf.protocolMessage;
        if (messageProtobuf_protocolMessage != null) {
            const { key, type } = messageProtobuf_protocolMessage;
            if (!(msgContext !== "relay" && type !== o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type.EPHEMERAL_SETTING) && type === o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type.REVOKE) {
                let protocolMessageKey;
                if (baseMessage.author?.isLid() && o("WAWebHandleMsgMetaUtils").isCommentMsgMeta(msgMeta)) {
                    o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "found comment revoke"
                    ])));
                    protocolMessageKey = o("WAWebE2EProtoUtils").translateAddonMessageKeyToLocalReference(key, baseMessage);
                } else {
                    protocolMessageKey = o("WAWebE2EProtoUtils").translateRegularMessageKeyToLocalReference(key, baseMessage);
                }
                if (protocolMessageKey == null) {
                    o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "missing a revoke message key ",
                        " (",
                        ") for ",
                        " from ",
                        " for ",
                        ""
                    ])), key?.id, !!key, baseMessage.id, baseMessage.author, type);
                    throw new c("protocol_revoke_missing_key", o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_PROTOCOL_BUFFER);
                }
                let subtype;
                if (editAttr === o("WAWebAck").EDIT_ATTR.ADMIN_REVOKE) {
                    subtype = "admin_revoke";
                } else if (editAttr === o("WAWebAck").EDIT_ATTR.SENDER_REVOKE) {
                    subtype = "sender_revoke";
                } else {
                    throw new c("protocol_revoke_missing_edit_attr", o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_PROTOCOL_BUFFER);
                }
                try {
                    return {
                        msgData: babelHelpers.extends({}, baseMessage, {
                            type: o("WAWebMsgType").MSG_TYPE.PROTOCOL,
                            kind: o("WAWebMsgType").MsgKind.ProtocolRevoke,
                            subtype,
                            protocolMessageKey
                        }),
                        contextInfo: null
                    };
                } catch (error) {
                    const y = r("getErrorSafe")(error);
                    o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "parseProtocolRevokeMessageProto: error:",
                        ", stack: ",
                        ""
                    ])), y.name, y.stack).tags("messaging").sendLogs("ProtocolRevokeParseError");
                    throw y;
                }
            }
        }
    }
    l.ProtocolRevokeMessageValidationError = c;
    l.parseProtocolRevokeMessageProto = d;
}, 98);