__d("WAWebThreadWriteThroughAction", [
    "WAWebThreadModelResolver",
    "WAWebThreadMsgUtils"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
        const n = t.filter(o("WAWebThreadMsgUtils").isThreadMsg);
        if (n.length !== 0) {
            for (const r of n){
                const a = r.threadIds;
                if (a != null) {
                    for (const i of a){
                        const l = o("WAWebThreadModelResolver").getThreadModel(e, i);
                        if (l != null && r.getMsgChunk(i) == null) {
                            l.msgs.add(r);
                        }
                    }
                }
            }
        }
    }
    l.writeThroughToLiveThreads = e;
}, 98);