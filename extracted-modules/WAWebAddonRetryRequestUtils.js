__d("WAWebAddonRetryRequestUtils", [
    "WALogger",
    "WAWebAck",
    "WAWebAddonConstants",
    "WAWebAddonCrossWindowUtils",
    "WAWebAddonDBTable",
    "WAWebAddonPluginProcessor",
    "WAWebAddonProcessMsgsUtils",
    "WAWebAddonSelectUtils",
    "WAWebAddonSortUtils",
    "WAWebModelStorageUtils",
    "WAWebSchemaSelfAddonMessageTypeTable",
    "asyncToGeneratorRuntime",
    "compactMap",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            return (yield o("WAWebSchemaSelfAddonMessageTypeTable").getSelfAddonMessageTypeTable().equals([
                "msgId"
            ], e.id))[0];
        });
        return c.apply(this, arguments);
    }
    function d(e) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if ((yield u(e.id)) == null) {
                const t = {
                    msgId: e.id.id,
                    msgType: o("WAWebAddonCrossWindowUtils").getAddonProcessorType(e)
                };
                yield o("WAWebSchemaSelfAddonMessageTypeTable").getSelfAddonMessageTypeTable().createOrReplace(t);
            }
        });
        return m.apply(this, arguments);
    }
    function p(e) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (e.length !== 0) {
                return o("WAWebModelStorageUtils").getStorage().lock([
                    "self-addon-message-type"
                ], (()=>{
                    const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*([n]) {
                        const o = yield n.anyOf([
                            "msgId"
                        ], e.map(([t])=>t.id.id));
                        const a = e.map(([t, n])=>({
                                msgId: n.id.id,
                                msgType: t.type
                            }));
                        yield n.bulkRemove(r("compactMap")(o, function(e) {
                            return e.rowId;
                        }));
                        yield n.bulkCreateOrReplace(a);
                    });
                    return function(e) {
                        return t.apply(this, arguments);
                    };
                })());
            }
        });
        return _.apply(this, arguments);
    }
    function f(e) {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const selfMsgRow = yield u(t);
            if (selfMsgRow != null) {
                const a = o("WAWebAddonSelectUtils").getTableModeByMsgType(selfMsgRow.msgType);
                const msgData = yield o("WAWebAddonDBTable").addonInternalDBTable.getByMsgKey(a, t);
                if (msgData == null) {
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "msg-retry: can not find addon ",
                        "."
                    ])), t.toString());
                    return;
                }
                if (!o("WAWebAddonCrossWindowUtils").isRealAddonType(msgData)) {
                    return {
                        msgData,
                        selfMsgRow
                    };
                }
                const l = msgData.ack;
                if (l == null || l < o("WAWebAck").ACK.SENT) {
                    o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "msg-retry: can not find addon ",
                        "."
                    ])), t.toString()).sendLogs("msg-retry");
                    return;
                }
                const c = o("WAWebAddonPluginProcessor").getAddonProcessor(msgData).convert.toDualEncryptedMsgData;
                if (c != null) {
                    const d = yield o("WAWebAddonProcessMsgsUtils").queryAddonParentMsgs([
                        msgData
                    ], o("WAWebAddonConstants").AddonProcessMode.Send);
                    const m = d[0];
                    const p = d[1];
                    const _ = o("WAWebAddonSortUtils").collectValidAndOrphanAddons(p, m);
                    const f = _.validAddons;
                    const g = f[0];
                    const h = r("nullthrows")(m.get(o("WAWebAddonProcessMsgsUtils").getParentMsgKey(g).toString()));
                    const y = yield c(g, h);
                    return {
                        msgData: h.isGroupStatus === true ? babelHelpers.extends({}, y, {
                            isGroupStatus: true
                        }) : y,
                        selfMsgRow
                    };
                }
                return {
                    msgData,
                    selfMsgRow
                };
            }
        });
        return g.apply(this, arguments);
    }
    l.hasSentAddonMsg = u;
    l.storeSelfMessageTypeRow = d;
    l.replaceSelfMessageTypeRows = p;
    l.getSentAddonMsgRecord = f;
}, 98);