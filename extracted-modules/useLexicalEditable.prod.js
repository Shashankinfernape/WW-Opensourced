__d("useLexicalEditable.prod", [
    "useLexicalSubscription"
], function $module_useLexicalEditable_prod(global, require, requireDynamic, requireLazy, module, exports) {
    "use strict";
    function i(e) {
        return {
            initialValueFn: function initialValueFn() {
                return e.isEditable();
            },
            subscribe: function subscribe(i) {
                return e.registerEditableListener(i);
            }
        };
    }
    exports.useLexicalEditable = function() {
        return require("useLexicalSubscription").useLexicalSubscription(i);
    };
}, null);