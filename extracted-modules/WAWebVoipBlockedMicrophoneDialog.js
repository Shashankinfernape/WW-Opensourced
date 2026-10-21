__d("WAWebVoipBlockedMicrophoneDialog", [
    "WAWebCallCollection",
    "WAWebCoreActionsODS",
    "WAWebVoipBlockedMicrophoneJoinState",
    "WAWebVoipCallStateUtils",
    "WAWebVoipDevicePermissionDialogLoader.react"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
        o("WAWebVoipDevicePermissionDialogLoader.react").openDevicePermissionDialog(e, t, {
            action: "unmute",
            call: n,
            isBlocked: true
        });
    }
    function s(t, { isDocPip, showGuide }) {
        const activeCall = r("WAWebCallCollection").activeCall;
        if (isDocPip || activeCall == null || o("WAWebVoipCallStateUtils").isCallIncoming(activeCall.getState()) || o("WAWebVoipBlockedMicrophoneJoinState").getBlockedMicrophoneJoinCallId() !== activeCall.id) {
            showGuide();
            return;
        }
        const s = o("WAWebVoipBlockedMicrophoneJoinState").claimBlockedMicrophonePrompt(activeCall.id);
        o("WAWebVoipDevicePermissionDialogLoader.react").loadDevicePermissionDialog().then((n)=>{
            if (!(r("WAWebCallCollection").activeCall !== activeCall || o("WAWebVoipBlockedMicrophoneJoinState").getBlockedMicrophoneJoinCallId() !== activeCall.id)) {
                if (n == null) {
                    showGuide();
                    return;
                }
                if (!s) {
                    o("WAWebCoreActionsODS").logCallBlockedMicJoin("reopened");
                }
                e(t, n, activeCall);
            }
        });
    }
    l.openBlockedMicrophoneDialog = e;
    l.showBlockedMicrophoneDialog = s;
}, 98);