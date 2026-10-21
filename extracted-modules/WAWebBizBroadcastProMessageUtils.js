__d("WAWebBizBroadcastProMessageUtils", [], function(t, n, r, o, a, i) {
    "use strict";
    function e({ isBizBroadcastProChat, isSentByMe, pmCampaignId }) {
        return isBizBroadcastProChat && isSentByMe && pmCampaignId != null;
    }
    i.isBizBroadcastProOutgoingMessage = e;
}, 66);