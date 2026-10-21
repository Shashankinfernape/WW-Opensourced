__d("WormPersistedQueue", [
    "FBLogger",
    "WAPubSub",
    "WATimeUtils",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = ()=>r("FBLogger")("wmi").tags([
            "worm-persisted-queue"
        ]);
    const s = 3600000;
    function u(e, t) {
        return new c(e, t);
    }
    var c = (()=>{
        function t(e, t) {
            this.$1 = 0;
            this.$2 = o("WAPubSub").simplePubSub();
            this.name = e;
            this.store = t;
        }
        const t_prototype = t.prototype;
        t_prototype.attachStoreRunner = function(t) {
            this.$3 = t;
        };
        t_prototype.isReady = function() {
            return this.$3 != null;
        };
        t_prototype.subscribe = function(t) {
            return this.$2.subscribe(t);
        };
        t_prototype.add = function(t) {
            return this.put(t);
        };
        t_prototype.put = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                if (e.length !== 0) {
                    yield this.$4("put").write(this.$5("put"), function(t) {
                        return t.bulkPut(e);
                    });
                    this.$2.publish({
                        type: "new_entities"
                    });
                }
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.ack = function(t) {
            return this.delete(t);
        };
        t_prototype.delete = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                if (e.length !== 0) {
                    yield this.$4("delete").write(this.$5("delete"), function(t) {
                        return t.bulkDelete(e);
                    });
                    yield this.$6();
                }
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.read = function(t) {
            return this.$4("read").read(this.$5("read"), function(e) {
                return e.readAll(t);
            });
        };
        t_prototype.readFromIndex = function(t, n) {
            return this.$4("readFromIndex").read(this.$5("readIndex"), function(e) {
                return e.readIndex(t, undefined, n);
            });
        };
        t_prototype.readFromIndexRange = function(t, n, r) {
            return this.$4("readFromIndexRange").read(this.$5("readIndexRange"), function(e) {
                return e.readIndexRange(t, n, r);
            });
        };
        t_prototype.getFromIndex = function(t, n) {
            return this.$4("getFromIndex").read(this.$5("getByIndex"), function(e) {
                return e.getByIndex(t, n);
            });
        };
        t_prototype.count = function() {
            return this.$4("count").read(this.$5("count"), function(e) {
                return e.count();
            });
        };
        t_prototype.$4 = function(t) {
            const e = this.$3;
            if (e == null) {
                throw r("err")(`WormPersistedQueue ${this.name} is not attached to a database (${t})`);
            }
            return e;
        };
        t_prototype.$5 = function(t) {
            return `WormPersistedQueue:${this.name}:${t}`;
        };
        t_prototype.$6 = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                if (!(o("WATimeUtils").unixTimeMs() - this.$1 <= s)) {
                    try {
                        yield this.$4("clearIfEmpty").write(this.$5("clearIfEmpty"), (()=>{
                            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                                const t = yield e.readAll({
                                    limit: 1
                                });
                                if (t.length === 0) {
                                    yield e.clear();
                                }
                            });
                            return function(t) {
                                return e.apply(this, arguments);
                            };
                        })());
                        this.$1 = o("WATimeUtils").unixTimeMs();
                    } catch (error) {
                        e().catching(r("getErrorSafe")(error)).mustfix("Error during WormPersistedQueue cleanup");
                    }
                }
            });
            function a() {
                return t.apply(this, arguments);
            }
            return a;
        })();
        return t;
    })();
    l.defineWormPersistedQueue = u;
    l.WormPersistedQueue = c;
}, 98);