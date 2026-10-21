__d("WAWebGroupHistoryToggleModeStore", [
    "WAPromiseQueue",
    "WAWebDBGroupsGroupMetadata",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = new (o("WAPromiseQueue")).PromiseQueueMap;
    function s(t, r) {
        return e.enqueue(t.toString(), n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = yield o("WAWebDBGroupsGroupMetadata").getGroupMetadata(t);
            if (e?.shouldDefaultGroupHistoryShareOn === r) {
                return false;
            }
            yield o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(t, {
                shouldDefaultGroupHistoryShareOn: r
            });
            return true;
        }));
    }
    l.setGroupHistoryToggleMode = s;
}, 98);