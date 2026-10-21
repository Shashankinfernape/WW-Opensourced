__d("WAWebRemoveReplacedBrazilPaymentStateRows", [
    "Promise",
    "WALogger",
    "WAWebAck",
    "WAWebApiChat",
    "WAWebBackendApi",
    "WAWebCommonMsgUtils",
    "WAWebDBMessageSerialization",
    "WAWebHandlePlaceholderWam",
    "WAWebLidMigrationUtils",
    "WAWebModelStorageUtils",
    "WAWebSchemaChat",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "uniqueBy"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    function d(e) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (e.length !== 0) {
                const t = yield _(r("uniqueBy")(e, function(e) {
                    return e.id.toString();
                }));
                if (t.length !== 0) {
                    const a = C(t);
                    yield (c || (c = n("Promise"))).all(a.map(h));
                    o("WAWebBackendApi").frontendFireAndForget("removeBrazilPaymentStatePlaceholders", {
                        msgKeys: t.map(({ updateMsg: t })=>t.id),
                        unreadReductions: a
                    });
                    g(t.filter(({ storedRow: t })=>o("WAWebCommonMsgUtils").isPlaceholderMsg(t.type)).map(({ storedRow: t })=>t));
                }
            }
        });
        return m.apply(this, arguments);
    }
    function p(e) {
        return o("WAWebCommonMsgUtils").isPlaceholderMsg(e) || o("WAWebCommonMsgUtils").isFutureproofMsg(e);
    }
    function _(e) {
        return o("WAWebModelStorageUtils").getStorage().lock([
            "message"
        ], (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*([n]) {
                const r = e.map((e)=>f(e.id).map(String));
                const o = yield n.bulkGet(r.flat(), false);
                const a = new Map;
                o.forEach((e)=>{
                    if (e != null) {
                        a.set(e.id, e);
                    }
                });
                const i = e.flatMap((e, t)=>{
                    const n = r[t].map((e)=>a.get(e)).find((e)=>e != null && p(e.type));
                    if (n != null) {
                        return [
                            {
                                updateMsg: e,
                                storedRow: n
                            }
                        ];
                    }
                    return [];
                });
                if (i.length > 0) {
                    yield n.bulkRemove(i.map(({ storedRow: t })=>t.id));
                }
                return i;
            });
            return function(e) {
                return t.apply(this, arguments);
            };
        })());
    }
    function f(e) {
        const t = o("WAWebLidMigrationUtils").getAlternateMsgKey(e);
        if (t == null) {
            return [
                e
            ];
        }
        return [
            e,
            t
        ];
    }
    function g(t) {
        if (t.length !== 0) {
            o("WAWebHandlePlaceholderWam").postPlaceholderActivityPopulateEvent(t.map((e)=>o("WAWebDBMessageSerialization").messageFromDbRow(e))).catch((t)=>{
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[br-payment-state] could not log the resolved placeholder"
                ]))).catching(r("getErrorSafe")(t)).sendLogs("br-payment-state-placeholder-wam-failed");
            });
        }
    }
    function h(e) {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chatId: t, count: n }) {
            try {
                const a = yield o("WAWebSchemaChat").getChatTable().get(t);
                if (a == null) {
                    o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[br-payment-state] the chat of a resolved placeholder is not stored"
                    ]))).sendLogs("br-payment-state-unread-chat-missing");
                    return;
                }
                if (a.unreadCount <= 0) {
                    return;
                }
                const i = false;
                yield o("WAWebApiChat").reduceChatUnreadCount(t, n, i);
            } catch (e) {
                o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[br-payment-state] could not reduce the unread count"
                ]))).catching(r("getErrorSafe")(e)).sendLogs("br-payment-state-unread-count-failed");
            }
        });
        return y.apply(this, arguments);
    }
    function C(e) {
        const t = new Map;
        e.forEach(({ storedRow: n, updateMsg: r })=>{
            if (b(r, n)) {
                const a = r.id.remote.toString();
                t.set(a, (t.get(a) ?? 0) + 1);
            }
        });
        return Array.from(t, function([t, n]) {
            return {
                chatId: t,
                count: n
            };
        });
    }
    function b(e, t) {
        return !e.id.fromMe && t.pendingReadReceipt != null && t.ack < o("WAWebAck").ACK.READ;
    }
    l.removeReplacedBrazilPaymentStateRows = d;
    l.isReplaceableBrazilPaymentStateRow = p;
}, 98);