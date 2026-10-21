__d("WAWebApiDeferredMessagesStorage", [
    "WAWebSchemaDeferredMessagesStorage",
    "WAWebWorkerStorageUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e() {
        return o("WAWebSchemaDeferredMessagesStorage").getTable().all().then((e)=>e.map((e)=>({
                    id: e.id,
                    type: e.type,
                    plaintext: e.plaintext,
                    info: e.info,
                    paymentInfo: e.paymentInfo,
                    bizInfo: e.bizInfo
                })));
    }
    function s(e) {
        const t = e.map((e)=>({
                id: e.id,
                type: e.type,
                plaintext: e.plaintext,
                info: e.info,
                paymentInfo: e.paymentInfo,
                bizInfo: e.bizInfo
            }));
        return o("WAWebWorkerStorageUtils").getStorage().lock([
            "deferred_messages"
        ], (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*([n]) {
                yield n.bulkCreateOrReplace(t);
            });
            return function(t) {
                return e.apply(this, arguments);
            };
        })());
    }
    function u(e) {
        return o("WAWebSchemaDeferredMessagesStorage").getTable().remove(e);
    }
    l.getDeferredMessages = e;
    l.updateDeferredMessages = s;
    l.deleteDeferredMessage = u;
}, 98);