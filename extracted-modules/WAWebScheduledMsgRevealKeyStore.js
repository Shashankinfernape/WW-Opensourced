__d("WAWebScheduledMsgRevealKeyStore", [
    "WATimeUtils",
    "WAWebBackendApi",
    "WAWebScheduledMsgConstants",
    "WAWebSchemaScheduledMsgRevealKey",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = o("WAWebSchemaScheduledMsgRevealKey").getScheduledMsgRevealKeyTable();
            yield t.createOrReplace(e);
            o("WAWebBackendApi").frontendFireAndForget("triggerScheduledMsgChangedFromBridge", {
                chatId: e.chatId
            });
        });
        return s.apply(this, arguments);
    }
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = o("WAWebSchemaScheduledMsgRevealKey").getScheduledMsgRevealKeyTable();
            return t.get(e);
        });
        return c.apply(this, arguments);
    }
    function d(e) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const n = o("WAWebSchemaScheduledMsgRevealKey").getScheduledMsgRevealKeyTable();
            const r = yield n.equals([
                "revealKeyId"
            ], e);
            return r[0] ?? null;
        });
        return m.apply(this, arguments);
    }
    function p(e) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = o("WAWebSchemaScheduledMsgRevealKey").getScheduledMsgRevealKeyTable();
            return t.equals([
                "chatId"
            ], e);
        });
        return _.apply(this, arguments);
    }
    function f(e, t) {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = o("WAWebSchemaScheduledMsgRevealKey").getScheduledMsgRevealKeyTable();
            yield n.merge(e, {
                status: t
            });
            const r = yield n.get(e);
            if (r != null) {
                o("WAWebBackendApi").frontendFireAndForget("triggerScheduledMsgChangedFromBridge", {
                    chatId: r.chatId
                });
            }
        });
        return g.apply(this, arguments);
    }
    function h(e) {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = o("WAWebSchemaScheduledMsgRevealKey").getScheduledMsgRevealKeyTable();
            yield t.remove(e);
            o("WAWebBackendApi").frontendFireAndForget("triggerScheduledMsgRevealedFromBridge", {
                msgId: e
            });
        });
        return y.apply(this, arguments);
    }
    function C(e) {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = o("WAWebSchemaScheduledMsgRevealKey").getScheduledMsgRevealKeyTable();
            const n = yield t.equals([
                "chatId"
            ], e);
            if (n.length === 0) {
                return [];
            }
            const r = n.map((e)=>e.msgId);
            yield t.bulkRemove(r);
            return r;
        });
        return b.apply(this, arguments);
    }
    function v() {
        return S.apply(this, arguments);
    }
    function S() {
        S = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = o("WAWebSchemaScheduledMsgRevealKey").getScheduledMsgRevealKeyTable();
            const t = o("WATimeUtils").unixTime() - o("WAWebScheduledMsgConstants").SCHEDULED_MSG_REVEAL_KEY_RETENTION_DAYS * o("WATimeUtils").DAY_SECONDS;
            const n = yield e.all();
            const r = n.filter((e)=>{
                const n = e.scheduledTimestampS > 0 ? e.scheduledTimestampS : e.createdAt;
                return n < t;
            }).map((e)=>e.msgId);
            if (r.length > 0) {
                yield e.bulkRemove(r);
            }
        });
        return S.apply(this, arguments);
    }
    l.storeRevealKey = e;
    l.getRevealKeyByMsgId = u;
    l.getRevealKeyByRevealKeyId = d;
    l.getRevealKeysForChat = p;
    l.updateRevealKeyStatus = f;
    l.deleteRevealKey = h;
    l.deleteRevealKeysForChat = C;
    l.cleanupExpiredRevealKeys = v;
}, 98);