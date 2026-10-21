__d("WAWebGetNewChatMessageCappingInfoJob", [
    "Promise",
    "WAJobOrchestratorTypes",
    "WALogger",
    "WAWebBackendApi",
    "WAWebIndividualNewChatMessageCappingLimitGatingUtils",
    "WAWebIndividualNewChatMessageCappingLimitUtils",
    "WAWebMexFetchNewChatMessageCappingInfoJob",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebUserPrefsIndexedDBStorage",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u = null;
    function c() {
        if (!o("WAWebIndividualNewChatMessageCappingLimitGatingUtils").isIndividualNewChatMessageCappingEnabled()) {
            return (s || (s = n("Promise"))).resolve();
        }
        const e = u;
        if (e != null) {
            return e;
        }
        const t = m();
        u = t;
        t.catch(()=>{
            if (u === t) {
                u = null;
            }
        });
        return t;
    }
    function d() {
        u = null;
    }
    function m() {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = yield _();
            if (e != null) {
                const capping_status = o("WAWebIndividualNewChatMessageCappingLimitUtils").getCappingStatusType(e?.capping_status);
                const r = e.subscription_status;
                yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(o("WAWebIndividualNewChatMessageCappingLimitUtils").NEW_CHAT_MESSAGE_CAPPING_IDB_KEY, {
                    capping_status,
                    ote_status: o("WAWebIndividualNewChatMessageCappingLimitUtils").getCappingOTEStatusType(e?.ote_status),
                    mv_status: o("WAWebIndividualNewChatMessageCappingLimitUtils").getCappingMVStatusType(e?.mv_status),
                    subscription_status: r == null ? undefined : {
                        status: o("WAWebIndividualNewChatMessageCappingLimitUtils").getCappingSubscriptionStatusType(r.status),
                        name: o("WAWebIndividualNewChatMessageCappingLimitUtils").getCappingSubscriptionName(r.name)
                    },
                    total_quota: e?.total_quota,
                    used_quota: Math.min(Number(e?.used_quota), Number(e?.total_quota)),
                    cycle_end_timestamp: Number(e?.cycle_end_timestamp),
                    cycle_start_timestamp: Number(e?.cycle_start_timestamp),
                    server_sent_timestamp: Number(e?.server_sent_timestamp ?? "0")
                });
            }
            o("WAWebBackendApi").frontendFireAndForget("individualNewChatMessageCappingStateChange", {});
        });
        return p.apply(this, arguments);
    }
    function _() {
        return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("getNewChatMessageCapping", n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            try {
                return yield o("WAWebMexFetchNewChatMessageCappingInfoJob").mexFetchNewChatMessageCapping();
            } catch (error) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[MEX][wa_biz_tools][CAP] getNewChatMessageCapping err"
                ]))).tags("GQL", "MEX", "wa-ice", "RET");
                throw error;
            }
        }), {
            priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION
        }).waitUntilCompleted();
    }
    l.fetchOrUpdateCapStatus = c;
    l.resetCapStatusFetchForTesting = d;
}, 98);