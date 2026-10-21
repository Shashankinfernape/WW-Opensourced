__d("WAWebTextFormatShortcutsPlugin.react", [
    "Lexical",
    "LexicalComposerContext",
    "WAWebActions",
    "WAWebKeyboardShortcuts",
    "WAWebTextFormatUtils",
    "react-compiler-runtime",
    "useWAWebLexicalEvent"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        const n = o("WAWebKeyboardShortcuts").getAction(e);
        if (!n) {
            return null;
        }
        switch(n){
            case o("WAWebActions").Action.TOGGLE_BOLD:
                return o("WAWebTextFormatUtils").TextFormatType.Bold;
            case o("WAWebActions").Action.TOGGLE_ITALIC:
                return o("WAWebTextFormatUtils").TextFormatType.Italic;
            case o("WAWebActions").Action.TOGGLE_STRIKETHROUGH:
                return o("WAWebTextFormatUtils").TextFormatType.Strikethrough;
            case o("WAWebActions").Action.TOGGLE_INLINE_CODE:
                if (t.inlineCodeEnabled) {
                    return o("WAWebTextFormatUtils").TextFormatType.InlineCode;
                }
                return null;
            case o("WAWebActions").Action.TOGGLE_CODE:
                return o("WAWebTextFormatUtils").TextFormatType.Code;
            case o("WAWebActions").Action.TOGGLE_NUMBERED_LIST:
                if (t.numberedListEnabled) {
                    return o("WAWebTextFormatUtils").TextFormatType.NumberedList;
                }
                return null;
            case o("WAWebActions").Action.TOGGLE_BULLETED_LIST:
                if (t.bulletPointsEnabled) {
                    return o("WAWebTextFormatUtils").TextFormatType.BulletedList;
                }
                return null;
            case o("WAWebActions").Action.TOGGLE_QUOTE:
                if (t.blockQuoteEnabled) {
                    return o("WAWebTextFormatUtils").TextFormatType.Quote;
                }
                return null;
            default:
                return null;
        }
    }
    function s(t) {
        const n = o("react-compiler-runtime").c(3);
        const r = o("LexicalComposerContext").useLexicalComposerContext();
        const a = r[0];
        let i;
        if (n[0] !== a || n[1] !== t) {
            i = function(r) {
                const n = e(r, t);
                if (!n || a.isComposing()) {
                    return false;
                }
                a.update(function() {
                    o("WAWebTextFormatUtils").$toggleTextFormat(n);
                });
                return true;
            };
            n[0] = a;
            n[1] = t;
            n[2] = i;
        } else {
            i = n[2];
        }
        o("useWAWebLexicalEvent").useLexicalCommandListener(a, o("Lexical").KEY_MODIFIER_COMMAND, i, o("Lexical").COMMAND_PRIORITY_HIGH);
    }
    l.default = s;
}, 98);