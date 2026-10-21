__d("LexicalExtensionHorizontalRuleExtension.prod", [
    "Lexical",
    "LexicalExtensionEditorStateExtension",
    "LexicalExtensionNodeSelectionExtension",
    "LexicalExtensionSignals",
    "LexicalUtils"
], function $module_LexicalExtensionHorizontalRuleExtension_prod(global, require, requireDynamic, requireLazy, module, exports) {
    "use strict";
    const i = require("Lexical").createCommand("INSERT_HORIZONTAL_RULE_COMMAND");
    var _s3 = ((_t$DecoratorNode)=>{
        function s() {
            return _t$DecoratorNode.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(s, _t$DecoratorNode);
        const _proto = s.prototype;
        _proto.$config = function $config() {
            return this.config("horizontalrule", {
                extends: require("Lexical").DecoratorNode,
                importDOM: {
                    hr: function hr() {
                        return {
                            conversion,
                            priority: 0
                        };
                    }
                }
            });
        };
        _proto.exportDOM = function exportDOM() {
            return {
                element: require("Lexical").$getDocument().createElement("hr")
            };
        };
        _proto.createDOM = function createDOM(e) {
            const n = require("Lexical").$getDocument().createElement("hr");
            require("Lexical").addClassNamesToElement(n, e.theme.hr);
            return n;
        };
        _proto.getTextContent = function getTextContent() {
            return "\n";
        };
        _proto.isInline = function isInline() {
            return false;
        };
        _proto.updateDOM = function updateDOM() {
            return false;
        };
        return s;
    })(require("Lexical").DecoratorNode);
    function conversion() {
        return {
            node: c()
        };
    }
    function c() {
        return require("Lexical").$create(_s3);
    }
    function a(e) {
        return e instanceof _s3;
    }
    const d = {
        dependencies: [
            require("LexicalExtensionEditorStateExtension").EditorStateExtension,
            require("LexicalExtensionNodeSelectionExtension").NodeSelectionExtension
        ],
        name: "@lexical/extension/HorizontalRule",
        nodes: function nodes() {
            return [
                _s3
            ];
        },
        register: function register(n, l, d) {
            const watchNodeKey = d.getDependency(require("LexicalExtensionNodeSelectionExtension").NodeSelectionExtension).output.watchNodeKey;
            const N = require("LexicalExtensionSignals").signal({
                nodeSelections: new Map()
            });
            const g = n._config.theme.hrSelected ?? "selected";
            return require("Lexical").mergeRegister(n.registerCommand(i, function(n) {
                const o = require("Lexical").$getSelection();
                if (!require("Lexical").$isRangeSelection(o)) {
                    return false;
                }
                if (o.focus.getNode() !== null) {
                    const _t = c();
                    require("LexicalUtils").$insertNodeToNearestRoot(_t);
                }
                return true;
            }, require("Lexical").COMMAND_PRIORITY_EDITOR), n.registerCommand(require("Lexical").CLICK_COMMAND, function(e) {
                if (require("Lexical").isDOMNode(e.target)) {
                    const _n = require("Lexical").$getNodeFromDOMNode(e.target);
                    if (a(_n)) {
                        ((e, n = false)=>{
                            const o = require("Lexical").$getSelection();
                            const r = e.isSelected();
                            const i = e.getKey();
                            let s;
                            if (n && require("Lexical").$isNodeSelection(o)) {
                                s = o;
                            } else {
                                s = require("Lexical").$createNodeSelection();
                                require("Lexical").$setSelection(s);
                            }
                            if (r) {
                                s.delete(i);
                            } else {
                                s.add(i);
                            }
                        })(_n, e.shiftKey);
                        return true;
                    }
                }
                return false;
            }, require("Lexical").COMMAND_PRIORITY_LOW), n.registerMutationListener(_s3, function(e, t) {
                require("LexicalExtensionSignals").batch(function() {
                    let t = false;
                    const _N$peek = N.peek();
                    const _N$peek_nodeSelections = _N$peek.nodeSelections;
                    for (const [_i, _s] of e.entries()){
                        if (_s === "destroyed") {
                            _N$peek_nodeSelections.delete(_i);
                            t = true;
                        } else {
                            const _e = _N$peek_nodeSelections.get(_i);
                            const _s2 = n.getElementByKey(_i);
                            if (_e) {
                                _e.domNode.value = _s2;
                            } else {
                                t = true;
                                _N$peek_nodeSelections.set(_i, {
                                    domNode: require("LexicalExtensionSignals").signal(_s2),
                                    selectedSignal: watchNodeKey(_i)
                                });
                            }
                        }
                    }
                    if (t) {
                        N.value = {
                            nodeSelections: _N$peek_nodeSelections
                        };
                    }
                });
            }), require("LexicalExtensionSignals").effect(function() {
                const e = [];
                const _loop = function _loop() {
                    const { domNode, selectedSignal } = _ref4;
                    e.push(require("LexicalExtensionSignals").effect(function() {
                        const domNode_value = domNode.value;
                        if (domNode_value) {
                            if (selectedSignal.value) {
                                require("Lexical").addClassNamesToElement(domNode_value, g);
                            } else {
                                require("Lexical").removeClassNamesFromElement(domNode_value, g);
                            }
                        }
                    }));
                };
                for (var _ref4 of N.value.nodeSelections.values()){
                    _loop();
                }
                return require("Lexical").mergeRegister.apply(require("Lexical"), Array.from(e));
            }));
        }
    };
    exports.$createHorizontalRuleNode = c;
    exports.$isHorizontalRuleNode = a;
    exports.HorizontalRuleExtension = d;
    exports.HorizontalRuleNode = _s3;
    exports.INSERT_HORIZONTAL_RULE_COMMAND = i;
}, null);