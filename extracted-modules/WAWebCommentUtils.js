__d("WAWebCommentUtils", [
    "WAWebAddonEncryption",
    "WAWebAddonEncryptionError",
    "WAWebApiUpdateReplyCount",
    "WAWebBackendApi",
    "WAWebCommentGroupBy",
    "WAWebCommentMsgDataConversion",
    "WAWebMsgGetters",
    "WAWebMsgKeyUtils",
    "WAWebMsgType",
    "WAWebProcessCommentMsg",
    "WAWebReferentialMsgKey",
    "WAWebSchemaChat",
    "WAWebViewMode.flow",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = new Map;
            for (const n of e){
                const a = n.id.remote.toString();
                const i = n.t;
                if (i != null) {
                    const l = t.get(a);
                    t.set(a, {
                        id: a.toString(),
                        t: Math.max(i, l?.t ?? 0),
                        unreadCount: l?.unreadCount != null ? l.unreadCount + 1 : 1
                    });
                }
            }
            for (const [u, c] of t.entries()){
                const d = yield o("WAWebSchemaChat").getChatTable().get(u);
                if (d != null && c.unreadCount != null) {
                    c.unreadCount += d.unreadCount;
                }
            }
            const m = Array.from(t.values());
            return m;
        });
        return s.apply(this, arguments);
    }
    function u(e, t, n) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            const a = self.crypto.getRandomValues(new Uint8Array(12));
            const i = {
                type: o("WAWebMsgType").MsgKind.CommentDecrypted,
                encode: n
            };
            const l = o("WAWebAddonEncryptionError").getValidatedMessageSecret(o("WAWebMsgType").MsgKind.CommentDecrypted, e);
            const s = yield o("WAWebAddonEncryption").encryptAddOn(i, {
                messageSecret: l,
                iv: a,
                originalMessageSender: o("WAWebWidFactory").asUserWidOrThrow(r("nullthrows")(o("WAWebMsgGetters").getSender(e))),
                addOnSender: o("WAWebWidFactory").asUserWidOrThrow(t),
                stanzaId: e.id.id
            });
            const { encPayload, reportingTokenContentInfo } = s;
            return {
                encIv: a.buffer,
                encPayload,
                targetMessageKey: o("WAWebReferentialMsgKey").getReferentialMsgKey(e),
                reportingTokenContentInfo
            };
        });
        return c.apply(this, arguments);
    }
    function d(e, t, n) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            const replyCountMap = o("WAWebCommentGroupBy").commentCountByParents(e, n);
            yield o("WAWebApiUpdateReplyCount").updateReplyCountInParentMsgs(replyCountMap, t);
            o("WAWebBackendApi").frontendFireAndForget("updateReplyCount", {
                replyCountMap
            });
        });
        return m.apply(this, arguments);
    }
    function p(e, t) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = yield o("WAWebProcessCommentMsg").processEncCommentMsg(e, t);
            return o("WAWebCommentMsgDataConversion").convertMessageToCommentMsgData(n, e);
        });
        return _.apply(this, arguments);
    }
    function f(e, t) {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = {
                conversation: e.body
            };
            if (e.messageSecret != null) {
                n.messageContextInfo = {
                    messageSecret: e.messageSecret.buffer,
                    threadId: []
                };
            }
            const a = o("WAWebWidFactory").asUserWidOrThrow(r("nullthrows")(o("WAWebMsgGetters").getSender(e)));
            return babelHelpers.extends({
                id: e.id
            }, o("WAWebMsgKeyUtils").msgKeyToTargetInfo(e.id, o("WAWebMsgKeyUtils").TranslateMsgKeyType.Addon), (yield u(t, a, n)), {
                type: o("WAWebMsgType").MSG_TYPE.COMMENT,
                kind: o("WAWebMsgType").MsgKind.CommentEncrypted,
                viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
                t: e.t,
                addonEncrypted: true,
                ack: e.ack,
                messageSecret: e.messageSecret
            });
        });
        return g.apply(this, arguments);
    }
    l.genChatIdToLastTimestamp = e;
    l.getEncCommentsFields = u;
    l.updateReplyCount = d;
    l.encCommentMsgDataToCommentMsgData = p;
    l.commentMsgDataToEncCommentMsgData = f;
}, 98);