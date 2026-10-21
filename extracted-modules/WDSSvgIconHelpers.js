__d("WDSSvgIconHelpers", [
    "WDSSvgComponentBase.react",
    "react",
    "stylex"
], function(t, n, r, o, a, i, l) {
    const e = [
        "height",
        "iconXstyle",
        "viewBox",
        "width"
    ];
    let s;
    let u;
    const c = u || (u = o("react"));
    function d(height, width, viewBox, r, o, a) {
        const i = height != null || width != null;
        let l = a;
        if (viewBox != null) {
            const s = viewBox.height;
            const u = s === undefined ? 0 : s;
            const c = viewBox.width;
            const d = c === undefined ? 0 : c;
            const m = viewBox.x;
            const p = m === undefined ? 0 : m;
            const _ = viewBox.y;
            const f = _ === undefined ? 0 : _;
            l = [
                p,
                f,
                d,
                u
            ].join(" ");
        }
        return {
            height: i ? height : r,
            width: i ? width : o,
            viewBox: l
        };
    }
    function m(t, n, r, o) {
        const { height, iconXstyle, viewBox, width } = t;
        const u = babelHelpers.objectWithoutPropertiesLoose(t, e);
        const c = d(height, width, viewBox, n, r, o);
        const { height: height_1, viewBox: viewBox_1, width: width_1 } = c;
        return {
            height: height_1,
            iconXstyle,
            otherProps: u,
            viewBox: viewBox_1,
            width: width_1
        };
    }
    function p(d_1) {
        if (typeof d_1 === "string") {
            return <path fill="currentColor" d={d_1}/>;
        }
        return d_1.map(_);
    }
    p.displayName = `${p.name} [from ${i.id}]`;
    function _(e, key) {
        if (typeof e === "string") {
            return e;
        }
        const N = e[0];
        const r = e[1];
        const o = e[2];
        return <N {...babelHelpers.extends({}, r, {
            key
        })}>{o?.map(_)}</N>;
    }
    _.displayName = `${_.name} [from ${i.id}]`;
    function f(e, t, n, o, a, l) {
        const u = p(l);
        function d(i) {
            const l = m(i, t, n, o);
            return c.jsx(r("WDSSvgComponentBase.react"), babelHelpers.extends({}, l.otherProps, {
                children: <svg {...babelHelpers.extends({
                    viewBox: l.viewBox,
                    height: l.height,
                    width: l.width,
                    preserveAspectRatio: "xMidYMid meet",
                    className: (s || (s = r("stylex")))(l.iconXstyle)
                }, a, {
                    children: [
                        <title>{e}</title>,
                        u
                    ]
                })}/>
            }));
        }
        d.displayName = `${d.name} [from ${i.id}]`;
        return d;
    }
    l.resolveSvgIcon = m;
    l.createSvgIconChildren = p;
    l.createWDSIcon = f;
}, 98);