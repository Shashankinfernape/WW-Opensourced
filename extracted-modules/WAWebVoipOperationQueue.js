__d("WAWebVoipOperationQueue", [
    "Promise",
    "WALogger",
    "WAWebCommonTaskScheduler",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    const d = 30000;
    const m = ((e)=>{
        function t(t, n) {
            let r;
            r = e.call(this, `Operation timed out after ${n}ms: ${t}`) || this;
            r.name = "OperationTimeoutError";
            return r;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(babelHelpers.wrapNativeSuper(Error));
    const p = (()=>{
        function t(e, t = d, n) {
            this.$1 = [];
            this.$2 = false;
            this.$3 = 0;
            this.$4 = e;
            this.$5 = t;
            this.$6 = n;
        }
        const t_prototype = t.prototype;
        t_prototype.enqueue = function(operation, n) {
            const e = ++this.$3;
            this.$1.push({
                operation,
                name: `${n} (#${e})`
            });
            if (!this.isProcessing()) {
                this.$7();
            }
        };
        t_prototype.$7 = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const t = this;
                if (!this.isProcessing()) {
                    this.$2 = true;
                    const a = function*() {
                        const a = t.$1.shift();
                        if (a == null) {
                            return 1;
                        }
                        const { name, operation } = a;
                        let d = null;
                        const p = new (c || (c = n("Promise")))(function(e, n) {
                            d = self.setTimeout(function() {
                                return n(new m(name, t.$5));
                            }, t.$5);
                        });
                        try {
                            yield (c || (c = n("Promise"))).race([
                                operation(),
                                p
                            ]);
                        } catch (error) {
                            if (error instanceof m) {
                                let _ = false;
                                try {
                                    _ = (yield t.$6?.(name)) === true;
                                } catch (e) {
                                    _ = false;
                                }
                                if (_) {
                                    o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                                        "voip: [",
                                        ":Queue] op timeout ",
                                        "ms (benign, abandoning): ",
                                        ""
                                    ])), t.$4, t.$5, name).tags("non-sad").sendLogs("voip-operation-queue-timeout-benign");
                                } else {
                                    o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                                        "voip: [",
                                        ":Queue] op timeout ",
                                        "ms, abandoning: ",
                                        ""
                                    ])), t.$4, t.$5, name).sendLogs("voip-operation-queue-timeout");
                                }
                            } else {
                                o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                                    "voip: [",
                                    ":Queue] Operation failed: ",
                                    ", error: ",
                                    ""
                                ])), t.$4, name, error).sendLogs("voip-operation-queue-failure");
                            }
                        } finally{
                            if (d != null) {
                                self.clearTimeout(d);
                            }
                        }
                        yield r("WAWebCommonTaskScheduler").yield();
                    };
                    while(this.getQueueLength() > 0){
                        yield* a();
                    }
                    this.$2 = false;
                }
            });
            function a() {
                return t.apply(this, arguments);
            }
            return a;
        })();
        t_prototype.getQueueLength = function() {
            return this.$1.length;
        };
        t_prototype.isProcessing = function() {
            return this.$2;
        };
        return t;
    })();
    l.WAWebVoipOperationQueue = p;
}, 98);