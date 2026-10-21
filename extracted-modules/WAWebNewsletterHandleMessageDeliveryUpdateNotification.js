__d("WAWebNewsletterHandleMessageDeliveryUpdateNotification", [
    "WAJobOrchestratorTypes",
    "WAWebBackendApi",
    "WAWebJidToWid",
    "WAWebNewsletterMessageDeliveryUpdateToModelUtils",
    "WAWebNewsletterMetadataJob",
    "WAWebNux",
    "WAWebUserPrefsNuxPreferences",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = o("WAWebJidToWid").newsletterJidToWid(e);
            const r = t.reduce((acc, item)=>{
                if (item.issueCode === 0) {
                    acc.updatesToRemove.push(item.serverId);
                } else {
                    const n = {
                        id: item.serverId,
                        code: item.issueCode
                    };
                    acc.updatesToAdd.push(n);
                }
                return acc;
            }, {
                updatesToAdd: [],
                updatesToRemove: []
            });
            const { updatesToAdd, updatesToRemove } = r;
            o("WAWebNewsletterMetadataJob").updateNewsletterMessageDeliveryUpdates(e, updatesToAdd, updatesToRemove, o("WAJobOrchestratorTypes").JOB_PRIORITY.HIGH);
            const l = yield o("WAWebNewsletterMessageDeliveryUpdateToModelUtils").getMessageDeliveryUpdatesModelToUpdate(e, updatesToAdd, updatesToRemove);
            const { modelUpdatesToAdd, modelUpdatesToRemove } = l;
            yield o("WAWebBackendApi").frontendSendAndReceive("updateNewsletterMessageDeliveryUpdate", {
                id: n,
                modelUpdatesToAdd,
                modelUpdatesToRemove
            });
            const c = o("WAWebNux").getNewsletterAlertsBannerNuxKey(e);
            o("WAWebUserPrefsNuxPreferences").resetNux(c);
        });
        return s.apply(this, arguments);
    }
    l.handleNewsletterMessageDeliveryUpdateNotificationImpl = e;
}, 98);