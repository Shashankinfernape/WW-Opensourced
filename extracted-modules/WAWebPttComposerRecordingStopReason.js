__d("WAWebPttComposerRecordingStopReason", [
    "$InternalEnum"
], function(t, n, r, o, a, i) {
    const e = n("$InternalEnum").Mirrored([
        "CANCEL_BUTTON",
        "PTT_TOO_SHORT",
        "SENT",
        "AI_THREAD_SWITCH",
        "OTHER"
    ]);
    function l(t) {
        const t_pttRecordingSession = t.pttRecordingSession;
        if (t_pttRecordingSession != null) {
            t_pttRecordingSession.stop(e.AI_THREAD_SWITCH);
            t.pttRecordingSession = null;
        }
    }
    i.RecordingSessionStopReason = e;
    i.cancelChatRecordingForThreadSwitch = l;
}, 66);