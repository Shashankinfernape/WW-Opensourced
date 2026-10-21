__d("WAWebSyncdGetThread", [
    "WALogger",
    "WAWebSchemaThreadsMetadata",
    "WAWebSyncdConst",
    "WAWebThreadsMetadataIdUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    function s(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const n = o("WAWebThreadsMetadataIdUtils").craftThreadMetadataDBId(t);
            const thread = yield o("WAWebSchemaThreadsMetadata").getThreadsMetadataTable().get(n);
            if (thread == null) {
                return {
                    success: false,
                    orphanModel: {
                        modelId: t.toString(),
                        modelType: o("WAWebSyncdConst").SyncModelType.Thread
                    }
                };
            }
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[syncd] resolveThreadForMutationIndex: thread found"
            ])));
            return {
                success: true,
                thread
            };
        });
        return u.apply(this, arguments);
    }
    l.resolveThreadForMutationIndex = s;
}, 98);