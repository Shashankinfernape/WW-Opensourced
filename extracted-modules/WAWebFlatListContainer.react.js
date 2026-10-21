__d("WAWebFlatListContainer.react", [
    "WAWebResizeObserver.react",
    "nullthrows",
    "react",
    "useMergeRefs",
    "useWAWebDebouncedCallback"
], function(t, n, r, o, a, i, l) {
    const e = [
        "ref"
    ];
    const s = [
        "children",
        "direction",
        "flatListControllers",
        "onLayout",
        "onScroll",
        "scrollOffset"
    ];
    let u;
    const c = u || (u = o("react"));
    const d = u;
    const { useLayoutEffect: m, useRef: p } = d;
    function _(t) {
        const n = t.ref;
        const o = babelHelpers.objectWithoutPropertiesLoose(t, e);
        const { children: a, direction: i, flatListControllers: l, onLayout: u, onScroll: d, scrollOffset: _ } = o;
        const f = babelHelpers.objectWithoutPropertiesLoose(o, s);
        const { children: g, direction: h, flatListControllers: y, onLayout: C, onScroll: b, scrollOffset: v } = o;
        const S = p(null);
        const R = r("useMergeRefs")(n, S);
        const L = function() {
            const e = S.current;
            if (e) {
                if (h === "horizontal") {
                    return e.scrollLeft;
                }
                return e.scrollTop;
            }
        };
        const E = function(t) {
            const e = S.current;
            if (e) {
                if (h === "horizontal") {
                    e.scrollLeft = t;
                } else {
                    e.scrollTop = t;
                }
            }
        };
        const k = function() {
            const e = r("nullthrows")(S.current);
            y.forEach((t)=>t.triggerLayout({
                    position: e.getBoundingClientRect(),
                    width: e.clientWidth,
                    height: e.clientHeight
                }));
        };
        const I = function(t) {
            if (b) {
                b(t);
            }
            y.forEach((e)=>e.triggerScroll());
        };
        const T = function(t) {
            const e = r("nullthrows")(S.current);
            const n = babelHelpers.extends({}, t, {
                position: e.getBoundingClientRect()
            });
            y.forEach((e)=>e.triggerLayout(n));
            if (C) {
                C(n);
            }
        };
        const D = r("useWAWebDebouncedCallback")(T, 50);
        m(function() {
            y.forEach((e)=>e.registerContainer({
                    getScrollFromStart: L,
                    setScrollFromStart: E,
                    onRegisterList: k
                }));
            if (v !== void 0) {
                E(v);
            }
            return function() {
                y.forEach((e)=>e.unregisterContainer());
            };
        }, []);
        return c.jsx(r("WAWebResizeObserver.react"), babelHelpers.extends({}, f, {
            className: o.className,
            onResize: D,
            onScroll: I,
            ref: R,
            children: g
        }));
    }
    _.displayName = `${_.name} [from ${i.id}]`;
    l.default = _;
}, 98);