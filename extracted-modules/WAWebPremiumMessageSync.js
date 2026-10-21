__d("WAWebPremiumMessageSync", [
    "WAWebPremiumMessageCollection",
    "WAWebPremiumMessageSchema",
    "WAWebSyncdAction",
    "WAWebSyncdConst",
    "WAWebSyncdIndexUtils",
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
            return o("WAWebSyncdConst").Actions.MarketingMessage;
        };
        t_prototype.applyMutations = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = this;
                const n = [];
                let r = 0;
                let a = 0;
                let i = 0;
                const l = e.map((e)=>{
                    try {
                        const l = e.indexParts;
                        const s = l[1];
                        if (!s) {
                            return t.malformedActionIndex();
                        }
                        if (e.operation === "set") {
                            const u = e.value.marketingMessageAction;
                            if (!u) {
                                r++;
                                return o("WAWebSyncdIndexUtils").malformedActionValue(t.collectionName);
                            }
                            const { isDeleted, mediaId, message, name, type } = u;
                            if (type == null) {
                                a++;
                                return o("WAWebSyncdIndexUtils").malformedActionValue(t.collectionName);
                            }
                            n.push({
                                id: s,
                                name,
                                type,
                                isDeleted,
                                message,
                                mediaId,
                                sentMessageIds: new Set
                            });
                            return {
                                actionState: o("WAWebSyncdConst").SyncActionState.Success
                            };
                        }
                        i++;
                        return {
                            actionState: o("WAWebSyncdConst").SyncActionState.Unsupported
                        };
                    } catch (e) {
                        return {
                            actionState: o("WAWebSyncdConst").SyncActionState.Failed
                        };
                    }
                });
                r > 0;
                a > 0;
                i > 0;
                yield o("WAWebPremiumMessageSchema").getPremiumMessageTable().bulkCreateOrMerge(n);
                o("WAWebPremiumMessageCollection").PremiumMessageCollection.add(n.map((e)=>babelHelpers.extends({}, e)));
                return l;
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