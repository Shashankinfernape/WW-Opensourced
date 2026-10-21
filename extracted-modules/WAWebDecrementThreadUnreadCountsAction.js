__d("WAWebDecrementThreadUnreadCountsAction", [
    "WAWebAck",
    "WAWebThreadId",
    "WAWebThreadMetadataBulkJob",
    "WAWebThreadMsgUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
        const t = new Map;
        for (const n of e){
            if (!n.id.fromMe && n.ack < o("WAWebAck").ACK.READ) {
                const r = o("WAWebThreadMsgUtils").getMsgAiThread(n);
                if (r != null) {
                    const i = r.toString();
                    const l = t.get(i) ?? 0;
                    t.set(i, l + 1);
                }
            }
        }
        return t;
    }
    function s(e, t) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (e.size !== 0) {
                const n = yield o("WAWebThreadMetadataBulkJob").bulkIncrementThreadUnreadCount(Array.from(e, function([t, n]) {
                    return {
                        threadId: r("WAWebThreadId").from(t),
                        delta: -n
                    };
                }));
                for (const a of n){
                    const { threadId, unreadCount } = a;
                    const s = t.get(threadId);
                    if (s != null) {
                        s.set({
                            unreadCount
                        });
                    }
                }
            }
        });
        return u.apply(this, arguments);
    }
    l.getThreadUnreadDeltasFromMessages = e;
    l.decrementThreadUnreadCountsAction = s;
}, 98);