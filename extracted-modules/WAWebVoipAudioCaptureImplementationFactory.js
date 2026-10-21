__d("WAWebVoipAudioCaptureImplementationFactory", [
    "$InternalEnum",
    "WALogger",
    "WAWebABProps",
    "WAWebUA",
    "WAWebVoipAudioCaptureScriptProcessor",
    "WAWebVoipAudioCaptureSharedBufferWorklet",
    "WAWebVoipAudioCaptureWorklet"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = n("$InternalEnum")({
        DEFAULT: 0,
        SCRIPT_PROCESSOR: 1,
        AUDIO_WORKLET: 2,
        SHARED_BUFFER_WORKLET: 3
    });
    function u() {
        const n = o("WAWebABProps").getABPropConfigValue("web_voip_audio_capture_impl");
        let r = s.cast(n) ?? s.DEFAULT;
        if (o("WAWebUA").UA.isFirefox) {
            r = s.SCRIPT_PROCESSOR;
        }
        const a = r === s.SCRIPT_PROCESSOR ? new (o("WAWebVoipAudioCaptureScriptProcessor")).WAWebVoipAudioCaptureScriptProcessor : r === s.AUDIO_WORKLET ? new (o("WAWebVoipAudioCaptureWorklet")).WAWebVoipAudioCaptureWorklet : r === s.SHARED_BUFFER_WORKLET ? new (o("WAWebVoipAudioCaptureSharedBufferWorklet")).WAWebVoipAudioCaptureSharedBufferWorklet : new (o("WAWebVoipAudioCaptureSharedBufferWorklet")).WAWebVoipAudioCaptureSharedBufferWorklet;
        o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [AV:AudioCapture] using implementation: ",
            ""
        ])), o("WAWebUA").UA.isFirefox ? "script-processor (Firefox override)" : n ?? "default");
        return a;
    }
    l.createAudioCaptureImplementation = u;
}, 98);