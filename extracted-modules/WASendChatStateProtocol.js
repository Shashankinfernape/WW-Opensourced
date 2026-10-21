__d("WASendChatStateProtocol", [
    "WALogger",
    "WASmaxChatstateClientNotificationRPC"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    function s(t, n) {
        o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "sendChatStateProtocol Sending ",
            " to ",
            ""
        ])), n, t);
        let r;
        if (n === "idle") {
            r = {
                isPaused: true
            };
        } else {
            r = {
                composing: {
                    hasComposingMediaAudio: n === "recording_audio"
                }
            };
        }
        return o("WASmaxChatstateClientNotificationRPC").sendClientNotificationRPC({
            chatstateTo: t,
            stateTypesArgs: r
        });
    }
    l.sendChatStateProtocol = s;
}, 98);