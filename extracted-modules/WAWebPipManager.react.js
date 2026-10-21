__d("WAWebPipManager.react", [
    "fbt",
    "WAWebCallCollection",
    "WAWebCmd",
    "WAWebConfirmPopup.react",
    "WAWebFloatingMsgVideoPlayerRenderer.react",
    "WAWebFloatingVoipRenderer.react",
    "WAWebFrontendMsgGetters",
    "WAWebInlineVideoPlaybackClosedWamEvent",
    "WAWebKeyboardRotateFocus.react",
    "WAWebKeyboardTabUtils",
    "WAWebModalManager",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebPipCloseButton.react",
    "WAWebPipConst",
    "WAWebPipController",
    "WAWebPipVideoRefControls.react",
    "WAWebTabOrder",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebVelocityTransitionGroup",
    "WAWebWamEnumInlineVideoType",
    "WAWebWamEnumWebcRmrReasonCode",
    "WAWebWamMsgUtils",
    "WAWebWid",
    "WAWebYoutubeVideoPlayerRenderer.react",
    "react",
    "react-compiler-runtime",
    "useWAWebListener",
    "useWAWebStableCallback",
    "useWAWebVideoPlaybackRate"
], function(t, n, r, o, a, i, l, s) {
    const e = [
        "ref"
    ];
    let u;
    const c = u || (u = o("react"));
    const d = u;
    const { useCallback, useEffect, useImperativeHandle, useRef, useState } = d;
    const h = {
        msg: null,
        startTime: null,
        zoomRect: null,
        videoMetadata: null,
        videoRef: null,
        isVideoPlaying: false,
        videoType: o("WAWebPipConst").PiPVideoType.MSG,
        previewUrl: null,
        videoSrc: null,
        counterAbuseData: null
    };
    const y = {
        playerWrapper: {
            position: "xixxii4",
            zIndex: "x164b614",
            width: "xnalus7",
            height: "xqtp20y",
            overflowX: "x1plvlek",
            overflowY: "xryxfnj",
            $$css: true
        }
    };
    function C(t) {
        const n = o("react-compiler-runtime").c(6);
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
        let l;
        if (n[3] !== a || n[4] !== i) {
            l = a.videoType === o("WAWebPipConst").PiPVideoType.MSG ? c.jsx(r("WAWebFloatingMsgVideoPlayerRenderer.react"), babelHelpers.extends({
                ref: i
            }, a)) : a.videoType === o("WAWebPipConst").PiPVideoType.YOUTUBE ? c.jsx(r("WAWebYoutubeVideoPlayerRenderer.react"), babelHelpers.extends({
                ref: i
            }, a)) : a.videoType === o("WAWebPipConst").PiPVideoType.VOIP ? c.jsx(r("WAWebFloatingVoipRenderer.react"), babelHelpers.extends({
                ref: i
            }, a)) : (()=>{
                throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${a.videoType}`);
            })();
            n[3] = a;
            n[4] = i;
            n[5] = l;
        } else {
            l = n[5];
        }
        return l;
    }
    function b(e) {
        const inlineVideoType = v(e);
        if (inlineVideoType == null) {
            return null;
        }
        return new (o("WAWebInlineVideoPlaybackClosedWamEvent")).InlineVideoPlaybackClosedWamEvent({
            inlineVideoPlayed: false,
            inlineVideoType
        });
    }
    function v(e) {
        if (e === o("WAWebPipConst").PiPVideoType.YOUTUBE) {
            return o("WAWebWamEnumInlineVideoType").INLINE_VIDEO_TYPE.YOUTUBE;
        }
        return null;
    }
    function S(e, counterAbuseData) {
        if (r("WAWebWid").isNewsletter(e.id.remote)) {
            return counterAbuseData != null && counterAbuseData.counterAbuseToken != null;
        }
        return counterAbuseData != null && counterAbuseData.counterAbuseToken != null && counterAbuseData.nonce != null;
    }
    function RComponent({ ref }) {
        const lRef = useRef(null);
        const u = useState(h.msg);
        const d = u[0];
        const v = u[1];
        const R = useState(h.startTime);
        const startTime = R[0];
        const E = R[1];
        const k = useState(h.zoomRect);
        const zoomRect = k[0];
        const T = k[1];
        const DRef = useRef(null);
        const x = useState(h.videoMetadata);
        const $ = x[0];
        const P = x[1];
        const N = useState(h.videoRef);
        const M = N[0];
        const onRefSet = N[1];
        const A = useState(h.isVideoPlaying);
        const isVideoPlaying = A[0];
        const O = A[1];
        const B = useState(h.videoType);
        const videoType = B[0];
        const q = B[1];
        const U = useState(h.previewUrl);
        const previewUrl = U[0];
        const H = U[1];
        const G = useState(h.videoSrc);
        const videoSrc = G[0];
        const j = G[1];
        const K = useState(null);
        const Q = K[0];
        const X = K[1];
        const Y = useState(h.counterAbuseData);
        const counterAbuseData = Y[0];
        const Z = Y[1];
        const ee = d?.id?.toString() ?? null;
        const te = r("useWAWebVideoPlaybackRate")(ee);
        const { advancePlaybackRate, playbackRate, resetAllPlaybackRates } = te;
        useEffect(function() {
            M?.setPlaybackRate(playbackRate);
        }, [
            playbackRate,
            M
        ]);
        useEffect(function() {
            const e = function() {
                lRef.current?.commit();
                window.removeEventListener("unload", e);
            };
            window.addEventListener("unload", e);
            return e;
        }, []);
        const onSetFullscreenToggleCallback = function(t) {
            X(function() {
                return t;
            });
        };
        const onVideoMetadataChange = r("useWAWebStableCallback")(function(e, t) {
            const lRef_current = lRef.current;
            if (lRef_current != null) {
                if (e?.duration != null) {
                    lRef_current.inlineVideoDurationT = Math.floor(e?.duration);
                }
                if (!lRef_current.inlineVideoPlayed && t) {
                    lRef_current.markInlineVideoPlayStartT();
                    lRef_current.inlineVideoPlayed = t;
                }
            }
            P(e);
            O(t);
        });
        const le = r("useWAWebStableCallback")(function() {
            if (d) {
                r("WAWebPipController").didClose(d);
            }
            lRef.current?.commit();
            resetAllPlaybackRates();
            v(h.msg);
            E(h.startTime);
            T(h.zoomRect);
            P(h.videoMetadata);
            onRefSet(h.videoRef);
            O(h.isVideoPlaying);
            q(h.videoType);
            H(h.previewUrl);
            j(h.videoSrc);
            Z(h.counterAbuseData);
        });
        const se = function(t) {
            if (t.id.equals(d?.id) && (videoType !== o("WAWebPipConst").PiPVideoType.VOIP || r("WAWebCallCollection").activeCall == null)) {
                le();
            }
        };
        useEffect(function() {
            return function() {
                if (d) {
                    r("WAWebPipController").didClose(d);
                }
            };
        }, [
            d
        ]);
        const UeComponent = function(t, n) {
            if (t !== o("WAWebPipConst").PiPVideoType.VOIP && r("WAWebCallCollection").activeCall != null) {
                const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
                o("WAWebModalManager").ModalManager.open(<Component tsNavigationData={{
                    surface: "unknown",
                    viewName: "pip-manager"
                }} onOK={o("WAWebModalManager").closeModalManager} title={s._("Cannot open video during call")}>{s._("You cannot watch a video while a call is in progress. Please end the call first.")}</Component>);
                return;
            }
            const n_msg = n.msg;
            if (n_msg != null) {
                r("WAWebPipController").didOpen(n_msg);
                lRef.current?.commit();
                const i = b(t);
                lRef.current = i;
                if (i != null) {
                    i.messageType = o("WAWebWamMsgUtils").getWamMessageType(n_msg);
                    i.inlineVideoHasRcat = S(n_msg, n.counterAbuseData);
                    i.startInlineVideoPlayStartT();
                }
                if (t === o("WAWebPipConst").PiPVideoType.MSG) {
                    n_msg.downloadMedia({
                        downloadEvenIfExpensive: true,
                        rmrReason: o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE.PIP,
                        isUserInitiated: true
                    });
                }
            }
            v(n_msg);
            E(n.startTime);
            T(n.zoomRect);
            P(h.videoMetadata);
            onRefSet(h.videoRef);
            O(h.isVideoPlaying);
            q(t);
            H(n.preview != null ? `data:image/jpeg;base64,${n.preview}` : null);
            j(n.videoSrc);
            Z(n.counterAbuseData);
        };
        const pausePiP = function() {
            M?.pause();
        };
        const de = function(t) {
            pausePiP();
        };
        const isOpened = function(t) {
            return (d == null ? undefined : d.id.equals(t.id)) ?? false;
        };
        const onError = function() {
            if (d) {
                r("WAWebPipController").didError(d);
            }
        };
        const EComponent = ()=>{
            const disableAudioControls = M?.getAudioDisabled() === true;
            const Component = o("WAWebPipVideoRefControls.react").VideoRefControls;
            const Component_1 = r("WAWebPipCloseButton.react");
            return {
                enableDragBar: true,
                bottomContent: $ != null && M != null ? <Component disableAudioControls={disableAudioControls} refVideo={M} videoMetadata={$} isFullscreenMode={false} isVideoPlaying={isVideoPlaying} newPiPStyle onFullscreenToggle={Q ?? undefined} playbackRate={playbackRate} onPlaybackRateChange={advancePlaybackRate}/> : null,
                topContent: <Component_1 isFullscreenMode={false} onClick={le}/>
            };
        };
        const fe = ()=>{
            if (zoomRect) {
                return {
                    height: zoomRect.bottom - zoomRect.top,
                    width: zoomRect.right - zoomRect.left,
                    left: zoomRect.left,
                    bottom: window.innerHeight - zoomRect.bottom
                };
            }
            return null;
        };
        const ge = ()=>babelHelpers.extends({
                msg: d,
                startTime,
                zoomRect,
                videoMetadata: $,
                videoRef: M,
                isVideoPlaying,
                videoType,
                previewUrl,
                videoSrc,
                counterAbuseData
            }, EComponent(), {
                animationStartStyle: fe(),
                onClose: le,
                onError,
                autoPlay: true,
                onRefSet,
                onVideoMetadataChange,
                onSetFullscreenToggleCallback
            });
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, [
            "media_viewer_modal"
        ], de);
        o("useWAWebListener").useListener(o("WAWebMsgCollection").MsgCollection, [
            "remove"
        ], function(e) {
            se(e);
        });
        const he = d != null ? o("WAWebFrontendMsgGetters").getChat(d) : null;
        o("useWAWebListener").useListener(he?.msgs ?? o("WAWebMsgCollection").MsgCollection, "remove_msgs", function(e) {
            e.forEach(se);
        });
        o("useWAWebListener").useListener(o("WAWebMsgCollection").MsgCollection, [
            "change:type"
        ], function(e) {
            if (e.type === o("WAWebMsgType").MSG_TYPE.REVOKED) {
                if (!o("WAWebMsgGetters").getIsSentByMe(e) && d != null && d.id.equals(e.id)) {
                    o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, {
                        msg: s._("Currently playing video was revoked.")
                    }));
                }
                se(e);
            }
        });
        const ye = {
            isOpened,
            pausePiP,
            openPiP: UeComponent,
            closePiP: le
        };
        useImperativeHandle(ref, function() {
            return ye;
        });
        useEffect(function() {
            r("WAWebPipController").register(ye);
            return function() {
                r("WAWebPipController").unregister();
            };
        }, []);
        const Ce = ge();
        const allowEscape = d != null || videoSrc != null || videoType === o("WAWebPipConst").PiPVideoType.VOIP;
        const ve = useCallback(function() {
            const t = '[tabindex="0"]';
            const n = DRef.current?.querySelector(t);
            if (n instanceof HTMLElement) {
                n.focus();
            }
        }, []);
        const Se = useCallback(function(e) {
            let t;
            if (!(e.relatedTarget instanceof Node && (t = DRef.current) != null && t.contains(e.relatedTarget))) {
                ve();
            }
        }, [
            ve
        ]);
        const Re = useCallback(function(e) {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                ve();
            }
        }, [
            ve
        ]);
        const Component = r("WAWebVelocityTransitionGroup");
        const Component_1 = o("WAWebKeyboardRotateFocus.react").RotateFocus;
        return <>{allowEscape && <div className="xixxii4 x1i1rx1s xjm9jq1 x6ikm8r x10wlt62 xg01cxk x47corl" data-tab={o("WAWebTabOrder").TAB_ORDER.PIP_PLAYER} data-testid="pip_focus_sentinel_button" tabIndex={0} role="button" aria-label={s._("Media player")} onFocus={Se} onKeyDown={Re}/>}<Component_1 focusType={o("WAWebKeyboardTabUtils").FocusType.TABBABLE} allowEscape={allowEscape} style={allowEscape ? undefined : {
            pointerEvents: "none"
        }}><Component ref={DRef} transitionName="pip" xstyle={y.playerWrapper} component="div"><C {...babelHelpers.extends({}, Ce)}/></Component></Component_1></>;
    }
    RComponent.displayName = `${RComponent.name} [from ${i.id}]`;
    l.PiPManager = RComponent;
}, 226);