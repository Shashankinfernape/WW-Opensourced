__d("LexicalExtensionNormalizeTripleClickSelectionExtension.prod", [
    "Lexical",
    "LexicalExtensionNamedSignals",
    "LexicalExtensionSignals"
], function $module_LexicalExtensionNormalizeTripleClickSelectionExtension_prod(global, require, requireDynamic, requireLazy, module, exports) {
    "use strict";
    const o = new Set([
        "Alt",
        "AltGraph",
        "CapsLock",
        "Control",
        "Fn",
        "Meta",
        "Shift"
    ]);
    const i = new Set([
        require("Lexical").SKIP_SELECTION_FOCUS_TAG,
        require("Lexical").SKIP_SCROLL_INTO_VIEW_TAG
    ]);
    const r = {
        build: function build(e, t, o) {
            return require("LexicalExtensionNamedSignals").namedSignals(t);
        },
        config: {
            $fixFocusOverselection: function $fixFocusOverselection() {
                const n = require("Lexical").$getSelection();
                if (require("Lexical").$isRangeSelection(n) && !n.isCollapsed()) {
                    const _t = require("Lexical").$getCaretRangeInDirection(require("Lexical").$caretRangeFromSelection(n), "next");
                    let _o = _t.focus;
                    if (require("Lexical").$isTextPointCaret(_o) && _t.anchor.origin !== _o.origin && _o.offset === 0) {
                        _o = require("Lexical").$rewindSiblingCaret(_o.getSiblingCaret());
                    }
                    if (require("Lexical").$isSiblingCaret(_o) && _t.anchor.origin !== _o.origin && require("Lexical").$isLineBreakNode(_o.origin)) {
                        _o = require("Lexical").$rewindSiblingCaret(_o);
                    }
                    while(require("Lexical").$isChildCaret(_o) && _t.anchor.origin !== _o.origin){
                        _o = require("Lexical").$rewindSiblingCaret(require("Lexical").$getSiblingCaret(_o.origin, "next"));
                    }
                    if (require("Lexical").$isSiblingCaret(_o) && require("Lexical").$isElementNode(_o.origin)) {
                        _o = require("Lexical").$normalizeCaret(require("Lexical").$getChildCaret(_o.origin, "previous")).getFlipped();
                    }
                    _o = require("Lexical").$normalizeCaret(_o);
                    if (!_o.isSamePointCaret(_t.focus)) {
                        const _n = require("Lexical").$setSelectionFromCaretRange(require("Lexical").$getCaretRange(_t.anchor, _o));
                        const _r = require("Lexical").$getEditor().getRootElement();
                        const l = _r && require("Lexical").getDOMSelection(_r.ownerDocument.defaultView);
                        if (l) {
                            require("Lexical").$updateDOMSelection(require("Lexical").$getPreviousSelection(), _n, require("Lexical").$getEditor(), l, i, _r);
                        }
                    }
                }
            },
            dateNow: function dateNow() {
                return Date.now();
            },
            disabled: false,
            thresholdMsec: 100
        },
        name: "@lexical/NormalizeTripleClickSelection",
        register: function register(n, i, r) {
            return require("LexicalExtensionSignals").effect(function() {
                const t = r.getOutput();
                if (!t.disabled.value) {
                    return n.registerRootListener(function(i) {
                        if (!i) {
                            return;
                        }
                        let r = null;
                        let l = null;
                        const pointerdown = function s() {
                            r = null;
                            l = null;
                        };
                        const a = function a() {
                            const n = require("Lexical").getDOMSelection(i.ownerDocument.defaultView);
                            if (n === null) {
                                return {
                                    anchorNode: null,
                                    anchorOffset: 0,
                                    focusNode: null,
                                    focusOffset: 0
                                };
                            }
                            const _e$getDOMSelectionPoi = require("Lexical").getDOMSelectionPoints(n, i);
                            const { anchorNode, anchorOffset, focusNode, focusOffset } = _e$getDOMSelectionPoi;
                            return {
                                anchorNode,
                                anchorOffset,
                                focusNode,
                                focusOffset
                            };
                        };
                        return require("Lexical").mergeRegister(n.registerCommand(require("Lexical").SELECTION_CHANGE_COMMAND, function() {
                            if (r !== null) {
                                if (r.defaultPrevented) {
                                    pointerdown();
                                } else if ((()=>{
                                    const t = require("Lexical").$getSelection();
                                    const o = require("Lexical").$createRangeSelectionFromDom(require("Lexical").getDOMSelection(i.ownerDocument.defaultView), n);
                                    return require("Lexical").$isRangeSelection(t) && o !== null && t.anchor.is(o.anchor) && t.focus.is(o.focus);
                                })()) {
                                    pointerdown();
                                    t.$fixFocusOverselection.peek()();
                                } else if (l === null) {
                                    l = a();
                                }
                            }
                            return false;
                        }, require("Lexical").COMMAND_PRIORITY_BEFORE_CRITICAL), n.registerUpdateListener(function() {
                            let e;
                            let n;
                            if (r !== null && l !== null) {
                                if (r.eventPhase === Event.NONE && (e = l, n = a(), e.anchorNode !== n.anchorNode || e.anchorOffset !== n.anchorOffset || e.focusNode !== n.focusNode || e.focusOffset !== n.focusOffset)) {
                                    pointerdown();
                                } else {
                                    l = null;
                                }
                            }
                        }), require("Lexical").registerEventListeners(i.ownerDocument, {
                            keydown: function keydown(e) {
                                if (!o.has(e.key)) {
                                    pointerdown();
                                }
                            },
                            mousedown: function mousedown(e) {
                                pointerdown();
                                if (e.detail > 2 && e.composedPath().includes(i)) {
                                    r = e;
                                }
                            },
                            pointerdown
                        }, true));
                    });
                }
            });
        }
    };
    exports.NormalizeTripleClickSelectionExtension = r;
}, null);