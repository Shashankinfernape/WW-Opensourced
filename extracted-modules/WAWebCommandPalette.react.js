__d("WAWebCommandPalette.react", [
    "WAWebChatlistPanelFunctional.react",
    "WAWebChatlistPanelMode",
    "WAWebCmd",
    "WAWebCommandPaletteController",
    "WAWebCommandPalettePlugins",
    "WAWebCommandPaletteUtils",
    "WAWebDefaultCommandPalettePlugin",
    "WAWebHelpCommandPalettePlugin",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebSettingsGetters",
    "react",
    "react-compiler-runtime",
    "useWAWebListener",
    "useWAWebSettingsValues"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const e_useEffect = e.useEffect;
    function c() {
        const e = o("WAWebCommandPalettePlugins").getAvailablePlugins();
        const t = o("WAWebHelpCommandPalettePlugin").buildHelpCommand(e);
        return {
            defaultPlugin: o("WAWebDefaultCommandPalettePlugin").DefaultCommandPalettePlugin,
            triggeredPlugins: [].concat(e, [
                t
            ])
        };
    }
    function D2Component(e) {
        const t = o("react-compiler-runtime").c(5);
        const e_plugins = e.plugins;
        let r;
        if (t[0] !== e_plugins) {
            r = e_plugins ?? c();
            t[0] = e_plugins;
            t[1] = r;
        } else {
            r = t[1];
        }
        const a = r;
        const { defaultPlugin, triggeredPlugins } = a;
        let u;
        if (t[2] !== defaultPlugin || t[3] !== triggeredPlugins) {
            const Component = o("WAWebModal.react").Modal;
            u = <Component type={o("WAWebModal.react").ModalTheme.CommandPaletteV2}>{s.jsx(o("WAWebCommandPaletteController").CommandPalette, {
                defaultPlugin,
                triggeredPlugins
            })}</Component>;
            t[2] = defaultPlugin;
            t[3] = triggeredPlugins;
            t[4] = u;
        } else {
            u = t[4];
        }
        return u;
    }
    function MComponent(plugins) {
        o("WAWebModalManager").ModalManager.open(<D2Component plugins={plugins}/>);
    }
    function P1Component() {
        const e = o("react-compiler-runtime").c(3);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = [
                o("WAWebSettingsGetters").getShowArchiveV2
            ];
            e[0] = t;
        } else {
            t = e[0];
        }
        const n = o("useWAWebSettingsValues").useSettingsValues(t);
        const a = n[0];
        let i;
        if (e[1] !== a) {
            const Component = o("WAWebModal.react").Modal;
            i = <Component type={o("WAWebModal.react").ModalTheme.CommandPalette}>{s.jsx(o("WAWebChatlistPanelFunctional.react").ChatlistPanelFunctional, {
                showArchiveV2: a,
                mode: r("WAWebChatlistPanelMode").CommandPalette
            })}</Component>;
            e[1] = a;
            e[2] = i;
        } else {
            i = e[2];
        }
        return i;
    }
    function Component() {
        const e = o("react-compiler-runtime").c(2);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = [];
            e[0] = t;
        } else {
            t = e[0];
        }
        e_useEffect(f, t);
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "close_command_palette", o("WAWebModalManager").closeModalManager);
        let n;
        if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
            n = <P1Component/>;
            e[1] = n;
        } else {
            n = e[1];
        }
        return n;
    }
    function f() {
        o("WAWebCommandPaletteUtils").setIsCommandPaletteOpen(true);
        return g;
    }
    function g() {
        o("WAWebCommandPaletteUtils").setIsCommandPaletteOpen(false);
    }
    l.openCommandPaletteV2Modal = MComponent;
    l.CommandPaletteModal = Component;
}, 98);