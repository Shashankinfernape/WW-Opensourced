__d("LexicalExtensionInitialStateExtension.prod", [
    "Lexical"
], function $module_LexicalExtensionInitialStateExtension_prod(global, require, requireDynamic, requireLazy, module, exports) {
    "use strict";
    let _require_Lexical;
    const i = {
        tag: (_require_Lexical = require("Lexical")).HISTORY_MERGE_TAG
    };
    function e() {
        const i = require("Lexical").$getRoot();
        if (i.isEmpty()) {
            i.append(require("Lexical").$createParagraphNode());
        }
    }
    const o = {
        config: {
            setOptions: i,
            updateOptions: i
        },
        init: function init({ $initialEditorState = e }) {
            return {
                $initialEditorState,
                initialized: false
            };
        },
        afterRegistration: function afterRegistration(i, { updateOptions, setOptions }, a) {
            const n = a.getInitResult();
            if (!n.initialized) {
                n.initialized = true;
                const _a = n.$initialEditorState;
                if (require("Lexical").$isEditorState(_a)) {
                    i.setEditorState(_a, setOptions);
                } else if (typeof _a === "function") {
                    i.update(function() {
                        _a(i);
                    }, updateOptions);
                } else if (_a && (typeof _a === "string" || typeof _a === "object")) {
                    const _t = i.parseEditorState(_a);
                    i.setEditorState(_t, setOptions);
                }
            }
            return function() {};
        },
        name: "@lexical/extension/InitialState",
        nodes: [
            _require_Lexical.RootNode,
            _require_Lexical.TextNode,
            _require_Lexical.LineBreakNode,
            _require_Lexical.TabNode,
            _require_Lexical.ParagraphNode
        ]
    };
    exports.InitialStateExtension = o;
}, null);