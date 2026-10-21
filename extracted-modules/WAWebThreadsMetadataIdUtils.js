__d("WAWebThreadsMetadataIdUtils", [
    "WALogger",
    "WAWebMsgKey",
    "WAWebOrderPreservingHex",
    "WAWebProtobufsE2E.pb",
    "WAWebThreadUtils",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(t) {
        const t_key = t.key;
        if (t_key instanceof r("WAWebMsgKey")) {
            return t_key.toString();
        }
        o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "threadMetadataDBId: key is not a WAWebMsgKey, type=",
            ""
        ])), t.type).sendLogs("thread-metadata-db-id: non-MsgKey-key");
        try {
            return r("WAWebMsgKey").from(t_key).toString();
        } catch (e) {
            return t_key.toString();
        }
    }
    function u(e) {
        const t = o("WAWebThreadUtils").getThreadsTypeAsE2EValue(e.type);
        if (t !== o("WAWebProtobufsE2E.pb").ThreadID$ThreadType.AI_THREAD) {
            throw r("err")("craftAiThreadDBId error: threadTypeEnum must be AI_THREAD");
        }
        return `${String(t)}_${s(e)}`;
    }
    function c(e) {
        const t = o("WAWebThreadUtils").getThreadsTypeAsE2EValue(e.type);
        if (t !== o("WAWebProtobufsE2E.pb").ThreadID$ThreadType.VIEW_REPLIES) {
            throw r("err")("craftViewRepliesThreadDBId error: threadTypeEnum must be VIEW_REPLIES");
        }
        return `${String(t)}_${s(e)}`;
    }
    function d(e) {
        const t = o("WAWebThreadUtils").getThreadsTypeAsE2EValue(e.type);
        return `${String(t)}_${s(e)}`;
    }
    function m(e, t, n) {
        const r = o("WAWebThreadUtils").getThreadsTypeAsE2EValue(e);
        const a = o("WAWebOrderPreservingHex").orderPreservingHex(n);
        return `${String(r)}_${t}_${a}`;
    }
    function p(e, t) {
        const n = o("WAWebThreadUtils").getThreadsTypeAsE2EValue(t);
        return `${String(n)}_${e}_`;
    }
    l.craftAiThreadDBId = u;
    l.craftViewRepliesThreadDBId = c;
    l.craftThreadMetadataDBId = d;
    l.craftThreadsMetadataInternalId = m;
    l.craftThreadsMetadataInternalIdPrefixForChatAndThreadType = p;
}, 98);