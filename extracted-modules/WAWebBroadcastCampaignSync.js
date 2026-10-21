__d("WAWebBroadcastCampaignSync", [
    "Promise",
    "WALogger",
    "WALongInt",
    "WAWebBackendApi",
    "WAWebBizBroadcastDeviceCapabilityCommon",
    "WAWebBusinessBroadcastsGatingUtils",
    "WAWebProtobufsServerSync.pb",
    "WAWebRemoveCampaignStorage",
    "WAWebSchemaBusinessBroadcastCampaign",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdConst",
    "WAWebSyncdIndexUtils",
    "WAWebUpsertCampaignStorage",
    "WAWebUserPrefsHistorySync",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = ((t)=>{
        function r(...r) {
            let e;
            e = t.call(this, ...r) || this;
            e.collectionName = o("WAWebSyncdConst").CollectionName.Regular;
            return babelHelpers.assertThisInitialized(e) || babelHelpers.assertThisInitialized(e);
        }
        babelHelpers.inheritsLoose(r, t);
        const r_prototype = r.prototype;
        r_prototype.getVersion = function() {
            return 1;
        };
        r_prototype.getAction = function() {
            return o("WAWebSyncdConst").Actions.BusinessBroadcastCampaign;
        };
        r_prototype.applyMutations = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                const r = this;
                const a = o("WAWebBusinessBroadcastsGatingUtils").isBizBroadcastSendWebEnabledNoExposure();
                const i = o("WAWebBusinessBroadcastsGatingUtils").isBizBroadcastProEnabled();
                const l = o("WAWebBizBroadcastDeviceCapabilityCommon").getPrimarySupportsBusinessBroadcastPro();
                const s = i && l;
                const c = s && o("WAWebUserPrefsHistorySync").getInitialHistorySyncComplete();
                let p = 0;
                let _ = 0;
                const f = new Set;
                const campaigns = [];
                const upsertedCampaignIds = [];
                const removedCampaignIds = [];
                const C = yield (u || (u = n("Promise"))).all(t.map((()=>{
                    const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                        try {
                            const t = e.indexParts;
                            const n = t[1];
                            if (!n) {
                                return r.malformedActionIndex();
                            }
                            e: {
                                const i = e;
                                if ((typeof i === "object" && i !== null || typeof i === "function") && i.operation === "set" && "value" in i && "timestamp" in i) {
                                    const { value, timestamp } = i;
                                    const u = value.businessBroadcastCampaignAction;
                                    const C = d(u, r.collectionName);
                                    if (C != null) {
                                        _++;
                                        p += C.malformedMutationCount;
                                        const { affectedBroadcastJid, campaignTimestamp, messageId } = C;
                                        if (c && affectedBroadcastJid != null && campaignTimestamp != null && messageId != null) {
                                            m(f, affectedBroadcastJid);
                                            campaigns.push({
                                                broadcastJid: affectedBroadcastJid,
                                                campaignId: n,
                                                campaignTimestamp,
                                                messageId
                                            });
                                        }
                                        return C.result;
                                    }
                                    if (!a) {
                                        return {
                                            actionState: o("WAWebSyncdConst").SyncActionState.Unsupported
                                        };
                                    }
                                    if (!u || u.broadcastJid == null || u.deviceId == null || u.status == null) {
                                        p++;
                                        return o("WAWebSyncdIndexUtils").malformedActionValue(r.collectionName);
                                    }
                                    yield o("WAWebUpsertCampaignStorage").upsertCampaignStorage(n, u, timestamp);
                                    const R = u.broadcastJid;
                                    if (R != null) {
                                        f.add(R);
                                    }
                                    upsertedCampaignIds.push(n);
                                    return {
                                        actionState: o("WAWebSyncdConst").SyncActionState.Success
                                    };
                                    break e;
                                }
                                if ((typeof i === "object" && i !== null || typeof i === "function") && i.operation === "remove") {
                                    if (!a) {
                                        return {
                                            actionState: o("WAWebSyncdConst").SyncActionState.Unsupported
                                        };
                                    }
                                    const L = yield o("WAWebSchemaBusinessBroadcastCampaign").getBusinessBroadcastCampaignTable().get(n);
                                    if (L?.broadcastJid != null) {
                                        f.add(L.broadcastJid);
                                    }
                                    yield o("WAWebRemoveCampaignStorage").removeCampaignStorage(n);
                                    removedCampaignIds.push(n);
                                    return {
                                        actionState: o("WAWebSyncdConst").SyncActionState.Success
                                    };
                                    break e;
                                }
                                throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${i}`);
                            }
                        } catch (e) {
                            return {
                                actionState: o("WAWebSyncdConst").SyncActionState.Failed
                            };
                        }
                    });
                    return function(t) {
                        return e.apply(this, arguments);
                    };
                })()));
                if (p > 0) {
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "broadcast campaign sync: ",
                        " malformed mutations"
                    ])), p);
                }
                if (f.size > 0) {
                    o("WAWebBackendApi").frontendFireAndForget("refreshBroadcastCampaignState", {
                        broadcastJids: Array.from(f)
                    });
                }
                if (campaigns.length > 0) {
                    o("WAWebBackendApi").frontendFireAndForget("createBizBroadcastProLocalCampaignCards", {
                        campaigns
                    });
                }
                if (upsertedCampaignIds.length > 0 || removedCampaignIds.length > 0) {
                    o("WAWebBackendApi").frontendFireAndForget("syncBroadcastCampaignsToCollection", {
                        upsertedCampaignIds,
                        removedCampaignIds
                    });
                }
                return C;
            });
            function r(e) {
                return t.apply(this, arguments);
            }
            return r;
        })();
        r_prototype.getCampaignMutation = function(t, businessBroadcastCampaignAction, r) {
            const e = {
                businessBroadcastCampaignAction
            };
            return o("WAWebSyncdActionUtils").buildPendingMutation({
                action: this.getAction(),
                indexArgs: [
                    t
                ],
                collection: this.collectionName,
                value: e,
                version: this.getVersion(),
                operation: o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.SET,
                timestamp: r
            });
        };
        r_prototype.getDeleteCampaignMutation = function(t, n) {
            return o("WAWebSyncdActionUtils").buildPendingMutation({
                action: this.getAction(),
                indexArgs: [
                    t
                ],
                collection: this.collectionName,
                value: {},
                version: this.getVersion(),
                operation: o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.REMOVE,
                timestamp: n
            });
        };
        return r;
    })(o("WAWebSyncdAction").AccountSyncdActionBase);
    function d(e, collectionName) {
        const n = e?.customAudienceFbid;
        const messageId = e?.msgId;
        const a = n != null && n.length > 0;
        if (!a && e?.bbProStatus == null) {
            return null;
        }
        if (!a || e?.broadcastJid == null || e.broadcastJid.length === 0 || e?.deviceId == null || messageId == null || messageId.length === 0) {
            return {
                malformedMutationCount: 1,
                result: o("WAWebSyncdIndexUtils").malformedActionValue(collectionName)
            };
        }
        const campaignTimestamp = o("WALongInt").maybeNumber(e?.createTimestamp);
        if (campaignTimestamp == null || !Number.isFinite(campaignTimestamp) || campaignTimestamp <= 0) {
            o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "Business broadcast Pro mutation has an invalid createTimestamp"
            ]))).sendLogs("bb-pro-campaign-sync-timestamp-invalid");
            return {
                malformedMutationCount: 1,
                result: o("WAWebSyncdIndexUtils").malformedActionValue(collectionName)
            };
        }
        return {
            affectedBroadcastJid: e.broadcastJid,
            campaignTimestamp,
            malformedMutationCount: 0,
            messageId,
            result: {
                actionState: o("WAWebSyncdConst").SyncActionState.Unsupported
            }
        };
    }
    function m(e, affectedBroadcastJid) {
        if (affectedBroadcastJid != null) {
            e.add(affectedBroadcastJid);
        }
    }
    const p = new c;
    l.default = p;
}, 98);