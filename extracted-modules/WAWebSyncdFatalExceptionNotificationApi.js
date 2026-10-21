__d("WAWebSyncdFatalExceptionNotificationApi", [
    "WATimeUtils",
    "WAWebApiPeerMessageStore",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebOutgoingPeerMsgKey",
    "WAWebSendAppStateSyncMsgJob",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(collectionNames) {
            const appStateFatalExceptionNotification = {
                collectionNames,
                timestamp: o("WATimeUtils").unixTimeMs()
            };
            const n = o("WAWebOutgoingPeerMsgKey").buildOutgoingPeerMsgKey((yield r("WAWebMsgKey").newId()));
            const a = {
                id: n,
                to: o("WAWebUserPrefsMeUser").getMyPrimaryForOutgoingPeerMessage(),
                type: "protocol",
                subtype: "app_state_fatal_exception_notification",
                kind: o("WAWebMsgType").MsgKind.PeerMessage,
                appStateFatalExceptionNotification
            };
            yield o("WAWebApiPeerMessageStore").storePeerMessages([
                a
            ]);
            return o("WAWebSendAppStateSyncMsgJob").encryptAndSendKeyMsg({
                msg: a
            });
        });
        return s.apply(this, arguments);
    }
    l.sendAppStateFatalExceptionNotification = e;
}, 98);