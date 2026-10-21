__d("LexicalExtensionConfig.prod", [
    "Lexical"
], function $module_LexicalExtensionConfig_prod(global, require, requireDynamic, requireLazy, module, exports) {
    "use strict";
    function n(e) {
        return (typeof e.nodes === "function" ? e.nodes() : e.nodes) || [];
    }
    exports.getKnownTypesAndNodes = function(t) {
        const types = new Set();
        const s = new Set();
        for (const d of n(t)){
            const _n = typeof d === "function" ? d : d.replace;
            require("Lexical").getStaticNodeConfig(_n);
            types.add(_n.getType());
            s.add(_n);
        }
        return {
            nodes: s,
            types
        };
    };
    exports.getNodeConfig = n;
}, null);