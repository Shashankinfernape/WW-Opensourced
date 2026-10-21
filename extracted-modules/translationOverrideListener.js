__d("translationOverrideListener", [
    "requireDeferred"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = r("requireDeferred")("IntlQtEventFalcoEvent").__setRef("translationOverrideListener");
    function s(hash) {
        e.onReady(function(e) {
            return e.log(function() {
                return {
                    hash
                };
            });
        });
    }
    l.default = s;
}, 98);