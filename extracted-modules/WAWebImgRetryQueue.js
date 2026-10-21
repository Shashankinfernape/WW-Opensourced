__d("WAWebImgRetryQueue", [
    "Promise",
    "WAAbortError",
    "WABackoffUtils",
    "WAPromiseRaceAbort",
    "WAResolvable",
    "WAWebIdleTaskRunner",
    "WAWebMiscErrors",
    "WAWebNetworkStatus",
    "WAWebNoop",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = 20;
    const u = 10;
    const c = (()=>{
        function t() {
            this.$1 = new Map;
            this.$2 = new Map;
            this.$3 = 0;
        }
        t.maxInProgressRetry = function() {
            return s;
        };
        const a = t.prototype;
        a.enqueue = function(r) {
            const t = this.$1.get(r.key());
            if (t) {
                if (r.hasPrivacyChecks !== t.hasPrivacyChecks) {
                    const a = `Img:hasPrivacyChecks shouldn't change ${r.key()}`;
                    return (e || (e = n("Promise"))).reject(a);
                }
                t.refCount++;
                return t.deferred.promise;
            }
            r.deferred = new (o("WAResolvable")).Resolvable;
            r.refCount++;
            this.$5(r);
            return r.deferred.promise;
        };
        a.remove = function(t) {
            const e = t.key();
            this.$1.delete(e);
            const n = this.$2.get(e);
            if (n) {
                n.controller.abort();
                this.$2.delete(e);
            }
        };
        a.$5 = function(t) {
            const e = this;
            const n = t.generation;
            t.generation++;
            if (n > u) {
                const a = `Stop retrying ${t.src} after ${u} times`;
                throw new (o("WAWebMiscErrors")).GaveUpRetry(a);
            }
            const i = t.key();
            if (n === 0) {
                this.$1.set(i, t);
                this.$6();
            } else {
                const l = new AbortController;
                const s = l.signal;
                const c = r("WAPromiseRaceAbort")(o("WABackoffUtils").expDelaySec(n, 60, 0), s).catch(o("WAAbortError").catchAbort(r("WAWebNoop"))).then(()=>{
                    e.$2.delete(i);
                    if (!s.aborted) {
                        e.$1.set(i, t);
                    }
                    e.$6();
                });
                this.$2.set(t.key(), {
                    promise: c,
                    controller: l
                });
            }
        };
        a.$6 = function() {
            const e = this;
            if (!this.$4) {
                this.$4 = r("WAWebNetworkStatus").waitIfOffline().then(()=>{
                    e.$4 = null;
                    o("WAWebIdleTaskRunner").UIBusyTasks.enqueue(function() {
                        e.$7();
                    });
                });
            }
        };
        a.$7 = function() {
            for(let e = this.$1.values(), n; (n = e.next()) && !n.done && !(this.$3 > t.maxInProgressRetry());){
                const o = n.value;
                this.$8(r("nullthrows")(o));
            }
        };
        a.$8 = function(t) {
            const e = this;
            if (!t.inProgress) {
                if (t.deferred.resolveWasCalled()) {
                    this.$1.delete(t.key());
                    return;
                }
                this.$3++;
                t.sendXHR().then((n)=>{
                    e.$1.delete(t.key());
                    if (n) {
                        t.deferred.resolve();
                    } else if (t.shouldRetain()) {
                        e.$5(t);
                    }
                }).catch((n)=>{
                    e.$1.delete(t.key());
                    t.deferred.reject(n);
                }).finally(()=>{
                    e.$3--;
                });
            }
        };
        return t;
    })();
    l.default = c;
}, 98);