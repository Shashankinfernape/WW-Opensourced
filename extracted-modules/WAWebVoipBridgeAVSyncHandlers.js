__d("WAWebVoipBridgeAVSyncHandlers", [
    "Promise",
    "WAWebPonyfillsIdleCallback",
    "WAWebVoipAudioCaptureAndPlayback",
    "WAWebVoipGpuInfoProbe",
    "WAWebVoipVideoRenderSource",
    "WAWebVoipVideoRendererRegistry",
    "justknobx"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = 1000;
    const u = {
        disableAVSync: function() {
            o("WAWebVoipVideoRendererRegistry").videoRendererRegistry.disableAVSync();
        },
        resetVideoEnhancementState: function() {
            o("WAWebVoipVideoRendererRegistry").videoRendererRegistry.resetVideoEnhancementState();
        },
        reloadVideoEnhancement: function() {
            o("WAWebVoipVideoRendererRegistry").videoRendererRegistry.reloadVideoEnhancement();
        },
        consumeAVSyncMetrics: function() {
            return o("WAWebVoipVideoRendererRegistry").videoRendererRegistry.consumeAVSyncMetrics();
        },
        peekPerParticipantAVSyncMetrics: function({ isScreenShare, jid }) {
            const r = o("WAWebVoipVideoRenderSource").WAWebVoipVideoRenderSource.fromWire(jid, isScreenShare);
            if (r == null) {
                return null;
            }
            return o("WAWebVoipVideoRendererRegistry").videoRendererRegistry.peekPerParticipantAVSyncMetrics(r);
        },
        consumeAudioCaptureMetrics: function() {
            return o("WAWebVoipAudioCaptureAndPlayback").consumeAudioCaptureMetrics();
        },
        consumeAudioPlaybackMetrics: function() {
            return o("WAWebVoipAudioCaptureAndPlayback").consumeAudioPlaybackMetrics();
        },
        consumeWebCodecsFatalErrorCount: function() {
            return o("WAWebVoipVideoRendererRegistry").videoRendererRegistry.consumeWebCodecsFatalErrorCount();
        },
        consumeWebCodecsDecodeOrderMetrics: function() {
            return o("WAWebVoipVideoRendererRegistry").videoRendererRegistry.consumeWebCodecsDecodeOrderMetrics();
        },
        detectGpuInfo: function() {
            if (r("justknobx")._("6199")) {
                return new (e || (e = n("Promise")))(function(e) {
                    let t = false;
                    const n = function() {
                        if (!t) {
                            t = true;
                            e(o("WAWebVoipGpuInfoProbe").detectGpuInfo());
                        }
                    };
                    o("WAWebPonyfillsIdleCallback").requestIdleCallback(n);
                    window.setTimeout(n, s);
                });
            }
            return (e || (e = n("Promise"))).resolve(null);
        }
    };
    l.VoipBridgeAVSyncHandlers = u;
}, 98);