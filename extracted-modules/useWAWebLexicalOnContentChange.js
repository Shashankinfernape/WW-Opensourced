__d("useWAWebLexicalOnContentChange", [
    "LexicalComposerContext",
    "react",
    "react-compiler-runtime",
    "useWAWebStableCallback"
], function(t, n, r, o, a, i, l) {
    let e;
    const useEffect = (e || (e = o("react"))).useEffect;
    function u(e) {
        const t = o("react-compiler-runtime").c(4);
        const n = o("LexicalComposerContext").useLexicalComposerContext();
        const a = n[0];
        const i = r("useWAWebStableCallback")(e);
        let l;
        let u;
        if (t[0] !== a || t[1] !== i) {
            l = function() {
                const e = a.registerTextContentListener(function(e) {
                    i(e);
                });
                return e;
            };
            u = [
                a,
                i
            ];
            t[0] = a;
            t[1] = i;
            t[2] = l;
            t[3] = u;
        } else {
            l = t[2];
            u = t[3];
        }
        useEffect(l, u);
    }
    l.useLexicalOnContentChange = u;
}, 98);