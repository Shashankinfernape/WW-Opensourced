__d("WAWebListSuggestionsPanel.react", [
    "Lexical",
    "WAWebFlatList.react",
    "WAWebFlatListContainer.react",
    "WAWebFlatListController",
    "WAWebSingleSelection",
    "WAWebStopEvent",
    "WAWebSuggestionsPanelContainer.react",
    "WAWebUnstyledButton.react",
    "react",
    "react-compiler-runtime",
    "useLazyRef",
    "useWAWebActiveSelection",
    "useWAWebLexicalEvent"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = e;
    const { useEffect, useRef } = u;
    const m = {
        itemWrapper: {
            width: "xh8yej3",
            $$css: true
        }
    };
    function p(e) {
        return !!(e && (e.metaKey || e.shiftKey || e.altKey || e.ctrlKey));
    }
    function _(e) {
        const t = o("react-compiler-runtime").c(20);
        const { active, item, onSelect, renderItem } = e;
        const u = r("useWAWebActiveSelection")(active, item.itemKey);
        const c = u[1];
        if (item.selectable === false) {
            let d;
            if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
                d = {
                    className: "xh8yej3"
                };
                t[0] = d;
            } else {
                d = t[0];
            }
            let p;
            if (t[1] !== item || t[2] !== renderItem) {
                p = renderItem(item, false);
                t[1] = item;
                t[2] = renderItem;
                t[3] = p;
            } else {
                p = t[3];
            }
            let _;
            if (t[4] !== p) {
                _ = <div {...babelHelpers.extends({}, d, {
                    children: p
                })}/>;
                t[4] = p;
                t[5] = _;
            } else {
                _ = t[5];
            }
            return _;
        }
        let f;
        if (t[6] !== item || t[7] !== onSelect) {
            f = function() {
                onSelect(item);
            };
            t[6] = item;
            t[7] = onSelect;
            t[8] = f;
        } else {
            f = t[8];
        }
        const g = f;
        let h;
        if (t[9] !== active || t[10] !== item.index) {
            h = function() {
                active.setVal(active.list[item.index]);
            };
            t[9] = active;
            t[10] = item.index;
            t[11] = h;
        } else {
            h = t[11];
        }
        const y = h;
        let C;
        if (t[12] !== c || t[13] !== item || t[14] !== renderItem) {
            C = renderItem(item, c);
            t[12] = c;
            t[13] = item;
            t[14] = renderItem;
            t[15] = C;
        } else {
            C = t[15];
        }
        let b;
        if (t[16] !== g || t[17] !== y || t[18] !== C) {
            const Component = r("WAWebUnstyledButton.react");
            b = <Component onClick={g} xstyle={m.itemWrapper} onMouseEnter={y} onMouseDown={o("WAWebStopEvent").preventDefault}>{C}</Component>;
            t[16] = g;
            t[17] = y;
            t[18] = C;
            t[19] = b;
        } else {
            b = t[19];
        }
        return b;
    }
    function f({ editor, items, kind, onDismiss, onHide, onSelect, renderItem }) {
        let t;
        let n;
        const h = r("useLazyRef")(function() {
            return new (r("WAWebFlatListController"));
        });
        const yRef = useRef();
        const C = r("useLazyRef")(function() {
            return new (r("WAWebSingleSelection"))([], function(e) {
                return e.itemKey;
            });
        });
        (t = o("useWAWebLexicalEvent")).useLexicalCommandListener(editor, (n = o("Lexical")).KEY_ARROW_UP_COMMAND, function(e) {
            if (p(e) || !(items != null && items.length)) {
                return false;
            }
            for(var t = C.current.prev(); t >= 0;){
                const n = C.current.list[t];
                if (n.selectable !== false) {
                    break;
                }
                t -= 1;
            }
            const r = C.current.list[t];
            if (r != null) {
                C.current.setVal(r);
                yRef.current?.scrollIntoViewIfNeeded(r.index);
            }
            return true;
        });
        t.useLexicalCommandListener(editor, n.KEY_ARROW_DOWN_COMMAND, function(e) {
            if (p(e) || !(items != null && items.length)) {
                return false;
            }
            for(var t = C.current.next(); t < C.current.list.length;){
                const n = C.current.list[t];
                if (n.selectable !== false) {
                    break;
                }
                t += 1;
            }
            const r = C.current.list[t];
            if (r != null) {
                C.current.setVal(r);
                yRef.current?.scrollIntoViewIfNeeded(r.index);
            }
            return true;
        });
        const b = function(t) {
            if (p(t) || !(items != null && items.length)) {
                return false;
            }
            const n = C.current.getVal() ?? C.current.list.find((e)=>e?.selectable !== false);
            if (n) {
                onSelect(n);
            }
            return true;
        };
        useEffect(function() {
            if (items != null && items.length) {
                C.current.init(items);
                const e = items.find((e)=>e.selectable === true);
                if (e != null) {
                    C.current.setVal(e);
                }
            }
        }, [
            items,
            C
        ]);
        t.useLexicalCommandListener(editor, n.KEY_ENTER_COMMAND, b);
        t.useLexicalCommandListener(editor, n.KEY_TAB_COMMAND, b);
        let v = null;
        if (items != null && items.length) {
            const Component = o("WAWebFlatList.react").FlatList;
            const Component_1 = r("WAWebFlatListContainer.react");
            v = <Component_1 className="x1n2onr6 xtxj1az xw2csxc x1odjw0f" flatListControllers={[
                h.current
            ]}><Component ref={yRef} data={items} flatListController={h.current} direction="vertical" renderItem={function(item) {
                return <_ item={item} renderItem={renderItem} onSelect={onSelect} active={C.current}/>;
            }}/></Component_1>;
        }
        const Component = o("WAWebSuggestionsPanelContainer.react").SuggestionsPanelContainer;
        return <Component editor={editor} onDismiss={onDismiss} onHide={onHide} kind={kind}>{v}</Component>;
    }
    f.displayName = `${f.name} [from ${i.id}]`;
    l.default = f;
}, 98);