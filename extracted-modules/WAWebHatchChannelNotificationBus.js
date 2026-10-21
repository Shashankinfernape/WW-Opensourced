__d("WAWebHatchChannelNotificationBus", [
    "WALogger",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = (()=>{
        function t() {
            this.$1 = [];
        }
        const n = t.prototype;
        n.subscribe = function(t) {
            const e = this;
            this.$1.push(t);
            let n = false;
            return function() {
                if (!n) {
                    n = true;
                    const r = e.$1.indexOf(t);
                    if (r !== -1) {
                        e.$1.splice(r, 1);
                    }
                }
            };
        };
        n.publish = function(n) {
            for (const t of [].concat(this.$1)){
                try {
                    t(n);
                } catch (t) {
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "hatch-notification: listener failed"
                    ]))).catching(r("getErrorSafe")(t)).sendLogs("hatch-notification-listener-error");
                }
            }
        };
        n.__resetForTesting = function() {
            this.$1 = [];
        };
        return t;
    })();
    const u = new s;
    l.default = u;
}, 98);