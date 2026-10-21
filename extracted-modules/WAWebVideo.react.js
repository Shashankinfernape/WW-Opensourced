__d("WAWebVideo.react", [
    "WAWebClassnames",
    "WAWebVideoPlayerSurfaceLoadable.react",
    "WAWebVideoPlayerXBasicControlsLoadable.react",
    "WAWebVideoPlayerXLoadable.react",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useVideoPlayerXAPIOutsideVideoPlayerSurface"
], function(t, n, r, o, a, i, l) {
    const e = [
        "ref"
    ];
    let s;
    let u;
    const c = u || (u = o("react"));
    const d = u;
    const { useCallback, useEffect, useImperativeHandle, useMemo } = d;
    const g = {
        video: {
            display: "x1lliihq",
            width: "xh8yej3",
            height: "x5yr21d",
            $$css: true
        }
    };
    function h(t) {
        const n = o("react-compiler-runtime").c(55);
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
        const { autoPlay, controls, disableAutoplayManagement, loop, muted, onAudioChannelRelease, onEnded, onLoadedData, onLoadedMetadata, onLoop, onPlaying, onStoppedPlaying, onTimeUpdate, renderVideoPixelsFit, src, srcObject, xstyle } = l;
        const x = controls === undefined ? false : controls;
        const $ = loop === undefined ? false : loop;
        const P = o("useVideoPlayerXAPIOutsideVideoPlayerSurface").useVideoPlayerXAPIOutsideVideoPlayerSurface();
        const apiRef = P[0];
        const M = P[1];
        const M_controller = M.controller;
        let A;
        if (n[3] !== $ || n[4] !== onEnded) {
            A = function() {
                if (!($ || onEnded == null)) {
                    onEnded();
                }
            };
            n[3] = $;
            n[4] = onEnded;
            n[5] = A;
        } else {
            A = n[5];
        }
        const onEnded_1 = A;
        let O;
        let B;
        if (n[6] !== M_controller || n[7] !== muted) {
            O = function() {
                if (muted != null && M_controller != null) {
                    M_controller.setMuted(muted, "product_initiated");
                }
            };
            B = [
                M_controller,
                muted
            ];
            n[6] = M_controller;
            n[7] = muted;
            n[8] = O;
            n[9] = B;
        } else {
            O = n[8];
            B = n[9];
        }
        useEffect(O, B);
        let onAudioChannelRelease_1;
        if (n[10] !== M_controller || n[11] !== x || n[12] !== onAudioChannelRelease) {
            onAudioChannelRelease_1 = onAudioChannelRelease ?? function() {
                if (x) {
                    if (M_controller != null) {
                        M_controller.pause("product_initiated");
                    }
                }
            };
            n[10] = M_controller;
            n[11] = x;
            n[12] = onAudioChannelRelease;
            n[13] = onAudioChannelRelease_1;
        } else {
            onAudioChannelRelease_1 = n[13];
        }
        let q;
        if (n[14] !== onAudioChannelRelease_1) {
            q = {
                onAudioChannelRelease: onAudioChannelRelease_1,
                onlyClaimIfUnmuted: true,
                syncVolumeSettings: false
            };
            n[14] = onAudioChannelRelease_1;
            n[15] = q;
        } else {
            q = n[15];
        }
        const audioBridgeOptions = q;
        let V;
        if (n[16] !== M_controller) {
            V = function() {
                return {
                    play: function(t) {
                        M_controller?.play(t ?? "user_initiated");
                    },
                    pause: function(t) {
                        M_controller?.pause(t ?? "user_initiated");
                    },
                    pauseAndReset: function() {
                        M_controller?.pause("product_initiated");
                        M_controller?.seek(0);
                    },
                    seek: function(t) {
                        M_controller?.seek(t);
                    },
                    getPaused: function() {
                        return M_controller?.getCurrentState().paused ?? true;
                    },
                    getDuration: function() {
                        return M_controller?.getCurrentState().duration;
                    },
                    getCurrentTime: function() {
                        return M_controller?.getPlayheadPosition();
                    },
                    getVideoDimensions: function() {
                        return M_controller?.internal_getVideoPixelsDecodedDimensions();
                    },
                    getVideoElementDimensions: function() {
                        const e = M_controller?.internal_getVideoElement();
                        if (e == null || e.offsetWidth <= 0 || e.offsetHeight <= 0) {
                            return null;
                        }
                        return {
                            width: e.offsetWidth,
                            height: e.offsetHeight
                        };
                    },
                    drawFrameToContext: function(t, ...n) {
                        const o = n;
                        const a = M_controller?.internal_getVideoElement();
                        if (a == null) {
                            return false;
                        }
                        if (o.length === 4) {
                            t.drawImage(...[
                                a
                            ].concat(o));
                        } else {
                            t.drawImage(...[
                                a
                            ].concat(o));
                        }
                        return true;
                    }
                };
            };
            n[16] = M_controller;
            n[17] = V;
        } else {
            V = n[17];
        }
        useImperativeHandle(i, V);
        let H;
        if (n[18] !== a.onClick) {
            H = a.onClick != null ? {
                onClick: a.onClick
            } : {};
            n[18] = a.onClick;
            n[19] = H;
        } else {
            H = n[19];
        }
        const G = H;
        let z;
        if (n[20] !== a.height || n[21] !== a.style || n[22] !== a.width) {
            z = a.width != null || a.height != null ? babelHelpers.extends({}, a.style, {
                width: a.width,
                height: a.height
            }) : a.style;
            n[20] = a.height;
            n[21] = a.style;
            n[22] = a.width;
            n[23] = z;
        } else {
            z = n[23];
        }
        const j = z;
        let K;
        if (n[24] !== a.className || n[25] !== xstyle) {
            K = o("WAWebClassnames").classnamesConvertMeToStylexPlease((s || (s = r("stylex")))(g.video, xstyle), a.className);
            n[24] = a.className;
            n[25] = xstyle;
            n[26] = K;
        } else {
            K = n[26];
        }
        const autoplayEnabled = autoPlay ?? false;
        const loopCount = $ ? -1 : 0;
        let onLoadedMetadata_1;
        if (n[27] !== onLoadedMetadata) {
            onLoadedMetadata_1 = function() {
                onLoadedMetadata?.();
            };
            n[27] = onLoadedMetadata;
            n[28] = onLoadedMetadata_1;
        } else {
            onLoadedMetadata_1 = n[28];
        }
        let J;
        if (n[29] !== x) {
            J = x ? c.jsx(o("WAWebVideoPlayerXBasicControlsLoadable.react").WAWebVideoPlayerXBasicControlsLoadable, {}) : null;
            n[29] = x;
            n[30] = J;
        } else {
            J = n[30];
        }
        let Z;
        if (n[31] !== audioBridgeOptions || n[32] !== onEnded_1 || n[33] !== onLoadedData || n[34] !== onLoop || n[35] !== onPlaying || n[36] !== onStoppedPlaying || n[37] !== onTimeUpdate || n[38] !== onLoadedMetadata_1 || n[39] !== J) {
            const Component = o("WAWebVideoPlayerSurfaceLoadable.react").WAWebVideoPlayerSurfaceLoadable;
            Z = <Component audioBridgeOptions={audioBridgeOptions} onEnded={onEnded_1} onLoadedData={onLoadedData} onLoadedMetadata={onLoadedMetadata_1} onLoop={onLoop} onPlaying={onPlaying} onStoppedPlaying={onStoppedPlaying} onTimeUpdate={onTimeUpdate}>{J}</Component>;
            n[31] = audioBridgeOptions;
            n[32] = onEnded_1;
            n[33] = onLoadedData;
            n[34] = onLoop;
            n[35] = onPlaying;
            n[36] = onStoppedPlaying;
            n[37] = onTimeUpdate;
            n[38] = onLoadedMetadata_1;
            n[39] = J;
            n[40] = Z;
        } else {
            Z = n[40];
        }
        let ee;
        if (n[41] !== apiRef || n[42] !== disableAutoplayManagement || n[43] !== renderVideoPixelsFit || n[44] !== src || n[45] !== srcObject || n[46] !== autoplayEnabled || n[47] !== loopCount || n[48] !== Z) {
            const Component = o("WAWebVideoPlayerXLoadable.react").WAWebVideoPlayerXLoadable;
            ee = <Component apiRef={apiRef} src={src} mediaStream={srcObject} autoplayEnabled={autoplayEnabled} disableAutoplayManagement={disableAutoplayManagement} loopCount={loopCount} renderVideoPixelsFit={renderVideoPixelsFit}>{Z}</Component>;
            n[41] = apiRef;
            n[42] = disableAutoplayManagement;
            n[43] = renderVideoPixelsFit;
            n[44] = src;
            n[45] = srcObject;
            n[46] = autoplayEnabled;
            n[47] = loopCount;
            n[48] = Z;
            n[49] = ee;
        } else {
            ee = n[49];
        }
        let te;
        if (n[50] !== j || n[51] !== G || n[52] !== K || n[53] !== ee) {
            te = <div {...babelHelpers.extends({
                className: K,
                style: j
            }, G, {
                children: ee
            })}/>;
            n[50] = j;
            n[51] = G;
            n[52] = K;
            n[53] = ee;
            n[54] = te;
        } else {
            te = n[54];
        }
        return te;
    }
    l.default = h;
}, 98);