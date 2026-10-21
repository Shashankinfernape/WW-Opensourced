__d("WAWebDBMarkFutureproofMessagesReparsed", [
    "WALogger",
    "WAWebMsgType",
    "WAWebSchemaMessage",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            try {
                if (t.length === 0) {
                    return;
                }
                const n = yield o("WAWebSchemaMessage").getMessageTable().bulkGet(t);
                const r = n.filter((e)=>e != null && e.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN);
                if (r.length === 0) {
                    return;
                }
                const a = r.map((e)=>({
                        id: e.id.toString(),
                        futureproofReparsed: true
                    }));
                yield o("WAWebSchemaMessage").getMessageTable().bulkCreateOrMerge(a);
            } catch (error) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "markFutureproofMessagesReparsed: error ",
                    ""
                ])), error);
                throw error;
            }
        });
        return u.apply(this, arguments);
    }
    l.markFutureproofMessagesReparsed = s;
}, 98);