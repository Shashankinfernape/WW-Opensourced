;
__d("BaseTooltipAboveCarat.svg.react", [
    "fbt",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    let u;
    const c = u || (u = o("react"));
    function DComponent(t) {
        const n = o("react-compiler-runtime").c(5);
        const t_fillXStyle = t.fillXStyle;
        let i;
        if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
            i = <title id="tooltipCaratTitle">{s._("Tooltip above carat")}</title>;
            n[0] = i;
        } else {
            i = n[0];
        }
        let l;
        if (n[1] !== t_fillXStyle) {
            l = (e || (e = r("stylex"))).props(t_fillXStyle);
            n[1] = t_fillXStyle;
            n[2] = l;
        } else {
            l = n[2];
        }
        let u;
        if (n[3] !== l) {
            u = <svg fill="none" height="8" title="tooltip carat" viewBox="0 0.3 21 8" width="21" xmlns="http://www.w3.org/2000/svg">{i}<path {...babelHelpers.extends({}, l, {
                clipRule: "evenodd",
                d: "M0 0C4 0 7.819 8 10.5 8C13.1815 8 17.0005 0 21 0H0Z",
                fill: "black",
                fillRule: "evenodd"
            })}/></svg>;
            n[3] = l;
            n[4] = u;
        } else {
            u = n[4];
        }
        return u;
    }
    l.default = DComponent;
}, 226);
__d("BaseTooltipBelowCarat.svg.react", [
    "fbt",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    let u;
    const c = u || (u = o("react"));
    function DComponent(t) {
        const n = o("react-compiler-runtime").c(6);
        const t_fillXStyle = t.fillXStyle;
        let i;
        if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
            i = {
                transform: "scaleY(-1)"
            };
            n[0] = i;
        } else {
            i = n[0];
        }
        let l;
        if (n[1] === Symbol.for("react.memo_cache_sentinel")) {
            l = <title id="tooltipCaratTitle">{s._("Tooltip below carat")}</title>;
            n[1] = l;
        } else {
            l = n[1];
        }
        let u;
        if (n[2] !== t_fillXStyle) {
            u = (e || (e = r("stylex"))).props(t_fillXStyle);
            n[2] = t_fillXStyle;
            n[3] = u;
        } else {
            u = n[3];
        }
        let d;
        if (n[4] !== u) {
            d = <svg fill="none" height="8" style={i} title="tooltip carat" viewBox="0 0 21 8" width="21" xmlns="http://www.w3.org/2000/svg">{l}<path {...babelHelpers.extends({}, u, {
                clipRule: "evenodd",
                d: "M0 0C4 0 7.819 8 10.5 8C13.1815 8 17.0005 0 21 0H0Z",
                fill: "black",
                fillRule: "evenodd"
            })}/></svg>;
            n[4] = u;
            n[5] = d;
        } else {
            d = n[5];
        }
        return d;
    }
    l.default = DComponent;
}, 226);
__d("BaseTooltipEndCarat.svg.react", [
    "fbt",
    "react",
    "react-compiler-runtime",
    "stylex",
    "vulture"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    let u;
    const c = u || (u = o("react"));
    function DComponent(t) {
        const n = o("react-compiler-runtime").c(6);
        const t_fillXStyle = t.fillXStyle;
        r("vulture")("eUKqFkrVPwPefpHLvH53ZohT9_A=");
        let i;
        if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
            i = {
                transform: "scaleX(-1)"
            };
            n[0] = i;
        } else {
            i = n[0];
        }
        let l;
        if (n[1] === Symbol.for("react.memo_cache_sentinel")) {
            l = <title>{s._("Tooltip start carat")}</title>;
            n[1] = l;
        } else {
            l = n[1];
        }
        let u;
        if (n[2] !== t_fillXStyle) {
            u = (e || (e = r("stylex"))).props(t_fillXStyle);
            n[2] = t_fillXStyle;
            n[3] = u;
        } else {
            u = n[3];
        }
        let d;
        if (n[4] !== u) {
            d = <svg fill="none" height="22" style={i} viewBox="0.5 0 8 22" width="8">{l}<path {...babelHelpers.extends({}, u, {
                clipRule: "evenodd",
                d: "M0.5 21.5C0.5 17.5 7.5 13.681 7.5 11C7.5 8.3185 0.5 4.4995 0.5 0.5L0.5 21.5Z",
                fill: "black",
                fillRule: "evenodd"
            })}/></svg>;
            n[4] = u;
            n[5] = d;
        } else {
            d = n[5];
        }
        return d;
    }
    l.default = DComponent;
}, 226);
__d("BaseTooltipStartCarat.svg.react", [
    "fbt",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    let u;
    const c = u || (u = o("react"));
    function d(t) {
        const n = o("react-compiler-runtime").c(5);
        const t_fillXStyle = t.fillXStyle;
        let i;
        if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
            i = <title>{s._("Tooltip end carat")}</title>;
            n[0] = i;
        } else {
            i = n[0];
        }
        let l;
        if (n[1] !== t_fillXStyle) {
            l = (e || (e = r("stylex"))).props(t_fillXStyle);
            n[1] = t_fillXStyle;
            n[2] = l;
        } else {
            l = n[2];
        }
        let u;
        if (n[3] !== l) {
            u = <svg fill="none" height="22" viewBox="0.7 0 8 22" width="8">{i}<path {...babelHelpers.extends({}, l, {
                clipRule: "evenodd",
                d: "M0.5 21.5C0.5 17.5 7.5 13.681 7.5 11C7.5 8.3185 0.5 4.4995 0.5 0.5L0.5 21.5Z",
                fill: "black",
                fillRule: "evenodd"
            })}/></svg>;
            n[3] = l;
            n[4] = u;
        } else {
            u = n[4];
        }
        return u;
    }
    l.default = d;
}, 226);
__d("BaseTooltipCarat.react", [
    "BaseTooltipAboveCarat.svg.react",
    "BaseTooltipBelowCarat.svg.react",
    "BaseTooltipEndCarat.svg.react",
    "BaseTooltipStartCarat.svg.react",
    "react",
    "react-compiler-runtime",
    "react-strict-dom"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const u = {
        caratContainer: {
            display: "x78zum5",
            $$css: true
        }
    };
    const c = (position)=>{
        switch(position){
            case "below":
                return r("BaseTooltipBelowCarat.svg.react");
            case "above":
                return r("BaseTooltipAboveCarat.svg.react");
            case "start":
                return r("BaseTooltipStartCarat.svg.react");
            case "end":
                return r("BaseTooltipEndCarat.svg.react");
            default:
                return r("BaseTooltipBelowCarat.svg.react");
        }
    };
    function d(e) {
        const t = o("react-compiler-runtime").c(11);
        const { fillXStyle, position, shouldFadeIn, transitionInXStyle, transitionOutXStyle } = e;
        const d = shouldFadeIn === undefined ? false : shouldFadeIn;
        let m;
        if (t[0] !== position) {
            m = c(position);
            t[0] = position;
            t[1] = m;
        } else {
            m = t[1];
        }
        const P = m;
        const _ = d && transitionInXStyle;
        let f;
        if (t[2] !== _ || t[3] !== transitionOutXStyle) {
            f = [
                u.caratContainer,
                transitionOutXStyle,
                _
            ];
            t[2] = _;
            t[3] = transitionOutXStyle;
            t[4] = f;
        } else {
            f = t[4];
        }
        let g;
        if (t[5] !== P || t[6] !== fillXStyle) {
            g = <P fillXStyle={fillXStyle}/>;
            t[5] = P;
            t[6] = fillXStyle;
            t[7] = g;
        } else {
            g = t[7];
        }
        let h;
        if (t[8] !== f || t[9] !== g) {
            const Component = o("react-strict-dom").html.div;
            h = <Component style={f}>{g}</Component>;
            t[8] = f;
            t[9] = g;
            t[10] = h;
        } else {
            h = t[10];
        }
        return h;
    }
    l.default = d;
}, 98);
__d("BaseTooltipContainer.react", [
    "BaseAnchorPositioningUtils",
    "BaseContextualLayerContextSizeContext",
    "BaseTooltipCarat.react",
    "FocusRegion.react",
    "focusScopeQueries",
    "react",
    "react-compiler-runtime",
    "react-strict-dom",
    "stylex"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = [
        "ref",
        "align",
        "alignOffsetXstyle",
        "anchorRef",
        "anchorTargetRef",
        "anchorTargetXstyle",
        "children",
        "closeButton",
        "id",
        "position",
        "role",
        "shouldFadeIn",
        "shouldShowCarat",
        "withCloseButton",
        "xstyle"
    ];
    let s;
    let u;
    const c = u || (u = o("react"));
    const d = u;
    const { useContext, useLayoutEffect, useState } = d;
    const f = 10.5;
    const g = {
        anchorPositionContainer: {
            width: "xezivpi",
            $$css: true
        },
        container: {
            backgroundColor: "xj5tmjb",
            borderStartStartRadius: "xyjepno",
            borderStartEndRadius: "x15s83fx",
            borderEndEndRadius: "xdgutz0",
            borderEndStartRadius: "x1wjlvx0",
            borderTopWidth: "x972fbf",
            borderInlineEndWidth: "x10w94by",
            borderBottomWidth: "x1qhh985",
            borderInlineStartWidth: "x14e42zd",
            boxShadow: "xms15q0",
            display: "x78zum5",
            filter: "xo8ld3r",
            maxWidth: "x86nfjv",
            paddingTop: "xz9dl7a",
            paddingBottom: "xsag5q8",
            paddingInlineStart: "x1g0dm76",
            paddingInlineEnd: "xpdmqnj",
            $$css: true
        },
        fillXStyle: {
            fill: "x1fj6ok0",
            fillOpacity: "xlyfr8p",
            $$css: true
        },
        transitionIn: {
            opacity: "x1hc1fzr",
            transitionDuration: "xhb22t3",
            transitionTimingFunction: "xls3em1",
            $$css: true
        },
        transitionOut: {
            opacity: "xg01cxk",
            transitionDuration: "x1ebt8du",
            transitionProperty: "x19991ni",
            transitionTimingFunction: "x1dhq9h",
            $$css: true
        }
    };
    const h = {
        above: {
            flexDirection: "xdt5ytf",
            $$css: true
        },
        base: {
            display: "x78zum5",
            marginBottom: "xjpr12u",
            marginTop: "xr9ek0c",
            $$css: true
        },
        below: {
            flexDirection: "x3ieub6",
            $$css: true
        },
        end: {
            flexDirection: "x15zctf7",
            $$css: true
        },
        start: {
            flexDirection: "x1q0g3np",
            $$css: true
        }
    };
    const y = {
        marginInlineEnd: "x1c9tiao",
        $$css: true
    };
    const C = {
        marginInlineStart: "x4lel18",
        $$css: true
    };
    const b = {
        alignEnd: function(t) {
            return [
                y,
                {
                    "--x-marginInlineEnd": ((e)=>{
                        if (typeof e === "number") {
                            return `${e}px`;
                        }
                        return e ?? undefined;
                    })(`calc(${t ?? 0}px / 2 - ${f}px)`)
                }
            ];
        },
        alignStart: function(t) {
            return [
                C,
                {
                    "--x-marginInlineStart": ((e)=>{
                        if (typeof e === "number") {
                            return `${e}px`;
                        }
                        return e ?? undefined;
                    })(`calc(${t ?? 0}px / 2 - ${f}px)`)
                }
            ];
        },
        end: {
            alignItems: "xuk3077",
            $$css: true
        },
        middle: {
            alignItems: "x6s0dn4",
            $$css: true
        },
        start: {
            alignItems: "x1cy8zhl",
            $$css: true
        },
        stretch: {
            alignItems: "x6s0dn4",
            $$css: true
        }
    };
    function VComponent(t) {
        const i = o("react-compiler-runtime").c(70);
        let l;
        let u;
        let d;
        let f;
        let y;
        let C;
        let v;
        let S;
        let R;
        let L;
        let E;
        let k;
        let I;
        let T;
        let D;
        let x;
        if (i[0] !== t) {
            R = t.ref;
            L = t.align;
            l = t.alignOffsetXstyle;
            u = t.anchorRef;
            d = t.anchorTargetRef;
            f = t.anchorTargetXstyle;
            C = t.children;
            v = t.closeButton;
            S = t.id;
            E = t.position;
            k = t.role;
            I = t.shouldFadeIn;
            T = t.shouldShowCarat;
            D = t.withCloseButton;
            x = t.xstyle;
            y = babelHelpers.objectWithoutPropertiesLoose(t, e);
            i[0] = t;
            i[1] = l;
            i[2] = u;
            i[3] = d;
            i[4] = f;
            i[5] = y;
            i[6] = C;
            i[7] = v;
            i[8] = S;
            i[9] = R;
            i[10] = L;
            i[11] = E;
            i[12] = k;
            i[13] = I;
            i[14] = T;
            i[15] = D;
            i[16] = x;
        } else {
            l = i[1];
            u = i[2];
            d = i[3];
            f = i[4];
            y = i[5];
            C = i[6];
            v = i[7];
            S = i[8];
            R = i[9];
            L = i[10];
            E = i[11];
            k = i[12];
            I = i[13];
            T = i[14];
            D = i[15];
            x = i[16];
        }
        const $ = L === undefined ? "middle" : L;
        const P = E === undefined ? "below" : E;
        const N = k === undefined ? "tooltip" : k;
        const shouldFadeIn = I === undefined ? false : I;
        const w = T === undefined ? false : T;
        const A = D === undefined ? true : D;
        const F = useState(null);
        const O = F[0];
        const B = F[1];
        const W = useContext(r("BaseContextualLayerContextSizeContext"));
        let q;
        let U;
        if (i[17] !== u) {
            q = function() {
                if (!(u != null && u.current == null)) {
                    const t = u?.current?.getBoundingClientRect();
                    if (t != null) {
                        const n = {
                            height: t.height,
                            width: t.width
                        };
                        B(n);
                    }
                }
            };
            U = [
                u
            ];
            i[17] = u;
            i[18] = q;
            i[19] = U;
        } else {
            q = i[18];
            U = i[19];
        }
        useLayoutEffect(q, U);
        let V;
        let H;
        if (i[20] !== O || i[21] !== W || i[22] !== shouldFadeIn || i[23] !== x) {
            const G = o("BaseAnchorPositioningUtils").passesAnchorPositionExperiment();
            H = G ? O : W;
            V = (s || (s = r("stylex"))).props(g.container, G && g.anchorPositionContainer, g.transitionOut, x, shouldFadeIn && g.transitionIn);
            i[20] = O;
            i[21] = W;
            i[22] = shouldFadeIn;
            i[23] = x;
            i[24] = V;
            i[25] = H;
        } else {
            V = i[24];
            H = i[25];
        }
        let z;
        if (i[26] !== V) {
            z = babelHelpers.extends({}, V);
            i[26] = V;
            i[27] = z;
        } else {
            z = i[27];
        }
        const j = z;
        const role = N;
        let Q;
        if (i[28] !== C || i[29] !== v || i[30] !== N || i[31] !== A) {
            const Component = o("FocusRegion.react").FocusRegion;
            Q = N === "dialog" ? <Component autoFocusQuery={o("focusScopeQueries").focusableScopeQuery}><>{C}{A === true && <div>{v}</div>}</></Component> : <>{C}</>;
            i[28] = C;
            i[29] = v;
            i[30] = N;
            i[31] = A;
            i[32] = Q;
        } else {
            Q = i[32];
        }
        let X;
        if (i[33] !== y || i[34] !== j || i[35] !== S || i[36] !== R || i[37] !== role || i[38] !== Q) {
            X = <div {...babelHelpers.extends({}, y, j, {
                "data-testid": undefined,
                id: S,
                ref: R,
                role,
                children: Q
            })}/>;
            i[33] = y;
            i[34] = j;
            i[35] = S;
            i[36] = R;
            i[37] = role;
            i[38] = Q;
            i[39] = X;
        } else {
            X = i[39];
        }
        const Y = X;
        const J = P === "auto" ? "below" : P;
        const Z = h[J];
        const ee = b[$];
        let te;
        if (i[40] !== Z || i[41] !== ee) {
            te = [
                h.base,
                Z,
                ee
            ];
            i[40] = Z;
            i[41] = ee;
            i[42] = te;
        } else {
            te = i[42];
        }
        let ne;
        if (i[43] !== $ || i[44] !== l || i[45] !== H?.width) {
            ne = l === undefined && $ === "end" && b.alignEnd(H?.width);
            i[43] = $;
            i[44] = l;
            i[45] = H?.width;
            i[46] = ne;
        } else {
            ne = i[46];
        }
        let ae;
        if (i[47] !== $ || i[48] !== l || i[49] !== H?.width) {
            ae = l === undefined && $ === "start" && b.alignStart(H?.width);
            i[47] = $;
            i[48] = l;
            i[49] = H?.width;
            i[50] = ae;
        } else {
            ae = i[50];
        }
        let se;
        if (i[51] !== l || i[52] !== ne || i[53] !== ae) {
            se = [
                ne,
                ae,
                l
            ];
            i[51] = l;
            i[52] = ne;
            i[53] = ae;
            i[54] = se;
        } else {
            se = i[54];
        }
        let ue;
        if (i[55] !== P || i[56] !== shouldFadeIn || i[57] !== w) {
            ue = w && c.jsx(r("BaseTooltipCarat.react"), {
                fillXStyle: g.fillXStyle,
                position: P,
                shouldFadeIn,
                transitionInXStyle: g.transitionIn,
                transitionOutXStyle: g.transitionOut
            });
            i[55] = P;
            i[56] = shouldFadeIn;
            i[57] = w;
            i[58] = ue;
        } else {
            ue = i[58];
        }
        let ce;
        if (i[59] !== se || i[60] !== ue) {
            const Component = o("react-strict-dom").html.div;
            ce = <Component style={se}>{ue}</Component>;
            i[59] = se;
            i[60] = ue;
            i[61] = ce;
        } else {
            ce = i[61];
        }
        let de;
        if (i[62] !== Y || i[63] !== te || i[64] !== ce) {
            const Component = o("react-strict-dom").html.div;
            de = <Component style={te}>{Y}{ce}</Component>;
            i[62] = Y;
            i[63] = te;
            i[64] = ce;
            i[65] = de;
        } else {
            de = i[65];
        }
        let me;
        if (i[66] !== d || i[67] !== f || i[68] !== de) {
            const Component = o("react-strict-dom").html.div;
            me = <Component ref={d} style={f}>{de}</Component>;
            i[66] = d;
            i[67] = f;
            i[68] = de;
            i[69] = me;
        } else {
            me = i[69];
        }
        return me;
    }
    l.default = VComponent;
}, 98);
__d("CometHeroInteractionContextPassthrough.react", [
    "hero-tracing-placeholder"
], function(t, n, r, o, a, i, l) {
    "use strict";
    l.default = o("hero-tracing-placeholder").HeroInteractionContextPassthrough;
}, 98);
__d("addJoinId", [
    "addAnnotations"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, qpl_join__absolute_time_origin_ms) {
        r("addAnnotations")(e.annotations, {
            string: {
                join_id: t,
                qpl_join__source_clock: "unreliable".valueOf(),
                qpl__source: "client_js"
            }
        });
        if (qpl_join__absolute_time_origin_ms != null) {
            r("addAnnotations")(e.annotations, {
                int: {
                    qpl_join__absolute_time_origin_ms
                }
            });
        }
    }
    l.default = e;
}, 98);
__d("InteractionTracingMetricsCore", [
    "addAnnotations",
    "addJoinId",
    "hero-tracing-placeholder",
    "performanceNow"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = new Map;
    const u = new Map;
    const c = new Map;
    const d = {
        string: {},
        int: {},
        double: {},
        bool: {},
        string_array: {},
        int_array: {},
        double_array: {},
        bool_array: {}
    };
    const m = {
        interactionCount: 0
    };
    const p = 10000;
    const currentInteractionLogger = function() {
        const e = new Map(c);
        const t = (n)=>{
            e.forEach((e)=>{
                n(e);
            });
        };
        var n = {
            addGlobalMetadata: function(t, o) {
                if (typeof o === "number") {
                    r("addAnnotations")(d, {
                        int: {
                            [t]: o
                        }
                    });
                } else if (typeof o === "string") {
                    r("addAnnotations")(d, {
                        string: {
                            [t]: o
                        }
                    });
                } else if (typeof o === "boolean") {
                    r("addAnnotations")(d, {
                        bool: {
                            [t]: o
                        }
                    });
                }
                n.addMetadata(t, o);
            },
            addMetadata: function(n, o) {
                t((e)=>{
                    if (typeof o === "number") {
                        r("addAnnotations")(e.annotations, {
                            int: {
                                [n]: o
                            }
                        });
                    } else if (typeof o === "string") {
                        r("addAnnotations")(e.annotations, {
                            string: {
                                [n]: o
                            }
                        });
                    } else if (typeof o === "boolean") {
                        r("addAnnotations")(e.annotations, {
                            bool: {
                                [n]: o
                            }
                        });
                    }
                });
            },
            addRequireDeferred: function(n, r) {
                const e = [];
                t((t)=>{
                    if (t.requireDeferreds[n] == null) {
                        const o = t.requireDeferreds[n] = {
                            start: r
                        };
                        e.push(o);
                    }
                });
                return function(t, n) {
                    e.forEach((e)=>{
                        e.end = t;
                        e.duration = t - r;
                        if (n) {
                            e.alreadyRequired = true;
                        }
                    });
                };
            },
            forEach: function(n) {
                t((e)=>{
                    n(e);
                });
            }
        };
        return n;
    };
    var f = {
        addFactoryTiming: function(t, n) {
            const e = u.get(t);
            if (e) {
                e.factoryTimings.push(n);
            }
        },
        addGlobalMetadata: function(t, n, o) {
            if (typeof o === "number") {
                r("addAnnotations")(d, {
                    int: {
                        [n]: o
                    }
                });
                f.addAnnotationInt(t, n, o);
            } else if (typeof o === "string") {
                r("addAnnotations")(d, {
                    string: {
                        [n]: o
                    }
                });
                f.addAnnotation(t, n, o);
            } else if (typeof o === "boolean") {
                r("addAnnotations")(d, {
                    bool: {
                        [n]: o
                    }
                });
                f.addAnnotationBoolean(t, n, o);
            }
        },
        addJoinId: function(t, n, o) {
            const e = c.get(t);
            if (e != null) {
                r("addJoinId")(e, n, o);
            }
        },
        addHeroBootload: function(t, n) {
            const e = u.get(t);
            if (e) {
                e.heroBootloads.push(n);
            }
        },
        addHeroRelay: function(t, n) {
            const e = u.get(t);
            if (e) {
                e.heroRelay.push(n);
            }
        },
        addHeroPendingPlaceholders: function(t, n) {
            const e = u.get(t);
            if (e) {
                e.pendingPlaceholders = e.pendingPlaceholders.concat(n);
            }
        },
        addHiddenTiming: function(t, n) {
            const e = u.get(t);
            if (e) {
                e.hiddenTimings = n;
            }
        },
        addImagePreloader: function(t, n, r) {
            const e = u.get(t);
            if (e) {
                e.imagePreloaderTimings[n] = r;
            }
        },
        addMarkerPoint: function(n, o, a, i = (e || (e = r("performanceNow")))(), l) {
            const t = u.get(n);
            if (t && i >= t.start) {
                t.markerPoints[o] = {
                    timestamp: i,
                    type: a
                };
                if (l) {
                    t.markerPoints[o].data = l;
                }
            }
        },
        addFirstMarkerPoint: function(t, n, r, o, a = {}) {
            const e = u.get(t);
            if (!e) {
                return false;
            }
            const i = e.markerPoints[n];
            if (o >= e.start && (!i || i.timestamp > o)) {
                e.markerPoints[n] = {
                    timestamp: o,
                    type: r
                };
                if (a != null) {
                    e.markerPoints[n].data = a;
                }
                return true;
            }
            return false;
        },
        addMetadata: function(t, n, o) {
            const e = u.get(t);
            if (e) {
                if (typeof o === "number") {
                    r("addAnnotations")(e.annotations, {
                        int: {
                            [n]: o
                        }
                    });
                } else if (typeof o === "string") {
                    r("addAnnotations")(e.annotations, {
                        string: {
                            [n]: o
                        }
                    });
                } else if (typeof o === "boolean") {
                    r("addAnnotations")(e.annotations, {
                        bool: {
                            [n]: o
                        }
                    });
                }
            }
        },
        addAnnotation: function(t, n, o) {
            const e = u.get(t);
            if (e) {
                r("addAnnotations")(e.annotations, {
                    string: {
                        [n]: o
                    }
                });
            }
        },
        addAnnotationInt: function(t, n, o) {
            const e = u.get(t);
            if (e) {
                r("addAnnotations")(e.annotations, {
                    int: {
                        [n]: o
                    }
                });
            }
        },
        addAnnotationDouble: function(t, n, o) {
            const e = u.get(t);
            if (e) {
                r("addAnnotations")(e.annotations, {
                    double: {
                        [n]: o
                    }
                });
            }
        },
        addAnnotationBoolean: function(t, n, o) {
            const e = u.get(t);
            if (e) {
                r("addAnnotations")(e.annotations, {
                    bool: {
                        [n]: o
                    }
                });
            }
        },
        addAnnotationStringArray: function(t, n, o) {
            const e = u.get(t);
            if (e) {
                r("addAnnotations")(e.annotations, {
                    string_array: {
                        [n]: o
                    }
                });
            }
        },
        addAnnotationIntArray: function(t, n, o) {
            const e = u.get(t);
            if (e) {
                r("addAnnotations")(e.annotations, {
                    int_array: {
                        [n]: o
                    }
                });
            }
        },
        addAnnotationDoubleArray: function(t, n, o) {
            const e = u.get(t);
            if (e) {
                r("addAnnotations")(e.annotations, {
                    double_array: {
                        [n]: o
                    }
                });
            }
        },
        addAnnotationBooleanArray: function(t, n, o) {
            const e = u.get(t);
            if (e) {
                r("addAnnotations")(e.annotations, {
                    bool_array: {
                        [n]: o
                    }
                });
            }
        },
        addOfflineTiming: function(t, n) {
            const e = u.get(t);
            if (e) {
                e.offlineTimings = n;
            }
        },
        addPayloadResource: function(t, n, r) {
            const e = u.get(t);
            if (e) {
                e.payloadResources[n] = r;
            }
        },
        addPayloadTiming: function(t, n, r) {
            const e = u.get(t);
            if (e) {
                e.payloadTimings[n] = r;
            }
        },
        addReactRender: function(t, n, r, o, actualDuration, baseDuration, l) {
            const e = u.get(t);
            if (e) {
                const s = {
                    actualDuration,
                    baseDuration,
                    duration: o - r,
                    end: o,
                    phase: l,
                    start: r
                };
                const c = e.reactRender[n];
                if (c) {
                    if (c.length < p) {
                        c.push(s);
                        e.commitSet.add(o);
                    }
                } else {
                    e.reactRender[n] = [
                        s
                    ];
                    e.commitSet.add(o);
                }
            }
        },
        addSubspan: function(t, n, r, o, a, i) {
            const e = u.get(t);
            if (e) {
                const l = {
                    data: i,
                    end: a,
                    start: o,
                    type: r
                };
                if (e.subSpans[n]) {
                    e.subSpans[n].push(l);
                } else {
                    e.subSpans[n] = [
                        l
                    ];
                }
            }
        },
        addMountPoint: function(t, n, r) {
            const e = `Mount_${r}`;
            f.addFirstMarkerPoint(t, e, "VisualCompletion", n);
        },
        addMountPointMetadata: function(t, n, r) {
            const e = f.get(t);
            const o = `Mount_${n}`;
            const a = e?.markerPoints[o];
            if (a) {
                const i = a.data || {};
                a.data = i;
                Object.keys(r).forEach((e)=>{
                    i[e] = r[e];
                });
            }
        },
        addTag: function(t, n, r) {
            const e = u.get(t);
            if (e) {
                if (!e.tagSet[n]) {
                    e.tagSet[n] = new Set;
                }
                e.tagSet[n].add(r);
            }
        },
        addTracedInteraction: function(t, n, r) {
            const e = {
                annotations: {
                    string: {},
                    int: {},
                    double: {},
                    bool: {},
                    string_array: {},
                    int_array: {},
                    double_array: {},
                    bool_array: {}
                },
                commitSet: new Set,
                factoryTimings: [],
                hasVcReport: false,
                heroBootloads: [],
                heroRelay: [],
                hiddenTimings: [],
                imagePreloaderTimings: {},
                markerPoints: {},
                navigationTiming: {},
                offlineTimings: [],
                payloadResources: {},
                payloadTimings: {},
                pendingPlaceholders: [],
                placeholderMap: {},
                reactRender: {},
                requireDeferreds: {},
                start: n,
                subSpans: {},
                tagSet: {},
                traceId: t,
                vcStateLog: null,
                vcMutationLog: null,
                wasCanceled: false,
                wasOffline: false
            };
            for(const o in d){
                for(const a in d[o]){
                    e.annotations[o][a] = d[o][a];
                }
            }
            u.set(t, e);
            c.set(t, e);
            s.set(t, r);
            m.interactionCount++;
            return e;
        },
        complete: function(n) {
            const t = u.get(n);
            if (t && t.completed == null) {
                r("addAnnotations")(t.annotations, {
                    int: {
                        endedByHeroComplete: 1
                    }
                });
                t.completed = (e || (e = r("performanceNow")))();
                const o = s.get(n);
                if (o) {
                    o(t);
                }
                s.delete(n);
                c.delete(n);
            }
        },
        currentInteractionLogger,
        dump: function() {
            const e = {};
            const t = Array.from(u.values());
            t.sort((e, t)=>e.start - t.start).forEach((t)=>{
                const t_traceId = t.traceId;
                const pendingPlaceholders = o("hero-tracing-placeholder").HeroPendingPlaceholderTracker.dump(t.traceId);
                e[t_traceId] = babelHelpers.extends({}, t, {
                    pendingPlaceholders,
                    e2e: t.completed != null ? ((t.completed - t.start) / 1000).toFixed(2) : "?"
                });
            });
            return e;
        },
        get: function(t) {
            return u.get(t);
        },
        markPlaceholderEnd: function(n, o, a, i = (e || (e = r("performanceNow")))()) {
            const t = u.get(n);
            if (t) {
                const l = t.placeholderMap;
                if (l[o]) {
                    l[o].forEach((e)=>{
                        if (e.endTime == null && a === e.description) {
                            e.endTime = i;
                        }
                    });
                }
            }
        },
        markPlaceholderStart: function(t, n, r, description, a) {
            const e = u.get(t);
            if (e) {
                const i = e.placeholderMap;
                const l = {
                    description,
                    startTime: r,
                    endTime: null,
                    spanType: a
                };
                if (i[n]) {
                    i[n].push(l);
                } else {
                    i[n] = [
                        l
                    ];
                }
            }
        },
        removeMarkerPoint: function(t, n) {
            const e = u.get(t);
            if (e) {
                delete e.markerPoints[n];
            }
        },
        setInteractionClass: function(t, n) {
            const e = u.get(t);
            if (e) {
                e.interactionClass = n;
            }
        },
        setInteractionType: function(t, n, r, o) {
            const e = u.get(t);
            if (e) {
                e.interactionClass = n;
                e.type = r;
                e.qplEvent = o;
            }
        },
        delete: function(t, n) {
            u.delete(t);
            if (n === true) {
                c.delete(t);
                s.delete(t);
            }
        },
        getInteractionStat: function() {
            return m;
        }
    };
    l.default = f;
}, 98);
__d("interaction-tracing-metrics", [
    "InteractionTracingMetricsCore"
], function(t, n, r, o, a, i, l) {
    "use strict";
    l.InteractionTracingMetricsCore = r("InteractionTracingMetricsCore");
}, 98);
__d("VisualCompletionTraceObserver", [], function(t, n, r, o, a, i) {
    "use strict";
    let e = [];
    let l = [];
    const s = {
        subscribe: function(n) {
            e.push(n);
        },
        subscribeStart: function(t) {
            l.push(t);
        },
        unsubscribe: function(n) {
            e = e.filter((e)=>e !== n);
        },
        unsubscribeStart: function(t) {
            l = l.filter((e)=>e !== t);
        },
        emit: function(n) {
            e.forEach((e)=>e(n));
        },
        emitStart: function(t) {
            l.forEach((e)=>e(t));
        }
    };
    i.default = s;
}, 66);
__d("IteratableElementWeakMap", [
    "WebAPIs"
], function(t, n, r, o, a, i, l) {
    "use strict";
    class e {
        constructor(){
            this.$1 = [];
            this.$2 = new (o("WebAPIs")).WeakMap;
            this.$3 = 0;
        }
        delete(t) {
            this.$2.delete(t);
            this.$1 = this.$1.filter((e)=>{
                const n = e.deref();
                return n !== t && n != null;
            });
        }
        set(t, n) {
            if (!this.$2.has(t)) {
                const e = new (o("WebAPIs")).WeakRef(t);
                this.$1.push(e);
                this.$2.set(t, n);
            }
            if (this.$3++ % 10 === 0) {
                this.$1 = this.$1.filter((e)=>{
                    const t = e.deref();
                    return t != null;
                });
            }
        }
        get(t) {
            return this.$2.get(t);
        }
        clear() {
            this.$1 = [];
            this.$2 = new (o("WebAPIs")).WeakMap;
        }
        has(t) {
            return this.$2.has(t);
        }
        size() {
            let e = 0;
            for (const t of this.$1){
                const n = t.deref();
                if (n != null) {
                    e++;
                }
            }
            return e;
        }
        *entries() {
            this.$1 = this.$1.filter((e)=>e.deref() != null);
            for (const e of this.$1){
                const t = e.deref();
                if (t) {
                    const n = this.$2.get(t);
                    if (n != null) {
                        const r = [
                            t,
                            n
                        ];
                        yield r;
                    }
                }
            }
        }
        *keys() {
            const e = this.entries();
            for (const [n, r] of e){
                yield n;
            }
        }
        *values() {
            const e = this.entries();
            for (const [n, r] of e){
                yield r;
            }
        }
        forEach(t, n) {
            const e = this.entries();
            for (const [o, a] of e){
                t.call(n, a, o, this);
            }
        }
    }
    l.default = e;
}, 98);
__d("IteratableElementWeakSet", [
    "WebAPIs"
], function(t, n, r, o, a, i, l) {
    "use strict";
    class e {
        constructor(){
            this.$1 = [];
            this.$2 = new (o("WebAPIs")).WeakSet;
            this.$3 = 0;
        }
        delete(t) {
            this.$2.delete(t);
            this.$1 = this.$1.filter((e)=>{
                const n = e.deref();
                return n !== t && n != null;
            });
        }
        add(t) {
            if (!this.$2.has(t)) {
                const e = new (o("WebAPIs")).WeakRef(t);
                this.$1.push(e);
                this.$2.add(t);
            }
            if (this.$3++ % 10 === 0) {
                this.$1 = this.$1.filter((e)=>{
                    const t = e.deref();
                    return t != null;
                });
            }
        }
        clear() {
            this.$1 = [];
            this.$2 = new (o("WebAPIs")).WeakSet;
        }
        has(t) {
            return this.$2.has(t);
        }
        size() {
            let e = 0;
            for (const t of this.$1){
                const n = t.deref();
                if (n != null) {
                    e++;
                }
            }
            return e;
        }
        *values() {
            this.$1 = this.$1.filter((e)=>e.deref() != null);
            for (const e of this.$1){
                const t = e.deref();
                if (t) {
                    yield t;
                }
            }
        }
        *keys() {
            yield* this.values();
        }
        *entries() {
            const e = this.values();
            for (const t of e){
                yield [
                    t,
                    t
                ];
            }
        }
        forEach(t, n) {
            const e = this.values();
            for (const r of e){
                t.call(n, r, r, this);
            }
        }
    }
    l.default = e;
}, 98);
__d("LoadingStateTracker", [
    "IteratableElementWeakMap",
    "IteratableElementWeakSet",
    "VisibilityAPI",
    "VisibilityState",
    "VisualCompletionUtil",
    "WebAPIs",
    "clearInterval",
    "performanceNow",
    "setInterval"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = (()=>{
        function t(e) {
            const t = this;
            this.$1 = new (r("IteratableElementWeakMap"));
            this.loadingStateObserver = null;
            this.$2 = [];
            this.pendingLoadingElements = new (r("IteratableElementWeakMap"));
            this.visibleLoadingElements = new (r("IteratableElementWeakSet"));
            this.$4 = 0;
            this.$5 = null;
            this.$6 = null;
            this.$7 = 0;
            this.loadingStateObserverCallback = function(e) {
                Array.from(e).forEach((e)=>{
                    if (o("WebAPIs").intersectionObserverEntryIsVisible(e)) {
                        t.loadingElementAdded(e.target);
                        t.$3.logLoadingElementStart(e.target, e.boundingClientRect, e.time);
                        t.visibleLoadingElements.add(e.target);
                        t.$3.addFirstMarkerPoint("loadingState_start", e.time);
                        t.$3.addFirstMarkerPoint("firstPaint", e.time, {
                            mutationType: "loadingState"
                        });
                    } else {
                        t.loadingElementRemoved(e.target);
                    }
                });
            };
            this.$3 = e;
            if (o("WebAPIs").IntersectionObserver) {
                this.loadingStateObserver = new (o("WebAPIs")).IntersectionObserver(this.loadingStateObserverCallback);
            }
        }
        const t_prototype = t.prototype;
        t_prototype.loadingElementRemoved = function(n) {
            const t = this.pendingLoadingElements.get(n);
            if (t != null) {
                const o = this.$3.stateLog.get(t);
                if (o != null) {
                    o[1] = (e || (e = r("performanceNow")))();
                }
                this.$3.logLoadingElementEnd(n, (e || (e = r("performanceNow")))());
                this.pendingLoadingElements.delete(n);
                if (this.visibleLoadingElements.has(n)) {
                    this.visibleLoadingElements.delete(n);
                    this.$3.addMarkerPoint("loadingState_end", (e || (e = r("performanceNow")))());
                }
                this.$3.attemptMeasurementFromLoadingStateTracker();
            }
        };
        t_prototype.loadingElementAdded = function(n) {
            if (!this.$3.reported) {
                const t = `loadingState_${this.$4++}`;
                this.pendingLoadingElements.set(n, t);
                this.$3.stateLog.set(t, [
                    (e || (e = r("performanceNow")))(),
                    -1
                ]);
                if (this.$3.config.enable_background_loading_state_polling === true && this.$5 == null && o("VisibilityAPI").isVisibilityHidden()) {
                    this.$8();
                }
            }
        };
        t_prototype.waitLoadingState = function(t) {
            const e = this;
            if (this.$3.reported) {
                return function() {};
            }
            const n = this.$1.get(t);
            if (n) {
                return function() {
                    n();
                    e.loadingElementRemoved(t);
                };
            }
            if (o("VisualCompletionUtil").shouldIgnoreMutation(t, this.$3)) {
                return function() {};
            }
            if (this.$3.config.bypass_detached_element === true && t.isConnected === false) {
                return function() {};
            }
            if (this.loadingStateObserver) {
                this.loadingStateObserver.observe(t);
            }
            if (o("VisibilityAPI").canUseVisibilityAPI && !o("VisibilityAPI").isVisibilityHidden() || o("VisualCompletionUtil").isInAboveTheFold(t, this.$3)) {
                this.loadingElementAdded(t);
            }
            const r = function() {
                if (e.loadingStateObserver) {
                    e.loadingStateObserver.unobserve(t);
                }
                e.$1.delete(t);
            };
            this.$1.set(t, r);
            return function() {
                r();
                e.loadingElementRemoved(t);
            };
        };
        t_prototype.hasLoadingStateUnmountCallback = function(t) {
            return this.$1.has(t);
        };
        t_prototype.forEachLoadingStateUnmountCallback = function(t) {
            this.$1.forEach(t);
        };
        t_prototype.clearLoadingStateUnmountCallbacks = function() {
            this.$1.clear();
        };
        t_prototype.addTailLoadLoadingStateObserver = function(t) {
            this.$2.push(t);
        };
        t_prototype.disconnectTailLoadLoadingStateObservers = function() {
            this.$2.forEach((e)=>{
                if (e) {
                    e.disconnect();
                }
            });
        };
        t_prototype.initBackgroundPolling = function() {
            const e = this;
            if (this.$3.config.enable_background_loading_state_polling === true && o("VisibilityAPI").canUseVisibilityAPI) {
                this.$6 = o("VisibilityState").subscribe(function(t, n) {
                    if (n) {
                        e.$8();
                    } else {
                        e.$9();
                    }
                });
                if (o("VisibilityAPI").isVisibilityHidden()) {
                    this.$8();
                }
            }
        };
        t_prototype.$8 = function() {
            const e = this;
            if (this.$5 == null) {
                const n = this.pendingLoadingElements.size();
                if (n !== 0) {
                    this.$7 = n;
                    this.$5 = r("setInterval")(function() {
                        e.$10();
                    }, t.BACKGROUND_POLLING_INTERVAL_MS);
                }
            }
        };
        t_prototype.$9 = function() {
            if (this.$5 != null) {
                r("clearInterval")(this.$5);
                this.$5 = null;
            }
        };
        t_prototype.$10 = function() {
            if (this.$3.reported) {
                this.$9();
                return;
            }
            const t = (e || (e = r("performanceNow")))();
            const n = [];
            let a = 0;
            for (const [l, s] of this.pendingLoadingElements.entries()){
                a++;
                if (l.isConnected === false) {
                    n.push({
                        element: l,
                        reason: "detached"
                    });
                    continue;
                }
                if (!o("VisualCompletionUtil").isInAboveTheFold(l, this.$3)) {
                    n.push({
                        element: l,
                        reason: "outside_viewport"
                    });
                }
            }
            for (const u of n){
                const { element, reason } = u;
                this.$3.addMarkerPoint(`bg_poll_loading_removed_${reason}`, t);
                this.loadingElementRemoved(element);
            }
            const m = this.pendingLoadingElements.size();
            if (m === 0 && this.$7 > 0 && a < this.$7) {
                this.$3.addMarkerPoint("bg_poll_loading_gc", t);
                this.$3.attemptMeasurementFromLoadingStateTracker();
            }
            this.$7 = m;
            if (m === 0) {
                this.$9();
            }
        };
        t_prototype.disconnect = function() {
            this.$9();
            if (this.$6 != null) {
                this.$6();
                this.$6 = null;
            }
            if (this.loadingStateObserver) {
                this.loadingStateObserver.disconnect();
            }
        };
        return t;
    })();
    s.BACKGROUND_POLLING_INTERVAL_MS = 200;
    l.default = s;
}, 98);
__d("CLS", [], function(t, n, r, o, a, i) {
    "use strict";
    const l = typeof window.PerformanceObserver?.supportedEntryTypes?.includes === "function" && window.PerformanceObserver.supportedEntryTypes.includes("layout-shift");
    function s() {
        if (!l) {
            return null;
        }
        let e = 0;
        let t = 0;
        let n = [];
        const r = new window.PerformanceObserver(function(r) {
            for (const o of r.getEntries()){
                if (!o.hadRecentInput) {
                    const a = n[0];
                    const i = n[n.length - 1];
                    if (t && o.startTime - i.startTime < 1000 && o.startTime - a.startTime < 5000) {
                        t += o.value;
                        n.push(o);
                    } else {
                        t = o.value;
                        n = [
                            o
                        ];
                    }
                    if (t > e) {
                        e = t;
                    }
                }
            }
        });
        r.observe({
            buffered: true,
            type: "layout-shift"
        });
        return function() {
            r.disconnect();
            return e;
        };
    }
    i.getCLSCallback = s;
}, 66);
__d("LCP", [], function(t, n, r, o, a, i) {
    "use strict";
    const l = typeof window.PerformanceObserver?.supportedEntryTypes?.includes === "function" && window.PerformanceObserver.supportedEntryTypes.includes("largest-contentful-paint");
    function s() {
        if (document == null) {
            return [];
        }
        return Array.from(document.querySelectorAll('link[rel="preload"][as="image"]')).map((e)=>e.attributes.getNamedItem("href")?.value);
    }
    let u = null;
    let c = null;
    function d() {
        if (!(u != null || !l)) {
            u = new window.PerformanceObserver(function(e) {
                for (const t of e.getEntries()){
                    c = t;
                }
            });
            u.observe({
                buffered: true,
                type: "largest-contentful-paint"
            });
        }
    }
    function m() {
        if (l) {
            d();
            return function() {
                if (c == null) {
                    return null;
                }
                return {
                    className: c.element?.className,
                    element: c.element?.tagName,
                    elementRef: c.element,
                    size: c.size,
                    timestamp: c.startTime,
                    url: c.url,
                    preloaded: s().includes(c?.url)
                };
            };
        }
        return null;
    }
    i.canUseLCP = l;
    i.getLCPCallback = m;
}, 66);
__d("LateMutationUtilities", [
    "VisualCompletionConstants",
    "WebAPIs",
    "addAnnotations"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    function s(e, t) {
        if (u(e)) {
            c(e, t);
            d(t);
            f(e, t);
            h(t);
            y(t);
            C(t);
        }
    }
    function u(e) {
        const t = e.interactionType === "INITIAL_LOAD";
        const n = e.markerPoints.has("ssr_paint");
        return t && n;
    }
    function c(e, t) {
        if (e.config.SSRInjectedElements != null) {
            m(e, t);
            return;
        }
        let n = null;
        t.pagelets.forEach((e)=>{
            if (e.name === "root") {
                n = e.mutationSeq;
            }
        });
        t.elements.forEach((t)=>{
            const t_pagelet = t.pagelet;
            if (t_pagelet != null && n != null && t.mutationSeq > n && t.type === "component") {
                if (e.config.onlyLogLateMutationAfterSSRPaint()) {
                    const i = e.markerPoints.get("ssr_paint")?.timestamp;
                    if (i != null && i < t.latency) {
                        if (_(t, e)) {
                            t_pagelet.data.hadLateMutationExpected = 1;
                            t.hadLateMutationExpected = true;
                        } else {
                            t_pagelet.data.hadLateMutationUnexpected = 1;
                            t.hadLateMutationUnexpected = true;
                        }
                    }
                } else {
                    if (_(t, e)) {
                        t_pagelet.data.hadLateMutationExpected = 1;
                        t.hadLateMutationExpected = true;
                    } else {
                        t_pagelet.data.hadLateMutationUnexpected = 1;
                        t.hadLateMutationUnexpected = true;
                    }
                }
                const l = o("WebAPIs").derefOnlyAttachedElement(t.element);
                if (l != null) {
                    p(e, t, l);
                }
            }
        });
    }
    function d(e) {
        for(let t = e.elements.length - 1; t >= 0; t--){
            const n = e.elements[t];
            if ((n.hadLateMutationExpected || n.hadLateMutationUnexpected) && n.reactStack != null) {
                const r = n.reactStack;
                const o = r.indexOf("HeroPagelet");
                if (o >= 0) {
                    r.splice(o);
                }
                n.reactStack = r;
            }
        }
    }
    function m(e, t) {
        const n = t.markerPoints.get("vcWithoutImage");
        const r = o("WebAPIs").derefOnlyAttachedElement(n?.element);
        const a = t.markerPoints.get("visuallyComplete");
        const i = o("WebAPIs").derefOnlyAttachedElement(a?.element);
        t.elements.forEach((t)=>{
            if (t.type === "component") {
                let l;
                let s = o("WebAPIs").derefOnlyAttachedElement(t.element);
                if (s == null || (l = e.config.SSRInjectedElements) != null && l.has(s)) {
                    return;
                }
                const u = s;
                let c = false;
                while(s != null){
                    let d;
                    if ((d = e.config.SSRInjectedElements) != null && d.has(s)) {
                        c = true;
                        break;
                    }
                    s = s.parentElement;
                }
                if (!c) {
                    return;
                }
                p(e, t, u);
                if (_(t, e)) {
                    t.hadLateMutationExpected = true;
                } else {
                    t.hadLateMutationUnexpected = true;
                    if (n != null && r === u) {
                        const m = n.data || {};
                        m.mutationType = "ssrLateMutationUnexpected";
                        n.data = m;
                    }
                    if (a != null && i === u) {
                        const f = a.data || {};
                        f.mutationType = "ssrLateMutationUnexpected";
                        a.data = f;
                    }
                }
            }
        });
    }
    function p(e, t, n) {
        const getReactComponentStackFromDOMElement = e.config.getReactComponentStackFromDOMElement;
        if (getReactComponentStackFromDOMElement && n != null) {
            const o = getReactComponentStackFromDOMElement(n);
            if (o != null) {
                t.reactStack = o;
            }
        }
    }
    function _(t, n) {
        for(let a = o("WebAPIs").derefOnlyAttachedElement(t.element); a;){
            if (a.getAttribute((e || (e = r("VisualCompletionConstants"))).ATTRIBUTE_NAME) === (e || (e = r("VisualCompletionConstants"))).IGNORE_LATE_MUTATION || n.lateMutationIgnoreElements.has(a)) {
                return true;
            }
            a = a.parentElement;
        }
        if (t.reactStack != null) {
            const i = t.reactStack;
            if (i.indexOf("CometDOMOnlyBoundary") >= 0 || i.indexOf("CometSSRSuspendOnServer") >= 0) {
                return true;
            }
        }
        return false;
    }
    function f(e, t) {
        const n = 10;
        let a = 0;
        let lmCountExpected = 0;
        let lmCountUnexpected = 0;
        for(let s = t.elements.length - 1; s >= 0; s--){
            const u = t.elements[s];
            if (u.hadLateMutationExpected || u.hadLateMutationUnexpected) {
                lmCountExpected += u.hadLateMutationExpected ? 1 : 0;
                lmCountUnexpected += u.hadLateMutationUnexpected ? 1 : 0;
                a = u.hadLateMutationExpected && lmCountExpected + lmCountUnexpected >= n ? 1 : 0;
            }
        }
        r("addAnnotations")(t.annotations, {
            int: {
                lmCountExpected,
                lmCountUnexpected
            },
            bool: {
                hadLateMutationExpected: lmCountExpected > 0,
                hadLateMutationUnexpected: lmCountUnexpected > 0
            }
        });
        const c = n - lmCountUnexpected - a;
        const d = [];
        let m = false;
        let p;
        let _ = false;
        let f = 1;
        lmCountExpected = 1;
        lmCountUnexpected = 1;
        for(let h = t.elements.length - 1; h >= 0; h--){
            const y = t.elements[h];
            if (y.hadLateMutationUnexpected || y.hadLateMutationExpected) {
                const markerPointData = {
                    hadLateMutationExpected: y.hadLateMutationExpected,
                    hadLateMutationUnexpected: y.hadLateMutationUnexpected,
                    mutationType: y.mutationType,
                    type: y.type,
                    height: y.rectangle.bottom - y.rectangle.top,
                    width: y.rectangle.right - y.rectangle.left
                };
                if (y.element) {
                    markerPointData.tagName = o("WebAPIs").derefOnlyAttachedElement(y.element)?.tagName;
                }
                if (y.pagelet) {
                    markerPointData.pagelet = y.pagelet.name;
                }
                if (!_ && y.hadLateMutationUnexpected) {
                    markerPointData.reactStack = y.reactStack;
                    _ = true;
                }
                p = {
                    markerPointData,
                    markerPointTitle: g(markerPointData, y.hadLateMutationUnexpected ? lmCountUnexpected : lmCountExpected),
                    element: y,
                    timestamp: y.latency
                };
                if (e.config.logLateMutationReactStack && y.reactStack != null && !m && y.hadLateMutationUnexpected) {
                    r("addAnnotations")(t.annotations, {
                        string: {
                            lateMutationStack: y.reactStack.join(","),
                            lateMutationPagelet: y.pagelet?.name
                        }
                    });
                    m = true;
                }
                if ((lmCountExpected <= c || y.hadLateMutationUnexpected) && f < n) {
                    if (y.hadLateMutationUnexpected) {
                        lmCountUnexpected++;
                    } else {
                        lmCountExpected++;
                    }
                    d.push(p);
                    f++;
                }
            }
        }
        if (p && f === n) {
            d.push(p);
        }
        const d_length = d.length;
        if (d_length > 1) {
            const R = d[d_length - 1];
            R.markerPointData.reactStack = R.element.reactStack;
        }
        d.forEach((e)=>t.markerPoints.set(e.markerPointTitle, {
                data: e.markerPointData,
                timestamp: e.timestamp
            }));
    }
    function g(markerPointData, t) {
        return `late_mutation/${markerPointData.hadLateMutationUnexpected ? "unexpected" : "expected"}_${t}`;
    }
    function h(e) {
        const n = e.markerPoints.get("vcWithoutImage");
        let ssrLateMutationCost = 0;
        if (n?.data?.mutationType === "ssrLateMutationUnexpected") {
            let i = Number.MIN_SAFE_INTEGER;
            const l = e.markerPoints.get("ssr_paint")?.timestamp;
            if (l != null && l < e.vcWithoutImage) {
                i = Math.max(i, l);
            }
            e.elements.forEach((e)=>{
                if (e.type === "component" && e.hadLateMutationUnexpected !== true) {
                    i = Math.max(i, e.latency);
                }
            });
            if (i !== Number.MIN_SAFE_INTEGER) {
                ssrLateMutationCost = e.vcWithoutImage - i;
            }
        }
        r("addAnnotations")(e.annotations, {
            int: {
                ssrLateMutationCost
            }
        });
    }
    function y(e) {
        const t = e.pagelets.reduce((acc, pagelet)=>{
            if ("firstPaint" in pagelet.points) {
                return Math.min(acc, pagelet.points.firstPaint);
            }
            return acc;
        }, Number.MAX_SAFE_INTEGER);
        if (t !== Number.MAX_SAFE_INTEGER) {
            r("addAnnotations")(e.annotations, {
                int: {
                    progressiveRenderCost: e.vcWithoutImage - t
                }
            });
        }
    }
    function C(e) {
        const t = e.pagelets.reduce((acc, pagelet)=>{
            if ("firstPaint" in pagelet.points && pagelet.data.lateMutation) {
                return Math.min(acc, pagelet.points.firstPaint);
            }
            return acc;
        }, Number.MAX_SAFE_INTEGER);
        const n = e.pagelets.reduce((acc, pagelet)=>{
            if ("vcWithoutImage" in pagelet.points && pagelet.data.lateMutation) {
                return Math.max(acc, pagelet.points.vcWithoutImage);
            }
            return acc;
        }, Number.MIN_SAFE_INTEGER);
        if (t !== Number.MAX_SAFE_INTEGER && n !== Number.MIN_SAFE_INTEGER) {
            r("addAnnotations")(e.annotations, {
                int: {
                    SsrPageletLmCost: n - t
                }
            });
        }
    }
    l.logLateMutationData = s;
    l.logLateMutationMarkerPoints = f;
}, 98);
__d("ResourceDownloadLogger", [
    "performance"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = {
        JS: "js",
        CSS: "css",
        IMG: "img",
        TRANSLATIONS: "translations"
    };
    function u(name) {
        const t = name.indexOf("?");
        if (t === -1) {
            return name;
        }
        return name.substring(0, t);
    }
    function c(initiatorType, t) {
        const n = t.substring(t.lastIndexOf(".") + 1);
        switch(n){
            case "js":
                if (t.includes("rsrc-translations.php")) {
                    return s.TRANSLATIONS;
                }
                return s.JS;
            case "css":
                return s.CSS;
            default:
                return initiatorType;
        }
    }
    function d() {
        return Object.keys(s).reduce((acc, key)=>{
            const n = s[key];
            acc[n] = {
                cacheCount: 0,
                cacheRate: 0,
                encodedBodySize: 0,
                decodedBodySize: 0,
                totalCount: 0,
                transferSize: 0
            };
            return acc;
        }, {});
    }
    function m(t, n) {
        if (typeof (e || (e = r("performance"))).getEntriesByType !== "function") {
            return new Map;
        }
        const o = d();
        const a = (e || (e = r("performance"))).getEntriesByType("resource").filter((e)=>e.startTime >= t && e.startTime <= n).map((e)=>({
                encodedBodySize: e.encodedBodySize,
                decodedBodySize: e.decodedBodySize,
                transferSize: e.transferSize,
                type: c(e.initiatorType, u(e.name))
            })).filter((e)=>o[e.type]);
        a.forEach((e)=>{
            const t = o[e.type];
            t.encodedBodySize += e.encodedBodySize;
            t.decodedBodySize += e.decodedBodySize;
            t.transferSize += e.transferSize;
            t.totalCount++;
            if (e.transferSize === 0) {
                t.cacheCount++;
            }
        });
        const i = new Map;
        for(const l in o){
            const s = o[l];
            if (s.totalCount > 0) {
                s.cacheRate = Math.round(s.cacheCount / s.totalCount * 100);
            }
            for(const m in s){
                i.set(`${l}_${m}`, s[m]);
            }
        }
        return i;
    }
    l.default = m;
}, 98);
__d("VisualCompletionLogger", [
    "CLS",
    "IteratableElementWeakMap",
    "IteratableElementWeakSet",
    "LCP",
    "LateMutationUtilities",
    "ReactStackUtils",
    "ResourceDownloadLogger",
    "ResourceTimingAPI",
    "VisibilityState",
    "VisualCompletionConstants",
    "VisualCompletionTraceObserver",
    "VisualCompletionUtil",
    "VisualCompletionUtilCommon",
    "WebAPIs",
    "addAnnotations",
    "performanceNow"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = "manualVCPointCandidate";
    const c = "firstContentfulPaintInHTRoot";
    const d = "largestContentfulPaintInHTRoot";
    let m = 1;
    function p() {
        return {
            bottom: 0,
            left: 0,
            right: 0,
            top: 0
        };
    }
    function _(paint, element) {
        const e_rectangle = paint.rectangle;
        return {
            data: {
                height: Math.floor(e_rectangle.bottom - e_rectangle.top),
                mutationType: paint.mutationType,
                pixels: paint.pixels,
                tagName: o("VisualCompletionUtil").getTagName(element),
                type: paint.type,
                veid: paint.veid,
                width: Math.floor(e_rectangle.right - e_rectangle.left),
                x: Math.floor(e_rectangle.left),
                y: Math.floor(e_rectangle.top)
            },
            element: paint.element,
            timestamp: paint.timestamp
        };
    }
    class f {
        constructor(e, t, n, a, i){
            var l;
            this.bgCheckCount = 0;
            this.$8 = 0;
            this.$9 = 0;
            this.cssBgScanOverhead = 0;
            this.mutationProcessingOverhead = 0;
            this.trackedImages = new WeakSet;
            this.initialScrollY = 0;
            this.scrolledVC = 0;
            this.reported = false;
            this.measureOriginalViewport = true;
            this.mutationRoots = new (r("IteratableElementWeakSet"));
            this.mutatedElementCount = 0;
            this.lateMutationIgnoreElements = new WeakSet;
            this.config = i;
            this.$3 = new (l = r("IteratableElementWeakMap"));
            this.$6 = new l;
            this.$4 = new l;
            this.$5 = [];
            this.$1 = [];
            this.$2 = [];
            this.cssBgElements = new l;
            this.visualChangeRecordList = [];
            this.$10 = new (r("IteratableElementWeakSet"));
            this.startTime = e;
            this.$7 = {
                height: 0,
                width: 0
            };
            this.initialScrollY = a === "INITIAL_LOAD" ? 0 : o("VisualCompletionUtil").getScrollPosition(this).scrollY;
            this.$11 = this.initialScrollY;
            this.currentScrollY = this.initialScrollY;
            this.navSequence = t;
            this.traceID = n;
            this.markerPoints = new Map;
            this.stateLog = new Map;
            this.annotations = {
                string: {},
                int: {},
                double: {},
                bool: {},
                string_array: {},
                int_array: {},
                double_array: {},
                bool_array: {}
            };
            this.tagSet = new Map;
            this.navDone = false;
            this.interactionType = a;
            this.scrolled = false;
            this.$12 = o("CLS").getCLSCallback();
            if (a === "INITIAL_LOAD") {
                this.$13 = o("LCP").getLCPCallback();
            }
            r("VisualCompletionTraceObserver").emitStart(a);
        }
        addAnnotation(t, n) {
            r("addAnnotations")(this.annotations, {
                string: {
                    [t]: n
                }
            });
        }
        addAnnotationInt(t, n) {
            r("addAnnotations")(this.annotations, {
                int: {
                    [t]: n
                }
            });
        }
        addAnnotationDouble(t, n) {
            r("addAnnotations")(this.annotations, {
                double: {
                    [t]: n
                }
            });
        }
        addAnnotationBoolean(t, n) {
            r("addAnnotations")(this.annotations, {
                bool: {
                    [t]: n
                }
            });
        }
        addAnnotationIntArray(t, n) {
            r("addAnnotations")(this.annotations, {
                int_array: {
                    [t]: n
                }
            });
        }
        addAnnotationDoubleArray(t, n) {
            r("addAnnotations")(this.annotations, {
                double_array: {
                    [t]: n
                }
            });
        }
        addAnnotationStringArray(t, n) {
            r("addAnnotations")(this.annotations, {
                string_array: {
                    [t]: n
                }
            });
        }
        addAnnotationBooleanArray(t, n) {
            r("addAnnotations")(this.annotations, {
                bool_array: {
                    [t]: n
                }
            });
        }
        addFirstMarkerPoint(t, n, r = {}) {
            const e = this.markerPoints.get(t);
            if (n >= this.startTime && (!e || e.timestamp > n)) {
                this.markerPoints.set(t, {
                    data: r,
                    timestamp: n
                });
            }
        }
        addMarkerPoint(t, n, r = {}) {
            if (n >= this.startTime) {
                this.markerPoints.set(t, {
                    data: r,
                    timestamp: n
                });
            }
        }
        addVCPointCandidate(t, n = {}) {
            this.addMarkerPoint(u, t, n);
        }
        addVisualElement(mutationSeq, n, r, a, paintTime, l, rectAtMutation, imgLoadStart, imgLoadEnd) {
            if (this.scrolled) {
                this.currentScrollY = o("VisualCompletionUtil").getScrollPosition(this).scrollY;
                this.scrolled = false;
            }
            let visibleAtMutation = l;
            if (l === true && rectAtMutation != null && (rectAtMutation.bottom === rectAtMutation.top || rectAtMutation.left === rectAtMutation.right)) {
                visibleAtMutation = false;
            }
            const d = {
                element: new (o("WebAPIs")).WeakRef(n),
                record: {
                    detached: false,
                    imgLoadEnd,
                    imgLoadStart,
                    isMediaVCElement: false,
                    mutationSeq,
                    mutationTime: a,
                    mutationType: r,
                    paintTime,
                    rectAtMutation,
                    scrollY: this.currentScrollY,
                    veid: m++,
                    visibleAtMutation,
                    visibleAtTraceEnd: false
                }
            };
            o("VisualCompletionUtil").getImageNaturalSize(n, d);
            this.visualChangeRecordList.push(d);
        }
        logLoadingElementStart(t, n, r) {
            this.$4.set(t, {
                start: r,
                rectangle: o("VisualCompletionUtilCommon").castToRect(n)
            });
        }
        logLoadingElementEnd(t, n) {
            const e = this.$4.get(t);
            if (e) {
                this.$5.push(babelHelpers.extends({}, e, {
                    end: n
                }));
                this.$4.delete(t);
            }
        }
        trackPagelet(t, n, r, a, pageletTypeName) {
            this.$6.set(t, {
                data: {},
                element: new (o("WebAPIs")).WeakRef(t),
                mutationSeq: 0,
                name: n,
                pageletTypeName,
                points: {
                    hydration: r - this.startTime
                },
                vcCallback: a
            });
        }
        addTag(t, n) {
            if (!this.tagSet.has(t)) {
                this.tagSet.set(t, new Set);
            }
            const e = this.tagSet.get(t);
            if (e) {
                e.add(n);
            }
        }
        checkViewport() {
            this.$7 = o("VisualCompletionUtil").getViewportSize(this);
        }
        calculate(n = false) {
            const t = this;
            this.checkViewport();
            const a = (e || (e = r("performanceNow")))();
            this.$9 = 0;
            this.initTree();
            if (!n && o("ResourceTimingAPI").canUseResourceTimingAPI()) {
                this.getBackgroundImages();
            }
            this.calculatePaintedPixels();
            const i = {
                annotations: this.annotations,
                cssBgScanOverhead: this.cssBgScanOverhead,
                bgChecked: this.bgCheckCount,
                bgNum: 0,
                bgPixels: 0,
                vcCalculationOverhead: 0,
                mutationProcessingOverhead: this.mutationProcessingOverhead,
                compNum: 0,
                compPixels: 0,
                cssBgElements: Array.from(this.cssBgElements.values()),
                elements: this.$2,
                finalScrollY: this.$11,
                imgNum: 0,
                imgPixels: 0,
                initialScrollY: this.initialScrollY,
                interactionType: this.interactionType,
                loadingElements: this.$5,
                markerPoints: this.markerPoints,
                navComplete: e(),
                navSequence: this.navSequence,
                pagelets: Array.from(this.$6.values()),
                paintedPixels: this.$9,
                scrollY: o("VisualCompletionUtil").getScrollPosition(this).scrollY,
                scrolledVC: this.scrolledVC,
                speedIndex: 0,
                startTime: this.startTime,
                tagSet: this.tagSet,
                totalPixels: this.$8,
                traceId: this.traceID,
                tracePolicy: this.tracePolicy,
                stateLog: this.stateLog,
                vcWithoutImage: 0,
                viewport: this.$7,
                visuallyComplete: 0
            };
            r("addAnnotations")(this.annotations, {
                int: {
                    mutationRootCount: this.mutationRoots.size(),
                    mutatedElementCount: this.mutatedElementCount,
                    visualChangeRecordCount: this.visualChangeRecordList.length,
                    paintedElementCount: this.$2.length
                }
            });
            let l = null;
            let s = null;
            if (this.$2.length) {
                this.addMarkerPoint("FP", this.$2[this.$2.length - 1].timestamp);
                this.$2.forEach((paint)=>{
                    const n = o("WebAPIs").derefOnlyAttachedElement(paint.element);
                    if (n) {
                        if (t.config.log_contentful_paint_in_ht_root === true && paint.pixels > 0 && t.isOutsideLoadingStateInHTRoot(n)) {
                            if (l == null || paint.timestamp < l.paint.timestamp) {
                                l = {
                                    element: n,
                                    paint
                                };
                            }
                            if (s == null || paint.pixels > s.paint.pixels || paint.pixels === s.paint.pixels && paint.timestamp > s.paint.timestamp) {
                                s = {
                                    element: n,
                                    paint
                                };
                            }
                        }
                        const r = paint.pagelet;
                        if (i.vcWithoutImage === 0 && paint.type === "component") {
                            const a = {
                                height: Math.floor(paint.rectangle.bottom - paint.rectangle.top),
                                mutationType: paint.mutationType,
                                tagName: o("VisualCompletionUtil").getTagName(n),
                                type: paint.type,
                                width: Math.floor(paint.rectangle.right - paint.rectangle.left),
                                x: Math.floor(paint.rectangle.left),
                                y: Math.floor(paint.rectangle.top)
                            };
                            if (r) {
                                a.pagelet = r.name;
                            }
                            i.vcWithoutImage = paint.latency;
                            i.markerPoints.set("vcWithoutImage", {
                                data: a,
                                element: new (o("WebAPIs")).WeakRef(n),
                                timestamp: paint.latency + t.startTime
                            });
                            i.markerPoints.set("lastMutationBeforeVC", {
                                element: new (o("WebAPIs")).WeakRef(n),
                                timestamp: paint.mutationTimestamp
                            });
                        }
                        if (i.visuallyComplete === 0) {
                            const u = {
                                height: Math.floor(paint.rectangle.bottom - paint.rectangle.top),
                                mutationType: paint.mutationType,
                                tagName: o("VisualCompletionUtil").getTagName(n),
                                type: paint.type,
                                width: Math.floor(paint.rectangle.right - paint.rectangle.left),
                                x: Math.floor(paint.rectangle.left),
                                y: Math.floor(paint.rectangle.top)
                            };
                            if (r) {
                                u.pagelet = r.name;
                            }
                            i.visuallyComplete = paint.latency;
                            i.markerPoints.set("visuallyComplete", {
                                data: u,
                                element: new (o("WebAPIs")).WeakRef(n),
                                timestamp: paint.latency + t.startTime
                            });
                            i.scrollY = paint.scrollY;
                        }
                        i.speedIndex += paint.pixels / t.$9 * paint.latency;
                        switch(paint.type){
                            case "component":
                                i.compNum++;
                                i.compPixels += paint.pixels;
                                break;
                            case "img":
                                i.imgNum++;
                                i.imgPixels += paint.pixels;
                                break;
                            case "bg":
                                i.bgNum++;
                                i.bgPixels += paint.pixels;
                                break;
                        }
                    }
                });
            }
            if (l != null) {
                i.markerPoints.set(c, _(l.paint, l.element));
            }
            if (s != null) {
                i.markerPoints.set(d, _(s.paint, s.element));
            }
            this.logPagelets();
            this.logPixelProgress();
            if (n) {
                i.visuallyComplete = i.vcWithoutImage = (e || (e = r("performanceNow")))() - this.startTime;
                i.markerPoints.set("visuallyComplete", {
                    data: {},
                    timestamp: i.visuallyComplete + this.startTime
                });
                i.markerPoints.set("vcWithoutImage", {
                    data: {},
                    timestamp: i.vcWithoutImage + this.startTime
                });
            }
            const u = e();
            i.vcCalculationOverhead = u - a;
            this.setupMetaData(i);
            this.logCssBgElementsMetaData();
            this.reported = true;
            const vcMetaDataLoggingLatency = e() - u;
            r("addAnnotations")(i.annotations, {
                double: {
                    vcMetaDataLoggingLatency,
                    vcTotalLoggingOverhead: vcMetaDataLoggingLatency + i.cssBgScanOverhead + i.mutationProcessingOverhead + i.vcCalculationOverhead
                }
            });
            return i;
        }
        isOutsideLoadingStateInHTRoot(t) {
            return o("VisualCompletionUtil").isOutsideLoadingStateInHTRoot(t, this);
        }
        cleanupPaintedElements() {
            const e = new Set;
            for(const t = [].concat(this.$2); t.length > 0;){
                const n = t.pop();
                if (!e.has(n)) {
                    e.add(n);
                    delete n.element;
                    t.push(...n.children);
                }
            }
        }
        tearDown() {
            this.$3.clear();
            this.$1 = [];
            this.visualChangeRecordList = [];
            this.$10.clear();
            if (!this.config.enableInstrumentationCorrectnessLogging) {
                this.mutationRoots.clear();
            }
            this.$4.clear();
            this.$5 = [];
            if (!this.config.retain_element_reference) {
                this.cleanupPaintedElements();
                this.cssBgElements.forEach((e)=>{
                    delete e.element;
                });
                this.$6.forEach((e)=>{
                    delete e.element;
                });
            }
            this.$6.clear();
            this.markerPoints.forEach((e)=>{
                delete e.element;
            });
            this.cssBgElements.clear();
        }
        findPagelet(t) {
            for(let e = t; e;){
                if (this.$6.has(e)) {
                    return this.$6.get(e);
                }
                e = e.parentElement;
            }
            return null;
        }
        findParent(t) {
            for(let e = t.parentElement; e;){
                if (this.$3.has(e)) {
                    return this.$3.get(e);
                }
                e = e.parentElement;
            }
            return null;
        }
        checkExcluded(t) {
            for(let e = t; e;){
                if (this.$10.has(e)) {
                    return true;
                }
                if (this.$3.has(e) || this.mutationRoots.has(e)) {
                    return false;
                }
                if (o("VisualCompletionUtil").checkDOMElementAttributeValue(e, (s || (s = r("VisualCompletionConstants"))).IGNORE)) {
                    return true;
                }
                e = e.parentElement;
            }
            return false;
        }
        getBackgroundImages() {
            const e = this;
            this.cssBgElements.forEach((t)=>{
                if (t.element) {
                    const a = o("WebAPIs").derefOnlyAttachedElement(t.element);
                    if (!a) {
                        return;
                    }
                    const parent = e.findParent(a);
                    if (!parent) {
                        return;
                    }
                    const l = o("VisualCompletionUtil").offsetTop(a, e);
                    const s = e.getRelativeBoundingClientRect(a, e.measureOriginalViewport ? l : undefined);
                    const u = o("VisualCompletionUtilCommon").getRectIntersection(s, parent.rectangle);
                    const pixels = o("VisualCompletionUtilCommon").getPixels(u);
                    if (pixels === 0 || e.measureOriginalViewport && l > e.$7.height) {
                        return;
                    }
                    if (t.resourceTiming?.responseEnd == null) {
                        t.resourceTiming = o("ResourceTimingAPI").getResourceTiming(t.url);
                    }
                    if (t.resourceTiming?.responseEnd != null) {
                        const d = t.resourceTiming;
                        const p = d.responseEnd;
                        const _ = e.findPagelet(a);
                        if (d.startTime >= e.startTime && p > parent.timestamp) {
                            const f = {
                                children: [],
                                element: new (o("WebAPIs")).WeakRef(a),
                                hadLateMutationExpected: false,
                                hadLateMutationUnexpected: false,
                                latency: p - e.startTime,
                                mutationSeq: parent.mutationSeq,
                                mutationType: "bg",
                                mutationTimestamp: parent.mutationTimestamp,
                                offsetTop: l,
                                pagelet: _,
                                parent,
                                pixels,
                                rectangle: u,
                                scrollY: parent.scrollY,
                                timestamp: p,
                                type: "bg",
                                veid: String(m++)
                            };
                            parent.children.push(f);
                            e.$3.set(a, f);
                            e.$2.push(f);
                        }
                    }
                }
            });
        }
        getRelativeBoundingClientRect(t, n) {
            const r = o("VisualCompletionUtil").getMeasuredRect(t) ?? p();
            return {
                bottom: n != null ? n + (r.bottom - r.top) : r.bottom,
                left: r.left,
                right: r.right,
                top: n ?? r.top
            };
        }
        findFirstVisibleChild(t) {
            const e = this;
            let a;
            for(var n = [
                t
            ], r = ()=>{
                let t = [];
                let r = 0;
                let v;
                n.forEach((n)=>{
                    const i = o("VisualCompletionUtil").getMeasuredRect(n);
                    if (i != null) {
                        const l = o("VisualCompletionUtilCommon").getPixels(i);
                        if (!(l > 0 && (i.bottom <= 0 || i.right <= 0 || i.left >= e.$7.width || i.top >= e.$7.height))) {
                            if (l > r && !e.checkExcluded(n)) {
                                r = l;
                                v = n;
                            }
                            if (n.children != null) {
                                t = t.concat(Array.from(n.children));
                            }
                        }
                    }
                });
                if (r > 0 && v) {
                    return {
                        v
                    };
                }
                n = t;
            }; n && n.length;){
                a = r();
                if (a) {
                    return a.v;
                }
            }
            return null;
        }
        getRectangle(t, n) {
            const e = this.findFirstVisibleChild(t);
            if (e == null) {
                return p();
            }
            const r = this.getRelativeBoundingClientRect(e);
            const { bottom, left, right, top } = r;
            const u = {
                bottom,
                left,
                right,
                top
            };
            return o("VisualCompletionUtilCommon").getRectIntersection(u, n);
        }
        excludeElement(t) {
            this.$10.add(t);
        }
        initTree() {
            const e = this;
            const t = {
                bottom: this.$7.height,
                left: 0,
                right: this.$7.width,
                top: -this.initialScrollY
            };
            this.visualChangeRecordList = this.visualChangeRecordList.sort((e, t)=>e.record.paintTime - t.record.paintTime);
            o("VisualCompletionUtil").processMediaVCImage(this);
            this.visualChangeRecordList.forEach(({ element, record })=>{
                const i = o("WebAPIs").derefOnlyAttachedElement(element);
                if (i == null) {
                    record.detached = true;
                    record.finalState = "detached";
                    return;
                }
                let l = i;
                let s = o("VisualCompletionUtil").offsetTop(i, e);
                record.offsetTop = s;
                let u = e.getRelativeBoundingClientRect(i, e.measureOriginalViewport ? s : undefined);
                record.rectAtTraceEnd = u;
                if (record.visibleAtMutation === false) {
                    if (e.config.useIntersectionObserverForVisibility === true) {
                        return;
                    }
                    l = e.findFirstVisibleChild(i);
                }
                if (l == null) {
                    record.finalState = u.bottom - u.top > 0 && u.right - u.left > 0 ? "offscreen" : "invisible";
                    return;
                }
                if (l !== i) {
                    record.nonEmptyChildFound = true;
                    s = o("VisualCompletionUtil").offsetTop(l, e);
                    record.offsetTop = s;
                    u = e.getRelativeBoundingClientRect(l, e.measureOriginalViewport ? s : undefined);
                    record.rectAtTraceEnd = u;
                }
                if (e.inAboveTheFold(l)) {
                    const c = o("VisualCompletionUtilCommon").getRectIntersection(u, t);
                    if (record.paintTime - e.startTime > e.scrolledVC) {
                        e.scrolledVC = record.paintTime - e.startTime;
                        e.$11 = record.scrollY;
                    }
                    if (e.measureOriginalViewport && s > e.$7.height) {
                        record.finalState = "offscreen";
                        return;
                    }
                    const d = e.findPagelet(l);
                    const m = {
                        children: [],
                        element: new (o("WebAPIs")).WeakRef(l),
                        hadLateMutationExpected: false,
                        hadLateMutationUnexpected: false,
                        imgLoadStart: record.imgLoadStart != null ? record.imgLoadStart - e.startTime : undefined,
                        latency: record.paintTime - e.startTime,
                        mutationSeq: record.mutationSeq,
                        mutationType: record.mutationType,
                        mutationTimestamp: record.mutationTime,
                        offsetTop: s,
                        pagelet: d,
                        parent: null,
                        pixels: o("VisualCompletionUtilCommon").getPixels(c),
                        rectangle: c,
                        scrollY: record.scrollY,
                        timestamp: record.paintTime,
                        type: record.mutationType === "imgLoad" || record.mutationType === "mutationImageAttribute" ? "img" : "component",
                        veid: String(record.veid)
                    };
                    record.visibleAtTraceEnd = true;
                    record.finalState = "visible";
                    e.$3.set(l, m);
                }
            });
            this.$3.forEach((t)=>{
                const n = o("WebAPIs").derefOnlyAttachedElement(t.element);
                if (n) {
                    const r = e.findParent(n);
                    if (r) {
                        if (t.type !== "component") {
                            t.scrollY = r.scrollY;
                        }
                        r.children.push(t);
                        t.parent = r;
                    } else {
                        e.$1.push(t);
                    }
                }
            });
            this.$3.forEach((t, n)=>{
                for(let r = t.parent; r;){
                    if (t.timestamp < r.timestamp) {
                        e.$3.delete(n);
                        return;
                    }
                    r = r.parent;
                }
                e.$2.push(t);
            });
        }
        logPixelProgress() {
            const e = this;
            const t = new Map([
                [
                    "vc98",
                    0.02
                ],
                [
                    "vc95",
                    0.05
                ]
            ]);
            let n = 0;
            let r = 0;
            for(var o = ()=>{
                const o = e.$2[a];
                n += o.pixels;
                if (t.size === 0) {
                    return 1;
                }
                t.forEach((t, r)=>{
                    if (!e.markerPoints.has(r) && n / e.$9 >= t) {
                        e.addMarkerPoint(r, o.latency + e.startTime);
                    }
                });
                if (o.type === "component") {
                    r += o.pixels;
                    o.children.forEach((e)=>{
                        if (e.type !== "component") {
                            r += e.pixels;
                        }
                    });
                    t.forEach((n, a)=>{
                        if (!e.markerPoints.has(`${a}WithoutImage`) && r / e.$9 >= n) {
                            e.addMarkerPoint(`${a}WithoutImage`, o.latency + e.startTime);
                            t.delete(a);
                        }
                    });
                }
            }, a = 0; a < this.$2.length && !o(); a++);
        }
        logPagelets() {
            const e = this;
            this.$6.forEach((t, n)=>{
                if (!e.inViewport(n)) {
                    if (t.vcCallback != null) {
                        t.vcCallback(null, null, t.data);
                    }
                    e.$6.delete(n);
                    return;
                }
                const r = e.$3.has(n) ? e.$3.get(n) : e.findParent(n);
                const a = o("WebAPIs").derefOnlyAttachedElement(t.element);
                if (a != null && e.config.log_pagelet_size === true) {
                    const i = e.getRelativeBoundingClientRect(a);
                    t.data.height = Math.floor(i.bottom - i.top);
                    t.data.width = Math.floor(i.right - i.left);
                }
                if (r) {
                    const l = r.latency + e.startTime;
                    t.points.firstPaint = l;
                    t.points.visuallyComplete = l;
                    t.points.vcWithoutImage = l;
                    t.mutationSeq = r.mutationSeq;
                }
            });
            this.$2.forEach((t)=>{
                for(let n = t.pagelet; n != null;){
                    const a = t.latency + e.startTime;
                    n.points.visuallyComplete = Math.max(n.points.visuallyComplete ?? 0, a);
                    if (t.type === "component") {
                        n.points.vcWithoutImage = Math.max(n.points.vcWithoutImage ?? 0, a);
                    }
                    const l = o("WebAPIs").derefOnlyAttachedElement(n.element);
                    n = l?.parentElement != null ? e.findPagelet(l?.parentElement) : null;
                }
            });
            this.$6.forEach((t)=>{
                if (t.points.visuallyComplete != null && t.pageletTypeName != null && t.pageletTypeName !== "") {
                    e.markerPoints.set(`${t.pageletTypeName}VC`, {
                        timestamp: t.points.visuallyComplete
                    });
                }
                if (t.points.vcWithoutImage != null) {
                    e.markerPoints.set(`VC_${t.name}`, {
                        data: t.data,
                        timestamp: t.points.vcWithoutImage
                    });
                }
                if (t.vcCallback != null && t.points.visuallyComplete != null && t.points.vcWithoutImage != null) {
                    t.vcCallback(t.points.visuallyComplete, t.points.vcWithoutImage, t.data);
                }
                if (!e.config.retain_element_reference) {
                    delete t.element;
                }
            });
        }
        calculatePaintedPixels() {
            const e = this;
            this.$2 = this.$2.sort((e, t)=>t.latency - e.latency);
            this.$2.forEach((t)=>{
                let t_pixels = t.pixels;
                for(var r = t.parent; r;){
                    t.rectangle = o("VisualCompletionUtilCommon").getRectIntersection(t.rectangle, r.rectangle);
                    t.pixels = o("VisualCompletionUtilCommon").getPixels(t.rectangle);
                    t_pixels = Math.min(t_pixels, t.pixels, r.pixels);
                    r = r.parent;
                }
                t.pixels = t_pixels;
                for(r = t.parent; r;){
                    r.pixels -= t_pixels;
                    r = r.parent;
                }
                e.$9 += t_pixels;
            });
            this.$8 = this.$9;
        }
        inAboveTheFold(t) {
            const e = o("VisualCompletionUtil").getViewportSize(this);
            const n = o("VisualCompletionUtilCommon").getPixels(this.getRectangle(t, {
                bottom: e.height,
                left: 0,
                right: e.width,
                top: -o("VisualCompletionUtil").getScrollPosition(this).scrollY
            }));
            return n > 0;
        }
        inOriginalViewport(t) {
            return this.inAboveTheFold(t) && o("VisualCompletionUtil").offsetTop(t, this) <= this.$7.height;
        }
        inViewport(t) {
            if (this.measureOriginalViewport) {
                return this.inOriginalViewport(t);
            }
            return this.inAboveTheFold(t);
        }
        setInitialScrollY(t) {
            this.initialScrollY = t;
            this.currentScrollY = t;
        }
        setTracePolicy(t) {
            this.tracePolicy = t;
        }
        setupMetaData(t) {
            const e = this;
            const n = this.markerPoints.get(u);
            if (n && n.timestamp > t.visuallyComplete + t.startTime) {
                t.visuallyComplete = n.timestamp - t.startTime;
                this.markerPoints.set("visuallyComplete", n);
                r("addAnnotations")(t.annotations, {
                    int: {
                        isVCOverriden: 1
                    }
                });
            }
            if (t.tracePolicy != null && t.tracePolicy !== "") {
                r("addAnnotations")(t.annotations, {
                    string: {
                        tracePolicy: t.tracePolicy
                    }
                });
            }
            r("addAnnotations")(t.annotations, {
                string: {
                    interactionId: t.traceId
                },
                int: {
                    height: t.viewport.height,
                    width: t.viewport.width,
                    scrollY: t.scrollY
                }
            });
            o("VisualCompletionUtil").addPlatformMetaData(t, this);
            r("addAnnotations")(t.annotations, {
                double: {
                    vcCalculationOverhead: t.vcCalculationOverhead,
                    mutationProcessingOverhead: t.mutationProcessingOverhead,
                    cssBgScanOverhead: t.cssBgScanOverhead
                },
                int: {
                    finalScrollY: t.finalScrollY,
                    initialScrollY: t.initialScrollY
                }
            });
            t.markerPoints.set("logVC", {
                timestamp: t.navComplete
            });
            if (t.speedIndex > 0) {
                t.markerPoints.set("speedIndex", {
                    timestamp: t.speedIndex + t.startTime
                });
            }
            if (t.elements.length && this.measureOriginalViewport && t.scrolledVC > 0) {
                t.markerPoints.set("scrolledVC", {
                    timestamp: t.scrolledVC + t.startTime
                });
            }
            const a = o("VisibilityState").getHiddenSpans(t.startTime, t.visuallyComplete + t.startTime);
            if (a.length > 0) {
                this.addMarkerPoint("backgrounded", a[0].start);
            }
            r("addAnnotations")(t.annotations, {
                int: {
                    hidden: Number(o("VisibilityState").wasHidden(t.startTime, t.visuallyComplete + t.startTime))
                }
            });
            const i = r("ResourceDownloadLogger")(t.startTime, t.startTime + t.visuallyComplete);
            i.forEach((e, n)=>{
                r("addAnnotations")(t.annotations, {
                    int: {
                        [n]: e
                    }
                });
            });
            o("WebAPIs").unavailableAPIs.forEach((t)=>{
                e.addTag("unavailableAPIs", t);
            });
            o("LateMutationUtilities").logLateMutationData(this, t);
            if (this.$12) {
                const CLS = this.$12();
                r("addAnnotations")(t.annotations, {
                    double: {
                        CLS
                    }
                });
            }
            if (this.$13) {
                const s = this.$13();
                if (s != null) {
                    const p = this.config.log_lcp_metadata === true ? {
                        lcpClassname: s.className ?? "",
                        lcpElement: s.element ?? "",
                        lcpWasPreloaded: s.preloaded,
                        lcpSize: s.size ?? ""
                    } : undefined;
                    if (p != null && this.config.log_lcp_image_url === true) {
                        p.lcpUrl = s.url ?? "";
                    }
                    if (p != null && s.elementRef != null && this.config.getMeaningfulReactComponentName != null) {
                        const f = this.config.getMeaningfulReactComponentName(s.elementRef);
                        if (f != null) {
                            p.lcpReactComponentName = f;
                        }
                    }
                    const g = s.elementRef;
                    if (p != null && g != null && this.config.logLCPReactStack) {
                        if (this.config.getReactComponentStackFromDOMElement != null) {
                            const h = o("ReactStackUtils").getTrimmedReactStack(g, "HeroPagelet", this.config.getReactComponentStackFromDOMElement);
                            if (h != null && h.length > 0) {
                                p.lcpReactStack = h.join(",");
                            }
                        }
                        if (this.config.getWrapperComponentPropArrayFromDOMElement != null) {
                            const y = this.config.getWrapperComponentPropArrayFromDOMElement(g, "HeroPagelet", "name");
                            if (y != null && y.length > 0) {
                                p.lcpPageletName = y[0];
                            }
                        }
                    }
                    if (p != null && s.elementRef instanceof HTMLImageElement) {
                        p.lcpNaturalSize = s.elementRef.naturalWidth * s.elementRef.naturalHeight;
                    }
                    this.addMarkerPoint("LCP", s.timestamp, p);
                }
            }
        }
        logCssBgElementsMetaData() {
            let cssBgTimingCount = 0;
            this.cssBgElements.forEach((t)=>{
                if (t.resourceTiming?.responseEnd != null) {
                    cssBgTimingCount++;
                }
            });
            r("addAnnotations")(this.annotations, {
                int: {
                    cssBgElementCount: this.cssBgElements.size(),
                    cssBgTimingCount
                }
            });
        }
    }
    l.default = f;
}, 98);
__d("foregroundRequestAnimationFrame", [
    "Visibility",
    "cancelAnimationFrame",
    "clearTimeout",
    "requestAnimationFrame",
    "setTimeout"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        if (r("Visibility").isHidden()) {
            const t = r("setTimeout")(e, 0);
            return function() {
                r("clearTimeout")(t);
            };
        } else {
            const n = r("requestAnimationFrame")(e);
            return function() {
                r("cancelAnimationFrame")(n);
            };
        }
    }
    l.foregroundRequestAnimationFrame = e;
}, 98);
__d("VisualCompletionTracing", [
    "IteratableElementWeakMap",
    "IteratableElementWeakSet",
    "LoadingStateTracker",
    "ResourceTimingAPI",
    "VisibilityAPI",
    "VisibilityState",
    "VisualCompletionLogger",
    "VisualCompletionTraceObserver",
    "VisualCompletionUtil",
    "VisualCompletionUtilCommon",
    "WebAPIs",
    "addAnnotations",
    "currentVCTraces",
    "foregroundRequestAnimationFrame",
    "performanceNow",
    "setTimeoutAcrossTransitions"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = new (r("IteratableElementWeakSet"));
    let u = false;
    if (!u && o("VisibilityAPI").canUseVisibilityAPI) {
        u = true;
        o("VisibilityState").subscribe(function(e, t) {
            if (t) {
                o("currentVCTraces").getCurrentVCTraces().forEach((e)=>{
                    e.pendingMutations.forEach((t, n)=>{
                        e.addVisualElement(t.mutationSeq, n, t.mutationType, t.mutationTimestamp, t.mutationTimestamp, undefined, undefined, t.imgLoadStart, t.imgLoadEnd);
                        if (e.intersectionObserver) {
                            e.intersectionObserver.unobserve(n);
                        }
                        e.unlock(t.lockId);
                    });
                    e.pendingMutations.clear();
                });
            }
        });
    }
    const c = ((t)=>{
        function n(n, a, i, l, u, c) {
            let d;
            d = t.call(this, n, a, i, l, u) || this;
            d.pendingLocks = new Map;
            d.pendingImages = new (r("IteratableElementWeakMap"));
            d.$VisualCompletionTracing$p_1 = null;
            d.$VisualCompletionTracing$p_2 = 0;
            d.$VisualCompletionTracing$p_3 = 0;
            d.$VisualCompletionTracing$p_5 = [];
            d.$VisualCompletionTracing$p_6 = [];
            d.mutationSeq = 0;
            d.mutationObserver = null;
            d.intersectionObserver = null;
            d.pendingMutations = new Map;
            d.namespace = "default";
            d.loggingScheduled = false;
            d.$VisualCompletionTracing$p_7 = new (r("IteratableElementWeakMap"));
            d.$VisualCompletionTracing$p_8 = null;
            d.intersectionObserverCallback = function(e) {
                Array.prototype.forEach.call(e, function(e) {
                    const t = d.pendingMutations.get(e.target);
                    if (t) {
                        let n = e.time;
                        if (e.time < t.mutationTimestamp) {
                            d.addAnnotationBoolean("pastPaintTimeReported", true);
                            n = t.mutationTimestamp;
                        }
                        d.addVisualElement(t.mutationSeq, e.target, t.mutationType, t.mutationTimestamp, n, o("WebAPIs").intersectionObserverEntryIsVisible(e), o("VisualCompletionUtilCommon").castToRect(e.boundingClientRect), t.imgLoadStart, t.imgLoadEnd);
                        if (o("WebAPIs").intersectionObserverEntryIsVisible(e)) {
                            d.addFirstMarkerPoint("firstPaint", e.time, {
                                mutationType: t.mutationType
                            });
                            if (d.$VisualCompletionTracing$p_8 != null) {
                                d.$VisualCompletionTracing$p_8(e.target, false, o("VisualCompletionUtilCommon").castToRect(e.boundingClientRect), t.mutationType);
                            }
                        }
                        d.cleanupPendingMutation(e.target);
                    }
                });
            };
            d.mutationRecordHandler = function(t) {
                d.mutationSeq++;
                const n = (e || (e = r("performanceNow")))();
                const a = o("VisualCompletionUtil").extractMutationElements(t, n, d);
                d.trackElements(a, d.mutationSeq, n);
                d.mutationProcessingOverhead += e() - n;
            };
            d.elementVisibilityCallback = function(e) {
                Array.from(e).forEach((e)=>{
                    if (o("WebAPIs").intersectionObserverEntryIsVisible(e)) {
                        const t = e.target;
                        const n = d.$VisualCompletionTracing$p_7.get(t);
                        if (n != null) {
                            n.callback();
                            if (n.executeOnce) {
                                d.$VisualCompletionTracing$p_7.delete(t);
                            }
                        }
                    }
                });
            };
            d.namespace = c ?? "default";
            d.$VisualCompletionTracing$p_4 = new (r("LoadingStateTracker"))(d);
            if (o("WebAPIs").MutationObserver) {
                d.mutationObserver = new (o("WebAPIs")).MutationObserver(d.mutationRecordHandler);
            }
            if (o("WebAPIs").IntersectionObserver) {
                d.intersectionObserver = new (o("WebAPIs")).IntersectionObserver(d.intersectionObserverCallback);
                d.$VisualCompletionTracing$p_1 = new (o("WebAPIs")).IntersectionObserver(d.elementVisibilityCallback);
            }
            o("currentVCTraces").addVCTrace(i, d);
            if (l === "INTERACTION") {
                d.measureOriginalViewport = false;
            } else {
                o("currentVCTraces").setCurrentNavigationVCTrace(d, d.namespace);
                d.measureOriginalViewport = true;
                if (u.measureOriginalViewportOnNavigation != null) {
                    d.measureOriginalViewport = u.measureOriginalViewportOnNavigation;
                }
                s.forEach((e)=>{
                    d.observeMutation(e);
                });
            }
            o("VisualCompletionUtil").setupScrollHandler(d);
            d.$VisualCompletionTracing$p_4.initBackgroundPolling();
            return d;
        }
        babelHelpers.inheritsLoose(n, t);
        const n_prototype = n.prototype;
        n_prototype.addLateMutationIgnoreElement = function(t) {
            this.lateMutationIgnoreElements.add(t);
        };
        n_prototype.addMutationRoot = function(n) {
            if (this.reported || this.checkDuplicatedMutationRoot(n)) {
                return function() {};
            }
            this.mutationSeq++;
            this.trackElements([
                [
                    n,
                    "mutationRoot"
                ]
            ], this.mutationSeq, (e || (e = r("performanceNow")))());
            return this.observeMutation(n);
        };
        n_prototype.dumpLocks = function() {
            return [
                this.pendingLocks,
                this.$VisualCompletionTracing$p_4.pendingLoadingElements,
                this.pendingImages
            ];
        };
        n_prototype.lock = function(n) {
            const t = this;
            this.pendingLocks.set(n, (e || (e = r("performanceNow")))());
            return function() {
                t.unlock(n);
            };
        };
        n_prototype.imageDone = function(n) {
            const t = this.pendingImages.get(n);
            if (t != null) {
                this.stateLog.set(`imgLoad_${this.$VisualCompletionTracing$p_3++}`, [
                    t,
                    (e || (e = r("performanceNow")))()
                ]);
                this.pendingImages.delete(n);
                this.attemptMeasurement();
            }
        };
        n_prototype.imageWait = function(n) {
            if (!this.reported) {
                this.pendingImages.set(n, (e || (e = r("performanceNow")))());
            }
        };
        n_prototype.cleanupPendingMutation = function(t, n) {
            const e = this.pendingMutations.get(t);
            if (e) {
                if (this.intersectionObserver != null) {
                    this.intersectionObserver.unobserve(t);
                }
                this.unlock(e.lockId, n);
                this.pendingMutations.delete(t);
            }
        };
        n_prototype.trackImage = function(t, n, r, a) {
            o("VisualCompletionUtil").trackImage(t, n, r, a, this);
        };
        n_prototype.waitLoadingState = function(t) {
            return this.$VisualCompletionTracing$p_4.waitLoadingState(t);
        };
        n_prototype.attemptMeasurementFromLoadingStateTracker = function() {
            this.attemptMeasurement();
        };
        n_prototype.getPendingLoadingElements = function() {
            return this.$VisualCompletionTracing$p_4.pendingLoadingElements;
        };
        n_prototype.unlock = function(n, o) {
            const t = this.pendingLocks.get(n);
            if (t != null) {
                this.pendingLocks.delete(n);
                const a = o != null ? `${o}_${n}` : n;
                this.stateLog.set(`Lock(${a})`, [
                    t,
                    (e || (e = r("performanceNow")))()
                ]);
                this.attemptMeasurement();
            }
        };
        n_prototype.checkDuplicatedMutationRoot = function(t) {
            for(let e = t; e != null;){
                if (this.mutationRoots.has(e)) {
                    return true;
                }
                e = e.parentElement;
            }
            return false;
        };
        n_prototype.observeMutation = function(t) {
            const e = this;
            if (this.reported || this.checkDuplicatedMutationRoot(t)) {
                return function() {};
            }
            if (o("VisualCompletionUtil").isElementNode(t) && this.mutationObserver) {
                this.mutationObserver.observe(t, o("VisualCompletionUtil").mutationObserverConfig);
            }
            this.mutationRoots.add(t);
            return function() {
                e.mutationRoots.delete(t);
            };
        };
        n_prototype.registerNavigationMutationRoot = function(t) {
            if (this.reported || this.checkDuplicatedMutationRoot(t)) {
                return function() {};
            }
            s.add(t);
            return function() {
                s.delete(t);
            };
        };
        n_prototype.scheduleIntersectionObserver = function(mutationSeq, a, i, mutationTimestamp, imgLoadStart, imgLoadEnd) {
            const t = this;
            if (!(this.reported && this.$VisualCompletionTracing$p_8 == null) && !this.$VisualCompletionTracing$p_4.hasLoadingStateUnmountCallback(a) && !(this.config.bypass_detached_element && a.isConnected === false)) {
                this.mutatedElementCount++;
                if (o("VisibilityAPI").canUseVisibilityAPI && o("VisibilityAPI").isVisibilityHidden()) {
                    this.addVisualElement(mutationSeq, a, i, mutationTimestamp, mutationTimestamp, undefined, undefined, imgLoadStart, imgLoadEnd);
                } else if (o("WebAPIs").IntersectionObserver) {
                    this.cleanupPendingMutation(a);
                    const lockId = `${i}_paint_${this.$VisualCompletionTracing$p_3++}`;
                    if (this.intersectionObserver) {
                        this.intersectionObserver.observe(a);
                    }
                    this.lock(lockId);
                    this.pendingMutations.set(a, {
                        mutationTimestamp,
                        lockId,
                        mutationType: i,
                        mutationSeq,
                        imgLoadStart,
                        imgLoadEnd
                    });
                    if (this.config.intersection_observer_timeout != null) {
                        r("setTimeoutAcrossTransitions")(function() {
                            const o = t.pendingMutations.get(a);
                            if (o != null && o.lockId === lockId) {
                                if (a.isConnected !== false) {
                                    t.addVisualElement(mutationSeq, a, "mutationTimeout", mutationTimestamp, (e || (e = r("performanceNow")))(), undefined, undefined, imgLoadStart, imgLoadEnd);
                                }
                                t.addAnnotationInt("intersection_observer_timeout_count", ++t.$VisualCompletionTracing$p_2);
                                t.cleanupPendingMutation(a, "timeout");
                            }
                        }, this.config.intersection_observer_timeout);
                    }
                } else {
                    const d = `${i}_paint_${this.$VisualCompletionTracing$p_3++}`;
                    this.lock(d);
                    o("foregroundRequestAnimationFrame").foregroundRequestAnimationFrame(function() {
                        t.addVisualElement(mutationSeq, a, i, mutationTimestamp, (e || (e = r("performanceNow")))(), undefined, undefined, imgLoadStart, imgLoadEnd);
                        t.unlock(d);
                    });
                }
            }
        };
        n_prototype.scheduleElementVisibleObserver = function(t, callback, { cleanAfterReport = true, executeOnce = true }) {
            if (!this.reported) {
                if (o("WebAPIs").IntersectionObserver) {
                    const s = this.$VisualCompletionTracing$p_7.get(t);
                    if (s && this.$VisualCompletionTracing$p_1) {
                        this.$VisualCompletionTracing$p_1.unobserve(t);
                    }
                    this.$VisualCompletionTracing$p_7.set(t, {
                        executeOnce,
                        callback,
                        cleanAfterReport
                    });
                    if (this.$VisualCompletionTracing$p_1) {
                        this.$VisualCompletionTracing$p_1.observe(t);
                    }
                } else {
                    return;
                }
            }
        };
        n_prototype.trackElements = function(t, n, r) {
            const e = this;
            if (!(this.reported && this.$VisualCompletionTracing$p_8 == null)) {
                const a = [];
                t.forEach((e)=>{
                    const t = e[0];
                    if (o("VisualCompletionUtil").isElementNode(t) && !o("VisualCompletionUtil").isImageOrPicture(t)) {
                        a.push(e);
                    }
                });
                a.forEach(([a, i])=>{
                    o("VisualCompletionUtil").checkLoadingStates(a, e);
                    e.scheduleIntersectionObserver(n, a, i, r);
                });
                if (this.interactionType === "INTERACTION" && this.config.allow_inclusion_in_navigation_vc !== true) {
                    o("currentVCTraces").forEachNavigationVCTrace(function(e, n) {
                        if (!e.reported) {
                            t.forEach(([n])=>{
                                e.excludeElement(n);
                            });
                        }
                    });
                }
            }
        };
        n_prototype.onBeforeComplete = function(t) {
            if (!this.reported) {
                this.$VisualCompletionTracing$p_5.push(t);
            }
        };
        n_prototype.onComplete = function(t) {
            if (!this.reported) {
                this.$VisualCompletionTracing$p_6.push(t);
            }
        };
        n_prototype.attemptMeasurement = function(t = false) {
            const e = this;
            if (!(!t && (this.loggingScheduled || this.reported || this.pendingLocks.size > 0 || this.$VisualCompletionTracing$p_4.pendingLoadingElements.size() > 0 || this.pendingImages.size() > 0))) {
                this.loggingScheduled = true;
                const n = function() {
                    if (!e.config.enableInstrumentationCorrectnessLogging) {
                        if (e.mutationObserver) {
                            e.mutationObserver.disconnect();
                        }
                        if (e.intersectionObserver) {
                            e.intersectionObserver.disconnect();
                        }
                    }
                    e.$VisualCompletionTracing$p_4.forEachLoadingStateUnmountCallback(function(e) {
                        e();
                    });
                    e.$VisualCompletionTracing$p_4.disconnect();
                    e.$VisualCompletionTracing$p_4.clearLoadingStateUnmountCallbacks();
                    e.$VisualCompletionTracing$p_4.disconnectTailLoadLoadingStateObservers();
                    o("currentVCTraces").removeVCTrace(e.traceID);
                    e.pendingMutations.clear();
                    if (!t && o("ResourceTimingAPI").canUseResourceTimingAPI() && e.config.check_css_bg_elements) {
                        o("VisualCompletionUtil").scanCssBgElements(e);
                    }
                    const n = e.calculate(t);
                    e.$VisualCompletionTracing$p_5.forEach((t)=>{
                        t(n, e.$VisualCompletionTracing$p_4.pendingLoadingElements);
                    });
                    e.$VisualCompletionTracing$p_5 = [];
                    r("VisualCompletionTraceObserver").emit(n);
                    e.$VisualCompletionTracing$p_6.forEach((e)=>{
                        e(n);
                    });
                    e.$VisualCompletionTracing$p_6 = [];
                    if (e.$VisualCompletionTracing$p_1) {
                        e.$VisualCompletionTracing$p_1.disconnect();
                    }
                    e.$VisualCompletionTracing$p_7.clear();
                    e.tearDown();
                };
                const a = this.config.defer_expensive_calculation;
                if (a != null && !t) {
                    a(n);
                } else {
                    n();
                }
            }
        };
        n_prototype.forceMeasurement = function() {
            const t = this;
            if (!this.reported) {
                if (this.pendingLocks.size > 0) {
                    r("addAnnotations")(this.annotations, {
                        int: {
                            incompleteLockCount: this.pendingLocks.size
                        }
                    });
                    this.pendingLocks.forEach((n, o)=>{
                        t.addTag("incompleteLocks", o);
                        t.stateLog.set(`incomplete_${o}`, [
                            n,
                            (e || (e = r("performanceNow")))()
                        ]);
                    });
                }
                if (this.$VisualCompletionTracing$p_4.pendingLoadingElements.size() > 0) {
                    r("addAnnotations")(this.annotations, {
                        int: {
                            incompleteLoadingElementsCount: this.$VisualCompletionTracing$p_4.pendingLoadingElements.size()
                        }
                    });
                }
                this.stateLog.forEach((n, o)=>{
                    if (n[1] === -1) {
                        t.stateLog.delete(o);
                        n[1] = (e || (e = r("performanceNow")))();
                        t.stateLog.set(`incomplete_${o}`, n);
                    }
                });
                if (this.pendingImages.size() > 0) {
                    r("addAnnotations")(this.annotations, {
                        int: {
                            incompleteImageCount: this.pendingImages.size()
                        }
                    });
                    this.pendingImages.forEach((n)=>{
                        t.stateLog.set(`incomplete_imgLoad_${t.$VisualCompletionTracing$p_3++}`, [
                            n,
                            (e || (e = r("performanceNow")))()
                        ]);
                    });
                }
                this.attemptMeasurement(true);
            }
        };
        n_prototype.tearDown = function() {
            t.prototype.tearDown.call(this);
            for (const [n, r] of this.$VisualCompletionTracing$p_7.entries()){
                if (r.cleanAfterReport) {
                    this.$VisualCompletionTracing$p_7.delete(n);
                }
            }
            this.pendingLocks.clear();
            this.$VisualCompletionTracing$p_4.pendingLoadingElements.clear();
            this.pendingImages.clear();
        };
        n_prototype.subscribeExtraMutation = function(t) {
            const e = this;
            let n = [];
            o("VisualCompletionUtil").subscribeUserInputForExtraMutation(this, t, n);
            const r = ()=>{
                if (e.mutationObserver) {
                    e.mutationObserver.disconnect();
                }
                if (e.intersectionObserver) {
                    e.intersectionObserver.disconnect();
                }
                e.mutationRoots.clear();
                n.forEach((e)=>e());
                n = [];
                e.$VisualCompletionTracing$p_8 = null;
            };
            this.$VisualCompletionTracing$p_8 = function(e, n, r, o) {
                t(e, n, r, o);
            };
            return function() {
                r();
            };
        };
        return n;
    })(r("VisualCompletionLogger"));
    l.default = c;
}, 98);
__d("vc-tracker", [
    "VisibilityAPI",
    "VisibilityState",
    "VisualCompletionAttributes",
    "VisualCompletionConstants",
    "VisualCompletionTraceObserver",
    "VisualCompletionTracing",
    "VisualCompletionUtil",
    "VisualCompletionUtilCommon",
    "WebAPIs",
    "currentVCTraces"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = {
        VisibilityState: {
            canUseVisibilityAPI: o("VisibilityAPI").canUseVisibilityAPI,
            getHiddenSpans: o("VisibilityState").getHiddenSpans,
            subscribe: o("VisibilityState").subscribe,
            wasHidden: o("VisibilityState").wasHidden
        },
        VisualCompletionAttributes: r("VisualCompletionAttributes"),
        VisualCompletionConstants: e || (e = r("VisualCompletionConstants")),
        VisualCompletionTraceObserver: r("VisualCompletionTraceObserver"),
        VisualCompletionTracing: r("VisualCompletionTracing"),
        derefOnlyAttachedElement: o("WebAPIs").derefOnlyAttachedElement,
        findVCTraces: o("VisualCompletionUtilCommon").findVCTraces,
        forEachNavigationVCTrace: o("currentVCTraces").forEachNavigationVCTrace,
        getCurrentNavigationVCTrace: o("currentVCTraces").getCurrentNavigationVCTrace,
        getCurrentVCTraces: o("currentVCTraces").getCurrentVCTraces,
        getLastNavigationVCReport: o("currentVCTraces").getLastNavigationVCReport,
        ignoreElement: o("VisualCompletionUtilCommon").ignoreElement,
        isAttachedElement: o("WebAPIs").isAttachedElement,
        setCurrentNavigationVCTrace: o("currentVCTraces").setCurrentNavigationVCTrace,
        setLastNavigationVCReport: o("currentVCTraces").setLastNavigationVCReport,
        trackImageLoad: o("VisualCompletionUtil").trackImageLoad,
        trackLoadingState: o("VisualCompletionUtilCommon").trackLoadingState,
        trimHash: o("VisualCompletionUtilCommon").trimHash
    };
    l.default = s;
}, 98);
__d("useCometDisplayTimingTrackerForInteraction", [
    "InteractionTracingMetrics",
    "performanceNow",
    "react",
    "react-compiler-runtime",
    "vc-tracker"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = s || (s = o("react"));
    const { useCallback, useRef } = u;
    function useM(t, n, a) {
        const i = o("react-compiler-runtime").c(4);
        const l = n === undefined ? false : n;
        const sRef = useRef(null);
        let u;
        if (i[0] !== a || i[1] !== l || i[2] !== t) {
            u = function(o) {
                if (t != null && sRef.current !== o && (sRef.current = o, o)) {
                    const n = (e || (e = r("performanceNow")))();
                    if (a != null) {
                        r("InteractionTracingMetrics").addMountPoint(a, n, t);
                    } else {
                        r("InteractionTracingMetrics").currentInteractionLogger().forEach((e)=>r("InteractionTracingMetrics").addMountPoint(e.traceId, n, t));
                    }
                    if (!l) {
                        const i = r("vc-tracker").getCurrentVCTraces();
                        i.forEach((e)=>{
                            if (e.interactionType !== "INTERACTION") {
                                e.excludeElement(o);
                            }
                        });
                    }
                }
            };
            i[0] = a;
            i[1] = l;
            i[2] = t;
            i[3] = u;
        } else {
            u = i[3];
        }
        return u;
    }
    l.default = useM;
}, 98);
__d("useFadeEffect", [
    "clearTimeout",
    "react",
    "react-compiler-runtime",
    "setTimeout",
    "useDoubleEffectHack_DO_NOT_USE_THIS_IS_TRACKED"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const { useCallback, useLayoutEffect, useReducer, useRef } = s;
    const p = 1000;
    function _(e, t) {
        switch(t.type){
            case "start":
                return {
                    isTransitioning: true,
                    shouldBeVisible: t.shouldBeVisible
                };
            case "finish":
                return {
                    isTransitioning: false,
                    shouldBeVisible: e.shouldBeVisible
                };
            default:
                return e;
        }
    }
    function useF(e) {
        const t = o("react-compiler-runtime").c(12);
        const nRef = useRef(null);
        let a;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = {
                isTransitioning: false,
                shouldBeVisible: false
            };
            t[0] = a;
        } else {
            a = t[0];
        }
        const i = useReducer(_, a);
        const l = i[0];
        const s = i[1];
        const { isTransitioning, shouldBeVisible } = l;
        const gRef = useRef(null);
        const hRef = useRef(null);
        let y;
        let C;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            y = function() {
                return function() {
                    if (gRef.current != null) {
                        r("clearTimeout")(gRef.current);
                    }
                    if (hRef.current != null) {
                        window.cancelAnimationFrame(hRef.current);
                    }
                };
            };
            C = [];
            t[1] = y;
            t[2] = C;
        } else {
            y = t[1];
            C = t[2];
        }
        r("useDoubleEffectHack_DO_NOT_USE_THIS_IS_TRACKED")(y, C);
        let b;
        if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
            b = function() {
                s({
                    type: "finish"
                });
                if (gRef.current != null) {
                    r("clearTimeout")(gRef.current);
                }
                gRef.current = null;
            };
            t[3] = b;
        } else {
            b = t[3];
        }
        const v = b;
        let S;
        if (t[4] === Symbol.for("react.memo_cache_sentinel")) {
            S = function(shouldBeVisible_1) {
                if (hRef.current != null) {
                    window.cancelAnimationFrame(hRef.current);
                }
                hRef.current = window.requestAnimationFrame(function() {
                    s({
                        shouldBeVisible: shouldBeVisible_1,
                        type: "start"
                    });
                    hRef.current = null;
                    if (gRef.current != null) {
                        r("clearTimeout")(gRef.current);
                    }
                    gRef.current = r("setTimeout")(v, p);
                });
            };
            t[4] = S;
        } else {
            S = t[4];
        }
        const R = S;
        const LRef = useRef(false);
        let E;
        let k;
        if (t[5] !== e) {
            E = function() {
                if (LRef.current !== e && (!e || nRef.current != null)) {
                    R(e);
                }
                LRef.current = e;
            };
            k = [
                e,
                R
            ];
            t[5] = e;
            t[6] = E;
            t[7] = k;
        } else {
            E = t[6];
            k = t[7];
        }
        useLayoutEffect(E, k);
        let I;
        if (t[8] === Symbol.for("react.memo_cache_sentinel")) {
            I = function(t) {
                const nRef_current = nRef.current;
                nRef.current = t;
                if (t != null) {
                    t.addEventListener("transitionend", v);
                    t.addEventListener("webkitTransitionEnd", v);
                    if (LRef.current === true) {
                        R(true);
                    }
                } else if (nRef_current != null) {
                    nRef_current.removeEventListener("transitionend", v);
                    nRef_current.removeEventListener("webkitTransitionEnd", v);
                }
            };
            t[8] = I;
        } else {
            I = t[8];
        }
        const T = I;
        const D = isTransitioning || shouldBeVisible || e;
        let x;
        if (t[9] !== shouldBeVisible || t[10] !== D) {
            x = [
                D,
                shouldBeVisible,
                T
            ];
            t[9] = shouldBeVisible;
            t[10] = D;
            t[11] = x;
        } else {
            x = t[11];
        }
        return x;
    }
    l.default = useF;
}, 98);
__d("useTooltipDelayedContent", [
    "clearTimeout",
    "react",
    "setTimeout"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const { useLayoutEffect, useRef, useState } = s;
    function useM({ delayContentMs, isVisible }) {
        const oRef = useRef(isVisible);
        const aRef = useRef(null);
        const i = useState(function() {
            return isVisible && !oRef.current && delayContentMs > 0;
        });
        const isPending = i[0];
        const s = i[1];
        useLayoutEffect(function() {
            if (isVisible && !oRef.current && delayContentMs > 0) {
                s(true);
                aRef.current = r("setTimeout")(function() {
                    s(false);
                    aRef.current = null;
                }, delayContentMs);
                return function() {
                    const aRef_current = aRef.current;
                    if (aRef_current != null) {
                        r("clearTimeout")(aRef_current);
                    }
                    aRef.current = null;
                };
            }
            if (aRef.current != null) {
                const e = aRef.current;
                s(false);
                r("clearTimeout")(e);
                aRef.current = null;
            }
            oRef.current = isVisible;
        }, [
            delayContentMs,
            isVisible
        ]);
        return {
            isPending
        };
    }
    l.default = useM;
}, 98);
__d("BaseTooltipImpl.react", [
    "BaseAnchorPositioningUtils",
    "BaseTooltipContainer.react",
    "CometHeroInteractionContextPassthrough.react",
    "CometPlaceholder.react",
    "cr:20267",
    "cr:20391",
    "react",
    "react-compiler-runtime",
    "react-strict-dom",
    "useCometDisplayTimingTrackerForInteraction",
    "useFadeEffect",
    "useTooltipDelayedContent"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = [
        "alignOffsetXstyle",
        "loadingState",
        "offset",
        "contentKey",
        "delayContentMs",
        "headline",
        "id",
        "isVisible",
        "themeWrapper",
        "contentColor",
        "contentType",
        "shouldShowCarat",
        "tooltip",
        "tooltipTheme",
        "xstyle",
        "contextualLayerXstyle",
        "position",
        "stopClickPropagation",
        "align"
    ];
    let s;
    const u = s || (s = o("react"));
    const c = s;
    const { useLayoutEffect, useRef } = c;
    const p = {
        loadingState: {
            display: "x78zum5",
            justifyContent: "xl56j7k",
            $$css: true
        }
    };
    function _(e) {
        const t = o("react-compiler-runtime").c(3);
        const e_contextualLayerRef = e.contextualLayerRef;
        let r;
        let a;
        if (t[0] !== e_contextualLayerRef) {
            r = function() {
                const e_contextualLayerRef_current = e_contextualLayerRef.current;
                if (e_contextualLayerRef_current) {
                    e_contextualLayerRef_current.reposition({
                        autoflip: true
                    });
                }
            };
            a = [
                e_contextualLayerRef
            ];
            t[0] = e_contextualLayerRef;
            t[1] = r;
            t[2] = a;
        } else {
            r = t[1];
            a = t[2];
        }
        useLayoutEffect(r, a);
        return null;
    }
    function FComponent(t) {
        "use no forget";
        const { alignOffsetXstyle, loadingState, offset, contentKey, delayContentMs } = t;
        const delayContentMs_1 = delayContentMs === undefined ? 0 : delayContentMs;
        const { headline, id, isVisible, themeWrapper } = t;
        const V = themeWrapper === undefined ? u.Fragment : themeWrapper;
        const { contentColor, contentType, shouldShowCarat, tooltip, tooltipTheme, xstyle, contextualLayerXstyle, position, stopClickPropagation, align } = t;
        const align_1 = align === undefined ? "middle" : align;
        const N = babelHelpers.objectWithoutPropertiesLoose(t, e);
        const MRef = useRef(null);
        const w = r("useFadeEffect")(isVisible);
        const A = w[0];
        const shouldFadeIn = w[1];
        const O = w[2];
        const B = r("useCometDisplayTimingTrackerForInteraction")("ToolTip");
        const W = r("useTooltipDelayedContent")({
            delayContentMs: delayContentMs_1,
            isVisible
        });
        const W_isPending = W.isPending;
        const URef = useRef(null);
        const N_anchorPosName = N.anchorPosName;
        const anchorRef = N.anchorPosRef ?? URef;
        const G = o("BaseAnchorPositioningUtils").contextualLayerToAnchorPositionAreaCompat(position, align_1);
        const blockPositionArea = G[0];
        const inlinePositionArea = G[1];
        const K = n("cr:20267")(N_anchorPosName, anchorRef, {
            blockPositionArea,
            inlinePositionArea,
            tryFallbacks: "flip-block"
        });
        let anchorTargetXstyle;
        let anchorTargetRef;
        if (K != null) {
            anchorTargetXstyle = K[0];
            anchorTargetRef = K[1];
        }
        const Y = o("BaseAnchorPositioningUtils").passesAnchorPositionExperiment();
        const J = Y ? {
            anchorRef,
            anchorTargetRef,
            anchorTargetXstyle
        } : {};
        const Z = babelHelpers.extends({
            align: align_1
        }, N, {
            imperativeRef: MRef,
            offset,
            ownerDocument: N.ownerDocument,
            position,
            ref: B,
            stopClickPropagation,
            vrPassTouchesThrough: true,
            xstyle: contextualLayerXstyle
        });
        if (tooltip == null || !A) {
            return null;
        }
        const Component = o("react-strict-dom").html.div;
        const Component_1 = o("react-strict-dom").html.span;
        const Component_2 = r("CometPlaceholder.react");
        const children = <V>{u.jsx(r("BaseTooltipContainer.react"), babelHelpers.extends({}, J, {
            align: align_1,
            alignOffsetXstyle,
            closeButton: null,
            id,
            position,
            ref: O,
            shouldFadeIn,
            shouldShowCarat,
            withCloseButton: false,
            xstyle,
            children: W_isPending ? <Component style={p.loadingState}>{loadingState}</Component> : <Component_2 key={contentKey} fallback={loadingState} name={i.id}><_ contextualLayerRef={MRef}/>{typeof tooltip === "string" ? <Component_1>{tooltip}</Component_1> : tooltip}</Component_2>
        }))}</V>;
        const Component_3 = r("CometHeroInteractionContextPassthrough.react");
        return <Component_3 clear>{u.jsx(n("cr:20391"), babelHelpers.extends({}, Z, {
            children
        }))}</Component_3>;
    }
    FComponent.displayName = `${FComponent.name} [from ${i.id}]`;
    l.default = FComponent;
}, 98);
__d("ImageDownloadTrackerWWW", [
    "NetworkStatus",
    "Promise",
    "setTimeout"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = 2;
    const u = 250;
    function c(t, o, a = undefined) {
        let i = 0;
        let l;
        return new (e || (e = n("Promise")))(function(e, n) {
            function c() {
                const l = new Image;
                l.onload = function() {
                    r("NetworkStatus").reportSuccess();
                    e();
                };
                l.onerror = function() {
                    const e = i <= s;
                    if (e) {
                        r("setTimeout")(c, u);
                    } else {
                        r("NetworkStatus").reportError();
                        n();
                    }
                };
                i++;
                o();
                if (a != null) {
                    l.crossOrigin = a;
                }
                l.src = t;
            }
            if (r("NetworkStatus").isOnline()) {
                c();
            } else {
                l = r("NetworkStatus").onChange(function({ online }) {
                    if (online) {
                        c();
                        l.remove();
                    }
                });
            }
        });
    }
    l.default = c;
}, 98);
__d("WAWebCleanAssets", [
    "Promise",
    "WAStorageEstimator",
    "WAWebAssetLoaderDpiChangeDispatch",
    "WAWebFeatureDetectionSwSupport",
    "WAWebLoadAssetUrl",
    "WAWebNoop",
    "WAWebSWBus",
    "WAWebSWBusActions",
    "WAWebWebcStorageStatWamEvent"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(t) {
        if (r("WAWebFeatureDetectionSwSupport").supported) {
            const a = t.estimateStorage === true;
            const i = navigator.serviceWorker;
            (e || (e = n("Promise"))).all(t.keep.flatMap((e)=>[
                    e[r("WAWebAssetLoaderDpiChangeDispatch").RES.LOW],
                    e[r("WAWebAssetLoaderDpiChangeDispatch").RES.HIGH]
                ]).map(o("WAWebLoadAssetUrl").getSupportedFormatUrl)).then((e)=>{
                const t = e.map((e)=>{
                    const t = e?.split("/");
                    if (t != null) {
                        return t[t.length - 1];
                    }
                    return null;
                });
                if (i != null && i.controller) {
                    r("WAWebSWBus").request(i.controller, r("WAWebSWBusActions").CLEAN_ASSETS, t).catch(r("WAWebNoop"));
                }
            }).then(()=>{
                if (a) {
                    return o("WAStorageEstimator").estimateStorage();
                }
                return null;
            }).then((e)=>{
                if (e != null && e.success) {
                    const t = e.value;
                    const { quota, usage } = t;
                    new (o("WAWebWebcStorageStatWamEvent")).WebcStorageStatWamEvent({
                        webcStorageUsage: usage,
                        webcStorageQuota: quota
                    }).commit();
                }
            });
        }
    }
    l.default = s;
}, 98);
__d("WAWebRoundShape.react", [
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = {
        iconRefreshed: {
            display: "x78zum5",
            alignItems: "x6s0dn4",
            justifyContent: "xl56j7k",
            width: "x100vrsf",
            height: "x1vqgdyp",
            color: "x1pse0pq",
            background: "xe5due1",
            borderStartStartRadius: "x1c9tyrk",
            borderStartEndRadius: "xeusxvb",
            borderEndEndRadius: "x1pahc9y",
            borderEndStartRadius: "x1ertn4p",
            $$css: true
        },
        disabled: {
            backgroundColor: "x1ailiqk",
            $$css: true
        },
        transparent: {
            color: "xhslqc4",
            backgroundColor: "x1jbjsai",
            $$css: true
        },
        compact: {
            width: "x100vrsf",
            height: "x1vqgdyp",
            $$css: true
        },
        groupModal: {
            width: "x15jighw",
            height: "x112a4uq",
            $$css: true
        }
    };
    function d(t) {
        const n = o("react-compiler-runtime").c(8);
        const { children, disabled, theme, transparent, xstyle } = t;
        let m;
        if (n[0] !== disabled || n[1] !== theme || n[2] !== transparent || n[3] !== xstyle) {
            m = (e || (e = r("stylex"))).props(c.iconRefreshed, transparent === true && c.transparent || theme === "compact" && c.compact || theme === "group-modal" && c.groupModal, disabled === true && c.disabled, xstyle);
            n[0] = disabled;
            n[1] = theme;
            n[2] = transparent;
            n[3] = xstyle;
            n[4] = m;
        } else {
            m = n[4];
        }
        let p;
        if (n[5] !== children || n[6] !== m) {
            p = <div {...babelHelpers.extends({}, m, {
                children
            })}/>;
            n[5] = children;
            n[6] = m;
            n[7] = p;
        } else {
            p = n[7];
        }
        return p;
    }
    l.default = d;
}, 98);
__d("WAWebSubscribePushManagerActionUtils", [
    "fbt",
    "Promise",
    "WALogger",
    "WAWebABProps",
    "WAWebBackgroundSyncReporter",
    "WAWebFbtCommon",
    "WAWebMuteCollection",
    "WAWebNotificationConstants",
    "WAWebPushNotificationsGatingUtils",
    "WAWebUserPrefsGeneral",
    "WAWebUserPrefsNotifications",
    "WAWebUserPrefsScreenLock",
    "WAWebWamEnumOnboardSources",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    function c() {
        let e = o("WAWebMuteCollection").MuteCollection.getGlobalOfflineNotifications();
        e = f(e);
        return e;
    }
    function d(e) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const n = o("WAWebUserPrefsScreenLock").getScreenLockEnabled();
            const r = e && window.Notification?.permission === o("WAWebNotificationConstants").PERMISSION_ALLOWED && o("WAWebPushNotificationsGatingUtils").canEnableOfflineNotifications() && !n;
            return r;
        });
        return m.apply(this, arguments);
    }
    function p() {
        _();
        return (u || (u = n("Promise"))).resolve();
    }
    function _() {
        const t = r("WAWebFbtCommon")("WhatsApp");
        const n = s._("Syncing messages in the background");
        const a = s._("Syncing messages complete");
        let i;
        if (o("WAWebPushNotificationsGatingUtils").canSupportNotificationActions()) {
            i = s._("Go to app");
        }
        const l = "{name}";
        const u = s._("Incoming voice call from {name}", [
            s._param("name", l)
        ]);
        const c = s._("Incoming video call from {name}", [
            s._param("name", l)
        ]);
        const d = s._("Incoming group voice call from {name}", [
            s._param("name", l)
        ]);
        const m = s._("Incoming group video call from {name}", [
            s._param("name", l)
        ]);
        const p = s._("Open WhatsApp Web to answer this call.");
        const _ = s._("Unknown");
        return o("WAWebUserPrefsGeneral").setOfflineNotificationContent({
            notificationTitle: t.toString(),
            notificationText: n.toString(),
            notificationSyncCompleteText: a.toString(),
            notificationSettingActionText: i?.toString(),
            callNotification1on1AudioTitle: u.toString(),
            callNotification1on1VideoTitle: c.toString(),
            callNotificationGroupAudioTitle: d.toString(),
            callNotificationGroupVideoTitle: m.toString(),
            callNotificationBody: p.toString(),
            callNotificationUnknownCaller: _.toString()
        });
    }
    function f(t) {
        if (!t && window.Notification?.permission === o("WAWebNotificationConstants").PERMISSION_ALLOWED && o("WAWebMuteCollection").MuteCollection.getGlobalNotifications() && o("WAWebUserPrefsNotifications").getOfflineNotificationsEnabledOnce() !== true && o("WAWebABProps").getABPropConfigValue("web_background_sync_v2")) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[push-notification] Enable background sync for users once"
            ])));
            o("WAWebUserPrefsNotifications").setOfflineNotificationsEnabledOnce();
            o("WAWebMuteCollection").MuteCollection.setGlobalOfflineNotifications(true);
            o("WAWebBackgroundSyncReporter").logBackgroundSyncAdoptionEvent({
                offboardSource: null,
                onboardSource: o("WAWebWamEnumOnboardSources").ONBOARD_SOURCES.AUTO_ENABLE
            });
            return true;
        }
        return t;
    }
    l.isOfflineNotificationsEnabled = c;
    l.shouldSubscribePushManager = d;
    l.updateOfflineNotificationL10nStrings = p;
    l.updateOfflineNotificationL10nStringsForOfflineResume = _;
}, 226);
__d("WAWebTPIframeUtils", [
    "WAWebPonyfillsIdleCallback",
    "WAWebTPFrameUrlBuilder",
    "WAWebTPPdfViewerGatingUtils",
    "WAWebTPThumbnailUtils"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e = false;
    let s = null;
    let u = null;
    function c(t) {
        if (!(!o("WAWebTPPdfViewerGatingUtils").isWebTPThumbnailRendererEnabled() || e)) {
            e = true;
            o("WAWebPonyfillsIdleCallback").requestIdleCallback(function() {
                const e = o("WAWebTPFrameUrlBuilder").getWAWebTPThumbnailUrl();
                const t = o("WAWebTPThumbnailUtils").getSandboxIframe(e, o("WAWebTPThumbnailUtils").WEBTP_THUMBNAIL_IFRAME_ID);
                o("WAWebTPThumbnailUtils").appendToDocumentBody(t);
            });
        }
    }
    function d() {
        if (s != null) {
            o("WAWebPonyfillsIdleCallback").cancelIdleCallback(s);
            s = null;
            return;
        }
        const e = document.getElementById(o("WAWebTPThumbnailUtils").WEBTP_VIEWER_IFRAME_ID);
        if (e instanceof HTMLIFrameElement) {
            e.remove();
        }
    }
    function m(e, t) {
        if (o("WAWebTPPdfViewerGatingUtils").isWebTPPdfViewerEnabledForMimeType(e)) {
            u = o("WAWebPonyfillsIdleCallback").requestIdleCallback(function() {
                u = null;
                const e = o("WAWebTPFrameUrlBuilder").getWAWebTPPdfInlineSharerUrl();
                const t = o("WAWebTPThumbnailUtils").getSandboxIframe(e, o("WAWebTPThumbnailUtils").WEBTP_INLINE_SHARER_IFRAME_ID);
                o("WAWebTPThumbnailUtils").appendToDocumentBody(t);
            });
        }
    }
    function p() {
        if (u != null) {
            o("WAWebPonyfillsIdleCallback").cancelIdleCallback(u);
            u = null;
            return;
        }
        const e = document.getElementById(o("WAWebTPThumbnailUtils").WEBTP_INLINE_SHARER_IFRAME_ID);
        if (e instanceof HTMLIFrameElement) {
            e.remove();
        }
    }
    function _(e, t) {
        if (o("WAWebTPPdfViewerGatingUtils").isWebTPPdfViewerEnabledForMimeType(e)) {
            s = o("WAWebPonyfillsIdleCallback").requestIdleCallback(function() {
                s = null;
                const e = o("WAWebTPFrameUrlBuilder").getWAWebTPPdfViewerUrl();
                const t = o("WAWebTPThumbnailUtils").getSandboxIframe(e, o("WAWebTPThumbnailUtils").WEBTP_VIEWER_IFRAME_ID);
                o("WAWebTPThumbnailUtils").appendToDocumentBody(t);
            });
        }
    }
    l.getSandboxIframe = o("WAWebTPThumbnailUtils").getSandboxIframe;
    l.renderWebTPThumbnailIfEnabled = o("WAWebTPThumbnailUtils").renderWebTPThumbnailIfEnabled;
    l.preloadWebTPThumbnailRendererIfEnabled = c;
    l.removePreloadedIframe = d;
    l.preloadWebTPInlineSharerIframeIfEnabled = m;
    l.removePreloadedInlineSharerIframe = p;
    l.preloadWebTPIframeIfEnabled = _;
}, 98);
__d("WAWebTPPreloadingUtils", [
    "WALogger",
    "WAWebBackendEventBus",
    "WAWebMimeTypes",
    "WAWebMsgQueryUtils",
    "WAWebMsgType",
    "WAWebTPIframeUtils",
    "WAWebTPPdfViewerGatingUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u = false;
    let c = false;
    function d() {
        u = false;
        c = false;
    }
    const m = 50;
    const p = 100;
    function _(e, t) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
            if (u) {
                return true;
            }
            if (!o("WAWebTPPdfViewerGatingUtils").isWebTPPdfViewerEnabled() || !o("WAWebTPPdfViewerGatingUtils").isWebTPPdfViewerPreloadEnabled()) {
                return false;
            }
            if (!o("WAWebBackendEventBus").BackendEventBus.isOfflineDeliveryEnd) {
                if (!c) {
                    c = true;
                    o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "Deferring WebTP iframe preload until offline delivery ends"
                    ])));
                    const r = function() {
                        c = false;
                        _(t, n);
                    };
                    o("WAWebBackendEventBus").BackendEventBus.onceOfflineDeliveryEnd(r);
                }
                return false;
            }
            const { source, appStartLimit } = n;
            const l = appStartLimit === undefined ? p : appStartLimit;
            const n_inChatLimit = n.inChatLimit;
            const f = n_inChatLimit === undefined ? m : n_inChatLimit;
            const n_force = n.force;
            const y = n_force === undefined ? false : n_force;
            let C = false;
            if (y) {
                C = true;
            } else {
                const b = yield g(t, f, l);
                C = b.some((e)=>e.type === o("WAWebMsgType").MSG_TYPE.DOCUMENT && e.mimetype != null && o("WAWebMimeTypes").isPdfDocument(e.mimetype));
            }
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "Preloading WebTP iframe for PDFs: ",
                ""
            ])), C);
            if (C) {
                o("WAWebTPIframeUtils").preloadWebTPIframeIfEnabled("application/pdf", source);
                u = true;
                return true;
            }
            return false;
        });
        return f.apply(this, arguments);
    }
    function g(e, t, n) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            if (e) {
                const r = e.msgs.last();
                return o("WAWebMsgQueryUtils").getAllDocsMsgs({
                    count: t,
                    direction: "before",
                    msgKey: r?.id
                });
            }
            return o("WAWebMsgQueryUtils").getAllDocsMsgs({
                count: n
            });
        });
        return h.apply(this, arguments);
    }
    l.__resetPreloadingStateForTests = d;
    l.maybePreloadWebTPIframeForPDFs = _;
}, 98);
__d("WDSIconWdsIcWhatsapp.react", [
    "WDSSvgIconHelpers"
], function(t, n, r, o, a, i, l) {
    const e = o("WDSSvgIconHelpers").createWDSIcon("wds-ic-whatsapp", 24, 24, "0 0 24 24", {
        fill: "currentColor"
    }, [
        [
            "g",
            {
                fill: "currentColor",
                clipPath: "url(#WDSIconWdsIcWhatsapp__a)"
            },
            [
                [
                    "path",
                    {
                        d: "M12.01 1.71a10.23 10.23 0 0 0-8.87 15.33l-1.36 5.13 5.31-1.26a10.23 10.23 0 1 0 4.92-19.2Zm0 18.63c-1.71 0-3.3-.51-4.63-1.4l-3.14.8.88-3a8.4 8.4 0 1 1 6.89 3.59Z"
                    }
                ],
                [
                    "path",
                    {
                        d: "m14.4 13.29 2.48 1.17a.3.3 0 0 1 .18.3c-.03.32-.16.97-.74 1.55-1.66 1.66-4.62-.21-4.74-.28a8.92 8.92 0 0 1-2.08-1.58 8.93 8.93 0 0 1-1.58-2.08c-.07-.12-1.94-3.08-.28-4.74A2.51 2.51 0 0 1 9.2 6.9a.3.3 0 0 1 .3.18l1.16 2.47a.3.3 0 0 1-.06.35l-.87.87a.6.6 0 0 0-.11.71 7.73 7.73 0 0 0 2.86 2.86.6.6 0 0 0 .7-.1l.88-.88a.3.3 0 0 1 .35-.06Z"
                    }
                ]
            ]
        ],
        [
            "defs",
            {},
            [
                [
                    "clipPath",
                    {
                        id: "WDSIconWdsIcWhatsapp__a"
                    },
                    [
                        [
                            "path",
                            {
                                fill: "white",
                                d: "M0 0h20.46v20.46H0z",
                                style: {
                                    fill: "#fff",
                                    fillOpacity: 1
                                },
                                transform: "translate(1.78 1.71)"
                            }
                        ]
                    ]
                ]
            ]
        ]
    ]);
    l.default = e;
}, 98);
__d("WDSTooltipConfig.react", [
    "BaseTooltipImpl.react",
    "react"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = [
        "headline",
        "tooltip"
    ];
    let s;
    const u = s || (s = o("react"));
    const c = {
        container: {
            maxWidth: "x1ncir08",
            paddingTop: "xexx8yu",
            paddingInlineEnd: "xyri2b",
            paddingBottom: "x18d9i69",
            paddingInlineStart: "x1c1uobl",
            minHeight: "xjwf9q1",
            backgroundColor: "xpip370",
            borderStartStartRadius: "xjwep3j",
            borderStartEndRadius: "x1t39747",
            borderEndEndRadius: "x1wcsgtt",
            borderEndStartRadius: "x1pczhz8",
            boxShadow: "x1agd393",
            pointerEvents: "x47corl",
            $$css: true
        },
        alignOffset: {
            marginTop: "xr9ek0c",
            marginInlineEnd: "xnnr8r",
            marginBottom: "xjpr12u",
            marginInlineStart: "xwklpps",
            $$css: true
        },
        contextualLayerXstyle: {
            zIndex: "xoz0ns6",
            pointerEvents: "x47corl",
            $$css: true
        }
    };
    function d(t) {
        const { headline, tooltip } = t;
        const a = babelHelpers.objectWithoutPropertiesLoose(t, e);
        return u.jsx(r("BaseTooltipImpl.react"), babelHelpers.extends({}, a, {
            tooltip,
            alignOffsetXstyle: c.alignOffset,
            xstyle: c.container,
            contextualLayerXstyle: c.contextualLayerXstyle
        }));
    }
    d.displayName = `${d.name} [from ${i.id}]`;
    l.default = d;
}, 98);
__d("CometQPLPayloadStore", [], function(t, n, r, o, a, i) {
    "use strict";
    let e = null;
    function l(t) {
        e = t;
    }
    function s() {
        const n = window;
        return e ?? n.pldmp ?? null;
    }
    let u = null;
    function c(e) {
        u = e;
    }
    function d() {
        const t = window;
        return u ?? t.plbs ?? null;
    }
    i.storePayloadMap = l;
    i.getPayloadMap = s;
    i.storePayloadBytesSent = c;
    i.getPayloadBytesSent = d;
}, 66);
__d("CometAddInlineTiming", [
    "CometQPLPayloadStore",
    "InteractionTracingMetrics",
    "performance",
    "performanceNavigationStart",
    "qplAnnotationsIntServerJS",
    "qplTagServerJS",
    "qplTimingsServerJS",
    "vc-tracker"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = r("performanceNavigationStart")();
    let u = null;
    function c() {
        if (u != null) {
            return u;
        }
        const t = new Map;
        if (typeof (e || (e = r("performance"))).getEntriesByType === "function") {
            const n = (e || (e = r("performance"))).getEntriesByType("resource");
            n.forEach((e)=>{
                const n = r("vc-tracker").trimHash(e.name);
                t.set(n, e);
            });
        }
        u = t;
        return u;
    }
    function d(e) {
        const n = window ?? self;
        const o = n && n._qplInl && typeof n._qplInl === "object" && n._qplInl.getPoints && typeof n._qplInl.getPoints === "function";
        if (o) {
            const a = n._qplInl.getPoints().client;
            if (a) {
                Object.keys(a).forEach((t)=>{
                    r("qplTimingsServerJS")(e, t, a[t]);
                });
            }
        }
    }
    function m(t, n, a, i = "") {
        d(n);
        const l = c();
        const u = r("qplTimingsServerJS")();
        if (u != null) {
            const m = u[n];
            const _ = o("CometQPLPayloadStore").getPayloadBytesSent();
            let f = 0;
            let g = 0;
            let h;
            const y = typeof (e || (e = r("performance"))).getEntriesByType === "function" ? (e || (e = r("performance"))).getEntriesByType("navigation") : null;
            if (m) {
                const C = {};
                Object.keys(m).forEach((e)=>{
                    const n = m[e] - s;
                    const o = {};
                    if (_ && _[e]) {
                        const l = _[e];
                        const u = l[0];
                        const c = l[1];
                        if (u != null) {
                            o.bytes = u;
                            f += u;
                        }
                        if (c != null) {
                            o.bytesCompressed = c;
                            g += c;
                        }
                    }
                    if (e.indexOf("ssr_") === 0) {
                        r("InteractionTracingMetrics").addMarkerPoint(t, i + e, "AppTiming", n, o);
                    } else {
                        C[e] = {
                            data: o,
                            end: n,
                            payloadType: e.indexOf("adp_") === 0 ? "RelayPreloader" : "TierFlush",
                            pkgStat: {
                                css: {
                                    cacheCount: 0,
                                    cacheRate: 0,
                                    decodedBodySize: 0,
                                    encodedBodySize: 0,
                                    totalCount: 0,
                                    transferSize: 0
                                },
                                js: {
                                    cacheCount: 0,
                                    cacheRate: 0,
                                    decodedBodySize: 0,
                                    encodedBodySize: 0,
                                    totalCount: 0,
                                    transferSize: 0
                                }
                            },
                            points: {
                                InlineInit: n
                            },
                            start: a
                        };
                        if (h == null || h.start < n) {
                            h = C[e];
                        }
                    }
                });
                if (y && y[0]) {
                    const b = y[0];
                    const { decodedBodySize, encodedBodySize, transferSize } = b;
                    r("InteractionTracingMetrics").addMetadata(t, `${i}encodedBodySize`, encodedBodySize);
                    r("InteractionTracingMetrics").addMetadata(t, `${i}decodedBodySize`, decodedBodySize);
                    r("InteractionTracingMetrics").addMetadata(t, `${i}transferSize`, transferSize);
                    if (h != null && h.data.bytes == null) {
                        h.data.bytes = decodedBodySize - f;
                        h.data.bytesCompressed = encodedBodySize - g;
                    }
                }
                const L = u[`${n}-server`];
                if (L) {
                    const k = ((e || (e = r("performance"))) == null ? undefined : (e || (e = r("performance"))).timing) || {};
                    let I = s;
                    const T = L.earlyFlush ?? L.earlyFlushEnd;
                    if (k.requestStart && k.responseStart && T) {
                        I = (k.requestStart + k.responseStart - T) / 2;
                    }
                    r("InteractionTracingMetrics").addAnnotationDouble(t, `${i}client_startTime_for_offset`, I);
                    r("InteractionTracingMetrics").addAnnotationDouble(t, `${i}client_nav_start`, s);
                    r("InteractionTracingMetrics").addAnnotationDouble(t, `${i}navTiming_requestStart`, k.requestStart);
                    r("InteractionTracingMetrics").addAnnotationDouble(t, `${i}navTiming_responseStart`, k.responseStart);
                    r("InteractionTracingMetrics").addAnnotationDouble(t, `${i}server_earlyFlush_for_offset_raw`, T);
                    r("InteractionTracingMetrics").addAnnotationDouble(t, `${i}server_requestStart`, I - s);
                    const D = {};
                    Object.keys(L).forEach((e)=>{
                        const n = L[e] + I - s;
                        if (e.endsWith("Start")) {
                            const o = e.slice(0, -5);
                            if (D[o] != null) {
                                D[o].start = n;
                            } else {
                                D[o] = {
                                    start: n
                                };
                            }
                        } else if (e.endsWith("End")) {
                            const a = e.slice(0, -3);
                            if (D[a] != null) {
                                D[a].end = n;
                            } else {
                                D[a] = {
                                    end: n
                                };
                            }
                        } else if (e.startsWith("adp_") && !e.startsWith("adp_thread") || e.endsWith("Preloader")) {
                            const l = L.allPreloadersStart != null ? L.allPreloadersStart + I - s : I - s;
                            D[e] = {
                                end: n,
                                start: l
                            };
                        } else {
                            r("InteractionTracingMetrics").addMarkerPoint(t, `${i}server_${e}`, "ServerTimings", n);
                        }
                        if (C[e]) {
                            C[e].points.ServerFlush = n;
                        }
                    });
                    Object.keys(D).forEach((e)=>{
                        const n = D[e];
                        const { end, start } = n;
                        if (end != null && start != null) {
                            r("InteractionTracingMetrics").addSubspan(t, `${i}server_${e}`, "ServerTimings", start, end, {});
                        } else if (end == null) {
                            r("InteractionTracingMetrics").addMarkerPoint(t, `${i}server_${e}Start`, "ServerTimings", start);
                        } else if (start == null) {
                            r("InteractionTracingMetrics").addMarkerPoint(t, `${i}server_${e}End`, "ServerTimings", end);
                        }
                    });
                }
                p(t, n, C, l);
            }
        }
    }
    function p(e, t, n, a) {
        const i = o("CometQPLPayloadStore").getPayloadMap();
        if (!(i == null || i[t] == null)) {
            const l = {
                css: {
                    cacheCount: 0,
                    cacheRate: 0,
                    decodedBodySize: 0,
                    encodedBodySize: 0,
                    totalCount: 0,
                    transferSize: 0
                },
                js: {
                    cacheCount: 0,
                    cacheRate: 0,
                    decodedBodySize: 0,
                    encodedBodySize: 0,
                    totalCount: 0,
                    transferSize: 0
                }
            };
            const s = i[t];
            Object.keys(s).forEach((t)=>{
                const refs = s[t].refs;
                const u = r("vc-tracker").trimHash(s[t].url);
                const c = a.get(u);
                if (c) {
                    const d = (/\.(js|css)(\?|$)/.exec(u) ?? [])[1];
                    if (d) {
                        l[d].decodedBodySize += c.decodedBodySize;
                        l[d].encodedBodySize += c.encodedBodySize;
                        l[d].transferSize += c.transferSize;
                        l[d].totalCount++;
                        if (c.transferSize === 0) {
                            l[d].cacheCount++;
                        }
                    }
                    const m = {
                        duration: c.responseEnd - c.requestStart,
                        end: c.responseEnd,
                        initiator: refs[0],
                        refs,
                        requestStart: c.requestStart,
                        start: c.startTime,
                        transferSize: c.transferSize,
                        url: u
                    };
                    refs.forEach((e)=>{
                        if (n[e]) {
                            if (n[m.initiator] && n[e].points.InlineInit < n[m.initiator].points.InlineInit) {
                                m.initiator = e;
                            }
                            if (typeof n[e].points.ResourceDone !== "number" || n[e].points.ResourceDone < m.end) {
                                n[e].points.LastResourceStart = m.start;
                                n[e].points.ResourceDone = m.end;
                            }
                        }
                    });
                    if (n[m.initiator] && (typeof n[m.initiator].points.DownloadStart !== "number" || n[m.initiator].points.DownloadStart > m.start)) {
                        n[m.initiator].points.DownloadStart = m.start;
                    }
                    r("InteractionTracingMetrics").addPayloadResource(e, t, m);
                    if (d && n[m.initiator]) {
                        const p = n[m.initiator].pkgStat[d];
                        p.encodedBodySize += c.encodedBodySize;
                        p.transferSize += c.transferSize;
                        p.totalCount++;
                        if (c.transferSize === 0) {
                            p.cacheCount++;
                        }
                    }
                }
            });
            Object.keys(n).forEach((t)=>{
                Object.keys(n[t].points).forEach((o)=>{
                    n[t].end = Math.max(n[t].end, n[t].points[o]);
                    if (o !== "ServerFlush") {
                        r("InteractionTracingMetrics").addMarkerPoint(e, `${t}_${o}`, n[t].payloadType, n[t].points[o], o === "InlineInit" ? n[t].data : {});
                    }
                });
                r("InteractionTracingMetrics").addPayloadTiming(e, t, n[t]);
            });
            for(const u in l){
                const c = l[u];
                if (c.totalCount > 0) {
                    c.cacheRate = Math.round(c.cacheCount / c.totalCount * 100);
                }
                for(const d in c){
                    r("InteractionTracingMetrics").addMetadata(e, `pageload_${u}_${d}`, c[d]);
                }
            }
        }
    }
    function _(e) {
        const t = r("qplTagServerJS")();
        if (t && t.length) {
            t.forEach((t)=>{
                if (t && t.length) {
                    t.forEach((t)=>{
                        r("InteractionTracingMetrics").addTag(e, "CometTags", t);
                    });
                }
            });
        }
    }
    function f(e, t) {
        const n = r("qplAnnotationsIntServerJS")();
        if (n != null) {
            const o = n[`${t}-server`];
            if (o) {
                Object.keys(o).forEach((t)=>{
                    const n = o[t];
                    r("InteractionTracingMetrics").addAnnotationInt(e, `server_${t}`, n);
                });
            }
        }
    }
    l.getResourceTimingMap = c;
    l.addInlineTiming = m;
    l.addServerTags = _;
    l.addServerAnnotationsInt = f;
}, 98);
__d("CometHeroInteractionImpl.react", [
    "hero-tracing",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = [
        "htmlAttributes",
        "pageletAriaProps",
        "ref",
        "xstyle"
    ];
    let s;
    let u;
    const c = u || (u = o("react"));
    function CometHeroInteraction(t) {
        const i = o("react-compiler-runtime").c(17);
        let l;
        let u;
        let d;
        let m;
        let p;
        if (i[0] !== t) {
            l = t.htmlAttributes;
            d = t.pageletAriaProps;
            m = t.ref;
            p = t.xstyle;
            u = babelHelpers.objectWithoutPropertiesLoose(t, e);
            i[0] = t;
            i[1] = l;
            i[2] = u;
            i[3] = d;
            i[4] = m;
            i[5] = p;
        } else {
            l = i[1];
            u = i[2];
            d = i[3];
            m = i[4];
            p = i[5];
        }
        let _;
        if (i[6] !== p) {
            _ = (s || (s = r("stylex")))(p);
            i[6] = p;
            i[7] = _;
        } else {
            _ = i[7];
        }
        const f = l?.onMouseLeave;
        const g = l?.style;
        let h;
        if (i[8] !== d || i[9] !== _ || i[10] !== f || i[11] !== g) {
            h = babelHelpers.extends({}, d, {
                className: _,
                onMouseLeave: f,
                style: g
            });
            i[8] = d;
            i[9] = _;
            i[10] = f;
            i[11] = g;
            i[12] = h;
        } else {
            h = i[12];
        }
        let y;
        if (i[13] !== u || i[14] !== m || i[15] !== h) {
            y = c.jsx(o("hero-tracing").HeroInteraction, babelHelpers.extends({
                htmlAttributes: h,
                ref: m
            }, u));
            i[13] = u;
            i[14] = m;
            i[15] = h;
            i[16] = y;
        } else {
            y = i[16];
        }
        return y;
    }
    CometHeroInteraction.displayName = "CometHeroInteraction";
    l.default = CometHeroInteraction;
}, 98);
__d("CometHeroInteractionWithDiv.react", [
    "CometHeroInteractionImpl.react",
    "cr:35630",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = s || (s = o("react"));
    function CComponent(t) {
        const a = o("react-compiler-runtime").c(12);
        const { ref, children, hidden, htmlAttributes, pageletAriaProps, xstyle } = t;
        let p;
        if (a[0] !== xstyle) {
            p = (e || (e = r("stylex")))(xstyle);
            a[0] = xstyle;
            a[1] = p;
        } else {
            p = a[1];
        }
        const _ = htmlAttributes?.onMouseLeave;
        const f = htmlAttributes?.style;
        let g;
        if (a[2] !== pageletAriaProps || a[3] !== p || a[4] !== _ || a[5] !== f) {
            g = babelHelpers.extends({
                className: p,
                onMouseLeave: _,
                style: f
            }, pageletAriaProps);
            a[2] = pageletAriaProps;
            a[3] = p;
            a[4] = _;
            a[5] = f;
            a[6] = g;
        } else {
            g = a[6];
        }
        const h = hidden === true ? "hidden" : "visible";
        let y;
        if (a[7] !== children || a[8] !== ref || a[9] !== g || a[10] !== h) {
            const Component = n("cr:35630");
            y = <Component htmlAttributes={g} mode={h} ref={ref}>{children}</Component>;
            a[7] = children;
            a[8] = ref;
            a[9] = g;
            a[10] = h;
            a[11] = y;
        } else {
            y = a[11];
        }
        return y;
    }
    const d = r("CometHeroInteractionImpl.react") != null ? r("CometHeroInteractionImpl.react") : CComponent;
    l.default = d;
}, 98);
__d("CometTailLoadLoggerConfig", [
    "qpl"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = {
        qplEvent: r("qpl")._(588713587, "4750")
    };
    function s(t) {
        e.qplEvent = t;
    }
    function u() {
        return e.qplEvent;
    }
    l.overrideQPLEvent = s;
    l.getQPLEvent = u;
}, 98);
__d("CometTailLoadLogger", [
    "CometTailLoadLoggerConfig",
    "QuickLogActionType",
    "QuickPerformanceLogger",
    "SiteData",
    "VisibilityListener",
    "gkx",
    "performanceNavigationStart",
    "uuidv4"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = 3000;
    const u = r("gkx")("6890");
    let c = 0;
    const d = r("performanceNavigationStart")();
    const m = new Map;
    const p = new Map;
    const _ = new Map;
    const f = new Set;
    const sessionId = r("uuidv4")();
    const h = new Set;
    function y() {
        m.clear();
        p.clear();
        _.clear();
        f.clear();
    }
    function C(t, n, a) {
        c++;
        if (u) {
            (e || (e = r("QuickPerformanceLogger"))).markerStart(o("CometTailLoadLoggerConfig").getQPLEvent(), c, a.current + d, {
                trackedForLoss: true
            });
        }
        const i = `${t}_${n}`;
        _.set(i, c);
    }
    function b(e, t) {
        p.set(e, t.current);
    }
    function v(e, t, n) {
        const r = `${e}_${t}`;
        m.set(r, n);
    }
    function S(t, n, a, i, tracePolicy) {
        const c = `${t}_${n}`;
        let interruptedConsumption = 0;
        const current = p.get(t) || a;
        const v = m.get(c);
        if (v != null) {
            interruptedConsumption = v;
            m.delete(c);
        }
        let S = _.get(c);
        if (S == null) {
            C(t, n, {
                current
            });
            S = _.get(c);
        }
        const R = o("VisibilityListener").getHiddenTime(current + r("performanceNavigationStart")(), a + r("performanceNavigationStart")());
        if (u) {
            (e || (e = r("QuickPerformanceLogger"))).markerAnnotate(o("CometTailLoadLoggerConfig").getQPLEvent(), {
                int: {
                    client_revision: r("SiteData").client_revision,
                    hidden: +(R != null && R > 0),
                    interruptedConsumption,
                    position: n,
                    windowHeight: Math.floor(window.innerHeight / 100)
                },
                string: {
                    client_push_phase: r("SiteData").push_phase,
                    pageletName: t,
                    sessionId,
                    tracePolicy
                }
            }, {
                instanceKey: S
            });
            e.markerEnd(o("CometTailLoadLoggerConfig").getQPLEvent(), i, S, a + d);
        }
        if (i !== 2 || i === 706 && interruptedConsumption >= s) {
            const scrollingFNLType = Object.keys(r("QuickLogActionType")).find((e)=>r("QuickLogActionType")[e] === i) || "UNKNOWN";
            h.add({
                position: n,
                scrollingFNLType,
                tracePolicy
            });
        }
        f.add(c);
        _.delete(c);
    }
    function R(e, t, n, r, o) {
        const a = `${e}_${t}`;
        const i = !f.has(a);
        if (i) {
            S(e, t, n, r, o);
        }
        f.delete(a);
    }
    function L() {
        return h;
    }
    l.alreadyFinishedMarkerKeys = f;
    l.reset = y;
    l.startTailLoadTracing = C;
    l.setTailLoadStartTime = b;
    l.reportInterruptedConsumption = v;
    l.endTailloadTracing = S;
    l.logMarkerEnd = R;
    l.dump = L;
}, 98);
__d("filterMap", [], function(t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
        const n = new Map;
        for (const [o, a] of e){
            if (t(a, o)) {
                n.set(o, a);
            }
        }
        return n;
    }
    i.default = e;
}, 66);
__d("HeroBootloadPerfStore", [
    "BootloaderEvents",
    "InteractionTracingMetrics",
    "ResourceTimingStore",
    "filterMap",
    "gkx",
    "performanceNavigationStart"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = [
        "encodedBodySize",
        "transferSize",
        "totalCount",
        "cacheCount"
    ];
    const s = [
        "t1",
        "t2",
        "t3"
    ];
    const u = [
        "untiered"
    ];
    const c = [
        "js",
        "css"
    ];
    const d = new Map;
    o("BootloaderEvents").onBootload(function(e) {
        e.components.forEach((t)=>{
            d.set(t, e);
        });
    });
    function m(e, t) {
        if (t == null) {
            e.missingData++;
            return;
        }
        if (e.urls) {
            e.urls.add(t.name);
        }
        e.encodedBodySize += t.encodedBodySize;
        e.decodedBodySize += t.decodedBodySize;
        e.transferSize += t.transferSize;
        e.totalCount += 1;
        if (t.transferSize === 0) {
            e.cacheCount += 1;
        }
    }
    function p(e) {
        return e.src.indexOf("data") === 0;
    }
    function _(e, t, n) {
        const r = new Map;
        function a(e) {
            const n = r.get(e) ?? {
                cacheCount: 0,
                decodedBodySize: 0,
                encodedBodySize: 0,
                missingData: 0,
                totalCount: 0,
                transferSize: 0,
                urls: null
            };
            r.set(e, n);
            return n;
        }
        function i(e, r) {
            const i = o("ResourceTimingStore").getEntryForURL(r.src);
            m(a(`used_${r.type}`), i);
            m(a(`used_${e}`), i);
            m(a(`used_${e}_${r.type}`), i);
            if (i != null && i.responseEnd >= t && i.responseEnd <= n) {
                m(a(`downloaded_${e}`), i);
                m(a(`downloaded_${r.type}`), i);
                m(a(`downloaded_${e}_${r.type}`), i);
            }
        }
        function l(e, src) {
            e.decodedBodySize += src.length;
            e.totalCount += 1;
        }
        function s(e, t) {
            l(a(`inline_${e}`), t.src);
            l(a(`inline_${t.type}`), t.src);
            l(a(`inline_${e}_${t.type}`), t.src);
        }
        const u = ()=>{
            const e = c[0];
            const t = c[1];
            t.forEach((t, n)=>{
                if (t.type === "css" || t.type === "js") {
                    if (p(t)) {
                        s(e, t);
                    } else {
                        i(e, t);
                    }
                }
            });
        };
        for (var c of e){
            u();
        }
        return r;
    }
    function f(e, t, n) {
        const o = e.get(t) ?? new Map;
        e.set(t, o);
        for (const a of n){
            if (a.type === "css" || a.type === "js") {
                o.set(a.src, a);
            }
        }
    }
    function g(t, n, o, a) {
        if (r("gkx")("19041") && !r("gkx")("19047")) {
            return {};
        }
        const i = _(o, t, n);
        const l = {};
        for (const s of a){
            for (const u of c){
                const p = `downloaded_${s}_${u}`;
                for (const f of e){
                    l[`${p}_${f}`] = i.get(p)?.[f] ?? 0;
                }
                const y = `inline_${s}_${u}`;
                l[`${y}_decodedBodySize`] = i.get(y)?.decodedBodySize ?? 0;
            }
        }
        return l;
    }
    function h(t, n, o, a) {
        if (t.annotations.int?.hasExtraResourceMetadata === 1) {
            const s = _(n, t.start, t.completed ?? t.start);
            [].concat(c, a).forEach((n)=>{
                const i = s.get(`downloaded_${n}`);
                for (const l of e){
                    r("InteractionTracingMetrics").addMetadata(t.traceId, `${o}_downloaded_${n}_${l}`, i?.[l] ?? 0);
                }
                const c = s.get(`inline_${n}`);
                r("InteractionTracingMetrics").addMetadata(t.traceId, `${o}_inline_${n}_decodedBodySize`, c?.decodedBodySize ?? 0);
            });
        }
    }
    function y(e) {
        const t = new Map;
        e.heroRelay.forEach(({ pageletStack, queries })=>{
            for (const l of queries){
                const s = l.hasteResponseLogEvents;
                for (const c of s){
                    const p = c.startTime - r("performanceNavigationStart")();
                    const _ = c.logTime - r("performanceNavigationStart")();
                    if (_ < e.start || p > (e.completed ?? Infinity)) {
                        return;
                    }
                    const h = o("BootloaderEvents").flattenResourceMapSet(c.rsrcs);
                    const y = new Map;
                    f(t, "untiered", h.values());
                    f(y, "untiered", h.values());
                    const C = g(p, _, y, u);
                    r("InteractionTracingMetrics").addSubspan(e.traceId, `Relay3D: ${l.name}`, "HeroTracing", Math.max(e.start, p), Math.min(e.completed ?? Infinity, _), babelHelpers.extends({}, {
                        pagelet: pageletStack[pageletStack.length - 1],
                        pageletStack,
                        spanType: "Relay3D"
                    }, C, {
                        full_duration: (_ - p) / 1000,
                        is_preloaded: l.isPreloaded === true
                    }));
                }
            }
        });
        h(e, t, "relay3d", u);
    }
    function C(e) {
        const n = Array.from(new Set([].concat(...e.heroBootloads.map((e)=>e.moduleIDs))));
        const a = new Map;
        const i = new Map;
        n.forEach((e)=>{
            const t = d.get(e);
            if (t) {
                i.set(e, t);
            }
        });
        for (const l of i.values()){
            f(a, "t1", o("BootloaderEvents").flattenResourceMapSet(l.tierOne).values());
            f(a, "t2", o("BootloaderEvents").flattenResourceMapSet(l.tierTwo).values());
            f(a, "t3", o("BootloaderEvents").flattenResourceMapSet(l.tierThree).values());
        }
        h(e, a, "bootload", s);
        e.heroBootloads.forEach(({ moduleIDs, pageletStack })=>{
            const o = new Set(moduleIDs.map((e)=>d.get(e)).filter(Boolean));
            b(e, o, pageletStack, "Bootload");
        });
        if (r("gkx")("23414")) {
            const u = !r("gkx")("19041") || r("gkx")("19047");
            if (u) {
                const c = e.heroBootloads.map(({ moduleIDs })=>moduleIDs).flat();
                const m = r("filterMap")(d, function(e, t) {
                    return !c.includes(t);
                });
                b(e, m, [], "BootloadOutside");
            }
        }
    }
    function b(e, t, n, a) {
        t.forEach((t)=>{
            if (!(t.callbackEnd - r("performanceNavigationStart")() < e.start)) {
                const l = new Map;
                f(l, "t1", o("BootloaderEvents").flattenResourceMapSet(t.tierOne).values());
                f(l, "t2", o("BootloaderEvents").flattenResourceMapSet(t.tierTwo).values());
                f(l, "t3", o("BootloaderEvents").flattenResourceMapSet(t.tierThree).values());
                const u = g(t.startTime - r("performanceNavigationStart")(), t.callbackEnd - r("performanceNavigationStart")(), l, s);
                const c = `${a}: ${t.components.join()}`;
                const d = a === "Bootload" ? "HeroTracing" : "BootloadOutside";
                r("InteractionTracingMetrics").addSubspan(e.traceId, c, d, Math.max(e.start, t.startTime - r("performanceNavigationStart")()), Math.min(e.completed ?? Infinity, t.callbackStart - r("performanceNavigationStart")()), babelHelpers.extends({}, {
                    bootloadComponents: t.components,
                    bootloadRef: t.ref,
                    pagelet: n[n.length - 1],
                    pageletStack: n,
                    spanType: a
                }, u));
            }
        });
    }
    function v(e) {
        o("ResourceTimingStore").init();
        C(e);
        y(e);
    }
    l.addStaticResourcesStats = v;
}, 98);
__d("HeroTracingCoreConfigWWW", [
    "gkx"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = {
        alwaysMarkMutationRootAsVisualChange: (e = r("gkx"))("20863"),
        enableReactProfiling: e("12286"),
        enableRemountCompletionContinuation: e("12294"),
        enableResetCompletedFix: e("12288"),
        fixParentInteractionIdWhenCancel: e("12343"),
        removeHoldOnParentContextOnNewInteraction: e("12290")
    };
    l.default = s;
}, 98);
__d("useCometTailLoadPageletTracker", [
    "CometTailLoadLogger",
    "intersectionObserverEntryIsIntersecting",
    "react",
    "useCometRouteTracePolicy"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const { useCallback, useRef } = s;
    function useD(e, t, n) {
        const aRef = useRef(null);
        const iRef = useRef(false);
        const lRef = useRef(null);
        const s = r("useCometRouteTracePolicy")();
        return useCallback(function(u) {
            if (u == null) {
                lRef.current?.();
                lRef.current = null;
                return;
            }
            if (n === true && e != null && t != null && aRef.current !== u) {
                aRef.current = u;
                const c = function(a) {
                    a.forEach((n)=>{
                        if (r("intersectionObserverEntryIsIntersecting")(n) && !iRef.current) {
                            iRef.current = true;
                            if (lRef.current != null) {
                                lRef.current();
                            }
                            lRef.current = null;
                            o("CometTailLoadLogger").logMarkerEnd(e, t, n.time, 2, s);
                        }
                    });
                };
                const d = new IntersectionObserver(c);
                d.observe(u);
                lRef.current = function() {
                    aRef.current = null;
                    d.disconnect();
                };
            }
        }, [
            e,
            t,
            n
        ]);
    }
    l.default = useD;
}, 98);
__d("HeroTracingCoreDependenciesWWW", [
    "cr:12179",
    "useCometTailLoadPageletTracker"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = {
        useTailLoadPageletTracker: r("useCometTailLoadPageletTracker"),
        UserTimingUtils: n("cr:12179")
    };
    l.default = e;
}, 98);
__d("InteractionTracingConfigDefault", [
    "OneTraceQPLLogger",
    "SiteData",
    "WebDriverConfig",
    "gkx",
    "performanceNavigationStart",
    "qpl"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const timeout = o("WebDriverConfig").isJestE2ETestRun ? 300000 : 60000;
    const allowedQPLPointTypes = new Set([
        "AppTiming",
        "TierFlush",
        "NavigationTiming",
        "VisualCompletion",
        "TestMetrics",
        "ServerTimings"
    ]);
    const cancelOnBackground = r("gkx")("22968") && r("gkx")("1514");
    const d = {
        cancelOnBackground,
        defaultTracePolicy: "default",
        enableInstrumentationCorrectnessLogging: r("gkx")("3739"),
        instrumentationCorrectnessQPLEvent: r("qpl")._(340787201, "419"),
        enableMemoryLogging: r("gkx")("20980"),
        enableVCTracker: true,
        heroLatePlaceholderDetection: r("gkx")("20983"),
        heroDebugTracing: r("gkx")("10726"),
        pkgCohort: r("SiteData").pkg_cohort,
        timeout,
        qplActionCancelOnNavigation: false,
        qplActionMap: o("OneTraceQPLLogger").qplActionMap,
        qplBaseTimestamp: r("performanceNavigationStart")(),
        useDocumentBodyForVCRoot: true,
        navigationCancelsInteractions: false,
        failLoggingFixCometErrorBoundary: r("gkx")("11582"),
        failOnCometErrorBoundary: r("gkx")("1154") ? "fail" : r("gkx")("196") ? "annotate" : "disabled",
        qplPointFilterRegex: /(^(server_)?adp_|Relay_|late_mutation.+([2-9]|\d\d))|(.+_)?ssr_.+([2-9]|\d\d)|Queue_|Render_/,
        cleanUpTraceTimeout: r("gkx")("13090") ? 10 * 1000 : 1800 * 1000,
        allowedQPLPointTypes,
        clientRevision: r("SiteData").client_revision,
        serverRevision: r("SiteData").server_revision ?? 0,
        pushPhase: r("SiteData").push_phase,
        qplEnableE2ETracing: r("gkx")("15620"),
        enableUserTimings: r("gkx")("20484"),
        enableUserTimingsVerbose: r("gkx")("20485"),
        heroBootloadStatsAfterQPL: r("gkx")("9056"),
        clearAllMapsOnCleanup: r("gkx")("9206")
    };
    l.DEFAULT_TRACING_CONFIG = d;
}, 98);
__d("WebLoomBanzaiTransport", [
    "Banzai"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = {
        post: function(t, n) {
            r("Banzai").post("loom_trace", t, {
                callback: n.onComplete,
                delay: n.isHighPri ? r("Banzai").VITAL_WAIT : r("Banzai").BASIC_WAIT
            });
        },
        flush: function(t, n) {
            r("Banzai").flush(t, n);
        }
    };
    l.default = e;
}, 98);
__d("WebLoomStaticResourceFileTypes", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = {
        js: "js",
        css: "css",
        wasm: "wasm",
        woff: "woff",
        woff2: "woff2",
        otf: "otf",
        eot: "eot",
        ttf: "ttf"
    };
    function l(t) {
        return Object.prototype.hasOwnProperty.call(e, t);
    }
    i.WebLoomStaticResourceFileTypes = e;
    i.isStaticResourceFileType = l;
}, 66);
__d("sanitizeURIStringForLoom", [
    "WebLoomStaticResourceFileTypes"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = new Map;
    let s = 0;
    const u = /(\d{4,})/gm;
    const c = /([a-f0-9]{8,})/gm;
    function d(e) {
        const t = e.replace(u, "{N}");
        return t.replace(c, "{N}");
    }
    function m(e) {
        const t = e.getPath();
        const n = t.lastIndexOf(".");
        if (n === -1) {
            return "";
        }
        return t.substring(n + 1);
    }
    function p() {
        return s++;
    }
    function _(e) {
        if (e.getProtocol() !== "http" && e.getProtocol() !== "https") {
            return false;
        }
        const t = Number(e.getPort());
        if (t && t !== 80 && t !== 443) {
            return false;
        }
        return !!e.isSubdomainOfDomain("fbcdn.net");
    }
    function f(e, t) {
        const n = new t.URI(e);
        const r = m(n);
        n.setQueryString("");
        n.setFragment("");
        if (r === "" || r === "php" || r === "ico") {
            const a = d(n.getPath());
            if (a !== n.getPath()) {
                n.setPath(`${a}/sanitized-${p()}`);
            }
        } else {
            if (!o("WebLoomStaticResourceFileTypes").isStaticResourceFileType(r)) {
                n.setPath(`/sanitized${_(n) ? "-cdn" : ""}-${p()}.${r}`);
            }
        }
        return n.toString();
    }
    function g(t, n) {
        if (n.isBrowser("IE")) {
            return "";
        }
        if (!e.has(t)) {
            e.set(t, f(t, n));
        }
        return e.get(t) || "";
    }
    l.default = g;
}, 98);
__d("InteractionTracingLoomProvider", [
    "interaction-tracing-metrics",
    "sanitizeURIStringForLoom"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
        return e.substr(0, 7) === "http://" || e.substr(0, 8) === "https://";
    }
    class s {
        constructor(e, t, n){
            this.$1 = e;
            this.$2 = t;
            this.$3 = n;
        }
        $4(n) {
            if (this.$3.sanitizeURIs && e(n)) {
                return r("sanitizeURIStringForLoom")(n, this.$2);
            }
            return n;
        }
        $5(t, n) {
            const e = this.$1;
            if (e) {
                e.buffer.addEvent(t, n + this.$3.appStart);
            }
        }
        $6(t, n) {
            const e = this;
            const t_subSpans = t.subSpans;
            const o = (execUnitName)=>{
                t_subSpans[execUnitName].forEach((r, o)=>{
                    const i = {
                        blockName: `${execUnitName}_${o}`,
                        blockType: r.type,
                        execUnitName,
                        traceId: n,
                        traceType: t.type
                    };
                    e.$5(babelHelpers.extends({
                        type: "INTERACTION_TRACE_START"
                    }, i), r.start);
                    e.$5(babelHelpers.extends({
                        blockAnnotations: r.data,
                        type: "INTERACTION_TRACE_END"
                    }, i), r.end);
                });
            };
            for(const a in t_subSpans){
                o(a);
            }
        }
        $7(t, n) {
            const t_payloadResources = t.payloadResources;
            for(const r in t_payloadResources){
                const o = t_payloadResources[r];
                const a = this.$4(r);
                const i = {
                    blockName: a,
                    blockType: "PayloadResources",
                    execUnitName: o.initiator,
                    traceId: n,
                    traceType: t.type
                };
                this.$5(babelHelpers.extends({
                    type: "INTERACTION_TRACE_START"
                }, i), o.start);
                this.$5({
                    blockName: a,
                    execUnitName: o.initiator,
                    pointAnnotations: {},
                    pointName: "requestStart",
                    traceId: n,
                    type: "INTERACTION_TRACE_POINT"
                }, o.requestStart);
                this.$5(babelHelpers.extends({
                    blockAnnotations: {
                        refs: o.refs.join(","),
                        transferSize: o.transferSize,
                        url: this.$4(o.url)
                    },
                    type: "INTERACTION_TRACE_END"
                }, i), o.end);
            }
        }
        $8(t, n) {
            const t_imagePreloaderTimings = t.imagePreloaderTimings;
            for(const r in t_imagePreloaderTimings){
                const o = t_imagePreloaderTimings[r];
                const a = this.$4(r);
                const i = {
                    blockName: a,
                    blockType: "ImagePreloaders",
                    execUnitName: o.playloadName,
                    traceId: n,
                    traceType: t.type
                };
                this.$5(babelHelpers.extends({
                    type: "INTERACTION_TRACE_START"
                }, i), o.start);
                this.$5({
                    blockName: a,
                    execUnitName: o.playloadName,
                    pointAnnotations: {},
                    pointName: "requestStart",
                    traceId: n,
                    type: "INTERACTION_TRACE_POINT"
                }, o.requestStart);
                this.$5(babelHelpers.extends({
                    blockAnnotations: {
                        url: a
                    },
                    type: "INTERACTION_TRACE_END"
                }, i), o.end);
            }
        }
        $9(t, n) {
            const e = this;
            const t_payloadTimings = t.payloadTimings;
            const o = (a)=>{
                const o = t_payloadTimings[a];
                if (o.start == null || o.end == null) {
                    return {
                        v: undefined
                    };
                }
                const i = {
                    blockName: a,
                    blockType: o.payloadType,
                    execUnitName: a,
                    traceId: n,
                    traceType: t.type
                };
                e.$5(babelHelpers.extends({
                    type: "INTERACTION_TRACE_START"
                }, i), o.start);
                Object.keys(o.points).forEach((pointName)=>{
                    e.$5({
                        blockName: a,
                        execUnitName: a,
                        pointAnnotations: {},
                        pointName,
                        traceId: n,
                        type: "INTERACTION_TRACE_POINT"
                    }, o.points[pointName]);
                });
                const blockAnnotations = babelHelpers.extends({}, o.data);
                for(const s in o.pkgStat){
                    const u = o.pkgStat[s];
                    for(const c in u){
                        blockAnnotations[`${s}_${c}`] = u[c];
                    }
                }
                e.$5(babelHelpers.extends({
                    blockAnnotations,
                    type: "INTERACTION_TRACE_END"
                }, i), o.end);
            };
            let a;
            for(const i in t_payloadTimings){
                a = o(i);
                if (a) {
                    return a.v;
                }
            }
        }
        $10(t, n) {
            const t_markerPoints = t.markerPoints;
            for(const r in t_markerPoints){
                const o = t_markerPoints[r];
                const { timestamp, type } = o;
                const l = {
                    blockName: r,
                    blockType: type,
                    execUnitName: r,
                    traceId: n,
                    traceType: t.type
                };
                this.$5(babelHelpers.extends({
                    type: "INTERACTION_TRACE_START"
                }, l), timestamp);
                this.$5(babelHelpers.extends({
                    blockAnnotations: o.data || {},
                    type: "INTERACTION_TRACE_END"
                }, l), timestamp);
            }
        }
        $11(t, n) {
            const t_requireDeferreds = t.requireDeferreds;
            for(const r in t_requireDeferreds){
                const o = t_requireDeferreds[r];
                const a = {
                    blockName: r,
                    blockType: "RequireDeferreds",
                    execUnitName: r,
                    traceId: n,
                    traceType: t.type
                };
                const i = o.end;
                if (i != null) {
                    this.$5(babelHelpers.extends({
                        type: "INTERACTION_TRACE_START"
                    }, a), o.start);
                    this.$5(babelHelpers.extends({
                        blockAnnotations: {
                            alreadyRequired: !!o.alreadyRequired
                        },
                        type: "INTERACTION_TRACE_END"
                    }, a), i);
                }
            }
        }
        $12(blockType, n, r, o) {
            for(let e = 0; e < o.length; e++){
                const a = {
                    blockName: `${blockType}_${e}`,
                    blockType,
                    execUnitName: `${blockType}_${e}`,
                    traceId: r,
                    traceType: n.type
                };
                this.$5(babelHelpers.extends({
                    type: "INTERACTION_TRACE_START"
                }, a), o[e].start);
                this.$5(babelHelpers.extends({
                    blockAnnotations: {},
                    type: "INTERACTION_TRACE_END"
                }, a), o[e].end);
            }
        }
        $13(t) {
            const e = this;
            if (t.vcStateLog != null) {
                t.vcStateLog.forEach(([o, a], r)=>{
                    const i = {
                        blockName: r,
                        blockType: "VCState",
                        execUnitName: "VCState",
                        traceId: t.traceId,
                        traceType: t.type
                    };
                    e.$5(babelHelpers.extends({
                        type: "INTERACTION_TRACE_START"
                    }, i), o);
                    e.$5(babelHelpers.extends({
                        blockAnnotations: {},
                        type: "INTERACTION_TRACE_END"
                    }, i), a);
                });
            }
            if (t.vcMutationLog != null) {
                t.vcMutationLog.forEach((n)=>{
                    const a = n.finalState ?? "";
                    const i = {
                        blockName: `${n.mutationType}_${a}_${n.veid}`,
                        blockType: "VCMutation",
                        execUnitName: n.finalState ?? "mutation",
                        traceId: t.traceId,
                        traceType: t.type
                    };
                    e.$5(babelHelpers.extends({
                        type: "INTERACTION_TRACE_START"
                    }, i), n.mutationTime);
                    e.$5(babelHelpers.extends({
                        blockAnnotations: {
                            data: JSON.stringify(n)
                        },
                        type: "INTERACTION_TRACE_END"
                    }, i), n.paintTime);
                });
            }
        }
        $14(t) {
            const e = this;
            t.factoryTimings.forEach((n)=>{
                const r = {
                    blockName: n.name,
                    blockType: "Factories",
                    execUnitName: "Factories",
                    traceId: t.traceId,
                    traceType: t.type
                };
                e.$5(babelHelpers.extends({
                    type: "INTERACTION_TRACE_START"
                }, r), n.start);
                e.$5(babelHelpers.extends({
                    blockAnnotations: {},
                    type: "INTERACTION_TRACE_END"
                }, r), n.end);
            });
        }
        loomTraceWillEnd() {
            const e = this;
            const t = this.$1;
            if (t) {
                const n = o("interaction-tracing-metrics").InteractionTracingMetricsCore.dump();
                const r = [];
                if (t.triggerInfo.type === "INTERACTION" && t.triggerInfo.interaction_id != null) {
                    r.push(t.triggerInfo.interaction_id);
                } else {
                    for(const a in n){
                        const i = n[a];
                        const l = i.completed != null ? this.$3.appStart + i.completed : null;
                        if (l == null || l > t.startTime) {
                            r.push(a);
                        }
                    }
                }
                r.forEach((t)=>{
                    const r = n[t];
                    e.$6(r, t);
                    e.$10(r, t);
                    e.$11(r, t);
                    e.$7(r, t);
                    e.$8(r, t);
                    e.$9(r, t);
                    e.$12("hidden", r, t, r.hiddenTimings);
                    e.$12("offline", r, t, r.offlineTimings);
                    e.$14(r);
                    e.$13(r);
                });
            }
        }
    }
    const u = {
        getInstance: function(t, n, r) {
            return new s(t, n, r);
        },
        isSupported: function() {
            return true;
        },
        loomProviderId: "InteractionTracing"
    };
    l.default = u;
}, 98);
__d("QPLLoomProvider", [
    "QPLEvent"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    class s {
        constructor(t, n){
            var r = this;
            this.$2 = {};
            this.$1 = n.QuickPerformanceLogger.addListener({
                onMarkerStart: function(a, i, l) {
                    const n = (e || (e = o("QPLEvent"))).getMarkerId(a);
                    if (l >= t.startTime) {
                        t.buffer.addEvent({
                            type: "QPL_START",
                            markerId: n,
                            instanceKey: i
                        }, l);
                    }
                    if (!r.$2[n]) {
                        r.$2[n] = {};
                    }
                    r.$2[n][i] = l;
                },
                onMarkerEnd: function(action, a, i, l) {
                    const n = (e || (e = o("QPLEvent"))).getMarkerId(a);
                    if (l >= t.startTime) {
                        t.buffer.addEvent({
                            type: "QPL_END",
                            action,
                            markerId: n,
                            instanceKey: i
                        }, l);
                    }
                },
                onMarkerPoint: function(r, a, i, l, s) {
                    const n = (e || (e = o("QPLEvent"))).getMarkerId(r);
                    if (s >= t.startTime) {
                        t.buffer.addEvent({
                            type: "QPL_POINT",
                            markerId: n,
                            instanceKey: a,
                            name: i,
                            data: l?.string?.__key
                        }, s);
                    }
                },
                onAnnotation: function(a, i, annotationKey, annotationValue) {
                    const n = (e || (e = o("QPLEvent"))).getMarkerId(a);
                    const u = r.$2[n];
                    const c = u?.[i];
                    if (c != null && c >= t.startTime) {
                        t.buffer.addEvent({
                            type: "QPL_ANNOTATION",
                            markerId: n,
                            instanceKey: i,
                            annotationKey,
                            annotationValue
                        }, c);
                    }
                }
            });
        }
        loomTraceWillEnd() {
            this.$1.dispose();
        }
    }
    const u = {
        loomProviderId: "QPL",
        isSupported: function() {
            return true;
        },
        getInstance: function(t, n) {
            return new s(t, n);
        }
    };
    l.default = u;
}, 98);
__d("ResourceTimingLoomProvider", [
    "clamp",
    "performanceNow",
    "sanitizeURIStringForLoom"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    function s(initiatorType, resourceName) {
        const n = resourceName.substring(resourceName.lastIndexOf(".") + 1);
        if (n == "js" || n == "css") {
            return n;
        }
        if (initiatorType == "img" || n == "png" || n == "jpg" || n == "ico") {
            return "img";
        }
        return initiatorType;
    }
    class u {
        constructor(e, t, n){
            this.$1 = e;
            this.$2 = t;
            this.$3 = n;
        }
        static isSupported() {
            return window.performance && window.performance.getEntriesByType && window.performance.timing && window.performance.timing.navigationStart;
        }
        $4(t) {
            const e = this;
            const { endTime, entry, resourceId, resourceName, resourceType, startTime } = t;
            const u = this.$1;
            if (u != null) {
                const c = entry;
                u.buffer.addEvent({
                    type: "RESOURCE_TIMING_START",
                    resourceType,
                    resourceId,
                    resourceName,
                    encodedSize: c != null && typeof c.encodedBodySize === "number" ? c.encodedBodySize : 0,
                    decodedSize: c != null && typeof c.decodedBodySize === "number" ? c.decodedBodySize : 0,
                    transferSize: c != null && typeof c.transferSize === "number" ? c.transferSize : 0,
                    responseStatus: c != null && typeof c.responseStatus === "number" ? c.responseStatus : -1
                }, startTime);
                const d = (pointName, i)=>{
                    const t = i + e.$3.appStart;
                    u.buffer.addEvent({
                        type: "RESOURCE_TIMING_POINT",
                        resourceType,
                        resourceId,
                        pointName
                    }, r("clamp")(t, startTime, endTime));
                };
                d("requestStart", entry.requestStart);
                d("responseStart", entry.responseStart);
                u.buffer.addEvent({
                    type: "RESOURCE_TIMING_END",
                    resourceType,
                    resourceId
                }, endTime);
            }
        }
        $5(t) {
            if (this.$3.sanitizeURIs) {
                return r("sanitizeURIStringForLoom")(t, this.$2);
            }
            const e = t.indexOf("?");
            if (e == -1) {
                return t;
            }
            return t.substring(0, e);
        }
        loomTraceWillEnd() {
            const t = this;
            const n = this.$1;
            if (n != null) {
                const o = n.startTime;
                const a = (e || (e = r("performanceNow")))() + this.$3.appStart;
                window.performance.getEntriesByType("resource").filter((e)=>e.startTime < e.responseEnd && e.startTime + t.$3.appStart >= o && e.responseEnd + t.$3.appStart <= a).forEach((e, n)=>{
                    const r = e.startTime + t.$3.appStart;
                    const o = e.responseEnd + t.$3.appStart;
                    const resourceName = t.$5(e.name);
                    const i = s(e.initiatorType, resourceName);
                    t.$4({
                        entry: e,
                        resourceName,
                        resourceId: n,
                        resourceType: i,
                        startTime: r,
                        endTime: o
                    });
                });
                const i = window.performance.getEntriesByType("navigation")[0];
                const l = typeof PerformanceNavigationTiming !== "undefined" && i instanceof PerformanceNavigationTiming ? i : null;
                if (l != null && (l.responseEnd === 0 || l.responseEnd + this.$3.appStart >= o)) {
                    const u = "document";
                    const c = -1;
                    const d = o > this.$3.appStart ? o : this.$3.appStart;
                    const m = l.responseEnd === 0 ? a : l.responseEnd + this.$3.appStart;
                    this.$4({
                        entry: l,
                        resourceName: this.$5(location.href),
                        resourceId: c,
                        resourceType: u,
                        startTime: d,
                        endTime: m
                    });
                }
            }
            this.$1 = null;
        }
    }
    const c = {
        loomProviderId: "ResourceTiming",
        isSupported: function() {
            return u.isSupported();
        },
        getInstance: function(t, n, r) {
            return new u(t, n, r);
        }
    };
    l.default = c;
}, 98);
__d("VisualCompletionLoomProvider", [
    "vc-tracker"
], function(t, n, r, o, a, i, l) {
    "use strict";
    class e {
        constructor(e, t, n){
            var o = this;
            this.$3 = function(e) {
                const t = o.$1;
                if (t != null && e != null && e.startTime + o.$2.appStart >= t.startTime) {
                    const n = new Map;
                    e.elements.forEach((e)=>{
                        n.set(e.timestamp, (n.get(e.timestamp) ?? 0) + e.pixels);
                    });
                    Array.from(n.entries()).sort((e, t)=>e[0] - t[0]).reduce((acc, [a, i])=>{
                        const l = acc + i;
                        t.buffer.addEvent({
                            progress: l / e.paintedPixels,
                            type: "VISUAL_COMPLETION_PROGRESS"
                        }, a + o.$2.appStart);
                        return l;
                    }, 0);
                    o.$4(t, e, e.elements.filter((e)=>e.parent == null), 0);
                }
            };
            this.$1 = e;
            r("vc-tracker").VisualCompletionTraceObserver.subscribe(this.$3);
            this.$2 = n;
        }
        static isSupported() {
            return true;
        }
        $4(t, n, r, depth, a = null) {
            const e = this;
            r.slice().sort((e, t)=>e.timestamp - t.timestamp).forEach((r)=>{
                const r_rectangle = r.rectangle;
                const l = r.type === "component" || a == null ? r.timestamp : Math.max(r.timestamp, a.timestamp);
                t.buffer.addEvent({
                    depth,
                    elementType: r.type,
                    height: Math.floor(r_rectangle.bottom - r_rectangle.top),
                    mutationType: r.mutationType,
                    lateMutationType: r.hadLateMutationUnexpected ? "unexpected" : r.hadLateMutationExpected ? "expected" : undefined,
                    type: "VISUAL_COMPLETION_RECT",
                    width: Math.floor(r_rectangle.right - r_rectangle.left),
                    x: Math.floor(r_rectangle.left),
                    y: Math.floor(r_rectangle.top)
                }, l + e.$2.appStart);
                if (r.children.length) {
                    e.$4(t, n, r.children, depth + 1, r);
                }
            });
        }
        loomTraceWillEnd() {
            r("vc-tracker").VisualCompletionTraceObserver.unsubscribe(this.$3);
            this.$1 = null;
        }
    }
    const s = {
        getInstance: function(n, r, o) {
            return new e(n, r, o);
        },
        isSupported: function() {
            return e.isSupported();
        },
        loomProviderId: "VisualCompletion"
    };
    l.default = s;
}, 98);
__d("WebLoomEventBuffer", [
    "performanceNow"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    class s {
        constructor(){
            this.$1 = [];
        }
        addEvent(n, o) {
            this.$1.push({
                event: n,
                timestamp: o ?? (e || (e = r("performanceNow")))()
            });
        }
        flushEvents() {
            return this.$1;
        }
    }
    l.WebLoomEventBuffer = s;
}, 98);
__d("WebLoomSampling", [], function(t, n, r, o, a, i) {
    "use strict";
    function e(e, t, n, r) {
        const a = t === "QPL" ? e.samplingConfig.adaptive_config.qpl : e.samplingConfig.adaptive_config.interactions;
        const i = r != null ? `${n}.${r}` : `${n}`;
        const l = a.events[i];
        if (l != null) {
            return l;
        }
        const s = a.modules[n >> 16 & 65535] ?? 0;
        return s;
    }
    i.getSampleRate = e;
}, 66);
__d("WebLoomSerializer", [], function(t, n, r, o, a, i) {
    "use strict";
    function e() {
        return !(!window.Uint8Array || !window.btoa);
    }
    function l(t, n, r, o) {
        const a = r.flushEvents();
        if (!e()) {
            return null;
        }
        const { start_time_us, end_time_us } = n;
        const s = start_time_us / 1000;
        const u = end_time_us / 1000;
        if (o != null) {
            const c = s - o.stats.timeOrigin;
            const d = u - o.stats.timeOrigin;
            o.trace.samples = o.trace.samples.filter((e)=>e.timestamp >= c && e.timestamp <= d);
        }
        let m = `${JSON.stringify(n)}
{}
${JSON.stringify(o || null).replace(/[^\x00-\x7F]/g, "")}
`;
        let p = 0;
        a.forEach((e)=>{
            const t = Math.round(e.timestamp * 1000);
            if (!(t < start_time_us || t > end_time_us)) {
                const n = t - p;
                p = t;
                const r = e.event;
                const o = [
                    n,
                    r.type
                ];
                switch(r.type){
                    case "QPL_ANNOTATION":
                        o.push(r.markerId);
                        o.push(r.instanceKey);
                        o.push(r.annotationKey);
                        o.push(r.annotationValue);
                        break;
                    case "QPL_START":
                        o.push(r.markerId);
                        o.push(r.instanceKey);
                        break;
                    case "QPL_END":
                        o.push(r.markerId);
                        o.push(r.instanceKey);
                        o.push(r.action);
                        break;
                    case "QPL_POINT":
                        o.push(r.markerId);
                        o.push(r.instanceKey);
                        o.push(r.name);
                        if (r.data != null) {
                            o.push(r.data);
                        }
                        break;
                    case "RESOURCE_TIMING_START":
                        o.push(r.resourceType);
                        o.push(r.resourceId);
                        o.push(r.resourceName);
                        o.push(r.encodedSize);
                        o.push(r.decodedSize);
                        o.push(r.transferSize);
                        o.push(r.responseStatus);
                        break;
                    case "RESOURCE_TIMING_END":
                        o.push(r.resourceType);
                        o.push(r.resourceId);
                        break;
                    case "RESOURCE_TIMING_POINT":
                        o.push(r.resourceType);
                        o.push(r.resourceId);
                        o.push(r.pointName);
                        break;
                    case "INTERACTION_TRACE_START":
                        o.push(r.traceId);
                        o.push(r.execUnitName);
                        o.push(r.blockName);
                        o.push(r.blockType);
                        o.push(r.traceType);
                        break;
                    case "INTERACTION_TRACE_END":
                        o.push(r.traceId);
                        o.push(r.execUnitName);
                        o.push(r.blockName);
                        o.push(r.blockType);
                        o.push(r.traceType);
                        o.push(r.blockAnnotations);
                        break;
                    case "INTERACTION_TRACE_POINT":
                        o.push(r.traceId);
                        o.push(r.execUnitName);
                        o.push(r.blockName);
                        o.push(r.pointName);
                        o.push(r.pointAnnotations);
                        break;
                    case "VISUAL_COMPLETION_RECT":
                        o.push(r.elementType);
                        o.push(r.depth);
                        o.push(r.x);
                        o.push(r.y);
                        o.push(r.width);
                        o.push(r.height);
                        o.push(r.mutationType);
                        o.push(r.lateMutationType);
                        break;
                    case "VISUAL_COMPLETION_PROGRESS":
                        o.push(r.progress);
                        break;
                    case "JS_SCHEDULER_QUEUE":
                        o.push(r.priority);
                        o.push(r.queueSize);
                        break;
                }
                m += `${JSON.stringify(o)}
`;
            }
        });
        return t.compressStringToSnappy(m);
    }
    i.isSupported = e;
    i.serialize = l;
}, 66);
__d("mapObject", [], function(t, n, r, o, a, i) {
    "use strict";
    function e(e, t, n) {
        if (!e) {
            return null;
        }
        const r = {};
        const o = Object.keys(e);
        for(let a = o.length, i = 0; i < a; i++){
            const l = o[i];
            r[l] = t.call(n, e[l], l, e);
        }
        return r;
    }
    function l(t, n, r) {
        return e(t, n, r);
    }
    function s(t, n, r) {
        return e(t, n, r);
    }
    function u(t, n, r) {
        return e(t, n, r);
    }
    e.untyped = l;
    e.shape = s;
    e.self = u;
    i.default = e;
}, 66);
__d("WebLoomCore", [
    "FBLogger",
    "InteractionTracingLoomProvider",
    "Promise",
    "QPLEvent",
    "QPLLoomProvider",
    "ResourceTimingLoomProvider",
    "VisualCompletionLoomProvider",
    "WebLoomEventBuffer",
    "WebLoomSampling",
    "WebLoomSerializer",
    "addAnnotations",
    "asyncToGeneratorRuntime",
    "fb-error",
    "mapObject",
    "one-trace",
    "performanceNow",
    "uuidv4"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    const d = new Set([
        "InteractionTracing"
    ]);
    const m = (()=>{
        function t(e, t) {
            const i = this;
            this.$1 = e;
            this.$2 = t;
            this.$7 = [
                r("InteractionTracingLoomProvider"),
                r("VisualCompletionLoomProvider"),
                r("ResourceTimingLoomProvider"),
                r("QPLLoomProvider")
            ];
            this.$5 = new Set(this.$7.map((e)=>e.loomProviderId));
            this.$6 = new Set(this.$7.map((e)=>e.loomProviderId));
            this.$3 = new Map;
            this.$4 = new Map;
            this.$8 = o("WebLoomSerializer").isSupported();
            this.$9 = false;
            this.$10 = e.debugLogToConsole ?? false;
            this.$16 = e.stuckTraceTimeoutMs ?? 0;
            this.$11 = 1;
            this.$12 = new Map;
            this.$13 = r("uuidv4")();
            this.$14 = 1;
            this.addStatusListener(function(e, t) {
                if (i.$10) {
                    i.$17("[Web Loom] trace", t, {
                        interactionId: e.triggerId,
                        traceReferenceId: i.$18(e),
                        qplMarkerId: e.triggerInfo.qpl_marker_id,
                        tracePolicy: e.triggerInfo.trace_policy
                    });
                }
            });
        }
        const t_prototype = t.prototype;
        t_prototype.setDebugLogToConsole = function(t) {
            this.$10 = t;
        };
        t_prototype.getNextSequenceNumber = function() {
            const $14 = this.$14;
            this.$14++;
            return $14;
        };
        t_prototype.getSessionId = function() {
            return this.$13;
        };
        t_prototype.getActiveTraces = function() {
            return this.$3;
        };
        t_prototype.addProvider = function(t, n = true) {
            if (!this.$6.has(t.loomProviderId)) {
                this.$7.push(t);
                this.$6.add(t.loomProviderId);
            }
            if (n && !this.$5.has(t.loomProviderId)) {
                this.$5.add(t.loomProviderId);
            }
        };
        t_prototype.addStatusListener = function(t) {
            const e = this;
            const n = this.$11++;
            this.$12.set(n, t);
            return {
                dispose: function() {
                    e.$12.delete(n);
                }
            };
        };
        t_prototype.maybeStartTraceForInteraction = function(t, interaction_class, r, a, i) {
            const e = (c || (c = o("QPLEvent"))).getMarkerId(r);
            const l = o("WebLoomSampling").getSampleRate(this.$1, "INTERACTION", e, a);
            const passedSamplingCheck = this.$2.Random.coinflip(l);
            if (this.$10) {
                this.$17("[Web Loom] maybeStartTraceForInteraction", {
                    interactionId: t,
                    markerId: e,
                    tracePolicy: a,
                    sampleRate: l,
                    passedSamplingCheck
                });
            }
            if (!passedSamplingCheck) {
                return null;
            }
            const u = i + this.$1.appStart;
            const m = {
                interaction_class,
                interaction_id: t,
                qpl_marker_id: `${e}`,
                sample_rate: l,
                trace_policy: a,
                type: "INTERACTION"
            };
            return this.startTrace(t, m, u, this.$1.useLiteTracing ? d : undefined);
        };
        t_prototype.startTraceManually = function(interaction_id, n, r, a, i, l) {
            const e = (c || (c = o("QPLEvent"))).getMarkerId(n);
            const s = r + this.$1.appStart;
            const u = {
                interaction_id,
                qpl_marker_id: `${e}`,
                sample_rate: a,
                type: "INTERACTION"
            };
            if (l != null) {
                u.interaction_class = l;
            }
            if (i != null) {
                u.trace_policy = i;
            }
            return this.startTrace(interaction_id, u, s, this.$1.useLiteTracing ? d : undefined);
        };
        t_prototype.endTraceForInteraction = function(t, n, o) {
            const t_traceId = t.traceId;
            const l = babelHelpers.extends({}, null);
            for(const c in t.annotations){
                for(const d in t.annotations[c]){
                    l[d] = t.annotations[c][d];
                }
            }
            l.qpl_action = n;
            const m = (s || (s = r("mapObject")))(t.tagSet, function(e) {
                return Array.from(e);
            });
            const t_completed = t.completed;
            const _ = t.markerPoints.visuallyComplete?.timestamp;
            const f = t.markerPoints.logVC?.timestamp;
            const g = Math.max(t_completed ?? 0, _ ?? 0, f ?? 0, o ?? 0);
            const h = g > 0 ? g : (u || (u = r("performanceNow")))();
            const y = h + this.$1.appStart;
            return this.endTrace(t_traceId, y, l, m);
        };
        t_prototype.startTrace = function(triggerId, triggerInfo, a, i = this.$5, l = {}) {
            const e = this;
            if (!this.$8) {
                return null;
            }
            if (this.$3.has(triggerId)) {
                r("FBLogger")("web_loom").mustfix("Already running trace for triggerId: %s", triggerId);
                return null;
            }
            const sequenceNumber = this.$14++;
            const traceContext = {
                buffer: new (o("WebLoomEventBuffer")).WebLoomEventBuffer,
                triggerId,
                triggerInfo,
                startTime: a,
                sequenceNumber
            };
            const loomProviders = new Set;
            const providerInstances = [];
            this.$7.forEach((t)=>{
                if (i.has(t.loomProviderId) && t.isSupported()) {
                    providerInstances.push(t.getInstance(traceContext, e.$2, e.$1));
                    loomProviders.add(t.loomProviderId);
                }
            });
            const status = "STARTED";
            this.$3.set(triggerId, {
                traceContext,
                providerInstances,
                loomProviders,
                secondaryOneTraceLinkage: l.secondaryOneTraceLinkage ?? false,
                status,
                startURI: window.location.href
            });
            this.$12.forEach((e)=>e(traceContext, status));
            const traceReferenceId = this.$18(traceContext);
            this.$19();
            return {
                traceReferenceId,
                loomProviders
            };
        };
        t_prototype.$19 = function() {
            const e = this;
            if (!(!r("one-trace") || this.$15 != null || this.$3.size === 0)) {
                this.$15 = r("one-trace").subscribe("trace-start", function(t) {
                    if (!(t.traceType !== "LONGTASK" && t.traceType !== "INP")) {
                        const n = Array.from(e.$3.values());
                        let o = n[n.length - 1];
                        for (const a of n){
                            if (!a.secondaryOneTraceLinkage) {
                                o = a;
                            }
                        }
                        if (o != null) {
                            r("addAnnotations")(t.annotations, {
                                string: {
                                    loomRefId: e.$18(o.traceContext)
                                },
                                string_array: {
                                    loomProviders: Array.from(o.loomProviders),
                                    loomRefIds: n.map((t)=>e.$18(t.traceContext))
                                }
                            });
                        }
                    }
                });
            }
        };
        t_prototype.$18 = function(t) {
            return `${this.$13}_${t.sequenceNumber}`;
        };
        t_prototype.endTrace = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, a, trigger_metadata, trigger_metadata_sets) {
                const s = this.$3.get(t);
                if (!s) {
                    r("FBLogger")("web_loom").mustfix("No trace running for triggerId: %s", t);
                    return false;
                }
                const sequenceNumber = s.traceContext.sequenceNumber;
                this.$3.delete(t);
                if (this.$3.size === 0 && this.$15) {
                    this.$15();
                    this.$15 = null;
                }
                this.$4.set(sequenceNumber, s);
                this.$20(s, "END_PENDING");
                const c = [];
                s.providerInstances.forEach((e)=>{
                    const t = e.loomTraceWillEnd();
                    if (t) {
                        c.push(t);
                    }
                });
                const href = window.location.href;
                try {
                    yield (e || (e = n("Promise"))).all(c);
                    const m = this.$1.perfXData;
                    const trigger_info = s.traceContext.triggerInfo;
                    const _ = {
                        app_id: this.$1.appId,
                        start_time_us: Math.round(s.traceContext.startTime * 1000),
                        end_time_us: Math.round(a * 1000),
                        trigger_id: s.traceContext.triggerId,
                        trigger_info,
                        trigger_metadata,
                        trigger_metadata_sets,
                        client_push_phase: m.client_push_phase,
                        device_num_cores: m.num_cores != null ? Math.floor(m.num_cores) : null,
                        device_ram_bytes: m.ram_gb != null ? m.ram_gb * 1073741824 : null,
                        is_rtl: m.isRTL,
                        locale: m.locale,
                        network_effective_connection_type: m.effective_connection_type,
                        network_downlink_bps: m.downlink_megabits != null && m.downlink_megabits * 1000000 < 100000000000000000000 ? m.downlink_megabits * 1000000 : null,
                        network_rtt_ms: m.rtt_ms,
                        client_rev: this.$1.clientRev,
                        server_rev: this.$1.serverRev,
                        spin_mode: this.$1.spinMode,
                        start_uri: s.startURI,
                        end_uri: href
                    };
                    const f = o("WebLoomSerializer").serialize(this.$2, _, s.traceContext.buffer, s.traceContext.jsSelfProfilerData);
                    s.traceContext.jsSelfProfilerData = null;
                    if (f != null) {
                        const g = {
                            trace: f,
                            session_id: this.$13,
                            sequence_number: s.traceContext.sequenceNumber,
                            qpl_marker_id: trigger_info.qpl_marker_id,
                            trace_policy: trigger_info.trace_policy,
                            sample_rate: trigger_info.sample_rate
                        };
                        this.$2.Transport.post(g, {
                            onComplete: this.$16 > 0 ? this.$21(sequenceNumber) : this.$22(sequenceNumber, s),
                            isHighPri: this.$9
                        });
                        this.$20(s, "UPLOAD_PENDING");
                    } else {
                        this.$20(s, "COMPLETE");
                        this.$4.delete(sequenceNumber);
                        r("fb-error").FBLogger("webloom").warn("[Loom Trace]Failed to serialize trace, trace will be dropped. QPL marker id: %s", trigger_info.qpl_marker_id);
                    }
                } catch (e) {
                    this.$20(s, "ERROR");
                    this.$4.delete(sequenceNumber);
                }
                return true;
            });
            function a(e, n, r, o) {
                return t.apply(this, arguments);
            }
            return a;
        })();
        t_prototype.flush = function(t) {
            const e = this;
            const n = new Set;
            const r = new Set;
            this.$4.forEach((e)=>{
                if (e.status === "END_PENDING") {
                    n.add(e.traceContext.sequenceNumber);
                } else if (e.status === "UPLOAD_PENDING") {
                    r.add(e.traceContext.sequenceNumber);
                }
            });
            if (n.size > 0) var o = this.addStatusListener(function(r) {
                n.delete(r.sequenceNumber);
                if (n.size === 0) {
                    e.$2.Transport.flush(t, t);
                    o.dispose();
                }
            });
            else {
                if (r.size > 0) {
                    this.$2.Transport.flush(t, t);
                } else if (t) {
                    t();
                }
            }
        };
        t_prototype.setIsDevToolsConnected = function(t) {
            this.$9 = t;
        };
        t_prototype.setStuckTraceTimeoutMs = function(t) {
            this.$16 = t;
        };
        t_prototype.$21 = function(t) {
            const e = this;
            const n = setTimeout(()=>{
                const n = e.$4.get(t);
                if (n != null) {
                    e.$20(n, "ERROR");
                    e.$4.delete(t);
                }
            }, this.$16);
            return function() {
                clearTimeout(n);
                const r = e.$4.get(t);
                if (r != null) {
                    e.$20(r, "COMPLETE");
                    e.$4.delete(t);
                }
            };
        };
        t_prototype.$22 = function(t, n) {
            const e = this;
            return function() {
                if (e.$4.has(t)) {
                    e.$20(n, "COMPLETE");
                    e.$4.delete(t);
                }
            };
        };
        t_prototype.$20 = function(t, n) {
            t.status = n;
            this.$12.forEach((e)=>e(t.traceContext, t.status));
        };
        t_prototype.$17 = function() {
            const e = typeof console !== "undefined" ? console : null;
            if (e) {
                e.log(...arguments);
            }
        };
        return t;
    })();
    l.default = m;
}, 98);
__d("web-loom", [
    "WebLoomCore"
], function(t, n, r, o, a, i, l) {
    "use strict";
    l.WebLoomCore = r("WebLoomCore");
}, 98);
__d("WebLoom", [
    "CurrentUser",
    "Env",
    "PerfXSharedFields",
    "QuickPerformanceLogger",
    "Random",
    "SiteData",
    "SnappyCompressUtil",
    "URI",
    "UserAgent",
    "WebLoomBanzaiTransport",
    "WebLoomConfig",
    "cr:1094133",
    "cr:13597",
    "gkx",
    "performanceNavigationStart",
    "web-loom"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    const c = 120000;
    const d = {
        QuickPerformanceLogger: e || (e = r("QuickPerformanceLogger")),
        Random: r("Random"),
        Transport: r("WebLoomBanzaiTransport"),
        URI: s || (s = r("URI")),
        isBrowser: r("UserAgent").isBrowser,
        compressStringToSnappy: r("SnappyCompressUtil").compressStringToSnappy
    };
    const m = {
        appStart: r("performanceNavigationStart")(),
        appId: r("CurrentUser").getAppID(),
        sanitizeURIs: r("gkx")("20864"),
        samplingConfig: r("WebLoomConfig"),
        clientRev: r("SiteData").client_revision,
        serverRev: r("SiteData").server_revision,
        spinMode: r("SiteData").spin,
        useLiteTracing: r("gkx")("20865"),
        perfXData: r("PerfXSharedFields").getCommonData(),
        debugLogToConsole: r("gkx")("7170"),
        stuckTraceTimeoutMs: r("gkx")("7884") ? c : 0
    };
    const p = new (o("web-loom")).WebLoomCore(m, d);
    if (n("cr:1094133")) {
        p.addProvider(n("cr:1094133"));
    }
    if (n("cr:13597") && (u || (u = r("Env"))).jssp_header_sent) {
        p.addProvider(n("cr:13597"));
    }
    l.default = p;
}, 98);
__d("InteractionTracingDependencies", [
    "HeroBootloadPerfStore",
    "QuickPerformanceLogger",
    "WebLoom",
    "cr:12179",
    "vc-tracker"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = {
        HeroBootloadPerfStore: {
            addStaticResourcesStats: o("HeroBootloadPerfStore").addStaticResourcesStats
        },
        QuickPerformanceLogger: e || (e = r("QuickPerformanceLogger")),
        UserTimingUtils: n("cr:12179"),
        VCTracker: r("vc-tracker"),
        WebLoom: r("WebLoom")
    };
    l.default = s;
}, 98);
__d("InteractionTracing", [
    "Env",
    "InteractionTracingConfigDefault",
    "InteractionTracingDependencies",
    "InteractionTracingMetrics",
    "JSSelfProfilerTrackedInteractions",
    "WebSession",
    "cr:955714",
    "interaction-tracing",
    "performanceNow"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = [
        "cfg"
    ];
    let s;
    let u;
    function transformStartMetadata(t) {
        const t_cfg = t.cfg;
        const l = babelHelpers.objectWithoutPropertiesLoose(t, e);
        const c = l.startTime ?? (s || (s = r("performanceNow")))();
        if ((u || (u = r("Env"))).jssp_header_sent && (u || (u = r("Env"))).jssp_targeting_enabled) {
            const d = r("JSSelfProfilerTrackedInteractions").interactions;
            if (d) {
                const m = !!d.find((e)=>(e.tracePolicy === "*" || e.tracePolicy === t.tracePolicy) && (e.action === "*" || e.action === t.traceType));
                if (m && n("cr:955714")) {
                    r("InteractionTracingDependencies").WebLoom?.addProvider(n("cr:955714"));
                }
            }
        }
        return babelHelpers.extends({
            startTime: c
        }, l, {
            cfg: babelHelpers.extends({}, o("InteractionTracingConfigDefault").DEFAULT_TRACING_CONFIG, t_cfg),
            deps: r("InteractionTracingDependencies")
        });
    }
    const d = babelHelpers.extends({}, r("interaction-tracing").InteractionTracingCore, {
        transformStartMetadata,
        startInteraction: function(t, n) {
            return r("interaction-tracing").InteractionTracingCore.startInteraction(transformStartMetadata(t), n);
        },
        trace: ((e)=>{
            function t(t, n, r, o, a, i, l, s, u) {
                return e.apply(this, arguments);
            }
            t.toString = function() {
                return e.toString();
            };
            return t;
        })(function(e, t, n, a, i, l, c = (s || (s = r("performanceNow")))(), d, m) {
            const p = r("interaction-tracing").InteractionTracingCore.trace(babelHelpers.extends({}, o("InteractionTracingConfigDefault").DEFAULT_TRACING_CONFIG, m), r("InteractionTracingDependencies"), e, t, n, a, i, l, c, d);
            const _ = o("WebSession").getSessionId();
            if (_ != null) {
                r("InteractionTracingMetrics").addMetadata(p, "websession_id", _);
            }
            if ((u || (u = r("Env"))).brsid != null) {
                r("InteractionTracingMetrics").addAnnotation(p, "brsid", `${(u || (u = r("Env"))).brsid}`);
            }
            return p;
        }),
        navigation: r("interaction-tracing").NavigationTracing,
        getTraceStatus: r("interaction-tracing").getTraceStatus
    });
    l.default = d;
}, 98);
__d("JSSPTraceBaseTransformer", [
    "FBLogger",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = (()=>{
        function e() {}
        const e_prototype = e.prototype;
        e_prototype.transform = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
                r("FBLogger")("JSSelfProfiler").warn("JSSP base transformer should be overridden.");
                return e;
            });
            function t(t, n, r) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        e_prototype.onProfilerAborts = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {});
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        return e;
    })();
    l.default = e;
}, 98);
__d("JSSPBrsidMarker", [
    "Env",
    "JSSPTraceBaseTransformer",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = ((t)=>{
        function o() {
            return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(o, t);
        const o_prototype = o.prototype;
        o_prototype.transform = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                const a = (e || (e = r("Env"))).brsid ?? 0;
                t.metadata = t.metadata ?? {};
                t.metadata.brsid = `${a}`;
                return t;
            });
            function o(e) {
                return t.apply(this, arguments);
            }
            return o;
        })();
        return o;
    })(r("JSSPTraceBaseTransformer"));
    l.default = s;
}, 98);
__d("JSSPSetting", [
    "gkx"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = r("gkx")("2033");
    const s = r("gkx")("5316");
    const u = 30000;
    const c = 50;
    l.isCollectingINP = e;
    l.isCollectingLoAF = s;
    l.slowProfilerSpan = u;
    l.maxConcurrentProfilerInstance = c;
}, 98);
__d("JSSelfProfilerConfig.experimental", [
    "cr:1877"
], function(t, n, r, o, a, i, l) {
    "use strict";
    l.default = n("cr:1877");
}, 98);
__d("JSSelfProfilerProbe", [
    "Env"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e) {
        if (typeof e.replace === "function") {
            return e.replace(/\n/g, " ").replace(/\s+/g, " ");
        }
        return "";
    }
    function u() {
        if (typeof Profiler !== "function" || typeof Profiler.toString !== "function") {
            return false;
        }
        return s(Profiler.toString()).endsWith("{ [native code] }");
    }
    function c() {
        if (!u() || (e || (e = r("Env"))).jssp_header_sent !== true) {
            return false;
        }
        try {
            const t = new Profiler({
                sampleInterval: 1000,
                maxBufferSize: 10
            });
            t.stop();
        } catch (e) {
            return false;
        }
        return true;
    }
    function d() {
        const window_PerformanceObserver = window.PerformanceObserver;
        if (window_PerformanceObserver == null) {
            return [];
        }
        const e_supportedEntryTypes = window_PerformanceObserver.supportedEntryTypes;
        return e_supportedEntryTypes ?? [];
    }
    function m() {
        return d().includes("longtask");
    }
    function p() {
        return d().includes("event");
    }
    const _ = {
        isJSSPAvailable: c(),
        isJSSPNative: u(),
        isLongtaskAvailable: m(),
        isINPAvailable: p()
    };
    l.default = _;
}, 98);
__d("renameFunctionWithStaticName_BeCareful", [], function(t, n, r, o, a, i) {
    function e() {
        try {
            const e = new Function("a", "b", "return a + b;");
            if (typeof e !== "function" || e(1, 1) !== 2) {
                return false;
            }
            const t = new Function("return function ProbeName(){ return 42; };");
            const n = t();
            return typeof n === "function" && n.name === "ProbeName" && n() === 42;
        } catch (e) {
            return false;
        }
    }
    function l(e, t) {
        const n = new Function("f", `return function ${t}_jssp_wrapper(...args) {
       return f.apply(this, args);
     };`)(e);
        return n;
    }
    const s = e() ? l : function(e, t) {
        return e;
    };
    i.default = s;
}, 66);
__d("JSSelfProfilerUtils", [
    "CurrentUser",
    "FBLogger",
    "JSScheduler",
    "JSSelfProfilerConfig.experimental",
    "Promise",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "renameFunctionWithStaticName_BeCareful"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = ":";
    let c = null;
    function d() {
        if (c == null) {
            c = r("JSSelfProfilerConfig.experimental").PROFILER_CONFIG ?? [];
        }
        return c;
    }
    let m = null;
    function p() {
        if (m == null) {
            m = d().find((e)=>e.app_id === "default") ?? {
                app_id: "default",
                sample_interval: 10,
                max_buffer_size: 3000,
                sample_rate: 0,
                disable_when_has_referrer: false
            };
        }
        return m;
    }
    function _() {
        const t = r("CurrentUser").getAppID();
        const n = d().find((e)=>e.app_id === t) ?? p();
        return {
            sampleInterval: n.sample_interval,
            maxBufferSize: n.max_buffer_size
        };
    }
    function f(marker, t) {
        if (t === "") {
            return marker;
        }
        if (marker == null || marker === "") {
            return t;
        }
        if (t.includes(u)) {
            r("FBLogger")("JSSelfProfiler").warn("addJSSPSampleMarker: marker %s contains %s the marker split character", t, u);
            return marker;
        }
        const n = new Set(marker.split(u));
        n.add(t);
        return Array.from(n).sort().join(u);
    }
    function g(e, t) {
        const n = f(e.marker, t);
        if (n != null) {
            e.marker = n;
        }
    }
    function h(e, t, n) {
        if (e.metadata == null) {
            e.metadata = {};
        }
        const e_metadata = e.metadata;
        e_metadata.jsspAnnotations = e_metadata.jsspAnnotations ?? "{}";
        const a = JSON.parse(e_metadata.jsspAnnotations);
        a[t] = n;
        e_metadata.jsspAnnotations = JSON.stringify(a, null, 0);
    }
    function y(e, t) {
        const n = t.frames[e.frameId];
        return n?.name;
    }
    function C(e) {
        const t = new Map;
        try {
            for(let n = 0; n < e.samples.length; n++){
                for(var o = new Set, a = e.samples[n], i = a.stackId; i != null && !o.has(i);){
                    o.add(i);
                    i = e.stacks[i].parentId;
                }
                t.set(n, o.size);
            }
        } catch (error) {
            const l = r("getErrorSafe")(error);
            r("FBLogger")("JSSelfProfiler").warn("getSampleIdToDepthsMap throws %s", l.message);
        }
        return t;
    }
    function b(e) {
        const t = new Map;
        try {
            for(let n = 0; n < e.samples.length; n++){
                for(let o = new Set, a = e.samples[n], i = a.stackId; i != null && !o.has(i);){
                    o.add(i);
                    t.set(i, n);
                    i = e.stacks[i].parentId;
                }
            }
        } catch (error) {
            const l = r("getErrorSafe")(error);
            r("FBLogger")("JSSelfProfiler").warn("getStackIdToSampleIdMap throws %s", l.message);
        }
        return t;
    }
    function v(e, t) {
        for (const n of t){
            e.add(n);
        }
        return e;
    }
    function S(e) {
        return R.apply(this, arguments);
    }
    function R() {
        R = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            return yield new (s || (s = n("Promise")))(function(n) {
                (e || (e = o("JSScheduler"))).scheduleNormalPriCallback(function() {
                    n(t());
                });
            });
        });
        return R.apply(this, arguments);
    }
    function L(e, t) {
        const n = new Set(e);
        for (const r of t){
            n.add(r);
        }
        return Array.from(n);
    }
    l.renameFunctionWithStaticName_BeCareful = r("renameFunctionWithStaticName_BeCareful");
    l.getProfilerInitConfig = _;
    l.addMarkerToSample = g;
    l.addAnnotationToTrace = h;
    l.getStackFrameName = y;
    l.getSampleIdToDepthsMap = C;
    l.getStackIdToSampleIdMap = b;
    l.mergeSets = v;
    l.nextEventLoop = S;
    l.mergeList = L;
}, 98);
__d("JSSelfProfiler", [
    "CurrentUser",
    "FBLogger",
    "JSSPConfigInit",
    "JSSPSetting",
    "JSSelfProfilerConfig.experimental",
    "JSSelfProfilerProbe",
    "JSSelfProfilerUtils",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "justknobx",
    "requireDeferred",
    "uuidv4"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = r("requireDeferred")("LogJsspStatsFalcoEvent").__setRef("JSSelfProfiler");
    const s = r("justknobx")._("4881");
    const u = (()=>{
        function t(e, n, o) {
            this.$1 = e;
            this.$8 = o ?? r("uuidv4")();
            this.$5 = n;
            this.$4 = false;
            this.$9 = [];
            if (t.defaultTransformerRegistered === false) {
                r("JSSPConfigInit").run();
                t.defaultTransformerRegistered = true;
            }
        }
        t.registerDataCollector = function(n, r, o = false) {
            const e = r ?? n.constructor.name;
            if (!t.traceDataCollectors.has(e) || o) {
                t.traceDataCollectors.set(e, n);
            }
        };
        t.registerTraceTransformer = function(n, r, o = false) {
            const e = r ?? n.constructor.name;
            if (!t.traceTransformers.has(e) || o) {
                t.traceTransformers.set(e, n);
            }
        };
        t.shouldProfile = function(t) {
            if (!s) {
                return false;
            }
            if (r("JSSelfProfilerConfig.experimental").ENABLE_FELAB_INTERACTION_FILTERING && t != null && window.__felab_context) {
                const e = window.__felab_context;
                const n = e.qplMarkerIds || [];
                return Array.isArray(e.qplMarkerIds) && n.includes(t);
            }
            return true;
        };
        t.startRecording = function(n, a, i = null) {
            if (!t.isSupported()) {
                const l = new Error("JS Self Profiling is not supported");
                l.stack;
                throw l;
            }
            if (!t.shouldProfile(i?.triggerInfo?.qpl_marker_id) || t.instanceCount > o("JSSPSetting").maxConcurrentProfilerInstance) {
                return null;
            }
            const s = performance.now();
            const u = r("uuidv4")();
            this.traceDataCollectors.forEach((e)=>e.onProfilerStarts(u, i?.annotations));
            return this.createProfiler(s, n, a, u, i);
        };
        t.createProfiler = function(n, sampleInterval, maxBufferSize, i, l = null) {
            if (!r("JSSelfProfilerProbe").isJSSPNative) {
                return null;
            }
            try {
                const s = new Profiler({
                    sampleInterval,
                    maxBufferSize
                });
                const u = performance.now() - n;
                const c = new t(s, sampleInterval, i);
                c.setStartUpTime(u);
                c.setTriggerInfo(l?.triggerInfo);
                ++t.instanceCount;
                return c;
            } catch (error) {
                const d = r("getErrorSafe")(error);
                r("FBLogger")("JSSelfProfiler").catching(d).warn("Could not initialize profiler");
            }
            return null;
        };
        const t_prototype = t.prototype;
        t_prototype.abort = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const e = this;
                if (!this.$4) {
                    const n = performance.now();
                    yield this.$1.stop();
                    this.$3 = performance.now() - n;
                    this.$6 = null;
                    this.$4 = true;
                    --t.instanceCount;
                    const r = function*(n) {
                        yield yield o("JSSelfProfilerUtils").nextEventLoop(function() {
                            return n.onProfilerAborts(e.$8, e);
                        });
                    };
                    for (const a of t.traceDataCollectors.values()){
                        yield* r(a);
                    }
                    const i = function*(n) {
                        yield yield o("JSSelfProfilerUtils").nextEventLoop(function() {
                            return n.onProfilerAborts(e.$8);
                        });
                    };
                    for (const l of t.traceTransformers.values()){
                        yield* i(l);
                    }
                }
            });
            function r() {
                return e.apply(this, arguments);
            }
            return r;
        })();
        t_prototype.stopRecording = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                if (this.$4) {
                    const e = new Error("The profiling has stopped before stopRecording() is called");
                    e.stack;
                    throw e;
                }
                --t.instanceCount;
                const n = performance.now();
                const r = yield this.postProcessTrace((yield this.$1.stop()));
                this.$3 = performance.now() - n;
                const o = {
                    trace: r,
                    stats: {
                        timeOrigin: performance.timeOrigin,
                        requestedSampleInterval: this.$5,
                        actualSampleInterval: this.$1.sampleInterval
                    }
                };
                this.$6 = this.getTraceStats(r);
                this.$4 = true;
                return o;
            });
            function r() {
                return e.apply(this, arguments);
            }
            return r;
        })();
        t_prototype.postProcessTrace = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const r = this;
                let a = e;
                if (this.$7?.interaction_id != null) {
                    a.metadata = {
                        interactionId: this.$7?.interaction_id
                    };
                }
                let l = {};
                const s = function*(t) {
                    l = yield yield o("JSSelfProfilerUtils").nextEventLoop(function() {
                        return t.onProfilerEnds(r.$8, a, l, r);
                    });
                };
                for (const u of t.traceDataCollectors.values()){
                    yield* s(u);
                }
                const c = function*(t) {
                    a = yield yield o("JSSelfProfilerUtils").nextEventLoop(function() {
                        return t.transform(a, r.$8, l);
                    });
                };
                for (const d of t.traceTransformers.values()){
                    yield* c(d);
                }
                return a;
            });
            function r(t) {
                return e.apply(this, arguments);
            }
            return r;
        })();
        t_prototype.setStartUpTime = function(t) {
            this.$2 = t;
        };
        t_prototype.setTriggerInfo = function(t) {
            this.$7 = t;
        };
        t_prototype.setAnnotations = function(t) {
            this.$9 = Array.from(new Set([].concat(this.$9, t)));
        };
        t_prototype.getAnnotations = function() {
            return [].concat(this.$9);
        };
        t_prototype.getProfilerID = function() {
            return this.$8;
        };
        t_prototype.getTraceStats = function(t) {
            const length = JSON.stringify(t).length;
            const i = o("JSSelfProfilerUtils").getSampleIdToDepthsMap(t);
            return {
                trace_size: length,
                sample_size: t.samples.length ?? 0,
                stack_size: t.stacks.length ?? 0,
                frame_size: t.frames.length ?? 0,
                max_stack_depth: Array.from(i.values()).reduce((acc, item)=>Math.max(acc, item))
            };
        };
        t_prototype.logStats = function() {
            const t = this;
            if (this.$2 == null) {
                r("FBLogger")("JSSelfProfiler").warn("JSSP start up time is null/undefined");
                return;
            }
            if (this.$3 == null) {
                r("FBLogger")("JSSelfProfiler").warn("JSSP shut down time is null/undefined");
                return;
            }
            const app_id = r("CurrentUser").getAppID();
            e.onReady(function(e) {
                e.log(function() {
                    return babelHelpers.extends({
                        app_id,
                        boot_up_time: t.$2,
                        shut_down_time: t.$3,
                        trace_policy: t.$7?.trace_policy,
                        interaction_id: t.$7?.interaction_id,
                        qpl_marker_id: t.$7?.qpl_marker_id
                    }, t.$6);
                });
            });
        };
        t.isSupported = function() {
            return r("JSSelfProfilerProbe").isJSSPAvailable && r("JSSelfProfilerProbe").isLongtaskAvailable && performance.timeOrigin != null;
        };
        t.setIsHeaderSent = function() {
            t.isHeaderSent = true;
        };
        return t;
    })();
    u.isHeaderSent = false;
    u.defaultTransformerRegistered = false;
    u.instanceCount = 0;
    u.traceDataCollectors = new Map;
    u.traceTransformers = new Map;
    l.default = u;
}, 98);
__d("JSSPDevTraceFilter", [
    "JSSPTraceBaseTransformer",
    "SiteData",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.transform = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                e.frames.forEach((e)=>{
                    if (e.resourceId != null && r("SiteData").push_phase === "dev") {
                        e.name = "";
                    }
                });
                return e;
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        return t;
    })(r("JSSPTraceBaseTransformer"));
    l.default = e;
}, 98);
__d("JSSPEmptySampleFilter", [
    "JSSPTraceBaseTransformer",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.transform = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                e.samples = e.samples.filter((e)=>e.stackId != null || e.uaMarker != null);
                return e;
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        return t;
    })(r("JSSPTraceBaseTransformer"));
    l.default = e;
}, 98);
__d("JSSPTraceBaseDataCollector", [
    "FBLogger",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = (()=>{
        function e() {}
        const e_prototype = e.prototype;
        e_prototype.onProfilerStarts = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t = null) {});
            function t(t, n) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        e_prototype.onProfilerEnds = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n, o) {
                r("FBLogger")("JSSelfProfiler").warn("JSSP base data collector onProfilerEnds should be overridden.");
                return n;
            });
            function t(t, n, r, o) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        e_prototype.onProfilerAborts = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {});
            function t(t, n) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        return e;
    })();
    l.default = e;
}, 98);
__d("JSSPEventCountCollector", [
    "JSSPTraceBaseDataCollector",
    "asyncToGeneratorRuntime",
    "performance"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = new Set([
        "click",
        "input"
    ]);
    const u = new Map;
    const c = ((t)=>{
        function o() {
            return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(o, t);
        const o_prototype = o.prototype;
        o_prototype.onProfilerStarts = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                let n = 0;
                for (const o of s){
                    n += (e || (e = r("performance"))).eventCounts?.get(o) ?? 0;
                }
                u.set(t, n);
            });
            function o(e) {
                return t.apply(this, arguments);
            }
            return o;
        })();
        o_prototype.onProfilerEnds = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
                const o = u.get(e) ?? null;
                u.delete(e);
                n.totalEventCount = o;
                return n;
            });
            function t(t, n, r) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        o_prototype.onProfilerAborts = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                u.delete(e);
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        return o;
    })(r("JSSPTraceBaseDataCollector"));
    l.default = c;
}, 98);
__d("JSSPEventCountMarker", [
    "JSSPTraceBaseTransformer",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.transform = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
                e.metadata = e.metadata ?? {};
                const n_totalEventCount = n.totalEventCount;
                if (n_totalEventCount != null) {
                    e.metadata.totalEventCount = n_totalEventCount;
                }
                return e;
            });
            function t(t, n, r) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        return t;
    })(r("JSSPTraceBaseTransformer"));
    l.default = e;
}, 98);
__d("JSSPFELabsMarker", [
    "JSSPTraceBaseTransformer",
    "JSSelfProfilerUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.transform = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const r = (window.__felab_context ?? {}).annotations ?? {};
                Object.entries(r).filter(([t, n])=>![
                        "object",
                        "function"
                    ].includes(typeof n)).map(([t, n])=>[
                        t,
                        String(n)
                    ]).forEach(([n, r])=>o("JSSelfProfilerUtils").addAnnotationToTrace(e, n, r));
                return e;
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        return t;
    })(r("JSSPTraceBaseTransformer"));
    l.default = e;
}, 98);
__d("JSSPIdMarker", [
    "JSSPTraceBaseTransformer",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.transform = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
                e.metadata = e.metadata ?? {};
                e.metadata.jsspId = t;
                return e;
            });
            function t(t, n, r) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        return t;
    })(r("JSSPTraceBaseTransformer"));
    l.default = e;
}, 98);
__d("JSSPInteractToNextPaintMarker", [
    "JSSPTraceBaseTransformer",
    "JSSelfProfilerUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = 300;
    const s = ((t)=>{
        function r() {
            return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(r, t);
        const r_prototype = r.prototype;
        r_prototype.getINPDataList = function({ INPEntryList }) {
            if (INPEntryList == null) {
                return null;
            }
            const n = INPEntryList.map((INPRecord)=>{
                const { endTime, processingEnd, processingStart, startTime } = INPRecord;
                const inputDelay = processingStart - startTime;
                const processingTime = processingEnd - processingStart;
                const presentationDelay = endTime - processingEnd;
                const e_eventType = INPRecord.eventType;
                const eventTargetComponent = INPRecord.componentName ?? "";
                const d = {
                    inputDelay,
                    processingTime,
                    presentationDelay,
                    duration: endTime - startTime,
                    eventType: e_eventType,
                    eventTargetComponent
                };
                return {
                    INPRecord,
                    metadata: d
                };
            });
            return n.sort((e, t)=>e.INPRecord.startTime - t.INPRecord.startTime);
        };
        r_prototype.transform = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n, r) {
                const a = this;
                const i = this.getINPDataList(r);
                if (i == null) {
                    return t;
                }
                t.metadata = babelHelpers.extends({}, t.metadata, {
                    INPInputDelays: [],
                    INPProcessingTimes: [],
                    INPPresentationDelays: [],
                    INPDurations: [],
                    INPEventTypes: [],
                    INPEventTargetComponentNames: []
                });
                for (const l of i){
                    const s = t.metadata;
                    const u = l.metadata;
                    s.INPInputDelays.push(u.inputDelay);
                    s.INPProcessingTimes.push(u.processingTime);
                    s.INPPresentationDelays.push(u.presentationDelay);
                    s.INPDurations.push(u.duration);
                    s.INPEventTypes.push(l.metadata.eventType);
                    s.INPEventTargetComponentNames.push(l.metadata.eventTargetComponent);
                }
                const c = function*(n) {
                    yield o("JSSelfProfilerUtils").nextEventLoop(function() {
                        return a.batchProcess(t, n, i);
                    });
                };
                for(let d = 0; d < t.samples.length; d += e){
                    yield* c(d);
                }
                return t;
            });
            function r(e, n, r) {
                return t.apply(this, arguments);
            }
            return r;
        })();
        r_prototype.batchProcess = function(n, r, a) {
            for(let t = Math.min(r + e, n.samples.length), i = r; i < t; ++i){
                const l = n.samples[i];
                for(let s = 0; s < a.length; ++s){
                    const u = a[s].INPRecord;
                    if (u.startTime <= l.timestamp && u.endTime > l.timestamp) {
                        l.INPId = s;
                        o("JSSelfProfilerUtils").addMarkerToSample(l, "interaction-to-next-paint");
                        break;
                    }
                }
            }
        };
        return r;
    })(r("JSSPTraceBaseTransformer"));
    l.default = s;
}, 98);
__d("JSSPInteractionToNextPaintCollector", [
    "JSSPSetting",
    "JSSPTraceBaseDataCollector",
    "JSSelfProfilerUtils",
    "asyncToGeneratorRuntime",
    "one-trace"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = new Map;
    const s = new Map;
    const u = new Map;
    const c = ((t)=>{
        function a() {
            return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(a, t);
        const a_prototype = a.prototype;
        a_prototype.onProfilerStarts = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n = null) {
                e.set(t, []);
                u.set(t, Date.now());
                if (n != null) {
                    s.set(t, new Set(n));
                }
            });
            function r(e, n) {
                return t.apply(this, arguments);
            }
            return r;
        })();
        a_prototype.onProfilerEnds = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n, r) {
                r.INPEntryList = o("JSSelfProfilerUtils").mergeList(r.INPEntryList ?? [], e.get(t) ?? []);
                e.delete(t);
                u.delete(t);
                s.delete(t);
                return r;
            });
            function r(e, n, r) {
                return t.apply(this, arguments);
            }
            return r;
        })();
        a_prototype.onProfilerAborts = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                e.delete(t);
                u.delete(t);
                s.delete(t);
            });
            function r(e) {
                return t.apply(this, arguments);
            }
            return r;
        })();
        a.startINPObserver = function() {
            r("one-trace").subscribe("trace-end", function(t) {
                if (t.traceType === "INP") {
                    if (t.endTime == null || t.annotations.string?.inputEventType == null) {
                        return;
                    }
                    const u = {
                        startTime: t.startTime,
                        endTime: t.endTime,
                        processingEnd: t.markerPoints.processingEnd?.timeSinceStart ?? t.endTime,
                        processingStart: t.markerPoints.processingStart?.timeSinceStart ?? t.startTime,
                        eventType: t.annotations.string?.inputEventType,
                        componentName: t.annotations.string?.reactComponentName
                    };
                    e.forEach((e)=>{
                        e.push(u);
                    });
                }
            });
            r("one-trace").subscribe("trace-end-before-logging", function(t) {
                if (t.traceType === "INP") {
                    let n = false;
                    e.forEach((e, a)=>{
                        if (n !== true) {
                            const i = s.get(a);
                            const l = u.get(a);
                            if (i != null && l != null) {
                                const c = Date.now() - l;
                                const d = c > o("JSSPSetting").slowProfilerSpan;
                                if (d && i.has("fast-profiler") || !d && i.has("slow-profiler")) {
                                    return;
                                }
                            }
                            r("one-trace").addAnnotations(t.annotations, {
                                string: {
                                    JSSPId: a
                                }
                            });
                            n = true;
                        }
                    });
                }
            });
        };
        return a;
    })(r("JSSPTraceBaseDataCollector"));
    if (o("JSSPSetting").isCollectingINP) {
        c.startINPObserver();
    }
    l.default = c;
}, 98);
__d("JSSPInteractionTraceDataMarker", [
    "JSSPTraceBaseTransformer",
    "asyncToGeneratorRuntime",
    "interaction-tracing-metrics",
    "performanceNow"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = ((t)=>{
        function a() {
            return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(a, t);
        const a_prototype = a.prototype;
        a_prototype.transform = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                const l = t.metadata?.interactionId;
                if (l == null) {
                    return t;
                }
                const s = o("interaction-tracing-metrics").InteractionTracingMetricsCore.get(l);
                if (s != null) {
                    t.metadata = t.metadata ?? {};
                    t.metadata.interactionDuration = Math.floor((s.completed ?? (e || (e = r("performanceNow")))()) - s.start);
                }
                return t;
            });
            function a(e) {
                return t.apply(this, arguments);
            }
            return a;
        })();
        return a;
    })(r("JSSPTraceBaseTransformer"));
    l.default = s;
}, 98);
__d("JSSPJestE2EMarker", [
    "JSSPTraceBaseTransformer",
    "JSSelfProfilerUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.transform = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                if (typeof window !== "undefined" && window.$JSSPJestE2EMarker1 != null) {
                    e.samples.forEach((e)=>o("JSSelfProfilerUtils").addMarkerToSample(e, "jest-e2e"));
                }
                return e;
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        return t;
    })(r("JSSPTraceBaseTransformer"));
    l.default = e;
}, 98);
__d("JSSPLongAnimationFrameCollector", [
    "JSSPSetting",
    "JSSPTraceBaseDataCollector",
    "JSSelfProfilerUtils",
    "asyncToGeneratorRuntime",
    "one-trace"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = new Map;
    const s = new Map;
    const u = new Map;
    const c = ((t)=>{
        function a() {
            return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(a, t);
        const a_prototype = a.prototype;
        a_prototype.onProfilerStarts = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n = null) {
                e.set(t, []);
                u.set(t, Date.now());
                if (n != null) {
                    s.set(t, new Set(n));
                }
            });
            function r(e, n) {
                return t.apply(this, arguments);
            }
            return r;
        })();
        a_prototype.onProfilerEnds = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n, r) {
                r.LoAFEntryList = o("JSSelfProfilerUtils").mergeList(r.LoAFEntryList ?? [], e.get(t) ?? []);
                e.delete(t);
                u.delete(t);
                s.delete(t);
                return r;
            });
            function r(e, n, r) {
                return t.apply(this, arguments);
            }
            return r;
        })();
        a_prototype.onProfilerAborts = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                e.delete(t);
                u.delete(t);
                s.delete(t);
            });
            function r(e) {
                return t.apply(this, arguments);
            }
            return r;
        })();
        a.startLoAFObserver = function() {
            r("one-trace").subscribe("trace-end", function(t) {
                if (t.traceType === "LONG_ANIMATION_FRAME") {
                    if (t.endTime == null) {
                        return;
                    }
                    const { annotations, markerPoints } = t;
                    const y = {
                        startTime: t.startTime,
                        endTime: t.endTime,
                        blockingDuration: annotations.int?.blockingDuration ?? 0,
                        firstUIEventTimestamp: markerPoints.firstUIEventTimestamp?.timeSinceStart ?? 0,
                        renderStart: markerPoints.renderStart?.timeSinceStart ?? 0,
                        styleAndLayoutStart: markerPoints.styleAndLayoutStart?.timeSinceStart ?? 0,
                        LoAFTotalScriptExecutionDuration: annotations.int?.startToRender ?? 0,
                        LoAFTotalRenderToStyleAndLayoutDuration: annotations.int?.renderToStyleAndLayout ?? 0,
                        LoAFTotalStyleAndLayoutToPaintDuration: annotations.int?.styleAndLayoutToPaint ?? 0
                    };
                    e.forEach((e)=>{
                        e.push(y);
                    });
                }
            });
            r("one-trace").subscribe("trace-end-before-logging", function(t) {
                if (t.traceType === "LONG_ANIMATION_FRAME") {
                    let n = false;
                    e.forEach((e, a)=>{
                        if (n !== true) {
                            const i = s.get(a);
                            const l = u.get(a);
                            if (i != null && l != null) {
                                const c = Date.now() - l;
                                const d = c > o("JSSPSetting").slowProfilerSpan;
                                if (d && i.has("fast-profiler") || !d && i.has("slow-profiler")) {
                                    return;
                                }
                            }
                            r("one-trace").addAnnotations(t.annotations, {
                                string: {
                                    JSSPId: a
                                }
                            });
                            n = true;
                        }
                    });
                }
            });
        };
        return a;
    })(r("JSSPTraceBaseDataCollector"));
    if (o("JSSPSetting").isCollectingLoAF) {
        c.startLoAFObserver();
    }
    l.default = c;
}, 98);
__d("JSSPLongAnimationFrameMarker", [
    "JSSPTraceBaseTransformer",
    "JSSelfProfilerUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = 300;
    const s = ((t)=>{
        function r() {
            return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(r, t);
        const r_prototype = r.prototype;
        r_prototype.getLoAFDataList = function({ LoAFEntryList }) {
            if (LoAFEntryList == null) {
                return null;
            }
            const n = LoAFEntryList.map((LoAFRecord)=>{
                const { endTime, startTime } = LoAFRecord;
                const r = {
                    LoAFTotalScriptExecutionDuration: LoAFRecord.LoAFTotalScriptExecutionDuration,
                    LoAFTotalRenderToStyleAndLayoutDuration: LoAFRecord.LoAFTotalRenderToStyleAndLayoutDuration,
                    LoAFTotalStyleAndLayoutToPaintDuration: LoAFRecord.LoAFTotalStyleAndLayoutToPaintDuration,
                    duration: endTime - startTime
                };
                return {
                    LoAFRecord,
                    metadata: r
                };
            });
            return n.sort((e, t)=>e.LoAFRecord.startTime - t.LoAFRecord.startTime);
        };
        r_prototype.transform = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n, r) {
                const a = this;
                const i = this.getLoAFDataList(r);
                if (i == null) {
                    return t;
                }
                t.metadata = babelHelpers.extends({}, t.metadata, {
                    LoAFDurations: [],
                    LoAFTotalScriptExecutionDurations: [],
                    LoAFTotalRenderToStyleAndLayoutDurations: [],
                    LoAFTotalStyleAndLayoutToPaintDurations: []
                });
                for (const l of i){
                    const s = t.metadata;
                    const u = l.metadata;
                    s.LoAFDurations.push(u.duration);
                    s.LoAFTotalScriptExecutionDurations.push(u.LoAFTotalScriptExecutionDuration);
                    s.LoAFTotalRenderToStyleAndLayoutDurations.push(u.LoAFTotalRenderToStyleAndLayoutDuration);
                    s.LoAFTotalStyleAndLayoutToPaintDurations.push(u.LoAFTotalStyleAndLayoutToPaintDuration);
                }
                const c = function*(n) {
                    yield o("JSSelfProfilerUtils").nextEventLoop(function() {
                        return a.batchProcess(t, n, i);
                    });
                };
                for(let d = 0; d < t.samples.length; d += e){
                    yield* c(d);
                }
                return t;
            });
            function r(e, n, r) {
                return t.apply(this, arguments);
            }
            return r;
        })();
        r_prototype.batchProcess = function(n, r, a) {
            for(let t = Math.min(r + e, n.samples.length), i = r; i < t; ++i){
                const l = n.samples[i];
                for(let s = 0; s < a.length; ++s){
                    const u = a[s].LoAFRecord;
                    if (u.startTime <= l.timestamp && u.endTime > l.timestamp) {
                        l.LoAFId = s;
                        o("JSSelfProfilerUtils").addMarkerToSample(l, "long-animation-frame");
                        break;
                    }
                }
            }
        };
        return r;
    })(r("JSSPTraceBaseTransformer"));
    l.default = s;
}, 98);
__d("JSSPLongTaskLinker", [
    "JSSPSetting",
    "JSSPTraceBaseDataCollector",
    "asyncToGeneratorRuntime",
    "one-trace"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = new Map;
    const s = new Map;
    const u = ((t)=>{
        function a() {
            return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(a, t);
        const a_prototype = a.prototype;
        a_prototype.onProfilerStarts = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n = null) {
                s.set(t, Date.now());
                if (n != null) {
                    e.set(t, new Set(n));
                }
            });
            function r(e, n) {
                return t.apply(this, arguments);
            }
            return r;
        })();
        a_prototype.onProfilerEnds = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n, r) {
                s.delete(t);
                e.delete(t);
                return r;
            });
            function r(e, n, r) {
                return t.apply(this, arguments);
            }
            return r;
        })();
        a_prototype.onProfilerAborts = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                s.delete(t);
                e.delete(t);
            });
            function r(e) {
                return t.apply(this, arguments);
            }
            return r;
        })();
        a.startLongtaskObserver = function() {
            r("one-trace").subscribe("trace-end-before-logging", function(t) {
                if (t.traceType === "LONGTASK") {
                    let n = false;
                    e.forEach((a, i)=>{
                        if (n !== true) {
                            const l = e.get(i);
                            const u = s.get(i);
                            if (l != null && u != null) {
                                const c = Date.now() - u;
                                const d = c > o("JSSPSetting").slowProfilerSpan;
                                if (d && l.has("fast-profiler") || !d && l.has("slow-profiler")) {
                                    return;
                                }
                            }
                            r("one-trace").addAnnotations(t.annotations, {
                                string: {
                                    JSSPId: i
                                }
                            });
                            n = true;
                        }
                    });
                }
            });
        };
        return a;
    })(r("JSSPTraceBaseDataCollector"));
    if (o("JSSPSetting").isCollectingINP) {
        u.startLongtaskObserver();
    }
    l.default = u;
}, 98);
__d("JSSPLongTaskMarker", [
    "JSSPTraceBaseTransformer",
    "JSSelfProfilerUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.transform = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, { performanceEntryList }) {
                if (performanceEntryList == null) {
                    return e;
                }
                const a = e;
                e.samples.forEach((e)=>{
                    performanceEntryList.forEach((t)=>{
                        if (t.entryType === "longtask") {
                            const n = t.startTime;
                            const r = t.startTime + t.duration;
                            if (e.timestamp >= n && e.timestamp <= r) {
                                o("JSSelfProfilerUtils").addMarkerToSample(e, "longtask");
                                e.longtaskDuration = t.duration;
                            }
                        }
                    });
                });
                return a;
            });
            function t(t, n, r) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        return t;
    })(r("JSSPTraceBaseTransformer"));
    l.default = e;
}, 98);
__d("JSSPMemoryCollector", [
    "JSSPTraceBaseDataCollector",
    "MemoryUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = new Map;
    const s = ((t)=>{
        function r() {
            return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(r, t);
        const r_prototype = r.prototype;
        r_prototype.onProfilerStarts = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n = null) {
                e.set(t, {
                    start: o("MemoryUtils").getCurrentMemory({
                        runGC: false
                    }),
                    end: null
                });
            });
            function r(e, n) {
                return t.apply(this, arguments);
            }
            return r;
        })();
        r_prototype.onProfilerEnds = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n, r) {
                const a = e.get(t);
                if (a != null) {
                    a.end = o("MemoryUtils").getCurrentMemory({
                        runGC: false
                    });
                    r.memoryData = a;
                }
                e.delete(t);
                return r;
            });
            function r(e, n, r) {
                return t.apply(this, arguments);
            }
            return r;
        })();
        r_prototype.onProfilerAborts = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                e.delete(t);
            });
            function r(e) {
                return t.apply(this, arguments);
            }
            return r;
        })();
        return r;
    })(r("JSSPTraceBaseDataCollector"));
    l.default = s;
}, 98);
__d("JSSPMemoryMarker", [
    "JSSPTraceBaseTransformer",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.transform = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
                e.metadata = e.metadata ?? {};
                const n_memoryData = n.memoryData;
                let a = null;
                let i = null;
                if (n_memoryData != null) {
                    a = n_memoryData.start?.usedJSHeapSize;
                    i = n_memoryData.end?.usedJSHeapSize;
                }
                if (a != null && i != null) {
                    e.metadata.usedJSHeapSizeWhenStart = a;
                    e.metadata.usedJSHeapSizeWhenEnd = i;
                }
                return e;
            });
            function t(t, n, r) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        return t;
    })(r("JSSPTraceBaseTransformer"));
    l.default = e;
}, 98);
__d("JSSPPerformanceEntryCollector", [
    "JSSPTraceBaseDataCollector",
    "JSSelfProfilerProbe",
    "JSSelfProfilerUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e = null;
    const s = new Map;
    function u() {
        if (!(e != null || !r("JSSelfProfilerProbe").isLongtaskAvailable)) {
            e = new window.PerformanceObserver(function(e) {
                e.getEntries().forEach((e)=>{
                    s.forEach((t)=>t.push(e));
                });
            });
            e.observe({
                buffered: true,
                entryTypes: [
                    "longtask"
                ]
            });
        }
    }
    u();
    const c = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.onProfilerStarts = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                s.set(e, []);
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.onProfilerEnds = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
                n.performanceEntryList = o("JSSelfProfilerUtils").mergeList(n.performanceEntryList ?? [], s.get(e) ?? []);
                s.delete(e);
                return n;
            });
            function t(t, n, r) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.onProfilerAborts = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                s.delete(e);
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        return t;
    })(r("JSSPTraceBaseDataCollector"));
    l.default = c;
}, 98);
__d("JSSPStackFrameFilterBase", [
    "FBLogger",
    "JSSPTraceBaseTransformer",
    "JSSelfProfilerUtils",
    "asyncToGeneratorRuntime",
    "gkx"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = -1;
    const s = ((t)=>{
        function a() {
            return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(a, t);
        const a_prototype = a.prototype;
        a_prototype.getTraceAnnotation = function() {
            return "simplified";
        };
        a_prototype.getStackIdsToRemove = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                r("FBLogger")("JSSelfProfiler").warn("JSSPStackFrameFilterBase.getStackIdsToRemove should be overridden.");
                return new Set;
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.transform = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                const n = yield this.getStackIdsToRemove(t);
                const a = yield this.getSampleIdsWithFramesRemoved(t, n);
                const i = new Map;
                const l = new Map;
                for(var s = t.stacks, u = [], c = 0, d = 0, m = 0; c < s.length;){
                    const p = s[c];
                    if (n.has(c)) {
                        if (p.parentId != null) {
                            l.set(c, p.parentId);
                        }
                        ++m;
                    } else {
                        u.push(p);
                        i.set(c, d++);
                    }
                    ++c;
                }
                for (const _ of l.keys()){
                    let g = l.get(_) ?? e;
                    if (g === e) {
                        l.delete(_);
                        continue;
                    }
                    const h = new Set;
                    while(l.has(g)){
                        const y = l.get(g);
                        if (y == null || y === e) {
                            l.delete(g);
                            break;
                        }
                        if (h.has(g)) {
                            break;
                        }
                        h.add(g);
                        g = y;
                    }
                    if (g !== e) {
                        l.set(_, g);
                    } else {
                        l.delete(_);
                    }
                }
                for (const C of l.keys()){
                    const v = l.get(C) ?? e;
                    if (v === e) {
                        l.delete(C);
                        continue;
                    }
                    const S = i.get(v);
                    if (S != null) {
                        l.set(C, S);
                    } else {
                        l.delete(C);
                    }
                }
                u.forEach((t)=>{
                    if (t.parentId != null) {
                        if (i.has(t.parentId)) {
                            t.parentId = i.get(t.parentId);
                        } else if (l.has(t.parentId)) {
                            const n = l.get(t.parentId);
                            if (n === e) {
                                delete t.parentId;
                            } else {
                                t.parentId = n;
                            }
                        } else {
                            delete t.parentId;
                        }
                        if (t.parentId === e) {
                            delete t.parentId;
                        }
                    }
                });
                t.stacks = u;
                const R = this.getTraceAnnotation();
                t.samples = t.samples.map((e, t)=>{
                    if (a.has(t)) {
                        o("JSSelfProfilerUtils").addMarkerToSample(e, R);
                    }
                    return e;
                }).filter((e)=>e.stackId != null && i.has(e.stackId)).map((e)=>{
                    e.stackId = i.get(e.stackId ?? 0);
                    return e;
                });
                if (r("gkx")("962")) {
                    const L = (m / s.length * 100).toFixed(2);
                    r("FBLogger")("JSSelfProfiler").info("JSSP trace optimizer removed %s frames (%s%)", m, L);
                }
                return t;
            });
            function a(e) {
                return t.apply(this, arguments);
            }
            return a;
        })();
        a_prototype.getSampleIdsWithFramesRemoved = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
                const n = o("JSSelfProfilerUtils").getStackIdToSampleIdMap(e);
                const r = new Set;
                for (const a of t){
                    if (n.has(a)) {
                        r.add(n.get(a) ?? -1);
                    }
                }
                return r;
            });
            function t(t, n) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        return a;
    })(r("JSSPTraceBaseTransformer"));
    l.default = s;
}, 98);
__d("JSSPReactFrameDedupFilter", [
    "JSSPStackFrameFilterBase",
    "JSSelfProfilerUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = ((e)=>{
        function t(t) {
            let n;
            n = e.call(this) || this;
            n.$JSSPReactFrameDedupFilter$p_1 = new Set(t);
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.getStackIdsToRemove = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = new Set;
                o("JSSelfProfilerUtils").mergeSets(t, (yield this.getStackIdsInBlockList(e)));
                o("JSSelfProfilerUtils").mergeSets(t, (yield this.getStackIdsInRepetitivePatterns(e)));
                return t;
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.getStackIdsInBlockList = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = new Set;
                for(let n = e.stacks, r = 0; r < n.length; ++r){
                    const a = n[r];
                    const i = o("JSSelfProfilerUtils").getStackFrameName(a, e);
                    if (i != null && this.$JSSPReactFrameDedupFilter$p_1.has(i)) {
                        t.add(r);
                    }
                }
                return t;
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.getStackIdsInRepetitivePatterns = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = new Set;
                for(let n = e.samples, r = e.stacks, o = 0; o < n.length; ++o){
                    const l = new Set;
                    const s = n[o];
                    for(let u = r[s.stackId ?? -1]?.parentId; u != null;){
                        if (l.has(u)) {
                            break;
                        }
                        const L = r[u].frameId ?? -1;
                        const E = r[u]?.parentId ?? -2;
                        const k = r[E]?.frameId ?? -3;
                        const I = r[E]?.parentId ?? -4;
                        const T = r[I]?.frameId ?? -5;
                        const D = r[I]?.parentId ?? -6;
                        const x = r[D]?.frameId ?? -7;
                        if (L === T && k === x && L !== k) {
                            t.add(u);
                            t.add(E);
                            l.add(E);
                            u = r[u].parentId ?? -1;
                        }
                        l.add(u);
                        u = r[u]?.parentId;
                    }
                }
                return t;
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        return t;
    })(r("JSSPStackFrameFilterBase"));
    l.default = e;
}, 98);
__d("JSSPSampleDurationMarker", [
    "JSSPTraceBaseTransformer",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.transform = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                for(let r = this.isSamplesInOrder(e) ? e.samples : e.samples = [].concat(e.samples).sort((e, t)=>e.timestamp - t.timestamp), o = 0, a = r[0]?.stackId ?? -1, i = 0; i < r.length - 1; ++i){
                    const l = r[i];
                    const s = r[i + 1];
                    const u = s.timestamp - l.timestamp;
                    l.duration = u;
                    o += u;
                    if (a !== s.stackId) {
                        l.cumulativeDuration = o;
                        o = 0;
                        a = s.stackId ?? -1;
                    }
                    if (i === r.length - 2) {
                        l.cumulativeDuration = o;
                    }
                }
                return e;
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.isSamplesInOrder = function(t) {
            for(let e = t.samples, n = 1; n < e.length; ++n){
                if (e[n].timestamp > e[n - 1].timestamp) {
                    return false;
                }
            }
            return true;
        };
        return t;
    })(r("JSSPTraceBaseTransformer"));
    l.default = e;
}, 98);
__d("JSSPSubSpanMarker", [
    "JSSPTraceBaseTransformer",
    "JSSelfProfilerUtils",
    "asyncToGeneratorRuntime",
    "interaction-tracing-metrics"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = new Set([
        "LONGTASK",
        "INP",
        "LONG_ANIMATION_FRAME"
    ]);
    const s = 5;
    const u = 300;
    const c = ((t)=>{
        function r() {
            return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(r, t);
        const r_prototype = r.prototype;
        r_prototype.getSubSpanList = function(n) {
            const a = n.metadata?.interactionId;
            if (a == null) {
                return null;
            }
            const i = o("interaction-tracing-metrics").InteractionTracingMetricsCore.get(a)?.subSpans;
            if (i == null) {
                return null;
            }
            const l = [];
            Object.entries(i).forEach(([n, r])=>{
                (r ?? []).forEach((t, r)=>{
                    let subSpanName = n;
                    if (e.has(n)) {
                        subSpanName = r < s ? `${n}_${r}` : `${n}_{N}`;
                    }
                    l.push({
                        start: t.start,
                        end: t.end,
                        subSpanName
                    });
                });
            });
            l.sort((e, t)=>e.start - t.start);
            return l;
        };
        r_prototype.transform = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const r = this;
                const a = this.getSubSpanList(e);
                const i = [];
                const l = new Map;
                if (a == null) {
                    return e;
                }
                e.metadata = e.metadata ?? {
                    subSpanNames: []
                };
                const s = e.metadata.subSpanNames ?? [];
                let s_length = s.length;
                function d(e) {
                    if (l.has(e)) {
                        return l.get(e) ?? -1;
                    }
                    l.set(e, s_length);
                    i.push(e);
                    return s_length++;
                }
                const m = function*(n) {
                    yield o("JSSelfProfilerUtils").nextEventLoop(function() {
                        return r.batchProcess(e, n, a, d);
                    });
                };
                for(let p = 0; p < e.samples.length; p += u){
                    yield* m(p);
                }
                if (e.metadata != null) {
                    e.metadata.subSpanNames = [].concat(s, i);
                }
                return e;
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        r_prototype.batchProcess = function(t, n, r, o) {
            for(var e = Math.min(n + u, t.samples.length), a = ()=>{
                const e = t.samples[i];
                r.forEach((t)=>{
                    if (t.start < e.timestamp && t.end > e.timestamp) {
                        e.subSpans = e.subSpans ?? [];
                        e.subSpans.push(o(t.subSpanName));
                    }
                });
            }, i = n; i < e; ++i){
                a();
            }
        };
        return r;
    })(r("JSSPTraceBaseTransformer"));
    l.default = c;
}, 98);
__d("JSSPTraceSizeOptimizer", [
    "JSSPTraceBaseTransformer",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.transform = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = e;
                t.resources = e.resources.map((e)=>{
                    if (e.startsWith("data:")) {
                        return "inline JavaScript";
                    }
                    return e;
                });
                return t;
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        return t;
    })(r("JSSPTraceBaseTransformer"));
    l.default = e;
}, 98);
__d("JSSPUAMarkerExtractor", [
    "JSSPTraceBaseTransformer",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.transform = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                e.samples.forEach((e)=>{
                    const e_marker = e.marker;
                    if (!(e_marker == null || e_marker === "")) {
                        e.uaMarker = e_marker;
                        e.marker = undefined;
                    }
                });
                return e;
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        return t;
    })(r("JSSPTraceBaseTransformer"));
    l.default = e;
}, 98);
__d("JSSPUrlCollector", [
    "JSSPTraceBaseDataCollector",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = new Map;
    function s(e) {
        const t = new URL(e);
        const n = t.origin + t.pathname;
        return n;
    }
    const u = ((t)=>{
        function r() {
            return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(r, t);
        const r_prototype = r.prototype;
        r_prototype.onProfilerStarts = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                e.set(t, {
                    urlBeforeTraceStarts: s(document.URL)
                });
            });
            function r(e) {
                return t.apply(this, arguments);
            }
            return r;
        })();
        r_prototype.onProfilerEnds = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n, r) {
                const a = e.get(t) ?? {};
                a.urlAfterTraceEnds = s(document.URL);
                e.delete(t);
                r.urlData = a;
                return r;
            });
            function r(e, n, r) {
                return t.apply(this, arguments);
            }
            return r;
        })();
        r_prototype.onProfilerAborts = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                e.delete(t);
            });
            function r(e) {
                return t.apply(this, arguments);
            }
            return r;
        })();
        return r;
    })(r("JSSPTraceBaseDataCollector"));
    l.default = u;
}, 98);
__d("JSSPUrlMarker", [
    "JSSPTraceBaseTransformer",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.transform = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, { urlData }) {
                if (urlData != null) {
                    e.metadata = e.metadata ?? {};
                    e.metadata.urlWhenStart = urlData.urlBeforeTraceStarts ?? "";
                    e.metadata.urlWhenEnd = urlData.urlAfterTraceEnds ?? "";
                }
                return e;
            });
            function t(t, n, r) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        return t;
    })(r("JSSPTraceBaseTransformer"));
    l.default = e;
}, 98);
__d("JSSPConfigInit", [
    "JSSPBrsidMarker",
    "JSSPDevTraceFilter",
    "JSSPEmptySampleFilter",
    "JSSPEventCountCollector",
    "JSSPEventCountMarker",
    "JSSPFELabsMarker",
    "JSSPIdMarker",
    "JSSPInteractToNextPaintMarker",
    "JSSPInteractionToNextPaintCollector",
    "JSSPInteractionTraceDataMarker",
    "JSSPJestE2EMarker",
    "JSSPLongAnimationFrameCollector",
    "JSSPLongAnimationFrameMarker",
    "JSSPLongTaskLinker",
    "JSSPLongTaskMarker",
    "JSSPMemoryCollector",
    "JSSPMemoryMarker",
    "JSSPPerformanceEntryCollector",
    "JSSPReactFrameDedupFilter",
    "JSSPSampleDurationMarker",
    "JSSPSetting",
    "JSSPSubSpanMarker",
    "JSSPTraceSizeOptimizer",
    "JSSPUAMarkerExtractor",
    "JSSPUrlCollector",
    "JSSPUrlMarker",
    "JSSelfProfiler",
    "JSSelfProfilerConfig.experimental",
    "justknobx"
], function(t, n, r, o, a, i, l) {
    "use strict";
    class e {
        static run() {
            const e = this.getInstance();
            e.registerDataCollectors();
            e.registerTraceTransformers();
        }
        static getInstance() {
            return new this;
        }
        registerDataCollectors() {
            let e;
            (e = r("JSSelfProfiler")).registerDataCollector(new (r("JSSPPerformanceEntryCollector")), "JSSPPerformanceEntryCollector");
            e.registerDataCollector(new (r("JSSPUrlCollector")), "JSSPUrlCollector");
            e.registerDataCollector(new (r("JSSPMemoryCollector")), "JSSPMemoryCollector");
            e.registerDataCollector(new (r("JSSPEventCountCollector")), "JSSPEventCountCollector");
            if (o("JSSPSetting").isCollectingINP) {
                r("JSSelfProfiler").registerDataCollector(new (r("JSSPInteractionToNextPaintCollector")), "JSSPInteractionToNextPaintCollector");
                r("JSSelfProfiler").registerDataCollector(new (r("JSSPLongTaskLinker")), "JSSPLongTaskLinker", true);
            }
            if (o("JSSPSetting").isCollectingLoAF) {
                r("JSSelfProfiler").registerDataCollector(new (r("JSSPLongAnimationFrameCollector")), "JSSPLongAnimationFrameCollector");
            }
        }
        registerTraceTransformers() {
            let e;
            (e = r("JSSelfProfiler")).registerTraceTransformer(new (r("JSSPUAMarkerExtractor")), "JSSPUAMarkerExtractor");
            e.registerTraceTransformer(new (r("JSSPEmptySampleFilter")), "JSSPEmptySampleFilter");
            e.registerTraceTransformer(new (r("JSSPTraceSizeOptimizer")), "JSSPTraceSizeOptimizer");
            e.registerTraceTransformer(new (r("JSSPDevTraceFilter")), "JSSPDevTraceFilter");
            e.registerTraceTransformer(new (r("JSSPJestE2EMarker")), "JSSPJestE2EMarker");
            e.registerTraceTransformer(new (r("JSSPLongTaskMarker")), "JSSPLongTaskMarker");
            e.registerTraceTransformer(new (r("JSSPBrsidMarker")), "JSSPBrsidMarker");
            e.registerTraceTransformer(new (r("JSSPUrlMarker")), "JSSPUrlMarker");
            e.registerTraceTransformer(new (r("JSSPMemoryMarker")), "JSSPMemoryMarker");
            e.registerTraceTransformer(new (r("JSSPFELabsMarker")), "JSSPFELabsMarker");
            e.registerTraceTransformer(new (r("JSSPSubSpanMarker")), "JSSPSubSpanMarker");
            e.registerTraceTransformer(new (r("JSSPSampleDurationMarker")), "JSSPSampleDurationMarker");
            e.registerTraceTransformer(new (r("JSSPInteractionTraceDataMarker")), "JSSPInteractionTraceDataMarker");
            e.registerTraceTransformer(new (r("JSSPEventCountMarker")), "JSSPEventCountMarker");
            e.registerTraceTransformer(new (r("JSSPIdMarker")), "JSSPIdMarker");
            if (o("JSSPSetting").isCollectingINP) {
                r("JSSelfProfiler").registerTraceTransformer(new (r("JSSPInteractToNextPaintMarker")), "JSSPInteractToNextPaintMarker");
            }
            if (o("JSSPSetting").isCollectingLoAF) {
                r("JSSelfProfiler").registerTraceTransformer(new (r("JSSPLongAnimationFrameMarker")), "JSSPLongAnimationFrameMarker");
            }
            if (r("justknobx")._("2285")) {
                r("JSSelfProfiler").registerTraceTransformer(new (r("JSSPReactFrameDedupFilter"))((r("JSSelfProfilerConfig.experimental") == null ? undefined : r("JSSelfProfilerConfig.experimental").REMOVE_STACK_FRAME_IN_SCUBA) ?? []), "JSSPReactFrameDedupFilter");
            }
        }
    }
    l.default = e;
}, 98);
__d("JSSelfProfilerLoomProvider", [
    "JSSPSetting",
    "JSSelfProfiler",
    "JSSelfProfilerUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = (()=>{
        function e(e) {
            this.$5 = false;
            this.$5 = false;
            if (this.$5) {
                this.$4 = performance.now();
                return;
            }
            this.$1 = e;
            const a = o("JSSelfProfilerUtils").getProfilerInitConfig();
            const { maxBufferSize, sampleInterval } = a;
            const s = this.$1?.triggerInfo ?? {};
            this.$2 = r("JSSelfProfiler").startRecording(sampleInterval, maxBufferSize, {
                triggerInfo: babelHelpers.extends({}, s),
                annotations: [
                    "fast-profiler"
                ]
            });
            const u = Math.min(sampleInterval * 10, 100);
            if (u > sampleInterval) {
                this.$3 = r("JSSelfProfiler").startRecording(u, maxBufferSize * 2, {
                    triggerInfo: babelHelpers.extends({}, s),
                    annotations: [
                        "slow-profiler"
                    ]
                });
            }
            this.$4 = performance.now();
        }
        const e_prototype = e.prototype;
        e_prototype.loomTraceWillEnd = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                if (!this.$5) {
                    const e = this.$1;
                    const t = this.$2;
                    const n = this.$3;
                    if (e == null) {
                        yield t?.abort();
                        yield n?.abort();
                    } else {
                        const r = performance.now() - this.$4;
                        const a = r > o("JSSPSetting").slowProfilerSpan && this.$3 != null;
                        const i = a ? n : t;
                        const l = a ? t : n;
                        yield l?.abort();
                        e.jsSelfProfilerData = yield i?.stopRecording();
                        i?.logStats();
                    }
                    this.$1 = null;
                    this.$2 = null;
                    this.$3 = null;
                }
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        return e;
    })();
    const s = {
        loomProviderId: "JSSelfProfiler",
        isSupported: function() {
            return r("JSSelfProfiler").isSupported();
        },
        getInstance: function(n) {
            return new e(n);
        }
    };
    l.default = s;
}, 98);
__d("SSRInjectedElements", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = new WeakSet;
    i.default = e;
}, 66);
__d("BDHeaderConfig", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = "359341";
    i.ASBD_ID = e;
}, 66);
__d("CometLruCache", [
    "FBLogger"
], function(t, n, r, o, a, i, l) {
    "use strict";
    class e {
        constructor(e, t){
            this.$1 = e;
            this.$2 = t;
            if (e <= 0) {
                r("FBLogger")("CometLruCache").mustfix("CometLruCache: Unable to create instance of cache with zero or negative capacity.");
            }
            this.$3 = new Map;
        }
        set(t, n) {
            this.$3.delete(t);
            this.$3.set(t, {
                timestamp: Date.now(),
                value: n
            });
            if (this.$3.size > this.$1) {
                const e = this.$3.keys().next();
                if (!e.done) {
                    this.$3.delete(e.value);
                }
            }
        }
        get(t) {
            const e = this.$3.get(t);
            if (e != null) {
                if (Date.now() > e.timestamp + this.$2) {
                    this.$3.delete(t);
                    return null;
                }
                this.$3.delete(t);
                this.$3.set(t, e);
                return e.value;
            }
            return null;
        }
        has(t) {
            return this.$3.has(t);
        }
        delete(t) {
            this.$3.delete(t);
        }
        size() {
            return this.$3.size;
        }
        capacity() {
            return this.$1 - this.$3.size;
        }
        clear() {
            this.$3.clear();
        }
    }
    function s(t, n = Number.MAX_SAFE_INTEGER) {
        return new e(t, n);
    }
    l.create = s;
}, 98);
__d("CometThemeInfraBaseTheme.react", [
    "BaseView.react",
    "CometThemeInfraBaseThemeContext.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = [
        "displayMode",
        "ref",
        "themes",
        "children",
        "xstyle"
    ];
    let s;
    const u = s || (s = o("react"));
    function CComponent(t) {
        const n = o("react-compiler-runtime").c(18);
        let a;
        let i;
        let l;
        let s;
        let c;
        let d;
        if (n[0] !== t) {
            i = t.displayMode;
            s = t.ref;
            c = t.themes;
            a = t.children;
            d = t.xstyle;
            l = babelHelpers.objectWithoutPropertiesLoose(t, e);
            n[0] = t;
            n[1] = a;
            n[2] = i;
            n[3] = l;
            n[4] = s;
            n[5] = c;
            n[6] = d;
        } else {
            a = n[1];
            i = n[2];
            l = n[3];
            s = n[4];
            c = n[5];
            d = n[6];
        }
        const m = c[i ?? "auto"];
        let xstyle;
        if (n[7] !== m || n[8] !== d) {
            xstyle = [
                m,
                d
            ];
            n[7] = m;
            n[8] = d;
            n[9] = xstyle;
        } else {
            xstyle = n[9];
        }
        let _;
        if (n[10] !== a || n[11] !== l || n[12] !== s || n[13] !== xstyle) {
            _ = u.jsx(r("BaseView.react"), babelHelpers.extends({
                xstyle
            }, l, {
                ref: s,
                children: a
            }));
            n[10] = a;
            n[11] = l;
            n[12] = s;
            n[13] = xstyle;
            n[14] = _;
        } else {
            _ = n[14];
        }
        let f;
        if (n[15] !== _ || n[16] !== c) {
            const Component = r("CometThemeInfraBaseThemeContext.react").Provider;
            f = <Component value={c}>{_}</Component>;
            n[15] = _;
            n[16] = c;
            n[17] = f;
        } else {
            f = n[17];
        }
        return f;
    }
    l.default = CComponent;
}, 98);
__d("CometThemeInfraFallbackConfig", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = new Set;
    function l(fallbackThemes, t) {
        return fallbackThemes.auto === t.auto && fallbackThemes.dark === t.dark && fallbackThemes.light === t.light;
    }
    var s = {
        fallbackThemes: {
            auto: null,
            dark: null,
            light: null
        },
        setFallbackTheme: function(n) {
            if (!l(s.fallbackThemes, n)) {
                s.fallbackThemes = n;
                e.forEach((e)=>e());
            }
        },
        subscribe: function(n) {
            e.add(n);
            return function() {
                e.delete(n);
            };
        }
    };
    i.default = s;
}, 66);
__d("ConstUriUtilsGating", [
    "justknobx"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e() {
        return r("justknobx")._("3414");
    }
    l.enforceNoMissingDomain = e;
}, 98);
__d("structuredClone", [], function(t, n, r, o, a, i) {
    "use strict";
    const l = window?.structuredClone;
    i.default = l;
}, 66);
__d("ConstUriUtils", [
    "CometLruCache",
    "ConstUriUtilsGating",
    "ExecutionEnvironment",
    "FBLogger",
    "PHPQuerySerializer",
    "PHPQuerySerializerNoEncoding",
    "URIRFC3986",
    "URISchemes",
    "UriNeedRawQuerySVConfig",
    "isSameOrigin",
    "nullthrows",
    "structuredClone"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    const d = o("CometLruCache").create(5000);
    const m = new RegExp("(^|\\.)facebook\\.com$", "i");
    const p = new RegExp("(^|\\.)messenger\\.com$", "i");
    const _ = new RegExp("(^|\\.)instagram\\.com$", "i");
    const f = new RegExp("(^|\\\\.)meta\\\\.(com|ai)$", "i");
    const g = new RegExp("(^|\\.)threads\\.com$", "i");
    const h = new RegExp("^(?:[^/]*:|[\\x00-\\x1f]*/[\\x00-\\x1f]*/)");
    const y = new RegExp("[\\x00-\\x2c\\x2f\\x3b-\\x40\\x5c\\x5e\\x60\\x7b-\\x7f\\uFDD0-\\uFDEF\\uFFF0-\\uFFFF\\u2047\\u2048\\uFE56\\uFE5F\\uFF03\\uFF0F\\uFF1F]");
    const C = r("UriNeedRawQuerySVConfig").uris.map((e)=>({
            domain: e,
            valid: k(e)
        }));
    const b = [];
    const v = [];
    function S(queryParams, t) {
        const n = {};
        if (queryParams != null) {
            for (const o of queryParams.entries()){
                n[o[0]] = o[1];
            }
        } else {
            r("FBLogger")("ConstUriUtils").warn("Passed a null query map in, this means poor client side flow coverage or client/server boundary type issue.");
        }
        return t.serialize(n);
    }
    function R(e, t, n) {
        let o = c || (c = r("PHPQuerySerializer"));
        if ([
            "http",
            "https"
        ].includes(t) && L(e)) {
            if (e.includes("doubleclick.net") && n != null && !n.startsWith("http")) {
                return o;
            }
            o = r("PHPQuerySerializerNoEncoding");
        }
        return o;
    }
    function L(e) {
        return e != null && C.some((t)=>t.valid && E(e, t.domain));
    }
    function E(e, t) {
        if (t === "" || e === "") {
            return false;
        }
        if (e.endsWith(t)) {
            const n = e.length - t.length - 1;
            if (n === -1 || e[n] === ".") {
                return true;
            }
        }
        return false;
    }
    function k(e) {
        return !y.test(e);
    }
    function I(e, t) {
        const n = t.protocol != null && t.protocol !== "" ? t.protocol : e.getProtocol();
        const r = t.domain != null ? R(t.domain, n) : e.getSerializer();
        const o = {
            domain: e.getDomain(),
            fragment: e.getFragment(),
            fragmentSeparator: e.hasFragmentSeparator(),
            isGeneric: e.isGeneric(),
            originalRawQuery: e.getOriginalRawQuery(),
            path: e.getPath(),
            port: e.getPort(),
            protocol: e.getProtocol(),
            queryParams: e.getQueryParams(),
            serializer: r,
            subdomain: e.getSubdomain()
        };
        const a = babelHelpers.extends({}, o, t);
        const i = t.queryParams != null && t.queryParams.size !== 0;
        return P.getUribyObject(a, i);
    }
    function T(e, t, n = false, r) {
        const o = e.protocol !== "" ? `${e.protocol}:${e.isGeneric ? "" : "//"}` : "";
        const a = e.domain !== "" ? e.domain : "";
        const i = e.port !== "" ? `:${e.port}` : "";
        const l = e.path !== "" ? e.path : o !== "" && o !== "mailto:" || a !== "" || i !== "" ? "/" : "";
        const s = D(a, e.originalRawQuery, e.queryParams, t, n, r ?? e.serializer);
        const u = s.length > 0 ? "?" : "";
        const c = e.fragment !== "" ? `#${e.fragment}` : "";
        const d = e.fragment === "" && e.fragmentSeparator ? "#" : "";
        return `${o}${a}${i}${l}${u}${s}${d}${c}`;
    }
    function D(e, originalRawQuery, queryParams, r, o = false, a) {
        if (!r && (o || L(e))) {
            return originalRawQuery ?? "";
        }
        return S(queryParams, a);
    }
    function x(t) {
        const r = t.trim();
        const a = (e || (e = o("URIRFC3986"))).parse(r) || {
            fragment: null,
            host: null,
            isGenericURI: false,
            query: null,
            scheme: null,
            userinfo: null
        };
        const i = a.host || "";
        const l = i.split(".");
        const s = l.length >= 3 ? l[0] : "";
        const u = R(i, a.scheme || "", a.query);
        const c = u.deserialize(a.query || "") || {};
        const d = new Map(Object.entries(c));
        const m = $({
            domain: i,
            fragment: a.fragment || "",
            fragmentSeparator: a.fragment === "",
            isGeneric: a.isGenericURI,
            originalRawQuery: a.query,
            path: a.path || "",
            port: a.port != null ? String(a.port) : "",
            protocol: (a.scheme || "").toLowerCase(),
            queryParams: d,
            serializer: u,
            subdomain: s,
            userInfo: a?.userinfo ?? ""
        }, t);
        return m;
    }
    function $(e, t, n = (u || (u = o("URISchemes"))).Options.INCLUDE_DEFAULTS, a) {
        const i = {
            components: babelHelpers.extends({}, e),
            error: "",
            valid: true
        };
        const i_components = i.components;
        if (!(u || (u = o("URISchemes"))).isAllowed(e.protocol, n, a)) {
            i.valid = false;
            i.error = `The URI protocol "${String(e.protocol)}" is not allowed.`;
            return i;
        }
        if (!k(e.domain || "")) {
            i.valid = false;
            i.error = `This is an unsafe domain ${String(e.domain)}`;
            return i;
        }
        i_components.port = e.port != null && String(e.port) || "";
        if (e.userInfo) {
            i.valid = false;
            i.error = `Invalid URI: (userinfo is not allowed in a URI ${String(e.userInfo)})`;
            return i;
        }
        const s = t != null && t !== "" ? t : T(i_components, false);
        if (i_components.domain === "" && i_components.path.indexOf("\\") !== -1) {
            i.valid = false;
            i.error = `Invalid URI: (no domain but multiple back-slashes ${s})`;
            return i;
        }
        if (!i_components.protocol && h.test(s)) {
            i.valid = false;
            i.error = `Invalid URI: (unsafe protocol-relative URI ${s})`;
            return i;
        }
        if (i_components.domain !== "" && i_components.path !== "" && !i_components.path.startsWith("/")) {
            i.valid = false;
            i.error = `Invalid URI: (domain and pathwhere path lacks leading slash ${s})`;
            return i;
        }
        if (i_components.protocol !== "" && i_components.protocol !== "file" && !i_components.isGeneric && !i_components.domain && i_components.path !== "") {
            r("FBLogger")("ConstUriUtils").warn(`invalid URI (protocol "${i_components.protocol}" with no domain)`);
            const c = o("ConstUriUtilsGating").enforceNoMissingDomain();
            if (c) {
                i.valid = false;
                i.error = `Invalid URI: (protocol ${i_components.protocol} with no domain)`;
                return i;
            }
        }
        return i;
    }
    var P = (()=>{
        function e(e) {
            this.queryParams = new Map;
            this.domain = e.domain;
            this.fragment = e.fragment;
            this.fragmentSeparator = !!e.fragmentSeparator;
            this.isGenericProtocol = !!e.isGeneric;
            this.path = e.path;
            this.originalRawQuery = e.originalRawQuery;
            this.port = e.port;
            this.protocol = e.protocol;
            this.queryParams = e.queryParams;
            this.serializer = e.serializer;
            this.subdomain = e.subdomain;
        }
        const e_prototype = e.prototype;
        e_prototype.addQueryParam = function(t, n) {
            if (t) {
                const e = this.getQueryParams();
                e.set(t, n);
                return I(this, {
                    queryParams: e
                });
            }
            return this;
        };
        e_prototype.addQueryParams = function(t) {
            if (t.size > 0) {
                const e = this.getQueryParams();
                t.forEach((t, n)=>{
                    e.set(n, t);
                });
                return I(this, {
                    queryParams: e
                });
            }
            return this;
        };
        e_prototype.addQueryParamString = function(t) {
            if (t) {
                const e = t.startsWith("?") ? t.slice(1) : t;
                const n = this.getQueryParams();
                e.split("&").map((e)=>{
                    const t = e.split("=");
                    const r = t[0];
                    const o = t[1];
                    n.set(r, o);
                });
                return I(this, {
                    queryParams: n
                });
            }
            return this;
        };
        e_prototype.addTrailingSlash = function() {
            const e = this.getPath();
            if (e.length > 0 && e[e.length - 1] !== "/") {
                return this.setPath(`${e}/`);
            }
            return this;
        };
        e_prototype.getDomain = function() {
            return this.domain;
        };
        e_prototype.getFragment = function() {
            return this.fragment;
        };
        e_prototype.getOrigin = function() {
            const e = this.getPort();
            return `${this.getProtocol()}://${this.getDomain()}${e ? `:${e}` : ""}`;
        };
        e_prototype.getOriginalRawQuery = function() {
            return this.originalRawQuery;
        };
        e_prototype.getPath = function() {
            return this.path;
        };
        e_prototype.getPort = function() {
            return this.port;
        };
        e_prototype.getProtocol = function() {
            return this.protocol.toLowerCase();
        };
        e_prototype.getQualifiedUri = function() {
            if (!this.getDomain()) {
                let n = (typeof window !== "undefined" ? window : self)?.location?.href;
                if (n == null) {
                    r("FBLogger")("ConstUriUtils").blameToPreviousFile().warn("Cannot get qualified URI for current URI as there is no current location");
                    return null;
                }
                if ((s || (s = r("ExecutionEnvironment"))).isInWorker && n.startsWith("blob:")) {
                    n = n.substring(5, n.length);
                }
                const o = n.slice(0, n.indexOf("/", n.indexOf(":") + 3));
                return e.getUri(o + this.toString());
            }
            return this;
        };
        e_prototype.getQueryParam = function(t) {
            const e = this.queryParams.get(t);
            if (typeof e === "string") {
                return e;
            }
            const n = JSON.stringify(e);
            if (n == null) {
                return n;
            }
            return JSON.parse(n);
        };
        e_prototype.getQueryData = function() {
            return Object.fromEntries(this.getQueryParams());
        };
        e_prototype.getQueryParams = function() {
            if (r("structuredClone") != null) {
                return r("structuredClone")(this.queryParams);
            }
            const e = JSON.stringify(Array.from(this.queryParams), function(e, t) {
                if (Array.isArray(t)) {
                    return {
                        __CUUArr: true,
                        value: babelHelpers.extends({}, t)
                    };
                }
                return t;
            });
            const t = JSON.parse(e, function(e, t) {
                if (t != null && typeof t === "object" && t.__CUUArr) {
                    return Object.keys(t.value).reduce((acc, key)=>{
                        acc[key] = t.value[key];
                        return acc;
                    }, []);
                }
                return t;
            });
            return new Map(t);
        };
        e_prototype.getQueryString = function(t = false) {
            return D(this.domain, this.originalRawQuery, this.queryParams, false, t, this.serializer);
        };
        e_prototype.getRegisteredDomain = function() {
            if (!this.getDomain()) {
                return "";
            }
            if (!this.isFacebookUri()) {
                return null;
            }
            const e = this.getDomain().split(".");
            let t = e.indexOf("facebook");
            if (t === -1) {
                t = e.indexOf("workplace");
            }
            return e.slice(t).join(".");
        };
        e_prototype.getSerializer = function() {
            return this.serializer;
        };
        e_prototype.getSubdomain = function() {
            return this.subdomain;
        };
        e_prototype.getUnqualifiedUri = function() {
            if (this.getDomain()) {
                const t = this.toString();
                return e.getUri(t.slice(t.indexOf("/", t.indexOf(":") + 3)));
            }
            return this;
        };
        e.getUri = function(n) {
            const t = n.trim();
            let o = d.get(t);
            if (o == null) {
                const a = x(t);
                if (a.valid) {
                    o = new e(a.components);
                    d.set(t, o);
                } else {
                    r("FBLogger")("ConstUriUtils").blameToPreviousFrame().warn(a.error);
                    return null;
                }
            }
            return o;
        };
        e.getUriOrThrow = function(n) {
            return r("nullthrows")(e.getUri(n));
        };
        e.getUribyObject = function(n, o) {
            const t = T(n, o);
            let a = d.get(t);
            if (a == null) {
                if (o) {
                    n.originalRawQuery = S(n.queryParams, n.serializer);
                }
                const i = $(n);
                if (i.valid) {
                    a = new e(i.components);
                    d.set(t, a);
                } else {
                    r("FBLogger")("ConstUri").mustfix(i.error);
                    return null;
                }
            }
            return a;
        };
        e_prototype.hasFragmentSeparator = function() {
            return this.fragmentSeparator;
        };
        e_prototype.isEmpty = function() {
            return !(this.getPath() || this.getProtocol() || this.getDomain() || this.getPort() || this.queryParams.size > 0 || this.getFragment());
        };
        e_prototype.isFacebookUri = function() {
            const e = this.toString();
            if (e === "") {
                return false;
            }
            if (!this.getDomain() && !this.getProtocol()) {
                return true;
            }
            return [
                "https",
                "http"
            ].indexOf(this.getProtocol()) !== -1 && (m.test(this.getDomain()) || p.test(this.getDomain()) || _.test(this.getDomain()) || f.test(this.getDomain())) || g.test(this.getDomain());
        };
        e_prototype.isGeneric = function() {
            return this.isGenericProtocol;
        };
        e_prototype.isSameOrigin = function(t) {
            return r("isSameOrigin")(this, t);
        };
        e_prototype.isSubdomainOfDomain = function(n) {
            const t = e.getUri(n);
            return t != null && E(this.domain, n);
        };
        e_prototype.isSecure = function() {
            return this.getProtocol() === "https";
        };
        e_prototype.removeQueryParams = function(t) {
            if (Array.isArray(t) && t.length > 0) {
                const e = this.getQueryParams();
                t.map((t)=>e.delete(t));
                return I(this, {
                    queryParams: e
                });
            }
            return this;
        };
        e_prototype.removeQueryParam = function(t) {
            if (t) {
                const e = this.getQueryParams();
                e.delete(t);
                return I(this, {
                    queryParams: e
                });
            }
            return this;
        };
        e_prototype.removeSubdomain = function() {
            const e = this.getQualifiedUri();
            if (e == null) {
                return null;
            }
            const t = e.getDomain();
            let n = t.split(".");
            if (n.length >= 3) {
                n = n.slice(-2);
            }
            return I(e, {
                domain: n.join("."),
                subdomain: ""
            });
        };
        e_prototype.replaceQueryParam = function(t, n) {
            if (t) {
                const e = this.getQueryParams();
                e.set(t, n);
                return I(this, {
                    queryParams: e
                });
            }
            return this;
        };
        e_prototype.replaceQueryParams = function(t) {
            return I(this, {
                queryParams: t
            });
        };
        e_prototype.replaceQueryParamString = function(t) {
            if (t != null) {
                const e = t.startsWith("?") ? t.slice(1) : t;
                const n = this.getQueryParams();
                e.split("&").map((e)=>{
                    const t = e.split("=");
                    const r = t[0];
                    const o = t[1];
                    n.set(r, o);
                });
                return I(this, {
                    queryParams: n
                });
            }
            return this;
        };
        e_prototype.setDomain = function(t) {
            if (t) {
                const e = t.split(".");
                const n = e.length >= 3 ? e[0] : "";
                return I(this, {
                    domain: t,
                    subdomain: n
                });
            }
            return this;
        };
        e_prototype.setFragment = function(fragment) {
            if (fragment === "#") {
                return I(this, {
                    fragment: "",
                    fragmentSeparator: true
                });
            }
            return I(this, {
                fragment,
                fragmentSeparator: fragment !== ""
            });
        };
        e_prototype.setPath = function(path) {
            if (path != null) {
                return I(this, {
                    path
                });
            }
            return this;
        };
        e_prototype.setPort = function(port) {
            if (port) {
                return I(this, {
                    port
                });
            }
            return this;
        };
        e_prototype.setProtocol = function(protocol) {
            if (protocol) {
                return I(this, {
                    protocol
                });
            }
            return this;
        };
        e_prototype.setSecure = function(t) {
            return this.setProtocol(t ? "https" : "http");
        };
        e_prototype.setSubDomain = function(t) {
            if (t) {
                const e = this.getQualifiedUri();
                if (e == null) {
                    return null;
                }
                const n = e.getDomain();
                const r = n.split(".");
                if (r.length >= 3) {
                    r[0] = t;
                } else {
                    r.unshift(t);
                }
                return I(e, {
                    domain: r.join("."),
                    subdomain: t
                });
            }
            return this;
        };
        e_prototype.stripTrailingSlash = function() {
            return this.setPath(this.getPath().replace(/\/$/, ""));
        };
        e_prototype.qualifyDomain = function(t) {
            if (!this.getDomain()) {
                let e = t;
                if (e == null) {
                    e = this.getQualifiedUri();
                }
                if (e == null) {
                    return this;
                }
                return I(this, {
                    domain: e.getDomain(),
                    protocol: e.getProtocol()
                });
            }
            return this;
        };
        e.$1 = function(t) {
            let e = t;
            for (const n of b){
                e = n(e);
            }
            return e;
        };
        e.$2 = function(t, n) {
            let e = n;
            for (const r of v){
                e = r(t, e);
            }
            return e;
        };
        e_prototype.$3 = function(n, r = false) {
            return T({
                domain: e.$1(this.domain),
                fragment: this.fragment,
                fragmentSeparator: this.fragmentSeparator,
                isGeneric: this.isGenericProtocol,
                originalRawQuery: this.originalRawQuery,
                path: this.path,
                port: this.port,
                protocol: this.protocol,
                queryParams: e.$2(this.domain, this.queryParams),
                serializer: n,
                subdomain: this.subdomain,
                userInfo: ""
            }, false, r);
        };
        e_prototype.toStringRawQuery = function() {
            if (this.rawStringValue == null) {
                this.rawStringValue = this.$3(r("PHPQuerySerializerNoEncoding"));
            }
            return this.rawStringValue;
        };
        e_prototype.toString = function() {
            if (this.stringValue == null) {
                this.stringValue = this.$3(this.serializer);
            }
            return this.stringValue;
        };
        e_prototype.toStringPreserveQuery = function() {
            return this.$3(this.serializer, true);
        };
        e.isValidUri = function(n) {
            const t = d.get(n);
            if (t != null) {
                return true;
            }
            const r = x(n);
            if (r.valid) {
                d.set(n, new e(r.components));
                return true;
            }
            return false;
        };
        return e;
    })();
    function N(e) {
        if (e instanceof P) {
            return e;
        }
        return null;
    }
    function M(e) {
        b.push(e);
    }
    function w(e) {
        v.push(e);
    }
    const { getUri, getUriOrThrow, isValidUri } = P;
    l.isSubdomainOfDomain = E;
    l.isConstUri = N;
    l.registerDomainFilter = M;
    l.registerQueryParamsFilter = w;
    l.getUri = getUri;
    l.getUriOrThrow = getUriOrThrow;
    l.isValidUri = isValidUri;
}, 98);
__d("CookieStore", [
    "CookieCoreLoggingConfig",
    "FBLogger",
    "Random",
    "performanceNow"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = window.I_AM_CORE_COOKIE_INFRASTRUCTURE_AND_NEED_TO_ACCESS_COOKIES != null ? window.I_AM_CORE_COOKIE_INFRASTRUCTURE_AND_NEED_TO_ACCESS_COOKIES() : null;
    const u = {
        set: function(t) {
            document.cookie = t;
        },
        get: function() {
            return document.cookie;
        }
    };
    function c() {
        return s ?? u;
    }
    function d(e, t, n, r, o, a, i, l) {
        return `${t}=${encodeURIComponent(n)}; ${a !== 0 && a !== undefined && a !== null ? `expires=${new Date(e + a).toUTCString()}; ` : ""}path=${r}; domain=${o}${i ? "; secure" : ""}${l ? `; SameSite=${l}` : ""}`;
    }
    function m(e, t, n) {
        return `${e}=; expires=Thu, 01-Jan-1970 00:00:01 GMT; path=${t}; domain=${n}`;
    }
    function p() {
        if (r("CookieCoreLoggingConfig").sampleRate > 0) {
            const t = (e || (e = r("performanceNow")))();
            const n = c().get();
            const o = e() - t;
            const a = o > r("CookieCoreLoggingConfig").maximumIgnorableStallMs && r("Random").coinflip(1 / r("CookieCoreLoggingConfig").sampleRate);
            if (a) {
                r("FBLogger")("cookie_infra").addMetadata("COOKIE_INFRA", "WALL_TIME", String(o)).warn("Cookie read exceeded %s milliseconds.", r("CookieCoreLoggingConfig").maximumIgnorableStallMs);
            }
            return n;
        } else {
            return c().get();
        }
    }
    class _ {
        constructor(){
            this.$1 = 0;
        }
        setCookie(t, n, r, o, a, i, l, s) {
            c().set(d(t, n, r, o, a, i, l, s));
        }
        clearCookie(t, n, r) {
            c().set(m(t, n, r));
        }
        getCookie(t) {
            this.$1++;
            const n = p()?.match(`(?:^|;\\s*)${t}=(.*?)(?:;|\$)`);
            if (n) {
                return decodeURIComponent(n[1]);
            }
            return null;
        }
    }
    const f = 10 * 1000;
    class g {
        constructor(){
            this.$1 = {};
            this.$2 = 0;
            this.$3 = 0;
            this.$4 = 0;
        }
        setCookie(updated, n, r, o, a, i, l, s) {
            c().set(d(updated, n, r, o, a, i, l, s));
            this.$1[n] = {
                value: r,
                updated
            };
        }
        clearCookie(t, n, r) {
            c().set(m(t, n, r));
            this.$1[t] = {
                value: null,
                updated: Date.now()
            };
        }
        getCookie(t) {
            const e = this.$5(t);
            const e_cookie = e.cookie;
            return e_cookie;
        }
        $5(t) {
            const e = Date.now();
            const n = this.$1[t];
            if (n) {
                if (n.updated + f < e) {
                    this.$6();
                    return {
                        cookie: this.$5(t).cookie,
                        hit: false
                    };
                }
                this.$3++;
                return {
                    cookie: n.value,
                    hit: true
                };
            }
            if (this.$2 + f < e) {
                this.$6();
                return {
                    cookie: this.$5(t).cookie,
                    hit: false
                };
            }
            this.$3++;
            return {
                cookie: null,
                hit: true
            };
        }
        $6() {
            this.$4++;
            const n = p()?.split(";") ?? [];
            this.$2 = Date.now();
            this.$1 = {};
            for (const r of n){
                const o = r.match("\\s*([^=]+)=(.*)");
                if (o) {
                    this.$1[o[1]] = {
                        value: decodeURIComponent(o[2]),
                        updated: this.$2
                    };
                }
            }
        }
    }
    function h() {
        return new _;
    }
    l.newCookieStore = h;
    l.CookieCacheForTest = g;
    l.CookieStoreSlowForTest = _;
}, 98);
__d("CookieCore", [
    "CookieCoreConfig",
    "CookieDomain",
    "CookieStore"
], function(t, n, r, o, a, i, l) {
    const e = /_js_(.*)/;
    let s;
    function u() {
        if (!s) {
            s = o("CookieStore").newCookieStore();
        }
        return s;
    }
    function c() {
        return `.${r("CookieDomain").domain}`;
    }
    function d(e) {
        return window.self === window.top;
    }
    function m(e, t) {
        if (v(e)) {
            _(e, t, R(e), L(e), S(e), E(e));
        }
    }
    function p(e, t, n) {
        if (v(e)) {
            _(e, t, R(e), L(e), S(e), E(e), n);
        }
    }
    function _(e, t, n, r, o, a, i) {
        const l = Date.now();
        let s = n;
        if (s != null) {
            if (s > l) {
                s -= l;
            } else if (s === 1) {
                h(e, r, i);
                return;
            }
        }
        u().setCookie(l, e, t, r, i ?? c(), s, o, a);
    }
    function f(e, t) {
        if (d(e)) {
            m(e, t);
        }
    }
    function g(e, t, n, r, o, a) {
        if (d(e)) {
            _(e, t, n, r, o, null, a);
        }
    }
    function h(e, t = "/", n) {
        const r = t || "/";
        u().clearCookie(e, r, n ?? c());
    }
    function y(e) {
        if (v(e)) {
            return u().getCookie(e);
        }
        return null;
    }
    function C(e) {
        return {
            insecure: e.i || false,
            path: e.p != null && e.p !== "" ? e.p : "/",
            ttlSeconds: e.t || 0,
            sameSite: e.s || "None"
        };
    }
    function b(t) {
        if (r("CookieCoreConfig")[t] !== undefined) {
            return C(r("CookieCoreConfig")[t]);
        }
        const n = t.match(e);
        if (n && n.length > 1) {
            return b(n[1]);
        }
        return null;
    }
    function v(e) {
        return b(e) !== null;
    }
    function S(e) {
        const t = b(e);
        if (t == null) {
            return true;
        }
        return !t.insecure;
    }
    function R(e) {
        const t = b(e);
        if (t == null) {
            return null;
        }
        return t.ttlSeconds * 1000;
    }
    function L(e) {
        const t = b(e);
        if (t == null) {
            return "/";
        }
        return t.path;
    }
    function E(e) {
        const t = b(e);
        if (t == null || t.sameSite == null) {
            return null;
        }
        return t.sameSite;
    }
    l.set = m;
    l.setWithDomain_FOR_MESSENGER_LS_ONLY = p;
    l.setWithoutChecks = _;
    l.setIfFirstPartyContext = f;
    l.setWithoutChecksIfFirstPartyContext = g;
    l.clear = h;
    l.get = y;
}, 98);
__d("Cookie", [
    "CookieConsent",
    "CookieCore",
    "InitialCookieConsent",
    "ODS"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    function d(e) {
        if ((c || (c = r("CookieConsent"))).hasFirstPartyConsent()) {
            return true;
        }
        (s || (s = o("ODS"))).bumpEntityKey(798, "defer_cookies", `set.${e}`);
        return false;
    }
    function m() {
        return !(u || (u = r("InitialCookieConsent"))).noCookies;
    }
    function set(e, t) {
        if (!(!m() || !d(e))) {
            o("CookieCore").set(e, t);
        }
    }
    function setWithoutCheckingUserConsent_DANGEROUS(e, t) {
        if (m()) {
            o("CookieCore").set(e, t);
        }
    }
    function setWithoutChecks(e, t, n, r, a, i) {
        if (!(!m() || !d(e))) {
            o("CookieCore").setWithoutChecks(e, t, n, r, a, null, i);
        }
    }
    const g = {
        clear: (e = o("CookieCore")).clear,
        get: e.get,
        set,
        setIfFirstPartyContext: e.setIfFirstPartyContext,
        setWithoutCheckingUserConsent_DANGEROUS,
        setWithoutChecks,
        setWithoutChecksIfFirstPartyContext: e.setWithoutChecksIfFirstPartyContext
    };
    l.default = g;
}, 98);
__d("CurrentLocale", [
    "IntlCurrentLocale"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = {
        get: function() {
            return r("IntlCurrentLocale").code;
        }
    };
    l.default = e;
}, 98);
__d("CurrentUser", [
    "Cookie",
    "CurrentUserInitialData"
], function(t, n, r, o, a, i) {
    let e;
    var l = {
        getID: function() {
            return (e || (e = n("CurrentUserInitialData"))).USER_ID;
        },
        getAccountID: function() {
            return (e || (e = n("CurrentUserInitialData"))).ACCOUNT_ID;
        },
        getPossiblyNonFacebookUserID: function() {
            return (e || (e = n("CurrentUserInitialData"))).NON_FACEBOOK_USER_ID ?? l.getID();
        },
        getEIMU: function() {
            return (e || (e = n("CurrentUserInitialData"))).IG_USER_EIMU ?? "0";
        },
        getEmployeeWorkUserID: function() {
            return (e || (e = n("CurrentUserInitialData"))).WORK_USER_ID;
        },
        getName: function() {
            return (e || (e = n("CurrentUserInitialData"))).NAME;
        },
        getShortName: function() {
            return (e || (e = n("CurrentUserInitialData"))).SHORT_NAME;
        },
        getAbraID: function() {
            return (e || (e = n("CurrentUserInitialData"))).ABRA_ID ?? "0";
        },
        getAbraStorageID: function() {
            return (e || (e = n("CurrentUserInitialData"))).ABRA_STORAGE_ID ?? "0";
        },
        getARID: function() {
            return (e || (e = n("CurrentUserInitialData"))).AR_ID ?? "0";
        },
        getEPOU: function() {
            return (e || (e = n("CurrentUserInitialData"))).EPOU_ID ?? "0";
        },
        getEOCPU: function() {
            return (e || (e = n("CurrentUserInitialData"))).EOCPU_ID ?? "0";
        },
        isLoggedIn: function() {
            return l.getPossiblyNonFacebookUserID() !== "0";
        },
        isLoggedInNow: function() {
            if (l.isLoggedIn()) {
                if ((e || (e = n("CurrentUserInitialData"))).IS_INTERN_SITE || (e || (e = n("CurrentUserInitialData"))).IS_ABRA_USER || (e || (e = n("CurrentUserInitialData"))).IS_ENTERPRISE_USER || (e || (e = n("CurrentUserInitialData"))).IS_FRL_USER || (e || (e = n("CurrentUserInitialData"))).IS_IMAGINE_USER || (e || (e = n("CurrentUserInitialData"))).IS_INSTAGRAM_USER || (e || (e = n("CurrentUserInitialData"))).IS_META_SPARK_USER || (e || (e = n("CurrentUserInitialData"))).IS_OCULUS_USER || (e || (e = n("CurrentUserInitialData"))).IS_THREADS_USER || (e || (e = n("CurrentUserInitialData"))).IS_TOGETHER_APP_USER || (e || (e = n("CurrentUserInitialData"))).IS_WORK_MESSENGER_CALL_GUEST_USER || (e || (e = n("CurrentUserInitialData"))).IS_WORK_USER || (e || (e = n("CurrentUserInitialData"))).IS_WORKROOMS_USER || (e || (e = n("CurrentUserInitialData"))).IS_ANONYMOUS_CASTING_USER || (e || (e = n("CurrentUserInitialData"))).IS_META_CAREERS_USER) {
                    return true;
                }
                if ((e || (e = n("CurrentUserInitialData"))).ORIGINAL_USER_ID != null && (e || (e = n("CurrentUserInitialData"))).ORIGINAL_USER_ID != "") {
                    return (e || (e = n("CurrentUserInitialData"))).ORIGINAL_USER_ID === n("Cookie").get("c_user");
                }
                if ((e || (e = n("CurrentUserInitialData"))).IS_BUSINESS_DOMAIN === true) {
                    return (e || (e = n("CurrentUserInitialData"))).USER_ID == n("Cookie").get("c_user");
                }
                return (e || (e = n("CurrentUserInitialData"))).USER_ID === (n("Cookie").get("i_user") ?? n("Cookie").get("c_user"));
            }
            return false;
        },
        isEmployee: function() {
            return !!(e || (e = n("CurrentUserInitialData"))).IS_EMPLOYEE;
        },
        isAccountEmployee: function() {
            return !!(e || (e = n("CurrentUserInitialData"))).IS_ACCOUNT_EMPLOYEE;
        },
        isContingentWorker: function() {
            return !!(e || (e = n("CurrentUserInitialData"))).IS_CONTINGENT;
        },
        isTestUser: function() {
            return !!(e || (e = n("CurrentUserInitialData"))).IS_TEST_USER;
        },
        hasWorkUser: function() {
            return !!(e || (e = n("CurrentUserInitialData"))).HAS_WORK_USER;
        },
        isWorkUser: function() {
            return !!(e || (e = n("CurrentUserInitialData"))).IS_WORK_USER;
        },
        isWorkroomsUser: function() {
            return !!(e || (e = n("CurrentUserInitialData"))).IS_WORKROOMS_USER;
        },
        isGray: function() {
            return !!(e || (e = n("CurrentUserInitialData"))).IS_GRAY;
        },
        isUnderage: function() {
            return !!(e || (e = n("CurrentUserInitialData"))).IS_UNDERAGE;
        },
        isManagedMetaAccount: function() {
            return !!(e || (e = n("CurrentUserInitialData"))).IS_MANAGED_META_ACCOUNT;
        },
        isMessengerOnlyUser: function() {
            return !!(e || (e = n("CurrentUserInitialData"))).IS_MESSENGER_ONLY_USER;
        },
        isDeactivatedAllowedOnMessenger: function() {
            return !!(e || (e = n("CurrentUserInitialData"))).IS_DEACTIVATED_ALLOWED_ON_MESSENGER;
        },
        isMessengerCallGuestUser: function() {
            return !!(e || (e = n("CurrentUserInitialData"))).IS_MESSENGER_CALL_GUEST_USER;
        },
        isBusinessPersonAccount: function() {
            return (e || (e = n("CurrentUserInitialData"))).IS_BUSINESS_PERSON_ACCOUNT;
        },
        hasSecondaryBusinessPerson: function() {
            return (e || (e = n("CurrentUserInitialData"))).HAS_SECONDARY_BUSINESS_PERSON;
        },
        getAppID: function() {
            return (e || (e = n("CurrentUserInitialData"))).APP_ID;
        },
        isFacebookWorkAccount: function() {
            return (e || (e = n("CurrentUserInitialData"))).IS_FACEBOOK_WORK_ACCOUNT;
        },
        isInstagramBusinessPerson: function() {
            return (e || (e = n("CurrentUserInitialData"))).IS_INSTAGRAM_BUSINESS_PERSON;
        },
        isWabaBusinessPerson: function() {
            return (e || (e = n("CurrentUserInitialData"))).IS_WABA_BUSINESS_PERSON;
        },
        isBusinessDomain: function() {
            return (e || (e = n("CurrentUserInitialData"))).IS_BUSINESS_DOMAIN;
        },
        getPageMessagingMailboxId: function() {
            return String((e || (e = n("CurrentUserInitialData"))).PAGE_MESSAGING_MAILBOX_ID ?? "0");
        }
    };
    a.exports = l;
}, null);
__d("DoublyLinkedListMap", [], function(t, n, r, o, a, i) {
    class e {
        constructor(){
            this.$1 = null;
            this.$2 = null;
            this.$3 = {};
            this.$4 = 0;
        }
        get(t) {
            const n = this.$3[t]?.data;
            return n ?? null;
        }
        getIndex(t) {
            for(let e = this.$1, n = 0; e; e = e.next, n++){
                if (e.key === t) {
                    return n;
                }
            }
            return null;
        }
        $5(t, n, r, o) {
            let e = r;
            if (e != null && !this.$3[e]) {
                e = null;
            }
            let a;
            if (e != null && this.$3[e]) {
                a = this.$3[e];
            } else {
                a = o ? this.$1 : this.$2;
            }
            const i = {
                data: n,
                key: t,
                next: null,
                prev: null
            };
            if (a) {
                this.remove(t);
                if (o) {
                    i.prev = a.prev;
                    if (a.prev) {
                        a.prev.next = i;
                    }
                    a.prev = i;
                    i.next = a;
                } else {
                    i.next = a.next;
                    if (a.next) {
                        a.next.prev = i;
                    }
                    a.next = i;
                    i.prev = a;
                }
            }
            if (i.prev === null) {
                this.$1 = i;
            }
            if (i.next === null) {
                this.$2 = i;
            }
            this.$3[t] = i;
            this.$4++;
            return this;
        }
        insertBefore(t, n, r) {
            return this.$5(t, n, r, true);
        }
        insertAfter(t, n, r) {
            return this.$5(t, n, r, false);
        }
        prepend(t, n) {
            return this.insertBefore(t, n, this.$1 && this.$1.key);
        }
        append(t, n) {
            return this.insertAfter(t, n, this.$2 && this.$2.key);
        }
        remove(t) {
            const e = this.$3[t];
            if (e) {
                const { next, prev } = e;
                if (next) {
                    next.prev = prev;
                }
                if (prev) {
                    prev.next = next;
                }
                if (this.$1 === e) {
                    this.$1 = next;
                }
                if (this.$2 === e) {
                    this.$2 = prev;
                }
                delete this.$3[t];
                this.$4--;
            }
            return this;
        }
        find(t) {
            for(let e = this.$1; e; e = e.next){
                if (t(e.data)) {
                    return e.key;
                }
            }
            return null;
        }
        reduce(t, n) {
            let e = n;
            for(let r = this.$1; r; r = r.next){
                e = t(r.data, e);
            }
            return e;
        }
        exists(t) {
            return !!this.$3[t];
        }
        isEmpty() {
            return !this.$1;
        }
        reset() {
            this.$1 = null;
            this.$2 = null;
            this.$3 = {};
            this.$4 = 0;
        }
        map(t) {
            for(let e = this.$1; e; e = e.next){
                t(e.data);
            }
        }
        getCount() {
            return this.$4;
        }
        getHead() {
            return this.$1?.data;
        }
        getTail() {
            return this.$2?.data;
        }
        getNext(t) {
            return this.$3[t]?.next?.data;
        }
        getPrev(t) {
            return this.$3[t]?.prev?.data;
        }
        getHeadKey() {
            return this.$1?.key;
        }
        getTailKey() {
            return this.$2?.key;
        }
    }
    a.exports = e;
}, null);
__d("FBJSON", [], function(t, n, r, o, a, i) {
    i.parse = JSON.parse;
    i.stringify = JSON.stringify;
}, 66);
__d("PerfFalcoEvent", [
    "FalcoLoggerInternal",
    "getFalcoLogPolicy_DO_NOT_USE"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = r("getFalcoLogPolicy_DO_NOT_USE")("1744178");
    const s = o("FalcoLoggerInternal").create("perf", e);
    l.default = s;
}, 98);
__d("PerfXSharedFields", [
    "CurrentLocale",
    "Locale",
    "SiteData",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    const e = typeof window !== "undefined" ? window : self;
    var s = {
        addCommonValues: function(n) {
            const t = e?.navigator;
            try {
                if (t && typeof t.hardwareConcurrency === "number") {
                    n.num_cores = Math.floor(t.hardwareConcurrency);
                }
                const a = t;
                const i = a?.deviceMemory;
                if (typeof i === "number" && i !== 0) {
                    n.ram_gb = i;
                }
                const l = t;
                const s = l?.connection;
                if (s != null) {
                    if (typeof s.downlink === "number") {
                        n.downlink_megabits = s.downlink;
                    }
                    if (typeof s.effectiveType === "string") {
                        n.effective_connection_type = s.effectiveType;
                    }
                    if (typeof s.rtt === "number") {
                        n.rtt_ms = s.rtt;
                    }
                }
            } catch (error) {
                if (r("getErrorSafe")(error).message !== "can't access dead object") {
                    throw r("getErrorSafe")(error);
                }
            }
            n.client_push_phase = r("SiteData").push_phase;
            n.client_revision = r("SiteData").client_revision;
            if (r("SiteData").server_revision != null) {
                n.server_revision = r("SiteData").server_revision;
            }
            n.locale = r("CurrentLocale").get();
            n.isRTL = Number(o("Locale").isRTL());
            return n;
        },
        getCommonData: function() {
            const e = {};
            s.addCommonValues(e);
            return e;
        }
    };
    l.default = s;
}, 98);
__d("QPLCoreHelpers", [], function(t, n, r, o, a, i) {
    "use strict";
    function e(e, qpl_join__absolute_time_origin_ms, qpl_join__source_is_primary, r, o, qpl_join__namespaces, i) {
        let qpl_join__source_clock = "unreliable";
        if (o != null) {
            qpl_join__source_clock += `_${o}`;
        }
        const d = {
            string: {
                join_id: e,
                qpl_join__source_clock,
                qpl__source: "client_js"
            },
            int: {
                qpl_join__absolute_time_origin_ms
            },
            bool: {
                qpl_join__source_is_primary
            }
        };
        if (r != null && d.int) {
            d.int.qpl_join__close_session_after_seconds = r;
        }
        if (qpl_join__namespaces != null) {
            d.string_array = {
                qpl_join__namespaces
            };
        }
        if (i != null && d.int) {
            d.int.qpl_join__action_priority = i;
        }
        return d;
    }
    function l(e) {
        switch(e){
            case 1:
                return "join_request_";
            case 0:
                return "join_request_";
            case 3:
                return "join_response_";
            case 2:
                return "join_response_";
            default:
                return null;
        }
    }
    function s(e, t) {
        const n = l(e);
        if (n == null) {
            return null;
        }
        return n + t;
    }
    i.generateJoinAnnotations = e;
    i.getAlignmentPointNamePrefix = l;
    i.getAlignmentPointName = s;
}, 66);
__d("QPLEvent", [], function(t, n, r, o, a, i) {
    "use strict";
    function e(e) {
        return e.i;
    }
    function l(e) {
        return e.r ?? 0;
    }
    function s(e) {
        return e.m ?? 1;
    }
    i.getMarkerId = e;
    i.getSampleRate = l;
    i.getSamplingMethod = s;
}, 66);
__d("QPLMarkerMap", [
    "DoublyLinkedListMap"
], function(t, n, r, o, a, i, l) {
    "use strict";
    class e {
        constructor(e = {}){
            var { perMarkerLimit = null, totalLimit = null } = e;
            this.size = 0;
            this.$1 = {};
            this.$4 = totalLimit;
            this.$5 = perMarkerLimit;
            this.$3 = new Map;
            this.$2 = new (r("DoublyLinkedListMap"));
        }
        set(t, n, r) {
            let e = this.$1[t];
            if (e === undefined) {
                const o = {};
                e = o;
                this.$1[t] = e;
            }
            const a = Object.prototype.hasOwnProperty.call(e, n);
            if (!a) {
                this.$6(t);
                this.$7();
            }
            this.$8(t, n);
            if (!a) {
                this.size++;
            }
            e[n] = r;
        }
        delete(t, n) {
            const e = this.$1[t];
            if (!(e === undefined || !Object.prototype.hasOwnProperty.call(e, n))) {
                this.$9(t, n);
                delete e[n];
                this.size--;
                if (Object.keys(e).length === 0) {
                    delete this.$1[t];
                }
            }
        }
        get(t, n) {
            const e = this.$1[t];
            if (e !== undefined) {
                return e[n];
            }
        }
        has(t, n) {
            const e = this.$1[t];
            if (e === undefined) {
                return false;
            }
            return Object.prototype.hasOwnProperty.call(e, n);
        }
        forEach(t) {
            let e = 0;
            for(const n in this.$1){
                const r = Number(n);
                const o = this.$1[r];
                for(const a in o){
                    const i = Number(a);
                    t(o[i], r, i, e++);
                }
            }
        }
        toString() {
            try {
                return JSON.stringify(this.$1);
            } catch (e) {
                return "{}";
            }
        }
        $8(t, n) {
            const e = {
                markerId: t,
                instanceKey: n
            };
            const r = this.$10(t, n);
            const o = this.$4 != null;
            const a = this.$5 != null;
            if (o) {
                this.$2.remove(r);
                this.$2.append(r, e);
            }
            const i = this.$11(t);
            if (a) {
                i.remove(r);
                i.append(r, e);
            }
        }
        $9(t, n) {
            const e = this.$10(t, n);
            const r = this.$4 != null;
            const o = this.$5 != null;
            if (r) {
                this.$2.remove(e);
            }
            if (o) {
                const a = this.$3.get(t);
                if (a) {
                    a.remove(e);
                    if (a.isEmpty()) {
                        this.$3.delete(t);
                    }
                }
            }
        }
        $6(t) {
            const e = this.$5;
            if (e != null) {
                const n = this.$11(t);
                if (n.getCount() >= e) {
                    this.$12(n);
                }
            }
        }
        $7() {
            const e = this.$4;
            if (e != null && this.size >= e) {
                this.$12(this.$2);
            }
        }
        $12(t) {
            const e = t.getHeadKey();
            if (e != null) {
                const n = t.get(e);
                if (n) {
                    this.delete(n.markerId, n.instanceKey);
                }
            }
        }
        $10(t, n) {
            return `${t}:${n}`;
        }
        $11(t) {
            let e = this.$3.get(t);
            if (!e) {
                e = new (r("DoublyLinkedListMap"));
                this.$3.set(t, e);
            }
            return e;
        }
    }
    l.default = e;
}, 98);
__d("QPLTimestamp", [], function(t, n, r, o, a, i) {
    "use strict";
    function e(e) {
        if (e === 0) {
            return "0";
        }
        const t = e.toFixed(6).split(".", 2);
        const n = t[0];
        const r = t[1];
        if (n === "0") {
            return r.replace(/^0+/, "");
        }
        return n + r;
    }
    function l(t, n) {
        const r = n - t;
        return e(r);
    }
    i.timestampToSerializedNanoseconds = e;
    i.calculateDurationAsNanoseconds = l;
}, 66);
__d("crc32", [], function(t, n, r, o, a, i) {
    function e(e) {
        let t = -1;
        for(let n = 0, r = e.length; n < r; n++){
            t = t >>> 8 ^ l[(t ^ e.charCodeAt(n)) & 255];
        }
        return ~t;
    }
    var l = [
        0,
        1996959894,
        3993919788,
        2567524794,
        124634137,
        1886057615,
        3915621685,
        2657392035,
        249268274,
        2044508324,
        3772115230,
        2547177864,
        162941995,
        2125561021,
        3887607047,
        2428444049,
        498536548,
        1789927666,
        4089016648,
        2227061214,
        450548861,
        1843258603,
        4107580753,
        2211677639,
        325883990,
        1684777152,
        4251122042,
        2321926636,
        335633487,
        1661365465,
        4195302755,
        2366115317,
        997073096,
        1281953886,
        3579855332,
        2724688242,
        1006888145,
        1258607687,
        3524101629,
        2768942443,
        901097722,
        1119000684,
        3686517206,
        2898065728,
        853044451,
        1172266101,
        3705015759,
        2882616665,
        651767980,
        1373503546,
        3369554304,
        3218104598,
        565507253,
        1454621731,
        3485111705,
        3099436303,
        671266974,
        1594198024,
        3322730930,
        2970347812,
        795835527,
        1483230225,
        3244367275,
        3060149565,
        1994146192,
        31158534,
        2563907772,
        4023717930,
        1907459465,
        112637215,
        2680153253,
        3904427059,
        2013776290,
        251722036,
        2517215374,
        3775830040,
        2137656763,
        141376813,
        2439277719,
        3865271297,
        1802195444,
        476864866,
        2238001368,
        4066508878,
        1812370925,
        453092731,
        2181625025,
        4111451223,
        1706088902,
        314042704,
        2344532202,
        4240017532,
        1658658271,
        366619977,
        2362670323,
        4224994405,
        1303535960,
        984961486,
        2747007092,
        3569037538,
        1256170817,
        1037604311,
        2765210733,
        3554079995,
        1131014506,
        879679996,
        2909243462,
        3663771856,
        1141124467,
        855842277,
        2852801631,
        3708648649,
        1342533948,
        654459306,
        3188396048,
        3373015174,
        1466479909,
        544179635,
        3110523913,
        3462522015,
        1591671054,
        702138776,
        2966460450,
        3352799412,
        1504918807,
        783551873,
        3082640443,
        3233442989,
        3988292384,
        2596254646,
        62317068,
        1957810842,
        3939845945,
        2647816111,
        81470997,
        1943803523,
        3814918930,
        2489596804,
        225274430,
        2053790376,
        3826175755,
        2466906013,
        167816743,
        2097651377,
        4027552580,
        2265490386,
        503444072,
        1762050814,
        4150417245,
        2154129355,
        426522225,
        1852507879,
        4275313526,
        2312317920,
        282753626,
        1742555852,
        4189708143,
        2394877945,
        397917763,
        1622183637,
        3604390888,
        2714866558,
        953729732,
        1340076626,
        3518719985,
        2797360999,
        1068828381,
        1219638859,
        3624741850,
        2936675148,
        906185462,
        1090812512,
        3747672003,
        2825379669,
        829329135,
        1181335161,
        3412177804,
        3160834842,
        628085408,
        1382605366,
        3423369109,
        3138078467,
        570562233,
        1426400815,
        3317316542,
        2998733608,
        733239954,
        1555261956,
        3268935591,
        3050360625,
        752459403,
        1541320221,
        2607071920,
        3965973030,
        1969922972,
        40735498,
        2617837225,
        3943577151,
        1913087877,
        83908371,
        2512341634,
        3803740692,
        2075208622,
        213261112,
        2463272603,
        3855990285,
        2094854071,
        198958881,
        2262029012,
        4057260610,
        1759359992,
        534414190,
        2176718541,
        4139329115,
        1873836001,
        414664567,
        2282248934,
        4279200368,
        1711684554,
        285281116,
        2405801727,
        4167216745,
        1634467795,
        376229701,
        2685067896,
        3608007406,
        1308918612,
        956543938,
        2808555105,
        3495958263,
        1231636301,
        1047427035,
        2932959818,
        3654703836,
        1088359270,
        936918000,
        2847714899,
        3736837829,
        1202900863,
        817233897,
        3183342108,
        3401237130,
        1404277552,
        615818150,
        3134207493,
        3453421203,
        1423857449,
        601450431,
        3009837614,
        3294710456,
        1567103746,
        711928724,
        3020668471,
        3272380065,
        1510334235,
        755167117
    ];
    if (t.Int32Array !== undefined) {
        l = new Int32Array(l);
    }
    i.default = e;
}, 66);
__d("QPLUtils", [
    "crc32"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
        return r("crc32")(e) >>> 0;
    }
    function s(t) {
        if (t != null) {
            return e(t);
        }
        return 0;
    }
    l.unsignedCrc32 = e;
    l.deriveInstanceKey = s;
}, 98);
__d("QuickPerformanceLoggerTypes", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = 1;
    const l = 3;
    i.EVENT_BASED_SAMPLING = e;
    i.USER_BASED_SAMPLING = l;
}, 66);
__d("QPLCore", [
    "QPLCoreHelpers",
    "QPLEvent",
    "QPLMarkerMap",
    "QPLTimestamp",
    "QPLUtils",
    "QuickPerformanceLoggerTypes",
    "uuidv4"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    function s(e) {
        if (e == null) {
            return e;
        }
        const t = {};
        for(const n in e){
            t[n] = String(e[n]);
        }
        return t;
    }
    function u(e) {
        if (e == null) {
            return e;
        }
        const t = {};
        for(const n in e){
            t[n] = e[n].map(String);
        }
        return t;
    }
    function c(e, t, n, r) {
        const a = t[e];
        if (!a || Object.entries(a).length === 0) {
            return null;
        }
        const i = {};
        Object.keys(a).forEach((e)=>{
            const t = a[e];
            if (t == null || t.length === 0) {
                delete a[e];
            } else if (r) {
                i[e] = r(t);
            } else {
                i[e] = t;
            }
        });
        return {
            [e]: babelHelpers.extends({}, n && n[e], i)
        };
    }
    function d(e, t) {
        if (e == null) {
            return t;
        }
        const n = babelHelpers.extends({}, t, c("string", e, t), c("int", e, t, Math.trunc), c("double", e, t), c("bool", e, t), c("string_array", e, t), c("int_array", e, t, function(e) {
            return e.map(Math.trunc);
        }), c("double_array", e, t), c("bool_array", e, t));
        Object.keys(n).forEach((e)=>{
            const t = n[e];
            if (t == null || Object.entries(t).length === 0) {
                delete n[e];
            }
        });
        if (Object.entries(n).length !== 0) {
            return n;
        }
        return null;
    }
    function m(e, t) {
        const n = {};
        if (g.isMarkerTracked(t)) {
            n.tracked_for_loss = true;
        }
        if (typeof t.absoluteTimeOrigin === "number") {
            n.absolute_time_origin_ns = o("QPLTimestamp").timestampToSerializedNanoseconds(t.absoluteTimeOrigin);
        }
        const r = babelHelpers.extends({}, e, n);
        return r;
    }
    function p(e, t) {
        if (!t) {
            return e;
        }
        const n = {};
        if (t.string) {
            n.annotations = t.string;
        }
        if (t.int) {
            n.annotations_int = s(t.int);
        }
        if (t.double) {
            n.annotations_double = t.double;
        }
        if (t.bool) {
            n.annotations_bool = t.bool;
        }
        if (t.string_array) {
            n.annotations_string_array = t.string_array;
        }
        if (t.int_array) {
            n.annotations_int_array = u(t.int_array);
        }
        if (t.double_array) {
            n.annotations_double_array = t.double_array;
        }
        if (t.bool_array) {
            n.annotations_bool_array = t.bool_array;
        }
        return babelHelpers.extends({}, e, n);
    }
    const _ = new Map([
        [
            o("QuickPerformanceLoggerTypes").EVENT_BASED_SAMPLING,
            "random_sampling"
        ],
        [
            o("QuickPerformanceLoggerTypes").USER_BASED_SAMPLING,
            "per_user"
        ]
    ]);
    function f(e, t) {
        if (e === 0) {
            return false;
        }
        if (e <= 1) {
            return true;
        }
        if (typeof t === "string") {
            return o("QPLUtils").unsignedCrc32(t) % e === 0;
        }
        return Math.random() * e <= 1;
    }
    var g = (()=>{
        function t(e) {
            this.$2 = 1;
            this.$3 = 100;
            this.$4 = new Map;
            this.$5 = new Map;
            this.$6 = null;
            this.$8 = new Map;
            this.activeMarkers = new Map;
            this.$1 = e;
            this.$7 = e.logger;
            this.$5 = e.listenersWithMarker ?? new Map;
            this.$9 = new (r("QPLMarkerMap"));
        }
        const t_prototype = t.prototype;
        t_prototype.$10 = function(t, n) {
            try {
                return n();
            } catch (error) {
                if (this.$1.onError) {
                    this.$1.onError(t, error);
                }
            }
        };
        t_prototype.getMarker = function(n, r) {
            const t = this;
            return this.$10("getMarker", function() {
                const a = t.$11((e || (e = o("QPLEvent"))).getMarkerId(n));
                if (!a) {
                    return null;
                }
                const i = a.get(r);
                return i || null;
            });
        };
        t_prototype.isMarkerOn = function(n, r = 0) {
            const a = this;
            return this.$10("isMarkerOn", function() {
                const t = a.$11((e || (e = o("QPLEvent"))).getMarkerId(n));
                if (!t) {
                    return false;
                }
                const i = t.get(r);
                return !!i;
            }) ?? false;
        };
        t.isMarkerTracked = function(t) {
            return t.trackedForLoss === true || t.type === 2;
        };
        t_prototype.$11 = function(t) {
            return this.activeMarkers.get(t);
        };
        t_prototype.addMarker = function(t, n, r) {
            let e = this.activeMarkers.get(t);
            if (!e) {
                e = new Map;
                this.activeMarkers.set(t, e);
            }
            e.set(n, r);
        };
        t_prototype.deleteMarker = function(t, n) {
            this.activeMarkers.get(t)?.delete(n);
            this.$12(t, n);
        };
        t_prototype.markerStart = function(r, a = 0, i, l) {
            const n = this;
            if (i === undefined) {
                i = this.currentTimestamp();
            }
            const { cancelExisting = false, cancelOnUnload = false, trackedForLoss = false, type = 1, samplingBasis = null, qplInternalDoNotUseAbsoluteTimeOrigin, timeoutMS = null, onMarkerTimeout__DoNotUse = null, enableE2ETracing = false, crashResilient = false } = l === undefined ? {} : l;
            this.$10("markerStart", function() {
                const l = n.getMarker(r, a);
                if (l) {
                    const time_between_markers_ms = Math.round(i - l.timestamp);
                    if (cancelExisting) {
                        n.markerAnnotate(r, {
                            string: {
                                cancelType: "DUPLICATE_EVENT"
                            },
                            int: {
                                time_between_markers_ms
                            }
                        }, {
                            instanceKey: a
                        });
                        n.markerEnd(r, 4, a, i);
                    }
                }
                const u = n.$13(r, samplingBasis);
                const passesSampling = u[0];
                const sampleRate = u[1];
                const samplingMethod = u[2];
                let h = null;
                if (enableE2ETracing) {
                    h = n.$1.e2eTracingIDGenerator ? n.$1.e2eTracingIDGenerator(r) : null;
                }
                const b = {
                    event: r,
                    passesSampling,
                    timestamp: i,
                    sampleRate,
                    samplingMethod,
                    points: [],
                    cancelOnUnload,
                    trackedForLoss,
                    type,
                    timeoutMS,
                    e2eTracingID: h,
                    isCrashResilient: crashResilient
                };
                if (typeof qplInternalDoNotUseAbsoluteTimeOrigin === "number") {
                    b.absoluteTimeOrigin = qplInternalDoNotUseAbsoluteTimeOrigin;
                }
                n.$4.forEach((e)=>{
                    if (e.onMarkerStart) {
                        e.onMarkerStart(r, a, i);
                    }
                });
                n.$5.forEach((e)=>{
                    e.onMarkerStartWithMarker(r, a, i, b);
                });
                if (passesSampling) {
                    n.addMarker((e || (e = o("QPLEvent"))).getMarkerId(r), a, b);
                    if (timeoutMS != null) {
                        n.$14(r, a, timeoutMS, onMarkerTimeout__DoNotUse);
                    }
                }
                if (passesSampling && t.isMarkerTracked(b)) {
                    n.$15({
                        marker_id: 27787271,
                        action_id: 51,
                        sample_rate: 1,
                        annotations_int: {
                            tracked_marker_id: String((e || (e = o("QPLEvent"))).getMarkerId(r))
                        },
                        marker_type: 1
                    });
                }
                if (h !== null) {
                    n.markerAnnotate(r, {
                        string: {
                            qpl_e2e__tracing_id: h
                        }
                    }, {
                        instanceKey: a
                    });
                }
                if (passesSampling) {
                    n.$4.forEach((e)=>{
                        if (e.onMarkerStarted) {
                            e.onMarkerStarted(r, a, i, n.$16(b));
                        }
                    });
                }
            });
        };
        t_prototype.$16 = function(t) {
            if (t == null) {
                const e = {
                    isCrashResilient: false
                };
                return e;
            }
            return {
                isCrashResilient: t.isCrashResilient
            };
        };
        t_prototype.$17 = function(t, n) {
            this.$9.delete(t, n);
        };
        t_prototype.$18 = function(t, n, r) {
            this.$9.set(t, n, r);
        };
        t_prototype.$12 = function(t, n) {
            let e;
            const r = this.$9.get(t, n);
            if (!(r == null || r === 0)) {
                if ((e = this.$1.runtimeAbstractionLayer) != null && e.clearTimeout) {
                    this.$1.runtimeAbstractionLayer.clearTimeout(r);
                    this.$17(t, n);
                }
            }
        };
        t_prototype.$14 = function(n, r, a, i) {
            const t = this;
            const l = (e || (e = o("QPLEvent"))).getMarkerId(n);
            try {
                let s;
                this.$12(l, r);
                if (!((s = this.$1.runtimeAbstractionLayer) != null && s.setTimeout)) {
                    return;
                }
                const c = this.$1.runtimeAbstractionLayer?.setTimeout(function() {
                    if (i != null) {
                        i(n, r);
                    }
                    t.$4.forEach((e)=>{
                        if (e.onTimeoutEvent != null) {
                            e.onTimeoutEvent({
                                event: n,
                                instanceKey: r,
                                passesSampling: true
                            });
                        }
                    });
                    t.$17(l, r);
                    t.markerEnd(n, 113, r);
                }, a);
                this.$18(l, r, c);
            } catch (e) {}
        };
        t_prototype.markerAnnotate = function(t, n, r) {
            const e = this;
            const { instanceKey = 0 } = r === undefined ? {} : r;
            this.$10("markerAnnotate", function() {
                e.$4.forEach((e)=>{
                    Object.keys(n).forEach((r)=>{
                        const o = n[r];
                        if (o) {
                            Object.keys(o).forEach((n)=>{
                                if (e.onAnnotation) {
                                    e.onAnnotation(t, instanceKey, n, o[n], r);
                                }
                            });
                        }
                    });
                });
                const r = e.getMarker(t, instanceKey);
                if (r) {
                    r.annotations = d(n, r.annotations);
                }
            });
        };
        t_prototype.markerPoint = function(t, n, r) {
            const e = this;
            const { instanceKey = 0, data, timestamp = this.currentTimestamp() } = r === undefined ? {} : r;
            this.$10("markerPoint", function() {
                e.$4.forEach((e)=>{
                    if (e.onMarkerPoint) {
                        e.onMarkerPoint(t, instanceKey, n, data, timestamp);
                    }
                });
                const r = e.getMarker(t, instanceKey);
                if (r) {
                    const o = {
                        name: n,
                        timeSinceStart: Math.trunc(timestamp - r.timestamp)
                    };
                    const a = d(data);
                    if (a) {
                        o.data = a;
                    }
                    r.points.push(o);
                }
            });
        };
        t_prototype.markerEnd = function(n, r, instance_id = 0, i) {
            const t = this;
            if (i === undefined) {
                i = this.currentTimestamp();
            }
            this.$10("markerEnd", function() {
                const l = t.getMarker(n, instance_id);
                if (!l) {
                    t.$4.forEach((e)=>{
                        const o = {
                            durationMs: 0,
                            passesSampling: false
                        };
                        if (e.onMarkerEnd) {
                            e.onMarkerEnd(r, n, instance_id, i, babelHelpers.extends({}, o, t.$16(l)));
                        }
                    });
                    return;
                }
                let action_id = r;
                const d = t.$19(l, l.timestamp, i);
                if (d && r === 2) {
                    action_id = 5947;
                }
                const points = l.points.map((e)=>{
                    if (e.data) {
                        return {
                            name: e.name,
                            timeSinceStart: String(e.timeSinceStart),
                            data: ((t, n, r, o, a, i, l, c)=>{
                                const d = {};
                                if (((t = e.data) == null ? undefined : t.string) != null) {
                                    d.string = e.data.string;
                                }
                                if (((n = e.data) == null ? undefined : n.string_array) != null) {
                                    d.string_array = e.data.string_array;
                                }
                                if (((r = e.data) == null ? undefined : r.int) != null) {
                                    d.int = s(e.data?.int);
                                }
                                if (((o = e.data) == null ? undefined : o.int_array) != null) {
                                    d.int_array = u(e.data?.int_array);
                                }
                                if (((a = e.data) == null ? undefined : a.double) != null) {
                                    d.double = e.data.double;
                                }
                                if (((i = e.data) == null ? undefined : i.double_array) != null) {
                                    d.double_array = e.data.double_array;
                                }
                                if (((l = e.data) == null ? undefined : l.bool) != null) {
                                    d.bool = e.data.bool;
                                }
                                if (((c = e.data) == null ? undefined : c.bool_array) != null) {
                                    d.bool_array = e.data.bool_array;
                                }
                                return d;
                            })()
                        };
                    }
                    return {
                        name: e.name,
                        timeSinceStart: String(e.timeSinceStart)
                    };
                });
                const g = {
                    marker_id: (e || (e = o("QPLEvent"))).getMarkerId(n),
                    action_id,
                    instance_id,
                    sample_rate: l.sampleRate,
                    method: _.get(l.samplingMethod),
                    duration_ns: o("QPLTimestamp").calculateDurationAsNanoseconds(l.timestamp, i),
                    points,
                    metadata: {
                        application_analytics: {
                            time_since_qpl_module_init: i - t.$1.moduleLoadTimestamp
                        }
                    },
                    marker_type: l.type,
                    flags: 1,
                    unique_marker_id_debug_only: l.uniqueMarkerDebugId
                };
                const h = p(g, l.annotations);
                const logData = m(h, l);
                t.$4.forEach((e)=>{
                    const t = {
                        durationMs: l ? i - l.timestamp : 0,
                        logData,
                        passesSampling: l.passesSampling,
                        isCrashResilient: l.isCrashResilient
                    };
                    if (e.onMarkerEnd) {
                        e.onMarkerEnd(action_id, n, instance_id, i, t);
                    }
                });
                if (l.passesSampling) {
                    if (l.timestampIsApproximate !== true) {
                        t.$15(logData);
                    }
                    if (t.$6 === (e || (e = o("QPLEvent"))).getMarkerId(n) && t.$1.onDebuggingIdEnded) {
                        t.$1.onDebuggingIdEnded();
                    }
                }
                t.deleteMarker(e.getMarkerId(n), instance_id);
            });
        };
        t_prototype.markerDrop = function(n, r = 0) {
            const t = this;
            this.$10("markerDrop", function() {
                const a = t.getMarker(n, r);
                t.deleteMarker((e || (e = o("QPLEvent"))).getMarkerId(n), r);
                const i = t.currentTimestamp();
                t.$4.forEach((e)=>{
                    if (e.onMarkerDrop) {
                        e.onMarkerDrop(n, r, i, babelHelpers.extends({
                            passesSampling: a?.passesSampling ?? false
                        }, t.$16(a)));
                    }
                });
            });
        };
        t_prototype.markEvent = function(n, da_type, da_level, i) {
            const t = this;
            const { timestamp = this.currentTimestamp(), annotations } = i === undefined ? {} : i;
            this.$10("markEvent", function() {
                let i;
                t.$4.forEach((e)=>{
                    if (e.onMarkEvent) {
                        e.onMarkEvent({
                            event: n,
                            timestamp,
                            annotations
                        });
                    }
                });
                if (!((i = t.$1.quickLogConfigHelper) != null && i.isKillswitchOn())) {
                    const l = t.$13(n);
                    const s = l[0];
                    const m = l[1];
                    const f = l[2];
                    if (s) {
                        const g = d(typeof annotations === "function" ? annotations() : annotations);
                        const h = {
                            marker_id: (e || (e = o("QPLEvent"))).getMarkerId(n),
                            action_id: 51,
                            instance_id: 0,
                            sample_rate: m,
                            method: _.get(f),
                            da_type,
                            da_level,
                            metadata: {
                                application_analytics: {
                                    time_since_qpl_module_init: timestamp - t.$1.moduleLoadTimestamp
                                }
                            },
                            marker_type: 1,
                            flags: 1
                        };
                        t.$15(p(h, g));
                    }
                }
            });
        };
        t_prototype.markerStartForJoin = function(t, samplingBasis, r) {
            const e = this;
            const { instanceKey = 0, cancelExisting = false, cancelOnUnload = false, trackedForLoss = false, type = 1, qplInternalDoNotUseAbsoluteTimeOrigin = null, timeoutMS = null, monotonicTimestamp = this.currentTimestamp(), absoluteTimeOriginMs = this.currentUnixTimestamp(), sourceIsPrimary = false, closeSession, onMarkerTimeout__DoNotUse, unreliableSourceClockProcessId, crashResilient, joinNamespaces, actionPriority } = r === undefined ? {} : r;
            this.$10("markerStartForJoin", function() {
                e.markerStart(t, instanceKey, monotonicTimestamp, {
                    cancelExisting,
                    cancelOnUnload,
                    trackedForLoss,
                    type,
                    samplingBasis,
                    qplInternalDoNotUseAbsoluteTimeOrigin,
                    timeoutMS,
                    onMarkerTimeout__DoNotUse,
                    crashResilient
                });
                const r = o("QPLCoreHelpers").generateJoinAnnotations(samplingBasis, absoluteTimeOriginMs, sourceIsPrimary, closeSession, unreliableSourceClockProcessId, joinNamespaces, actionPriority);
                e.markerAnnotate(t, r, {
                    instanceKey
                });
            });
        };
        t_prototype.addAlignmentPointForJoin = function(t, n, r) {
            const e = this;
            const { instanceKey = 0, requestId = "default_id", timestamp = this.currentTimestamp() } = r === undefined ? {} : r;
            this.$10("addAlignmentPointForJoin", function() {
                const r = o("QPLCoreHelpers").getAlignmentPointName(n, requestId);
                if (r != null) {
                    e.markerPoint(t, r, {
                        instanceKey,
                        timestamp
                    });
                }
            });
        };
        t_prototype.setAlwaysOnSampleRate = function(t, n) {
            this.$8.set(t, n);
        };
        t_prototype.setDefaultSampleRate = function(t) {
            this.$3 = t;
        };
        t_prototype.currentTimestamp = function() {
            const t = this;
            return this.$10("currentTimestamp", function() {
                return t.$1.monotonicNowMs();
            }) ?? 0;
        };
        t_prototype.currentUnixTimestamp = function() {
            const t = this;
            return this.$10("currentUnixTimestamp", function() {
                return t.$1.unixNowMs();
            }) ?? 0;
        };
        t_prototype.enableDebug = function(t) {
            this.$6 = t;
        };
        t_prototype.disableDebug = function() {
            this.$6 = null;
        };
        t_prototype.addListener = function(t) {
            const n = this;
            return this.$10("addListener", function() {
                const e = n.$2++;
                n.$4.set(e, t);
                return {
                    dispose: function() {
                        n.$4.delete(e);
                    }
                };
            }) ?? {
                dispose: function() {}
            };
        };
        t_prototype.$13 = function(n, r) {
            if (this.$1.unsampleAllEvents && this.$1.unsampleAllEvents() || this.$6 === (e || (e = o("QPLEvent"))).getMarkerId(n)) {
                return [
                    true,
                    1,
                    o("QuickPerformanceLoggerTypes").EVENT_BASED_SAMPLING
                ];
            }
            const i = (e || (e = o("QPLEvent"))).getSampleRate(n);
            const l = e.getSamplingMethod(n);
            if (this.$8.get(n) == null && i !== 0 && l === o("QuickPerformanceLoggerTypes").USER_BASED_SAMPLING) {
                return [
                    true,
                    i ?? 1,
                    o("QuickPerformanceLoggerTypes").USER_BASED_SAMPLING
                ];
            }
            const s = this.$8.get(n) ?? i ?? this.$3;
            const u = l ?? o("QuickPerformanceLoggerTypes").EVENT_BASED_SAMPLING;
            const c = f(s, r);
            return [
                c,
                s,
                u
            ];
        };
        t_prototype.$15 = function(t) {
            this.$4.forEach((e)=>{
                if (e.onUploadEvent) {
                    e.onUploadEvent(t);
                }
            });
            const e = this.$1.decorateEventBeforeUpload ? this.$1.decorateEventBeforeUpload(t) : t;
            this.$1.sendEvent(t, e);
        };
        t_prototype.$19 = function(t, n, r) {
            if (t.timeoutMS == null) {
                return false;
            }
            const e = r - n;
            return e >= t.timeoutMS;
        };
        t_prototype.getActiveMarkerIds = function(t) {
            const n = this;
            const t_type = t.type;
            return this.$10("getActiveMarkerIds", function() {
                const e = new Set;
                n.activeMarkers.forEach((t, n)=>{
                    t.forEach((t)=>{
                        if (t.type === t_type) {
                            e.add(n);
                            return;
                        }
                    });
                });
                return Array.from(e);
            }) ?? [];
        };
        t_prototype.getActiveE2ETraceIds = function() {
            const t = this;
            return this.$10("getActiveE2ETraceIds", function() {
                const e = new Map;
                t.activeMarkers.forEach((t, n)=>{
                    const r = new Map;
                    t.forEach((e, t)=>{
                        if (e.e2eTracingID != null) {
                            r.set(t, {
                                e2eTraceID: e.e2eTracingID,
                                qplEvent: e.event
                            });
                        }
                    });
                    if (r.size > 0) {
                        e.set(n, r);
                    }
                });
                return e;
            }) ?? new Map;
        };
        t_prototype.getActiveE2ETraceIdsAsArray = function() {
            const t = this;
            return this.$10("getActiveE2ETraceIdsAsArray", function() {
                const e = [];
                t.activeMarkers.forEach((t, n)=>{
                    t.forEach((t, n)=>{
                        if (t.e2eTracingID != null) {
                            e.push(t.e2eTracingID);
                        }
                    });
                });
                return e;
            }) ?? [];
        };
        t_prototype.forEachMarkerInstance = function(t, n) {
            const e = this;
            this.$10("forEachMarkerInstance", function() {
                const r = e.$11(t);
                if (r) {
                    for (const [a, i] of r.entries()){
                        n(a, i.event);
                    }
                }
            });
        };
        t_prototype.getMarkerStartTs = function(t, n) {
            const e = this;
            const { instanceKey = 0 } = n === undefined ? {} : n;
            return this.$10("getMarkerStartTs", function() {
                const n = e.getMarker(t, instanceKey);
                if (n) {
                    return n.timestamp;
                }
            });
        };
        t_prototype.markerLogDebugPoints = function(n, a) {
            const t = this;
            const { instanceKey = 0 } = a === undefined ? {} : a;
            this.$10("markerLogDebugPoints", function() {
                const a = (e || (e = o("QPLEvent"))).getMarkerId(n);
                const i = t.getMarker(n, instanceKey);
                if (i) {
                    const l = r("uuidv4")();
                    i.uniqueMarkerDebugId = l;
                }
            });
        };
        return t;
    })();
    g.normalizeAnnotations = d;
    l.default = g;
}, 98);
__d("QPLInspector", [], function(t, n, r, o, a, i) {
    class e {
        constructor(){
            this.$1 = [];
            this.$2 = {};
        }
        appendLog(t) {
            for(const e in this.$2){
                if (!(!Object.prototype.hasOwnProperty.call(this.$2, e) || t.marker_id !== e)) {
                    this.$2[t.marker_id].forEach((e)=>e(t));
                }
            }
            this.$1.push(t);
        }
        dumpLogs() {
            return this.$1;
        }
        addListener(t, n) {
            if (!Object.prototype.hasOwnProperty.call(this.$2, t)) {
                this.$2[t] = [];
            }
            this.$2[t].push(n);
            this.$1.forEach((e)=>{
                if (e.marker_id === t) {
                    n(e);
                }
            });
        }
        removeListener(t, n) {
            const e = this.$2[t].indexOf(n);
            if (e !== -1) {
                this.$2[t].splice(e, 1);
            }
        }
    }
    const l = new e;
    i.default = l;
}, 66);
__d("QuickPerformanceLogger", [
    "Arbiter",
    "Env",
    "FBLogger",
    "ODS",
    "PerfFalcoEvent",
    "PerfXSharedFields",
    "Promise",
    "QPLCore",
    "QPLEvent",
    "QPLInspector",
    "Run",
    "WebStorage",
    "clearTimeout",
    "cr:12180",
    "cr:1984081",
    "cr:686",
    "getErrorSafe",
    "gkx",
    "guid",
    "justknobx",
    "performanceAbsoluteNow",
    "performanceNavigationStart",
    "performanceNow",
    "setTimeout"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    const f = typeof window !== "undefined" ? window : self;
    function onError(t, n) {
        r("FBLogger")("qpl").catching(r("getErrorSafe")(n)).MUSTFIX(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "QPL error in ",
            ""
        ])), t);
    }
    function h(e) {
        const t = r("PerfXSharedFields").getCommonData();
        const n = {
            memory_stats: {
                total_mem: t.ram_gb != null ? t.ram_gb * 1073741824 : null
            },
            network_stats: {
                downlink_megabits: t.downlink_megabits,
                network_subtype: t.effective_connection_type,
                rtt_ms: t.rtt_ms
            },
            sitedata_info: {
                client_push_phase: t.client_push_phase,
                client_revision: t.client_revision,
                server_revision: t.server_revision
            },
            locale_info: {
                locale: t.locale,
                isRTL: t.isRTL
            }
        };
        if (r("gkx")("20836")) {
            n.workplace_info = {
                is_gemini: r("gkx")("21050")
            };
        }
        if (r("gkx")("21051") && typeof f.__sapienzMetadataCallback__ === "function") {
            const o = f.__sapienzMetadataCallback__();
            n.sapienz = {
                request_id: String(o.requestId),
                config_name: String(o.configName)
            };
        }
        return babelHelpers.extends({}, e, {
            metadata: babelHelpers.extends({}, e.metadata, n)
        });
    }
    function y(e, r_1, m_1) {
        return {
            i: e,
            m: m_1,
            r: r_1
        };
    }
    function sendEvent(e, t) {
        return new (_ || (_ = n("Promise")))(function() {
            const o = t || e;
            if (typeof f.__je2e_recordQPLMarker === "function") {
                f.__je2e_recordQPLMarker(o);
            }
            if ((p || (p = r("Env"))).enable_qplinspector === true) {
                r("QPLInspector").appendLog(o);
            }
            if (r("gkx")("21053") || r("gkx")("20935") || r("gkx")("5679")) {
                r("PerfFalcoEvent").logImmediately(function() {
                    return o;
                });
            } else if (r("gkx")("2160") || r("gkx")("21055") || r("gkx")("9550")) {
                r("PerfFalcoEvent").logCritical(function() {
                    return o;
                });
            } else if (o.annotations?.join_id != null && r("justknobx")._("3011")) {
                r("PerfFalcoEvent").logImmediately(function() {
                    return o;
                });
            } else {
                r("PerfFalcoEvent").log(function() {
                    return o;
                });
            }
        });
    }
    function e2eTracingIDGenerator(e) {
        const t = (s || (s = o("QPLEvent"))).getMarkerId(e);
        const n = `${t}_${r("guid")()}`;
        (m || (m = o("ODS"))).bumpEntityKey(2401, "obc.www.all", `qpl.e2e_tracing_id_generated.${t}`);
        return n;
    }
    function decorateEventBeforeUpload(e) {
        const t = babelHelpers.extends({}, e, {
            config_type: r("gkx")("21056") ? "alpha_beta" : "prod"
        });
        return h(t);
    }
    function unsampleAllEvents() {
        return (p || (p = r("Env"))).enable_qplinspector === true || typeof f.__je2e_recordQPLMarker === "function" || r("gkx")("21057");
    }
    function onDebuggingIdEnded() {
        r("Arbiter").inform("qpl_debugger_finished");
    }
    const moduleLoadTimestamp = (u || (u = r("performanceAbsoluteNow")))();
    if (typeof f.__je2e_felabsTracePlugin_setQplInit === "function") {
        f.__je2e_felabsTracePlugin_setQplInit((c || (c = r("performanceNow")))());
    }
    const logger = {
        debug: function(t, n, r) {},
        warn: function(t) {
            r("FBLogger")("qpl").blameToPreviousDirectory().warn(t);
        }
    };
    const k = "qpl";
    const I = ((e)=>{
        function t() {
            let t;
            t = e.call(this, {
                decorateEventBeforeUpload,
                unsampleAllEvents,
                onDebuggingIdEnded,
                monotonicNowMs: u || (u = r("performanceAbsoluteNow")),
                unixNowMs: u || (u = r("performanceAbsoluteNow")),
                moduleLoadTimestamp,
                logger,
                sendEvent,
                e2eTracingIDGenerator,
                runtimeAbstractionLayer: {
                    setTimeout: r("setTimeout"),
                    clearTimeout: r("clearTimeout")
                },
                debugLoggingEnabled: (p || (p = r("Env"))).qpl_debug_logging,
                onError
            }) || this;
            const n = r("gkx")("21055") ? r("gkx")("21058") ? (e)=>o("Run").onBeforeUnload(e, false) : o("Run").onBeforeUnload : o("Run").onUnload;
            n(function() {
                t.$QuickPerformanceLogger$p_1();
                t.$QuickPerformanceLogger$p_2(706, {
                    respectUnloadPolicy: true,
                    timestamp: t.currentTimestamp()
                });
            });
            t.$QuickPerformanceLogger$p_3();
            t.initQplFlipperPlugin();
            t.initQplSapienzPlugin();
            t.initQplUserTimingPlugin();
            return t;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.$QuickPerformanceLogger$p_3 = function() {
            const e = this;
            const t = (d || (d = r("WebStorage"))).getSessionStorageForRead();
            if (!t) {
                this.$QuickPerformanceLogger$p_4("#loadSavedState", "sessionStorage is not available");
                return;
            }
            const n = t.getItem(k);
            if (n != null) {
                t.removeItem(k);
                const o = JSON.parse(n);
                if (o == null) {
                    this.$QuickPerformanceLogger$p_4("#loadSavedState", "Saved state failed to deserialize");
                    return;
                }
                if (o.markers == null || o.markers.length === 0) {
                    this.$QuickPerformanceLogger$p_4("#loadSavedState", "No saved markers found");
                    return;
                }
                o.markers.forEach(([n, r, o])=>{
                    e.addMarker(n, r, o);
                    e.$QuickPerformanceLogger$p_4("#loadSavedState", `Marker ${n} (instanceKey: ${r}) resumed`);
                });
            }
        };
        t_prototype.$QuickPerformanceLogger$p_1 = function() {
            const e = this;
            const markers = [];
            this.activeMarkers.forEach((e, n)=>{
                e.forEach((e, r)=>{
                    if (e.resumeAfterNavigation === true) {
                        delete e.resumeAfterNavigation;
                        markers.push([
                            n,
                            r,
                            e
                        ]);
                    }
                });
            });
            if (markers.length > 0) {
                const n = {
                    markers
                };
                const o = (d || (d = r("WebStorage"))).getSessionStorage();
                const a = d.setItemGuarded(o, k, JSON.stringify(n));
                if (a) {
                    markers.forEach(([n, r, o])=>{
                        const a = y(n, o.sampleRate, o.samplingMethod);
                        e.markerEnd(a, 96, r);
                    });
                    this.$QuickPerformanceLogger$p_4("#storeSavedState", `Failed to store saved state: ${a.message}`);
                    r("FBLogger")("qpl").catching(a).warn(`Failed to store QPL state: ${JSON.stringify(n, null, 2)}`);
                }
                markers.forEach(([n, r])=>{
                    e.deleteMarker(n, r);
                });
            }
        };
        t_prototype.markerStoreBeforeNavigation = function(t, { instanceKey = 0 } = {}) {
            const i = (s || (s = o("QPLEvent"))).getMarkerId(t);
            const l = this.getMarker(t, instanceKey);
            if (!l) {
                this.$QuickPerformanceLogger$p_4("markerStoreBeforeNavigation", `Failed to set marker to store on page unload. Could not find marker ${i}, instancekey=${instanceKey}`);
                return;
            }
            l.resumeAfterNavigation = true;
            this.$QuickPerformanceLogger$p_4("markerStoreBeforeNavigation", `Set marker ${i} to store on page unload, instancekey=${instanceKey}`);
        };
        t_prototype.markerStartFromNavStart = function(t, n = 0, { cancelExisting = false, cancelOnUnload = false, trackedForLoss = false, type = 1, qplInternalDoNotUseConvertToTimeOnServer, onMarkerTimeout__DoNotUse, timeoutMS = null, crashResilient = false } = {}) {
            const C = r("performanceNavigationStart")();
            const b = typeof qplInternalDoNotUseConvertToTimeOnServer === "function" ? qplInternalDoNotUseConvertToTimeOnServer(C) : undefined;
            this.markerStart(t, n, C, {
                cancelExisting,
                cancelOnUnload,
                trackedForLoss,
                type,
                qplInternalDoNotUseAbsoluteTimeOrigin: b,
                onMarkerTimeout__DoNotUse,
                timeoutMS,
                crashResilient
            });
            if (r("performanceNavigationStart").isPolyfilled === true) {
                const v = this.getMarker(t, n);
                if (v) {
                    v.timestampIsApproximate = true;
                }
            }
        };
        t_prototype.markerStartForJoinFromNavStart = function(t, n, { instanceKey = 0, cancelExisting = false, cancelOnUnload = false, trackedForLoss = false, type = 1, qplInternalDoNotUseConvertToTimeOnServer, absoluteTimeOriginMs, sourceIsPrimary = false, closeSession, unreliableSourceClockProcessId, onMarkerTimeout__DoNotUse, timeoutMS, crashResilient = false } = {}) {
            const monotonicTimestamp = r("performanceNavigationStart")();
            const k = typeof qplInternalDoNotUseConvertToTimeOnServer === "function" ? qplInternalDoNotUseConvertToTimeOnServer(monotonicTimestamp) : undefined;
            this.markerStartForJoin(t, n, {
                instanceKey,
                cancelExisting,
                cancelOnUnload,
                trackedForLoss,
                type,
                qplInternalDoNotUseAbsoluteTimeOrigin: k,
                monotonicTimestamp,
                absoluteTimeOriginMs,
                sourceIsPrimary,
                closeSession,
                unreliableSourceClockProcessId,
                timeoutMS,
                onMarkerTimeout__DoNotUse,
                crashResilient
            });
            if (r("performanceNavigationStart").isPolyfilled === true) {
                const I = this.getMarker(t, instanceKey);
                if (I) {
                    I.timestampIsApproximate = true;
                }
            }
        };
        t_prototype.$QuickPerformanceLogger$p_2 = function(t, n) {
            const e = this;
            const r = n === undefined ? {} : n;
            const { respectUnloadPolicy, timestamp } = r;
            this.activeMarkers.forEach((n, r)=>{
                n.forEach((n, i)=>{
                    if (respectUnloadPolicy !== true || n.cancelOnUnload === true) {
                        const l = y(r, n.sampleRate, n.samplingMethod);
                        e.markerEnd(l, t, i, timestamp);
                    }
                });
            });
        };
        t_prototype.$QuickPerformanceLogger$p_4 = function(t, n, r) {
            logger.debug(t, n, r);
        };
        t_prototype.initQplFlipperPlugin = function() {
            if (n("cr:686") != null) {
                this.addListener(n("cr:686").qplFlipperPlugin.listener());
            }
        };
        t_prototype.initQplSapienzPlugin = function() {
            if (n("cr:1984081") != null) {
                this.addListener(n("cr:1984081").getQplSapienzListener());
            }
        };
        t_prototype.initQplUserTimingPlugin = function() {
            if (n("cr:12180") != null) {
                this.addListener(n("cr:12180").getQplUserTimingListener());
            }
        };
        return t;
    })(r("QPLCore"));
    const T = new I;
    l.default = T;
}, 98);
__d("ResourceTimingStore", [
    "performance"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = 4000;
    const u = 3000;
    let c = new Map;
    let d = false;
    function m() {
        const e = Array.from(c.entries());
        c = new Map(e.slice(-u));
    }
    function p(e) {
        const t = e.indexOf("#");
        if (t === -1) {
            return e;
        }
        return e.slice(0, t);
    }
    function _(e) {
        for (const t of e){
            if (t instanceof PerformanceResourceTiming) {
                let n = "";
                try {
                    n = new URL(t.name).pathname;
                } catch (e) {}
                if (/\.(css|js)$/.test(n) && t != null && typeof t === "object" && typeof t.encodedBodySize === "number" && typeof t.decodedBodySize === "number" && typeof t.transferSize === "number") {
                    c.set(p(t.name), t);
                }
            }
        }
        if (c.size > s) {
            m();
        }
    }
    function f(e) {
        _(e.getEntries());
    }
    function g() {
        if (!d) {
            d = true;
            let t = null;
            if (typeof PerformanceObserver !== "undefined") {
                t = new PerformanceObserver(f);
                try {
                    t.observe({
                        buffered: true,
                        type: "resource"
                    });
                } catch (e) {}
            }
            if (typeof (e || (e = r("performance"))).getEntriesByType === "function") {
                _((e || (e = r("performance"))).getEntriesByType("resource"));
            }
        }
    }
    function h(e) {
        g();
        return c.get(p(e));
    }
    l.init = g;
    l.getEntryForURL = h;
}, 98);
__d("routeBuilderUtils", [], function(t, n, r, o, a, i) {
    "use strict";
    function e(e) {
        const t = e.split("/");
        return t.filter((e)=>e !== "").map((part)=>{
            const t = part.split(/{|}/);
            if (t.length < 3) {
                return {
                    isToken: false,
                    part
                };
            }
            const prefix = t[0];
            const r = t[1];
            const suffix = t[2];
            const optional = r[0] === "?";
            const catchAll = r[optional ? 1 : 0] === "*";
            const token = r.substring((optional ? 1 : 0) + (catchAll ? 1 : 0));
            return {
                isToken: true,
                optional,
                catchAll,
                prefix,
                suffix,
                token
            };
        });
    }
    i.getPathParts = e;
}, 66);
__d("jsRouteBuilder", [
    "ConstUriUtils",
    "FBLogger",
    "routeBuilderUtils"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = "#";
    function s(t, n, a, i, l = false) {
        const s = o("routeBuilderUtils").getPathParts(t);
        function u(u) {
            try {
                const c = i != null ? babelHelpers.extends({}, i, u) : u ?? {};
                const d = {};
                let m = "";
                let p = false;
                m = s.reduce((acc, item)=>{
                    if (item.isToken) {
                        const { optional, prefix, suffix, token } = item;
                        if (optional && p) {
                            return acc;
                        }
                        const s = c[token] ?? n[token];
                        if (s == null && optional) {
                            p = true;
                            return acc;
                        }
                        if (s == null) {
                            const u = new Error(`Missing required template parameter: ${token}`);
                            u.stack;
                            throw u;
                        }
                        if (s === "") {
                            const m = new Error(`Required template parameter is an empty string: ${token}`);
                            m.stack;
                            throw m;
                        }
                        d[token] = true;
                        return `${acc}/${prefix}${s}${suffix}`;
                    } else {
                        p = false;
                        return `${acc}/${item.part}`;
                    }
                }, "");
                if (t.slice(-1) === "/") {
                    m += "/";
                }
                if (m === "") {
                    m = "/";
                }
                let _ = o("ConstUriUtils").getUri(m);
                for(const g in c){
                    const h = c[g];
                    if (!d[g] && h != null && _ != null) {
                        if (a != null && a.has(g)) {
                            if (h !== false) {
                                _ = _.addQueryParam(g, null);
                            }
                        } else {
                            _ = _.addQueryParam(g, h);
                        }
                    }
                }
                return [
                    _,
                    m
                ];
            } catch (error) {
                const y = error instanceof Error ? error.message : String(error);
                let C = r("FBLogger")("JSRouteBuilder").blameToPreviousFrame().blameToPreviousFrame();
                if (l) {
                    C = C.blameToPreviousFrame();
                }
                C.mustfix("Failed building URI for base path: %s message: %s", t, y);
                return [
                    null,
                    e
                ];
            }
        }
        return {
            buildUri: function(n) {
                const r = u(n)[0] ?? o("ConstUriUtils").getUri(e);
                if (r == null) {
                    const a = new Error("Not even the fallback URL parsed validly!");
                    a.stack;
                    throw a;
                }
                return r;
            },
            buildUriNullable: function(t) {
                return u(t)[0];
            },
            buildURL: function(t) {
                const n = u(t);
                const r = n[0];
                const o = n[1];
                return r?.toString() ?? o;
            },
            buildURLStringDEPRECATED: function(t) {
                const n = u(t);
                const r = n[0];
                const o = n[1];
                return r?.toString() ?? o;
            },
            getPath: function() {
                return t;
            }
        };
    }
    l.default = s;
}, 98);
__d("XCometFBMultiSiteWebWorkerInitScriptControllerRouteBuilder", [
    "jsRouteBuilder"
], function(t, n, r, o, a, i, l) {
    const e = r("jsRouteBuilder")("/static_resources/webworker_v1/init_script/", Object.freeze({}), undefined);
    l.default = e;
}, 98);
__d("objectEntries", [], function(t, n, r, o, a, i) {
    function e(e) {
        return Object.entries(e);
    }
    i.default = e;
}, 66);
__d("getWorkerInitScriptSPINParams", [
    "SiteData",
    "StaticSiteData",
    "objectEntries"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e() {
        let n;
        let o;
        const a = (n = r("SiteData"))[(o = r("StaticSiteData")).spin_mhenv_key];
        const i = babelHelpers.extends({
            [o.hs_key]: n.haste_session,
            [o.spin_rev_key]: n[o.spin_rev_key],
            [o.spin_branch_key]: n[o.spin_branch_key],
            [o.spin_time_key]: n[o.spin_time_key]
        }, a ? {
            [r("StaticSiteData").spin_mhenv_key]: a
        } : null);
        return new Map(r("objectEntries")(i));
    }
    l.default = e;
}, 98);
__d("WorkerBundleResource", [
    "XCometFBMultiSiteWebWorkerInitScriptControllerRouteBuilder",
    "getWorkerInitScriptSPINParams",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(resource, t, ...initArgs) {
        const logImportScriptsErrors = t?.logImportScriptsErrors ?? false;
        const l = t?.name ?? resource.name;
        const href = new window.URL(resource.url, window.location.href).href;
        if (href == null) {
            const c = new Error("Can't start up worker without a resource url.");
            c.stack;
            throw c;
        }
        const d = r("nullthrows")(r("XCometFBMultiSiteWebWorkerInitScriptControllerRouteBuilder").buildUri({}).addQueryParams(r("getWorkerInitScriptSPINParams")())?.addQueryParams(s())?.toString());
        const m = new Worker(d, {
            name: l
        });
        m.postMessage({
            bundleUrl: href,
            initArgs,
            isDev: false,
            resource,
            logImportScriptsErrors,
            type: "sr-init"
        });
        return m;
    }
    function s() {
        const e = new URLSearchParams(window.location.search);
        const t = new Map;
        e.forEach((e, n)=>{
            if ([
                "gk_enable",
                "gk_enable[]",
                "gk_disable",
                "gk_disable[]"
            ].includes(n)) {
                t.set(n, e);
            }
        });
        return t;
    }
    l.createDedicatedWebWorker = e;
}, 98);
__d("deferredLoadComponentBase", [
    "ExecutionEnvironment",
    "Promise",
    "PromiseAnnotate",
    "react",
    "suspendOrThrowIfUsedInSSR"
], function(t, n, r, o, a, i, l) {
    const e = [
        "ref"
    ];
    const s = [
        "loadImmediately"
    ];
    let u;
    let c;
    let d;
    let m;
    let p;
    const _ = p || (p = o("react"));
    const f = {};
    const g = {};
    const h = new Map;
    function y(e, t) {
        h.set(e, t);
    }
    function C(e) {
        return h.get(e);
    }
    function b(t, a) {
        const l = C(t);
        if (l) {
            return l;
        }
        let p;
        const h = t.getModuleId();
        function b() {
            let e = g[h];
            if (!e) {
                e = g[h] = new (m || (m = n("Promise")))(function(e) {
                    t.loadImmediately(function(t) {
                        delete g[h];
                        p = a(t);
                        e();
                    });
                });
            }
            return e;
        }
        function v() {
            let e = f[h];
            if (!e) {
                e = f[h] = new (m || (m = n("Promise")))(function(e) {
                    t.onReady(function(t) {
                        p = a(t);
                        delete f[h];
                        e();
                    });
                });
            }
            return e;
        }
        function S(n) {
            const n_ref = n.ref;
            const l = babelHelpers.objectWithoutPropertiesLoose(n, e);
            const l_loadImmediately = l.loadImmediately;
            const f = babelHelpers.objectWithoutPropertiesLoose(l, s);
            if (!p) {
                const g = t.getModuleIfRequireable();
                if (g != null) {
                    p = a(g);
                }
                if (!p) {
                    if (!(u || (u = r("ExecutionEnvironment"))).isInBrowser && !t.isAvailableInSSR_DO_NOT_USE()) {
                        (d || (d = r("suspendOrThrowIfUsedInSSR")))("Loading bootloaded and T3 components are disabled during SSR");
                    }
                    const h = l_loadImmediately === true ? b() : v();
                    (c || (c = o("PromiseAnnotate"))).setDisplayName(h, S.displayName);
                    throw h;
                }
            }
            return _.jsx(p, babelHelpers.extends({}, f, {
                ref: n_ref
            }));
        }
        S.displayName = `${S.name} [from ${i.id}]`;
        let R = t.getModuleId();
        if (t.isRequireDeferredForDisplay() === true) {
            R = `requireDeferredForDisplay${`(${t.getModuleId()})`}`;
        } else if (t.isRequireDeferredForDisplay() === false) {
            R = `requireDeferred${`(${t.getModuleId()})`}`;
        }
        S.displayName = `deferredLoadComponent(${R})`;
        const L = S;
        y(t, L);
        return L;
    }
    l.default = b;
}, 98);
__d("getAsyncHeaders", [
    "BDHeaderConfig",
    "LSD",
    "ZeroCategoryHeader",
    "isFacebookURI",
    "requireWeak"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = {};
        const n = r("isFacebookURI")(e);
        if (n && r("ZeroCategoryHeader").value) {
            t[r("ZeroCategoryHeader").header] = r("ZeroCategoryHeader").value;
        }
        const o = s(e);
        if (o != null && o !== "") {
            t["X-FB-LSD"] = o;
        }
        const a = u(e);
        if (a != null && a !== "") {
            t["X-ASBD-ID"] = a;
        }
        r("requireWeak")("MessengerPWAVersionForUserAgent", function(n) {
            const r = n();
            if (r != null && !c(e)) {
                t["x-fb-pwa"] = `${r}`;
            }
        });
        return t;
    }
    function s(e) {
        if (c(e)) {
            return null;
        }
        return r("LSD").token;
    }
    function u(e) {
        if (c(e)) {
            return null;
        }
        return o("BDHeaderConfig").ASBD_ID;
    }
    function c(e) {
        const o = d()?.location?.origin ?? window?.location?.origin;
        if (o == null) {
            return true;
        }
        return !e.toString().startsWith("/") && e.getOrigin() !== o;
    }
    function d() {
        if (typeof document !== "undefined") {
            return document;
        }
        return null;
    }
    l.default = e;
}, 98);
__d("isInIframe", [], function(t, n, r, o, a, i) {
    const e = typeof window !== "undefined" && window.top != null && window != window.top;
    function l() {
        return e;
    }
    i.default = l;
}, 66);
__d("once", [], function(t, n, r, o, a, i) {
    "use strict";
    function e(e) {
        const t = l(e);
        for(const n in e){
            if (Object.prototype.hasOwnProperty.call(e, n)) {
                t[n] = e[n];
            }
        }
        return t;
    }
    function l(e) {
        let t = e;
        let n;
        const r = function(...args) {
            if (t) {
                for(var e = args.length, r = new Array(e), o = 0; o < e; o++){
                    r[o] = args[o];
                }
                n = t.apply(this, r);
                t = null;
            }
            return n;
        };
        return r;
    }
    i.default = e;
}, 66);
__d("qpl", [
    "FBLogger",
    "QPLHasteSupportDataStorage"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = {};
    const s = {
        _: function(n, o) {
            let t = e[o];
            if (t == null) {
                const a = r("QPLHasteSupportDataStorage").get(o);
                if (a == null) {
                    r("FBLogger")("staticresources").mustfix("Failed to find a Haste-supplied config for the QPL event identified by token `%s`.", o);
                    t = {
                        i: n
                    };
                } else {
                    t = babelHelpers.extends({
                        i: n
                    }, a);
                }
                e[o] = t;
            }
            return t;
        }
    };
    l.default = s;
}, 98);
__d("useCometThemeInfraFallbackThemes", [
    "CometThemeInfraFallbackConfig",
    "react"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const useSyncExternalStore = (e || (e = o("react"))).useSyncExternalStore;
    const u = {
        auto: null,
        dark: null,
        light: null
    };
    function c() {
        return r("CometThemeInfraFallbackConfig").fallbackThemes;
    }
    function d() {
        return u;
    }
    function m() {
        return useSyncExternalStore(r("CometThemeInfraFallbackConfig").subscribe, c, d);
    }
    l.default = m;
}, 98);
__d("useCometThemeInfraThemesWithPageFallback", [
    "CometThemeInfraBaseThemeContext.react",
    "react",
    "useCometThemeInfraFallbackThemes"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const useContext = (e || (e = o("react"))).useContext;
    function useU() {
        const e = useContext(r("CometThemeInfraBaseThemeContext.react"));
        const t = r("useCometThemeInfraFallbackThemes")();
        if (e.auto != null) {
            return e;
        }
        return t;
    }
    l.default = useU;
}, 98);
__d("CometHiddenAPIContext", [
    "react"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const e_createContext = e.createContext;
    const c = e_createContext(true);
    l.default = c;
}, 98);
__d("CometHidden", [
    "CometHiddenAPIContext",
    "LegacyHidden",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = [
        "ref"
    ];
    let s;
    const u = s || (s = o("react"));
    const c = s;
    const { unstable_Activity: UnstableActivity, useContext } = c;
    function CometHidden(t) {
        const n = o("react-compiler-runtime").c(17);
        let a;
        let i;
        if (n[0] !== t) {
            a = t.ref;
            i = babelHelpers.objectWithoutPropertiesLoose(t, e);
            n[0] = t;
            n[1] = a;
            n[2] = i;
        } else {
            a = n[1];
            i = n[2];
        }
        const l = i;
        const { children, htmlAttributes, mode, suppressHydrationWarning } = l;
        const f = useContext(r("CometHiddenAPIContext"));
        if (f) {
            let g;
            if (n[3] !== children || n[4] !== a || n[5] !== htmlAttributes || n[6] !== mode || n[7] !== suppressHydrationWarning) {
                const Component = r("LegacyHidden");
                g = <Component htmlAttributes={htmlAttributes} mode={mode} ref={a} suppressHydrationWarning={suppressHydrationWarning}>{children}</Component>;
                n[3] = children;
                n[4] = a;
                n[5] = htmlAttributes;
                n[6] = mode;
                n[7] = suppressHydrationWarning;
                n[8] = g;
            } else {
                g = n[8];
            }
            return g;
        }
        const h = mode === "hidden" ? "hidden" : "visible";
        let y;
        if (n[9] !== children || n[10] !== a || n[11] !== htmlAttributes || n[12] !== suppressHydrationWarning) {
            y = <div {...babelHelpers.extends({}, htmlAttributes, {
                ref: a,
                suppressHydrationWarning,
                children
            })}/>;
            n[9] = children;
            n[10] = a;
            n[11] = htmlAttributes;
            n[12] = suppressHydrationWarning;
            n[13] = y;
        } else {
            y = n[13];
        }
        let C;
        if (n[14] !== h || n[15] !== y) {
            C = <UnstableActivity mode={h}>{y}</UnstableActivity>;
            n[14] = h;
            n[15] = y;
            n[16] = C;
        } else {
            C = n[16];
        }
        return C;
    }
    CometHidden.displayName = "CometHidden";
    l.default = CometHidden;
}, 98);
__d("CometRouterRouteTracePolicyContext", [
    "react"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const UContext = s.createContext();
    l.default = UContext;
}, 98);
__d("HeroLogger", [
    "hero-tracing-placeholder",
    "interaction-tracing-metrics",
    "performanceNow",
    "uuidv4"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = {};
    let u = 0;
    const c = new Map;
    function d(e) {
        const t = u++;
        c.set(t, e);
        return function() {
            c.delete(t);
        };
    }
    function m(e) {
        const t = e ?? r("uuidv4")();
        if (!o("hero-tracing-placeholder").HeroPendingPlaceholderTracker.isInteractionActive(t)) {
            o("hero-tracing-placeholder").HeroPendingPlaceholderTracker.addInteraction(t);
        }
        return t;
    }
    function p(e) {
        o("hero-tracing-placeholder").HeroPendingPlaceholderTracker.removeInteraction(e);
    }
    function _(e, t, n, r) {
        const a = o("interaction-tracing-metrics").InteractionTracingMetricsCore.get(e);
        if (a != null) {
            if (n === "ABORT") {
                o("interaction-tracing-metrics").InteractionTracingMetricsCore.addAnnotationInt(e, "aborted", 1);
                o("interaction-tracing-metrics").InteractionTracingMetricsCore.addAnnotation(e, "cancelType", `aborted:${r ?? "unknown"}`);
            }
            C(e, t, "Interaction", `Interaction Done: ${a.tracePolicy ?? "unknown"}${` (${n})`}`, a.start);
        }
        o("interaction-tracing-metrics").InteractionTracingMetricsCore.complete(e);
    }
    function f(t, n, o) {
        const a = n + t;
        s[a] = o ?? (e || (e = r("performanceNow")))();
    }
    function g(t, n, a, i, description, contextualInteractionUUID) {
        const u = a ?? (e || (e = r("performanceNow")))();
        f(t, n, u);
        o("hero-tracing-placeholder").HeroPendingPlaceholderTracker.addPlaceholder(t, n, description, u, i ?? []);
        if (c.size) {
            const d = {
                placeholderID: n + t,
                interactionID: t,
                spanUUID: n,
                startTime: u,
                pageletStack: i,
                description,
                contextualInteractionUUID
            };
            c.forEach((e)=>{
                e.onStart(d);
            });
        }
    }
    function h(t, n, a, i, l, u, d, m) {
        const p = l + t;
        const _ = s[p];
        delete s[p];
        const f = d ?? (e || (e = r("performanceNow")))();
        if (_ != null) {
            C(t, n, a, i, _, f, u, m);
        }
        if (c.size) {
            const g = {
                placeholderID: l + t,
                interactionID: t,
                pageletStack: n,
                spanType: a,
                name: i,
                spanUUID: l,
                data: u,
                endTime: f
            };
            c.forEach((e)=>{
                e.onEnd(g);
            });
        }
        o("hero-tracing-placeholder").HeroPendingPlaceholderTracker.removePlaceholder(t, l);
    }
    function y(e, t, n, r, a, i, l) {
        h(e, t, n, r, a, i, l, "Placeholder");
        o("hero-tracing-placeholder").HeroPendingPlaceholderTracker.removePlaceholder(e, a);
    }
    function C(t, n, a, i, l, s = (e || (e = r("performanceNow")))(), u, c) {
        o("interaction-tracing-metrics").InteractionTracingMetricsCore.addSubspan(t, i, "HeroTracing", l, s ?? (e || (e = r("performanceNow")))(), babelHelpers.extends({}, u, {
            pagelet: n[n.length - 1],
            pageletStack: n,
            spanType: a
        }));
    }
    l.subscribeToPlaceholders = d;
    l.genHeroInteractionUUIDAndMarkStart = m;
    l.cleanupHeroInteraction = p;
    l.endHeroInteraction = _;
    l.markStart = f;
    l.markStartPlaceholder = g;
    l.markEnd = h;
    l.markEndPlaceholder = y;
    l.measure = C;
}, 98);
__d("HeroTracingCoreConfig", [
    "cr:8907"
], function(t, n, r, o, a, i, l) {
    "use strict";
    l.default = n("cr:8907");
}, 98);
__d("HeroTracingCoreDependencies", [
    "cr:8908"
], function(t, n, r, o, a, i, l) {
    "use strict";
    l.default = n("cr:8908");
}, 98);
__d("usePageletVCTracker", [
    "interaction-tracing-metrics",
    "performanceNow",
    "react",
    "react-compiler-runtime",
    "useStable"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = s || (s = o("react"));
    const { useCallback, useRef } = u;
    function m(t) {
        const n = o("react-compiler-runtime").c(9);
        const { alwaysMarkMutationRootAsVisualChange, interactionUUID, isMutationRoot, observeTextMutation, pageletName, pageletType, vcCallback } = t;
        const _ = r("useStable")(p);
        const fRef = useRef(null);
        let g;
        if (n[0] !== alwaysMarkMutationRootAsVisualChange || n[1] !== interactionUUID || n[2] !== isMutationRoot || n[3] !== observeTextMutation || n[4] !== pageletName || n[5] !== pageletType || n[6] !== _ || n[7] !== vcCallback) {
            g = function(n) {
                if (n != null) {
                    const t = _.has(n);
                    let d = _.get(n);
                    if (d == null) {
                        d = (e || (e = r("performanceNow")))();
                        _.set(n, d);
                    }
                    let p;
                    const g = interactionUUID != null ? o("interaction-tracing-metrics").InteractionTracingMetricsCore.get(interactionUUID) : null;
                    if (interactionUUID != null && fRef.current !== interactionUUID && g && g.vcTracker) {
                        p = g.vcTracker;
                        if (isMutationRoot === true) {
                            if (observeTextMutation != null) {
                                p.config.observeTextMutation = observeTextMutation;
                            }
                            if (t && alwaysMarkMutationRootAsVisualChange === false) {
                                p.observeMutation(n);
                            } else {
                                p.addMutationRoot(n);
                            }
                        }
                    }
                    const h = t && g != null && g.start > d;
                    const y = h && g != null ? g.start : (e || (e = r("performanceNow")))();
                    if (interactionUUID != null && (!t || h)) {
                        o("interaction-tracing-metrics").InteractionTracingMetricsCore.addMountPoint(interactionUUID, y, pageletName);
                        p?.trackPagelet(n, pageletName, y, vcCallback, pageletType);
                    }
                    fRef.current = interactionUUID;
                }
            };
            n[0] = alwaysMarkMutationRootAsVisualChange;
            n[1] = interactionUUID;
            n[2] = isMutationRoot;
            n[3] = observeTextMutation;
            n[4] = pageletName;
            n[5] = pageletType;
            n[6] = _;
            n[7] = vcCallback;
            n[8] = g;
        } else {
            g = n[8];
        }
        return g;
    }
    function p() {
        if (typeof WeakMap === "function") {
            return new WeakMap;
        }
        return new Map;
    }
    l.default = m;
}, 98);
__d("useHeroTracingDOMTracking", [
    "HeroTracingCoreDependencies",
    "mergeRefs",
    "react",
    "react-compiler-runtime",
    "usePageletVCTracker"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const useMemo = (s || (s = o("react"))).useMemo;
    function c(t) {
        const n = o("react-compiler-runtime").c(11);
        const { alwaysMarkMutationRootAsVisualChange, interactionUUID, isMutationRoot, name, observeTextMutation, pageletName, pageletType, position, trackTailLoad, vcCallback } = t;
        let f;
        if (n[0] !== alwaysMarkMutationRootAsVisualChange || n[1] !== interactionUUID || n[2] !== isMutationRoot || n[3] !== name || n[4] !== observeTextMutation || n[5] !== pageletType || n[6] !== vcCallback) {
            f = {
                interactionUUID,
                isMutationRoot,
                observeTextMutation,
                pageletName: name,
                pageletType,
                vcCallback,
                alwaysMarkMutationRootAsVisualChange
            };
            n[0] = alwaysMarkMutationRootAsVisualChange;
            n[1] = interactionUUID;
            n[2] = isMutationRoot;
            n[3] = name;
            n[4] = observeTextMutation;
            n[5] = pageletType;
            n[6] = vcCallback;
            n[7] = f;
        } else {
            f = n[7];
        }
        const g = r("usePageletVCTracker")(f);
        const h = (e || (e = r("HeroTracingCoreDependencies"))).useTailLoadPageletTracker(pageletName, position, trackTailLoad);
        let y;
        if (n[8] !== g || n[9] !== h) {
            y = r("mergeRefs")(g, h);
            n[8] = g;
            n[9] = h;
            n[10] = y;
        } else {
            y = n[10];
        }
        return y;
    }
    l.default = c;
}, 98);
__d("HeroTracingPlatformDependencies", [
    "CometHidden",
    "useHeroTracingDOMTracking"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = {
        HostInstanceTrackableComponent: r("CometHidden"),
        useHostInstanceTracking: r("useHeroTracingDOMTracking")
    };
    l.default = e;
}, 98);
__d("HeroTracingPlatformDependenciesType", [], function(t, n, r, o, a, i) {
    "use strict";
    function e(e) {
        return {
            htmlAttributes: e.htmlAttributes || {},
            mode: e.hidden === true ? "hidden" : "visible"
        };
    }
    i.getHeroInteractionHostInstanceProps = e;
}, 66);
__d("HeroInteraction.react", [
    "HeroLogger",
    "HeroPagelet.react",
    "HeroTracingCoreConfig",
    "HeroTracingCoreDependencies",
    "HeroTracingPlatformDependencies",
    "HeroTracingPlatformDependenciesType",
    "HiddenSubtreePassiveContext",
    "Promise",
    "PromiseAnnotate",
    "RelayProfilerContext",
    "clearImmediate",
    "foregroundRequestAnimationFrame",
    "hero-tracing-placeholder",
    "interaction-tracing-metrics",
    "objectEntries",
    "objectValues",
    "performanceNow",
    "react",
    "react-compiler-runtime",
    "setImmediateAcrossTransitions",
    "useStable"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = [
        "ref"
    ];
    let s;
    let u;
    let c;
    let d;
    let m;
    const p = m || (m = o("react"));
    const _ = m;
    const { useCallback, useContext, useEffect, useLayoutEffect, useMemo, useRef } = _;
    const v = r("HeroTracingCoreConfig").enableRemountCompletionContinuation === undefined ? false : r("HeroTracingCoreConfig").enableRemountCompletionContinuation;
    const S = r("HeroTracingCoreConfig").fixParentInteractionIdWhenCancel === undefined ? false : r("HeroTracingCoreConfig").fixParentInteractionIdWhenCancel;
    const R = "root";
    const L = new WeakSet;
    function E(e, t, n) {
        o("HeroLogger").markStart(e, t);
        o("interaction-tracing-metrics").InteractionTracingMetricsCore.markPlaceholderStart(e, t, (d || (d = r("performanceNow")))(), n, "SuspensePromise");
    }
    function k(e, t, n, a, i) {
        o("HeroLogger").markStartPlaceholder(e, t, undefined, n, a, i);
        o("interaction-tracing-metrics").InteractionTracingMetricsCore.markPlaceholderStart(e, t, (d || (d = r("performanceNow")))(), a, "PlaceholderWait");
    }
    function I(e, t, n, a) {
        o("HeroLogger").markEnd(e, n, "SuspensePromise", `Promise Wait: ${a}`, t, undefined, undefined, "Placeholder");
        o("interaction-tracing-metrics").InteractionTracingMetricsCore.markPlaceholderEnd(e, t, a, (d || (d = r("performanceNow")))());
    }
    function T(e, placeholderUUID, n, a) {
        o("HeroLogger").markEndPlaceholder(e, n, "PlaceholderWait", `Placeholder Wait: ${a}`, placeholderUUID, {
            placeholderUUID
        }, undefined);
        o("interaction-tracing-metrics").InteractionTracingMetricsCore.markPlaceholderEnd(e, placeholderUUID, a, (d || (d = r("performanceNow")))());
    }
    function D(queries, t, n) {
        o("interaction-tracing-metrics").InteractionTracingMetricsCore.addHeroRelay(t, {
            pageletStack: n,
            queries
        });
        for (const a of queries){
            if (!(a.isExecTime && a.flushes.length === 0)) {
                o("HeroLogger").measure(t, n, "Relay", a.name, a.start, a.end, {
                    full_duration: ((a.end ?? (d || (d = r("performanceNow")))()) - a.start) / 1000,
                    is_preloaded: a.isPreloaded === true,
                    networkStart: a.networkStart / 1000,
                    networkDuration: a.end != null ? (a.end - a.networkStart) / 1000 : 0
                });
                for(let l = 0; l < a.flushes.length; l++){
                    const flush = a.flushes[l];
                    o("HeroLogger").measure(t, n, "RelayFlush", `${a.name}(${flush.label})`, a.start, flush.time, {
                        flush: flush.label,
                        queryName: a.name,
                        full_duration: (flush.time - a.start) / 1000,
                        is_preloaded: a.isPreloaded === true
                    });
                }
            }
        }
    }
    function x(e, t, pageletStack) {
        o("interaction-tracing-metrics").InteractionTracingMetricsCore.addHeroBootload(t, {
            moduleIDs: Array.from(e),
            pageletStack
        });
    }
    function $(e) {
        if (!e) {
            return "No placeholder";
        }
        const t = e.boundaryName != null ? `@${e.boundaryName}` : "";
        const n = o("hero-tracing-placeholder").HeroPlaceholderUtils.createThenableDescription(e.thenables) || "No Promises";
        return n + t;
    }
    function P(e, t) {
        if (e == null) {
            return null;
        }
        const n = {
            commitCount: 0,
            lastBaseDuration: 0,
            maxBaseDuration: 0,
            totalActualDuration: 0,
            totalCommitDuration: 0,
            totalPostCommitDuration: 0,
            zeroDurationCommitCount: 0,
            zeroDurationPostCommitCount: 0
        };
        for (const [a, i] of r("objectEntries")(e)){
            if (a > t) {
                break;
            }
            const l = i.actualDuration;
            const s = l === undefined ? 0 : l;
            const u = i.baseDuration;
            const c = u === undefined ? 0 : u;
            const d = i.commitDuration;
            const m = d === undefined ? 0 : d;
            const p = i.postCommitDuration;
            const _ = p === undefined ? 0 : p;
            n.commitCount++;
            if (i.commitDuration === 0) {
                n.zeroDurationCommitCount++;
            }
            if (i.postCommitDuration === 0) {
                n.zeroDurationPostCommitCount++;
            }
            n.maxBaseDuration = Math.max(n.maxBaseDuration, c);
            n.lastBaseDuration = c;
            n.totalActualDuration += s;
            n.totalCommitDuration += m;
            n.totalPostCommitDuration += _;
        }
        return n;
    }
    const N = new Set;
    const M = new Map;
    function w(unmountCleanupHandoffKey, __interactionUUID) {
        if (unmountCleanupHandoffKey == null || __interactionUUID == null) {
            return null;
        }
        return `${unmountCleanupHandoffKey}::${__interactionUUID}`;
    }
    function A(e) {
        if (e == null) {
            return false;
        }
        for (const t of M.keys()){
            if (t.endsWith(`::${e}`)) {
                return true;
            }
        }
        return false;
    }
    function F(e) {
        if (e != null) {
            r("clearImmediate")(e);
        }
    }
    function O(e) {
        if (e == null) {
            return false;
        }
        const t = M.get(e);
        if (t == null) {
            return false;
        }
        F(t);
        M.delete(e);
        return true;
    }
    function B(e) {
        return r("setImmediateAcrossTransitions")(e);
    }
    function W(e, t) {
        O(e);
        var n = B(function() {
            if (M.get(e) === n) {
                M.delete(e);
            }
            t();
        });
        M.set(e, n);
    }
    function useQ(e) {
        const t = o("react-compiler-runtime").c(16);
        const { currentInteractionRef, handoffIDRef, shouldDeferRef } = e;
        const iRef = useRef(null);
        let l;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            l = function() {
                iRef.current = null;
            };
            t[0] = l;
        } else {
            l = t[0];
        }
        const clearCompletionBlock = l;
        let u;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            u = function(t) {
                return iRef.current === t;
            };
            t[1] = u;
        } else {
            u = t[1];
        }
        const isCompletionBlockedForRemount = u;
        let d;
        if (t[2] !== handoffIDRef || t[3] !== shouldDeferRef) {
            d = function(t) {
                if (!v || handoffIDRef.current == null || shouldDeferRef.current?.() !== true) {
                    return false;
                }
                const e = o("interaction-tracing-metrics").InteractionTracingMetricsCore.get(t);
                return e != null && e.completed == null;
            };
            t[2] = handoffIDRef;
            t[3] = shouldDeferRef;
            t[4] = d;
        } else {
            d = t[4];
        }
        const m = d;
        let p;
        if (t[5] !== m) {
            p = function(t) {
                if (m(t)) {
                    iRef.current = t;
                }
            };
            t[5] = m;
            t[6] = p;
        } else {
            p = t[6];
        }
        const blockCompletionForRemount = p;
        let f;
        if (t[7] !== blockCompletionForRemount || t[8] !== currentInteractionRef) {
            f = function() {
                const currentInteractionRef_current = currentInteractionRef.current;
                if (currentInteractionRef_current != null) {
                    blockCompletionForRemount(currentInteractionRef_current.interactionUUID);
                }
            };
            t[7] = blockCompletionForRemount;
            t[8] = currentInteractionRef;
            t[9] = f;
        } else {
            f = t[9];
        }
        const blockCompletionForCurrentRemount = f;
        let h;
        if (t[10] !== currentInteractionRef) {
            h = function(t) {
                const currentInteractionRef_current = currentInteractionRef.current;
                if (!(currentInteractionRef_current == null || iRef.current !== currentInteractionRef_current.interactionUUID)) {
                    iRef.current = null;
                    t();
                }
            };
            t[10] = currentInteractionRef;
            t[11] = h;
        } else {
            h = t[11];
        }
        const releaseCompletionForCurrentRemount = h;
        let C;
        if (t[12] !== blockCompletionForCurrentRemount || t[13] !== blockCompletionForRemount || t[14] !== releaseCompletionForCurrentRemount) {
            C = {
                blockCompletionForCurrentRemount,
                blockCompletionForRemount,
                clearCompletionBlock,
                isCompletionBlockedForRemount,
                releaseCompletionForCurrentRemount
            };
            t[12] = blockCompletionForCurrentRemount;
            t[13] = blockCompletionForRemount;
            t[14] = releaseCompletionForCurrentRemount;
            t[15] = C;
        } else {
            C = t[15];
        }
        return C;
    }
    function HeroInteraction(t) {
        const t_ref = t.ref;
        const _ = babelHelpers.objectWithoutPropertiesLoose(t, e);
        const v = useContext(o("hero-tracing-placeholder").HeroInteractionContext.Context);
        const N = useContext(o("hero-tracing-placeholder").HeroInteractionIDContext);
        const MRef = useRef(null);
        const FRef = useRef(null);
        const U = useContext(r("HiddenSubtreePassiveContext"));
        const interactionDesc = _.interactionDesc ?? "No Description";
        const __interactionUUID = _.interactionUUID;
        const G = _.pageletName ?? R;
        const zRef = useRef(_.shouldDeferUnmountCleanup);
        const jRef = useRef(_.preserveInteractionOnRemount);
        const K = w(_.unmountCleanupHandoffKey, __interactionUUID);
        const QRef = useRef(K);
        useLayoutEffect(function() {
            zRef.current = _.shouldDeferUnmountCleanup;
            jRef.current = _.preserveInteractionOnRemount;
            QRef.current = K;
        }, [
            _.shouldDeferUnmountCleanup,
            _.preserveInteractionOnRemount,
            K
        ]);
        const XRef = useRef({});
        const YRef = useRef({});
        const JRef = useRef({});
        const ZRef = useRef(null);
        const eeRef = useRef(N);
        const te = useQ({
            currentInteractionRef: ZRef,
            handoffIDRef: QRef,
            shouldDeferRef: zRef
        });
        const { blockCompletionForCurrentRemount, blockCompletionForRemount, clearCompletionBlock, isCompletionBlockedForRemount, releaseCompletionForCurrentRemount } = te;
        const le = r("useStable")(o("hero-tracing-placeholder").HeroPlaceholderUtils.getSimpleUUID);
        const se = useMemo(function() {
            return [].concat(v.pageletStack, [
                G
            ]);
        }, [
            v.pageletStack,
            G
        ]);
        const ueRef = useRef([]);
        const ceRef = useRef(new Set);
        const de = useCallback(function() {
            return r("objectValues")(XRef.current).some((e)=>e.shouldHold);
        }, []);
        const me = useCallback(function(e, t, n) {
            if (FRef.current !== e && MRef.current == null && !U.getCurrentState().hidden && !isCompletionBlockedForRemount(e) && !de()) {
                MRef.current = o("foregroundRequestAnimationFrame").foregroundRequestAnimationFrame(function() {
                    MRef.current = null;
                    if (!U.getCurrentState().hidden && FRef.current !== e && !isCompletionBlockedForRemount(e) && !de()) {
                        FRef.current = e;
                        if (n !== e) {
                            o("HeroLogger").endHeroInteraction(e, se, "SUCCESS");
                        }
                        if (n != null) {
                            v.unhold(n, `${n}_${le}`);
                        }
                        D(ueRef.current, e, se);
                        x(ceRef.current, e, se);
                        ueRef.current = [];
                        ceRef.current = new Set;
                    }
                });
            }
        }, [
            U,
            v,
            le,
            se,
            de,
            isCompletionBlockedForRemount
        ]);
        if (__interactionUUID != null) {
            const pe = o("interaction-tracing-metrics").InteractionTracingMetricsCore.get(__interactionUUID);
            if (pe != null && pe.completed == null) {
                o("interaction-tracing-metrics").InteractionTracingMetricsCore.addFirstMarkerPoint(__interactionUUID, "HeroTrace_start", "AppTiming", (d || (d = r("performanceNow")))());
            }
        }
        const _e = useCallback(function() {
            const ZRef_current = ZRef.current;
            if (ZRef_current != null) {
                me(ZRef_current.interactionUUID, ZRef_current.interactionDesc, eeRef.current);
            }
        }, [
            me
        ]);
        const fe = useCallback(function(e, t, n) {
            const ZRef_current = ZRef.current;
            if (ZRef_current != null && FRef.current !== ZRef_current.interactionUUID) {
                const i = jRef.current === true && t === "New Interaction" && e !== null && ZRef_current.interactionUUID === e.interactionUUID;
                const l = S ? eeRef.current : n;
                if (l != null) {
                    v.unhold(l, `${l}_${le}`);
                }
                if (r("HeroTracingCoreConfig").removeHoldOnParentContextOnNewInteraction) {
                    v.unhold(ZRef_current.interactionUUID, `${ZRef_current.interactionUUID}_${le}`);
                }
                if (!i) {
                    if (l !== ZRef_current.interactionUUID) {
                        o("HeroLogger").endHeroInteraction(ZRef_current.interactionUUID, se, "ABORT", t);
                    } else if (l != null) {
                        o("interaction-tracing-metrics").InteractionTracingMetricsCore.addMetadata(l, "childInteractionAborted", 1);
                    }
                }
                if (e !== null && ZRef_current.interactionUUID === e.interactionUUID) {
                    o("HeroLogger").genHeroInteractionUUIDAndMarkStart(e.interactionUUID);
                }
            }
            if (ZRef_current != null) {
                D(ueRef.current, ZRef_current.interactionUUID, se);
                x(ceRef.current, ZRef_current.interactionUUID, se);
            }
            ueRef.current = [];
            ceRef.current = new Set;
            FRef.current = null;
            clearCompletionBlock();
            if (MRef.current) {
                MRef.current();
            }
            MRef.current = null;
            ZRef.current = e;
            eeRef.current = n;
            if (e !== null) {
                blockCompletionForRemount(e.interactionUUID);
                if (n != null) {
                    v.hold(n, se, `Sub Interaction:${e.interactionDesc}`, `${n}_${le}`);
                }
            }
        }, [
            blockCompletionForRemount,
            clearCompletionBlock,
            v,
            le,
            se
        ]);
        const geRef = useRef(null);
        const he = useCallback(function(e) {
            const QRef_current = QRef.current;
            if (QRef_current != null) {
                const n = O(QRef_current);
                if (!(!n && A(e))) {
                    releaseCompletionForCurrentRemount(_e);
                }
            }
        }, [
            releaseCompletionForCurrentRemount,
            _e
        ]);
        useEffect(function() {
            he(__interactionUUID);
        }, [
            he,
            __interactionUUID
        ]);
        useEffect(function() {
            return function() {
                const e = function() {
                    return fe(null, "Unmount", eeRef.current);
                };
                const t = zRef.current?.() === true;
                if (t) {
                    const n = QRef.current;
                    if (n == null) {
                        geRef.current = B(e);
                    } else {
                        blockCompletionForCurrentRemount();
                        W(n, e);
                    }
                } else {
                    e();
                }
            };
        }, [
            blockCompletionForCurrentRemount,
            fe
        ]);
        useLayoutEffect(function() {
            if (!(r("HeroTracingCoreConfig").enableResetCompletedFix === true && __interactionUUID != null && o("interaction-tracing-metrics").InteractionTracingMetricsCore.get(__interactionUUID)?.completed != null)) {
                let t = null;
                if (__interactionUUID != null) {
                    t = {
                        interactionDesc,
                        interactionUUID: __interactionUUID
                    };
                }
                fe(t, "New Interaction", N);
                if (__interactionUUID != null) {
                    me(__interactionUUID, interactionDesc, N);
                }
            }
        }, [
            interactionDesc,
            __interactionUUID,
            N,
            fe,
            me
        ]);
        useLayoutEffect(function() {
            if (__interactionUUID != null) {
                let e = U.getCurrentState().hidden;
                let t = U.getCurrentState().backgrounded;
                const n = U.subscribeToChanges(function({ hidden, backgrounded }) {
                    const i = e;
                    const l = t;
                    e = hidden;
                    t = backgrounded;
                    if (i !== hidden && hidden) {
                        fe({
                            interactionDesc,
                            interactionUUID: __interactionUUID
                        }, "Hidden", N);
                    } else if (i && !hidden || l && !backgrounded) {
                        const s = o("interaction-tracing-metrics").InteractionTracingMetricsCore.get(__interactionUUID);
                        if (s != null && s.completed == null && FRef.current === __interactionUUID) {
                            FRef.current = null;
                        }
                        me(__interactionUUID, interactionDesc, N);
                    }
                });
                if (__interactionUUID != null) {
                    me(__interactionUUID, interactionDesc, N);
                }
                return function() {
                    return n.remove();
                };
            }
        }, [
            U,
            __interactionUUID,
            interactionDesc,
            fe,
            me,
            N
        ]);
        const ye = useMemo(function() {
            var e = {
                consumeBootload: function(t) {
                    ceRef.current.add(t);
                },
                hold: function(r, a, i = "Hold", l, u) {
                    const t = l ?? o("hero-tracing-placeholder").HeroPlaceholderUtils.getSimpleUUID();
                    const d = new (s || (s = n("Promise")))(function() {});
                    (c || (c = o("PromiseAnnotate"))).setDisplayName(d, i);
                    e.suspenseCallback(r, t, a, new Set([
                        d
                    ]), u);
                    e.registerPlaceholder(r, t, a);
                    return t;
                },
                logHeroRender: function(t, n, r) {},
                logMetadata: function(t, n, r) {
                    const o = r[r.length - 1];
                    const a = YRef.current[o] ?? Object.create(null);
                    if (n != null) {
                        a[t] = n;
                    } else {
                        delete a[t];
                    }
                    YRef.current[o] = a;
                },
                logPageletVC: function(t, n, r, a, i) {
                    const e = i[i.length - 1];
                    const l = YRef.current[e];
                    let s = l != null ? babelHelpers.extends({}, l) : undefined;
                    if (s) {
                        o("interaction-tracing-metrics").InteractionTracingMetricsCore.addMountPointMetadata(t, e, s);
                    }
                    if (a != null) {
                        o("HeroLogger").measure(t, [].concat(i), "VCWithoutImage", `VCWithoutImage: ${i[i.length - 1]}`, Math.min(n, a), a, s);
                    }
                    if (r != null) {
                        s = Object.assign(s ?? babelHelpers.extends({}, null), P(JRef.current[e], r));
                        JRef.current[e] = {};
                        o("HeroLogger").measure(t, [].concat(i), "VC", `VC: ${i[i.length - 1]}`, Math.min(n, r), r, s);
                    }
                },
                logReactCommit: function(t, n, o, a, i, l, s) {
                    if ((u || (u = r("HeroTracingCoreDependencies"))).UserTimingUtils != null) {
                        (u || (u = r("HeroTracingCoreDependencies"))).UserTimingUtils.measureReactCommit(n, i, a);
                    }
                    if (FRef.current !== t && l) {
                        const d = s[s.length - 1];
                        const m = JRef.current[d] ?? Object.create(null);
                        const p = m[i] ?? Object.create(null);
                        p.commitDuration = a;
                        m[i] = p;
                        JRef.current[d] = m;
                    }
                },
                logReactPostCommit: function(t, n, o, a, i, l, s) {
                    if ((u || (u = r("HeroTracingCoreDependencies"))).UserTimingUtils != null) {
                        (u || (u = r("HeroTracingCoreDependencies"))).UserTimingUtils.measureReactPostCommit(n, a);
                    }
                    if (FRef.current !== t && l) {
                        const d = s[s.length - 1];
                        const m = JRef.current[d] ?? Object.create(null);
                        const p = m[i] ?? Object.create(null);
                        p.postCommitDuration = a;
                        m[i] = p;
                        JRef.current[d] = m;
                    }
                },
                logReactRender: function(t, n, r, a, i, actualDuration, baseDuration, u, c) {
                    if (FRef.current !== t && (o("HeroLogger").measure(t, [].concat(c), "ReactRender", `ReactRender: ${n}`, a, i, {
                        actualDuration,
                        baseDuration,
                        phase: r
                    }), u)) {
                        const m = c[c.length - 1];
                        const p = JRef.current[m] ?? Object.create(null);
                        const _ = p[i] ?? Object.create(null);
                        _.actualDuration = actualDuration;
                        _.baseDuration = baseDuration;
                        p[i] = _;
                        JRef.current[m] = p;
                    }
                },
                pageletStack: v.pageletStack,
                registerPlaceholder: function(t, n, r) {
                    const e = XRef.current[n];
                    if (MRef.current) {
                        MRef.current();
                    }
                    MRef.current = null;
                    if (e != null) {
                        e.shouldHold = true;
                        return;
                    }
                    const thenables = new Set;
                    XRef.current[n] = {
                        pageletStack: r,
                        shouldHold: true,
                        thenables
                    };
                    k(t, n, r, $(XRef.current[n]), t);
                },
                removePlaceholder: function(t, n) {
                    const e = XRef.current[n] != null;
                    if (e) {
                        const r = XRef.current[n];
                        delete XRef.current[n];
                        _e();
                        T(t, n, r.pageletStack, $(r));
                    }
                },
                suspenseCallback: function(t, n, r, thenables, boundaryName) {
                    const l = XRef.current[n];
                    const s = {
                        boundaryName,
                        pageletStack: r,
                        shouldHold: l?.shouldHold ?? false,
                        thenables
                    };
                    XRef.current[n] = s;
                    const u = $(s);
                    if (l == null) {
                        k(t, n, r, u);
                    }
                    thenables.forEach((e)=>{
                        if (!L.has(e)) {
                            L.add(e);
                            const a = (c || (c = o("PromiseAnnotate"))).getDisplayName(e) ?? "Promise";
                            const i = o("hero-tracing-placeholder").HeroPlaceholderUtils.getSimpleUUID();
                            E(t, i, a);
                            e.then(()=>{
                                I(t, i, r, a);
                            });
                        }
                    });
                    const d = $(l);
                    if (l != null && u !== d) {
                        T(t, n, r, d);
                        k(t, n, r, u);
                    }
                },
                unhold: function(n, r) {
                    e.removePlaceholder(n, r);
                }
            };
            return e;
        }, [
            v.pageletStack,
            _e
        ]);
        const Ce = useMemo(function() {
            return {
                consumeBootload: function(t) {
                    ceRef.current.add(t);
                },
                retainQuery: function(t) {
                    ueRef.current.push(t);
                },
                wrapPrepareQueryResource: function(t) {
                    return t();
                }
            };
        }, []);
        const be = o("HeroTracingPlatformDependenciesType").getHeroInteractionHostInstanceProps(_);
        const Component = r("HeroPagelet.react");
        const Component_1 = r("RelayProfilerContext").Provider;
        const Component_2 = o("hero-tracing-placeholder").HeroCurrentInteractionForLoggingContext.Provider;
        const Component_3 = o("hero-tracing-placeholder").HeroInteractionIDContext.Provider;
        const Component_4 = o("hero-tracing-placeholder").HeroInteractionContext.Context.Provider;
        return <Component_4 value={ye}><Component_3 value={__interactionUUID}><Component_2 value={ZRef}><Component_1 value={Ce}><Component isMutationRoot name={G} observeTextMutation={_.observeTextMutation} ref={t_ref} alwaysMarkMutationRootAsVisualChange={_.alwaysMarkMutationRootAsVisualChange ?? r("HeroTracingCoreConfig").alwaysMarkMutationRootAsVisualChange}>{function(t, N1) {
            if (_.renderTrackedDOMElement) {
                return <>{_.renderTrackedDOMElement(t, _.children)}<N1/></>;
            }
            return p.jsxs(r("HeroTracingPlatformDependencies").HostInstanceTrackableComponent, babelHelpers.extends({}, be, {
                ref: t,
                children: [
                    <N1/>,
                    _.children
                ]
            }));
        }}</Component></Component_1></Component_2></Component_3></Component_4>;
    }
    HeroInteraction.displayName = `${HeroInteraction.name} [from ${i.id}]`;
    HeroInteraction.displayName = "HeroInteraction";
    l.default = HeroInteraction;
}, 98);
__d("HeroPagelet.react", [
    "HeroReactProfiler.react",
    "HeroTracingPlatformDependencies",
    "hero-tracing-placeholder",
    "interaction-tracing-metrics",
    "mergeRefs",
    "performanceNow",
    "react"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = s;
    const { useCallback, useContext, useLayoutEffect, useMemo, useRef } = c;
    function HeroPagelet({ ref, alwaysMarkMutationRootAsVisualChange, children, isMutationRoot, name, observeTextMutation, onVisuallyComplete, pageletName, pageletType, position, trackTailLoad }) {
        const v = useContext(o("hero-tracing-placeholder").HeroInteractionContext.Context);
        const interactionUUID = useContext(o("hero-tracing-placeholder").HeroInteractionIDContext);
        const R = useMemo(function() {
            return babelHelpers.extends({}, v, {
                pageletStack: [].concat(v.pageletStack, [
                    name
                ])
            });
        }, [
            v,
            name
        ]);
        const L = useMemo(function() {
            return (e || (e = r("performanceNow")))();
        }, [
            interactionUUID
        ]);
        const E = useCallback(function() {
            if (interactionUUID != null) {
                o("interaction-tracing-metrics").InteractionTracingMetricsCore.addFirstMarkerPoint(interactionUUID, `Queue_${name}`, "VisualCompletion", L);
                o("interaction-tracing-metrics").InteractionTracingMetricsCore.addFirstMarkerPoint(interactionUUID, `Render_${name}`, "VisualCompletion", (e || (e = r("performanceNow")))());
            }
            return null;
        }, [
            interactionUUID,
            name,
            L
        ]);
        const k = useCallback(function(e, t) {
            if (interactionUUID != null) {
                R.logPageletVC(interactionUUID, L, e, t, R.pageletStack);
            }
            const r = interactionUUID != null ? o("interaction-tracing-metrics").InteractionTracingMetricsCore.get(interactionUUID)?.vcTracker?.startTime : null;
            onVisuallyComplete?.(e, t, r);
        }, [
            interactionUUID,
            R,
            onVisuallyComplete,
            L
        ]);
        const I = r("HeroTracingPlatformDependencies").useHostInstanceTracking({
            vcCallback: k,
            isMutationRoot,
            interactionUUID,
            name,
            pageletName,
            observeTextMutation,
            pageletType,
            position,
            trackTailLoad,
            alwaysMarkMutationRootAsVisualChange
        });
        const TRef = useRef(null);
        const DRef = useRef(null);
        const x = useMemo(function() {
            return r("mergeRefs")(I, ref, TRef);
        }, [
            I,
            ref
        ]);
        if (isMutationRoot === true && alwaysMarkMutationRootAsVisualChange === false && interactionUUID != null && DRef.current !== interactionUUID) {
            const P = o("interaction-tracing-metrics").InteractionTracingMetricsCore.get(interactionUUID)?.vcTracker;
            if (TRef.current != null && P) {
                P.observeMutation(TRef.current);
                DRef.current = interactionUUID;
            }
        }
        useLayoutEffect(function() {
            if (isMutationRoot === true && alwaysMarkMutationRootAsVisualChange === false && interactionUUID != null && DRef.current !== interactionUUID) {
                DRef.current = interactionUUID;
            }
        }, [
            alwaysMarkMutationRootAsVisualChange,
            DRef,
            interactionUUID,
            isMutationRoot
        ]);
        const Component = r("HeroReactProfiler.react");
        const Component_1 = o("hero-tracing-placeholder").HeroInteractionContext.Context.Provider;
        return <Component_1 value={R}><Component id={name} isPagelet>{children(x, E)}</Component></Component_1>;
    }
    HeroPagelet.displayName = `${HeroPagelet.name} [from ${i.id}]`;
    HeroPagelet.displayName = "HeroPagelet";
    l.default = HeroPagelet;
}, 98);
__d("HeroReactProfiler.react", [
    "HeroTracingCoreConfig",
    "addAnnotations",
    "hero-tracing-placeholder",
    "interaction-tracing",
    "interaction-tracing-metrics",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const u = e;
    const { useCallback, useContext } = u;
    const HeroReactProfilerNoOp = function({ children }) {
        return children;
    };
    HeroReactProfilerNoOp.displayName = "HeroReactProfilerNoOp";
    function HeroReactProfiler(e) {
        const t = o("react-compiler-runtime").c(19);
        const { children, id, isPagelet, logDurationToQPL } = e;
        const u = isPagelet === undefined ? false : isPagelet;
        const c = logDurationToQPL === undefined ? false : logDurationToQPL;
        const m = useContext(o("hero-tracing-placeholder").HeroInteractionContext.Context);
        const p = useContext(o("hero-tracing-placeholder").HeroInteractionIDContext);
        let _;
        if (t[0] !== m || t[1] !== p || t[2] !== u || t[3] !== c) {
            _ = function(t, n, a, i, l, s) {
                if (p != null) {
                    m.logReactRender(p, t, n, l, s, a, i, u, m.pageletStack);
                    o("interaction-tracing-metrics").InteractionTracingMetricsCore.addReactRender(p, t, l, s, a, i, n);
                    if (c) {
                        r("interaction-tracing").InteractionTracingCore.getPendingInteractions().forEach((e)=>{
                            const n = e.getTrace();
                            if (n) {
                                const s = t.replace(/_[0-9]+$/, "_{N}");
                                const u = `ReactRenderDuration_${s}`;
                                const c = (n.annotations.int?.[u] ?? 0) + a;
                                r("addAnnotations")(n.annotations, {
                                    int: {
                                        [u]: c
                                    }
                                });
                            }
                        });
                    }
                }
            };
            t[0] = m;
            t[1] = p;
            t[2] = u;
            t[3] = c;
            t[4] = _;
        } else {
            _ = t[4];
        }
        const onRender = _;
        let g;
        if (t[5] !== m || t[6] !== p || t[7] !== u) {
            g = function(t, n, r, o) {
                if (p != null) {
                    m.logReactCommit(p, t, n, r, o, u, m.pageletStack);
                }
            };
            t[5] = m;
            t[6] = p;
            t[7] = u;
            t[8] = g;
        } else {
            g = t[8];
        }
        const onCommit = g;
        let y;
        if (t[9] !== m || t[10] !== p || t[11] !== u) {
            y = function(t, n, r, o) {
                if (p != null) {
                    m.logReactPostCommit(p, t, n, r, o, u, m.pageletStack);
                }
            };
            t[9] = m;
            t[10] = p;
            t[11] = u;
            t[12] = y;
        } else {
            y = t[12];
        }
        const onPostCommit = y;
        let b;
        if (t[13] !== children || t[14] !== id || t[15] !== onCommit || t[16] !== onPostCommit || t[17] !== onRender) {
            b = <s.Profiler id={id} onCommit={onCommit} onPostCommit={onPostCommit} onRender={onRender}>{children}</s.Profiler>;
            t[13] = children;
            t[14] = id;
            t[15] = onCommit;
            t[16] = onPostCommit;
            t[17] = onRender;
            t[18] = b;
        } else {
            b = t[18];
        }
        return b;
    }
    HeroReactProfiler.displayName = "HeroReactProfiler";
    const _ = s.Profiler != null && r("HeroTracingCoreConfig").enableReactProfiling ? HeroReactProfiler : HeroReactProfilerNoOp;
    l.default = _;
}, 98);
__d("hero-tracing", [
    "HeroInteraction.react",
    "HeroLogger",
    "HeroPagelet.react",
    "HeroReactProfiler.react"
], function(t, n, r, o, a, i, l) {
    "use strict";
    l.HeroInteraction = r("HeroInteraction.react");
    l.HeroPagelet = r("HeroPagelet.react");
    l.HeroLogger = o("HeroLogger");
    l.HeroReactProfiler = r("HeroReactProfiler.react");
}, 98);
__d("HeroTracingDebugTracing", [
    "QPLEvent",
    "hero-tracing",
    "interaction-tracing-metrics",
    "performanceNow"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = 600;
    const c = 150;
    const d = 5;
    function m(e) {
        const r = e?.annotations.string?.tracePolicy;
        return `${(e != null && e.qplEvent ? (s || (s = o("QPLEvent"))).getMarkerId(e.qplEvent) : null) ?? "unknown"}:${typeof r === "string" ? r : "unknown"}`;
    }
    function p(e, t, n, r, a) {
        let u;
        if (n.interactionID !== e.traceId) {
            u = "OtherInteraction";
        } else if (t.has(n.placeholderID)) {
            u = "LatePlaceholder";
        } else if (!r) {
            u = "IncompletePlaceholder";
        } else {
            return;
        }
        const c = {};
        c.type = u;
        if (r != null && r.spanType) {
            c.spanType = r?.spanType;
        }
        if (u === "OtherInteraction") {
            const d = o("interaction-tracing-metrics").InteractionTracingMetricsCore.get(n.interactionID);
            c.interactionType = m(d);
        }
        const p = r?.endTime ?? a;
        const _ = r?.name ?? n.description ?? "[No Description]";
        o("interaction-tracing-metrics").InteractionTracingMetricsCore.addSubspan(e.traceId, u === "OtherInteraction" ? `OtherInteraction: ${_}` : _, u === "OtherInteraction" ? "HeroDebug" : "LatePlaceholder", n.startTime, Math.max(p, n.startTime), c);
    }
    const _ = "LatePlaceholder";
    function f(t, n, a) {
        if (!(n.heroLatePlaceholderDetection || n.heroDebugTracing)) {
            return;
        }
        const i = t.getTraceId();
        const l = o("interaction-tracing-metrics").InteractionTracingMetricsCore.get(i);
        if (!l) {
            return;
        }
        const s = l;
        const f = new Map;
        const g = new Map;
        const h = new Set;
        let y = 0;
        const C = o("hero-tracing").HeroLogger.subscribeToPlaceholders({
            onStart: function(t) {
                if (!(t.interactionID !== i && !n.heroDebugTracing)) {
                    if (t.interactionID === i && s.completed != null) {
                        h.add(t.placeholderID);
                    }
                    f.set(t.placeholderID, t);
                }
            },
            onEnd: function(t) {
                if (!(t.interactionID !== i && !n.heroDebugTracing)) {
                    g.set(t.placeholderID, t);
                }
            }
        });
        function b() {
            C();
            t.unlockInteractionLogging(_);
        }
        function v() {
            const t = (e || (e = r("performanceNow")))();
            const a = new Set;
            f.forEach((e)=>{
                const n = g.get(e.placeholderID);
                if (e.interactionID !== i) {
                    a.add(e.interactionID);
                }
                p(s, h, e, n, t);
            });
            if (n.heroDebugTracing) {
                a.forEach((otherInteractionID)=>{
                    const n = o("interaction-tracing-metrics").InteractionTracingMetricsCore.get(otherInteractionID);
                    if (n) {
                        o("interaction-tracing-metrics").InteractionTracingMetricsCore.addSubspan(i, `OtherInteraction: ${m(n)}`, "HeroDebug", Math.max(n.start, s.start), Math.min(n.completed ?? t, t), {
                            otherInteractionID
                        });
                    }
                });
            }
            b();
        }
        function S() {
            if (y === 0 || y <= d && Array.from(h).some((e)=>!g.has(e))) {
                setTimeout(S, y === 0 ? u : c);
                y++;
            } else {
                v();
            }
        }
        t.lockInteractionLogging(_);
        t.onCompleteSync(function() {
            if (!a()) {
                b();
                return;
            }
            if (n.heroLatePlaceholderDetection) {
                setTimeout(()=>{
                    S();
                });
            } else {
                v();
            }
        });
    }
    l.addHeroDebugging = f;
}, 98);
__d("InstrumentationAnalyzer", [
    "ReactStackUtils",
    "clearTimeout",
    "hero-tracing",
    "performanceNow",
    "setTimeoutAcrossTransitions"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = 2000;
    let u = 0;
    function c() {
        return u++;
    }
    const d = Object.freeze({
        NONE: null,
        MISSING_TRACE_POLICY: "1",
        INCOMPLETE_HERO_TRACE: "2",
        MISSING_DOM_MUTATIONS: "3",
        UNKNOWN_CANCEL_REASON: "4",
        MISSING_CANCEL_DETAILS: "5",
        LATE_SIGNALS_AFTER_TRACE: "6",
        USER_INPUT_DETECTED: "10",
        TIMEOUT_BY_INCOMPLETE_LOADING_STATE: "11"
    });
    class m {
        constructor(t, n, o, a, i, l, s, u, m){
            this.$8 = [];
            this.$4 = l;
            this.$3 = c();
            this.$2 = i;
            this.$5 = a;
            this.$6 = u;
            this.$7 = m;
            this.$2.markerStart(a, this.$3, (e || (e = r("performanceNow")))() + this.$4, {
                cancelOnUnload: true,
                trackedForLoss: true
            });
            this.$1 = {
                errorCode: d.NONE,
                status: "STARTED",
                string: {
                    cancelType: "",
                    loomRefId: null,
                    traceStatus: "STARTED",
                    tracePolicy: null,
                    traceType: n,
                    traceId: t,
                    lastPendingStage: null,
                    traceQPLEvent: String(o)
                },
                string_array: {},
                int: {
                    heroEndToVCWithoutImage: null,
                    hidden: 0
                },
                bool: {
                    heroTraceStarted: false,
                    heroTraceEnded: false,
                    hadMutationRoot: false,
                    hadDOMMutation: false,
                    hadPaintedElement: false,
                    hadLoadingStateElement: false,
                    hadSuspendedPlaceholder: false,
                    hadLatePlaceholder: false,
                    hadLateDOMMutation: false,
                    cancelWithoutPendingPlaceholder: false,
                    noSignalUntilTimeout: false,
                    userInputDetectedAfterTrace: false
                }
            };
            if (s != null) {
                this.setStringMetadata("tracePolicy", s);
            }
            this.setStringMetadata("traceType", n);
            this.setStringMetadata("traceId", t);
            this.setStringMetadata("traceQPLEvent", String(o));
        }
        endInteraction(n, a) {
            const t = this;
            this.$2.markerPoint(this.$5, "traceEnd", {
                timestamp: (e || (e = r("performanceNow")))() + this.$4,
                instanceKey: this.$3
            });
            const n_vcTracker = n.vcTracker;
            if (a === "SUCCESS") {
                var l = n_vcTracker?.subscribeExtraMutation(function(i, s, d, m) {
                    t.$1.bool.hadLateDOMMutation = i != null;
                    t.setBooleanMetadata("userInputDetectedAfterTrace", s);
                    if (d != null) {
                        t.setIntMetadata("lateDOMMutationX", d.left);
                        t.setIntMetadata("lateDOMMutationY", d.top);
                        t.setIntMetadata("lateDOMMutationWidth", d.right - d.left);
                        t.setIntMetadata("lateDOMMutationHeight", d.bottom - d.top);
                    }
                    if (m != null) {
                        t.setStringMetadata("lateDOMMutationType", m);
                    }
                    if (i != null) {
                        if (t.$6) {
                            const p = o("ReactStackUtils").getTrimmedReactStack(i, "HeroPagelet", t.$6);
                            if (p != null) {
                                t.setStringArrayMetadata("lateDOMMutationReactStack", p);
                            }
                        }
                        if (t.$7) {
                            const _ = t.$7(i, "HeroPagelet", "name");
                            if (_ != null) {
                                t.setStringArrayMetadata("lateDOMMutationPageletStack", _);
                            }
                        }
                        t.$2.markerPoint(t.$5, "lateDOMMutation", {
                            timestamp: (e || (e = r("performanceNow")))() + t.$4,
                            instanceKey: t.$3
                        });
                    }
                    l?.();
                    if (s || t.$1.bool.hadLateDOMMutation && t.$1.bool.hadLatePlaceholder) {
                        r("clearTimeout")(c);
                        if (u != null) {
                            u();
                        }
                        t.finalizeReporting(n, a);
                    }
                });
                var u = o("hero-tracing").HeroLogger.subscribeToPlaceholders({
                    onStart: function(i) {
                        if (i.interactionID === n.traceId && i.contextualInteractionUUID === n.traceId) {
                            t.$1.bool.hadLatePlaceholder = true;
                            t.$2.markerPoint(t.$5, "latePlaceholder", {
                                timestamp: (e || (e = r("performanceNow")))() + t.$4,
                                instanceKey: t.$3
                            });
                            if (i.description != null) {
                                t.setStringMetadata("latePlaceholderName", i.description);
                            }
                            if (u != null) {
                                u();
                            }
                            if (t.$1.bool.hadLateDOMMutation && t.$1.bool.hadLatePlaceholder) {
                                r("clearTimeout")(c);
                                if (l != null) {
                                    l();
                                }
                                t.finalizeReporting(n, a);
                            }
                        }
                    },
                    onEnd: function() {}
                });
                var c = r("setTimeoutAcrossTransitions")(function() {
                    t.setBooleanMetadata("noSignalUntilTimeout", true);
                    l?.();
                    u?.();
                    t.finalizeReporting(n, a);
                }, s);
            } else {
                if (n.tagSet.pendingPlaceholder == null) {
                    this.setBooleanMetadata("cancelWithoutPendingPlaceholder", true);
                    if (n.annotations.int?.incompleteLoadingElementsCount != null && n.annotations.int.incompleteLoadingElementsCount > 0) {
                        this.setStringMetadata("lastPendingStage", "loadingStateElement");
                    } else if (n.annotations.int?.incompleteImageCount != null && n.annotations.int.incompleteImageCount > 0) {
                        this.setStringMetadata("lastPendingStage", "imageLoad");
                    } else if (n.annotations.int?.incompleteLockCount != null && n.annotations.int.incompleteLockCount > 0) {
                        this.setStringMetadata("lastPendingStage", "incompleteLocks");
                    }
                } else {
                    this.setStringMetadata("lastPendingStage", "placeholder");
                }
                this.finalizeReporting(n, a);
            }
        }
        getTraceMetadata() {
            return this.$1;
        }
        setBooleanMetadata(t, n) {
            this.$1.bool[t] = n;
            this.$2.markerAnnotate(this.$5, {
                bool: {
                    [t]: n
                }
            }, {
                instanceKey: this.$3
            });
        }
        setStringMetadata(t, n) {
            this.$1.string[t] = n;
            this.$2.markerAnnotate(this.$5, {
                string: {
                    [t]: n
                }
            }, {
                instanceKey: this.$3
            });
        }
        setStringArrayMetadata(t, n) {
            this.$1.string_array[t] = n;
            this.$2.markerAnnotate(this.$5, {
                string_array: {
                    [t]: n
                }
            }, {
                instanceKey: this.$3
            });
        }
        setIntMetadata(t, n) {
            this.$1.int[t] = n;
            this.$2.markerAnnotate(this.$5, {
                int: {
                    [t]: n
                }
            }, {
                instanceKey: this.$3
            });
        }
        evaluateTraceCorrectness() {
            const e = {
                SUCCESS: 2,
                FAIL: 3,
                UNKNOWN: 51,
                STARTED: 51
            };
            this.$1.status = "SUCCESS";
            if (this.$1.string.tracePolicy == null) {
                this.$1.errorCode = d.MISSING_TRACE_POLICY;
                this.$1.status = "FAIL";
            }
            if (!this.$1.bool.heroTraceStarted || !this.$1.bool.heroTraceEnded) {
                this.$1.errorCode = d.INCOMPLETE_HERO_TRACE;
                this.$1.status = "FAIL";
            }
            if (!this.$1.bool.hadMutationRoot || !this.$1.bool.hadPaintedElement || !this.$1.bool.hadDOMMutation) {
                this.$1.errorCode = d.MISSING_DOM_MUTATIONS;
                this.$1.status = "FAIL";
            }
            if ((this.$1.string.traceStatus === "TIMEOUT" || this.$1.string.traceStatus.startsWith("CANCEL")) && !this.$1.string.cancelType) {
                this.$1.errorCode = d.UNKNOWN_CANCEL_REASON;
                this.$1.status = "FAIL";
            }
            if ((this.$1.string.traceStatus === "TIMEOUT" || this.$1.string.traceStatus.startsWith("CANCEL")) && this.$1.string.lastPendingStage == null) {
                this.$1.errorCode = d.MISSING_CANCEL_DETAILS;
                this.$1.status = "FAIL";
            }
            if (this.$1.string.traceStatus === "SUCCESS" && this.$1.bool.noSignalUntilTimeout && (this.$1.bool.hadLateDOMMutation || this.$1.bool.hadLatePlaceholder)) {
                this.$1.errorCode = d.LATE_SIGNALS_AFTER_TRACE;
                this.$1.status = "FAIL";
            }
            if (this.$1.bool.userInputDetectedAfterTrace === true) {
                this.$1.errorCode = d.USER_INPUT_DETECTED;
                this.$1.status = "UNKNOWN";
            }
            if (this.$1.string.traceStatus === "TIMEOUT" && this.$1.string.lastPendingStage === "loadingStateElement") {
                this.$1.errorCode = d.TIMEOUT_BY_INCOMPLETE_LOADING_STATE;
                this.$1.status = "FAIL";
            }
            return e[this.$1.status];
        }
        onReport(t) {
            this.$8.push(t);
        }
        finalizeReporting(n, o) {
            this.setStringMetadata("traceStatus", o);
            if (n.annotations.string?.tracePolicy != null) {
                this.setStringMetadata("tracePolicy", n.annotations.string.tracePolicy);
            }
            this.setBooleanMetadata("hadLatePlaceholder", this.$1.bool.hadLatePlaceholder);
            this.setIntMetadata("hidden", n.annotations.int?.hidden ?? 0);
            if (n.annotations.string?.loomRefId != null) {
                this.setStringMetadata("loomRefId", n.annotations.string.loomRefId);
            }
            this.setBooleanMetadata("hadLateDOMMutation", this.$1.bool.hadLateDOMMutation);
            this.setBooleanMetadata("hadLoadingStateElement", n.markerPoints.loadingState_start != null);
            this.setBooleanMetadata("heroTraceStarted", n.markerPoints.HeroTrace_start != null);
            this.setBooleanMetadata("heroTraceEnded", n.markerPoints.HeroTrace_end != null);
            if (n.markerPoints.HeroTrace_end != null && n.markerPoints.vcWithoutImage != null) {
                const m = n.markerPoints.HeroTrace_end.timestamp;
                const p = n.markerPoints.vcWithoutImage.timestamp;
                this.setIntMetadata("heroEndToVCWithoutImage", Math.round(p - m));
            }
            if (n.markerPoints.HeroTrace_end != null) {
                this.$2.markerPoint(this.$5, "HeroTrace_end", {
                    timestamp: n.markerPoints.HeroTrace_end.timestamp + this.$4,
                    instanceKey: this.$3
                });
            }
            if (n.markerPoints.vcWithoutImage != null) {
                this.$2.markerPoint(this.$5, "vcWithoutImage", {
                    timestamp: n.markerPoints.vcWithoutImage.timestamp + this.$4,
                    instanceKey: this.$3
                });
            }
            this.setBooleanMetadata("hadMutationRoot", n.annotations.int?.mutationRootCount != null ? n.annotations.int.mutationRootCount > 0 : false);
            this.setBooleanMetadata("hadPaintedElement", n.annotations.int?.paintedElementCount != null ? n.annotations.int.paintedElementCount > 0 : false);
            this.setBooleanMetadata("hadDOMMutation", n.annotations.int?.mutatedElementCount != null ? n.annotations.int.mutatedElementCount > 0 : false);
            if (n.annotations.string?.cancelType != null) {
                this.setStringMetadata("cancelType", n.annotations.string.cancelType);
            }
            let _ = false;
            for(const f in n.subSpans){
                if (f.startsWith("Placeholder Wait:")) {
                    _ = true;
                }
            }
            this.setBooleanMetadata("hadSuspendedPlaceholder", _);
            const g = this.evaluateTraceCorrectness();
            this.$2.markerEnd(this.$5, g, this.$3, (e || (e = r("performanceNow")))() + this.$4);
            const h = [].concat(this.$8);
            this.$8 = [];
            h.forEach((e)=>{
                e(n);
            });
        }
    }
    function p(e, t, n, r, o, a, i, l, s) {
        return new m(e, t, n, r, o, a, i, l, s);
    }
    l.MeasurementErrorCode = d;
    l.InstrumentationAnalyzer = m;
    l.createInstrumentationAnalyzerInstance = p;
}, 98);
__d("InteractionTracingLogger", [
    "performanceNow"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = [
        "reactStack"
    ];
    let s;
    const u = new RegExp(/^late_mutation\/(un)?expected_([0-9]+)$/);
    const c = 4;
    function d(e, t, commitSet, r) {
        e.QuickPerformanceLogger.markerAnnotate(t, {
            int: {
                numReactCommit: commitSet.size
            }
        }, {
            instanceKey: r
        });
    }
    function m(e, t, n, r, o) {
        e.QuickPerformanceLogger.markerAnnotate(t, {
            string_array: {
                [n]: r
            }
        }, {
            instanceKey: o
        });
    }
    function p(e, t, n, __key, o, a) {
        e.QuickPerformanceLogger.markerPoint(t, n, {
            data: __key != null ? {
                string: {
                    __key
                }
            } : null,
            instanceKey: o,
            timestamp: a
        });
    }
    function _(e, t, n, r) {
        e.QuickPerformanceLogger.markerAnnotate(t, n.annotations, {
            instanceKey: r
        });
        for(const o in n.tagSet){
            const a = Array.from(n.tagSet[o]).sort();
            m(e, t, o, a, r);
        }
    }
    function f(t, n, r, markerPoints, a) {
        for(const i in markerPoints){
            let l;
            const s = markerPoints[i];
            const { data, timestamp, type } = s;
            if (!(!t.allowedQPLPointTypes.has(type) || (l = t.qplPointFilterRegex) != null && l.exec(i))) {
                let _ = data;
                if (u.test(i) && i !== "late_mutation/unexpected_1" && data?.reactStack != null) {
                    const f = data.reactStack;
                    const g = babelHelpers.objectWithoutPropertiesLoose(data, e);
                    _ = g;
                }
                p(n, r, i, _ && Object.keys(_).length ? JSON.stringify(_) : undefined, a, timestamp + t.qplBaseTimestamp);
            }
        }
    }
    function g(e, t, n, subSpans, o) {
        for(const a in subSpans){
            let i;
            if (!((i = e.qplPointFilterRegex) != null && i.exec(a))) {
                for(let l = 0; l < subSpans[a].length; l++){
                    const s = subSpans[a][l];
                    const { data, end, start, type } = s;
                    if (e.allowedQPLPointTypes.has(type)) {
                        const f = subSpans[a].length === 1 ? a : `${a}_${l >= c ? "MAX" : l + 1}`;
                        p(t, n, `${f}_start`, undefined, o, start + e.qplBaseTimestamp);
                        p(t, n, `${f}_end`, Object.keys(data).length ? JSON.stringify(data) : undefined, o, end + e.qplBaseTimestamp);
                    }
                }
            }
        }
    }
    function h(e, t, n, r, o) {
        const a = {
            crashResilient: e.crashResilient,
            type: e.qplMarkerType,
            enableE2ETracing: e.qplEnableE2ETracing
        };
        t.QuickPerformanceLogger.markerStart(n, o, r + e.qplBaseTimestamp, a);
    }
    function y(e, t, n, o, a, i) {
        d(t, n, a.commitSet, i);
        _(t, n, a, i);
        f(e, t, n, a.markerPoints, i);
        g(e, t, n, a.subSpans, i);
        const l = e.qplActionMap[o];
        const u = e.qplEndMarkerPointName != null && a.markerPoints[e.qplEndMarkerPointName] != null ? a.markerPoints[e.qplEndMarkerPointName].timestamp : (s || (s = r("performanceNow")))();
        if (o === "DROPPED") {
            t.QuickPerformanceLogger.markerDrop(n, i);
        } else {
            t.QuickPerformanceLogger.markerEnd(n, l, i, u + e.qplBaseTimestamp);
        }
        return l;
    }
    function C(e, t) {
        if (e.annotations.int?.isError === 1) {
            return "FAIL";
        }
        if (e.wasOffline) {
            return "OFFLINE";
        }
        if (e.annotations.string?.cancelType === "dropped") {
            return "DROPPED";
        }
        if (e.annotations.string?.cancelType === "timeout") {
            return "TIMEOUT";
        }
        if (t === true && e.wasCanceled && e.annotations.string?.cancelType === "navigation") {
            return "CANCEL_NAVIGATION";
        }
        if (t === true && e.wasCanceled && e.annotations.string?.cancelType === "background") {
            return "CANCEL_BACKGROUND";
        }
        if (e.wasCanceled || e.annotations.int?.aborted === 1) {
            return "CANCEL";
        }
        return "SUCCESS";
    }
    l.initQPL = h;
    l.logQPL = y;
    l.getTraceStatus = C;
}, 98);
__d("InteractionCloning", [
    "InteractionTracingLogger",
    "interaction-tracing-metrics",
    "uuidv4"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const n = e.annotations.string?.clonedInteractionId;
        if (n != null) {
            return o("interaction-tracing-metrics").InteractionTracingMetricsCore.get(n);
        }
        return null;
    }
    function s(t, n, r) {
        const a = e(t);
        if (a != null) {
            if (a.annotations === t.annotations) {
                t.annotations = babelHelpers.extends({}, t.annotations);
            }
            if (a.annotations.string === t.annotations.string) {
                t.annotations.string = babelHelpers.extends({}, t.annotations.string);
            }
        }
        o("interaction-tracing-metrics").InteractionTracingMetricsCore.addAnnotation(t.traceId, n, r);
    }
    function u(t, n, r) {
        const a = e(t);
        if (a != null && a.tagSet === t.tagSet) {
            t.tagSet = babelHelpers.extends({}, t.tagSet);
        }
        o("interaction-tracing-metrics").InteractionTracingMetricsCore.addTag(t.traceId, n, r);
    }
    function addMarkerPoint_cloneSafe(t, n, r, a) {
        const i = e(t);
        if (i != null && i.markerPoints === t.markerPoints) {
            t.markerPoints = babelHelpers.extends({}, t.markerPoints);
        }
        o("interaction-tracing-metrics").InteractionTracingMetricsCore.addMarkerPoint(t.traceId, n, r, a);
    }
    function addSubspan_cloneSafe(t, n, r, a, i, l) {
        const s = e(t);
        if (s != null && s.subSpans === t.subSpans) {
            t.subSpans = babelHelpers.extends({}, t.subSpans);
        }
        o("interaction-tracing-metrics").InteractionTracingMetricsCore.addSubspan(t.traceId, n, r, a, i, l);
    }
    function cloneAndStart(e, t, n, a, i, l) {
        const m = r("uuidv4")();
        let p = o("interaction-tracing-metrics").InteractionTracingMetricsCore.addTracedInteraction(m, e.start, function() {});
        p = Object.assign(p, e);
        p.traceId = m;
        p.annotations = babelHelpers.extends({}, e.annotations);
        p.annotations.string = babelHelpers.extends({}, e.annotations.string);
        o("interaction-tracing-metrics").InteractionTracingMetricsCore.addAnnotation(m, "clonedInteractionId", e.traceId);
        s(p, "interactionId", m);
        u(p, "traceID", m);
        p.qplEvent = t;
        p.debugName = n;
        o("InteractionTracingLogger").initQPL(a, i, t, p.start, l);
        const _ = i.WebLoom ? i.WebLoom.startTraceManually(p.traceId, t, p.start, 1, p.tracePolicy ?? "unknown.cloned_interaction", p.interactionClass ?? "contingent") : null;
        const f = _?.traceReferenceId;
        if (f != null) {
            s(p, "loomRefId", f);
        }
        return p;
    }
    function log(e, t, n, r, a) {
        const l = o("InteractionTracingLogger").getTraceStatus(e, r.qplActionCancelOnNavigation);
        const s = o("InteractionTracingLogger").logQPL(r, a, t, l, e, n);
        a.WebLoom?.endTraceForInteraction(e, s);
    }
    const _ = {
        addMarkerPoint_cloneSafe,
        addSubspan_cloneSafe,
        clone: function(t, n, r, o) {
            const e = t.getTrace();
            if (e != null) {
                const a = t.getConfigAndDependencies();
                const { cfg, deps } = a;
                const s = cloneAndStart(e, n, r, cfg, deps, o);
                log(s, n, o, cfg, deps);
            }
        },
        cloneAndStart,
        log
    };
    l.default = _;
}, 98);
__d("TraceGroupConstants", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = "Comet Performance";
    i.COMET_PERFORMANCE_TRACE_GROUP = e;
}, 66);
__d("InteractionTracingUserTimingUtils", [
    "TraceGroupConstants"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e({ UserTimingUtils }, t, n, r, a) {
        if (!(UserTimingUtils == null || r.enableUserTimings !== true)) {
            const l = t.traceId.slice(0, 3);
            const f = `${o("TraceGroupConstants").COMET_PERFORMANCE_TRACE_GROUP} - ${n}(#id=${a})`;
            s(UserTimingUtils, t, n, l, f);
            u(UserTimingUtils, t, l, r, f);
            c(UserTimingUtils, t, l, r, f);
            d(UserTimingUtils, t, l, f);
            m(UserTimingUtils, t, l, f);
            p(UserTimingUtils, t, l, r, f);
            _(UserTimingUtils, t, l, f);
        }
    }
    function s(UserTimingUtils, t, n, r, o) {
        if (t.completed != null) {
            UserTimingUtils.measureModern(`Interaction(${n})[${r}]`, {
                end: t.completed,
                start: t.start
            }, "Interaction Timeline", o);
        }
        if (t.markerPoints.visuallyComplete) {
            UserTimingUtils.measureModern(`VisuallyComplete(${n})[${r}]`, {
                end: t.markerPoints.visuallyComplete.timestamp,
                start: t.start
            }, "Interaction Timeline", o);
        }
        if (t.markerPoints.vcWithoutImage) {
            UserTimingUtils.measureModern(`VCWithoutImage(${n})[${r}]`, {
                end: t.markerPoints.vcWithoutImage.timestamp,
                start: t.start
            }, "Interaction Timeline", o);
        }
        if (t.markerPoints.heroTrace_start) {
            UserTimingUtils.measureModern(`HeroTraceStart[${r}]`, {
                end: t.markerPoints.heroTrace_start.timestamp,
                start: t.start
            }, "Interaction Timeline", o);
        }
        if (t.markerPoints.heroTrace_end) {
            const a = t.markerPoints.heroTrace_end.timestamp;
            UserTimingUtils.measureModern(`HeroTraceEnd[${r}]`, {
                end: a,
                start: t.start
            }, "Interaction Timeline", o);
        }
    }
    function u(UserTimingUtils, t, n, r, o) {
        if (!(r.enableUserTimingsVerbose !== true || !t.vcStateLog)) {
            t.vcStateLog.forEach(([a, i], r)=>{
                UserTimingUtils.measureModern(`${r}[${n}]`, {
                    end: i,
                    start: a
                }, "VC Tracker State", o);
            });
        }
    }
    function c(UserTimingUtils, t, n, r, trackGroup) {
        if (!(r.enableUserTimingsVerbose !== true || !t.vcMutationLog)) {
            t.vcMutationLog.forEach((t)=>{
                const a = t.finalState ?? "";
                const i = `${t.mutationType}/finalState=${a}/id=${t.veid}[${n}]`;
                const properties = [];
                for (const [u, c] of Object.entries(t)){
                    if (c != null) {
                        properties.push([
                            u,
                            String(JSON.stringify(c))
                        ]);
                    }
                }
                UserTimingUtils.measureModern(i, {
                    detail: {
                        devtools: {
                            dataType: "track-entry",
                            properties,
                            track: "VC DOM Mutation",
                            trackGroup
                        }
                    },
                    end: t.paintTime,
                    start: t.mutationTime
                });
            });
        }
    }
    function d(UserTimingUtils, t, n, r) {
        const o = (a)=>{
            const o = t.reactRender[a];
            o.forEach((t, o)=>{
                const i = `${String.fromCodePoint(9883)} ${a}[${t.phase}]#${o}[${n}]`;
                UserTimingUtils.measureModern(i, {
                    end: t.end,
                    start: t.start
                }, "React Render", r);
            });
        };
        for(const a in t.reactRender){
            o(a);
        }
    }
    function m(UserTimingUtils, t, n, r) {
        for(const o in t.payloadTimings){
            const a = t.payloadTimings[o];
            const i = `${a.payloadType}:${o}[${n}]`;
            UserTimingUtils.measureModern(i, {
                end: a.end,
                start: a.start
            }, "Payload Timing", r);
        }
    }
    function p(UserTimingUtils, t, n, r, o) {
        if (r.enableUserTimingsVerbose === true) {
            const a = new Set([
                "RelayFlush",
                "HeroRendering",
                "ReactRender",
                "VC",
                "VCWithoutImage",
                "Error"
            ]);
            const i = (i)=>{
                const r = t.subSpans[i];
                let l = null;
                let s = null;
                r.forEach((t, r)=>{
                    if (t.type === "HeroTracing") {
                        const c = t.data?.spanType;
                        const d = typeof c === "string" ? c : "HeroTracing";
                        if (a.has(d)) {
                            const m = d === "VC" || d === "VCWithoutImage" ? "Pagelet" : d;
                            let p = t.start;
                            if (l !== null && s !== null && t.start === l) {
                                p = s;
                            }
                            const _ = `${i}[${m}]#${r}[${n}]`;
                            UserTimingUtils.measureModern(_, {
                                end: t.end,
                                start: p
                            }, "HeroTracing", o);
                            l = t.start;
                            s = t.end;
                        }
                    }
                });
            };
            for(const l in t.subSpans){
                i(l);
            }
        }
    }
    function _(UserTimingUtils, t, n, r) {
        for(const o in t.placeholderMap){
            const a = t.placeholderMap[o];
            a.forEach((t, o)=>{
                if (t.endTime != null) {
                    const l = t.description ?? "unknown";
                    const s = t.spanType ?? "unknown";
                    const u = `${l}[${s}]#${o}[${n}]`;
                    UserTimingUtils.measureModern(u, {
                        end: t.endTime,
                        start: t.startTime
                    }, "Placeholders", r);
                }
            });
        }
    }
    l.markInteraction = e;
}, 98);
__d("NetworkStatusTracker", [
    "NetworkStatus"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let online = r("NetworkStatus").isOnline();
    const s = new Set;
    function u(t) {
        if (online !== t) {
            online = t;
            s.forEach((t)=>{
                t({
                    online
                });
            });
        }
    }
    const c = {
        emit: function(t) {
            u(t);
        },
        isOnline: function() {
            return online;
        },
        onChange: function(t) {
            s.add(t);
            return {
                remove: function() {
                    s.delete(t);
                }
            };
        }
    };
    r("NetworkStatus").onChange(function(e) {
        c.emit(e.online);
    });
    l.default = c;
}, 98);
__d("getReactComponentStackFromDOMElement_THIS_CAN_BREAK", [], function(t, n, r, o, a, i) {
    "use strict";
    function e(e) {
        const t = Object.keys(e).find((e)=>e.startsWith("__reactFiber$"));
        if (t == null) {
            return null;
        }
        return e[t];
    }
    function l(e) {
        const n = e.displayName ?? e.name;
        if (n == null) {
            return null;
        }
        const r = n.match(/.*\[from (.*)\.react\]/);
        return r && r[1] || n;
    }
    function s(t) {
        try {
            const n = [];
            for(let r = e(t); r;){
                const o = r.type;
                if (o == null || typeof o === "string") {
                    r = r.return;
                    continue;
                }
                let a = l(o);
                if (a == null && o.render != null) {
                    a = l(o.render);
                }
                if (a != null && a !== "") {
                    n.push(a);
                }
                r = r.return;
            }
            return n;
        } catch (e) {
            return null;
        }
    }
    i.default = s;
}, 66);
__d("reactComponentNameSemanticsCheck", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = [
        "Animated(div)",
        "Box",
        "Child",
        "Cell",
        "CometImage",
        "ComponentLoader",
        "Div",
        "DirectBadgeIconNoMemo",
        "FocusWithinHandler",
        "LegacyHidden",
        "Path",
        "SearchCometGlobalTypeaheadWithBackButtonFocus",
        "StrictMode",
        "Svg",
        "WebView",
        "GeoBaseText",
        "FocusGroup",
        "FocusTable",
        "MDSText",
        "CometAppViewStack",
        "CometImageFromIXValue",
        "CometPrerenderer",
        "CometOnOutsideClick",
        "CometToast",
        "PolarisNavigationIcons",
        /CometHideableComponent/,
        /LazyLoadEntryPointContainer/,
        /relay-hooks/,
        /CommandWrapper/,
        /ScrollView/,
        /Layout/,
        /Base$/,
        /Boundary$/,
        /LoadingState$/,
        /FocusManager/,
        /Column$/,
        /Strategy$/,
        /Typeahead.*Strategy/,
        /CometList_/,
        /CometSSR/,
        /IGCore/,
        /^ActorHovercard/,
        /^Base/,
        /^CometHero/,
        /^FDS/,
        /^Hero/,
        /^IGDS/,
        /^XDS/,
        /^deferredLoadComponent/,
        /^html\./,
        /^t[d]$/,
        /Container$/,
        /Context$/,
        /Entities$/,
        /Factory$/,
        /Focus.*Region/,
        /Grid$/,
        /HideLayer/,
        /Icon$/,
        /Impl$/,
        /InputButton$/,
        /Item$/,
        /ItemSelectable/,
        /KeyCommands$/,
        /Link$/,
        /ListCell/,
        /Logger$/,
        /MitigationNode$/,
        /OnEscape/,
        /Overlay$/,
        /OverlayInternal$/,
        /Placeholder$/,
        /Pressable/,
        /Provider$/,
        /Provider_/,
        /ReactWarnings/,
        /Ref$/,
        /Refs$/,
        /Relay$/,
        /Renderer$/,
        /Resolver$/,
        /Root$/,
        /Routes$/,
        /Row$/,
        /SVG/,
        /ScrollableArea/,
        /Theme$/,
        /Tooltip/,
        /Trigger$/,
        /Typeahead/,
        /Virtualization$/,
        /Wrapper$/,
        /\.svg$/
    ];
    const l = new Set(Array.from(e).filter((e)=>typeof e === "string"));
    const s = Array.from(e).filter((e)=>e instanceof RegExp);
    const u = [
        "ChatTab",
        "Comment",
        "Composer",
        "Feed",
        "Story",
        "Search",
        "Reel",
        "Profile",
        "Message"
    ];
    const c = new Set(Array.from(u).filter((e)=>typeof e === "string"));
    const d = Array.from(u).filter((e)=>e instanceof RegExp);
    function m(e) {
        let t = e;
        if (e.includes(" [")) {
            t = e.split(" [")[0];
        }
        t = t.trim();
        if (t.length <= 2) {
            return true;
        }
        if (c.has(t) || d.some((e)=>e.test(t))) {
            return false;
        }
        return l.has(t) || s.some((e)=>e.test(t));
    }
    const p = [
        "MessageList",
        "MWXText",
        "MDSText",
        "MWChatContact",
        "MWLSChatTabHeader"
    ];
    const _ = new Set(Array.from(p).filter((e)=>typeof e === "string"));
    const f = Array.from(p).filter((e)=>e instanceof RegExp);
    function g(e) {
        const t = e.trim();
        return _.has(t) || f.some((e)=>e.test(t));
    }
    i.isReactComponentNameMeaningless = m;
    i.isReactComponentTextBlocked = g;
}, 66);
__d("getReactComponentName", [
    "FBLogger",
    "getErrorSafe",
    "getReactComponentStackFromDOMElement_THIS_CAN_BREAK",
    "reactComponentNameSemanticsCheck"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
        if (e == null) {
            return null;
        }
        for (const t of e){
            if (!o("reactComponentNameSemanticsCheck").isReactComponentNameMeaningless(t)) {
                return t;
            }
        }
        return null;
    }
    function s(t) {
        if (t == null) {
            return null;
        }
        try {
            const n = r("getReactComponentStackFromDOMElement_THIS_CAN_BREAK")(t);
            return e(n);
        } catch (error) {
            r("FBLogger")("react-component-name-resolver").catching(r("getErrorSafe")(error)).mustfix("Failed to get react component name");
        }
    }
    l.getAllowListedComponentName = e;
    l.getMeaningfulReactComponentName = s;
}, 98);
__d("getWrapperComponentPropArrayFromDOMElement_THIS_CAN_BREAK", [], function(t, n, r, o, a, i) {
    "use strict";
    function e(e) {
        const t = Object.keys(e).find((e)=>e.startsWith("__reactFiber$"));
        if (t == null) {
            return null;
        }
        return e[t];
    }
    function l(e, t) {
        if (e.pendingProps != null && typeof e.pendingProps[t] === "string") {
            return e.pendingProps[t];
        }
        if (e.memoizedProps != null && typeof e.memoizedProps[t] === "string") {
            return e.memoizedProps[t];
        }
        return null;
    }
    function s(e) {
        const n = e.displayName ?? e.name;
        if (n == null) {
            return null;
        }
        const r = n.match(/.*\[from (.*)\.react\]/);
        return r && r[1] || n;
    }
    function u(t, n, r) {
        try {
            for(var o = e(t), a = []; o;){
                const i = o.type;
                if (i == null || typeof i === "string") {
                    o = o.return;
                    continue;
                }
                let u = s(i);
                if (u == null && i.render != null) {
                    u = s(i.render);
                }
                if (u === n) {
                    const c = l(o, r);
                    if (c != null) {
                        a.push(c);
                    }
                }
                o = o.return;
            }
            return a;
        } catch (e) {
            return [];
        }
    }
    i.default = u;
}, 66);
__d("getVisualCompletionDefaultConfig", [
    "JSScheduler",
    "cr:13699",
    "getReactComponentName",
    "getReactComponentStackFromDOMElement_THIS_CAN_BREAK",
    "getWrapperComponentPropArrayFromDOMElement_THIS_CAN_BREAK",
    "gkx",
    "justknobx"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const bypass_detached_element = r("gkx")("12291");
    const intersection_observer_timeout = r("gkx")("12291") ? 500 : null;
    function c() {
        let t;
        return {
            SSRInjectedElements: n("cr:13699"),
            bypass_detached_element,
            check_css_bg_elements: !(t = r("gkx"))("13291"),
            defer_expensive_calculation: function(n) {
                (e || (e = o("JSScheduler"))).scheduleLoggingPriCallback(n);
            },
            enableInstrumentationCorrectnessLogging: t("3739"),
            getMeaningfulReactComponentName: o("getReactComponentName").getMeaningfulReactComponentName,
            getReactComponentStackFromDOMElement: r("getReactComponentStackFromDOMElement_THIS_CAN_BREAK"),
            getWrapperComponentPropArrayFromDOMElement: r("getWrapperComponentPropArrayFromDOMElement_THIS_CAN_BREAK"),
            intersection_observer_timeout,
            invisibleStyleMemoization: t("12293"),
            useIntersectionObserverForVisibility: t("21211"),
            observeTextMutation: false,
            retain_element_reference: r("gkx")("4022") || r("gkx")("12296"),
            use_image_download_tracker: r("gkx")("6123"),
            log_contentful_paint_in_ht_root: false,
            log_lcp_image_url: r("gkx")("9738"),
            log_lcp_metadata: r("gkx")("12297"),
            log_pagelet_size: r("gkx")("19108"),
            logLateMutationReactStack: r("gkx")("20981"),
            onlyLogLateMutationAfterSSRPaint: function() {
                return r("justknobx")._("3483");
            },
            logVCReactStack: r("gkx")("20982"),
            logHeroHoldTrigger: r("gkx")("23923"),
            logLCPReactStack: r("gkx")("6775"),
            enable_background_loading_state_polling: r("gkx")("766")
        };
    }
    l.default = c;
}, 98);
__d("VisualCompletionAdapter", [
    "QPLEvent",
    "ReactStackUtils",
    "WebAPIs",
    "addAnnotations",
    "getVisualCompletionDefaultConfig",
    "hero-tracing-placeholder",
    "interaction-tracing-metrics",
    "performanceNow"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = "default";
    const c = new Map;
    const d = 4;
    const m = 2048;
    const p = "[truncated]";
    function _(e) {
        const t = new Set;
        e.slice().sort((e, t)=>t.endTime - e.endTime).forEach(({ description })=>{
            t.add(description);
        });
        for(var n = Array.from(t), r = JSON.stringify(p).length + 1, o = [], a = 2, i = 0; i < n.length; i++){
            const l = JSON.stringify(n[i]).length + (o.length > 0 ? 1 : 0);
            const s = i < n.length - 1 ? r : 0;
            if (a + l + s > m) {
                o.push(p);
                break;
            }
            o.push(n[i]);
            a += l;
        }
        return o;
    }
    function f(e, t, n) {
        for(const r in e){
            e[r].forEach((e)=>{
                const placeholderUUID = e.data.placeholderUUID;
                if (e.data.spanType === "PlaceholderWait" && typeof placeholderUUID === "string" && t.has(placeholderUUID) && e.start <= n) {
                    e.data.vcBlocking = true;
                }
            });
        }
    }
    function g(e, t) {
        const r = o("interaction-tracing-metrics").InteractionTracingMetricsCore.get(e);
        r?.vcTracker?.observeMutation(t);
    }
    function h(t, n, interactionId, i) {
        const l = new Map;
        t.forEachNavigationVCTrace(function(t, u) {
            let p = c.get(u);
            if (p == null) {
                p = new Map;
                c.set(u, p);
            }
            const _ = (p.get(n) ?? 0) + 1;
            p.set(n, _);
            if (!(_ >= d)) {
                l.set(t.traceID, _);
                t.addMarkerPoint(`${n}_${_}_start`, (s || (s = r("performanceNow")))(), {
                    interactionId,
                    qplEvent: (e || (e = o("QPLEvent"))).getMarkerId(i)
                });
            }
        });
        if (l.size === 0) {
            return function() {};
        }
        return function() {
            t.forEachNavigationVCTrace(function(e, t) {
                const o = l.get(e.traceID);
                if (o != null) {
                    e.addMarkerPoint(`${n}_${o}_end`, (s || (s = r("performanceNow")))());
                }
            });
        };
    }
    function y(e, t, n, o, a, i, l) {
        const s = r("getVisualCompletionDefaultConfig")();
        if (i != null) {
            Object.assign(s, i);
        }
        const d = new e.VisualCompletionTracing(n, a, t, o, s, l);
        d.onComplete(function(t) {
            e.setLastNavigationVCReport(t, l);
        });
        e.setLastNavigationVCReport(null, l);
        e.setCurrentNavigationVCTrace(d, l);
        c.delete(l ?? u);
        return d;
    }
    function C(e, t, n, o, a) {
        const i = r("getVisualCompletionDefaultConfig")();
        if (a != null) {
            Object.assign(i, a);
        }
        return new e.VisualCompletionTracing(n, 0, t, o, i);
    }
    function b(e, t, n) {
        const t_vcTracker = t.vcTracker;
        t_vcTracker?.onComplete(function(e) {
            if (e) {
                t.vcStateLog = e.stateLog;
                const o = [];
                t_vcTracker.visualChangeRecordList.forEach(({ record })=>{
                    o.push(record);
                });
                t.vcMutationLog = o;
                t.hasVcReport = true;
                for(const a in e.annotations){
                    for(const i in e.annotations[a]){
                        t.annotations[a][i] = e.annotations[a][i];
                    }
                }
                e.markerPoints.forEach(({ data, timestamp }, n)=>{
                    t.markerPoints[n] = {
                        data,
                        timestamp,
                        type: "VisualCompletion"
                    };
                });
                e.tagSet.forEach((e, t)=>{
                    e.forEach((e)=>{
                        n.addTag(t, e);
                    });
                });
            }
        });
    }
    function v(e, t) {
        const i = e.config?.getReactComponentStackFromDOMElement;
        const l = e.config?.getWrapperComponentPropArrayFromDOMElement;
        if (i && e.config.logVCReactStack) {
            e.onBeforeComplete(function(e, n) {
                if (e) {
                    if (t.annotations.string?.cancelType != null && n.size() > 0) {
                        const l = Array.from(n.keys())[0];
                        const s = o("ReactStackUtils").getTrimmedReactStack(l, "HeroPagelet", i);
                        if (s != null) {
                            r("addAnnotations")(e.annotations, {
                                string: {
                                    incompleteLoadingElementReactStack: s.join(",")
                                }
                            });
                        }
                    }
                    [
                        "vcWithoutImage",
                        "visuallyComplete"
                    ].forEach((t)=>{
                        const n = e.markerPoints.get(t);
                        const r = o("WebAPIs").derefOnlyAttachedElement(n?.element);
                        if (n && r) {
                            const a = o("ReactStackUtils").getTrimmedReactStack(r, "HeroPagelet", i);
                            if (a != null) {
                                const l = n.data || {};
                                l.reactStack = a;
                                n.data = l;
                            }
                        }
                    });
                }
            });
        }
        if (l) {
            e.onBeforeComplete(function(n) {
                if (n) {
                    const r = n.markerPoints.get("visuallyComplete");
                    const a = o("WebAPIs").derefOnlyAttachedElement(r?.element);
                    if (r && a) {
                        const i = l(a, "HeroPlaceholder", "placeholderUUID");
                        const s = e.config.logHeroHoldTrigger ? l(a, "HeroHoldBoundary", "placeholderUUID").concat(l(a, "HeroHoldLoggingBoundary", "placeholderUUID")) : [];
                        const u = new Map;
                        i.forEach((e)=>{
                            if (e != null) {
                                u.set(e, false);
                            }
                        });
                        s.forEach((e)=>{
                            if (e != null) {
                                u.set(e, true);
                            }
                        });
                        const c = [];
                        const d = new Set;
                        const m = new Set;
                        u.forEach((e, n)=>{
                            let a = [
                                n
                            ];
                            let i = "";
                            if (e) {
                                a = o("hero-tracing-placeholder").HeroHoldLoggingBoundaryRegistry.getHoldIDs(n).filter((e)=>!m.has(e));
                                a.forEach((e)=>m.add(e));
                                const l = o("hero-tracing-placeholder").HeroHoldLoggingBoundaryRegistry.getBoundaryName(n);
                                i = l != null ? `@${l}` : "";
                            }
                            a.forEach((n)=>{
                                t.placeholderMap[n]?.forEach(function(t) {
                                    if (t.startTime <= r.timestamp && t.description != null) {
                                        c.push({
                                            description: e ? `HeroHold(${t.description}${i})` : t.description,
                                            endTime: t.endTime ?? Infinity
                                        });
                                        d.add(n);
                                    }
                                });
                            });
                        });
                        f(t.subSpans, d, r.timestamp);
                        const p = _(c);
                        if (p.length > 0) {
                            const g = r.data || {};
                            g.vcBlockingPlaceholders = p;
                            r.data = g;
                        }
                    }
                }
            });
        }
    }
    l.getVCBlockingPlaceholders = _;
    l.markVCBlockingSubspans = f;
    l.observeMutation = g;
    l.markOtherInteractionSubspanToNavigationVC = h;
    l.traceNavigationVC = y;
    l.traceInteractionVC = C;
    l.copyVcMetricsOnComplete = b;
    l.logFinalReactStackOnBeforeComplete = v;
}, 98);
__d("InteractionTracingCore", [
    "HeroTracingDebugTracing",
    "InstrumentationAnalyzer",
    "InteractionCloning",
    "InteractionTracingLogger",
    "InteractionTracingUserTimingUtils",
    "JSScheduler",
    "MemoryUtils",
    "NetworkStatusTracker",
    "Promise",
    "QPLEvent",
    "VisibilityState",
    "VisualCompletionAdapter",
    "WebAPIs",
    "addAnnotations",
    "asyncToGeneratorRuntime",
    "clearTimeout",
    "hero-tracing",
    "hero-tracing-placeholder",
    "interaction-tracing-metrics",
    "one-trace",
    "performanceNow",
    "setTimeoutAcrossTransitions",
    "uuidv4"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    const d = "InteractionTracingLogging";
    const m = new Map;
    let p;
    let _ = null;
    let f = 0;
    const g = new Set;
    let h = 1;
    r("one-trace").subscribe("trace-end-before-logging", function(e) {
        if (e.traceType === "LONGTASK" || e.traceType === "INP" || e.traceType === "LONG_ANIMATION_FRAME") {
            const n = e.traceType;
            const a = e.endTime ?? (c || (c = r("performanceNow")))();
            m.forEach((t)=>{
                const i = t.getTrace();
                if (i && (o("interaction-tracing-metrics").InteractionTracingMetricsCore.addSubspan(t.getTraceId(), n, n, Math.max(e.startTime, i.start), a, {}), i.type != null)) {
                    const c = i.type;
                    const d = i.tracePolicy ?? "";
                    const m = t.getQPLEventMarkerId();
                    const initiatedInteraction = `${c}(${m}:${d})`;
                    const _ = e.annotations.string_array?.affectedInteractions ?? [];
                    r("addAnnotations")(e.annotations, {
                        string_array: {
                            affectedInteractions: _.concat([
                                initiatedInteraction
                            ])
                        }
                    });
                    if (n === "INP" && e.startTime <= i.start) {
                        r("addAnnotations")(e.annotations, {
                            string: {
                                initiatedInteraction
                            }
                        });
                        e.markerPoints.interactionTraceStart = {
                            timeSinceStart: i.start
                        };
                    }
                }
            });
        }
    });
    function y(traceId, t, n, r, a) {
        const l = o("VisibilityState").getHiddenSpans(t, n);
        o("interaction-tracing-metrics").InteractionTracingMetricsCore.addHiddenTiming(traceId, l);
        if (l.length > 0) {
            o("interaction-tracing-metrics").InteractionTracingMetricsCore.addMarkerPoint(traceId, "backgrounded", "AppTiming", l[0].start);
        }
        if (r.annotations.int?.hidden === undefined) {
            a.addAnnotationInt("hidden", Number(o("VisibilityState").wasHidden(t, n)));
        }
    }
    function C(e, t) {
        const a = t.completed ?? (c || (c = r("performanceNow")))();
        const i = t.markerPoints.visuallyComplete ? t.markerPoints.visuallyComplete.timestamp : a;
        const l = [];
        let s = null;
        e.forEach((e)=>{
            if (!e.isOnline && s == null) {
                s = e.timestamp;
                if (s < i) {
                    t.wasOffline = true;
                }
            } else if (e.isOnline && s != null) {
                l.push({
                    end: e.timestamp,
                    start: s
                });
                s = null;
            }
        });
        if (s != null) {
            l.push({
                end: a,
                start: s
            });
        }
        o("interaction-tracing-metrics").InteractionTracingMetricsCore.addOfflineTiming(t.traceId, l);
    }
    function b(cfg, t, n) {
        if (n.interactionClass) {
            t.addAnnotation("interactionClass", n.interactionClass);
        }
        const n_start = n.start;
        const i = n.completed ?? (c || (c = r("performanceNow")))();
        y(n.traceId, n_start, i, n, t);
        t.addAnnotationInt("navStartOffset", n.start);
        if (cfg.getMetadata) {
            const l = cfg.getMetadata();
            Object.keys(l).forEach((e)=>{
                const n = l[e];
                if (typeof n === "string") {
                    t.addAnnotation(e, n);
                } else if (typeof n === "number") {
                    t.addAnnotationInt(e, n);
                }
            });
        }
        if (cfg.pkgCohort != null) {
            t.addAnnotation("pkg_cohort", cfg.pkgCohort);
        }
        if (cfg.clientRevision != null) {
            t.addAnnotation("clientRevision", String(cfg.clientRevision));
        }
        if (cfg.serverRevision != null) {
            t.addAnnotation("serverRevision", String(cfg.serverRevision));
        }
        if (cfg.pushPhase != null) {
            t.addAnnotation("pushPhase", cfg.pushPhase);
        }
    }
    function v(e) {
        const t = o("hero-tracing-placeholder").HeroPendingPlaceholderTracker.dump(e.traceId);
        o("interaction-tracing-metrics").InteractionTracingMetricsCore.addHeroPendingPlaceholders(e.traceId, t);
        t.forEach((t)=>{
            o("interaction-tracing-metrics").InteractionTracingMetricsCore.addTag(e.traceId, "pendingPlaceholder", [
                t.pageletStack[t.pageletStack.length - 1],
                t.description
            ].filter(Boolean).join(":"));
            o("interaction-tracing-metrics").InteractionTracingMetricsCore.addSubspan(e.traceId, t.description, "HeroTracing", t.startTime, e.completed ?? (c || (c = r("performanceNow")))(), {
                spanType: "IncompletePlaceholder",
                pageletStack: t.pageletStack ?? []
            });
        });
    }
    function S(e, t) {
        e.onBeforeComplete(function(e) {
            if (e) {
                if (t.annotations.int?.revisit != null) {
                    r("addAnnotations")(e.annotations, {
                        int: {
                            revisit: Number(t.annotations.int?.revisit)
                        }
                    });
                }
                if (t.qplEvent) {
                    e.qplMarkerId = (u || (u = o("QPLEvent"))).getMarkerId(t.qplEvent);
                }
            }
        });
    }
    function R(e) {
        const t = e.replace(/\d{4,}/, "");
        return t;
    }
    let L = 0;
    const E = new Map;
    var k = {
        checkRevisit: function(t) {
            if (t == null) {
                return false;
            }
            return g.has(t);
        },
        checkAndMarkRevisit: function(t) {
            const e = k.checkRevisit(t);
            if (t != null) {
                g.add(t);
            }
            return e;
        },
        clone: function(t, n, o) {
            return r("InteractionCloning").clone(t, n, o, h++);
        },
        getNextInstanceKey: function() {
            return h++;
        },
        onStartInteraction: function(t) {
            const e = L++;
            E.set(e, t);
            return function() {
                E.delete(e);
            };
        },
        startInteraction: function(t, n = function() {}) {
            const e = o("hero-tracing").HeroLogger.genHeroInteractionUUIDAndMarkStart(t.interactionID);
            return k.trace(t.cfg, t.deps, t.qplEvent, n, t.interactionClass, t.traceType, t.tracePolicy, e, t.startTime, t.eventQueueTime, t.debugName, t.skipQPLStartMarker, t.qplInstanceKey, t.VCConfigOverride, t.instanceIdentifier, t.namespace);
        },
        trace: ((e)=>{
            function t(t, n, r, o, a, i, l, s, u, c, d, m, p, _, f, g) {
                return e.apply(this, arguments);
            }
            t.toString = function() {
                return e.toString();
            };
            return t;
        })(function(cfg, deps, i, l, g, y, L, I = r("uuidv4")(), T, D = null, x, $, P, N, M, w) {
            const A = [];
            const F = _;
            const O = P ?? h++;
            let B = L != null ? R(L) : null;
            if (B != null) {
                deps.QuickPerformanceLogger.markerAnnotate(i, {
                    string: {
                        tracePolicy: B
                    }
                }, {
                    instanceKey: O
                });
            }
            if (y === "INITIAL_LOAD" || y === "NAVIGATION") {
                _ = B;
            }
            let W = M;
            const q = cfg.enableMemoryLogging ? o("MemoryUtils").getCurrentMemory().usedJSHeapSize : null;
            if (!p) {
                p = o("WebAPIs").onBeforeUnload(function() {
                    m.forEach((e)=>{
                        if (e.getTrace()?.annotations.int?.success_on_unload === 1) {
                            e.forceCompleteTrace();
                        } else {
                            e.cancelTrace("unload", true);
                        }
                    });
                    if (p) {
                        p.remove();
                    }
                    p = null;
                });
            }
            function U(e, t) {
                return V.apply(this, arguments);
            }
            function V() {
                V = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, r) {
                    if (J != null) {
                        if (se.length > 0) {
                            yield (e || (e = n("Promise"))).all(se);
                        }
                        deps.WebLoom?.endTraceForInteraction(t, r);
                    }
                });
                return V.apply(this, arguments);
            }
            const H = new Set([
                d
            ]);
            function G(e = false) {
                const t = o("interaction-tracing-metrics").InteractionTracingMetricsCore.get(I);
                if (!(!t || !m.has(I))) {
                    if (t.completed == null) {
                        t.completed = (c || (c = r("performanceNow")))();
                    }
                    v(t);
                    const n = [].concat(re);
                    re.length = 0;
                    n.forEach((e)=>{
                        e(t, true);
                    });
                    if (e) {
                        Q(t, true);
                    } else {
                        (s || (s = r("JSScheduler"))).scheduleLoggingPriCallback(function() {
                            Q(t, true);
                        });
                    }
                }
            }
            var z = {
                addJoinId: function(t) {
                    o("interaction-tracing-metrics").InteractionTracingMetricsCore.addJoinId(I, t);
                },
                addGlobalMetadata: function(t, n) {
                    o("interaction-tracing-metrics").InteractionTracingMetricsCore.addGlobalMetadata(I, t, n);
                },
                addLoomTraceEndDependency: function(t) {
                    se.push(t);
                },
                addMarkerPoint: function(t, n, a = (c || (c = r("performanceNow")))(), i) {
                    o("interaction-tracing-metrics").InteractionTracingMetricsCore.addMarkerPoint(I, t, n, a, i);
                },
                addSubspan: function(t, n, r, a, i) {
                    o("interaction-tracing-metrics").InteractionTracingMetricsCore.addSubspan(I, t, n, r, a, i || {});
                },
                addMetadata: function(t, n) {
                    o("interaction-tracing-metrics").InteractionTracingMetricsCore.addMetadata(I, t, n);
                },
                addAnnotation: function(t, n) {
                    o("interaction-tracing-metrics").InteractionTracingMetricsCore.addAnnotation(I, t, n);
                },
                addAnnotationInt: function(t, n) {
                    o("interaction-tracing-metrics").InteractionTracingMetricsCore.addAnnotationInt(I, t, n);
                },
                addAnnotationDouble: function(t, n) {
                    o("interaction-tracing-metrics").InteractionTracingMetricsCore.addAnnotationDouble(I, t, n);
                },
                addAnnotationBoolean: function(t, n) {
                    o("interaction-tracing-metrics").InteractionTracingMetricsCore.addAnnotationBoolean(I, t, n);
                },
                addAnnotationStringArray: function(t, n) {
                    o("interaction-tracing-metrics").InteractionTracingMetricsCore.addAnnotationStringArray(I, t, n);
                },
                addAnnotationIntArray: function(t, n) {
                    o("interaction-tracing-metrics").InteractionTracingMetricsCore.addAnnotationIntArray(I, t, n);
                },
                addAnnotationDoubleArray: function(t, n) {
                    o("interaction-tracing-metrics").InteractionTracingMetricsCore.addAnnotationDoubleArray(I, t, n);
                },
                addAnnotationBooleanArray: function(t, n) {
                    o("interaction-tracing-metrics").InteractionTracingMetricsCore.addAnnotationBooleanArray(I, t, n);
                },
                addTag: function(t, n) {
                    o("interaction-tracing-metrics").InteractionTracingMetricsCore.addTag(I, t, n);
                },
                lockInteractionLogging: function(t) {
                    H.add(t);
                },
                unlockInteractionLogging: function(t) {
                    if (H.has(t)) {
                        H.delete(t);
                        if (H.size === 0) {
                            j();
                        }
                    }
                },
                cancelTrace: function(t, n) {
                    z.addAnnotation("cancelType", t);
                    const e = o("interaction-tracing-metrics").InteractionTracingMetricsCore.get(I);
                    if (!(!e || !m.has(I))) {
                        e.wasCanceled = true;
                        G(n);
                    }
                },
                forceCompleteTrace: function() {
                    G(true);
                },
                getConfigAndDependencies: function() {
                    return {
                        cfg,
                        deps
                    };
                },
                getTrace: function() {
                    return o("interaction-tracing-metrics").InteractionTracingMetricsCore.get(I);
                },
                getTraceId: function() {
                    return I;
                },
                getQPLEventMarkerId: function() {
                    return (u || (u = o("QPLEvent"))).getMarkerId(i);
                },
                markTraceAsSuccessOnUnload: function() {
                    z.addAnnotationInt("success_on_unload", 1);
                },
                observeMutation: function(n) {
                    if (deps.VCTracker && cfg.enableVCTracker) {
                        o("VisualCompletionAdapter").observeMutation(I, n);
                    }
                },
                onComplete: function(t) {
                    ne.push(t);
                },
                onCompleteSync: function(t) {
                    re.push(t);
                },
                onLog: function(t) {
                    oe.push(t);
                },
                onMeasurementAnalysis: function(t) {
                    ae.push(t);
                },
                onBeforeLog: function(t) {
                    ie.push(t);
                },
                onVcMetricsComplete: function(t) {
                    le.push(t);
                },
                setTracePolicy: function(n) {
                    if (n != null) {
                        const e = R(n);
                        B = e;
                        if (y === "INITIAL_LOAD" || y === "NAVIGATION") {
                            _ = B;
                        }
                        z.addAnnotation("tracePolicy", B);
                        deps.QuickPerformanceLogger.markerAnnotate(i, {
                            string: {
                                tracePolicy: B
                            }
                        }, {
                            instanceKey: O
                        });
                        if (J == null && cfg.disableLoomTrace !== true) {
                            const s = deps.WebLoom?.maybeStartTraceForInteraction(I, g, i, B, T);
                            J = s?.traceReferenceId;
                            Z = s?.loomProviders;
                        }
                        const c = o("interaction-tracing-metrics").InteractionTracingMetricsCore.get(I);
                        if (c) {
                            c.tracePolicy = B;
                            if (c.vcTracker) {
                                c.vcTracker.setTracePolicy(B);
                            }
                        }
                        r("one-trace").setTracePolicy(I, y, e);
                        r("one-trace").annotateInteractionIndentifier(`${y}(${(u || (u = o("QPLEvent"))).getMarkerId(i)}:${e})`);
                    }
                },
                setInstanceIdentifier: function(t) {
                    W = t;
                },
                getInstanceKey: function() {
                    return O;
                },
                failTrace: function(t, n) {
                    z.addMetadata("isError", 1);
                    z.addMetadata("errorComponent", t);
                    if (n) {
                        z.forceCompleteTrace();
                    }
                }
            };
            var j = ()=>{
                if (m.has(I)) {
                    const e = pe;
                    r("clearTimeout")(ce);
                    Y.remove();
                    m.delete(I);
                    C(A, e);
                    const n = [].concat(ie);
                    ie.length = 0;
                    n.forEach((t)=>{
                        t(e);
                    });
                    const l = o("InteractionTracingLogger").getTraceStatus(e, cfg.qplActionCancelOnNavigation);
                    const s = o("InteractionTracingLogger").logQPL(cfg, deps, i, l, e, O);
                    e.qplAction = s;
                    e.traceStatus = l;
                    e.debugName = x;
                    if (cfg.heroBootloadStatsAfterQPL === false) {
                        deps.HeroBootloadPerfStore?.addStaticResourcesStats(e);
                    }
                    const c = [].concat(oe);
                    oe.length = 0;
                    c.forEach((n)=>{
                        n(e, o("InteractionTracingLogger").getTraceStatus(e, cfg.qplActionCancelOnNavigation));
                    });
                    if (cfg.heroBootloadStatsAfterQPL === true) {
                        deps.HeroBootloadPerfStore?.addStaticResourcesStats(e);
                    }
                    delete e.vcTracker;
                    U(e, s);
                    o("InteractionTracingUserTimingUtils").markInteraction(deps, e, y, cfg, O);
                    setTimeout(()=>{
                        o("interaction-tracing-metrics").InteractionTracingMetricsCore.delete(I, cfg.clearAllMapsOnCleanup);
                    }, cfg.cleanUpTraceTimeout);
                }
            };
            function K(e) {
                if (e) {
                    H.forEach((e)=>{
                        z.unlockInteractionLogging(e);
                    });
                } else {
                    z.unlockInteractionLogging(d);
                }
            }
            var Q = (n, r)=>{
                if (m.has(I)) {
                    z.addAnnotationInt("startTimestamp", T + cfg.qplBaseTimestamp);
                    z.addAnnotation("tracePolicy", B ?? cfg.defaultTracePolicy);
                    if (y === "INITIAL_LOAD" || y === "NAVIGATION") {
                        z.addAnnotationInt("revisit", Number(k.checkAndMarkRevisit(B)));
                        if (W != null) {
                            z.addAnnotationInt("instance_revisit", Number(k.checkAndMarkRevisit(W)));
                        }
                    }
                    if (F != null) {
                        z.addAnnotation("referrer", F);
                    }
                    z.addAnnotation("interactionId", I);
                    if (q != null) {
                        const e = o("MemoryUtils").getCurrentMemory();
                        const { deviceMemory, jsHeapSizeLimit, totalJSHeapSize, usedJSHeapSize } = e;
                        if (usedJSHeapSize != null) {
                            z.addAnnotationInt("usedJSHeapSizeStart", q);
                            z.addAnnotationInt("usedJSHeapSizeEnd", usedJSHeapSize);
                        }
                        if (totalJSHeapSize != null) {
                            z.addAnnotationInt("JSTotalHeapSize", totalJSHeapSize);
                        }
                        if (jsHeapSizeLimit != null) {
                            z.addAnnotationInt("JSHeapSizeLimit", jsHeapSizeLimit);
                        }
                        if (deviceMemory != null) {
                            z.addAnnotationInt("JSDeviceMemory", deviceMemory);
                        }
                    }
                    b(cfg, z, n);
                    if (deps.VCTracker && cfg.enableVCTracker && ue != null) {
                        ue();
                    }
                    const c = [].concat(ne);
                    ne.length = 0;
                    c.forEach((e)=>{
                        e(n, r);
                    });
                    if (J != null) {
                        z.addAnnotation("loomRefId", J);
                    }
                    if (Z != null) {
                        Z.forEach((e)=>z.addTag("loomProviders", e));
                    }
                    const d = n.vcTracker;
                    if (d && !n.hasVcReport) {
                        d.onComplete(function() {
                            K(r);
                        });
                        if (r) {
                            d.forceMeasurement();
                        }
                    } else {
                        K(r);
                    }
                }
            };
            function X(isOnline, t = (c || (c = r("performanceNow")))()) {
                A.push({
                    isOnline,
                    timestamp: t
                });
            }
            var Y = r("NetworkStatusTracker").onChange(function({ online }) {
                X(online);
            });
            if (!r("NetworkStatusTracker").isOnline()) {
                X(false);
            }
            var J;
            var Z;
            if (B != null && cfg.disableLoomTrace !== true) {
                const te = deps.WebLoom?.maybeStartTraceForInteraction(I, g, i, B, T);
                J = te?.traceReferenceId;
                Z = te?.loomProviders;
            }
            if ($ !== true) {
                o("InteractionTracingLogger").initQPL(cfg, deps, i, T, O);
            }
            var ne = [];
            var re = [];
            var oe = [];
            var ae = [];
            var ie = [];
            var le = [];
            var se = [];
            var ue = null;
            if (deps.VCTracker && cfg.enableVCTracker) {
                ue = o("VisualCompletionAdapter").markOtherInteractionSubspanToNavigationVC(deps.VCTracker, y, I, i);
            }
            r("one-trace").startTrace(I, B, y, T, i);
            if (B != null) {
                r("one-trace").annotateInteractionIndentifier(`${y}(${(u || (u = o("QPLEvent"))).getMarkerId(i)}:${B ?? ""})`);
            }
            z.onLog(function(e, n) {
                r("one-trace").annotateInteractionIndentifier(`${y}(${(u || (u = o("QPLEvent"))).getMarkerId(i)}:${B ?? ""})`);
                r("one-trace").endTrace(I, e.completed ?? (c || (c = r("performanceNow")))(), o("InteractionTracingLogger").getTraceStatus(e, cfg.qplActionCancelOnNavigation));
            });
            var ce = r("setTimeoutAcrossTransitions")(function() {
                z.cancelTrace("timeout", false);
            }, cfg.timeout);
            if (cfg.cancelOnBackground === true) {
                const de = o("VisibilityState").subscribe(function(e, t) {
                    if (t) {
                        z.cancelTrace("background", true);
                    }
                });
                z.onCompleteSync(function() {
                    de();
                });
            }
            const me = function(n, o = false) {
                let e;
                if (m.has(I)) {
                    if (deps.VCTracker && cfg.enableVCTracker) {
                        if ((e = n.vcTracker) != null) {
                            e.unlock(deps.VCTracker.VisualCompletionConstants.INTERACTION_TRACING_HOLD);
                        }
                    }
                    if (n.completed == null) {
                        n.completed = (c || (c = r("performanceNow")))();
                    }
                    const l = [].concat(re);
                    re.length = 0;
                    l.forEach((e)=>{
                        e(n);
                    });
                    if (n.type === "INITIAL_LOAD" && window?.document?.readyState === "loading") {
                        const d = function() {
                            (s || (s = r("JSScheduler"))).scheduleLoggingPriCallback(function() {
                                Q(n, o);
                            });
                            window?.document?.removeEventListener("DOMContentLoaded", d);
                        };
                        window?.document?.addEventListener("DOMContentLoaded", d);
                    } else {
                        (s || (s = r("JSScheduler"))).scheduleLoggingPriCallback(function() {
                            Q(n, o);
                        });
                    }
                }
            };
            var pe = o("interaction-tracing-metrics").InteractionTracingMetricsCore.addTracedInteraction(I, T, me);
            o("interaction-tracing-metrics").InteractionTracingMetricsCore.setInteractionType(I, g, y, i);
            if (pe) {
                pe.namespace = w ?? "default";
            }
            switch(y){
                case "INITIAL_LOAD":
                    z.addAnnotationInt("navSequence", ++f);
                    if (deps.VCTracker && cfg.enableVCTracker) {
                        const _e = o("VisualCompletionAdapter").traceNavigationVC(deps.VCTracker, I, 0, "INITIAL_LOAD", f, N, w);
                        if (pe) {
                            pe.vcTracker = _e;
                        }
                        if (cfg.useDocumentBodyForVCRoot === true && window.document != null) {
                            _e.observeMutation(window.document.body);
                            _e.registerNavigationMutationRoot(window.document.body);
                        }
                    }
                    break;
                case "NAVIGATION":
                    z.addAnnotationInt("navSequence", ++f);
                    m.forEach((e)=>{
                        const n = o("interaction-tracing-metrics").InteractionTracingMetricsCore.get(e.getTraceId());
                        if (!(!cfg.navigationCancelsInteractions && n && n.type === "INTERACTION" || n != null && n.namespace != null && n.namespace !== (w ?? "default"))) {
                            e.cancelTrace("navigation", false);
                        }
                    });
                    if (deps.VCTracker && cfg.enableVCTracker) {
                        const fe = o("VisualCompletionAdapter").traceNavigationVC(deps.VCTracker, I, T, y, f, N, w);
                        if (pe) {
                            pe.vcTracker = fe;
                        }
                        if (cfg.useDocumentBodyForVCRoot === true && window.document != null) {
                            fe.observeMutation(window.document.body);
                            fe.registerNavigationMutationRoot(window.document.body);
                        }
                    }
                    break;
                case "INTERACTION":
                    if (deps.VCTracker && cfg.enableVCTracker) {
                        const ge = o("VisualCompletionAdapter").traceInteractionVC(deps.VCTracker, I, T, y, N);
                        if (pe) {
                            pe.vcTracker = ge;
                        }
                    }
                    break;
            }
            m.set(z.getTraceId(), z);
            o("HeroTracingDebugTracing").addHeroDebugging(z, cfg, function() {
                return J != null;
            });
            z.onCompleteSync(function(e) {
                o("interaction-tracing-metrics").InteractionTracingMetricsCore.addMarkerPoint(e.traceId, "HeroTrace_end", "AppTiming", e.completed ?? (c || (c = r("performanceNow")))());
                o("hero-tracing").HeroLogger.cleanupHeroInteraction(e.traceId);
            });
            if (B != null) {
                z.setTracePolicy(B);
            }
            if (pe && pe.vcTracker) {
                const he = pe.vcTracker;
                if (deps.VCTracker && cfg.enableVCTracker) {
                    he.lock(deps.VCTracker.VisualCompletionConstants.INTERACTION_TRACING_HOLD);
                }
                o("VisualCompletionAdapter").logFinalReactStackOnBeforeComplete(he, pe);
                S(he, pe);
                he.onComplete(function(e) {
                    const t = [].concat(le);
                    le.length = 0;
                    if (e) {
                        t.forEach((t)=>{
                            t(pe, e);
                        });
                    }
                });
                o("VisualCompletionAdapter").copyVcMetricsOnComplete(cfg, pe, z);
                if (cfg.setupVcTracker) {
                    cfg.setupVcTracker(he);
                }
            }
            l(z);
            E.forEach((e)=>e(z));
            if (D != null) {
                const ye = T;
                o("interaction-tracing-metrics").InteractionTracingMetricsCore.addSubspan(I, "EventQueued", "DOMEventTiming", ye, ye + D, {});
            }
            if (cfg.enableInstrumentationCorrectnessLogging && cfg.instrumentationCorrectnessQPLEvent != null) {
                const Re = cfg.instrumentationCorrectnessQPLEvent;
                const Le = pe.vcTracker?.config ?? {};
                const Ee = o("InstrumentationAnalyzer").createInstrumentationAnalyzerInstance(I, y, (u || (u = o("QPLEvent"))).getMarkerId(i), Re, deps.QuickPerformanceLogger, cfg.qplBaseTimestamp, B, Le.getReactComponentStackFromDOMElement ?? null, Le.getWrapperComponentPropArrayFromDOMElement ?? null);
                pe.measurementCorrectness = Ee.getTraceMetadata();
                z.onLog(function(e, t) {
                    Ee.endInteraction(e, t);
                    ae.forEach((e)=>{
                        Ee.onReport(e);
                    });
                    ae.length = 0;
                });
            }
            return I;
        }),
        getPendingInteractions: function() {
            return new Set(m.values());
        },
        getPendingInteractionById: function(t) {
            return m.get(t);
        }
    };
    l.default = k;
}, 98);
__d("NavigationTracingUtils", [
    "interaction-tracing-metrics",
    "performance",
    "performanceNavigationStart"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = r("performanceNavigationStart")();
    function u(t) {
        let n;
        const i = ((e || (e = r("performance"))) == null ? undefined : (e || (e = r("performance"))).timing) || {};
        const l = ((e || (e = r("performance"))) == null || (n = (e || (e = r("performance"))).navigation) == null ? undefined : n.redirectCount) || 0;
        o("interaction-tracing-metrics").InteractionTracingMetricsCore.addAnnotationInt(t, "redirectCount", l);
        const u = typeof (e || (e = r("performance"))).getEntriesByType === "function" ? (e || (e = r("performance"))).getEntriesByType("navigation")[0] : null;
        if (u != null && u.nextHopProtocol) {
            o("interaction-tracing-metrics").InteractionTracingMetricsCore.addAnnotation(t, "httpProtocol", u.nextHopProtocol);
        }
        if (u != null && u.type) {
            o("interaction-tracing-metrics").InteractionTracingMetricsCore.addAnnotation(t, "navigationType", u.type);
        } else if ((e || (e = r("performance"))).navigation?.type != null) {
            o("interaction-tracing-metrics").InteractionTracingMetricsCore.addAnnotation(t, "navigationType", (e || (e = r("performance"))).navigation.type);
        }
        for(const c in i){
            if (typeof i[c] === "number" && i[c] >= s) {
                o("interaction-tracing-metrics").InteractionTracingMetricsCore.addMarkerPoint(t, c, "NavigationTiming", i[c] - s);
            }
        }
        if (u != null && u.workerStart) {
            o("interaction-tracing-metrics").InteractionTracingMetricsCore.addMarkerPoint(t, "workerStart", "NavigationTiming", u.workerStart);
        }
        if (u != null && u.fetchStart) {
            o("interaction-tracing-metrics").InteractionTracingMetricsCore.addMarkerPoint(t, "navFetchStart", "NavigationTiming", u.fetchStart);
        }
        const d = u ?? {};
        const { fetchStart, workerStart } = d;
        if (fetchStart && workerStart) {
            o("interaction-tracing-metrics").InteractionTracingMetricsCore.addAnnotationInt(t, "workerProcessingTime", fetchStart - workerStart);
        }
        o("interaction-tracing-metrics").InteractionTracingMetricsCore.addAnnotationInt(t, "documentDOMElementCount", document.getElementsByTagName("*").length);
    }
    function c(e) {
        const document_referrer = document.referrer;
        if (typeof document_referrer === "string") {
            const n = /^\w+:\/\/[^\/]+/.exec(document_referrer);
            if (n && n[0]) {
                o("interaction-tracing-metrics").InteractionTracingMetricsCore.addAnnotation(e, "referrer", n[0]);
            }
        }
    }
    l.addNavigationTiming = u;
    l.addReferrer = c;
}, 98);
__d("NavigationTracingCore", [
    "InteractionTracingCore",
    "NavigationTracingUtils",
    "performanceNow"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s = null;
    function u(e) {
        s = e;
    }
    function getCurrentNavigationTraceAPI() {
        return s;
    }
    function traceInitialLoad(t, n) {
        const i = t.traceStartTime ?? (e || (e = r("performanceNow")))();
        return r("InteractionTracingCore").startInteraction(t, function(e) {
            u(e);
            const r = e.getTraceId();
            e.setTracePolicy(t.tracePolicy);
            e.addMarkerPoint("traceStart", "AppTiming", i);
            if (t.skipQPLStartMarker === true && t.qplInstanceKey != null) {
                t.deps.QuickPerformanceLogger.markerPoint(t.qplEvent, "traceStart", {
                    instanceKey: t.qplInstanceKey,
                    timestamp: i
                });
            }
            e.onComplete(function(e) {
                o("NavigationTracingUtils").addNavigationTiming(r);
                o("NavigationTracingUtils").addReferrer(r);
            });
            e.onCompleteSync(function(e) {
                u(null);
            });
            if (n) {
                n(e);
            }
        });
    }
    function traceNavigation(e, t) {
        return r("InteractionTracingCore").startInteraction(e, function(e) {
            try {
                u(e);
                const n = e.getTraceId();
                e.onComplete(function(e) {
                    o("NavigationTracingUtils").addNavigationTiming(n);
                });
                e.onCompleteSync(function(e) {
                    u(null);
                });
                if (t) {
                    t(e);
                }
            } catch (error) {
                if (error.message !== "can't access dead object") {
                    throw error;
                }
            }
        });
    }
    const p = {
        getCurrentNavigationTraceAPI,
        traceInitialLoad,
        traceNavigation
    };
    l.default = p;
}, 98);
__d("interaction-tracing", [
    "InstrumentationAnalyzer",
    "InteractionCloning",
    "InteractionTracingCore",
    "InteractionTracingLogger",
    "NavigationTracingCore",
    "NetworkStatusTracker",
    "addAnnotations"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = {
        InteractionTracingCore: r("InteractionTracingCore"),
        InteractionCloning: r("InteractionCloning"),
        MeasurementErrorCode: o("InstrumentationAnalyzer").MeasurementErrorCode,
        NavigationTracing: r("NavigationTracingCore"),
        NetworkStatusTracker: r("NetworkStatusTracker"),
        addAnnotations: r("addAnnotations"),
        getTraceStatus: o("InteractionTracingLogger").getTraceStatus
    };
    l.default = e;
}, 98);
__d("useCometRouteTracePolicy", [
    "CometRouterRouteTracePolicyContext",
    "react"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const useContext = (e || (e = o("react"))).useContext;
    const u = "comet.app";
    function useC() {
        return useContext(r("CometRouterRouteTracePolicyContext")) ?? u;
    }
    l.default = useC;
}, 98);
__d("hyperionChannel", [
    "hyperionHook"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = (()=>{
        function t() {
            this.$1 = new (e || (e = o("hyperionHook"))).Hook;
        }
        const t_prototype = t.prototype;
        t_prototype.pipe = function(t, n) {
            const e = this.$1.add(n ? function(e, ...o) {
                n(function() {
                    t.emit(e, ...o);
                });
            } : function(e, ...r) {
                t.emit(e, ...r);
            });
            e.$2 = t;
            return t;
        };
        t_prototype.unpipe = function(t) {
            return this.$1.removeIf(function(e) {
                return e.$2 === t;
            });
        };
        t_prototype.emit = function(t, ...r) {
            this.$1.call(t, ...r);
        };
        return t;
    })();
    const u = ((t)=>{
        function n(...r) {
            let e;
            e = t.call(this, ...r) || this;
            e.$Channel1 = Object.create(null);
            return babelHelpers.assertThisInitialized(e) || babelHelpers.assertThisInitialized(e);
        }
        babelHelpers.inheritsLoose(n, t);
        const n_prototype = n.prototype;
        n_prototype.$Channel2 = function(n) {
            let t = this.$Channel1[n];
            if (!t) {
                t = this.$Channel1[n] = new (e || (e = o("hyperionHook"))).Hook;
            }
            return t;
        };
        n_prototype.on = function(t) {
            return this.$Channel2(t);
        };
        n_prototype.addListener = function(t, n) {
            return this.on(t).add(n);
        };
        n_prototype.removeListener = function(t, n) {
            this.on(t).remove(n);
            return n;
        };
        n_prototype.emit = function(n, ...a) {
            this.$Channel2(n).call(...a);
            t.prototype.emit.call(...[
                this,
                n
            ].concat(a));
        };
        return n;
    })(s);
    const c = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.$PausableChannel1 = false;
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.pause = function() {
            this.$PausableChannel1 = true;
        };
        t_prototype.unpause = function() {
            this.$PausableChannel1 = false;
        };
        t_prototype.isPaused = function() {
            return this.$PausableChannel1;
        };
        t_prototype.emit = function(n, ...args) {
            if (!this.$PausableChannel1) {
                for(var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++){
                    o[a - 1] = arguments[a];
                }
                e.prototype.emit.call(...[
                    this,
                    n
                ].concat(o));
            }
        };
        return t;
    })(u);
    l.Channel = u;
    l.PausableChannel = c;
    l.PipeableEmitter = s;
}, 98);
__d("ALChannel", [
    "hyperionChannel"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = new (o("hyperionChannel")).Channel;
    l.default = e;
}, 98);
__d("ALReactUtils", [
    "FBLogger",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = function() {
        return true;
    };
    const s = (t)=>{
        const e = Object.keys(t).find((e)=>e.startsWith("__reactFiber$"));
        if (e != null) {
            return t[e];
        }
        return null;
    };
    const u = (t)=>{
        const r = t.displayName ?? t.name;
        if (r == null) {
            return null;
        }
        const o = r.match(/.*\[from (.*)\.react\]/);
        return o?.[1] ?? r;
    };
    function c(t, n) {
        if (t == null) {
            r("FBLogger")("ads_manager_auto_logging").warn("[AL] Null element passed to getReactComponentName_THIS_CAN_BREAK.");
            return null;
        }
        const o = n || e;
        try {
            for(let i = s(t); i;){
                const l = i.type;
                if (l == null || typeof l === "string") {
                    i = i.return;
                    continue;
                }
                let c = u(l);
                if (c == null && l.render != null) {
                    c = u(l.render);
                }
                if (c != null && c !== "" && o(c)) {
                    return c;
                }
                i = i.return;
            }
        } catch (error) {
            const d = r("getErrorSafe")(error);
            r("FBLogger")("ads_manager_auto_logging").catching(d).warn("[AL] Caught exception in getReactComponentName_THIS_CAN_BREAK.");
            return null;
        }
    }
    l.getReactComponentName_THIS_CAN_BREAK = c;
}, 98);
__d("AutoLoggingComponentValidatorListSitevarConfig.experimental", [
    "cr:27482"
], function(t, n, r, o, a, i, l) {
    "use strict";
    l.default = n("cr:27482");
}, 98);
__d("AutoLoggingComponentNameValidator", [
    "AutoLoggingComponentValidatorListSitevarConfig.experimental",
    "FBLogger"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = {
        COMPONENT_ALLOW_LIST: r("AutoLoggingComponentValidatorListSitevarConfig.experimental").COMPONENT_ALLOW_LIST,
        COMPONENT_BLOCK_LIST: r("AutoLoggingComponentValidatorListSitevarConfig.experimental").COMPONENT_BLOCK_LIST
    };
    const s = (t)=>t.join("|");
    let u = null;
    function c(t) {
        if (u != null && u !== t) {
            r("FBLogger")("auto_logging").warn("Config name used to get validator changed, ensure you are using consistent init config across AutoLogging", u, t);
        }
        u = t;
        const a = r("AutoLoggingComponentValidatorListSitevarConfig.experimental").TOOL_CONFIG?.[t] ?? e;
        const i = s(a.COMPONENT_ALLOW_LIST);
        const l = s(a.COMPONENT_BLOCK_LIST);
        return function(e) {
            return e.match(i) != null && e.match(l) == null;
        };
    }
    l.getComponentNameValidator = c;
}, 98);
__d("AdsALReactUtils", [
    "ALReactUtils",
    "AutoLoggingComponentNameValidator"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = o("AutoLoggingComponentNameValidator").getComponentNameValidator("ads");
    function s(t) {
        return o("ALReactUtils").getReactComponentName_THIS_CAN_BREAK(t, e);
    }
    function u(t) {
        return !e(t);
    }
    l.getReactComponentName_THIS_CAN_BREAK = s;
    l.isComponentNameBlocked = u;
}, 98);
__d("AirwaveAppIdUtils", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = 2385360641951750;
    const l = 3091416277713978;
    const s = 1509803480261504;
    const u = 1636455547794985;
    const c = 2470881703402156;
    const d = 1315352273538439;
    const m = new Set([
        `${e}`,
        `${s}`,
        `${u}`,
        `${c}`,
        `${d}`
    ]);
    function p(e) {
        return e != null && m.has(`${e}`);
    }
    i.AIRWAVE_LG_APP_ID = e;
    i.AIRWAVE_ROKU_APP_ID = l;
    i.AIRWAVE_SAMSUNG_APP_ID = s;
    i.AIRWAVE_VEGA_APP_ID = u;
    i.AIRWAVE_VIZIO_APP_ID = c;
    i.AIRWAVE_WEB_APP_ID = d;
    i.isAirwaveWebAppId = p;
}, 66);
__d("AutoLoggingComponentValidatorListSitevarConfigJSModuleWrapper", [
    "AutoLoggingComponentValidatorListSitevarConfig"
], function(t, n, r, o, a, i, l) {
    "use strict";
    l.default = r("AutoLoggingComponentValidatorListSitevarConfig");
}, 98);
__d("ClientServiceWorkerMessage", [], function(t, n, r, o, a, i) {
    class e {
        constructor(e, t, n){
            this.$1 = e;
            this.$2 = t;
            this.$3 = n;
        }
        sendViaController() {
            const navigator_serviceWorker = navigator.serviceWorker;
            if (navigator_serviceWorker) {
                const t = navigator_serviceWorker.controller;
                if (t) {
                    const n = new self.MessageChannel;
                    if (this.$3) {
                        n.port1.onmessage = this.$3;
                    }
                    t.postMessage({
                        command: this.$1,
                        data: this.$2
                    }, [
                        n.port2
                    ]);
                }
            }
        }
    }
    i.default = e;
}, 66);
__d("JustKnobsData", [], function(t, n, r, o, a, i) {
    const e = new Map;
    function l() {
        return e;
    }
    function s(t) {
        try {
            if (e.has(t)) {
                e.set(t, e.get(t) ?? 1);
                return;
            }
            e.set(t, 1);
        } catch (e) {}
    }
    function u(t) {
        try {
            if (e.has(t)) {
                let r = 0;
                e.set(t, r = (e.get(t) ?? 0) - 1);
                if (r <= 0) {
                    e.delete(t);
                }
            }
        } catch (e) {}
    }
    i.getKnobsBeingFetched = l;
    i.setKnobBeingFetched = s;
    i.setKnobFetchComplete = u;
}, 66);
__d("QPLCrashResiliencePlugin", [
    "FBLogger",
    "QPLEvent",
    "QPLMarkerMap",
    "QuickPerformanceLogger",
    "RSTLogForCrash",
    "gkx"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    function u() {
        if (r("gkx")("11050") !== false) {
            const e = new m().getListener();
            (s || (s = r("QuickPerformanceLogger"))).addListener(e);
        }
    }
    const totalLimit = 100;
    const perMarkerLimit = 10;
    class m {
        constructor(){
            var e = this;
            this.$2 = false;
            this.$1 = new (r("QPLMarkerMap"))({
                totalLimit,
                perMarkerLimit
            });
            o("RSTLogForCrash").logForCrashReadyPromise.getPromise().then(()=>{
                e.$2 = true;
                e.$3();
            }).catch(()=>{});
        }
        $3() {
            const e = this;
            (s || (s = r("QuickPerformanceLogger"))).activeMarkers.forEach((t, n)=>{
                t.forEach((t, r)=>{
                    if (t.isCrashResilient) {
                        e.$1.set(n, r, 1);
                    }
                });
            });
            this.$4();
        }
        $4() {
            if (this.$2) {
                let e = this.$1.toString();
                if (!o("RSTLogForCrash").isValidStringValue(e)) {
                    e = "{}";
                    r("FBLogger")("qpl-crash-resilience-js").warn("Exceeded RST log limit");
                }
                o("RSTLogForCrash").logForCrash("active_qpls", e, o("RSTLogForCrash").RSTLogMode.VALID_UNTIL_NEXT_WRITE, {
                    immediateFlush: true
                });
            }
        }
        getListener() {
            const e = this;
            const t = this;
            return {
                onMarkerStarted: function(n, r, o, a) {
                    t.onMarkerStarted(n, r, o, a);
                },
                onMarkerEnd: function(n, r, o, a, i) {
                    return e.onMarkerEnd(n, r, o, a, i);
                },
                onMarkerDrop: function(n, r, o, a) {
                    t.onMarkerDrop(n, r, o, a);
                }
            };
        }
        onMarkerStarted(n, r, a, i) {
            const l = i.isCrashResilient ?? false;
            if (l) {
                this.$1.set((e || (e = o("QPLEvent"))).getMarkerId(n), r, 1);
                this.$4();
            }
        }
        onMarkerEnd(n, r, a, i, l) {
            const s = l.isCrashResilient ?? false;
            if (!(!l.passesSampling || !s)) {
                this.$1.delete((e || (e = o("QPLEvent"))).getMarkerId(r), a);
                this.$4();
            }
        }
        onMarkerDrop(n, r, a, i) {
            const l = i.isCrashResilient ?? false;
            if (!(!i.passesSampling || !l)) {
                this.$1.delete((e || (e = o("QPLEvent"))).getMarkerId(n), r);
                this.$4();
            }
        }
    }
    l.startQPLCrashResilience = u;
}, 98);
__d("RSTAdsManagerUtilsMainThread", [
    "requireWeak"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e = null;
    r("requireWeak")("AdsAccountStore", function(t) {
        e = t;
    });
    let s = null;
    r("requireWeak")("AdsPERouterHelper", function(e) {
        s = e;
    });
    function u() {
        try {
            const a = s?.getRouter()?.getQueryParams() ?? {};
            const { selected_ad_ids, selected_adset_ids, selected_campaign_ids } = a;
            const c = selected_ad_ids?.toArray() ?? [];
            const d = selected_adset_ids?.toArray() ?? [];
            const m = selected_campaign_ids?.toArray() ?? [];
            return {
                adIds: c.map((e)=>String(e)),
                adsetIds: d.map((e)=>String(e)),
                campaignIds: m.map((e)=>String(e))
            };
        } catch (e) {
            return {
                adIds: [],
                adsetIds: [],
                campaignIds: []
            };
        }
    }
    function c() {
        return e?.getSelectedAccountID() ?? "0";
    }
    function d() {
        return e?.getSelectedBusinessID() ?? "0";
    }
    function m() {
        return {};
    }
    l.getAdEntityIds = u;
    l.getAdAccountID = c;
    l.getBusinessID = d;
    l.getAdsAnnotations = m;
}, 98);
__d("RSTEvents", [
    "$InternalEnum"
], function(t, n, r, o, a, i) {
    "use strict";
    const e = n("$InternalEnum")({
        HEART_BEAT: 0,
        BROWSER_TAB_FOREGROUND: 1,
        BROWSER_TAB_BACKGROUND: 2,
        TRACE_START: 3,
        TRACE_END: 4,
        TRACE_POLICY_SET: 5,
        INTERACTION_DATA: 6,
        SPAN_START: 7,
        SPAN_END: 8,
        LOG_FLUSH: 9,
        BROWSER_TAB_CLOSED: 10,
        RECOVERABLE_UNRESPONSIVENESS: 100000,
        UNRECOVERABLE_UNRESPONSIVENESS: 100001,
        CHECKING_INDEXDB_FOR_EVENTS: 100002,
        CRASH_INCIDENT: 10003,
        UNRESPONSIVENESS_DETECTED: -1,
        LOGGING_UNRESPONSIVENESS_TO_INDEXDB: -2,
        NO_HEART_BEAT_SINCE_ORIGIN: -3
    });
    function l(t) {
        return t === e.LOG_FLUSH;
    }
    i.RSTEvent = e;
    i.isRSTFlushEvent = l;
}, 66);
__d("RSTEventsMessageQueue", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = new Map;
    function l(t, n) {
        if (!e.has(t)) {
            e.set(t, []);
        }
        const r = e.get(t);
        if (r && r.indexOf(n) === -1) {
            r.push(n);
        }
    }
    function s(t, n) {
        const r = e.get(t);
        if (r != null) {
            r.forEach((e)=>e(n));
        }
    }
    i.subscribe = l;
    i.notify = s;
}, 66);
__d("RSTConfig", [
    "CurrentUserInitialData",
    "FBLogger",
    "JustKnobsData",
    "WebResponsivenessConfig",
    "gkx",
    "justknobx",
    "reactComponentNameSemanticsCheck"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let u;
    let c;
    const d = 345600000;
    const m = {
        app_id: "default",
        first_heartbeat_threshold_ms: 10000,
        freeze_threshold_ms: 500,
        heart_beat_interval_ms: 200,
        main_thread_logging_interval_ms: 5000,
        encrypt_db: false,
        start_rst_from_main_thread_extra_delay_in_ms: 0
    };
    function p() {
        const app_config = r("WebResponsivenessConfig").rst.app_config;
        if (app_config.length === 0) {
            return m;
        }
        return app_config.find((e)=>`${e.app_id}` == `${(c || (c = r("CurrentUserInitialData"))).APP_ID ?? 0}`) ?? app_config.find((e)=>e.app_id === "default") ?? m;
    }
    const _ = p();
    function shouldCollectAdditionalMetadata() {
        const e = "__felab_context" in window;
        return y.RST_ANNOTATION_KILLSWITCH_ON && y.SHOULD_COLLECT_RST_ANNOTATIONS && !e;
    }
    function g(blocked_rst_annotation_keys) {
        const t = [];
        if (blocked_rst_annotation_keys == null) {
            return t;
        }
        for (const n of blocked_rst_annotation_keys){
            try {
                let o = n.trim();
                if (o.startsWith("/") && o.endsWith("/")) {
                    o = o.slice(1, o.length - 1);
                }
                t.push(new RegExp(o));
            } catch (e) {
                r("FBLogger")("responsive-tracker").warn("Failed to construct regex from %s", n);
            }
        }
        return t;
    }
    const logSpanAnnotationsMapping = new Map([
        [
            "Relay_JustKnobsAsyncGetBoolWithoutHashvalQuery",
            function(e, t) {
                const n = Array.from(o("JustKnobsData").getKnobsBeingFetched().keys());
                if (n.length === 0) {
                    return t;
                }
                return `${t ?? ""}:${n.join(",")}`;
            }
        ]
    ]);
    var y = {
        PROJECT_NAME: "RST",
        PROJECT_ONCALL: "web_ecosystem",
        DEBUG: false,
        ENCRYPT_DB: _.encrypt_db,
        ENABLE_SERVICE_WORKER: (u = r("justknobx"))._("4993"),
        FIRST_HEART_BEAT_THRESHOLD_MS: _.first_heartbeat_threshold_ms,
        FREEZE_THRESHOLD_MS: _.freeze_threshold_ms,
        HEART_BEAT_INTERVAL_MS: _.heart_beat_interval_ms,
        START_RST_FROM_MAIN_THREAD_EXTRA_DELAY_IN_MS: _.start_rst_from_main_thread_extra_delay_in_ms,
        INDEX_DB_NAME: "responsiveness-db",
        INDEX_DB_TABLE_NAME: "unresponsiveness-events-v2",
        PAST_INDEX_DB_TABLE_NAMES: [
            "unresponsiveness-events"
        ],
        INDEX_DB_VERSION: 4,
        SERVICE_WORKER_INCIDENT_THRESHOLD_MS: 4000,
        SERVICE_WORKER_HEART_BEAT_INTERVAL_MS: 1000,
        WAIT_MS_FOR_OTHER_SESSION_BEFORE_PROCESSING: 60 * 1000,
        WEB_WORKER_UPDATE_INCIDENTS_INTERVAL_MS: u._("3306"),
        UNRECOVER_LASTS_THRESHOLD_MS: u._("3307"),
        SHOULD_SAMPLE_RECOVERABLE: u._("3273"),
        SHOULD_CAPTURE_INTERACTION_DATA: u._("3709"),
        SHOULD_CAPTURE_INTERACTION_ELEMENT_TEXT: r("justknobx")._("4704") || r("gkx")("15466"),
        ELEMENT_TEXT_SIZE_LIMIT: 20,
        RST_ANNOTATION_KILLSWITCH_ON: r("justknobx")._("3738"),
        SHOULD_COLLECT_RST_ANNOTATIONS: r("gkx")("10200"),
        SHOULD_COLLECT_RST_ANNOTATIONS_LOG_FOR_CRASH: r("justknobx")._("954"),
        SHOULD_COLLECT_RST_ANNOTATIONS_INTERACTION_DATA: r("justknobx")._("955"),
        BLOCKED_ANNOTATION_KEYS: g(_.blocked_rst_annotation_keys),
        OBSOLETE_PENDING_INCIDENT_THRESHOLD_MS: _.obsolete_pending_incident_threshold_ms ?? d,
        MAX_INCIDENT_COUNT: _.max_incident_count ?? null,
        MAIN_THREAD_LOGGING_INTERVAL_MS: _.main_thread_logging_interval_ms,
        INCIDENT_PROPOSED_PROCESSOR_OWNERSHIP_EXPIRE_MS: 6 * _.main_thread_logging_interval_ms,
        MESSAGE_TYPE: "responsiveness",
        DEBUG_LOGGING_ENABLED: r("gkx")("6199"),
        MAX_DB_FAILED_COUNT: 10,
        TRACE_STATS_WINDOW_SIZE_MS: 120 * 1000,
        TRACE_STATS_MAX_QUEUE_SIZE: 200,
        HIGH_MEMORY_USAGE_THRESHOLD_BYTES: 1500 * 1024 * 1024,
        DEFAULT_REACT_COMPONENT_CONTEXT_SIZE: 3,
        ONE_UNRECOVERABLE_INCIDENT_PER_SESSION: true,
        shouldCollectAdditionalMetadata,
        isReactComponentNameBlocked: o("reactComponentNameSemanticsCheck").isReactComponentNameMeaningless,
        isReactComponentTextBlocked: o("reactComponentNameSemanticsCheck").isReactComponentTextBlocked,
        logSpanAnnotationsMapping
    };
    l.default = y;
}, 98);
__d("RSTExternalLoggingDataStoreMainThread", [
    "FBLogger",
    "RSTConfig",
    "RSTLogForCrash",
    "getErrorSafe",
    "nextCrashLoggingSpanId"
], function(t, n, r, o, a, i, l) {
    const e = 100000;
    const s = 5000;
    const u = 500;
    class c {
        constructor(){
            this.$5 = false;
            this.$1 = new Map;
            this.$2 = new Map;
            this.$3 = new Map;
            this.$4 = new Map;
        }
        isValidValue(t) {
            return t == null || t.length <= s;
        }
        $6(n, o, a) {
            if (n.length > e || !this.isValidValue(o)) {
                if (!this.$5) {
                    r("FBLogger")("responsive-tracker").warn(a, n.length, o?.length ?? 0);
                }
                this.$5 = true;
                return false;
            }
            if (this.totalStoredPairCount() > u) {
                if (!this.$5) {
                    r("FBLogger")("responsive-tracker").warn("Too many key-value pairs for external span logging data (ignored)");
                }
                this.$5 = true;
                return false;
            }
            return true;
        }
        logSpanEnd(t) {
            this.$4.delete(t);
        }
        logSpanStart(t, n = null) {
            if (!this.$6(t, n, "Invalid key or annotation for external logging data (ignored), key size: %s, annotation size: %s")) {
                return -1;
            }
            const annotation = this.$7(t, n);
            const r = o("nextCrashLoggingSpanId").nextCrashLoggingSpanId();
            this.$4.set(r, {
                id: r,
                name: t,
                start: Date.now(),
                annotation
            });
            return r;
        }
        log(t, n, a) {
            if (!this.$6(t, n, "Invalid key or value for external logging data (ignored), key size: %s, value size: %s")) {
                return false;
            }
            let e = false;
            if (a === o("RSTLogForCrash").RSTLogMode.VALID_UNTIL_NEXT_HEARTBEAT) {
                e = this.$8(this.$2, t, n);
                this.$2.set(t, n);
            } else if (a === o("RSTLogForCrash").RSTLogMode.VALID_UNTIL_NEXT_WRITE) {
                e = this.$8(this.$1, t, n);
                this.$1.set(t, n);
            } else if (a === o("RSTLogForCrash").RSTLogMode.VALID_FOR_5_SECONDS || a === o("RSTLogForCrash").RSTLogMode.VALID_FOR_2_MINUTES) {
                e = true;
                this.$3.set(t, {
                    value: n,
                    createTime: Date.now(),
                    expirationTime: o("RSTLogForCrash").getExpirationTime(a) ?? Date.now()
                });
            } else {
                r("FBLogger")("responsive-tracker").warn("Invalid logMode");
            }
            return e;
        }
        $8(t, n, r) {
            return !t.has(n) || t.get(n) !== r;
        }
        totalStoredPairCount() {
            return this.$1.size + this.$2.size + this.$3.size + this.$4.size;
        }
        get(t) {
            if (this.$2.has(t)) {
                return this.$2.get(t) || null;
            }
            if (this.$1.has(t)) {
                return this.$1.get(t) || null;
            }
            const e = this.$3.get(t);
            if (e != null) {
                if (Date.now() < e.expirationTime) {
                    return e.value;
                }
                this.$3.delete(t);
            }
            return null;
        }
        clear() {
            this.$1.clear();
            this.clearNextHeartbeatStore();
        }
        clearNextHeartbeatStore() {
            this.$2.clear();
        }
        clearSpanStore() {
            this.$4.clear();
        }
        getAllSpanData() {
            const e = {};
            this.$4.forEach((t, n)=>{
                e[`${n}`] = t;
            });
            return e;
        }
        $9() {
            const e = Date.now();
            for (const [n, r] of this.$3){
                if (e >= r.expirationTime) {
                    this.$3.delete(n);
                }
            }
        }
        getTimedStoreData() {
            this.$9();
            return Object.fromEntries(Array.from(this.$3.entries()).map(([t, n])=>[
                    t,
                    n.value
                ]));
        }
        getAll() {
            return babelHelpers.extends({}, this.getTimedStoreData(), Object.fromEntries(this.$1), Object.fromEntries(this.$2));
        }
        $7(t, n) {
            const e = r("RSTConfig").logSpanAnnotationsMapping.get(t);
            if (e != null) {
                try {
                    return e(t, n);
                } catch (error) {
                    r("FBLogger")("responsive-tracker").catching(r("getErrorSafe")(error)).warn("Failed to attach built-in annotations for key %s", t);
                }
            }
            return n;
        }
    }
    const d = new c;
    l.loggingDataStore = d;
}, 98);
__d("RSTClearExternalLoggingDataStoreMainThread", [
    "RSTEvents",
    "RSTEventsMessageQueue",
    "RSTExternalLoggingDataStoreMainThread"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e() {
        o("RSTExternalLoggingDataStoreMainThread").loggingDataStore.clearNextHeartbeatStore();
    }
    function s() {
        o("RSTEventsMessageQueue").subscribe(o("RSTEvents").RSTEvent.HEART_BEAT, e);
        o("RSTEventsMessageQueue").subscribe(o("RSTEvents").RSTEvent.BROWSER_TAB_BACKGROUND, e);
        o("RSTEventsMessageQueue").subscribe(o("RSTEvents").RSTEvent.BROWSER_TAB_FOREGROUND, e);
    }
    l.registerClearExternalLoggingData = s;
}, 98);
__d("RSTConstants", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = {
        incidentType: {
            unresponsive: "unresponsive",
            unexpectedExit: "unexpected-exit"
        },
        reportReason: {
            unrecoverable: "unrecoverable-unresponsive",
            recoverable: "recoverable-unresponsive",
            unexpectedExit: "unexpected-exit"
        },
        executionContext: {
            mainThread: "main-thread",
            webWorker: "web-worker",
            sharedWorker: "shared-worker",
            serviceWorker: "service-worker",
            unknown: "unknown"
        }
    };
    i.default = e;
}, 66);
__d("RSTUtils", [
    "Promise",
    "RSTConfig",
    "RSTConstants",
    "asyncToGeneratorRuntime",
    "uuidv4"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = S().toUpperCase();
    const u = p();
    const c = r("uuidv4")();
    const d = m();
    function m() {
        if (u && typeof self !== "undefined" && typeof self.setTimeout === "function") {
            return self;
        }
        return window;
    }
    function p() {
        if (typeof WorkerGlobalScope !== "undefined") {
            return true;
        }
        return typeof document === "undefined";
    }
    function _() {}
    function f() {}
    function g(e) {
        if (e == null) {
            return "";
        }
        const t = new URL(e);
        return t.origin + t.pathname;
    }
    function h() {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (typeof scheduler !== "undefined" && typeof scheduler.yield === "function") {
                return scheduler.yield();
            }
            return new (e || (e = n("Promise")))(function(e) {
                return d.setTimeout(e, 0);
            });
        });
        return y.apply(this, arguments);
    }
    function C() {
        return "indexedDB" in d;
    }
    function b(e) {
        if (e != null) {
            return String(e);
        }
        return null;
    }
    function v(e) {
        const e_componentName = e.componentName;
        const n = k(e.componentText);
        if (e_componentName == null && n == null) {
            return null;
        }
        if (n == null) {
            return e_componentName;
        }
        if (e_componentName == null) {
            return ` ["${n}"]`;
        }
        return `${e_componentName} ["${n}"]`;
    }
    function S() {
        if (typeof window !== "undefined" && typeof window.document !== "undefined") {
            return r("RSTConstants").executionContext.mainThread;
        }
        if (typeof self !== "undefined") {
            if (typeof ServiceWorkerGlobalScope !== "undefined" && self instanceof ServiceWorkerGlobalScope) {
                return r("RSTConstants").executionContext.serviceWorker;
            }
            if (typeof SharedWorkerGlobalScope !== "undefined" && self instanceof SharedWorkerGlobalScope) {
                return r("RSTConstants").executionContext.sharedWorker;
            }
            if (typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope) {
                return r("RSTConstants").executionContext.webWorker;
            }
        }
        return r("RSTConstants").executionContext.unknown;
    }
    function R(e) {
        return e.startsWith("@");
    }
    function L(e) {
        return `@${e}`;
    }
    function E() {
        return S() === r("RSTConstants").executionContext.webWorker;
    }
    function k(componentText) {
        if (componentText == null) {
            return null;
        }
        return componentText.replace(/[\[\]\",\']/g, "");
    }
    l.debugLogImportant = _;
    l.debugLog = f;
    l.sanitizeURL = g;
    l.scheduleYield = h;
    l.isIndexedDBSupported = C;
    l.intToString = b;
    l.getInteractionDetail = v;
    l.getExecutionContext = S;
    l.isExternalAnnotationKey = R;
    l.getExternalAnnotationKey = L;
    l.isInWebWorker = E;
}, 98);
__d("RSTUtilsMainThread", [
    "AirwaveAppIdUtils",
    "CurrentUser",
    "RSTConfig",
    "gkx"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = new Map;
    function s(t) {
        if (e.has(t)) {
            const r = e.get(t) ?? 0;
            if (r <= 0) {
                e.delete(t);
                return false;
            }
            e.set(t, r - 1);
            return true;
        }
        e.set(t, Math.floor(Math.random() * 10));
        return true;
    }
    const u = r("gkx")("22276");
    function c(e) {
        return e === `${167028690535322}` || u || window.location.hostname === "web.whatsapp.com" || window.location.hostname.endsWith(".web.whatsapp.com") || window.location.hostname.endsWith(".dev-web.whatsapp.com");
    }
    const d = r("CurrentUser").getAppID();
    function m(e) {
        if (c(e)) {
            return "WhatsApp_Web";
        }
        if (o("AirwaveAppIdUtils").isAirwaveWebAppId(e)) {
            return "instagram_airwave";
        }
        switch(e){
            case `${119211728144504}`:
                return "Ads";
            case `${2220391788200892}`:
                return "Comet";
            case `${2094176354154603}`:
                return "Business";
            default:
                return "(Unset-in-RST)";
        }
    }
    const p = new Set([
        119211728144504,
        2094176354154603,
        514771569228061
    ].map((e)=>`${e}`));
    const _ = d != null && p.has(d);
    const f = m(d);
    function g(e) {
        if (e == null) {
            return null;
        }
        for (const t of e){
            if (!r("RSTConfig").isReactComponentNameBlocked(t)) {
                return t;
            }
        }
        return null;
    }
    function h(e, t, n = r("RSTConfig").DEFAULT_REACT_COMPONENT_CONTEXT_SIZE) {
        if (e == null) {
            return null;
        }
        const o = new Set;
        const a = [];
        for (const i of e){
            if (a.length >= n) {
                break;
            }
            if (!o.has(i) && !t(i)) {
                a.push(i);
                o.add(i);
            }
        }
        return a;
    }
    l.shouldSkipProcessingIncident = s;
    l.isMonetizationApp = _;
    l.appName = f;
    l.getAllowListedComponentName = g;
    l.getReactComponentContext = h;
}, 98);
__d("RSTIncidentLoggingMainThread", [
    "Env",
    "InteractionTracingConfigDefault",
    "QPLEvent",
    "RSTConfig",
    "RSTConstants",
    "RSTEvents",
    "RSTEventsMessageQueue",
    "RSTUtils",
    "RSTUtilsMainThread",
    "requireDeferred"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = r("requireDeferred")("LogBrowserCrashReportsLowerRetentionFalcoEvent").__setRef("RSTIncidentLoggingMainThread");
    const c = new Set;
    function d() {
        return c;
    }
    function m(e) {
        const e_unresponsiveEvent = e.unresponsiveEvent;
        const h = e_unresponsiveEvent != null ? Date.now() - e_unresponsiveEvent?.detectTime : 0;
        const y = e_unresponsiveEvent?.lastHeartBeatMetadata;
        const brsid = y?.brsid != null ? String(y.brsid) : null;
        const client_push_phase = y?.cpp ?? null;
        const canonical_route = y?.ccrt ?? null;
        const client_revision = y?.cr ?? null;
        const R = y?.annotations ?? {};
        const L = y?.spans ?? {};
        const reason = e.isRecoverable ? r("RSTConstants").reportReason.recoverable : e_unresponsiveEvent?.incidentType !== r("RSTConstants").incidentType.unexpectedExit ? r("RSTConstants").reportReason.unrecoverable : r("RSTConstants").reportReason.unexpectedExit;
        const k = e_unresponsiveEvent?.traces;
        const I = g(k);
        const { qplMarkerId, tracePolicy } = I;
        const x = f(e_unresponsiveEvent?.lastTrace);
        const rst_annotations = p(R, L, e_unresponsiveEvent);
        return {
            application_name: o("RSTUtilsMainThread").appName,
            reason,
            url: o("RSTUtils").sanitizeURL(y?.url),
            age: String(h),
            brsid,
            qpl_event_marker_id: o("RSTUtils").intToString(qplMarkerId),
            trace_policy: tracePolicy,
            last_qpl_event_marker_id: o("RSTUtils").intToString(x.qplMarkerId),
            last_trace_policy: x.tracePolicy,
            ad_account_id: y?.i2 ?? "0",
            browser_user_agent: navigator.userAgent,
            business_id: y?.i3 ?? "0",
            canonical_route,
            client_push_phase,
            client_revision,
            freeze_time_in_ms: String(e_unresponsiveEvent?.unrecoverLastsForMs ?? 0),
            normalized_component_stack: y?.rcs ?? [],
            session_start_timestamp_in_ms: String(y?.st ?? ""),
            rst_annotations
        };
    }
    function p(e, t, n) {
        const a = [];
        for (const i of Object.keys(e)){
            a.push(`${i}:${e[i]}`);
        }
        const l = n?.detectTime;
        for (const u of Object.keys(t)){
            const d = t[u];
            const m = l != null ? l - d.start : 0;
            a.push(`span:${d.name}:${d.annotation ?? ""}:${m}`);
        }
        a.push(`processingBrsid:${(s || (s = r("Env"))).brsid ?? ""}`);
        _(a, n);
        return a;
    }
    function _(e, t) {
        if (!r("RSTConfig").shouldCollectAdditionalMetadata()) {
            return e;
        }
        const n = t?.lastTrace;
        const o = n?.endTimestamp;
        const a = t?.detectTime;
        if (o != null && a != null) {
            e.push(`msSinceLastInteractionEnds:${a - o}`);
        }
        const i = t ?? {};
        const i_incidentID = i.incidentID;
        if (i_incidentID != null) {
            e.push(`incidentID:${i_incidentID}`);
        }
        if (t?.isFirstUnrecoverable === true) {
            e.push("isFirstUnrecoverable:true");
        }
        if (t?.hasOverlappingResponsiveIndicents === true) {
            e.push("hasOverlappingResponsiveIndicents:true");
        }
        if (t?.hasDecryptionError === true) {
            e.push("hasDecryptionError:true");
        }
        return e;
    }
    function f(t) {
        if (t == null) {
            return {
                qplMarkerId: null,
                tracePolicy: null
            };
        }
        if (t.qplEvent == null) {
            return {
                qplMarkerId: null,
                tracePolicy: null
            };
        }
        const qplMarkerId = (e || (e = o("QPLEvent"))).getMarkerId(t.qplEvent);
        const t_tracePolicy = t.tracePolicy;
        return {
            qplMarkerId,
            tracePolicy: t_tracePolicy
        };
    }
    function g(e) {
        if (e == null) {
            return {
                qplMarkerId: null,
                tracePolicy: null
            };
        }
        let t = 0;
        let n = null;
        e.forEach((e)=>{
            if (!(e?.qplEvent == null || e.tracePolicy === o("InteractionTracingConfigDefault").DEFAULT_TRACING_CONFIG.defaultTracePolicy)) {
                if (e.startTime > t) {
                    t = e.startTime;
                    n = e;
                }
            }
        });
        return f(n);
    }
    function h(unresponsiveEvent, isRecoverable) {
        u.onReady(function({ log }) {
            log(function() {
                return m({
                    unresponsiveEvent,
                    isRecoverable
                });
            });
        });
    }
    function y() {
        if (r("RSTConfig").SHOULD_SAMPLE_RECOVERABLE) {
            o("RSTEventsMessageQueue").subscribe(o("RSTEvents").RSTEvent.RECOVERABLE_UNRESPONSIVENESS, function({ unresponsiveEventRecord }) {
                if (!(unresponsiveEventRecord == null || c.has(unresponsiveEventRecord.incidentID))) {
                    c.add(unresponsiveEventRecord.incidentID);
                    o("RSTUtils").debugLogImportant("logging recoverable unresponsiveness event");
                    h(unresponsiveEventRecord, true);
                }
            });
        }
        o("RSTEventsMessageQueue").subscribe(o("RSTEvents").RSTEvent.CRASH_INCIDENT, function({ unresponsiveEventRecord }) {
            if (unresponsiveEventRecord == null || c.has(unresponsiveEventRecord.incidentID)) {
                o("RSTUtils").debugLogImportant("not logging incident because it was already logged");
                return;
            }
            if (r("RSTConfig").ONE_UNRECOVERABLE_INCIDENT_PER_SESSION && unresponsiveEventRecord.isFirstUnrecoverable !== true) {
                const a = unresponsiveEventRecord.incidentType ?? "";
                o("RSTUtils").debugLogImportant(`not logging unrecoverable ${a} event (because it's not the first incident in the session)`);
                return;
            }
            c.add(unresponsiveEventRecord.incidentID);
            o("RSTUtils").debugLogImportant("logging unrecoverable unresponsiveness event:");
            h(unresponsiveEventRecord, false);
        });
    }
    l.getLoggedIncidentIDs = d;
    l.registerIncidentLogging = y;
}, 98);
__d("RSTCrypt", [
    "RSTConfig"
], function(t, n, r, o, a, i, l) {
    "use strict";
    class e {
        encrypt(t) {
            if (!r("RSTConfig").ENCRYPT_DB) {
                return t;
            }
            try {
                return btoa(t);
            } catch (e) {
                return t;
            }
        }
        decrypt(t) {
            if (r("RSTConfig").ENCRYPT_DB) {
                return this.decryptEnforce(t);
            }
            return {
                result: t,
                exception: false
            };
        }
        decryptEnforce(t) {
            try {
                return {
                    result: atob(t),
                    exception: false
                };
            } catch (e) {
                return {
                    result: t,
                    exception: true
                };
            }
        }
    }
    const s = new e;
    l.default = s;
}, 98);
__d("RSTIndexedDB", [
    "FBLogger",
    "Promise",
    "RSTConfig",
    "RSTCrypt",
    "RSTEvents",
    "RSTEventsMessageQueue",
    "RSTUtils",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    try {
        s = self.indexedDB;
    } catch (e) {}
    const u = (()=>{
        function t() {}
        const t_prototype = t.prototype;
        t_prototype.initDB = function() {
            const t = this;
            return new (e || (e = n("Promise")))(function(e, n) {
                if (s == null) {
                    return n("IndexedDB is not supported in this browser");
                }
                if (t.$1 != null) {
                    return e(t.$1);
                }
                const o = s.open(r("RSTConfig").INDEX_DB_NAME, r("RSTConfig").INDEX_DB_VERSION);
                o.onupgradeneeded = function() {
                    t.$1 = o.result;
                    t.$2();
                    t.$3();
                    t.$4(r("RSTConfig").INDEX_DB_TABLE_NAME, true);
                };
                o.onsuccess = function(n) {
                    t.$1 = n.target.result;
                    t.$3();
                    e(n.target.result);
                };
                o.onblocked = function() {
                    n("Database open blocked by another tab");
                };
                o.onerror = function(e) {
                    t.closeDBConnection();
                    const r = o.error || e.target.error;
                    n(`Database error: ${r?.message || String(r) || "Unknown error"}`);
                };
            });
        };
        t_prototype.$2 = function() {
            const e = this.$1;
            if (e != null) {
                for (const t of r("RSTConfig").PAST_INDEX_DB_TABLE_NAMES){
                    if (e.objectStoreNames.contains(t)) {
                        e.deleteObjectStore(t);
                    }
                }
            }
        };
        t_prototype.$3 = function() {
            const e = this;
            if (!(this.$1 == null || this.$1.onversionchange != null)) {
                this.$1.onversionchange = function() {
                    e.closeDBConnection();
                };
            }
        };
        t_prototype.$4 = function(t, n = false) {
            const e = this.$1;
            if (!(e == null || e.objectStoreNames.contains(t))) {
                if (e.objectStoreNames.contains(t)) {
                    if (!n) {
                        return;
                    }
                    e.deleteObjectStore(t);
                }
                e.createObjectStore(t, {
                    autoIncrement: true
                });
            }
        };
        t_prototype.$5 = function(t) {
            if (r("RSTConfig").ENCRYPT_DB) {
                return r("RSTCrypt").encrypt(JSON.stringify(t));
            }
            return t;
        };
        t_prototype.$6 = function(t) {
            if (t == null) {
                return null;
            }
            let e = false;
            let n = null;
            if (typeof t === "string") {
                const o = r("RSTCrypt").decryptEnforce(t);
                n = JSON.parse(o.result);
                e = o.exception;
            } else {
                n = t;
            }
            if (typeof n !== "object" || n == null || n.incidentID == null) {
                throw r("FBLogger")("responsive-tracker").mustfixThrow("data parsing error");
            }
            const a = n;
            a.hasDecryptionError = e;
            return a;
        };
        t_prototype.$7 = function(t = null) {
            this.closeDBConnection();
            o("RSTUtils").debugLogImportant("indexedDB error, clearing the object store");
            r("FBLogger")("responsive-tracker").catching(t).warn("Failed to operate on IndexedDB, clearing the object store");
            this.clearObjectStore().catch((e)=>{
                r("FBLogger")("responsive-tracker").catching(r("getErrorSafe")(e)).warn("Failed to clear object store after IndexedDB error");
            });
        };
        t_prototype.$8 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = [];
                const n = 50;
                try {
                    for(let r = 0; r < e.length; r += n){
                        const a = e.slice(r, r + n);
                        for (const i of a){
                            const l = this.$6(i);
                            if (l != null) {
                                t.push(l);
                            }
                        }
                        if (r + n < e.length) {
                            yield o("RSTUtils").scheduleYield();
                        }
                    }
                } catch (error) {
                    this.$7(error);
                }
                return t;
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.$9 = function(t, n, r) {
            const e = this;
            t.onerror = function(t) {
                e.closeDBConnection();
                const l = t?.target?.errorCode ?? "";
                const s = `Failed to handle ${r} request in IndexedDB.${l}`;
                o("RSTUtils").debugLogImportant(s);
                n(s);
            };
        };
        t_prototype.$10 = function(t, n, r) {
            const e = this;
            t.onerror = function(t) {
                e.closeDBConnection();
                const l = t?.target?.errorCode ?? "";
                const s = `Failed to handle ${r} transaction in IndexedDB.${l}`;
                o("RSTUtils").debugLogImportant(s);
                n(s);
            };
        };
        t_prototype.closeDBConnection = function() {
            const e = this.$1;
            if (e != null) {
                try {
                    e.close();
                } catch (e) {}
                this.$1 = null;
            }
        };
        t_prototype.persistLog = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const MAX_INCIDENT_COUNT = r("RSTConfig").MAX_INCIDENT_COUNT;
                if (!(MAX_INCIDENT_COUNT != null && (yield this.countIncidentsInDB()) >= MAX_INCIDENT_COUNT)) {
                    yield this.persistEventToDB(e);
                }
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.countIncidentsInDB = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const t = this;
                yield this.initDB();
                return new (e || (e = n("Promise")))(function(e, n) {
                    if (t.$1 == null) {
                        n("indexed db instance is not initialized yet");
                        return;
                    }
                    const o = t.$1.transaction([
                        r("RSTConfig").INDEX_DB_TABLE_NAME
                    ], "readonly");
                    const a = o.objectStore(r("RSTConfig").INDEX_DB_TABLE_NAME);
                    const i = a.count();
                    i.onsuccess = function() {
                        e(i.result);
                    };
                    t.$9(i, n, "countIncidentsInDB");
                    t.$10(o, n, "countIncidentsInDB");
                });
            });
            function o() {
                return t.apply(this, arguments);
            }
            return o;
        })();
        t_prototype.persistEventToDB = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                const a = this;
                yield this.initDB();
                const loggingTime = Date.now();
                const l = babelHelpers.extends({
                    loggingTime
                }, t);
                o("RSTEventsMessageQueue").notify(o("RSTEvents").RSTEvent.LOGGING_UNRESPONSIVENESS_TO_INDEXDB, {
                    unresponsiveEventRecord: l
                });
                return new (e || (e = n("Promise")))(function(e, t) {
                    if (a.$1 == null) {
                        t("indexed db instance is not initialized yet");
                        return;
                    }
                    const n = a.$1.transaction([
                        r("RSTConfig").INDEX_DB_TABLE_NAME
                    ], "readwrite");
                    const o = n.objectStore(r("RSTConfig").INDEX_DB_TABLE_NAME);
                    const i = o.add(a.$5(l));
                    i.onsuccess = function() {
                        e();
                    };
                    a.$9(i, t, "persistEventToDB");
                    a.$10(n, t, "persistEventToDB");
                });
            });
            function a(e) {
                return t.apply(this, arguments);
            }
            return a;
        })();
        t_prototype.readEventsFromDB = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const t = this;
                yield this.initDB();
                const o = yield new (e || (e = n("Promise")))(function(e, n) {
                    if (t.$1 == null) {
                        n("indexed db instance is not initialized yet");
                        return;
                    }
                    const o = t.$1.transaction([
                        r("RSTConfig").INDEX_DB_TABLE_NAME
                    ], "readonly");
                    const a = o.objectStore(r("RSTConfig").INDEX_DB_TABLE_NAME);
                    const i = a.getAll();
                    i.onsuccess = function() {
                        e(i.result);
                    };
                    t.$9(i, n, "readEventsFromDB");
                    t.$10(o, n, "readEventsFromDB");
                });
                return this.$8(o);
            });
            function o() {
                return t.apply(this, arguments);
            }
            return o;
        })();
        t_prototype.$11 = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, a) {
                const i = this;
                yield this.initDB();
                return new (e || (e = n("Promise")))(function(e, n) {
                    if (i.$1 == null) {
                        n("indexed db instance is not initialized yet");
                        return;
                    }
                    const l = i.$1.transaction([
                        r("RSTConfig").INDEX_DB_TABLE_NAME
                    ], "readwrite");
                    const s = l.objectStore(r("RSTConfig").INDEX_DB_TABLE_NAME);
                    const u = s.openCursor();
                    u.onsuccess = function(n) {
                        const result = n.target.result;
                        if (result == null) {
                            o("RSTUtils").debugLog(`Finished ${a} over incidents in indexDB`);
                            e();
                            return;
                        }
                        try {
                            const l = i.$6(result.value);
                            if (l == null) {
                                o("RSTUtils").debugLog("Unable to parse an incident, deleting it from indexDB");
                                result.delete();
                            } else {
                                const s = t(l);
                                if (s === "delete") {
                                    o("RSTUtils").debugLog(`Deleting incident ${l.incidentID} from indexDB`);
                                    result.delete();
                                } else if (s === "update") {
                                    o("RSTUtils").debugLog(`Update incident ${l.incidentID} in indexDB`);
                                    result.update(i.$5(l));
                                }
                            }
                        } catch (e) {
                            result.delete();
                        }
                        result.continue();
                    };
                    i.$9(u, n, a);
                    i.$10(l, n, a);
                });
            });
            function a(e, n) {
                return t.apply(this, arguments);
            }
            return a;
        })();
        t_prototype.mutateIncidentsInDB = function(t) {
            return this.$11(t, "mutateIncidentsInDB");
        };
        t_prototype.updateIncidentInDB = function(t) {
            return this.$11(function(e) {
                if (t(e)) {
                    return "update";
                }
                return "keep";
            }, "updateIncidentInDB");
        };
        t_prototype.clearIncidentFromDB = function(t) {
            return this.$11(function(e) {
                if (t.has(e.incidentID)) {
                    return "delete";
                }
                return "keep";
            }, "clearIncidentFromDB");
        };
        t_prototype.clearObjectStore = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                const a = this;
                if (t === undefined) {
                    t = r("RSTConfig").INDEX_DB_TABLE_NAME;
                }
                yield this.initDB();
                o("RSTUtils").debugLogImportant("clearing object store:", t);
                return new (e || (e = n("Promise")))(function(e, n) {
                    try {
                        const r = a.$1;
                        if (r == null) {
                            n("indexed db instance is not initialized yet");
                            return;
                        }
                        if (!r.objectStoreNames.contains(t)) {
                            e();
                            return;
                        }
                        const o = r.transaction([
                            t
                        ], "readwrite");
                        const i = o.objectStore(t);
                        const l = i.clear();
                        l.onsuccess = function() {
                            e();
                        };
                        l.onerror = function(e) {
                            a.closeDBConnection();
                            n(`Error clearing the store: ${e.target.errorCode}`);
                        };
                        a.$9(l, n, "clearObjectStore");
                        a.$10(o, n, "clearObjectStore");
                    } catch (t) {
                        e();
                    }
                });
            });
            function a(e) {
                return t.apply(this, arguments);
            }
            return a;
        })();
        t_prototype.deleteEventFromDB = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                const o = this;
                yield this.initDB();
                return new (e || (e = n("Promise")))(function(e, n) {
                    if (o.$1 == null) {
                        n("indexed db instance is not initialized yet");
                        return;
                    }
                    const a = o.$1.transaction([
                        r("RSTConfig").INDEX_DB_TABLE_NAME
                    ], "readwrite");
                    const i = a.objectStore(r("RSTConfig").INDEX_DB_TABLE_NAME);
                    const l = i.delete(t);
                    l.onsuccess = function() {
                        e();
                    };
                    o.$9(l, n, "deleteEventFromDB");
                    o.$10(a, n, "deleteEventFromDB");
                });
            });
            function o(e) {
                return t.apply(this, arguments);
            }
            return o;
        })();
        return t;
    })();
    l.RSTIndexedDB = u;
}, 98);
__d("RSTIndexedDBSafe", [
    "FBLogger",
    "RSTConfig",
    "RSTIndexedDB",
    "RSTUtils",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = o("RSTUtils").isIndexedDBSupported();
    const s = ((t)=>{
        function a(...o) {
            let n;
            n = t.call(this, ...o) || this;
            n.$RSTIndexedDBSafe$p_1 = !e;
            n.$RSTIndexedDBSafe$p_2 = 0;
            n.$RSTIndexedDBSafe$p_3 = [
                "The database connection is closing",
                "Can't start a transaction on a closed database",
                "A version change transaction is running"
            ];
            return babelHelpers.assertThisInitialized(n) || babelHelpers.assertThisInitialized(n);
        }
        babelHelpers.inheritsLoose(a, t);
        const a_prototype = a.prototype;
        a_prototype.guardDB = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
                if (this.$RSTIndexedDBSafe$p_1) {
                    return t();
                }
                try {
                    return yield e();
                } catch (error) {
                    this.closeDBConnection();
                    typeof error === "object" && error != null && "stack" in error && error.stack;
                    const a = r("getErrorSafe")(error);
                    a?.stack;
                    if (!this.$RSTIndexedDBSafe$p_4(a)) {
                        try {
                            return t();
                        } catch (e) {}
                    }
                    if (this.$RSTIndexedDBSafe$p_2 < r("RSTConfig").MAX_DB_FAILED_COUNT) {
                        this.$RSTIndexedDBSafe$p_2++;
                    }
                    if (this.$RSTIndexedDBSafe$p_2 >= r("RSTConfig").MAX_DB_FAILED_COUNT) {
                        this.$RSTIndexedDBSafe$p_1 = true;
                        const i = `Failed to ${n} ${this.$RSTIndexedDBSafe$p_2} times disabling RST indexedDB`;
                        o("RSTUtils").debugLogImportant(i);
                        r("FBLogger")("responsive-tracker").catching(a).warn(`${i}: %s`, a.message);
                    }
                    return t();
                }
            });
            function t(t, n, r) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.$RSTIndexedDBSafe$p_4 = function(t) {
            if (t == null) {
                return false;
            }
            const e = typeof t === "string" ? t : t?.message;
            if (typeof e !== "string") {
                return true;
            }
            return !this.$RSTIndexedDBSafe$p_3.some((t)=>e.includes(t));
        };
        a_prototype.initDB = function() {
            const e = this;
            return this.guardDB(function() {
                return t.prototype.initDB.call(e);
            }, function() {
                return null;
            }, "initDB");
        };
        a_prototype.persistLog = function(n) {
            const e = this;
            return this.guardDB(function() {
                return t.prototype.persistLog.call(e, n);
            }, function() {}, "persistLog");
        };
        a_prototype.persistEventToDB = function(n) {
            const e = this;
            return this.guardDB(function() {
                return t.prototype.persistEventToDB.call(e, n);
            }, function() {}, "persistEventToDB");
        };
        a_prototype.readEventsFromDB = function() {
            const e = this;
            return this.guardDB(function() {
                return t.prototype.readEventsFromDB.call(e);
            }, function() {
                return [];
            }, "readEventsFromDB");
        };
        a_prototype.mutateIncidentsInDB = function(n) {
            const e = this;
            return this.guardDB(function() {
                return t.prototype.mutateIncidentsInDB.call(e, n);
            }, function() {}, "mutateIncidentsInDB");
        };
        a_prototype.updateIncidentInDB = function(n) {
            const e = this;
            return this.guardDB(function() {
                return t.prototype.updateIncidentInDB.call(e, n);
            }, function() {}, "updateIncidentInDB");
        };
        a_prototype.clearIncidentFromDB = function(n) {
            const e = this;
            return this.guardDB(function() {
                return t.prototype.clearIncidentFromDB.call(e, n);
            }, function() {}, "clearIncidentFromDB");
        };
        a_prototype.countIncidentsInDB = function() {
            const e = this;
            return this.guardDB(function() {
                return t.prototype.countIncidentsInDB.call(e);
            }, function() {
                return 0;
            }, "countIncidentsInDB");
        };
        a_prototype.clearObjectStore = function(n) {
            const e = this;
            if (n === undefined) {
                n = r("RSTConfig").INDEX_DB_TABLE_NAME;
            }
            return this.guardDB(function() {
                return t.prototype.clearObjectStore.call(e, n);
            }, function() {}, "clearObjectStore");
        };
        a_prototype.deleteEventFromDB = function(n) {
            const e = this;
            return this.guardDB(function() {
                return t.prototype.deleteEventFromDB.call(e, n);
            }, function() {}, "deleteEventFromDB");
        };
        a_prototype.maybeClearObsoleteIncidents = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                try {
                    const e = yield this.readEventsFromDB();
                    const t = new Set;
                    e.forEach((e)=>{
                        if (e != null && typeof e.incidentID === "string" && (typeof e.detectTime !== "number" || Date.now() - e.detectTime > (1 + Math.random()) * r("RSTConfig").OBSOLETE_PENDING_INCIDENT_THRESHOLD_MS)) {
                            t.add(e.incidentID);
                        }
                    });
                    yield this.clearIncidentFromDB(t);
                } catch (error) {
                    const o = r("getErrorSafe")(error);
                    r("FBLogger")("responsive-tracker").catching(o).warn(o.message ?? "Failed to clear obsolete incidents");
                }
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        return a;
    })(o("RSTIndexedDB").RSTIndexedDB);
    const u = new s;
    l.default = u;
}, 98);
__d("RSTLocalStorageMainThread", [
    "FBLogger",
    "WebStorage",
    "fb-error"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = "RSTData";
    const u = 200;
    const c = 2880 * 60 * 1000;
    class d {
        constructor(){
            this.$2 = true;
            this.$1 = (e || (e = r("WebStorage"))).getLocalStorage();
            this.probeAndInit();
        }
        $3(t, n) {
            const e = r("fb-error").getErrorSafe(t);
            r("FBLogger")("responsive-tracker").catching(e).warn("%s error in RSTLocalStorage", n);
        }
        $4() {
            if (!this.$2) {
                return {};
            }
            try {
                const t = this.$1?.getItem(s);
                const n = t != null ? JSON.parse(t) : {};
                if (n !== null && typeof n === "object") {
                    return n;
                }
                return {};
            } catch (error) {
                this.$3(error, "readStore");
                return {};
            }
        }
        $5(t) {
            if (this.$2) {
                try {
                    this.$1?.setItem(s, JSON.stringify(t));
                } catch (error) {
                    this.$3(error, "writeStore");
                    return;
                }
            }
        }
        probeAndInit() {
            if (this.$1 == null) {
                this.$2 = false;
                return;
            }
            const e = this.$1;
            try {
                const t = e.getItem(s);
                if (t != null) {
                    return;
                }
                e.setItem(s, "{}");
            } catch (error) {
                this.$3(error, "probeAndInit");
                this.$2 = false;
            }
        }
        cleanUpExpiredEntries() {
            if (this.$2) {
                try {
                    const e = this.$6(this.$4());
                    this.$5(e);
                } catch (error) {
                    this.$3(error, "cleanUpExpiredEntries");
                    return;
                }
            }
        }
        $6(t) {
            const e = Date.now();
            for (const [r, o] of Object.entries(t)){
                if (e - o.lastWriteTime > c || typeof o.lastWriteTime !== "number") {
                    delete t[r];
                }
            }
            return t;
        }
        $7(t) {
            const e = Object.entries(t);
            if (e.length <= u) {
                return t;
            }
            e.sort((e, t)=>e[1].lastWriteTime - t[1].lastWriteTime);
            const n = e.slice(e.length - u);
            return Object.fromEntries(n);
        }
        set(t, n) {
            if (this.$2) {
                let e = this.$4();
                e = this.$6(e);
                e[t] = {
                    value: n,
                    lastWriteTime: Date.now()
                };
                e = this.$7(e);
                this.$5(e);
            }
        }
        get(t) {
            if (!this.$2) {
                return null;
            }
            const e = this.$4();
            const n = e[t];
            if (n) {
                return n.value;
            }
            return null;
        }
        delete(t) {
            try {
                if (!this.$2) {
                    return;
                }
                const e = this.$4();
                delete e[t];
                this.$5(e);
            } catch (error) {
                this.$3(error, "delete");
                return;
            }
        }
        has(t) {
            if (!this.$2) {
                return false;
            }
            const e = this.$4();
            const n = e[t];
            if (n) {
                return Date.now() - n.lastWriteTime <= c;
            }
            return false;
        }
        clear() {
            if (this.$2) {
                this.$5({});
            }
        }
        keys() {
            if (!this.$2) {
                return [];
            }
            const e = this.$6(this.$4());
            return Object.keys(e);
        }
        entries() {
            if (!this.$2) {
                return [];
            }
            const e = this.$6(this.$4());
            return Object.entries(e).map(([t, n])=>[
                    t,
                    n.value
                ]);
        }
    }
    const m = new d;
    l.default = m;
}, 98);
__d("RSTMarkFirstUnrecoverableMainThread", [
    "FBLogger",
    "RSTLocalStorageMainThread",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = "rst-first-unrecoverable-marking";
    function s(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const { incidentID, sessionID } = t;
            const a = `${sessionID}:first-unrecoverable`;
            try {
                if ("locks" in navigator) {
                    yield navigator.locks.request(e, function() {
                        if (!r("RSTLocalStorageMainThread").has(a)) {
                            r("RSTLocalStorageMainThread").set(a, incidentID);
                            t.isFirstUnrecoverable = true;
                        }
                    });
                }
            } catch (error) {
                r("FBLogger")("responsive-tracker").catching(r("getErrorSafe")(error)).warn("Failed to acquire lock for marking first unrecoverable incident");
            }
        });
        return u.apply(this, arguments);
    }
    l.markFirstUnrecoverableIncident = s;
}, 98);
__d("RSTSessionID", [
    "Env",
    "uuidv4"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s = null;
    function u() {
        if (s != null) {
            return s;
        }
        const t = (e || (e = r("Env"))).brsid != null ? `${(e || (e = r("Env"))).brsid}` : r("uuidv4")();
        const n = `rst-${Date.now()}`;
        s = `${n}-${t}`;
        return s;
    }
    l.getSessionID = u;
}, 98);
__d("ResponsiveTrackerMainThread", [
    "ClientServiceWorkerMessage",
    "FBLogger",
    "Promise",
    "RSTCloseObserver",
    "RSTConfig",
    "RSTConstants",
    "RSTEvents",
    "RSTEventsMessageQueue",
    "RSTEventsRegisterUseCasesMainThread",
    "RSTIncidentLoggingMainThread",
    "RSTIndexedDBSafe",
    "RSTLocalStorageMainThread",
    "RSTMarkFirstUnrecoverableMainThread",
    "RSTMetadataCollectorMainThread",
    "RSTMetadataMainThread",
    "RSTSessionID",
    "RSTUtils",
    "RSTUtilsMainThread",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    r("RSTEventsRegisterUseCasesMainThread")();
    const s = (()=>{
        function t() {
            this.$1 = null;
            this.$2 = new Set;
            this.$3 = false;
            this.$4 = false;
        }
        const t_prototype = t.prototype;
        t_prototype.init = function(t) {
            this.$1 = t;
            this.startLoggingUnresponsiveEvents();
            this.startSendingHeartBeatToWorker();
            this.startMonitorPageHiding();
            this.startMonitoringPageUnload();
            o("RSTMetadataCollectorMainThread").start();
            r("RSTLocalStorageMainThread").probeAndInit();
            r("RSTIndexedDBSafe").maybeClearObsoleteIncidents();
        };
        t_prototype.startLoggingUnresponsiveEvents = function() {
            const e = this;
            this.logAndDeleteUnresponsiveEvents();
            window.setInterval(function() {
                e.logAndDeleteUnresponsiveEvents();
            }, r("RSTConfig").MAIN_THREAD_LOGGING_INTERVAL_MS);
        };
        t_prototype.startSendingHeartBeatToWorker = function() {
            const e = this;
            window.setInterval(function() {
                e.postEvent(o("RSTEvents").RSTEvent.HEART_BEAT);
            }, r("RSTConfig").HEART_BEAT_INTERVAL_MS);
        };
        t_prototype.startMonitorPageHiding = function() {
            const e = this;
            document.addEventListener("visibilitychange", function() {
                if (document.hidden) {
                    e.postEvent(o("RSTEvents").RSTEvent.BROWSER_TAB_BACKGROUND);
                } else {
                    e.postEvent(o("RSTEvents").RSTEvent.BROWSER_TAB_FOREGROUND);
                }
            });
        };
        t_prototype.startMonitoringPageUnload = function() {
            o("RSTCloseObserver").initPageCloseObserver();
        };
        t_prototype.postEvent = function(t, n = o("RSTMetadataMainThread").getMainThreadMetadata()) {
            const e = {
                type: r("RSTConfig").MESSAGE_TYPE,
                event: t,
                eventTime: Date.now(),
                DOMData: {
                    hidden: document.hidden
                },
                sessionID: o("RSTSessionID").getSessionID(),
                metadata: n
            };
            o("RSTEventsMessageQueue").notify(t, {
                mainToWorkerMessage: e
            });
            this.$5(e);
            this.$6(e);
        };
        t_prototype.postEventLightweight = function(t, n = o("RSTMetadataMainThread").getMainThreadMetadataWithExternalAnnotationsOnly()) {
            const e = {
                type: r("RSTConfig").MESSAGE_TYPE,
                event: t,
                eventTime: Date.now(),
                DOMData: {
                    hidden: document.hidden
                },
                sessionID: o("RSTSessionID").getSessionID(),
                metadata: n
            };
            o("RSTEventsMessageQueue").notify(t, {
                mainToWorkerMessage: e
            });
            this.$5(e);
            this.$6(e);
        };
        t_prototype.$6 = function(t) {
            try {
                this.$1?.postMessage(t);
            } catch (error) {
                if (this.$4) {
                    return;
                }
                const o = r("getErrorSafe")(error);
                r("FBLogger")("responsive-tracker").catching(o).warn(o.message ?? "Failed to post message to web worker");
                this.$4 = true;
            }
        };
        t_prototype.$5 = function(t) {
            if (r("RSTConfig").ENABLE_SERVICE_WORKER) {
                try {
                    new (r("ClientServiceWorkerMessage"))(r("RSTConfig").MESSAGE_TYPE, t).sendViaController();
                } catch (error) {
                    if (this.$3) {
                        return;
                    }
                    const n = r("getErrorSafe")(error);
                    r("FBLogger")("responsive-tracker").catching(n).warn(n.message ?? "Failed to post message to service worker");
                    this.$3 = true;
                }
            }
        };
        t_prototype.$7 = function(t) {
            return Date.now() - (t.remoteLoggerProposeTime ?? 0) > r("RSTConfig").INCIDENT_PROPOSED_PROCESSOR_OWNERSHIP_EXPIRE_MS;
        };
        t_prototype.$8 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
                if (e != null) {
                    const a = e.incidentID;
                    if (o("RSTIncidentLoggingMainThread").getLoggedIncidentIDs().has(a)) {
                        t.add(a);
                        return;
                    }
                    const i = e.sessionID === o("RSTSessionID").getSessionID();
                    if (i) {
                        e.hasRecovered = true;
                        o("RSTEventsMessageQueue").notify(o("RSTEvents").RSTEvent.RECOVERABLE_UNRESPONSIVENESS, {
                            unresponsiveEventRecord: e
                        });
                        t.add(a);
                        return;
                    }
                    const l = Date.now() - e.lastHeartBeatTimeStamp;
                    if (!(l < r("RSTConfig").WAIT_MS_FOR_OTHER_SESSION_BEFORE_PROCESSING)) {
                        if (l > r("RSTConfig").OBSOLETE_PENDING_INCIDENT_THRESHOLD_MS) {
                            if (o("RSTUtilsMainThread").shouldSkipProcessingIncident(a)) {
                                return;
                            }
                            o("RSTUtils").debugLogImportant(`pending incident ${a} cleaned`);
                            t.add(a);
                            return;
                        }
                        const s = e.remoteLoggerSessionID == null || this.$7(e);
                        if (s) {
                            o("RSTUtils").debugLogImportant(`propose as logger for incident ${a}`);
                            n.add(a);
                            return;
                        }
                        if (e.remoteLoggerSessionID === o("RSTSessionID").getSessionID() && !this.$7(e)) {
                            o("RSTUtils").debugLogImportant(`act as logger for incident ${a}`);
                            if (e.hasRecovered) {
                                o("RSTEventsMessageQueue").notify(o("RSTEvents").RSTEvent.RECOVERABLE_UNRESPONSIVENESS, {
                                    unresponsiveEventRecord: e
                                });
                                t.add(a);
                            } else {
                                if (e.incidentType !== r("RSTConstants").incidentType.unexpectedExit && e.unrecoverLastsForMs < r("RSTConfig").UNRECOVER_LASTS_THRESHOLD_MS) {
                                    return;
                                }
                                if (!r("RSTConfig").ONE_UNRECOVERABLE_INCIDENT_PER_SESSION || !this.$2.has(e.sessionID)) {
                                    yield o("RSTMarkFirstUnrecoverableMainThread").markFirstUnrecoverableIncident(e);
                                    o("RSTEventsMessageQueue").notify(o("RSTEvents").RSTEvent.CRASH_INCIDENT, {
                                        unresponsiveEventRecord: e
                                    });
                                    this.$2.add(e.sessionID);
                                } else {
                                    o("RSTUtils").debugLogImportant(`skip logging unrecoverable incident ${a} ${`from session ${e.sessionID} since it has been logged`}`);
                                }
                                t.add(a);
                            }
                        }
                    }
                }
            });
            function t(t, n, r) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.$9 = function(a, i) {
            const t = this;
            if (a.size === 0 && i.size === 0) {
                return (e || (e = n("Promise"))).resolve();
            }
            const l = o("RSTSessionID").getSessionID();
            const s = Date.now();
            return r("RSTIndexedDBSafe").mutateIncidentsInDB(function(e) {
                const e_incidentID = e.incidentID;
                if (a.has(e_incidentID)) {
                    return "delete";
                }
                if (i.has(e_incidentID)) {
                    if (e.remoteLoggerSessionID != null && e.remoteLoggerSessionID !== l && !t.$7(e)) {
                        return "keep";
                    }
                    e.remoteLoggerSessionID = l;
                    e.remoteLoggerProposeTime = s;
                    return "update";
                }
                return "keep";
            });
        };
        t_prototype.logAndDeleteUnresponsiveEvents = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                try {
                    o("RSTEventsMessageQueue").notify(o("RSTEvents").RSTEvent.CHECKING_INDEXDB_FOR_EVENTS, {});
                    const e = yield r("RSTIndexedDBSafe").readEventsFromDB();
                    const t = new Set;
                    const n = new Set;
                    for (const a of e){
                        try {
                            yield o("RSTUtils").scheduleYield();
                            yield this.$8(a, t, n);
                        } catch (error) {
                            const l = r("getErrorSafe")(error);
                            r("FBLogger")("responsive-tracker").catching(l).warn(l.message ?? "Failed to process incident");
                        }
                    }
                    yield this.$9(t, n);
                } catch (error) {
                    const u = r("getErrorSafe")(error);
                    r("FBLogger")("responsive-tracker").catching(u).warn(u.message ?? "Failed to log incidents");
                }
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        return t;
    })();
    const u = new s;
    l.default = u;
}, 98);
__d("RSTDebugConsoleMainThread", [
    "RSTEvents",
    "RSTEventsMessageQueue",
    "RSTUtils"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e() {}
    l.registerDebugConsole = e;
}, 98);
__d("RSTEventsRegisterUseCasesMainThread", [
    "RSTClearExternalLoggingDataStoreMainThread",
    "RSTClearInteractionDataMainThread",
    "RSTDebugConsoleMainThread",
    "RSTIncidentLoggingMainThread"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e() {
        o("RSTDebugConsoleMainThread").registerDebugConsole();
        o("RSTIncidentLoggingMainThread").registerIncidentLogging();
        o("RSTClearInteractionDataMainThread").registerClearInteractionData();
        o("RSTClearExternalLoggingDataStoreMainThread").registerClearExternalLoggingData();
    }
    l.default = e;
}, 98);
__d("RSTClearInteractionDataMainThread", [
    "RSTEvents",
    "RSTEventsMessageQueue",
    "RSTInteractionDataMainThread"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e() {
        o("RSTEventsMessageQueue").subscribe(o("RSTEvents").RSTEvent.HEART_BEAT, o("RSTInteractionDataMainThread").clearInteractionData);
        o("RSTEventsMessageQueue").subscribe(o("RSTEvents").RSTEvent.BROWSER_TAB_BACKGROUND, o("RSTInteractionDataMainThread").clearInteractionData);
        o("RSTEventsMessageQueue").subscribe(o("RSTEvents").RSTEvent.BROWSER_TAB_FOREGROUND, o("RSTInteractionDataMainThread").clearInteractionData);
    }
    l.registerClearInteractionData = e;
}, 98);
__d("RSTInteractionTrackingMainThread", [
    "RSTConfig",
    "RSTEvents",
    "RSTMetadataMainThread",
    "ResponsiveTrackerMainThread",
    "one-trace"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = new Set([
        "RESPONSIVENESS",
        "INP",
        "LONGTASK",
        "UNKNOWN"
    ]);
    function s() {
        if (r("RSTConfig").SHOULD_CAPTURE_INTERACTION_DATA) {
            r("one-trace").subscribe("trace-policy-set", function(t) {
                if (!e.has(t.traceType)) {
                    const n = o("RSTMetadataMainThread").getMainThreadMetadata();
                    r("ResponsiveTrackerMainThread").postEvent(o("RSTEvents").RSTEvent.TRACE_POLICY_SET, babelHelpers.extends({
                        trace: babelHelpers.extends({}, t)
                    }, n));
                }
            });
            r("one-trace").subscribe("trace-end", function(t) {
                if (!e.has(t.traceType)) {
                    const n = o("RSTMetadataMainThread").getMainThreadMetadata();
                    r("ResponsiveTrackerMainThread").postEvent(o("RSTEvents").RSTEvent.TRACE_END, babelHelpers.extends({
                        trace: babelHelpers.extends({}, t, {
                            endTimestamp: Date.now()
                        })
                    }, n));
                }
            });
        }
    }
    l.start = s;
}, 98);
__d("RSTRecoverableUnresponsivenessTrackingMainThread", [
    "RSTConfig",
    "one-trace",
    "performanceNow"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = new Set([
        "INP",
        "LONGTASK"
    ]);
    function u() {
        r("one-trace").subscribe("trace-end", function(e) {
            if (s.has(e.traceType)) {
                d.getInstance().addEvent(babelHelpers.extends({}, e));
            }
        });
    }
    function c() {
        return d.getInstance().getStats();
    }
    var d = (()=>{
        function t() {
            this.WINDOW_MS = r("RSTConfig").TRACE_STATS_WINDOW_SIZE_MS;
            this.MAX_EVENTS = r("RSTConfig").TRACE_STATS_MAX_QUEUE_SIZE;
            this.eventQueue = [];
        }
        t.getInstance = function() {
            if (!t.instance) {
                t.instance = new t;
            }
            return t.instance;
        };
        const t_prototype = t.prototype;
        t_prototype.addEvent = function(t) {
            if (!(t.startTime == null || t.endTime == null)) {
                const e = {
                    traceType: t.traceType,
                    startTime: t.startTime,
                    duration: t.endTime - t.startTime,
                    endTime: t.endTime
                };
                this.eventQueue.push(e);
                this.cleanupOldEvents();
                if (this.eventQueue.length >= this.MAX_EVENTS) {
                    this.eventQueue.shift();
                }
            }
        };
        t_prototype.getStats = function() {
            this.cleanupOldEvents();
            const e = {};
            this.eventQueue.forEach((t)=>{
                if (t.traceType in e) {
                    e[t.traceType].count++;
                    e[t.traceType].totalDurationMs += t.duration;
                } else {
                    e[t.traceType] = {
                        count: 1,
                        totalDurationMs: t.duration,
                        averageDurationMs: 0
                    };
                }
            });
            for (const t of Object.keys(e)){
                const n = e[t].totalDurationMs / e[t].count;
                e[t].averageDurationMs = Math.floor(n);
            }
            return e;
        };
        t_prototype.cleanupOldEvents = function() {
            const t = (e || (e = r("performanceNow")))();
            while(this.eventQueue.length > 0){
                const n = this.eventQueue[0];
                if (n.endTime >= t - this.WINDOW_MS) {
                    break;
                }
                this.eventQueue.shift();
            }
        };
        return t;
    })();
    d.instance = null;
    l.start = u;
    l.getStats = c;
}, 98);
__d("RSTMetadataCollectorMainThread", [
    "FBLogger",
    "QPLCrashResiliencePlugin",
    "RSTInteractionTrackingMainThread",
    "RSTRecoverableUnresponsivenessTrackingMainThread",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e = false;
    function s() {
        if (!e) {
            try {
                o("RSTInteractionTrackingMainThread").start();
                o("RSTRecoverableUnresponsivenessTrackingMainThread").start();
                o("QPLCrashResiliencePlugin").startQPLCrashResilience();
                e = true;
            } catch (error) {
                r("FBLogger")("responsive-tracker").catching(r("getErrorSafe")(error)).warn("Failed to start RST metadata collector");
            }
        }
    }
    l.start = s;
}, 98);
__d("RSTCloseObserver", [
    "FBLogger",
    "RSTConfig",
    "RSTEvents",
    "RSTSessionID",
    "ResponsiveTrackerMainThread",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
        if (r("RSTConfig").ENABLE_SERVICE_WORKER) {
            const t = e.persisted ? o("RSTEvents").RSTEvent.BROWSER_TAB_BACKGROUND : o("RSTEvents").RSTEvent.BROWSER_TAB_CLOSED;
            const n = {
                type: r("RSTConfig").MESSAGE_TYPE,
                event: t,
                eventTime: Date.now(),
                DOMData: {
                    hidden: false
                },
                sessionID: o("RSTSessionID").getSessionID(),
                metadata: null
            };
            try {
                if ("serviceWorker" in navigator) {
                    navigator.serviceWorker?.controller?.postMessage({
                        command: "responsiveness",
                        data: n
                    });
                }
            } catch (error) {
                r("FBLogger")("responsive-tracker").catching(r("getErrorSafe")(error)).warn("Failed to send quick browser tab close event to worker");
            }
            try {
                r("ResponsiveTrackerMainThread").postEvent(t);
            } catch (error) {
                r("FBLogger")("responsive-tracker").catching(r("getErrorSafe")(error)).mustfix("Failed to send browser tab close/background event to worker");
            }
        }
    }
    function s() {
        window.addEventListener("pagehide", e);
    }
    l.initPageCloseObserver = s;
}, 98);
__d("RSTInteractionDataMainThread", [
    "ALChannel",
    "AdsALReactUtils",
    "FBLogger",
    "RSTConfig",
    "RSTEvents",
    "RSTMetadataMainThread",
    "RSTUtilsMainThread",
    "ResponsiveTrackerMainThread",
    "getErrorSafe",
    "getReactComponentStackFromDOMElement_THIS_CAN_BREAK"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = 5;
    const s = [];
    const u = 100;
    const c = 10;
    const d = [];
    function m(t) {
        s.push(t);
        if (s.length > e) {
            s.shift();
        }
        d.push(t);
        if (d.length > u) {
            d.shift();
        }
    }
    function p() {
        s.length = 0;
    }
    function _() {
        const e = s;
        return e[e.length - 1];
    }
    function f() {
        return [].concat(s);
    }
    function g(e = c) {
        return d.slice(-1 * e);
    }
    function h(e, componentText) {
        const n = e ?? {};
        const { context, name, stack } = n;
        if (name != null || stack != null) {
            m({
                componentName: name,
                componentStack: stack,
                componentContext: context,
                eventType: "click",
                eventTime: Date.now(),
                componentText
            });
        }
        try {
            const s = o("RSTMetadataMainThread").getMainThreadMetadata();
            r("ResponsiveTrackerMainThread").postEvent(o("RSTEvents").RSTEvent.INTERACTION_DATA, babelHelpers.extends({}, s));
        } catch (error) {
            r("FBLogger")("responsive-tracker").catching(r("getErrorSafe")(error)).mustfix("Failed to send interaction data to worker");
        }
    }
    y();
    function y() {
        if (r("RSTConfig").SHOULD_CAPTURE_INTERACTION_DATA) {
            if (o("RSTUtilsMainThread").isMonetizationApp) {
                b();
            } else {
                C();
            }
        }
    }
    function C() {
        window.addEventListener("click", function({ target }) {
            if (target instanceof Element) {
                try {
                    const n = r("getReactComponentStackFromDOMElement_THIS_CAN_BREAK")(target);
                    const a = {
                        name: o("RSTUtilsMainThread").getAllowListedComponentName(n),
                        stack: n ?? [],
                        context: o("RSTUtilsMainThread").getReactComponentContext(n, r("RSTConfig").isReactComponentNameBlocked)
                    };
                    const i = v(target, a);
                    h(a, i);
                } catch (error) {
                    r("FBLogger")("responsive-tracker").catching(r("getErrorSafe")(error)).mustfix("Failed to get react component stack from Shim");
                }
            }
        }, true);
    }
    function b() {
        r("ALChannel").addListener("al_ui_event_capture", function(e) {
            if (e.event === "click") {
                try {
                    const n = {
                        name: e.reactComponentName,
                        stack: e.reactComponentStack ?? [],
                        context: o("RSTUtilsMainThread").getReactComponentContext(e.reactComponentStack, o("AdsALReactUtils").isComponentNameBlocked)
                    };
                    const a = e.targetElement;
                    const i = v(a, n);
                    h(n, i);
                } catch (error) {
                    r("FBLogger")("responsive-tracker").catching(r("getErrorSafe")(error)).mustfix("Failed to get react component stack from AL");
                }
            }
        });
    }
    function v(e, t) {
        if (!r("RSTConfig").SHOULD_CAPTURE_INTERACTION_ELEMENT_TEXT || t?.stack == null) {
            return null;
        }
        for (const o of t.stack){
            if (r("RSTConfig").isReactComponentTextBlocked(o)) {
                return null;
            }
        }
        let a = e?.textContent ?? null;
        if (typeof a === "string") {
            a = a.trim();
            const i = r("RSTConfig").ELEMENT_TEXT_SIZE_LIMIT;
            if (a.length > i) {
                a = a.substr(0, i) + `... (${a.length - i} code units omitted)`;
            }
        }
        if (a === "") {
            return null;
        }
        return a;
    }
    l.clearInteractionData = p;
    l.getLastInteractionDataSinceLastMessageToWorker = _;
    l.getInteractionDataSinceLastMessageToWorker = f;
    l.getInteractionHistory = g;
}, 98);
__d("RSTMetadataMainThread", [
    "CurrentCanonicalRoute",
    "CurrentUser",
    "Env",
    "MemoryUtils",
    "RSTAdsManagerUtilsMainThread",
    "RSTConfig",
    "RSTExternalLoggingDataStoreMainThread",
    "RSTInteractionDataMainThread",
    "RSTRecoverableUnresponsivenessTrackingMainThread",
    "RSTUtils",
    "SiteData",
    "performance"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    function u() {
        const e = Date.now();
        const t = babelHelpers.extends({}, o("RSTAdsManagerUtilsMainThread").getAdsAnnotations());
        m(t);
        const n = Date.now();
        t.rstAnnotationsCollectedInMs = `${n - e}`;
        return t;
    }
    function c() {
        const e = babelHelpers.extends({}, o("RSTAdsManagerUtilsMainThread").getAdsAnnotations());
        if (r("RSTConfig").shouldCollectAdditionalMetadata()) {
            y(e);
        }
        return e;
    }
    function d() {
        if (r("RSTConfig").shouldCollectAdditionalMetadata()) {
            return o("RSTExternalLoggingDataStoreMainThread").loggingDataStore.getAllSpanData();
        }
        return {};
    }
    function m(e) {
        if (r("RSTConfig").shouldCollectAdditionalMetadata()) {
            g(e);
            C(e);
            b(e);
            y(e);
            p(e);
            h(e);
        }
    }
    function p(e) {
        const t = o("RSTAdsManagerUtilsMainThread").getAdEntityIds();
        e.selectedAdIds = t.adIds.join(",");
        e.selectedAdSetIds = t.adsetIds.join(",");
        e.selectedCampaignIds = t.campaignIds.join(",");
    }
    function _() {
        try {
            const t = o("RSTInteractionDataMainThread").getLastInteractionDataSinceLastMessageToWorker()?.componentStack;
            return t ?? [];
        } catch (e) {
            return [];
        }
    }
    function f() {
        try {
            const t = o("RSTInteractionDataMainThread").getLastInteractionDataSinceLastMessageToWorker()?.componentContext;
            return t ?? [];
        } catch (e) {
            return [];
        }
    }
    function g(e) {
        if (r("RSTConfig").SHOULD_COLLECT_RST_ANNOTATIONS_INTERACTION_DATA) {
            const t = o("RSTInteractionDataMainThread").getInteractionDataSinceLastMessageToWorker().map((e)=>e.componentName).filter((e)=>e != null).join(",");
            if (t !== "") {
                e.interactedComponentsSinceLastResponsiveState = t;
            }
            const n = f();
            if (n.length > 0) {
                e.interactedComponentContextSinceLastResponsiveState = n.join(" < ");
            }
            const a = o("RSTInteractionDataMainThread").getInteractionHistory().map((e)=>e.componentName).filter((e)=>e != null).join(",");
            if (a !== "") {
                e.interactedComponentHistory = a;
            }
            const i = o("RSTInteractionDataMainThread").getInteractionHistory().map((e)=>o("RSTUtils").getInteractionDetail(e)).filter((e)=>e != null).join(",");
            if (i !== "") {
                e.interactionDetailHistory = i;
            }
        }
    }
    function h(e) {
        e.crashDataOncall = r("RSTConfig").PROJECT_ONCALL;
        e.crashLogger = r("RSTConfig").PROJECT_NAME;
    }
    function y(e) {
        if (r("RSTConfig").SHOULD_COLLECT_RST_ANNOTATIONS_LOG_FOR_CRASH) {
            const t = o("RSTExternalLoggingDataStoreMainThread").loggingDataStore.getAll();
            const n = (a)=>{
                if (!r("RSTConfig").BLOCKED_ANNOTATION_KEYS.some((e)=>e.test(a))) {
                    e[o("RSTUtils").getExternalAnnotationKey(a)] = t[a];
                }
            };
            for (const a of Object.keys(t)){
                n(a);
            }
        }
    }
    function C(e) {
        const t = o("MemoryUtils").getCurrentMemory({
            runGC: false
        });
        const { jsHeapSizeLimit, totalJSHeapSize, usedJSHeapSize } = t;
        if (jsHeapSizeLimit != null) {
            e.js_heap_size_limit = jsHeapSizeLimit.toString();
        }
        if (usedJSHeapSize != null) {
            e.used_js_heap_size = usedJSHeapSize.toString();
        }
        if (totalJSHeapSize != null) {
            e.total_js_heap_size = totalJSHeapSize.toString();
        }
    }
    function b(e) {
        const t = o("RSTRecoverableUnresponsivenessTrackingMainThread").getStats();
        if (t != null) {
            for (const n of Object.keys(t)){
                const r = t[n];
                if (r != null) {
                    const a = n.toLowerCase();
                    for (const i of Object.keys(r)){
                        const l = r[i];
                        if (l != null) {
                            e[`${a}-${i}`] = l.toString();
                        }
                    }
                }
            }
        }
    }
    function v() {
        const document_URL = document.URL;
        const brsid = (e || (e = r("Env"))).brsid;
        try {
            return {
                url: document_URL,
                brsid,
                i1: r("CurrentUser").getID() ?? "0",
                i2: o("RSTAdsManagerUtilsMainThread").getAdAccountID() ?? "0",
                i3: o("RSTAdsManagerUtilsMainThread").getBusinessID() ?? "0",
                cpp: r("SiteData").push_phase ?? "unknown",
                cr: `${r("SiteData").client_revision}`,
                rcs: _(),
                st: Math.floor(Date.now() - (s || (s = r("performance"))).now()),
                annotations: u(),
                spans: d(),
                ccrt: o("CurrentCanonicalRoute").getForGlobalLoggingOnly()
            };
        } catch (e) {
            return {
                url: document_URL,
                brsid,
                i1: "0",
                i2: "0",
                i3: "0"
            };
        }
    }
    function S() {
        const document_URL = document.URL;
        const brsid = (e || (e = r("Env"))).brsid;
        try {
            return {
                url: document_URL,
                brsid,
                i1: r("CurrentUser").getID() ?? "0",
                i2: o("RSTAdsManagerUtilsMainThread").getAdAccountID() ?? "0",
                i3: o("RSTAdsManagerUtilsMainThread").getBusinessID() ?? "0",
                externalAnnotations: c(),
                spans: d(),
                isLightweight: true
            };
        } catch (e) {
            return {
                url: document_URL,
                brsid,
                i1: "0",
                i2: "0",
                i3: "0"
            };
        }
    }
    l.getMainThreadMetadata = v;
    l.getMainThreadMetadataWithExternalAnnotationsOnly = S;
}, 98);
__d("RSTWebWorkerClientMainThreadImpl", [
    "ErrorGuard",
    "FBLogger",
    "RSTConfig",
    "RSTUtils",
    "ResponsiveTrackerMainThread",
    "Run",
    "WorkerMessagePort",
    "getErrorSafe",
    "gkx"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = r("gkx")("4909") || r("gkx")("22276");
    class u {
        constructor(e){
            this.$1 = null;
            this.$2 = false;
            this.$3 = e;
        }
        $4() {
            if (this.$1 == null) {
                this.$1 = this.$3();
            }
            return this.$1;
        }
        startRSTFromMainThread(t = {}) {
            const n = this;
            if (!(!s || this.$2 || !o("RSTUtils").isIndexedDBSupported())) {
                const a = Math.max(t.extraDelayInMs ?? 0, r("RSTConfig").START_RST_FROM_MAIN_THREAD_EXTRA_DELAY_IN_MS);
                window.setTimeout(function() {
                    try {
                        const e = n.$4();
                        const t = new (o("WorkerMessagePort")).WorkerSyncedMessagePort(e, "RSTWorkerClient");
                        r("ResponsiveTrackerMainThread").init(t);
                        n.$2 = true;
                    } catch (error) {
                        const a = r("getErrorSafe")(error);
                        r("FBLogger")("responsive-tracker").catching(a).warn(`Failed to start worker: ${a.message}`);
                    }
                }, a);
            }
        }
        startRSTAfterPageLoadFromMainThread(n = {}) {
            const t = this;
            const a = o("Run").onAfterLoad(function() {
                (e || (e = r("ErrorGuard"))).applyWithGuard(function() {
                    return t.startRSTFromMainThread(n);
                }, null, []);
            });
        }
    }
    l.default = u;
}, 98);
__d("RSTWebWorkerClientMainThread", [
    "RSTWebWorkerClientMainThreadImpl",
    "RSTWebWorkerResource",
    "WorkerBundleResource"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = new (r("RSTWebWorkerClientMainThreadImpl"))(function() {
        return o("WorkerBundleResource").createDedicatedWebWorker(r("RSTWebWorkerResource"), {
            logImportScriptsErrors: true,
            name: "RSTWebWorker"
        });
    });
    l.default = e;
}, 98);
__d("CPUPressure", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = "PressureObserver" in window;
    const l = new Set;
    let s = false;
    let u = "nominal";
    function c() {
        return u;
    }
    function d() {
        if (!s) {
            if (e) {
                try {
                    const t = new window.PressureObserver(function(e) {
                        e.forEach((e)=>{
                            u = e.state;
                            l.forEach((t)=>{
                                t(e);
                            });
                        });
                    });
                    t.observe("cpu", {
                        sampleInterval: 1000
                    });
                } catch (e) {}
            }
            s = true;
        }
    }
    function m(t) {
        if (e) {
            l.add(t);
            return function() {
                l.delete(t);
            };
        }
        return function() {};
    }
    i.canUseCPUPressureAPI = e;
    i.getCurrentState = c;
    i.init = d;
    i.subscribe = m;
}, 66);
__d("DOMMutationTracker", [
    "WebAPIs",
    "performanceNow"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = 20;
    function u(e) {
        if (e == null || e === "") {
            return false;
        }
        const t = e.replace(/ /g, "");
        return t.indexOf("display:none") >= 0 || t.indexOf("visibility:hidden") >= 0 || t.indexOf("content-visibility:hidden") >= 0;
    }
    let c = null;
    class d {
        constructor(e = s){
            this.$1 = e;
            this.$2 = new Array(e);
            this.$3 = 0;
            this.$5 = false;
        }
        init(t) {
            const e = this;
            if (!this.$5) {
                this.$4 = new MutationObserver(function(t) {
                    e.$6(t);
                });
                this.$4.observe(document.documentElement, {
                    childList: true,
                    attributes: true,
                    characterData: false,
                    subtree: true,
                    attributeOldValue: true,
                    characterDataOldValue: false
                });
                this.$5 = true;
            }
        }
        $6(n) {
            const t = this;
            const a = (e || (e = r("performanceNow")))();
            n.forEach((e)=>{
                if (e.target instanceof Element) {
                    const targetRef = new (o("WebAPIs")).WeakRef(e.target);
                    const addedNodesRefs = [];
                    if (e.addedNodes) {
                        for(let i = 0; i < e.addedNodes.length; i++){
                            const addedNode = e.addedNodes[i];
                            if (addedNode instanceof Element) {
                                addedNodesRefs.push(new (o("WebAPIs")).WeakRef(addedNode));
                            }
                        }
                    }
                    const removedNodesRefs = [];
                    if (e.removedNodes) {
                        for(let c = 0; c < e.removedNodes.length; c++){
                            const removedNode = e.removedNodes[c];
                            if (removedNode instanceof Element) {
                                removedNodesRefs.push(new (o("WebAPIs")).WeakRef(removedNode));
                            }
                        }
                    }
                    const hiddenElementRefs = [];
                    const unhiddenElementRefs = [];
                    if (e.type === "attributes") {
                        const _ = e.target;
                        if (_ instanceof Element) {
                            if (e.attributeName === "hidden") {
                                const f = _.hasAttribute("hidden");
                                if (f) {
                                    hiddenElementRefs.push(new (o("WebAPIs")).WeakRef(_));
                                } else {
                                    unhiddenElementRefs.push(new (o("WebAPIs")).WeakRef(_));
                                }
                            } else if (e.attributeName === "style") {
                                const g = _.getAttribute("style");
                                const h = e.oldValue;
                                const y = u(h);
                                const C = u(g);
                                if (y !== C) {
                                    if (C) {
                                        hiddenElementRefs.push(new (o("WebAPIs")).WeakRef(_));
                                    } else if (y && !C) {
                                        unhiddenElementRefs.push(new (o("WebAPIs")).WeakRef(_));
                                    }
                                }
                            }
                        }
                    }
                    const b = {
                        mutation: e,
                        timestamp: a,
                        targetRef,
                        addedNodesRefs,
                        removedNodesRefs,
                        hiddenElementRefs,
                        unhiddenElementRefs
                    };
                    if (addedNodesRefs.length > 0 || removedNodesRefs.length > 0 || hiddenElementRefs.length > 0 || unhiddenElementRefs.length > 0) {
                        t.$2[t.$3] = b;
                        t.$3 = (t.$3 + 1) % t.$1;
                    }
                }
            });
        }
        getMutationsInTimeRange(t, n) {
            if (!this.$5) {
                return [];
            }
            const e = [];
            for(let r = 0; r < this.$1; r++){
                const o = this.$2[r];
                if (o && o.timestamp >= t && o.timestamp <= n) {
                    e.push(o);
                }
            }
            return e;
        }
        hasMutationsInTimeRange(t, n) {
            if (!this.$5) {
                return false;
            }
            for(let e = 0; e < this.$1; e++){
                const r = this.$2[e];
                if (r && r.timestamp >= t && r.timestamp <= n) {
                    return true;
                }
            }
            return false;
        }
        disconnect() {
            if (this.$4) {
                this.$4.disconnect();
                this.$4 = null;
            }
            this.$5 = false;
        }
    }
    function m(e) {
        if (!c) {
            c = new d(e);
        }
        return c;
    }
    function p(e, t) {
        m(t).init(e);
    }
    function _(e, t) {
        return m().getMutationsInTimeRange(e, t);
    }
    function f(e, t) {
        return m().hasMutationsInTimeRange(e, t);
    }
    function g() {
        if (c) {
            c.disconnect();
        }
    }
    l.getInstance = m;
    l.init = p;
    l.getMutationsInTimeRange = _;
    l.hasMutationsInTimeRange = f;
    l.disconnect = g;
}, 98);
__d("MemoryUtils", [], function(t, n, r, o, a, i) {
    "use strict";
    function e() {
        return window.performance && window.performance.memory;
    }
    function l() {
        return window.navigator && window.navigator.deviceMemory;
    }
    function s() {
        const window_performance = window.performance;
        return window.performance && typeof window_performance.measureUserAgentSpecificMemory === "function";
    }
    function u(e) {
        try {
            if (e != null && typeof e === "function") {
                return c(e.toString())?.endsWith("{ [native code] }") ?? false;
            }
            return false;
        } catch (e) {
            return false;
        }
    }
    function c(e) {
        if (typeof e.replace === "function") {
            return e.replace(/\n/g, " ").replace(/\s+/g, " ");
        }
        return null;
    }
    function d() {
        const e = window;
        if (typeof e.gc !== "function" || typeof e.gc.toString !== "function") {
            return false;
        }
        return c(e.gc.toString()) === "function gc() { [native code] }";
    }
    const m = d() ? window.gc : null;
    function p(t = {
        runGC: true
    }) {
        let deviceMemory = null;
        if (l()) {
            const r = parseFloat(window.navigator.deviceMemory);
            if (!isNaN(r)) {
                deviceMemory = r * 1024 * 1024 * 1024;
            }
        }
        if (e()) {
            if (m != null && t.runGC) {
                m();
            }
            const a = window.performance;
            const i = a?.memory ?? {};
            const { jsHeapSizeLimit, totalJSHeapSize, usedJSHeapSize } = i;
            return {
                usedJSHeapSize,
                jsHeapSizeLimit,
                totalJSHeapSize,
                deviceMemory
            };
        }
        return {
            usedJSHeapSize: null,
            jsHeapSizeLimit: null,
            totalJSHeapSize: null,
            deviceMemory: null
        };
    }
    i.isMemoryAPISupported = e;
    i.isMeasureMemoryOriginTrialSupported = s;
    i.isFunctionNative = u;
    i.isGarbageCollectionAPIAvailable = d;
    i.getCurrentMemory = p;
}, 66);
__d("getIncrementalEventCount", [
    "performance"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = new Map;
    function u(t) {
        let n;
        if ((e || (e = r("performance"))) == null || (n = (e || (e = r("performance"))).eventCounts) == null || n.get == null) {
            return undefined;
        }
        return n.get(t);
    }
    function c(e, t) {
        const n = u(e);
        if (n == null) {
            return null;
        }
        const r = `${t}_${e}`;
        const o = s.get(r);
        s.set(r, n);
        if (o != null) {
            return n - o;
        }
        return n;
    }
    l.default = c;
}, 98);
__d("stringHash", [], function(t, n, r, o, a, i) {
    "use strict";
    function e(e) {
        let t = 0;
        for(let n = 0; n < e.length; n++){
            t = (t * 33 + e.charCodeAt(n)) % 4294967296;
        }
        return t.toString(16);
    }
    function l(t, n = "|") {
        const r = t.join(n);
        return e(r);
    }
    i.stringHash = e;
    i.stringArrayHash = l;
}, 66);
__d("INPLogger", [
    "CPUPressure",
    "DOMMutationTracker",
    "MemoryUtils",
    "OneTraceCore",
    "ReactStackUtils",
    "addAnnotations",
    "getIncrementalEventCount",
    "performanceNow",
    "stringHash",
    "uuidv4"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let s;
    const u = typeof window.PerformanceObserver?.supportedEntryTypes?.includes === "function" && window.PerformanceObserver.supportedEntryTypes.includes("event");
    const c = new Set;
    let d = false;
    let m = 1;
    const p = [
        "click",
        "keyup"
    ];
    let _ = new Set(p);
    function f() {
        return _;
    }
    function g(e) {
        if (!d) {
            if (e.INP.overrideDelayedEventTypeFilter != null) {
                _ = new Set(e.INP.overrideDelayedEventTypeFilter);
            }
            if (u) {
                if (e.INP.enableDOMMutationTracking === true) {
                    o("DOMMutationTracker").init(e);
                }
                const t = new window.PerformanceObserver(function(e) {
                    e.getEntries().forEach((e)=>{
                        if (_.has(e.name)) {
                            c.forEach((t)=>{
                                t(e);
                            });
                        }
                    });
                });
                h(function(t) {
                    const n = r("OneTraceCore").startTrace(r("uuidv4")(), r("OneTraceCore").getCurrentTracePolicy(), "INP", t.startTime, undefined, {
                        string: {
                            inputEventType: t.name
                        }
                    });
                    const usedJSHeapSize = o("MemoryUtils").getCurrentMemory().usedJSHeapSize;
                    const cumulativeTotalEvent = r("getIncrementalEventCount")(t.name, "INP");
                    r("addAnnotations")(n.annotations, {
                        int: {
                            cumulativeTotalEvent,
                            instanceNum: m++,
                            usedJSHeapSize
                        },
                        string: {
                            inputEventType: t.name,
                            recentInteractionIndentifier: r("OneTraceCore").getRecentInteractionIndentifier()
                        }
                    });
                    if (t.target != null) {
                        const l = t.target;
                        const targetElementStatus = l.isConnected === false ? "detached" : "attached";
                        r("addAnnotations")(n.annotations, {
                            string: {
                                targetElementStatus
                            }
                        });
                        if (e.INP.getReactComponentStackFromDOMElement != null && (e.INP.logReactStack || e.INP.logReactStackHash)) {
                            const c = e.INP.getReactComponentStackFromDOMElement;
                            const reactStack = o("ReactStackUtils").getTrimmedReactStack(l, "HeroPagelet", c);
                            if (reactStack != null) {
                                if (e.INP.logReactStackHash) {
                                    const reactStackHash = o("stringHash").stringArrayHash(reactStack);
                                    r("addAnnotations")(n.annotations, {
                                        string: {
                                            reactStackHash
                                        }
                                    });
                                }
                                if (e.INP.logReactStack) {
                                    r("addAnnotations")(n.annotations, {
                                        string_array: {
                                            reactStack
                                        }
                                    });
                                }
                            }
                            const _ = e.INP.getWrapperComponentPropValueFromDOMElement;
                            if (_) {
                                const f = _(l, "HeroPagelet", "name");
                                if (f != null) {
                                    r("addAnnotations")(n.annotations, {
                                        string: {
                                            pageletName: f
                                        }
                                    });
                                }
                            }
                        }
                    }
                    if (e.enableCPUPressureTracking === true && o("CPUPressure").canUseCPUPressureAPI) {
                        r("addAnnotations")(n.annotations, {
                            string: {
                                cpu_pressure: o("CPUPressure").getCurrentState()
                            }
                        });
                    }
                    if (e.INP.enableDOMMutationTracking === true) {
                        const g = (s || (s = r("performanceNow")))();
                        const hadDOMMutations = o("DOMMutationTracker").hasMutationsInTimeRange(t.processingStart, g);
                        r("addAnnotations")(n.annotations, {
                            bool: {
                                hadDOMMutations
                            }
                        });
                        const y = o("DOMMutationTracker").getMutationsInTimeRange(t.processingStart, g);
                        let addedNodes = 0;
                        let removedNodes = 0;
                        let hiddenElements = 0;
                        let unhiddenElements = 0;
                        y.forEach((e)=>{
                            addedNodes += e.addedNodesRefs.length;
                            removedNodes += e.removedNodesRefs.length;
                            hiddenElements += e.hiddenElementRefs.length;
                            unhiddenElements += e.unhiddenElementRefs.length;
                        });
                        r("addAnnotations")(n.annotations, {
                            int: {
                                addedNodes,
                                removedNodes,
                                hiddenElements,
                                unhiddenElements
                            }
                        });
                    }
                    n.markerPoints.processingStart = {
                        timeSinceStart: t.processingStart
                    };
                    n.markerPoints.processingEnd = {
                        timeSinceStart: t.processingEnd
                    };
                    e.INP.eventTimingCallback?.(t, n);
                    r("OneTraceCore").endTrace(n.traceID, t.startTime + t.duration, "SUCCESS");
                });
                t.observe({
                    buffered: true,
                    type: "event"
                });
            }
            d = true;
        }
    }
    function h(e) {
        if (u) {
            c.add(e);
            return function() {
                c.delete(e);
            };
        }
        return function() {};
    }
    l.canUseEventTimingAPI = u;
    l.getObservedEventTypes = f;
    l.init = g;
    l.subscribe = h;
}, 98);
__d("ImageMutationTracker", [
    "VisualCompletionUtil",
    "WebAPIs",
    "performanceNow"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s = null;
    const u = new Set;
    const c = new Set;
    class d {
        constructor(){
            this.$2 = false;
            this.$3 = typeof o("WebAPIs").WeakSet === "function" ? new (o("WebAPIs")).WeakSet : null;
        }
        init() {
            const e = this;
            if (!this.$2) {
                this.$1 = new MutationObserver(function(t) {
                    e.$4(t);
                });
                this.$1.observe(document.documentElement, {
                    childList: true,
                    attributes: true,
                    attributeOldValue: true,
                    attributeFilter: [
                        "src",
                        "hidden",
                        "style"
                    ],
                    characterData: false,
                    subtree: true
                });
                this.$2 = true;
            }
        }
        $4(n) {
            const t = this;
            const a = (e || (e = r("performanceNow")))();
            Array.from(n).forEach((e)=>{
                if (e.type === "childList" && e.addedNodes && e.addedNodes.length) {
                    Array.from(e.addedNodes).forEach((e)=>{
                        let n;
                        const r = e;
                        if (o("VisualCompletionUtil").isImage(r) && !((n = t.$3) != null && n.has(r)) && r.hasAttribute("data-imgperflogname")) {
                            t.$3?.add(r);
                            C(r, "imgLoad", a);
                            return;
                        } else if (o("VisualCompletionUtil").isElementNode(r)) {
                            const l = t.$5(r);
                            l.forEach((e)=>{
                                let n;
                                if (!((n = t.$3) != null && n.has(e))) {
                                    t.$3?.add(e);
                                    C(e, "imgLoad", a);
                                }
                            });
                        }
                    });
                } else if (e.type === "attributes") {
                    const n = e.target;
                    if (!n.hasAttribute("data-imgperflogname")) {
                        return;
                    }
                    const r = e.attributeName;
                    if (r === "hidden") {
                        if (!n.hasAttribute("hidden")) {
                            let i;
                            if (!((i = t.$3) != null && i.has(n))) {
                                t.$3?.add(n);
                                C(n, "mutationHiddenAttribute", a);
                            }
                        }
                    } else if (r === "style") {
                        const s = n.getAttribute("style");
                        const u = e.oldValue;
                        if (o("VisualCompletionUtil").checkInvisibleStyle(u) && !o("VisualCompletionUtil").checkInvisibleStyle(s)) {
                            let c;
                            if (!((c = t.$3) != null && c.has(n))) {
                                t.$3?.add(n);
                                C(n, "mutationStyleAttribute", a);
                            }
                        }
                    } else if (o("VisualCompletionUtil").getTagName(n) === "image" && r === "href" || o("VisualCompletionUtil").getTagName(n) === "IMG" && r === "src") {
                        let m;
                        if (!((m = t.$3) != null && m.has(n))) {
                            t.$3?.add(n);
                            C(n, "mutationImageAttribute", a);
                        }
                    }
                }
                if (e.type === "childList" && e.removedNodes && e.removedNodes.length) {
                    Array.from(e.removedNodes).forEach((e)=>{
                        const n = e;
                        if (o("VisualCompletionUtil").isImage(n) && n.hasAttribute("data-imgperflogname")) {
                            b(n);
                        } else if (o("VisualCompletionUtil").isElementNode(n)) {
                            const r = t.$5(n);
                            r.forEach((e)=>b(e));
                        }
                    });
                }
            });
        }
        $5(t) {
            const e = [];
            const n = t.querySelectorAll("img[data-imgperflogname], image[data-imgperflogname]");
            Array.from(n).forEach((t)=>{
                if (o("VisualCompletionUtil").isImage(t)) {
                    e.push(t);
                }
            });
            return e;
        }
        disconnect() {
            if (this.$1) {
                this.$1.disconnect();
                this.$1 = null;
            }
            this.$2 = false;
        }
    }
    function m() {
        if (!s) {
            s = new d;
        }
        return s;
    }
    function p(e, t) {
        if (e != null) {
            f(e);
        }
        if (t != null) {
            h(t);
        }
        m().init();
    }
    function _() {
        if (s) {
            s.disconnect();
        }
    }
    function f(e) {
        u.add(e);
    }
    function g(e) {
        u.delete(e);
    }
    function h(e) {
        c.add(e);
    }
    function y(e) {
        c.delete(e);
    }
    function C(e, t, n) {
        u.forEach((r)=>r(e, t, n));
    }
    function b(e) {
        c.forEach((t)=>t(e));
    }
    l.getInstance = m;
    l.init = p;
    l.disconnect = _;
    l.subscribeImageLoadStart = f;
    l.unsubscribeImageLoadStart = g;
    l.subscribeImageRemove = h;
    l.unsubscribeImageRemove = y;
}, 98);
__d("getSanitizedUrl", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = [
        "stp",
        "cstp",
        "ctp",
        "se",
        "cb2",
        "cb"
    ];
    function l(t) {
        try {
            const n = new URL(t);
            const r = new URLSearchParams;
            for (const o of e){
                const a = n.searchParams.get(o);
                if (a != null) {
                    r.set(o, a);
                }
            }
            const i = r.toString();
            return n.origin + n.pathname + (i ? `?${i}` : "");
        } catch (e) {
            return "";
        }
    }
    i.default = l;
}, 66);
__d("ImagePerfLoggerV2", [
    "ImageMutationTracker",
    "OneTraceCore",
    "VisibilityState",
    "WebAPIs",
    "addAnnotations",
    "clearTimeout",
    "getSanitizedUrl",
    "performanceNow",
    "uuidv4"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = 60000;
    let u;
    let c = null;
    let d;
    let m = false;
    const p = 5000;
    let _;
    function f(e) {
        const n = _;
        if (e == null || e === "" || n == null) {
            return 0;
        }
        return n.get(e) ?? 0;
    }
    function g(e) {
        const n = _;
        if (!(e == null || e === "" || n == null)) {
            const r = (n.get(e) ?? 0) + 1;
            n.delete(e);
            n.set(e, r);
            if (n.size > p) {
                const o = n.keys().next().value;
                if (o != null) {
                    n.delete(o);
                }
            }
        }
    }
    function h() {
        if (!m) {
            if (typeof WeakMap === "function") {
                d = new WeakMap;
                u = new WeakSet;
                _ = new Map;
            }
            if (o("WebAPIs").IntersectionObserver) {
                c = new (o("WebAPIs")).IntersectionObserver(S);
            }
            o("ImageMutationTracker").init(y, P);
            m = true;
        }
    }
    function y(e, t, n) {
        let r;
        let o;
        if (!(!d || !c) && M(e) && !((r = u) != null && r.has(e) || (o = d) != null && o.has(e))) {
            u?.add(e);
            if (C(e)) {
                R(e, t, n);
                return;
            }
            if (b(e)) {
                u?.delete(e);
                return;
            }
            if (!C(e)) {
                N(e, t, n);
                return;
            }
        }
    }
    function C(e) {
        return e.complete;
    }
    function b(e) {
        return e.getAttribute("loading") === "lazy";
    }
    function v() {
        const n = (e || (e = r("performanceNow")))();
        const a = o("VisibilityState").getHiddenSpans(n - 1, n) ?? [];
        return a.length > 0;
    }
    function S(e) {
        e.forEach((e)=>{
            const n = d?.get(e.target);
            if (n != null && e.target) {
                const { imageOnLoadTime, mutationTime, mutationType, startPaintingTime, traceID } = n;
                D({
                    element: e.target,
                    traceID,
                    mutationTime,
                    mutationType,
                    startPaintingTime,
                    endPainingTime: e.time,
                    imageOnLoadTime
                });
                r("OneTraceCore").endTrace(traceID, e.time, "SUCCESS");
                if (e.target instanceof HTMLImageElement) {
                    g(r("getSanitizedUrl")(e.target.src));
                }
                $(e.target);
            }
        });
    }
    function R(t, n, a, imageOnLoadTime, l) {
        if (!(!d || !c)) {
            const u = l ?? r("uuidv4")();
            const m = (e || (e = r("performanceNow")))();
            const p = {
                element: t,
                traceID: u,
                mutationTime: a,
                mutationType: n,
                startPaintingTime: m,
                imageOnLoadTime
            };
            if (v()) {
                D(babelHelpers.extends({}, p, {
                    endPainingTime: m
                }));
                r("OneTraceCore").endTrace(u, m, "SUCCESS");
                g(r("getSanitizedUrl")(t.src));
            } else {
                const timer = setTimeout(()=>{
                    const n = (e || (e = r("performanceNow")))();
                    D(babelHelpers.extends({}, p, {
                        endPainingTime: n
                    }));
                    r("OneTraceCore").endTrace(u, n, "TIMEOUT");
                    $(t);
                }, s);
                const visibilityChangeCallaback = function(o, a) {
                    if (a) {
                        const n = (e || (e = r("performanceNow")))();
                        D(babelHelpers.extends({}, p, {
                            endPainingTime: n
                        }));
                        r("OneTraceCore").endTrace(u, n, "SUCCESS");
                        g(r("getSanitizedUrl")(t.src));
                        $(t);
                    }
                };
                o("VisibilityState").subscribe(visibilityChangeCallaback);
                d?.set(t, {
                    timer,
                    traceID: u,
                    visibilityChangeCallaback,
                    mutationType: n,
                    mutationTime: a,
                    startPaintingTime: m,
                    imageOnLoadTime
                });
                c?.observe(t);
            }
        }
    }
    function L(e) {
        const t = e.match(/\.(\w+)(\?|$)/);
        if (t && t.length > 1) {
            return t[1];
        }
        return "";
    }
    const E = {
        tallowSpinnaker: "feedImage",
        gneissBrattice: "feedImage"
    };
    function k(element) {
        let t;
        const n = element.getAttribute("data-imgperflogname");
        if (n != null && (t = E[n]) != null) {
            return t;
        }
        return n;
    }
    function I(element) {
        if (typeof window === "undefined") {
            return null;
        }
        const t = window.getComputedStyle(element);
        return t.objectFit;
    }
    function T(e) {
        const t = performance && performance.getEntriesByName && performance.getEntriesByName(e);
        return t && t[0];
    }
    function D({ element, endPainingTime, imageOnLoadTime, mutationTime, mutationType, startPaintingTime, traceID }) {
        if (element instanceof HTMLImageElement) {
            const d = element.src;
            const string = {
                mutationType
            };
            const int = {};
            const _ = d != null ? T(d) : null;
            const g = d != null ? L(d) : null;
            const h = k(element);
            const y = d != null ? r("getSanitizedUrl")(d) : null;
            const C = r("OneTraceCore").startTrace(traceID, r("OneTraceCore").getCurrentTracePolicy() ?? "", "IMAGE", mutationTime);
            int.hidden = Number(o("VisibilityState").wasHidden(mutationTime, endPainingTime));
            int.previousSuccessfulLoadCount = f(y);
            if (imageOnLoadTime != null) {
                C.markerPoints.imageOnLoad = {
                    timeSinceStart: imageOnLoadTime
                };
            }
            C.markerPoints.startPainting = {
                timeSinceStart: startPaintingTime
            };
            C.markerPoints.mutationTime = {
                timeSinceStart: mutationTime
            };
            [
                "naturalHeight",
                "naturalWidth",
                "width",
                "height"
            ].forEach((e)=>{
                int[e] = element[e];
            });
            if (_ != null) {
                [
                    "connectEnd",
                    "connectStart",
                    "domainLookupEnd",
                    "domainLookupStart",
                    "fetchStart",
                    "redirectEnd",
                    "redirectStart",
                    "requestStart",
                    "responseEnd",
                    "responseStart",
                    "secureConnectionStart",
                    "startTime",
                    "workerStart"
                ].forEach((e)=>{
                    if (_ != null && typeof _[e] === "number") {
                        C.markerPoints[e] = {
                            timeSinceStart: _[e]
                        };
                    }
                });
                [
                    "decodedBodySize",
                    "encodedBodySize",
                    "transferSize"
                ].forEach((e)=>{
                    if (_ != null && typeof _[e] === "number") {
                        int[e] = _[e];
                    }
                });
                if (_ != null && typeof _.nextHopProtocol === "string") {
                    string.nextHopProtocol = _.nextHopProtocol;
                }
                if (g != null && g !== "") {
                    string.fileExt = g;
                }
                if (h != null) {
                    string.logName = h;
                }
                const b = I(element);
                if (b != null) {
                    string.objectFit = b;
                }
                if (y != null && y !== "") {
                    string.url = y;
                }
            }
            r("addAnnotations")(C.annotations, {
                string,
                int
            });
        }
    }
    function x(t, n, o, a, i) {
        const l = function() {
            R(t, n, o, a, i);
            t.removeEventListener("load", l);
            t.removeEventListener("error", s);
        };
        var s = function() {
            const u = (e || (e = r("performanceNow")))();
            D({
                element: t,
                mutationTime: o,
                mutationType: n,
                startPaintingTime: a,
                endPainingTime: u,
                traceID: i,
                imageOnLoadTime: a
            });
            r("OneTraceCore").endTrace(i, u, "FAIL");
            $(t);
            t.removeEventListener("load", l);
            t.removeEventListener("error", s);
        };
        return {
            errorHandler: s,
            loadHandler: l
        };
    }
    function $(e) {
        const a = d?.get(e);
        c?.unobserve(e);
        if (a) {
            const { timer, visibilityChangeCallaback } = a;
            r("clearTimeout")(timer);
            d?.delete(e);
            o("VisibilityState").unsubscribe(visibilityChangeCallaback);
        }
    }
    function P(t) {
        const o = d?.get(t);
        if (o != null) {
            const a = (e || (e = r("performanceNow")))();
            const { imageOnLoadTime, mutationTime, mutationType, startPaintingTime, traceID } = o;
            D({
                element: t,
                traceID,
                mutationType,
                mutationTime,
                startPaintingTime,
                endPainingTime: a,
                imageOnLoadTime
            });
            r("OneTraceCore").endTrace(traceID, a, "CANCEL");
            $(t);
        }
    }
    function N(t, n, o) {
        const a = (e || (e = r("performanceNow")))();
        const i = r("uuidv4")();
        const l = x(t, n, o, a, i);
        const { errorHandler, loadHandler } = l;
        t.addEventListener("load", loadHandler);
        t.addEventListener("error", errorHandler);
    }
    function M(e) {
        return w(e) === "IMG";
    }
    function w(e) {
        return e.tagName ?? "";
    }
    l.init = h;
    l.logImagePerfV2 = y;
}, 98);
__d("LongAnimationFrameObserver", [
    "OneTraceCore",
    "OneTraceSetup",
    "Promise",
    "ScriptPositionMapper",
    "addAnnotations",
    "asyncToGeneratorRuntime",
    "uuidv4"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let s;
    const u = typeof window.PerformanceObserver?.supportedEntryTypes?.includes === "function" && window.PerformanceObserver.supportedEntryTypes.includes("long-animation-frame");
    const c = new Set;
    let d = false;
    let m = 1;
    const p = 8;
    const _ = 3;
    const f = new Set(arguments);
    function g(e) {
        const t = new Set;
        r("OneTraceCore").currentTraces.forEach((n)=>{
            if (n.traceID !== e.traceID && n.traceType !== "RESPONSIVENESS") {
                t.add(n.traceType);
            }
        });
        if (t.size > 0) {
            r("addAnnotations")(e.annotations, {
                string_array: {
                    currentTraceTypes: Array.from(t).sort()
                }
            });
        }
    }
    function h() {
        const e = o("OneTraceSetup").getConfig();
        return (e == null || e.LoAF.enableLogging == null ? undefined : e.LoAF.enableLogging()) === true;
    }
    function y() {
        const e = o("OneTraceSetup").getConfig();
        return (e == null || e.LoAF.enableScriptPositionConversion == null ? undefined : e.LoAF.enableScriptPositionConversion()) === true;
    }
    function C(e) {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            return (s || (s = n("Promise"))).all(e.map((()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ duration, executionStart, forcedStyleAndLayoutDuration, invoker, invokerType, pauseDuration, sourceCharPosition, sourceFunctionName, sourceURL, windowAttribution }) {
                    const m = yield o("ScriptPositionMapper").getLineAndColumnFromCharPosition(sourceURL, sourceCharPosition);
                    return {
                        duration,
                        executionStart,
                        forcedStyleAndLayoutDuration,
                        invoker,
                        invokerType,
                        pauseDuration,
                        sourceCharPosition,
                        sourceFunctionName,
                        sourceURL,
                        windowAttribution,
                        line: m.line,
                        column: m.column
                    };
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })()));
        });
        return b.apply(this, arguments);
    }
    function v(e, t, n) {
        if (n > 0) {
            r("addAnnotations")(e.annotations, {
                int: {
                    [t]: n
                }
            });
        }
    }
    function S(e) {
        return R.apply(this, arguments);
    }
    function R() {
        R = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const isLoggingSample = h();
            const n = isLoggingSample && y();
            const o = n ? yield C(e.scripts) : [];
            const a = r("OneTraceCore").startTrace(r("uuidv4")(), r("OneTraceCore").getCurrentTracePolicy(), "LONG_ANIMATION_FRAME", e.startTime, undefined, {
                bool: {
                    isLoggingSample
                }
            });
            const { blockingDuration, duration, firstUIEventTimestamp, renderStart, startTime, styleAndLayoutStart } = e;
            if (firstUIEventTimestamp > 0) {
                a.markerPoints.firstUIEventTimestamp = {
                    timeSinceStart: firstUIEventTimestamp
                };
            }
            if (renderStart > 0) {
                a.markerPoints.renderStart = {
                    timeSinceStart: renderStart
                };
            }
            if (styleAndLayoutStart > 0) {
                a.markerPoints.styleAndLayoutStart = {
                    timeSinceStart: styleAndLayoutStart
                };
            }
            const p = startTime - firstUIEventTimestamp;
            const _ = renderStart - startTime;
            const f = styleAndLayoutStart - renderStart;
            const b = startTime + duration - styleAndLayoutStart;
            const hasUIEvent = firstUIEventTimestamp > 0 && p > 0;
            let scriptsDuration = 0;
            let scriptsCompilationDuration = 0;
            let scriptsPauseDuration = 0;
            let scriptsForceStyleAndLayoutDuration = 0;
            for (const I of e.scripts ?? []){
                const M = I.startTime ?? 0;
                const w = I.executionStart ?? 0;
                const A = w - M;
                if (A > 0) {
                    scriptsCompilationDuration += A;
                }
                scriptsPauseDuration += I.pauseDuration ?? 0;
                scriptsForceStyleAndLayoutDuration += I.forcedStyleAndLayoutDuration ?? 0;
                scriptsDuration += I.duration ?? 0;
            }
            if (firstUIEventTimestamp > 0) {
                v(a, "firstUIEventToStart", p);
            }
            if (startTime > 0) {
                v(a, "startToRender", _);
            }
            if (renderStart > 0) {
                v(a, "renderToStyleAndLayout", f);
            }
            if (styleAndLayoutStart > 0) {
                v(a, "styleAndLayoutToPaint", b);
            }
            r("addAnnotations")(a.annotations, {
                int: {
                    instanceNum: m++,
                    blockingDuration,
                    loafDuration: duration,
                    scriptsCompilationDuration,
                    scriptsDuration,
                    scriptsPauseDuration,
                    scriptsForceStyleAndLayoutDuration
                },
                string_array: {
                    long_animation_frame_scripts: o.map((e)=>JSON.stringify(e))
                },
                string: {
                    recentInteractionIndentifier: r("OneTraceCore").getRecentInteractionIndentifier()
                },
                bool: {
                    hasUIEvent
                }
            });
            g(a);
            r("OneTraceCore").endTrace(a.traceID, e.startTime + e.duration, "SUCCESS");
        });
        return R.apply(this, arguments);
    }
    function L(duration) {
        if (duration > 2000) {
            return 1;
        }
        if (duration > 1000) {
            return 0.8;
        }
        if (duration > 500) {
            return 0.5;
        }
        return duration / 500;
    }
    function E() {
        if (!(d || !u)) {
            const e = new window.PerformanceObserver(function(e) {
                const t = e.getEntriesByType("long-animation-frame");
                t.forEach((e)=>{
                    if ("blockingDuration" in e) {
                        const t = e;
                        c.forEach((e)=>{
                            e(t)?.finally(function() {});
                        });
                    }
                });
            });
            e.observe({
                buffered: true,
                type: "long-animation-frame"
            });
            let t = 0;
            k((()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                    if (!(t > p) && !(t > _ && Math.random() > L(e.duration))) {
                        const n = `${e.startTime}:${e.duration}`;
                        if (!f.has(n)) {
                            ++t;
                            try {
                                f.add(n);
                                yield S(e);
                            } catch (e) {} finally{
                                f.delete(n);
                                --t;
                            }
                        }
                    }
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })());
            d = true;
        }
    }
    function k(e) {
        if (u) {
            c.add(e);
            return function() {
                c.delete(e);
            };
        }
        return function() {};
    }
    l.canUseLongAnimationFrameAPI = u;
    l.logActiveTraceTypes = g;
    l.init = E;
    l.subscribe = k;
}, 98);
__d("LongtaskObserver", [
    "OneTraceCore",
    "addAnnotations",
    "uuidv4"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const s = typeof window.PerformanceObserver?.supportedEntryTypes?.includes === "function" && window.PerformanceObserver.supportedEntryTypes.includes("longtask");
    const u = new Set;
    let c = false;
    let d = 1;
    function m(e) {
        const t = new Set;
        r("OneTraceCore").currentTraces.forEach((n)=>{
            if (n.traceID !== e.traceID && n.traceType !== "RESPONSIVENESS") {
                t.add(n.traceType);
            }
        });
        if (t.size > 0) {
            r("addAnnotations")(e.annotations, {
                string_array: {
                    currentTraceTypes: Array.from(t).sort()
                }
            });
        }
    }
    function p() {
        if (!c) {
            if (s) {
                const e = new window.PerformanceObserver(function(e) {
                    const t = e.getEntries();
                    t.forEach((e)=>{
                        u.forEach((t)=>{
                            t(e);
                        });
                    });
                });
                e.observe({
                    buffered: true,
                    type: "longtask"
                });
            }
            _(function(e) {
                let t;
                const n = (t = r("OneTraceCore")).startTrace(r("uuidv4")(), t.getCurrentTracePolicy(), "LONGTASK", e.startTime, null);
                r("addAnnotations")(n.annotations, {
                    int: {
                        instanceNum: d++
                    },
                    string: {
                        recentInteractionIndentifier: t.getRecentInteractionIndentifier()
                    }
                });
                m(n);
                t.endTrace(n.traceID, e.startTime + e.duration, "SUCCESS");
            });
            c = true;
        }
    }
    function _(e) {
        if (s) {
            u.add(e);
            return function() {
                u.delete(e);
            };
        }
        return function() {};
    }
    l.canUseLongTasksAPI = s;
    l.logActiveTraceTypes = m;
    l.init = p;
    l.subscribe = _;
}, 98);
__d("OneTraceCore", [
    "OneTraceSetup",
    "ResponsivenessTracker",
    "addAnnotations"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e = null;
    let s = null;
    const currentTraces = new Map;
    const c = {
        "trace-start": new Set,
        "trace-end": new Set,
        "trace-end-before-logging": new Set,
        "trace-policy-set": new Set
    };
    let d = 1;
    function startTrace(e, t, n, o, qplEvent, i) {
        const l = d++;
        const s = {
            traceID: e,
            tracePolicy: t,
            traceType: n,
            instanceKey: l,
            status: "START",
            startTime: o,
            endTime: null,
            annotations: {
                string: {},
                int: {},
                double: {},
                bool: {},
                string_array: {},
                int_array: {},
                double_array: {},
                bool_array: {}
            },
            markerPoints: {},
            qplEvent
        };
        if (i != null) {
            r("addAnnotations")(s.annotations, i);
        }
        currentTraces.set(e, s);
        c["trace-start"].forEach((e)=>e(s));
        if (t != null) {
            setTracePolicy(e, n, t);
        }
        return s;
    }
    function setTracePolicy(e, t, n) {
        if (t === "INITIAL_LOAD" || t === "NAVIGATION" || t === "INTERACTION" && o("OneTraceSetup").getConfig()?.includeInteractionTracePolicy === true) {
            s = n;
            const a = currentTraces.get(e);
            if (a != null) {
                a.tracePolicy = n;
                c["trace-policy-set"].forEach((e)=>e(a));
            }
        }
    }
    function endTrace(e, t, n) {
        const o = currentTraces.get(e);
        if (o) {
            r("addAnnotations")(o.annotations, {
                string: {
                    traceId: e,
                    tracePolicy: o.tracePolicy
                }
            });
            o.endTime = t;
            o.status = n;
            currentTraces.delete(e);
            c["trace-end-before-logging"].forEach((e)=>e(o));
            c["trace-end"].forEach((e)=>e(o));
        }
        return o;
    }
    function subscribe(e, t) {
        c[e].add(t);
        return function() {
            c[e].delete(t);
        };
    }
    function getCurrentTracePolicy() {
        return s;
    }
    function annotateInteractionIndentifier(t) {
        e = t;
        o("ResponsivenessTracker").annotateInteractionToResponsiveness(t);
    }
    function getRecentInteractionIndentifier() {
        return e;
    }
    const C = {
        annotateInteractionIndentifier,
        currentTraces,
        endTrace,
        subscribe,
        getCurrentTracePolicy,
        getRecentInteractionIndentifier,
        setTracePolicy,
        startTrace
    };
    l.default = C;
}, 98);
__d("OneTraceSetup", [
    "CPUPressure",
    "INPLogger",
    "ImagePerfLoggerV2",
    "LongAnimationFrameObserver",
    "LongtaskObserver",
    "ResponsivenessTracker",
    "ScrollPerfTracker",
    "TypingPerfTracker"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e = null;
    function s() {
        return e;
    }
    function u(t) {
        if (e == null) {
            e = Object.freeze(t);
            if (e.Longtask.enableTracking || e.Scroll.enableTracking || e.Responsiveness.enableTracking) {
                o("LongtaskObserver").init();
            }
            if (e.INP.enableTracking) {
                o("INPLogger").init(e);
            }
            if (e.LoAF.enableTracking) {
                o("LongAnimationFrameObserver").init();
            }
            if (e.Scroll.enableTracking) {
                o("ScrollPerfTracker").init(e);
            }
            if (e.Responsiveness.enableTracking) {
                o("ResponsivenessTracker").init(e);
            }
            if (e.Typing.enableTracking) {
                o("TypingPerfTracker").init();
            }
            if (e.Image.enableTracking) {
                o("ImagePerfLoggerV2").init();
            }
            if (e.enableCPUPressureTracking === true) {
                o("CPUPressure").init();
            }
        }
    }
    l.getConfig = s;
    l.setup = u;
}, 98);
__d("ResponsivenessTracker", [
    "INPLogger",
    "LongtaskObserver",
    "MemoryUtils",
    "OneTraceCore",
    "VisibilityAPI",
    "VisibilityState",
    "WebAPIs",
    "addAnnotations",
    "clearInterval",
    "getIncrementalEventCount",
    "performanceNow",
    "setInterval",
    "uuidv4"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = 3;
    let u = false;
    let c = 1;
    let d = null;
    let m = null;
    function p(exitAction, t) {
        if (d) {
            const n = d;
            d = null;
            const a = n.metrics.annotations;
            const usedJSHeapSize = o("MemoryUtils").getCurrentMemory().usedJSHeapSize;
            for(const l in n.interruptionStat){
                const u = n.interruptionStat[l];
                r("addAnnotations")(a, {
                    int: {
                        [`${l}_Count`]: u.count,
                        [`${l}_Total`]: u.total,
                        [`${l}_Max`]: u.max,
                        [`${l}_Avg`]: u.count > 0 ? u.total / u.count : 0
                    }
                });
            }
            let totalEventCount = 0;
            o("INPLogger").getObservedEventTypes().forEach((e)=>{
                const t = r("getIncrementalEventCount")(e, "RESPONSIVENESS");
                if (t != null) {
                    r("addAnnotations")(a, {
                        int: {
                            [`eventCount_${e}`]: t
                        }
                    });
                    totalEventCount += t;
                }
            });
            r("addAnnotations")(a, {
                int: {
                    sessionSeq: c++,
                    usedJSHeapSize,
                    totalEventCount,
                    ST200: n.ST200,
                    ST500: n.ST500,
                    ST1000: n.ST1000
                },
                string: {
                    exitAction,
                    recentInteractionIndentifier: r("OneTraceCore").getRecentInteractionIndentifier()
                },
                string_array: {
                    affectedInteractions: n.affectedInteractions
                }
            });
            n.metrics.tracePolicy = n.navigationMetrics.tracePolicy;
            r("OneTraceCore").endTrace(n.metrics.traceID, t, "SUCCESS");
        }
    }
    function _(e, timeSinceStart, duration, r, logSubspans) {
        if (d) {
            const a = d;
            const i = a.interruptionStat[e];
            if (i == null) {
                return;
            }
            i.count++;
            i.total += duration;
            i.max = Math.max(i.max, duration);
            if (logSubspans === true) {
                let l = null;
                if (i.count === r) {
                    l = `${e}_{n}`;
                } else if (i.count < r) {
                    l = `${e}_${i.count}`;
                }
                if (l != null) {
                    a.metrics.markerPoints[`${l}_start`] = {
                        timeSinceStart
                    };
                    a.metrics.markerPoints[`${l}_end`] = {
                        timeSinceStart: timeSinceStart + duration
                    };
                }
            }
        }
    }
    let f = null;
    function g(e, t) {
        if (m != null) {
            r("clearInterval")(m);
            m = null;
        }
        p(e, t);
    }
    function h(t, sessionInterval) {
        if (!o("VisibilityAPI").isVisibilityHidden() && f) {
            const a = ()=>{
                const navigationMetrics = f;
                if (navigationMetrics) {
                    d = {
                        affectedInteractions: [],
                        metrics: r("OneTraceCore").startTrace(r("uuidv4")(), t, "RESPONSIVENESS", (e || (e = r("performanceNow")))()),
                        navigationMetrics,
                        interruptionStat: {
                            INP: {
                                count: 0,
                                total: 0,
                                max: 0
                            },
                            longtask: {
                                count: 0,
                                total: 0,
                                max: 0
                            }
                        },
                        ST200: 0,
                        ST500: 0,
                        ST1000: 0
                    };
                }
                o("INPLogger").getObservedEventTypes().forEach((e)=>{
                    if (d != null) {
                        d.interruptionStat[`${e}_INP`] = {
                            count: 0,
                            total: 0,
                            max: 0
                        };
                    }
                });
            };
            a();
            if (sessionInterval != null) {
                if (m != null) {
                    r("clearInterval")(m);
                }
                m = r("setInterval")(function() {
                    p("interval", (e || (e = r("performanceNow")))());
                    a();
                }, sessionInterval);
            }
        }
    }
    function y(t) {
        if (!u) {
            u = true;
            if (!o("INPLogger").canUseEventTimingAPI || !o("LongtaskObserver").canUseLongTasksAPI) {
                return;
            }
            const a = t.Responsiveness.overrideMaxSubspans ?? s;
            o("LongtaskObserver").subscribe(function(e) {
                _("longtask", e.startTime, e.duration, a, t.Responsiveness.logSubspans);
            });
            o("INPLogger").subscribe(function(e) {
                _("INP", e.startTime, e.duration, a, t.Responsiveness.logSubspans);
                _(`${e.name}_INP`, e.startTime, e.duration, a, t.Responsiveness.logSubspans);
                if (d != null && e.duration >= 200) {
                    d.ST200 += e.duration;
                    if (e.duration >= 500) {
                        d.ST500 += e.duration;
                        if (e.duration >= 1000) {
                            d.ST1000 += e.duration;
                        }
                    }
                }
            });
            r("OneTraceCore").currentTraces.forEach((e)=>{
                if (e.traceType === "INITIAL_LOAD") {
                    f = e;
                    h(e.tracePolicy, t.Responsiveness.sessionInterval);
                }
            });
            var i = r("OneTraceCore").subscribe("trace-start", function(n) {
                if (t.Responsiveness.sessionInterval == null) {
                    if (n.traceType === "INITIAL_LOAD" || n.traceType === "NAVIGATION") {
                        if (d != null) {
                            g("navigation", (e || (e = r("performanceNow")))());
                        }
                        f = n;
                        h(n.tracePolicy, t.Responsiveness.sessionInterval);
                    }
                } else if (n.traceType === "INITIAL_LOAD" && d == null) {
                    f = n;
                    h(n.tracePolicy, t.Responsiveness.sessionInterval);
                    i();
                }
            });
            o("VisibilityState").subscribe(function(n, o) {
                if (o) {
                    g("VisibilityState", (e || (e = r("performanceNow")))());
                } else {
                    const a = r("OneTraceCore").getCurrentTracePolicy();
                    h(a, t.Responsiveness.sessionInterval);
                }
            });
            o("WebAPIs").onBeforeUnload(function() {
                g("unload", (e || (e = r("performanceNow")))());
            });
        }
    }
    function C(e) {
        d?.affectedInteractions.push(e);
    }
    l.init = y;
    l.annotateInteractionToResponsiveness = C;
}, 98);
__d("ScriptPositionMapper", [
    "OneTraceSetup",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const u = 5000;
    const c = 100;
    const d = o("OneTraceSetup").getConfig()?.LoAF?.config?.skip_script_position_conversion ?? [];
    const m = new Map;
    let p = 1;
    function _(e) {
        let t = m.get(e);
        if (t == null) {
            t = p++;
            m.set(e, t);
        }
        return t;
    }
    class f {
        constructor(e){
            this.$1 = new Map;
            this.$2 = e;
        }
        get(t) {
            const e = this.$1.get(t);
            if (e != null) {
                this.$1.delete(t);
                this.$1.set(t, e);
                return e;
            }
        }
        set(t, n) {
            if (this.$1.has(t)) {
                this.$1.delete(t);
            }
            this.$1.set(t, n);
            if (this.$1.size > this.$2) {
                const e = this.$1.keys().next().value;
                if (e != null) {
                    this.$1.delete(e);
                }
            }
        }
    }
    const g = new f(u);
    const h = new f(c);
    function y(e, t) {
        return C.apply(this, arguments);
    }
    function C() {
        C = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            let n = h.get(e);
            if (n == null) {
                const r = yield fetch(t);
                if (!r.ok) {
                    return null;
                }
                n = yield r.text();
                h.set(e, n);
            }
            return n;
        });
        return C.apply(this, arguments);
    }
    function b(e, t) {
        return v.apply(this, arguments);
    }
    function v() {
        v = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = {
                line: -1,
                column: -1
            };
            if (t === 0) {
                return {
                    line: 1,
                    column: 0
                };
            }
            for (const r of d){
                if (r.test(e)) {
                    return n;
                }
            }
            try {
                const o = _(e);
                const a = `${o}:${t}`;
                const i = g.get(a);
                if (i) {
                    return i;
                }
                const l = yield y(o, e);
                if (l == null || t < 0 || t > l.length) {
                    return n;
                }
                for(var s = l.split("\n"), u = 0, c = 0; c < s.length; c++){
                    const m = s[c].length + 1;
                    if (u + m > t) {
                        const column = t - u;
                        const f = {
                            line: c + 1,
                            column
                        };
                        g.set(a, f);
                        return f;
                    }
                    u += m;
                }
                const h = {
                    line: s.length,
                    column: s[s.length - 1].length
                };
                g.set(a, h);
                return h;
            } catch (e) {
                return n;
            }
        });
        return v.apply(this, arguments);
    }
    l.MAX_POS_LRU_ENTRIES = u;
    l.MAX_SCRIPT_TEXT_LRU_ENTRIES = c;
    l.BLOCKLIST_REGEXPS = d;
    l.getLineAndColumnFromCharPosition = b;
}, 98);
__d("clearTimeoutCometLoggingPri", [
    "cr:8967"
], function(t, n, r, o, a, i, l) {
    "use strict";
    l.default = n("cr:8967");
}, 98);
__d("ScrollPerfTracker", [
    "LongAnimationFrameObserver",
    "LongtaskObserver",
    "OneTraceCore",
    "addAnnotations",
    "clearTimeoutCometLoggingPri",
    "performanceNow",
    "setTimeoutCometLoggingPri",
    "uuidv4"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = new Map;
    const u = "data-scrolltracepolicy";
    const c = 200;
    const d = 16.67;
    const m = d * 4;
    const p = 500;
    let _ = false;
    function f(e) {
        if (!_) {
            const t = function(t) {
                let e = s.get(t.target);
                if (!e) {
                    if (t.target === window.document || t.target instanceof Element && typeof t.target.getAttribute === "function" && t.target.getAttribute(u) != null) {
                        e = g(t);
                    }
                }
                if (e) {
                    e.metrics.markerPoints.lastScrollEvent = {
                        timeSinceStart: t.timeStamp
                    };
                    e.scrollEventCount++;
                    if (e.debounceTimeoutID != null) {
                        r("clearTimeoutCometLoggingPri")(e.debounceTimeoutID);
                    }
                    e.debounceTimeoutID = r("setTimeoutCometLoggingPri")(h, p, e, t.target);
                }
            };
            if (o("LongtaskObserver").canUseLongTasksAPI || o("LongAnimationFrameObserver").canUseLongAnimationFrameAPI) {
                window.addEventListener("scroll", t, {
                    capture: true,
                    passive: true
                });
            }
            _ = true;
        }
    }
    function g(t) {
        const t_timeStamp = t.timeStamp;
        const a = r("uuidv4")();
        const i = r("OneTraceCore").getCurrentTracePolicy();
        const l = t.target instanceof Element && typeof t.target.getAttribute === "function" ? t.target.getAttribute(u) : null;
        const metrics = r("OneTraceCore").startTrace(a, l ?? i, "SCROLL", t_timeStamp);
        var d = {
            longtasks: [],
            longAnimationFrames: [],
            scrollEventCount: 0,
            metrics,
            unsubscribeLongtaskObserver: o("LongtaskObserver").subscribe(function(e) {
                d.longtasks.push(e);
            }),
            unsubscribeLongAnimationFrameObserver: o("LongAnimationFrameObserver").subscribe(function(e) {
                d.longAnimationFrames.push(e);
            })
        };
        r("addAnnotations")(metrics.annotations, {
            string: {
                traceType: "SCROLL"
            }
        });
        metrics.markerPoints.firstScrollEvent = {
            timeSinceStart: t_timeStamp
        };
        metrics.markerPoints.handlerStart = {
            timeSinceStart: (e || (e = r("performanceNow")))()
        };
        s.set(t.target, d);
        return d;
    }
    function h(t, n) {
        const o = (e || (e = r("performanceNow")))();
        const t_metrics = t.metrics;
        t_metrics.endTime = o;
        r("addAnnotations")(t_metrics.annotations, {
            int: {
                scrollDuration: o - t_metrics.startTime,
                scrollEventCount: t.scrollEventCount,
                longtaskCount: t.longtasks.length,
                longAnimationFrameCount: t.longAnimationFrames.length
            }
        });
        let i = 0;
        if (t.longtasks.length > 0) {
            let l = 0;
            let u = 0;
            let d = 0;
            t.longtasks.forEach((e)=>{
                if (!(e.startTime + e.duration < t_metrics.startTime)) {
                    const t = e.startTime < t_metrics.startTime ? e.duration + e.startTime - t_metrics.startTime : e.duration;
                    l += t > 50 ? t - 50 : 0;
                    if (t >= c) {
                        d++;
                    }
                    i += t;
                    if (t > u) {
                        u = t;
                    }
                }
            });
            r("addAnnotations")(t_metrics.annotations, {
                int: {
                    largeLongtaskCount: d,
                    maxLongtaskDuration: u,
                    avgLongtaskDuration: i / t.longtasks.length,
                    totalBlockingTime: l
                }
            });
        }
        r("addAnnotations")(t_metrics.annotations, {
            int: {
                totalLongtaskDuration: i
            }
        });
        v(t_metrics, t.longAnimationFrames);
        t.unsubscribeLongtaskObserver();
        t.unsubscribeLongAnimationFrameObserver();
        s.delete(n);
        r("OneTraceCore").endTrace(t_metrics.traceID, o, "SUCCESS");
    }
    function y(t, n = (e || (e = r("performanceNow")))()) {
        const o = r("OneTraceCore").startTrace(r("uuidv4")(), t, "SCROLL", n);
        r("addAnnotations")(o.annotations, {
            string: {
                traceType: "SCROLL"
            }
        });
        const a = C(o);
        const i = b(o);
        return function(t) {
            const n = (e || (e = r("performanceNow")))();
            o.endTime = n;
            r("addAnnotations")(o.annotations, {
                int: {
                    scrollDuration: n - o.startTime
                }
            });
            if (t != null) {
                r("addAnnotations")(o.annotations, {
                    double: {
                        scrollDistanceX: t.x,
                        scrollDistanceY: t.y
                    }
                });
            }
            a();
            i();
            r("OneTraceCore").endTrace(o.traceID, n, "SUCCESS");
        };
    }
    function C(e) {
        const t = [];
        const n = o("LongtaskObserver").subscribe(function(e) {
            t.push(e);
        });
        return function() {
            n();
            r("addAnnotations")(e.annotations, {
                int: {
                    longtaskCount: t.length
                }
            });
            if (t.length > 0) {
                let o = 0;
                let a = 0;
                let i = 0;
                let l = 0;
                t.forEach((t)=>{
                    if (!(t.startTime + t.duration < e.startTime)) {
                        const n = t.startTime < e.startTime ? t.duration + t.startTime - e.startTime : t.duration;
                        o += n > 50 ? n - 50 : 0;
                        if (n >= c) {
                            l++;
                        }
                        a += n;
                        if (n > i) {
                            i = n;
                        }
                    }
                });
                r("addAnnotations")(e.annotations, {
                    int: {
                        largeLongtaskCount: l,
                        maxLongtaskDuration: i,
                        avgLongtaskDuration: a / t.length,
                        totalLongtaskDuration: a,
                        totalBlockingTime: o
                    }
                });
            }
        };
    }
    function b(e) {
        const t = [];
        const n = o("LongAnimationFrameObserver").subscribe(function(e) {
            t.push(e);
        });
        return function() {
            n();
            v(e, t);
        };
    }
    function v(e, t) {
        r("addAnnotations")(e.annotations, {
            int: {
                loafSupported: o("LongAnimationFrameObserver").canUseLongAnimationFrameAPI ? 1 : 0,
                longAnimationFrameCount: t.length
            }
        });
        const e_endTime = e.endTime;
        if (!(e_endTime == null || e_endTime <= e.startTime)) {
            let totalLoAFDuration = 0;
            let totalFrameDrops = 0;
            let totalLoAFBlockingTime = 0;
            let maxLoAFDuration = 0;
            let largeLoAFCount = 0;
            let totalLargeFrameDrops = 0;
            t.forEach((t)=>{
                if (!(t.startTime + t.duration < e.startTime)) {
                    const n = t.startTime < e.startTime ? t.duration + t.startTime - e.startTime : t.duration;
                    if (t.startTime >= e.startTime) {
                        totalLoAFBlockingTime += t.blockingDuration;
                    }
                    if (n >= m) {
                        largeLoAFCount++;
                    }
                    totalLoAFDuration += n;
                    if (n > maxLoAFDuration) {
                        maxLoAFDuration = n;
                    }
                    if (!(n <= d)) {
                        const r = (n - d) / m;
                        totalLargeFrameDrops += r;
                        const o = (n - d) / d;
                        totalFrameDrops += o;
                    }
                }
            });
            const p = (e_endTime - e.startTime) / 60000;
            const largeFrameDropsPerMinute = p <= 0 ? 0 : Math.floor(totalLargeFrameDrops / p);
            const frameDropPerMinute = p <= 0 ? 0 : Math.floor(totalFrameDrops / p);
            const avgLoAFDuration = t.length === 0 ? 0 : totalLoAFDuration / t.length;
            r("addAnnotations")(e.annotations, {
                int: {
                    avgLoAFDuration,
                    frameDropPerMinute,
                    maxLoAFDuration,
                    largeFrameDropsPerMinute,
                    largeLoAFCount,
                    totalFrameDrops,
                    totalLargeFrameDrops,
                    totalLoAFBlockingTime,
                    totalLoAFDuration
                }
            });
        }
    }
    l.SCROLL_PERF_ATTRIBUTE_NAME = u;
    l.init = f;
    l.customScrollTracker = y;
}, 98);
__d("TypingPerfMetric", [
    "WebAPIs",
    "clearTimeout",
    "performanceNow",
    "setTimeoutAcrossTransitions"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = 2000;
    function u(e) {
        return !!(e.code === "Space" && e.ctrlKey && e.metaKey || e.code === "Period" && e.getModifierState("OS"));
    }
    function c(e, t, n) {
        let o = null;
        let a = 0;
        let i = 0;
        let l = 0;
        let u = 0;
        let c = [];
        let d = null;
        const p = ()=>{
            if (a !== 0) {
                n({
                    allTimes: c,
                    averageTimeToRender: i,
                    keypresses: a,
                    max: l,
                    min: u
                });
            }
            a = 0;
            i = 0;
            l = 0;
            u = 0;
            c = [];
        };
        const _ = function() {
            o = null;
            p();
        };
        const f = m(e, ({ timestamps })=>{
            if (o == null) {
                o = e;
                if (t) {
                    t();
                }
            } else if (o !== e) {
                p();
                if (d != null) {
                    r("clearTimeout")(d);
                    d = null;
                }
                o = e;
                if (t) {
                    t();
                }
            }
            const f = timestamps.finalRAF - timestamps.keydown;
            if (f > 0) {
                a++;
                c.push(f);
                i = (i * (a - 1) + f) / a;
                if (f > l) {
                    l = f;
                }
                if (f < u || u === 0) {
                    u = f;
                }
            }
            if (d != null) {
                r("clearTimeout")(d);
            }
            d = r("setTimeoutAcrossTransitions")(_, s);
        });
        return function() {
            f();
            p();
            if (d != null) {
                r("clearTimeout")(d);
                d = null;
            }
            o = null;
        };
    }
    const d = {
        lastRequestedAnimationFrame: null
    };
    function m(t, n) {
        const a = 20;
        const i = new Float64Array(a);
        const l = new Float64Array(a);
        const s = new Float64Array(a);
        let c = -1;
        let m = -1;
        let mutations = 0;
        let _ = false;
        const f = function(n) {
            c = n.timeStamp;
            m = (e || (e = r("performanceNow")))();
            _ = u(n);
        };
        const g = function() {
            _ = true;
        };
        const h = function() {
            _ = true;
        };
        t.addEventListener("keydown", f);
        t.addEventListener("paste", g);
        t.addEventListener("cut", h);
        let y = false;
        const C = new MutationObserver(function(f) {
            if (_) {
                _ = false;
                c = -1;
                m = -1;
                return;
            }
            if (mutations >= a) {
                c = -1;
                m = -1;
                return;
            }
            const u = (e || (e = r("performanceNow")))();
            let g = false;
            for (const h of f){
                const C = h.type === "characterData" || h.type === "childList" && h.addedNodes.length !== 0 || h.type === "attributes" && h.target.nodeName === "INPUT" && h.attributeName === "value";
                if (!(!C || c === -1 || g)) {
                    i[mutations] = c;
                    l[mutations] = m;
                    s[mutations] = u;
                    c = -1;
                    m = -1;
                    mutations++;
                    g = true;
                    if (y) {
                        return;
                    }
                    d.lastRequestedAnimationFrame = o("WebAPIs").requestAnimationFrame(function(r) {
                        y = false;
                        const e = s[0];
                        if (r - e < 0) {
                            d.lastRequestedAnimationFrame = o("WebAPIs").requestAnimationFrame(function(r) {
                                for(let e = 0; e < mutations; e++){
                                    const o = i[e];
                                    const a = s[e];
                                    n({
                                        delta: r - o,
                                        element: t,
                                        firedOnSecondRAF: true,
                                        mutations,
                                        timestamps: {
                                            finalRAF: r,
                                            keydown: o,
                                            mutation: a
                                        }
                                    });
                                    i[e] = 0;
                                    l[e] = 0;
                                    s[e] = 0;
                                }
                                mutations = 0;
                            });
                        } else {
                            for(let a = 0; a < mutations; a++){
                                const u = i[a];
                                const c = s[a];
                                n({
                                    delta: r - u,
                                    element: t,
                                    firedOnSecondRAF: true,
                                    mutations,
                                    timestamps: {
                                        finalRAF: r,
                                        keydown: u,
                                        mutation: c
                                    }
                                });
                                i[a] = 0;
                                l[a] = 0;
                                s[a] = 0;
                            }
                            mutations = 0;
                        }
                    });
                    y = true;
                }
            }
        });
        C.observe(t, {
            attributeFilter: [
                "value"
            ],
            attributes: true,
            characterData: true,
            childList: true,
            subtree: true
        });
        return function() {
            C.disconnect();
            t.removeEventListener("keydown", f);
            t.removeEventListener("paste", g);
            t.removeEventListener("cut", h);
            const d_lastRequestedAnimationFrame = d.lastRequestedAnimationFrame;
            if (d_lastRequestedAnimationFrame != null) {
                o("WebAPIs").cancelAnimationFrame(d_lastRequestedAnimationFrame);
            }
        };
    }
    l.measureAverageTypingPerformance = c;
}, 98);
__d("TypingPerfMetric.experimental", [
    "clearTimeout",
    "performanceNow",
    "setTimeoutAcrossTransitions"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = 2000;
    const u = new Set([
        "insertText",
        "insertCompositionText",
        "insertFromComposition",
        "insertLineBreak",
        "insertParagraph",
        "deleteCompositionText",
        "deleteContentBackward",
        "deleteByComposition",
        "deleteContent",
        "deleteContentForward",
        "deleteWordBackward",
        "deleteWordForward",
        "deleteHardLineBackward",
        "deleteSoftLineBackward",
        "deleteHardLineForward",
        "deleteSoftLineForward"
    ]);
    function c(e, t, n) {
        let o = null;
        let a = 0;
        let i = 0;
        let l = 0;
        let u = 0;
        let c = [];
        let d = null;
        const p = ()=>{
            if (a !== 0) {
                n({
                    allTimes: c,
                    averageTimeToRender: i,
                    keypresses: a,
                    max: l,
                    min: u
                });
            }
            a = 0;
            i = 0;
            l = 0;
            u = 0;
            c = [];
        };
        const _ = function() {
            o = null;
            p();
        };
        const f = m(e, (n)=>{
            if (o == null) {
                o = e;
                if (t) {
                    t();
                }
            } else if (o !== e) {
                p();
                if (d != null) {
                    r("clearTimeout")(d);
                    d = null;
                }
                o = e;
                if (t) {
                    t();
                }
            }
            if (n > 0) {
                a++;
                c.push(n);
                i = (i * (a - 1) + n) / a;
                if (n > l) {
                    l = n;
                }
                if (n < u || u === 0) {
                    u = n;
                }
            }
            if (d != null) {
                r("clearTimeout")(d);
            }
            d = r("setTimeoutAcrossTransitions")(_, s);
        });
        return function() {
            f();
            p();
            if (d != null) {
                r("clearTimeout")(d);
                d = null;
            }
            o = null;
        };
    }
    const d = {
        lastSetTimeout: null
    };
    function m(t, n) {
        let o = false;
        const a = ()=>{
            const t = (e || (e = r("performanceNow")))();
            d.lastSetTimeout = window.setTimeout(function() {
                if (o) {
                    o = false;
                    return;
                }
                const a = (e || (e = r("performanceNow")))();
                n(a - t);
            }, 0);
        };
        const i = function(t) {
            if (!u.has(t.inputType) || o) {
                o = false;
                return;
            }
            a();
        };
        const l = function({ keyCode }) {
            if (keyCode === 8 || keyCode === 13) {
                a();
            }
        };
        const s = function() {
            o = true;
        };
        const c = function() {
            o = true;
        };
        t.addEventListener("keydown", l, true);
        t.addEventListener("beforeinput", i, true);
        t.addEventListener("paste", s, true);
        t.addEventListener("cut", c, true);
        return function() {
            t.removeEventListener("keydown", l, true);
            t.removeEventListener("beforeinput", i, true);
            t.removeEventListener("paste", s, true);
            t.removeEventListener("cut", c, true);
            const d_lastSetTimeout = d.lastSetTimeout;
            if (d_lastSetTimeout != null) {
                r("clearTimeout")(d_lastSetTimeout);
            }
        };
    }
    l.measureAverageTypingPerformance = c;
}, 98);
__d("TypingPerfTracker", [
    "OneTraceCore",
    "TypingPerfMetric",
    "TypingPerfMetric.experimental",
    "WebAPIs",
    "addAnnotations",
    "performanceNow",
    "uuidv4"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s = null;
    function u(e) {
        return s?.has(e) ?? false;
    }
    let c = false;
    const d = o("WebAPIs").requestAnimationFrame != null && o("WebAPIs").cancelAnimationFrame != null;
    function m() {
        if (!c) {
            if (typeof WeakMap === "function") {
                s = new WeakMap;
            }
            c = true;
        }
    }
    function p(t, identifier, a, i, l) {
        const p = l === true ? o("TypingPerfMetric").measureAverageTypingPerformance : o("TypingPerfMetric.experimental").measureAverageTypingPerformance;
        if (s == null || !c || !d) {
            return function() {};
        }
        if (t !== a && a != null && u(a)) {
            _(a);
        }
        if (u(t)) {
            return function() {};
        }
        let f = null;
        const g = p(t, function() {
            const t = r("uuidv4")();
            f = r("OneTraceCore").startTrace(t, identifier, "TYPING", (e || (e = r("performanceNow")))());
            const routeTracePolicy = r("OneTraceCore").getCurrentTracePolicy();
            r("addAnnotations")(f.annotations, {
                string: {
                    routeTracePolicy,
                    identifier
                }
            });
        }, function({ allTimes, averageTimeToRender, keypresses, max, min }) {
            if (f) {
                const u = f;
                let keypressesBelow50ms = 0;
                allTimes.forEach((e)=>{
                    if (e < 50) {
                        keypressesBelow50ms++;
                    }
                });
                if (i) {
                    for(const d in i){
                        if (typeof i[d] === "string") {
                            r("addAnnotations")(u.annotations, {
                                string: {
                                    [d]: i[d]
                                }
                            });
                        } else if (typeof i[d] === "number") {
                            r("addAnnotations")(u.annotations, {
                                int: {
                                    [d]: i[d]
                                }
                            });
                        }
                    }
                }
                r("addAnnotations")(u.annotations, {
                    double: {
                        averageTimeToRender,
                        keypresses,
                        keypressesBelow50ms,
                        max,
                        min
                    }
                });
                r("OneTraceCore").endTrace(u.traceID, (e || (e = r("performanceNow")))(), "SUCCESS");
            }
        });
        const h = function() {
            g();
            s?.delete(t);
        };
        s?.set(t, h);
        return h;
    }
    function _(e) {
        if (s != null) {
            const t = s.get(e);
            if (t) {
                t();
            }
        }
    }
    l.init = m;
    l.trackTypingPerf = p;
    l.unregisterTypingPerf = _;
}, 98);
__d("OneTraceQPLLogger", [
    "QuickPerformanceLogger",
    "performanceNavigationStart",
    "performanceNow"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = {
        CANCEL: 4,
        CANCEL_BACKGROUND: 630,
        CANCEL_NAVIGATION: 615,
        DROPPED: 216,
        ERROR: 87,
        FAIL: 3,
        OFFLINE: 160,
        START: 1,
        SUCCESS: 2,
        TIMEOUT: 113
    };
    const c = r("performanceNavigationStart")();
    function d(t, n) {
        if (t != null) {
            (e || (e = r("QuickPerformanceLogger"))).markerStart(t, n.instanceKey, n.startTime + c);
        }
    }
    function m(t, n) {
        if (t != null) {
            (e || (e = r("QuickPerformanceLogger"))).markerAnnotate(t, n.annotations, {
                instanceKey: n.instanceKey
            });
            for(const a in n.markerPoints){
                (e || (e = r("QuickPerformanceLogger"))).markerPoint(t, a, {
                    data: n.markerPoints[a].data,
                    instanceKey: n.instanceKey,
                    timestamp: n.markerPoints[a].timeSinceStart + c
                });
            }
            const i = u[n.status];
            e.markerEnd(t, i, n.instanceKey, (n.endTime ?? (s || (s = r("performanceNow")))()) + c);
        }
    }
    l.qplActionMap = u;
    l.initQPL = d;
    l.logQPL = m;
}, 98);
__d("clamp", [], function(t, n, r, o, a, i) {
    function e(e, t, n) {
        if (e < t) {
            return t;
        }
        if (e > n) {
            return n;
        }
        return e;
    }
    i.default = e;
}, 66);
__d("one-trace", [
    "ImagePerfLoggerV2",
    "OneTraceCore",
    "OneTraceSetup",
    "ScrollPerfTracker",
    "TypingPerfTracker",
    "addAnnotations"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = babelHelpers.extends({}, r("OneTraceCore"), {
        addAnnotations: r("addAnnotations"),
        customScrollTracker: o("ScrollPerfTracker").customScrollTracker,
        setup: o("OneTraceSetup").setup,
        logImagePerfV2: o("ImagePerfLoggerV2").logImagePerfV2,
        trackTypingPerf: o("TypingPerfTracker").trackTypingPerf,
        unregisterTypingPerf: o("TypingPerfTracker").unregisterTypingPerf,
        SCROLL_PERF_ATTRIBUTE_NAME: o("ScrollPerfTracker").SCROLL_PERF_ATTRIBUTE_NAME
    });
    l.default = e;
}, 98);
__d("DoubleKeyMap", [], function(t, n, r, o, a, i) {
    "use strict";
    class e {
        constructor(){
            this.$1 = new Map;
        }
        set(t, n, r) {
            let e = this.$1.get(t);
            if (!e) {
                this.$1.set(t, e = new Map);
            }
            e.set(n, r);
        }
        get(t, n) {
            return this.$1.get(t)?.get(n);
        }
        delete(t, n) {
            const e = this.$1.get(t);
            if (e) {
                e.delete(n);
                if (e.size === 0) {
                    this.$1.delete(t);
                }
            }
        }
        getAll(t) {
            return this.$1.get(t);
        }
        deleteAll(t) {
            this.$1.delete(t);
        }
    }
    i.DoubleKeyMap = e;
}, 66);
__d("ImageDownloadTracker", [
    "cr:7422"
], function(t, n, r, o, a, i, l) {
    "use strict";
    l.default = n("cr:7422");
}, 98);
__d("addAnnotations", [], function(t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
        Object.keys(t).forEach((n)=>{
            e[n] = Object.assign(e[n] ?? {}, t[n]);
        });
    }
    i.default = e;
}, 66);
__d("InteractionTracingMetrics", [
    "interaction-tracing-metrics"
], function(t, n, r, o, a, i, l) {
    "use strict";
    l.default = o("interaction-tracing-metrics").InteractionTracingMetricsCore;
}, 98);
__d("MainPageUrl", [
    "ExecutionEnvironment",
    "FBLogger",
    "SimpleHook",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    const c = new URL((()=>{
        let href = (self !== undefined ? self : typeof window !== "undefined" ? window : {
            location: {
                href: "http://undefined"
            }
        }).location.href;
        if ((u || (u = r("ExecutionEnvironment"))).isInWorker && href && href.startsWith("blob:")) {
            href = href.substring(5, href.length);
        }
        return href;
    })());
    const d = new URL(c.href);
    const m = new (o("SimpleHook")).SimpleHook;
    function p() {
        return (u || (u = r("ExecutionEnvironment"))).isInBrowser && d?.searchParams?.get("workerlog") === "debug";
    }
    function _(t) {
        try {
            if (p()) {
                r("FBLogger")("worker").DEBUG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "received url ",
                    ""
                ])), t);
            }
            const n = new URL(t, d.href || c.href);
            if (d.href !== n.href) {
                d.href = n.href;
                m.call(d);
            } else if (p()) {
                r("FBLogger")("worker").DEBUG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "ignoring url: path didn't change in ",
                    ""
                ])), t);
            }
        } catch (error) {
            r("FBLogger")("worker").catching(r("getErrorSafe")(error)).warn("invalid url");
        }
    }
    if (typeof window === "object" && typeof window.location === "object" && typeof window.location.href === "string") {
        _(window.location.href);
    }
    l.mainPageUrl = d;
    l.onMainPageUrlChange = m;
    l.isWorkerLogEnabled = p;
    l.updateMainPageUrl = _;
}, 98);
__d("NestedTimeRange", [
    "SimpleHook",
    "performance",
    "performanceAbsoluteNow"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = new (o("SimpleHook")).SimpleHook;
    const c = new (o("SimpleHook")).SimpleHook;
    const d = "/";
    function m(e, t) {
        return `${e}${d}${t}`;
    }
    class p {
        constructor(e, t = null){
            this.$3 = 0;
            this.$1 = e;
            this.$2 = t;
        }
        isRunning() {
            return this.$3 > 0;
        }
        fullname() {
            if (this.$2 !== null) {
                return m(this.$2.fullname(), this.$1);
            }
            return this.$1;
        }
        start(n = (e || (e = r("performanceAbsoluteNow")))()) {
            if (this.$3 === 0) {
                this.$2?.start(n);
                this.__onStart(n);
            }
            ++this.$3;
            return n;
        }
        __onStart(t) {
            u.call(this, t);
        }
        stop(n = (e || (e = r("performanceAbsoluteNow")))()) {
            --this.$3;
            if (this.$3 === 0) {
                this.__onStop(n);
                this.$2?.stop(n);
            }
            return n;
        }
        __onStop(t) {
            c.call(this, t);
        }
    }
    function _() {
        if ((s || (s = r("performance"))).mark && (s || (s = r("performance"))).measure) {
            u.add(function(e, t) {
                (s || (s = r("performance"))).mark(`${e.fullname()}_start`);
            });
            c.add(function(e, t) {
                (s || (s = r("performance"))).measure(e.fullname(), `${e.fullname()}_start`);
            });
        }
    }
    l.OnRangeStart = u;
    l.OnRangeStop = c;
    l.TIME_RANGE_LEVEL_SEPARATOR = d;
    l.rangeFullName = m;
    l.NestedTimeRange = p;
    l.enableDevConsoleTimeline = _;
}, 98);
__d("QLogEvent", [
    "DoubleKeyMap",
    "FBLogger",
    "NestedTimeRange",
    "QPLEvent",
    "SimpleHook",
    "performanceNavigationStart"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = new (o("DoubleKeyMap")).DoubleKeyMap;
    const c = ((e)=>{
        function t(t, n, r) {
            let o;
            o = e.call(this, t, r) || this;
            o.$QPLRange$p_1 = n;
            u.set(n, o.fullname(), o);
            return o;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.__onStart = function(n) {
            e.prototype.__onStart.call(this, n);
            this.$QPLRange$p_1.point(`${this.fullname()}_START`, {
                timestamp: n
            });
        };
        t_prototype.__onStop = function(n) {
            e.prototype.__onStop.call(this, n);
            this.$QPLRange$p_1.point(`${this.fullname()}_END`, {
                timestamp: n
            });
            u.delete(this.$QPLRange$p_1, this.fullname());
        };
        t_prototype.range = function(n) {
            if (!this.fullname().startsWith(o("NestedTimeRange").TIME_RANGE_LEVEL_SEPARATOR)) {
                r("FBLogger")("qpl").warn("Range %s cannot have subrange since root name does not start with /", this.fullname());
            }
            const a = o("NestedTimeRange").rangeFullName(this.fullname(), n);
            return u.get(this.$QPLRange$p_1, a) ?? new t(n, this.$QPLRange$p_1, this);
        };
        return t;
    })(o("NestedTimeRange").NestedTimeRange);
    const d = new (o("DoubleKeyMap")).DoubleKeyMap;
    const m = new (s = o("SimpleHook")).SimpleHook;
    const p = new s.SimpleHook;
    const _ = new s.SimpleHook;
    const f = new s.SimpleHook;
    const g = ((t)=>{
        function n(n, r = 0, a = 2, i = false, l) {
            let s;
            const u = (e || (e = o("QPLEvent"))).getMarkerId(n);
            s = t.call(this, `event_${u}`) || this;
            s.event = n;
            s.instanceKey = r;
            s.$QPLEvent$p_1 = a;
            s.isUserFlow = i;
            s.$QPLEvent$p_2 = l;
            d.set(u, r, s);
            return s;
        }
        babelHelpers.inheritsLoose(n, t);
        const n_prototype = n.prototype;
        n_prototype.action = function(t) {
            this.$QPLEvent$p_1 = t;
            return this;
        };
        n_prototype.getAction = function() {
            return this.$QPLEvent$p_1;
        };
        n_prototype.setIsUserFlow = function(t) {
            this.isUserFlow = t;
            return this;
        };
        n_prototype.startFromNavStart = function() {
            this.start(r("performanceNavigationStart")());
            return this;
        };
        n_prototype.startFromTime = function(t) {
            this.start(t);
            return this;
        };
        n_prototype.__onStart = function(t) {
            this.$QPLEvent$p_2?.onStart(this, t);
            m.call(this, t);
        };
        n_prototype.__onStop = function(n) {
            this.$QPLEvent$p_2?.onStop(this, n);
            p.call(this, n);
            u.deleteAll(this);
            d.delete((e || (e = o("QPLEvent"))).getMarkerId(this.event), this.instanceKey);
        };
        n_prototype.range = function(t) {
            return u.get(this, t) ?? new c(t, this);
        };
        n_prototype.point = function(t, n = {}) {
            this.$QPLEvent$p_2?.onPoint(this, t, n);
            _.call(this, t, n);
            return this;
        };
        n_prototype.annotate = function(t) {
            this.$QPLEvent$p_2?.onAnnotate(this, t);
            f.call(this, t);
            return this;
        };
        return n;
    })(o("NestedTimeRange").NestedTimeRange);
    function h(t, n = 0, r) {
        return d.get((e || (e = o("QPLEvent"))).getMarkerId(t), n) ?? new g(t, n, 2, false, r);
    }
    l.OnEventStart = m;
    l.OnEventStop = p;
    l.OnEventPoint = _;
    l.OnEventAnnotate = f;
    l.QPLEvent = g;
    l.event = h;
}, 98);
__d("ReactStackUtils", [], function(t, n, r, o, a, i) {
    function e(e, t, n) {
        const r = n(e);
        if (r != null && t != null) {
            const o = r.indexOf(t);
            if (o >= 0) {
                r.splice(o);
            }
        }
        return r;
    }
    i.getTrimmedReactStack = e;
}, 66);
__d("ResourceTimingAPI", [
    "performance"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s = false;
    let u = false;
    function c() {
        if (!s) {
            if (typeof ((e || (e = r("performance"))) == null ? undefined : (e || (e = r("performance"))).getEntriesByName) !== "function" || typeof ((e || (e = r("performance"))) == null ? undefined : (e || (e = r("performance"))).getEntriesByType) !== "function") {
                u = false;
                s = true;
            } else if ((e || (e = r("performance"))).getEntriesByType("resource").length > 0) {
                u = true;
                s = true;
            }
        }
        return u;
    }
    function d(t) {
        if (typeof (e || (e = r("performance"))).getEntriesByName !== "function") {
            return null;
        }
        let n = (e || (e = r("performance"))).getEntriesByName(t);
        if (n.length === 0 && t.indexOf("#") >= 0) {
            n = (e || (e = r("performance"))).getEntriesByName(t.split("#")[0]);
        }
        return n && n[0];
    }
    l.canUseResourceTimingAPI = c;
    l.getResourceTiming = d;
}, 98);
__d("VirtualMessageChannel", [
    "invariant",
    "Promise",
    "SimpleHook",
    "nullthrows",
    "promiseDone"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    class u {
        constructor(e = false){
            this.$2 = new (o("SimpleHook")).SimpleHook;
            this.onmessage = null;
            this.onmessageerror = null;
            this.$3 = e;
        }
        setRemotePort(t) {
            this.$1 = t;
        }
        addEventListener(t, n, r) {
            if (!((t === "message" || t === "error") && r == null)) {
                s(0, 55320, t);
            }
            if (t === "message") {
                if (typeof n === "function") {
                    this.$2.add(n);
                } else {
                    const e = n.handleEvent.bind(n);
                    this.$2.add(e);
                    n.__handler = e;
                }
            }
        }
        removeEventListener(t, n, r) {
            if (typeof n === "function") {
                this.$2.remove(n);
            } else {
                const e = n.__handler;
                this.$2.remove(e);
            }
        }
        postMessage(o, ports) {
            const t = this;
            const i = function() {
                const e = r("nullthrows")(t.$1, "By now remote port must have value!");
                e.$2.call({
                    data: o,
                    ports
                });
            };
            if (this.$3) {
                i();
            } else {
                r("promiseDone")((e || (e = n("Promise"))).resolve(), i);
            }
        }
        start() {}
        close() {}
    }
    const c = function(t, n) {
        this.port1 = new u(t);
        this.port2 = new u(n);
        this.port1.setRemotePort(this.port2);
        this.port2.setRemotePort(this.port1);
    };
    l.VirtualMessagePort = u;
    l.VirtualMessageChannel = c;
}, 98);
__d("VisibilityAPI", [
    "performanceNow"
], function(t, n, r, o, a, i, l) {
    let u;
    const c = self.document?.visibilityState !== undefined || self.document?.hidden !== undefined;
    function d() {
        if (c) {
            if (document.visibilityState !== undefined) {
                return document.visibilityState === "hidden";
            }
            return document.hidden;
        }
        return false;
    }
    function m(e) {
        const t = function(n) {
            const o = n?.timeStamp ?? (u || (u = r("performanceNow")))();
            e(o);
        };
        document.addEventListener("visibilitychange", t);
        return t;
    }
    function p(e) {
        document.removeEventListener("visibilitychange", e);
    }
    function _() {
        return 0;
    }
    l.canUseVisibilityAPI = c;
    l.isVisibilityHidden = d;
    l.onVisibilityChange = m;
    l.removeVisibiltyChangeListener = p;
    l.getEarliestHiddenStartTime = _;
}, 98);
__d("VisibilityState", [
    "VisibilityAPI",
    "performanceNow"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = 1000;
    const u = [];
    let c = null;
    let d = false;
    const m = new Set;
    if (!d) {
        if (o("VisibilityAPI").isVisibilityHidden()) {
            c = o("VisibilityAPI").getEarliestHiddenStartTime();
        }
        d = true;
    }
    if (o("VisibilityAPI").canUseVisibilityAPI) {
        o("VisibilityAPI").onVisibilityChange(function(e) {
            p(e, o("VisibilityAPI").isVisibilityHidden());
            m.forEach((t)=>{
                t(e, o("VisibilityAPI").isVisibilityHidden());
            });
        });
    }
    function p(e, t) {
        if (t) {
            c = e;
        } else if (c != null) {
            u.push({
                end: e,
                start: c
            });
            if (u.length > s) {
                u.shift();
            }
            c = null;
        }
    }
    function _(e) {
        m.add(e);
        return function() {
            m.delete(e);
        };
    }
    function f(e) {
        m.delete(e);
    }
    function g(t, n) {
        const o = [];
        const a = Array.from(u);
        if (c != null) {
            const i = c;
            a.push({
                end: (e || (e = r("performanceNow")))(),
                start: i
            });
        }
        a.forEach((e)=>{
            if (e.start <= t && e.end > t) {
                if (e.end <= n) {
                    o.push({
                        end: e.end,
                        start: t
                    });
                } else {
                    o.push({
                        end: n,
                        start: t
                    });
                }
            } else if (e.start > t && e.start <= n) {
                if (e.end <= n) {
                    o.push({
                        end: e.end,
                        start: e.start
                    });
                } else {
                    o.push({
                        end: n,
                        start: e.start
                    });
                }
            }
        });
        return o;
    }
    function h(e, t) {
        return g(e, t).length > 0;
    }
    l.subscribe = _;
    l.unsubscribe = f;
    l.getHiddenSpans = g;
    l.wasHidden = h;
}, 98);
__d("currentVCTraces", [], function(t, n, r, o, a, i) {
    const e = "default";
    const l = new Map;
    const s = new Map;
    const u = new Map;
    function c() {
        return new Map(u);
    }
    function d(e, t) {
        u.set(e, t);
    }
    function m(e) {
        u.delete(e);
    }
    function p(t) {
        return l.get(t ?? e) ?? null;
    }
    function _(t, n) {
        l.set(n ?? e, t);
    }
    function f(e) {
        l.forEach(e);
    }
    function g(t) {
        return s.get(t ?? e) ?? null;
    }
    function h(t, n) {
        s.set(n ?? e, t);
    }
    i.getCurrentVCTraces = c;
    i.addVCTrace = d;
    i.removeVCTrace = m;
    i.getCurrentNavigationVCTrace = p;
    i.setCurrentNavigationVCTrace = _;
    i.forEachNavigationVCTrace = f;
    i.getLastNavigationVCReport = g;
    i.setLastNavigationVCReport = h;
}, 66);
__d("VisualCompletionUtilCommon", [
    "currentVCTraces"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
        return {
            bottom: e.bottom,
            left: e.left,
            right: e.right,
            top: e.top
        };
    }
    function s(e) {
        return (e.right - e.left) * (e.bottom - e.top);
    }
    function u(e, t) {
        return {
            bottom: Math.max(Math.min(e.bottom, t.bottom), t.top),
            left: Math.min(Math.max(e.left, t.left), t.right),
            right: Math.max(Math.min(e.right, t.right), t.left),
            top: Math.min(Math.max(e.top, t.top), t.bottom)
        };
    }
    function c(e) {
        return e.split("#")[0];
    }
    function d(e) {
        const t = [];
        const n = o("currentVCTraces").getCurrentVCTraces();
        n.forEach((n)=>{
            for(let r = e; r != null;){
                if (n.mutationRoots.has(r)) {
                    t.push(n);
                    break;
                }
                r = r.parentElement;
            }
        });
        return t;
    }
    function m(e) {
        const t = [];
        d(e).forEach((n)=>{
            t.push(n.waitLoadingState(e));
        });
        return t;
    }
    function p(e) {
        d(e).forEach((t)=>{
            t.excludeElement(e);
        });
    }
    l.castToRect = e;
    l.getPixels = s;
    l.getRectIntersection = u;
    l.trimHash = c;
    l.findVCTraces = d;
    l.trackLoadingState = m;
    l.ignoreElement = p;
}, 98);
__d("WebAPIs", [
    "VisibilityAPI"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = [];
    const s = "IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype ? window.IntersectionObserver : null;
    function u(e) {
        return e.intersectionRatio > 0 || e.intersectionRect && e.intersectionRect.height > 0 && e.intersectionRect.width > 0;
    }
    if (s == null) {
        e.push("IntersectionObserver");
    }
    const c = window.MutationObserver || window.WebKitMutationObserver;
    if (c == null) {
        e.push("MutationObserver");
    }
    if (!o("VisibilityAPI").canUseVisibilityAPI) {
        e.push("VisibilityAPI");
    }
    const window_requestAnimationFrame = window.requestAnimationFrame;
    if (window_requestAnimationFrame == null) {
        e.push("requestAnimationFrame");
    }
    const window_cancelAnimationFrame = window.cancelAnimationFrame;
    if (window_requestAnimationFrame == null) {
        e.push("cancelAnimationFrame");
    }
    function p(e) {
        try {
            window.addEventListener("beforeunload", e);
        } catch (e) {
            return null;
        }
        return {
            remove: function() {
                try {
                    window.removeEventListener("beforeunload", e);
                } catch (error) {
                    if (error.message !== "can't access dead object") {
                        throw error;
                    }
                }
            }
        };
    }
    class _ {
        constructor(e){
            this.$1 = e;
        }
        deref() {
            return this.$1;
        }
    }
    const f = typeof window.WeakRef === "function" ? window.WeakRef : _;
    if (typeof window.WeakRef !== "function") {
        e.push("WeakRef");
    }
    const { WeakMap, WeakSet } = window;
    if (typeof window.WeakMap !== "function") {
        e.push("WeakMap");
    }
    if (typeof window.WeakSet !== "function") {
        e.push("WeakSet");
    }
    function y(e) {
        return e != null && e.isConnected !== false;
    }
    function C(e) {
        const t = e?.deref();
        if (t != null && t.isConnected !== false) {
            return t;
        }
        return null;
    }
    l.unavailableAPIs = e;
    l.IntersectionObserver = s;
    l.intersectionObserverEntryIsVisible = u;
    l.MutationObserver = c;
    l.requestAnimationFrame = window_requestAnimationFrame;
    l.cancelAnimationFrame = window_cancelAnimationFrame;
    l.onBeforeUnload = p;
    l.WeakRef = f;
    l.WeakMap = WeakMap;
    l.WeakSet = WeakSet;
    l.isAttachedElement = y;
    l.derefOnlyAttachedElement = C;
}, 98);
__d("VisualCompletionUtil", [
    "ImageDownloadTracker",
    "ResourceTimingAPI",
    "VisualCompletionConstants",
    "VisualCompletionUtilCommon",
    "WebAPIs",
    "addAnnotations",
    "performance",
    "performanceNavigationStart",
    "performanceNow"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    const c = /url\(.*(http.*)\)/gi;
    function d(t, n) {
        for(let o = t; o != null;){
            if (o.getAttribute((e || (e = r("VisualCompletionConstants"))).ATTRIBUTE_NAME) === (e || (e = r("VisualCompletionConstants"))).LOADING_STATE) {
                return false;
            }
            if (n.mutationRoots.has(o)) {
                break;
            }
            o = o.parentElement;
        }
        return true;
    }
    function m(e) {
        const t = Reflect.get(e, "getBoundingClientRect");
        if (typeof t !== "function") {
            return null;
        }
        const n = Reflect.apply(t, e, []);
        const { bottom, left, right, top } = n;
        if (typeof bottom !== "number" || typeof left !== "number" || typeof right !== "number" || typeof top !== "number") {
            return null;
        }
        return {
            bottom,
            left,
            right,
            top
        };
    }
    function p(e) {
        return {
            height: window.innerHeight,
            width: window.innerWidth
        };
    }
    function _(e, t) {
        if (typeof e.getBoundingClientRect !== "function") {
            return false;
        }
        const n = p(t);
        const r = e.getBoundingClientRect();
        const { bottom, left, right, top } = r;
        const u = o("VisualCompletionUtilCommon").getPixels(o("VisualCompletionUtilCommon").getRectIntersection({
            bottom,
            left,
            right,
            top
        }, {
            bottom: n.height,
            left: 0,
            right: n.width,
            top: -f(t).scrollY
        }));
        return u > 0;
    }
    function f(e) {
        const scrollX = window.scrollX ?? 0;
        const scrollY = window.scrollY ?? 0;
        return {
            scrollX,
            scrollY
        };
    }
    function g(e, t) {
        let n = 0;
        for(var r = e; r && r.offsetParent && typeof r.offsetTop === "number";){
            n += r.offsetTop;
            r = r.offsetParent;
        }
        if (r && r.offsetParent == null && typeof r.getBoundingClientRect === "function") {
            const o = r.getBoundingClientRect();
            const a = o.top;
            if (a >= 0) {
                n += a;
            } else if (r === document.body) {
                n -= t.initialScrollY;
            }
        }
        return n;
    }
    function h(e) {
        if (e == null || e === "") {
            return false;
        }
        const t = e.replace(/ /g, "");
        return t.indexOf("display:none") >= 0 || t.indexOf("visibility:hidden") >= 0 || t.indexOf("content-visibility:hidden") >= 0;
    }
    function y(e) {
        for(let t = e; t;){
            if (typeof t.getAttribute === "function" && h(t.getAttribute("style")) || typeof t.hasAttribute === "function" && t.hasAttribute("hidden")) {
                return true;
            }
            t = t.parentElement;
        }
        return false;
    }
    function C(e, t) {
        if (t.has(e)) {
            return t.get(e) === true;
        }
        let n = false;
        if (typeof e.getAttribute === "function" && h(e.getAttribute("style")) || typeof e.hasAttribute === "function" && e.hasAttribute("hidden")) {
            n = true;
        } else if (e.parentElement != null) {
            n = C(e.parentElement, t);
        }
        t.set(e, n);
        return n;
    }
    function b(t, n, o) {
        if (n.config.useIntersectionObserverForVisibility !== true) {
            if (n.config.invisibleStyleMemoization === true && o != null) {
                if (C(t, o)) {
                    return true;
                }
            } else if (y(t)) {
                return true;
            }
        }
        for(let a = t; a;){
            if (n.mutationRoots.has(a)) {
                return false;
            }
            if (n.getPendingLoadingElements().has(a)) {
                return true;
            }
            if (typeof a.getAttribute === "function") {
                const i = a.getAttribute((e || (e = r("VisualCompletionConstants"))).ATTRIBUTE_NAME);
                if (i === (e || (e = r("VisualCompletionConstants"))).IGNORE) {
                    return true;
                }
                if (a !== t && i === (e || (e = r("VisualCompletionConstants"))).IGNORE_DYNAMIC) {
                    n.excludeElement(t);
                    return true;
                }
            }
            a = a.parentElement;
        }
        return false;
    }
    function v(e, t, n) {
        if (B(t) && !b(t, e) && t.textContent != null && t.parentElement != null) {
            const r = t.parentElement;
            if (O(r)) {
                let o = t.textContent;
                if (typeof o === "string") {
                    o = o.trim();
                }
                if (o !== "") {
                    if (n != null && n.trim() === o) {
                        return null;
                    }
                    return r;
                }
            }
        }
        return null;
    }
    function S(e, t, n) {
        const r = [];
        let o = null;
        if (n.config.invisibleStyleMemoization === true) {
            o = new Map;
        }
        Array.from(e).forEach((e)=>{
            if (!(!O(e.target) && !B(e.target))) {
                const a = e.target;
                if (e.type === "childList" && e.addedNodes && e.addedNodes.length) {
                    Array.from(e.addedNodes).forEach((e)=>{
                        const a = e;
                        if (!b(a, n, o)) {
                            if (R(a)) {
                                x(n.mutationSeq, a, "imgLoad", t, n);
                                return;
                            } else if (O(a)) {
                                let i;
                                if (typeof a.querySelectorAll === "function") {
                                    D(n.mutationSeq, a, t, n, o);
                                }
                                if (n.interactionType === "INITIAL_LOAD" && (i = n.config.SSRInjectedElements) != null && i.has(a)) {
                                    r.push([
                                        a,
                                        "ssrInject"
                                    ]);
                                } else {
                                    r.push([
                                        a,
                                        "mutationAdd"
                                    ]);
                                }
                            } else if (n.config.observeTextMutation && B(a)) {
                                const l = v(n, a);
                                if (l != null) {
                                    r.push([
                                        l,
                                        "mutationTextAdd"
                                    ]);
                                }
                            }
                        }
                    });
                } else if (e.type === "attributes" && !b(a, n, o)) {
                    if (e.attributeName === "hidden") {
                        if (!a.hasAttribute("hidden")) {
                            let i;
                            if (n.interactionType === "INITIAL_LOAD" && (i = n.config.SSRInjectedElements) != null && i.has(a)) {
                                r.push([
                                    a,
                                    "ssrUnhide"
                                ]);
                            } else {
                                r.push([
                                    a,
                                    "mutationHiddenAttribute"
                                ]);
                            }
                        }
                    } else if (e.attributeName === "style") {
                        const l = a.getAttribute("style");
                        const s = e.oldValue;
                        if (h(s) && !h(l)) {
                            let u;
                            if (n.interactionType === "INITIAL_LOAD" && (u = n.config.SSRInjectedElements) != null && u.has(a)) {
                                r.push([
                                    a,
                                    "ssrUnhide"
                                ]);
                            } else {
                                r.push([
                                    a,
                                    "mutationStyleAttribute"
                                ]);
                            }
                        }
                    } else {
                        if (F(a) === "image" && e.attributeName === "href" || F(a) === "IMG" && e.attributeName === "src") {
                            x(n.mutationSeq, a, "mutationImageAttribute", t, n);
                        }
                    }
                } else if (n.config.observeTextMutation && e.type === "characterData" && B(a)) {
                    const c = v(n, a, e.oldValue);
                    if (c != null) {
                        r.push([
                            c,
                            "mutationTextUpdate"
                        ]);
                    }
                }
            }
        });
        if (n.config.invisibleStyleMemoization === true && o != null) {
            o.clear();
        }
        return r;
    }
    function R(e) {
        return F(e) === "IMG" || F(e) === "image";
    }
    function L(e) {
        return F(e) === "picture";
    }
    function E(e) {
        return R(e) || L(e);
    }
    function k(e) {
        if (typeof window.getComputedStyle !== "function") {
            return null;
        }
        const t = window.getComputedStyle(e);
        const n = t["background-image"];
        if (t.visibility !== "hidden" && n && n !== "none") {
            c.lastIndex = 0;
            const r = c.exec(n);
            if (r && r.length > 1) {
                return r[1].replace('"', "");
            }
        }
        return null;
    }
    function I(e) {
        if (!e.reported) {
            const t = (s || (s = r("performanceNow")))();
            e.checkViewport();
            e.mutationRoots.forEach((t)=>{
                if (t && typeof t.querySelectorAll === "function") {
                    const n = t.querySelectorAll("div,i,span,li");
                    Array.prototype.forEach.call(n, function(t) {
                        if (!(t.textContent || t.children.length || e.cssBgElements.has(t) || b(t, e) || !e.inViewport(t))) {
                            const n = k(t);
                            e.bgCheckCount++;
                            if (n != null) {
                                const r = {
                                    element: new (o("WebAPIs")).WeakRef(t),
                                    url: n,
                                    resourceTiming: o("ResourceTimingAPI").getResourceTiming(n)
                                };
                                e.cssBgElements.set(t, r);
                            }
                        }
                    });
                }
            });
            e.cssBgScanOverhead = s() - t;
        }
    }
    function T(t, n) {
        if (typeof t.getAttribute === "function" && t.getAttribute((e || (e = r("VisualCompletionConstants"))).ATTRIBUTE_NAME) === (e || (e = r("VisualCompletionConstants"))).LOADING_STATE) {
            n.waitLoadingState(t);
        } else if (typeof t.querySelectorAll === "function") {
            const o = t.querySelectorAll(`[${(e || (e = r("VisualCompletionConstants"))).ATTRIBUTE_NAME}=${e.LOADING_STATE}]`);
            Array.from(o).forEach((e)=>{
                n.waitLoadingState(e);
            });
        }
    }
    function D(e, t, n, r, o) {
        const a = t.querySelectorAll("img, image");
        Array.from(a).forEach((t)=>{
            if (!b(t, r, o)) {
                x(e, t, "imgLoad", n, r);
            }
        });
    }
    function x(t, n, o, a, i) {
        if (!i.trackedImages.has(n)) {
            i.trackedImages.add(n);
            if (n.complete) {
                if (n.getAttribute((e || (e = r("VisualCompletionConstants"))).ATTRIBUTE_NAME) === (e || (e = r("VisualCompletionConstants"))).MEDIA_VC_IMAGE) {
                    i.scheduleIntersectionObserver(t, n, o, a);
                }
                return;
            }
            let l = n.currentSrc || n.src;
            const u = n.crossOrigin;
            if (F(n) === "image" && typeof n.getAttribute === "function") {
                const c = n.getAttribute("xlink:href");
                if (c != null) {
                    l = c;
                }
            }
            if (!(l == null || l === "" || l.indexOf("http") !== 0)) {
                const d = function() {
                    i.imageDone(n);
                };
                const m = function() {
                    i.imageWait(n);
                };
                if (n.getAttribute("loading") === "lazy") {
                    const p = $(t, n, o, a, d, i);
                    const { errorHandler, loadHandler } = p;
                    i.scheduleElementVisibleObserver(n, function() {
                        if (!(i.reported || n.complete)) {
                            m();
                            n.addEventListener("load", loadHandler);
                            n.addEventListener("error", errorHandler);
                        }
                    }, {
                        executeOnce: true,
                        cleanAfterReport: true
                    });
                } else if (i.config.use_image_download_tracker === true) {
                    const g = (s || (s = r("performanceNow")))();
                    r("ImageDownloadTracker")(l, m, u).then(()=>{
                        const e = (s || (s = r("performanceNow")))();
                        i.scheduleIntersectionObserver(t, n, o, a, g, e);
                        d();
                    }).catch(()=>d());
                } else {
                    const h = $(t, n, o, a, d, i);
                    const { errorHandler, loadHandler } = h;
                    m();
                    n.addEventListener("load", loadHandler);
                    n.addEventListener("error", errorHandler);
                }
            }
        }
    }
    function $(e, t, n, o, a, i) {
        const l = (s || (s = r("performanceNow")))();
        const u = function() {
            const d = (s || (s = r("performanceNow")))();
            i.scheduleIntersectionObserver(e, t, n, o, l, d);
            a();
            t.removeEventListener("load", u);
            t.removeEventListener("error", c);
        };
        var c = function() {
            a();
            t.removeEventListener("load", u);
            t.removeEventListener("error", c);
        };
        return {
            loadHandler: u,
            errorHandler: c
        };
    }
    function P(t, n) {
        return typeof t.getAttribute === "function" && t.getAttribute((e || (e = r("VisualCompletionConstants"))).ATTRIBUTE_NAME) === n;
    }
    function N(e) {
        const t = function() {
            e.scrolled = true;
            if (!e.markerPoints.has("scroll_start")) {
                e.addMarkerPoint("scroll_start", (s || (s = r("performanceNow")))());
            }
        };
        try {
            window.addEventListener("scroll", t, {
                passive: true
            });
            e.onComplete(function() {
                window.removeEventListener("scroll", t);
            });
        } catch (error) {
            if (error.message !== "can't access dead object") {
                throw error;
            }
        }
    }
    function M(t, n) {
        if (t instanceof HTMLImageElement) {
            n.record.isMediaVCElement = P(t, (e || (e = r("VisualCompletionConstants"))).MEDIA_VC_IMAGE);
            n.record.imgNaturalWidth = t.naturalWidth;
            n.record.imgNaturalHeight = t.naturalHeight;
        }
    }
    function w(e, t) {
        if (typeof window.devicePixelRatio === "number") {
            r("addAnnotations")(e.annotations, {
                double: {
                    devicePixelRatio: window.devicePixelRatio
                }
            });
        }
        if (e.navSequence === 1 && (u || (u = r("performance"))) && (u || (u = r("performance"))).timing && (u || (u = r("performance"))).timing.responseStart) {
            e.markerPoints.set("TTFB", {
                timestamp: (u || (u = r("performance"))).timing.responseStart - r("performanceNavigationStart")()
            });
        }
        if (t.interactionType === "INITIAL_LOAD") {
            const n = (u || (u = r("performance"))) == null || (u || (u = r("performance"))).getEntriesByType == null ? undefined : (u || (u = r("performance"))).getEntriesByType("paint");
            if (n) {
                n.forEach((e)=>{
                    if (e.name === "first-contentful-paint") {
                        t.addFirstMarkerPoint("FCP", e.startTime);
                    }
                });
            }
        }
    }
    const A = {
        attributeFilter: [
            "hidden",
            "style",
            "href",
            "src"
        ],
        attributeOldValue: true,
        attributes: true,
        characterData: true,
        childList: true,
        subtree: true
    };
    function F(e) {
        return e.tagName ?? "";
    }
    function O(e) {
        return e.nodeType === Node.ELEMENT_NODE && e.tagName !== "SCRIPT" && e.tagName !== "STYLE" && e.tagName !== "LINK";
    }
    function B(e) {
        return e.nodeType === Node.TEXT_NODE;
    }
    function W(e) {
        return {
            onError: function() {},
            onLoad: function() {},
            unmountCallback: function() {}
        };
    }
    function q(e) {
        const t = 4;
        let n = 0;
        let r = 0;
        e.visualChangeRecordList = e.visualChangeRecordList.filter(({ record })=>{
            if (record.isMediaVCElement && record.visibleAtMutation === true && record.imgNaturalHeight != null && record.imgNaturalWidth != null) {
                const resolution = record.imgNaturalHeight * record.imgNaturalWidth;
                const ignored = +(resolution < n * t);
                const s = {
                    ignored,
                    resolution,
                    mutationType: record.mutationType,
                    naturalWidth: String(record.imgNaturalWidth),
                    naturalHeight: String(record.imgNaturalHeight)
                };
                if (n > 0) {
                    s.ratio = resolution / n;
                }
                e.addMarkerPoint(`mediaVCImage_${r++}`, record.paintTime, s);
                if (ignored) {
                    return false;
                }
                e.addMarkerPoint("ImageMediaVC", record.paintTime);
                n = resolution;
                return true;
            }
            return true;
        });
    }
    function U(e, t, n) {
        e.mutationRoots.forEach((e)=>{
            const r = function() {
                t(null, true);
            };
            n.push(function() {
                e.removeEventListener("click", r);
            });
            e.addEventListener("click", r);
            const o = function() {
                t(null, true);
            };
            n.push(function() {
                e.removeEventListener("keyDown", o);
            });
            e.addEventListener("keyDown", o);
        });
    }
    l.isOutsideLoadingStateInHTRoot = d;
    l.getMeasuredRect = m;
    l.getViewportSize = p;
    l.isInAboveTheFold = _;
    l.getScrollPosition = f;
    l.offsetTop = g;
    l.checkInvisibleStyle = h;
    l.checkInvisibleStyleElement = y;
    l.checkInvisibleStyleElementRecursive = C;
    l.shouldIgnoreMutation = b;
    l.getParentElementForTextNodeChange = v;
    l.extractMutationElements = S;
    l.isImage = R;
    l.isPicture = L;
    l.isImageOrPicture = E;
    l.getStyleBackground = k;
    l.scanCssBgElements = I;
    l.checkLoadingStates = T;
    l.trackAllChildImages = D;
    l.trackImage = x;
    l.getImageLoadHandlers = $;
    l.checkDOMElementAttributeValue = P;
    l.setupScrollHandler = N;
    l.getImageNaturalSize = M;
    l.addPlatformMetaData = w;
    l.mutationObserverConfig = A;
    l.getTagName = F;
    l.isElementNode = O;
    l.isTextNode = B;
    l.trackImageLoad = W;
    l.processMediaVCImage = q;
    l.subscribeUserInputForExtraMutation = U;
}, 98);
__d("WorkerMessagePortLogging", [
    "MainPageUrl",
    "QLogEvent",
    "qpl"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = Math.random() < 0.1;
    const s = 20;
    const u = 100;
    const c = 50;
    function d() {
        return o("MainPageUrl").isWorkerLogEnabled();
    }
    let m = 0;
    function p() {
        return o("QLogEvent").event(r("qpl")._(41497718, "106"), m++);
    }
    function _(port_name, n, r = false) {
        if (!(n == null || !e)) {
            const { receiveDateTime, receiveTimestamp, sendDateTime, sendDelayHighPrecision, sendTimestamp } = n;
            const m = p();
            m.startFromTime();
            const _ = m.range("SEND_DELAY");
            _.start(sendTimestamp);
            _.stop(receiveTimestamp);
            const f = m.range("SEND_DELAY_LOW_PRECISION");
            f.start(sendDateTime);
            f.stop(receiveDateTime);
            const send_drift = Math.abs(sendTimestamp - sendDateTime);
            const receive_drift = Math.abs(receiveTimestamp - receiveDateTime);
            m.annotate({
                string: {
                    port_name
                },
                int: {
                    send_delay: sendDelayHighPrecision,
                    send_drift,
                    receive_drift
                },
                bool: {
                    send_delay_above_max: sendDelayHighPrecision != null && sendDelayHighPrecision > s,
                    send_drift_above_max: send_drift > u,
                    receive_drift_above_max: receive_drift > u
                }
            });
            if (r) {
                const y = m.range("ROUND_TRIP");
                y.start(n.sendTimestamp);
                y.stop(n.receiveTimestamp);
                const round_trip = n.receiveTimestamp - n.sendTimestamp;
                m.annotate({
                    int: {
                        round_trip
                    },
                    bool: {
                        round_trip_above_max: round_trip > c
                    }
                });
            }
            m.stop();
        }
    }
    l.isWorkerLogEnabled = d;
    l.logMessageTiming = _;
}, 98);
__d("WorkerMessagePort", [
    "Deferred",
    "FBLogger",
    "MainPageUrl",
    "Promise",
    "PromiseAnnotate",
    "SimpleHook",
    "VirtualMessageChannel",
    "WorkerMessagePortLogging",
    "performanceAbsoluteNow",
    "promiseDone"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    function c(e) {
        return e;
    }
    const d = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(o("SimpleHook").SimpleHook);
    function m(e, t) {
        e.__timing = t;
    }
    function p(e) {
        return e.__timing;
    }
    const _ = (()=>{
        function e(e, t) {
            const n = this;
            this.$1 = {};
            this.onUnhandledMessage = new d;
            this.onMessage = new d;
            this.onPostMessage = new d;
            this.onError = new d;
            this.$2 = e;
            this.name = t;
            this.$2.addEventListener("message", function(e) {
                return n.onMessageHandler(e.data);
            });
            this.$2.addEventListener("error", function(e) {
                return n.onError.call(e);
            });
            this.onPostMessage.add(function(e) {
                m(e, {
                    receiveDateTime: -1,
                    receiveTimestamp: -1,
                    sendDateTime: Date.now(),
                    sendDelayHighPrecision: 0,
                    sendDelayLowPrecision: 0,
                    sendTimestamp: (u || (u = r("performanceAbsoluteNow")))()
                });
            });
            this.onMessage.add(function(e) {
                const t = p(e);
                if (t != null) {
                    const { sendDateTime, sendTimestamp } = t;
                    const l = (u || (u = r("performanceAbsoluteNow")))();
                    const s = Date.now();
                    t.receiveTimestamp = l;
                    t.receiveDateTime = s;
                    t.sendDelayHighPrecision = l - sendTimestamp;
                    t.sendDelayLowPrecision = s - sendDateTime;
                    o("WorkerMessagePortLogging").logMessageTiming(n.name, t);
                }
            });
        }
        const e_prototype = e.prototype;
        e_prototype.onMessageHandler = function(t) {
            try {
                this.onMessage.call(t);
                const e = this.$1[t.type];
                if (e) {
                    e.call(t);
                } else {
                    this.onUnhandledMessage.call(t);
                }
            } catch (error) {
                this.onError.call(error);
            }
        };
        e_prototype.postMessage = function(t, n) {
            this.onPostMessage.call(t);
            if (n) {
                this.$2.postMessage(t, n);
            } else {
                this.$2.postMessage(t);
            }
        };
        e_prototype.addMessageListener = function(t, n) {
            let e = this.$1[t];
            if (!e) {
                e = new d;
                this.$1[t] = e;
            }
            return e.add(n);
        };
        e_prototype.removeMessageListener = function(t, n) {
            const e = this.$1[t];
            return !!e && e.remove(n);
        };
        e_prototype.removeAllMessageListeners = function(t) {
            const e = this.$1[t];
            if (e) {
                e.clear();
            }
        };
        e_prototype.onMessageOnce = function(t, r) {
            const e = this;
            return new (s || (s = n("Promise")))(function(n) {
                var o = e.addMessageListener(t, function(a) {
                    if (r(a)) {
                        e.removeMessageListener(t, o);
                        n(a);
                    }
                });
            });
        };
        e_prototype.close = function() {
            const e = this.$2;
            e.close?.();
            e.terminate?.();
        };
        e_prototype.isWrappingVirtualMessagePort = function() {
            return this.$2 instanceof o("VirtualMessageChannel").VirtualMessagePort;
        };
        return e;
    })();
    function f(e) {
        return e;
    }
    const g = ((t)=>{
        function a(a, i) {
            let l;
            l = t.call(this, a, i) || this;
            const u = l;
            const d = new (r("Deferred"));
            const m = d.getPromise();
            u.addMessageListener("endpoint_started", function(e) {
                d.resolve(e);
                const t = p(e);
                u.postMessage({
                    endpoint: e.endpoint,
                    startSendTimestamp: t?.sendTimestamp,
                    targetEndpoint: l.name,
                    type: "endpoint_started_received"
                });
            });
            const _ = u.onMessageOnce("endpoint_started_received", function() {
                return true;
            });
            (e || (e = o("PromiseAnnotate"))).setDisplayName(m, "endpoint_started");
            e.setDisplayName(_, "endpoint_started_received");
            u.postMessage({
                endpoint: l.name,
                type: "endpoint_started"
            });
            r("promiseDone")(m, function(e) {
                const t = p(e);
                o("WorkerMessagePortLogging").logMessageTiming(l.name, t);
            });
            r("promiseDone")(_, function(e) {
                const t = p(e);
                if (t != null) {
                    o("WorkerMessagePortLogging").logMessageTiming(l.name, t, true);
                }
            });
            l.fullyConnected = (s || (s = n("Promise"))).race([
                m,
                _
            ]).then(()=>l);
            return l;
        }
        babelHelpers.inheritsLoose(a, t);
        return a;
    })(_);
    l.getMessageTiming = p;
    l.WorkerMessagePort = _;
    l.CastWorkerMessagePort = f;
    l.WorkerSyncedMessagePort = g;
}, 98);
__d("BrowserCrashStaticConfig", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = {
        ELEMENT_TEXT_SIZE_LIMIT: 20,
        DEFAULT_REACT_COMPONENT_CONTEXT_SIZE: 3,
        INTERACTION_SINCE_LAST_RESPONSIVE_STATE_LIMIT: 5,
        INTERACTION_HISTORY_LIMIT: 100,
        INTERACTION_HISTORY_QUERY_DEFAULT_SIZE: 10,
        TIMER_BASED_INTERVAL_MS: 3000,
        LOG_FOR_CRASH_MAX_FAIL_COUNT: 5,
        LOGGING_SIZE_MAP_MAX_ENTRIES: 10,
        LOGGING_SIZE_MAP_MAX_KEY_LENGTH: 80,
        LOG_KEY_MAX_LENGTH: 80,
        LOG_VALUE_MAX_LENGTH: 100
    };
    i.default = e;
}, 66);
__d("CometSSRClientRender", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = "CometSSRClientRenderError";
    function l(t) {
        throw `${e}: ${t}`;
    }
    i.CometSSRClientRenderErrorSentinel = e;
    i.CometSSRClientRender = l;
}, 66);
__d("Deferred", [
    "Promise"
], function(t, n, r, o, a, i) {
    "use strict";
    let e;
    (e || (e = n("Promise"))).resolve();
    class l {
        constructor(t){
            var r = this;
            var o = t || e || (e = n("Promise"));
            this.$1 = false;
            this.$2 = new o(function(e, t) {
                r.$3 = e;
                r.$4 = t;
            });
        }
        getPromise() {
            return this.$2;
        }
        resolve(t) {
            this.$1 = true;
            this.$3(t);
        }
        reject(t) {
            this.$1 = true;
            this.$4(t);
        }
        isSettled() {
            return this.$1;
        }
    }
    i.default = l;
}, 66);
__d("FalcoCollectionConstraintChecker", [], function(t, n, r, o, a, i) {
    "use strict";
    function e(consents, t, n) {
        if (typeof t !== "number" || !Number.isInteger(t)) {
            return false;
        }
        const r = consents[String(t)];
        if (r == null) {
            return false;
        }
        return r <= n;
    }
    function l(e, t) {
        if (typeof t !== "number" || !Number.isInteger(t) || t < 0 || t > 52) {
            return false;
        }
        return Math.floor(e / 2 ** t) % 2 === 1;
    }
    function s(t, n, r) {
        if (!Array.isArray(r)) {
            return false;
        }
        const o = r[0];
        if (o === "n") {
            if (r.length !== 2 || !Array.isArray(r[1])) {
                return false;
            }
            return !s(t, n, r[1]);
        }
        if (o === "c") {
            return e(t.consents, r[1], n);
        }
        if (o === "m") {
            return l(t.modes ?? 0, r[1]);
        }
        if (o !== "a" && o !== "o") {
            return false;
        }
        let i = o === "a";
        for(let u = 1; u < r.length; u++){
            const c = r[u];
            if (!Array.isArray(c)) {
                return false;
            }
            i = s(t, n, c);
            if (i) {
                if (o === "o") {
                    return true;
                }
            } else if (o === "a") {
                return false;
            }
        }
        return i;
    }
    i.default = s;
}, 66);
__d("OdsWebBatchFalcoEvent", [
    "FalcoLoggerInternal",
    "getFalcoLogPolicy_DO_NOT_USE"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = r("getFalcoLogPolicy_DO_NOT_USE")("1838142");
    const s = o("FalcoLoggerInternal").create("ods_web_batch", e);
    l.default = s;
}, 98);
__d("ServerTime", [
    "ServerTimeData"
], function(t, n, r, o, a, i, l) {
    let s = 0;
    let u = 0;
    let c = null;
    const d = (typeof window !== "undefined" ? window : self).performance?.timing;
    if (d) {
        const { requestStart, domLoading } = d;
        if (requestStart && domLoading) {
            const _ = r("ServerTimeData").timeOfResponseStart - r("ServerTimeData").timeOfRequestStart;
            const f = domLoading - requestStart - _;
            u = f / 2;
            const g = domLoading - r("ServerTimeData").timeOfResponseStart - u;
            const h = Math.max(50, f * 0.8);
            if (Math.abs(g) > h) {
                s = Math.round(g);
                c = Date.now();
            }
        }
    } else {
        b(r("ServerTimeData").serverTime);
    }
    function y() {
        return Date.now() - s;
    }
    function C() {
        return s;
    }
    function b(e) {
        const t = Date.now() - e;
        if (Math.abs(s - t) > 60000) {
            s = Math.round(t);
            c = Date.now();
        }
    }
    function v() {
        if (c === null) {
            return null;
        }
        return Date.now() - c;
    }
    const S = y;
    const R = C;
    l.getMillis = y;
    l.getOffsetMillis = C;
    l.update = b;
    l.getMillisSinceLastUpdate = v;
    l.get = S;
    l.getSkew = R;
}, 98);
__d("FalcoLoggerInternal", [
    "AnalyticsCoreData",
    "FBLogger",
    "FalcoCollectionConstraintChecker",
    "FalcoLoggerInternalState",
    "FalcoUtils",
    "Promise",
    "Random",
    "ServerTime",
    "WebSession",
    "err",
    "justknobx",
    "performanceAbsoluteNow",
    "promiseDone"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    const c = o("FalcoUtils").getTaggedBitmap(0);
    const d = o("FalcoUtils").getTaggedBitmap(37);
    const m = 500 * 1024 * 0.6;
    const p = {};
    function _() {
        try {
            if (r("justknobx")._("1276") && window.self !== window.top && window.top?.require != null) {
                const t = window.top.require("FalcoLoggerInternalState");
                if (t != null) {
                    r("FBLogger")("falco", "iframe_handling").warn("Successfully delegated internal state to top frame");
                    return t.getInstance();
                }
            }
        } catch (e) {}
        return r("FalcoLoggerInternalState").getInstance();
    }
    const f = _();
    function g(e, t, n) {
        const a = r("Random").coinflip(t.r);
        if (!a) {
            o("FalcoUtils").bumpODSMetrics(n, "event.filters.sampling", 1);
            return false;
        }
        const i = t.c;
        if (i != null && (s || (s = r("AnalyticsCoreData"))).consents != null) {
            const l = {
                consents: (s || (s = r("AnalyticsCoreData"))).consents
            };
            const u = h(i, l, e);
            if (!u) {
                o("FalcoUtils").bumpODSMetrics(n, "event.filters.consent", 1);
                return false;
            }
        }
        return true;
    }
    function h(e, t, n) {
        let o = p[e];
        if (o == null) {
            o = p[e] = JSON.parse(e);
        }
        return r("FalcoCollectionConstraintChecker")(t, n, o);
    }
    function y() {
        return (u || (u = r("performanceAbsoluteNow")))() - o("ServerTime").getOffsetMillis();
    }
    function C(e, t, sampled, o, getData, getPrivacyContext) {
        if ((s || (s = r("AnalyticsCoreData"))).enable_observer) {
            const l = babelHelpers.extends({
                name: e,
                time: t,
                sampled,
                getData,
                policy: o
            }, getPrivacyContext && {
                getPrivacyContext
            });
            f_observable.emit("event", l);
        }
    }
    function b(e, t, n, privacyContext, i, l) {
        const extra = JSON.stringify(i);
        if (extra.length > m) {
            o("FalcoUtils").bumpODSMetrics(e, "event.filters.exceeded_size", 1);
            r("FBLogger")("falco", `oversized_message:${e}`).warn('Dropping event "%s" due to exceeding the max size %s at %s', e, m, extra.length);
            return;
        }
        let tags = o("FalcoUtils").xorBitmap([
            0,
            0
        ], c);
        tags = o("FalcoUtils").xorBitmap(tags, d);
        const _ = {
            name: e,
            policy: t,
            time: n,
            extra,
            privacyContext,
            tags,
            sessionId: o("WebSession").getId(),
            deviceId: (s || (s = r("AnalyticsCoreData"))).device_id,
            appVersion: s.app_version
        };
        l.wrapAndEnqueueItem(_);
        o("FalcoUtils").bumpODSMetrics(e, "event.captured", 1);
    }
    function v(e, t, n, a, i, l) {
        try {
            const s = y();
            o("FalcoUtils").bumpODSMetrics(e, "event.logged", 1);
            const u = g(s, t, e);
            if (u) {
                const c = a();
                const d = n && n();
                if (i) {
                    r("promiseDone")(i().then((n)=>{
                        b(e, t, s, d, babelHelpers.extends({}, c, n), l);
                    }).catch((n)=>{
                        r("FBLogger")("falco", "canonical_resolution_failed").catching(n instanceof Error ? n : r("err")(String(n))).warn('Failed to resolve canonicals for "%s", logging without them', e);
                        b(e, t, s, d, c, l);
                    }));
                } else {
                    b(e, t, s, d, c, l);
                }
            }
            C(e, s, u, t, a, n);
        } catch (error) {
            R(error);
        }
    }
    function S(t, a, i, l, s, logQueue) {
        try {
            const c = y();
            o("FalcoUtils").bumpODSMetrics(t, "event.logged", 1);
            const d = g(c, a, t);
            if (d) {
                const m = l();
                const p = (e || (e = n("Promise"))).resolve(i && i());
                const _ = s ? s().catch((e)=>{
                    r("FBLogger")("falco", "canonical_resolution_failed").catching(e instanceof Error ? e : r("err")(String(e))).warn('Failed to resolve canonicals for "%s", logging without them', t);
                    return null;
                }) : null;
                return e.all([
                    m,
                    p,
                    _
                ]).then(([n, r, o])=>{
                    b(t, a, c, r, o ? babelHelpers.extends({}, n, o) : n, logQueue);
                    C(t, c, d, a, function() {
                        return n;
                    }, r && function() {
                        return r;
                    });
                });
            } else {
                C(t, c, d, a, l, i);
                return (e || (e = n("Promise"))).resolve();
            }
        } catch (error) {
            return (e || (e = n("Promise"))).reject(error);
        }
    }
    function R(e) {
        const t = r("FBLogger")("falco");
        if (e instanceof Error) {
            t.catching(e).warn("Error while attempting to log to Falco");
        } else {
            t.warn("Caught non-error while attempting to log to Falco: %s", JSON.stringify(e));
        }
    }
    var f_observable = f.observable;
    function E(e, t, n) {
        const { logCriticalQueue, logImmediatelyQueue, logQueue } = f;
        return {
            log: function(o, i) {
                v(e, t, i, o, n, logQueue);
            },
            logAsync: function(o, i) {
                S(e, t, i, o, n, logQueue).catch(R);
            },
            logImmediately: function(a, i) {
                v(e, t, i, a, n, logImmediatelyQueue);
            },
            logCritical: function(a, i) {
                v(e, t, i, a, n, logCriticalQueue);
            },
            logRealtimeEvent: function(a, i) {
                v(e, t, i, a, n, logCriticalQueue);
            }
        };
    }
    l.observable = f_observable;
    l.create = E;
}, 98);
__d("pageID", [
    "WebSession"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = o("WebSession").getPageId_DO_NOT_USE();
    l.default = e;
}, 98);
__d("WebStorageMutex", [
    "WebStorage",
    "clearTimeout",
    "pageID",
    "setTimeout"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s = null;
    let u = false;
    let c = r("pageID");
    function d() {
        if (!u) {
            u = true;
            s = (e || (e = r("WebStorage"))).getLocalStorage();
        }
        return s;
    }
    class m {
        constructor(e){
            this.name = e;
        }
        static testSetPageID(t) {
            c = t;
        }
        $2() {
            const t = d();
            if (!t) {
                return c;
            }
            const n = (t.getItem(`mutex_${this.name}`) ?? "").split(":");
            if (n && parseInt(n[1], 10) >= Date.now()) {
                return n[0];
            }
            return null;
        }
        $3(n) {
            const t = d();
            if (t) {
                const o = n ?? 1000;
                const a = Date.now() + o;
                (e || (e = r("WebStorage"))).setItemGuarded(t, `mutex_${this.name}`, `${c}:${a}`);
            }
        }
        hasLock() {
            return this.$2() === c;
        }
        lock(t, n, o) {
            const e = this;
            if (this.$1 != null && this.$1 !== 0) {
                r("clearTimeout")(this.$1);
            }
            if (c === (this.$2() || c)) {
                this.$3(o);
            }
            this.$1 = r("setTimeout")(function() {
                e.$1 = null;
                const r = e.hasLock() ? t : n;
                if (r) {
                    r(e);
                }
            }, 0);
        }
        unlock() {
            if (this.$1 != null && this.$1 !== 0) {
                r("clearTimeout")(this.$1);
            }
            const e = d();
            if (e && this.hasLock()) {
                e.removeItem(`mutex_${this.name}`);
            }
        }
    }
    l.default = m;
}, 98);
__d("guid", [], function(t, n, r, o, a, i) {
    function e() {
        if (typeof crypto === "object" && typeof crypto.getRandomValues === "function" && typeof String.prototype.padStart === "function") {
            const e = crypto.getRandomValues(new Uint32Array(2));
            return `f${e[0].toString(16).padStart(8, "0")}${e[1].toString(16).padStart(8, "0")}`;
        }
        return `f${(Math.random() * (1 << 30)).toString(16).replace(".", "")}`;
    }
    i.default = e;
}, 66);
__d("PersistedQueue", [
    "AnalyticsCoreData",
    "BaseEventEmitter",
    "ExecutionEnvironment",
    "Run",
    "WebStorage",
    "WebStorageMutex",
    "cr:8958",
    "err",
    "guid",
    "nullthrows",
    "performanceAbsoluteNow",
    "requestAnimationFrame"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    const d = 86400000;
    const m = 30 * 1000;
    const p = new (r("BaseEventEmitter"));
    let _;
    function f(t = false) {
        if (_ === undefined) {
            let n;
            if ((n = (e || (e = r("AnalyticsCoreData"))).queue_activation_experiment) != null && n && t) {
                try {
                    return (s || (s = r("WebStorage"))).getLocalStorageForRead();
                } catch (e) {
                    return null;
                }
            }
            const o = "check_quota";
            try {
                const a = (s || (s = r("WebStorage"))).getLocalStorage();
                if (a) {
                    a.setItem(o, o);
                    a.removeItem(o);
                    _ = a;
                } else {
                    _ = null;
                }
            } catch (e) {
                _ = null;
            }
        }
        return _;
    }
    function g(e) {
        const { prev, next } = e;
        if (next) {
            next.prev = prev;
        }
        if (prev) {
            prev.next = next;
        }
        e.next = null;
        e.prev = null;
    }
    function h(item) {
        return {
            item,
            next: null,
            prev: null
        };
    }
    function y(e, t) {
        return `${e}^\$${t?.queueNameSuffix ?? ""}`;
    }
    const C = {};
    const b = {};
    const v = {};
    let S = false;
    const R = (()=>{
        function e(e, t) {
            const o = this;
            this.$7 = 0;
            this.$3 = e;
            this.$5 = t?.queueNameSuffix ?? "";
            this.$4 = y(e, t);
            this.$11 = `${this.$4}^\$${r("guid")()}`;
            this.$14 = false;
            if (t) {
                this.$8 = t.max_age_in_ms ?? d;
                this.$12 = t.migrate;
                this.$13 = t.onLoad;
            } else {
                this.$8 = d;
            }
            this.$9 = [
                p.addListener("active", function() {
                    if (o.$10 != null || !o.$14) {
                        o.$14 = true;
                        o.$10 = null;
                        o.$15();
                    }
                }),
                p.addListener("inactive", function() {
                    if (o.$10 == null) {
                        o.$10 = Date.now();
                        o.$16();
                    }
                })
            ];
            if ((u || (u = r("ExecutionEnvironment"))).canUseDOM || (u || (u = r("ExecutionEnvironment"))).isInWorker) {
                r("requestAnimationFrame")(function() {
                    return o.$15();
                });
            }
        }
        const e_prototype = e.prototype;
        e_prototype.isActive = function() {
            const $10 = this.$10;
            if ($10 == null) {
                return true;
            }
            if (Date.now() - $10 > m) {
                this.$10 = null;
                p.emit("active", null);
                return true;
            }
            return false;
        };
        e_prototype.$15 = function() {
            this.$17();
            this.$18();
        };
        e_prototype.$16 = function() {
            this.$19();
        };
        e_prototype.getFullName = function() {
            return this.$4;
        };
        e_prototype.getQueueNameSuffix = function() {
            return this.$5;
        };
        e.isQueueActivateExperiment = function() {
            return S;
        };
        e.setOnQueueActivateExperiment = function() {
            S = true;
        };
        e.create = function(n, o) {
            const t = y(n, o);
            if (t in C) {
                throw r("err")(`Duplicate queue created: ${n}`);
            }
            const a = new e(n, o);
            C[t] = a;
            if (v[n]) {
                v[n].push(a);
            } else {
                v[n] = [
                    a
                ];
            }
            const i = b[n];
            if (i) {
                a.setHandler(i);
            }
            return a;
        };
        e.setHandler = function(t, n) {
            if (v[t]) {
                const e = v[t];
                for (const r of e){
                    r.setHandler(n);
                }
            }
            b[t] = n;
        };
        e_prototype.destroy = function() {
            this.$9.forEach((e)=>e.remove());
        };
        e.destroy = function(t, n) {
            const e = y(t, n);
            C[e].destroy();
            delete C[e];
        };
        e_prototype.setHandler = function(t) {
            this.$6 = t;
            this.$18();
            return this;
        };
        e_prototype.$18 = function() {
            if (this.$7 > 0 && this.$6) {
                this.$6(this);
            }
        };
        e_prototype.length = function() {
            return this.$7;
        };
        e_prototype.enumeratedLength = function() {
            return this.$20().length;
        };
        e.isPersistenceAllowed = function() {
            const e = f();
            return !!e;
        };
        e.getSuffixesForKey = function(t) {
            const e = [];
            try {
                const n = f(true);
                if (!n) {
                    return e;
                }
                const r = `${t}^\$`;
                for(let o = 0; o < n.length; o++){
                    const a = n.key(o);
                    if (typeof a === "string" && a.startsWith("mutex_falco_")) {
                        n.removeItem(a);
                    } else if (typeof a === "string" && a.startsWith(r)) {
                        const i = a.split("^$");
                        if (i.length > 2) {
                            const l = i[1];
                            e.push(l);
                        } else {
                            e.push("");
                        }
                    }
                }
            } catch (e) {}
            return e;
        };
        e_prototype.$17 = function() {
            const e = this;
            const t = f(true);
            if (t) {
                const o = `${this.$4}^\$`;
                const a = new (r("WebStorageMutex"))(o);
                const i = this.$12;
                const l = this.$13;
                a.lock(function(a) {
                    const s = Date.now() - e.$8;
                    try {
                        for(let u = 0; u < t.length; u++){
                            const c = t.key(u);
                            if (typeof c === "string" && c.startsWith(o)) {
                                const d = t.getItem(c);
                                t.removeItem(c);
                                if (d != null && d.startsWith("{")) {
                                    const m = n("cr:8958").parse(r("nullthrows")(d));
                                    if (m.ts > s) {
                                        try {
                                            for (const p of m.items){
                                                let _ = i != null ? i(p) : p;
                                                _ = l != null ? l(p) : p;
                                                e.$21(_);
                                            }
                                        } catch (e) {}
                                    }
                                }
                            }
                        }
                    } catch (e) {}
                    a.unlock();
                    e.$18();
                });
            }
        };
        e_prototype.$19 = function() {
            const e = f();
            if (e) {
                const t = this.$20();
                if (t.length === 0) {
                    if (e.getItem(this.$11) != null) {
                        e.removeItem(this.$11);
                    }
                    return;
                }
                (s || (s = r("WebStorage"))).setItemGuarded(e, this.$11, n("cr:8958").stringify({
                    items: t.map((e)=>e),
                    ts: (c || (c = r("performanceAbsoluteNow")))()
                }));
            }
        };
        e_prototype.$20 = function() {
            let e = this.$1;
            const t = [];
            if (!e) {
                return t;
            }
            do {
                t.push(r("nullthrows")(e).item);
            }while (e = e?.prev)
            return t.reverse();
        };
        e_prototype.markItemAsCompleted = function(t) {
            const t_prev = t.prev;
            g(t);
            if (this.$1 === t) {
                this.$1 = t_prev;
            }
            this.$7--;
            if (!this.isActive()) {
                this.$19();
            }
        };
        e_prototype.markItemAsFailed = function(t) {
            g(t);
            const e = this.$2;
            if (e) {
                const n = e.prev;
                if (n) {
                    n.next = t;
                    t.prev = n;
                }
                t.next = e;
                e.prev = t;
            }
            this.$2 = t;
            if (this.isActive()) {
                this.$18();
            }
        };
        e_prototype.markItem = function(t, n) {
            if (n) {
                this.markItemAsCompleted(t);
            } else {
                this.markItemAsFailed(t);
            }
        };
        e_prototype.$21 = function(t) {
            const e = h(t);
            const n = this.$1;
            if (n) {
                n.next = e;
                e.prev = n;
            }
            this.$1 = e;
            if (!this.$2) {
                this.$2 = e;
            }
            this.$7++;
        };
        e_prototype.wrapAndEnqueueItem = function(t) {
            this.$21(t);
            if (this.isActive()) {
                this.$18();
            } else {
                this.$19();
            }
        };
        e_prototype.dequeueItem = function() {
            if (this.$10 != null) {
                return null;
            }
            const e = this.$2;
            if (e) {
                this.$2 = e.next;
                return e;
            }
            return null;
        };
        return e;
    })();
    R.eventEmitter = p;
    if ((u || (u = r("ExecutionEnvironment"))).canUseDOM) {
        var L = o("Run").maybeOnBeforeUnload(function() {
            p.emit("inactive", null);
            L?.remove();
        }, false);
        if (!L) var E = o("Run").onUnload(function() {
            p.emit("inactive", null);
            E.remove();
        });
    }
    l.default = R;
}, 98);
__d("FalcoUtils", [
    "AnalyticsCoreData",
    "ODS",
    "PersistedQueue",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = "ods_web_batch";
    const c = p(33);
    function onLoad(e) {
        e.tags = _(e.tags ?? [
            0,
            0
        ], c);
        return e;
    }
    function m(e) {
        if (e) {
            const { appScopedIdentity, fbIdentity } = e;
            let r = "";
            if (fbIdentity) {
                const { accountId, actorId } = fbIdentity;
                r = `${accountId}^#${actorId}^#`;
            } else {
                if (appScopedIdentity !== undefined) {
                    r = `^#^#${appScopedIdentity}`;
                }
            }
            return `${r}^#${e.claims.join("^#")}`;
        }
        return "";
    }
    function p(e) {
        if (e > 30) {
            return [
                0,
                1 << e - 30
            ];
        }
        return [
            1 << e,
            0
        ];
    }
    function _(e, t) {
        return [
            e[0] | t[0],
            e[1] | t[1]
        ];
    }
    function f(t, n, a) {
        if (t !== u) {
            (s || (s = o("ODS"))).bumpEntityKey(7173, `entities.ff_js_web.${t}.${(e || (e = r("AnalyticsCoreData"))).app_id}.${((e || (e = r("AnalyticsCoreData"))).app_version ?? "0").split(".")[0]}.${e.push_phase}`, n, a);
        }
    }
    function g(e, t, n) {
        const a = r("PersistedQueue").getSuffixesForKey(e) ?? [];
        a.push(t);
        for (const queueNameSuffix of a){
            const l = `${e}^\$${queueNameSuffix}`;
            if (!n.has(l)) {
                const s = r("PersistedQueue").create(e, {
                    onLoad,
                    queueNameSuffix
                });
                n.set(l, s);
            }
        }
        return r("nullthrows")(n.get(`${e}^\$${t}`));
    }
    l.identityToString = m;
    l.getTaggedBitmap = p;
    l.xorBitmap = _;
    l.bumpODSMetrics = f;
    l.createQueue = g;
}, 98);
__d("FalcoLoggerInternalState", [
    "AnalyticsCoreData",
    "BaseEventEmitter",
    "FalcoUtils"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = (()=>{
        function t() {
            let t;
            this.queuesMap = new Map;
            const n = (t = o("FalcoUtils")).identityToString((e || (e = r("AnalyticsCoreData"))).identity);
            this.observable = new (r("BaseEventEmitter"));
            this.logQueue = o("FalcoUtils").createQueue("falco_queue_log", n, this.queuesMap);
            this.logImmediatelyQueue = o("FalcoUtils").createQueue("falco_queue_immediately", n, this.queuesMap);
            this.logCriticalQueue = o("FalcoUtils").createQueue("falco_queue_critical", n, this.queuesMap);
        }
        t.getInstance = function() {
            if (!t.$1) {
                t.$1 = new t;
            }
            return t.$1;
        };
        return t;
    })();
    s.$1 = null;
    l.default = s;
}, 98);
__d("ODS", [
    "ExecutionEnvironment",
    "FBLogger",
    "OdsWebBatchFalcoEvent",
    "Random",
    "Run",
    "clearTimeout",
    "gkx",
    "setTimeout"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = (e || (e = r("ExecutionEnvironment"))).canUseDOM || (e || (e = r("ExecutionEnvironment"))).isInWorker;
    const c = {};
    function d(e, t, n, r = 1, o = 1) {
        const i = c[t] ?? null;
        if (!(i != null && i <= 0)) {
            s = s || {};
            const l = s[e] || (s[e] = {});
            const u = l[t] || (l[t] = {});
            const d = u[n] || (u[n] = {
                n: 0,
                d: null
            });
            let m = Number(r);
            let _ = Number(o);
            if (i > 0) {
                m /= i;
                _ /= i;
            }
            if (!(!isFinite(m) || !isFinite(_))) {
                d.n += m;
                if (arguments.length >= 5) {
                    let f = d.d;
                    if (f == null) {
                        f = 0;
                    }
                    d.d = f + _;
                }
                p();
            }
        }
    }
    let m;
    function p() {
        if (m == null) {
            m = r("setTimeout")(function() {
                h();
            }, r("gkx")("20935") ? 13000 / 2 : 5000);
        }
    }
    function _(e, t) {
        if (u) {
            c[e] = o("Random").random() < t ? t : 0;
        }
    }
    function f(e, t, n, r = 1) {
        if (u) {
            d(e, t, n, r);
        }
    }
    function g(e, t, n, r = 1, o = 1) {
        if (u) {
            d(e, t, n, r, o);
        }
    }
    function h(e = "normal") {
        if (!u || (r("clearTimeout")(m), m = null, s == null)) {
            return;
        }
        const batch = s;
        s = null;
        function n() {
            return {
                batch
            };
        }
        if (e === "critical") {
            r("OdsWebBatchFalcoEvent").logCritical(n);
        } else {
            r("OdsWebBatchFalcoEvent").log(n);
        }
    }
    if (u) {
        o("Run").onUnload(function() {
            h("critical");
        });
    }
    l.setEntitySample = _;
    l.bumpEntityKey = f;
    l.bumpFraction = g;
    l.flush = h;
}, 98);
__d("FbtLogging", [
    "cr:1094907"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = n("cr:1094907") == null ? undefined : n("cr:1094907").logImpression;
    l.logImpression = e;
}, 98);
__d("IntlQtEventFalcoEvent", [
    "FalcoLoggerInternal",
    "getFalcoLogPolicy_DO_NOT_USE"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = r("getFalcoLogPolicy_DO_NOT_USE")("1848815");
    const s = o("FalcoLoggerInternal").create("intl_qt_event", e);
    l.default = s;
}, 98);
__d("JSResource", [
    "JSResourceReferenceImpl"
], function(t, n, r, o, a, i, l) {
    const e = {};
    function s(t, n) {
        e[t] = n;
    }
    function u(t) {
        return e[t];
    }
    function c(e) {
        const t = e;
        const n = u(t);
        if (n) {
            return n;
        }
        const o = new (r("JSResourceReferenceImpl"))(t);
        s(t, o);
        return o;
    }
    c.loadAll = r("JSResourceReferenceImpl").loadAll;
    l.default = c;
}, 98);
__d("JSResourceForInteraction", [
    "JSResource"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return r("JSResource").call(null, e);
    }
    l.default = e;
}, 98);
__d("Locale", [
    "SiteData"
], function(t, n, r, o, a, i, l) {
    function e() {
        return r("SiteData").is_rtl;
    }
    l.isRTL = e;
}, 98);
__d("WAWebNoop", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = function() {};
    i.default = e;
}, 66);
__d("WAWebRuntimeEnvironmentUtils", [], function(t, n, r, o, a, i) {
    function e() {
        return typeof WorkerGlobalScope !== "undefined" && typeof importScripts === "function";
    }
    function l() {
        return e() && "ServiceWorkerGlobalScope" in self;
    }
    i.isWorker = e;
    i.isServiceWorker = l;
}, 66);
__d("WAWebPwaDocumentMetadataUtils", [
    "WAWebNoop",
    "WAWebRuntimeEnvironmentUtils"
], function(t, n, r, o, a, i, l) {
    let e = "";
    let s = -1;
    let u;
    if (!o("WAWebRuntimeEnvironmentUtils").isWorker()) {
        e = document.title;
    }
    function c(t = null) {
        if (t != null) {
            e = t;
        }
        d(e);
    }
    function d(e, t = false) {
        if (g() && !t) {
            document.title = " ";
        } else {
            self.clearTimeout(u);
            document.title += " ";
            u = self.setTimeout(function() {
                document.title = e;
            }, 0);
        }
    }
    const m = 2000;
    const p = 60000;
    function _(t) {
        let n = false;
        let r = false;
        const o = self.setInterval(function() {
            n = !n;
            const r = n ? t : e;
            d(r, true);
        }, m);
        const a = function() {
            if (!r) {
                r = true;
                self.clearInterval(o);
                self.clearTimeout(i);
                d(e, true);
            }
        };
        var i = self.setTimeout(a, p);
        return a;
    }
    function f(e) {
        if (e != null) {
            s = e;
        }
        if (g != null && g() && "setAppBadge" in navigator) {
            if (s === -1 || s === 0) {
                if (navigator.clearAppBadge != null) {
                    navigator.clearAppBadge().catch(r("WAWebNoop"));
                }
            } else if (navigator.setAppBadge != null) {
                navigator.setAppBadge(s).catch(r("WAWebNoop"));
            }
        }
    }
    function g() {
        if ("matchMedia" in self) {
            return window.matchMedia("(display-mode: standalone)").matches;
        }
        return false;
    }
    l.setDocumentTitle = c;
    l.startDocumentTitleFlash = _;
    l.setAppBadge = f;
    l.isCurrentWebSessionInsidePwa = g;
}, 98);
__d("WAWebEnvironment", [
    "WAWebPwaDocumentMetadataUtils",
    "gkx"
], function(t, n, r, o, a, i, l) {
    const isWindows = r("gkx")("4112");
    const isWeb = !isWindows;
    const isGuest = r("gkx")("10314");
    function getIsShowroom() {
        return typeof window !== "undefined" && window.location.pathname.startsWith("/showroom");
    }
    function getEnvironment() {
        if (r("gkx")("26258")) {
            return "prod";
        }
        if (r("gkx")("26259")) {
            return "intern";
        }
        return "dev";
    }
    function getSubPlatform() {
        if (isWindows) {
            return "win_hybrid";
        }
        if (o("WAWebPwaDocumentMetadataUtils").isCurrentWebSessionInsidePwa()) {
            return "pwa";
        }
        return "web";
    }
    const p = {
        isWeb,
        isWindows,
        isGuest,
        getEnvironment,
        getSubPlatform,
        getIsShowroom
    };
    l.default = p;
}, 98);
__d("WAWebFBLogger", [
    "FBLogger"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = "wa_web";
    const s = "media_platform";
    const u = [
        e,
        s
    ];
    function c() {
        return r("FBLogger")(e);
    }
    l.PROJECT = u;
    l.WAWebFBLogger = c;
}, 98);
__d("WAWebLocalStorage", [], function(t, n, r, o, a, i) {
    let e;
    try {
        e = window.localStorage;
    } catch (e) {}
    i.default = e;
}, 66);
__d("WAWebODS", [
    "promiseDone",
    "requireDeferred"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = r("requireDeferred")("WAWebODSImpl").__setRef("WAWebODS");
    const s = {
        addListener: function(n) {
            r("promiseDone")(e.load().then((e)=>{
                e.addListener(n);
            }));
        },
        incr: function(n, o) {
            r("promiseDone")(e.load().then((e)=>{
                e.incr(n, o);
            }));
        }
    };
    l.default = s;
}, 98);
__d("WAWebODSObserver", [
    "BaseEventEmitter"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = new (r("BaseEventEmitter"));
    l.default = e;
}, 98);
__d("WAWebODSImpl", [
    "ODS",
    "WAWebODSObserver"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = "whatsapp_web";
    const u = {
        addListener: function(t) {
            r("WAWebODSObserver").addListener("event", t);
        },
        incr: function(n, a = 1) {
            (e || (e = o("ODS"))).bumpEntityKey(2363, s, n, a);
            r("WAWebODSObserver").emit("event", {
                count: a,
                key: n
            });
        }
    };
    l.default = u;
}, 98);
__d("WAWebUserPrefsLoginKeys", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = Object.freeze({
        LAST_WID_MD: "last-wid-md"
    });
    i.WAWebUserPrefsLoginKeys = e;
}, 66);
__d("logForCrashUtils", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = {
        RST_JS_STACK_KEY_PREFIX: "#rst-js-stack"
    };
    i.default = e;
}, 66);
__d("logForCrash", [
    "BrowserCrashStaticConfig",
    "FBLogger",
    "JSErrorLoggingConfig",
    "Promise",
    "getErrorSafe",
    "gkx",
    "justknobx",
    "logForCrashUtils"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    function s() {
        return !(!("crashReport" in window) || !R(window.crashReport?.set) || !R(window.crashReport?.initialize));
    }
    const u = s();
    const c = 28 * 1024;
    const d = 50;
    const m = "meta-crash-storage";
    let p = false;
    const _ = [];
    function f() {
        const e = _.splice(0);
        for (const t of e){
            g(t);
        }
    }
    function g(t) {
        try {
            const o = t();
            if (o instanceof (e || (e = n("Promise")))) {
                o.catch((e)=>{
                    r("FBLogger")("log-for-crash").catching(r("getErrorSafe")(e)).warn("onLogForCrashReady callback failed");
                });
            }
        } catch (error) {
            r("FBLogger")("log-for-crash").catching(r("getErrorSafe")(error)).warn("onLogForCrashReady callback failed");
        }
    }
    function h() {
        if (!(!u || p || !r("justknobx")._("195") || !r("gkx")("207"))) {
            b(c);
        }
    }
    function y() {
        p = true;
        f();
    }
    function C(e) {
        if (e == null) {
            return false;
        }
        return e?.message === "The requested size is too large.";
    }
    function b(e) {
        try {
            window.crashReport?.initialize(e)?.then(y)?.catch(function(t) {
                if (C(t) && e >= d) {
                    b(Math.floor(e / 2));
                    return;
                }
                v();
            });
        } catch (error) {
            r("FBLogger")("log-for-crash").catching(r("getErrorSafe")(error)).warn("Failed to initialize crash report storage");
        }
    }
    function v() {
        try {
            window.crashReport?.initialize(m)?.then(y)?.catch(function(e) {
                r("FBLogger")("log-for-crash").catching(r("getErrorSafe")(e)).warn("Failed to initialize crash report storage with name fallback");
                p = false;
            });
        } catch (error) {
            r("FBLogger")("log-for-crash").catching(r("getErrorSafe")(error)).warn("Failed to initialize crash report storage with name fallback");
        }
    }
    h();
    function S(e) {
        if (typeof e.replace === "function") {
            return e.replace(/\n/g, " ").replace(/\s+/g, " ");
        }
        return null;
    }
    function R(e) {
        if (typeof e !== "function" || typeof e.toString !== "function") {
            return false;
        }
        const t = S(e.toString());
        if (t == null) {
            return false;
        }
        return t.endsWith("{ [native code] }");
    }
    function L(e, t) {
        if (e.length <= t) {
            return e;
        }
        const n = e.length - t;
        return `${e.slice(0, t)}...(${n} more)`;
    }
    function E() {
        const LOGGING_SIZE_MAP_MAX_ENTRIES = r("BrowserCrashStaticConfig").LOGGING_SIZE_MAP_MAX_ENTRIES;
        const LOGGING_SIZE_MAP_MAX_KEY_LENGTH = r("BrowserCrashStaticConfig").LOGGING_SIZE_MAP_MAX_KEY_LENGTH;
        const n = Array.from(x).sort((e, t)=>t[1] - e[1]);
        const n_length = n.length;
        const a = n.reduce((acc, item)=>acc + item[1], 0);
        const i = n.slice(0, LOGGING_SIZE_MAP_MAX_ENTRIES);
        const l = i.map(([n, r])=>`${L(n, LOGGING_SIZE_MAP_MAX_KEY_LENGTH)}:${r}`);
        let s = l.join(",");
        if (n_length > LOGGING_SIZE_MAP_MAX_ENTRIES) {
            s += `,...(${n_length - LOGGING_SIZE_MAP_MAX_ENTRIES} more entries)`;
        }
        s += ` [total: ${n_length} entries, ${a} bytes]`;
        return s;
    }
    const k = 119211728144504;
    const I = o("JSErrorLoggingConfig").appId === k && r("gkx")("3981");
    let T = 0;
    let D = false;
    var x = new Map;
    let $ = 0;
    const P = 5;
    let N = 0;
    const M = 4;
    let w = null;
    function A(e) {
        try {
            if (w === null) {
                if (typeof window.crashReport?.remove === "function") {
                    w = "remove";
                } else if (typeof window.crashReport?.delete === "function") {
                    w = "delete";
                } else {
                    w = "none";
                }
            }
            if (w === "remove") {
                window.crashReport.remove(e);
                T = 0;
            } else if (w === "delete") {
                window.crashReport.delete(e);
                T = 0;
            }
        } catch (error) {
            if (++T > r("BrowserCrashStaticConfig").LOG_FOR_CRASH_MAX_FAIL_COUNT) {
                D = true;
            }
            r("FBLogger")("log-for-crash").catching(r("getErrorSafe")(error)).warn("Failed to remove crash report storage for key: %s, logged entry sizes: %s", L(e, r("BrowserCrashStaticConfig").LOG_KEY_MAX_LENGTH), E());
        }
    }
    function F(e, t, n = {
        isSystem: false
    }) {
        if (!(D || !u || !p || t == null)) {
            const o = typeof t === "object" ? W(t) : t.toString();
            if (o != null) {
                let a = n.isSystem === true ? e : `@${e}`;
                if (n.isJSStackTrace === true) {
                    a = `${r("logForCrashUtils").RST_JS_STACK_KEY_PREFIX}:${a}`;
                }
                try {
                    A(a);
                    x.set(a, o.length);
                    window.crashReport?.set(a, o);
                    T = 0;
                } catch (error) {
                    if (++T > r("BrowserCrashStaticConfig").LOG_FOR_CRASH_MAX_FAIL_COUNT) {
                        D = true;
                    }
                    if (!I || N++ < M) {
                        r("FBLogger")("log-for-crash").catching(r("getErrorSafe")(error)).warn("Failed to set crash report storage for key: %s, value: %s, logged entry sizes: %s", L(e, r("BrowserCrashStaticConfig").LOG_KEY_MAX_LENGTH), L(o, r("BrowserCrashStaticConfig").LOG_VALUE_MAX_LENGTH), E());
                    }
                }
            }
        }
    }
    function O(e, t = {
        isSystem: false
    }) {
        if (!(!u || !p || D)) {
            let n = t.isSystem === true ? e : `@${e}`;
            if (t.isJSStackTrace === true) {
                n = `${r("logForCrashUtils").RST_JS_STACK_KEY_PREFIX}:${n}`;
            }
            try {
                A(n);
            } catch (error) {
                if (I ? N++ < M : $++ < P) {
                    r("FBLogger")("log-for-crash").catching(r("getErrorSafe")(error)).warn("Failed to clear crash report storage for key: %s", e);
                }
            }
        }
    }
    function B(e) {
        if (p) {
            g(e);
            return;
        }
        _.push(e);
    }
    function W(e) {
        try {
            return JSON.stringify(e);
        } catch (e) {
            r("FBLogger")("log-for-crash").warn("Failed to stringify object for browser crash storage");
            return null;
        }
    }
    l.logForCrash = F;
    l.clearCrashLog = O;
    l.onLogForCrashReady = B;
}, 98);
__d("suspendOrThrowIfUsedInSSR", [
    "CometSSRClientRender",
    "ExecutionEnvironment"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    function s(t) {
        if (!(e || (e = r("ExecutionEnvironment"))).isInBrowser) {
            throw o("CometSSRClientRender").CometSSRClientRender(t);
        }
    }
    l.default = s;
}, 98);
__d("uuidv4", [], function(t, n, r, o, a, i) {
    "use strict";
    function e() {
        const t = self?.crypto?.randomUUID;
        if (typeof t === "function") {
            return self.crypto.randomUUID();
        }
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e)=>{
            const t = Math.random() * 16 | 0;
            const n = e === "x" ? t : t & 3 | 8;
            return n.toString(16);
        });
    }
    i.default = e;
}, 66);
__d("warning", [
    "cr:755"
], function(t, n, r, o, a, i, l) {
    l.default = n("cr:755");
}, 98);
__d("warningWWW", [
    "WebDriverConfig",
    "cr:1105154",
    "cr:11202",
    "cr:2682"
], function(t, n, r, o, a, i, l) {
    const e = n("cr:2682");
    l.default = e;
}, 98);
__d("CometEventListener", [
    "FBLogger"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, o) {
        if (e.addEventListener) {
            e.addEventListener(t, n, o);
            return {
                remove: function() {
                    e.removeEventListener(t, n, typeof o !== "boolean" ? o.capture : o);
                }
            };
        }
        throw r("FBLogger")("comet_infra").mustfixThrow('Attempted to listen to eventType "%s" on a target that does not have addEventListener.', t);
    }
    const s = {
        addListenerWithOptions: function(n, r, o, a) {
            return e(n, r, o, a);
        },
        bubbleWithPassiveFlag: function(n, r, o, a) {
            return e(n, r, o, {
                capture: false,
                passive: a
            });
        },
        capture: function(n, r, o) {
            return e(n, r, o, true);
        },
        captureWithPassiveFlag: function(n, r, o, a) {
            return e(n, r, o, {
                capture: true,
                passive: a
            });
        },
        listen: function(n, r, o) {
            return e(n, r, o, false);
        },
        registerDefault: function(t, n) {
            throw r("FBLogger")("comet_infra").mustfixThrow("EventListener.registerDefault is not implemented.");
        },
        suppress: function(t) {
            t.preventDefault();
            t.stopPropagation();
        }
    };
    l.default = s;
}, 98);
__d("LogHistory", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = 500;
    const l = {};
    const s = [];
    function u(level, category, r, o) {
        const args = o[0];
        if (!(typeof args !== "string" || o.length !== 1)) {
            s.push({
                date: Date.now(),
                level,
                category,
                event: r,
                args
            });
            if (s.length > e) {
                s.shift();
            }
        }
    }
    class c {
        constructor(e){
            this.category = e;
        }
        debug(t, ...n) {
            u("debug", this.category, t, n);
            return this;
        }
        log(t, ...n) {
            u("log", this.category, t, n);
            return this;
        }
        warn(t, ...n) {
            u("warn", this.category, t, n);
            return this;
        }
        error(t, ...n) {
            u("error", this.category, t, n);
            return this;
        }
    }
    function d(e) {
        if (!l[e]) {
            l[e] = new c(e);
        }
        return l[e];
    }
    function m() {
        return s;
    }
    function p() {
        s.length = 0;
    }
    function _(e) {
        return e.map((e)=>{
            const t = new Date(e.date).toISOString();
            return [
                t,
                e.level,
                e.category,
                e.event,
                e.args
            ].join(" | ");
        }).join("\n");
    }
    i.getInstance = d;
    i.getEntries = m;
    i.clearEntries = p;
    i.formatEntries = _;
}, 66);
__d("ReactFeatureFlags", [
    "gkx",
    "justknobx",
    "qex"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const d = r("gkx")("11557");
    const m = false;
    const p = true;
    const _ = r("gkx")("21072") || (r("qex")._("104") ?? false);
    const f = 250;
    const g = r("qex")._("344") ?? 5000;
    const h = r("qex")._("388") ?? 5000;
    const y = false;
    const C = r("gkx")("17201") ?? false;
    const b = false;
    const v = true;
    const S = true;
    const R = r("gkx")("17254");
    const L = true;
    const E = false;
    const k = r("justknobx")._("678") && (r("gkx")("12572") || r("qex")._("2513") === true);
    const I = false;
    const T = false;
    const D = r("gkx")("20483");
    l.alwaysThrottleRetries = d;
    l.enableNoCloningMemoCache = m;
    l.enableObjectFiber = p;
    l.enableRetryLaneExpiration = _;
    l.syncLaneExpirationMs = f;
    l.transitionLaneExpirationMs = g;
    l.retryLaneExpirationMs = h;
    l.enableScrollEndPolyfill = y;
    l.enableInfiniteRenderLoopDetection = C;
    l.enableInfiniteRenderLoopDetectionForceThrow = b;
    l.enableConditionalUseWarning = v;
    l.enableParallelTransitions = S;
    l.enableFragmentRefsTextNodes = R;
    l.enableViewTransition = L;
    l.enableTransitionTracing = E;
    l.enableInternalInstanceMap = k;
    l.disableLegacyContextForFunctionComponents = I;
    l.disableSchedulerTimeoutInWorkLoop = T;
    l.enableSchedulingProfiler = D;
}, 98);
__d("React-prod.classic", [
    "ReactFeatureFlags"
], function(t, n, r, o, a, i) {
    "use strict";
    const SYMBOL_REACT_TRANSITIONAL_ELEMENT = Symbol.for("react.transitional.element");
    const SYMBOL_REACT_PORTAL = Symbol.for("react.portal");
    const SYMBOL_REACT_FRAGMENT = Symbol.for("react.fragment");
    const SYMBOL_REACT_STRICT_MODE = Symbol.for("react.strict_mode");
    const SYMBOL_REACT_PROFILER = Symbol.for("react.profiler");
    const SYMBOL_REACT_CONSUMER = Symbol.for("react.consumer");
    const SYMBOL_REACT_CONTEXT = Symbol.for("react.context");
    const SYMBOL_REACT_FORWARD_REF = Symbol.for("react.forward_ref");
    const SYMBOL_REACT_SUSPENSE = Symbol.for("react.suspense");
    const SYMBOL_REACT_SUSPENSE_LIST = Symbol.for("react.suspense_list");
    const SYMBOL_REACT_MEMO = Symbol.for("react.memo");
    const SYMBOL_REACT_LAZY = Symbol.for("react.lazy");
    const SYMBOL_REACT_SCOPE = Symbol.for("react.scope");
    const SYMBOL_REACT_ACTIVITY = Symbol.for("react.activity");
    const SYMBOL_REACT_LEGACY_HIDDEN = Symbol.for("react.legacy_hidden");
    const SYMBOL_REACT_TRACING_MARKER = Symbol.for("react.tracing_marker");
    const SYMBOL_REACT_VIEW_TRANSITION = Symbol.for("react.view_transition");
    const R = typeof Symbol === "function" ? Symbol.iterator : "@@iterator";
    function L(e) {
        if (e === null || typeof e !== "object") {
            return null;
        }
        e = R && e[R] || e["@@iterator"];
        if (typeof e === "function") {
            return e;
        }
        return null;
    }
    const E = {
        isMounted: function() {
            return false;
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    };
    const I = {};
    class T {
        constructor(e, t, n){
            this.props = e;
            this.context = t;
            this.refs = I;
            this.updater = n || E;
        }
        setState(e, t) {
            if (typeof e !== "object" && typeof e !== "function" && e != null) {
                throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
            }
            this.updater.enqueueSetState(this, e, t, "setState");
        }
        forceUpdate(e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
        }
    }
    T.prototype.isReactComponent = {};
    function D() {}
    D.prototype = T.prototype;
    function x(e, t, n) {
        this.props = e;
        this.context = t;
        this.refs = I;
        this.updater = n || E;
    }
    const $ = x.prototype = new D;
    $.constructor = x;
    Object.assign($, T.prototype);
    $.isPureReactComponent = true;
    function N() {}
    const enableTransitionTracing = n("ReactFeatureFlags").enableTransitionTracing;
    const enableViewTransition = n("ReactFeatureFlags").enableViewTransition;
    const A = {
        H: null,
        A: null,
        T: null,
        S: null
    };
    const hasOwnProperty = Object.prototype.hasOwnProperty;
    function O(t, key, props) {
        const r_ref = props.ref;
        return {
            $$typeof: SYMBOL_REACT_TRANSITIONAL_ELEMENT,
            type: t,
            key,
            ref: r_ref !== undefined ? r_ref : null,
            props
        };
    }
    function B(e, t, n) {
        let r = null;
        if (n !== undefined) {
            r = `${n}`;
        }
        if (t.key !== undefined) {
            r = `${t.key}`;
        }
        if ("key" in t) {
            n = {};
            for(const o in t){
                if (o !== "key") {
                    n[o] = t[o];
                }
            }
        } else {
            n = t;
        }
        return O(e, r, n);
    }
    function W(e, t) {
        return O(e.type, t, e.props);
    }
    function q(t) {
        return typeof t === "object" && t !== null && t.$$typeof === SYMBOL_REACT_TRANSITIONAL_ELEMENT;
    }
    function U(e) {
        const t = {
            "=": "=0",
            ":": "=2"
        };
        return `\$${e.replace(/[=:]/g, (e)=>t[e])}`;
    }
    const V = /\/+/g;
    function H(e, t) {
        if (typeof e === "object" && e !== null && e.key != null) {
            return U(`${e.key}`);
        }
        return t.toString(36);
    }
    function G(e) {
        switch(e.status){
            case "fulfilled":
                return e.value;
            case "rejected":
                throw e.reason;
            default:
                if (typeof e.status === "string") {
                    e.then(N, N);
                } else {
                    e.status = "pending";
                    e.then((t)=>{
                        if (e.status === "pending") {
                            e.status = "fulfilled";
                            e.value = t;
                        }
                    }, (t)=>{
                        if (e.status === "pending") {
                            e.status = "rejected";
                            e.reason = t;
                        }
                    });
                }
                switch(e.status){
                    case "fulfilled":
                        return e.value;
                    case "rejected":
                        throw e.reason;
                }
        }
        throw e;
    }
    function z(t, n, r, o, a) {
        let i = typeof t;
        if (i === "undefined" || i === "boolean") {
            t = null;
        }
        let s = false;
        if (t === null) {
            s = true;
        } else {
            switch(i){
                case "bigint":
                case "string":
                case "number":
                    s = true;
                    break;
                case "object":
                    switch(t.$$typeof){
                        case SYMBOL_REACT_TRANSITIONAL_ELEMENT:
                        case SYMBOL_REACT_PORTAL:
                            s = true;
                            break;
                        case SYMBOL_REACT_LAZY:
                            s = t._init;
                            return z(s(t._payload), n, r, o, a);
                    }
            }
        }
        if (s) {
            a = a(t);
            s = o === "" ? `.${H(t, 0)}` : o;
            if (Array.isArray(a)) {
                r = "";
                if (s != null) {
                    r = `${s.replace(V, "$&/")}/`;
                }
                z(a, n, r, "", function(e) {
                    return e;
                });
            } else if (a != null) {
                if (q(a)) {
                    a = W(a, r + (a.key == null || t && t.key === a.key ? "" : `${`${a.key}`.replace(V, "$&/")}/`) + s);
                }
                n.push(a);
            }
            return 1;
        }
        s = 0;
        const u = o === "" ? "." : `${o}:`;
        if (Array.isArray(t)) {
            for(var c = 0; c < t.length; c++){
                o = t[c];
                i = u + H(o, c);
                s += z(o, n, r, i, a);
            }
        } else {
            c = L(t);
            if (typeof c === "function") {
                t = c.call(t);
                for(c = 0; !(o = t.next()).done;){
                    o = o.value;
                    i = u + H(o, c++);
                    s += z(o, n, r, i, a);
                }
            } else if (i === "object") {
                if (typeof t.then === "function") {
                    return z(G(t), n, r, o, a);
                }
                n = String(t);
                throw Error(`Objects are not valid as a React child (found: ${n === "[object Object]" ? `object with keys {${Object.keys(t).join(", ")}}` : n}). If you meant to render a collection of children, use an array instead.`);
            }
        }
        return s;
    }
    function map(e, t, n) {
        if (e == null) {
            return e;
        }
        const r = [];
        let o = 0;
        z(e, r, "", "", function(e) {
            return t.call(n, e, o++);
        });
        return r;
    }
    function _init(e) {
        if (e._status === -1) {
            const t = e._result;
            const n = t();
            n.then((t)=>{
                if (e._status === 0 || e._status === -1) {
                    e._status = 1;
                    e._result = t;
                    if (n.status === undefined) {
                        n.status = "fulfilled";
                        n.value = t;
                    }
                }
            }, (t)=>{
                if (e._status === 0 || e._status === -1) {
                    e._status = 2;
                    e._result = t;
                    if (n.status === undefined) {
                        n.status = "rejected";
                        n.reason = t;
                    }
                }
            });
            if (e._status === -1) {
                e._status = 0;
                e._result = n;
            }
        }
        if (e._status === 1) {
            return e._result.default;
        }
        throw e._result;
    }
    function c(e) {
        return A.H.useMemoCache(e);
    }
    function X(e) {
        return A.H.useEffectEvent(e);
    }
    const Y = typeof reportError === "function" ? reportError : function(error) {
        if (typeof window === "object" && typeof window.ErrorEvent === "function") {
            const t = new window.ErrorEvent("error", {
                bubbles: true,
                cancelable: true,
                message: typeof error === "object" && error !== null && typeof error.message === "string" ? String(error.message) : String(error),
                error
            });
            if (!window.dispatchEvent(t)) {
                return;
            }
        } else if (typeof process === "object" && typeof process.emit === "function") {
            process.emit("uncaughtException", error);
            return;
        }
    };
    function J(e, t) {
        const n = A.T;
        const r = {};
        if (enableViewTransition) {
            r.types = n !== null ? n.types : null;
        }
        if (enableTransitionTracing) {
            r.name = t !== undefined && t.name !== undefined ? t.name : null;
            r.startTime = -1;
        }
        A.T = r;
        try {
            const o = e();
            const a = A.S;
            if (a !== null) {
                a(r, o);
            }
            if (typeof o === "object" && o !== null && typeof o.then === "function") {
                o.then(N, Y);
            }
        } catch (error) {
            Y(error);
        } finally{
            if (n !== null && r.types !== null) {
                n.types = r.types;
            }
            A.T = n;
        }
    }
    function Z(e) {
        if (enableViewTransition) {
            const t = A.T;
            if (t !== null) {
                const n = t.types;
                if (n === null) {
                    t.types = [
                        e
                    ];
                } else if (n.indexOf(e) === -1) {
                    n.push(e);
                }
            } else {
                J(Z.bind(null, e));
            }
        }
    }
    const ee = {
        __proto__: null,
        c
    };
    const te = {
        map,
        forEach: function(e, t, n) {
            map(e, function() {
                t.apply(this, arguments);
            }, n);
        },
        count: function(e) {
            let t = 0;
            map(e, ()=>{
                t++;
            });
            return t;
        },
        toArray: function(e) {
            return map(e, (e)=>e) || [];
        },
        only: function(e) {
            if (!q(e)) {
                throw Error("React.Children.only expected to receive a single React element child.");
            }
            return e;
        }
    };
    i.Activity = SYMBOL_REACT_ACTIVITY;
    i.Children = te;
    i.Component = T;
    i.Fragment = SYMBOL_REACT_FRAGMENT;
    i.Profiler = SYMBOL_REACT_PROFILER;
    i.PureComponent = x;
    i.StrictMode = SYMBOL_REACT_STRICT_MODE;
    i.Suspense = SYMBOL_REACT_SUSPENSE;
    i.ViewTransition = SYMBOL_REACT_VIEW_TRANSITION;
    i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = A;
    i.__COMPILER_RUNTIME = ee;
    i.act = function() {
        throw Error("act(...) is not supported in production builds of React.");
    };
    i.addTransitionType = Z;
    i.c = c;
    i.cache = function(e) {
        return function() {
            return e(...arguments);
        };
    };
    i.cacheSignal = function() {
        return null;
    };
    i.captureOwnerStack = undefined;
    i.cloneElement = function(e, t, n) {
        if (e == null) {
            throw Error(`The argument must be a React element, but you passed ${e}.`);
        }
        const r = Object.assign({}, e.props);
        let e_key = e.key;
        if (t != null) {
            if (t.key !== undefined) {
                e_key = `${t.key}`;
            }
            for(a in t){
                if (!(!hasOwnProperty.call(t, a) || a === "key" || a === "__self" || a === "__source" || a === "ref" && t.ref === undefined)) {
                    r[a] = t[a];
                }
            }
        }
        var a = arguments.length - 2;
        if (a === 1) {
            r.children = n;
        } else if (a > 1) {
            const i = Array(a);
            for(let l = 0; l < a; l++){
                i[l] = arguments[l + 2];
            }
            r.children = i;
        }
        return O(e.type, e_key, r);
    };
    i.createContext = function(e) {
        e = {
            $$typeof: SYMBOL_REACT_CONTEXT,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        };
        e.Provider = e;
        e.Consumer = {
            $$typeof: SYMBOL_REACT_CONSUMER,
            _context: e
        };
        return e;
    };
    i.createElement = function(e, t, n) {
        let r;
        const o = {};
        let a = null;
        if (t != null) {
            if (t.key !== undefined) {
                a = `${t.key}`;
            }
            for(r in t){
                if (hasOwnProperty.call(t, r) && r !== "key" && r !== "__self" && r !== "__source") {
                    o[r] = t[r];
                }
            }
        }
        let i = arguments.length - 2;
        if (i === 1) {
            o.children = n;
        } else if (i > 1) {
            const l = Array(i);
            for(let s = 0; s < i; s++){
                l[s] = arguments[s + 2];
            }
            o.children = l;
        }
        if (e && e.defaultProps) {
            i = e.defaultProps;
            for(r in i){
                if (o[r] === undefined) {
                    o[r] = i[r];
                }
            }
        }
        return O(e, a, o);
    };
    i.createRef = function() {
        return {
            current: null
        };
    };
    i.experimental_useEffectEvent = X;
    i.forwardRef = function(render) {
        return {
            $$typeof: SYMBOL_REACT_FORWARD_REF,
            render
        };
    };
    i.isValidElement = q;
    i.jsx = B;
    i.jsxDEV = undefined;
    i.jsxs = B;
    i.lazy = function(_result) {
        return {
            $$typeof: SYMBOL_REACT_LAZY,
            _payload: {
                _status: -1,
                _result
            },
            _init
        };
    };
    i.memo = function(e, t) {
        return {
            $$typeof: SYMBOL_REACT_MEMO,
            type: e,
            compare: t === undefined ? null : t
        };
    };
    i.startTransition = J;
    i.unstable_Activity = SYMBOL_REACT_ACTIVITY;
    i.unstable_LegacyHidden = SYMBOL_REACT_LEGACY_HIDDEN;
    i.unstable_Scope = SYMBOL_REACT_SCOPE;
    i.unstable_SuspenseList = SYMBOL_REACT_SUSPENSE_LIST;
    i.unstable_TracingMarker = SYMBOL_REACT_TRACING_MARKER;
    i.unstable_ViewTransition = SYMBOL_REACT_VIEW_TRANSITION;
    i.unstable_addTransitionType = Z;
    i.unstable_getCacheForType = function(e) {
        const t = A.A;
        if (t) {
            return t.getCacheForType(e);
        }
        return e();
    };
    i.unstable_useCacheRefresh = function() {
        return A.H.useCacheRefresh();
    };
    i.unstable_useMemoCache = c;
    i.use = function(e) {
        return A.H.use(e);
    };
    i.useActionState = function(e, t, n) {
        return A.H.useActionState(e, t, n);
    };
    i.useCallback = function(e, t) {
        return A.H.useCallback(e, t);
    };
    i.useContext = function(e) {
        return A.H.useContext(e);
    };
    i.useDebugValue = function() {};
    i.useDeferredValue = function(e, t) {
        return A.H.useDeferredValue(e, t);
    };
    i.useEffect = function(e, t) {
        return A.H.useEffect(e, t);
    };
    i.useEffectEvent = X;
    i.useId = function() {
        return A.H.useId();
    };
    i.useImperativeHandle = function(e, t, n) {
        return A.H.useImperativeHandle(e, t, n);
    };
    i.useInsertionEffect = function(e, t) {
        return A.H.useInsertionEffect(e, t);
    };
    i.useLayoutEffect = function(e, t) {
        return A.H.useLayoutEffect(e, t);
    };
    i.useMemo = function(e, t) {
        return A.H.useMemo(e, t);
    };
    i.useOptimistic = function(e, t) {
        return A.H.useOptimistic(e, t);
    };
    i.useReducer = function(e, t, n) {
        return A.H.useReducer(e, t, n);
    };
    i.useRef = function(e) {
        return A.H.useRef(e);
    };
    i.useState = function(e) {
        return A.H.useState(e);
    };
    i.useSyncExternalStore = function(e, t, n) {
        return A.H.useSyncExternalStore(e, t, n);
    };
    i.useTransition = function() {
        return A.H.useTransition();
    };
    i.version = "19.3.0-www-classic-a6792708-20261019";
}, null);
__d("goForceFullPageRedirectTo", [
    "ConstUriUtils",
    "FBLogger",
    "err"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
        const n = typeof e === "string" ? o("ConstUriUtils").getUri(e) : o("ConstUriUtils").isConstUri(e);
        if (n) {
            if (t === true) {
                window.location.replace(n.toString());
            } else {
                window.location = n.toString();
            }
        } else {
            const a = `Invalid URI ${e.toString()} provided to goFullPageRedirectTo`;
            r("FBLogger")("comet_infra").blameToPreviousFrame().mustfix(a);
        }
    }
    l.default = e;
}, 98);
__d("scheduler", [
    "SchedulerFb-Internals_DO_NOT_USE"
], function(t, n, r, o, a, i) {
    "use strict";
    a.exports = n("SchedulerFb-Internals_DO_NOT_USE");
}, null);
__d("warningComet", [
    "SiteData",
    "cr:1072546",
    "cr:1072547",
    "cr:1072549",
    "cr:983844",
    "err",
    "fb-error"
], function(t, n, r, o, a, i, l) {
    const e = /_R_[0-9a-v]+_/;
    function s(e, t) {
        return false;
    }
    l.default = s;
}, 98);
__d("CometHeroInteractionContext", [
    "hero-tracing-placeholder"
], function(t, n, r, o, a, i, l) {
    "use strict";
    l.default = o("hero-tracing-placeholder").HeroInteractionContext;
}, 98);
__d("ErrorBoundaryForLazyLoad", [
    "cr:38535"
], function(t, n, r, o, a, i, l) {
    "use strict";
    l.default = n("cr:38535");
}, 98);
__d("InlineFbtResult", [
    "cr:1183579"
], function(t, n, r, o, a, i, l) {
    l.default = n("cr:1183579");
}, 98);
__d("nextCrashLoggingSpanId", [], function(t, n, r, o, a, i) {
    "use strict";
    let e = 0;
    function l() {
        return ++e;
    }
    i.nextCrashLoggingSpanId = l;
}, 66);
__d("RSTLogForCrash", [
    "$InternalEnum",
    "Deferred",
    "FBLogger",
    "getErrorSafe",
    "justknobx",
    "logForCrash",
    "logForCrashUtils",
    "nextCrashLoggingSpanId",
    "requireWeak"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = new (r("Deferred"));
    d();
    function d() {
        const t = ()=>{
            if (e && s && u) {
                c.resolve();
            }
        };
        try {
            r("requireWeak")("ResponsiveTrackerMainThread", function(n) {
                e = n;
                t();
            });
            r("requireWeak")("RSTExternalLoggingDataStoreMainThread", function(e) {
                s = e?.loggingDataStore;
                t();
            });
            r("requireWeak")("RSTEvents", function(e) {
                u = e?.RSTEvent;
                t();
            });
        } catch (error) {
            r("FBLogger")("responsive-tracker").catching(r("getErrorSafe")(error)).warn("Failed to load RST dependencies in RSTLogForCrash");
        }
    }
    const m = r("justknobx")._("3831");
    const p = n("$InternalEnum")({
        VALID_UNTIL_NEXT_HEARTBEAT: 0,
        VALID_UNTIL_NEXT_WRITE: 1,
        VALID_FOR_5_SECONDS: 2,
        VALID_FOR_2_MINUTES: 3
    });
    function _(t) {
        if (e == null) {
            return null;
        }
        switch(t){
            case p.VALID_UNTIL_NEXT_HEARTBEAT:
                return null;
            case p.VALID_UNTIL_NEXT_WRITE:
                return null;
            case p.VALID_FOR_5_SECONDS:
                return Date.now() + 5 * 1000;
            case p.VALID_FOR_2_MINUTES:
                return Date.now() + 120 * 1000;
        }
        return null;
    }
    let f = 0;
    const g = 500;
    function h(t, n, a = p.VALID_UNTIL_NEXT_HEARTBEAT, i = {}) {
        if (a !== p.VALID_UNTIL_NEXT_HEARTBEAT && i.logForNativeReports !== false) {
            const c = {
                isSystem: i.isSystem,
                isJSStackTrace: i.isJSStackTrace
            };
            o("logForCrash").logForCrash(t, n, c);
            if (a === p.VALID_FOR_5_SECONDS) {
                window.setTimeout(function() {
                    return o("logForCrash").clearCrashLog(t, c);
                }, 5000);
            } else if (a === p.VALID_FOR_2_MINUTES) {
                window.setTimeout(function() {
                    return o("logForCrash").clearCrashLog(t, c);
                }, 120 * 1000);
            }
        }
        if (!(!m || e == null)) {
            const d = typeof n === "object" ? C(n) : n.toString();
            if (d != null) {
                const _ = i.isJSStackTrace === true ? `${r("logForCrashUtils").RST_JS_STACK_KEY_PREFIX}:${t}` : t;
                s?.log(_, d, a);
                const h = Date.now();
                if (!(i.immediateFlush !== true || h - f < g) && (f = h, u != null)) {
                    e?.postEventLightweight(u.LOG_FLUSH);
                }
            }
        }
    }
    function y(e) {
        return s?.isValidValue(e) ?? false;
    }
    function C(e) {
        try {
            return JSON.stringify(e);
        } catch (e) {
            r("FBLogger")("responsive-tracker").mustfix("Failed to stringify object for RST logging");
            return null;
        }
    }
    const b = new Map;
    const v = new Map;
    const S = new Map;
    function R(t, n, r = {}) {
        const i = m && e != null;
        const l = r.logForNativeReports ?? true;
        if (!i && !l) {
            return -1;
        }
        try {
            let u;
            if (v.has(t)) {
                const p = v.get(t);
                if (p != null) {
                    if (i) {
                        s?.logSpanEnd(p);
                    }
                    b.delete(p);
                    S.delete(p);
                }
                v.delete(t);
            }
            let f = i && (u = s?.logSpanStart(t, n)) != null ? u : -1;
            const g = r.isSystem ?? false;
            if (l) {
                if (f === -1) {
                    f = o("nextCrashLoggingSpanId").nextCrashLoggingSpanId();
                }
                const h = `span:${t}`;
                o("logForCrash").logForCrash(h, n, {
                    isSystem: g
                });
            }
            if (f !== -1) {
                b.set(f, t);
                S.set(f, r);
                v.set(t, f);
            }
            return f;
        } catch (e) {
            return -1;
        }
    }
    function L(t) {
        const n = e != null && t !== -1;
        const r = t !== -1;
        if (!(!n && !r)) {
            const a = b.get(t);
            try {
                if (n) {
                    s?.logSpanEnd(t);
                }
                if (a == null) {
                    return;
                }
                const u = S.get(t) ?? {};
                if (r) {
                    const d = u.isSystem ?? false;
                    const m = `span:${a}`;
                    o("logForCrash").clearCrashLog(m, {
                        isSystem: d
                    });
                }
            } finally{
                if (a != null) {
                    v.delete(a);
                }
                b.delete(t);
                S.delete(t);
            }
        }
    }
    function E(t) {
        const n = v.has(t);
        const r = e != null && n;
        const a = n;
        if (!(!r && !a)) {
            const i = v.get(t);
            let l = {};
            try {
                if (i != null) {
                    l = S.get(i) ?? {};
                    if (r) {
                        s?.logSpanEnd(i);
                    }
                }
                if (a) {
                    const m = l.isSystem ?? false;
                    const p = `span:${t}`;
                    o("logForCrash").clearCrashLog(p, {
                        isSystem: m
                    });
                }
            } finally{
                if (i != null) {
                    b.delete(i);
                    S.delete(i);
                }
                v.delete(t);
            }
        }
    }
    const k = 1000;
    const I = 100;
    const T = new Map;
    function D(e, t) {
        if (!T.has(e)) {
            if (T.size >= k) {
                return;
            }
            T.set(e, new Set);
        }
        const n = T.get(e);
        if (!(n == null || n.size > I)) {
            n?.add(t);
            const r = Array.from(n).sort();
            const o = `collection:${e}`;
            h(o, JSON.stringify(r), p.VALID_UNTIL_NEXT_WRITE, {
                isSystem: true
            });
        }
    }
    l.logForCrashReadyPromise = c;
    l.RSTLogMode = p;
    l.getExpirationTime = _;
    l.logForCrash = h;
    l.isValidStringValue = y;
    l.logSpanStart = R;
    l.logSpanEnd = L;
    l.logSpanEndForKey = E;
    l.logElementInCollectionForCrash = D;
}, 98);
__d("TransAppInlineMode", [], function(t, n, r, o, a, i) {
    const e = Object.freeze({
        STRING_MANAGER: "STRING_MANAGER",
        TRANSLATION: "TRANSLATION",
        APPROVE: "APPROVE",
        REPORT: "REPORT",
        NO_INLINE: "NO_INLINE"
    });
    i.default = e;
}, 66);
__d("getUnwrappedFbt", [
    "FbtResultGK"
], function(t, n, r, o, a, i, l) {
    function e({ contents }) {
        const inlineMode = r("FbtResultGK").inlineMode;
        const shouldReturnFbtResult = r("FbtResultGK").shouldReturnFbtResult;
        if (!shouldReturnFbtResult && inlineMode !== "REPORT") {
            if (contents?.length === 1 && typeof contents[0] === "string") {
                return contents[0];
            }
            return contents;
        }
    }
    l.default = e;
}, 98);
__d("getFbtResult", [
    "FBLogger",
    "FbtResult",
    "FbtResultGK",
    "InlineFbtResult",
    "getUnwrappedFbt",
    "gkx"
], function(t, n, r, o, a, i, l) {
    if (r("gkx")("20935") && r("FbtResultGK").inlineMode === "TRANSLATION") {
        r("FBLogger")("internationalization").mustfix("TransAppInlineMode=TRANSLATION should not happen on Comet yet. [inlineMode=%s][runtime_site_is_comet=%s]", r("FbtResultGK").inlineMode != null ? r("FbtResultGK").inlineMode : "", String(r("gkx")("20935")));
    }
    function e(e) {
        const t = r("getUnwrappedFbt")(e);
        if (t != null) {
            return t;
        }
        const { contents, patternHash, patternString } = e;
        if (r("FbtResultGK").inlineMode != null && r("FbtResultGK").inlineMode !== "NO_INLINE") {
            return new (r("InlineFbtResult"))(contents, r("FbtResultGK").inlineMode, patternString, patternHash);
        }
        return r("FbtResult").get(e);
    }
    l.default = e;
}, 98);
__d("useHeroBootloadedComponent", [
    "CometHeroInteractionContext",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const { useContext, useEffect } = s;
    function useD(e) {
        const t = o("react-compiler-runtime").c(4);
        const n = useContext(r("CometHeroInteractionContext").Context);
        let a;
        let i;
        if (t[0] !== n || t[1] !== e) {
            a = function() {
                n.consumeBootload(e.getModuleId());
            };
            i = [
                n,
                e
            ];
            t[0] = n;
            t[1] = e;
            t[2] = a;
            t[3] = i;
        } else {
            a = t[2];
            i = t[3];
        }
        useEffect(a, i);
    }
    l.default = useD;
}, 98);
__d("Banzai", [
    "cr:7383"
], function(t, n, r, o, a, i, l) {
    l.default = n("cr:7383");
}, 98);
__d("BanzaiWWW", [
    "cr:1642797"
], function(t, n, r, o, a, i, l) {
    l.default = n("cr:1642797");
}, 98);
__d("SnappyCompress", [], function(t, n, r, o, a, i) {
    "use strict";
    function e() {
        return typeof process === "object" && typeof process.versions === "object" && typeof process.versions.node !== "undefined";
    }
    function l(t) {
        return t instanceof Uint8Array && (!e() || !Buffer.isBuffer(t));
    }
    function s(e) {
        return e instanceof ArrayBuffer;
    }
    function u(t) {
        if (e()) {
            return Buffer.isBuffer(t);
        }
        return false;
    }
    const c = "Argument compressed must be type of ArrayBuffer, Buffer, or Uint8Array";
    function d(e) {
        if (!l(e) && !s(e) && !u(e)) {
            throw new TypeError(c);
        }
        let t = false;
        let n = false;
        if (l(e)) {
            t = true;
        } else if (s(e)) {
            n = true;
            e = new Uint8Array(e);
        }
        const r = new D(e);
        const o = r.readUncompressedLength();
        if (o === -1) {
            throw new Error("Invalid Snappy bitstream");
        }
        let a;
        let i;
        if (t) {
            a = new Uint8Array(o);
            if (!r.uncompressToBuffer(a)) {
                throw new Error("Invalid Snappy bitstream");
            }
        } else if (n) {
            a = new ArrayBuffer(o);
            i = new Uint8Array(a);
            if (!r.uncompressToBuffer(i)) {
                throw new Error("Invalid Snappy bitstream");
            }
        } else {
            a = Buffer.alloc(o);
            if (!r.uncompressToBuffer(a)) {
                throw new Error("Invalid Snappy bitstream");
            }
        }
        return a;
    }
    function m(e) {
        if (!l(e) && !s(e) && !u(e)) {
            throw new TypeError(c);
        }
        let t = false;
        let n = false;
        if (l(e)) {
            t = true;
        } else if (s(e)) {
            n = true;
            e = new Uint8Array(e);
        }
        const r = new E(e);
        const o = r.maxCompressedLength();
        let a;
        let i;
        let d;
        if (t) {
            a = new Uint8Array(o);
            d = r.compressToBuffer(a);
        } else if (n) {
            a = new ArrayBuffer(o);
            i = new Uint8Array(a);
            d = r.compressToBuffer(i);
        } else {
            a = Buffer.alloc(o);
            d = r.compressToBuffer(a);
        }
        if (!a.slice) {
            const m = new Uint8Array(Array.prototype.slice.call(a, 0, d));
            if (t) {
                return m;
            }
            if (n) {
                return m.buffer;
            }
            throw new Error("not implemented");
        }
        return a.slice(0, d);
    }
    const p = 16;
    const _ = 1 << p;
    const f = 14;
    const g = new Array(f + 1);
    function h(e, t) {
        return e * 506832829 >>> t;
    }
    function y(array, t) {
        return array[t] + (array[t + 1] << 8) + (array[t + 2] << 16) + (array[t + 3] << 24);
    }
    function C(array, t, n) {
        return array[t] === array[n] && array[t + 1] === array[n + 1] && array[t + 2] === array[n + 2] && array[t + 3] === array[n + 3];
    }
    function b(array, t, n, r, o) {
        if (n <= 60) {
            r[o] = n - 1 << 2;
            o += 1;
        } else if (n < 256) {
            r[o] = 240;
            r[o + 1] = n - 1;
            o += 2;
        } else {
            r[o] = 244;
            r[o + 1] = n - 1 & 255;
            r[o + 2] = n - 1 >>> 8;
            o += 3;
        }
        I(array, t, r, o, n);
        return o + n;
    }
    function v(e, t, n, r) {
        if (r < 12 && n < 2048) {
            e[t] = 1 + (r - 4 << 2) + (n >>> 8 << 5);
            e[t + 1] = n & 255;
            return t + 2;
        }
        e[t] = 2 + (r - 1 << 2);
        e[t + 1] = n & 255;
        e[t + 2] = n >>> 8;
        return t + 3;
    }
    function S(e, t, n, r) {
        while(r >= 68){
            t = v(e, t, n, 64);
            r -= 64;
        }
        if (r > 64) {
            t = v(e, t, n, 60);
            r -= 60;
        }
        return v(e, t, n, r);
    }
    function R(array, t, n, r, o) {
        for(var a = 1; 1 << a <= n && a <= f;){
            a += 1;
        }
        a -= 1;
        const i = 32 - a;
        if (typeof g[a] === "undefined") {
            g[a] = new Uint16Array(1 << a);
        }
        const l = g[a];
        let s;
        for(s = 0; s < l.length; s++){
            l[s] = 0;
        }
        const u = t + n;
        let c;
        const d = t;
        let m = t;
        let p;
        let _;
        let v;
        let R;
        let L;
        let E;
        let k;
        let I;
        let T;
        let D;
        let x;
        let $ = true;
        const P = 15;
        if (n >= P) {
            c = u - P;
            t += 1;
            for(_ = h(y(array, t), i); $;){
                L = 32;
                v = t;
                do {
                    t = v;
                    p = _;
                    E = L >>> 5;
                    L += 1;
                    v = t + E;
                    if (t > c) {
                        $ = false;
                        break;
                    }
                    _ = h(y(array, v), i);
                    R = d + l[p];
                    l[p] = t - d;
                }while (!C(array, t, R))
                if (!$) {
                    break;
                }
                o = b(array, m, t - m, r, o);
                do {
                    k = t;
                    for(I = 4; t + I < u && array[t + I] === array[R + I];){
                        I += 1;
                    }
                    t += I;
                    T = k - R;
                    o = S(r, o, T, I);
                    m = t;
                    if (t >= c) {
                        $ = false;
                        break;
                    }
                    D = h(y(array, t - 1), i);
                    l[D] = t - 1 - d;
                    x = h(y(array, t), i);
                    R = d + l[x];
                    l[x] = t - d;
                }while (C(array, t, R))
                if (!$) {
                    break;
                }
                t += 1;
                _ = h(y(array, t), i);
            }
        }
        if (m < u) {
            o = b(array, m, u - m, r, o);
        }
        return o;
    }
    function L(e, t, n) {
        do {
            t[n] = e & 127;
            e = e >>> 7;
            if (e > 0) {
                t[n] += 128;
            }
            n += 1;
        }while (e > 0)
        return n;
    }
    class E {
        constructor(e){
            this.array = e;
        }
        maxCompressedLength() {
            const length = this.array.length;
            return 32 + length + Math.floor(length / 6);
        }
        compressToBuffer(e) {
            const array = this.array;
            const t_length = array.length;
            let r = 0;
            let o = 0;
            let a;
            for(o = L(t_length, e, o); r < t_length;){
                a = Math.min(t_length - r, _);
                o = R(array, r, a, e, o);
                r += a;
            }
            return o;
        }
    }
    const k = [
        0,
        255,
        65535,
        16777215,
        4294967295
    ];
    function I(e, t, n, r, o) {
        let a;
        for(a = 0; a < o; a++){
            n[r + a] = e[t + a];
        }
    }
    function T(e, t, n, r) {
        let o;
        for(o = 0; o < r; o++){
            e[t + o] = e[t - n + o];
        }
    }
    class D {
        constructor(e){
            this.array = e;
            this.pos = 0;
        }
        readUncompressedLength() {
            let e = 0;
            let n;
            let r;
            for(let t = 0; t < 32 && this.pos < this.array.length;){
                n = this.array[this.pos];
                this.pos += 1;
                r = n & 127;
                if (r << t >>> t !== r) {
                    return -1;
                }
                e |= r << t;
                if (n < 128) {
                    return e;
                }
                t += 7;
            }
            return -1;
        }
        uncompressToBuffer(e) {
            let a;
            let i;
            let l;
            let s;
            for(let t = this.array, n = t.length, r = this.pos, o = 0; r < t.length;){
                a = t[r];
                r += 1;
                if ((a & 3) === 0) {
                    i = (a >>> 2) + 1;
                    if (i > 60) {
                        if (r + 3 >= n) {
                            return false;
                        }
                        l = i - 60;
                        i = t[r] + (t[r + 1] << 8) + (t[r + 2] << 16) + (t[r + 3] << 24);
                        i = (i & k[l]) + 1;
                        r += l;
                    }
                    if (r + i > n) {
                        return false;
                    }
                    I(t, r, e, o, i);
                    r += i;
                    o += i;
                } else {
                    switch(a & 3){
                        case 1:
                            i = (a >>> 2 & 7) + 4;
                            s = t[r] + (a >>> 5 << 8);
                            r += 1;
                            break;
                        case 2:
                            if (r + 1 >= n) {
                                return false;
                            }
                            i = (a >>> 2) + 1;
                            s = t[r] + (t[r + 1] << 8);
                            r += 2;
                            break;
                        case 3:
                            if (r + 3 >= n) {
                                return false;
                            }
                            i = (a >>> 2) + 1;
                            s = t[r] + (t[r + 1] << 8) + (t[r + 2] << 16) + (t[r + 3] << 24);
                            r += 4;
                            break;
                        default:
                            break;
                    }
                    if (s === 0 || s > o) {
                        return false;
                    }
                    T(e, o, s, i);
                    o += i;
                }
            }
            return true;
        }
    }
    a.exports.uncompress = d;
    a.exports.compress = m;
}, null);
__d("SnappyCompressUtil", [
    "SnappyCompress"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const { Uint8Array, btoa, TextEncoder } = t;
    function compressUint8ArrayToSnappy(e) {
        if (e == null || btoa == null) {
            return null;
        }
        let t = null;
        try {
            t = r("SnappyCompress").compress(e);
        } catch (e) {
            return null;
        }
        const n = Array.from(t, function(e) {
            return String.fromCharCode(e);
        }).join("");
        return btoa(n);
    }
    var d = {
        compressUint8ArrayToSnappy,
        compressStringToSnappy: function(r) {
            if (Uint8Array == null || btoa == null) {
                return null;
            }
            const n = new t.Uint8Array(r.length);
            for(let o = 0; o < r.length; o++){
                const a = r.charCodeAt(o);
                if (a > 127) {
                    return null;
                }
                n[o] = a;
            }
            return d.compressUint8ArrayToSnappy(n);
        },
        compressStringToSnappyBinary: function(n) {
            if (Uint8Array == null) {
                return null;
            }
            let t = null;
            if (TextEncoder != null) {
                t = new TextEncoder().encode(n);
            } else {
                t = new Uint8Array(n.length);
                for(let o = 0; o < n.length; o++){
                    const a = n.charCodeAt(o);
                    if (a > 127) {
                        return null;
                    }
                    t[o] = a;
                }
            }
            let i = null;
            try {
                i = r("SnappyCompress").compress(t);
            } catch (e) {
                return null;
            }
            return i;
        }
    };
    i.exports = d;
}, 34);
__d("WDSButtonColorCommonConfig.stylex", [], function(t, n, r, o, a, i, l) {
    const e = {
        pressable: {
            backgroundColor: "xfn3atn",
            color: "x1pse0pq",
            ":hover::after_backgroundColor": "x1yxkqql",
            $$css: true
        },
        pressableDisabled: {
            backgroundColor: "x4wrhlh",
            color: "x18cpw0e",
            $$css: true
        },
        pressableOverlay: {
            $$css: true
        },
        pressableHovered: {
            $$css: true
        },
        pressablePressed: {
            $$css: true
        }
    };
    const s = {
        pressable: {
            backgroundColor: "xk0ssx3",
            color: "x1pse0pq",
            ":hover::after_backgroundColor": "x1yxkqql",
            $$css: true
        },
        pressableDisabled: {
            backgroundColor: "x4wrhlh",
            color: "x18cpw0e",
            $$css: true
        },
        pressableOverlay: {
            $$css: true
        },
        pressableHovered: {
            $$css: true
        },
        pressablePressed: {
            $$css: true
        }
    };
    const u = {
        pressable: {
            backgroundColor: "x1abdmlv",
            color: "xk4n5i7",
            ":hover::after_backgroundColor": "x1wjp2x",
            $$css: true
        },
        pressableDisabled: {
            opacity: "x1lxidc1",
            filter: "x4dje6k",
            $$css: true
        },
        pressableHovered: {
            $$css: true
        },
        pressablePressed: {
            $$css: true
        }
    };
    const c = {
        pressable: {
            backgroundColor: "xrkjzwr",
            color: "xqnyt8g",
            ":hover::after_backgroundColor": "x4ju2vy",
            $$css: true
        },
        pressableDisabled: {
            opacity: "x1lxidc1",
            filter: "x4dje6k",
            $$css: true
        },
        pressableHovered: {
            $$css: true
        },
        pressablePressed: {
            $$css: true
        }
    };
    const d = {
        pressable: {
            backgroundColor: "xjbqb8w",
            color: "xo1mcw5",
            ":hover::after_backgroundColor": "x1wjp2x",
            $$css: true
        },
        pressableDisabled: {
            opacity: "x1lxidc1",
            filter: "x4dje6k",
            $$css: true
        },
        pressableOverlay: {
            $$css: true
        },
        pressableHovered: {
            $$css: true
        },
        pressablePressed: {
            $$css: true
        }
    };
    const m = {
        pressable: {
            backgroundColor: "xjbqb8w",
            color: "xuwfzo9",
            ":hover::after_backgroundColor": "x1wb366y",
            $$css: true
        },
        pressableDisabled: {
            opacity: "x1lxidc1",
            filter: "x4dje6k",
            $$css: true
        },
        pressableOverlay: {
            $$css: true
        },
        pressableHovered: {
            $$css: true
        },
        pressablePressed: {
            $$css: true
        }
    };
    const p = {
        pressable: {
            backgroundColor: "xjbqb8w",
            color: "xqnyt8g",
            ":hover::after_backgroundColor": "x4ju2vy",
            $$css: true
        },
        pressableDisabled: {
            opacity: "x1lxidc1",
            filter: "x4dje6k",
            $$css: true
        },
        pressableOverlay: {
            $$css: true
        },
        pressableHovered: {
            $$css: true
        },
        pressablePressed: {
            $$css: true
        }
    };
    const _ = {
        pressable: {
            backgroundColor: "xjbqb8w",
            color: "x17t9dm2",
            filter: "x15ri80r",
            ":hover::after_backgroundColor": "xw1yv47",
            $$css: true
        },
        pressableDisabled: {
            opacity: "x1lxidc1",
            $$css: true
        },
        pressableOverlay: {
            $$css: true
        },
        pressableHovered: {
            $$css: true
        },
        pressablePressed: {
            $$css: true
        }
    };
    l.WDSButtonFilledDefaultColorStyles = e;
    l.WDSButtonFilledDestructiveColorStyles = s;
    l.WDSButtonTonalDefaultColorStyles = u;
    l.WDSButtonTonalDestructiveColorStyles = c;
    l.WDSButtonBorderlessDefaultColorStyles = d;
    l.WDSButtonBorderlessDefaultIconOnlyColorStyles = m;
    l.WDSButtonBorderlessDestructiveColorStyles = p;
    l.WDSButtonBorderlessMediaColorStyles = _;
}, 98);
__d("WDSButtonConfig", [
    "WDSButtonColorCommonConfig.stylex",
    "WDSHoverStateStyles",
    "cr:3448",
    "cr:3453",
    "cr:3488",
    "cr:3492",
    "cr:3674"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = {
        content: {
            display: "x1lliihq",
            minWidth: "xk8lq53",
            boxSizing: "x9f619",
            borderStartStartRadius: "xt8t1vi",
            borderStartEndRadius: "x1xc408v",
            borderEndEndRadius: "x129tdwq",
            borderEndStartRadius: "x15urzxu",
            $$css: true
        },
        item: {
            alignItems: "x6s0dn4",
            display: "x78zum5",
            zIndex: "x1vjfegm",
            $$css: true
        }
    };
    const s = {
        content: {
            borderTopStyle: "x1ejq31n",
            borderInlineEndStyle: "x18oe1m7",
            borderBottomStyle: "x1sy0etr",
            borderInlineStartStyle: "xstzfhl",
            willChange: "x1so62im",
            transition: "x1syfmzz",
            zIndex: "x1ja2u2z",
            cursor: "x1ypdohk",
            $$css: true
        },
        hovered: {
            "::after_borderStartStartRadius": "xfijbtm",
            "::after_borderStartEndRadius": "xfenqrj",
            "::after_borderEndEndRadius": "xgy0gl7",
            "::after_borderEndStartRadius": "x19igvu",
            $$css: true
        }
    };
    function u(t, r, o, a, i, l) {
        let s = {};
        switch(t){
            case "large":
                {
                    switch(i){
                        case "filled":
                            {
                                if (r && a) {
                                    s = n("cr:3488").WDSButtonLargeIconAndLabelFilledStyles;
                                } else if (a) {
                                    s = n("cr:3488").WDSButtonLargeLabelOnlyFilledStyles;
                                } else if (r && o) {
                                    s = n("cr:3488").WDSButtonLargeIconAndDropdownOnlyFilledStyles;
                                } else if (r) {
                                    s = n("cr:3488").WDSButtonLargeIconOnlyFilledStyles;
                                }
                                break;
                            }
                        case "tonal":
                            {
                                if (r && a) {
                                    s = n("cr:3488").WDSButtonLargeIconAndLabelTonalStyles;
                                } else if (a) {
                                    s = n("cr:3488").WDSButtonLargeLabelOnlyTonalStyles;
                                } else if (r && o) {
                                    s = n("cr:3488").WDSButtonLargeIconAndDropdownOnlyTonalStyles;
                                } else if (r) {
                                    s = n("cr:3488").WDSButtonLargeIconOnlyTonalStyles;
                                }
                                break;
                            }
                        case "outline":
                            {
                                if (r && a) {
                                    s = n("cr:3488").WDSButtonLargeIconAndLabelOutlineStyles;
                                } else if (a) {
                                    s = n("cr:3488").WDSButtonLargeLabelOnlyOutlineStyles;
                                } else if (r && o) {
                                    s = n("cr:3488").WDSButtonLargeIconAndDropdownOnlyOutlineStyles;
                                } else if (r) {
                                    s = n("cr:3488").WDSButtonLargeIconOnlyOutlineStyles;
                                }
                                break;
                            }
                        case "borderless":
                            {
                                if (r && a) {
                                    s = n("cr:3488").WDSButtonLargeIconAndLabelBorderlessStyles;
                                } else if (a) {
                                    s = n("cr:3488").WDSButtonLargeLabelOnlyBorderlessStyles;
                                } else if (r && o) {
                                    s = n("cr:3488").WDSButtonLargeIconAndDropdownOnlyBorderlessStyles;
                                } else if (r) {
                                    s = n("cr:3488").WDSButtonLargeIconOnlyBorderlessStyles;
                                }
                                break;
                            }
                    }
                    break;
                }
            case "medium":
                {
                    switch(i){
                        case "filled":
                            {
                                if (r && a) {
                                    s = n("cr:3492").WDSButtonMediumIconAndLabelFilledStyles;
                                } else if (a) {
                                    s = n("cr:3492").WDSButtonMediumLabelOnlyFilledStyles;
                                } else if (r && o) {
                                    s = n("cr:3492").WDSButtonMediumIconAndDropdownOnlyFilledStyles;
                                } else if (r) {
                                    s = n("cr:3492").WDSButtonMediumIconOnlyFilledStyles;
                                }
                                break;
                            }
                        case "tonal":
                            {
                                if (r && a) {
                                    s = n("cr:3492").WDSButtonMediumIconAndLabelTonalStyles;
                                } else if (a) {
                                    s = n("cr:3492").WDSButtonMediumLabelOnlyTonalStyles;
                                } else if (r && o) {
                                    s = n("cr:3492").WDSButtonMediumIconAndDropdownOnlyTonalStyles;
                                } else if (r) {
                                    s = n("cr:3492").WDSButtonMediumIconOnlyTonalStyles;
                                }
                                break;
                            }
                        case "outline":
                            {
                                if (r && a) {
                                    s = n("cr:3492").WDSButtonMediumIconAndLabelOutlineStyles;
                                } else if (a) {
                                    s = n("cr:3492").WDSButtonMediumLabelOnlyOutlineStyles;
                                } else if (r && o) {
                                    s = n("cr:3492").WDSButtonMediumIconAndDropdownOnlyOutlineStyles;
                                } else if (r) {
                                    s = n("cr:3492").WDSButtonMediumIconOnlyOutlineStyles;
                                }
                                break;
                            }
                        case "borderless":
                            {
                                if (r && a) {
                                    s = n("cr:3492").WDSButtonMediumIconAndLabelBorderlessStyles;
                                } else if (a) {
                                    s = n("cr:3492").WDSButtonMediumLabelOnlyBorderlessStyles;
                                } else if (r && o) {
                                    s = n("cr:3492").WDSButtonMediumIconAndDropdownOnlyBorderlessStyles;
                                } else if (r) {
                                    s = n("cr:3492").WDSButtonMediumIconOnlyBorderlessStyles;
                                }
                                break;
                            }
                    }
                    break;
                }
            case "small":
                {
                    switch(i){
                        case "filled":
                            {
                                if (r && a) {
                                    s = n("cr:3674").WDSButtonSmallIconAndLabelFilledStyles;
                                } else if (a) {
                                    s = n("cr:3674").WDSButtonSmallLabelOnlyFilledStyles;
                                } else if (r && o) {
                                    s = n("cr:3674").WDSButtonSmallIconAndDropdownOnlyFilledStyles;
                                } else if (r) {
                                    s = n("cr:3674").WDSButtonSmallIconOnlyFilledStyles;
                                }
                                break;
                            }
                        case "tonal":
                            {
                                if (r && a) {
                                    s = n("cr:3674").WDSButtonSmallIconAndLabelTonalStyles;
                                } else if (a) {
                                    s = n("cr:3674").WDSButtonSmallLabelOnlyTonalStyles;
                                } else if (r && o) {
                                    s = n("cr:3674").WDSButtonSmallIconAndDropdownOnlyTonalStyles;
                                } else if (r) {
                                    s = n("cr:3674").WDSButtonSmallIconOnlyTonalStyles;
                                }
                                break;
                            }
                        case "outline":
                            {
                                if (r && a) {
                                    s = n("cr:3674").WDSButtonSmallIconAndLabelOutlineStyles;
                                } else if (a) {
                                    s = n("cr:3674").WDSButtonSmallLabelOnlyOutlineStyles;
                                } else if (r && o) {
                                    s = n("cr:3674").WDSButtonSmallIconAndDropdownOnlyOutlineStyles;
                                } else if (r) {
                                    s = n("cr:3674").WDSButtonSmallIconOnlyOutlineStyles;
                                }
                                break;
                            }
                        case "borderless":
                            {
                                if (r && a) {
                                    s = n("cr:3674").WDSButtonSmallIconAndLabelBorderlessStyles;
                                } else if (a) {
                                    s = n("cr:3674").WDSButtonSmallLabelOnlyBorderlessStyles;
                                } else if (r && o) {
                                    s = n("cr:3674").WDSButtonSmallIconAndDropdownOnlyBorderlessStyles;
                                } else if (r) {
                                    s = n("cr:3674").WDSButtonSmallIconOnlyBorderlessStyles;
                                }
                                break;
                            }
                    }
                    break;
                }
        }
        return {
            content: [
                e.content,
                s.content
            ],
            item: [
                e.item,
                s.item
            ],
            pressed: [
                s.pressed
            ],
            addOnEnd: [
                s.addOnEnd
            ],
            addOnStart: [
                s.addOnStart
            ],
            horizontalContainer: s.horizontalContainer,
            children: s.children
        };
    }
    function c(e, t, r, a, i, l, u) {
        let c = {};
        switch(e){
            case "filled":
                {
                    switch(t){
                        case "default":
                            {
                                c = o("WDSButtonColorCommonConfig.stylex").WDSButtonFilledDefaultColorStyles;
                                break;
                            }
                        case "destructive":
                            {
                                c = o("WDSButtonColorCommonConfig.stylex").WDSButtonFilledDestructiveColorStyles;
                                break;
                            }
                        case "media":
                            {
                                c = n("cr:3448").WDSButtonFilledMediaColorStyles;
                                break;
                            }
                    }
                    break;
                }
            case "tonal":
                {
                    switch(t){
                        case "default":
                            {
                                c = o("WDSButtonColorCommonConfig.stylex").WDSButtonTonalDefaultColorStyles;
                                break;
                            }
                        case "destructive":
                            {
                                c = o("WDSButtonColorCommonConfig.stylex").WDSButtonTonalDestructiveColorStyles;
                                break;
                            }
                        case "media":
                            {
                                c = n("cr:3448").WDSButtonTonalMediaColorStyles;
                                break;
                            }
                    }
                    break;
                }
            case "outline":
                {
                    switch(t){
                        case "default":
                            {
                                c = n("cr:3448").WDSButtonOutlineDefaultColorStyles;
                                break;
                            }
                        case "destructive":
                            {
                                c = n("cr:3448").WDSButtonOutlineDestructiveColorStyles;
                                break;
                            }
                        case "media":
                            {
                                c = n("cr:3448").WDSButtonOutlineMediaColorStyles;
                                break;
                            }
                    }
                    break;
                }
            case "borderless":
                {
                    switch(t){
                        case "default":
                            {
                                if (r === true && a === false) {
                                    c = o("WDSButtonColorCommonConfig.stylex").WDSButtonBorderlessDefaultIconOnlyColorStyles;
                                } else {
                                    c = o("WDSButtonColorCommonConfig.stylex").WDSButtonBorderlessDefaultColorStyles;
                                }
                                break;
                            }
                        case "destructive":
                            {
                                c = o("WDSButtonColorCommonConfig.stylex").WDSButtonBorderlessDestructiveColorStyles;
                                break;
                            }
                        case "media":
                            {
                                c = o("WDSButtonColorCommonConfig.stylex").WDSButtonBorderlessMediaColorStyles;
                                break;
                            }
                    }
                    break;
                }
        }
        const d = !i && !l;
        return {
            xstyleConfig: {
                pressable: [
                    s.content,
                    d && o("WDSHoverStateStyles").WDSComponentHoverStateStyles.WDSButton,
                    c.pressable,
                    c.pressableOverlay
                ],
                pressableDisabled: [
                    c.pressableDisabled
                ],
                pressableHovered: [
                    s.hovered,
                    c.pressableHovered
                ],
                pressablePressed: [
                    c.pressablePressed,
                    s.hovered,
                    c.pressableHovered
                ]
            }
        };
    }
    function d(e, t, r, o) {
        return n("cr:3453").getButtonFontColorStyles(e, t, r);
    }
    const m = {
        icon24: {
            height: "xxk0z11",
            width: "xvy4d1p",
            $$css: true
        },
        icon20: {
            height: "x1qx5ct2",
            width: "xw4jnvo",
            $$css: true
        }
    };
    function p(e, t) {
        switch(e){
            case "large":
                if (t) {
                    return [
                        24,
                        m.icon24
                    ];
                }
                return [
                    20,
                    m.icon20
                ];
            case "medium":
                if (t) {
                    return [
                        24,
                        m.icon24
                    ];
                }
                return [
                    20,
                    m.icon20
                ];
            case "small":
                return [
                    20,
                    m.icon20
                ];
        }
    }
    l.getButtonSizeStyles = u;
    l.getButtonColorStyles = c;
    l.getButtonFontColor = d;
    l.getButtonIconSizeAndStyle = p;
}, 98);
__d("setTimeoutCometLoggingPriWWW", [
    "JSScheduler",
    "setTimeoutCometInternals"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    function s(t, n, ...a) {
        return o("setTimeoutCometInternals").setTimeoutAtPriority_DO_NOT_USE.apply(o("setTimeoutCometInternals"), [
            (e || (e = o("JSScheduler"))).priorities.unstable_Low,
            t,
            n,
            ...a
        ]);
    }
    l.default = s;
}, 98);
__d("react-0.0.0", [
    "React"
], function(t, n, r, o, a, i) {
    "use strict";
    const e = n("React");
    const l = {};
    const s = {
        exports: l
    };
    function u() {
        s.exports = e;
    }
    let c = false;
    function d() {
        if (!c) {
            c = true;
            u();
        }
        return s.exports;
    }
    const m = {};
    const p = {
        exports: m
    };
    function _() {
        p.exports = e;
    }
    let f = false;
    function g() {
        if (!f) {
            f = true;
            _();
        }
        return p.exports;
    }
    function h(e) {
        switch(e){
            case undefined:
                return d();
            case "/jsx-runtime":
                return g();
        }
    }
    a.exports = h;
}, null);
__d("react", [
    "react-0.0.0"
], function(t, n, r, o, a, i) {
    a.exports = n("react-0.0.0")();
}, null);
__d("styleq-0.2.1", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = {};
    const l = {
        exports: e
    };
    function s() {
        Object.defineProperty(e, "__esModule", {
            value: true
        });
        e.styleq = undefined;
        const t = new WeakMap;
        const n = "$$css";
        function r(e) {
            let r;
            let o;
            let a;
            if (e != null) {
                r = e.disableCache === true;
                o = e.disableMix === true;
                a = e.transform;
            }
            return function(...args) {
                const e = [];
                let i = "";
                let l = null;
                let s = "";
                let u = r ? null : t;
                const c = new Array(args.length);
                for(let d = 0; d < args.length; d++){
                    c[d] = args[d];
                }
                while(c.length > 0){
                    const m = c.pop();
                    if (!(m == null || m === false)) {
                        if (Array.isArray(m)) {
                            for(let p = 0; p < m.length; p++){
                                c.push(m[p]);
                            }
                            continue;
                        }
                        const _ = a != null ? a(m) : m;
                        if (_.$$css != null) {
                            let f = "";
                            if (u != null && u.has(_)) {
                                const g = u.get(_);
                                if (g != null) {
                                    f = g[0];
                                    s = g[2];
                                    e.push(...g[1]);
                                    u = g[3];
                                }
                            } else {
                                const h = [];
                                for(const y in _){
                                    const C = _[y];
                                    if (y === n) {
                                        const b = _[y];
                                        if (b !== true) {
                                            s = s ? `${b}; ${s}` : b;
                                        }
                                        continue;
                                    }
                                    if (typeof C === "string" || C === null) {
                                        if (!e.includes(y)) {
                                            e.push(y);
                                            if (u != null) {
                                                h.push(y);
                                            }
                                            if (typeof C === "string") {
                                                f += f ? ` ${C}` : C;
                                            }
                                        }
                                    } else {
                                        `styleq: ${y} typeof ${String(C)} is not "string" or "null".`;
                                    }
                                }
                                if (u != null) {
                                    const v = new WeakMap;
                                    u.set(_, [
                                        f,
                                        h,
                                        s,
                                        v
                                    ]);
                                    u = v;
                                }
                            }
                            if (f) {
                                i = i ? `${f} ${i}` : f;
                            }
                        } else if (o) {
                            if (l == null) {
                                l = {};
                            }
                            l = {
                                ..._,
                                ...l
                            };
                        } else {
                            let S = null;
                            for(const R in _){
                                const L = _[R];
                                if (L !== undefined) {
                                    if (!e.includes(R)) {
                                        if (L != null) {
                                            if (l == null) {
                                                l = {};
                                            }
                                            if (S == null) {
                                                S = {};
                                            }
                                            S[R] = L;
                                        }
                                        e.push(R);
                                        u = null;
                                    }
                                }
                            }
                            if (S != null) {
                                l = Object.assign(S, l);
                            }
                        }
                    }
                }
                const E = [
                    i,
                    l,
                    s
                ];
                return E;
            };
        }
        const o = e.styleq = r();
        o.factory = r;
    }
    let u = false;
    function c() {
        if (!u) {
            u = true;
            s();
        }
        return l.exports;
    }
    const d = {};
    const m = {
        exports: d
    };
    function p() {
        m.exports = c();
    }
    let _ = false;
    function f() {
        if (!_) {
            _ = true;
            p();
        }
        return m.exports;
    }
    function g(e) {
        switch(e){
            case undefined:
                return f();
        }
    }
    a.exports = g;
}, null);
__d("styleq", [
    "styleq-0.2.1"
], function(t, n, r, o, a, i) {
    a.exports = n("styleq-0.2.1")();
}, null);
__d("setTimeoutCometLoggingPri", [
    "cr:619"
], function(t, n, r, o, a, i, l) {
    "use strict";
    l.default = n("cr:619");
}, 98);
__d("EventListenerWWW", [
    "cr:1353359"
], function(t, n, r, o, a, i, l) {
    "use strict";
    l.default = n("cr:1353359");
}, 98);
