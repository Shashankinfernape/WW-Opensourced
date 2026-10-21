__d("WAWebPipYoutubeVideoTag.react", [
    "WAWebBoolFunc",
    "WAWebDebounce",
    "WAWebPttAudioChannels",
    "WAWebUserPrefsGeneral",
    "WAWebYoutube.react",
    "react",
    "useLazyRef",
    "useWAWebInterval",
    "useWAWebOnUnmount",
    "useWAWebStableCallback"
], function(t, n, r, o, a, i, l) {
    const e = [
        "ref"
    ];
    let s;
    const u = s || (s = o("react"));
    const c = s;
    const { useEffect, useImperativeHandle, useRef } = c;
    const _ = r("WAWebDebounce")(function(e) {
        o("WAWebUserPrefsGeneral").setMediaVolumeSetting(e);
    }, 500);
    const f = r("WAWebDebounce")(function(e) {
        o("WAWebUserPrefsGeneral").setMediaMutedSetting(e);
    }, 500);
    const g = {
        UNSTARTED: -1,
        ENDED: 0,
        PLAYING: 1,
        PAUSED: 2,
        BUFFERING: 3,
        CUED: 5
    };
    const h = {
        width: "100%",
        height: "100%",
        playerVars: {
            cc_load_policy: 1,
            iv_load_policy: 3,
            controls: 0,
            playsinline: 1,
            rel: 0,
            autoplay: 0
        }
    };
    const widget_referrer = "https://whatsapp.com";
    function C(t) {
        let n;
        const t_ref = t.ref;
        const i = babelHelpers.objectWithoutPropertiesLoose(t, e);
        const lRef = useRef(null);
        const sRef = useRef(null);
        const cRef = useRef(0);
        const CRef = useRef(0);
        const b = r("useLazyRef")(function() {
            return Symbol("audio-channel");
        });
        const vRef = useRef(null);
        const play = (n = r("useWAWebStableCallback"))(function() {
            lRef.current?.playVideo();
        });
        const pause = n(function() {
            lRef.current?.pauseVideo();
        });
        const setCurrentTime = n(function(e) {
            lRef.current?.seekTo(e, true);
        });
        const getCurrentTime = n(function() {
            return lRef.current?.getCurrentTime() ?? 0;
        });
        const getVolume = n(function() {
            return (lRef.current?.getVolume() ?? 0) * 0.01;
        });
        const getDuration = n(function() {
            return lRef.current?.getDuration() ?? 0;
        });
        const getMuted = n(function() {
            return lRef.current?.isMuted() ?? false;
        });
        const D = function() {
            const lRef_current = lRef.current;
            if (lRef_current) {
                const t = lRef_current.getCurrentTime();
                if (t !== cRef.current) {
                    cRef.current = t;
                    i.onTimeUpdate(t);
                }
                const n = lRef_current.getVideoLoadedFraction();
                if (n !== CRef.current) {
                    CRef.current = n;
                    const r = sRef.current ? sRef.current.duration * n : 0;
                    i.onProgress([
                        [
                            0,
                            r
                        ]
                    ]);
                }
                const o = sRef.current;
                if (o) {
                    const volume = lRef_current.getVolume() * 0.01;
                    const muted = lRef_current.isMuted();
                    if (volume !== o.volume || muted !== o.muted) {
                        sRef.current = babelHelpers.extends({}, o, {
                            volume,
                            muted
                        });
                        i.onVolumeChange({
                            volume,
                            muted
                        });
                    }
                }
            }
        };
        const x = r("useWAWebInterval")(D, 250);
        const $ = x[0];
        const P = ()=>{
            if (typeof i.startTime === "number") {
                lRef.current?.seekTo(i.startTime, true);
            }
        };
        const setMuted = n(function(e) {
            const lRef_current = lRef.current;
            if (lRef_current) {
                if (e) {
                    lRef_current.mute();
                } else {
                    lRef_current.unMute();
                }
                f(e);
            }
        });
        const setVolume = n(function(e) {
            if (lRef.current) {
                lRef.current.setVolume(e * 100);
                _(e);
            }
        });
        const setPlaybackRate = n(function(e) {
            let t;
            if (!((t = lRef.current) == null || t.setPlaybackRate == null)) {
                t.setPlaybackRate(e);
            }
        });
        const onReady = function(t) {
            lRef.current = t.target;
            const lRef_current = lRef.current;
            const n = o("WAWebUserPrefsGeneral").getMediaVolumeSettings();
            const { muted, volume } = n;
            const u = lRef_current.getDuration();
            const volume_1 = volume ?? lRef_current.getVolume() * 0.01;
            const muted_1 = muted ?? lRef_current.isMuted();
            const p = lRef_current.getIframe().getBoundingClientRect();
            const { height, width } = p;
            sRef.current = {
                duration: u,
                volume: volume_1,
                muted: muted_1,
                videoWidth: width,
                videoHeight: height
            };
            i.onLoadedMetadata(sRef.current);
            cRef.current = lRef_current.getCurrentTime();
            $();
            if (i.startTime != null) {
                P();
            }
            if (volume != null) {
                setVolume(volume);
            }
            if (muted != null) {
                setMuted(muted);
            }
        };
        const onPlay = function(t) {
            vRef.current = o("WAWebPttAudioChannels").MainAudioChannel.claim(b.current, pause);
            i.onPlaying();
        };
        const O = function(t) {
            vRef.current?.();
            i.onPause();
        };
        const B = function(t) {
            i.onEnded();
        };
        const onStateChange = function(t) {
            if (t.target.getPlayerState() !== g.PLAYING) {
                i.onPause();
            }
        };
        useEffect(function() {
            P();
        }, [
            i.startTime
        ]);
        r("useWAWebOnUnmount")(function() {
            vRef.current?.();
        });
        useImperativeHandle(t_ref, function() {
            return {
                play,
                pause,
                setCurrentTime,
                getCurrentTime,
                setVolume,
                setMuted,
                setPlaybackRate,
                getVolume,
                getDuration,
                getMuted,
                getAudioDisabled: o("WAWebBoolFunc").returnFalse
            };
        }, [
            play,
            pause,
            setCurrentTime,
            getCurrentTime,
            setVolume,
            setMuted,
            setPlaybackRate,
            getVolume,
            getDuration,
            getMuted
        ]);
        const i_counterAbuseData = i.counterAbuseData;
        const playerVars = babelHelpers.extends({}, h.playerVars, {
            autoplay: i.autoPlay ? 1 : 0,
            widget_referrer,
            origin: window.location.origin
        }, i_counterAbuseData != null ? {
            rct: i_counterAbuseData.counterAbuseToken,
            rctn: i_counterAbuseData.nonce
        } : {});
        const opts = babelHelpers.extends({}, h, {
            playerVars
        });
        const Component = r("WAWebYoutube.react");
        return <Component videoId={i.youtubeVideoId} opts={opts} onReady={onReady} onPlay={onPlay} onPause={O} onEnd={B} onError={i.onEnded} onStateChange={onStateChange}/>;
    }
    C.displayName = `${C.name} [from ${i.id}]`;
    l.default = C;
}, 98);