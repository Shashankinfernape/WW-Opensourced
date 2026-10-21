__d("WAWebBizMultiSelectProductList.react", [
    "WAFilteredCatch",
    "WAPromiseRaceAbort",
    "WAWebBackendErrors",
    "WAWebCatalogCollection",
    "WAWebCatalogLoadErrorLoadable",
    "WAWebEmptyState.react",
    "WAWebFlatList.react",
    "WAWebFlatListLoadingSpinnerItem.react",
    "WAWebFocusTracer",
    "WAWebFrontendConstants",
    "WAWebMultiSelectListHotKeys.react",
    "WAWebProductCatalogCatalogConstants",
    "WAWebProductCatalogSelectableProductItem.react",
    "WAWebSelfCatalogLookup",
    "WAWebUserPrefsMeUser",
    "WAWebUtilsLogQplEvents",
    "react",
    "useWAWebCatalogRecovery",
    "useWAWebUnmountSignal"
], function(t, n, r, o, a, i, l) {
    const e = [
        "ref"
    ];
    let s;
    const u = s || (s = o("react"));
    const c = s;
    const { useEffect, useImperativeHandle, useRef, useState } = c;
    function f(t) {
        const t_ref = t.ref;
        const a = babelHelpers.objectWithoutPropertiesLoose(t, e);
        const { active, flatListController, onProductsLoaded, onSelectionChanged, selections } = a;
        const g = r("useWAWebUnmountSignal")();
        const hRef = useRef(null);
        const yRef = useRef(null);
        const C = ()=>o("WAWebSelfCatalogLookup").getSelfCatalog();
        const b = function() {
            const e = C();
            if (e != null) {
                return e.productCollection.getProductModels();
            }
            return [];
        };
        const v = o("useWAWebCatalogRecovery").useCatalogRecovery();
        const S = useState(b);
        const R = S[0];
        const L = S[1];
        const E = useState(false);
        const k = E[0];
        const I = E[1];
        const T = useState(function() {
            return b().length;
        });
        const D = T[0];
        const x = T[1];
        const $ = useState(true);
        const P = $[0];
        const N = $[1];
        const M = useState({
            catalogExists: true,
            catalogLoadError: false
        });
        const w = M[0];
        const A = M[1];
        const F = (t = false)=>{
            const e = C();
            if (e) {
                const n = !e.afterCursor || !P;
                if (t) {
                    o("WAWebUtilsLogQplEvents").qplAnnotateCatalogView(n);
                }
                if (n) {
                    const a = e.productCollection.getProductModels();
                    L(a);
                    I(false);
                    N(false);
                    if (onProductsLoaded) {
                        onProductsLoaded(a);
                    }
                    if (t) {
                        o("WAWebUtilsLogQplEvents").qplEndCatalogView(2);
                    }
                } else {
                    I(true);
                    r("WAPromiseRaceAbort")(o("WAWebCatalogCollection").CatalogCollection.findNextProductPage(e.id, t), g).then((e)=>{
                        const e_length = e.length;
                        L(e);
                        I(false);
                        x(e_length);
                        N(D !== e_length);
                        if (onProductsLoaded) {
                            onProductsLoaded(e);
                        }
                        active.init(e);
                        if (t) {
                            o("WAWebUtilsLogQplEvents").qplEndCatalogView(2);
                        }
                    }).catch(()=>{
                        I(false);
                        N(true);
                        if (t) {
                            o("WAWebUtilsLogQplEvents").qplEndCatalogView(3);
                        }
                    });
                }
            }
        };
        const O = ()=>{
            const e = o("WAWebUserPrefsMeUser").getMeUserOrThrow();
            I(true);
            o("WAWebCatalogCollection").CatalogCollection.find(e).catch(o("WAFilteredCatch").filteredCatch(o("WAWebBackendErrors").ServerStatusCodeError, function(e) {
                if (e.status === "not_found" || e.status === 404) {
                    A({
                        catalogExists: false,
                        catalogLoadError: true
                    });
                } else {
                    A({
                        catalogExists: true,
                        catalogLoadError: true
                    });
                }
                I(false);
                N(false);
                o("WAWebUtilsLogQplEvents").qplDropCatalogView();
            })).catch(o("WAFilteredCatch").filteredCatch(o("WAWebBackendErrors").CatalogUnknownError, function(e) {
                I(false);
                N(false);
                o("WAWebUtilsLogQplEvents").qplDropCatalogView();
            })).catch(o("WAFilteredCatch").filteredCatch(o("WAWebBackendErrors").AdAccountRecoveryRequiredError, function() {
                I(false);
                N(false);
                o("WAWebUtilsLogQplEvents").qplDropCatalogView();
            })).then(()=>F(true));
        };
        useEffect(function() {
            active.init(R);
            O();
        }, []);
        const updateForScrollEvent = function({ currentTarget }) {
            const { clientHeight, scrollHeight, scrollTop } = currentTarget;
            const i = scrollHeight - clientHeight - scrollTop;
            const l = i < o("WAWebFrontendConstants").SCROLL_FUDGE;
            if (l && !k) {
                F();
            }
        };
        const W = (t, n, r)=>{
            selections.setVal(t, n, r);
            active.setVal(t, r);
            if (onSelectionChanged) {
                onSelectionChanged(t, n);
            }
        };
        const q = (t)=>{
            const e = selections.isSelected(t);
            W(t, !e, false);
        };
        const U = function(t) {
            t.stopPropagation();
            t.preventDefault();
            if (active.value) {
                q(active.value);
            }
        };
        const V = function(t) {
            yRef.current?.scrollIntoViewIfNeeded(t);
        };
        const H = function(t) {
            if (R.length !== 0) {
                const e = R[0];
                const n = !selections.isSelected(e);
                W(e, n, t);
            }
        };
        const G = function() {
            if (hRef.current) {
                r("WAWebFocusTracer").focus(hRef.current);
            }
        };
        useImperativeHandle(t_ref, function() {
            return {
                focus: G,
                toggleFirst: H,
                updateForScrollEvent
            };
        });
        const Component = o("WAWebFlatList.react").FlatList;
        let z = <Component ref={yRef} direction="vertical" forceConsistentRenderCount={false} data={R.map((e)=>({
                data: e,
                itemKey: e.id.toString()
            }))} renderItem={function({ data }) {
            const Component = r("WAWebProductCatalogSelectableProductItem.react");
            return <Component key={data.id.toString()} product={data} selections={selections} onClick={function() {
                return q(data);
            }} active={active}/>;
        }} flatListController={flatListController} defaultItemHeight={o("WAWebProductCatalogCatalogConstants").PRODUCT_LIST_ITEM_HEIGHT}/>;
        if (R.length === 0 && !k && !P) {
            if (v) {
                z = u.jsx(o("WAWebCatalogLoadErrorLoadable").CatalogLoadErrorLoadable, {
                    ctaDisplayType: o("WAWebCatalogLoadErrorLoadable").CTADisplayType.BUTTON
                });
            } else {
                z = u.jsx(o("WAWebEmptyState.react").ListProducts, {
                    hasCatalog: w?.catalogExists,
                    catalogLoadError: w.catalogLoadError
                });
            }
        }
        const Component_1 = r("WAWebMultiSelectListHotKeys.react");
        return <Component_1 active={a.active} onEnter={U} onLeave={a.onLeaveList} ref={hRef} onIndexChange={V}>{z}{k && u.jsx(r("WAWebFlatListLoadingSpinnerItem.react"), {})}</Component_1>;
    }
    f.displayName = `${f.name} [from ${i.id}]`;
    l.default = f;
}, 98);