__d("WAWebSticker.react", [
    "fbt",
    "WAAbortError",
    "WAPromiseRaceAbort",
    "WAWebABProps",
    "WAWebControlledAnimatedSticker.react",
    "WAWebFeatureDetectionDetectWebpSupport",
    "WAWebLottieSticker.react",
    "WAWebMediaBlobProvider",
    "WAWebMediaDataGetters",
    "WAWebMediaOpaqueData",
    "WAWebMediaUrlProvider",
    "WAWebMessageUiUtils",
    "WAWebNullFunc",
    "WAWebRgbaCanvas.react",
    "WAWebStickerAnimationCanvas.react",
    "WAWebStickerCreateButton.react",
    "WAWebStickerLikeMsgPlaceholder.react",
    "WAWebStickerUtils",
    "WAWebUnstyledButton.react",
    "getErrorSafe",
    "nullthrows",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useLazyRef",
    "useWAWebMediaDataValues",
    "useWAWebUnmountSignal"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    const d = u;
    const { useEffect, useImperativeHandle, useRef, useState } = d;
    const g = {
        conversation: {
            width: "xjzf9lu",
            height: "x8sy99",
            $$css: true
        },
        composeBox: {
            display: "x1lliihq",
            width: "x1mvj0ss",
            height: "x1m6e1of",
            $$css: true
        },
        composeBoxQuoted: {
            width: "xe3v0yx",
            height: "x1kcu2e4",
            $$css: true
        },
        quoted: {
            display: "x1lliihq",
            width: "x136w28x",
            height: "xmaiyhc",
            $$css: true
        },
        stickerPanel: {
            width: "x1hp1aql",
            height: "x6h4ims",
            $$css: true
        },
        stickerStore: {
            width: "xbndj1g",
            height: "x7q9895",
            $$css: true
        },
        stickerDetails: {
            width: "x12f94cn",
            height: "xfhbamq",
            $$css: true
        },
        stickerExpressionsPanel: {
            width: "x1919mjr",
            height: "xxnb739",
            $$css: true
        },
        outlineTransparent: {
            outlineWidth: "x1qgsegg",
            outlineStyle: "xaatb59",
            outlineColor: "x1uczgqu",
            $$css: true
        },
        scaleTransition: {
            transitionProperty: "x11xpdln",
            transitionDuration: "x1g2r6go",
            transitionTimingFunction: "xwji4o3",
            willChange: "x1so62im",
            $$css: true
        },
        hoverScaleSmall: {
            ":hover_transform": "xt8homm",
            $$css: true
        },
        hoverScaleLarge: {
            ":hover_transform": "xg0443",
            $$css: true
        },
        clickable: {
            cursor: "x1ypdohk",
            $$css: true
        },
        placeholderClickable: {
            cursor: "x1sqbtui",
            $$css: true
        },
        letterbox: {
            objectFit: "x19kjcj4",
            $$css: true
        }
    };
    function h(theme) {
        switch(theme){
            case "conversation":
                return [
                    g.conversation
                ];
            case "composeBox":
                return [
                    g.composeBox
                ];
            case "composeBoxQuoted":
                return [
                    g.composeBoxQuoted
                ];
            case "quoted":
                return [
                    g.quoted
                ];
            case "stickerPanel":
                return [
                    g.stickerPanel,
                    g.outlineTransparent,
                    g.scaleTransition
                ];
            case "stickerStore":
                return [
                    g.stickerStore,
                    g.outlineTransparent,
                    g.scaleTransition
                ];
            case "stickerDetails":
                return [
                    g.stickerDetails,
                    g.outlineTransparent
                ];
            case "stickerExpressionsPanel":
                return [
                    g.stickerExpressionsPanel,
                    g.outlineTransparent,
                    g.scaleTransition
                ];
            default:
                return (()=>{
                    throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${theme}`);
                })();
        }
    }
    function Y1Component(e) {
        const t = o("react-compiler-runtime").c(23);
        const { ref, className, controlledAnimatedStickerimageRef, downloadMedia, label, loopAnimation, mediaData, onClick, onEnter, renderPreview, startAnimation, stickerImgRef } = e;
        let h;
        if (t[0] !== onEnter) {
            h = function(t) {
                if (t.key === "Enter") {
                    return onEnter?.(t);
                }
            };
            t[0] = onEnter;
            t[1] = h;
        } else {
            h = t[1];
        }
        const y = h;
        if (mediaData.animationDuration > 0 && !loopAnimation) {
            let C;
            if (t[2] !== className || t[3] !== controlledAnimatedStickerimageRef || t[4] !== downloadMedia || t[5] !== y || t[6] !== label || t[7] !== mediaData || t[8] !== onClick || t[9] !== ref || t[10] !== renderPreview || t[11] !== startAnimation) {
                const Component = r("WAWebControlledAnimatedSticker.react");
                C = <Component className={className} mediaData={mediaData} startAnimation={startAnimation} onClick={onClick} onEnter={y} placeholderRenderer={renderPreview} downloadMedia={downloadMedia} ref={ref} label={label} imageRef={controlledAnimatedStickerimageRef}/>;
                t[2] = className;
                t[3] = controlledAnimatedStickerimageRef;
                t[4] = downloadMedia;
                t[5] = y;
                t[6] = label;
                t[7] = mediaData;
                t[8] = onClick;
                t[9] = ref;
                t[10] = renderPreview;
                t[11] = startAnimation;
                t[12] = C;
            } else {
                C = t[12];
            }
            return C;
        }
        let b;
        if (t[13] !== className || t[14] !== label || t[15] !== onClick || t[16] !== stickerImgRef) {
            b = function(t) {
                if (onClick != null) {
                    const Component = r("WAWebUnstyledButton.react");
                    return <Component onClick={onClick}><img ref={stickerImgRef} className={className} draggable="false" src={t} alt={label}/></Component>;
                }
                return <img ref={stickerImgRef} className={className} draggable="false" src={t} alt={label}/>;
            };
            t[13] = className;
            t[14] = label;
            t[15] = onClick;
            t[16] = stickerImgRef;
            t[17] = b;
        } else {
            b = t[17];
        }
        let v;
        if (t[18] !== downloadMedia || t[19] !== mediaData || t[20] !== renderPreview || t[21] !== b) {
            const Component = r("WAWebMediaUrlProvider");
            v = <Component mediaData={mediaData} placeholderRenderer={renderPreview} downloadMedia={downloadMedia}>{b}</Component>;
            t[18] = downloadMedia;
            t[19] = mediaData;
            t[20] = renderPreview;
            t[21] = b;
            t[22] = v;
        } else {
            v = t[22];
        }
        return v;
    }
    function C(e) {
        const t = o("react-compiler-runtime").c(20);
        const { className, downloadMedia, loopAnimation, mediaData, onClick, renderPreview, startAnimation } = e;
        if (mediaData.animationDuration > 0) {
            const maxLoops = loopAnimation ? Infinity : mediaData.animationDuration / r("nullthrows")(mediaData.singleLoopDuration);
            let render;
            if (t[0] !== className || t[1] !== loopAnimation || t[2] !== maxLoops || t[3] !== onClick || t[4] !== renderPreview || t[5] !== startAnimation) {
                render = function(t) {
                    const Component = r("WAWebStickerAnimationCanvas.react");
                    return <Component className={className} loopAnimation={loopAnimation} maxLoops={maxLoops} blob={t} renderPreview={renderPreview} startAnimation={startAnimation} onClick={onClick}/>;
                };
                t[0] = className;
                t[1] = loopAnimation;
                t[2] = maxLoops;
                t[3] = onClick;
                t[4] = renderPreview;
                t[5] = startAnimation;
                t[6] = render;
            } else {
                render = t[6];
            }
            let _;
            if (t[7] !== downloadMedia || t[8] !== mediaData || t[9] !== renderPreview || t[10] !== render) {
                _ = c.jsx(r("WAWebMediaBlobProvider"), {
                    mediaData,
                    render,
                    renderPlaceholder: renderPreview,
                    downloadMedia
                });
                t[7] = downloadMedia;
                t[8] = mediaData;
                t[9] = renderPreview;
                t[10] = render;
                t[11] = _;
            } else {
                _ = t[11];
            }
            return _;
        }
        if (mediaData.rgbaBuffer) {
            let f;
            if (t[12] !== className || t[13] !== mediaData.rgbaBuffer || t[14] !== mediaData.rgbaHeight || t[15] !== mediaData.rgbaWidth || t[16] !== onClick) {
                const Component = r("WAWebRgbaCanvas.react");
                f = <Component className={className} height={mediaData.rgbaHeight} onClick={onClick} rgbaBuffer={mediaData.rgbaBuffer} width={mediaData.rgbaWidth}/>;
                t[12] = className;
                t[13] = mediaData.rgbaBuffer;
                t[14] = mediaData.rgbaHeight;
                t[15] = mediaData.rgbaWidth;
                t[16] = onClick;
                t[17] = f;
            } else {
                f = t[17];
            }
            return f;
        }
        let g;
        if (t[18] !== renderPreview) {
            g = renderPreview();
            t[18] = renderPreview;
            t[19] = g;
        } else {
            g = t[19];
        }
        return g;
    }
    function B2Component(t) {
        const n = o("react-compiler-runtime").c(17);
        const { className, isCreateButton, mediaData, onClick, theme } = t;
        const mediaData_preview = mediaData.preview;
        let p;
        if (n[0] !== mediaData_preview) {
            p = mediaData_preview instanceof r("WAWebMediaOpaqueData") ? mediaData_preview.url() : null;
            n[0] = mediaData_preview;
            n[1] = p;
        } else {
            p = n[1];
        }
        const _ = p;
        let f;
        if (n[2] !== mediaData.emojis) {
            const C = mediaData.emojis?.join(" ");
            f = C != null && C !== "" ? s._("Sticker with: {emojis}", [
                s._param("emojis", C)
            ]) : s._("Sticker with no label");
            n[2] = mediaData.emojis;
            n[3] = f;
        } else {
            f = n[3];
        }
        const alt = f;
        if (_ == null) {
            if (isCreateButton === true) {
                const v = theme === "stickerExpressionsPanel" ? "stickerExpressionsPanel" : undefined;
                let S;
                if (n[4] !== onClick || n[5] !== v) {
                    const Component = r("WAWebStickerCreateButton.react");
                    S = <Component onClick={onClick} theme={v}/>;
                    n[4] = onClick;
                    n[5] = v;
                    n[6] = S;
                } else {
                    S = n[6];
                }
                return S;
            }
            let R;
            if (n[7] !== onClick || n[8] !== theme) {
                R = (e || (e = r("stylex")))(h(theme), onClick != null && g.placeholderClickable);
                n[7] = onClick;
                n[8] = theme;
                n[9] = R;
            } else {
                R = n[9];
            }
            let L;
            if (n[10] !== R) {
                const Component = r("WAWebStickerLikeMsgPlaceholder.react");
                L = <Component className={R}/>;
                n[10] = R;
                n[11] = L;
            } else {
                L = n[11];
            }
            return L;
        }
        let E;
        if (n[12] !== alt || n[13] !== className || n[14] !== onClick || n[15] !== _) {
            E = <img className={className} draggable="false" onClick={onClick} src={_} alt={alt}/>;
            n[12] = alt;
            n[13] = className;
            n[14] = onClick;
            n[15] = _;
            n[16] = E;
        } else {
            E = n[16];
        }
        return E;
    }
    function VComponent({ animateOnView, downloadMedia, forcePlay, isCreateButton, isNewMsg, loopAnimation, mediaData, onClick, onEnter, ref, theme }) {
        let n;
        const E = o("useWAWebMediaDataValues").useMediaDataValues(mediaData, [
            (n = o("WAWebMediaDataGetters")).getAnimatedAsNewMsg,
            n.getAnimationDuration,
            n.getSingleLoopDuration,
            n.getMediaBlob,
            n.getPreview,
            n.getRenderableUrl,
            n.getRgbaBuffer,
            n.getRgbaHeight,
            n.getRgbaWidth,
            n.getEmojis,
            n.getMediaStage,
            n.getExtractedLottieSticker,
            n.getFilehash,
            n.getMimetype,
            n.getAccessibilityLabel
        ]);
        const k = E[0];
        const I = E[1];
        const T = E[2];
        const D = E[3];
        const x = E[4];
        const $ = E[5];
        const P = E[6];
        const N = E[7];
        const M = E[8];
        const w = E[9];
        const A = E[10];
        const F = E[11];
        const O = E[12];
        const B = E[13];
        const W = E[14];
        const q = r("useLazyRef")(function() {
            return k;
        });
        const q_current = q.current;
        const V = useS();
        const HRef = useRef();
        const GRef = useRef();
        const zRef = useRef();
        const jRef = useRef();
        useImperativeHandle(ref, function() {
            return {
                playAnimationOnce: function() {
                    GRef.current?.playAnimationOnce();
                },
                startAnimation: function() {
                    GRef.current?.startAnimation();
                },
                getImgNode: function() {
                    return HRef.current;
                }
            };
        });
        const K = theme === "stickerPanel" || theme === "stickerStore" ? g.hoverScaleSmall : theme === "stickerExpressionsPanel" ? g.hoverScaleLarge : theme === "conversation" || theme === "composeBox" || theme === "composeBoxQuoted" || theme === "quoted" || theme === "stickerDetails" ? null : (()=>{
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${theme}`);
        })();
        const Q = (e || (e = r("stylex")))(h(theme), onClick != null && K, onClick != null && g.clickable, o("WAWebABProps").getABPropConfigValue("sticker_non_square_rendering_enabled") && g.letterbox);
        let X;
        if (o("WAWebStickerUtils").getStickerFileType(B) === o("WAWebStickerUtils").StickerFileType.LOTTIE) {
            const Component = r("WAWebLottieSticker.react");
            X = <Component mediaData={mediaData} startAnimation onClick={onClick} placeholderRenderer={o("WAWebNullFunc").returnNull} downloadMedia={downloadMedia} className={Q} forcePlay={forcePlay}/>;
        } else if (V == null) {
            X = <B2Component isCreateButton={isCreateButton} mediaData={mediaData} className={Q} theme={theme} onClick={onClick}/>;
        } else {
            const Y = w?.join(" ");
            const J = o("WAWebMessageUiUtils").getStickerCustomLabel(W, Y);
            const startAnimation = animateOnView === true || isNewMsg === true && !q_current;
            const loopAnimation_1 = !!loopAnimation;
            if (V) {
                X = <Y1Component ref={GRef} stickerImgRef={zRef} controlledAnimatedStickerimageRef={jRef} className={Q} mediaData={mediaData} loopAnimation={loopAnimation_1} startAnimation={startAnimation} renderPreview={function() {
                    return <B2Component isCreateButton={isCreateButton} mediaData={mediaData} className={Q} theme={theme} onClick={onClick}/>;
                }} onClick={onClick} onEnter={onEnter} downloadMedia={downloadMedia} label={J}/>;
            } else {
                X = <C className={Q} mediaData={mediaData} loopAnimation={loopAnimation_1} startAnimation={startAnimation} renderPreview={function() {
                    return <B2Component isCreateButton={isCreateButton} mediaData={mediaData} className={Q} onClick={onClick} theme={theme}/>;
                }} onClick={onClick} downloadMedia={downloadMedia} label={J} controlledAnimatedStickerimageRef={jRef}/>;
            }
        }
        return <span ref={HRef} data-testid="sticker-container" className="x8sy99">{X}</span>;
    }
    VComponent.displayName = `${VComponent.name} [from ${i.id}]`;
    function useS() {
        const e = useState(o("WAWebFeatureDetectionDetectWebpSupport").getCachedWebpSupport);
        const t = e[0];
        const n = e[1];
        const a = r("useWAWebUnmountSignal")();
        useEffect(function() {
            if (t == null) {
                r("WAPromiseRaceAbort")(o("WAWebFeatureDetectionDetectWebpSupport").detectWebpSupport(), a).then(n).catch((e)=>{
                    const t = r("getErrorSafe")(e);
                    if (t.name !== o("WAAbortError").ABORT_ERROR) {
                        throw e;
                    }
                });
            }
        }, []);
        return t;
    }
    l.default = VComponent;
}, 226);