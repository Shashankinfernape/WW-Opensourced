__d("WAWebMessageLargeEmoji.react", [
    "WAWebAssetLoaderDpiChangeDispatch",
    "WAWebCopyPasteSelectable.react",
    "WAWebEmoji",
    "WAWebEmoji.react",
    "WAWebEmojiConst",
    "WAWebImg.react",
    "WAWebImgPlaceholderConst",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebABPropConfigValue",
    "useWAWebDevicePixelRatio"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = s;
    const { useCallback: d, useState: m } = c;
    const p = "x1bwj0ef-B";
    const _ = {
        highRes: {
            backgroundImage: "x18o3ruo",
            cursor: "x1ed109x",
            display: "x1rg5ohu",
            pointerEvents: "x47corl",
            $$css: true
        },
        mediumLowRes: {
            height: "x1gr386z",
            marginTop: "xr9ek0c",
            marginInlineEnd: "xnnr8r",
            marginBottom: "xjpr12u",
            marginInlineStart: "xwklpps",
            transform: "x1jxq6s",
            width: "x1pj3sps",
            $$css: true
        },
        mediumHighRes: {
            height: "xivd9fe",
            width: "xvf2vmp",
            $$css: true
        },
        largeLowRes: {
            height: "x1gr386z",
            marginTop: "x1xmf6yo",
            marginInlineEnd: "x1xegmmw",
            marginBottom: "x1e56ztr",
            marginInlineStart: "x13fj5qh",
            transform: "x1o8luej",
            width: "x1pj3sps",
            $$css: true
        },
        largeHighRes: {
            height: "x5okue4",
            width: "xn52ylp",
            $$css: true
        },
        xlargeLowRes: {
            height: "x1gr386z",
            marginTop: "x1hmvnq2",
            marginInlineEnd: "x1my54xf",
            marginBottom: "x1u7kmwd",
            marginInlineStart: "xcev3uh",
            transform: "xvfukp0",
            width: "x1pj3sps",
            $$css: true
        },
        xlargeHighRes: {
            height: "x25f8je",
            width: "x1fkfyby",
            $$css: true
        },
        xlarge60LowRes: {
            marginTop: "x1sy10c2",
            marginInlineEnd: "x3aesyq",
            marginBottom: "xieb3on",
            marginInlineStart: "xqsn43r",
            transform: "xzo5y6v",
            $$css: true
        },
        xlarge60HighRes: {
            height: "x13gmerm",
            width: "x1rzkp0p",
            $$css: true
        },
        invisible: {
            insetInlineStart: "x1o0tod",
            position: "x10l6tqk",
            top: "x13vifvy",
            visibility: "xlshs6z",
            $$css: true
        },
        animation: {
            flexBasis: "xdl72j9",
            flexGrow: "x1c4vz4f",
            flexShrink: "x2lah0s",
            position: "x1n2onr6",
            $$css: true
        },
        heartbeat: {
            animationDirection: "xpz12be",
            animationDuration: "xxkxylk",
            animationIterationCount: "xa4qsjk",
            animationName: "xsh9q95",
            animationTimingFunction: "xa3vuyk",
            insetInlineStart: "x1o0tod",
            left: null,
            right: null,
            position: "x10l6tqk",
            top: "x13vifvy",
            transform: "x1jec706",
            transformOrigin: "x1al4vs7",
            $$css: true
        },
        fallback: {
            alignItems: "x6s0dn4",
            display: "x3nfvp2",
            fontFamily: "x19la9d6",
            justifyContent: "xl56j7k",
            lineHeight: "xo5v014",
            $$css: true
        },
        fallbackMedium: {
            fontSize: "xsopvxa",
            $$css: true
        },
        fallbackLarge: {
            fontSize: "x26jni6",
            $$css: true
        },
        fallbackXlarge: {
            fontSize: "xj2owi6",
            $$css: true
        },
        fallbackXlarge60: {
            fontSize: "x1ydc4jh",
            $$css: true
        }
    };
    function f(t) {
        const n = o("react-compiler-runtime").c(50);
        const { ellipsifiable: a, emoji: i, size: l, animation: s, element: c, selectable: d, xstyle: p } = t;
        const f = l === void 0 ? o("WAWebEmojiConst").LargeEmojiSize.MEDIUM : l;
        const g = s === void 0 ? false : s;
        const h = c === void 0 ? "div" : c;
        const y = r("useWAWebDevicePixelRatio")();
        let C;
        if (n[0] !== t.emoji) {
            C = function() {
                const n = o("WAWebEmoji").EmojiUtil.applyGlyphTransformations(o("WAWebEmoji").EmojiUtil.normalizeEmoji(t.emoji) ?? t.emoji);
                const r = o("WAWebEmoji").EmojiUtil.getGlyphId(n);
                return !!(r != null && o("WAWebEmoji").EmojiUtil.isGlyphCached(r));
            };
            n[0] = t.emoji;
            n[1] = C;
        } else {
            C = n[1];
        }
        const b = C;
        const v = m(b);
        const S = v[0];
        const R = v[1];
        o("useWAWebABPropConfigValue").useABPropConfigValue("use_custom_soccer_ball_for_reaction_enabled");
        o("useWAWebABPropConfigValue").useABPropConfigValue("animated_soccer_ball_prod_enabled");
        let L;
        if (n[2] !== i) {
            L = o("WAWebEmoji").EmojiUtil.normalizeEmoji(i) ?? i;
            n[2] = i;
            n[3] = L;
        } else {
            L = n[3];
        }
        const k = o("WAWebEmoji").EmojiUtil.applyGlyphTransformations(L);
        const I = m(y);
        const T = I[0];
        const D = I[1];
        const x = m(t.emoji);
        const $ = x[0];
        const P = x[1];
        if (T !== y || $ !== t.emoji) {
            D(y);
            P(t.emoji);
            R(b());
        }
        const N = function() {
            const e = o("WAWebEmoji").EmojiUtil.getGlyphId(k);
            if (e != null) {
                o("WAWebEmoji").EmojiUtil.markGlyphCached(e);
            }
            R(true);
        };
        let M;
        let w;
        let A;
        if (f === o("WAWebEmojiConst").LargeEmojiSize.LARGE) {
            M = _.largeHighRes;
            w = _.largeLowRes;
            A = _.fallbackLarge;
        } else if (f === o("WAWebEmojiConst").LargeEmojiSize.XLARGE) {
            M = _.xlargeHighRes;
            w = _.xlargeLowRes;
            A = _.fallbackXlarge;
        } else if (f === o("WAWebEmojiConst").LargeEmojiSize.XLARGE_60) {
            M = _.xlarge60HighRes;
            w = _.xlarge60LowRes;
            A = _.fallbackXlarge60;
        } else {
            M = _.mediumHighRes;
            w = _.mediumLowRes;
            A = _.fallbackMedium;
        }
        let F;
        if (f === o("WAWebEmojiConst").LargeEmojiSize.XLARGE_60) {
            F = 160;
        } else if (f === o("WAWebEmojiConst").LargeEmojiSize.XLARGE || r("WAWebAssetLoaderDpiChangeDispatch").currentRes === "high") {
            F = 64;
        } else {
            F = 40;
        }
        const O = o("WAWebEmoji").EmojiUtil.getGlyphPath(k, F);
        if (O == null) {
            const B = a === true ? "true" : void 0;
            let W;
            if (n[4] !== A || n[5] !== p) {
                W = (e || (e = r("stylex"))).props(_.fallback, A, p);
                n[4] = A;
                n[5] = p;
                n[6] = W;
            } else {
                W = n[6];
            }
            let q;
            if (n[7] !== i || n[8] !== B || n[9] !== W) {
                q = <span {...babelHelpers.extends({
                    "data-ellipsifiable": B
                }, W, {
                    children: i
                })}/>;
                n[7] = i;
                n[8] = B;
                n[9] = W;
                n[10] = q;
            } else {
                q = n[10];
            }
            return q;
        }
        if (S && g) {
            const U = h;
            let V;
            if (n[11] !== p) {
                V = (e || (e = r("stylex")))(_.animation, p);
                n[11] = p;
                n[12] = V;
            } else {
                V = n[12];
            }
            const H = a === true ? "true" : void 0;
            let G;
            if (n[13] !== M) {
                G = (e || (e = r("stylex")))(_.highRes, M);
                n[13] = M;
                n[14] = G;
            } else {
                G = n[14];
            }
            const z = !!d;
            let j;
            if (n[15] !== i || n[16] !== G || n[17] !== z) {
                const Component = o("WAWebCopyPasteSelectable.react").SelectableImg;
                j = <Component alt={i} className={G} draggable={false} plainText={i} selectable={z} src={o("WAWebImgPlaceholderConst").ONE_BY_ONE_TRANS_GIF}/>;
                n[15] = i;
                n[16] = G;
                n[17] = z;
                n[18] = j;
            } else {
                j = n[18];
            }
            let K;
            if (n[19] !== M) {
                K = (e || (e = r("stylex")))(_.highRes, M, _.heartbeat);
                n[19] = M;
                n[20] = K;
            } else {
                K = n[20];
            }
            let Q;
            if (n[21] !== O || n[22] !== K) {
                const Component = r("WAWebImg.react");
                Q = <Component className={K} draggable={false} selectable={false} src={O}/>;
                n[21] = O;
                n[22] = K;
                n[23] = Q;
            } else {
                Q = n[23];
            }
            let X;
            if (n[24] !== U || n[25] !== Q || n[26] !== V || n[27] !== H || n[28] !== j) {
                X = <U className={V} data-ellipsifiable={H}>{j}{Q}</U>;
                n[24] = U;
                n[25] = Q;
                n[26] = V;
                n[27] = H;
                n[28] = j;
                n[29] = X;
            } else {
                X = n[29];
            }
            return X;
        }
        let Y;
        if (n[30] !== k || n[31] !== S || n[32] !== w || n[33] !== d || n[34] !== p) {
            Y = S ? void 0 : u.jsx(r("WAWebEmoji.react"), {
                DEPRECATED_className: (e || (e = r("stylex")))(w),
                emoji: k,
                selectable: d,
                xstyle: p
            }, "low-res");
            n[30] = k;
            n[31] = S;
            n[32] = w;
            n[33] = d;
            n[34] = p;
            n[35] = Y;
        } else {
            Y = n[35];
        }
        const J = Y;
        let Z;
        if (n[36] !== S || n[37] !== M) {
            Z = (e || (e = r("stylex")))(!S && _.invisible, _.highRes, M);
            n[36] = S;
            n[37] = M;
            n[38] = Z;
        } else {
            Z = n[38];
        }
        let ee;
        if (n[39] !== k || n[40] !== O || n[41] !== N || n[42] !== d || n[43] !== Z || n[44] !== p) {
            const Component = r("WAWebEmoji.react");
            ee = <Component key="high-res" DEPRECATED_className={Z} emoji={k} onLoad={N} selectable={d} src={O} xstyle={p}/>;
            n[39] = k;
            n[40] = O;
            n[41] = N;
            n[42] = d;
            n[43] = Z;
            n[44] = p;
            n[45] = ee;
        } else {
            ee = n[45];
        }
        const te = ee;
        const ne = a === true ? "true" : void 0;
        let re;
        if (n[46] !== te || n[47] !== J || n[48] !== ne) {
            re = <span data-ellipsifiable={ne}>{J}{te}</span>;
            n[46] = te;
            n[47] = J;
            n[48] = ne;
            n[49] = re;
        } else {
            re = n[49];
        }
        return re;
    }
    l.SIZE = o("WAWebEmojiConst").LargeEmojiSize;
    l.LargeEmoji = f;
}, 98);