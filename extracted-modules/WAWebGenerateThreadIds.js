__d("WAWebGenerateThreadIds", [
    "WAWebProtobufMsgKeyUtils",
    "WAWebThreadUtils"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e({ threadIds }) {
        if (!(threadIds == null || threadIds.length === 0)) {
            return threadIds.map((e)=>({
                    threadType: o("WAWebThreadUtils").getThreadsTypeAsE2EValue(e.type),
                    threadKey: o("WAWebProtobufMsgKeyUtils").msgKeyToProtobuf(e.key)
                }));
        }
    }
    l.generateThreadIds = e;
}, 98);