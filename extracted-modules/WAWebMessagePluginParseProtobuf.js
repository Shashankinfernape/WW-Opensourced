__d("WAWebMessagePluginParseProtobuf", [
    "WALogger",
    "WAWebMsgType",
    "WAWebMultipleMessageParserPluginParseProtobuf",
    "WAWebProtobufsE2E.pb",
    "WAWebProtocolRevokeMessageUtils",
    "WAWebWamEnumE2eFailureReason",
    "WAWebWamEnumEditType",
    "cr:37444",
    "gkx",
    "isStringNullOrEmpty",
    "justknobx"
], function(t, n, r, o, a, i, l) {
    let s;
    let u;
    const c = n("cr:37444") ?? [];
    function d(e) {
        const a = o("WAWebMultipleMessageParserPluginParseProtobuf").parseProtobufWithMultipleMessageParserPlugin(e);
        let a_result = a.result;
        if ((!r("gkx")("26258") || r("justknobx")._("2517")) && e.msgContext === "relay" && e?.messageProtobuf?.protocolMessage?.type === o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type.MESSAGE_EDIT) {
            if (e.editAttr !== o("WAWebWamEnumEditType").EDIT_TYPE.EDITED && r("isStringNullOrEmpty")(e?.msgBotInfo?.botEditType ?? "")) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[message-edit] edit protocol msg with incorrect attribute"
                ]))).sendLogs("message-edit-incorrect-edit-attribute");
                return null;
            }
        }
        const a_pluginsMatched = a.pluginsMatched;
        const _ = [];
        for (const f of c){
            const g = f(e);
            if (g != null) {
                a_pluginsMatched.push(`${g.msgData.type}:${g.msgData.subtype ?? "null"}`);
                _.push(g);
                if (a_result == null) {
                    a_result = g;
                }
            }
        }
        if (a_pluginsMatched.length === 0 && a_result === undefined && e?.msgContext === "relay" && e?.messageProtobuf?.protocolMessage?.type === o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type.REVOKE) {
            throw new (o("WAWebProtocolRevokeMessageUtils")).ProtocolRevokeMessageValidationError("protocol_revoke_missing_edit_attr", o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_PROTOCOL_BUFFER);
        }
        if (a_pluginsMatched.length > 1) {
            const y = m(e.msgContext, a_pluginsMatched, _);
            return y ?? (o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "parseProtoPlugins: Matched more than 1 plugin types ",
                ""
            ])), a_pluginsMatched.join(",")).sendLogs("parse-protobuf-unexpected-plugin-match"), null);
        }
        return a_result;
    }
    function m(msgContext, t, n) {
        if (msgContext !== "quoted" && msgContext !== "history_quoted" || t.length !== 2 || n.length !== 2) {
            return null;
        }
        const a = n.filter(({ msgData })=>msgData.type !== o("WAWebMsgType").MSG_TYPE.CHAT || msgData.subtype != null);
        if (a.length !== 1 || !r("gkx")("26022")) {
            return null;
        }
        return a[0];
    }
    l.parseProtobuf = d;
}, 98);