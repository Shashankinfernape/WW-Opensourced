__d("WDSRichTextOnEnterPlugin", [
    "Lexical",
    "LexicalComposerContext",
    "react"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const useEffect = (e || (e = o("react"))).useEffect;
    function u({ isMultiLine, onEnter }) {
        const r = o("LexicalComposerContext").useLexicalComposerContext();
        const a = r[0];
        useEffect(function() {
            const e = [];
            if (onEnter != null) {
                e.push(a.registerCommand(o("Lexical").KEY_ENTER_COMMAND, function(e) {
                    if (e == null || e.ctrlKey || e.altKey || e.shiftKey) {
                        return false;
                    }
                    e.preventDefault();
                    onEnter();
                    return true;
                }, o("Lexical").COMMAND_PRIORITY_NORMAL));
            }
            if (!isMultiLine) {
                let r;
                const i = function() {
                    return true;
                };
                e.push(a.registerCommand((r = o("Lexical")).INSERT_LINE_BREAK_COMMAND, i, r.COMMAND_PRIORITY_NORMAL), a.registerCommand(r.INSERT_PARAGRAPH_COMMAND, i, r.COMMAND_PRIORITY_NORMAL));
            }
            return function() {
                for (const t of e){
                    t();
                }
            };
        }, [
            a,
            isMultiLine,
            onEnter
        ]);
        return null;
    }
    l.default = u;
}, 98);