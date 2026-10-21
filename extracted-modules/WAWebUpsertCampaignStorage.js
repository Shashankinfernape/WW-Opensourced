__d("WAWebUpsertCampaignStorage", [
    "WAJids",
    "WALogger",
    "WALongInt",
    "WAWebRemoveCampaignStorage",
    "WAWebSchemaBusinessBroadcastCampaign",
    "WAWebValidationUtils",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
    "justknobx"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(e, t) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = o("WAWebSchemaBusinessBroadcastCampaign").getBusinessBroadcastCampaignTable();
            const existing = yield n.get(e);
            if (!r("justknobx")._("3901")) {
                return {
                    action: "merge",
                    existing
                };
            }
            const i = o("WAWebValidationUtils").validateUUID(e);
            if (i) {
                if (t != null) {
                    const l = yield n.get(t);
                    if (l != null && !o("WAWebValidationUtils").validateUUID(l.campaignId)) {
                        yield o("WAWebRemoveCampaignStorage").removeCampaignStorage(l.campaignId);
                    }
                }
                return {
                    action: "merge",
                    existing
                };
            }
            const s = yield d(e);
            if (s != null) {
                if (existing != null) {
                    yield o("WAWebRemoveCampaignStorage").removeCampaignStorage(e);
                }
                return {
                    action: "skip"
                };
            }
            return {
                action: "merge",
                existing
            };
        });
        return c.apply(this, arguments);
    }
    function d(e) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const n = o("WAWebSchemaBusinessBroadcastCampaign").getBusinessBroadcastCampaignTable();
            const r = o("WAWebSchemaBusinessBroadcastCampaign").canUseAdIdIndex() ? yield n.equals([
                "adId"
            ], e) : (yield n.all()).filter((t)=>t.adId === e);
            return r.find((e)=>o("WAWebValidationUtils").validateUUID(e.campaignId)) ?? null;
        });
        return m.apply(this, arguments);
    }
    function p(e, t, n) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n, a) {
            const broadcastJid = n.broadcastJid != null ? o("WAJids").validateBroadcastJid(n.broadcastJid) : null;
            const createdTimestamp = o("WALongInt").maybeNumber(n.createTimestamp) ?? a;
            if (broadcastJid == null || n.deviceId == null || n.status == null) {
                throw r("err")(`[broadcast:campaign-storage] Missing required fields for campaign ${t}`);
            }
            try {
                const L = yield u(t, n.adId);
                if (L.action === "skip") {
                    o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[broadcast:campaign-storage] skip adId-keyed ",
                        ", UUID exists"
                    ])), t);
                    return;
                }
                const E = L.existing;
                yield o("WAWebSchemaBusinessBroadcastCampaign").getBusinessBroadcastCampaignTable().createOrReplace({
                    adGroupId: E?.adGroupId ?? null,
                    adId: n.adId ?? E?.adId ?? null,
                    broadcastJid,
                    campaignId: t,
                    campaignName: n.name ?? E?.campaignName ?? null,
                    createdTimestamp,
                    deviceId: n.deviceId,
                    isDuplicate: E?.isDuplicate ?? null,
                    msgId: n.msgId ?? E?.msgId ?? null,
                    pendingBroadcastMessageId: E?.pendingBroadcastMessageId ?? null,
                    reservedQuota: n.reservedQuota ?? E?.reservedQuota ?? null,
                    scheduledTimestamp: o("WALongInt").maybeNumber(n.scheduledTimestamp) ?? null,
                    sourceCampaignId: E?.sourceCampaignId ?? null,
                    status: n.status
                });
            } catch (error) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast:campaign-storage] Failed to upsert campaign ",
                    ": ",
                    ""
                ])), t, r("getErrorSafe")(error));
                throw error;
            }
        });
        return _.apply(this, arguments);
    }
    l.upsertCampaignStorage = p;
}, 98);