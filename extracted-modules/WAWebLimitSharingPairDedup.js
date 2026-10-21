__d("WAWebLimitSharingPairDedup", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = 60000;
    const l = 1000;
    const s = new Map;
    function u(e, t) {
        const r = Number(t.settingTimestamp ?? 0);
        if (!(r <= 0)) {
            const o = Date.now();
            if (s.size >= l) {
                m(o);
            }
            s.set(e, {
                enabled: t.enabled,
                fromMe: t.fromMe,
                settingTimestamp: r,
                receivedAt: o
            });
        }
    }
    function c(t, n) {
        const o = s.get(t);
        if (o == null) {
            return false;
        }
        if (Date.now() - o.receivedAt > e) {
            s.delete(t);
            return false;
        }
        const a = o.enabled === n.enabled && o.fromMe === n.fromMe && o.settingTimestamp === Number(n.settingTimestamp ?? 0);
        if (a) {
            s.delete(t);
        }
        return a;
    }
    function d() {
        s.clear();
    }
    function m(t) {
        for (const [r, o] of s){
            if (t - o.receivedAt > e) {
                s.delete(r);
            }
        }
    }
    i.recordAcp2ProtocolMessage = u;
    i.consumePairedRedundantAcp1 = c;
    i.clearAcp2ProtocolRecordsForTests = d;
}, 66);