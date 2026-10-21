__d("WAWebQueryFrequentlyContactedMsgCount", [
    "Promise",
    "WAJobOrchestratorTypes",
    "WAWebDBMessageRangeIndex",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebSchemaMessage",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = "~";
    function u({ chatIds, sinceTs }) {
        return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("queryFrequentlyContactedMsgCount", function(e) {
            return c(e.chatIds, e.sinceTs);
        }, {
            priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.SKIP
        }).waitUntilCompleted({
            chatIds,
            sinceTs
        });
    }
    function c(e, t) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, r) {
            const a = o("WAWebSchemaMessage").getMessageTable();
            const i = yield (e || (e = n("Promise"))).all(t.map((()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                    const t = o("WAWebDBMessageRangeIndex").craftMessageRangeIndex(e, false, false, r);
                    const n = `${o("WAWebDBMessageRangeIndex").craftMessageRangeIndex(e, false, false, null)}${s}`;
                    const count = yield a.betweenCount([
                        "messageRangeIndex"
                    ], t, n, {
                        lowerInclusive: true,
                        upperInclusive: true
                    });
                    return {
                        chatId: e,
                        count
                    };
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })()));
            const l = new Map;
            for (const u of i){
                const { chatId, count } = u;
                if (count > 0) {
                    l.set(chatId, count);
                }
            }
            return l;
        });
        return d.apply(this, arguments);
    }
    l.queryFrequentlyContactedMsgCountJob = u;
}, 98);