__d("RSTWebWorkerClientMainThreadImpl", [
    "ErrorGuard",
    "FBLogger",
    "RSTConfig",
    "RSTUtils",
    "ResponsiveTrackerMainThread",
    "Run",
    "WorkerMessagePort",
    "getErrorSafe",
    "gkx"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = r("gkx")("4909") || r("gkx")("22276");
    class u {
        constructor(e){
            this.$1 = null;
            this.$2 = false;
            this.$3 = e;
        }
        $4() {
            if (this.$1 == null) {
                this.$1 = this.$3();
            }
            return this.$1;
        }
        startRSTFromMainThread(t = {}) {
            const n = this;
            if (!(!s || this.$2 || !o("RSTUtils").isIndexedDBSupported())) {
                const a = Math.max(t.extraDelayInMs ?? 0, r("RSTConfig").START_RST_FROM_MAIN_THREAD_EXTRA_DELAY_IN_MS);
                window.setTimeout(function() {
                    try {
                        const e = n.$4();
                        const t = new (o("WorkerMessagePort")).WorkerSyncedMessagePort(e, "RSTWorkerClient");
                        r("ResponsiveTrackerMainThread").init(t);
                        n.$2 = true;
                    } catch (error) {
                        const a = r("getErrorSafe")(error);
                        r("FBLogger")("responsive-tracker").catching(a).warn(`Failed to start worker: ${a.message}`);
                    }
                }, a);
            }
        }
        startRSTAfterPageLoadFromMainThread(n = {}) {
            const t = this;
            const a = o("Run").onAfterLoad(function() {
                (e || (e = r("ErrorGuard"))).applyWithGuard(function() {
                    return t.startRSTFromMainThread(n);
                }, null, []);
            });
        }
    }
    l.default = u;
}, 98);