__d("WAWebMarkAddOnsAsReadJob", [
    "Promise",
    "WAJobOrchestratorTypes",
    "WAWebAddOnsMarkAddOnsAsReadDb",
    "WAWebAddonMarkAsReadUtils",
    "WAWebBackendApi",
    "WAWebOrchestratorNonPersistedJob",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            yield o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("markAddOnsAsRead", (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                    yield o("WAWebAddOnsMarkAddOnsAsReadDb").markAddOnsAsReadDb(e.updates);
                    o("WAWebBackendApi").frontendFireAndForget("markAddOnsAsReadUi", {
                        updatedMsgKeys: e.updates
                    });
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })(), {
                priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.LOW
            }).waitUntilCompleted({
                updates: e
            });
        });
        return u.apply(this, arguments);
    }
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(addons) {
            yield o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("markAddOnsAsReadUsingAddonInfra", (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                    return o("WAWebAddonMarkAsReadUtils").processMarkAsRead(e.addons);
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })(), {
                priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.LOW
            }).waitUntilCompleted({
                addons
            });
        });
        return d.apply(this, arguments);
    }
    function m(t) {
        if (t.length === 0) {
            return (e || (e = n("Promise"))).resolve({
                updatedAddOns: new Map,
                updatedOrphans: []
            });
        }
        return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("markUnclassifiedAddOnsAsRead", (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = yield o("WAWebAddOnsMarkAddOnsAsReadDb").markUnclassifiedAddOnsAsReadDb(e.msgKeys);
                o("WAWebBackendApi").frontendFireAndForget("markAddOnsAsReadUi", {
                    updatedMsgKeys: t.updatedAddOns
                });
                return t;
            });
            return function(t) {
                return e.apply(this, arguments);
            };
        })(), {
            priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION
        }).waitUntilCompleted({
            msgKeys: t
        });
    }
    l.markAddOnsAsReadJob = s;
    l.markAddOnsAsReadUsingAddonInfraJob = c;
    l.markUnclassifiedAddOnsAsReadJob = m;
}, 98);