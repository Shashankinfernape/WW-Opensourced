__d("RSTExternalLoggingDataStoreMainThread", [
    "FBLogger",
    "RSTConfig",
    "RSTLogForCrash",
    "getErrorSafe",
    "nextCrashLoggingSpanId"
], function(t, n, r, o, a, i, l) {
    const e = 100000;
    const s = 5000;
    const u = 500;
    class c {
        constructor(){
            this.$5 = false;
            this.$1 = new Map;
            this.$2 = new Map;
            this.$3 = new Map;
            this.$4 = new Map;
        }
        isValidValue(t) {
            return t == null || t.length <= s;
        }
        $6(n, o, a) {
            if (n.length > e || !this.isValidValue(o)) {
                if (!this.$5) {
                    r("FBLogger")("responsive-tracker").warn(a, n.length, o?.length ?? 0);
                }
                this.$5 = true;
                return false;
            }
            if (this.totalStoredPairCount() > u) {
                if (!this.$5) {
                    r("FBLogger")("responsive-tracker").warn("Too many key-value pairs for external span logging data (ignored)");
                }
                this.$5 = true;
                return false;
            }
            return true;
        }
        logSpanEnd(t) {
            this.$4.delete(t);
        }
        logSpanStart(t, n = null) {
            if (!this.$6(t, n, "Invalid key or annotation for external logging data (ignored), key size: %s, annotation size: %s")) {
                return -1;
            }
            const annotation = this.$7(t, n);
            const r = o("nextCrashLoggingSpanId").nextCrashLoggingSpanId();
            this.$4.set(r, {
                id: r,
                name: t,
                start: Date.now(),
                annotation
            });
            return r;
        }
        log(t, n, a) {
            if (!this.$6(t, n, "Invalid key or value for external logging data (ignored), key size: %s, value size: %s")) {
                return false;
            }
            let e = false;
            if (a === o("RSTLogForCrash").RSTLogMode.VALID_UNTIL_NEXT_HEARTBEAT) {
                e = this.$8(this.$2, t, n);
                this.$2.set(t, n);
            } else if (a === o("RSTLogForCrash").RSTLogMode.VALID_UNTIL_NEXT_WRITE) {
                e = this.$8(this.$1, t, n);
                this.$1.set(t, n);
            } else if (a === o("RSTLogForCrash").RSTLogMode.VALID_FOR_5_SECONDS || a === o("RSTLogForCrash").RSTLogMode.VALID_FOR_2_MINUTES) {
                e = true;
                this.$3.set(t, {
                    value: n,
                    createTime: Date.now(),
                    expirationTime: o("RSTLogForCrash").getExpirationTime(a) ?? Date.now()
                });
            } else {
                r("FBLogger")("responsive-tracker").warn("Invalid logMode");
            }
            return e;
        }
        $8(t, n, r) {
            return !t.has(n) || t.get(n) !== r;
        }
        totalStoredPairCount() {
            return this.$1.size + this.$2.size + this.$3.size + this.$4.size;
        }
        get(t) {
            if (this.$2.has(t)) {
                return this.$2.get(t) || null;
            }
            if (this.$1.has(t)) {
                return this.$1.get(t) || null;
            }
            const e = this.$3.get(t);
            if (e != null) {
                if (Date.now() < e.expirationTime) {
                    return e.value;
                }
                this.$3.delete(t);
            }
            return null;
        }
        clear() {
            this.$1.clear();
            this.clearNextHeartbeatStore();
        }
        clearNextHeartbeatStore() {
            this.$2.clear();
        }
        clearSpanStore() {
            this.$4.clear();
        }
        getAllSpanData() {
            const e = {};
            this.$4.forEach((t, n)=>{
                e[`${n}`] = t;
            });
            return e;
        }
        $9() {
            const e = Date.now();
            for (const [n, r] of this.$3){
                if (e >= r.expirationTime) {
                    this.$3.delete(n);
                }
            }
        }
        getTimedStoreData() {
            this.$9();
            return Object.fromEntries(Array.from(this.$3.entries()).map(([t, n])=>[
                    t,
                    n.value
                ]));
        }
        getAll() {
            return babelHelpers.extends({}, this.getTimedStoreData(), Object.fromEntries(this.$1), Object.fromEntries(this.$2));
        }
        $7(t, n) {
            const e = r("RSTConfig").logSpanAnnotationsMapping.get(t);
            if (e != null) {
                try {
                    return e(t, n);
                } catch (error) {
                    r("FBLogger")("responsive-tracker").catching(r("getErrorSafe")(error)).warn("Failed to attach built-in annotations for key %s", t);
                }
            }
            return n;
        }
    }
    const d = new c;
    l.loggingDataStore = d;
}, 98);