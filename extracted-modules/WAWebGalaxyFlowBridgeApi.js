__d("WAWebGalaxyFlowBridgeApi", [
    "WAWebGalaxyFlowDownloadTracker"
], function(t, n, r, o, a, i, l) {
    const e = {
        failGalaxyFlowDownloadRequest: function({ requestId }) {
            if (requestId != null) {
                o("WAWebGalaxyFlowDownloadTracker").GalaxyFlowDownloadTracker.failRequest(requestId);
                return;
            }
            o("WAWebGalaxyFlowDownloadTracker").GalaxyFlowDownloadTracker.failAllRequests();
        },
        resolveGalaxyFlowDownloadRequest: function({ requestId }) {
            o("WAWebGalaxyFlowDownloadTracker").GalaxyFlowDownloadTracker.resolveRequest(requestId);
        }
    };
    l.GalaxyFlowBridgeApi = e;
}, 98);