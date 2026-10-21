__d("WAWebPipMsgVideoPlayer.react", [
    "WAWebMediaDataGetters",
    "WAWebMediaMissingModal.react",
    "WAWebMediaNeedPokeModal.react",
    "WAWebMediaTypes",
    "WAWebMediaUnsupportedModal.react",
    "WAWebModalManager",
    "WAWebMsgGetters",
    "WAWebPipController",
    "WAWebPipSharedVideoPlayer.react",
    "WAWebStateUtils",
    "react",
    "react-compiler-runtime",
    "useWAWebIsMsgStreamable",
    "useWAWebMediaDataValues",
    "useWAWebMsgValues",
    "useWAWebSendViewCount",
    "useWAWebStableCallback"
], function(t, n, r, o, a, i, l) {
    const e = [
        "ref"
    ];
    let s;
    const u = s || (s = o("react"));
    const c = s;
    const { useEffect, useImperativeHandle, useRef } = c;
    function _(t) {
        const n = o("react-compiler-runtime").c(52);
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
        const { msg, onClose, onMissingMedia, onNeedPokeMedia, onOpenVideoFloater, onUnsupportedMedia } = l;
        const yRef = useRef(null);
        let C;
        if (n[3] === Symbol.for("react.memo_cache_sentinel")) {
            C = [
                o("WAWebMsgGetters").getId
            ];
            n[3] = C;
        } else {
            C = n[3];
        }
        o("useWAWebMsgValues").useMsgValues(a.msg.id, C);
        let b;
        if (n[4] === Symbol.for("react.memo_cache_sentinel")) {
            b = [
                o("WAWebMediaDataGetters").getMediaStage,
                o("WAWebMediaDataGetters").getPreview
            ];
            n[4] = b;
        } else {
            b = n[4];
        }
        const v = o("useWAWebMediaDataValues").useMediaDataValues(a.mediaData, b);
        const S = v[0];
        r("useWAWebIsMsgStreamable")(a.msg, a.mediaData);
        let R;
        if (n[5] !== a.mediaData) {
            R = {
                mediaData: a.mediaData
            };
            n[5] = a.mediaData;
            n[6] = R;
        } else {
            R = n[6];
        }
        const onTimeUpdate = o("useWAWebSendViewCount").usePlaybackSendViewCount(a.msg.id, R);
        let E;
        if (n[7] === Symbol.for("react.memo_cache_sentinel")) {
            E = function() {
                if (yRef.current) {
                    return yRef.current.getCurrentTimeFromVideo();
                }
                return 0;
            };
            n[7] = E;
        } else {
            E = n[7];
        }
        const k = E;
        let I;
        if (n[8] !== msg || n[9] !== onOpenVideoFloater) {
            I = function() {
                if (onOpenVideoFloater) {
                    onOpenVideoFloater();
                }
                r("WAWebPipController").openPiP(o("WAWebStateUtils").unproxy(msg), k(), null);
            };
            n[8] = msg;
            n[9] = onOpenVideoFloater;
            n[10] = I;
        } else {
            I = n[10];
        }
        const onOpenVideoFloater_1 = I;
        let D;
        if (n[11] !== msg || n[12] !== onClose || n[13] !== onMissingMedia) {
            D = function() {
                if (onMissingMedia) {
                    onMissingMedia();
                }
                o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebMediaMissingModal.react"), {
                    msg
                }));
                onClose();
            };
            n[11] = msg;
            n[12] = onClose;
            n[13] = onMissingMedia;
            n[14] = D;
        } else {
            D = n[14];
        }
        const x = r("useWAWebStableCallback")(D);
        let $;
        if (n[15] !== msg || n[16] !== onClose || n[17] !== onUnsupportedMedia) {
            $ = function() {
                if (onUnsupportedMedia) {
                    onUnsupportedMedia();
                }
                o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebMediaUnsupportedModal.react"), {
                    msg
                }));
                onClose();
            };
            n[15] = msg;
            n[16] = onClose;
            n[17] = onUnsupportedMedia;
            n[18] = $;
        } else {
            $ = n[18];
        }
        const P = r("useWAWebStableCallback")($);
        let N;
        if (n[19] !== msg || n[20] !== onClose || n[21] !== onNeedPokeMedia) {
            N = function() {
                if (onNeedPokeMedia) {
                    onNeedPokeMedia();
                }
                o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebMediaNeedPokeModal.react"), {
                    msg
                }));
                onClose();
            };
            n[19] = msg;
            n[20] = onClose;
            n[21] = onNeedPokeMedia;
            n[22] = N;
        } else {
            N = n[22];
        }
        const M = r("useWAWebStableCallback")(N);
        let w;
        if (n[23] === Symbol.for("react.memo_cache_sentinel")) {
            w = function() {
                return yRef.current?.getContainerElement();
            };
            n[23] = w;
        } else {
            w = n[23];
        }
        const A = w;
        let F;
        if (n[24] === Symbol.for("react.memo_cache_sentinel")) {
            F = function() {
                return {
                    getContainerElement: A
                };
            };
            n[24] = F;
        } else {
            F = n[24];
        }
        useImperativeHandle(i, F);
        let O;
        let B;
        if (n[25] !== x || n[26] !== M || n[27] !== P || n[28] !== S) {
            O = function() {
                e: switch(S){
                    case o("WAWebMediaTypes").MediaDataStage.ERROR_MISSING:
                        {
                            x();
                            break e;
                        }
                    case o("WAWebMediaTypes").MediaDataStage.ERROR_UNSUPPORTED:
                        {
                            P();
                            break e;
                        }
                    case o("WAWebMediaTypes").MediaDataStage.NEED_POKE:
                        {
                            M();
                            break e;
                        }
                    default:
                }
            };
            B = [
                x,
                M,
                P,
                S
            ];
            n[25] = x;
            n[26] = M;
            n[27] = P;
            n[28] = S;
            n[29] = O;
            n[30] = B;
        } else {
            O = n[29];
            B = n[30];
        }
        useEffect(O, B);
        let W;
        if (n[31] !== msg || n[32] !== a.mediaData) {
            W = {
                msg,
                mediaData: a.mediaData
            };
            n[31] = msg;
            n[32] = a.mediaData;
            n[33] = W;
        } else {
            W = n[33];
        }
        const msgVideoInfo = W;
        let U;
        if (n[34] !== onOpenVideoFloater_1 || n[35] !== onTimeUpdate || n[36] !== msgVideoInfo || n[37] !== a.autoPlay || n[38] !== a.disablePiPControls || n[39] !== a.noPip || n[40] !== a.onClose || n[41] !== a.onError || n[42] !== a.onFullscreenToggle || n[43] !== a.onLoadedData || n[44] !== a.onRefSet || n[45] !== a.onSetFullscreenToggleCallback || n[46] !== a.onVideoEnded || n[47] !== a.onVideoMetadataChange || n[48] !== a.overlays || n[49] !== a.startTime || n[50] !== a.type) {
            const Component = o("WAWebPipSharedVideoPlayer.react").WrappedSharedVideoPlayer;
            U = <Component ref={yRef} type={a.type} msgVideoInfo={msgVideoInfo} startTime={a.startTime} onClose={a.onClose} onVideoEnded={a.onVideoEnded} onError={a.onError} onOpenVideoFloater={onOpenVideoFloater_1} onTimeUpdate={onTimeUpdate} onLoadedData={a.onLoadedData} onFullscreenToggle={a.onFullscreenToggle} autoPlay={a.autoPlay} overlays={a.overlays} noPip={a.noPip} disablePiPControls={a.disablePiPControls} onRefSet={a.onRefSet} onVideoMetadataChange={a.onVideoMetadataChange} onSetFullscreenToggleCallback={a.onSetFullscreenToggleCallback}/>;
            n[34] = onOpenVideoFloater_1;
            n[35] = onTimeUpdate;
            n[36] = msgVideoInfo;
            n[37] = a.autoPlay;
            n[38] = a.disablePiPControls;
            n[39] = a.noPip;
            n[40] = a.onClose;
            n[41] = a.onError;
            n[42] = a.onFullscreenToggle;
            n[43] = a.onLoadedData;
            n[44] = a.onRefSet;
            n[45] = a.onSetFullscreenToggleCallback;
            n[46] = a.onVideoEnded;
            n[47] = a.onVideoMetadataChange;
            n[48] = a.overlays;
            n[49] = a.startTime;
            n[50] = a.type;
            n[51] = U;
        } else {
            U = n[51];
        }
        return U;
    }
    l.WrappedMsgVideoPlayer = _;
}, 98);