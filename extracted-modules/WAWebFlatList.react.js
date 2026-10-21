__d("WAWebFlatList.react", [
    "MetaConfig",
    "WACustomError",
    "WAWebFocusTracer",
    "WAWebIdleTaskRunner",
    "WAWebKeyboardHotKeys.react",
    "WAWebListItem.react",
    "WAWebVelocityTransitionGroup",
    "clamp",
    "err",
    "gkx",
    "react",
    "stylex",
    "useWAWebAnimationFrames",
    "useWAWebDebouncedCallback",
    "useWAWebStableCallback"
], function(t, n, r, o, a, i, l) {
    const e = [
        "ref"
    ];
    let s;
    let u;
    const c = u || (u = o("react"));
    const d = u;
    const { createRef, useEffect, useImperativeHandle, useLayoutEffect, useRef, useState } = d;
    const y = {
        viewport: {
            position: "x1n2onr6",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            $$css: true
        },
        verticalListViewport: {
            marginTop: "x1y332i5",
            $$css: true
        },
        horizontalListViewport: {
            height: "x5yr21d",
            $$css: true
        }
    };
    const C = 72;
    const b = 72;
    const v = 150;
    const S = 1000000;
    const R = ((e)=>{
        function t(t) {
            const n = r("gkx")("26258") ? "" : t.itemKey;
            return e.call(this, `Unknown data encountered while rendering. ${n}`) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(o("WACustomError").CustomError);
    function LComponent(t) {
        const t_ref = t.ref;
        const a = babelHelpers.objectWithoutPropertiesLoose(t, e);
        const { role, itemRole } = a;
        const role_1 = itemRole === undefined ? "listitem" : itemRole;
        const { flatListController, direction, itemEnterAnimationsEnabled } = a;
        const D = itemEnterAnimationsEnabled === undefined ? false : itemEnterAnimationsEnabled;
        const { onPointerEventsOff, onPointerEventsOn, disablePointerEventsOnScroll } = a;
        const N = disablePointerEventsOnScroll === undefined ? true : disablePointerEventsOnScroll;
        const a_reorderAnimationsEnabled = a.reorderAnimationsEnabled;
        const animate = a_reorderAnimationsEnabled === undefined ? true : a_reorderAnimationsEnabled;
        const { renderItem, defaultItemWidth } = a;
        const O = defaultItemWidth === undefined ? C : defaultItemWidth;
        const a_defaultItemHeight = a.defaultItemHeight;
        const W = a_defaultItemHeight === undefined ? b : a_defaultItemHeight;
        const a_extraItems = a.extraItems;
        const U = a_extraItems === undefined ? 5 : a_extraItems;
        const a_forceConsistentRenderCount = a.forceConsistentRenderCount;
        const H = a_forceConsistentRenderCount === undefined ? true : a_forceConsistentRenderCount;
        const { testid, containerXstyles, viewportXstyles, handleKeyboardNavigation } = a;
        const Q = handleKeyboardNavigation === undefined ? false : handleKeyboardNavigation;
        const { focusableItemSelector, initialActiveOptionId, tabIndex, targetWindow } = a;
        const ee = E(a.data, direction, O, W);
        const { enhancedData, listLength } = ee;
        const reRef = useRef(null);
        const oeRef = useRef(true);
        const aeRef = useRef(null);
        const ie = useState(0);
        const le = ie[0];
        const se = ie[1];
        const ue = useState(0);
        const ce = ue[0];
        const de = ue[1];
        const me = useState(0);
        const pe = me[0];
        const _e = me[1];
        const fe = useState(0);
        const ge = fe[0];
        const he = fe[1];
        const ye = useState(0);
        const Ce = ye[0];
        const be = ye[1];
        const ve = useState(listLength);
        const Se = ve[0];
        const Re = ve[1];
        const LeRef = useRef(0);
        const Ee = (t)=>{
            const { scrollFromStart = pe, offsetFromStart = ge, bodyDimension = Ce } = t ?? {};
            if (bodyDimension === undefined || offsetFromStart === undefined) {
                throw r("err")("FlatList:Computing FlatList without a valid Container");
            }
            let u = 0;
            for(let c = 0; c < enhancedData.length; c++){
                const d = enhancedData[c];
                const m = k(d, direction, O, W);
                if (offsetFromStart + d.offset + m > scrollFromStart) {
                    u = c;
                    break;
                }
            }
            let p = enhancedData.length - 1;
            let _ = 0;
            if (enhancedData.length > 0) {
                _ = H ? Math.min(enhancedData[u].offset + bodyDimension, listLength) : Math.min(scrollFromStart + bodyDimension, listLength + offsetFromStart);
            }
            for(let f = u; f < enhancedData.length; f++){
                const g = enhancedData[f];
                const h = k(g, direction, O, W);
                if (offsetFromStart + g.offset + h >= _) {
                    p = f;
                    break;
                }
            }
            let y = U;
            const C = U - u;
            if (C > 0) {
                y += C;
            }
            let b = U;
            const v = p + U - enhancedData.length;
            if (v > 0) {
                b += v;
            }
            return {
                firstIndex: Math.max(u - b, 0),
                lastIndex: Math.min(p + y, enhancedData.length - 1)
            };
        };
        const handleLayout = r("useWAWebStableCallback")(function(e) {
            const reRef_current = reRef.current;
            if (reRef_current) {
                const n = direction === "horizontal" ? reRef_current.getBoundingClientRect().left - e.position.left : reRef_current.getBoundingClientRect().top - e.position.top;
                const offsetFromStart = Math.max(n, 0);
                const bodyDimension = direction === "horizontal" ? e.width : e.height;
                const a = Ee({
                    offsetFromStart,
                    bodyDimension
                });
                se(a.firstIndex);
                de(a.lastIndex);
                he(offsetFromStart);
                be(bodyDimension);
            }
        });
        const Ie = useState(false);
        const Te = Ie[0];
        const De = Ie[1];
        const xeRef = useRef(false);
        var $e = r("useWAWebDebouncedCallback")(function() {
            if (Te) {
                return $e();
            }
            if (aeRef.current != null) {
                o("WAWebIdleTaskRunner").UIBusyTasks.clearBusy(aeRef.current);
                aeRef.current = null;
            }
            onPointerEventsOn?.();
            const reRef_current = reRef.current;
            if (reRef_current) {
                reRef_current.style.pointerEvents = "auto";
            }
            oeRef.current = false;
        }, v);
        const Pe = ()=>{
            aeRef.current = o("WAWebIdleTaskRunner").UIBusyTasks.setBusy(aeRef.current);
            if (!oeRef.current) {
                onPointerEventsOff?.();
                const e = reRef.current;
                if (e) {
                    e.style.pointerEvents = "none";
                }
                oeRef.current = true;
            }
        };
        r("useWAWebAnimationFrames")(function() {
            if (N === true) {
                Pe();
            }
            const e = flatListController.getScrollFromStart();
            if (e == null) {
                throw r("err")("FlatList:ScrollEvent thrown while container is unmounted");
            }
            const scrollFromStart = Math.max(e, 0);
            const n = Ee({
                scrollFromStart
            });
            se(n.firstIndex);
            de(n.lastIndex);
            _e(scrollFromStart);
            if (!xeRef.current) {
                De(false);
                if (N === true) {
                    $e();
                }
            }
        }, {
            active: Te,
            targetWindow
        });
        const handleScroll = function() {
            if (Te) {
                xeRef.current = true;
            } else {
                xeRef.current = false;
                De(true);
            }
        };
        useLayoutEffect(function() {
            flatListController.registerList({
                handleLayout,
                handleScroll
            });
            return function() {
                flatListController.unregisterList();
            };
        }, []);
        const Me = Ee();
        if (Me.firstIndex !== le) {
            se(Me.firstIndex);
        }
        if (Me.lastIndex !== ce) {
            de(Me.lastIndex);
        }
        if (listLength !== Se && (!D || listLength > Se)) {
            Re(listLength);
        }
        const scrollIntoViewIfNeeded = function(t, n = 0) {
            if (t < 0 || t >= enhancedData.length) {
                throw r("err")(`Flatlist: Invalid index for scrolling: ${t}. Data length: ${enhancedData.length}`);
            }
            const offset = enhancedData[t].offset;
            if (offset < pe - n || offset > pe + Ce + n) {
                flatListController.setScrollFromStart(offset);
            }
        };
        const setFocus = function() {
            reRef.current?.focus();
        };
        useImperativeHandle(t_ref, function() {
            return {
                scrollIntoViewIfNeeded,
                setFocus
            };
        });
        const Fe = direction === "horizontal" ? {
            width: Se
        } : {
            height: Se
        };
        const onAnimationComplete = function() {
            Re(listLength);
        };
        const BeRef = useRef(new Map);
        const WeRef = useRef(new Map);
        const QeComponent = (itemKey, n, o)=>{
            const e = direction === "horizontal" ? {
                width: I(n, O)
            } : {
                height: T(n, W)
            };
            let i;
            if (r("MetaConfig")._("351")) {
                i = WeRef.current.get(n.dataIndex);
                if (i == null) {
                    i = createRef();
                    WeRef.current.set(n.dataIndex, i);
                }
            } else {
                i = createRef();
            }
            if (a.handleKeyboardNavigation === true) {
                BeRef.current.set(n.dataIndex, i);
            }
            const Component = r("WAWebListItem.react");
            return <Component key={itemKey} ref={i} data={babelHelpers.extends({}, n, e)} animate={animate} zIndex={r("MetaConfig")._("351") ? S - n.dataIndex : enhancedData.length - o - 1} renderItem={renderItem} listDirection={direction} testid={`list-item-${o}`} role={role_1} onFocus={function() {
                LeRef.current = n.dataIndex;
            }} index={n.dataIndex}/>;
        };
        const Ue = enhancedData.slice(le, ce + 1);
        const Ve = Ue.map((e, t)=>QeComponent(e.itemKey, e, t));
        const He = (t)=>{
            if (reRef.current?.contains(document.activeElement) && document.activeElement !== reRef.current) {
                return LeRef.current + t;
            }
            return 0;
        };
        const Ge = (t, n = 0)=>{
            if (typeof focusableItemSelector === "string" && t != null) {
                const e = ze();
                const o = t.querySelectorAll(focusableItemSelector);
                if (e === -1) {
                    return r("WAWebFocusTracer").focus(o[0]);
                }
                const a = e + n;
                return r("WAWebFocusTracer").focus(o[r("clamp")(a, 0, o.length - 1)]);
            }
        };
        var ze = (t)=>{
            if (typeof focusableItemSelector !== "string") {
                return -1;
            }
            const r = t ?? BeRef.current.get(LeRef.current)?.current;
            const o = r?.querySelectorAll(focusableItemSelector) ?? [];
            const a = Array.from(o).findIndex((e)=>e === document.activeElement);
            return a;
        };
        const je = function(t) {
            t.preventDefault();
            const e = He(-1);
            const n = BeRef.current.get(e);
            if (n != null && n.current) {
                Ge(n.current);
            }
        };
        const Ke = function(t) {
            t.preventDefault();
            const e = He(1);
            const n = BeRef.current.get(e);
            if (n != null && n.current) {
                Ge(n.current);
            }
        };
        const Qe = (t, n)=>{
            t.preventDefault();
            const e = BeRef.current.get(LeRef.current);
            if (e != null && e.current) {
                Ge(e.current, n);
            }
        };
        const left = function(t) {
            return Qe(t, -1);
        };
        const right = function(t) {
            return Qe(t, 1);
        };
        let Je;
        if (Q && direction === "vertical") {
            Je = {
                up: je,
                down: Ke,
                right,
                left
            };
        } else if (Q && direction === "horizontal") {
            Je = {
                left: je,
                right: Ke
            };
        }
        useEffect(function() {
            const e = enhancedData.findIndex((e)=>e.itemKey === initialActiveOptionId);
            if (e != null && e > -1) {
                scrollIntoViewIfNeeded(e);
            }
        }, []);
        let Ze;
        if (containerXstyles != null) {
            Ze = (s || (s = r("stylex")))(containerXstyles);
        }
        let et = -1;
        if (tabIndex != null) {
            et = tabIndex;
        } else if (Q === true) {
            et = 0;
        }
        const Component = r("WAWebVelocityTransitionGroup");
        const Component_1 = o("WAWebKeyboardHotKeys.react").HotKeys;
        return <Component_1 tabIndex={et} handlers={Je} className={Ze} data-testid={testid} onFocus={function() {
            if (Q && reRef.current === document.activeElement) {
                const e = BeRef.current.get(LeRef.current);
                if (e != null && e.current) {
                    Ge(e.current);
                }
            }
        }} ref={reRef}><div aria-label={a["aria-label"]} className={(s || (s = r("stylex")))(direction === "horizontal" && y.horizontalListViewport, direction === "vertical" && y.verticalListViewport, y.viewport, viewportXstyles)} role={role} aria-rowcount={a["aria-rowcount"]} aria-colcount={a["aria-colcount"]} style={Fe}>{D ? <Component transitionName="fade" onAnimationComplete={onAnimationComplete}>{Ve}</Component> : Ve}</div></Component_1>;
    }
    LComponent.displayName = `${LComponent.name} [from ${i.id}]`;
    function E(data, direction, n, r) {
        let o = 0;
        let dataIndex = 0;
        const enhancedData = data.map((e)=>{
            const i = babelHelpers.extends({}, e, {
                offset: o,
                dataIndex
            });
            const l = k(e, direction, n, r);
            o += l;
            dataIndex++;
            return i;
        });
        return {
            enhancedData,
            listLength: o
        };
    }
    function k(e, direction, n, r) {
        if (direction === "horizontal") {
            return I(e, n);
        }
        return T(e, r);
    }
    function I(e, t) {
        if (e.width != null && e.width > 0) {
            return e.width;
        }
        return t;
    }
    function T(e, t) {
        if (e.height != null && e.height > 0) {
            return e.height;
        }
        return t;
    }
    l.DEFAULT_ITEM_HEIGHT = b;
    l.UnknownDataError = R;
    l.FlatList = LComponent;
}, 98);