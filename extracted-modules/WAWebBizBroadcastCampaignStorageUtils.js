__d("WAWebBizBroadcastCampaignStorageUtils", [
    "WALogger",
    "WAWebProtobufsServerSync.pb",
    "WAWebSchemaBusinessBroadcastCampaign",
    "WAWebSchemaPendingBusinessBroadcastMessage",
    "WAWebSyncdActionUtils",
    "WAWebSyncdConst",
    "WAWebSyncdCoreApi",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e, t, n) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, r, a) {
            yield o("WAWebSyncdCoreApi").lockForSync([
                "biz-broadcast-campaigns"
            ], a, (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*([n]) {
                    const o = yield n.get(t);
                    if (o != null) {
                        yield n.createOrReplace(babelHelpers.extends({}, o, r));
                    } else {
                        yield n.create(babelHelpers.extends({
                            campaignId: t
                        }, r));
                    }
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })());
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[broadcast:campaign-storage] Campaign ",
                " synced"
            ])), t);
        });
        return u.apply(this, arguments);
    }
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield o("WAWebSchemaBusinessBroadcastCampaign").getBusinessBroadcastCampaignTable().get(e);
            if (t?.pendingBroadcastMessageId != null) {
                yield o("WAWebSchemaPendingBusinessBroadcastMessage").getPendingBusinessBroadcastMessageTable().remove(t.pendingBroadcastMessageId);
            }
        });
        return d.apply(this, arguments);
    }
    function m(e, t) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const u = yield o("WAWebSchemaBusinessBroadcastCampaign").getBusinessBroadcastCampaignTable().get(e);
            if (u != null) {
                const c = babelHelpers.extends({}, u, t);
                const d = Date.now();
                const m = {
                    adId: c.adId ?? void 0,
                    broadcastJid: c.broadcastJid,
                    createTimestamp: c.createdTimestamp,
                    deviceId: c.deviceId,
                    msgId: c.msgId ?? void 0,
                    name: c.campaignName ?? void 0,
                    reservedQuota: c.reservedQuota ?? void 0,
                    scheduledTimestamp: c.scheduledTimestamp ?? void 0,
                    status: c.status
                };
                const p = {
                    businessBroadcastCampaignAction: m
                };
                const _ = o("WAWebSyncdActionUtils").buildPendingMutation({
                    action: o("WAWebSyncdConst").Actions.BusinessBroadcastCampaign,
                    collection: o("WAWebSyncdConst").CollectionName.Regular,
                    indexArgs: [
                        e
                    ],
                    operation: o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.SET,
                    timestamp: d,
                    value: p,
                    version: 1
                });
                yield s(e, t, [
                    _
                ]);
            }
        });
        return p.apply(this, arguments);
    }
    l.updateCampaignWithSync = s;
    l.cleanupPendingCampaignData = c;
    l.updateCampaignStatusWithSync = m;
}, 98);