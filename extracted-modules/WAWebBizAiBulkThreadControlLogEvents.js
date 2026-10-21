__d("WAWebBizAiBulkThreadControlLogEvents", [
    "WAWebSMBUserJourneyLogger",
    "WAWebWamEnumSmbFeatureNameEnum",
    "WAWebWamEnumSmbUserActionTypeEnum",
    "WAWebWamEnumSurfaceType"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = "async_batch_applied";
    function s({ appliedCount, failedCount, notFoundCount, totalCount }) {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            extraAttributes: {
                async_batch_applied_count: appliedCount,
                async_batch_failed_count: failedCount,
                async_batch_not_found_count: notFoundCount,
                async_batch_total_count: totalCount
            },
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            stickyEntryPoint: false,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHATLIST,
            userActionTarget: e,
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.API
        });
    }
    l.logBulkThreadControlBatchApplied = s;
}, 98);