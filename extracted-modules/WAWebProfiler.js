__d("WAWebProfiler", [
    "WALogger",
    "WAShiftTimer",
    "WATypeUtils",
    "WAWebDBStats",
    "WAWebGetAllModelStorageTableNames",
    "WAWebIdentityFunction",
    "WAWebNoop",
    "compactMap",
    "gkx",
    "sumBy"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = function(t) {
        this.val = t;
        this.prev = null;
        this.next = null;
    };
    const u = (()=>{
        function e() {
            this.head = new s(null);
            this.tail = new s(null);
            this.head.next = this.tail;
            this.tail.prev = this.head;
            this.size = 0;
        }
        const t = e.prototype;
        t.add = function(t) {
            const e = this.tail.prev;
            if (e) {
                t.prev = e;
                t.next = this.tail;
                e.next = t;
                this.tail.prev = t;
                this.size++;
            }
        };
        return e;
    })();
    const c = 60;
    function d(e, t) {
        return {
            table: t,
            "# reads": e.readCount,
            "# writes": e.writeCount,
            "mean query time (ms)": e.queryTimes && e.queryTimes.length > 0 ? Number((r("sumBy")(e.queryTimes, o("WAWebIdentityFunction").identityFunction) / e.queryTimes.length).toFixed(2)) : 0,
            "max query time (ms)": e.queryTimes && e.queryTimes.length > 0 ? Number(Math.max(...e.queryTimes).toFixed(2)) : 0,
            "mean records": e.recordCounts && e.recordCounts.length > 0 ? Number((r("sumBy")(e.recordCounts, o("WAWebIdentityFunction").identityFunction) / e.recordCounts.length).toFixed(2)) : 0,
            "max records": e.recordCounts && e.recordCounts.length > 0 ? Math.max(...e.recordCounts) : 0
        };
    }
    function m(e) {
        if (!r("gkx")("26258")) {
            const t = e == null ? o("WAWebGetAllModelStorageTableNames").allModelStorageTableNames : [
                e
            ];
            const n = r("compactMap")(t, function(e) {
                const t = o("WAWebDBStats").dbStats.getStatsLog(e);
                if (t) {
                    return d(t, e);
                }
                return null;
            });
            if (n.length > 0) {
                const a = e == null ? o("WAWebGetAllModelStorageTableNames").allModelStorageTableNames : [
                    e
                ];
                const i = r("compactMap")(a, function(e) {
                    const t = o("WAWebDBStats").dbStats.getStatsLog(e);
                    if (t) {
                        return d(t, e);
                    }
                    return null;
                });
                console.groupCollapsed("[db-stats] Click to expand");
                console.table(i);
                console.groupEnd();
            }
        }
    }
    const p = (()=>{
        function t() {
            const e = this;
            if (r("gkx")("26258")) {
                this.dbLockStats = new Map;
                this.dbReadWriteStats = new Map;
                this.seen = new Map;
                this.reports = {};
                this.removeOlderLockStatsTimer = new (o("WAShiftTimer")).ShiftTimer(r("WAWebNoop"));
                return;
            }
            this.dbLockStats = new Map;
            this.dbReadWriteStats = new Map;
            this.seen = new Map;
            this.reports = {};
            this.removeOlderLockStatsTimer = new (o("WAShiftTimer")).ShiftTimer(function() {
                const t = Date.now();
                e.dbLockStats.forEach((e, n)=>{
                    for(let r = e.head.next, o = e.tail; (a = r) != null && a.val && r !== o;){
                        var a;
                        if (t - r.val.t <= c * 1000) {
                            break;
                        }
                        const { prev: i, next: l } = r;
                        if (i && l) {
                            r.next = null;
                            r.prev = null;
                            i.next = l;
                            l.prev = i;
                            e.size--;
                        }
                        r = l;
                    }
                });
                e.removeOlderLockStatsTimer.onOrAfter(c / 2 * 1000);
            });
            this.removeOlderLockStatsTimer.onOrBefore(c / 2 * 1000);
        }
        const n = t.prototype;
        n.recordLockStat = function(t, n = "default") {
            if (!r("gkx")("26258")) {
                const o = Date.now();
                let a = this.dbLockStats.get(n);
                if (a == null) {
                    a = new u;
                    this.dbLockStats.set(n, a);
                }
                if (!this.seen.has(t)) {
                    const i = {
                        id: t,
                        group: n,
                        t: o,
                        timestamps: []
                    };
                    this.seen.set(t, i);
                    a.add(new s(i));
                }
                this.seen.get(t)?.timestamps.push(o);
            }
        };
        n.lockReport = function() {
            if (r("gkx")("26258")) {
                return [];
            }
            const t = [];
            try {
                this.dbLockStats.forEach((e, n)=>{
                    const r = {
                        group: n
                    };
                    const a = [];
                    for(var i = e.head.next, l = new Map, s = 0; (u = i) != null && u.val && i !== e.tail;){
                        var u;
                        const m = i.val;
                        const p = m.timestamps[m.timestamps.length - 1];
                        if (!o("WATypeUtils").isNumber(m.row) && m.timestamps.length === 3) {
                            for(var _ = 0; _ < a.length; _++){
                                if (a[_] <= m.t) {
                                    s = _;
                                    break;
                                }
                            }
                            if (_ === a.length) {
                                m.row = a.length;
                                a.push(-1);
                            } else {
                                m.row = s;
                            }
                        }
                        if (!l.has(m.row)) {
                            l.set(m.row, []);
                        }
                        l.get(m.row)?.push({
                            timeRange: [
                                m.t,
                                m.timestamps[1]
                            ],
                            val: "waiting"
                        });
                        l.get(m.row)?.push({
                            timeRange: [
                                m.timestamps[1],
                                p
                            ],
                            val: "acquired"
                        });
                        const f = m.row === void 0 ? -1 : m.row;
                        if (f !== -1) {
                            a[f] = Math.max(a[f], p);
                        }
                        i = i.next;
                    }
                    const g = [];
                    l.forEach((e, t)=>{
                        g.push({
                            label: `${t ?? "null"}`,
                            data: e
                        });
                    });
                    t.push(babelHelpers.extends({}, r, {
                        data: g
                    }));
                });
            } catch (t) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "error while generating profiler report"
                ]))).verbose();
            }
            return t;
        };
        n.export = function() {
            if (r("gkx")("26258")) {
                return "";
            }
            return JSON.stringify(this.reports);
        };
        n.getAllReports = function() {
            if (r("gkx")("26258")) {
                return {};
            }
            this.reports.lock = this.lockReport();
            return this.reports;
        };
        return t;
    })();
    const _ = new p;
    l.calculateStats = d;
    l.logDBStatsDev = m;
    l.Profiler = _;
}, 98);