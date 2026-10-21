__d("WAWebParseMessageHistoryNoticeProto", [
    "WALogger",
    "WAWebCommonMsgSubtypeTypes",
    "WAWebGroupHistoryMsgData.flow",
    "WAWebMessageHistoryValidation",
    "WAWebMsgType",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "WAWebWidFactory"
], function(t, n, r, o, a, i, l) {
    let e;
    function s({ baseMessage: a, messageProtobuf: i }) {
        const l = i.messageHistoryNotice;
        if (l == null) {
            return null;
        }
        o("WAWebMessageHistoryValidation").validateMessageHistoryNotice(l);
        const s = l.contextInfo ?? null;
        const c = u(l.messageHistoryMetadata);
        const d = l.messageHistoryMetadata?.historyReceivers?.some(function(e) {
            return o("WAWebUserPrefsMeUser").isMeAccount(o("WAWebWidFactory").createWid(e));
        });
        if (d === false && a.id.fromMe === false) {
            if (l.messageHistoryMetadata?.oldestMessageTimestampInWindow == null) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[GroupHistory] oldestMessageTimestampInWindow is null"
                ])));
                return null;
            }
            return {
                msgData: babelHelpers.extends({}, a, {
                    type: o("WAWebMsgType").MSG_TYPE.MESSAGE_HISTORY_NOTICE,
                    kind: o("WAWebMsgType").MsgKind.MessageHistoryNotice,
                    subtype: "message_history_notice",
                    viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
                    groupHistoryBundleMetadata: c
                }),
                contextInfo: s
            };
        }
        if (a.id.fromMe === true) {
            return {
                msgData: babelHelpers.extends({}, a, {
                    type: o("WAWebMsgType").MSG_TYPE.MESSAGE_HISTORY_NOTICE,
                    kind: o("WAWebMsgType").MsgKind.MessageHistoryNotice,
                    subtype: o("WAWebCommonMsgSubtypeTypes").MsgSubtype.MessageHistoryNotice,
                    viewMode: o("WAWebViewMode.flow").ViewModeType.HIDDEN,
                    groupHistoryBundleMetadata: c
                }),
                contextInfo: s
            };
        }
        return {
            msgData: babelHelpers.extends({}, a, {
                type: o("WAWebMsgType").MSG_TYPE.MESSAGE_HISTORY_NOTICE,
                kind: o("WAWebMsgType").MsgKind.MessageHistoryNotice,
                subtype: o("WAWebCommonMsgSubtypeTypes").MsgSubtype.MessageHistoryNotice,
                viewMode: o("WAWebViewMode.flow").ViewModeType.HIDDEN
            }),
            contextInfo: s
        };
    }
    function u(e) {
        if (e == null) {
            return null;
        }
        return babelHelpers.extends({}, e, {
            historyReceivers: (e.historyReceivers ?? []).map(o("WAWebWidFactory").createWid),
            processState: o("WAWebGroupHistoryMsgData.flow").MessageHistoryBundleProcessState.NONE,
            nonHistoryReceivers: (e.nonHistoryReceivers ?? []).map(o("WAWebWidFactory").createWid)
        });
    }
    l.default = s;
}, 98);