__d("WAWebCrosspostingDBOperations", [
    "Promise",
    "WAWebCrossposting.flow",
    "WAWebCrosspostingSchema",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e) {
        return o("WAWebCrosspostingSchema").getTable().createOrReplace(e);
    }
    function u(e, t) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            return o("WAWebCrosspostingSchema").getTable().get([
                e,
                t
            ]);
        });
        return c.apply(this, arguments);
    }
    function d(e) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield o("WAWebCrosspostingSchema").getTable().anyOf([
                "statusMessageId"
            ], [
                e
            ]);
            return t.map((e)=>e.crosspostingStatusUniqueId);
        });
        return m.apply(this, arguments);
    }
    function p({ crosspostingDestination, crosspostingState, directUrlPath, statusMessageId, uniqueId }) {
        if (crosspostingState === o("WAWebCrossposting.flow").CrosspostingState.SUCCESS) {
            if (directUrlPath == null) {
                return (e || (e = n("Promise"))).reject(r("err")("directUrlPath is required when crosspostingState is CROSSPOSTING_REQUEST_SUCCESS"));
            }
            return o("WAWebCrosspostingSchema").getTable().createOrMerge([
                statusMessageId,
                crosspostingDestination
            ], {
                statusMessageId,
                crosspostingDestination,
                crosspostingStatusUniqueId: uniqueId,
                crosspostingState,
                directUrlPath
            });
        }
        return o("WAWebCrosspostingSchema").getTable().createOrMerge([
            statusMessageId,
            crosspostingDestination
        ], {
            statusMessageId,
            crosspostingDestination,
            crosspostingStatusUniqueId: uniqueId,
            crosspostingState
        });
    }
    function _(crosspostingStatusUniqueId, statusMessageId, crosspostingDestination) {
        return o("WAWebCrosspostingSchema").getTable().createOrMerge([
            statusMessageId,
            crosspostingDestination
        ], {
            statusMessageId,
            crosspostingDestination,
            crosspostingStatusUniqueId
        });
    }
    function f({ crosspostingDestination, directUrlPath, statusMessageId }) {
        return o("WAWebCrosspostingSchema").getTable().merge([
            statusMessageId,
            crosspostingDestination
        ], {
            statusMessageId,
            crosspostingDestination,
            directUrlPath
        });
    }
    function g({ crosspostingDestination, crosspostingState, directUrlPath, statusMessageId }) {
        if (crosspostingState === o("WAWebCrossposting.flow").CrosspostingState.SUCCESS) {
            if (directUrlPath == null) {
                return (e || (e = n("Promise"))).reject(r("err")("directUrlPath is required when crosspostingState is CROSSPOSTING_REQUEST_SUCCESS"));
            }
            return o("WAWebCrosspostingSchema").getTable().merge([
                statusMessageId,
                crosspostingDestination
            ], {
                statusMessageId,
                crosspostingDestination,
                crosspostingState,
                directUrlPath
            });
        }
        return o("WAWebCrosspostingSchema").getTable().merge([
            statusMessageId,
            crosspostingDestination
        ], {
            statusMessageId,
            crosspostingDestination,
            crosspostingState
        });
    }
    function h(e) {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            if (t.length !== 0) {
                const r = t.map((e)=>[
                        e.statusMessageId,
                        e.crosspostingDestination
                    ]);
                const a = yield o("WAWebCrosspostingSchema").getTable().bulkGet(r);
                const i = [];
                for(let l = 0; l < t.length; l++){
                    const s = t[l];
                    const u = a[l];
                    if (!(u == null || u.crosspostingStatusUniqueId !== s.uniqueId)) {
                        i.push(o("WAWebCrosspostingSchema").getTable().merge([
                            s.statusMessageId,
                            s.crosspostingDestination
                        ], {
                            statusMessageId: s.statusMessageId,
                            crosspostingDestination: s.crosspostingDestination,
                            crosspostingState: s.crosspostingState
                        }));
                    }
                }
                if (i.length > 0) {
                    yield (e || (e = n("Promise"))).all(i);
                }
            }
        });
        return y.apply(this, arguments);
    }
    function C(e) {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (e.length === 0) {
                return new Map;
            }
            const t = yield o("WAWebCrosspostingSchema").getTable().anyOf([
                "statusMessageId"
            ], e);
            const n = new Map;
            for (const r of t){
                let a = n.get(r.statusMessageId);
                if (a == null) {
                    a = new Map;
                    n.set(r.statusMessageId, a);
                }
                a.set(r.crosspostingDestination, {
                    crosspostingState: r.crosspostingState
                });
            }
            return n;
        });
        return b.apply(this, arguments);
    }
    function v(e) {
        return S.apply(this, arguments);
    }
    function S() {
        S = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const n = yield C([
                e
            ]);
            return n.get(e) ?? null;
        });
        return S.apply(this, arguments);
    }
    l.createOrReplaceCrossposting = s;
    l.getCrosspostingData = u;
    l.getCrosspostingUniqueIds = d;
    l.updateCrosspostingUniqueIdWithState = p;
    l.updateCrosspostingUniqueId = _;
    l.updateDirectUrlPath = f;
    l.updateCrosspostingState = g;
    l.bulkUpdateCrosspostingState = h;
    l.getCrosspostingInfoForMessagesBulk = C;
    l.getCrosspostingInfoForMessage = v;
}, 98);