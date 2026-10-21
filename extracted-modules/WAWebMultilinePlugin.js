__d("WAWebMultilinePlugin", [
    "Lexical",
    "LexicalComposerContext",
    "WAWebLexicalUtils",
    "react-compiler-runtime",
    "useWAWebLexicalEvent"
], function(t, n, r, o, a, i, l) {
    const e = o("Lexical").createCommand();
    function s(t) {
        const n = o("react-compiler-runtime").c(3);
        const t_multiline = t.multiline;
        const a = o("LexicalComposerContext").useLexicalComposerContext();
        const i = a[0];
        let l;
        if (n[0] !== i || n[1] !== t_multiline) {
            l = function() {
                if (t_multiline) {
                    i.update(function() {
                        o("WAWebLexicalUtils").$getRangeSelection()?.insertParagraph();
                        i.dispatchCommand(e);
                    });
                }
                return true;
            };
            n[0] = i;
            n[1] = t_multiline;
            n[2] = l;
        } else {
            l = n[2];
        }
        const s = l;
        o("useWAWebLexicalEvent").useLexicalCommandListener(i, o("Lexical").INSERT_LINE_BREAK_COMMAND, s);
        o("useWAWebLexicalEvent").useLexicalCommandListener(i, o("Lexical").INSERT_PARAGRAPH_COMMAND, s);
        return null;
    }
    l.NEW_PARAGRAPH_COMMAND = e;
    l.MultilinePlugin = s;
}, 98);