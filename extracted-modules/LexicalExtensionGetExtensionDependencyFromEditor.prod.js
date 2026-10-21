__d("LexicalExtensionGetExtensionDependencyFromEditor.prod", [
    "LexicalExtensionLexicalBuilder"
], function $module_LexicalExtensionGetExtensionDependencyFromEditor_prod(global, require, requireDynamic, requireLazy, module, exports) {
    "use strict";
    exports.getExtensionDependencyFromEditor = function(n, r) {
        const i = require("LexicalExtensionLexicalBuilder").LexicalBuilder.fromEditor(n).getExtensionRep(r);
        if (i === undefined) {
            ((...n_1)=>{
                const e = 303;
                throw ((e, ...n)=>{
                    const r = new URL("https://lexical.dev/docs/error");
                    const i = new URLSearchParams();
                    i.append("code", e);
                    for (const _e of n){
                        i.append("v", _e);
                    }
                    r.search = i.toString();
                    return new Error(`Minified Lexical error #${e}; visit ${r.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
                })(...[
                    e
                ].concat(Array.from(n_1)));
            })(r.name);
        }
        return i.getExtensionDependency();
    };
}, null);