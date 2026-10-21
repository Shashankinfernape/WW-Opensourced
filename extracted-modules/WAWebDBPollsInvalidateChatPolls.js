__d("WAWebDBPollsInvalidateChatPolls", [
    "WAWebDBMessageUtils",
    "WAWebModelStorageUtils",
    "WAWebMsgType",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return o("WAWebModelStorageUtils").getStorage().lock([
            "message"
        ], (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*([n]) {
                const r = yield n.between([
                    "internalId"
                ], o("WAWebDBMessageUtils").beginningOfChat(e), o("WAWebDBMessageUtils").endOfChat(e));
                yield n.bulkCreateOrMerge(r.filter((e)=>e.type === o("WAWebMsgType").MSG_TYPE.POLL_CREATION && !e.pollInvalidated).map((e)=>({
                        id: e.id,
                        pollInvalidated: true
                    })));
            });
            return function(e) {
                return t.apply(this, arguments);
            };
        })());
    }
    l.invalidateChatPolls = e;
}, 98);