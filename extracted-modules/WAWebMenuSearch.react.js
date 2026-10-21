__d("WAWebMenuSearch.react", [
    "WAWebFlex.react",
    "WAWebMenuController.react",
    "WAWebSearchInput",
    "WAWebSearchUtils",
    "WAWebSimpleSearch",
    "asyncToGeneratorRuntime",
    "compactMap",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        const t = o("react-compiler-runtime").c(8);
        const e_focusOnMount = e.focusOnMount;
        const i = e_focusOnMount === undefined ? true : e_focusOnMount;
        const l = o("WAWebMenuController.react").useMenu();
        const u = m;
        let p;
        if (t[0] !== l) {
            p = (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                    const l_items = l.items;
                    if (e === "") {
                        return l.filterItems(null);
                    }
                    const n = Array.from(l_items.values());
                    const a = r("compactMap")(n, d);
                    const results = o("WAWebSearchUtils").filterPaginate(a, function(t) {
                        return o("WAWebSimpleSearch").simpleSearch(e, [
                            t.searchCriteria
                        ]);
                    }, {
                        pageLength: a.length
                    }).results;
                    yield l.filterItems(results.map(c));
                });
                return function(n) {
                    return e.apply(this, arguments);
                };
            })();
            t[0] = l;
            t[1] = p;
        } else {
            p = t[1];
        }
        const _ = p;
        let f;
        if (t[2] !== l) {
            f = function() {
                if (l.activeItemId != null) {
                    l.selectItem(l.activeItemId);
                }
            };
            t[2] = l;
            t[3] = f;
        } else {
            f = t[3];
        }
        const g = f;
        let h;
        if (t[4] !== i || t[5] !== g || t[6] !== _) {
            const Component = o("WAWebSearchInput").SearchInput;
            const Component_1 = o("WAWebFlex.react").FlexRow;
            h = <Component_1 shrink={0}><Component focusOnMount={i} colorScheme="darker" onEnter={g} onClick={u} onFocus={u} onBlur={u} onSearch={_} placeholder=""/></Component_1>;
            t[4] = i;
            t[5] = g;
            t[6] = _;
            t[7] = h;
        } else {
            h = t[7];
        }
        return h;
    }
    function c(e) {
        return e.id;
    }
    function d(e) {
        return e.current;
    }
    function m(e) {
        e.stopPropagation();
        e.preventDefault();
    }
    l.MenuSearchInput = u;
}, 98);