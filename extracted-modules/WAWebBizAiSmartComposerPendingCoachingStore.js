__d("WAWebBizAiSmartComposerPendingCoachingStore", [], function(t, n, r, o, a, i) {
    const e = new Map;
    function l(t) {
        e.set(t.canonicalChatId.toString(), t);
    }
    function s(t) {
        const n = t.toString();
        const r = e.get(n);
        e.delete(n);
        return r ?? null;
    }
    function u(t) {
        e.delete(t.toString());
    }
    function c(e, t, n, r) {
        if (!r && t.trim().length > 0 && n.trim().length === 0) {
            u(e);
        }
    }
    function d() {
        e.clear();
    }
    i.rememberPendingCoachingSnapshot = l;
    i.consumePendingCoachingSnapshot = s;
    i.discardPendingCoachingSnapshot = u;
    i.maybeDiscardPendingCoachingSnapshotForComposerChange = c;
    i.clearPendingCoachingSnapshotsForTests = d;
}, 66);