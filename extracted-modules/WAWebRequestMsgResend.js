__d("WAWebRequestMsgResend", [
    "QPLFlow",
    "WAWebJobsMigrationGating",
    "WAWebLazyPersistedQueue",
    "WAWebPersistedJobDefinitions",
    "WAWebPersistedJobManagerWorkerCompatible",
    "WAWebPersistedQueueQpl",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e({ ackTime, excludeList, msgRecord, resend }) {
        if (o("WAWebJobsMigrationGating").isPersistedQueuesEnabled()) {
            return u("resendUserMsg", function(e) {
                return e.runUserMsgResendQueued({
                    ackTime,
                    excludeList,
                    msgRecord,
                    resend
                });
            });
        }
        const l = d("resendUserMsg", false);
        return o("QPLFlow").endWith(l, n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = yield o("WAWebPersistedJobManagerWorkerCompatible").getJobManager().accessors.maybeCreateJob(o("WAWebPersistedJobDefinitions").jobSerializers.resendUserMsg(msgRecord, excludeList, ackTime));
            yield resend();
            yield o("WAWebPersistedJobManagerWorkerCompatible").getJobManager().accessors.deletePersistedJob(e.id);
        }));
    }
    function s(e, t) {
        if (o("WAWebJobsMigrationGating").isPersistedQueuesEnabled()) {
            return u("resendGroupMsg", function(n) {
                return n.runGroupMsgResendQueued(e, t);
            });
        }
        const r = d("resendGroupMsg", false);
        return o("QPLFlow").endWith(r, n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const { ackTime, groupData, isDirect, msgRecord, oldList, phash, serverAddressingMode } = e;
            const c = yield o("WAWebPersistedJobManagerWorkerCompatible").getJobManager().accessors.maybeCreateJob(o("WAWebPersistedJobDefinitions").jobSerializers.resendGroupMsg(msgRecord, groupData, isDirect, oldList, phash, ackTime, serverAddressingMode));
            yield t();
            yield o("WAWebPersistedJobManagerWorkerCompatible").getJobManager().accessors.deletePersistedJob(c.id);
        }));
    }
    function u(e, t) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            yield o("WAWebLazyPersistedQueue").whenPersistedQueuesMayOpen();
            const r = d(e, true);
            yield o("QPLFlow").endWith(r, n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                return t((yield o("WAWebLazyPersistedQueue").whenPersistedQueuesReady(r)));
            }));
        });
        return c.apply(this, arguments);
    }
    function d(operationType, isPQ) {
        return o("QPLFlow").startQPLFlow(o("WAWebPersistedQueueQpl").PERSISTED_QUEUE_EVENT, {
            annotations: {
                bool: {
                    isPQ
                },
                string: {
                    operationType
                }
            },
            timeoutInMs: o("WAWebPersistedQueueQpl").PERSISTED_QUEUE_TIMEOUT_MS
        });
    }
    l.runUserMsgResendRecorded = e;
    l.runGroupMsgResendRecorded = s;
}, 98);