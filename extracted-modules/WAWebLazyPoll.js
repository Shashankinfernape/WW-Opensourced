__d("WAWebLazyPoll", [
    "WALogger",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    const _ = (()=>{
        function t({ handler = null, interval = 3600, name, randomIntervalExtension = 0, restingInterval = 18000, sleepWhileResting = false }) {
            this.$6 = false;
            this.$7 = false;
            this.$8 = false;
            this.$1 = name;
            this.$2 = interval * 1000;
            this.$3 = restingInterval * 1000;
            this.$4 = sleepWhileResting;
            this.$5 = randomIntervalExtension * 1000;
            this.$13();
            if (typeof handler === "function") {
                this.poll(handler);
            } else if (handler != null) {
                throw r("err")("Poll handler must be a function or null");
            }
        }
        const t_prototype = t.prototype;
        t_prototype.$14 = function() {
            return Math.ceil(Math.random() * this.$5);
        };
        t_prototype.$15 = function() {
            return (this.$7 ? this.$3 : this.$2) + this.$14();
        };
        t_prototype.$13 = function() {
            const t = this;
            document.addEventListener("visibilitychange", function() {
                if (!t.$12) {
                    if (document.hidden) {
                        if (t.$4) {
                            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                                "[",
                                "] inactive paused"
                            ])), t.$1);
                            t.$16();
                        } else {
                            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                                "[",
                                "] inactive slowing down"
                            ])), t.$1);
                            t.$7 = true;
                        }
                    } else if (t.$10) {
                        o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                            "[",
                            "] active resuming"
                        ])), t.$1);
                        t.$17();
                    }
                }
            }, false);
        };
        t_prototype.$18 = function() {
            if (!this.$11) {
                return true;
            }
            const e = Date.now() - this.$11;
            return e >= this.$15();
        };
        t_prototype.$16 = function() {
            self.clearTimeout(this.$9);
            this.$6 = false;
        };
        t_prototype.$17 = function() {
            this.$7 = false;
            this.$6 = true;
            this.$19();
        };
        t_prototype.$19 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const e = this;
                if (this.$6) {
                    if (this.$18()) {
                        if (this.$8) {
                            o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                                "[",
                                "] skipping poll - already executing"
                            ])), this.$1);
                        } else {
                            this.$8 = true;
                            try {
                                o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                                    "[",
                                    "] polling"
                                ])), this.$1);
                                yield this.$10();
                                this.$11 = Date.now();
                            } finally{
                                this.$8 = false;
                            }
                        }
                    }
                    self.clearTimeout(this.$9);
                    this.$9 = self.setTimeout(function() {
                        return e.$19();
                    }, this.$15());
                }
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.poll = function(t) {
            if (this.$10 != null) {
                this.resume();
                return;
            }
            this.$10 = t;
            this.$6 = true;
            this.$19();
        };
        t_prototype.pause = function() {
            o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                "[",
                "] manually paused"
            ])), this.$1);
            this.$12 = true;
            this.$16();
        };
        t_prototype.resume = function() {
            o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                "[",
                "] manually resumed"
            ])), this.$1);
            this.$12 = false;
            this.$17();
        };
        return t;
    })();
    l.default = _;
}, 98);