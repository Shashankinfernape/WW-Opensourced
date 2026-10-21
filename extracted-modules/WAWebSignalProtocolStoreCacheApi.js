__d("WAWebSignalProtocolStoreCacheApi", [
    "NativeSchedulerTickStrategy",
    "TaskScheduler",
    "TaskSchedulerPriority",
    "WASemaphore",
    "WAWebStructuredClone",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    const e = (()=>{
        function e() {
            let e;
            this.RegistrationInfo = null;
            this.SignedPreKeyStore = new Map;
            this.PrekeyStore = new Map;
            this.SessionStore = new Map;
            this.IdentityStore = new Map;
            this.SenderKeyStore = new Map;
            this.Mutex = {
                session: new (e = o("WASemaphore")).Semaphore,
                identity: new e.Semaphore,
                senderKey: new e.Semaphore,
                preKey: new e.Semaphore
            };
            this.Dirty = {
                session: new Set,
                identity: new Set,
                senderKey: new Set,
                preKey: new Set
            };
        }
        const t = e.prototype;
        t.$1 = function() {
            const e = this;
            const t = [];
            const n = [];
            this.Dirty.session.forEach((o)=>{
                const a = e.SessionStore.get(o);
                if (a) {
                    if (a.deleted) {
                        n.push(o);
                    } else {
                        t.push({
                            address: o,
                            session: r("WAWebStructuredClone")(a.session)
                        });
                    }
                }
            });
            return {
                update: t,
                remove: n
            };
        };
        t.$2 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const e = this;
                const t = [];
                const n = [];
                const a = function(a) {
                    const o = e.SessionStore.get(a);
                    if (o) {
                        if (o.deleted) {
                            n.push(a);
                        } else {
                            t.push({
                                address: a,
                                session: r("WAWebStructuredClone")(o.session)
                            });
                        }
                    }
                };
                const i = o("TaskScheduler").taskScheduler("signal", {
                    concurrency: 1
                }, o("NativeSchedulerTickStrategy").makeNativeSchedulerTickStrategy());
                for (const l of this.Dirty.session){
                    a(l);
                    yield i.yield(o("TaskSchedulerPriority").HIGH_PRIORITY);
                }
                return {
                    update: t,
                    remove: n
                };
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t.$3 = function() {
            const e = this;
            const t = [];
            this.Dirty.senderKey.forEach((n)=>{
                const o = e.SenderKeyStore.get(n);
                if (o != null && o !== "") {
                    const a = n.split("::");
                    if (a.length === 2) {
                        t.push({
                            senderKeyName: n,
                            senderId: a[1],
                            senderKey: r("WAWebStructuredClone")(o)
                        });
                    }
                }
            });
            return t;
        };
        t.$4 = function() {
            const e = this;
            const t = [];
            const n = [];
            this.Dirty.identity.forEach((r)=>{
                const o = e.IdentityStore.get(r);
                if (o) {
                    if (o.deleted) {
                        n.push(r);
                    } else {
                        t.push({
                            identifier: r,
                            identityKey: o.identityKey,
                            rowId: o.rowId,
                            sentAddonRowId: o.sentAddonRowId,
                            accountEncryptionState: o.accountEncryptionState
                        });
                    }
                }
            });
            return {
                update: t,
                remove: n
            };
        };
        t.$5 = function() {
            const e = this;
            const t = [];
            this.Dirty.preKey.forEach((n)=>{
                const r = e.PrekeyStore.get(n);
                if (r != null && r.deleted) {
                    t.push(parseInt(n, 10));
                }
            });
            return t;
        };
        t.generateCacheUpdate = function() {
            const e = this.$4();
            const t = this.$1();
            const n = {
                sessionUpdate: t.update,
                sessionRemove: t.remove,
                identityUpdate: e.update,
                identityRemove: e.remove,
                senderKeyUpdate: this.$3(),
                preKeyRemove: this.$5()
            };
            return n;
        };
        t.generateCacheUpdateThrottled = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const e = this.$4();
                const t = yield this.$2();
                const n = {
                    sessionUpdate: t.update,
                    sessionRemove: t.remove,
                    identityUpdate: e.update,
                    identityRemove: e.remove,
                    senderKeyUpdate: this.$3(),
                    preKeyRemove: this.$5()
                };
                return n;
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t.hasDirty = function() {
            return this.Dirty.session.size > 0 || this.Dirty.identity.size > 0 || this.Dirty.senderKey.size > 0 || this.Dirty.preKey.size > 0;
        };
        t.clearDirty = function() {
            this.Dirty = {
                session: new Set,
                identity: new Set,
                senderKey: new Set,
                preKey: new Set
            };
        };
        t.clear = function() {
            this.RegistrationInfo = null;
            this.SignedPreKeyStore.clear();
            this.PrekeyStore.clear();
            this.SessionStore.clear();
            this.IdentityStore.clear();
            this.SenderKeyStore.clear();
            this.clearDirty();
        };
        return e;
    })();
    function s(e) {}
    l.SignalStoreCache = e;
}, 98);