__d("WAWebServicedJobs", [
    "WALogger",
    "WATimeUtils",
    "WAWebJobsMigrationGating",
    "WAWebNoop",
    "WAWebPersistedJobInitializers",
    "WAWebPersistedJobManagerWorkerCompatible",
    "WAWebScheduledOperations",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(t) {
        const n = d(t.type);
        if (n == null || !m()) {
            o("WAWebPersistedJobManagerWorkerCompatible").getJobManager().fireAndForget(t);
            return;
        }
        o("WAWebScheduledOperations").scheduleOperation(n, function() {
            return p(t);
        }).catch((n)=>{
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[serviced-job] ",
                " failed"
            ])), t.type).catching(r("getErrorSafe")(n)).sendLogs("serviced-job-failed");
        });
    }
    function u(e) {
        const t = d(e.type);
        if (t == null || !m()) {
            return o("WAWebPersistedJobManagerWorkerCompatible").getJobManager().waitUntilCompleted(e).then(r("WAWebNoop"));
        }
        return o("WAWebScheduledOperations").scheduleOperation(t, function() {
            return p(e);
        });
    }
    const c = new Set([
        "deleteAddOns",
        "resendGroupMsg",
        "resendUserMsg",
        "sendRequestedKeyShare",
        "incrementNewsletterForwardCounter",
        "queryAndUpdateGroupsMetadataByJids",
        "queryProductList",
        "setAbout",
        "setTextStatus"
    ]);
    function d(e) {
        if (c.has(e)) {
            return null;
        }
        return o("WAWebScheduledOperations").ScheduledOperation.cast(e);
    }
    function m() {
        return o("WAWebJobsMigrationGating").isServicedJobsEnabled();
    }
    function p(e) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield r("WAWebPersistedJobInitializers")[e.type]();
            const n = {
                afterCrash: false,
                interruptJob: function() {
                    throw r("err")(`serviced job ${e.type} tried to interrupt`);
                },
                jobStartTime: o("WATimeUtils").unixTime()
            };
            yield t.reduce((t, r)=>t.then((t)=>{
                    const o = r.info(t, e.args, n);
                    const a = o.code;
                    return a(t, e.args, n);
                }), Promise.resolve(e.args));
        });
        return _.apply(this, arguments);
    }
    l.runServicedJob = s;
    l.runServicedJobToCompletion = u;
}, 98);