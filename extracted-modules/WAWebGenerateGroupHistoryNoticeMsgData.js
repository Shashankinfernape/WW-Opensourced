__d("WAWebGenerateGroupHistoryNoticeMsgData", [
    "WALogger",
    "WATimeUtils",
    "WAWebAck",
    "WAWebCommonMsgSubtypeTypes",
    "WAWebGroupHistoryGating",
    "WAWebLidMeUserForChat",
    "WAWebMsgKey",
    "WAWebMsgKeyUtils",
    "WAWebMsgType",
    "WAWebViewMode.flow",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    function s(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chat, groupHistoryBundleMetadata }) {
            if (!o("WAWebGroupHistoryGating").isGroupHistorySenderEnabled(o("WAWebWidFactory").asGroupWidOrThrow(chat.id))) {
                throw r("err")("[group-history] Group history sender is not enabled");
            }
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[group-history] generating notice msg data"
            ])));
            const i = o("WAWebLidMeUserForChat").getMeUserLidOrJidForChat(chat, o("WAWebMsgKeyUtils").TranslateMsgKeyType.Message);
            const l = new (r("WAWebMsgKey"))({
                fromMe: true,
                remote: chat.id,
                id: yield r("WAWebMsgKey").newId(),
                participant: i
            });
            return babelHelpers.extends({
                id: l
            }, o("WAWebMsgKeyUtils").msgKeyToTargetInfo(l, o("WAWebMsgKeyUtils").TranslateMsgKeyType.Message), {
                type: o("WAWebMsgType").MSG_TYPE.MESSAGE_HISTORY_NOTICE,
                subtype: o("WAWebCommonMsgSubtypeTypes").MsgSubtype.MessageHistoryNotice,
                kind: o("WAWebMsgType").MsgKind.MessageHistoryNotice,
                viewMode: o("WAWebViewMode.flow").ViewModeType.HIDDEN,
                t: o("WATimeUtils").unixTime(),
                isNewMsg: true,
                local: true,
                ack: o("WAWebAck").ACK.CLOCK,
                groupHistoryBundleMetadata
            });
        });
        return u.apply(this, arguments);
    }
    l.generateGroupHistoryNoticeMsgData = s;
}, 98);