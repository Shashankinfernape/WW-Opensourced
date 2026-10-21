__d("WDSRichTextEditorStatePlugin", [
    "Lexical",
    "LexicalComposerContext",
    "react"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const { useEffect, useRef } = s;
    function d() {
        return o("Lexical").$getRoot().getChildren().map((e)=>e.getTextContent()).join("\n");
    }
    function m(e) {
        return e.read(d);
    }
    function useP({ onBlur, onFocus, onValueChange }) {
        const a = o("LexicalComposerContext").useLexicalComposerContext();
        const i = a[0];
        const lRef = useRef();
        useEffect(function() {
            lRef.current = m(i.getEditorState());
        }, [
            i
        ]);
        useEffect(function() {
            return i.registerUpdateListener(function({ editorState, tags }) {
                if (!i.isComposing() && !tags.has("history-merge")) {
                    const o = m(editorState);
                    if (lRef.current !== o) {
                        lRef.current = o;
                        if (onValueChange != null) {
                            onValueChange(o);
                        }
                    }
                }
            });
        }, [
            i,
            onValueChange
        ]);
        useEffect(function() {
            return i.registerCommand(o("Lexical").BLUR_COMMAND, function() {
                onBlur?.();
                return false;
            }, o("Lexical").COMMAND_PRIORITY_LOW);
        }, [
            i,
            onBlur
        ]);
        useEffect(function() {
            return i.registerCommand(o("Lexical").FOCUS_COMMAND, function() {
                onFocus?.();
                return false;
            }, o("Lexical").COMMAND_PRIORITY_LOW);
        }, [
            i,
            onFocus
        ]);
        return null;
    }
    l.default = useP;
}, 98);