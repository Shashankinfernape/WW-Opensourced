__d("WAWebApiUpdateReplyCount", [
    "WAWebSchemaMessage",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = [];
            for (const [i, l] of e){
                const s = t.getByParentMsgKey(i);
                if (s != null) {
                    const u = s.replyCount ?? 0;
                    n.push({
                        id: i,
                        replyCount: u + l
                    });
                }
            }
            yield o("WAWebSchemaMessage").getMessageTable().bulkCreateOrMerge(n);
        });
        return s.apply(this, arguments);
    }
    l.updateReplyCountInParentMsgs = e;
}, 98);