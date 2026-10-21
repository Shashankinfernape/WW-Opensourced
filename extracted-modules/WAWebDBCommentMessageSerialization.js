__d("WAWebDBCommentMessageSerialization", [
    "WAWebDBMessageSerialization",
    "WAWebMsgGetters",
    "WAWebMsgKey",
    "WAWebMsgKeyUtils",
    "WAWebMsgType",
    "WAWebViewMode.flow",
    "WAWebWidFactory",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = babelHelpers.extends({}, e);
        o("WAWebDBMessageSerialization").movEncFieldToOpaqueData(t);
        return babelHelpers.extends({}, t, {
            msgKey: t.id.toString(),
            parentMsgKey: t.parentMsgKey.toString(),
            sender: t.author.toString()
        });
    }
    function s(e) {
        return {
            msgKey: e.id.toString(),
            sender: r("nullthrows")(o("WAWebMsgGetters").getSender(e), "undefined sender").toString(),
            parentMsgKey: e.parentMsgKey.toString(),
            t: o("WAWebMsgGetters").getT(e),
            ack: o("WAWebMsgGetters").getAck(e) ?? undefined,
            read: e.read,
            isOverwrittenByRevoke: true,
            subtype: e.subtype,
            revokeTimestamp: e.revokeTimestamp,
            protocolMessageKey: e.protocolMessageKey.toString()
        };
    }
    function u(e) {
        return {
            isPlaceholder: true,
            msgKey: e.id.toString(),
            sender: r("nullthrows")(o("WAWebMsgGetters").getSender(e), "undefined sender").toString(),
            parentMsgKey: e.parentMsgKey.toString(),
            read: e.read,
            t: o("WAWebMsgGetters").getT(e)
        };
    }
    function c(e) {
        const n = r("WAWebMsgKey").from(e.msgKey);
        const a = r("WAWebMsgKey").from(e.parentMsgKey);
        const i = babelHelpers.extends({
            id: n,
            parentMsgKey: a,
            ack: e.ack,
            t: e.t
        }, o("WAWebMsgKeyUtils").msgKeyToTargetInfo(n, o("WAWebMsgKeyUtils").TranslateMsgKeyType.Addon), {
            viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE
        });
        if (e.isOverwrittenByRevoke === true) {
            return babelHelpers.extends({}, i, {
                type: o("WAWebMsgType").MSG_TYPE.REVOKED,
                kind: o("WAWebMsgType").MsgKind.RevokedAddon,
                subtype: r("nullthrows")(e.subtype),
                revokeAddonType: o("WAWebMsgType").MSG_TYPE.COMMENT,
                revokeTimestamp: e.revokeTimestamp ?? undefined,
                protocolMessageKey: r("WAWebMsgKey").from(r("nullthrows")(e.protocolMessageKey, "undefined protocolMessageKey"))
            });
        }
        if (e.isPlaceholder === true) {
            return babelHelpers.extends({}, i, {
                type: o("WAWebMsgType").MSG_TYPE.CIPHERTEXT,
                kind: o("WAWebMsgType").MsgKind.PlaceholderAddon,
                realType: o("WAWebMsgType").MSG_TYPE.COMMENT
            });
        }
        const s = babelHelpers.extends({}, e);
        o("WAWebDBMessageSerialization").movFieldFromOpaqueDataBackToMsg(s);
        return babelHelpers.extends({}, i, {
            type: o("WAWebMsgType").MSG_TYPE.COMMENT,
            kind: o("WAWebMsgType").MsgKind.CommentDecrypted,
            from: o("WAWebWidFactory").createUserWidOrThrow(s.sender),
            body: s.body,
            author: o("WAWebWidFactory").createUserWidOrThrow(s.sender),
            read: e.read ?? false
        });
    }
    l.dbRowFromCommentMessage = e;
    l.dbRowFromRevokedMsgData = s;
    l.dbRowFromPlaceholderAddon = u;
    l.commentMessageFromDbRow = c;
}, 98);