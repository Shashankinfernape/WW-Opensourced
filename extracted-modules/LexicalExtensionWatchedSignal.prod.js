__d("LexicalExtensionWatchedSignal.prod", [
    "LexicalExtensionSignals"
], function $module_LexicalExtensionWatchedSignal_prod(global, require, requireDynamic, requireLazy, module, exports) {
    "use strict";
    exports.watchedSignal = function(t, i) {
        let a;
        return require("LexicalExtensionSignals").signal(t(), {
            unwatched: function unwatched() {
                if (a) {
                    a();
                    a = undefined;
                }
            },
            watched: function watched() {
                this.value = t();
                a = i(this);
            }
        });
    };
}, null);