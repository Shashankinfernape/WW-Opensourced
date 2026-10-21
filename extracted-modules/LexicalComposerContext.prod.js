__d("LexicalComposerContext.prod", [
    "react"
], function $module_LexicalComposerContext_prod(global, require, requireDynamic, requireLazy, module, exports) {
    "use strict";
    let _require_closure_react;
    const e = _require_closure_react || (_require_closure_react = require("react"));
    const NContext = e.createContext(null);
    exports.LexicalComposerContext = NContext;
    exports.createLexicalComposerContext = function(e, n) {
        let t = null;
        if (e != null) {
            t = e[1];
        }
        return {
            getTheme: function getTheme() {
                return n ?? (t != null ? t.getTheme() : null);
            }
        };
    };
    exports.useLexicalComposerContext = function() {
        const t = e.useContext(NContext);
        if (t == null) {
            ((...n_1)=>{
                const e = 8;
                throw ((e, ...n)=>{
                    const t = new URL("https://lexical.dev/docs/error");
                    const r = new URLSearchParams();
                    r.append("code", e);
                    for (const _e of n){
                        r.append("v", _e);
                    }
                    t.search = r.toString();
                    return new Error(`Minified Lexical error #${e}; visit ${t.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
                })(...[
                    e
                ].concat(Array.from(n_1)));
            })();
        }
        return t;
    };
}, null);