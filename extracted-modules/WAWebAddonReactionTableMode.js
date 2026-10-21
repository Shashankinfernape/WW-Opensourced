__d("WAWebAddonReactionTableMode", [
    "WAWebAddonConstants",
    "WAWebAddonInfraError",
    "WAWebCastToReactionMsg",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebReactionDataUtils",
    "WAWebSchemaReactions",
    "asyncToGeneratorRuntime",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    var e = {
        mode: o("WAWebAddonConstants").AddonTableMode.Reaction,
        bulkUpsert: (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = e.map((e)=>o("WAWebReactionDataUtils").reactionMsgDataToReactionRow(o("WAWebCastToReactionMsg").assertReactionMsgData(e)));
                yield o("WAWebSchemaReactions").getReactionsTable().bulkCreateOrReplace(t);
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })(),
        bulkGetByParentAndSender: (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = yield o("WAWebSchemaReactions").getReactionsTable().anyOf([
                    "parentMsgKey",
                    "senderUserJid"
                ], e.map(([t, n])=>[
                        t.toString(),
                        n.toString()
                    ]));
                return t.map(o("WAWebReactionDataUtils").reactionRowToReactionMsgData);
            });
            function t(t) {
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
                const t = yield o("WAWebSchemaReactions").getReactionsTable().anyOf([
                    "parentMsgKey"
                ], e.map((e)=>e.toString()));
                return t.map(o("WAWebReactionDataUtils").reactionRowToReactionMsgData);
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
                yield o("WAWebSchemaReactions").getReactionsTable().bulkRemoveByIndex([
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
                const t = (yield o("WAWebSchemaReactions").getReactionsTable().equals([
                    "msgKey"
                ], e.toString()))[0];
                if (t == null) {
                    return t;
                }
                return o("WAWebReactionDataUtils").reactionRowToReactionMsgData(t);
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })(),
        updateAck: (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
                let n;
                if (e.kind === o("WAWebMsgType").MsgKind.ReactionEncrypted) {
                    n = e.targetMessageKey;
                } else if (e.kind === o("WAWebMsgType").MsgKind.ReactionDecrypted) {
                    n = e.reactionParentKey;
                } else {
                    throw new (o("WAWebAddonInfraError")).AddonInfraError(o("WAWebAddonInfraError").AddonInfraErrorCode.UnexpectedMsgType);
                }
                yield o("WAWebSchemaReactions").getReactionsTable().merge([
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
                return o("WAWebSchemaReactions").getReactionsTable().count();
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })()
    };
    l.reactionTableMode = e;
}, 98);