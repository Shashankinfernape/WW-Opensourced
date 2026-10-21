__d("WAWebBizVPVEligibility", [
    "WAWebMsgGetters",
    "WAWebMsgType"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e({ isEnterprise, isGroupChat, isHosted, msg }) {
        if (o("WAWebMsgGetters").getIsSentByMe(msg) || isGroupChat || o("WAWebMsgType").SYSTEM_MESSAGE_TYPES.includes(o("WAWebMsgGetters").getType(msg))) {
            return false;
        }
        if (isEnterprise || o("WAWebMsgGetters").getIsMarketingMessage(msg) || isHosted) {
            return true;
        }
        return o("WAWebMsgGetters").getIsCoexV2Relay(msg);
    }
    l.isEligibleForBizVPV = e;
}, 98);