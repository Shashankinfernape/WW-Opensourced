__d("WAWebPttComposerRecordingSessionGetters", [
    "WAWebGetters",
    "WAWebGettersCaches",
    "WAWebRecordingSessionStateEnum"
], function(t, n, r, o, a, i, l) {
    const e = o("WAWebGetters").createGetterFactories({
        createCache: o("WAWebGettersCaches").createRecordingSessionCache
    });
    const { clearCacheFor, computed, field } = e;
    const d = clearCacheFor;
    const m = field("exceedsMinDuration");
    const p = field("recordingState");
    const _ = computed(function([t]) {
        return t === o("WAWebRecordingSessionStateEnum").RecordingSessionState.RECORDING;
    }, [
        p
    ]);
    const f = field("isViewOnce");
    l.clearRecordingSessionGetterCacheFor = d;
    l.getExceedsMinDuration = m;
    l.getIsRecording = _;
    l.getIsViewOnce = f;
}, 98);