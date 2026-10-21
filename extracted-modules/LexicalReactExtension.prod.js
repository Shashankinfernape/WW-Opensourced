__d("LexicalReactExtension.prod", [
    "Lexical",
    "LexicalComposerContext",
    "LexicalContentEditable",
    "LexicalErrorBoundary",
    "LexicalReactProviderExtension",
    "ReactDOM",
    "react"
], function $module_LexicalReactExtension_prod(global, require, requireDynamic, requireLazy, module, exports) {
    "use strict";
    let _require_closure_react;
    const i = _require_closure_react || (_require_closure_react = require("react"));
    const a = _require_closure_react;
    function SComponent({ contentEditable, children }) {
        return <>{contentEditable}{children}</>;
    }
    const l = {
        EditorChildrenComponent: SComponent,
        ErrorBoundary: require("LexicalErrorBoundary").LexicalErrorBoundary,
        contentEditable: a.jsx(require("LexicalContentEditable").ContentEditable, {}),
        decorators: []
    };
    const d = {
        build: function build(e, r, t) {
            if (!t.getPeer(require("LexicalReactProviderExtension").ReactProviderExtension.name)) {
                ((...r_1)=>{
                    const e = 321;
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
                })([].concat(Array.from(t.getDirectDependentNames())).join(" "));
            }
            const context = [
                e,
                {
                    getTheme: function getTheme() {
                        return e._config.theme;
                    }
                }
            ];
            const Component = ((e, context_1)=>{
                const n = context_1[0];
                const t = e.decorators.map((e)=>{
                    if (typeof e === "function") {
                        return a.jsx(e, {
                            context: context_1
                        });
                    }
                    return e;
                });
                return function({ EditorChildrenComponent = e.EditorChildrenComponent, ErrorBoundary = e.ErrorBoundary, contentEditable = e.contentEditable, children }) {
                    const E = ((e, ErrorBoundary_1)=>{
                        const _i$useMemo = i.useMemo(function() {
                            return [
                                function(r) {
                                    return e.registerDecoratorListener(r);
                                },
                                function() {
                                    return e.getDecorators();
                                }
                            ];
                        }, [
                            e
                        ]);
                        const n = _i$useMemo[0];
                        const t = _i$useMemo[1];
                        const o = i.useSyncExternalStore(n, t, t);
                        const s = ((e)=>{
                            const _i$useMemo2 = i.useMemo(function() {
                                return [
                                    e.registerRootListener.bind(e),
                                    e.getRootElement.bind(e)
                                ];
                            }, [
                                e
                            ]);
                            const r = _i$useMemo2[0];
                            const n = _i$useMemo2[1];
                            return i.useSyncExternalStore(r, n, n);
                        })(e);
                        return i.useMemo(function() {
                            const n = function n(r) {
                                return e._onError(r);
                            };
                            const t = [];
                            for(const _s in o){
                                const _l = e.getElementByKey(_s);
                                if (_l !== null) {
                                    const _e2 = <ErrorBoundary_1 onError={n}><i.Suspense fallback={null}>{o[_s]}</i.Suspense></ErrorBoundary_1>;
                                    t.push(require("ReactDOM").createPortal(_e2, _l, _s));
                                }
                            }
                            return t;
                        }, [
                            ErrorBoundary_1,
                            o,
                            e,
                            s
                        ]);
                    })(n, ErrorBoundary);
                    const f = i.useMemo(function() {
                        return t.map((e, r)=><ErrorBoundary key={r} onError={function onError(e) {
                                n._onError(e);
                            }}><i.Suspense fallback={null}>{e}</i.Suspense></ErrorBoundary>);
                    }, [
                        ErrorBoundary
                    ]);
                    const Component = require("LexicalComposerContext").LexicalComposerContext.Provider;
                    return <Component value={context_1}><EditorChildrenComponent context={context_1} contentEditable={contentEditable}>{children}{f}{E}</EditorChildrenComponent></Component>;
                };
            })(r, context);
            return {
                Component,
                context
            };
        },
        config: l,
        mergeConfig: function mergeConfig(e, r) {
            const n = require("Lexical").shallowMergeConfig(e, r);
            if (r.decorators) {
                n.decorators = r.decorators.length > 0 ? [].concat(Array.from(e.decorators), Array.from(r.decorators)) : e.decorators;
            }
            return n;
        },
        name: "@lexical/react/React",
        peerDependencies: [
            [
                "@lexical/react/ReactProvider"
            ]
        ]
    };
    exports.DefaultEditorChildrenComponent = SComponent;
    exports.ReactExtension = d;
}, null);