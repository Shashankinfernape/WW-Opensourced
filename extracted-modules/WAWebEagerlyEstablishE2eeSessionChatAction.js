__d("WAWebEagerlyEstablishE2eeSessionChatAction", [
    "WAWebChatEagerlyEstablishE2EeSessionBridge"
], function(t, n, r, o, a, i, l) {
    const e = new Map;
    function s(t) {
        const n = t.id.toString();
        let r = e.get(n);
        if (!r) {
            r = o("WAWebChatEagerlyEstablishE2EeSessionBridge").eagerlyEstablishE2EESession(t);
            e.set(n, r);
        }
        return r;
    }
    function u(t) {
        e.delete(t);
    }
    l.eagerlyEstablishE2EESession = s;
    l.clearEagerE2EESessionCache = u;
}, 98);