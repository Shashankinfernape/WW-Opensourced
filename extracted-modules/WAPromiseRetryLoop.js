__d("WAPromiseRetryLoop", [
    "Promise",
    "WALogger",
    "WAPromiseBackoffs",
    "WAPromiseDelays",
    "WAResolvable",
    "asyncToGeneratorRuntime",
    "err",
    "gkx"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    let f;
    let g;
    let h;
    const y = (()=>{
        function t(e) {
            const t = this;
            this.$2 = new (o("WAResolvable")).Resolvable;
            this.$3 = null;
            this.$4 = null;
            this.$5 = 0;
            this.$6 = new (o("WAResolvable")).Resolvable;
            this.endWithValue = function(e) {
                t.$5++;
                t.$2.resolve(e);
            };
            this.$1 = e;
        }
        const a = t.prototype;
        a.resetTimeoutAfter = function(t) {
            this.$4 = Date.now() + t;
        };
        a.cancelReset = function() {
            this.$4 = null;
        };
        a.reset = function() {
            if (!this.$2.resolveWasCalled()) {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "PromiseRetryLoop: resetting ",
                    ""
                ])), this.$1.name);
                this.$5++;
                this.$6.resolve();
                this.$7();
            }
        };
        a.start = function() {
            if (!this.$2.resolveWasCalled()) {
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "PromiseRetryLoop: starting ",
                    ""
                ])), this.$1.name);
                if (this.$5 !== 0) {
                    o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "PromiseRetryLoop was called several times. You may have race conditions"
                    ])));
                }
                this.$5++;
                this.$6.resolve();
                this.$7();
            }
        };
        a.pauseOnNextIteration = function() {
            o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "PromiseRetryLoop: pause requested on next iteration"
            ])));
            this.$6.resolve();
            this.$6 = new (o("WAResolvable")).Resolvable;
        };
        a.unpause = function() {
            if (!this.$6.resolveWasCalled()) {
                o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "PromiseRetryLoop: loop unpaused"
                ])));
            }
            this.$6.resolve();
        };
        a.$7 = function() {
            const e = this;
            const t = this.$1;
            const a = this.$5;
            let i = o("WAPromiseBackoffs").createTimer(this.$1.timer);
            i();
            const l = function() {
                if (e.$1.isPauseEnabled !== true) {
                    return (h || (h = n("Promise"))).resolve();
                }
                if (!e.$6.resolveWasCalled()) {
                    o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                        "PromiseRetryLoop: loop paused - waiting for unpause"
                    ])));
                }
                return e.$6.promise;
            };
            const s = function() {
                if (!e.$2.resolveWasCalled() && a === e.$5) {
                    const n = Date.now();
                    e.$3 = t.code(e.endWithValue).then(()=>{
                        if (!e.$2.resolveWasCalled()) {
                            const r = t.resetDelay;
                            if (r !== void 0 && Date.now() >= n + r || e.$4 != null && e.$4 <= Date.now()) {
                                o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                                    "PromiseRetryLoop: resetting ",
                                    ""
                                ])), t.name);
                                i = o("WAPromiseBackoffs").createTimer(e.$1.timer);
                            }
                            e.$4 = null;
                            const a = i();
                            o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                                "PromiseRetryLoop: retrying ",
                                " in ",
                                "ms"
                            ])), t.name, a);
                            return o("WAPromiseDelays").delayMs(a).then(l).then(s);
                        }
                    });
                    return e.$3;
                }
            };
            const u = (()=>{
                const r = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    while(true){
                        if (e.$2.resolveWasCalled() || a !== e.$5) {
                            return;
                        }
                        const n = Date.now();
                        yield t.code.call(void 0, e.endWithValue);
                        if (e.$2.resolveWasCalled()) {
                            return;
                        }
                        const r = t.resetDelay;
                        if (r !== void 0 && Date.now() >= n + r || e.$4 != null && e.$4 <= Date.now()) {
                            o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                                "PromiseRetryLoop: resetting ",
                                ""
                            ])), t.name);
                            i = o("WAPromiseBackoffs").createTimer(e.$1.timer);
                        }
                        e.$4 = null;
                        const s = i();
                        o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                            "PromiseRetryLoop: retrying ",
                            " in ",
                            "ms"
                        ])), t.name, s);
                        yield o("WAPromiseDelays").delayMs(s);
                        yield l();
                    }
                });
                return function() {
                    return r.apply(this, arguments);
                };
            })();
            if (r("gkx")("9841")) {
                this.$3 = (h || (h = n("Promise"))).resolve().then(u);
            } else {
                this.$3 = (h || (h = n("Promise"))).resolve().then(s);
            }
        };
        a.promise = function() {
            const e = this;
            if (this.$2.resolveWasCalled()) {
                return this.$2.promise;
            }
            if (this.$3) {
                return (h || (h = n("Promise"))).race([
                    this.$2.promise,
                    this.$3.then(()=>e.$2.promise)
                ]);
            }
            return (h || (h = n("Promise"))).reject(r("err")(`PromiseRetryLoop ${this.$1.name} had promise() called before start()`));
        };
        return t;
    })();
    l.PromiseRetryLoop = y;
}, 98);