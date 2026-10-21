__d("CometEventListener", [
    "FBLogger"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, o) {
        if (e.addEventListener) {
            e.addEventListener(t, n, o);
            return {
                remove: function() {
                    e.removeEventListener(t, n, typeof o !== "boolean" ? o.capture : o);
                }
            };
        }
        throw r("FBLogger")("comet_infra").mustfixThrow('Attempted to listen to eventType "%s" on a target that does not have addEventListener.', t);
    }
    const s = {
        addListenerWithOptions: function(n, r, o, a) {
            return e(n, r, o, a);
        },
        bubbleWithPassiveFlag: function(n, r, o, a) {
            return e(n, r, o, {
                capture: false,
                passive: a
            });
        },
        capture: function(n, r, o) {
            return e(n, r, o, true);
        },
        captureWithPassiveFlag: function(n, r, o, a) {
            return e(n, r, o, {
                capture: true,
                passive: a
            });
        },
        listen: function(n, r, o) {
            return e(n, r, o, false);
        },
        registerDefault: function(t, n) {
            throw r("FBLogger")("comet_infra").mustfixThrow("EventListener.registerDefault is not implemented.");
        },
        suppress: function(t) {
            t.preventDefault();
            t.stopPropagation();
        }
    };
    l.default = s;
}, 98);