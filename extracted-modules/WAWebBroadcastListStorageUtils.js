__d("WAWebBroadcastListStorageUtils", [
    "Promise",
    "WAWebAudienceExpressionTypes",
    "WAWebAudienceResolver",
    "WAWebBackendApi",
    "WAWebBroadcastSystemMsg",
    "WAWebHandleMsgTypes.flow",
    "WAWebHandleSingleMsgWorkerCompatible",
    "WAWebInitialSystemMsg",
    "WAWebSchemaBroadcastMetadata",
    "WAWebSyncdCoreApi",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e, t) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, a) {
            const i = a ? [] : yield r("WAWebInitialSystemMsg")(t, null, null);
            const l = a ? o("WAWebBroadcastSystemMsg").genBroadcastProCreateSystemMsg(t) : o("WAWebBroadcastSystemMsg").genBroadcastCreateSystemMsg(t);
            const s = [].concat(i, [
                l
            ]);
            yield (e || (e = n("Promise"))).all(s.map((newMsg)=>o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
                    chatId: t,
                    handleSingleMsgOrigin: "createChat",
                    messageOverwriteOption: o("WAWebHandleMsgTypes.flow").MessageOverwriteOption.NO_OVERWRITE,
                    newMsg,
                    preserveOrder: false
                })));
        });
        return u.apply(this, arguments);
    }
    function c(audienceExpression) {
        if (audienceExpression.type === o("WAWebAudienceExpressionTypes").EXPRESSION_TYPE_PREDICATE && audienceExpression.predicateType === o("WAWebAudienceExpressionTypes").PREDICATE_TYPE_LABEL) {
            return Array.from(audienceExpression.params?.labelIds ?? []);
        }
        return [];
    }
    function d(e, t) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const { audienceExpression, customAudienceFbid, id, isBizBroadcastPro, listName, shouldInsertInitialSystemMessages, timestamp } = e;
            const p = o("WAWebWidFactory").createWid(id);
            const recipients = yield o("WAWebAudienceResolver").resolveAudienceExpression(audienceExpression);
            const labels = c(audienceExpression);
            const g = {
                id: p,
                name: listName
            };
            let h = false;
            let y = customAudienceFbid;
            yield o("WAWebSyncdCoreApi").lockForSync([
                "chat",
                "broadcast-metadata",
                "contact"
            ], t ?? [], (()=>{
                const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*([p, C, b]) {
                    const v = yield p.get(id);
                    if (v == null) {
                        h = true;
                        g.t = timestamp;
                    }
                    yield p.createOrMerge(id, babelHelpers.extends({}, g, {
                        id
                    }));
                    yield b.createOrMerge(id, {
                        id,
                        name: listName
                    });
                    const S = yield o("WAWebSchemaBroadcastMetadata").getBroadcastMetadataTable().get(id);
                    y = S?.customAudienceFbid ?? customAudienceFbid;
                    yield C.createOrReplace({
                        audienceExpression,
                        customAudienceFbid: y,
                        id,
                        isWebCreatedList: e.isWebCreatedList ?? S?.isWebCreatedList ?? false,
                        labels,
                        recipients,
                        senderKeyDevices: S?.senderKeyDevices ?? [],
                        senderKeyRotate: S?.senderKeyRotate ?? false
                    });
                });
                return function(e) {
                    return t.apply(this, arguments);
                };
            })());
            if (h && shouldInsertInitialSystemMessages) {
                yield s(p, isBizBroadcastPro);
            }
            o("WAWebBackendApi").frontendFireAndForget("updateBroadcastList", {
                broadcastMetadata: {
                    audienceExpression,
                    customAudienceFbid: y,
                    id: p,
                    recipients: recipients.map((e)=>({
                            id: o("WAWebWidFactory").createWid(e)
                        }))
                },
                chat: g,
                contact: {
                    id: p,
                    name: listName
                }
            });
        });
        return m.apply(this, arguments);
    }
    function p(e, t) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const r = typeof e === "string" ? e : e.toString();
            const a = typeof e === "string" ? o("WAWebWidFactory").createWid(e) : e;
            yield o("WAWebSyncdCoreApi").lockForSync([
                "chat",
                "broadcast-metadata"
            ], t ?? [], (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*([t, n]) {
                    yield t.remove(r);
                    yield n.remove(r);
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })());
            o("WAWebBackendApi").frontendFireAndForget("removeBroadcastList", {
                id: a
            });
        });
        return _.apply(this, arguments);
    }
    l.updateBroadcastListStorage = d;
    l.removeBroadcastListStorage = p;
}, 98);