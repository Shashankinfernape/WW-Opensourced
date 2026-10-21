__d("WAWebCommandPaletteInput.react", [
    "LexicalErrorBoundary",
    "LexicalPlainTextPlugin",
    "WAWebCommandPaletteController",
    "WAWebFlex.react",
    "WAWebMultilinePlugin",
    "WAWebRichTextInputContentEditable.react",
    "WDSIconIcSearch.react",
    "WDSSpinner.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = {
        container: {
            height: "xsdox4t",
            boxSizing: "x9f619",
            $$css: true
        },
        relative: {
            position: "x1n2onr6",
            $$css: true
        },
        contentEditable: {
            width: "xh8yej3",
            $$css: true
        },
        marginStart4: {
            marginInlineStart: "x1wbi8v6",
            $$css: true
        }
    };
    function c() {
        const t = o("react-compiler-runtime").c(15);
        const n = o("WAWebCommandPaletteController").useCommandPalette();
        const n_activePlugin = n.activePlugin;
        const i = n_activePlugin?.placeholder ?? "Search chats, messages, settings, and more";
        let l;
        if (t[0] !== n.pluginStack) {
            l = n.pluginStack.length ? <div className="x78zum5 x1q0g3np x6s0dn4">{n.pluginStack.filter(m).map(d)}</div> : null;
            t[0] = n.pluginStack;
            t[1] = l;
        } else {
            l = t[1];
        }
        const c = l;
        let p;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            p = [
                8,
                16
            ];
            t[2] = p;
        } else {
            p = t[2];
        }
        let _;
        if (t[3] !== c) {
            _ = c ?? s.jsx(r("WDSIconIcSearch.react"), {});
            t[3] = c;
            t[4] = _;
        } else {
            _ = t[4];
        }
        let f;
        if (t[5] === Symbol.for("react.memo_cache_sentinel")) {
            f = [
                u.contentEditable,
                u.marginStart4
            ];
            t[5] = f;
        } else {
            f = t[5];
        }
        let g;
        if (t[6] !== i) {
            const Component = o("WAWebFlex.react").FlexRow;
            g = <Component grow={1} xstyle={u.relative} marginStart={8}>{s.jsx(o("LexicalPlainTextPlugin").PlainTextPlugin, {
                contentEditable: s.jsx(o("WAWebRichTextInputContentEditable.react").InputContentEditable, {
                    xstyle: f,
                    focusOnMount: true,
                    placeholder: i
                }),
                ErrorBoundary: o("LexicalErrorBoundary").LexicalErrorBoundary
            })}</Component>;
            t[6] = i;
            t[7] = g;
        } else {
            g = t[7];
        }
        let h;
        if (t[8] !== n.isSearching) {
            h = n.isSearching && s.jsx(r("WDSSpinner.react"), {
                size: 24
            });
            t[8] = n.isSearching;
            t[9] = h;
        } else {
            h = t[9];
        }
        let y;
        if (t[10] === Symbol.for("react.memo_cache_sentinel")) {
            y = s.jsx(o("WAWebMultilinePlugin").MultilinePlugin, {
                multiline: false
            });
            t[10] = y;
        } else {
            y = t[10];
        }
        let C;
        if (t[11] !== _ || t[12] !== g || t[13] !== h) {
            const Component = o("WAWebFlex.react").FlexRow;
            C = <Component align="center" padding={p} xstyle={u.container}>{_}{g}{h}{y}</Component>;
            t[11] = _;
            t[12] = g;
            t[13] = h;
            t[14] = C;
        } else {
            C = t[14];
        }
        return C;
    }
    function d(e) {
        return <div key={e.plugin.id} className="x78zum5 x6s0dn4 x1pse0pq x150mmf0"><div className="x2aouup xlyipyv x6ikm8r x10wlt62 xuxw1ft">{e.plugin.shortName}</div><div className="x78zum5 x1xlr1w8 x12w63v0">/</div></div>;
    }
    d.displayName = `${d.name} [from ${i.id}]`;
    function m(e) {
        return e.plugin.shortName;
    }
    l.default = c;
}, 98);