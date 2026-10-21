__d("WAWebOIDCCallbackEventBus", [
    "WAWebEventEmitter"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = {
        OIDC_CALLBACK: "oidc_callback"
    };
    const s = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(r("WAWebEventEmitter"));
    const u = new s;
    l.OIDCCallbackEvent = e;
    l.WAWebOIDCCallbackEventBus = u;
}, 98);