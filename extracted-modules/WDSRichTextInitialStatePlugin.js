__d("WDSRichTextInitialStatePlugin", [
    "Lexical",
    "LexicalComposerContext",
    "react"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const useEffect = (e || (e = o("react"))).useEffect;
    function useU({ initialText }) {
        const n = o("LexicalComposerContext").useLexicalComposerContext();
        const r = n[0];
        useEffect(function() {
            const e = initialText ?? "";
            r.update(function() {
                const t = o("Lexical").$getRoot();
                t.clear();
                for(let n = e.split(/\r?\n/), r = 0; r < n.length; r++){
                    const a = o("Lexical").$createParagraphNode();
                    const i = new (o("Lexical")).TextNode(n[r]);
                    a.append(i);
                    t.append(a);
                }
                o("Lexical").$setSelection(null);
            }, {
                tag: "history-merge"
            });
        }, [
            r
        ]);
        return null;
    }
    l.default = useU;
}, 98);