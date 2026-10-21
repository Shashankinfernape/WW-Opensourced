__d("WAWebDropdownV2.react", [
    "WAWebFlex.react",
    "WAWebMenu.react",
    "WAWebPopover.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    const e = [
        "children",
        "initHandling",
        "maxHeight",
        "minWidth",
        "xstyle"
    ];
    const s = [
        "children",
        "initHandling",
        "initialActiveOptionId",
        "material",
        "onSelect",
        "xstyle"
    ];
    let u;
    const c = u || (u = o("react"));
    const d = {
        maxHeight: function(t) {
            return [
                {
                    maxHeight: t != null ? "x1jols5v" : t,
                    $$css: true
                },
                {
                    "--x-maxHeight": ((e)=>{
                        if (typeof e === "number") {
                            return `${e}px`;
                        }
                        return e ?? undefined;
                    })(t)
                }
            ];
        },
        minWidth: function(t) {
            return [
                {
                    minWidth: t != null ? "xkj4a21" : t,
                    $$css: true
                },
                {
                    "--x-minWidth": ((e)=>{
                        if (typeof e === "number") {
                            return `${e}px`;
                        }
                        return e ?? undefined;
                    })(t)
                }
            ];
        },
        container: {
            borderStartStartRadius: "x1fqc64z",
            borderStartEndRadius: "xs83zq4",
            borderEndEndRadius: "xt6ovg4",
            borderEndStartRadius: "x1ru8ea5",
            backgroundColor: "x16w0wmm",
            boxShadow: "x1sr759z",
            color: "x14ug900",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            $$css: true
        },
        scrollable: {
            overflowY: "x1odjw0f",
            $$css: true
        },
        material: {
            borderStartStartRadius: "x6nvzda",
            borderStartEndRadius: "x4i4b9w",
            borderEndEndRadius: "xhl9efl",
            borderEndStartRadius: "xj65ea0",
            $$css: true
        },
        arrow: {
            backgroundColor: "x16w0wmm",
            $$css: true
        }
    };
    const m = [
        "multi-select",
        "submenu",
        "switch"
    ];
    function PComponent(t) {
        const n = o("react-compiler-runtime").c(22);
        let r;
        let a;
        let i;
        let l;
        let s;
        let u;
        if (n[0] !== t) {
            r = t.children;
            a = t.initHandling;
            i = t.maxHeight;
            l = t.minWidth;
            u = t.xstyle;
            s = babelHelpers.objectWithoutPropertiesLoose(t, e);
            n[0] = t;
            n[1] = r;
            n[2] = a;
            n[3] = i;
            n[4] = l;
            n[5] = s;
            n[6] = u;
        } else {
            r = n[1];
            a = n[2];
            i = n[3];
            l = n[4];
            s = n[5];
            u = n[6];
        }
        const initHandling = a ?? "click";
        let p;
        if (n[7] !== i) {
            p = i != null && d.maxHeight(i);
            n[7] = i;
            n[8] = p;
        } else {
            p = n[8];
        }
        let _;
        if (n[9] !== l) {
            _ = l != null && d.minWidth(l);
            n[9] = l;
            n[10] = _;
        } else {
            _ = n[10];
        }
        let f;
        if (n[11] !== p || n[12] !== _ || n[13] !== u) {
            f = [
                d.container,
                d.material,
                d.scrollable,
                u,
                p,
                _
            ];
            n[11] = p;
            n[12] = _;
            n[13] = u;
            n[14] = f;
        } else {
            f = n[14];
        }
        let g;
        if (n[15] !== r || n[16] !== f) {
            const Component = o("WAWebFlex.react").FlexItem;
            g = <Component xstyle={f}>{r}</Component>;
            n[15] = r;
            n[16] = f;
            n[17] = g;
        } else {
            g = n[17];
        }
        let h;
        if (n[18] !== s || n[19] !== initHandling || n[20] !== g) {
            h = babelHelpers.extends({}, s, {
                initHandling,
                dismissable: true,
                arrowXStyle: d.arrow,
                element: g
            });
            n[18] = s;
            n[19] = initHandling;
            n[20] = g;
            n[21] = h;
        } else {
            h = n[21];
        }
        const y = o("WAWebPopover.react").usePopoverElement(h);
        return y;
    }
    function Component(e) {
        const t = o("react-compiler-runtime").c(8);
        let n;
        let r;
        let initialActiveOptionId;
        let material;
        let l;
        let u;
        let d;
        if (t[0] !== e) {
            n = e.children;
            r = e.initHandling;
            initialActiveOptionId = e.initialActiveOptionId;
            material = e.material;
            l = e.onSelect;
            d = e.xstyle;
            u = babelHelpers.objectWithoutPropertiesLoose(e, s);
            t[0] = e;
            t[1] = n;
            t[2] = r;
            t[3] = initialActiveOptionId;
            t[4] = material;
            t[5] = l;
            t[6] = u;
            t[7] = d;
        } else {
            n = t[1];
            r = t[2];
            initialActiveOptionId = t[3];
            material = t[4];
            l = t[5];
            u = t[6];
            d = t[7];
        }
        const Component = o("WAWebMenu.react").WAWebMenu;
        var _ = PComponent(babelHelpers.extends({}, u, {
            initHandling: r ?? "click",
            dismissable: true,
            children: <Component initialActiveOptionId={initialActiveOptionId} material={material} onSelect={onSelect} trapTabNavigation>{n}</Component>,
            xstyle: d
        }));
        function onSelect(e, { type }) {
            l?.(e);
            if (m.includes(type) === false) {
                _.hidePopover();
            }
        }
        return _;
    }
    function f(e) {
        const t = PComponent(e);
        const t_popover = t.popover;
        return t_popover;
    }
    function g(e) {
        const t = Component(e);
        const t_popover = t.popover;
        return t_popover;
    }
    l.PopoverAlignment = o("WAWebPopover.react").PopoverAlignment;
    l.PopoverPosition = o("WAWebPopover.react").PopoverPosition;
    l.useDropdownV2 = PComponent;
    l.DropdownV2 = f;
    l.DropdownV2Menu = g;
}, 98);