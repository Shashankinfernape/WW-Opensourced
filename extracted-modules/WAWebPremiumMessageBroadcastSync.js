__d("WAWebPremiumMessageBroadcastSync", [
    "WAWebPremiumMessageAddSendAction",
    "WAWebPremiumMessageCollection",
    "WAWebSyncdAction",
    "WAWebSyncdConst",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.collectionName = o("WAWebSyncdConst").CollectionName.Regular;
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.getVersion = function() {
            return 7;
        };
        t_prototype.getAction = function() {
            return o("WAWebSyncdConst").Actions.MarketingMessageBroadcast;
        };
        t_prototype.applyMutations = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = this;
                const n = [];
                let a = 0;
                const i = e.map((e)=>{
                    try {
                        const r = e.indexParts;
                        const premiumMessageId = r[1];
                        const messageId = r[2];
                        if (!premiumMessageId || !messageId) {
                            return t.malformedActionIndex();
                        }
                        if (e.operation === "set") {
                            if (o("WAWebPremiumMessageCollection").PremiumMessageCollection.find(premiumMessageId) == null) {
                                return {
                                    actionState: o("WAWebSyncdConst").SyncActionState.Orphan
                                };
                            }
                            n.push({
                                messageId,
                                premiumMessageId
                            });
                            return {
                                actionState: o("WAWebSyncdConst").SyncActionState.Success
                            };
                        }
                        a++;
                        return {
                            actionState: o("WAWebSyncdConst").SyncActionState.Unsupported
                        };
                    } catch (e) {
                        return {
                            actionState: o("WAWebSyncdConst").SyncActionState.Failed
                        };
                    }
                });
                a > 0;
                yield r("WAWebPremiumMessageAddSendAction")(n);
                return i;
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        return t;
    })(o("WAWebSyncdAction").AccountSyncdActionBase);
    const s = new e;
    l.default = s;
}, 98);