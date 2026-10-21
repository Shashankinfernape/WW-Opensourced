__d("WAWebCoexV2MessageAckProjectionEligibility", [
    "WAWebAck",
    "WAWebUserPrefsMeUser"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return !o("WAWebUserPrefsMeUser").isMeAccount(e);
    }
    function s({ projectedAck, representedLid }) {
        if (projectedAck !== o("WAWebAck").ACK.RECEIVED && projectedAck !== o("WAWebAck").ACK.READ || !e(representedLid)) {
            return null;
        }
        return projectedAck;
    }
    l.isCoexV2MessageAckProjectionTarget = e;
    l.getEligibleCoexV2MessageAckProjection = s;
}, 98);