__d("WAWebAddonPinTableMode", [
    "WAWebAddonConstants",
    "WAWebAddonInfraError",
    "WAWebCastToPinInChatMsg",
    "WAWebDBCRUDOperationsPinInChat",
    "WAWebPinInChatSchema",
    "WAWebPinsDbSerialization",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    var e = {
        mode: o("WAWebAddonConstants").AddonTableMode.Pin,
        bulkUpsert: (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = e.map((e)=>o("WAWebPinsDbSerialization").serializePinInChatMsgData(o("WAWebCastToPinInChatMsg").assertPinInChatMsgData(e)));
                yield o("WAWebDBCRUDOperationsPinInChat").createOrUpdatePinInChat(e[0].id.remote, t);
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })(),
        bulkGetByParentAndSender: (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                throw new (o("WAWebAddonInfraError")).AddonInfraError(o("WAWebAddonInfraError").AddonInfraErrorCode.UnexpectedError);
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })(),
        bulkGetByMsgKey: (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                throw new (o("WAWebAddonInfraError")).AddonInfraError(o("WAWebAddonInfraError").AddonInfraErrorCode.UnexpectedError);
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })(),
        bulkGetByParentMsgKey: (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                if (e.length !== 1) {
                    return [];
                }
                const t = yield o("WAWebPinInChatSchema").getTable().get(e[0].toString());
                if (t == null) {
                    return [];
                }
                return [
                    o("WAWebPinsDbSerialization").deserializePinInChatMsgData(t)
                ];
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })(),
        bulkGetByChatWid: (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = yield o("WAWebPinInChatSchema").getTable().anyOf([
                    "chatId"
                ], e.map((e)=>e.toString()));
                return t.map(o("WAWebPinsDbSerialization").deserializePinInChatMsgData);
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })(),
        bulkRemoveByMsgKey: (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                yield o("WAWebPinInChatSchema").getTable().bulkRemoveByIndex([
                    "msgKey"
                ], e.map((e)=>e.toString()));
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })(),
        getByMsgKey: (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = (yield o("WAWebPinInChatSchema").getTable().equals([
                    "msgKey"
                ], e.toString()))[0];
                if (t == null) {
                    return t;
                }
                return o("WAWebPinsDbSerialization").deserializePinInChatMsgData(t);
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })(),
        updateAck: (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
                const n = o("WAWebPinsDbSerialization").serializePinInChatMsgData(o("WAWebCastToPinInChatMsg").assertPinInChatMsgData(e));
                yield o("WAWebPinInChatSchema").getTable().merge(n.parentMsgKey, {
                    ack: t
                });
            });
            function t(t, n) {
                return e.apply(this, arguments);
            }
            return t;
        })(),
        markAsRead: (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                const n = yield e.getByMsgKey(t);
                if (n != null) {
                    return e.bulkUpsert([
                        babelHelpers.extends({}, n, {
                            read: true
                        })
                    ]);
                }
            });
            function r(e) {
                return t.apply(this, arguments);
            }
            return r;
        })(),
        getTableSize: (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                return o("WAWebPinInChatSchema").getTable().count();
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })()
    };
    l.pinTableMode = e;
}, 98);