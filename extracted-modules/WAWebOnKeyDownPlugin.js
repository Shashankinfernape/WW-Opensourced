__d("WAWebOnKeyDownPlugin", [
    "LexicalComposerContext",
    "react-compiler-runtime",
    "useWAWebLexicalEvent"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("react-compiler-runtime").c(2);
        const e_onKeyDown = e.onKeyDown;
        const r = o("LexicalComposerContext").useLexicalComposerContext();
        const a = r[0];
        let i;
        if (t[0] !== e_onKeyDown) {
            i = function(t) {
                e_onKeyDown?.(t);
            };
            t[0] = e_onKeyDown;
            t[1] = i;
        } else {
            i = t[1];
        }
        o("useWAWebLexicalEvent").useLexicalKeydownEvent(a, null, i);
        return null;
    }
    l.default = e;
}, 98);