__d("WAWebDBPollsPendingUpdatesStore", [
    "WATimeUtils",
    "WAWebModelStorageUtils",
    "WAWebPollsPendingUpdatesSchema",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    const e = "poll-pending-updates";
    function s(t) {
        return o("WAWebModelStorageUtils").getStorage().lock([
            e
        ], (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*([n]) {
                const r = yield n.get(f(t));
                if (!(r != null && r.senderTimestampMs > t.senderTimestampMs)) {
                    yield n.createOrReplace(babelHelpers.extends({}, t, {
                        createdAtMs: Date.now()
                    }));
                }
            });
            return function(t) {
                return e.apply(this, arguments);
            };
        })());
    }
    function u(e) {
        return o("WAWebPollsPendingUpdatesSchema").getTable().anyOf([
            "parentMsgKey"
        ], [
            e
        ]);
    }
    function c({ dependencyId, dependencyType, parentMsgKey }) {
        return o("WAWebModelStorageUtils").getStorage().lock([
            e
        ], (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*([t]) {
                const n = yield t.anyOf([
                    "parentMsgKey",
                    "dependencyType",
                    "dependencyId"
                ], [
                    [
                        parentMsgKey,
                        dependencyType,
                        dependencyId
                    ]
                ]);
                if (n.length > 0) {
                    yield t.bulkRemove(n.map(f));
                }
                return n;
            });
            return function(t) {
                return e.apply(this, arguments);
            };
        })());
    }
    function d(e) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            if (t.length !== 0) {
                yield o("WAWebModelStorageUtils").getStorage().lock([
                    e
                ], (()=>{
                    const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*([n]) {
                        const r = yield n.anyOf([
                            "parentMsgKey"
                        ], t);
                        if (r.length > 0) {
                            yield n.bulkRemove(r.map(f));
                        }
                    });
                    return function(t) {
                        return e.apply(this, arguments);
                    };
                })());
            }
        });
        return m.apply(this, arguments);
    }
    function p(e) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            if (!(t <= 0)) {
                const r = Date.now() - t * o("WATimeUtils").DAY_MILLISECONDS;
                yield o("WAWebModelStorageUtils").getStorage().lock([
                    e
                ], (()=>{
                    const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*([t]) {
                        const n = yield t.lessThan([
                            "createdAtMs"
                        ], r);
                        if (n.length > 0) {
                            yield t.bulkRemove(n.map(f));
                        }
                    });
                    return function(t) {
                        return e.apply(this, arguments);
                    };
                })());
            }
        });
        return _.apply(this, arguments);
    }
    function f(e) {
        return [
            e.parentMsgKey,
            e.sender,
            e.payloadType,
            e.payloadKey
        ];
    }
    l.enqueuePollPendingUpdate = s;
    l.fetchAllForPoll = u;
    l.drainForDependency = c;
    l.deleteForPollKeys = d;
    l.purgeExpiredPendingUpdates = p;
}, 98);