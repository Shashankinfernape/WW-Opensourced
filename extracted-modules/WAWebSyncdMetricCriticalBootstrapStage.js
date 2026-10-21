__d("WAWebSyncdMetricCriticalBootstrapStage", [
    "WAWebCollectionHandlerWamMutation",
    "WAWebProtobufSyncAction.pb",
    "WAWebSyncdCriticalBootstrapProcessingApi",
    "WAWebWamEnumBootstrapAppStateDataStageCode",
    "decodeProtobuf"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
        o("WAWebSyncdCriticalBootstrapProcessingApi").logCriticalBootstrapStageIfNecessary(o("WAWebWamEnumBootstrapAppStateDataStageCode").BOOTSTRAP_APP_STATE_DATA_STAGE_CODE.MUTATIONS_DECRYPTED);
        e.forEach(({ binarySyncData })=>{
            const n = o("decodeProtobuf").decodeProtobuf(o("WAWebProtobufSyncAction.pb").SyncActionDataSpec, binarySyncData);
            const n_value = n.value;
            if (n_value != null) {
                let a;
                if (n_value.archiveChatAction) {
                    a = n_value.archiveChatAction.messageRange;
                } else if (n_value.markChatAsReadAction) {
                    a = n_value.markChatAsReadAction.messageRange;
                } else if (n_value.clearChatAction) {
                    a = n_value.clearChatAction.messageRange;
                } else if (n_value.deleteChatAction) {
                    a = n_value.deleteChatAction.messageRange;
                }
                if (a != null) {
                    o("WAWebCollectionHandlerWamMutation").logMetricsForMutationLength(a.messages.length);
                }
            }
        });
    }
    l.reportSyncdDecryptedMutations = e;
}, 98);