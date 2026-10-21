__d("WAWebBizAIOAuthCallbackEventBus", [
    "WAWebEventEmitter"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = {
        BIZ_AI_OAUTH_CALLBACK: "biz_ai_oauth_callback"
    };
    const s = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(r("WAWebEventEmitter"));
    const u = new s;
    l.BizAIOAuthCallbackEvent = e;
    l.WAWebBizAIOAuthCallbackEventBus = u;
}, 98);