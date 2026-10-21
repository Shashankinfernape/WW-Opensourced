__d("LexicalExtensionNormalizeInlineElementsExtension.prod", [
    "Lexical",
    "LexicalExtensionNamedSignals",
    "LexicalExtensionSignals"
], function $module_LexicalExtensionNormalizeInlineElementsExtension_prod(global, require, requireDynamic, requireLazy, module, exports) {
    "use strict";
    function t(n) {
        if (require("Lexical").$isElementNode(n) && n.isInline() && n.isEmpty()) {
            n.remove();
        }
    }
    const s = {
        build: function build(e, i, t) {
            return require("LexicalExtensionNamedSignals").namedSignals(i);
        },
        config: {
            disabled: false
        },
        name: "@lexical/NormalizeInlineElements",
        register: function register(n, s, o) {
            const l = o.getOutput();
            return require("LexicalExtensionSignals").effect(function() {
                if (!l.disabled.value) {
                    const _i = [];
                    const _loop = function _loop() {
                        const { klass, transforms } = _ref2;
                        if (klass.prototype instanceof require("Lexical").ElementNode && klass.prototype.isInline !== require("Lexical").ElementNode.prototype.isInline) {
                            transforms.add(t);
                            _i.push(function() {
                                return transforms.delete(t);
                            });
                        }
                    };
                    for (var _ref2 of n._nodes.values()){
                        _loop();
                    }
                    return function() {
                        return _i.forEach((e)=>e());
                    };
                }
            });
        }
    };
    exports.NormalizeInlineElementsExtension = s;
}, null);