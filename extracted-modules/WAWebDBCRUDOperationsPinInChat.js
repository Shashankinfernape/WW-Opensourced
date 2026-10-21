__d("WAWebDBCRUDOperationsPinInChat", [
    "WAWebModelStorageUtils",
    "WAWebPinInChatSchema",
    "WAWebPinMsgConstants",
    "WAWebPinMsgGatingUtils",
    "WAWebPinsDbSerialization",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        const r = new Map;
        t.forEach((e)=>{
            const e_parentMsgKey = e.parentMsgKey;
            const n = e_parentMsgKey;
            const o = r.get(n);
            if (!o || o?.senderTimestampMs <= e.senderTimestampMs) {
                r.set(n, e);
            }
        });
        return o("WAWebModelStorageUtils").getStorage().lock([
            "pinned-messages"
        ], (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*([n]) {
                const a = yield n.anyOf([
                    "chatId"
                ], [
                    e.toString()
                ]);
                a.forEach((e)=>{
                    const e_parentMsgKey = e.parentMsgKey;
                    const n = r.get(e_parentMsgKey);
                    if (n && n.senderTimestampMs <= e.senderTimestampMs) {
                        r.delete(e_parentMsgKey);
                    }
                });
                const i = new Map(a.map((e)=>[
                        e.parentMsgKey,
                        e
                    ]));
                r.forEach((e, t)=>{
                    i.set(t, e);
                });
                const l = Array.from(i.values());
                const s = l.filter((e)=>e.pinType === o("WAWebPinMsgConstants").PIN_STATE.PIN).sort((e, t)=>t.senderTimestampMs - e.senderTimestampMs).slice(o("WAWebPinMsgGatingUtils").getMaxPins());
                s.forEach((e)=>{
                    r.set(e.parentMsgKey, babelHelpers.extends({}, e, {
                        pinType: o("WAWebPinMsgConstants").PIN_STATE.UNPIN
                    }));
                });
                const u = Array.from(r.values());
                yield n.bulkCreateOrReplace(u);
                return u;
            });
            return function(e) {
                return t.apply(this, arguments);
            };
        })());
    }
    function s(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield o("WAWebPinInChatSchema").getTable().get(e.toString());
            if (t == null) {
                return null;
            }
            return o("WAWebPinsDbSerialization").deserializePinInChat(t);
        });
        return u.apply(this, arguments);
    }
    l.createOrUpdatePinInChat = e;
    l.getPinInChatByParentKey = s;
}, 98);