__d("WAWebCarousel.react", [
    "WAWebChevronCustomIcons",
    "WAWebResizeObserver",
    "WAWebStopEvent",
    "WDSIconIcChevronLeft.react",
    "WDSIconIcChevronRight.react",
    "react",
    "react-compiler-runtime",
    "useWAWebAnimationFrames"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = e;
    const { useCallback, useImperativeHandle, useLayoutEffect, useMemo, useRef, useState } = u;
    const g = {
        paddingAuto: {
            paddingTop: null,
            paddingInlineEnd: null,
            paddingBottom: null,
            paddingInlineStart: null,
            $$css: true
        }
    };
    const h = 25;
    const y = {
        leftChevron: {
            position: "x1n2onr6",
            top: "xnfr1j",
            color: "x14ug900",
            $$css: true
        },
        rightChevron: {
            position: "x1n2onr6",
            insetInlineStart: "xjwk6fx",
            left: null,
            right: null,
            top: "xnfr1j",
            color: "x14ug900",
            $$css: true
        },
        chevronCentered: {
            color: "x14ug900",
            $$css: true
        }
    };
    const C = ({ cardWidth, marginEnd, marginInlineStart, spacing })=>{
        const a = `${cardWidth + spacing}px`;
        const i = `calc(100% - ${marginInlineStart}px - ${marginEnd}px + ${spacing}px)`;
        const l = `calc(round(down, ${i}, ${a}) - ${spacing}px)`;
        return `max(${l}, ${cardWidth}px)`;
    };
    function BComponent(e) {
        const r = o("react-compiler-runtime").c(81);
        const { allowPartialCards, cardWidth, carouselMargins, children, enableWheelScroll, isRTL, onStepBackward, onStepForward, ref, spacing, stepButtonProps, stepButtonScrollEasing, stepButtonScrollSpeed } = e;
        const IRef = useRef();
        const TRef = useRef();
        const scrollIf = x(TRef, isRTL);
        let P;
        if (r[0] !== scrollIf || r[1] !== stepButtonScrollEasing || r[2] !== stepButtonScrollSpeed) {
            P = {
                scrollIf,
                stepButtonScrollEasing,
                stepButtonScrollSpeed
            };
            r[0] = scrollIf;
            r[1] = stepButtonScrollEasing;
            r[2] = stepButtonScrollSpeed;
            r[3] = P;
        } else {
            P = r[3];
        }
        const N = D(P);
        const M = N[1];
        const w = useState(false);
        const A = w[0];
        const F = w[1];
        const O = useState(true);
        const B = O[0];
        const W = O[1];
        const q = cardWidth + spacing;
        let U;
        if (r[4] !== carouselMargins) {
            U = function() {
                const TRef_current = TRef.current;
                if (TRef_current == null) {
                    return null;
                }
                if (carouselMargins != null) {
                    return TRef_current.clientWidth - carouselMargins.left - carouselMargins.right;
                }
                return TRef_current.clientWidth;
            };
            r[4] = carouselMargins;
            r[5] = U;
        } else {
            U = r[5];
        }
        const V = U;
        let H;
        if (r[6] !== q || r[7] !== M) {
            H = function(t) {
                M(t * q, true);
            };
            r[6] = q;
            r[7] = M;
            r[8] = H;
        } else {
            H = r[8];
        }
        const scrollToCard = H;
        let z;
        if (r[9] !== scrollToCard) {
            z = function() {
                return {
                    outerDivRef: IRef,
                    scrollToCard
                };
            };
            r[9] = scrollToCard;
            r[10] = z;
        } else {
            z = r[10];
        }
        useImperativeHandle(ref, z);
        let j;
        if (r[11] !== V || r[12] !== onStepBackward || r[13] !== scrollIf || r[14] !== q || r[15] !== M) {
            j = function(t) {
                const e = scrollIf.getScrollLeft();
                const n = V();
                if (!(e == null || n == null)) {
                    const r = Math.ceil((e - h) / q);
                    const a = Math.floor((n + h) / q);
                    M((r - a) * q);
                    onStepBackward?.(r);
                    o("WAWebStopEvent").stopPropagation(t);
                }
            };
            r[11] = V;
            r[12] = onStepBackward;
            r[13] = scrollIf;
            r[14] = q;
            r[15] = M;
            r[16] = j;
        } else {
            j = r[16];
        }
        const K = j;
        let Q;
        if (r[17] !== V || r[18] !== onStepForward || r[19] !== scrollIf || r[20] !== q || r[21] !== M) {
            Q = function(t) {
                const e = scrollIf.getScrollLeft();
                const n = V();
                if (!(e == null || n == null)) {
                    const r = Math.floor((e + n + h) / q);
                    M(r * q);
                    const a = Math.ceil((e - h) / q);
                    onStepForward?.(a);
                    o("WAWebStopEvent").stopPropagation(t);
                }
            };
            r[17] = V;
            r[18] = onStepForward;
            r[19] = scrollIf;
            r[20] = q;
            r[21] = M;
            r[22] = Q;
        } else {
            Q = r[22];
        }
        const X = Q;
        let Y;
        if (r[23] !== cardWidth || r[24] !== children) {
            let J;
            if (r[26] !== cardWidth) {
                J = function(t, n) {
                    return <V1Component key={n} width={cardWidth}>{t}</V1Component>;
                };
                r[26] = cardWidth;
                r[27] = J;
            } else {
                J = r[27];
            }
            Y = children.map(J);
            r[23] = cardWidth;
            r[24] = children;
            r[25] = Y;
        } else {
            Y = r[25];
        }
        const Z = Y;
        let ee;
        if (r[28] !== Z || r[29] !== spacing) {
            ee = [];
            for(let te = 0; te < Z.length; te++){
                ee.push(Z[te]);
                if (te < Z.length - 1) {
                    ee.push(<div key={`spacer-post-${te}`} className="x1rg5ohu" style={{
                        width: `${spacing}px`
                    }}/>);
                }
            }
            r[28] = Z;
            r[29] = spacing;
            r[30] = ee;
        } else {
            ee = r[30];
        }
        let ne;
        if (r[31] !== isRTL || r[32] !== scrollIf) {
            ne = function() {
                const e = scrollIf.getScrollLeft();
                const TRef_current = TRef.current;
                if (!(e == null || TRef_current == null)) {
                    const n = TRef_current.scrollWidth - TRef_current.clientWidth - e > h;
                    const r = e > h;
                    F(isRTL ? n : r);
                    W(isRTL ? r : n);
                }
            };
            r[31] = isRTL;
            r[32] = scrollIf;
            r[33] = ne;
        } else {
            ne = r[33];
        }
        const onScroll = ne;
        const oeRef = useRef(children.length);
        let ae;
        let ie;
        if (r[34] !== children.length || r[35] !== onScroll) {
            ie = function() {
                if (IRef.current != null) {
                    const e = IRef.current;
                    const t = oeRef.current;
                    oeRef.current = children.length;
                    if (t !== children.length) {
                        onScroll();
                    }
                    return o("WAWebResizeObserver").observe(e, onScroll);
                }
            };
            ae = [
                children.length,
                onScroll
            ];
            r[34] = children.length;
            r[35] = onScroll;
            r[36] = ae;
            r[37] = ie;
        } else {
            ae = r[36];
            ie = r[37];
        }
        useLayoutEffect(ie, ae);
        let le;
        let se;
        if (r[38] !== enableWheelScroll || r[39] !== M) {
            le = function() {
                if (enableWheelScroll === true) {
                    const e = IRef.current;
                    if (e != null) {
                        const t = function(t) {
                            const TRef_current = TRef.current;
                            if (TRef_current != null && t.deltaX !== 0) {
                                M(null);
                                t.preventDefault();
                                t.stopPropagation();
                                TRef_current.scrollLeft = TRef_current.scrollLeft + t.deltaX;
                            }
                        };
                        e.addEventListener("wheel", t, {
                            passive: false
                        });
                        return function() {
                            e.removeEventListener("wheel", t);
                        };
                    }
                }
            };
            se = [
                enableWheelScroll,
                M
            ];
            r[38] = enableWheelScroll;
            r[39] = M;
            r[40] = le;
            r[41] = se;
        } else {
            le = r[40];
            se = r[41];
        }
        useLayoutEffect(le, se);
        let ue;
        if (r[42] !== carouselMargins) {
            ue = carouselMargins ? {
                paddingInlineStart: carouselMargins.left,
                paddingInlineEnd: carouselMargins.right
            } : null;
            r[42] = carouselMargins;
            r[43] = ue;
        } else {
            ue = r[43];
        }
        const ce = ue;
        const marginInlineStart = carouselMargins?.left ?? spacing / 2;
        const me = carouselMargins?.right ?? spacing / 2;
        let pe;
        if (r[44] !== allowPartialCards || r[45] !== cardWidth || r[46] !== me || r[47] !== marginInlineStart || r[48] !== spacing) {
            pe = allowPartialCards === true ? {
                width: "100%"
            } : {
                marginInlineStart,
                marginInlineEnd: me,
                width: C({
                    cardWidth,
                    marginEnd: me,
                    marginInlineStart,
                    spacing
                })
            };
            r[44] = allowPartialCards;
            r[45] = cardWidth;
            r[46] = me;
            r[47] = marginInlineStart;
            r[48] = spacing;
            r[49] = pe;
        } else {
            pe = r[49];
        }
        const _e = pe;
        let fe;
        if (r[50] === Symbol.for("react.memo_cache_sentinel")) {
            fe = "x1n2onr6";
            r[50] = fe;
        } else {
            fe = r[50];
        }
        let ge;
        if (r[51] !== isRTL || r[52] !== A || r[53] !== K || r[54] !== stepButtonProps || r[55] !== X) {
            ge = A && stepButtonProps?.hideButtons !== true && <EComponent direction="left" onClick={isRTL ? X : K} stepButtonProps={stepButtonProps}/>;
            r[51] = isRTL;
            r[52] = A;
            r[53] = K;
            r[54] = stepButtonProps;
            r[55] = X;
            r[56] = ge;
        } else {
            ge = r[56];
        }
        let he;
        if (r[57] !== isRTL || r[58] !== B || r[59] !== K || r[60] !== stepButtonProps || r[61] !== X) {
            he = B && stepButtonProps?.hideButtons !== true && <EComponent direction="right" onClick={isRTL ? K : X} stepButtonProps={stepButtonProps}/>;
            r[57] = isRTL;
            r[58] = B;
            r[59] = K;
            r[60] = stepButtonProps;
            r[61] = X;
            r[62] = he;
        } else {
            he = r[62];
        }
        let ye;
        if (r[63] === Symbol.for("react.memo_cache_sentinel")) {
            ye = {
                className: "x1n2onr6 xh8yej3 x14aock7 x1rife3k x1rohswg xfk6m8"
            };
            r[63] = ye;
        } else {
            ye = r[63];
        }
        let onWheel;
        if (r[64] !== M) {
            onWheel = function() {
                return M(null);
            };
            r[64] = M;
            r[65] = onWheel;
        } else {
            onWheel = r[65];
        }
        let be;
        if (r[66] !== carouselMargins) {
            be = ({
                0: {
                    className: "x1n2onr6 x3nfvp2 x1q0g3np x1iyjqo2 x1qjc9v5"
                },
                1: {
                    className: "x1n2onr6 x3nfvp2 x1q0g3np x1iyjqo2 x1qjc9v5 x9f619"
                }
            })[!!carouselMargins << 0];
            r[66] = carouselMargins;
            r[67] = be;
        } else {
            be = r[67];
        }
        let ve;
        if (r[68] !== ee || r[69] !== ce || r[70] !== be) {
            ve = <div {...babelHelpers.extends({}, be, {
                style: ce,
                children: ee
            })}/>;
            r[68] = ee;
            r[69] = ce;
            r[70] = be;
            r[71] = ve;
        } else {
            ve = r[71];
        }
        let Se;
        if (r[72] !== onScroll || r[73] !== onWheel || r[74] !== ve) {
            Se = <div {...babelHelpers.extends({
                ref: TRef
            }, ye, {
                onWheel,
                onScroll,
                children: ve
            })}/>;
            r[72] = onScroll;
            r[73] = onWheel;
            r[74] = ve;
            r[75] = Se;
        } else {
            Se = r[75];
        }
        let Re;
        if (r[76] !== _e || r[77] !== ge || r[78] !== he || r[79] !== Se) {
            Re = <div className={fe} ref={IRef} style={_e}>{ge}{he}{Se}</div>;
            r[76] = _e;
            r[77] = ge;
            r[78] = he;
            r[79] = Se;
            r[80] = Re;
        } else {
            Re = r[80];
        }
        return Re;
    }
    function V1Component(e) {
        const t = o("react-compiler-runtime").c(6);
        const { children, width } = e;
        let a;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = "x78zum5 xdt5ytf x6ikm8r x10wlt62";
            t[0] = a;
        } else {
            a = t[0];
        }
        const i = `${width}px`;
        let l;
        if (t[1] !== i) {
            l = {
                width: i
            };
            t[1] = i;
            t[2] = l;
        } else {
            l = t[2];
        }
        let u;
        if (t[3] !== children || t[4] !== l) {
            u = <div className={a} style={l}>{children}</div>;
            t[3] = children;
            t[4] = l;
            t[5] = u;
        } else {
            u = t[5];
        }
        return u;
    }
    const S = 45;
    const R = -40;
    const L = 30;
    function EComponent(e) {
        const l = o("react-compiler-runtime").c(14);
        const { direction, onClick, stepButtonProps } = e;
        const m = stepButtonProps?.size ?? S;
        const p = stepButtonProps?.offset ?? R;
        const _ = stepButtonProps?.iconSize ?? L;
        const f = stepButtonProps?.verticalOffset;
        const h = stepButtonProps?.tabIndex;
        const C = stepButtonProps?.useWdsIcons ?? false;
        const b = stepButtonProps != null;
        let v;
        if (l[0] !== p || l[1] !== m || l[2] !== direction || l[3] !== b || l[4] !== f) {
            v = b ? babelHelpers.extends({
                width: m,
                height: m,
                top: `calc(50% - ${m / 2}px${f != null ? ` + ${f}px` : ""})`
            }, direction === "left" ? {
                left: p
            } : {
                right: p
            }) : undefined;
            l[0] = p;
            l[1] = m;
            l[2] = direction;
            l[3] = b;
            l[4] = f;
            l[5] = v;
        } else {
            v = l[5];
        }
        const E = v;
        let k;
        if (l[6] !== _ || l[7] !== direction || l[8] !== b || l[9] !== onClick || l[10] !== E || l[11] !== h || l[12] !== C) {
            k = direction === "left" ? <button {...babelHelpers.extends({}, {
                0: {
                    className: "x10l6tqk xfo81ep x1tj73cw x1ekkm8c x1143rjc xum4auv xj21bgg xqvfhly xzuapc8 x1ypdohk x16w0wmm x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xx42vgk xbogo7e x120ee7l x1vb5itz x11g758w x1q665ic xxm48n2 x17gydlx xphzr9 xar8odu"
                },
                1: {
                    className: "x10l6tqk xfo81ep x1tj73cw x1ekkm8c x1143rjc xum4auv xj21bgg xqvfhly xzuapc8 x1ypdohk x16w0wmm x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xx42vgk xbogo7e x120ee7l x1vb5itz x11g758w x1q665ic xxm48n2 x17gydlx xphzr9 xar8odu x78zum5 x6s0dn4 xl56j7k"
                }
            }[!!b << 0], {
                style: E,
                onClick,
                tabIndex: h,
                children: C ? s.jsx(r("WDSIconIcChevronLeft.react"), {
                    width: _,
                    height: _,
                    iconXstyle: y.chevronCentered
                }) : s.jsx(o("WAWebChevronCustomIcons").ChevronLeftCustomIcon, {
                    width: _,
                    height: _,
                    xstyle: [
                        b ? y.chevronCentered : y.leftChevron,
                        g.paddingAuto
                    ]
                })
            })}/> : <button {...babelHelpers.extends({}, {
                0: {
                    className: "x10l6tqk xfo81ep x1tj73cw x1ekkm8c x1143rjc xum4auv xj21bgg xqvfhly xzuapc8 x1ypdohk x16w0wmm x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xx42vgk xbogo7e x120ee7l x1vb5itz x11g758w x1q665ic xxm48n2 x17gydlx xphzr9 x1mrsgf3"
                },
                1: {
                    className: "x10l6tqk xfo81ep x1tj73cw x1ekkm8c x1143rjc xum4auv xj21bgg xqvfhly xzuapc8 x1ypdohk x16w0wmm x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xx42vgk xbogo7e x120ee7l x1vb5itz x11g758w x1q665ic xxm48n2 x17gydlx xphzr9 x1mrsgf3 x78zum5 x6s0dn4 xl56j7k"
                }
            }[!!b << 0], {
                style: E,
                onClick,
                tabIndex: h,
                children: C ? s.jsx(r("WDSIconIcChevronRight.react"), {
                    width: _,
                    height: _,
                    iconXstyle: y.chevronCentered
                }) : s.jsx(r("WDSIconIcChevronRight.react"), {
                    width: _,
                    height: _,
                    xstyle: b ? y.chevronCentered : y.rightChevron
                })
            })}/>;
            l[6] = _;
            l[7] = direction;
            l[8] = b;
            l[9] = onClick;
            l[10] = E;
            l[11] = h;
            l[12] = C;
            l[13] = k;
        } else {
            k = l[13];
        }
        return k;
    }
    const k = 50;
    const I = 0.08;
    const T = 1;
    function D(e) {
        const t = o("react-compiler-runtime").c(14);
        const { scrollIf, stepButtonScrollEasing, stepButtonScrollSpeed } = e;
        const l = useState(null);
        const s = l[0];
        const u = l[1];
        const c = useState(false);
        const active = c[0];
        const m = c[1];
        const pRef = useRef(null);
        let g;
        if (t[0] !== scrollIf || t[1] !== s || t[2] !== stepButtonScrollEasing || t[3] !== stepButtonScrollSpeed) {
            g = function() {
                const e = scrollIf.getScrollLeft();
                if (e == null || s == null) {
                    m(false);
                    return;
                }
                const t = s;
                const r = e;
                if (r === t) {
                    m(false);
                    return;
                }
                const o = stepButtonScrollSpeed ?? k;
                const l = Math.abs(t - r);
                let u;
                if (stepButtonScrollEasing === true) {
                    u = Math.max(Math.min(l * I, o), T);
                } else {
                    u = o;
                }
                const left = l < u ? t : r + Math.sign(t - r) * u;
                scrollIf.scrollTo({
                    left,
                    behavior: "instant"
                });
                const d = pRef.current == null || scrollIf.getScrollLeft() !== pRef.current;
                pRef.current = scrollIf.getScrollLeft();
                if (!d) {
                    m(false);
                }
            };
            t[0] = scrollIf;
            t[1] = s;
            t[2] = stepButtonScrollEasing;
            t[3] = stepButtonScrollSpeed;
            t[4] = g;
        } else {
            g = t[4];
        }
        const h = g;
        let y;
        if (t[5] !== active) {
            y = {
                active
            };
            t[5] = active;
            t[6] = y;
        } else {
            y = t[6];
        }
        r("useWAWebAnimationFrames")(h, y);
        let C;
        if (t[7] !== scrollIf) {
            C = function(t, r) {
                if (r === true && t != null) {
                    scrollIf.scrollTo({
                        left: t,
                        behavior: "instant"
                    });
                    return;
                }
                u(t);
                m(true);
            };
            t[7] = scrollIf;
            t[8] = C;
        } else {
            C = t[8];
        }
        const b = C;
        let v;
        if (t[9] !== b) {
            v = function(t, n) {
                return b(t, n);
            };
            t[9] = b;
            t[10] = v;
        } else {
            v = t[10];
        }
        let S;
        if (t[11] !== s || t[12] !== v) {
            S = [
                s,
                v
            ];
            t[11] = s;
            t[12] = v;
            t[13] = S;
        } else {
            S = t[13];
        }
        return S;
    }
    function x(TRef, isRTL) {
        const n = o("react-compiler-runtime").c(3);
        let r;
        if (n[0] !== isRTL || n[1] !== TRef) {
            r = {
                getScrollLeft: function() {
                    const e_current = TRef.current;
                    if (e_current == null) {
                        return null;
                    }
                    if (isRTL) {
                        return -e_current.scrollLeft;
                    }
                    return e_current.scrollLeft;
                },
                scrollTo: function({ behavior, left }) {
                    const e_current = TRef.current;
                    if (e_current != null) {
                        e_current.scrollTo({
                            left: isRTL ? -left : left,
                            behavior
                        });
                    }
                }
            };
            n[0] = isRTL;
            n[1] = TRef;
            n[2] = r;
        } else {
            r = n[2];
        }
        return r;
    }
    l.default = BComponent;
}, 98);