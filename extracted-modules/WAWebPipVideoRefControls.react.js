__d("WAWebPipVideoRefControls.react", [
    "WAWebPipVideoControls.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    const e = [
        "ref"
    ];
    let s;
    const u = s || (s = o("react"));
    function c(t) {
        const n = o("react-compiler-runtime").c(37);
        let a;
        let i;
        if (n[0] !== t) {
            i = t.ref;
            a = babelHelpers.objectWithoutPropertiesLoose(t, e);
            n[0] = t;
            n[1] = a;
            n[2] = i;
        } else {
            a = n[1];
            i = n[2];
        }
        const l = a;
        const { disableAudioControls, refVideo } = l;
        let d;
        if (n[3] !== refVideo) {
            d = function() {
                refVideo?.play();
            };
            n[3] = refVideo;
            n[4] = d;
        } else {
            d = n[4];
        }
        const onPlay = d;
        let p;
        if (n[5] !== refVideo) {
            p = function() {
                refVideo?.pause();
            };
            n[5] = refVideo;
            n[6] = p;
        } else {
            p = n[6];
        }
        const onPause = p;
        let f;
        if (n[7] !== refVideo) {
            f = function(t) {
                refVideo?.setCurrentTime(t);
            };
            n[7] = refVideo;
            n[8] = f;
        } else {
            f = n[8];
        }
        const g = f;
        let h;
        if (n[9] !== disableAudioControls || n[10] !== refVideo) {
            h = function(t) {
                if (disableAudioControls !== true) {
                    if (refVideo != null) {
                        refVideo.setVolume(t);
                    }
                }
            };
            n[9] = disableAudioControls;
            n[10] = refVideo;
            n[11] = h;
        } else {
            h = n[11];
        }
        const y = h;
        let C;
        if (n[12] !== disableAudioControls || n[13] !== refVideo) {
            C = function(t) {
                if (disableAudioControls !== true) {
                    if (refVideo != null) {
                        refVideo.setMuted(t);
                    }
                }
            };
            n[12] = disableAudioControls;
            n[13] = refVideo;
            n[14] = C;
        } else {
            C = n[14];
        }
        const onMutedValueChange = C;
        if (!a.refVideo) {
            return null;
        }
        const a_videoMetadata = a.videoMetadata;
        if (!a_videoMetadata) {
            return null;
        }
        const S = disableAudioControls === true ? 0 : a_videoMetadata.volume;
        const R = disableAudioControls === true ? true : a_videoMetadata.muted;
        const onProgressChange = a.handleSetCurrentTimeByControls ? a.handleSetCurrentTimeByControls : g;
        let E;
        if (n[15] !== R || n[16] !== S || n[17] !== onPause || n[18] !== onPlay || n[19] !== onMutedValueChange || n[20] !== y || n[21] !== a.controlsClassName || n[22] !== a.ctwaSourceUrl || n[23] !== a.disableAudioControls || n[24] !== a.isFullscreenMode || n[25] !== a.isVideoPlaying || n[26] !== a.newPiPStyle || n[27] !== a.onClose || n[28] !== a.onFullscreenToggle || n[29] !== a.onPlaybackRateChange || n[30] !== a.playbackRate || n[31] !== i || n[32] !== onProgressChange || n[33] !== a_videoMetadata.bufferedTime || n[34] !== a_videoMetadata.currentTime || n[35] !== a_videoMetadata.duration) {
            const Component = r("WAWebPipVideoControls.react");
            E = <Component ref={i} duration={a_videoMetadata.duration} progress={a_videoMetadata.currentTime} volume={S} muted={R} bufferedTime={a_videoMetadata.bufferedTime} onPlay={onPlay} onPause={onPause} onProgressChange={onProgressChange} onVolumeValueChange={y} onMutedValueChange={onMutedValueChange} isVideoPlaying={a.isVideoPlaying} isFullscreenMode={a.isFullscreenMode} className={a.controlsClassName} ctwaSourceUrl={a.ctwaSourceUrl} newPiPStyle={a.newPiPStyle} onFullscreenToggle={a.onFullscreenToggle} onClose={a.onClose} playbackRate={a.playbackRate} onPlaybackRateChange={a.onPlaybackRateChange} disableAudioControls={a.disableAudioControls}/>;
            n[15] = R;
            n[16] = S;
            n[17] = onPause;
            n[18] = onPlay;
            n[19] = onMutedValueChange;
            n[20] = y;
            n[21] = a.controlsClassName;
            n[22] = a.ctwaSourceUrl;
            n[23] = a.disableAudioControls;
            n[24] = a.isFullscreenMode;
            n[25] = a.isVideoPlaying;
            n[26] = a.newPiPStyle;
            n[27] = a.onClose;
            n[28] = a.onFullscreenToggle;
            n[29] = a.onPlaybackRateChange;
            n[30] = a.playbackRate;
            n[31] = i;
            n[32] = onProgressChange;
            n[33] = a_videoMetadata.bufferedTime;
            n[34] = a_videoMetadata.currentTime;
            n[35] = a_videoMetadata.duration;
            n[36] = E;
        } else {
            E = n[36];
        }
        return E;
    }
    l.VideoRefControls = c;
}, 98);