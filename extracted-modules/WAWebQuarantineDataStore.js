__d("WAWebQuarantineDataStore", [
    "WATimeUtils",
    "WAWebCommonMsgUtils",
    "WAWebDefenseModeQuarantineLogger",
    "WAWebSchemaQuarantineData",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = [];
        for (const n of e){
            const originalProtobuf = n.quarantineOriginalProtobuf;
            if (o("WAWebCommonMsgUtils").isQuarantinedMsg(n.type) && originalProtobuf != null) {
                const l = t[0]?.createdAt ?? o("WATimeUtils").unixTimeMs();
                t.push({
                    msgId: n.id.toString(),
                    originalProtobuf,
                    createdAt: l
                });
            }
        }
        return t;
    }
    function s(e, t) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (e.length !== 0) {
                o("WAWebDefenseModeQuarantineLogger").logQuarantinedMessage(e.length);
                const n = t ?? o("WAWebSchemaQuarantineData").getTable();
                yield n.bulkCreateOrReplace(e);
            }
        });
        return u.apply(this, arguments);
    }
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = o("WAWebSchemaQuarantineData").getTable();
            yield t.bulkRemove(e);
        });
        return d.apply(this, arguments);
    }
    function m(e) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = o("WAWebSchemaQuarantineData").getTable();
            return t.get(e);
        });
        return p.apply(this, arguments);
    }
    function _(e, t) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = o("WAWebSchemaQuarantineData").getTable();
            return n.lessThan([
                "createdAt"
            ], e, {
                limit: t
            });
        });
        return f.apply(this, arguments);
    }
    function g(e) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = o("WAWebSchemaQuarantineData").getTable();
            return t.all({
                limit: e,
                index: [
                    "createdAt"
                ],
                reverse: true
            });
        });
        return h.apply(this, arguments);
    }
    function y(e) {
        return C.apply(this, arguments);
    }
    function C() {
        C = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = o("WAWebSchemaQuarantineData").getTable();
            yield t.remove(e);
        });
        return C.apply(this, arguments);
    }
    l.extractQuarantineDataFromMessages = e;
    l.bulkCreateOrReplaceQuarantineData = s;
    l.bulkDeleteQuarantineData = c;
    l.getQuarantineData = m;
    l.getQuarantineDataBatchOlderThan = _;
    l.getQuarantineDataBatch = g;
    l.deleteQuarantineData = y;
}, 98);