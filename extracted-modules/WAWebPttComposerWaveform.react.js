__d("WAWebPttComposerWaveform.react", [
    "fbt",
    "$InternalEnum",
    "WAMemoizeCache",
    "WAMemoizeOne",
    "WAPttComposerScaleWaveform",
    "WAPttWaveformGenerateHeightJitterValues",
    "WAWebChatThemeModeContext",
    "WAWebClock",
    "WAWebPttComposerRangeInput.react",
    "WAWebThemeContext",
    "nullthrows",
    "react",
    "react-compiler-runtime",
    "useLazyRef",
    "useWAWebAnimationFrames",
    "useWAWebDebouncedCallback",
    "useWAWebDevicePixelRatio",
    "useWAWebMeasure"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = e;
    const { useCallback, useContext, useEffect, useLayoutEffect, useMemo, useRef, useState } = c;
    const y = n("$InternalEnum").Mirrored([
        "DRAFT_PREVIEW",
        "INCOMING_UNPLAYED_MESSAGE",
        "INCOMING_PLAYED_MESSAGE",
        "OUTGOING_UNPLAYED_MESSAGE",
        "OUTGOING_PLAYED_MESSAGE",
        "STATUS_MESSAGE"
    ]);
    const C = n("$InternalEnum").Mirrored([
        "RECORDER",
        "PREVIEW",
        "VOICE_STATUS"
    ]);
    function b(e) {
        const t = o("react-compiler-runtime").c(11);
        const n = r("useWAWebMeasure")();
        const a = n[0];
        const i = n[1];
        const { height, width } = i;
        let c;
        if (t[0] !== height || t[1] !== e || t[2] !== width) {
            c = width === 0 || height === 0 ? null : <V5Component {...babelHelpers.extends({}, e, {
                width,
                height
            })}/>;
            t[0] = height;
            t[1] = e;
            t[2] = width;
            t[3] = c;
        } else {
            c = t[3];
        }
        const d = c;
        let m;
        let p;
        if (t[4] === Symbol.for("react.memo_cache_sentinel")) {
            m = {
                className: "x1n2onr6 x1iyjqo2"
            };
            p = {
                className: "x10l6tqk x13vifvy x1o0tod"
            };
            t[4] = m;
            t[5] = p;
        } else {
            m = t[4];
            p = t[5];
        }
        let _;
        if (t[6] !== d) {
            _ = <div {...babelHelpers.extends({}, p, {
                children: d
            })}/>;
            t[6] = d;
            t[7] = _;
        } else {
            _ = t[7];
        }
        let f;
        if (t[8] !== a || t[9] !== _) {
            f = <div {...babelHelpers.extends({
                ref: a
            }, m, {
                children: _
            })}/>;
            t[8] = a;
            t[9] = _;
            t[10] = f;
        } else {
            f = t[10];
        }
        return f;
    }
    function V5Component(e) {
        const t = o("react-compiler-runtime").c(69);
        const nRef = useRef();
        const { disabled, getCurrentTime, getDuration, getSamples, height, heightJitterFactor, jitterValuesCount, live, location, mode, onSeek, onSeekEnd, sampleRate, skipThumb, tabIndex, width } = e;
        const pixelRatio = r("useWAWebDevicePixelRatio")();
        const N = useContext(o("WAWebThemeContext").ThemeContext);
        const N_theme = N.theme;
        const e_colorSourceRef = e.colorSourceRef;
        const A = useX(e_colorSourceRef, location, N_theme);
        const F = heightJitterFactor != null ? heightJitterFactor / 2 : 0;
        let O;
        if (t[0] !== F || t[1] !== location) {
            O = L(location, F);
            t[0] = F;
            t[1] = location;
            t[2] = O;
        } else {
            O = t[2];
        }
        const B = O;
        const { calculateInset, draw } = B;
        let U;
        if (t[3] !== F || t[4] !== jitterValuesCount) {
            U = o("WAPttWaveformGenerateHeightJitterValues").generateJitterDistributionArrays(F, jitterValuesCount, jitterValuesCount);
            t[3] = F;
            t[4] = jitterValuesCount;
            t[5] = U;
        } else {
            U = t[5];
        }
        const jitterValues = U;
        const H = useState(null);
        const G = H[0];
        const z = H[1];
        let j;
        if (t[6] !== getCurrentTime) {
            j = getCurrentTime();
            t[6] = getCurrentTime;
            t[7] = j;
        } else {
            j = t[7];
        }
        let K;
        if (t[8] !== getDuration) {
            K = getDuration();
            t[8] = getDuration;
            t[9] = K;
        } else {
            K = t[9];
        }
        let Q;
        if (t[10] !== j || t[11] !== K) {
            Q = {
                value: j,
                max: K
            };
            t[10] = j;
            t[11] = K;
            t[12] = Q;
        } else {
            Q = t[12];
        }
        const X = useState(Q);
        const Y = X[0];
        const J = X[1];
        let Z;
        if (t[13] !== getCurrentTime || t[14] !== getDuration) {
            Z = function() {
                J({
                    value: getCurrentTime(),
                    max: getDuration()
                });
            };
            t[13] = getCurrentTime;
            t[14] = getDuration;
            t[15] = Z;
        } else {
            Z = t[15];
        }
        const ee = r("useWAWebDebouncedCallback")(Z, 500);
        let te;
        if (t[16] !== ee) {
            te = function() {
                ee();
                ee.flush();
            };
            t[16] = ee;
            t[17] = te;
        } else {
            te = t[17];
        }
        const ne = te;
        let re;
        let oe;
        if (t[18] !== mode || t[19] !== ne) {
            re = function() {
                if (mode === C.PREVIEW) {
                    ne();
                }
            };
            oe = [
                mode,
                ne
            ];
            t[18] = mode;
            t[19] = ne;
            t[20] = re;
            t[21] = oe;
        } else {
            re = t[20];
            oe = t[21];
        }
        useEffect(re, oe);
        const ae = r("useLazyRef")(S);
        let ie;
        if (t[22] !== draw || t[23] !== A || t[24] !== getCurrentTime || t[25] !== getDuration || t[26] !== getSamples || t[27] !== height || t[28] !== jitterValues || t[29] !== mode || t[30] !== pixelRatio || t[31] !== sampleRate || t[32] !== ae || t[33] !== G || t[34] !== skipThumb || t[35] !== ee || t[36] !== width) {
            ie = function() {
                ee();
                draw({
                    canvas: r("nullthrows")(nRef.current),
                    samples: getSamples(),
                    width,
                    height,
                    currentTime: G ?? getCurrentTime(),
                    duration: getDuration(),
                    sampleRate,
                    colors: A(),
                    mode,
                    pixelRatio,
                    scaleSamples: ae.current,
                    skipThumb: skipThumb ?? false,
                    jitterValues
                });
            };
            t[22] = draw;
            t[23] = A;
            t[24] = getCurrentTime;
            t[25] = getDuration;
            t[26] = getSamples;
            t[27] = height;
            t[28] = jitterValues;
            t[29] = mode;
            t[30] = pixelRatio;
            t[31] = sampleRate;
            t[32] = ae;
            t[33] = G;
            t[34] = skipThumb;
            t[35] = ee;
            t[36] = width;
            t[37] = ie;
        } else {
            ie = t[37];
        }
        const le = ie;
        let se;
        if (t[38] !== live) {
            se = {
                active: live
            };
            t[38] = live;
            t[39] = se;
        } else {
            se = t[39];
        }
        r("useWAWebAnimationFrames")(le, se);
        useComponent(le, live);
        let ue;
        if (t[40] !== le || t[41] !== onSeek) {
            ue = function(t) {
                onSeek?.(t);
                z(t);
                le();
            };
            t[40] = le;
            t[41] = onSeek;
            t[42] = ue;
        } else {
            ue = t[42];
        }
        const ce = ue;
        let de;
        if (t[43] !== le || t[44] !== onSeek || t[45] !== onSeekEnd || t[46] !== ne) {
            de = function(t) {
                z(null);
                onSeek?.(t);
                onSeekEnd(t);
                le();
                ne();
            };
            t[43] = le;
            t[44] = onSeek;
            t[45] = onSeekEnd;
            t[46] = ne;
            t[47] = de;
        } else {
            de = t[47];
        }
        const onCommit = de;
        const pe = pixelRatio * width;
        const _e = pixelRatio * height;
        const fe = `${width}px`;
        const ge = `${height}px`;
        let he;
        if (t[48] !== fe || t[49] !== ge) {
            he = {
                width: fe,
                height: ge
            };
            t[48] = fe;
            t[49] = ge;
            t[50] = he;
        } else {
            he = t[50];
        }
        let ye;
        if (t[51] !== pe || t[52] !== _e || t[53] !== he) {
            ye = <canvas ref={nRef} width={pe} height={_e} style={he}/>;
            t[51] = pe;
            t[52] = _e;
            t[53] = he;
            t[54] = ye;
        } else {
            ye = t[54];
        }
        const Ce = ye;
        if (mode === C.RECORDER) {
            return Ce;
        }
        const { max, value } = Y;
        const valueText = `${o("WAWebClock").Clock.durationStr(value)}/${o("WAWebClock").Clock.durationStr(max)}`;
        let Re;
        if (t[55] === Symbol.for("react.memo_cache_sentinel")) {
            Re = s._("Voice note progress slider");
            t[55] = Re;
        } else {
            Re = t[55];
        }
        let inset;
        if (t[56] !== calculateInset || t[57] !== width) {
            inset = calculateInset(width);
            t[56] = calculateInset;
            t[57] = width;
            t[58] = inset;
        } else {
            inset = t[58];
        }
        let Ee;
        if (t[59] !== Ce || t[60] !== disabled || t[61] !== ce || t[62] !== onCommit || t[63] !== max || t[64] !== value || t[65] !== valueText || t[66] !== inset || t[67] !== tabIndex) {
            const Component = r("WAWebPttComposerRangeInput.react");
            Ee = <Component ariaLabel={Re} value={value} valueText={valueText} min={0} max={max} smallSkip={1} largeSkip={10} onChange={ce} onCommit={onCommit} disabled={disabled} tabIndex={tabIndex} inset={inset}>{Ce}</Component>;
            t[59] = Ce;
            t[60] = disabled;
            t[61] = ce;
            t[62] = onCommit;
            t[63] = max;
            t[64] = value;
            t[65] = valueText;
            t[66] = inset;
            t[67] = tabIndex;
            t[68] = Ee;
        } else {
            Ee = t[68];
        }
        return Ee;
    }
    function S() {
        const e = r("WAMemoizeOne")(R);
        return function(samples, desiredSize) {
            return e({
                samples,
                inputSize: samples.length,
                desiredSize
            });
        };
    }
    function R({ desiredSize, samples }) {
        return r("WAPttComposerScaleWaveform")(samples, desiredSize);
    }
    function L(location, t = 0) {
        const n = N(location);
        const { barSpacing, barWidth } = n;
        const i = barSpacing / 2;
        const l = barWidth + barSpacing;
        const s = barWidth;
        const u = 7;
        const c = 14;
        const d = 6;
        let m = 0;
        function draw(e) {
            const { canvas, colors, currentTime, duration, height, jitterValues, mode, pixelRatio, sampleRate, scaleSamples, width } = e;
            let I;
            let T;
            let D;
            let fillX;
            const $ = duration === 0 ? 0 : currentTime / duration;
            if (mode === C.RECORDER) {
                I = e.samples;
                const P = width - duration * sampleRate * l;
                T = P > 0 ? 0 : Math.floor(-P / l);
                D = P + T * l;
                fillX = width;
            } else if (mode === C.VOICE_STATUS) {
                const N = currentTime / duration;
                const M = N * e.samples.length;
                const w = M + sampleRate;
                I = e.samples.slice(M, w);
                T = 0;
                D = 0;
                fillX = width;
            } else {
                I = scaleSamples(e.samples, g(width));
                const A = calculateInset(width);
                const F = A[0];
                const O = A[1];
                D = F - barWidth / 2 - i;
                T = 0;
                const B = F - barWidth / 2;
                const W = width - O + barWidth / 2;
                fillX = B + $ * (W - B);
            }
            const q = r("nullthrows")(canvas.getContext("2d"));
            q.lineCap = "round";
            q.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
            q.clearRect(0, 0, width, height);
            for(let U = T; U < I.length; U++){
                const V = D + (U - T) * l + i;
                const H = V + barWidth;
                let G;
                if (mode === C.PREVIEW) {
                    G = 1;
                } else if (mode === C.RECORDER) {
                    const z = V;
                    const j = width - H;
                    G = E(z < j ? Math.min(1, z / u) : Math.min(1, j / c));
                } else {
                    G = 1;
                    if (t != null) {
                        const K = Math.floor(m / jitterValues.length);
                        const Q = jitterValues[(U + K) % jitterValues.length];
                        let X = Q[m % Q.length];
                        const Y = Math.abs(Q[0]);
                        if (U % 2 === 0) {
                            X *= -1;
                        }
                        G = G - Y - X;
                    }
                }
                const J = Math.max(0, G * (s + I[U] * (height - s)));
                f({
                    colors,
                    context: q,
                    fillX,
                    height: J,
                    width: barWidth,
                    x: V,
                    y: (height - J) / 2
                });
            }
            if (mode === C.PREVIEW && !e.skipThumb) {
                const Z = calculateInset(width);
                const ee = Z[0];
                const te = Z[1];
                const ne = ee;
                const re = width - te;
                const x_1 = ne + $ * (re - ne);
                _({
                    color: colors.thumb,
                    context: q,
                    x: x_1,
                    y: height / 2
                });
            }
            m += 1;
        }
        function _({ color, context, x, y }) {
            context.beginPath();
            context.arc(x, y, d, 0, 2 * Math.PI, false);
            context.fillStyle = color;
            context.fill();
        }
        function f({ colors, context, fillX, height, width, x, y }) {
            if (!(width === 0 || height === 0)) {
                const s = Math.min(width / 2, height / 2);
                const u = fillX >= x + width ? colors.barColorPlayed : colors.barColorUnplayed;
                if (height <= width) {
                    context.fillStyle = u;
                    context.beginPath();
                    context.arc(x + width / 2, y + height / 2, s, 0, 2 * Math.PI);
                    context.fill();
                } else {
                    context.strokeStyle = u;
                    context.lineWidth = s * 2;
                    context.beginPath();
                    context.moveTo(x + width / 2, y + s);
                    context.lineTo(x + width / 2, y + height - s);
                    context.stroke();
                }
                if (fillX > x && fillX < x + width) {
                    context.globalCompositeOperation = "source-atop";
                    context.fillStyle = colors.barColorPlayed;
                    context.rect(x, y, fillX - x, height);
                    context.fill();
                    context.globalCompositeOperation = "source-over";
                }
            }
        }
        function g(e) {
            const t = e - 2 * d;
            return Math.floor(t / l);
        }
        function calculateInset(e) {
            const t = l * (g(e) - 1);
            const n = (e - t) / 2;
            return [
                n,
                n
            ];
        }
        return {
            draw,
            calculateInset
        };
    }
    function E(e) {
        if (e < 0.5) {
            return 4 * e * e * e;
        }
        return 1 - (-2 * e + 2) ** 3 / 2;
    }
    const k = o("WAMemoizeCache").memoizeWithArgs(function(e, t) {
        return {
            barColorUnplayed: I("barColorUnplayed", t),
            barColorPlayed: I("barColorPlayed", t),
            thumb: I("thumb", t)
        };
    }, function(e, t) {
        return `${e} ${t}`;
    });
    function I(e, t) {
        return getComputedStyle(r("nullthrows")(document.body)).getPropertyValue(r("nullthrows")(P.get(t))[e]).trim();
    }
    function T(e, location) {
        const n = r("nullthrows")(P.get(location));
        const o = getComputedStyle(e);
        return {
            barColorUnplayed: D(o.getPropertyValue(n.barColorUnplayed).trim(), e),
            barColorPlayed: D(o.getPropertyValue(n.barColorPlayed).trim(), e),
            thumb: D(o.getPropertyValue(n.thumb).trim(), e)
        };
    }
    function D(e, t) {
        if (!e || !e.includes("var(")) {
            return e;
        }
        const n = document.createElement("span");
        n.style.display = "none";
        n.style.setProperty("--_resolve", e);
        n.style.setProperty("color", "var(--_resolve)");
        t.appendChild(n);
        const color = getComputedStyle(n).color;
        n.remove();
        return color;
    }
    function useX(e, location, n) {
        const a = o("react-compiler-runtime").c(12);
        const i = useContext(r("WAWebChatThemeModeContext"));
        const { isThemed, isVibrant } = i;
        const uRef = useRef(null);
        let c;
        let d;
        if (a[0] !== e || a[1] !== isThemed || a[2] !== isVibrant || a[3] !== location || a[4] !== n) {
            c = function() {
                const r = (isThemed || isVibrant) && e?.current != null ? e.current : null;
                uRef.current = r != null ? T(r, location) : k(n, location);
            };
            d = [
                isThemed,
                isVibrant,
                e,
                location,
                n
            ];
            a[0] = e;
            a[1] = isThemed;
            a[2] = isVibrant;
            a[3] = location;
            a[4] = n;
            a[5] = c;
            a[6] = d;
        } else {
            c = a[5];
            d = a[6];
        }
        useLayoutEffect(c, d);
        let p;
        if (a[7] !== isThemed || a[8] !== isVibrant || a[9] !== location || a[10] !== n) {
            p = function() {
                if ((isThemed || isVibrant) && uRef.current != null) {
                    return uRef.current;
                }
                return k(n, location);
            };
            a[7] = isThemed;
            a[8] = isVibrant;
            a[9] = location;
            a[10] = n;
            a[11] = p;
        } else {
            p = a[11];
        }
        return p;
    }
    function useComponent(e, live) {
        const n = o("react-compiler-runtime").c(4);
        let r;
        let a;
        if (n[0] !== e || n[1] !== live) {
            r = function() {
                if (!live) {
                    e();
                }
            };
            a = [
                live,
                e
            ];
            n[0] = e;
            n[1] = live;
            n[2] = r;
            n[3] = a;
        } else {
            r = n[2];
            a = n[3];
        }
        useLayoutEffect(r, a);
    }
    var P = new Map([
        [
            y.DRAFT_PREVIEW,
            {
                barColorUnplayed: "--ptt-waveform-preview-unplayed",
                barColorPlayed: "--ptt-waveform-preview-played",
                thumb: "--ptt-draft-thumb"
            }
        ],
        [
            y.INCOMING_UNPLAYED_MESSAGE,
            {
                barColorUnplayed: "--ptt-waveform-incoming-unplayed",
                barColorPlayed: "--ptt-waveform-incoming-played",
                thumb: "--ptt-thumb-incoming-unplayed"
            }
        ],
        [
            y.INCOMING_PLAYED_MESSAGE,
            {
                barColorUnplayed: "--ptt-waveform-incoming-unplayed",
                barColorPlayed: "--ptt-waveform-incoming-played",
                thumb: "--ptt-thumb-incoming-played"
            }
        ],
        [
            y.OUTGOING_UNPLAYED_MESSAGE,
            {
                barColorUnplayed: "--ptt-waveform-outgoing-unplayed",
                barColorPlayed: "--ptt-waveform-outgoing-played",
                thumb: "--ptt-thumb-outgoing-unplayed"
            }
        ],
        [
            y.OUTGOING_PLAYED_MESSAGE,
            {
                barColorUnplayed: "--ptt-waveform-outgoing-unplayed",
                barColorPlayed: "--ptt-waveform-outgoing-played",
                thumb: "--ptt-thumb-outgoing-played"
            }
        ],
        [
            y.STATUS_MESSAGE,
            {
                barColorUnplayed: "--status-primary",
                barColorPlayed: "--status-primary",
                thumb: "--status-primary"
            }
        ]
    ]);
    function N(e) {
        if (e === y.STATUS_MESSAGE) {
            return {
                barWidth: 3.75,
                barSpacing: 4.5
            };
        }
        return {
            barWidth: 2.5,
            barSpacing: 1.8
        };
    }
    l.WaveformLocation = y;
    l.WaveformMode = C;
    l.Waveform = b;
    l.getWaveformBarDimensions = N;
}, 226);