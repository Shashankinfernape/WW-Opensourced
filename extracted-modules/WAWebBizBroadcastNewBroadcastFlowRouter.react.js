__d("WAWebBizBroadcastNewBroadcastFlowRouter.react", [
    "WAWebBizBroadcastNewBroadcastFlowLoadable",
    "WAWebBizBroadcastProNewBroadcastFlowTwoPhaseContainerLoadable",
    "WAWebBusinessBroadcastsGatingUtils",
    "WAWebChatGetters",
    "WAWebChatGroupUtils",
    "WAWebWidToJid",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    function UComponent(e) {
        const t = o("react-compiler-runtime").c(17);
        const { chat, entryPoint, onBack, onRefreshProAudiences, onSendSuccess, ref, sourceBroadcastMessageData } = e;
        if (o("WAWebBusinessBroadcastsGatingUtils").isBizBroadcastProUser()) {
            let audience;
            if (t[0] !== chat) {
                audience = c(chat);
                t[0] = chat;
                t[1] = audience;
            } else {
                audience = t[1];
            }
            let p;
            if (t[2] !== entryPoint || t[3] !== onBack || t[4] !== onRefreshProAudiences || t[5] !== onSendSuccess || t[6] !== ref || t[7] !== sourceBroadcastMessageData || t[8] !== audience) {
                const Component = o("WAWebBizBroadcastProNewBroadcastFlowTwoPhaseContainerLoadable").WAWebBizBroadcastProNewBroadcastFlowTwoPhaseContainerLoadable;
                p = <Component audience={audience} entryPoint={entryPoint} onBack={onBack} onRefreshProAudiences={onRefreshProAudiences} onSendSuccess={onSendSuccess} ref={ref} sourceBroadcastMessageData={sourceBroadcastMessageData}/>;
                t[2] = entryPoint;
                t[3] = onBack;
                t[4] = onRefreshProAudiences;
                t[5] = onSendSuccess;
                t[6] = ref;
                t[7] = sourceBroadcastMessageData;
                t[8] = audience;
                t[9] = p;
            } else {
                p = t[9];
            }
            return p;
        }
        let _;
        if (t[10] !== chat || t[11] !== entryPoint || t[12] !== onBack || t[13] !== onSendSuccess || t[14] !== ref || t[15] !== sourceBroadcastMessageData) {
            const Component = o("WAWebBizBroadcastNewBroadcastFlowLoadable").WAWebBizBroadcastNewBroadcastFlowLoadable;
            _ = <Component chat={chat} entryPoint={entryPoint} onBack={onBack} onSendSuccess={onSendSuccess} ref={ref} sourceBroadcastMessageData={sourceBroadcastMessageData}/>;
            t[10] = chat;
            t[11] = entryPoint;
            t[12] = onBack;
            t[13] = onSendSuccess;
            t[14] = ref;
            t[15] = sourceBroadcastMessageData;
            t[16] = _;
        } else {
            _ = t[16];
        }
        return _;
    }
    function c(chat) {
        if (chat == null || !o("WAWebChatGetters").getIsBroadcast(chat)) {
            return null;
        }
        const e_broadcastMetadata = chat.broadcastMetadata;
        const n = e_broadcastMetadata?.customAudienceFbid;
        if (n == null) {
            return null;
        }
        return {
            audienceSize: null,
            broadcastJid: o("WAWebWidToJid").widToBroadcastJid(chat.id),
            id: n,
            isRecipientCountPending: false,
            name: o("WAWebChatGroupUtils").getBroadcastChatTitle(chat),
            phoneNumbers: null
        };
    }
    l.default = UComponent;
}, 98);