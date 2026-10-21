__d("LexicalClearEditorPlugin.prod", [
    "Lexical",
    "LexicalComposerContext",
    "LexicalExtensionClearEditorExtension",
    "react"
], function $module_LexicalClearEditorPlugin_prod(global, require, requireDynamic, requireLazy, module, exports) {
    "use strict";
    let _require_closure_react;
    const i = _require_closure_react || (_require_closure_react = require("react"));
    const o = require("Lexical").CAN_USE_DOM ? i.useLayoutEffect : i.useEffect;
    exports.ClearEditorPlugin = function({ onClear }) {
        const _r$useLexicalComposer = require("LexicalComposerContext").useLexicalComposerContext();
        const i = _r$useLexicalComposer[0];
        o(function() {
            return require("LexicalExtensionClearEditorExtension").registerClearEditor(i, onClear);
        }, [
            i,
            onClear
        ]);
        return null;
    };
}, null);