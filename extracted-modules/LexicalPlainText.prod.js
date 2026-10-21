__d("LexicalPlainText.prod", [
    "Lexical",
    "LexicalClipboard",
    "LexicalDragon",
    "LexicalExtensionNormalizeInlineElementsExtension",
    "LexicalExtensionNormalizeTripleClickSelectionExtension",
    "LexicalSelection",
    "LexicalUtils"
], function $module_LexicalPlainText_prod(global, require, requireDynamic, requireLazy, module, exports) {
    "use strict";
    function l(t, n) {
        n.update(function() {
            if (t !== null) {
                const _r = require("LexicalUtils").objectKlassEquals(t, KeyboardEvent) ? null : t.clipboardData;
                const _i = require("Lexical").$getSelection();
                if (_i !== null && !_i.isCollapsed() && _r != null) {
                    t.preventDefault();
                    const _o = require("LexicalClipboard").$getHtmlContent(n);
                    if (_o !== null) {
                        _r.setData("text/html", _o);
                    }
                    _r.setData("text/plain", _i.getTextContent());
                }
            }
        });
    }
    function register(t) {
        let _require_Lexical;
        return (_require_Lexical = require("Lexical")).mergeRegister(t.registerCommand(_require_Lexical.DELETE_CHARACTER_COMMAND, function(e) {
            const t = require("Lexical").$getSelection();
            return !!require("Lexical").$isRangeSelection(t) && (t.deleteCharacter(e), true);
        }, _require_Lexical.COMMAND_PRIORITY_EDITOR), t.registerCommand(_require_Lexical.DELETE_WORD_COMMAND, function(e) {
            const t = require("Lexical").$getSelection();
            return !!require("Lexical").$isRangeSelection(t) && (t.deleteWord(e), true);
        }, _require_Lexical.COMMAND_PRIORITY_EDITOR), t.registerCommand(_require_Lexical.DELETE_LINE_COMMAND, function(e) {
            const t = require("Lexical").$getSelection();
            return !!require("Lexical").$isRangeSelection(t) && (t.deleteLine(e), true);
        }, _require_Lexical.COMMAND_PRIORITY_EDITOR), t.registerCommand(_require_Lexical.CONTROLLED_TEXT_INSERTION_COMMAND, function(t) {
            const n = require("Lexical").$getSelection();
            if (!require("Lexical").$isRangeSelection(n)) {
                return false;
            }
            if (typeof t === "string") {
                n.insertText(t);
            } else {
                const _r2 = t.dataTransfer;
                if (_r2 != null) {
                    require("LexicalClipboard").$insertDataTransferForPlainText(_r2, n);
                } else {
                    const _e = t.data;
                    if (_e) {
                        n.insertText(_e);
                    }
                }
            }
            return true;
        }, _require_Lexical.COMMAND_PRIORITY_EDITOR), t.registerCommand(_require_Lexical.REMOVE_TEXT_COMMAND, function() {
            const e = require("Lexical").$getSelection();
            return !!require("Lexical").$isRangeSelection(e) && (e.removeText(), true);
        }, _require_Lexical.COMMAND_PRIORITY_EDITOR), t.registerCommand(_require_Lexical.INSERT_LINE_BREAK_COMMAND, function(e) {
            const t = require("Lexical").$getSelection();
            return !!require("Lexical").$isRangeSelection(t) && (t.insertLineBreak(e), true);
        }, _require_Lexical.COMMAND_PRIORITY_EDITOR), t.registerCommand(_require_Lexical.INSERT_PARAGRAPH_COMMAND, function() {
            const e = require("Lexical").$getSelection();
            return !!require("Lexical").$isRangeSelection(e) && (e.insertLineBreak(), true);
        }, _require_Lexical.COMMAND_PRIORITY_EDITOR), t.registerCommand(_require_Lexical.KEY_ARROW_LEFT_COMMAND, function(e) {
            const t = require("Lexical").$getSelection();
            if (!require("Lexical").$isRangeSelection(t)) {
                return false;
            }
            const n = e;
            const n_shiftKey = n.shiftKey;
            return !!require("LexicalSelection").$shouldOverrideDefaultCharacterSelection(t, true) && (n.preventDefault(), require("LexicalSelection").$moveCharacter(t, n_shiftKey, true), true);
        }, _require_Lexical.COMMAND_PRIORITY_EDITOR), t.registerCommand(_require_Lexical.KEY_ARROW_RIGHT_COMMAND, function(e) {
            const t = require("Lexical").$getSelection();
            if (!require("Lexical").$isRangeSelection(t)) {
                return false;
            }
            const n = e;
            const n_shiftKey = n.shiftKey;
            return !!require("LexicalSelection").$shouldOverrideDefaultCharacterSelection(t, false) && (n.preventDefault(), require("LexicalSelection").$moveCharacter(t, n_shiftKey, false), true);
        }, _require_Lexical.COMMAND_PRIORITY_EDITOR), t.registerCommand(_require_Lexical.KEY_BACKSPACE_COMMAND, function(e) {
            const n = require("Lexical").$getSelection();
            return !!require("Lexical").$isRangeSelection(n) && (!require("Lexical").IS_IOS || !require("Lexical").CAN_USE_BEFORE_INPUT) && (e.preventDefault(), t.dispatchCommand(require("Lexical").DELETE_CHARACTER_COMMAND, true));
        }, _require_Lexical.COMMAND_PRIORITY_EDITOR), t.registerCommand(_require_Lexical.KEY_DELETE_COMMAND, function(e) {
            const n = require("Lexical").$getSelection();
            return !!require("Lexical").$isRangeSelection(n) && (e.preventDefault(), t.dispatchCommand(require("Lexical").DELETE_CHARACTER_COMMAND, false));
        }, _require_Lexical.COMMAND_PRIORITY_EDITOR), t.registerCommand(_require_Lexical.KEY_ENTER_COMMAND, function(e) {
            const n = require("Lexical").$getSelection();
            if (!require("Lexical").$isRangeSelection(n)) {
                return false;
            }
            if (e !== null) {
                if ((require("Lexical").IS_IOS || require("Lexical").IS_SAFARI || require("Lexical").IS_APPLE_WEBKIT) && require("Lexical").CAN_USE_BEFORE_INPUT) {
                    return false;
                }
                e.preventDefault();
            }
            return t.dispatchCommand(require("Lexical").INSERT_LINE_BREAK_COMMAND, false);
        }, _require_Lexical.COMMAND_PRIORITY_EDITOR), t.registerCommand(_require_Lexical.SELECT_ALL_COMMAND, function() {
            const e = require("Lexical").$getSelection();
            require("Lexical").$selectAll(require("Lexical").$isRangeSelection(e) && require("Lexical").$getSlotFrame(e.anchor.getNode()) !== null ? e : null);
            return true;
        }, _require_Lexical.COMMAND_PRIORITY_EDITOR), t.registerCommand(_require_Lexical.COPY_COMMAND, function(e) {
            const n = require("Lexical").$getSelection();
            return !!require("Lexical").$isRangeSelection(n) && (l(e, t), true);
        }, _require_Lexical.COMMAND_PRIORITY_EDITOR), t.registerCommand(_require_Lexical.CUT_COMMAND, function(e) {
            const n = require("Lexical").$getSelection();
            return !!require("Lexical").$isRangeSelection(n) && (((e, t)=>{
                l(e, t);
                t.update(function() {
                    const e = require("Lexical").$getSelection();
                    if (require("Lexical").$isRangeSelection(e)) {
                        e.removeText();
                    }
                }, {
                    tag: require("Lexical").CUT_TAG
                });
            })(e, t), true);
        }, _require_Lexical.COMMAND_PRIORITY_EDITOR), t.registerCommand(_require_Lexical.PASTE_COMMAND, function(n) {
            const r = require("Lexical").$getSelection();
            return !!require("Lexical").$isRangeSelection(r) && (((t, n)=>{
                t.preventDefault();
                n.update(function() {
                    const n = require("Lexical").$getSelection();
                    const r = require("LexicalUtils").objectKlassEquals(t, ClipboardEvent) ? t.clipboardData : null;
                    if (r != null && require("Lexical").$isRangeSelection(n)) {
                        require("LexicalClipboard").$insertDataTransferForPlainText(r, n);
                    }
                }, {
                    tag: require("Lexical").PASTE_TAG
                });
            })(n, t), true);
        }, _require_Lexical.COMMAND_PRIORITY_EDITOR), t.registerCommand(_require_Lexical.DROP_COMMAND, function(n) {
            return require("LexicalClipboard").$handlePlainTextDrop(n, t);
        }, _require_Lexical.COMMAND_PRIORITY_EDITOR), t.registerCommand(_require_Lexical.DRAGSTART_COMMAND, function(n) {
            const r = require("Lexical").$getSelection();
            return !!require("Lexical").$isRangeSelection(r) && (r.isCollapsed() || n.dataTransfer === null || require("LexicalClipboard").$writeDragSourceToDataTransfer(n.dataTransfer, t), true);
        }, _require_Lexical.COMMAND_PRIORITY_EDITOR));
    }
    const c = {
        conflictsWith: [
            "LexicalRichText"
        ],
        dependencies: [
            require("LexicalDragon").DragonExtension,
            require("LexicalExtensionNormalizeInlineElementsExtension").NormalizeInlineElementsExtension,
            require("LexicalExtensionNormalizeTripleClickSelectionExtension").NormalizeTripleClickSelectionExtension
        ],
        name: "LexicalPlainText",
        register
    };
    exports.PlainTextExtension = c;
    exports.registerPlainText = register;
}, null);