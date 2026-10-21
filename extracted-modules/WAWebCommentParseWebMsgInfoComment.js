__d("WAWebCommentParseWebMsgInfoComment", [
    "WALogger",
    "WALongInt",
    "WAWebAddOnParseWebMsgInfo",
    "WAWebCommentMsgDataConversion",
    "WAWebMsgKeyUtils",
    "WAWebMsgType",
    "WAWebParseWebMessageInfoUtils",
    "WAWebViewMode.flow",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u({ webMsgInfo: a }) {
        const i = a?.message?.commentMessage;
        const l = a?.commentMetadata;
        const c = [];
        if (a == null || l?.commentParentKey == null) {
            return c;
        }
        const d = r("nullthrows")(o("WAWebAddOnParseWebMsgInfo").buildAddonMsgKey({
            key: a.key,
            outerParticipant: a.participant
        }));
        const m = d.msgKey;
        const p = r("nullthrows")(a.messageTimestamp);
        let _;
        if (i?.message != null) {
            _ = o("WAWebCommentMsgDataConversion").extractCommentTextFromMessage(i.message);
        }
        if (_ == null) {
            const f = r("nullthrows")(o("WAWebParseWebMessageInfoUtils").buildMsgKey(a, r("nullthrows")(l?.commentParentKey)));
            const g = f.msgKey;
            try {
                const h = o("WAWebParseWebMessageInfoUtils").parseMsgStubProto(a, u);
                const y = babelHelpers.extends({
                    id: m,
                    parentMsgKey: g
                }, o("WAWebMsgKeyUtils").msgKeyToTargetInfo(m, o("WAWebMsgKeyUtils").TranslateMsgKeyType.Addon), {
                    revokeAddonType: o("WAWebMsgType").MSG_TYPE.COMMENT,
                    protocolMessageKey: h.protocolMessageKey,
                    subtype: h.subtype,
                    kind: o("WAWebMsgType").MsgKind.RevokedAddon,
                    revokeTimestamp: o("WALongInt").numberOrThrowIfTooLarge(r("nullthrows")(a.revokeMessageTimestamp)),
                    type: o("WAWebMsgType").MSG_TYPE.REVOKED,
                    viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
                    t: o("WALongInt").numberOrThrowIfTooLarge(p)
                });
                c.push(y);
            } catch (t) {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[parseWebMsgInfoComment] has revoke stub ",
                    ", parameters ",
                    ""
                ])), !!a.messageStubType, a.messageStubParameters?.length);
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[parseWebMsgInfoComment] revoke parse failed ",
                    " err=",
                    ""
                ])), a.key.id, t).sendLogs("parse-comment-revoke", {
                    sampling: 0.01
                });
            }
        } else if (i != null) {
            const b = r("nullthrows")(i.targetMessageKey);
            const v = r("nullthrows")(o("WAWebParseWebMessageInfoUtils").buildMsgKey(a, b));
            const S = v.msgKey;
            c.push(babelHelpers.extends({
                id: m,
                parentMsgKey: S
            }, o("WAWebMsgKeyUtils").msgKeyToTargetInfo(m, o("WAWebMsgKeyUtils").TranslateMsgKeyType.Addon), {
                body: _,
                type: o("WAWebMsgType").MSG_TYPE.COMMENT,
                read: true,
                kind: o("WAWebMsgType").MsgKind.CommentDecrypted,
                viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
                t: o("WALongInt").numberOrThrowIfTooLarge(p)
            }));
        }
        return c;
    }
    l.parseWebMsgInfoComment = u;
}, 98);