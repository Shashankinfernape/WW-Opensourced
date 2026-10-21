__d("WAWebHelpCommandPalettePlugin", [
    "WAWebCommandPaletteController",
    "WAWebDevOnlyBadge.react",
    "WAWebFlex.react",
    "WAWebLexicalWAWebMenu.react",
    "WAWebMenuItems.react",
    "WAWebToArray",
    "compactMap",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = {
        trigger: {
            backgroundColor: "xyp3urf",
            color: "x14ug900",
            borderStartStartRadius: "xyi3aci",
            borderStartEndRadius: "xwf5gio",
            borderEndEndRadius: "x1p453bz",
            borderEndStartRadius: "x1suzm8a",
            $$css: true
        }
    };
    function C1Component(e) {
        const t = o("react-compiler-runtime").c(4);
        const e_trigger = e.trigger;
        let r;
        if (t[0] !== e_trigger) {
            r = o("WAWebToArray").toArray(e_trigger);
            t[0] = e_trigger;
            t[1] = r;
        } else {
            r = t[1];
        }
        const a = r;
        let i;
        if (t[2] !== a[0]) {
            const Component = o("WAWebFlex.react").FlexRow;
            i = <Component justify="center" align="center" padding={8} xstyle={u.trigger}>{a[0]}</Component>;
            t[2] = a[0];
            t[3] = i;
        } else {
            i = t[3];
        }
        return i;
    }
    function D1Component(e) {
        const t = o("react-compiler-runtime").c(7);
        const e_triggeredCommands = e.triggeredCommands;
        const a = o("WAWebCommandPaletteController").useCommandPalette();
        let i;
        if (t[0] !== a) {
            i = function(t) {
                if (t.doc != null) {
                    const Component = o("WAWebMenuItems.react").ActionMenuItem;
                    return <Component key={t.plugin.id} optionId={t.plugin.id} detailRight=<C1Component trigger={t.trigger}/> primary={t.doc.isDevOnly === true ? s.jsx(o("WAWebDevOnlyBadge.react").DevOnlyBadge, {
                        label: t.doc.name
                    }) : t.doc.name} secondary={t.doc.description} onSelect={function() {
                        return a.replaceStack(t.plugin);
                    }}/>;
                }
                return null;
            };
            t[0] = a;
            t[1] = i;
        } else {
            i = t[1];
        }
        let l;
        if (t[2] !== i || t[3] !== e_triggeredCommands) {
            l = r("compactMap")(e_triggeredCommands, i);
            t[2] = i;
            t[3] = e_triggeredCommands;
            t[4] = l;
        } else {
            l = t[4];
        }
        let u;
        if (t[5] !== l) {
            const Component = o("WAWebLexicalWAWebMenu.react").LexicalWAWebMenu;
            u = <Component>{l}</Component>;
            t[5] = l;
            t[6] = u;
        } else {
            u = t[6];
        }
        return u;
    }
    function m(triggeredCommands) {
        return {
            plugin: {
                id: "HelpCommandPalettePlugin",
                placeholder: "Search extra command palette functionality",
                shortName: "?",
                Component: function() {
                    return <D1Component triggeredCommands={triggeredCommands}/>;
                }
            },
            trigger: [
                "/?",
                "/help"
            ],
            doc: {
                name: "Help",
                description: "Discover all of the things the Command Palette can do"
            }
        };
    }
    l.buildHelpCommand = m;
}, 98);