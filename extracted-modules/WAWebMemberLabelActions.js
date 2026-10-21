__d("WAWebMemberLabelActions", [
    "WAWebMemberLabelJob",
    "WAWebMemberLabelKey",
    "WAWebMemberLabelModel",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield o("WAWebMemberLabelJob").getMemberLabelsForGroups({
                chatId: e
            });
            if (t) {
                return Array.from(t.entries(), function([n, o]) {
                    const a = new (r("WAWebMemberLabelKey"))({
                        chatId: e,
                        member: n
                    });
                    const i = new (r("WAWebMemberLabelModel"));
                    i.id = a;
                    i.label = o.label;
                    i.lastEditTimestamp = o.lastEditTimestamp;
                    return i;
                });
            }
        });
        return s.apply(this, arguments);
    }
    l.getMemberLabelsForGroupAction = e;
}, 98);