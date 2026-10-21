__d("WAWebEditorInitialSelectionPlugin.react", [
    "Lexical",
    "LexicalComposerContext",
    "WAWebLexicalUtils",
    "react",
    "useWAWebLexicalEvent"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const { useEffect, useRef } = s;
    function d({ selectAll = false }) {
        const r = o("LexicalComposerContext").useLexicalComposerContext();
        const a = r[0];
        const iRef = useRef(true);
        const l = ()=>{
            if (iRef.current) {
                a.update(function() {
                    o("Lexical").$getRoot()?.selectEnd();
                });
                iRef.current = false;
            }
        };
        o("useWAWebLexicalEvent").useLexicalCommandListener(a, o("Lexical").FOCUS_COMMAND, function() {
            if (!selectAll) {
                l();
            }
            return false;
        });
        useEffect(function() {
            if (selectAll) {
                o("WAWebLexicalUtils").selectAll(a);
            } else if (o("WAWebLexicalUtils").isFocused(a)) {
                l();
            }
        }, [
            a
        ]);
    }
    l.default = d;
}, 98);