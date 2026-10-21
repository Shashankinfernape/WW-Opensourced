__d("WAWebPipYoutubeVideoPlayer.react", [
    "WADeepEquals",
    "WAWebDomFullscreen",
    "WAWebPipCloseButton.react",
    "WAWebPipFullscreenToggleButton.react",
    "WAWebPipShade.react",
    "WAWebPipSharedVideoPlayer.react",
    "WAWebPipVideoRefControls.react",
    "WAWebPipYoutubeVideoTag.react",
    "WAWebUA",
    "WAWebVelocityTransitionGroup",
    "react",
    "useWAWebDebouncedCallback",
    "useWAWebListener",
    "useWAWebStableCallback"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = e;
    const { useEffect, useRef, useState } = u;
    function p(e) {
        const { onClose, onRefSet, onSetFullscreenToggleCallback, onVideoEnded, onVideoMetadataChange, startTime } = e;
        const pRef = useRef(null);
        const fRef = useRef(null);
        const gRef = useRef(false);
        const hRef = useRef(null);
        const y = useState(undefined);
        const C = y[0];
        const b = y[1];
        const v = useState(false);
        const isVideoPlaying = v[0];
        const R = v[1];
        const L = useState(false);
        const E = L[0];
        const k = L[1];
        const I = useState(false);
        const mouseMoveRecently = I[0];
        const D = I[1];
        const x = useState(false);
        const isFullscreenMode = x[0];
        const P = x[1];
        const N = useState(false);
        const M = N[0];
        const onExposeIframeInPiP = N[1];
        const ARef = useRef(null);
        const FRef = useRef(null);
        o("useWAWebListener").useListener(r("WAWebDomFullscreen"), "fullscreen_change", function() {
            if (r("WAWebDomFullscreen").isFullscreenMode() && r("WAWebDomFullscreen").getFullscreenElement() === pRef.current) {
                P(true);
            } else if (!r("WAWebDomFullscreen").isFullscreenMode()) {
                P(false);
            }
        });
        const O = function(t) {
            t.stopPropagation();
            if (isFullscreenMode) {
                r("WAWebDomFullscreen").exitFullscreen();
            } else {
                r("WAWebDomFullscreen").requestFullscreen(pRef.current);
            }
        };
        const B = r("useWAWebDebouncedCallback")(function() {
            D(false);
        }, o("WAWebPipSharedVideoPlayer.react").FULLSCREEN_CONTROLS_DISPLAY_TIMEOUT);
        useEffect(function() {
            onSetFullscreenToggleCallback?.(O);
        }, []);
        const W = r("useWAWebStableCallback")(function(e) {
            fRef.current = e;
            if (e != null) {
                if (onRefSet != null) {
                    onRefSet(e);
                }
            }
        });
        const onEnded = function() {
            if (onVideoEnded) {
                onVideoEnded();
            }
            R(false);
        };
        const U = function() {
            const n = fRef.current?.getCurrentTime() ?? null;
            b(function(e) {
                if (e && n != null) {
                    return babelHelpers.extends({}, e, {
                        currentTime: n
                    });
                }
                return e;
            });
            R(false);
            gRef.current = true;
        };
        const onPlaying = function() {
            const n = fRef.current?.getCurrentTime() ?? null;
            b(function(e) {
                if (e && n != null) {
                    return babelHelpers.extends({}, e, {
                        currentTime: n
                    });
                }
                return e;
            });
            R(true);
            gRef.current = true;
        };
        const onLoadedMetadata = function(t) {
            const e = startTime ?? 0;
            b({
                duration: t.duration,
                currentTime: e,
                volume: t.volume,
                muted: t.muted,
                bufferedTime: 0
            });
        };
        const onVolumeChange = function(t) {
            b(function(e) {
                return e && babelHelpers.extends({}, e, {
                    volume: t.volume,
                    muted: t.muted
                });
            });
        };
        const onTimeUpdate = function(t) {
            if (gRef.current) {
                gRef.current = false;
                return;
            }
            b(function(e) {
                return e && babelHelpers.extends({}, e, {
                    currentTime: t
                });
            });
        };
        const onProgress = function([e]) {
            const bufferedTime = e[1];
            b(function(e) {
                return e && babelHelpers.extends({}, e, {
                    bufferedTime
                });
            });
        };
        useEffect(function() {
            const ARef_current = ARef.current;
            const FRef_current = FRef.current;
            ARef.current = isVideoPlaying;
            FRef.current = C;
            if (ARef_current !== isVideoPlaying || !o("WADeepEquals").deepEqual(FRef_current, C)) {
                if (onVideoMetadataChange != null) {
                    onVideoMetadataChange(C, isVideoPlaying);
                }
            }
        }, [
            isVideoPlaying,
            onVideoMetadataChange,
            C
        ]);
        const K = e.exposeIframeInPiP || M || isFullscreenMode ? null : <div className="x1ktv7sr x142x0oa xv7zg05 x12dgle5 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x166i9x0 x1gex1yb x1n7ce0x xqz8djb x5yr21d x1o0tod x10l6tqk x13vifvy xh8yej3"/>;
        const Component = r("WAWebPipYoutubeVideoTag.react");
        const Q = <div {...babelHelpers.extends({}, {
            0: {
                className: "x10l6tqk x13vifvy xtijo5x x1ey2m1c x1o0tod"
            },
            1: {
                className: "x10l6tqk x13vifvy xtijo5x x1o0tod xj9fbq8"
            }
        }[!!isFullscreenMode << 0], {
            children: [
                K,
                <Component ref={W} youtubeVideoId={e.youtubeVideoId} startTime={e.startTime} onEnded={onEnded} onLoadedMetadata={onLoadedMetadata} onPause={U} onPlaying={onPlaying} onProgress={onProgress} onTimeUpdate={onTimeUpdate} onVolumeChange={onVolumeChange} autoPlay={e.autoPlay} counterAbuseData={e.counterAbuseData}/>
            ]
        })}/>;
        const X = e.disablePiPControls !== true || isFullscreenMode ? <_ videoMetadata={C} videoRef={fRef} mouseDownCoorRef={hRef} mouseMoveRecently={mouseMoveRecently} isVideoPlaying={isVideoPlaying} isFullscreenMode={isFullscreenMode} onFullScreenToggle={O} onClose={onClose} onExposeIframeInPiP={onExposeIframeInPiP}/> : null;
        let Y;
        if (!o("WAWebUA").UA.isSafari) {
            const Component = r("WAWebPipFullscreenToggleButton.react");
            Y = <Component isFullscreenMode={isFullscreenMode} onClick={O}/>;
        }
        const J = s.jsx(r("WAWebPipShade.react"), {
            theme: "full-rounded"
        });
        const Component_1 = r("WAWebPipCloseButton.react");
        const Component_2 = r("WAWebVelocityTransitionGroup");
        const Z = isFullscreenMode ? <>{Q}{X}</> : <>{Q}<Component_2 transitionName="fade-fast">{E && mouseMoveRecently && !M && e.disablePiPControls !== true ? [
            J,
            X,
            Y,
            <Component_1 key="close" isFullscreenMode={isFullscreenMode} onClick={function(n) {
                n.stopPropagation();
                e.onClose();
            }}/>
        ] : null}</Component_2></>;
        return <div key="elementsWrapped" {...babelHelpers.extends({
            ref: pRef
        }, {
            0: {
                className: "xums3t4 x5yr21d xh8yej3"
            },
            1: {
                className: "xums3t4 x5yr21d xh8yej3 xt0e3qv"
            }
        }[!!isFullscreenMode << 0], {
            onMouseEnter: function(t) {
                if (M) {
                    if (o("WAWebUA").UA.isGecko && E) {
                        return;
                    }
                    onExposeIframeInPiP(false);
                }
                k(true);
            },
            onMouseLeave: function(t) {
                k(false);
            },
            onMouseDown: function(t) {
                if (isFullscreenMode) {
                    t.stopPropagation();
                }
            },
            onMouseMove: function(t) {
                if (!E) {
                    k(true);
                }
                if (!mouseMoveRecently) {
                    D(true);
                }
                B();
            },
            children: Z
        })}/>;
    }
    p.displayName = `${p.name} [from ${i.id}]`;
    function _({ isFullscreenMode, isVideoPlaying, mouseDownCoorRef, mouseMoveRecently, onClose, onExposeIframeInPiP, onFullScreenToggle, ref, videoMetadata, videoRef }) {
        const handleSetCurrentTimeByControls = function(t) {
            if (videoRef.current) {
                let e = t;
                if (videoMetadata && t >= videoMetadata.duration - 1 && videoMetadata.duration > 1) {
                    e = videoMetadata.duration - 1;
                }
                videoRef.current.setCurrentTime(e);
            }
        };
        let _ = null;
        if (videoMetadata) {
            const f = "x1ey2m1c x78zum5 xvt47uu xbudbmw xexx8yu x5zjp28 x18d9i69 x162tt16 x10l6tqk xtijo5x x1hc1fzr x13dflua x19991ni xwji4o3";
            const Component = o("WAWebPipVideoRefControls.react").VideoRefControls;
            _ = <div {...babelHelpers.extends({
                ref
            }, {
                0: {
                    className: "x1hc1fzr x13dflua x19991ni xwji4o3"
                },
                1: {
                    className: "x19991ni xwji4o3 x1ptxcow x1labep9"
                }
            }[!mouseMoveRecently << 0], {
                children: <Component refVideo={videoRef.current} videoMetadata={videoMetadata} isFullscreenMode={isFullscreenMode} isVideoPlaying={isVideoPlaying} handleSetCurrentTimeByControls={handleSetCurrentTimeByControls} controlsClassName={isFullscreenMode ? f : undefined} onFullscreenToggle={onFullScreenToggle} onClose={onClose} newPiPStyle/>
            })}/>;
            if (!isFullscreenMode) {
                _ = <div ref={ref} className="x5yr21d x10l6tqk xh8yej3" onMouseDown={function(t) {
                    mouseDownCoorRef.current = {
                        x: t.clientX,
                        y: t.clientY
                    };
                }} onMouseUp={function({ clientX, clientY }) {
                    const mouseDownCoorRef_current = mouseDownCoorRef.current;
                    const a = mouseDownCoorRef_current ? mouseDownCoorRef_current.x : undefined;
                    const i = mouseDownCoorRef_current ? mouseDownCoorRef_current.y : undefined;
                    if (a != null && i != null && Math.abs(clientX - a) + Math.abs(clientY - i) < 4) {
                        onExposeIframeInPiP(true);
                    }
                }}>{_}</div>;
            }
        }
        return _;
    }
    _.displayName = `${_.name} [from ${i.id}]`;
    l.default = p;
}, 98);