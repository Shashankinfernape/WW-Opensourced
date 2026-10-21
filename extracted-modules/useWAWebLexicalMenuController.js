__d("useWAWebLexicalMenuController", [
    "Lexical",
    "LexicalComposerContext",
    "react",
    "react-compiler-runtime",
    "useWAWebLexicalEvent"
], function(t, n, r, o, a, i, l) {
    let e;
    const useRef = (e || (e = o("react"))).useRef;
    function u() {
        const e = o("react-compiler-runtime").c(3);
        const t = o("LexicalComposerContext").useLexicalComposerContext();
        const n = t[0];
        const rRef = useRef(null);
        let a;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = function(t) {
                t.preventDefault();
                t.stopPropagation();
                rRef.current?.goUp();
                return false;
            };
            e[0] = a;
        } else {
            a = e[0];
        }
        o("useWAWebLexicalEvent").useLexicalCommandListener(n, o("Lexical").KEY_ARROW_UP_COMMAND, a);
        let i;
        if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
            i = function(t) {
                t.stopPropagation();
                rRef.current?.goDown();
                return false;
            };
            e[1] = i;
        } else {
            i = e[1];
        }
        o("useWAWebLexicalEvent").useLexicalCommandListener(n, o("Lexical").KEY_ARROW_DOWN_COMMAND, i);
        let l;
        if (e[2] === Symbol.for("react.memo_cache_sentinel")) {
            l = function() {
                rRef.current?.selectItem();
                return false;
            };
            e[2] = l;
        } else {
            l = e[2];
        }
        o("useWAWebLexicalEvent").useLexicalCommandListener(n, o("Lexical").KEY_ENTER_COMMAND, l);
        return rRef;
    }
    l.useLexicalMenuController = u;
}, 98);