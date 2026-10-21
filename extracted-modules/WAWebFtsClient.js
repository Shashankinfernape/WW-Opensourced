__d("WAWebFtsClient", [
    "Promise",
    "WALogger",
    "WAWebAppTracker",
    "WAWebEnvironment",
    "WAWebFtsClientMessageIdResolver",
    "WAWebFtsGenRequestId",
    "WAWebFtsWorkerAdapter",
    "asyncToGeneratorRuntime",
    "cr:9662",
    "err",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    let s;
    let u;
    let c;
    const d = n("cr:9662") ?? {};
    const d_FtsSQLiteClient = d.FtsSQLiteClient;
    const p = (()=>{
        function e() {
            this.$2 = new Map;
        }
        const e_prototype = e.prototype;
        e_prototype.initialize = function() {
            const e = this;
            if (!this.$1) {
                const t = function(n) {
                    e.$3(n);
                };
                const n = function(n) {
                    return e.$4(n);
                };
                const r = o("WAWebFtsWorkerAdapter").getFtsWorker(t, n);
                this.$1 = r;
            }
        };
        e_prototype.$4 = function(t) {
            o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "[fts][client] worker error: ",
                ""
            ])), t);
        };
        e_prototype.$3 = function(t) {
            const t_reqId = t.reqId;
            const n = this.$2.get(t_reqId);
            if (n) {
                if (t.error) {
                    o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[fts][client] worker completed job ",
                        " with error"
                    ])), n.command.operation);
                    n.reject(r("err")("FTS worker error"));
                } else {
                    n.resolve(t.result);
                }
                this.$5(t_reqId);
            }
        };
        e_prototype.startIndexer = function() {
            o("WAWebAppTracker").AppTracker.start(o("WAWebAppTracker").AppTrackerType.FTSIndex);
            return this.$6({
                operation: "start-indexer"
            }).finally(()=>{
                o("WAWebAppTracker").AppTracker.stop(o("WAWebAppTracker").AppTrackerType.FTSIndex);
            });
        };
        e_prototype.indexFull = function(t) {
            o("WAWebAppTracker").AppTracker.start(o("WAWebAppTracker").AppTrackerType.FTSIndex);
            return this.$6({
                operation: "run"
            }).finally(()=>{
                o("WAWebAppTracker").AppTracker.stop(o("WAWebAppTracker").AppTrackerType.FTSIndex);
            });
        };
        e_prototype.index = function() {
            o("WAWebAppTracker").AppTracker.start(o("WAWebAppTracker").AppTrackerType.FTSIndex);
            return this.$6({
                operation: "consume"
            }).finally(()=>{
                o("WAWebAppTracker").AppTracker.stop(o("WAWebAppTracker").AppTrackerType.FTSIndex);
            });
        };
        e_prototype.purge = function(t) {
            return this.$6({
                operation: "purge",
                ids: t
            });
        };
        e_prototype.purgeRange = function(t) {
            return this.$6(babelHelpers.extends({
                operation: "purge-range"
            }, t));
        };
        e_prototype.reInit = function() {
            return this.$6({
                operation: "re-init"
            });
        };
        e_prototype.initExternalStorage = function() {
            return (c || (c = n("Promise"))).resolve();
        };
        e_prototype.destroyExternalStorage = function() {
            return (c || (c = n("Promise"))).resolve();
        };
        e_prototype.clearInitializationPromises = function() {
            return this.$6({
                operation: "clear-init"
            });
        };
        e_prototype.search = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, queryOptions) {
                const n = yield this.$6({
                    operation: "find",
                    query: e,
                    queryOptions
                });
                return this.$7(n);
            });
            function t(t, n) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        e_prototype.$7 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                if (Array.isArray(e) || typeof e === "boolean") {
                    return {
                        canceled: false,
                        eof: true,
                        status: 404,
                        messages: []
                    };
                }
                const t = yield o("WAWebFtsClientMessageIdResolver").resolveMsgIds(e.messages);
                const { resolved, unresolved } = t;
                const { eof, status } = e;
                if (unresolved.length > 0) {
                    this.purge(unresolved);
                }
                return {
                    canceled: false,
                    eof,
                    status,
                    messages: resolved
                };
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        e_prototype.$6 = function(command) {
            const e = this;
            this.initialize();
            const reqId = r("WAWebFtsGenRequestId")();
            return new (c || (c = n("Promise")))(function(n, r) {
                const a = {
                    command,
                    reqId
                };
                e.$2.set(reqId, {
                    resolve: n,
                    reject: r,
                    command
                });
                e.$8(a);
            }).finally(()=>{
                e.$5(reqId);
            });
        };
        e_prototype.$5 = function(t) {
            this.$2.delete(t);
        };
        e_prototype.$8 = function(t) {
            r("nullthrows")(this.$1).postMessage(t);
        };
        return e;
    })();
    const _ = d_FtsSQLiteClient != null && r("WAWebEnvironment").isWindows ? new d_FtsSQLiteClient : new p;
    l.ftsClient = _;
}, 98);