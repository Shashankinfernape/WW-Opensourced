__d("WAWebFtsLightClient", [
    "Promise",
    "WAWebFtsStorage",
    "WAWebRuntimeEnvironmentUtils",
    "WAWebSchemaFtsIndexingQueue",
    "WAWebWorkerSafeBackendApi",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s = null;
    function u() {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (s == null) {
                s = yield o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive("getFtsClientInstance");
            }
            return s;
        });
        return c.apply(this, arguments);
    }
    function d(e) {
        return o("WAWebSchemaFtsIndexingQueue").getFtsIndexingQueueTable().bulkCreateOrReplace(e.map((e)=>({
                id: e
            })));
    }
    function m(e) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (o("WAWebRuntimeEnvironmentUtils").isWorker()) {
                return o("WAWebFtsStorage").getIndexV3Table().bulkRemoveByIndex([
                    "id"
                ], e);
            }
            const t = s ?? (yield u());
            yield t.purge(e);
        });
        return p.apply(this, arguments);
    }
    function _() {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (o("WAWebRuntimeEnvironmentUtils").isWorker()) {
                return (e || (e = n("Promise"))).resolve();
            }
            const t = s ?? (yield u());
            yield t.index();
        });
        return f.apply(this, arguments);
    }
    const g = {
        purge: m,
        index: _,
        addToIndexingTable: d
    };
    l.ftsLightClient = g;
}, 98);