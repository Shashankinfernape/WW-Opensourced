__d("WAWebOnEnterPlugin", [
    "Lexical",
    "LexicalComposerContext",
    "react-compiler-runtime",
    "useWAWebLexicalEvent"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("react-compiler-runtime").c(3);
        const { enterIsNewLine, onEnter } = e;
        const a = o("LexicalComposerContext").useLexicalComposerContext();
        const i = a[0];
        let l;
        if (t[0] !== enterIsNewLine || t[1] !== onEnter) {
            l = function(t) {
                if (!t) {
                    return false;
                }
                const e = t.ctrlKey || t.altKey || t.shiftKey;
                if (enterIsNewLine) {
                    if (!e && !t.metaKey) {
                        return false;
                    }
                    onEnter?.(t);
                    return true;
                }
                if (e) {
                    return false;
                }
                onEnter?.(t);
                return true;
            };
            t[0] = enterIsNewLine;
            t[1] = onEnter;
            t[2] = l;
        } else {
            l = t[2];
        }
        o("useWAWebLexicalEvent").useLexicalCommandListener(i, o("Lexical").KEY_ENTER_COMMAND, l, o("Lexical").COMMAND_PRIORITY_NORMAL);
        return null;
    }
    l.default = e;
}, 98);