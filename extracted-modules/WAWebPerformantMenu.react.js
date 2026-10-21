__d("WAWebPerformantMenu.react", [
    "WAWebFlatList.react",
    "WAWebFlatListContainer.react",
    "WAWebFlatListController",
    "WAWebMenuController.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = e;
    const { useImperativeHandle, useMemo, useRef } = u;
    function p(e) {
        const t = o("react-compiler-runtime").c(18);
        const { colorScheme, data, flatListProps, handleActiveItemChange, initialActiveOptionId, material, maxHeight, menuControllerRef, minWidth, onHotKeysFocus, onSelect, renderItem, reorderAnimationsEnabled, setFocusRef, size } = e;
        const S = new Map;
        const RRef = useRef(null);
        const registerRef = o("WAWebMenuController.react").useRegister({
            onRegister: function(t) {
                t.forEach((e, t)=>{
                    S.set(t, e);
                });
            },
            onChange: function(t) {
                t.forEach((e, t)=>{
                    S.set(t, e);
                });
            }
        });
        let E;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            E = new (r("WAWebFlatListController"));
            t[0] = E;
        } else {
            E = t[0];
        }
        const k = E;
        let I;
        if (t[1] !== data || t[2] !== handleActiveItemChange) {
            I = function(t) {
                handleActiveItemChange?.(t);
                const e = data.findIndex((e)=>e.itemKey === t);
                if (e > -1) {
                    RRef.current?.scrollIntoViewIfNeeded(e);
                }
            };
            t[1] = data;
            t[2] = handleActiveItemChange;
            t[3] = I;
        } else {
            I = t[3];
        }
        const onActiveItemChange = I;
        let D;
        if (t[4] === Symbol.for("react.memo_cache_sentinel")) {
            D = function() {
                return {
                    focus: function() {
                        RRef.current?.setFocus();
                    }
                };
            };
            t[4] = D;
        } else {
            D = t[4];
        }
        useImperativeHandle(setFocusRef, D);
        data.forEach((e)=>{
            if (e.static !== true) {
                const t = S.get(e.itemKey);
                S.set(e.itemKey, t ?? {
                    current: null
                });
            }
        });
        let flatListControllers;
        if (t[5] !== k) {
            flatListControllers = [
                k
            ];
            t[5] = k;
            t[6] = flatListControllers;
        } else {
            flatListControllers = t[6];
        }
        let $;
        if (t[7] === Symbol.for("react.memo_cache_sentinel")) {
            $ = "x1rife3k x1plvlek";
            t[7] = $;
        } else {
            $ = t[7];
        }
        let P;
        if (t[8] !== data || t[9] !== k || t[10] !== flatListProps || t[11] !== initialActiveOptionId || t[12] !== renderItem || t[13] !== reorderAnimationsEnabled) {
            P = s.jsx(o("WAWebFlatList.react").FlatList, babelHelpers.extends({
                ref: RRef,
                data,
                renderItem,
                direction: "vertical",
                flatListController: k,
                disablePointerEventsOnScroll: false,
                reorderAnimationsEnabled,
                initialActiveOptionId
            }, flatListProps));
            t[8] = data;
            t[9] = k;
            t[10] = flatListProps;
            t[11] = initialActiveOptionId;
            t[12] = renderItem;
            t[13] = reorderAnimationsEnabled;
            t[14] = P;
        } else {
            P = t[14];
        }
        let N;
        if (t[15] !== flatListControllers || t[16] !== P) {
            const Component = r("WAWebFlatListContainer.react");
            N = <Component flatListControllers={flatListControllers} className={$}>{P}</Component>;
            t[15] = flatListControllers;
            t[16] = P;
            t[17] = N;
        } else {
            N = t[17];
        }
        const Component = o("WAWebMenuController.react").WAWebMenuController;
        const Component_1 = o("WAWebMenuController.react").Register;
        return <Component_1 registerRef={registerRef}><Component data={S} colorScheme={colorScheme} menuControllerRef={menuControllerRef} material={material} onSelect={onSelect} maxHeight={maxHeight} minWidth={minWidth} initialActiveOptionId={initialActiveOptionId} onActiveItemChange={onActiveItemChange} autoScroll={false} size={size} onHotKeysFocus={onHotKeysFocus}>{N}</Component></Component_1>;
    }
    p.displayName = `${p.name} [from ${i.id}]`;
    l.WDSPerformantMenu = p;
}, 98);