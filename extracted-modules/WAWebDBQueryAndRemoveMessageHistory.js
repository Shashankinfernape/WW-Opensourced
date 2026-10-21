__d("WAWebDBQueryAndRemoveMessageHistory", [
    "Promise",
    "WAWebDBDeleteAssociatedMsgsByMsgKey",
    "WAWebDBMessageRange",
    "WAWebDBMessageUtils",
    "WAWebFtsClient",
    "WAWebNoop",
    "WAWebSchemaMessage",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = o("WAWebDBMessageUtils").beginningOfChat(e);
            const n = o("WAWebDBMessageUtils").endOfChat(e);
            const r = yield o("WAWebSchemaMessage").getMessageTable().between([
                "internalId"
            ], t, n, {
                lowerInclusive: false,
                upperInclusive: false,
                limit: 1
            });
            if (r.length === 0) {
                return null;
            }
            const rowId = r[0].rowId;
            const i = yield o("WAWebSchemaMessage").getMessageTable().between([
                "internalId"
            ], t, n, {
                lowerInclusive: false,
                upperInclusive: false,
                limit: 1,
                reverse: true
            });
            if (i.length === 0) {
                return null;
            }
            const rowId_1 = i[0].rowId;
            const tsOfLastMessage = i[0].t;
            if (rowId == null || rowId_1 == null) {
                return null;
            }
            return {
                startRowId: rowId,
                endRowId: rowId_1,
                tsOfLastMessage
            };
        });
        return u.apply(this, arguments);
    }
    function c(e, t, n) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, range, n) {
            const a = yield o("WAWebDBMessageRange").deleteMessagesInMessageRange({
                chatId: e,
                options: n,
                range
            });
            o("WAWebFtsClient").ftsClient.purge(a).catch(r("WAWebNoop"));
            return a;
        });
        return d.apply(this, arguments);
    }
    function m(e) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const r = o("WAWebDBMessageUtils").beginningOfChat(t);
            const a = o("WAWebDBMessageUtils").endOfChat(t);
            const i = yield o("WAWebSchemaMessage").getMessageTable().between([
                "internalId"
            ], r, a, {
                lowerInclusive: false,
                upperInclusive: false,
                returnKeyType: "primary_key"
            });
            yield (e || (e = n("Promise"))).all([
                o("WAWebSchemaMessage").getMessageTable().bulkRemove(i),
                o("WAWebDBDeleteAssociatedMsgsByMsgKey").bulkDeleteMessagesByMsgKeys(i)
            ]);
            return i;
        });
        return p.apply(this, arguments);
    }
    l.getBoundsForChat = s;
    l.queryAndRemoveMessagesInMessageRange = c;
    l.queryAndRemoveMessageHistory = m;
}, 98);