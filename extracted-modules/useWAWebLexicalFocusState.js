__d("useWAWebLexicalFocusState", [
    "Lexical",
    "WAWebLexicalUtils",
    "react",
    "react-compiler-runtime",
    "useLazyRef",
    "useWAWebStableCallback"
], function(t, n, r, o, a, i, l) {
    let e;
    const useEffect = (e || (e = o("react"))).useEffect;
    function useU(e, t) {
        const n = o("react-compiler-runtime").c(9);
        let a;
        if (n[0] !== e) {
            a = function() {
                return o("WAWebLexicalUtils").isFocused(e);
            };
            n[0] = e;
            n[1] = a;
        } else {
            a = n[1];
        }
        const i = r("useLazyRef")(a);
        let l;
        if (n[2] !== t || n[3] !== i) {
            l = function(n, r) {
                if (i.current !== n) {
                    i.current = n;
                    t(n, r);
                }
            };
            n[2] = t;
            n[3] = i;
            n[4] = l;
        } else {
            l = n[4];
        }
        const u = r("useWAWebStableCallback")(l);
        let c;
        let d;
        if (n[5] !== e || n[6] !== u) {
            c = function() {
                let t;
                u(o("WAWebLexicalUtils").isFocused(e));
                const n = e.registerCommand((t = o("Lexical")).FOCUS_COMMAND, function(e) {
                    u(true, e);
                    return false;
                }, t.COMMAND_PRIORITY_HIGH);
                const r = e.registerCommand(t.BLUR_COMMAND, function(e) {
                    u(false, e);
                    return false;
                }, t.COMMAND_PRIORITY_HIGH);
                return function() {
                    n();
                    r();
                };
            };
            d = [
                e,
                u
            ];
            n[5] = e;
            n[6] = u;
            n[7] = c;
            n[8] = d;
        } else {
            c = n[7];
            d = n[8];
        }
        useEffect(c, d);
    }
    l.useLexicalFocusStateListener = useU;
}, 98);