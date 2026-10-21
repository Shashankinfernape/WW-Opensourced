__d("WAWebSocketBridgeApi", [
    "WAWebCmd",
    "WAWebCurrentUser",
    "WAWebEnvironment",
    "WAWebSocketModel",
    "WAWebUpdater",
    "gkx"
], function(t, n, r, o, a, i, l) {
    const e = "whatsapp-web-devtools-logout";
    const s = {
        triggerLogoutDiagnosticFromBridge: function({ reason }) {
            if (!r("gkx")("26258")) {
                window.dispatchEvent(new CustomEvent(e, {
                    detail: {
                        reason,
                        timestamp: Date.now()
                    }
                }));
            }
        },
        socketLogout: function({ reason }) {
            if (r("WAWebEnvironment").isWindows && o("WAWebCurrentUser").isEmployee()) {
                o("WAWebCmd").Cmd.onUnexpectedLogoutModalFromBridge(reason);
            } else {
                o("WAWebSocketModel").Socket.logout(reason);
            }
        },
        addStartingLogoutListener: function(t) {
            o("WAWebCmd").Cmd.on("starting_logout_from_bridge", t);
        },
        removeStartingLogoutListener: function(t) {
            o("WAWebCmd").Cmd.off("starting_logout_from_bridge", t);
        },
        triggerSocketStreamDisconnectedFromBridge: function() {
            o("WAWebCmd").Cmd.socketStreamDisconnectedFromBridge();
        },
        triggerOpenSocketStreamFromBridge: function() {
            o("WAWebCmd").Cmd.openSocketStreamFromBridge();
        },
        triggerLogoutFromBridge: function() {
            o("WAWebCmd").Cmd.onLogoutFromBridge();
        },
        triggerStartingLogoutFromBridge: function() {
            o("WAWebCmd").Cmd.onStartingLogoutFromBridge();
        },
        triggerTemporaryBanFromBridge: function(t) {
            o("WAWebCmd").Cmd.onTemporaryBanFromBridge(t);
        },
        triggerUnexpectedLogoutModalFromBridge: function({ reason }) {
            o("WAWebCmd").Cmd.onUnexpectedLogoutModalFromBridge(reason);
        },
        triggerInitialLoadReadyFromBridge: function() {
            o("WAWebCmd").Cmd.onInitialLoadReadyFromBridge();
        },
        triggerMainStreamModeReadyFromBridge: function() {
            o("WAWebCmd").Cmd.onMainStreamModeReadyFromBridge();
        },
        triggerServiceUnavailableFromBridge: function() {
            o("WAWebCmd").Cmd.onServiceUnavailableFromBridge();
        },
        triggerBrigadingStateChangeFromBridge: function({ newState }) {
            o("WAWebCmd").Cmd.onBrigadingStateChangeFromBridge(newState);
        },
        triggerOfflineDeliveryEndFromBridge: function() {
            o("WAWebCmd").Cmd.onOfflineDeliveryEndFromBridge();
        },
        triggerOfflineDeliveryStateResetFromBridge: function() {
            o("WAWebCmd").Cmd.onOfflineDeliveryStateResetFromBridge();
        },
        triggerOfflineProgressUpdateFromBridge: function() {
            o("WAWebCmd").Cmd.onOfflineProgressUpdateFromBridge();
        },
        forceAppUpdate: function({ belowHard, belowSoft, version }) {
            o("WAWebUpdater").Updater.update({
                serverVersion: version,
                belowSoft,
                belowHard
            });
        }
    };
    l.SocketBridgeApi = s;
}, 98);