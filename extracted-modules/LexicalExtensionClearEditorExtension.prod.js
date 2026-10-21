__d("LexicalExtensionClearEditorExtension.prod", [
    "Lexical",
    "LexicalExtensionNamedSignals",
    "LexicalExtensionSignals"
], function $module_LexicalExtensionClearEditorExtension_prod(global, require, requireDynamic, requireLazy, module, exports) {
    "use strict";
    function n() {
        const r = require("Lexical").$getRoot();
        const t = require("Lexical").$getSelection();
        const n = require("Lexical").$createParagraphNode();
        r.clear();
        r.append(n);
        if (t !== null) {
            n.select();
        }
        if (require("Lexical").$isRangeSelection(t)) {
            t.format = 0;
        }
    }
    function i(r, t = n) {
        return r.registerCommand(require("Lexical").CLEAR_EDITOR_COMMAND, function() {
            t();
            return true;
        }, require("Lexical").COMMAND_PRIORITY_EDITOR);
    }
    const a = {
        build: function build(e, t, n) {
            return require("LexicalExtensionNamedSignals").namedSignals(t);
        },
        config: {
            $onClear: n
        },
        name: "@lexical/extension/ClearEditor",
        register: function register(e, r, n) {
            const _n$getOutput = n.getOutput();
            const _n$getOutput_$onClear = _n$getOutput.$onClear;
            return require("LexicalExtensionSignals").effect(function() {
                return i(e, _n$getOutput_$onClear.value);
            });
        }
    };
    exports.ClearEditorExtension = a;
    exports.registerClearEditor = i;
}, null);