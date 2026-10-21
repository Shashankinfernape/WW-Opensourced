__d("WAWebHatchAgentStatusManager", [
    "WAWebBaseJSHaltDetector",
    "WAWebJSHaltDetector"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = 300000;
    const s = (()=>{
        function t() {
            const e = this;
            this.$1 = null;
            this.$2 = [];
            this.$3 = 0;
            this.$4 = null;
            this.$8 = function() {
                if (Date.now() >= e.$3) {
                    e.clearAgentStatus();
                }
            };
        }
        const n = t.prototype;
        n.subscribeToStatusText = function(t) {
            const e = this;
            this.$2.push(t);
            return function() {
                e.$2 = e.$2.filter((e)=>e !== t);
            };
        };
        n.getAgentStatus = function() {
            return this.$1;
        };
        n.setAgentStatus = function(t) {
            this.$1 = t;
            this.$5();
            this.$6(this.getDisplayText(t));
        };
        n.clearAgentStatus = function() {
            this.$7();
            this.$1 = null;
            this.$6(null);
        };
        n.__resetForTesting = function() {
            this.$7();
            this.$1 = null;
            this.$2 = [];
        };
        n.getDisplayText = function({ activityEmoji: e, activityText: n }) {
            if (e != null && e !== "") {
                return `${e} ${n}`;
            }
            return n;
        };
        n.$6 = function(t) {
            for (const e of [].concat(this.$2)){
                e(t);
            }
        };
        n.$5 = function() {
            const t = this;
            this.$7();
            this.$3 = Date.now() + e;
            this.$4 = self.setTimeout(function() {
                return t.clearAgentStatus();
            }, e);
            o("WAWebJSHaltDetector").jsHaltDetector.on(o("WAWebBaseJSHaltDetector").JS_HALT_EVENT, this.$8);
        };
        n.$7 = function() {
            if (this.$4 != null) {
                self.clearTimeout(this.$4);
                this.$4 = null;
                o("WAWebJSHaltDetector").jsHaltDetector.off(o("WAWebBaseJSHaltDetector").JS_HALT_EVENT, this.$8);
            }
        };
        return t;
    })();
    const u = new s;
    l.default = u;
}, 98);