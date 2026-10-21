__d("WAWebDBDrainBotOrphansForHistoryMsgs", [
    "Promise",
    "WALogger",
    "WAWebBotGating",
    "WAWebBotGroupGatingUtils",
    "WAWebDBGetByParentMsgKey",
    "WAWebDBMessageSerialization",
    "WAWebDBProcessOrphansForNewMsg",
    "WAWebLidMigrationUtils",
    "WAWebMessageAddOnType",
    "WAWebSchemaMessage",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            try {
                const a = f(t);
                if (a.size === 0) {
                    return;
                }
                const i = yield o("WAWebDBGetByParentMsgKey").bulkGetMessageOrphansByParentMsgKey(Array.from(a.values(), function({ key }) {
                    return key;
                }));
                const l = new Set;
                for (const c of i){
                    const d = a.get(c.parentMsgKey);
                    if (c.type === o("WAWebMessageAddOnType").MessageAddOnType.BotMsmsg && d != null) {
                        l.add(d.msg);
                    }
                }
                if (l.size === 0 || !m(l)) {
                    return;
                }
                const _ = yield p(Array.from(l));
                const g = yield (u || (u = n("Promise"))).allSettled(_.map((e)=>o("WAWebDBProcessOrphansForNewMsg").processOrphansForNewMsg(e)));
                for (const h of g){
                    if (h.status === "rejected") {
                        o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "drainBotOrphansForHistoryMsgs: draining the bot orphans of a target failed"
                        ]))).catching(r("getErrorSafe")(h.reason)).tags("messaging").sendLogs("bot-orphan-history-drain-failed");
                    }
                }
            } catch (e) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "drainBotOrphansForHistoryMsgs: draining bot orphans failed"
                ]))).catching(r("getErrorSafe")(e)).tags("messaging").sendLogs("bot-orphan-history-drain-failed", {
                    sampling: 0.01
                });
            }
        });
        return d.apply(this, arguments);
    }
    function m(e) {
        if (o("WAWebBotGating").isBotOrphanMsgEnabled()) {
            return true;
        }
        return Array.from(e).some((e)=>e.id.remote.isGroup()) && o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled();
    }
    function p(e) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (e.length === 0) {
                return [];
            }
            const t = yield o("WAWebSchemaMessage").getMessageTable().bulkGet(e.map((e)=>e.id.toString()));
            return e.filter((e, n)=>{
                const r = t[n];
                return r != null && o("WAWebDBMessageSerialization").messageFromDbRow(r).messageSecret != null;
            });
        });
        return _.apply(this, arguments);
    }
    function f(e) {
        const t = new Map;
        for (const n of e){
            if (n.messageSecret != null) {
                for (const r of [
                    n.id,
                    o("WAWebLidMigrationUtils").getAlternateMsgKey(n.id)
                ]){
                    if (r != null) {
                        t.set(r.toString(), {
                            key: r,
                            msg: n
                        });
                    }
                }
            }
        }
        return t;
    }
    l.drainBotOrphansForHistoryMsgs = c;
}, 98);