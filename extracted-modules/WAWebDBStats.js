__d("WAWebDBStats", [
    "WAWebDBTableUsage",
    "gkx"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = (()=>{
        function e() {
            this.$1 = new Map;
            this.$2 = new Map;
        }
        const t = e.prototype;
        t.initTable = function(t) {
            if (r("gkx")("16539")) {
                if (!this.$1.has(t)) {
                    this.$1.set(t, {
                        readCount: 0,
                        writeCount: 0,
                        queryTimes: [],
                        recordCounts: [],
                        queryTimestamps: []
                    });
                }
                if (!this.$2.has(t)) {
                    this.$2.set(t, {
                        readCount: 0,
                        writeCount: 0,
                        queryTimes: [],
                        recordCounts: [],
                        queryTimestamps: []
                    });
                }
            }
        };
        t.trackReadTransaction = function(t, n, a) {
            o("WAWebDBTableUsage").recordTableUsageStat(t, "read");
            const e = self.performance.now() - n;
            if (r("gkx")("16539")) {
                const i = this.$1.get(t);
                if (i) {
                    i.queryTimes.push(e);
                    i.recordCounts.push(a);
                    i.readCount++;
                    i.queryTimestamps.push(Date.now());
                }
            }
        };
        t.trackWriteTransaction = function(t, n) {
            o("WAWebDBTableUsage").recordTableUsageStat(t, "write");
            const e = self.performance.now() - n;
            if (r("gkx")("16539")) {
                const a = this.$1.get(t);
                if (a) {
                    a.queryTimes.push(e);
                    a.writeCount++;
                    a.queryTimestamps.push(Date.now());
                }
            }
        };
        t.getStatsLog = function(t) {
            if (r("gkx")("16539")) {
                return this.$1.get(t);
            }
        };
        t.getStats = function(t) {};
        t.getAllStatsLog = function() {
            return new Map;
        };
        t.getAllStats = function() {
            return new Map;
        };
        t.resetStatsLog = function() {
            if (r("gkx")("16539")) {
                this.$1.clear();
            }
        };
        t.resetStats = function() {};
        return e;
    })();
    const s = new e;
    l.dbStats = s;
}, 98);