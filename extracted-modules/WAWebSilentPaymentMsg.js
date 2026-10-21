__d("WAWebSilentPaymentMsg", [
    "WAWebBrazilPaymentStateUpdatePayload",
    "justknobx"
], function(t, n, r, o, a, i, l) {
    const e = 32;
    const s = new Set;
    function u(t) {
        const n = t.toString();
        if (!s.has(n) && s.size >= e) {
            const r = s.values().next().value;
            if (r != null) {
                s.delete(r);
            }
        }
        s.add(n);
    }
    function c(e) {
        return (o("WAWebBrazilPaymentStateUpdatePayload").isBrazilPaymentStateUpdateMsg(e) || s.has(e.id.toString())) && r("justknobx")._("6395");
    }
    l.markSilentPaymentReceipt = u;
    l.isSilentPaymentMsg = c;
}, 98);