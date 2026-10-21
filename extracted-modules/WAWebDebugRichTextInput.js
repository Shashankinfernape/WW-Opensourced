__d("WAWebDebugRichTextInput", [
    "Lexical",
    "err"
], function(t, n, r, o, a, i, l) {
    let e = null;
    function s(t) {
        e = t;
    }
    function getActiveRichTextInputRef() {
        if (!e) {
            throw r("err")("Could not find rich text input ref. Make sure to focus on a rich text input first.");
        }
        return e;
    }
    getActiveRichTextInputRef.doc = "Return a ref to the currently active rich text input";
    function getLexicalModule() {
        return o("Lexical");
    }
    function triggerLexicalError() {
        self.setTimeout(function() {
            const t = getActiveRichTextInputRef();
            t.editor?.update(function() {
                const e = new (o("Lexical")).TextNode("");
                e.getParentOrThrow();
            });
        }, 1000);
    }
    triggerLexicalError.paramsToExecute = [];
    triggerLexicalError.doc = "Simulate Lexical error by deliberately making Lexical to throw an exception";
    const m = {
        getActiveRichTextInputRef,
        getLexicalModule,
        triggerLexicalError
    };
    l.setActiveRichTextInputRef = s;
    l.WAWebDebugRichTextInput = m;
}, 98);