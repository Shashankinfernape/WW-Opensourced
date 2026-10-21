__d("WAWebSubMenuItem.react", [
    "WAWebCellMenuItem.react",
    "WAWebDropdownV2.react",
    "WAWebMenuController.react",
    "WAWebPopoverContext.react",
    "WDSIconIcChevronRight.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    const e = [
        "children"
    ];
    let s;
    const u = s || (s = o("react"));
    const c = s;
    const { useEffect, useRef } = c;
    function p(t) {
        const n = o("react-compiler-runtime").c(17);
        let a;
        let i;
        if (n[0] !== t) {
            a = t.children;
            i = babelHelpers.objectWithoutPropertiesLoose(t, e);
            n[0] = t;
            n[1] = a;
            n[2] = i;
        } else {
            a = n[1];
            i = n[2];
        }
        const l = o("WAWebMenuController.react").useMenu();
        const l_activeItemId = l.activeItemId;
        const cRef = useRef(null);
        const p = o("WAWebPopoverContext.react").useWAWebPopoverControllerRef();
        const _ = l_activeItemId === t.optionId;
        let f;
        let g;
        if (n[3] !== _ || n[4] !== p) {
            f = function() {
                if (p.current != null) {
                    if (_) {
                        p.current.showPopover();
                    } else {
                        p.current.hidePopover();
                    }
                }
            };
            g = [
                _,
                p
            ];
            n[3] = _;
            n[4] = p;
            n[5] = f;
            n[6] = g;
        } else {
            f = n[5];
            g = n[6];
        }
        useEffect(f, g);
        let h;
        if (n[7] !== p) {
            h = function() {
                if (p.current != null) {
                    if (p.current.popoverIsVisible) {
                        p.current.hidePopover();
                    } else {
                        p.current.showPopover();
                    }
                }
            };
            n[7] = p;
            n[8] = h;
        } else {
            h = n[8];
        }
        const y = h;
        let C;
        if (n[9] === Symbol.for("react.memo_cache_sentinel")) {
            C = u.jsx(r("WDSIconIcChevronRight.react"), {
                width: 20
            });
            n[9] = C;
        } else {
            C = n[9];
        }
        let b;
        if (n[10] !== a || n[11] !== p) {
            const Component = o("WAWebDropdownV2.react").DropdownV2Menu;
            b = <Component controllerRef={p} buffer={-8} target={cRef} position={o("WAWebDropdownV2.react").PopoverPosition.End} alignment={o("WAWebDropdownV2.react").PopoverAlignment.Start} initHandling="hover-popover">{a}</Component>;
            n[10] = a;
            n[11] = p;
            n[12] = b;
        } else {
            b = n[12];
        }
        let v;
        if (n[13] !== y || n[14] !== i || n[15] !== b) {
            v = u.jsx(o("WAWebCellMenuItem.react").CellV2MenuItem, babelHelpers.extends({
                ref: cRef
            }, i, {
                type: "submenu",
                onSelect: y,
                detailRight: C,
                children: b
            }));
            n[13] = y;
            n[14] = i;
            n[15] = b;
            n[16] = v;
        } else {
            v = n[16];
        }
        return v;
    }
    l.SubMenuItem = p;
}, 98);