__d("WAWebEditorInitialStatePlugin.react", [
    "LexicalComposerContext",
    "WAWebLexicalUtils",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const useEffect = (e || (e = o("react"))).useEffect;
    function u({ initialText, willReceiveFocus }) {
        const r = o("LexicalComposerContext").useLexicalComposerContext();
        const a = r[0];
        const i = initialText ?? "";
        useEffect(function() {
            a.update(function() {
                o("WAWebLexicalUtils").$setTextContent(i, o("WAWebLexicalUtils").isFocused(a));
            }, {
                tag: "history-merge"
            });
        }, [
            a
        ]);
        return null;
    }
    l.default = u;
}, 98);