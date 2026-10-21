__d("WAWebParseListResponseMessageProto", [
    "WALogger",
    "WAWebE2EProtoUtils",
    "WAWebMsgType",
    "WAWebProtobufsE2E.pb"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = 256;
    const u = 1024;
    function c({ baseMessage: t, messageProtobuf: n }) {
        const r = n.listResponseMessage;
        if (r != null && r.listType === o("WAWebProtobufsE2E.pb").Message$ListResponseMessage$ListType.SINGLE_SELECT) {
            if (d(r)) {
                return {
                    msgData: babelHelpers.extends({}, t, {
                        type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
                        kind: o("WAWebMsgType").MsgKind.Unknown,
                        subtype: "phone_only_feature"
                    }),
                    contextInfo: r.contextInfo
                };
            }
            const a = babelHelpers.extends({}, r, {
                contextInfo: void 0
            });
            let i = r.title || "";
            if (r.description != null && r.description !== "") {
                i += `
${r.description}`;
            }
            const l = babelHelpers.extends({}, t, {
                type: o("WAWebMsgType").MSG_TYPE.LIST_RESPONSE,
                kind: o("WAWebMsgType").MsgKind.ListResponse,
                listResponse: a,
                body: o("WAWebE2EProtoUtils").convertToTextWithoutSpecialEmojis(i)
            });
            return {
                msgData: l,
                contextInfo: r.contextInfo
            };
        }
    }
    function d(t) {
        const l = t.title?.length ?? 0;
        const c = t.description?.length ?? 0;
        if (l <= s && c <= u) {
            return false;
        }
        o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "[List response] over protocol limit: title ",
            ", description ",
            ""
        ])), l, c).sendLogs("wa-web-list-response-over-limit");
        return true;
    }
    l.default = c;
}, 98);