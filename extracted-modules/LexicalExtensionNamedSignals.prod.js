__d("LexicalExtensionNamedSignals.prod", [
    "LexicalExtensionSignals"
], function $module_LexicalExtensionNamedSignals_prod(global, require, requireDynamic, requireLazy, module, exports) {
    "use strict";
    exports.namedSignals = function(i, s = {}) {
        const t = {};
        for(const e in i){
            const o = s[e];
            const r = require("LexicalExtensionSignals").signal(o === undefined ? i[e] : o);
            t[e] = r;
        }
        return t;
    };
}, null);