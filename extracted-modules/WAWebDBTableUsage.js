__d("WAWebDBTableUsage", [
    "WAWebDBStats",
    "WAWebWebDbTableUsageWamEvent"
], function(t, n, r, o, a, i, l) {
    const e = new Map;
    const s = 50;
    const u = new Map;
    function c({ offlineSessionId: n, tablesToLog: r, webScenario: a }) {
        const i = new Map;
        const l = new Map;
        for (const c of r){
            const d = o("WAWebDBStats").dbStats.getStats(c) || {
                readCount: 0,
                writeCount: 0
            };
            const m = new (o("WAWebWebDbTableUsageWamEvent")).WebDbTableUsageWamEvent({
                webScenario: a,
                webTableReadCount: 0,
                webTableWriteCount: 0,
                webTable: c
            });
            i.set(c, m);
            l.set(c, {
                startReadCount: d.readCount,
                startWriteCount: d.writeCount
            });
        }
        function p() {
            const t = u.get(p);
            if (n != null) {
                for (const r of i.values()){
                    r.offlineSessionId = n;
                }
            }
            for (const [l, c] of i.entries()){
                {
                    const d = o("WAWebDBStats").dbStats.getStats(l) || {
                        readCount: 0,
                        writeCount: 0
                    };
                    const m = t?.get(l) || {
                        startReadCount: 0,
                        startWriteCount: 0
                    };
                    const _ = d.readCount - m.startReadCount;
                    const f = d.writeCount - m.startWriteCount;
                    c.webTableReadCount = _;
                    c.webTableWriteCount = f;
                    if (_ > s || f > s || c.webTable === "message") {
                        c.commit();
                    }
                }
            }
            e.delete(p);
            u.delete(p);
            return e.size;
        }
        e.set(p, i);
        u.set(p, l);
        return p;
    }
    function d(t, n) {
        for (const r of e){
            const a = r[1];
            const i = a.get(t);
            if (i != null) {
                const l = o("WAWebDBStats").dbStats.getStats(t);
                if (l) {
                    if (n === "read") {
                        i.webTableReadCount = l.readCount;
                    } else {
                        i.webTableWriteCount = l.writeCount;
                    }
                }
            }
        }
    }
    l.beginDBTableUsage = c;
    l.recordTableUsageStat = d;
}, 98);