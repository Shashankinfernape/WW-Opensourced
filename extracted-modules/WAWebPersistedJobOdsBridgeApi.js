__d("WAWebPersistedJobOdsBridgeApi", [
    "WAWebODS"
], function(t, n, r, o, a, i, l) {
    const e = {
        logPersistedJobJobsStoreTriggered: function({ type }) {
            e: {
                if (type === "deleteAddOns") {
                    r("WAWebODS").incr("web.persisted_job.jobs_store_triggered.deleteAddOns");
                    break e;
                }
                if (type === "deleteReactions") {
                    r("WAWebODS").incr("web.persisted_job.jobs_store_triggered.deleteReactions");
                    break e;
                }
                if (type === "deleteReactionsV2") {
                    r("WAWebODS").incr("web.persisted_job.jobs_store_triggered.deleteReactionsV2");
                    break e;
                }
                if (type === "dismissQuickPromotion") {
                    r("WAWebODS").incr("web.persisted_job.jobs_store_triggered.dismissQuickPromotion");
                    break e;
                }
                if (type === "getPublicKey") {
                    r("WAWebODS").incr("web.persisted_job.jobs_store_triggered.getPublicKey");
                    break e;
                }
                if (type === "getSignedUserInfo") {
                    r("WAWebODS").incr("web.persisted_job.jobs_store_triggered.getSignedUserInfo");
                    break e;
                }
                if (type === "impressionOnQuickPromotion") {
                    r("WAWebODS").incr("web.persisted_job.jobs_store_triggered.impressionOnQuickPromotion");
                    break e;
                }
                if (type === "incrementNewsletterForwardCounter") {
                    r("WAWebODS").incr("web.persisted_job.jobs_store_triggered.incrementNewsletterForwardCounter");
                    break e;
                }
                if (type === "primaryActionClickInQuickPromotion") {
                    r("WAWebODS").incr("web.persisted_job.jobs_store_triggered.primaryActionClickInQuickPromotion");
                    break e;
                }
                if (type === "queryAndUpdateGroupsMetadataByJids") {
                    r("WAWebODS").incr("web.persisted_job.jobs_store_triggered.queryAndUpdateGroupsMetadataByJids");
                    break e;
                }
                if (type === "queryProductList") {
                    r("WAWebODS").incr("web.persisted_job.jobs_store_triggered.queryProductList");
                    break e;
                }
                if (type === "resendGroupMsg") {
                    r("WAWebODS").incr("web.persisted_job.jobs_store_triggered.resendGroupMsg");
                    break e;
                }
                if (type === "resendUserMsg") {
                    r("WAWebODS").incr("web.persisted_job.jobs_store_triggered.resendUserMsg");
                    break e;
                }
                if (type === "rotateKey") {
                    r("WAWebODS").incr("web.persisted_job.jobs_store_triggered.rotateKey");
                    break e;
                }
                if (type === "sendRequestedKeyShare") {
                    r("WAWebODS").incr("web.persisted_job.jobs_store_triggered.sendRequestedKeyShare");
                    break e;
                }
                if (type === "setAbout") {
                    r("WAWebODS").incr("web.persisted_job.jobs_store_triggered.setAbout");
                    break e;
                }
                if (type === "setTextStatus") {
                    r("WAWebODS").incr("web.persisted_job.jobs_store_triggered.setTextStatus");
                    break e;
                }
                if (type === "userExposureToQuickPromotion") {
                    r("WAWebODS").incr("web.persisted_job.jobs_store_triggered.userExposureToQuickPromotion");
                    break e;
                }
                if (type === "verifyPostcode") {
                    r("WAWebODS").incr("web.persisted_job.jobs_store_triggered.verifyPostcode");
                    break e;
                }
                {
                    r("WAWebODS").incr("web.persisted_job.jobs_store_triggered.unknown");
                    break e;
                }
            }
        }
    };
    l.PersistedJobOdsBridgeApi = e;
}, 98);