__d("WAWebAddonEventResponseTableMode", [
    "WAWebAddonConstants",
    "WAWebAddonInfraError",
    "WAWebEventResponseDBSerialization",
    "WAWebEventResponsesSchema",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "asyncToGeneratorRuntime",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    var e = {
        mode: o("WAWebAddonConstants").AddonTableMode.EventResponse,
        bulkUpsert: (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                yield o("WAWebEventResponsesSchema").getTable().bulkCreateOrReplace(e.map((e)=>{
                    if (e.kind !== o("WAWebMsgType").MsgKind.EventResponseDecrypted) {
                        throw new (o("WAWebAddonInfraError")).AddonInfraError(o("WAWebAddonInfraError").AddonInfraErrorCode.NotSupportedMsgType);
                    }
                    return o("WAWebEventResponseDBSerialization").dbRowFromEventResponseMessage(e);
                }));
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })(),
        bulkGetByParentAndSender: (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = yield o("WAWebEventResponsesSchema").getTable().anyOf([
                    "parentMsgKey",
                    "sender"
                ], e.map((e)=>[
                        e[0].toString(),
                        e[1].toString()
                    ]));
                return t.map(o("WAWebEventResponseDBSerialization").eventResponseMessageFromDBRow);
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })(),
        bulkGetByMsgKey: (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                throw new (o("WAWebAddonInfraError")).AddonInfraError(o("WAWebAddonInfraError").AddonInfraErrorCode.NotSupportedFeature);
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })(),
        bulkGetByParentMsgKey: (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = yield o("WAWebEventResponsesSchema").getTable().anyOf([
                    "parentMsgKey"
                ], e.map((e)=>e.toString()));
                return t.map(o("WAWebEventResponseDBSerialization").eventResponseMessageFromDBRow);
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })(),
        bulkGetByChatWid: (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                throw new (o("WAWebAddonInfraError")).AddonInfraError(o("WAWebAddonInfraError").AddonInfraErrorCode.NotSupportedFeature);
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })(),
        bulkRemoveByMsgKey: (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                yield o("WAWebEventResponsesSchema").getTable().bulkRemoveByIndex([
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
                const n = (yield o("WAWebEventResponsesSchema").getTable().equals([
                    "msgKey"
                ], e.toString()))?.[0];
                if (n == null) {
                    return n;
                }
                return o("WAWebEventResponseDBSerialization").eventResponseMessageFromDBRow(n);
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })(),
        updateAck: (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
                let n;
                if (e.kind === o("WAWebMsgType").MsgKind.EventResponseEncrypted) {
                    n = e.targetMessageKey;
                } else if (e.kind === o("WAWebMsgType").MsgKind.EventResponseDecrypted) {
                    n = e.parentMsgKey;
                } else {
                    throw new (o("WAWebAddonInfraError")).AddonInfraError(o("WAWebAddonInfraError").AddonInfraErrorCode.NotSupportedMsgType);
                }
                yield o("WAWebEventResponsesSchema").getTable().merge([
                    n.toString(),
                    r("nullthrows")(o("WAWebMsgGetters").getSender(e)).toString()
                ], {
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
                return o("WAWebEventResponsesSchema").getTable().count();
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })()
    };
    l.eventResponseTableMode = e;
}, 98);