__d("WAWebHistorySyncHandlePushname", [
    "WALogger",
    "WAWebApiHistorySyncNotification",
    "WAWebBackendApi",
    "WAWebHistorySyncNotificationUtils",
    "WAWebLidAwareContactsDB",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(e, t, n, r, o) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n, historySyncDownloadMetric, historySyncDataAppliedMetric, chunkDownloadFinishTimestamp) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[history sync] start processing initial pushname"
            ])));
            o("WAWebHistorySyncNotificationUtils").commitHistoryDownloadedMetric({
                chunkDownloadFinishTimestamp,
                historySyncDownloadMetric,
                isSuccess: true,
                startTs: n.historySyncStepStartedTs
            });
            const u = t.pushnames.map((e)=>({
                    id: e.id || "",
                    pushname: e.pushname || ""
                }));
            yield r("WAWebLidAwareContactsDB").bulkCreateOrMerge(u, "HistoryMsgHandlerAction.handlePushName");
            yield o("WAWebApiHistorySyncNotification").updateCurrentlyProcessed(n.msgKey, n.syncType, n.chunkOrder);
            const c = [];
            t.pushnames.forEach((e)=>{
                const t = o("WAWebWidFactory").createUserWidOrThrow(e.id || "");
                const pushname = e.pushname || "";
                c.push({
                    contactId: t,
                    pushname
                });
            });
            yield o("WAWebBackendApi").frontendSendAndReceive("bulkUpdateContactPushnames", {
                pushnameUpdates: c
            });
            o("WAWebHistorySyncNotificationUtils").commitHistoryDataAppliedMetric({
                historySyncDataAppliedMetric,
                startTs: n.historySyncStepStartedTs,
                isSuccess: true
            });
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "[history sync] initial pushname stored, ",
                " records"
            ])), t.pushnames.length);
        });
        return c.apply(this, arguments);
    }
    l.handlePushName = u;
}, 98);