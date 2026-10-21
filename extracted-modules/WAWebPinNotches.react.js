__d("WAWebPinNotches.react", [
    "fbt",
    "WAWebPinNotchGeometry",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    const u_useState = u.useState;
    const m = 200;
    const p = "cubic-bezier(0.42, 0, 0.58, 1)";
    const _ = {
        height: "x16ye13r",
        position: "x1n2onr6",
        width: "x5lhr3w",
        $$css: true
    };
    const f = {
        height: "x16ye13r",
        insetInlineStart: "x1o0tod",
        left: "",
        right: "",
        overflowX: "x6ikm8r",
        overflowY: "x10wlt62",
        position: "x10l6tqk",
        top: "xjbys53",
        width: "xh8yej3",
        $$css: true
    };
    const g = {
        backgroundColor: "x3qdkio",
        height: "x16ye13r",
        insetInlineStart: "x1o0tod",
        left: "",
        right: "",
        position: "x10l6tqk",
        top: "x13vifvy",
        transform: "xsqj5wx",
        transformOrigin: "xtj8gnn",
        width: "x5lhr3w",
        $$css: true
    };
    const h = {
        container: function(t, n) {
            return [
                _,
                {
                    "--x-height": ((e)=>{
                        if (typeof e === "number") {
                            return `${e}px`;
                        }
                        return e ?? undefined;
                    })(`${n}px`),
                    "--x-width": ((e)=>{
                        if (typeof e === "number") {
                            return `${e}px`;
                        }
                        return e ?? undefined;
                    })(`${t}px`)
                }
            ];
        },
        band: function(t, n) {
            return [
                f,
                {
                    "--x-height": ((e)=>{
                        if (typeof e === "number") {
                            return `${e}px`;
                        }
                        return e ?? undefined;
                    })(`${t}px`),
                    "--x-top": ((e)=>{
                        if (typeof e === "number") {
                            return `${e}px`;
                        }
                        return e ?? undefined;
                    })(`${n}px`)
                }
            ];
        },
        notch: function(t, n, r, a) {
            return [
                g,
                {
                    borderEndEndRadius: a != null ? "x1wsjk4f" : a,
                    borderEndStartRadius: a != null ? "x1oq9ryg" : a,
                    borderStartEndRadius: a != null ? "xbsomw4" : a,
                    borderStartStartRadius: a != null ? "x6pmj1i" : a,
                    $$css: true
                },
                {
                    "--x-borderEndEndRadius": ((e)=>{
                        if (typeof e === "number") {
                            return `${e}px`;
                        }
                        return e ?? undefined;
                    })(a),
                    "--x-borderEndStartRadius": ((e)=>{
                        if (typeof e === "number") {
                            return `${e}px`;
                        }
                        return e ?? undefined;
                    })(a),
                    "--x-borderStartEndRadius": ((e)=>{
                        if (typeof e === "number") {
                            return `${e}px`;
                        }
                        return e ?? undefined;
                    })(a),
                    "--x-borderStartStartRadius": ((e)=>{
                        if (typeof e === "number") {
                            return `${e}px`;
                        }
                        return e ?? undefined;
                    })(a),
                    "--x-height": ((e)=>{
                        if (typeof e === "number") {
                            return `${e}px`;
                        }
                        return e ?? undefined;
                    })(`${o("WAWebPinNotchGeometry").SELECTED_PX}px`),
                    "--x-transform": `translateY(${n}px) scaleY(${r})` != null ? `translateY(${n}px) scaleY(${r})` : undefined,
                    "--x-width": ((e)=>{
                        if (typeof e === "number") {
                            return `${e}px`;
                        }
                        return e ?? undefined;
                    })(`${t}px`)
                }
            ];
        },
        selected: {
            backgroundColor: "xfn3atn",
            $$css: true
        },
        animated: {
            transitionDuration: "x13dflua x12w9bfk",
            transitionProperty: "x11xpdln",
            transitionTimingFunction: "x11pne5e",
            $$css: true
        }
    };
    function YComponent(t) {
        const n = o("react-compiler-runtime").c(18);
        const { activeIndex, count } = t;
        const l = b(activeIndex, count);
        const u = (o("WAWebPinNotchGeometry").CONTAINER_PX - o("WAWebPinNotchGeometry").BAND_PX) / 2;
        let d;
        if (n[0] !== activeIndex || n[1] !== count) {
            d = s._("{current} out of {total}", [
                s._param("current", activeIndex + 1),
                s._param("total", count)
            ]);
            n[0] = activeIndex;
            n[1] = count;
            n[2] = d;
        } else {
            d = n[2];
        }
        const m = l ? "true" : "false";
        let p;
        let _;
        if (n[3] === Symbol.for("react.memo_cache_sentinel")) {
            p = (e || (e = r("stylex"))).props(h.container(o("WAWebPinNotchGeometry").STROKE_PX, o("WAWebPinNotchGeometry").CONTAINER_PX));
            _ = e.props(h.band(o("WAWebPinNotchGeometry").BAND_PX, u));
            n[3] = p;
            n[4] = _;
        } else {
            p = n[3];
            _ = n[4];
        }
        let f;
        if (n[5] !== activeIndex || n[6] !== count || n[7] !== l) {
            let g;
            if (n[9] !== activeIndex || n[10] !== l) {
                g = function({ height, top }, i) {
                    return <div key={i} {...babelHelpers.extends({
                        "data-testid": "pin_banner_notch"
                    }, (e || (e = r("stylex"))).props([
                        h.notch(o("WAWebPinNotchGeometry").STROKE_PX, top, height / o("WAWebPinNotchGeometry").SELECTED_PX, C(height / o("WAWebPinNotchGeometry").SELECTED_PX)),
                        i === activeIndex && h.selected,
                        l && h.animated
                    ]))}/>;
                };
                n[9] = activeIndex;
                n[10] = l;
                n[11] = g;
            } else {
                g = n[11];
            }
            f = o("WAWebPinNotchGeometry").layoutFor(count, activeIndex).map(g);
            n[5] = activeIndex;
            n[6] = count;
            n[7] = l;
            n[8] = f;
        } else {
            f = n[8];
        }
        let y;
        if (n[12] !== f) {
            y = <div {...babelHelpers.extends({}, _, {
                children: f
            })}/>;
            n[12] = f;
            n[13] = y;
        } else {
            y = n[13];
        }
        let v;
        if (n[14] !== d || n[15] !== m || n[16] !== y) {
            v = <div {...babelHelpers.extends({
                "aria-label": d,
                "data-animating": m,
                "data-testid": "pin_banner_notches"
            }, p, {
                children: y
            })}/>;
            n[14] = d;
            n[15] = m;
            n[16] = y;
            n[17] = v;
        } else {
            v = n[17];
        }
        return v;
    }
    function C(e) {
        const t = o("WAWebPinNotchGeometry").STROKE_PX / 2;
        return `${t}px ${t / e}px`;
    }
    function b(activeIndex, count) {
        const n = o("react-compiler-runtime").c(3);
        let r;
        if (n[0] !== activeIndex || n[1] !== count) {
            r = {
                activeIndex,
                animate: false,
                count
            };
            n[0] = activeIndex;
            n[1] = count;
            n[2] = r;
        } else {
            r = n[2];
        }
        const a = u_useState(r);
        const i = a[0];
        const l = a[1];
        if (i.activeIndex !== activeIndex || i.count !== count) {
            l({
                activeIndex,
                animate: i.count === count && Math.abs(activeIndex - i.activeIndex) === 1,
                count
            });
        }
        return i.animate;
    }
    l.default = YComponent;
}, 226);