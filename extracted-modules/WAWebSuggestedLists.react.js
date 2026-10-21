__d("WAWebSuggestedLists.react", [
    "fbt",
    "WAWebCellFrame.react",
    "WAWebCheckBox.react",
    "WAWebDrawerSection.react",
    "WAWebFlex.react",
    "WAWebListIcon.react",
    "WAWebListUtils",
    "WAWebNoop",
    "WAWebSuggestedListsUtils",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = {
        sectionHeader: {
            height: "x1gnnpzl",
            paddingTop: "x9orja2",
            paddingBottom: "x18d9i69",
            $$css: true
        },
        noShrink: {
            flexShrink: "x2lah0s",
            $$css: true
        }
    };
    function DComponent(e) {
        const t = o("react-compiler-runtime").c(11);
        const { filterText, onSelect, selectedSuggestionIds, suggestedListTheme } = e;
        let d;
        let m;
        if (t[0] !== filterText || t[1] !== onSelect || t[2] !== selectedSuggestionIds || t[3] !== suggestedListTheme) {
            m = Symbol.for("react.early_return_sentinel");
            e: {
                const p = o("WAWebSuggestedListsUtils").getSuggestedLists(filterText ?? "");
                if (p.length === 0) {
                    m = null;
                    break e;
                }
                let _;
                if (t[6] === Symbol.for("react.memo_cache_sentinel")) {
                    _ = u.jsx(r("WAWebDrawerSection.react"), {
                        title: s._("Suggestions"),
                        theme: "list-section",
                        animation: false,
                        xstyle: c.noShrink,
                        titleXStyle: c.sectionHeader,
                        testid: "suggested-lists-section"
                    });
                    t[6] = _;
                } else {
                    _ = t[6];
                }
                let f;
                if (t[7] !== onSelect || t[8] !== selectedSuggestionIds || t[9] !== suggestedListTheme) {
                    f = function(t) {
                        const s = selectedSuggestionIds?.has(t.predefinedId) ?? false;
                        const d = t.displayName ?? t.name;
                        const m = u.jsx(r("WAWebCellFrame.react"), {
                            theme: "lists-assign-modal",
                            customImage: true,
                            image: <div className="x78zum5 x1okw0bk x6s0dn4 x13jy36j xsfy40s"><div className="x78zum5 xl56j7k x6s0dn4 xvy4d1p xxk0z11">{u.jsx(r("WAWebListIcon.react"), {
                                color: o("WAWebListUtils").colorIndexToHex(t.colorIndex)
                            })}</div></div>,
                            primary: d
                        });
                        const Component = o("WAWebCheckBox.react").CheckBox;
                        const Component_1 = r("WAWebCellFrame.react");
                        const p = suggestedListTheme === "list-assign-modal" ? <div role="checkbox" aria-checked={s} tabIndex={0} className="xh8yej3 x1ypdohk x6ikm8r x10wlt62 x78zum5 xdt5ytf xl56j7k xnnlda6" onClick={function() {
                            return onSelect(t);
                        }} onKeyDown={function(n) {
                            if (n.key === "Enter" || n.key === " ") {
                                n.preventDefault();
                                onSelect(t);
                            }
                        }}><div className="x1n2onr6">{m}<div aria-hidden="true" className="x10l6tqk xdg88n9 xlgexem x78zum5 x6s0dn4 x5yr21d x13vifvy"><Component checked={s} onChange={r("WAWebNoop")}/></div></div></div> : suggestedListTheme === "list-assign-inline-edit" ? <div role="button" tabIndex={0} className="xh8yej3 x1ypdohk x6ikm8r x10wlt62 x78zum5 xdt5ytf xl56j7k xnnlda6" onClick={function() {
                            return onSelect(t);
                        }} onKeyDown={function(n) {
                            if (n.key === "Enter" || n.key === " ") {
                                onSelect(t);
                            }
                        }}>{m}</div> : suggestedListTheme === "list-creation-drawer" ? <div role="button" tabIndex={0} className="xh8yej3 x1ypdohk xsdox4t x6ikm8r x10wlt62 x78zum5 xdt5ytf xl56j7k" onKeyDown={function(n) {
                            if (n.key === "Enter" || n.key === " ") {
                                n.preventDefault();
                                onSelect(t);
                            }
                        }}><Component_1 theme="label-selection-new-label" onClick={function() {
                            return onSelect(t);
                        }} image=<div className="x78zum5 x6s0dn4 xl56j7k">{u.jsx(r("WAWebListIcon.react"), {
                            color: o("WAWebListUtils").colorIndexToHex(t.colorIndex),
                            size: 16
                        })}</div> primary={d}/></div> : (()=>{
                            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${suggestedListTheme}`);
                        })();
                        const Component_2 = o("WAWebFlex.react").FlexRow;
                        return <Component_2 key={t.predefinedId} align="center" xstyle={c.noShrink}>{p}</Component_2>;
                    };
                    t[7] = onSelect;
                    t[8] = selectedSuggestionIds;
                    t[9] = suggestedListTheme;
                    t[10] = f;
                } else {
                    f = t[10];
                }
                d = <>{_}{p.map(f)}</>;
            }
            t[0] = filterText;
            t[1] = onSelect;
            t[2] = selectedSuggestionIds;
            t[3] = suggestedListTheme;
            t[4] = d;
            t[5] = m;
        } else {
            d = t[4];
            m = t[5];
        }
        if (m !== Symbol.for("react.early_return_sentinel")) {
            return m;
        }
        return d;
    }
    l.default = DComponent;
}, 226);