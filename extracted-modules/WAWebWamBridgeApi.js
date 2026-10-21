__d("WAWebWamBridgeApi", [
    "WAWebEphemeralKeepInChatWamUtils",
    "WAWebOTPLoggingHelper"
], function(t, n, r, o, a, i, l) {
    const e = {
        logTieBreakIgnoredKicWam: function({ keepInChatMessage }) {
            return o("WAWebEphemeralKeepInChatWamUtils").logTieBreakIgnoredKic(keepInChatMessage);
        },
        logOTPMessageReceivedActions: function({ msgData }) {
            o("WAWebOTPLoggingHelper").logOTPMessageReceived(msgData);
        },
        logOTPMessageReadActions: function({ msgRow }) {
            o("WAWebOTPLoggingHelper").logOTPMessageRead(msgRow);
        }
    };
    l.WamBridgeApi = e;
}, 98);