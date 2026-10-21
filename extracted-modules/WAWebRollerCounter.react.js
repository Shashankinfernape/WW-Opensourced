__d("WAWebRollerCounter.react", [
    "WADeepEquals",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebL10N",
    "WAWebUseRollerCounter",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = s;
    const { memo, useEffect, useRef } = c;
    const _ = "xwqjvqw-B";
    const f = "xtjl24w-B";
    const g = "xuttrn-B";
    const h = "x8xa006-B";
    const y = {
        rollerContainer: {
            height: "xlup9mm",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            marginInlineStart: "x1wbi8v6",
            marginInlineEnd: "x1p8j9ns",
            $$css: true
        },
        counterContainer: {
            minHeight: "x1hshjfz",
            height: "xlup9mm",
            alignItems: "x6s0dn4",
            display: "x78zum5",
            $$css: true
        },
        rollerAnimation: {
            animationDuration: "x4afe7t",
            animationTimingFunction: "x933yfc",
            animationFillMode: "x10e4vud",
            backfaceVisibility: "xlp1x4z",
            $$css: true
        },
        animateFirstUp: {
            animationName: "x1ra8wus",
            $$css: true
        },
        animateSecondUp: {
            animationName: "x1wkmh82",
            $$css: true
        },
        animateFirstDown: {
            animationName: "x8so7cb",
            position: "x1n2onr6",
            top: "x9gwk0z",
            $$css: true
        },
        animateSecondDown: {
            position: "x1n2onr6",
            animationName: "x1849bfk",
            top: "x13vifvy",
            $$css: true
        }
    };
    function C(t) {
        const n = o("react-compiler-runtime").c(25);
        const { counter, rollerCounterOptions, shouldAnimate } = t;
        const s = o("WAWebUseRollerCounter").useRollerCounter(counter);
        const c = s.currentValueProp ?? 0;
        let d;
        let m;
        if (n[0] !== counter || n[1] !== c || n[2] !== rollerCounterOptions?.showOneToTwoAnimation || n[3] !== s.previousValueProp || n[4] !== shouldAnimate) {
            m = Symbol.for("react.early_return_sentinel");
            e: {
                const p = r("WAWebL10N").d(c);
                d = [];
                if (c === 1 && rollerCounterOptions != null && rollerCounterOptions.showOneToTwoAnimation) {
                    m = null;
                    break e;
                }
                let _ = 0;
                if (s.previousValueProp != null) {
                    _ = counter - s.previousValueProp;
                }
                if (s.previousValueProp != null && s.previousValueProp !== c && shouldAnimate && _ !== 0) {
                    let f = s.previousValueProp > 999 ? "999+" : s.previousValueProp;
                    let g;
                    if (n[7] !== f || n[8] !== s.previousValueProp) {
                        g = s.previousValueProp != null ? r("WAWebL10N").d(s.previousValueProp) : f;
                        n[7] = f;
                        n[8] = s.previousValueProp;
                        n[9] = g;
                    } else {
                        g = n[9];
                    }
                    f = g;
                    let h = f;
                    let C = p;
                    let v = y.animateFirstUp;
                    let animationStyle = y.animateSecondUp;
                    if (_ < 0) {
                        h = p;
                        C = f;
                        v = y.animateFirstDown;
                        animationStyle = y.animateSecondDown;
                    }
                    if (s.previousValueProp === 1 && c === 2 && rollerCounterOptions != null && rollerCounterOptions.showOneToTwoAnimation) {
                        h = " ";
                    }
                    const R = String(h);
                    let L;
                    if (n[10] !== v) {
                        L = (e || (e = r("stylex"))).props([
                            y.counterContainer,
                            y.rollerAnimation,
                            v
                        ]);
                        n[10] = v;
                        n[11] = L;
                    } else {
                        L = n[11];
                    }
                    let E;
                    if (n[12] === Symbol.for("react.memo_cache_sentinel")) {
                        E = {
                            className: "x1f6kntn x2b8uid xhslqc4"
                        };
                        n[12] = E;
                    } else {
                        E = n[12];
                    }
                    const k = <span {...babelHelpers.extends({}, E, {
                        children: r("WAWebL10N").n(h)
                    })}/>;
                    let I;
                    if (n[13] !== R || n[14] !== L || n[15] !== k) {
                        I = <div key={R} {...babelHelpers.extends({}, L, {
                            children: k
                        })}/>;
                        n[13] = R;
                        n[14] = L;
                        n[15] = k;
                        n[16] = I;
                    } else {
                        I = n[16];
                    }
                    const T = I;
                    const D = <B3Component key={String(C)} animationStyle={animationStyle} direction={_} value={C}/>;
                    d.push(T, D);
                } else {
                    const x = String(p);
                    let $;
                    let P;
                    if (n[17] === Symbol.for("react.memo_cache_sentinel")) {
                        $ = {
                            className: "x1hshjfz xlup9mm x6s0dn4 x78zum5"
                        };
                        P = {
                            className: "x1f6kntn x2b8uid xhslqc4"
                        };
                        n[17] = $;
                        n[18] = P;
                    } else {
                        $ = n[17];
                        P = n[18];
                    }
                    const N = <span {...babelHelpers.extends({}, P, {
                        children: r("WAWebL10N").n(p)
                    })}/>;
                    let M;
                    if (n[19] !== x || n[20] !== $ || n[21] !== N) {
                        M = <div key={x} {...babelHelpers.extends({}, $, {
                            children: N
                        })}/>;
                        n[19] = x;
                        n[20] = $;
                        n[21] = N;
                        n[22] = M;
                    } else {
                        M = n[22];
                    }
                    d.push(M);
                }
            }
            n[0] = counter;
            n[1] = c;
            n[2] = rollerCounterOptions?.showOneToTwoAnimation;
            n[3] = s.previousValueProp;
            n[4] = shouldAnimate;
            n[5] = d;
            n[6] = m;
        } else {
            d = n[5];
            m = n[6];
        }
        if (m !== Symbol.for("react.early_return_sentinel")) {
            return m;
        }
        let A;
        if (n[23] !== d) {
            const Component = o("WAWebFlex.react").FlexColumn;
            const Component_1 = r("WAWebFlexItem.react");
            A = <Component_1 align="center" shrink={0}><Component xstyle={y.rollerContainer}>{d}</Component></Component_1>;
            n[23] = d;
            n[24] = A;
        } else {
            A = n[24];
        }
        return A;
    }
    function B3Component(t) {
        const n = o("react-compiler-runtime").c(13);
        const { animationStyle, direction, value } = t;
        const sRef = useRef(null);
        let c;
        let d;
        if (n[0] !== direction) {
            c = function() {
                const sRef_current = sRef.current;
                if (sRef_current != null) {
                    const t = function() {
                        sRef_current.style.display = direction < 0 ? "none" : "flex";
                    };
                    sRef_current.addEventListener("animationend", t);
                    return function() {
                        sRef_current.removeEventListener("animationend", t);
                    };
                }
            };
            d = [
                direction
            ];
            n[0] = direction;
            n[1] = c;
            n[2] = d;
        } else {
            c = n[1];
            d = n[2];
        }
        useEffect(c, d);
        let _;
        if (n[3] !== animationStyle) {
            _ = (e || (e = r("stylex"))).props([
                y.counterContainer,
                y.rollerAnimation,
                animationStyle
            ]);
            n[3] = animationStyle;
            n[4] = _;
        } else {
            _ = n[4];
        }
        let f;
        if (n[5] === Symbol.for("react.memo_cache_sentinel")) {
            f = {
                className: "x1f6kntn x2b8uid xhslqc4"
            };
            n[5] = f;
        } else {
            f = n[5];
        }
        let g;
        if (n[6] !== value) {
            g = r("WAWebL10N").n(value);
            n[6] = value;
            n[7] = g;
        } else {
            g = n[7];
        }
        let h;
        if (n[8] !== g) {
            h = <span {...babelHelpers.extends({}, f, {
                children: g
            })}/>;
            n[8] = g;
            n[9] = h;
        } else {
            h = n[9];
        }
        let C;
        if (n[10] !== _ || n[11] !== h) {
            C = <div {...babelHelpers.extends({
                ref: sRef
            }, _, {
                children: h
            })}/>;
            n[10] = _;
            n[11] = h;
            n[12] = C;
        } else {
            C = n[12];
        }
        return C;
    }
    function v(e, t) {
        return o("WADeepEquals").deepEqual(e, t);
    }
    const S = memo(C, v);
    l.default = S;
}, 98);