__d("WAWebReactionEmojiAnimated", [
    "WAWebReactionEmoji.react",
    "WAWebReactionGatingUtils",
    "WAWebVelocityAnimate",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = s;
    const { useEffect, useRef } = c;
    const p = 70;
    const _ = "xhfnc4l-B";
    const f = "xk5vrc9-B";
    const g = {
        animateReaction: {
            animationName: "xpxtiw3",
            animationDuration: "x2mfxb",
            animationTimingFunction: "x933yfc",
            animationFillMode: "x10e4vud",
            backfaceVisibility: "xlp1x4z",
            willChange: "x14wcmtf",
            $$css: true
        },
        animateReactionV2: {
            animationName: "x1nyre92",
            animationDuration: "xof6966",
            animationTimingFunction: "xu04aca",
            animationFillMode: "x10e4vud",
            backfaceVisibility: "xlp1x4z",
            willChange: "x14wcmtf",
            $$css: true
        }
    };
    function h(t) {
        const n = o("react-compiler-runtime").c(11);
        const { reaction, removeAnimation, shouldAnimate } = t;
        const sRef = useRef(null);
        let c;
        let _;
        if (n[0] !== removeAnimation) {
            c = function() {
                if (removeAnimation?.shouldRemoveAnimation === true && sRef.current != null) {
                    r("WAWebVelocityAnimate")(sRef.current, {
                        scale: [
                            0,
                            1
                        ]
                    }, {
                        duration: p,
                        easing: [
                            0.83,
                            0,
                            0.17,
                            1
                        ]
                    }).then(()=>{
                        removeAnimation.animationFinished();
                    });
                }
            };
            _ = [
                removeAnimation
            ];
            n[0] = removeAnimation;
            n[1] = c;
            n[2] = _;
        } else {
            c = n[1];
            _ = n[2];
        }
        useEffect(c, _);
        let f;
        if (n[3] !== removeAnimation?.shouldRemoveAnimation || n[4] !== shouldAnimate) {
            f = (e || (e = r("stylex"))).props(shouldAnimate && removeAnimation?.shouldRemoveAnimation !== true && (o("WAWebReactionGatingUtils").isReactionsMotionV2Enabled() ? g.animateReactionV2 : g.animateReaction));
            n[3] = removeAnimation?.shouldRemoveAnimation;
            n[4] = shouldAnimate;
            n[5] = f;
        } else {
            f = n[5];
        }
        let h;
        if (n[6] !== reaction) {
            h = u.jsx(o("WAWebReactionEmoji.react").ReactionEmoji, {
                reaction,
                scale: "bubble"
            });
            n[6] = reaction;
            n[7] = h;
        } else {
            h = n[7];
        }
        let y;
        if (n[8] !== f || n[9] !== h) {
            y = <div {...babelHelpers.extends({
                ref: sRef
            }, f, {
                children: h
            })}/>;
            n[8] = f;
            n[9] = h;
            n[10] = y;
        } else {
            y = n[10];
        }
        return y;
    }
    l.ANIMATION_REMOVE_LENGTH = p;
    l.ReactionEmojiAnimated = h;
}, 98);