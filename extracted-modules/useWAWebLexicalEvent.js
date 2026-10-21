__d("useWAWebLexicalEvent", [
    "Lexical",
    "react",
    "react-compiler-runtime",
    "useWAWebListener",
    "useWAWebStableCallback"
], function(t, n, r, o, a, i, l) {
    let e;
    const useEffect = (e || (e = o("react"))).useEffect;
    function u(e, t, n, capture) {
        "use no forget";
        o("useWAWebListener").useListener(e && e.getRootElement(), "keydown", function(r) {
            if (e && (t == null || r.key === t)) {
                n(r, e);
            }
        }, {
            capture
        });
    }
    function c(e, t, n, a) {
        const i = o("react-compiler-runtime").c(8);
        const l = a === undefined ? o("Lexical").COMMAND_PRIORITY_HIGH : a;
        let u;
        if (i[0] !== n) {
            u = function(t, r) {
                const e = n(t, r);
                if (e && t instanceof KeyboardEvent) {
                    t.preventDefault();
                    t.stopPropagation();
                }
                return e;
            };
            i[0] = n;
            i[1] = u;
        } else {
            u = i[1];
        }
        const c = r("useWAWebStableCallback")(u);
        let d;
        let m;
        if (i[2] !== t || i[3] !== e || i[4] !== c || i[5] !== l) {
            d = function() {
                if (e) {
                    return e.registerCommand(t, c, l);
                }
            };
            m = [
                e,
                t,
                c,
                l
            ];
            i[2] = t;
            i[3] = e;
            i[4] = c;
            i[5] = l;
            i[6] = d;
            i[7] = m;
        } else {
            d = i[6];
            m = i[7];
        }
        useEffect(d, m);
    }
    l.useLexicalKeydownEvent = u;
    l.useLexicalCommandListener = c;
}, 98);