__d("WAWebAlarm", [
    "WALogger",
    "WATimeUtils",
    "WAWebBaseJSHaltDetector",
    "WAWebClock",
    "WAWebJSHaltDetector",
    "isStringNullOrEmpty",
    "uniqueID"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = Math.pow(2, 31) - 1;
    const u = (()=>{
        function t() {
            const e = this;
            this.$1 = new Map;
            const t = function() {
                if (e.$1.size > 0) {
                    e.$2();
                }
            };
            o("WAWebJSHaltDetector").jsHaltDetector.on(o("WAWebBaseJSHaltDetector").JS_HALT_EVENT, t);
            o("WAWebJSHaltDetector").jsHaltDetector.on(o("WAWebBaseJSHaltDetector").CLOCK_CHANGE_BACKWARDS_EVENT, t);
            o("WAWebClock").Clock.on(o("WAWebClock").SKEW_CHANGE_EVENT, this.$3.bind(this));
        }
        const n = t.prototype;
        n.setLocalTimeout = function(t, n, r) {
            return this.$4({
                alarmId: r,
                expiration: n,
                fn: t,
                isGlobal: false
            });
        };
        n.setGlobalTimeout = function(t, n, r) {
            return this.$4({
                alarmId: r,
                expiration: n,
                fn: t,
                isGlobal: true
            });
        };
        n.clearTimeout = function(t) {
            if (!r("isStringNullOrEmpty")(t)) {
                const e = this.$1.get(t);
                if (e) {
                    self.clearTimeout(e.timeoutId);
                    this.$1.delete(t);
                }
            }
        };
        n.$4 = function(n) {
            const t = this;
            const { alarmId: a, expiration: i, fn: l, isGlobal: u } = n;
            const c = !r("isStringNullOrEmpty")(a);
            if (c) {
                this.clearTimeout(a);
            }
            const d = r("isStringNullOrEmpty")(a) ? r("uniqueID")("alarm_timer_") : a;
            const m = i - this.$5(u);
            const p = Math.min(m, s);
            if (m < 0) {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Alarm:setTimeout:Cannot set alarm in the past."
                ])));
                l();
                return d;
            }
            const _ = self.setTimeout(function() {
                if (i - t.$5(u) < o("WAWebJSHaltDetector").DEFAULT_THRESHOLD) {
                    t.$1.delete(d);
                    l();
                } else {
                    t.$4({
                        alarmId: d,
                        expiration: i,
                        fn: l,
                        isGlobal: u
                    });
                }
            }, p);
            const f = {
                isGlobal: u,
                fn: l,
                expiration: i,
                timeoutId: _
            };
            this.$1.set(d, f);
            return d;
        };
        n.$2 = function() {
            const e = this;
            const t = new Map(this.$1);
            t.forEach(({ expiration: r, fn: o, isGlobal: a }, n)=>{
                if (r < e.$5(a)) {
                    e.clearTimeout(n);
                    o();
                } else {
                    e.$4({
                        alarmId: n,
                        expiration: r,
                        fn: o,
                        isGlobal: a
                    });
                }
            });
        };
        n.$3 = function() {
            const e = this;
            const t = new Map(this.$1);
            t.forEach(({ expiration: r, fn: o, isGlobal: a }, n)=>{
                if (a) {
                    e.$4({
                        alarmId: n,
                        expiration: r,
                        fn: o,
                        isGlobal: a
                    });
                }
            });
        };
        n.$5 = function(t = false) {
            return (t ? o("WATimeUtils").unixTime() : o("WATimeUtils").unixTimeWithoutClockSkewCorrection()) * 1000;
        };
        return t;
    })();
    const c = new u;
    l.default = c;
}, 98);