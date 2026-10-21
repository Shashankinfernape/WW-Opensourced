__d("WDSRichTextCharLimitPlugin", [
    "Lexical",
    "LexicalComposerContext",
    "LexicalUtils",
    "react"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const useEffect = (e || (e = o("react"))).useEffect;
    function useU({ maxLength }) {
        const n = o("LexicalComposerContext").useLexicalComposerContext();
        const r = n[0];
        useEffect(function() {
            return r.registerNodeTransform(o("Lexical").RootNode, function(e) {
                const n = o("Lexical").$getSelection();
                if (!(!o("Lexical").$isRangeSelection(n) || !n.isCollapsed())) {
                    const a = r.getEditorState();
                    const i = e.getTextContent();
                    if (i.length > maxLength) {
                        o("LexicalUtils").$restoreEditorState(r, a);
                    }
                }
            });
        }, [
            r,
            maxLength
        ]);
        return null;
    }
    l.default = useU;
}, 98);