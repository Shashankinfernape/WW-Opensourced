__d("WAWebMediaHubLoadingSkeletons.react", [
    "WAWebBox.react",
    "WAWebFlex.react",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = "x10fmoen-B";
    const d = "x1xgfvj9-B";
    const m = "xmo4utw-B";
    const p = {
        width: "x5lhr3w",
        height: "x16ye13r",
        $$css: true
    };
    const _ = {
        animationDelay: "xvo38ju",
        $$css: true
    };
    const f = {
        container: {
            width: "xi83emq",
            height: "x1rcao0v",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            position: "x1n2onr6",
            $$css: true
        },
        overShadow: {
            width: "xymcp1x",
            height: "x127qqk8",
            borderStartStartRadius: "x175tud5",
            borderStartEndRadius: "x14zcg0b",
            borderEndEndRadius: "x1fa4axq",
            borderEndStartRadius: "xsbsmvu",
            transform: "xqjk9gv",
            background: "x164nj1r",
            position: "x10l6tqk",
            animationName: "x1m2z91j",
            animationDuration: "x1hpr77l",
            animationIterationCount: "xa4qsjk",
            animationTimingFunction: "xa3vuyk",
            filter: "x1bs05mj",
            $$css: true
        },
        textShadow: {
            borderStartStartRadius: "x175tud5",
            borderStartEndRadius: "x14zcg0b",
            borderEndEndRadius: "x1fa4axq",
            borderEndStartRadius: "xsbsmvu",
            animationName: "xttja7m",
            background: "x164nj1r",
            animationDuration: "x1hpr77l",
            animationIterationCount: "xa4qsjk",
            animationTimingFunction: "xa3vuyk",
            filter: "xj2j9hd",
            position: "x1n2onr6",
            top: "x13k8yb0",
            transform: "x5i6ehr",
            $$css: true
        },
        textShadowVert: {
            animationName: "x70id73",
            background: "xnukdne",
            animationDuration: "xmg6eyc",
            animationTimingFunction: "x1debuo4",
            top: "x13vifvy",
            insetInlineStart: "xpnintw",
            transform: "x105ttfm",
            height: "x130vq4z",
            width: "x75ztot",
            $$css: true
        },
        text: {
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            position: "x1n2onr6",
            width: "xh8yej3",
            $$css: true
        },
        imageText: {
            bottom: "x1jn9clo",
            insetInlineStart: "xi5uv41",
            left: null,
            right: null,
            position: "x10l6tqk",
            $$css: true
        },
        overflow: {
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            $$css: true
        },
        listRoot: {
            width: "xh8yej3",
            boxSizing: "x9f619",
            height: "xy75621",
            $$css: true
        },
        dimension: function(t, n) {
            return [
                p,
                {
                    "--x-width": ((e)=>{
                        if (typeof e === "number") {
                            return `${e}px`;
                        }
                        return e ?? undefined;
                    })(`${t}px`),
                    "--x-height": ((e)=>{
                        if (typeof e === "number") {
                            return `${e}px`;
                        }
                        return e ?? undefined;
                    })(`${n}px`)
                }
            ];
        },
        roundedBox: {
            borderStartStartRadius: "x1fqc64z",
            borderStartEndRadius: "xs83zq4",
            borderEndEndRadius: "xt6ovg4",
            borderEndStartRadius: "x1ru8ea5",
            $$css: true
        },
        animationDelay: function(t) {
            return [
                _,
                {
                    "--x-animationDelay": ((e)=>{
                        if (typeof e === "number") {
                            return `${e}ms`;
                        }
                        return e ?? undefined;
                    })(`${t}ms`)
                }
            ];
        },
        textContainer: {
            height: "x5yr21d",
            $$css: true
        }
    };
    function G4Component(t) {
        const n = o("react-compiler-runtime").c(9);
        const t_delay = t.delay;
        let i;
        if (n[0] !== t_delay) {
            i = (e || (e = r("stylex"))).props([
                f.overShadow,
                f.animationDelay(t_delay)
            ]);
            n[0] = t_delay;
            n[1] = i;
        } else {
            i = n[1];
        }
        let l;
        if (n[2] !== i) {
            l = <div {...babelHelpers.extends({}, i)}/>;
            n[2] = i;
            n[3] = l;
        } else {
            l = n[3];
        }
        let s;
        if (n[4] !== t_delay) {
            s = <H1Component xstyle={f.imageText} delay={t_delay}/>;
            n[4] = t_delay;
            n[5] = s;
        } else {
            s = n[5];
        }
        let c;
        if (n[6] !== l || n[7] !== s) {
            const Component = r("WAWebBox.react");
            c = <Component xstyle={f.container}>{l}{s}</Component>;
            n[6] = l;
            n[7] = s;
            n[8] = c;
        } else {
            c = n[8];
        }
        return c;
    }
    function H1Component(t) {
        const n = o("react-compiler-runtime").c(13);
        const { delay, height, width, xstyle } = t;
        const c = delay === undefined ? 0 : delay;
        const d = height === undefined ? 10 : height;
        const m = width === undefined ? 100 : width;
        let p;
        if (n[0] !== d || n[1] !== m || n[2] !== xstyle) {
            p = (e || (e = r("stylex"))).props([
                f.text,
                xstyle,
                f.dimension(m, d)
            ]);
            n[0] = d;
            n[1] = m;
            n[2] = xstyle;
            n[3] = p;
        } else {
            p = n[3];
        }
        let _;
        if (n[4] !== c || n[5] !== d || n[6] !== m) {
            _ = (e || (e = r("stylex"))).props([
                f.textShadow,
                f.animationDelay(c),
                f.dimension(Math.max(30, m / 2), d * 5)
            ]);
            n[4] = c;
            n[5] = d;
            n[6] = m;
            n[7] = _;
        } else {
            _ = n[7];
        }
        let g;
        if (n[8] !== _) {
            g = <div {...babelHelpers.extends({}, _)}/>;
            n[8] = _;
            n[9] = g;
        } else {
            g = n[9];
        }
        let h;
        if (n[10] !== p || n[11] !== g) {
            h = <div {...babelHelpers.extends({}, p, {
                children: g
            })}/>;
            n[10] = p;
            n[11] = g;
            n[12] = h;
        } else {
            h = n[12];
        }
        return h;
    }
    function YComponent(e) {
        const t = o("react-compiler-runtime").c(4);
        const e_delay = e.delay;
        const r = e_delay === undefined ? 0 : e_delay;
        let a;
        if (t[0] !== r) {
            a = Array(5).fill(null).map((e, t)=><G4Component key={t} delay={t * 200 + r}/>);
            t[0] = r;
            t[1] = a;
        } else {
            a = t[1];
        }
        let i;
        if (t[2] !== a) {
            const Component = o("WAWebFlex.react").FlexRow;
            i = <Component grow={1} justify="all" gap={2} paddingBottom={2}>{a}</Component>;
            t[2] = a;
            t[3] = i;
        } else {
            i = t[3];
        }
        return i;
    }
    function C(t) {
        const n = o("react-compiler-runtime").c(11);
        const { delay, height, width, xstyle } = t;
        const c = delay === undefined ? 0 : delay;
        const d = height === undefined ? 10 : height;
        const m = width === undefined ? 100 : width;
        let p;
        if (n[0] !== d || n[1] !== m || n[2] !== xstyle) {
            p = (e || (e = r("stylex"))).props([
                f.text,
                f.roundedBox,
                xstyle,
                f.dimension(m, d)
            ]);
            n[0] = d;
            n[1] = m;
            n[2] = xstyle;
            n[3] = p;
        } else {
            p = n[3];
        }
        let _;
        if (n[4] !== c) {
            _ = (e || (e = r("stylex"))).props([
                f.textShadow,
                f.textShadowVert,
                f.animationDelay(c)
            ]);
            n[4] = c;
            n[5] = _;
        } else {
            _ = n[5];
        }
        let g;
        if (n[6] !== _) {
            g = <div {...babelHelpers.extends({}, _)}/>;
            n[6] = _;
            n[7] = g;
        } else {
            g = n[7];
        }
        let h;
        if (n[8] !== p || n[9] !== g) {
            h = <div {...babelHelpers.extends({}, p, {
                children: g
            })}/>;
            n[8] = p;
            n[9] = g;
            n[10] = h;
        } else {
            h = n[10];
        }
        return h;
    }
    function b(e) {
        const t = o("react-compiler-runtime").c(13);
        const e_delay = e.delay;
        const r = e_delay === undefined ? 0 : e_delay;
        let a;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = [
                f.overflow,
                f.listRoot
            ];
            t[0] = a;
        } else {
            a = t[0];
        }
        let i;
        if (t[1] !== r) {
            i = <C delay={r} width={48} height={48}/>;
            t[1] = r;
            t[2] = i;
        } else {
            i = t[2];
        }
        const l = r + 100;
        let s;
        if (t[3] !== l) {
            s = <C delay={l} width={720} height={14}/>;
            t[3] = l;
            t[4] = s;
        } else {
            s = t[4];
        }
        const c = r + 100;
        let d;
        if (t[5] !== c) {
            d = <C delay={c} width={360} height={14}/>;
            t[5] = c;
            t[6] = d;
        } else {
            d = t[6];
        }
        let m;
        if (t[7] !== s || t[8] !== d) {
            const Component = o("WAWebFlex.react").FlexColumn;
            m = <Component xstyle={f.textContainer} gap={8}>{s}{d}</Component>;
            t[7] = s;
            t[8] = d;
            t[9] = m;
        } else {
            m = t[9];
        }
        let p;
        if (t[10] !== i || t[11] !== m) {
            const Component = o("WAWebFlex.react").FlexRow;
            const Component_1 = o("WAWebFlex.react").FlexRow;
            p = <Component_1 align="center" grow={1} paddingStart={20} paddingEnd={20} xstyle={a}><Component align="center" gap={16}>{i}{m}</Component></Component_1>;
            t[10] = i;
            t[11] = m;
            t[12] = p;
        } else {
            p = t[12];
        }
        return p;
    }
    l.WAWebMediaHubLoadingText = H1Component;
    l.WAWebMediaHubMediaSkeletons = YComponent;
    l.WAWebMediaHubMediaListSkeletons = b;
}, 98);