__d("LexicalExtensionNodeSelectionExtension.prod", [
    "Lexical",
    "LexicalExtensionEditorStateExtension",
    "LexicalExtensionSignals",
    "LexicalExtensionWatchedSignal"
], function $module_LexicalExtensionNodeSelectionExtension_prod(global, require, requireDynamic, requireLazy, module, exports) {
    "use strict";
    const o = new Set();
    const s = {
        build: function build(s, a, c) {
            const output = c.getDependency(require("LexicalExtensionEditorStateExtension").EditorStateExtension).output;
            const l = require("LexicalExtensionSignals").signal({
                watchedNodeKeys: new Map()
            });
            var r = require("LexicalExtensionWatchedSignal").watchedSignal(function() {}, function() {
                return require("LexicalExtensionSignals").effect(function() {
                    const t = r.peek();
                    const watchedNodeKeys = l.value.watchedNodeKeys;
                    let i;
                    let o = false;
                    output.value.read(function() {
                        if (require("Lexical").$getSelection()) {
                            for (const [_s, _a] of watchedNodeKeys.entries()){
                                {
                                    if (_a.size === 0) {
                                        watchedNodeKeys.delete(_s);
                                        continue;
                                    }
                                    const _c = require("Lexical").$getNodeByKey(_s);
                                    const _d = _c && _c.isSelected() || false;
                                    o = o || _d !== (!!t && t.has(_s));
                                    if (_d) {
                                        i = i || new Set();
                                        i.add(_s);
                                    }
                                }
                            }
                        }
                    });
                    if (!(!o && i && t && i.size === t.size)) {
                        r.value = i;
                    }
                });
            });
            return {
                watchNodeKey: function watchNodeKey(e) {
                    const t = require("LexicalExtensionSignals").computed(function() {
                        return (r.value || o).has(e);
                    });
                    const _l$peek = l.peek();
                    const _l$peek_watchedNodeKeys = _l$peek.watchedNodeKeys;
                    let s = _l$peek_watchedNodeKeys.get(e);
                    const a = s !== undefined;
                    s = s || new Set();
                    s.add(t);
                    if (!a) {
                        _l$peek_watchedNodeKeys.set(e, s);
                        l.value = {
                            watchedNodeKeys: _l$peek_watchedNodeKeys
                        };
                    }
                    return t;
                }
            };
        },
        dependencies: [
            require("LexicalExtensionEditorStateExtension").EditorStateExtension
        ],
        name: "@lexical/extension/NodeSelection"
    };
    exports.NodeSelectionExtension = s;
}, null);