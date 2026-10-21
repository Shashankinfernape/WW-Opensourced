__d("WASmaxInChatstateStateTypes", [
    "WAResultOrError",
    "WASmaxInChatstateComposingMixin",
    "WASmaxInChatstatePausedMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxInChatstateComposingMixin").parseComposingMixin(e);
        if (t.success) {
            return o("WAResultOrError").makeResult({
                name: "Composing",
                value: t.value
            });
        }
        const n = o("WASmaxInChatstatePausedMixin").parsePausedMixin(e);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                name: "Paused",
                value: n.value
            });
        }
        return o("WASmaxParseUtils").errorMixinDisjunction(e, [
            "Composing",
            "Paused"
        ], [
            t,
            n
        ]);
    }
    l.parseStateTypes = e;
}, 98);