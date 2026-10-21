__d("WASmaxInPreKeysForceOverrideE2EEStateMixin", [
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").flattenedChildWithTag(e, "force_override_e2ee_state");
        if (t.success) {
            return o("WASmaxParseUtils").voidSuccess;
        }
        return t;
    }
    l.parseForceOverrideE2EEStateMixin = e;
}, 98);