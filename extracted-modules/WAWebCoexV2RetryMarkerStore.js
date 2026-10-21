__d("WAWebCoexV2RetryMarkerStore", [
    "WAWebModelStorageUtils",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const a = u(e, t);
            return o("WAWebModelStorageUtils").getStorage().lock([
                "message-info"
            ], (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*([t]) {
                    if ((yield t.get(a)) == null) {
                        throw r("err")("[coexv2] missing agent message-info row for retry marker");
                    }
                    yield t.merge(a, {
                        hasAdditionalRetryTargets: true
                    });
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })());
        });
        return s.apply(this, arguments);
    }
    function u(e, t) {
        return [
            e.toString(),
            o("WAWebWidFactory").asUserWidOrThrow(t).toString()
        ];
    }
    l.markCoexV2RepresentedTargets = e;
}, 98);