__d("WAWebImagineVideoGenerating.react", [
    "WATimeUtils",
    "WAWebMediaGenerationFailedContent.react",
    "WAWebMediaHubLoadingSkeletons.react",
    "WAWebMessageCropping",
    "WAWebMsgGetters",
    "WAWebProgressRing.react",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebInterval",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = s;
    const { useEffect, useState } = c;
    const p = o("WAWebMessageCropping").IMAGINE_UR_WIDTH - 6;
    const _ = 9 / 16;
    const f = o("WATimeUtils").MINUTE_SECONDS * 2;
    const g = 60;
    const h = 99;
    const y = 1000;
    const C = 40;
    const b = 3;
    const v = {
        container: {
            borderStartStartRadius: "x1i282gy",
            borderStartEndRadius: "xx9ypkp",
            borderEndEndRadius: "xd15eu0",
            borderEndStartRadius: "x11ecxm0",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            position: "x1n2onr6",
            width: "xh8yej3",
            $$css: true
        },
        containerHeight: function(t) {
            return [
                {
                    height: t != null ? "x16ye13r" : t,
                    $$css: true
                },
                {
                    "--x-height": ((e)=>{
                        if (typeof e === "number") {
                            return `${e}px`;
                        }
                        return e ?? undefined;
                    })(t)
                }
            ];
        }
    };
    function S(t) {
        const n = o("react-compiler-runtime").c(11);
        const t_msgId = t.msgId;
        let i;
        if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
            i = [
                o("WAWebMsgGetters").getT
            ];
            n[0] = i;
        } else {
            i = n[0];
        }
        const l = o("useWAWebMsgValues").useMsgValues(t_msgId, i);
        const s = l[0];
        const c = useState(R);
        const S = c[0];
        const L = c[1];
        const E = Math.max(0, S - s);
        const k = E >= f;
        const percentage = Math.min(h, E / g * 100);
        let T;
        if (n[1] === Symbol.for("react.memo_cache_sentinel")) {
            T = function() {
                return L(o("WATimeUtils").unixTime());
            };
            n[1] = T;
        } else {
            T = n[1];
        }
        let D;
        if (n[2] === Symbol.for("react.memo_cache_sentinel")) {
            D = {
                immediate: true
            };
            n[2] = D;
        } else {
            D = n[2];
        }
        const x = r("useWAWebInterval")(T, y, D);
        const $ = x[1];
        let P;
        let N;
        if (n[3] !== $ || n[4] !== k) {
            P = function() {
                if (k) {
                    $();
                }
            };
            N = [
                k,
                $
            ];
            n[3] = $;
            n[4] = k;
            n[5] = P;
            n[6] = N;
        } else {
            P = n[5];
            N = n[6];
        }
        useEffect(P, N);
        const M = p / _;
        let w;
        if (n[7] === Symbol.for("react.memo_cache_sentinel")) {
            w = (e || (e = r("stylex"))).props(v.container, v.containerHeight(M));
            n[7] = w;
        } else {
            w = n[7];
        }
        let A;
        if (n[8] !== k || n[9] !== percentage) {
            A = <div {...babelHelpers.extends({
                "data-testid": "bot_imagine_video_generating"
            }, w, {
                children: k ? u.jsx(r("WAWebMediaGenerationFailedContent.react"), {
                    isVideo: true
                }) : <>{u.jsx(o("WAWebMediaHubLoadingSkeletons.react").WAWebMediaHubLoadingText, {
                    width: p,
                    height: M
                })}<div className="x6s0dn4 x1ey2m1c x78zum5 x1o0tod xtijo5x xl56j7k x10l6tqk x13vifvy">{u.jsx(r("WAWebProgressRing.react"), {
                    percentage,
                    size: C,
                    stroke: b,
                    textType: "Body3Emphasized",
                    labelTestid: "bot_imagine_video_progress_label"
                })}</div></>
            })}/>;
            n[8] = k;
            n[9] = percentage;
            n[10] = A;
        } else {
            A = n[10];
        }
        return A;
    }
    function R() {
        return o("WATimeUtils").unixTime();
    }
    l.default = S;
}, 98);