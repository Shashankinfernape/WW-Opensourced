__d("WASmaxInChatstateServerNotificationRequest", [
    "WAResultOrError",
    "WASmaxInChatstateInternalTestMixin",
    "WASmaxInChatstateStateSource",
    "WASmaxInChatstateStateTypes",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "chatstate");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxInChatstateInternalTestMixin").parseInternalTestMixin(e);
        const r = o("WASmaxInChatstateStateSource").parseStateSource(e);
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxInChatstateStateTypes").parseStateTypes(e);
        if (a.success) {
            return o("WAResultOrError").makeResult({
                internalTestMixin: n.success ? n.value : null,
                stateSource: r.value,
                stateTypes: a.value
            });
        }
        return a;
    }
    l.parseServerNotificationRequest = e;
}, 98);