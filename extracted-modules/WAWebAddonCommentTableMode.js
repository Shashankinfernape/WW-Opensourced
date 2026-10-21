__d("WAWebAddonCommentTableMode", [
    "WAWebAddonConstants",
    "WAWebAddonInfraError",
    "WAWebCommentSchema",
    "WAWebDBCommentMessageSerialization",
    "WAWebMsgType",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    const e = {
        mode: o("WAWebAddonConstants").AddonTableMode.Comment,
        bulkUpsert: (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = e.map((e)=>{
                    if (e.kind === o("WAWebMsgType").MsgKind.CommentDecrypted) {
                        return o("WAWebDBCommentMessageSerialization").dbRowFromCommentMessage(e);
                    }
                    if (e.kind === o("WAWebMsgType").MsgKind.RevokedAddon) {
                        return o("WAWebDBCommentMessageSerialization").dbRowFromRevokedMsgData(e);
                    }
                    if (e.kind === o("WAWebMsgType").MsgKind.PlaceholderAddon) {
                        return o("WAWebDBCommentMessageSerialization").dbRowFromPlaceholderAddon(e);
                    }
                    throw new (o("WAWebAddonInfraError")).AddonInfraError(o("WAWebAddonInfraError").AddonInfraErrorCode.UnexpectedMsgType);
                });
                yield o("WAWebCommentSchema").getTable().bulkCreateOrReplace(t);
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })(),
        bulkGetByParentAndSender: (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                throw new (o("WAWebAddonInfraError")).AddonInfraError(o("WAWebAddonInfraError").AddonInfraErrorCode.NotSupportedFeature);
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })(),
        bulkGetByMsgKey: (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
                const n = yield o("WAWebCommentSchema").getTable().bulkGet(e.map((e)=>e.toString()), t);
                return n.map((e)=>{
                    if (e == null) {
                        return e;
                    }
                    return o("WAWebDBCommentMessageSerialization").commentMessageFromDbRow(e);
                });
            });
            function t(t, n) {
                return e.apply(this, arguments);
            }
            return t;
        })(),
        bulkGetByParentMsgKey: (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = yield o("WAWebCommentSchema").getTable().anyOf([
                    "parentMsgKey"
                ], e.map((e)=>e.toString()));
                return t.map(o("WAWebDBCommentMessageSerialization").commentMessageFromDbRow);
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
                return o("WAWebCommentSchema").getTable().bulkRemove(e.map((e)=>e.toString()));
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })(),
        getByMsgKey: (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = yield o("WAWebCommentSchema").getTable().get(e.toString());
                if (t == null) {
                    return null;
                }
                return o("WAWebDBCommentMessageSerialization").commentMessageFromDbRow(t);
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })(),
        updateAck: (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
                yield o("WAWebCommentSchema").getTable().merge(e.id.toString(), {
                    ack: t
                });
            });
            function t(t, n) {
                return e.apply(this, arguments);
            }
            return t;
        })(),
        markAsRead: (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                yield o("WAWebCommentSchema").getTable().merge(e.toString(), {
                    read: true
                });
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })(),
        getTableSize: (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                return o("WAWebCommentSchema").getTable().count();
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })()
    };
    l.commentTableMode = e;
}, 98);