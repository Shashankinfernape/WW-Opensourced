__d("WAWebThreadMsgUtils", [
    "WALogger",
    "WAWebThreadUtils"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    function s(e, t) {
        if (e.threadIds == null) {
            return false;
        }
        return e.threadIds.some((e)=>e.equals(t));
    }
    function u(e) {
        return e.threadIds != null && e.threadIds.length > 0;
    }
    function c(t) {
        if (!t.id.remote.isBot()) {
            return null;
        }
        const r = t.threadIds?.filter(function(e) {
            return e.type === o("WAWebThreadUtils").ThreadType.AiThread;
        });
        if (r == null || r.length === 0) {
            return null;
        }
        if (r.length > 1) {
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "getMsgAiThread: multiple ai threads found for msg"
            ]))).sendLogs("getMsgAiThread: more than one ai thread found for msg");
        }
        return r[0];
    }
    function d(e) {
        return m(e.threadIds);
    }
    function m(e) {
        return e?.some(function(e) {
            return e.type === o("WAWebThreadUtils").ThreadType.AiThread;
        }) === true;
    }
    function p(e) {
        return _(e.threadIds);
    }
    function _(e) {
        return e?.find(function(e) {
            return e.type === o("WAWebThreadUtils").ThreadType.ViewAllReplies;
        }) ?? null;
    }
    function f(e, t) {
        return t.key.equals(e.id);
    }
    l.isMsgInThread = s;
    l.isThreadMsg = u;
    l.getMsgAiThread = c;
    l.msgHasAiThread = d;
    l.threadsContainAiThread = m;
    l.getMsgViewAllRepliesThread = p;
    l.getViewAllRepliesThreadId = _;
    l.isMsgRootOfThread = f;
}, 98);