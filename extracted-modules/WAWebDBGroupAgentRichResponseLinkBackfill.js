__d("WAWebDBGroupAgentRichResponseLinkBackfill", [
    "Promise",
    "WAWebBotGroupGatingUtils",
    "WAWebCommonTaskScheduler",
    "WAWebDBMessageSerialization",
    "WAWebDBMessageUtils",
    "WAWebGroupAgentRichResponseLinkIndex",
    "WAWebMsgType",
    "WAWebSchemaMessage",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = 500;
    const u = 10000;
    const c = new Set;
    const d = new Map;
    function m(t) {
        const r = t.toString();
        if (!t.isGroup() || !o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled() || c.has(r)) {
            return (e || (e = n("Promise"))).resolve([]);
        }
        const a = d.get(r);
        if (a != null) {
            return a;
        }
        const i = _(t, o("WAWebDBMessageUtils").endOfChat(t), 0, []).then((e)=>{
            c.add(r);
            return e;
        }).finally(()=>{
            d.delete(r);
        });
        d.set(r, i);
        return i;
    }
    function p() {
        c.clear();
        d.clear();
    }
    function _(e, t, n, r) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n, a) {
            const l = yield o("WAWebSchemaMessage").getMessageTable().between([
                "internalId"
            ], o("WAWebDBMessageUtils").beginningOfChat(e), t, {
                limit: Math.min(s, u - n),
                lowerInclusive: false,
                reverse: true,
                upperInclusive: false
            });
            const c = [];
            for (const d of l){
                const m = g(d, e.toString());
                if (m != null && d.rowId != null) {
                    c.push({
                        id: d.id,
                        hasLink: d.rowId
                    });
                    a.push(m);
                }
            }
            if (c.length > 0) {
                yield o("WAWebSchemaMessage").getMessageTable().bulkMergeOnly(c);
            }
            const p = n + l.length;
            const f = l[l.length - 1]?.internalId;
            if (l.length < s || p >= u || f == null) {
                return a;
            }
            yield r("WAWebCommonTaskScheduler").yield();
            return _(e, f, p, a);
        });
        return f.apply(this, arguments);
    }
    function g(e, t) {
        if (e.hasLink != null || e.type !== o("WAWebMsgType").MSG_TYPE.RICH_RESPONSE) {
            return null;
        }
        const n = o("WAWebDBMessageSerialization").messageFromDbRow(e);
        if (o("WAWebGroupAgentRichResponseLinkIndex").shouldIndexGroupAgentRichResponseLink(n, t)) {
            return n;
        }
        return null;
    }
    l.LINK_BACKFILL_BATCH_SIZE = s;
    l.backfillGroupAgentRichResponseLinkIndex = m;
    l.resetGroupAgentRichResponseLinkBackfillForTests = p;
}, 98);