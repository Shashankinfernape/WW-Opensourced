__d("WAWebApiTextStatus", [
    "Promise",
    "WATimeUtils",
    "WAWebLidAwareContactsDB",
    "WAWebModelStorageUtils",
    "WAWebTextStatusGatingUtils",
    "WAWebTextStatusUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    function s() {
        const t = o("WATimeUtils").unixTime();
        if (o("WAWebTextStatusGatingUtils").receiveTextStatusEnabled()) {
            return o("WAWebModelStorageUtils").getStorage().lock([
                "contact"
            ], n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const e = yield r("WAWebLidAwareContactsDB").lessThan([
                    "textStatusExpiryTs"
                ], t);
                if (!(!e || e.length === 0)) {
                    const n = e.map((e)=>({
                            id: e.id,
                            textStatusString: void 0,
                            textStatusEmoji: void 0,
                            textStatusExpiryTs: void 0,
                            textStatusEphemeralDuration: void 0,
                            textStatusLastUpdateTime: o("WAWebTextStatusUtils").CLEAR_TEXT_STATUS_LAST_UPDATE_TIME_VAL
                        }));
                    return r("WAWebLidAwareContactsDB").bulkCreateOrMerge(n, "ApiTextStatus.updateExpiredTextStatusOfContact");
                }
            }));
        }
        return (e || (e = n("Promise"))).resolve();
    }
    l.updateExpiredTextStatusOfContact = s;
}, 98);