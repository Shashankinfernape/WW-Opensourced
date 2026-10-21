__d("WAWebListItem.react", [
    "react",
    "react-compiler-runtime",
    "shallowEqual",
    "stylex"
], function(t, n, r, o, a, i, l) {
    const e = [
        "ref"
    ];
    let s;
    let u;
    const c = u || (u = o("react"));
    const d = u;
    const { memo, useState } = d;
    const _ = {
        item: {
            position: "x10l6tqk",
            width: "xh8yej3",
            ":hover_zIndex": "x1g42fcv",
            $$css: true
        }
    };
    const f = 200;
    const g = "transform";
    const h = "transition";
    function YComponent(t) {
        const l = o("react-compiler-runtime").c(1);
        const t_ref = t.ref;
        const d = babelHelpers.objectWithoutPropertiesLoose(t, e);
        const { data, index, renderItem, testid, zIndex } = d;
        const R = useState(function() {
            return {
                animate: false,
                itemKey: data.itemKey,
                offset: data.offset
            };
        });
        const L = R[0];
        const E = R[1];
        if (L.itemKey !== data.itemKey || L.offset !== data.offset) {
            E({
                animate: C(d, L.itemKey, L.offset),
                itemKey: data.itemKey,
                offset: data.offset
            });
        }
        const k = L.animate ? `${g} ${f}ms ease-in-out` : "none";
        const I = d.listDirection === "horizontal" ? {
            width: data.width,
            [g]: `translateX(${data.offset}px)`
        } : {
            height: data.height,
            [g]: `translateY(${data.offset}px)`
        };
        const T = babelHelpers.extends({
            zIndex,
            [h]: k
        }, I);
        const D = renderItem(data, index);
        let x;
        if (l[0] === Symbol.for("react.memo_cache_sentinel")) {
            x = (s || (s = r("stylex")))([
                _.item
            ]);
            l[0] = x;
        } else {
            x = l[0];
        }
        return <div ref={t_ref} className={x} style={T} onFocus={d.onFocus} role={d.role} data-testid={testid ?? "list-item"}>{D}</div>;
    }
    YComponent.displayName = `${YComponent.name} [from ${i.id}]`;
    function C(e, t, offset) {
        if (e.animate !== true) {
            return false;
        }
        const itemKey = e.data.itemKey;
        if (itemKey !== t) {
            return false;
        }
        return e.data.offset !== offset;
    }
    function b(e, t) {
        return e.animate === t.animate && e.zIndex === t.zIndex && e.renderItem === t.renderItem && r("shallowEqual")(e.data, t.data);
    }
    const v = memo(YComponent, b);
    l.default = v;
}, 98);