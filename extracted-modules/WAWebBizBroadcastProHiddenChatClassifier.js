__d("WAWebBizBroadcastProHiddenChatClassifier", [
    "WAWebBusinessBroadcastsGatingUtils",
    "WAWebCommonMsgSubtypeTypes",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebUserPrefsMeUser",
    "justknobx"
], function(t, n, r, o, a, i, l) {
    function e(e, t, n) {
        let hasMarketingPeerCopy = false;
        let hasNonMarketingMessage = false;
        let latestMarketingPeerCopyTimestamp;
        let latestNonMarketingTimestamp;
        e.forEach((e)=>{
            if (!(o("WAWebMsgGetters").getType(e) === o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE && (e.subtype === o("WAWebCommonMsgSubtypeTypes").MsgSubtype.BizMeAccountTypeIsHostedSystemMsg || e.subtype === o("WAWebCommonMsgSubtypeTypes").MsgSubtype.BizMeAccountTypeIsHostedSystemMsgTransition))) {
                if (c(e, t)) {
                    hasMarketingPeerCopy = true;
                    latestMarketingPeerCopyTimestamp = u(latestMarketingPeerCopyTimestamp, e.t);
                    return;
                }
                hasNonMarketingMessage = true;
                if (n == null || n.has(e.id.toString())) {
                    latestNonMarketingTimestamp = u(latestNonMarketingTimestamp, e.t);
                }
            }
        });
        return {
            hasMarketingPeerCopy,
            hasNonMarketingMessage,
            latestMarketingPeerCopyTimestamp,
            latestNonMarketingTimestamp
        };
    }
    function s(t, n) {
        const r = e(t, n);
        const { hasMarketingPeerCopy, hasNonMarketingMessage } = r;
        return hasMarketingPeerCopy && !hasNonMarketingMessage;
    }
    function u(e, t) {
        if (e == null) {
            return t;
        }
        if (t == null) {
            return e;
        }
        return Math.max(e, t);
    }
    function c(e, t) {
        const n = o("WAWebMsgGetters").getSenderWithDevice(e);
        return e.id.fromMe && o("WAWebMsgGetters").getIsMarketingTemplateTag(e) && e.deliveryContextSourceType === "ads_manager" && t?.isRegularUser() === true && n?.isHosted() === true && o("WAWebUserPrefsMeUser").isMeAccount(n) && d();
    }
    function d() {
        return o("WAWebBusinessBroadcastsGatingUtils").isBizBroadcastProEnabled() && !r("justknobx")._("6472");
    }
    l.classifyBizBroadcastProMessageBatch = e;
    l.isBizBroadcastProMarketingOnlyBatch = s;
    l.isBizBroadcastProMarketingPeerCopy = c;
    l.isBizBroadcastProHiddenChatsEnabled = d;
}, 98);