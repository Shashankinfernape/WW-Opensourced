__d("WAWebMultiParticipantCallImage.react", [
    "WAWebDetailImage.react",
    "WAWebVoipUiContext",
    "WAWebVoipUiPopoutWindowContext",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = s || (s = o("react"));
    const s_useContext = s.useContext;
    const d = {
        width: "x5lhr3w",
        height: "x16ye13r",
        $$css: true
    };
    const m = {
        container: {
            position: "x1n2onr6",
            backgroundColor: "x1c7u0tx",
            borderStartStartRadius: "x1c9tyrk",
            borderStartEndRadius: "xeusxvb",
            borderEndEndRadius: "x1pahc9y",
            borderEndStartRadius: "x1ertn4p",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            $$css: true
        },
        containerSize: function(t) {
            return [
                {
                    width: t != null ? "x5lhr3w" : t,
                    height: t != null ? "x16ye13r" : t,
                    $$css: true
                },
                {
                    "--x-width": ((e)=>{
                        if (typeof e === "number") {
                            return `${e}px`;
                        }
                        return e ?? undefined;
                    })(t),
                    "--x-height": ((e)=>{
                        if (typeof e === "number") {
                            return `${e}px`;
                        }
                        return e ?? undefined;
                    })(t)
                }
            ];
        },
        imageOneAuto: function(t) {
            return [
                d,
                {
                    "--x-width": ((e)=>{
                        if (typeof e === "number") {
                            return `${e}px`;
                        }
                        return e ?? undefined;
                    })(`max(49px, min(${(t ?? 0) * 0.2}px, 120px))`),
                    "--x-height": ((e)=>{
                        if (typeof e === "number") {
                            return `${e}px`;
                        }
                        return e ?? undefined;
                    })(`max(49px, min(${(t ?? 0) * 0.2}px, 120px))`)
                }
            ];
        }
    };
    function p(t) {
        const n = o("react-compiler-runtime").c(65);
        const { participantWids, size } = t;
        const l = size === undefined ? 49 : size;
        const s = s_useContext(r("WAWebVoipUiContext"));
        const s_uiHeight = s.uiHeight;
        const p = s_useContext(r("WAWebVoipUiPopoutWindowContext"));
        const p_isContextInPopoutWindow = p.isContextInPopoutWindow;
        let g;
        if (n[0] !== participantWids) {
            g = participantWids.slice(0, 3);
            n[0] = participantWids;
            n[1] = g;
        } else {
            g = n[1];
        }
        const h = g;
        const h_length = h.length;
        if (h_length === 0) {
            return null;
        }
        const C = p_isContextInPopoutWindow ? 120 : Math.max(49, Math.min((s_uiHeight ?? 0) * 0.2, 120));
        let b;
        if (n[2] !== C) {
            b = function(t) {
                if (t === "auto") {
                    return C;
                }
                return t;
            };
            n[2] = C;
            n[3] = b;
        } else {
            b = n[3];
        }
        let v;
        if (n[4] !== l || n[5] !== b) {
            v = b(l);
            n[4] = l;
            n[5] = b;
            n[6] = v;
        } else {
            v = n[6];
        }
        const S = v;
        let R;
        if (n[7] !== C || n[8] !== h_length) {
            R = function(t) {
                if (t === "auto" && h_length === 1) {
                    return null;
                }
                if (t === "auto") {
                    return m.containerSize(C);
                }
                return m.containerSize(t);
            };
            n[7] = C;
            n[8] = h_length;
            n[9] = R;
        } else {
            R = n[9];
        }
        let L;
        let E;
        let k;
        if (n[10] !== S || n[11] !== h_length || n[12] !== h[0] || n[13] !== h[1] || n[14] !== l || n[15] !== R || n[16] !== s_uiHeight) {
            k = Symbol.for("react.early_return_sentinel");
            e: {
                const I = R(l);
                let T;
                if (n[20] !== l) {
                    T = _(l);
                    n[20] = l;
                    n[21] = T;
                } else {
                    T = n[21];
                }
                const quality = T;
                if (h_length === 1) {
                    const x = l === "auto" ? null : l;
                    const customDimensionsStyle = l === "auto";
                    let P;
                    if (n[22] !== l || n[23] !== s_uiHeight) {
                        P = l === "auto" && m.imageOneAuto(s_uiHeight);
                        n[22] = l;
                        n[23] = s_uiHeight;
                        n[24] = P;
                    } else {
                        P = n[24];
                    }
                    let N;
                    if (n[25] !== h[0] || n[26] !== quality || n[27] !== customDimensionsStyle || n[28] !== P || n[29] !== x) {
                        N = u.jsx(o("WAWebDetailImage.react").DetailImage, {
                            id: h[0],
                            size: x,
                            quality,
                            customDimensionsStyle,
                            waitIdle: true,
                            shape: o("WAWebDetailImage.react").DetailImageShape.Circle,
                            xstyle: P
                        });
                        n[25] = h[0];
                        n[26] = quality;
                        n[27] = customDimensionsStyle;
                        n[28] = P;
                        n[29] = x;
                        n[30] = N;
                    } else {
                        N = n[30];
                    }
                    k = <div {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(m.container, I), {
                        children: N
                    })}/>;
                    break e;
                }
                if (h_length === 2) {
                    let M;
                    if (n[31] !== S) {
                        M = Math.round(S * 1.5);
                        n[31] = S;
                        n[32] = M;
                    } else {
                        M = n[32];
                    }
                    const w = M;
                    const A = (e || (e = r("stylex"))).props(m.container, I);
                    let F;
                    let O;
                    if (n[33] === Symbol.for("react.memo_cache_sentinel")) {
                        F = {
                            className: "x10l6tqk x13vifvy x1o0tod x1ax8nco x5yr21d x6ikm8r x10wlt62"
                        };
                        O = {
                            className: "x10l6tqk xwa60dl xbudbmw x11lhmoz"
                        };
                        n[33] = F;
                        n[34] = O;
                    } else {
                        F = n[33];
                        O = n[34];
                    }
                    let B;
                    if (n[35] !== h[0] || n[36] !== w) {
                        B = <div {...babelHelpers.extends({}, F, {
                            children: <div {...babelHelpers.extends({}, O, {
                                children: u.jsx(o("WAWebDetailImage.react").DetailImage, {
                                    id: h[0],
                                    size: w,
                                    quality: o("WAWebDetailImage.react").DetailImageQuality.High,
                                    waitIdle: true
                                })
                            })}/>
                        })}/>;
                        n[35] = h[0];
                        n[36] = w;
                        n[37] = B;
                    } else {
                        B = n[37];
                    }
                    let W;
                    let q;
                    if (n[38] === Symbol.for("react.memo_cache_sentinel")) {
                        W = {
                            className: "x10l6tqk x13vifvy xtijo5x x1ax8nco x5yr21d x6ikm8r x10wlt62"
                        };
                        q = {
                            className: "x10l6tqk xwa60dl xbudbmw x11lhmoz"
                        };
                        n[38] = W;
                        n[39] = q;
                    } else {
                        W = n[38];
                        q = n[39];
                    }
                    let U;
                    if (n[40] !== h[1] || n[41] !== w) {
                        U = <div {...babelHelpers.extends({}, W, {
                            children: <div {...babelHelpers.extends({}, q, {
                                children: u.jsx(o("WAWebDetailImage.react").DetailImage, {
                                    id: h[1],
                                    size: w,
                                    quality: o("WAWebDetailImage.react").DetailImageQuality.High,
                                    waitIdle: true
                                })
                            })}/>
                        })}/>;
                        n[40] = h[1];
                        n[41] = w;
                        n[42] = U;
                    } else {
                        U = n[42];
                    }
                    k = <div {...babelHelpers.extends({}, A, {
                        children: [
                            B,
                            U
                        ]
                    })}/>;
                    break e;
                }
                let V;
                if (n[43] !== S) {
                    V = Math.round(S * 1.5);
                    n[43] = S;
                    n[44] = V;
                } else {
                    V = n[44];
                }
                L = V;
                E = (e || (e = r("stylex"))).props(m.container, I);
            }
            n[10] = S;
            n[11] = h_length;
            n[12] = h[0];
            n[13] = h[1];
            n[14] = l;
            n[15] = R;
            n[16] = s_uiHeight;
            n[17] = L;
            n[18] = E;
            n[19] = k;
        } else {
            L = n[17];
            E = n[18];
            k = n[19];
        }
        if (k !== Symbol.for("react.early_return_sentinel")) {
            return k;
        }
        let H;
        let G;
        if (n[45] === Symbol.for("react.memo_cache_sentinel")) {
            H = {
                className: "x10l6tqk x13vifvy x1o0tod x1ax8nco x5yr21d x6ikm8r x10wlt62"
            };
            G = {
                className: "x10l6tqk xwa60dl xbudbmw x11lhmoz"
            };
            n[45] = H;
            n[46] = G;
        } else {
            H = n[45];
            G = n[46];
        }
        let z;
        if (n[47] !== h[0] || n[48] !== L) {
            z = <div {...babelHelpers.extends({}, H, {
                children: <div {...babelHelpers.extends({}, G, {
                    children: u.jsx(o("WAWebDetailImage.react").DetailImage, {
                        id: h[0],
                        size: L,
                        quality: o("WAWebDetailImage.react").DetailImageQuality.High,
                        waitIdle: true
                    })
                })}/>
            })}/>;
            n[47] = h[0];
            n[48] = L;
            n[49] = z;
        } else {
            z = n[49];
        }
        let j;
        let K;
        if (n[50] === Symbol.for("react.memo_cache_sentinel")) {
            j = {
                className: "x10l6tqk x13vifvy xtijo5x x1ax8nco xw4yvfu x6ikm8r x10wlt62"
            };
            K = {
                className: "x10l6tqk xwa60dl xbudbmw x11lhmoz"
            };
            n[50] = j;
            n[51] = K;
        } else {
            j = n[50];
            K = n[51];
        }
        let Q;
        if (n[52] !== h[1] || n[53] !== L) {
            Q = <div {...babelHelpers.extends({}, j, {
                children: <div {...babelHelpers.extends({}, K, {
                    children: u.jsx(o("WAWebDetailImage.react").DetailImage, {
                        id: h[1],
                        size: L,
                        quality: o("WAWebDetailImage.react").DetailImageQuality.High,
                        waitIdle: true
                    })
                })}/>
            })}/>;
            n[52] = h[1];
            n[53] = L;
            n[54] = Q;
        } else {
            Q = n[54];
        }
        let X;
        let Y;
        if (n[55] === Symbol.for("react.memo_cache_sentinel")) {
            X = {
                className: "x10l6tqk x1ey2m1c xtijo5x x1ax8nco xw4yvfu x6ikm8r x10wlt62"
            };
            Y = {
                className: "x10l6tqk xwa60dl xbudbmw x11lhmoz"
            };
            n[55] = X;
            n[56] = Y;
        } else {
            X = n[55];
            Y = n[56];
        }
        let J;
        if (n[57] !== h[2] || n[58] !== L) {
            J = <div {...babelHelpers.extends({}, X, {
                children: <div {...babelHelpers.extends({}, Y, {
                    children: u.jsx(o("WAWebDetailImage.react").DetailImage, {
                        id: h[2],
                        size: L,
                        quality: o("WAWebDetailImage.react").DetailImageQuality.High,
                        waitIdle: true
                    })
                })}/>
            })}/>;
            n[57] = h[2];
            n[58] = L;
            n[59] = J;
        } else {
            J = n[59];
        }
        let Z;
        if (n[60] !== z || n[61] !== Q || n[62] !== J || n[63] !== E) {
            Z = <div {...babelHelpers.extends({}, E, {
                children: [
                    z,
                    Q,
                    J
                ]
            })}/>;
            n[60] = z;
            n[61] = Q;
            n[62] = J;
            n[63] = E;
            n[64] = Z;
        } else {
            Z = n[64];
        }
        return Z;
    }
    function _(e) {
        if (e === "auto") {
            return o("WAWebDetailImage.react").DetailImageQuality.High;
        }
        if (e > 49) {
            return o("WAWebDetailImage.react").DetailImageQuality.High;
        }
        return o("WAWebDetailImage.react").DetailImageQuality.Low;
    }
    l.default = p;
}, 98);