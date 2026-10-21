__d("WAWebDBEventInvalidateChatEvents", [
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
                yield n.bulkCreateOrMerge(r.filter((e)=>e.type === o("WAWebMsgType").MSG_TYPE.EVENT_CREATION && !e.eventInvalidated).map((e)=>({
                        id: e.id,
                        eventInvalidated: true
                    })));
            });
            return function(e) {
                return t.apply(this, arguments);
            };
        })());
    }
    l.invalidateChatEvents = e;
}, 98);