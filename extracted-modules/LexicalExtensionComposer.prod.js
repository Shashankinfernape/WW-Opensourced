__d("LexicalExtensionComposer.prod", [
    "Lexical",
    "LexicalExtensionGetExtensionDependencyFromEditor",
    "LexicalExtensionLexicalBuilder",
    "LexicalReactExtension",
    "LexicalReactProviderExtension",
    "react"
], function $module_LexicalExtensionComposer_prod(global, require, requireDynamic, requireLazy, module, exports) {
    "use strict";
    let _require_closure_react;
    const o = _require_closure_react || (_require_closure_react = require("react"));
    const c = _require_closure_react;
    exports.LexicalExtensionComposer = function({ extension, children, contentEditable }) {
        const a = o.useMemo(function() {
            return require("LexicalExtensionLexicalBuilder").LexicalBuilder.fromExtensions([
                require("LexicalReactProviderExtension").ReactProviderExtension,
                require("Lexical").configExtension(require("LexicalReactExtension").ReactExtension, contentEditable === undefined ? {} : {
                    contentEditable
                }),
                extension
            ]).buildEditor();
        }, [
            contentEditable,
            extension
        ]);
        o.useEffect(function() {
            let e = false;
            queueMicrotask(()=>{
                e = true;
            });
            return function() {
                if (e) {
                    a.dispose();
                }
            };
        }, [
            a
        ]);
        const Component = require("LexicalExtensionGetExtensionDependencyFromEditor").getExtensionDependencyFromEditor(a, require("LexicalReactExtension").ReactExtension).output.Component;
        return <Component>{children}</Component>;
    };
}, null);