__d("LexicalExtensionGetPeerDependencyFromEditor.prod", [
    "LexicalExtensionLexicalBuilder"
], function $module_LexicalExtensionGetPeerDependencyFromEditor_prod(global, require, requireDynamic, requireLazy, module, exports) {
    "use strict";
    function r(r, n) {
        const o = require("LexicalExtensionLexicalBuilder").LexicalBuilder.maybeFromEditor(r);
        if (!o) {
            return;
        }
        const t = o.extensionNameMap.get(n);
        if (t) {
            return t.getExtensionDependency();
        }
    }
    exports.getPeerDependencyFromEditor = r;
    exports.getPeerDependencyFromEditorOrThrow = function(e, n) {
        const o = r(e, n);
        if (o === undefined) {
            ((...r_1)=>{
                const e = 291;
                throw ((e, ...r)=>{
                    const n = new URL("https://lexical.dev/docs/error");
                    const o = new URLSearchParams();
                    o.append("code", e);
                    for (const _e of r){
                        o.append("v", _e);
                    }
                    n.search = o.toString();
                    return new Error(`Minified Lexical error #${e}; visit ${n.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
                })(...[
                    e
                ].concat(Array.from(r_1)));
            })(n);
        }
        return o;
    };
}, null);