__d("WAWebGetNewsletterEnforcementAlertsJob", [
    "Promise",
    "WAJobOrchestratorTypes",
    "WAWebCommonNewsletterEnums",
    "WAWebMexFetchNewsletterEnforcementsJob",
    "WAWebNewsletterEnforcementAlertModelUtils",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebSchemaNewsletterMetadata",
    "WAWebSuspendInformDataModelUtils",
    "asyncToGeneratorRuntime",
    "requireDeferred"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = r("requireDeferred")("WAWebEnforcementStatusMsgModelUtils").__setRef("WAWebGetNewsletterEnforcementAlertsJob");
    function u({ locale, newsletterJid, priority = o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION }) {
        return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("getNewsletterEnforcementAlerts", n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const t = yield o("WAWebSchemaNewsletterMetadata").getNewsletterMetadataTable().get(newsletterJid);
            if (t != null) {
                const i = yield o("WAWebMexFetchNewsletterEnforcementsJob").mexFetchNewsletterEnforcements(newsletterJid, locale);
                const l = m(i);
                const { msgIds, statusIds } = l;
                const d = yield (e || (e = n("Promise"))).all([
                    o("WAWebSuspendInformDataModelUtils").populateMsgModels(Array.from(msgIds), newsletterJid),
                    s.load().then(({ populateStatusMsgModelsForEnforcement })=>populateStatusMsgModelsForEnforcement(statusIds, newsletterJid))
                ]);
                const p = d[0];
                const _ = d[1];
                return {
                    enforcementData: i != null ? o("WAWebNewsletterEnforcementAlertModelUtils").convertNewsletterBaseEnforcementTypeToNewsletterAlert(i, p, _, newsletterJid) : [],
                    msgModelMap: p
                };
            }
        }), {
            priority
        }).waitUntilCompleted();
    }
    function c(e) {
        const t = [];
        const n = [];
        e?.forEach(function(e) {
            const a = e.enforcementExtraData?.enforcementTargetData;
            if (a != null) {
                if (a.contentType === o("WAWebCommonNewsletterEnums").ViolatingContentType.STATUS) {
                    n.push(a.serverId);
                } else {
                    t.push(a.serverId);
                }
            }
        });
        return {
            msgIds: t,
            statusIds: n
        };
    }
    function d(violatingMessages) {
        const t = [];
        const n = [];
        violatingMessages?.forEach(function({ violatingContentData }) {
            if (violatingContentData.contentType === o("WAWebCommonNewsletterEnums").ViolatingContentType.STATUS) {
                n.push(violatingContentData.serverId);
            } else {
                t.push(violatingContentData.serverId);
            }
        });
        return {
            msgIds: t,
            statusIds: n
        };
    }
    function m(e) {
        if (e == null) {
            return {
                msgIds: new Set,
                statusIds: new Set
            };
        }
        const { geoSuspensions, suspensions, violatingMessages } = e;
        const o = c(suspensions);
        const a = d(violatingMessages);
        const i = c(geoSuspensions);
        return {
            msgIds: new Set([].concat(o.msgIds, a.msgIds, i.msgIds)),
            statusIds: new Set([].concat(a.statusIds, o.statusIds, i.statusIds))
        };
    }
    l.getNewsletterEnforcementAlerts = u;
}, 98);