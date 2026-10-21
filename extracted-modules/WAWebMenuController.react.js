__d("WAWebMenuController.react", [
    "WALogger",
    "WAWebDomScroll",
    "WAWebEventEmitter",
    "WAWebFlex.react",
    "WAWebRegister.react",
    "asyncToGeneratorRuntime",
    "err",
    "react",
    "stylex",
    "useWAWebNavigatableList"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = [
        "ref"
    ];
    let u;
    let c;
    const d = c || (c = o("react"));
    const m = c;
    const { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } = m;
    const BContext = createContext(null);
    const v = o("WAWebRegister.react").createRegister();
    const { Register, useRegister, useRegisterItem } = v;
    function useE() {
        const e = useContext(BContext);
        if (e == null) {
            throw r("err")("[Menu] useMenu must be used in a child of a MenuList component");
        }
        return e;
    }
    const k = {
        container: {
            display: "x78zum5",
            flexGrow: "x1iyjqo2",
            overflowX: "xw2csxc",
            overflowY: "x1odjw0f",
            $$css: true
        },
        listContainer: {
            display: "x78zum5",
            flexDirection: "xdt5ytf",
            flexGrow: "x1iyjqo2",
            flexShrink: "x2lah0s",
            flexBasis: "xdl72j9",
            overflowY: "x1odjw0f",
            width: "xh8yej3",
            $$css: true
        },
        padding: {
            paddingTop: "x16ovd2e",
            paddingInlineEnd: "x1nzty39",
            paddingBottom: "x12xbjc7",
            paddingInlineStart: "x12w63v0",
            $$css: true
        }
    };
    function IComponent(t) {
        const t_ref = t.ref;
        const { allowTabNavigation = false, autoScroll = true, border, children, colorScheme = "lighter", data, focusOnMount = false, forceSelection, initialActiveOptionId, material = false, maxHeight, menuControllerRef, minWidth, onActiveItemChange, onHotKeysFocus, onSelect, size = "small", trapTabNavigation = false, useLegacyDesign = false } = babelHelpers.objectWithoutPropertiesLoose(t, s);
        const H = data;
        const GRef = useRef();
        const z = useState();
        const j = z[0];
        const K = z[1];
        const Q = useMemo(function() {
            return new (r("WAWebEventEmitter"));
        }, []);
        const X = useMemo(function() {
            return j ?? Array.from(H.keys());
        }, [
            j,
            H
        ]);
        const Y = o("useWAWebNavigatableList").useNavigatableList(X);
        const { NavigatableList, activeItem, listSelection } = Y;
        const filterItems = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                yield K(e);
            });
            return function(n) {
                return e.apply(this, arguments);
            };
        })();
        const ne = function(n) {
            const t = H.get(n);
            if (t != null && t.current != null) {
                const r = t.current;
                r.onSelect?.();
                Q.trigger("select", n, r, H);
                onSelect?.(n, r, H);
            } else {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[Menu] Trying to handle onSelect without a valid option '",
                    "'"
                ])), n);
            }
        };
        const re = function(t) {
            t.stopPropagation();
            t.preventDefault();
        };
        const oe = useCallback(function(e) {
            const t = H.get(e);
            if (GRef.current != null && t?.current != null) {
                const n = t.current.ref.current;
                if (n != null) {
                    o("WAWebDomScroll").scrollIntoViewIfNeeded(n, false, GRef.current);
                }
            }
        }, [
            H
        ]);
        useEffect(function() {
            if (autoScroll === true && activeItem != null) {
                oe(activeItem);
            }
        }, [
            activeItem,
            oe,
            autoScroll
        ]);
        useEffect(function() {
            onActiveItemChange?.(activeItem);
        }, [
            activeItem,
            onActiveItemChange
        ]);
        useEffect(function() {
            if (focusOnMount === true && GRef.current != null) {
                GRef.current.focus();
            }
        }, []);
        const handlers = babelHelpers.extends({
            down: re,
            up: re,
            enter: re
        }, trapTabNavigation ? {
            tab: re,
            "shift+tab": re
        } : null);
        const activateItem = function(t) {
            if (t != null) {
                listSelection.setVal(t);
            } else {
                listSelection.set(-1, false);
            }
        };
        const le = {
            items: H,
            events: Q,
            activeItemId: activeItem,
            filteredItems: j != null ? new Set(j) : null,
            filterItems,
            selectItem: ne,
            activateItem,
            colorScheme,
            size,
            material,
            allowTabNavigation,
            border,
            useLegacyDesign
        };
        const Component = o("WAWebFlex.react").FlexColumn;
        return <BContext.Provider value={le}><div ref={t_ref} role="listbox" data-testid="dropdown" className={(u || (u = r("stylex")))([
            k.container
        ])} style={{
            maxHeight,
            minWidth
        }}><NavigatableList listControllerRef={menuControllerRef} xstyle={k.listContainer} items={listSelection} onSelect={ne} handlers={handlers} forceSelection={forceSelection} initialActiveItem={initialActiveOptionId} rotate onHotKeysFocus={onHotKeysFocus}><Component align="stretch" tabIndex={0} data-tab={0} ref={GRef} xstyle={k.padding} testid="menu-controller-focus-receiver">{children}</Component></NavigatableList></div></BContext.Provider>;
    }
    IComponent.displayName = `${IComponent.name} [from ${i.id}]`;
    l.useRegisterItem = useRegisterItem;
    l.Register = Register;
    l.useRegister = useRegister;
    l.useMenu = useE;
    l.WAWebMenuController = IComponent;
}, 98);