__d("WAWebPipSharedVideoPlayer.react", [
    "fbt",
    "WADeepEquals",
    "WALogger",
    "WAWebABProps",
    "WAWebDomFullscreen",
    "WAWebExternalLink.react",
    "WAWebFlex.react",
    "WAWebMediaOpaqueData",
    "WAWebMediaStage.react",
    "WAWebMediaStateControls.react",
    "WAWebMediaTypes",
    "WAWebMessageThumbShadeTop.react",
    "WAWebMsgGetters",
    "WAWebMusicNewsletterAttribution.react",
    "WAWebPipButton.react",
    "WAWebPipCloseButton.react",
    "WAWebPipConst",
    "WAWebPipFullscreenToggleButton.react",
    "WAWebPipMsgVideoTagLoadable.react",
    "WAWebPipOverlay.react",
    "WAWebPipShade.react",
    "WAWebPipUrlVideoTagLoadable.react",
    "WAWebPipVideoRefControls.react",
    "WAWebSpinner.react",
    "WAWebUA",
    "WAWebUserPrefsGeneral",
    "WAWebVelocityTransitionGroup",
    "WAWebVideoUtils",
    "WDSIconIcAlertWarning.react",
    "WDSIconIcChevronRight.react",
    "react",
    "react-compiler-runtime",
    "useBoolean",
    "useWAWebDebouncedCallback",
    "useWAWebIsKeyboardUser",
    "useWAWebListener",
    "useWAWebStableCallback",
    "useWAWebVideoPlaybackRate"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = [
        "ref"
    ];
    let c;
    const d = c || (c = o("react"));
    const m = c;
    const { useEffect, useImperativeHandle, useRef, useState } = m;
    const h = {
        errorLinkChevron: {
            marginInlineStart: "x7phf20",
            marginTop: "x7r5mf7",
            $$css: true
        },
        loadingOverlay: {
            position: "x10l6tqk",
            top: "x13vifvy",
            insetInlineStart: "x1o0tod",
            insetInlineEnd: "xtijo5x",
            left: null,
            right: null,
            bottom: "x1ey2m1c",
            $$css: true
        },
        musicAttribution: {
            position: "x10l6tqk",
            top: "x1tk7jg1",
            insetInlineStart: "x1r4y97",
            left: null,
            right: null,
            $$css: true
        },
        musicAttributionHover: {
            insetInlineStart: "x9pwknu",
            insetInlineEnd: "x1g9hn12",
            left: null,
            right: null,
            transition: "x1xgqf3o",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            $$css: true
        }
    };
    const y = 3000;
    function C(e) {
        const t = o("react-compiler-runtime").c(24);
        const { autoPlay, isFullscreenMode, ogVideoInfo, onBufferUpdate, onEnded, onError, onLoadedData, onLoadedMetadata, onPause, onPlaying, onTimeUpdate, onVolumeChange, setIsLoading, setRefVideo, startTime } = e;
        if (!ogVideoInfo) {
            return null;
        }
        const C = `url(${ogVideoInfo.previewUrl})`;
        let b;
        if (t[0] !== C) {
            b = {
                backgroundImage: C
            };
            t[0] = C;
            t[1] = b;
        } else {
            b = t[1];
        }
        const v = b;
        let S;
        if (t[2] !== isFullscreenMode || t[3] !== v) {
            S = isFullscreenMode ? null : <div className="x1xsqp64 x18d0r48 x1df5jli x10l6tqk x13vifvy x1o0tod xtijo5x x1ey2m1c" style={v}/>;
            t[2] = isFullscreenMode;
            t[3] = v;
            t[4] = S;
        } else {
            S = t[4];
        }
        let R;
        if (t[5] !== autoPlay || t[6] !== ogVideoInfo.videoMsg || t[7] !== ogVideoInfo.videoUrl || t[8] !== onBufferUpdate || t[9] !== onEnded || t[10] !== onError || t[11] !== onLoadedData || t[12] !== onLoadedMetadata || t[13] !== onPause || t[14] !== onPlaying || t[15] !== onTimeUpdate || t[16] !== onVolumeChange || t[17] !== setIsLoading || t[18] !== setRefVideo || t[19] !== startTime) {
            const Component = o("WAWebPipUrlVideoTagLoadable.react").UrlVideoTagLoadable;
            R = ogVideoInfo.videoUrl !== "" ? <Component key="floating-media" msg={ogVideoInfo?.videoMsg} ref={setRefVideo} url={ogVideoInfo.videoUrl} startTime={startTime} onEnded={onEnded} onError={onError} onLoadedMetadata={onLoadedMetadata} onPause={onPause} onPlaying={onPlaying} onBufferUpdate={onBufferUpdate} onTimeUpdate={onTimeUpdate} onWaiting={setIsLoading} onVolumeChange={onVolumeChange} autoPlay={autoPlay} onLoadedData={onLoadedData}/> : null;
            t[5] = autoPlay;
            t[6] = ogVideoInfo.videoMsg;
            t[7] = ogVideoInfo.videoUrl;
            t[8] = onBufferUpdate;
            t[9] = onEnded;
            t[10] = onError;
            t[11] = onLoadedData;
            t[12] = onLoadedMetadata;
            t[13] = onPause;
            t[14] = onPlaying;
            t[15] = onTimeUpdate;
            t[16] = onVolumeChange;
            t[17] = setIsLoading;
            t[18] = setRefVideo;
            t[19] = startTime;
            t[20] = R;
        } else {
            R = t[20];
        }
        let L;
        if (t[21] !== S || t[22] !== R) {
            L = <>{S}{R}</>;
            t[21] = S;
            t[22] = R;
            t[23] = L;
        } else {
            L = t[23];
        }
        return L;
    }
    function B2Component(e) {
        const t = o("react-compiler-runtime").c(36);
        const { autoPlay, isFullscreenMode, isLoading, isMediaRenderable, isVideoError, isVideoTagMounted, msgVideoInfo, onBufferUpdate, onEnded, onError, onLoadedData, onLoadedMetadata, onPause, onPlaying, onTimeUpdate, onVolumeChange, setIsLoadedWithCancel, setIsLoadingDebounced, setRefVideo, startTime } = e;
        if (!msgVideoInfo) {
            return null;
        }
        const preview = msgVideoInfo.mediaData.preview;
        if (isMediaRenderable) {
            let T;
            if (t[0] !== preview) {
                T = preview instanceof r("WAWebMediaOpaqueData") ? {
                    backgroundImage: `url(${preview.url()})`
                } : undefined;
                t[0] = preview;
                t[1] = T;
            } else {
                T = t[1];
            }
            const D = T;
            let x;
            if (t[2] !== isFullscreenMode || t[3] !== D) {
                x = isFullscreenMode ? null : <div className="x1xsqp64 x18d0r48 x1df5jli x10l6tqk x13vifvy x1o0tod xtijo5x x1ey2m1c" style={D}/>;
                t[2] = isFullscreenMode;
                t[3] = D;
                t[4] = x;
            } else {
                x = t[4];
            }
            let $;
            if (t[5] !== autoPlay || t[6] !== isVideoError || t[7] !== msgVideoInfo.mediaData || t[8] !== msgVideoInfo.msg || t[9] !== onBufferUpdate || t[10] !== onEnded || t[11] !== onError || t[12] !== onLoadedData || t[13] !== onLoadedMetadata || t[14] !== onPause || t[15] !== onPlaying || t[16] !== onTimeUpdate || t[17] !== onVolumeChange || t[18] !== setIsLoadedWithCancel || t[19] !== setIsLoadingDebounced || t[20] !== setRefVideo || t[21] !== startTime) {
                const Component = o("WAWebPipMsgVideoTagLoadable.react").MsgVideoTagLoadable;
                $ = isVideoError ? null : <Component key="floating-media" ref={setRefVideo} msg={msgVideoInfo.msg} mediaData={msgVideoInfo.mediaData} className="x10l6tqk x5yr21d xh8yej3" startTime={startTime} onEnded={onEnded} onError={onError} onLoadedMetadata={onLoadedMetadata} onPause={onPause} onPlaying={onPlaying} onBufferUpdate={onBufferUpdate} onTimeUpdate={onTimeUpdate} onVolumeChange={onVolumeChange} autoPlay={autoPlay} onWaiting={setIsLoadingDebounced} onCanPlay={setIsLoadedWithCancel} onLoadedData={onLoadedData}/>;
                t[5] = autoPlay;
                t[6] = isVideoError;
                t[7] = msgVideoInfo.mediaData;
                t[8] = msgVideoInfo.msg;
                t[9] = onBufferUpdate;
                t[10] = onEnded;
                t[11] = onError;
                t[12] = onLoadedData;
                t[13] = onLoadedMetadata;
                t[14] = onPause;
                t[15] = onPlaying;
                t[16] = onTimeUpdate;
                t[17] = onVolumeChange;
                t[18] = setIsLoadedWithCancel;
                t[19] = setIsLoadingDebounced;
                t[20] = setRefVideo;
                t[21] = startTime;
                t[22] = $;
            } else {
                $ = t[22];
            }
            let P;
            if (t[23] !== isLoading || t[24] !== isVideoTagMounted) {
                const Component = o("WAWebFlex.react").FlexColumn;
                P = isLoading && isVideoTagMounted && o("WAWebABProps").getABPropConfigValue("video_stream_buffering_ui_enabled") ? <Component justify="center" align="center" xstyle={h.loadingOverlay}>{d.jsx(o("WAWebSpinner.react").Spinner, {
                    color: "white"
                })}</Component> : null;
                t[23] = isLoading;
                t[24] = isVideoTagMounted;
                t[25] = P;
            } else {
                P = t[25];
            }
            let N;
            if (t[26] !== x || t[27] !== $ || t[28] !== P) {
                N = <>{x}{$}{P}</>;
                t[26] = x;
                t[27] = $;
                t[28] = P;
                t[29] = N;
            } else {
                N = t[29];
            }
            return N;
        }
        if (preview instanceof r("WAWebMediaOpaqueData")) {
            let M;
            let w;
            if (t[30] === Symbol.for("react.memo_cache_sentinel")) {
                M = {
                    className: "x1df5jli x5yr21d x19kjcj4 xh8yej3"
                };
                w = s._("Preview");
                t[30] = M;
                t[31] = w;
            } else {
                M = t[30];
                w = t[31];
            }
            let A;
            if (t[32] !== preview) {
                A = preview.url();
                t[32] = preview;
                t[33] = A;
            } else {
                A = t[33];
            }
            let F;
            if (t[34] !== A) {
                F = <img key="floating-media" {...babelHelpers.extends({}, M, {
                    alt: w,
                    src: A,
                    draggable: "false"
                })}/>;
                t[34] = A;
                t[35] = F;
            } else {
                F = t[35];
            }
            return F;
        }
        return null;
    }
    function V4Component(e) {
        const t = o("react-compiler-runtime").c(37);
        const { autoPlay, isFullscreenMode, isLoading, isMediaRenderable, isVideoError, isVideoTagMounted, msgVideoInfo, ogVideoInfo, onBufferUpdate, onEnded, onError, onLoadedData, onLoadedMetadata, onPause, onPlaying, onTimeUpdate, onVolumeChange, setIsLoadedWithCancel, setIsLoading, setIsLoadingDebounced, setRefVideo, startTime, type } = e;
        switch(type){
            case o("WAWebPipConst").PlayerType.FLOATER:
            case o("WAWebPipConst").PlayerType.MEDIA_VIEWER:
                {
                    let D;
                    if (t[0] !== autoPlay || t[1] !== isFullscreenMode || t[2] !== isLoading || t[3] !== isMediaRenderable || t[4] !== isVideoError || t[5] !== isVideoTagMounted || t[6] !== msgVideoInfo || t[7] !== onBufferUpdate || t[8] !== onEnded || t[9] !== onError || t[10] !== onLoadedData || t[11] !== onLoadedMetadata || t[12] !== onPause || t[13] !== onPlaying || t[14] !== onTimeUpdate || t[15] !== onVolumeChange || t[16] !== setIsLoadedWithCancel || t[17] !== setIsLoadingDebounced || t[18] !== setRefVideo || t[19] !== startTime) {
                        D = <B2Component msgVideoInfo={msgVideoInfo} isMediaRenderable={isMediaRenderable} isFullscreenMode={isFullscreenMode} isVideoError={isVideoError} setRefVideo={setRefVideo} startTime={startTime} onError={onError} onEnded={onEnded} onLoadedMetadata={onLoadedMetadata} onPause={onPause} onPlaying={onPlaying} onBufferUpdate={onBufferUpdate} onTimeUpdate={onTimeUpdate} isLoading={isLoading} isVideoTagMounted={isVideoTagMounted} setIsLoadingDebounced={setIsLoadingDebounced} setIsLoadedWithCancel={setIsLoadedWithCancel} onVolumeChange={onVolumeChange} autoPlay={autoPlay} onLoadedData={onLoadedData}/>;
                        t[0] = autoPlay;
                        t[1] = isFullscreenMode;
                        t[2] = isLoading;
                        t[3] = isMediaRenderable;
                        t[4] = isVideoError;
                        t[5] = isVideoTagMounted;
                        t[6] = msgVideoInfo;
                        t[7] = onBufferUpdate;
                        t[8] = onEnded;
                        t[9] = onError;
                        t[10] = onLoadedData;
                        t[11] = onLoadedMetadata;
                        t[12] = onPause;
                        t[13] = onPlaying;
                        t[14] = onTimeUpdate;
                        t[15] = onVolumeChange;
                        t[16] = setIsLoadedWithCancel;
                        t[17] = setIsLoadingDebounced;
                        t[18] = setRefVideo;
                        t[19] = startTime;
                        t[20] = D;
                    } else {
                        D = t[20];
                    }
                    return D;
                }
            case o("WAWebPipConst").PlayerType.OG_FLOATER:
            case o("WAWebPipConst").PlayerType.OG_INLINE_PLAYER:
                {
                    let x;
                    if (t[21] !== autoPlay || t[22] !== isFullscreenMode || t[23] !== ogVideoInfo || t[24] !== onBufferUpdate || t[25] !== onEnded || t[26] !== onError || t[27] !== onLoadedData || t[28] !== onLoadedMetadata || t[29] !== onPause || t[30] !== onPlaying || t[31] !== onTimeUpdate || t[32] !== onVolumeChange || t[33] !== setIsLoading || t[34] !== setRefVideo || t[35] !== startTime) {
                        x = <C ogVideoInfo={ogVideoInfo} isFullscreenMode={isFullscreenMode} setRefVideo={setRefVideo} startTime={startTime} onEnded={onEnded} onError={onError} onLoadedMetadata={onLoadedMetadata} onPause={onPause} onPlaying={onPlaying} onBufferUpdate={onBufferUpdate} onTimeUpdate={onTimeUpdate} setIsLoading={setIsLoading} onVolumeChange={onVolumeChange} autoPlay={autoPlay} onLoadedData={onLoadedData}/>;
                        t[21] = autoPlay;
                        t[22] = isFullscreenMode;
                        t[23] = ogVideoInfo;
                        t[24] = onBufferUpdate;
                        t[25] = onEnded;
                        t[26] = onError;
                        t[27] = onLoadedData;
                        t[28] = onLoadedMetadata;
                        t[29] = onPause;
                        t[30] = onPlaying;
                        t[31] = onTimeUpdate;
                        t[32] = onVolumeChange;
                        t[33] = setIsLoading;
                        t[34] = setRefVideo;
                        t[35] = startTime;
                        t[36] = x;
                    } else {
                        x = t[36];
                    }
                    return x;
                }
        }
        return null;
    }
    function S(e) {
        const t = o("react-compiler-runtime").c(5);
        const { msgVideoInfo, ogVideoInfo, type } = e;
        switch(type){
            case o("WAWebPipConst").PlayerType.FLOATER:
                {
                    if (!msgVideoInfo) {
                        return null;
                    }
                    let l;
                    if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
                        l = {
                            className: "x5yr21d x1o0tod x10l6tqk x13vifvy xh8yej3"
                        };
                        t[0] = l;
                    } else {
                        l = t[0];
                    }
                    let s;
                    if (t[1] !== msgVideoInfo.mediaData || t[2] !== msgVideoInfo.msg) {
                        s = <div {...babelHelpers.extends({}, l, {
                            children: d.jsx(r("WAWebMediaStage.react"), {
                                msg: msgVideoInfo.msg,
                                mediaData: msgVideoInfo.mediaData
                            })
                        })}/>;
                        t[1] = msgVideoInfo.mediaData;
                        t[2] = msgVideoInfo.msg;
                        t[3] = s;
                    } else {
                        s = t[3];
                    }
                    return s;
                }
            case o("WAWebPipConst").PlayerType.MEDIA_VIEWER:
                return null;
            case o("WAWebPipConst").PlayerType.OG_FLOATER:
            case o("WAWebPipConst").PlayerType.OG_INLINE_PLAYER:
                {
                    if (!ogVideoInfo) {
                        return null;
                    }
                    if (ogVideoInfo.videoUrl === "") {
                        let u;
                        if (t[4] === Symbol.for("react.memo_cache_sentinel")) {
                            u = <div className="x5yr21d x1o0tod x10l6tqk x13vifvy xh8yej3">{d.jsx(o("WAWebMediaStateControls.react").Pending, {})}</div>;
                            t[4] = u;
                        } else {
                            u = t[4];
                        }
                        return u;
                    }
                    return null;
                }
        }
        return null;
    }
    function R(e) {
        const t = o("react-compiler-runtime").c(4);
        const e_children = e.children;
        let a;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = d.jsx(r("WDSIconIcAlertWarning.react"), {
                directional: true,
                xstyle: h.errorLinkChevron,
                displayInline: true,
                height: 10,
                width: 11
            });
            t[0] = a;
        } else {
            a = t[0];
        }
        let i;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            i = s._("The video can't be played.");
            t[1] = i;
        } else {
            i = t[1];
        }
        let l;
        if (t[2] !== e_children) {
            const Component = r("WAWebPipOverlay.react");
            l = <Component>{a} {i}{e_children}</Component>;
            t[2] = e_children;
            t[3] = l;
        } else {
            l = t[3];
        }
        return l;
    }
    function L(e) {
        const i = o("react-compiler-runtime").c(5);
        const { ogVideoInfo, type } = e;
        if (type !== o("WAWebPipConst").PlayerType.OG_FLOATER || !ogVideoInfo || !(ogVideoInfo != null && ogVideoInfo.videoMsg)) {
            return null;
        }
        const href = ogVideoInfo.videoMsg?.ctwaContext?.sourceUrl ?? ogVideoInfo.videoMsg?.matchedText;
        let m;
        if (i[0] === Symbol.for("react.memo_cache_sentinel")) {
            m = "x1riek7e x1lliihq xav9cv8 xt0b8zv";
            i[0] = m;
        } else {
            m = i[0];
        }
        let p;
        let _;
        if (i[1] === Symbol.for("react.memo_cache_sentinel")) {
            p = <span>{s._("Open the link")}</span>;
            _ = d.jsx(r("WDSIconIcChevronRight.react"), {
                directional: true,
                displayInline: true,
                height: 30,
                width: 30,
                xstyle: h.errorLinkChevron
            });
            i[1] = p;
            i[2] = _;
        } else {
            p = i[1];
            _ = i[2];
        }
        let f;
        if (i[3] !== href) {
            const Component = o("WAWebExternalLink.react").ExternalLink;
            f = <Component className={m} href={href}>{p}{_}</Component>;
            i[3] = href;
            i[4] = f;
        } else {
            f = i[4];
        }
        return f;
    }
    function E(t) {
        const t_ref = t.ref;
        const s = babelHelpers.objectWithoutPropertiesLoose(t, u);
        const { autoPlay, disablePiPControls } = s;
        const C = disablePiPControls === undefined ? false : disablePiPControls;
        const { msgVideoInfo, noPip } = s;
        const k = noPip === undefined ? false : noPip;
        const { ogVideoInfo, onAspectRatio, onClose, onError, onFullscreenToggle, onLoadedData, onRefSet, onSetFullscreenToggleCallback, onTimeUpdate, onVideoDimensions, onVideoEnded, onVideoMetadataChange, startTime, type } = s;
        const qRef = useRef(null);
        const URef = useRef(null);
        const VRef = useRef([]);
        const H = r("useBoolean")(true);
        const { setFalse, setTrue, value } = H;
        const setIsLoadingDebounced = r("useWAWebDebouncedCallback")(setTrue, 250);
        const setIsLoadedWithCancel = r("useWAWebStableCallback")(function() {
            setIsLoadingDebounced.cancel();
            setFalse();
        });
        const X = useState(false);
        const isVideoTagMounted = X[0];
        const J = X[1];
        const Z = useState(null);
        const videoMetadata = Z[0];
        const te = Z[1];
        const ne = useState(false);
        const re = ne[0];
        const oe = ne[1];
        const ae = useState(false);
        const isVideoError = ae[0];
        const le = ae[1];
        const se = useState(false);
        const ue = se[0];
        const ce = se[1];
        const de = useState(false);
        const me = de[0];
        const pe = de[1];
        const _e = useState(r("WAWebDomFullscreen").isFullscreenMode());
        const fe = _e[0];
        const ge = _e[1];
        const he = useState(false);
        const disableAudioControls = he[0];
        const Ce = he[1];
        const be = useState(null);
        const ve = be[0];
        const onShowModal = be[1];
        const onCloseModal = r("useWAWebStableCallback")(function() {
            onShowModal(null);
        });
        const Le = r("useWAWebIsKeyboardUser")();
        const Le_isKeyboardUser = Le.isKeyboardUser;
        const ke = msgVideoInfo?.msg?.id?.toString() ?? null;
        const Ie = r("useWAWebVideoPlaybackRate")(ke);
        const { advancePlaybackRate, playbackRate } = Ie;
        useEffect(function() {
            qRef.current?.setPlaybackRate(playbackRate);
        }, [
            playbackRate
        ]);
        const xeRef = useRef(null);
        const $eRef = useRef(null);
        const Pe = r("useWAWebStableCallback")(function(e) {
            onFullscreenToggle?.(e);
        });
        useEffect(function() {
            Pe(fe);
        }, [
            fe,
            Pe
        ]);
        o("useWAWebListener").useListener(r("WAWebDomFullscreen"), "fullscreen_change", function() {
            if (r("WAWebDomFullscreen").isFullscreenMode() && r("WAWebDomFullscreen").getFullscreenElement() === URef.current) {
                ge(true);
            } else if (!r("WAWebDomFullscreen").isFullscreenMode()) {
                ge(false);
                onCloseModal();
            }
        });
        const Ne = r("useWAWebDebouncedCallback")(function() {
            pe(false);
        }, y);
        const Me = (t)=>{
            t.stopPropagation();
            r("WAWebDomFullscreen").exitFullscreen();
        };
        const we = (t)=>{
            t.stopPropagation();
            r("WAWebDomFullscreen").requestFullscreen(URef.current);
        };
        const Ae = function(t) {
            if (fe) {
                Me(t);
            } else {
                we(t);
            }
        };
        useEffect(function() {
            onSetFullscreenToggleCallback?.(Ae);
        }, []);
        const setRefVideo = r("useWAWebStableCallback")(function(e) {
            qRef.current = e;
            J(e != null);
            if (e != null) {
                if (onRefSet != null) {
                    onRefSet(e);
                }
                Ce(e.getAudioDisabled());
            }
        });
        const Oe = r("useWAWebDebouncedCallback")(function(t, n) {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[SharedVideoPlayer] error message: ",
                ""
            ])), n).sendLogs(`pip-shared-video-player-video-error-${t}`, {
                sampling: 0.01
            });
        }, 300 * 1000);
        const onLoadedMetadata = function(t) {
            const currentTime = startTime ?? 0;
            if (!t.videoWidth) {
                Oe("video-width", "metaData videoWidth is empty");
                le(true);
            }
            const r = qRef.current?.getAudioDisabled() === true;
            let t_volume = t.volume;
            let t_muted = t.muted;
            if (r) {
                const s = o("WAWebUserPrefsGeneral").getMediaVolumeSettings();
                t_volume = s.volume ?? t.volume;
                t_muted = s.muted;
            }
            te({
                duration: t.duration,
                currentTime,
                volume: t_volume,
                muted: t_muted,
                bufferedTime: 0
            });
            if (onAspectRatio && t.videoWidth && t.videoHeight) {
                onAspectRatio(t.videoWidth / t.videoHeight);
            }
            if (onVideoDimensions && t.videoWidth && t.videoHeight) {
                onVideoDimensions({
                    width: t.videoWidth,
                    height: t.videoHeight
                });
            }
        };
        const We = (t, n)=>{
            let e = 0;
            for(let r = 0; r < t.length; r++){
                if (n >= t[r][0] && n < t[r][1]) {
                    e = t[r][1];
                    break;
                }
            }
            return e;
        };
        const onTimeUpdate_1 = function(currentTime) {
            onTimeUpdate?.(currentTime);
            let e = null;
            if (videoMetadata) {
                const n = We(VRef.current, currentTime);
                e = babelHelpers.extends({}, videoMetadata, {
                    currentTime,
                    bufferedTime: n
                });
            }
            te(e);
        };
        const onVolumeChange = function(t) {
            if (qRef.current?.getAudioDisabled() !== true) {
                let n = null;
                if (videoMetadata) {
                    n = babelHelpers.extends({}, videoMetadata, {
                        volume: t.volume,
                        muted: t.muted
                    });
                }
                te(n);
            }
        };
        const onEnded = function() {
            if (onVideoEnded) {
                onVideoEnded();
            }
            oe(false);
        };
        const He = function(t, n) {
            if (t === 20) {
                oe(false);
                return;
            }
            Oe("generic", `code: ${t ?? -1}, message: ${n ?? ""}`);
            le(true);
            if (onError) {
                onError();
            }
        };
        const onPause = function() {
            oe(false);
        };
        const onPlaying = function() {
            oe(true);
        };
        const onBufferUpdate = function(t) {
            VRef.current = t;
            if (videoMetadata) {
                const e = videoMetadata.currentTime;
                const n = We(t, e);
                const r = babelHelpers.extends({}, videoMetadata, {
                    bufferedTime: n
                });
                te(r);
            }
        };
        const Ke = ()=>fe;
        const Qe = function() {
            return URef.current;
        };
        useEffect(function() {
            const $eRef_current = $eRef.current;
            const xeRef_current = xeRef.current;
            $eRef.current = re;
            xeRef.current = videoMetadata;
            if ($eRef_current !== re || !o("WADeepEquals").deepEqual(xeRef_current, videoMetadata)) {
                if (onVideoMetadataChange != null) {
                    onVideoMetadataChange(videoMetadata, re);
                }
            }
        }, [
            re,
            onVideoMetadataChange,
            videoMetadata
        ]);
        const getCurrentTimeFromVideo = function() {
            if (qRef.current) {
                return qRef.current.getCurrentTime();
            }
            return 0;
        };
        const Ye = ()=>{
            switch(type){
                case o("WAWebPipConst").PlayerType.FLOATER:
                case o("WAWebPipConst").PlayerType.MEDIA_VIEWER:
                    {
                        if (!msgVideoInfo) {
                            return false;
                        }
                        const e = msgVideoInfo.mediaData;
                        return e.mediaStage === o("WAWebMediaTypes").MediaDataStage.RESOLVED || o("WAWebVideoUtils").isMsgStreamable(msgVideoInfo.msg);
                    }
                case o("WAWebPipConst").PlayerType.OG_FLOATER:
                case o("WAWebPipConst").PlayerType.OG_INLINE_PLAYER:
                    return true;
            }
            return true;
        };
        useImperativeHandle(t_ref, function() {
            return {
                getContainerElement: Qe,
                getCurrentTimeFromVideo
            };
        });
        let Je;
        let Ze;
        let et;
        const tt = Ye();
        const nt = Ke();
        if (tt && !nt) {
            const Component = r("WAWebPipFullscreenToggleButton.react");
            Ze = <Component isFullscreenMode={fe} onClick={Ae}/>;
        }
        const Component = r("WAWebPipCloseButton.react");
        const rt = nt || s.onClose == null ? null : <Component isFullscreenMode={fe} onClick={function(t) {
            t.stopPropagation();
            s.onClose?.();
        }}/>;
        const ot = function(t) {
            t.stopPropagation();
            if (qRef.current) {
                if (re) {
                    qRef.current.pause();
                } else {
                    qRef.current.play();
                }
            }
        };
        switch(s.type){
            case o("WAWebPipConst").PlayerType.OG_FLOATER:
            case o("WAWebPipConst").PlayerType.FLOATER:
                Je = [
                    o("WAWebUA").UA.isSafari ? null : Ze,
                    rt
                ];
                break;
            case o("WAWebPipConst").PlayerType.OG_INLINE_PLAYER:
                Je = [
                    o("WAWebUA").UA.isSafari ? null : Ze,
                    rt
                ];
                et = ot;
                break;
            case o("WAWebPipConst").PlayerType.MEDIA_VIEWER:
                {
                    let at;
                    if (fe) {
                        at = rt;
                    } else {
                        const Component = o("WAWebPipButton.react").PiPButton;
                        at = !k && tt ? <Component onClick={function(t) {
                            t.stopPropagation();
                            if (s.onClose) {
                                s.onClose();
                            }
                            if (s.onOpenVideoFloater) {
                                s.onOpenVideoFloater();
                            }
                        }} theme={o("WAWebPipButton.react").PIP_BUTTON_THEME.PLAYER}/> : null;
                    }
                    Je = [
                        Ze,
                        at
                    ];
                    et = ot;
                    break;
                }
        }
        const it = msgVideoInfo?.msg;
        const lt = it != null && o("WAWebMsgGetters").getFirstMusicAnnotation(it) != null;
        const st = lt ? d.jsx(r("WAWebMessageThumbShadeTop.react"), {}) : null;
        let ut;
        if (fe) {
            ut = [
                d.jsx(r("WAWebPipShade.react"), {
                    theme: "upper"
                }, "upper"),
                d.jsx(r("WAWebPipShade.react"), {
                    theme: "lower"
                }, "lower")
            ];
        } else {
            ut = [
                s.type === o("WAWebPipConst").PlayerType.MEDIA_VIEWER ? d.jsx(r("WAWebPipShade.react"), {
                    theme: "full-sharp"
                }, "full-sharp") : d.jsx(r("WAWebPipShade.react"), {
                    theme: "full-rounded"
                }, "full-rounded")
            ];
        }
        const ct = isVideoError ? <R><L type={type} ogVideoInfo={ogVideoInfo}/></R> : null;
        const dt = C && !fe;
        const Component_1 = o("WAWebPipVideoRefControls.react").VideoRefControls;
        const mt = Ye() && videoMetadata != null ? <Component_1 refVideo={qRef.current} videoMetadata={videoMetadata} isFullscreenMode={fe} isVideoPlaying={re} ctwaSourceUrl={ogVideoInfo?.videoMsg?.ctwaContext?.sourceUrl} newPiPStyle={nt} onFullscreenToggle={nt ? Ae : undefined} onClose={nt ? onClose : undefined} playbackRate={playbackRate} onPlaybackRateChange={advancePlaybackRate} disableAudioControls={disableAudioControls}/> : null;
        const Component_2 = r("WAWebMusicNewsletterAttribution.react");
        const Component_3 = r("WAWebVelocityTransitionGroup");
        return <div key="elementsWrapped" {...babelHelpers.extends({
            ref: URef
        }, {
            0: {
                className: "xjbqb8w x5yr21d x1o0tod x6ikm8r x10wlt62 x10l6tqk x13vifvy xh8yej3"
            },
            1: {
                className: "xjbqb8w x5yr21d x1o0tod x6ikm8r x10wlt62 x10l6tqk x13vifvy xh8yej3 xt0e3qv"
            }
        }[!!fe << 0], {
            onMouseEnter: function(t) {
                ce(true);
            },
            onMouseLeave: function(t) {
                ce(false);
            },
            onMouseDown: function(t) {
                if (fe) {
                    t.stopPropagation();
                }
            },
            onMouseMove: function(t) {
                if (!ue) {
                    ce(true);
                }
                if (!me) {
                    pe(true);
                }
                Ne();
            },
            onClick: et,
            children: [
                <div {...babelHelpers.extends({}, {
                    0: {
                        className: "x5yr21d x19kjcj4 x6ikm8r x10wlt62 x1n2onr6 xh8yej3"
                    },
                    1: {
                        className: "x5yr21d x19kjcj4 x6ikm8r x10wlt62 x1n2onr6 xh8yej3 x9f619 xxh1dlw"
                    }
                }[!!nt << 0], {
                    children: <V4Component type={type} ogVideoInfo={ogVideoInfo} msgVideoInfo={msgVideoInfo} isMediaRenderable={Ye()} isFullscreenMode={fe} isVideoError={isVideoError} setRefVideo={setRefVideo} startTime={startTime} onError={He} onEnded={onEnded} onLoadedMetadata={onLoadedMetadata} onPause={onPause} onPlaying={onPlaying} onBufferUpdate={onBufferUpdate} onTimeUpdate={onTimeUpdate_1} isLoading={value} isVideoTagMounted={isVideoTagMounted} setIsLoading={setTrue} setIsLoadingDebounced={setIsLoadingDebounced} setIsLoadedWithCancel={setIsLoadedWithCancel} onVolumeChange={onVolumeChange} autoPlay={autoPlay} onLoadedData={onLoadedData}/>
                })}/>,
                <S type={type} msgVideoInfo={msgVideoInfo} ogVideoInfo={ogVideoInfo}/>,
                ct,
                s.overlays,
                st,
                <Component_3 transitionName="fade-fast">{(s.type === o("WAWebPipConst").PlayerType.MEDIA_VIEWER || s.type === o("WAWebPipConst").PlayerType.OG_INLINE_PLAYER) && (ue || Le_isKeyboardUser) && dt !== true && !isVideoError ? [
                    ut,
                    mt,
                    Je
                ] : null}{it != null ? <Component_2 msgKey={it.id} playing={re} mediaController={{
                    play: function() {
                        return qRef.current?.play();
                    },
                    pause: function() {
                        return qRef.current?.pause();
                    }
                }} xstyle={s.type === o("WAWebPipConst").PlayerType.MEDIA_VIEWER && (ue || Le_isKeyboardUser) ? [
                    h.musicAttribution,
                    h.musicAttributionHover
                ] : h.musicAttribution} isFullscreen={fe} onShowModal={onShowModal} onCloseModal={onCloseModal}/> : null}</Component_3>,
                fe && ve != null && <div className="x6s0dn4 x1ey2m1c x78zum5 xtijo5x x1o0tod xl56j7k x10l6tqk x13vifvy x11uqc5h">{ve}</div>
            ]
        })}/>;
    }
    E.displayName = `${E.name} [from ${i.id}]`;
    const k = E;
    l.FULLSCREEN_CONTROLS_DISPLAY_TIMEOUT = y;
    l.WrappedSharedVideoPlayer = k;
}, 226);