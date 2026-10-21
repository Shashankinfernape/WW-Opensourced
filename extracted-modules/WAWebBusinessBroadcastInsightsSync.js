__d("WAWebBusinessBroadcastInsightsSync", [
    "Promise",
    "WALogger",
    "WAWebBackendApi",
    "WAWebBizBroadcastInsightsStorageUtils",
    "WAWebBusinessBroadcastsGatingUtils",
    "WAWebSyncdAction",
    "WAWebSyncdConst",
    "WAWebSyncdIndexUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    const d = ((t)=>{
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
            return o("WAWebSyncdConst").Actions.BusinessBroadcastInsights;
        };
        r_prototype.applyMutations = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                const r = this;
                if (!o("WAWebBusinessBroadcastsGatingUtils").isBizBroadcastSendWebEnabledNoExposure()) {
                    return t.map(()=>({
                            actionState: o("WAWebSyncdConst").SyncActionState.Unsupported
                        }));
                }
                let a = 0;
                let i = 0;
                const l = [];
                let d = 0;
                const m = [];
                const upserts = [];
                const removedCampaignIds = [];
                const f = yield (c || (c = n("Promise"))).all(t.map((()=>{
                    const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                        try {
                            const t = e.indexParts;
                            const n = t[1];
                            if (!n) {
                                return r.malformedActionIndex();
                            }
                            e: {
                                const s = e;
                                if ((typeof s === "object" && s !== null || typeof s === "function") && s.operation === "set" && "value" in s && "timestamp" in s) {
                                    const { value, timestamp } = s;
                                    const f = value.businessBroadcastInsightsAction;
                                    if (!f) {
                                        a++;
                                        return o("WAWebSyncdIndexUtils").malformedActionValue(r.collectionName);
                                    }
                                    const { deliveredCount, quickReplyCount, readCount, recipientCount, repliedCount } = f;
                                    i++;
                                    if (l.length < 3) {
                                        l.push(`campaign=${n} recipients=${recipientCount ?? 0} delivered=${deliveredCount ?? 0} read=${readCount ?? 0} replied=${repliedCount ?? 0} quickReply=${quickReplyCount ?? 0}`);
                                    }
                                    yield o("WAWebBizBroadcastInsightsStorageUtils").upsertInsightsStorage(n, {
                                        deliveredCount,
                                        quickReplyCount,
                                        readCount,
                                        recipientCount,
                                        repliedCount
                                    }, timestamp);
                                    upserts.push({
                                        campaignId: n,
                                        deliveredCount,
                                        quickReplyCount,
                                        readCount,
                                        recipientCount,
                                        repliedCount,
                                        lastUpdatedTimestampMs: timestamp
                                    });
                                    return {
                                        actionState: o("WAWebSyncdConst").SyncActionState.Success
                                    };
                                    break e;
                                }
                                if ((typeof s === "object" && s !== null || typeof s === "function") && s.operation === "remove") {
                                    d++;
                                    if (m.length < 3) {
                                        m.push(n);
                                    }
                                    yield o("WAWebBizBroadcastInsightsStorageUtils").removeInsightsStorage(n);
                                    removedCampaignIds.push(n);
                                    return {
                                        actionState: o("WAWebSyncdConst").SyncActionState.Success
                                    };
                                    break e;
                                }
                                throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${s}`);
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
                if (i > 0) {
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "BBI SyncD received ",
                        " SET operations => ",
                        ""
                    ])), i, l);
                }
                if (d > 0) {
                    o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "BBI SyncD received ",
                        " REMOVE operations for campaigns => ",
                        ""
                    ])), d, m);
                }
                if (a > 0) {
                    o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "BBI sync: ",
                        " malformed mutations"
                    ])), a);
                }
                if (i > 0 || d > 0) {
                    o("WAWebBackendApi").frontendFireAndForget("refreshBroadcastCampaignState", {
                        broadcastJids: []
                    });
                    o("WAWebBackendApi").frontendFireAndForget("syncBroadcastInsightsToCollection", {
                        upserts,
                        removedCampaignIds
                    });
                }
                return f;
            });
            function r(e) {
                return t.apply(this, arguments);
            }
            return r;
        })();
        return r;
    })(o("WAWebSyncdAction").AccountSyncdActionBase);
    const m = new d;
    l.default = m;
}, 98);