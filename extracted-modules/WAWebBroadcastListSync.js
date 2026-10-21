__d("WAWebBroadcastListSync", [
    "Promise",
    "WALogger",
    "WAWebAudienceExpressionTypes",
    "WAWebBizBroadcastProListUtils",
    "WAWebBroadcastListStorageUtils",
    "WAWebProtobufsServerSync.pb",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdConst",
    "WAWebSyncdIndexUtils",
    "WAWebUserPrefsHistorySync",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = ((t)=>{
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
            return o("WAWebSyncdConst").Actions.BusinessBroadcastList;
        };
        r_prototype.applyMutations = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                const r = this;
                let a = 0;
                const i = yield (s || (s = n("Promise"))).all(t.map((()=>{
                    const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                        try {
                            const t = e.indexParts;
                            const n = t[1];
                            if (!n) {
                                return r.malformedActionIndex();
                            }
                            e: {
                                const i = e;
                                if ((typeof i === "object" && i !== null || typeof i === "function") && i.operation === "set" && "value" in i) {
                                    const l = i.value;
                                    const s = l.businessBroadcastListAction;
                                    if (!s) {
                                        a++;
                                        return o("WAWebSyncdIndexUtils").malformedActionValue(r.collectionName);
                                    }
                                    const { audienceExpression, customAudienceFbid, labelIds, listName, participants } = s;
                                    const _ = customAudienceFbid?.trim();
                                    const f = _ != null && _.length > 0 ? _ : undefined;
                                    const g = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow().toString();
                                    const h = (participants ?? []).filter((e)=>e.lidJid !== g);
                                    const y = audienceExpression != null ? o("WAWebAudienceExpressionTypes").parseAudienceExpressionJson(audienceExpression) : null;
                                    const audienceExpression_1 = y ?? ((labelIds ?? []).length > 0 ? o("WAWebAudienceExpressionTypes").createLabelPredicateExpression(labelIds ?? []) : o("WAWebAudienceExpressionTypes").createExplicitExpression(h.map((e)=>e.lidJid)));
                                    yield o("WAWebBroadcastListStorageUtils").updateBroadcastListStorage({
                                        audienceExpression: audienceExpression_1,
                                        customAudienceFbid: f,
                                        id: n,
                                        isBizBroadcastPro: o("WAWebBizBroadcastProListUtils").isBizBroadcastProList(f),
                                        listName: listName ?? "",
                                        shouldInsertInitialSystemMessages: o("WAWebUserPrefsHistorySync").getInitialHistorySyncComplete()
                                    });
                                    return {
                                        actionState: o("WAWebSyncdConst").SyncActionState.Success
                                    };
                                    break e;
                                }
                                if ((typeof i === "object" && i !== null || typeof i === "function") && i.operation === "remove") {
                                    yield o("WAWebBroadcastListStorageUtils").removeBroadcastListStorage(n);
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
                if (a > 0) {
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "broadcast list sync: ",
                        " malformed mutations"
                    ])), a);
                }
                return i;
            });
            function r(e) {
                return t.apply(this, arguments);
            }
            return r;
        })();
        r_prototype.getBroadcastListMutation = function({ customAudienceFbid, expression, id, listName, participants, timestamp }) {
            const s = {
                businessBroadcastListAction: babelHelpers.extends({}, customAudienceFbid != null ? {
                    customAudienceFbid
                } : {}, {
                    participants,
                    listName,
                    labelIds: [],
                    audienceExpression: o("WAWebAudienceExpressionTypes").serializeAudienceExpression(expression)
                })
            };
            return o("WAWebSyncdActionUtils").buildPendingMutation({
                action: this.getAction(),
                indexArgs: [
                    id
                ],
                collection: this.collectionName,
                value: s,
                version: this.getVersion(),
                operation: o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.SET,
                timestamp
            });
        };
        r_prototype.getDeleteBroadcastListMutation = function(t, n) {
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
    const c = new u;
    l.default = c;
}, 98);