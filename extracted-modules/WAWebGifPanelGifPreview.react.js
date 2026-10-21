__d("WAWebGifPanelGifPreview.react", [
    "WAAbortError",
    "WAWebChatPreferenceCollection",
    "WAWebChatPreferenceGetters",
    "WAWebNoop",
    "WAWebUA",
    "WAWebUnstyledButton.react",
    "WDSIconIcGradeFilled.react",
    "isStringNullOrEmpty",
    "react",
    "react-compiler-runtime",
    "useWAWebChatPreferenceValues"
], function(t, n, r, o, a, i, l) {
    const e = [
        "ref"
    ];
    let s;
    const u = s || (s = o("react"));
    const c = s;
    const { useEffect, useImperativeHandle, useRef, useState } = c;
    const f = {
        preview: {
            position: "x1n2onr6",
            display: "x78zum5",
            flexGrow: "x1iyjqo2",
            flexShrink: "xs83m0k",
            alignItems: "xuk3077",
            justifyContent: "xl56j7k",
            height: "x129qt2x",
            marginInlineEnd: "xdq1js3 x1j53mea",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            cursor: "x1ypdohk",
            backgroundColor: "x1280gxy",
            borderTopStyle: "x13fuv20",
            borderInlineEndStyle: "x18b5jzi",
            borderBottomStyle: "x1q0q8m5",
            borderInlineStartStyle: "x1t7ytsu",
            borderTopWidth: "xl8et2f",
            borderInlineEndWidth: "xuc0g9m",
            borderBottomWidth: "x1dmim90",
            borderInlineStartWidth: "xs4xcjr",
            borderTopColor: "x1v8p93f",
            borderInlineEndColor: "x1o3jo1z",
            borderBottomColor: "x16stqrj",
            borderInlineStartColor: "xv5lvn5",
            ":focus-visible_borderTopColor": "x1878o1q",
            ":focus-visible_borderInlineEndColor": "xf2y0h5",
            ":focus-visible_borderBottomColor": "xnv9r3m",
            ":focus-visible_borderInlineStartColor": "xo81p9n",
            $$css: true
        }
    };
    function GComponent(t) {
        const n = o("react-compiler-runtime").c(49);
        const t_ref = t.ref;
        const i = babelHelpers.objectWithoutPropertiesLoose(t, e);
        const { gif, onSend } = i;
        const cRef = useRef(null);
        const gRef = useRef(null);
        const y = useState(false);
        const autoPlay = y[0];
        const b = y[1];
        const v = useState(false);
        const S = v[0];
        const R = v[1];
        let L;
        if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
            L = r("WAWebChatPreferenceCollection").getDefault();
            n[0] = L;
        } else {
            L = n[0];
        }
        let E;
        if (n[1] === Symbol.for("react.memo_cache_sentinel")) {
            E = [
                o("WAWebChatPreferenceGetters").getAutoplayAnimatedImages
            ];
            n[1] = E;
        } else {
            E = n[1];
        }
        const k = o("useWAWebChatPreferenceValues").useChatPreferenceValues(L.id, E);
        const I = k[0];
        let T;
        let D;
        if (n[2] !== autoPlay || n[3] !== I) {
            T = function() {
                if (cRef.current != null) {
                    if (I === false) {
                        cRef.current.pause();
                    } else if (autoPlay) {
                        if (cRef.current.paused) {
                            cRef.current.play().catch(o("WAAbortError").catchAbort(r("WAWebNoop")));
                        }
                    } else if (!cRef.current.paused) {
                        cRef.current.pause();
                        if (cRef.current) {
                            cRef.current.currentTime = 0;
                        }
                    }
                }
            };
            D = [
                autoPlay,
                I
            ];
            n[2] = autoPlay;
            n[3] = I;
            n[4] = T;
            n[5] = D;
        } else {
            T = n[4];
            D = n[5];
        }
        useEffect(T, D);
        let x;
        if (n[6] !== autoPlay || n[7] !== I || n[8] !== S) {
            x = function(t) {
                if (I === false) {
                    b(false);
                    R(true);
                    return;
                }
                if (autoPlay !== t || !S) {
                    b(t);
                    R(true);
                }
            };
            n[6] = autoPlay;
            n[7] = I;
            n[8] = S;
            n[9] = x;
        } else {
            x = n[9];
        }
        const setShouldAnimate = x;
        const P = function() {
            onSend(gif);
        };
        let N;
        if (n[10] === Symbol.for("react.memo_cache_sentinel")) {
            N = function(t) {
                gRef.current = t;
            };
            n[10] = N;
        } else {
            N = n[10];
        }
        const M = N;
        const w = function(t) {
            t.preventDefault();
            t.stopPropagation();
            i.onRowActivate?.();
        };
        const A = function() {
            i.onRowActivate?.();
        };
        const onBlur = h;
        let O;
        if (n[11] === Symbol.for("react.memo_cache_sentinel")) {
            O = function() {
                return gRef.current;
            };
            n[11] = O;
        } else {
            O = n[11];
        }
        const B = O;
        let W;
        if (n[12] !== setShouldAnimate) {
            W = function() {
                return {
                    setShouldAnimate,
                    getElement: B
                };
            };
            n[12] = setShouldAnimate;
            n[13] = W;
        } else {
            W = n[13];
        }
        useImperativeHandle(t_ref, W);
        let q = null;
        if (S) {
            if (o("WAWebUA").UA.troublesWithLotsOfVideos && !r("isStringNullOrEmpty")(gif.nonVideoUrl)) {
                let U;
                if (n[14] === Symbol.for("react.memo_cache_sentinel")) {
                    U = {
                        className: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d"
                    };
                    n[14] = U;
                } else {
                    U = n[14];
                }
                let V;
                if (n[15] !== gif.nonVideoUrl || n[16] !== P) {
                    V = <img {...babelHelpers.extends({}, U, {
                        onClick: P,
                        src: gif.nonVideoUrl
                    })}/>;
                    n[15] = gif.nonVideoUrl;
                    n[16] = P;
                    n[17] = V;
                } else {
                    V = n[17];
                }
                q = V;
            } else {
                let H;
                if (n[18] === Symbol.for("react.memo_cache_sentinel")) {
                    H = {
                        className: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d"
                    };
                    n[18] = H;
                } else {
                    H = n[18];
                }
                let G;
                if (n[19] !== autoPlay || n[20] !== gif.previewUrl || n[21] !== P) {
                    G = <video {...babelHelpers.extends({}, H, {
                        onClick: P,
                        controls: false,
                        autoPlay,
                        loop: true,
                        muted: true,
                        ref: cRef,
                        src: gif.previewUrl
                    })}/>;
                    n[19] = autoPlay;
                    n[20] = gif.previewUrl;
                    n[21] = P;
                    n[22] = G;
                } else {
                    G = n[22];
                }
                q = G;
            }
        }
        let z;
        if (i.isStarred === true && i.onUnstarMsg) {
            let j;
            if (n[23] === Symbol.for("react.memo_cache_sentinel")) {
                j = {
                    className: "x10l6tqk x1ro0b6g xy1j3rs x1rozsjd x17t9dm2"
                };
                n[23] = j;
            } else {
                j = n[23];
            }
            let K;
            if (n[24] === Symbol.for("react.memo_cache_sentinel")) {
                K = u.jsx(r("WDSIconIcGradeFilled.react"), {
                    testid: "star",
                    height: 16,
                    width: 16
                });
                n[24] = K;
            } else {
                K = n[24];
            }
            let Q;
            if (n[25] !== i.onUnstarMsg) {
                Q = <button {...babelHelpers.extends({}, j, {
                    onClick: i.onUnstarMsg,
                    children: K
                })}/>;
                n[25] = i.onUnstarMsg;
                n[26] = Q;
            } else {
                Q = n[26];
            }
            z = Q;
        }
        let X;
        if (n[27] !== gif.accessibilityLabel) {
            X = gif.accessibilityLabel != null ? {
                "aria-label": gif.accessibilityLabel
            } : {};
            n[27] = gif.accessibilityLabel;
            n[28] = X;
        } else {
            X = n[28];
        }
        const Y = X;
        let J;
        if (n[29] !== gif.widthStr) {
            J = {
                width: gif.widthStr
            };
            n[29] = gif.widthStr;
            n[30] = J;
        } else {
            J = n[30];
        }
        let Z;
        if (n[31] === Symbol.for("react.memo_cache_sentinel")) {
            Z = "x1iyjqo2 x2lah0s";
            n[31] = Z;
        } else {
            Z = n[31];
        }
        let ee;
        if (n[32] !== gif.ratioStr) {
            ee = {
                paddingBottom: gif.ratioStr
            };
            n[32] = gif.ratioStr;
            n[33] = ee;
        } else {
            ee = n[33];
        }
        let te;
        if (n[34] === Symbol.for("react.memo_cache_sentinel")) {
            te = "x1n2onr6 xh8yej3";
            n[34] = te;
        } else {
            te = n[34];
        }
        let ne;
        if (n[35] !== ee || n[36] !== q) {
            ne = <div style={ee} className={te}>{q}</div>;
            n[35] = ee;
            n[36] = q;
            n[37] = ne;
        } else {
            ne = n[37];
        }
        let re;
        if (n[38] !== J || n[39] !== ne) {
            re = <div style={J} className={Z}>{ne}</div>;
            n[38] = J;
            n[39] = ne;
            n[40] = re;
        } else {
            re = n[40];
        }
        let oe;
        if (n[41] !== Y || n[42] !== onBlur || n[43] !== w || n[44] !== A || n[45] !== M || n[46] !== z || n[47] !== re) {
            oe = u.jsxs(r("WAWebUnstyledButton.react"), babelHelpers.extends({
                ref: M,
                testid: "gif-preview",
                xstyle: f.preview,
                tabIndex: -1,
                onFocus: w,
                onBlur,
                onMouseEnter: A
            }, Y, {
                children: [
                    re,
                    z
                ]
            }));
            n[41] = Y;
            n[42] = onBlur;
            n[43] = w;
            n[44] = A;
            n[45] = M;
            n[46] = z;
            n[47] = re;
            n[48] = oe;
        } else {
            oe = n[48];
        }
        return oe;
    }
    function h(e) {
        e.preventDefault();
        e.stopPropagation();
    }
    l.GifPreview = GComponent;
}, 98);