__d("WAWebBulkUnquarantineMessagesJob", [
    "Promise",
    "WALogger",
    "WAWebDefenseModeQuarantineLogger",
    "WAWebMsgKey",
    "WAWebQuarantineDataBatchProcessor",
    "WAWebQuarantineDataStore",
    "WAWebUnquarantineMessageJob",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    function d(e) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "bulkUnquarantineMessagesJob: Starting bulk unquarantine"
            ])));
            const n = yield o("WAWebQuarantineDataBatchProcessor").processQuarantineDataInBatches(babelHelpers.extends({}, t, {
                fetchBatch: o("WAWebQuarantineDataStore").getQuarantineDataBatch,
                processBatch: function(t) {
                    return p(t);
                },
                jobName: "bulkUnquarantineMessagesJob"
            }));
            if (n > 0) {
                o("WAWebDefenseModeQuarantineLogger").logQuarantineRestoreAuto(n);
            }
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "bulkUnquarantineMessagesJob: unquarantined ",
                " msgs"
            ])), n);
        });
        return m.apply(this, arguments);
    }
    function p(e) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield (c || (c = n("Promise"))).all(e.map((e)=>f(e)));
            const processedIds = e.filter((e, n)=>t[n] === "processed").map((e)=>e.msgId);
            const failedIds = e.filter((e, n)=>t[n] === "failed").map((e)=>e.msgId);
            const retainedIds = e.filter((e, n)=>t[n] === "retained").map((e)=>e.msgId);
            return {
                processedIds,
                failedIds,
                retainedIds
            };
        });
        return _.apply(this, arguments);
    }
    function f(e) {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            try {
                const t = r("WAWebMsgKey").fromString(e.msgId);
                const n = yield o("WAWebUnquarantineMessageJob").unquarantineMessageJob(t, e);
                return h(n);
            } catch (t) {
                o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "bulkUnquarantineMessagesJob: unquarantine failed ",
                    ""
                ])), e.msgId).verbose();
                return "failed";
            }
        });
        return g.apply(this, arguments);
    }
    function h(e) {
        if (e) {
            return "processed";
        }
        return "retained";
    }
    l.bulkUnquarantineMessagesJob = d;
}, 98);