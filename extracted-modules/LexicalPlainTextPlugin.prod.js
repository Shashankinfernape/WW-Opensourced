__d("LexicalPlainTextPlugin.prod", [
    "Lexical",
    "LexicalComposerContext",
    "LexicalDragon",
    "LexicalExtensionLexicalBuilder",
    "LexicalPlainText",
    "LexicalReactProviderExtension",
    "LexicalText",
    "ReactDOM",
    "react",
    "useLexicalEditable"
], function $module_LexicalPlainTextPlugin_prod(global, require, requireDynamic, requireLazy, module, exports) {
    "use strict";
    let _require_closure_react;
    const o = _require_closure_react || (_require_closure_react = require("react"));
    const s = _require_closure_react;
    function x(e, ...r_1) {
        throw ((e, ...r)=>{
            const n = new URL("https://lexical.dev/docs/error");
            const t = new URLSearchParams();
            t.append("code", e);
            for (const _e of r){
                t.append("v", _e);
            }
            n.search = t.toString();
            return new Error(`Minified Lexical error #${e}; visit ${n.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
        })(...[
            e
        ].concat(Array.from(r_1)));
    }
    function D8({ editor, ErrorBoundary }) {
        return ((editor_1, ErrorBoundary_1)=>{
            const _o$useMemo = o.useMemo(function() {
                return [
                    function(r) {
                        return editor_1.registerDecoratorListener(r);
                    },
                    function() {
                        return editor_1.getDecorators();
                    }
                ];
            }, [
                editor_1
            ]);
            const n = _o$useMemo[0];
            const t = _o$useMemo[1];
            const c = o.useSyncExternalStore(n, t, t);
            const u = ((editor_1_1)=>{
                const _o$useMemo2 = o.useMemo(function() {
                    return [
                        editor_1_1.registerRootListener.bind(editor_1_1),
                        editor_1_1.getRootElement.bind(editor_1_1)
                    ];
                }, [
                    editor_1_1
                ]);
                const r = _o$useMemo2[0];
                const n = _o$useMemo2[1];
                return o.useSyncExternalStore(r, n, n);
            })(editor_1);
            return o.useMemo(function() {
                const n = function n(r) {
                    return editor_1._onError(r);
                };
                const t = [];
                for(const _u in c){
                    const _a = editor_1.getElementByKey(_u);
                    if (_a !== null) {
                        const _e2 = <ErrorBoundary_1 onError={n}><o.Suspense fallback={null}>{c[_u]}</o.Suspense></ErrorBoundary_1>;
                        t.push(require("ReactDOM").createPortal(_e2, _a, _u));
                    }
                }
                return t;
            }, [
                ErrorBoundary_1,
                c,
                editor_1,
                u
            ]);
        })(editor, ErrorBoundary);
    }
    function F5Component({ editor, ErrorBoundary }) {
        if (((editor_1)=>{
            const r = require("LexicalExtensionLexicalBuilder").LexicalBuilder.maybeFromEditor(editor_1);
            if (r && r.hasExtensionByName(require("LexicalReactProviderExtension").ReactProviderExtension.name)) {
                for (const _e3 of [
                    "LexicalPlainText",
                    "LexicalRichText"
                ]){
                    if (r.hasExtensionByName(_e3)) {
                        x(320, _e3);
                    }
                }
                return true;
            }
            return false;
        })(editor)) {
            return null;
        }
        return <D8 editor={editor} ErrorBoundary={ErrorBoundary}/>;
    }
    const E = require("Lexical").CAN_USE_DOM ? o.useLayoutEffect : o.useEffect;
    function L(e) {
        return e.read("latest", require("LexicalText").$canShowPlaceholderCurry(e.isComposing()));
    }
    function G6({ content }) {
        const _e$useLexicalComposer = require("LexicalComposerContext").useLexicalComposerContext();
        const t = _e$useLexicalComposer[0];
        const i = ((e)=>{
            const [r, setR] = o.useState(function() {
                return L(e);
            });
            E(function() {
                function r() {
                    const r = L(e);
                    setR(r);
                }
                r();
                return require("Lexical").mergeRegister(e.registerUpdateListener(function() {
                    r();
                }), e.registerEditableListener(function() {
                    r();
                }));
            }, [
                e
            ]);
            return r;
        })(t);
        const s = require("useLexicalEditable").useLexicalEditable();
        if (i) {
            if (typeof content === "function") {
                return content(s);
            }
            return content;
        }
        return null;
    }
    exports.PlainTextPlugin = function({ contentEditable, placeholder = null, ErrorBoundary }) {
        const _e$useLexicalComposer2 = require("LexicalComposerContext").useLexicalComposerContext();
        const o = _e$useLexicalComposer2[0];
        ((e)=>{
            E(function() {
                return require("Lexical").mergeRegister(require("LexicalPlainText").registerPlainText(e), require("LexicalDragon").registerDragonSupport(e));
            }, [
                e
            ]);
        })(o);
        return <>{contentEditable}<G6 content={placeholder}/><F5Component editor={o} ErrorBoundary={ErrorBoundary}/></>;
    };
}, null);