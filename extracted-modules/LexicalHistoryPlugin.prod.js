__d("LexicalHistoryPlugin.prod", [
    "LexicalComposerContext",
    "LexicalHistory",
    "react"
], function $module_LexicalHistoryPlugin_prod(global, require, requireDynamic, requireLazy, module, exports) {
    "use strict";
    let _require_closure_react;
    const r = _require_closure_react || (_require_closure_react = require("react"));
    exports.createEmptyHistoryState = require("LexicalHistory").createEmptyHistoryState;
    exports.HistoryPlugin = function({ delay, externalHistoryState }) {
        const _e$useLexicalComposer = require("LexicalComposerContext").useLexicalComposerContext();
        const i = _e$useLexicalComposer[0];
        ((e, externalHistoryState_1, s = 1000)=>{
            const i = r.useMemo(function() {
                return externalHistoryState_1 || require("LexicalHistory").createEmptyHistoryState();
            }, [
                externalHistoryState_1
            ]);
            r.useEffect(function() {
                return require("LexicalHistory").registerHistory(e, i, s);
            }, [
                s,
                e,
                i
            ]);
        })(i, externalHistoryState, delay);
        return null;
    };
}, null);