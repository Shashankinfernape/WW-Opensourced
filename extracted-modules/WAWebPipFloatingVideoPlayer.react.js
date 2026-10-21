__d("WAWebPipFloatingVideoPlayer.react", [
    "WAWebCmd",
    "WAWebMoveResizeComponent.react",
    "WAWebMoveResizeContext",
    "react",
    "react-compiler-runtime",
    "useWAWebDebouncedCallback"
], function(t, n, r, o, a, i, l) {
    const e = [
        "ref"
    ];
    let s;
    const u = s || (s = o("react"));
    const c = s;
    const { useCallback, useEffect, useMemo, useRef, useState } = c;
    const g = {
        videoFloater: {
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            borderStartStartRadius: "xrxyp3c",
            borderStartEndRadius: "xv0oops",
            borderEndEndRadius: "x1isl5vh",
            borderEndStartRadius: "xn8zj9a",
            boxShadow: "xshw7n3",
            willChange: "x1so62im",
            $$css: true
        },
        redesign: {
            backgroundColor: "xf1jlys",
            borderStartStartRadius: "xlr9sxt",
            borderStartEndRadius: "xvvg52n",
            borderEndEndRadius: "xwd4zgb",
            borderEndStartRadius: "xq8v1ta",
            $$css: true
        }
    };
    const h = 10;
    const y = 10;
    const C = 8;
    const y_1 = 8;
    const v = 330;
    const S = 145;
    const R = 145;
    const L = R / v;
    const E = v / S;
    function K3Component(e) {
        const t = o("react-compiler-runtime").c(5);
        const { aspectRatio, backgroundImage, originalAspectRatio } = e;
        if (originalAspectRatio == null || originalAspectRatio === 0) {
            return null;
        }
        const i = aspectRatio === L && aspectRatio > originalAspectRatio || aspectRatio === E && aspectRatio < originalAspectRatio;
        if (!i) {
            return null;
        }
        let l;
        if (t[0] !== backgroundImage) {
            l = backgroundImage != null && backgroundImage !== "" ? <div className="x10l6tqk x1toy1gi x4e0jua x9ys34d x65okc x1hedwgd xiy17q3 x1xsqp64 x18d0r48 xrxyp3c xv0oops x1isl5vh xn8zj9a x1iy03kw" style={{
                backgroundImage
            }}/> : null;
            t[0] = backgroundImage;
            t[1] = l;
        } else {
            l = t[1];
        }
        const s = l;
        let c;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            c = {
                className: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x15mixft"
            };
            t[2] = c;
        } else {
            c = t[2];
        }
        let d;
        if (t[3] !== s) {
            d = <div {...babelHelpers.extends({}, c, {
                children: s
            })}/>;
            t[3] = s;
            t[4] = d;
        } else {
            d = t[4];
        }
        return d;
    }
    function I(aspectRatio, t) {
        if (aspectRatio > 1) {
            const initialWidth = t ?? v;
            return {
                initialWidth,
                initialHeight: initialWidth / aspectRatio
            };
        }
        const r = t != null ? t / aspectRatio : v;
        return {
            initialHeight: r,
            initialWidth: r * aspectRatio
        };
    }
    function T() {
        let e;
        o("WAWebCmd").Cmd.getConversationHeaderOffset(function(t) {
            e = t;
        });
        return e ?? {
            right: window.innerWidth,
            bottom: 0
        };
    }
    function D() {
        let e;
        o("WAWebCmd").Cmd.getChatListPanelOffset(function(t) {
            e = t;
        });
        return e ?? {
            right: window.innerWidth,
            bottom: 0
        };
    }
    function x(aspectRatio, initialPiPStyle, useChatListPanelPositioning) {
        const r = I(aspectRatio, initialPiPStyle?.width);
        const { initialHeight, initialWidth } = r;
        if (useChatListPanelPositioning === true) {
            const i = D();
            let l = initialPiPStyle?.left;
            if (l == null) {
                const u = i.left ?? 0;
                l = u + C;
            }
            let c = initialWidth;
            let d = initialHeight;
            const m = i.width;
            if (m != null) {
                c = m - 2 * C;
                d = c / aspectRatio;
            }
            let p = initialPiPStyle?.bottom;
            if (p == null) {
                p = window.innerHeight - i.bottom - y_1 - d;
            }
            return {
                width: c,
                left: l,
                bottom: p
            };
        }
        const _ = T();
        let f = initialPiPStyle?.left;
        if (f == null) {
            f = _.right < window.innerWidth ? _.right - initialWidth - h : window.innerWidth - initialWidth - h;
        }
        let g = initialPiPStyle?.bottom;
        if (g == null) {
            g = window.innerHeight - y - initialHeight - _.bottom;
        }
        return {
            width: initialWidth,
            left: f,
            bottom: g
        };
    }
    const $ = 3000;
    function P(t) {
        const i = o("react-compiler-runtime").c(71);
        let l;
        let s;
        if (i[0] !== t) {
            s = t.ref;
            l = babelHelpers.objectWithoutPropertiesLoose(t, e);
            i[0] = t;
            i[1] = l;
            i[2] = s;
        } else {
            l = i[1];
            s = i[2];
        }
        const c = useState(false);
        const extraContentVisible = c[0];
        const p = c[1];
        const v = useState(false);
        const L = v[0];
        const E = v[1];
        const I = useState(false);
        const isResizing = I[0];
        const D = I[1];
        const P = useState(false);
        const isMoving = P[0];
        const w = P[1];
        const ARef = useRef(null);
        let F;
        let O;
        if (i[3] === Symbol.for("react.memo_cache_sentinel")) {
            F = function() {
                return function() {
                    return self.clearTimeout(ARef.current ?? undefined);
                };
            };
            O = [];
            i[3] = F;
            i[4] = O;
        } else {
            F = i[3];
            O = i[4];
        }
        useEffect(F, O);
        let B;
        if (i[5] === Symbol.for("react.memo_cache_sentinel")) {
            B = function() {
                self.clearTimeout(ARef.current ?? undefined);
                p(true);
            };
            i[5] = B;
        } else {
            B = i[5];
        }
        const W = r("useWAWebDebouncedCallback")(B, 50);
        let q;
        if (i[6] !== L) {
            q = function() {
                if (!L) {
                    ARef.current = self.setTimeout(function() {
                        p(false);
                    }, $);
                }
            };
            i[6] = L;
            i[7] = q;
        } else {
            q = i[7];
        }
        const U = r("useWAWebDebouncedCallback")(q, 50);
        let V;
        if (i[8] !== W) {
            V = function() {
                E(true);
                W();
            };
            i[8] = W;
            i[9] = V;
        } else {
            V = i[9];
        }
        const H = V;
        let G;
        if (i[10] === Symbol.for("react.memo_cache_sentinel")) {
            G = function() {
                E(false);
            };
            i[10] = G;
        } else {
            G = i[10];
        }
        const z = G;
        const j = l.bottomContent != null || l.topContent != null || l.enableDragBar;
        let aspectRatio;
        let Q;
        if (i[11] !== l.aspectRatio || i[12] !== l.initialPiPStyle || i[13] !== l.useChatListPanelPositioning) {
            aspectRatio = N(l.aspectRatio);
            Q = x(aspectRatio, l.initialPiPStyle, l.useChatListPanelPositioning);
            i[11] = l.aspectRatio;
            i[12] = l.initialPiPStyle;
            i[13] = l.useChatListPanelPositioning;
            i[14] = aspectRatio;
            i[15] = Q;
        } else {
            aspectRatio = i[14];
            Q = i[15];
        }
        const initialStyle = Q;
        const Y = l;
        const { onInitialWidthCalculated, useChatListPanelPositioning } = Y;
        let ee;
        let te;
        if (i[16] !== initialStyle.width || i[17] !== onInitialWidthCalculated || i[18] !== useChatListPanelPositioning) {
            ee = function() {
                if (useChatListPanelPositioning === true && onInitialWidthCalculated != null) {
                    onInitialWidthCalculated(initialStyle.width);
                }
            };
            te = [
                initialStyle.width,
                onInitialWidthCalculated,
                useChatListPanelPositioning
            ];
            i[16] = initialStyle.width;
            i[17] = onInitialWidthCalculated;
            i[18] = useChatListPanelPositioning;
            i[19] = ee;
            i[20] = te;
        } else {
            ee = i[19];
            te = i[20];
        }
        useEffect(ee, te);
        const ne = S * aspectRatio;
        const re = R < ne ? ne : R;
        const minWidth = l.minWidthOverride ?? re;
        const minHeight = l.minHeightOverride ?? S;
        let ie;
        if (i[21] !== l.useChatListPanelPositioning) {
            ie = l.useChatListPanelPositioning === true ? {
                x: C,
                y: y_1
            } : {
                x: h,
                y
            };
            i[21] = l.useChatListPanelPositioning;
            i[22] = ie;
        } else {
            ie = i[22];
        }
        const margin = ie;
        let se;
        if (i[23] !== isMoving || i[24] !== isResizing) {
            se = {
                isResizing,
                isMoving
            };
            i[23] = isMoving;
            i[24] = isResizing;
            i[25] = se;
        } else {
            se = i[25];
        }
        const ue = se;
        const ce = l;
        const { onResizeEnd, onResizeStart } = ce;
        let pe;
        if (i[26] !== onResizeStart) {
            pe = function() {
                D(true);
                onResizeStart?.();
            };
            i[26] = onResizeStart;
            i[27] = pe;
        } else {
            pe = i[27];
        }
        const onResizeStart_1 = pe;
        let fe;
        if (i[28] !== onResizeEnd) {
            fe = function() {
                D(false);
                onResizeEnd?.();
            };
            i[28] = onResizeEnd;
            i[29] = fe;
        } else {
            fe = i[29];
        }
        const onResizeEnd_1 = fe;
        let he;
        if (i[30] === Symbol.for("react.memo_cache_sentinel")) {
            he = function() {
                w(true);
            };
            i[30] = he;
        } else {
            he = i[30];
        }
        const onMoveStart = he;
        const l_onMoveEnd = l.onMoveEnd;
        let ve;
        if (i[31] !== l_onMoveEnd) {
            ve = function() {
                w(false);
                l_onMoveEnd?.();
            };
            i[31] = l_onMoveEnd;
            i[32] = ve;
        } else {
            ve = i[32];
        }
        const onMoveEnd = ve;
        const Re = j && g.redesign;
        let Le;
        if (i[33] !== l.moveResizeContainerXstyle || i[34] !== Re) {
            Le = [
                g.videoFloater,
                Re,
                l.moveResizeContainerXstyle
            ];
            i[33] = l.moveResizeContainerXstyle;
            i[34] = Re;
            i[35] = Le;
        } else {
            Le = i[35];
        }
        const Ee = j ? W : undefined;
        const ke = j ? U : undefined;
        const Ie = j ? H : undefined;
        const Te = j ? z : undefined;
        let De;
        if (i[36] !== aspectRatio || i[37] !== l.aspectRatio || i[38] !== l.previewUrl) {
            De = <K3Component aspectRatio={aspectRatio} originalAspectRatio={l.aspectRatio} backgroundImage={l.previewUrl}/>;
            i[36] = aspectRatio;
            i[37] = l.aspectRatio;
            i[38] = l.previewUrl;
            i[39] = De;
        } else {
            De = i[39];
        }
        let xe;
        if (i[40] !== ue || i[41] !== l.children || i[42] !== De) {
            const Component = o("WAWebMoveResizeContext").MoveResizeContext.Provider;
            xe = <Component value={ue}>{De}{l.children}</Component>;
            i[40] = ue;
            i[41] = l.children;
            i[42] = De;
            i[43] = xe;
        } else {
            xe = i[43];
        }
        let $e;
        if (i[44] !== aspectRatio || i[45] !== extraContentVisible || i[46] !== onMoveEnd || i[47] !== onResizeEnd_1 || i[48] !== onResizeStart_1 || i[49] !== initialStyle || i[50] !== margin || i[51] !== minHeight || i[52] !== minWidth || i[53] !== l.animationStartStyle || i[54] !== l.bottomContent || i[55] !== l.disableResize || i[56] !== l.dragCursor || i[57] !== l.enableDragBar || i[58] !== l.externalResize || i[59] !== l.independentResize || i[60] !== l.moveResizeRef || i[61] !== l.onResize || i[62] !== l.topContent || i[63] !== s || i[64] !== Le || i[65] !== Ee || i[66] !== ke || i[67] !== Ie || i[68] !== Te || i[69] !== xe) {
            const Component = r("WAWebMoveResizeComponent.react");
            $e = <Component ref={s} moveResizeRef={l.moveResizeRef} aspectRatio={aspectRatio} margin={margin} minWidth={minWidth} minHeight={minHeight} xstyle={Le} initialStyle={initialStyle} animationStartStyle={l.animationStartStyle} escapeConversationHeader independentResize={l.independentResize} disableResize={l.disableResize} topContent={l.topContent} bottomContent={l.bottomContent} onMouseEnter={Ee} onMouseLeave={ke} onFocus={Ie} onBlur={Te} extraContentVisible={extraContentVisible} enableDragBar={l.enableDragBar} dragCursor={l.dragCursor} onResize={l.onResize} onResizeStart={onResizeStart_1} onResizeEnd={onResizeEnd_1} onMoveStart={onMoveStart} onMoveEnd={onMoveEnd} externalResize={l.externalResize}>{xe}</Component>;
            i[44] = aspectRatio;
            i[45] = extraContentVisible;
            i[46] = onMoveEnd;
            i[47] = onResizeEnd_1;
            i[48] = onResizeStart_1;
            i[49] = initialStyle;
            i[50] = margin;
            i[51] = minHeight;
            i[52] = minWidth;
            i[53] = l.animationStartStyle;
            i[54] = l.bottomContent;
            i[55] = l.disableResize;
            i[56] = l.dragCursor;
            i[57] = l.enableDragBar;
            i[58] = l.externalResize;
            i[59] = l.independentResize;
            i[60] = l.moveResizeRef;
            i[61] = l.onResize;
            i[62] = l.topContent;
            i[63] = s;
            i[64] = Le;
            i[65] = Ee;
            i[66] = ke;
            i[67] = Ie;
            i[68] = Te;
            i[69] = xe;
            i[70] = $e;
        } else {
            $e = i[70];
        }
        return $e;
    }
    function N(aspectRatio) {
        if (aspectRatio == null) {
            return 1;
        }
        switch(true){
            case aspectRatio < L:
                return L;
            case aspectRatio > E:
                return E;
            default:
                return aspectRatio;
        }
    }
    l.CALLING_MARGIN_X = C;
    l.MIN_WIDTH = R;
    l.FloatingVideoPlayer = P;
}, 98);