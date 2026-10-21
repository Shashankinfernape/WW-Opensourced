__d("WAWebBulkCreateOrUpdateThreadsMetadata", [
    "WAWebGetUpdatedThreadMetadataRecord",
    "WAWebModelStorageUtils",
    "WAWebThreadsMetadataIdUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
        return o("WAWebModelStorageUtils").getStorage().lock([
            "thread-metadata"
        ], (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*([n]) {
                if (e.length !== 0) {
                    const r = yield n.bulkGet(e.map((e)=>o("WAWebThreadsMetadataIdUtils").craftThreadMetadataDBId(e.threadId)));
                    const a = e.map((e, t)=>{
                        const n = r[t];
                        return o("WAWebGetUpdatedThreadMetadataRecord").getUpdatedThreadMetadataRecord(e, n);
                    });
                    return n.bulkCreateOrMerge(a);
                }
            });
            return function(e) {
                return t.apply(this, arguments);
            };
        })());
    }
    l.bulkCreateOrUpdateThreadsMetadata = e;
}, 98);