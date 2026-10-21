__d("WAWebCommandPaletteController", [
    "Lexical",
    "LexicalComposerContext",
    "LexicalExtensionComposer",
    "WAWebCommandPaletteInput.react",
    "WAWebFlex.react",
    "WAWebLexicalUtils",
    "WAWebModalManager",
    "WAWebNoop",
    "WAWebToArray",
    "err",
    "react",
    "react-compiler-runtime",
    "useWAWebLexicalEvent",
    "useWAWebLexicalOnContentChange"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = e;
    const { createContext, useCallback, useContext, useEffect, useMemo, useState, useTransition } = u;
    const h = {
        container: {
            borderStartStartRadius: "x6nvzda",
            borderStartEndRadius: "x4i4b9w",
            borderEndEndRadius: "xhl9efl",
            borderEndStartRadius: "xj65ea0",
            backgroundColor: "x16w0wmm",
            color: "x14ug900",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            $$css: true
        },
        pluginContainer: {
            maxHeight: "x12f24lm",
            $$css: true
        }
    };
    const YContext = createContext(null);
    function C() {
        const e = useContext(YContext);
        if (e == null) {
            throw r("err")("useCommandPalette must be used inside of a CommandPaletteContext");
        }
        return e;
    }
    function B8Component({ children, defaultPlugin, triggeredPlugins }) {
        const a = useState([]);
        const pluginStack = a[0];
        const l = a[1];
        const u = useState("");
        const c = u[0];
        const m = u[1];
        const h = o("LexicalComposerContext").useLexicalComposerContext();
        const C = h[0];
        const b = useTransition();
        const v = b[0];
        const S = b[1];
        const R = pluginStack[pluginStack.length - 1];
        const L = useCallback(function(e) {
            o("WAWebLexicalUtils").setTextContent(C, e);
            m(e);
        }, [
            C
        ]);
        const pushPlugin = useCallback(function(e, t) {
            const r = t?.input ?? "";
            L(r);
            l([].concat(pluginStack, [
                {
                    plugin: e,
                    input: r
                }
            ]));
        }, [
            L,
            pluginStack
        ]);
        const popPlugin = useCallback(function(e) {
            const t = pluginStack.slice(0, pluginStack.length - 1);
            const n = t[t.length - 1];
            let r = "";
            if (n != null) {
                if (e?.input != null) {
                    r = e.input;
                } else if (n.plugin.restoreInputOnBack === true) {
                    r = n.input;
                }
            }
            L(r);
            l(t);
        }, [
            L,
            pluginStack
        ]);
        const clearStack = function() {
            return l([]);
        };
        const replaceStack = useCallback(function(e, t) {
            const r = t?.input ?? "";
            L(r);
            l([
                {
                    plugin: e,
                    input: r
                }
            ]);
        }, [
            L,
            l
        ]);
        useEffect(function() {
            if (pluginStack.length === 0) {
                const e = triggeredPlugins?.find(function(e) {
                    const t = o("WAWebToArray").toArray(e.trigger);
                    if (t.includes(c)) {
                        return e;
                    }
                });
                if (e != null) {
                    pushPlugin(e.plugin);
                }
            }
        }, [
            c
        ]);
        o("useWAWebLexicalEvent").useLexicalCommandListener(C, o("Lexical").KEY_BACKSPACE_COMMAND, function(e) {
            if (c === "") {
                e.preventDefault();
                popPlugin();
            }
            return false;
        });
        o("useWAWebLexicalOnContentChange").useLexicalOnContentChange(function(e) {
            if (R != null) {
                R.input = e;
            }
            S(function() {
                m(e);
            });
        });
        const D = useMemo(function() {
            return {
                input: c,
                pushPlugin,
                popPlugin,
                clearStack,
                replaceStack,
                closeModal: o("WAWebModalManager").closeModalManager,
                activePlugin: R?.plugin ?? defaultPlugin,
                pluginStack,
                pluginList: triggeredPlugins,
                isSearching: v
            };
        }, [
            R?.plugin,
            defaultPlugin,
            c,
            v,
            popPlugin,
            pushPlugin,
            replaceStack,
            pluginStack,
            triggeredPlugins
        ]);
        return <YContext.Provider value={D}>{children}</YContext.Provider>;
    }
    B8Component.displayName = `${B8Component.name} [from ${i.id}]`;
    function V6Component() {
        const e = o("react-compiler-runtime").c(2);
        const t = C();
        const t_activePlugin = t.activePlugin;
        let r;
        if (e[0] !== t_activePlugin) {
            const Component = o("WAWebFlex.react").FlexColumn;
            r = t_activePlugin != null ? <Component align="stretch" xstyle={h.pluginContainer}><t_activePlugin.Component/></Component> : null;
            e[0] = t_activePlugin;
            e[1] = r;
        } else {
            r = e[1];
        }
        return r;
    }
    function S(e) {
        const t = o("react-compiler-runtime").c(8);
        const { defaultPlugin, triggeredPlugins } = e;
        const i = useState(R);
        const l = i[0];
        let u;
        let c;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            u = s.jsx(r("WAWebCommandPaletteInput.react"), {});
            c = <V6Component/>;
            t[0] = u;
            t[1] = c;
        } else {
            u = t[0];
            c = t[1];
        }
        let d;
        if (t[2] !== defaultPlugin || t[3] !== triggeredPlugins) {
            d = <B8Component defaultPlugin={defaultPlugin} triggeredPlugins={triggeredPlugins}>{u}{c}</B8Component>;
            t[2] = defaultPlugin;
            t[3] = triggeredPlugins;
            t[4] = d;
        } else {
            d = t[4];
        }
        let m;
        if (t[5] !== l || t[6] !== d) {
            const Component = o("LexicalExtensionComposer").LexicalExtensionComposer;
            const Component_1 = o("WAWebFlex.react").FlexColumn;
            m = <Component_1 align="stretch" xstyle={h.container}><Component contentEditable={null} extension={l}>{d}</Component></Component_1>;
            t[5] = l;
            t[6] = d;
            t[7] = m;
        } else {
            m = t[7];
        }
        return m;
    }
    function R() {
        return o("Lexical").defineExtension({
            name: "[root]",
            namespace: "CommandPaletteInput",
            onError: r("WAWebNoop")
        });
    }
    l.useCommandPalette = C;
    l.CommandPalette = S;
}, 98);