__d("WAWebEditorRefPlugin", [
    "LexicalComposerContext",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const useImperativeHandle = (e || (e = o("react"))).useImperativeHandle;
    function u(e) {
        const t = o("react-compiler-runtime").c(3);
        const e_editorRef = e.editorRef;
        const r = o("LexicalComposerContext").useLexicalComposerContext();
        const a = r[0];
        let i;
        let l;
        if (t[0] !== a) {
            i = function() {
                return a;
            };
            l = [
                a
            ];
            t[0] = a;
            t[1] = i;
            t[2] = l;
        } else {
            i = t[1];
            l = t[2];
        }
        useImperativeHandle(e_editorRef, i, l);
        return null;
    }
    l.default = u;
}, 98);