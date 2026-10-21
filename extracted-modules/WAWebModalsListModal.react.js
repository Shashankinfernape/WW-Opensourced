__d("WAWebModalsListModal.react", [
    "WALogger",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebFlatList.react",
    "WAWebFlatListController",
    "WAWebFocusTracer",
    "WAWebKeyboardHotKeys.react",
    "WAWebL10NFbtTypeUtils",
    "WAWebModal.react",
    "WDSFlex.stylex",
    "WDSSearchBar.react",
    "react",
    "stylex",
    "useLazyRef"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = [
        "ref"
    ];
    let u;
    let c;
    const d = c || (c = o("react"));
    const m = c;
    const { useEffect, useRef, useState } = m;
    const g = {
        newsletterBackgroundColor: {
            backgroundColor: "x1280gxy",
            $$css: true
        },
        wdsSearchBarContainer: {
            paddingInlineStart: "x1phvje8",
            paddingInlineEnd: "xcldk2z",
            paddingLeft: null,
            paddingRight: null,
            paddingTop: "x16ovd2e",
            paddingBottom: "x12xbjc7",
            $$css: true
        }
    };
    function HComponent(t) {
        const t_ref = t.ref;
        const { data, emptyState, firstRows, isNewsletter = false, lastRow, onBack, onCancel, onSearch, onSelect, renderItem, rotateList = false, scrollToInitialSelection, searchPlaceholder, selection, spinnerInHeader = false, testid, title, tsNavigationData } = babelHelpers.objectWithoutPropertiesLoose(t, s);
        const M = r("useLazyRef")(function() {
            return new (r("WAWebFlatListController"));
        });
        const wRef = useRef();
        const ARef = useRef(null);
        const F = useState("");
        const O = F[0];
        const B = F[1];
        const W = ()=>{
            if (wRef.current) {
                const t = selection?.value;
                if (t == null || typeof t !== "object") {
                    return;
                }
                const n = t.itemKey;
                if (n == null) {
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "ListModalImpl: scrollToInitialSelection missing itemKey"
                    ]))).sendLogs("ListModalImpl-missing-itemKey");
                    return;
                }
                const r = data.findIndex((e)=>e.itemKey === n);
                if (r !== -1) {
                    wRef?.current?.scrollIntoViewIfNeeded(r, 100);
                }
            }
        };
        useEffect(function() {
            if (scrollToInitialSelection === true) {
                W();
            }
        }, []);
        const down = function(t) {
            t.preventDefault();
            t.stopPropagation();
            if (selection) {
                selection.setNext(true, rotateList);
            }
        };
        const up = function(t) {
            if (selection) {
                t.preventDefault();
                t.stopPropagation();
                const e = selection.prev(rotateList);
                if (e > -1) {
                    selection.setPrev(true, rotateList);
                } else if (ARef.current) {
                    selection.unset();
                    r("WAWebFocusTracer").focus(ARef.current);
                }
            }
        };
        const V = (t)=>{
            t?.preventDefault();
            t?.stopPropagation();
            const e = data[0];
            if (e) {
                if (onSelect != null) {
                    onSelect(t, e);
                }
            }
        };
        const H = function() {
            V();
        };
        const G = (t)=>{
            const t_relatedTarget = t.relatedTarget;
            return t_relatedTarget instanceof HTMLElement && t.currentTarget instanceof HTMLElement && !t.currentTarget.contains(t_relatedTarget);
        };
        const z = function(t) {
            if (G(t)) {
                if (selection != null) {
                    selection.setFirst(true);
                }
            }
        };
        const j = function(t) {
            if (G(t)) {
                if (selection != null) {
                    selection.unset();
                }
            }
        };
        const K = {
            down,
            up
        };
        let Q;
        if (onSearch) {
            const Component = r("WDSSearchBar.react");
            Q = <div {...babelHelpers.extends({}, (u || (u = r("stylex"))).props(o("WDSFlex.stylex").wdsFlex.flexGrow0, g.wdsSearchBarContainer), {
                children: <Component hintText={searchPlaceholder ?? ""} onValueChange={function(t) {
                    B(t);
                    onSearch?.(t);
                }} onEnter={H} value={O} testid="list_modal_search_bar"/>
            })}/>;
        }
        const Component = o("WAWebFlatList.react").FlatList;
        const Component_1 = o("WAWebKeyboardHotKeys.react").HotKeys;
        const X = data.length ? <Component_1 handlers={K} onFocus={z} onBlur={j} tabIndex={0}><Component data={data} ref={wRef} flatListController={M.current} direction="vertical" renderItem={renderItem}/></Component_1> : emptyState;
        const Y = o("WAWebL10NFbtTypeUtils").isStringOrFbt(title) ? title : undefined;
        const Component_2 = o("WAWebDrawerHeader.react").DrawerHeader;
        const Component_3 = r("WAWebDrawerBody.react");
        const Component_4 = r("WAWebDrawer.react");
        const Component_5 = o("WAWebModal.react").Modal;
        return <Component_5 ariaLabel={Y} type={o("WAWebModal.react").ModalTheme.Tower} ref={t_ref} tsNavigationData={tsNavigationData}><Component_4 key="contact-modal" testid={testid} xstyle={isNewsletter ? g.newsletterBackgroundColor : undefined}><Component_2 title={title} type={o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.POPUP} onBack={onBack} onCancel={onCancel} spinner={spinnerInHeader}/>{Q}<Component_3 flatListControllers={[
            M.current
        ]} backgroundColor="default">{firstRows}{X}{lastRow}</Component_3></Component_4></Component_5>;
    }
    HComponent.displayName = `${HComponent.name} [from ${i.id}]`;
    function y() {
        return HComponent;
    }
    l.ListModalFactory = y;
}, 98);