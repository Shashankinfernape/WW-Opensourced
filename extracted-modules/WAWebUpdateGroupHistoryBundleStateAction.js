__d("WAWebUpdateGroupHistoryBundleStateAction", [
    "WAWebMsgCollection",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = o("WAWebMsgCollection").MsgCollection.get(e);
            if (!(n == null || n.groupHistoryBundleMetadata == null)) {
                u(n, t);
            }
        });
        return s.apply(this, arguments);
    }
    function u(e, processState) {
        if (e.groupHistoryBundleMetadata != null) {
            e.set({
                groupHistoryBundleMetadata: babelHelpers.extends({}, e.groupHistoryBundleMetadata, {
                    processState
                })
            });
        }
    }
    l.updateGroupHistoryBundleState = e;
}, 98);