__d("WAWebPushBridgeApi", [
    "WAWebBackgroundSyncAction",
    "WAWebSubscribePushManagerAction"
], function(t, n, r, o, a, i, l) {
    const e = {
        updatePeriodicBackgroundSyncRegistration: function({ forceUnregister }) {
            o("WAWebBackgroundSyncAction").updatePeriodicBackgroundSyncRegistration(forceUnregister);
        },
        updatePushManager: function() {
            o("WAWebSubscribePushManagerAction").updatePushManager();
        }
    };
    l.PushBridgeApi = e;
}, 98);