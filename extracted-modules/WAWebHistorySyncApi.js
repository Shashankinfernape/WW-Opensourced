__d("WAWebHistorySyncApi", [
    "WAWebCmd",
    "WAWebHistorySyncProgressModel"
], function(t, n, r, o, a, i, l) {
    const e = {
        setHistorySyncPaused: function({ paused }) {
            o("WAWebHistorySyncProgressModel").getHistorySyncProgressModel().setPaused(paused);
        },
        setHistorySyncProgress: function({ incomplete, progress }) {
            if (progress != null) {
                o("WAWebHistorySyncProgressModel").getHistorySyncProgressModel().setProgress(progress);
            }
            if (incomplete != null) {
                o("WAWebHistorySyncProgressModel").getHistorySyncProgressModel().setIncomplete(incomplete);
            }
        },
        triggerInitialChatHistorySyncedFromBridge: function() {
            o("WAWebCmd").Cmd.onInitialChatHistorySyncedFromBridge();
        },
        triggerCriticalSyncDoneFromBridge: function() {
            o("WAWebCmd").Cmd.criticalSyncDoneFromBridge();
        },
        triggerHistorySyncChunkProcessedFromBridge: function({ chatsUpdated }) {
            o("WAWebCmd").Cmd.onHistorySyncChunkProcessedFromBridge(new Set(chatsUpdated));
        }
    };
    l.HistorySyncBridgeApi = e;
}, 98);