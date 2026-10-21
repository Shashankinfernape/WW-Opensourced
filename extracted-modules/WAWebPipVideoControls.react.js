__d("WAWebPipVideoControls.react", [
    "fbt",
    "WAWebClassnames",
    "WAWebClock",
    "WAWebExternalLink.react",
    "WAWebPipCloseButton.react",
    "WAWebPipConst",
    "WAWebPipCtwaSourceButton.react",
    "WAWebPipFullscreenToggleButton.react",
    "WAWebStopEvent",
    "WAWebUA",
    "WAWebURLUtils",
    "WAWebVideoPlaybackSpeed",
    "WAWebVideoPlaybackSpeedButton.react",
    "WDSButton.react",
    "WDSIconIcNoSound.react",
    "WDSIconIcPauseFilled.react",
    "WDSIconIcPlayArrowFilled.react",
    "WDSIconIcRefresh.react",
    "WDSIconIcVolumeUp.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    const e = [
        "ref"
    ];
    let u;
    const c = u || (u = o("react"));
    const d = u;
    const { useEffect, useRef, useState } = d;
    const f = "0 0 1px 1px rgba(var(--shadow-rgb), 0.15), 0 1px 2px 0 rgba(var(--shadow-rgb), 0.2)";
    const g = 4.5;
    const h = 5;
    const y = 0.25;
    function C(ctwaSourceUrl) {
        return r("WAWebURLUtils").withoutWww(r("WAWebURLUtils").hostname(ctwaSourceUrl));
    }
    function b({ isVideoFinished, isVideoPlaying, onPause, onPlay }) {
        if (isVideoPlaying) {
            return {
                ariaLabel: s._("Pause"),
                Icon: r("WDSIconIcPauseFilled.react"),
                onClick: onPause,
                testid: "video-pause"
            };
        }
        if (isVideoFinished) {
            return {
                ariaLabel: s._("Replay"),
                Icon: r("WDSIconIcRefresh.react"),
                onClick: onPlay,
                testid: "refresh"
            };
        }
        return {
            ariaLabel: s._("Play"),
            Icon: r("WDSIconIcPlayArrowFilled.react"),
            onClick: onPlay,
            testid: "video-play"
        };
    }
    function V3Component(e) {
        const t = o("react-compiler-runtime").c(15);
        const { duration, isFullscreenMode, mouseOverProgressRatio } = e;
        if (mouseOverProgressRatio === undefined) {
            let i;
            if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
                i = <div className="x10l6tqk x47corl xg01cxk x19991ni x1g2r6go xwji4o3"/>;
                t[0] = i;
            } else {
                i = t[0];
            }
            return i;
        }
        let l;
        if (t[1] !== duration || t[2] !== mouseOverProgressRatio) {
            l = o("WAWebClock").Clock.durationStr(mouseOverProgressRatio * duration);
            t[1] = duration;
            t[2] = mouseOverProgressRatio;
            t[3] = l;
        } else {
            l = t[3];
        }
        const s = l;
        const u = `${mouseOverProgressRatio * 100}%`;
        let d;
        if (t[4] === Symbol.for("react.memo_cache_sentinel")) {
            d = "x10l6tqk x47corl x19991ni x1g2r6go xwji4o3 x1hc1fzr";
            t[4] = d;
        } else {
            d = t[4];
        }
        let m;
        if (t[5] !== u) {
            m = {
                left: u
            };
            t[5] = u;
            t[6] = m;
        } else {
            m = t[6];
        }
        let p;
        if (t[7] !== isFullscreenMode) {
            p = ({
                0: {
                    className: "x10l6tqk x1m0knhv x2b8uid x1kkjihi xy4mbju x1jz9odr x1q8xho0 x1guw455 xmix8c7 x1pg5gke xd4r4e8 xjwep3j x1t39747 x1wcsgtt x1pczhz8 x11lhmoz x1j6awrg x1fztlqz xhkezso x1s928wv xyy8hph x48c8kc xhhgppv x1x3wcnv xynf4tj xdjs2zz x1r9ni5o xvsnedh xf2ja8i xhg02go x1u9sq30 x3zr398 xldp6pj"
                },
                1: {
                    className: "x10l6tqk x1m0knhv x2b8uid x1kkjihi xy4mbju x1q8xho0 x11lhmoz x1j6awrg x1fztlqz xhkezso x1s928wv xyy8hph x48c8kc xhhgppv x1x3wcnv xynf4tj xdjs2zz x1r9ni5o xvsnedh xldp6pj x5lvsfk x1247r65 x1fgtraw x1c3i2sq xgif2c7 x1i5p2am x1whfx0g xr2y4jy x1ihp6rs x1jcnrxp xdypm50 x1x49quv x3ml48c"
                }
            })[!!isFullscreenMode << 0];
            t[7] = isFullscreenMode;
            t[8] = p;
        } else {
            p = t[8];
        }
        let _;
        if (t[9] !== p || t[10] !== s) {
            _ = <div {...babelHelpers.extends({}, p, {
                children: s
            })}/>;
            t[9] = p;
            t[10] = s;
            t[11] = _;
        } else {
            _ = t[11];
        }
        let f;
        if (t[12] !== m || t[13] !== _) {
            f = <div className={d} style={m}>{_}</div>;
            t[12] = m;
            t[13] = _;
            t[14] = f;
        } else {
            f = t[14];
        }
        return f;
    }
    const S = 5;
    function R(e) {
        const t = o("react-compiler-runtime").c(76);
        const { bufferedTime, duration, isFullscreenMode, isMouseOverProgressBar, mouseOverProgressRatio, onChange, onMouseDown, onMouseEnter, onMouseLeave, onMouseOverProgressRatioChange, onMouseUp, onSeekTo, progress } = e;
        const R = useState(false);
        const L = R[0];
        const E = R[1];
        let k;
        if (t[0] !== duration || t[1] !== onSeekTo || t[2] !== progress) {
            k = function(t) {
                const e = t.key === "ArrowRight" || t.key === "ArrowUp" ? Math.min(duration, progress + S) : t.key === "ArrowLeft" || t.key === "ArrowDown" ? Math.max(0, progress - S) : t.key === "Home" ? 0 : t.key === "End" ? duration : null;
                if (e != null) {
                    t.preventDefault();
                    t.stopPropagation();
                    onSeekTo(e);
                }
            };
            t[0] = duration;
            t[1] = onSeekTo;
            t[2] = progress;
            t[3] = k;
        } else {
            k = t[3];
        }
        const I = k;
        let T = progress / duration;
        if (T > 1) {
            T = 1;
        }
        const D = `${T * 100}%`;
        let x;
        if (t[4] !== D) {
            x = {
                width: D
            };
            t[4] = D;
            t[5] = x;
        } else {
            x = t[5];
        }
        const $ = x;
        let P = bufferedTime / duration;
        if (P > 1) {
            P = 1;
        }
        const N = `${P * 100}%`;
        let M;
        if (t[6] !== N) {
            M = {
                width: N
            };
            t[6] = N;
            t[7] = M;
        } else {
            M = t[7];
        }
        const w = M;
        let A;
        if (t[8] !== D) {
            A = {
                left: D
            };
            t[8] = D;
            t[9] = A;
        } else {
            A = t[9];
        }
        const F = A;
        let O;
        if (t[10] !== isFullscreenMode) {
            O = ({
                0: {
                    className: "x1n2onr6 x1iyjqo2 x14yy4lh xvijh9v xcknrev xat24cr xdwrcjd"
                },
                1: {
                    className: "x1n2onr6 x1iyjqo2 x14yy4lh xdj266r x19dbzi3 xjpr12u x1y3qizg"
                }
            })[!!isFullscreenMode << 0];
            t[10] = isFullscreenMode;
            t[11] = O;
        } else {
            O = t[11];
        }
        let B;
        if (t[12] !== onMouseLeave || t[13] !== onMouseOverProgressRatioChange) {
            B = function(t) {
                onMouseLeave(t);
                onMouseOverProgressRatioChange(undefined);
            };
            t[12] = onMouseLeave;
            t[13] = onMouseOverProgressRatioChange;
            t[14] = B;
        } else {
            B = t[14];
        }
        let onMouseMove;
        if (t[15] !== duration || t[16] !== isFullscreenMode || t[17] !== onMouseOverProgressRatioChange || t[18] !== progress) {
            onMouseMove = function(t) {
                const e = isFullscreenMode ? h : g;
                const left = t.currentTarget.getBoundingClientRect().left;
                const t_pageX = t.pageX;
                const offsetWidth = t.currentTarget.offsetWidth;
                const l = t_pageX - left - e;
                const s = offsetWidth - 2 * e;
                const u = (t_pageX - left - e) / s;
                let c = u;
                const d = s * (progress / duration);
                const m = Math.abs(l - d) <= e;
                if (u < 0) {
                    c = m ? 0 : undefined;
                } else if (u > 1) {
                    c = m ? 1 : undefined;
                }
                onMouseOverProgressRatioChange(c);
            };
            t[15] = duration;
            t[16] = isFullscreenMode;
            t[17] = onMouseOverProgressRatioChange;
            t[18] = progress;
            t[19] = onMouseMove;
        } else {
            onMouseMove = t[19];
        }
        let q;
        if (t[20] === Symbol.for("react.memo_cache_sentinel")) {
            q = s._("Video seek slider");
            t[20] = q;
        } else {
            q = t[20];
        }
        let U;
        if (t[21] === Symbol.for("react.memo_cache_sentinel")) {
            U = {
                className: "x10l6tqk xhtitgo xh8yej3 x5yr21d x1ypdohk xjbqb8w x1ejq31n x18oe1m7 x1sy0etr xstzfhl x1t137rt xjyslct x1uixova x1j9fppj xs7b4ar xpywitp xdx36j xibs45w x18rvqgn x16taylq x1brj8f7 xl7jiex x5cx8bf x13fi9fm"
            };
            t[21] = U;
        } else {
            U = t[21];
        }
        let V;
        if (t[22] === Symbol.for("react.memo_cache_sentinel")) {
            V = function() {
                return E(false);
            };
            t[22] = V;
        } else {
            V = t[22];
        }
        let H;
        if (t[23] === Symbol.for("react.memo_cache_sentinel")) {
            H = function() {
                return E(true);
            };
            t[23] = H;
        } else {
            H = t[23];
        }
        let G;
        if (t[24] !== duration) {
            G = duration.toLocaleString("en-US", {
                minimumFractionDigits: 0,
                maximumFractionDigits: 2,
                roundingMode: "trunc",
                useGrouping: false
            });
            t[24] = duration;
            t[25] = G;
        } else {
            G = t[25];
        }
        let z;
        if (t[26] !== I || t[27] !== onChange || t[28] !== onMouseDown || t[29] !== onMouseUp || t[30] !== progress || t[31] !== G) {
            z = <input {...babelHelpers.extends({
                tabIndex: 0,
                "aria-label": q,
                "data-testid": "progress"
            }, U, {
                dir: "ltr",
                onBlur: V,
                onChange,
                onFocus: H,
                onKeyDown: I,
                onMouseDown,
                onMouseUp,
                type: "range",
                min: "0",
                max: G,
                step: "any",
                value: progress
            })}/>;
            t[26] = I;
            t[27] = onChange;
            t[28] = onMouseDown;
            t[29] = onMouseUp;
            t[30] = progress;
            t[31] = G;
            t[32] = z;
        } else {
            z = t[32];
        }
        let j;
        if (t[33] !== isFullscreenMode) {
            j = ({
                0: {
                    className: "x1n2onr6 x5yr21d xzvdq3n x8sq2zk x47corl"
                },
                1: {
                    className: "x1n2onr6 x5yr21d x47corl xf6vk7d xpcyujq"
                }
            })[!!isFullscreenMode << 0];
            t[33] = isFullscreenMode;
            t[34] = j;
        } else {
            j = t[34];
        }
        let K;
        if (t[35] !== isFullscreenMode) {
            K = ({
                0: {
                    className: "x10l6tqk xwa60dl x1o0tod xuoj239 x47corl x1exm37y xh8yej3 x1enq1c2 xr9e8f9 xeusxvb x1ui04y5 x1ertn4p x1eaqakq"
                },
                2: {
                    className: "x10l6tqk xwa60dl x1o0tod xuoj239 x47corl xh8yej3 x1enq1c2 xr9e8f9 xeusxvb x1ui04y5 x1ertn4p x1eaqakq x1cb1t30"
                },
                1: {
                    className: "x10l6tqk xwa60dl x1o0tod x47corl x1exm37y xh8yej3 x1enq1c2 xr9e8f9 xeusxvb x1ui04y5 x1ertn4p x1eaqakq xqu0tyb"
                },
                3: {
                    className: "x10l6tqk xwa60dl x1o0tod x47corl xh8yej3 x1enq1c2 xr9e8f9 xeusxvb x1ui04y5 x1ertn4p x1eaqakq x1cb1t30 xqu0tyb"
                }
            })[!!isFullscreenMode << 1 | !!isFullscreenMode << 0];
            t[35] = isFullscreenMode;
            t[36] = K;
        } else {
            K = t[36];
        }
        let Q;
        if (t[37] !== K) {
            Q = <div {...babelHelpers.extends({}, K)}/>;
            t[37] = K;
            t[38] = Q;
        } else {
            Q = t[38];
        }
        let X;
        if (t[39] !== P || t[40] !== isFullscreenMode) {
            X = ({
                0: "x10l6tqk xwa60dl x1o0tod xuoj239 x47corl x1exm37y x1enq1c2 x10do2q5 xxrw8yf",
                4: "x10l6tqk xwa60dl x1o0tod xuoj239 x47corl x1enq1c2 x10do2q5 xxrw8yf x1cb1t30",
                2: "x10l6tqk xwa60dl x1o0tod x47corl x1exm37y x1enq1c2 x10do2q5 xxrw8yf xqu0tyb",
                6: "x10l6tqk xwa60dl x1o0tod x47corl x1enq1c2 x10do2q5 xxrw8yf x1cb1t30 xqu0tyb",
                1: "x10l6tqk xwa60dl x1o0tod xuoj239 x47corl x1exm37y x1enq1c2 x10do2q5 xxrw8yf x3hi7kx x159edpp",
                5: "x10l6tqk xwa60dl x1o0tod xuoj239 x47corl x1enq1c2 x10do2q5 xxrw8yf x1cb1t30 x3hi7kx x159edpp",
                3: "x10l6tqk xwa60dl x1o0tod x47corl x1exm37y x1enq1c2 x10do2q5 xxrw8yf xqu0tyb x3hi7kx x159edpp",
                7: "x10l6tqk xwa60dl x1o0tod x47corl x1enq1c2 x10do2q5 xxrw8yf x1cb1t30 xqu0tyb x3hi7kx x159edpp"
            })[!!isFullscreenMode << 2 | !!isFullscreenMode << 1 | (P === 1) << 0];
            t[39] = P;
            t[40] = isFullscreenMode;
            t[41] = X;
        } else {
            X = t[41];
        }
        let Y;
        if (t[42] !== w || t[43] !== X) {
            Y = <div data-testid="progressbar-buffer" className={X} style={w}/>;
            t[42] = w;
            t[43] = X;
            t[44] = Y;
        } else {
            Y = t[44];
        }
        let J;
        if (t[45] !== isFullscreenMode || t[46] !== T) {
            J = ({
                0: "x10l6tqk xwa60dl x1o0tod xuoj239 x47corl x1exm37y x10dujrv x10do2q5 xxrw8yf",
                4: "x10l6tqk xwa60dl x1o0tod xuoj239 x47corl x10dujrv x10do2q5 xxrw8yf x1cb1t30",
                2: "x10l6tqk xwa60dl x1o0tod x47corl x1exm37y x10dujrv x10do2q5 xxrw8yf xqu0tyb",
                6: "x10l6tqk xwa60dl x1o0tod x47corl x10dujrv x10do2q5 xxrw8yf x1cb1t30 xqu0tyb",
                1: "x10l6tqk xwa60dl x1o0tod xuoj239 x47corl x1exm37y x10dujrv x10do2q5 xxrw8yf x3hi7kx x159edpp",
                5: "x10l6tqk xwa60dl x1o0tod xuoj239 x47corl x10dujrv x10do2q5 xxrw8yf x1cb1t30 x3hi7kx x159edpp",
                3: "x10l6tqk xwa60dl x1o0tod x47corl x1exm37y x10dujrv x10do2q5 xxrw8yf xqu0tyb x3hi7kx x159edpp",
                7: "x10l6tqk xwa60dl x1o0tod x47corl x10dujrv x10do2q5 xxrw8yf x1cb1t30 xqu0tyb x3hi7kx x159edpp"
            })[!!isFullscreenMode << 2 | !!isFullscreenMode << 1 | (T === 1) << 0];
            t[45] = isFullscreenMode;
            t[46] = T;
            t[47] = J;
        } else {
            J = t[47];
        }
        let Z;
        if (t[48] !== $ || t[49] !== J) {
            Z = <div data-testid="progressbar-progress" className={J} style={$}/>;
            t[48] = $;
            t[49] = J;
            t[50] = Z;
        } else {
            Z = t[50];
        }
        let ee;
        if (t[51] !== L || t[52] !== isFullscreenMode || t[53] !== isMouseOverProgressBar) {
            ee = ({
                0: "x10l6tqk xwa60dl xk3oba8 x1wc42o8 xegnrdp x47corl x10dujrv x1ejq31n x18oe1m7 x1sy0etr xstzfhl x1c9tyrk xeusxvb x1pahc9y x1ertn4p x1eaqakq x19991ni x1g2r6go xwji4o3 x1mdwju1",
                4: "x10l6tqk xwa60dl xk3oba8 x47corl x10dujrv x1ejq31n x18oe1m7 x1sy0etr xstzfhl x1c9tyrk xeusxvb x1pahc9y x1ertn4p x1eaqakq x19991ni x1g2r6go xwji4o3 x1fsd2vl x170jfvy x11lhmoz",
                2: "x10l6tqk xwa60dl xk3oba8 x1wc42o8 xegnrdp x47corl x10dujrv x1ejq31n x18oe1m7 x1sy0etr xstzfhl x1c9tyrk xeusxvb x1pahc9y x1ertn4p x1eaqakq x19991ni x1g2r6go xwji4o3 x1mdwju1 xg01cxk",
                6: "x10l6tqk xwa60dl xk3oba8 x47corl x10dujrv x1ejq31n x18oe1m7 x1sy0etr xstzfhl x1c9tyrk xeusxvb x1pahc9y x1ertn4p x1eaqakq x19991ni x1g2r6go xwji4o3 x1fsd2vl x170jfvy x11lhmoz xg01cxk",
                1: "x10l6tqk xwa60dl xk3oba8 x1wc42o8 xegnrdp x47corl x10dujrv x1ejq31n x18oe1m7 x1sy0etr xstzfhl x1c9tyrk xeusxvb x1pahc9y x1ertn4p x19991ni x1g2r6go xwji4o3 x1mdwju1 xjuyjm8",
                5: "x10l6tqk xwa60dl xk3oba8 x47corl x10dujrv x1ejq31n x18oe1m7 x1sy0etr xstzfhl x1c9tyrk xeusxvb x1pahc9y x1ertn4p x19991ni x1g2r6go xwji4o3 x1fsd2vl x170jfvy x11lhmoz xjuyjm8",
                3: "x10l6tqk xwa60dl xk3oba8 x1wc42o8 xegnrdp x47corl x10dujrv x1ejq31n x18oe1m7 x1sy0etr xstzfhl x1c9tyrk xeusxvb x1pahc9y x1ertn4p x19991ni x1g2r6go xwji4o3 x1mdwju1 xg01cxk xjuyjm8",
                7: "x10l6tqk xwa60dl xk3oba8 x47corl x10dujrv x1ejq31n x18oe1m7 x1sy0etr xstzfhl x1c9tyrk xeusxvb x1pahc9y x1ertn4p x19991ni x1g2r6go xwji4o3 x1fsd2vl x170jfvy x11lhmoz xg01cxk xjuyjm8"
            })[!!isFullscreenMode << 2 | (!isMouseOverProgressBar && !L) << 1 | !!L << 0];
            t[51] = L;
            t[52] = isFullscreenMode;
            t[53] = isMouseOverProgressBar;
            t[54] = ee;
        } else {
            ee = t[54];
        }
        let te;
        if (t[55] !== ee || t[56] !== F) {
            te = <div data-testid="progressbar-thumb" className={ee} style={F}/>;
            t[55] = ee;
            t[56] = F;
            t[57] = te;
        } else {
            te = t[57];
        }
        let ne;
        if (t[58] !== duration || t[59] !== isFullscreenMode || t[60] !== mouseOverProgressRatio) {
            ne = <V3Component mouseOverProgressRatio={mouseOverProgressRatio} duration={duration} isFullscreenMode={isFullscreenMode}/>;
            t[58] = duration;
            t[59] = isFullscreenMode;
            t[60] = mouseOverProgressRatio;
            t[61] = ne;
        } else {
            ne = t[61];
        }
        let re;
        if (t[62] !== j || t[63] !== Q || t[64] !== Y || t[65] !== Z || t[66] !== te || t[67] !== ne) {
            re = <div {...babelHelpers.extends({
                "data-testid": "progressbar"
            }, j, {
                children: [
                    Q,
                    Y,
                    Z,
                    te,
                    ne
                ]
            })}/>;
            t[62] = j;
            t[63] = Q;
            t[64] = Y;
            t[65] = Z;
            t[66] = te;
            t[67] = ne;
            t[68] = re;
        } else {
            re = t[68];
        }
        let oe;
        if (t[69] !== onMouseEnter || t[70] !== z || t[71] !== re || t[72] !== O || t[73] !== B || t[74] !== onMouseMove) {
            oe = <div {...babelHelpers.extends({}, O, {
                onClick: o("WAWebStopEvent").stopPropagation,
                onMouseDown: o("WAWebStopEvent").stopPropagation,
                onMouseEnter,
                onMouseLeave: B,
                onMouseMove,
                children: [
                    z,
                    re
                ]
            })}/>;
            t[69] = onMouseEnter;
            t[70] = z;
            t[71] = re;
            t[72] = O;
            t[73] = B;
            t[74] = onMouseMove;
            t[75] = oe;
        } else {
            oe = t[75];
        }
        return oe;
    }
    const L = 0.05;
    function E(e) {
        const t = o("react-compiler-runtime").c(54);
        const { defaultValume, disableAudioControls, isFullscreenMode, isVolumeControlActive, muted, newPiPStyle, onBlur, onFocus, onMouseEnter, onMouseLeave, onMute, onUnmute, onVolumeValueChange, volume } = e;
        let v;
        if (t[0] !== onVolumeValueChange || t[1] !== volume) {
            v = function(t) {
                const t_key = t.key;
                if (t_key === "ArrowRight" || t_key === "ArrowUp") {
                    t.preventDefault();
                    t.stopPropagation();
                    onVolumeValueChange(Math.min(1, volume + L));
                } else if (t_key === "ArrowLeft" || t_key === "ArrowDown") {
                    t.preventDefault();
                    t.stopPropagation();
                    onVolumeValueChange(Math.max(0, volume - L));
                }
            };
            t[0] = onVolumeValueChange;
            t[1] = volume;
            t[2] = v;
        } else {
            v = t[2];
        }
        const S = v;
        const R = disableAudioControls === true || muted || volume === 0;
        let E;
        e: {
            if (disableAudioControls === true) {
                let k;
                if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
                    k = s._("Audio is disabled");
                    t[3] = k;
                } else {
                    k = t[3];
                }
                E = k;
                break e;
            }
            if (R) {
                let I;
                if (t[4] === Symbol.for("react.memo_cache_sentinel")) {
                    I = s._("Unmute");
                    t[4] = I;
                } else {
                    I = t[4];
                }
                E = I;
                break e;
            }
            let T;
            if (t[5] === Symbol.for("react.memo_cache_sentinel")) {
                T = s._("Mute");
                t[5] = T;
            } else {
                T = t[5];
            }
            E = T;
        }
        const D = E;
        const x = r(R ? "WDSIconIcNoSound.react" : "WDSIconIcVolumeUp.react");
        const $ = R ? "video-volume-muted" : "video-volume";
        let P;
        if (t[6] !== defaultValume || t[7] !== R || t[8] !== onMute || t[9] !== onUnmute || t[10] !== onVolumeValueChange) {
            P = function() {
                if (R) {
                    onUnmute();
                } else {
                    onMute();
                }
                if (defaultValume === 0) {
                    onVolumeValueChange(y);
                }
            };
            t[6] = defaultValume;
            t[7] = R;
            t[8] = onMute;
            t[9] = onUnmute;
            t[10] = onVolumeValueChange;
            t[11] = P;
        } else {
            P = t[11];
        }
        let N;
        if (t[12] !== x || t[13] !== $ || t[14] !== P || t[15] !== D) {
            const Component = r("WDSButton.react");
            N = <Component variant="borderless" type="media" size="medium" aria-label={D} Icon={x} testid={$} onPress={P}/>;
            t[12] = x;
            t[13] = $;
            t[14] = P;
            t[15] = D;
            t[16] = N;
        } else {
            N = t[16];
        }
        const M = N;
        const w = `${volume * 100}%`;
        let A;
        if (t[17] !== w) {
            A = {
                width: w
            };
            t[17] = w;
            t[18] = A;
        } else {
            A = t[18];
        }
        const F = A;
        const O = isVolumeControlActive && !muted && disableAudioControls !== true;
        let B;
        if (t[19] !== isFullscreenMode || t[20] !== O) {
            B = ({
                0: {
                    className: "x10l6tqk x13vifvy xbudbmw x1wvqwft xni59qk xx3o462 x47corl xg01cxk x19991ni x1g2r6go xwji4o3 xclszuv x1nf803f"
                },
                2: {
                    className: "x10l6tqk x13vifvy xbudbmw x1wvqwft x47corl xg01cxk x19991ni x1g2r6go xwji4o3 xclszuv x1nf803f xj35x94 xlup9mm"
                },
                1: {
                    className: "x10l6tqk x13vifvy xbudbmw x1wvqwft xni59qk xx3o462 x19991ni x1g2r6go xwji4o3 xclszuv x1nf803f x71s49j x1hc1fzr"
                },
                3: {
                    className: "x10l6tqk x13vifvy xbudbmw x1wvqwft x19991ni x1g2r6go xwji4o3 xclszuv x1nf803f xj35x94 xlup9mm x71s49j x1hc1fzr"
                }
            })[!!isFullscreenMode << 1 | !!O << 0];
            t[19] = isFullscreenMode;
            t[20] = O;
            t[21] = B;
        } else {
            B = t[21];
        }
        let W;
        if (t[22] !== isFullscreenMode || t[23] !== volume) {
            W = ({
                0: "x10l6tqk x1atx4j1 x1o0tod xhtitgo xuoj239 x47corl x10dujrv x10do2q5 xxrw8yf",
                4: "x10l6tqk x1atx4j1 x1o0tod xhtitgo x47corl x10dujrv x10do2q5 xxrw8yf xqu0tyb",
                2: "x10l6tqk x1atx4j1 x1o0tod xhtitgo xuoj239 x47corl x10dujrv x10do2q5 xxrw8yf xvijh9v",
                6: "x10l6tqk x1atx4j1 x1o0tod xhtitgo x47corl x10dujrv x10do2q5 xxrw8yf xqu0tyb xvijh9v",
                1: "x10l6tqk x1atx4j1 x1o0tod xhtitgo xuoj239 x47corl x10dujrv x10do2q5 xxrw8yf x3hi7kx x159edpp",
                5: "x10l6tqk x1atx4j1 x1o0tod xhtitgo x47corl x10dujrv x10do2q5 xxrw8yf xqu0tyb x3hi7kx x159edpp",
                3: "x10l6tqk x1atx4j1 x1o0tod xhtitgo xuoj239 x47corl x10dujrv x10do2q5 xxrw8yf xvijh9v x3hi7kx x159edpp",
                7: "x10l6tqk x1atx4j1 x1o0tod xhtitgo x47corl x10dujrv x10do2q5 xxrw8yf xqu0tyb xvijh9v x3hi7kx x159edpp"
            })[!!isFullscreenMode << 2 | !!o("WAWebUA").UA.isGecko << 1 | (volume === 1) << 0];
            t[22] = isFullscreenMode;
            t[23] = volume;
            t[24] = W;
        } else {
            W = t[24];
        }
        let q;
        if (t[25] !== W || t[26] !== F) {
            q = <div className={W} style={F}/>;
            t[25] = W;
            t[26] = F;
            t[27] = q;
        } else {
            q = t[27];
        }
        let U;
        if (t[28] === Symbol.for("react.memo_cache_sentinel")) {
            U = s._("Volume");
            t[28] = U;
        } else {
            U = t[28];
        }
        let V;
        if (t[29] !== isFullscreenMode) {
            V = ({
                0: {
                    className: "x10l6tqk xhtitgo xh8yej3 x5yr21d x1ypdohk xjbqb8w x1ejq31n x18oe1m7 x1sy0etr xstzfhl x1t137rt xjyslct x1uixova x1xrmsu8 x8jsd5b xddr6xj xtwd773 x15nk6ox xwl8qgt xs7b4ar xo79n2y x1h2s55w x1odtki2 x1e9oud6 x9f6dpf xntm52p xvhtw7c x1th4nss x1rizj1e x1y66t81 xpx3ic3 xft441d xibs45w x18rvqgn x1bvlj5z x1ya0v5x xj5bd2a xpkqczj x3aytur x23m8i7 x1brj8f7 x1i2clhx x1z0ci6j xo7t0z3 xmdoda4 x10mf80e x1w13fbe xx79xfj xwuopey x3xuhg7 x1myhkec xkl7mu5 x18v2h9o x13fi9fm"
                },
                1: {
                    className: "x10l6tqk xhtitgo xh8yej3 x5yr21d x1ypdohk xjbqb8w x1ejq31n x18oe1m7 x1sy0etr xstzfhl x1t137rt xjyslct x1xrmsu8 x8jsd5b xddr6xj xtwd773 x15nk6ox xwl8qgt x1h2s55w x1odtki2 x1e9oud6 x9f6dpf xntm52p xvhtw7c x1th4nss x1rizj1e x1y66t81 xpx3ic3 xft441d xibs45w x1bvlj5z x1ya0v5x xj5bd2a xpkqczj x3aytur x23m8i7 x1z0ci6j xo7t0z3 xmdoda4 x10mf80e x1w13fbe xx79xfj xwuopey x3xuhg7 x1myhkec xkl7mu5 x18v2h9o x13fi9fm x13m05e8 x1eir19f xrewrwu xagyqcp xs156m3 x17j9moy"
                }
            })[!!isFullscreenMode << 0];
            t[29] = isFullscreenMode;
            t[30] = V;
        } else {
            V = t[30];
        }
        let H;
        if (t[31] !== onVolumeValueChange) {
            H = function(t) {
                onVolumeValueChange(parseFloat(t.target.value));
            };
            t[31] = onVolumeValueChange;
            t[32] = H;
        } else {
            H = t[32];
        }
        let G;
        if (t[33] !== V || t[34] !== H || t[35] !== volume) {
            G = <input {...babelHelpers.extends({
                tabIndex: 0,
                "aria-label": U
            }, V, {
                dir: "ltr",
                onChange: H,
                type: "range",
                min: "0",
                max: 1,
                step: "any",
                value: volume
            })}/>;
            t[33] = V;
            t[34] = H;
            t[35] = volume;
            t[36] = G;
        } else {
            G = t[36];
        }
        let z;
        if (t[37] !== O || t[38] !== q || t[39] !== G || t[40] !== B) {
            z = <div {...babelHelpers.extends({
                "data-testid": "volume-bar-container",
                "data-visible": O
            }, B, {
                children: [
                    q,
                    G
                ]
            })}/>;
            t[37] = O;
            t[38] = q;
            t[39] = G;
            t[40] = B;
            t[41] = z;
        } else {
            z = t[41];
        }
        const j = z;
        let K;
        if (t[42] !== isFullscreenMode || t[43] !== newPiPStyle) {
            K = ({
                0: {
                    className: "x1n2onr6 xamitd3 x1h3rv7z"
                },
                1: {
                    className: "x1n2onr6 xamitd3 x1h3rv7z x3aesyq"
                }
            })[!!(newPiPStyle && isFullscreenMode) << 0];
            t[42] = isFullscreenMode;
            t[43] = newPiPStyle;
            t[44] = K;
        } else {
            K = t[44];
        }
        let Q;
        if (t[45] !== S || t[46] !== onBlur || t[47] !== onFocus || t[48] !== onMouseEnter || t[49] !== onMouseLeave || t[50] !== K || t[51] !== j || t[52] !== M) {
            Q = <div {...babelHelpers.extends({}, K, {
                onClick: o("WAWebStopEvent").stopPropagation,
                onMouseEnter,
                onMouseLeave,
                onMouseDown: o("WAWebStopEvent").stopPropagation,
                onFocus,
                onBlur,
                onKeyDown: S,
                children: [
                    M,
                    j
                ]
            })}/>;
            t[45] = S;
            t[46] = onBlur;
            t[47] = onFocus;
            t[48] = onMouseEnter;
            t[49] = onMouseLeave;
            t[50] = K;
            t[51] = j;
            t[52] = M;
            t[53] = Q;
        } else {
            Q = t[53];
        }
        return Q;
    }
    function useK(e, t) {
        const n = o("react-compiler-runtime").c(2);
        const r = t === undefined ? false : t;
        const a = useState(e);
        const i = a[0];
        const l = a[1];
        const s = useState(e);
        const u = s[0];
        const c = s[1];
        if (u !== e && !r) {
            l(e);
            c(e);
        }
        let d;
        if (n[0] !== i) {
            d = [
                i,
                l
            ];
            n[0] = i;
            n[1] = d;
        } else {
            d = n[1];
        }
        return d;
    }
    function IComponent(t) {
        const n = o("react-compiler-runtime").c(116);
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
        const { className, ctwaSourceUrl, duration, isFullscreenMode, isVideoPlaying, newPiPStyle, onClose, onFullscreenToggle, onMutedValueChange, onPause, onPlay, onProgressChange, onVolumeValueChange, playbackRate, onPlaybackRateChange } = l;
        const P = newPiPStyle === undefined ? false : newPiPStyle;
        const N = playbackRate === undefined ? o("WAWebVideoPlaybackSpeed").DEFAULT_VIDEO_PLAYBACK_RATE : playbackRate;
        const MRef = useRef(null);
        const wRef = useRef(null);
        const A = useState(false);
        const F = A[0];
        const O = A[1];
        const B = useState(false);
        const W = B[0];
        const q = B[1];
        const U = useState(false);
        const V = U[0];
        const H = U[1];
        const G = useState(false);
        const isMouseOverProgressBar = G[0];
        const j = G[1];
        const K = useState(undefined);
        const mouseOverProgressRatio = K[0];
        const onMouseOverProgressRatioChange = K[1];
        const Y = useK(a.muted);
        const J = Y[0];
        const Z = Y[1];
        const ee = useK(a.volume);
        const te = ee[0];
        const ne = ee[1];
        const re = useK(a.bufferedTime);
        const oe = re[0];
        const ae = re[1];
        const ie = useK(a.progress, V);
        const le = ie[0];
        const se = ie[1];
        let ue;
        let ce;
        if (n[3] === Symbol.for("react.memo_cache_sentinel")) {
            ue = function() {
                wRef.current?.focus();
            };
            ce = [];
            n[3] = ue;
            n[4] = ce;
        } else {
            ue = n[3];
            ce = n[4];
        }
        useEffect(ue, ce);
        let de;
        if (n[5] !== ctwaSourceUrl) {
            de = function(t) {
                t.preventDefault();
                t.stopPropagation();
                if (ctwaSourceUrl != null) {
                    o("WAWebExternalLink.react").openExternalLink(ctwaSourceUrl);
                }
            };
            n[5] = ctwaSourceUrl;
            n[6] = de;
        } else {
            de = n[6];
        }
        const me = de;
        let pe;
        if (n[7] !== onMutedValueChange || n[8] !== Z) {
            pe = function() {
                onMutedValueChange(false);
                Z(false);
            };
            n[7] = onMutedValueChange;
            n[8] = Z;
            n[9] = pe;
        } else {
            pe = n[9];
        }
        const onUnmute = pe;
        let fe;
        if (n[10] !== onMutedValueChange || n[11] !== Z) {
            fe = function() {
                onMutedValueChange(true);
                Z(true);
            };
            n[10] = onMutedValueChange;
            n[11] = Z;
            n[12] = fe;
        } else {
            fe = n[12];
        }
        const ge = fe;
        let he;
        if (n[13] === Symbol.for("react.memo_cache_sentinel")) {
            he = function(t) {
                j(true);
            };
            n[13] = he;
        } else {
            he = n[13];
        }
        const ye = he;
        let Ce;
        if (n[14] === Symbol.for("react.memo_cache_sentinel")) {
            Ce = function(t) {
                j(false);
            };
            n[14] = Ce;
        } else {
            Ce = n[14];
        }
        const be = Ce;
        let ve;
        if (n[15] === Symbol.for("react.memo_cache_sentinel")) {
            ve = function(t) {
                O(true);
            };
            n[15] = ve;
        } else {
            ve = n[15];
        }
        const Se = ve;
        let Re;
        if (n[16] === Symbol.for("react.memo_cache_sentinel")) {
            Re = function(t) {
                O(false);
            };
            n[16] = Re;
        } else {
            Re = n[16];
        }
        const Le = Re;
        let Ee;
        if (n[17] === Symbol.for("react.memo_cache_sentinel")) {
            Ee = function() {
                q(true);
            };
            n[17] = Ee;
        } else {
            Ee = n[17];
        }
        const ke = Ee;
        let Ie;
        if (n[18] === Symbol.for("react.memo_cache_sentinel")) {
            Ie = function(t) {
                if (t.relatedTarget instanceof Node && !t.currentTarget.contains(t.relatedTarget) || t.relatedTarget == null) {
                    q(false);
                }
            };
            n[18] = Ie;
        } else {
            Ie = n[18];
        }
        const Te = Ie;
        let De;
        if (n[19] !== onVolumeValueChange || n[20] !== ne) {
            De = function(t) {
                ne(t);
                onVolumeValueChange(t);
            };
            n[19] = onVolumeValueChange;
            n[20] = ne;
            n[21] = De;
        } else {
            De = n[21];
        }
        const xe = De;
        let $e;
        if (n[22] !== isVideoPlaying || n[23] !== onPause) {
            $e = function(t) {
                H(true);
                MRef.current = isVideoPlaying;
                if (isVideoPlaying) {
                    onPause();
                }
            };
            n[22] = isVideoPlaying;
            n[23] = onPause;
            n[24] = $e;
        } else {
            $e = n[24];
        }
        const Pe = $e;
        let Ne;
        if (n[25] !== onPlay) {
            Ne = function(t) {
                H(false);
                if (MRef.current === true) {
                    onPlay();
                }
                MRef.current = null;
            };
            n[25] = onPlay;
            n[26] = Ne;
        } else {
            Ne = n[26];
        }
        const onMouseUp = Ne;
        let we;
        if (n[27] !== oe || n[28] !== duration || n[29] !== onProgressChange || n[30] !== ae || n[31] !== se) {
            we = function(t) {
                onProgressChange(t);
                const e = Math.abs(oe - duration) < 0.1 ? oe : 0;
                se(t);
                ae(e);
            };
            n[27] = oe;
            n[28] = duration;
            n[29] = onProgressChange;
            n[30] = ae;
            n[31] = se;
            n[32] = we;
        } else {
            we = n[32];
        }
        const onSeekTo = we;
        let Fe;
        if (n[33] !== onSeekTo) {
            Fe = function(t) {
                onSeekTo(parseFloat(t.target.value));
            };
            n[33] = onSeekTo;
            n[34] = Fe;
        } else {
            Fe = n[34];
        }
        const Oe = Fe;
        const isVolumeControlActive = F || W;
        const We = isVolumeControlActive && !J;
        let qe;
        if (n[35] !== isFullscreenMode || n[36] !== P || n[37] !== le) {
            qe = isFullscreenMode ? <div {...babelHelpers.extends({}, {
                0: {
                    className: "x11uqc5h xamitd3 xnfjc3l x1c3i2sq xdod15v x1m0knhv x2b8uid x9ek82g x13k8ehh"
                },
                1: {
                    className: "x11uqc5h xamitd3 xnfjc3l x1c3i2sq xdod15v x1m0knhv x2b8uid x9ek82g x1lziwak"
                }
            }[!!P << 0], {
                onClick: o("WAWebStopEvent").stopPropagation,
                children: o("WAWebClock").Clock.durationStr(le)
            })}/> : null;
            n[35] = isFullscreenMode;
            n[36] = P;
            n[37] = le;
            n[38] = qe;
        } else {
            qe = n[38];
        }
        const Ue = qe;
        let Ve;
        if (n[39] !== duration || n[40] !== isFullscreenMode || n[41] !== P) {
            Ve = isFullscreenMode ? <div {...babelHelpers.extends({}, {
                0: {
                    className: "x11uqc5h xamitd3 xnfjc3l x1c3i2sq xdod15v x1m0knhv x2b8uid xo1ph6p x1sa5p1d"
                },
                1: {
                    className: "x11uqc5h xamitd3 xnfjc3l x1c3i2sq xdod15v x1m0knhv x2b8uid xo1ph6p x3aesyq"
                }
            }[!!P << 0], {
                onClick: o("WAWebStopEvent").stopPropagation,
                children: o("WAWebClock").Clock.durationStr(duration)
            })}/> : null;
            n[39] = duration;
            n[40] = isFullscreenMode;
            n[41] = P;
            n[42] = Ve;
        } else {
            Ve = n[42];
        }
        const He = Ve;
        const isVideoFinished = P && Math.ceil(le) >= duration;
        let ze;
        if (n[43] !== isVideoFinished || n[44] !== isVideoPlaying || n[45] !== onPause || n[46] !== onPlay) {
            ze = b({
                isVideoFinished,
                isVideoPlaying,
                onPause,
                onPlay
            });
            n[43] = isVideoFinished;
            n[44] = isVideoPlaying;
            n[45] = onPause;
            n[46] = onPlay;
            n[47] = ze;
        } else {
            ze = n[47];
        }
        const je = ze;
        let Ke;
        if (n[48] !== className || n[49] !== isFullscreenMode || n[50] !== P) {
            Ke = o("WAWebClassnames").classnamesConvertMeToStylexPlease(className, {
                0: "",
                8: "x10l6tqk xtijo5x x1ey2m1c x1o0tod x78zum5 x1q0g3np x96k8nx x2vl965 xdvlbce x7coems x1f7m26b",
                4: "x134lwj9 xgws4yx x1i2zvha xzm8p2n",
                12: "x10l6tqk xtijo5x x1ey2m1c x1o0tod x78zum5 x1q0g3np x1f7m26b x134lwj9 xgws4yx x1i2zvha xzm8p2n",
                2: "x1n2onr6 xexx8yu xyri2b x18d9i69 x1c1uobl",
                10: "xtijo5x x1ey2m1c x1o0tod x78zum5 x1q0g3np x1f7m26b x1n2onr6 xexx8yu xyri2b x18d9i69 x1c1uobl",
                6: "x1n2onr6 xexx8yu xyri2b x18d9i69 x1c1uobl",
                14: "xtijo5x x1ey2m1c x1o0tod x78zum5 x1q0g3np x1f7m26b x1n2onr6 xexx8yu xyri2b x18d9i69 x1c1uobl",
                1: "x10l6tqk x1iacjwo xbudbmw x12fk1ku xdd8jsf xexx8yu x5zjp28 x18d9i69 x162tt16 x1wtyksp x1obq294 x5a5i1n xde0f50 x15x8krk xuuh30 xwhdwdg",
                9: "xtijo5x x78zum5 x1q0g3np x1f7m26b x10l6tqk x1iacjwo xbudbmw x12fk1ku xdd8jsf xexx8yu x5zjp28 x18d9i69 x162tt16 x1wtyksp x1obq294 x5a5i1n xde0f50 x15x8krk xuuh30 xwhdwdg",
                5: "x10l6tqk x1iacjwo xbudbmw x12fk1ku xdd8jsf xexx8yu x5zjp28 x18d9i69 x162tt16 x1wtyksp x1obq294 x5a5i1n xde0f50 x15x8krk xuuh30 xwhdwdg",
                13: "xtijo5x x78zum5 x1q0g3np x1f7m26b x10l6tqk x1iacjwo xbudbmw x12fk1ku xdd8jsf xexx8yu x5zjp28 x18d9i69 x162tt16 x1wtyksp x1obq294 x5a5i1n xde0f50 x15x8krk xuuh30 xwhdwdg",
                3: "x10l6tqk x1iacjwo xbudbmw x12fk1ku xdd8jsf xexx8yu x5zjp28 x18d9i69 x162tt16 x1wtyksp x1obq294 x5a5i1n xde0f50 x15x8krk xuuh30 xwhdwdg",
                11: "xtijo5x x78zum5 x1q0g3np x1f7m26b x10l6tqk x1iacjwo xbudbmw x12fk1ku xdd8jsf xexx8yu x5zjp28 x18d9i69 x162tt16 x1wtyksp x1obq294 x5a5i1n xde0f50 x15x8krk xuuh30 xwhdwdg",
                7: "x10l6tqk x1iacjwo xbudbmw x12fk1ku xdd8jsf xexx8yu x5zjp28 x18d9i69 x162tt16 x1wtyksp x1obq294 x5a5i1n xde0f50 x15x8krk xuuh30 xwhdwdg",
                15: "xtijo5x x78zum5 x1q0g3np x1f7m26b x10l6tqk x1iacjwo xbudbmw x12fk1ku xdd8jsf xexx8yu x5zjp28 x18d9i69 x162tt16 x1wtyksp x1obq294 x5a5i1n xde0f50 x15x8krk xuuh30 xwhdwdg"
            }[(className == null) << 3 | !!(className == null && isFullscreenMode) << 2 | !!(className == null && P) << 1 | !!(P && isFullscreenMode) << 0]);
            n[48] = className;
            n[49] = isFullscreenMode;
            n[50] = P;
            n[51] = Ke;
        } else {
            Ke = n[51];
        }
        let Qe;
        if (n[52] !== isFullscreenMode || n[53] !== P) {
            Qe = ({
                0: {
                    className: "xamitd3 x1g77sc7 x1f7m26b"
                },
                2: {
                    className: "xamitd3 x1g77sc7 x1f7m26b x1uulv1t x1pe450p"
                },
                1: {
                    className: "xamitd3 x1g77sc7 x1f7m26b x3aesyq"
                },
                3: {
                    className: "xamitd3 x1g77sc7 x1f7m26b x1uulv1t x1pe450p x3aesyq"
                }
            })[!!isFullscreenMode << 1 | !!(P && isFullscreenMode) << 0];
            n[52] = isFullscreenMode;
            n[53] = P;
            n[54] = Qe;
        } else {
            Qe = n[54];
        }
        let Xe;
        if (n[55] !== je) {
            Xe = function() {
                return je.onClick();
            };
            n[55] = je;
            n[56] = Xe;
        } else {
            Xe = n[56];
        }
        let Ye;
        if (n[57] !== je.Icon || n[58] !== je.ariaLabel || n[59] !== je.testid || n[60] !== Xe) {
            const Component = r("WDSButton.react");
            Ye = <Component ref={wRef} variant="borderless" type="media" size="medium" aria-label={je.ariaLabel} Icon={je.Icon} testid={je.testid} onPress={Xe}/>;
            n[57] = je.Icon;
            n[58] = je.ariaLabel;
            n[59] = je.testid;
            n[60] = Xe;
            n[61] = Ye;
        } else {
            Ye = n[61];
        }
        let Je;
        if (n[62] !== Qe || n[63] !== Ye) {
            Je = <div {...babelHelpers.extends({}, Qe, {
                onClick: o("WAWebStopEvent").stopPropagation,
                onMouseDown: o("WAWebStopEvent").stopPropagation,
                onMouseUp: o("WAWebStopEvent").stopPropagation,
                children: Ye
            })}/>;
            n[62] = Qe;
            n[63] = Ye;
            n[64] = Je;
        } else {
            Je = n[64];
        }
        let Ze;
        if (n[65] !== oe || n[66] !== duration || n[67] !== Oe || n[68] !== Pe || n[69] !== onMouseUp || n[70] !== isFullscreenMode || n[71] !== isMouseOverProgressBar || n[72] !== mouseOverProgressRatio || n[73] !== a.progress || n[74] !== onSeekTo) {
            Ze = <R progress={a.progress} duration={duration} bufferedTime={oe} isFullscreenMode={isFullscreenMode} isMouseOverProgressBar={isMouseOverProgressBar} mouseOverProgressRatio={mouseOverProgressRatio} onChange={Oe} onSeekTo={onSeekTo} onMouseDown={Pe} onMouseUp={onMouseUp} onMouseEnter={ye} onMouseLeave={be} onMouseOverProgressRatioChange={onMouseOverProgressRatioChange}/>;
            n[65] = oe;
            n[66] = duration;
            n[67] = Oe;
            n[68] = Pe;
            n[69] = onMouseUp;
            n[70] = isFullscreenMode;
            n[71] = isMouseOverProgressBar;
            n[72] = mouseOverProgressRatio;
            n[73] = a.progress;
            n[74] = onSeekTo;
            n[75] = Ze;
        } else {
            Ze = n[75];
        }
        let et;
        if (n[76] !== onPlaybackRateChange || n[77] !== N) {
            const Component = r("WAWebVideoPlaybackSpeedButton.react");
            et = onPlaybackRateChange != null ? <div className="xamitd3 x2fvf9 x182iqb8" onClick={o("WAWebStopEvent").stopPropagation} onMouseDown={o("WAWebStopEvent").stopPropagation}><Component playbackRate={N} onClick={onPlaybackRateChange}/></div> : null;
            n[76] = onPlaybackRateChange;
            n[77] = N;
            n[78] = et;
        } else {
            et = n[78];
        }
        let tt;
        if (n[79] !== ge || n[80] !== onUnmute || n[81] !== xe || n[82] !== isFullscreenMode || n[83] !== isVolumeControlActive || n[84] !== J || n[85] !== P || n[86] !== a.disableAudioControls || n[87] !== a.volume || n[88] !== te) {
            tt = <E muted={J} volume={te} defaultValume={a.volume} onUnmute={onUnmute} onMute={ge} onVolumeValueChange={xe} isVolumeControlActive={isVolumeControlActive} isFullscreenMode={isFullscreenMode} newPiPStyle={P} onFocus={ke} onBlur={Te} onMouseEnter={Se} onMouseLeave={Le} disableAudioControls={a.disableAudioControls}/>;
            n[79] = ge;
            n[80] = onUnmute;
            n[81] = xe;
            n[82] = isFullscreenMode;
            n[83] = isVolumeControlActive;
            n[84] = J;
            n[85] = P;
            n[86] = a.disableAudioControls;
            n[87] = a.volume;
            n[88] = te;
            n[89] = tt;
        } else {
            tt = n[89];
        }
        let nt;
        if (n[90] !== isFullscreenMode || n[91] !== P || n[92] !== onFullscreenToggle) {
            const Component = r("WAWebPipFullscreenToggleButton.react");
            nt = onFullscreenToggle != null ? <div {...babelHelpers.extends({}, {
                0: {
                    className: "xamitd3 x1hrcb2b x13fj5qh"
                },
                1: {
                    className: "xamitd3 x1hrcb2b x13fj5qh x3aesyq"
                }
            }[!!(P && isFullscreenMode) << 0], {
                children: <Component isFullscreenMode={isFullscreenMode} onClick={onFullscreenToggle} isStatic/>
            })}/> : null;
            n[90] = isFullscreenMode;
            n[91] = P;
            n[92] = onFullscreenToggle;
            n[93] = nt;
        } else {
            nt = n[93];
        }
        let rt;
        if (n[94] !== isFullscreenMode || n[95] !== P || n[96] !== onClose) {
            const Component = r("WAWebPipCloseButton.react");
            rt = onClose != null ? <div {...babelHelpers.extends({}, {
                0: {
                    className: "xamitd3 x1esxh7v x13fj5qh"
                },
                1: {
                    className: "xamitd3 x1esxh7v x13fj5qh x3aesyq"
                }
            }[!!(P && isFullscreenMode) << 0], {
                children: <Component isFullscreenMode={isFullscreenMode} onClick={onClose} isStatic/>
            })}/> : null;
            n[94] = isFullscreenMode;
            n[95] = P;
            n[96] = onClose;
            n[97] = rt;
        } else {
            rt = n[97];
        }
        let ot;
        if (n[98] !== ctwaSourceUrl || n[99] !== me || n[100] !== isFullscreenMode || n[101] !== We || n[102] !== P) {
            const Component = r("WAWebPipCtwaSourceButton.react");
            ot = !We && ctwaSourceUrl != null ? <Component isFullscreenMode={isFullscreenMode} onClick={me} isInstagram={C(ctwaSourceUrl) === o("WAWebPipConst").HOSTNAME.INSTAGRAM} iconSize={P ? 24 : undefined}/> : null;
            n[98] = ctwaSourceUrl;
            n[99] = me;
            n[100] = isFullscreenMode;
            n[101] = We;
            n[102] = P;
            n[103] = ot;
        } else {
            ot = n[103];
        }
        let at;
        if (n[104] !== Ue || n[105] !== He || n[106] !== i || n[107] !== Ke || n[108] !== Je || n[109] !== Ze || n[110] !== et || n[111] !== tt || n[112] !== nt || n[113] !== rt || n[114] !== ot) {
            at = <div ref={i} className={Ke}>{Je}{Ze}{et}{tt}{Ue}{He}{nt}{rt}{ot}</div>;
            n[104] = Ue;
            n[105] = He;
            n[106] = i;
            n[107] = Ke;
            n[108] = Je;
            n[109] = Ze;
            n[110] = et;
            n[111] = tt;
            n[112] = nt;
            n[113] = rt;
            n[114] = ot;
            n[115] = at;
        } else {
            at = n[115];
        }
        return at;
    }
    l.default = IComponent;
}, 226);