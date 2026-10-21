__d("WAWebDynamicThrottlingManager", [], function(t, n, r, o, a, i) {
    const e = (()=>{
        function e(e, t = 0.2) {
            if (t <= 0.00001 || t >= 0.8) {
                const n = new Error("newValueRatio should be between 0.00001 and 0.8");
                n.stack;
                throw n;
            }
            this.average = e;
            this.lastValue = e;
            this.newValueRatio = t;
        }
        const t = e.prototype;
        t.addObservation = function(t) {
            this.average = this.average * (1 - this.newValueRatio) + t * this.newValueRatio;
            this.lastValue = t;
        };
        return e;
    })();
    const l = (()=>{
        function t(n) {
            this.targetTimeMs = n?.targetTimeMs ?? t.DEFAULT_TARGET_TIME_MS;
            this.maxDelayTimeMs = n?.maxDelayTimeMs ?? t.DEFAULT_MAX_DELAY_TIME_MS;
            this.minBatchSize = n?.minBatchSize ?? t.DEFAULT_MIN_BATCH_SIZE;
            this.maxBatchSize = n?.maxBatchSize ?? t.DEFAULT_MAX_BATCH_SIZE;
            this.defaultBatchSize = n?.defaultBatchSize ?? t.DEFAULT_BATCH_SIZE;
            this.batchSize = this.defaultBatchSize;
            this.averageTotalTime = new e(this.targetTimeMs / 1000, 0.2);
        }
        const n = t.prototype;
        n.getThrottleRate = function() {
            const e = this.getTotalTimeSeconds() * 0.5;
            const t = Math.min(e, this.maxDelayTimeMs / 1000);
            return {
                batchSize: this.batchSize,
                delayMs: t * 1000
            };
        };
        n.setLastProcessTime = function(t, n) {
            const e = t / 1000;
            this.averageTotalTime.addObservation(e);
            const r = this.targetTimeMs / 1000;
            const o = this.getTotalTimeSeconds();
            if (o < r) {
                if (o < r * 0.5) {
                    this.batchSize = this.batchSize > 20 ? Math.floor(this.batchSize * 1.2) : this.batchSize + 2;
                } else {
                    this.batchSize = this.batchSize > 20 ? Math.floor(this.batchSize * 1.1) : this.batchSize + 1;
                }
            } else if (o > r * 2) {
                this.batchSize = this.batchSize > 20 ? Math.floor(this.batchSize * 0.8) : this.batchSize - 2;
            } else {
                this.batchSize = this.batchSize > 20 ? Math.floor(this.batchSize * 0.9) : this.batchSize - 1;
            }
            this.batchSize = Math.max(this.minBatchSize, Math.min(this.batchSize, this.maxBatchSize));
        };
        n.getTotalTimeSeconds = function() {
            return Math.max(this.averageTotalTime.average, this.averageTotalTime.lastValue);
        };
        n.reset = function() {
            this.batchSize = this.defaultBatchSize;
            this.averageTotalTime = new e(this.targetTimeMs / 1000, 0.2);
        };
        n.getMetrics = function() {
            return {
                batchSize: this.batchSize,
                avgTotalTimeMs: this.averageTotalTime.average * 1000,
                lastTotalTimeMs: this.averageTotalTime.lastValue * 1000
            };
        };
        return t;
    })();
    l.DEFAULT_TARGET_TIME_MS = 400;
    l.DEFAULT_MAX_DELAY_TIME_MS = 3000;
    l.DEFAULT_MIN_BATCH_SIZE = 1;
    l.DEFAULT_MAX_BATCH_SIZE = 500;
    l.DEFAULT_BATCH_SIZE = 50;
    i.DynamicThrottlingManager = l;
}, 66);