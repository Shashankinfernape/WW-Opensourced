__d("WAWebAddonUnifiedAddonsTableMode", [
    "WAWebAddonConstants",
    "WAWebAddonInfraError",
    "WAWebMsgType",
    "WAWebPinsDbSerialization",
    "WAWebSchemaUnifiedAddons",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return e.map((e)=>{
            if (e.rowType === o("WAWebAddonConstants").AddonMinimizedType.PinInChat) {
                return o("WAWebPinsDbSerialization").unifiedAddonRowIntoPinInChatMsgData(e);
            }
            throw new (o("WAWebAddonInfraError")).AddonInfraError(o("WAWebAddonInfraError").AddonInfraErrorCode.NotSupportedMsgType);
        });
    }
    const s = {
        mode: o("WAWebAddonConstants").AddonTableMode.Unified,
        bulkUpsert: (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = e.map((e)=>{
                    if (e.kind === o("WAWebMsgType").MsgKind.PinInChat) {
                        return o("WAWebPinsDbSerialization").pinInChatMsgDatIntoUnifiedAddonRow(e);
                    }
                    throw new (o("WAWebAddonInfraError")).AddonInfraError(o("WAWebAddonInfraError").AddonInfraErrorCode.UnexpectedError);
                });
                yield o("WAWebSchemaUnifiedAddons").getTable().bulkCreateOrReplace(t);
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
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                throw new (o("WAWebAddonInfraError")).AddonInfraError(o("WAWebAddonInfraError").AddonInfraErrorCode.UnexpectedError);
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })(),
        bulkGetByParentMsgKey: (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                const n = yield o("WAWebSchemaUnifiedAddons").getTable().anyOf([
                    "targetMsgKey"
                ], t.map((e)=>e.toString()));
                return e(n);
            });
            function r(e) {
                return t.apply(this, arguments);
            }
            return r;
        })(),
        bulkGetByChatWid: (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                const n = yield o("WAWebSchemaUnifiedAddons").getTable().anyOf([
                    "arbitraryIndex"
                ], t.map((e)=>e.toString()));
                return e(n);
            });
            function r(e) {
                return t.apply(this, arguments);
            }
            return r;
        })(),
        bulkRemoveByMsgKey: (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                yield o("WAWebSchemaUnifiedAddons").getTable().bulkRemove(e.map((e)=>e.toString()));
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })(),
        getByMsgKey: (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                const n = yield o("WAWebSchemaUnifiedAddons").getTable().get(t.toString());
                if (n == null) {
                    return null;
                }
                return e([
                    n
                ])[0];
            });
            function r(e) {
                return t.apply(this, arguments);
            }
            return r;
        })(),
        updateAck: (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
                yield o("WAWebSchemaUnifiedAddons").getTable().merge(e.id.toString(), {
                    ack: t
                });
            });
            function t(t, n) {
                return e.apply(this, arguments);
            }
            return t;
        })(),
        markAsRead: (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                throw new (o("WAWebAddonInfraError")).AddonInfraError(o("WAWebAddonInfraError").AddonInfraErrorCode.UnexpectedError);
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })(),
        getTableSize: (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                return o("WAWebSchemaUnifiedAddons").getTable().count();
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })()
    };
    l.unifiedAddonsTableMode = s;
}, 98);