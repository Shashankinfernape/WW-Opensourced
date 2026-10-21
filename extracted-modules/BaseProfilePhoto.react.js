__d("BaseProfilePhoto.react", [
    "fbt",
    "BaseAspectRatioContainer.react",
    "BaseSvgImage.react",
    "Locale",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    let u;
    const c = u || (u = o("react"));
    const u_useId = u.useId;
    const m = {
        overlay: {
            fill: "x1tgjyoi",
            $$css: true
        }
    };
    const p = {
        "bottom-left": {
            bottom: "xy5qijl",
            left: "xsoyeob",
            insetInlineStart: null,
            insetInlineEnd: null,
            position: "x10l6tqk",
            transform: "x1m9mm8y",
            $$css: true
        },
        "bottom-right": {
            bottom: "xy5qijl",
            position: "x10l6tqk",
            right: "xitx4z4",
            insetInlineStart: null,
            insetInlineEnd: null,
            transform: "x4v1no5",
            $$css: true
        },
        "top-left": {
            left: "xsoyeob",
            insetInlineStart: null,
            insetInlineEnd: null,
            position: "x10l6tqk",
            top: "x3yj52l",
            transform: "x11lhmoz",
            $$css: true
        },
        "top-right": {
            position: "x10l6tqk",
            right: "xitx4z4",
            insetInlineStart: null,
            insetInlineEnd: null,
            top: "x9ggj5r",
            transform: "x147yg2k",
            $$css: true
        }
    };
    const _ = {
        "bottom-left": {
            bottom: "x1ey2m1c",
            left: "xu96u03",
            insetInlineStart: null,
            insetInlineEnd: null,
            position: "x10l6tqk",
            transform: "x1m9mm8y",
            $$css: true
        },
        "bottom-right": {
            bottom: "x1ey2m1c",
            position: "x10l6tqk",
            right: "x3m8u43",
            insetInlineStart: null,
            insetInlineEnd: null,
            transform: "x4v1no5",
            $$css: true
        },
        "top-left": {
            left: "xu96u03",
            insetInlineStart: null,
            insetInlineEnd: null,
            position: "x10l6tqk",
            top: "x13vifvy",
            transform: "x11lhmoz",
            $$css: true
        },
        "top-right": {
            position: "x10l6tqk",
            right: "x3m8u43",
            insetInlineStart: null,
            insetInlineEnd: null,
            top: "x13vifvy",
            transform: "x147yg2k",
            $$css: true
        }
    };
    const f = [];
    function g(position) {
        const t = o("Locale").isRTL();
        switch(position){
            case "top-start":
                if (t) {
                    return "top-right";
                }
                return "top-left";
            case "top-end":
                if (t) {
                    return "top-left";
                }
                return "top-right";
            case "bottom-start":
                if (t) {
                    return "bottom-right";
                }
                return "bottom-left";
            case "bottom-end":
                if (t) {
                    return "bottom-left";
                }
                return "bottom-right";
            case "start":
                if (t) {
                    return "right";
                }
                return "left";
            case "end":
                if (t) {
                    return "left";
                }
                return "right";
        }
    }
    function HComponent(t) {
        const n = o("react-compiler-runtime").c(70);
        const { cutouts, hasOverlay, imageUri, backgroundFill: BackgroundFill, maskedChildren, outline, addOns, overlayXStyle, ring, isDecorative, alt, shape, size, testid } = t;
        const T = cutouts === undefined ? f : cutouts;
        const D = hasOverlay === undefined ? false : hasOverlay;
        const x = isDecorative === undefined ? false : isDecorative;
        const $ = u_useId();
        const gradientId = u_useId();
        const mask_1 = `url(#${$})`;
        let M;
        if (n[0] !== ring) {
            M = ring ?? {};
            n[0] = ring;
            n[1] = M;
        } else {
            M = n[1];
        }
        const w = M;
        const { gap, thickness } = w;
        const O = gap === undefined ? 0 : gap;
        const strokeWidth = thickness === undefined ? 0 : thickness;
        const W = O + strokeWidth;
        let q;
        if (n[2] !== O || n[3] !== strokeWidth || n[4] !== W || n[5] !== shape) {
            q = shape === "circle" ? <circle cx="50%" cy="50%" r={`calc(50% - ${W}px)`}/> : shape.type === "square" ? <rect height={`calc(100% - ${2 * W}px)`} rx={Math.max(0, shape.borderRadius - O - strokeWidth / 2)} ry={Math.max(0, shape.borderRadius - O - strokeWidth / 2)} width={`calc(100% - ${2 * W}px)`} x={W} y={W}/> : shape.element;
            n[2] = O;
            n[3] = strokeWidth;
            n[4] = W;
            n[5] = shape;
            n[6] = q;
        } else {
            q = n[6];
        }
        const U = q;
        let V;
        if (n[7] !== ring || n[8] !== strokeWidth || n[9] !== shape) {
            V = function(t) {
                if (ring == null) {
                    return null;
                }
                if (shape === "circle") {
                    return <circle cx="50%" cy="50%" fill="transparent" r={ring != null ? `calc(50% - ${strokeWidth / 2}px)` : "50%"} stroke={t ?? ring.color} strokeWidth={strokeWidth}/>;
                }
                if (shape.type === "square") {
                    return <rect fill="transparent" height={`calc(100% - ${strokeWidth}px)`} rx={shape.borderRadius} ry={shape.borderRadius} stroke={t ?? ring.color} strokeWidth={strokeWidth} width={`calc(100% - ${strokeWidth}px)`} x={strokeWidth / 2} y={strokeWidth / 2}/>;
                }
                return null;
            };
            n[7] = ring;
            n[8] = strokeWidth;
            n[9] = shape;
            n[10] = V;
        } else {
            V = n[10];
        }
        const H = V;
        let G;
        if (n[11] !== BackgroundFill || n[12] !== gradientId) {
            G = BackgroundFill != null && typeof BackgroundFill !== "string" ? <defs>{<BackgroundFill gradientId={gradientId}/>}</defs> : null;
            n[11] = BackgroundFill;
            n[12] = gradientId;
            n[13] = G;
        } else {
            G = n[13];
        }
        const z = G;
        let j;
        if (n[14] === Symbol.for("react.memo_cache_sentinel")) {
            j = {
                className: "x5yr21d xh8yej3"
            };
            n[14] = j;
        } else {
            j = n[14];
        }
        let K;
        if (n[15] !== alt) {
            K = (typeof alt === "string" || s.isFbtInstance(alt)) && <title>{alt}</title>;
            n[15] = alt;
            n[16] = K;
        } else {
            K = n[16];
        }
        let Q;
        if (n[17] !== U) {
            Q = <g fill="white">{U}</g>;
            n[17] = U;
            n[18] = Q;
        } else {
            Q = n[18];
        }
        let X;
        if (n[19] !== H) {
            X = H("white");
            n[19] = H;
            n[20] = X;
        } else {
            X = n[20];
        }
        let Y;
        if (n[21] !== T || n[22] !== shape) {
            let J;
            if (n[24] !== shape) {
                J = function(cutout, n) {
                    return <Y1Component key={n} cutout={cutout} shape={shape}/>;
                };
                n[24] = shape;
                n[25] = J;
            } else {
                J = n[25];
            }
            Y = T.map(J);
            n[21] = T;
            n[22] = shape;
            n[23] = Y;
        } else {
            Y = n[23];
        }
        let Z;
        if (n[26] !== Y) {
            Z = <g fill="black">{Y}</g>;
            n[26] = Y;
            n[27] = Z;
        } else {
            Z = n[27];
        }
        let ee;
        if (n[28] !== $ || n[29] !== Q || n[30] !== X || n[31] !== Z) {
            ee = <mask id={$}>{Q}{X}{Z}</mask>;
            n[28] = $;
            n[29] = Q;
            n[30] = X;
            n[31] = Z;
            n[32] = ee;
        } else {
            ee = n[32];
        }
        let te;
        if (n[33] !== BackgroundFill || n[34] !== gradientId || n[35] !== W) {
            te = BackgroundFill != null ? <rect fill={typeof BackgroundFill === "string" ? BackgroundFill : `url(#${gradientId})`} height={`calc(100% - ${2 * W}px)`} width={`calc(100% - ${2 * W}px)`} x={W} y={W}/> : null;
            n[33] = BackgroundFill;
            n[34] = gradientId;
            n[35] = W;
            n[36] = te;
        } else {
            te = n[36];
        }
        let ne;
        if (n[37] !== imageUri || n[38] !== W) {
            const Component = r("BaseSvgImage.react");
            ne = imageUri != null && <Component src={imageUri} style={{
                height: `calc(100% - ${2 * W}px)`,
                width: `calc(100% - ${2 * W}px)`
            }} x={W} y={W}/>;
            n[37] = imageUri;
            n[38] = W;
            n[39] = ne;
        } else {
            ne = n[39];
        }
        let re;
        if (n[40] !== U || n[41] !== outline) {
            re = outline != null && <g fill="transparent" stroke={outline.color} strokeWidth={outline.thickness * 2}>{U}</g>;
            n[40] = U;
            n[41] = outline;
            n[42] = re;
        } else {
            re = n[42];
        }
        let oe;
        if (n[43] !== H) {
            oe = H();
            n[43] = H;
            n[44] = oe;
        } else {
            oe = n[44];
        }
        let ae;
        if (n[45] !== D || n[46] !== overlayXStyle) {
            ae = D && <rect {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(m.overlay, overlayXStyle), {
                height: "100%",
                width: "100%"
            })}/>;
            n[45] = D;
            n[46] = overlayXStyle;
            n[47] = ae;
        } else {
            ae = n[47];
        }
        let ie;
        if (n[48] !== mask_1 || n[49] !== maskedChildren || n[50] !== te || n[51] !== ne || n[52] !== re || n[53] !== oe || n[54] !== ae) {
            ie = <g mask={mask_1}>{te}{ne}{re}{oe}{maskedChildren}{ae}</g>;
            n[48] = mask_1;
            n[49] = maskedChildren;
            n[50] = te;
            n[51] = ne;
            n[52] = re;
            n[53] = oe;
            n[54] = ae;
            n[55] = ie;
        } else {
            ie = n[55];
        }
        let le;
        if (n[56] !== z || n[57] !== x || n[58] !== size || n[59] !== K || n[60] !== ee || n[61] !== ie) {
            le = <svg {...babelHelpers.extends({
                "aria-hidden": x
            }, j, {
                height: size,
                width: size,
                children: [
                    K,
                    z,
                    ee,
                    ie
                ]
            })}/>;
            n[56] = z;
            n[57] = x;
            n[58] = size;
            n[59] = K;
            n[60] = ee;
            n[61] = ie;
            n[62] = le;
        } else {
            le = n[62];
        }
        let se;
        if (n[63] !== addOns || n[64] !== shape) {
            se = addOns && <div className="x1ey2m1c x9f619 xtijo5x x1o0tod x10l6tqk x13vifvy">{addOns.map((t, n)=>{
                if (t.type === "custom") {
                    return <c.Fragment key={n}>{t.element}</c.Fragment>;
                }
                if (shape === "circle") {
                    const o = g(t.position);
                    return <div {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(o !== "left" && o !== "right" ? p[o] : null), {
                        key: n
                    })}>{t.children}</div>;
                }
                const a = g(t.position);
                return <div {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(a !== "left" && a !== "right" ? _[a] : null), {
                    key: n
                })}>{t.children}</div>;
            })}</div>;
            n[63] = addOns;
            n[64] = shape;
            n[65] = se;
        } else {
            se = n[65];
        }
        let ue;
        if (n[66] !== le || n[67] !== se || n[68] !== testid) {
            const Component = r("BaseAspectRatioContainer.react");
            ue = <Component aspectRatio={1} testid={undefined}>{le}{se}</Component>;
            n[66] = le;
            n[67] = se;
            n[68] = testid;
            n[69] = ue;
        } else {
            ue = n[69];
        }
        return ue;
    }
    function Y1Component(e) {
        const t = o("react-compiler-runtime").c(41);
        const { cutout, shape } = e;
        if (cutout.type === "addOnCircle") {
            const a = typeof cutout.radius === "number" ? cutout.radius : `${cutout.radius.value / 2}%`;
            const { offsetX, offsetY } = cutout;
            const s = offsetX === undefined ? 0 : offsetX;
            const u = offsetY === undefined ? 0 : offsetY;
            const d = o("Locale").isRTL() ? -s : s;
            switch(g(cutout.position)){
                case "top-left":
                    if (shape === "circle") {
                        const m = d ? `calc(14.65% + ${d}px)` : "14.65%";
                        const p = u ? `calc(14.65% + ${u}px)` : "14.65%";
                        let _;
                        if (t[0] !== a || t[1] !== m || t[2] !== p) {
                            _ = <circle cx={m} cy={p} r={a}/>;
                            t[0] = a;
                            t[1] = m;
                            t[2] = p;
                            t[3] = _;
                        } else {
                            _ = t[3];
                        }
                        return _;
                    } else {
                        const f = d ? `calc(0% + ${d}px)` : "0%";
                        const h = u ? `calc(0% + ${u}px)` : "0%";
                        let y;
                        if (t[4] !== a || t[5] !== f || t[6] !== h) {
                            y = <circle cx={f} cy={h} r={a}/>;
                            t[4] = a;
                            t[5] = f;
                            t[6] = h;
                            t[7] = y;
                        } else {
                            y = t[7];
                        }
                        return y;
                    }
                case "top-right":
                    if (shape === "circle") {
                        const C = d ? `calc(85.35% + ${d}px)` : "85.35%";
                        const b = u ? `calc(14.65% + ${u}px)` : "14.65%";
                        let v;
                        if (t[8] !== a || t[9] !== C || t[10] !== b) {
                            v = <circle cx={C} cy={b} r={a}/>;
                            t[8] = a;
                            t[9] = C;
                            t[10] = b;
                            t[11] = v;
                        } else {
                            v = t[11];
                        }
                        return v;
                    } else {
                        const S = d ? `calc(100% + ${d}px)` : "100%";
                        const R = u ? `calc(0% + ${u}px)` : "0%";
                        let L;
                        if (t[12] !== a || t[13] !== S || t[14] !== R) {
                            L = <circle cx={S} cy={R} r={a}/>;
                            t[12] = a;
                            t[13] = S;
                            t[14] = R;
                            t[15] = L;
                        } else {
                            L = t[15];
                        }
                        return L;
                    }
                case "bottom-left":
                    if (shape === "circle") {
                        const E = d ? `calc(14.65% + ${d}px)` : "14.65%";
                        const k = u ? `calc(85.35% + ${u}px)` : "85.35%";
                        let I;
                        if (t[16] !== a || t[17] !== E || t[18] !== k) {
                            I = <circle cx={E} cy={k} r={a}/>;
                            t[16] = a;
                            t[17] = E;
                            t[18] = k;
                            t[19] = I;
                        } else {
                            I = t[19];
                        }
                        return I;
                    } else {
                        const T = d ? `calc(0% + ${d}px)` : "0%";
                        const D = u ? `calc(100% + ${u}px)` : "100%";
                        let x;
                        if (t[20] !== a || t[21] !== T || t[22] !== D) {
                            x = <circle cx={T} cy={D} r={a}/>;
                            t[20] = a;
                            t[21] = T;
                            t[22] = D;
                            t[23] = x;
                        } else {
                            x = t[23];
                        }
                        return x;
                    }
                case "bottom-right":
                default:
                    if (shape === "circle") {
                        const $ = d ? `calc(85.35% + ${d}px)` : "85.35%";
                        const P = u ? `calc(85.35% + ${u}px)` : "85.35%";
                        let N;
                        if (t[24] !== a || t[25] !== $ || t[26] !== P) {
                            N = <circle cx={$} cy={P} r={a}/>;
                            t[24] = a;
                            t[25] = $;
                            t[26] = P;
                            t[27] = N;
                        } else {
                            N = t[27];
                        }
                        return N;
                    } else {
                        const M = d ? `calc(100% + ${d}px)` : "100%";
                        const w = u ? `calc(100% + ${u}px)` : "100%";
                        let A;
                        if (t[28] !== a || t[29] !== M || t[30] !== w) {
                            A = <circle cx={M} cy={w} r={a}/>;
                            t[28] = a;
                            t[29] = M;
                            t[30] = w;
                            t[31] = A;
                        } else {
                            A = t[31];
                        }
                        return A;
                    }
            }
        }
        if (cutout.type === "overlap") {
            if (shape === "circle") {
                const { overlap, position } = cutout;
                const B = g(position);
                const W = typeof overlap !== "number" ? null : position === "bottom-start" ? `translateXY(${overlap}px, ${-overlap}px)` : `translateX(${position === "start" ? overlap : -overlap}px)`;
                let q = 50;
                let U = 50;
                e: switch(B){
                    case "bottom-left":
                        {
                            q = -35.36;
                            U = 135.36;
                            if (typeof overlap !== "number") {
                                q = -35.36 + overlap.value;
                                U = 135.36 - overlap.value;
                            }
                            break e;
                        }
                    case "bottom-right":
                        {
                            q = 35.36;
                            U = 135.36;
                            if (typeof overlap !== "number") {
                                q = 35.36 + (100 - overlap.value);
                                U = 135.36 - overlap.value;
                            }
                            break e;
                        }
                    case "left":
                        {
                            q = -50;
                            if (typeof overlap !== "number") {
                                q = -50 + overlap.value;
                            }
                            break e;
                        }
                    case "right":
                        q = 50;
                        if (typeof overlap !== "number") {
                            q = 50 + (100 - overlap.value);
                        }
                }
                const V = `${q}%`;
                const H = `${U}%`;
                const G = `calc(50% + ${cutout.gap}px)`;
                let z;
                if (t[32] !== W) {
                    z = W != null ? {
                        transform: W
                    } : {};
                    t[32] = W;
                    t[33] = z;
                } else {
                    z = t[33];
                }
                let j;
                if (t[34] !== V || t[35] !== H || t[36] !== G || t[37] !== z) {
                    j = <circle cx={V} cy={H} r={G} style={z}/>;
                    t[34] = V;
                    t[35] = H;
                    t[36] = G;
                    t[37] = z;
                    t[38] = j;
                } else {
                    j = t[38];
                }
                return j;
            }
            if (shape.type === "square") {
                let K;
                if (t[39] !== shape.borderRadius) {
                    K = <rect height="100%" rx={shape.borderRadius} ry={shape.borderRadius} width="100%"/>;
                    t[39] = shape.borderRadius;
                    t[40] = K;
                } else {
                    K = t[40];
                }
                return K;
            }
        } else {
            return cutout.element;
        }
        return null;
    }
    l.default = HComponent;
}, 98);