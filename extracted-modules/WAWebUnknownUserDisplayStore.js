__d("WAWebUnknownUserDisplayStore", [
    "WATimeUtils"
], function(t, n, r, o, a, i, l) {
    const e = 4 * o("WATimeUtils").WEEK_SECONDS;
    const s = 500;
    const u = new Map;
    function c() {
        let e = u.size - s;
        if (!(e <= 0)) {
            const t = Array.from(u.keys()).sort((e, t)=>{
                const o = u.get(e);
                const a = u.get(t);
                return (o?.lastDisplayedAt ?? 0) - (a?.lastDisplayedAt ?? 0);
            });
            for (const n of t){
                if (e <= 0) {
                    break;
                }
                u.delete(n);
                e--;
            }
        }
    }
    function d(t) {
        const n = o("WATimeUtils").unixTime();
        const r = t.toString();
        const a = u.get(r);
        if (a == null || n - a.lastDisplayedAt >= e) {
            u.set(r, {
                firstDisplayedAt: n,
                lastDisplayedAt: n
            });
            c();
            return {
                durationInSecs: 0,
                isFirstDisplay: true
            };
        }
        a.lastDisplayedAt = n;
        return {
            durationInSecs: n - a.firstDisplayedAt,
            isFirstDisplay: false
        };
    }
    l.MAX_EPISODE_ENTRIES = s;
    l.recordDisplayForJid = d;
}, 98);